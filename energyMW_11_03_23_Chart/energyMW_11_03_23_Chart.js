import { LightningElement, wire} from 'lwc';
import D3 from '@salesforce/resourceUrl/d3';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
import { subscribe, MessageContext} from 'lightning/messageService';
import  ENERGYMWDATA_SELECTED_CHANNEL from '@salesforce/messageChannel/EnergyMWData_Selected__c';
import  ENERGYMWDATA_RETRIEVED_CHANNEL from '@salesforce/messageChannel/EnergyMWData_Retrieved__c';
//import MyTooltip from '@salesforce/resourceUrl/tooltip';

  function DataItem(time,megawatts) {
    this.time = time;
    this.megawatts = megawatts;
}


export default class EnergyMW_11_03_23_Chart extends LightningElement {
    @wire(MessageContext)
    messageContext;

    messageItemsLength = 0;
    done = false;
    currentTimeInterval = 0; // Initialize with the first time interval

    subscribeToEnergyMWDataChannel() {
        this.subscription = subscribe(
            this.messageContext,
            ENERGYMWDATA_SELECTED_CHANNEL,
            (message) => this.handleEnergyMWDataMessage(message)
        );3
   }

    handleEnergyMWDataMessage(message){
        
     //   console.log('mw', this.mWCompleteArray.length)
        this.messageItemsLength += message.data.length;
        if(this.messageItemsLength >= 20 && !this.done){
           // this.createMWEnergyChart(this.getDataToLoad(message));
           this.createMWEnergyBubbleChart(this.getDataToLoad(message));
            this.done = true;
        }    
    }

    connectedCallback() {
           this.subscribeToEnergyMWDataChannel();
        //   publish(this.messageContext,ENERGYMWDATA_RETRIEVED_CHANNEL , {msg: 'more'});
    }

    async renderedCallback() {
        try {
            await Promise.all([
                loadScript(this, D3 + '/d3.v5.min.js'),
               // loadStyle(this, MyTooltip +  '/energyMW_11_03_23_Chart.css'), 
            ]);
           
         //   this.createMWEnergyChart();
        } catch (error) {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error loading D3',
                    message: error.message,
                    variant: 'error'
                })
            );
        }
    }

    getDataToLoad(message){
        let solar = message.data[13];

       /* message.data.forEach(function(item){
                console.log('item ', item);
        })*/

        var mwData = [];
        for (var key in solar) {
            var value = solar[key];
            if(key.includes("MW_")){
                mwData.push(value);
            }
          }


          var mwResult = [];
          mwData.map(function(row){
            mwResult.push(row);
          })

          var mWCompleteArray = [];
          let i = 0;
          this.generateTimes().forEach(function(time){
            if(mwResult[i] !== 'undefined'){
                let dataItem = new DataItem(time,mwResult[i]); 
                mWCompleteArray.push(dataItem);
                i++;
            }
            if(i == 287){
                return;
            }
          });

           /* mWCompleteArray.forEach(function(item){
                console.log('before ', item);
                 console.log('item ',item.time,item.megawatts);
            })*/
            return mWCompleteArray;
    }

    generateTimes() {
        const times = [];
        const startTime = new Date("2023-03-14T00:00:00"); // Starting time: midnight on March 14, 2023
        const endTime = new Date("2023-03-15T00:00:00"); // End time: midnight on March 15, 2023
      
        let currentTime = startTime;
        while (currentTime < endTime) {
          times.push(this.formatTime(currentTime));
          currentTime.setMinutes(currentTime.getMinutes() + 5); // Increment by 5 minutes
        }
      
        return times;
      }

      
      // Helper function to format time in HH:mm format
      formatTime(date) {
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        return `${hours}:${minutes}`;
      }

    createMWEnergyBubbleChart(originalData){
        //let originalData = data.filter(function(d){ return d.megawatts; });
    
        // Set up a SVG group with margin and dimensions
        const svg = d3.select(this.template.querySelector('d3'))
        .append("svg")
        .attr("width", 800)
        .attr("height", 400);

      //  const tooltip = d3.select("#tooltip");
    
        // Define scales
        const xScale = d3.scaleTime()
            .domain(d3.extent(originalData, d => d3.timeParse("%H:%M")(d.time)))
            .range([0, 750]);
        
        const yScale = d3.scaleLinear()
            .domain(d3.extent(originalData, d => d.megawatts)) //extent returns [min,max] in single pass
            .range([350, 0]);

        const radiusScale = d3.scaleLinear()
            .domain([0, 7.0]) // Megawatt value range
            .range([1, 5]); // Desired range of radii (adjust as needed)

            // Create axes
        const xAxis = d3.axisBottom(xScale);
        const yAxis = d3.axisLeft(yScale);
        
        // Append axes to the SVG
        svg.append("g")
            .attr("transform", "translate(0, 350)")
            .call(xAxis);
        
        svg.append("g")
            .attr("transform", "translate(0, 0)")//was 50
            .call(yAxis);

        var width = 800;
        var height = 400;
       
        const u = svg.selectAll()
                  .data(originalData)
                  .join("circle")
                  .attr("class", "bubble")
                  .attr("r", d => radiusScale(d.megawatts)) // Set radius using radiusScale
                  .attr("cx", d => xScale(d3.timeParse("%H:%M")(d.time)))
                  .attr("cy", d => yScale(d.megawatts))
                  .style("fill","blue")
                  .style("opacity", 0.5)
                  .style("stroke", "black")
                  .style("stroke-width", 1)
               /*   .on("mouseover", function(event, d) {
                    tooltip.html(`MW: ${d.megawatts}`);
                    tooltip.style("left", `${event.pageX + 10}px`);
                    tooltip.style("top", `${event.pageY - 28}px`);
                    tooltip.classed("show", true);
                  })
                  .on("mouseout", function() {
                    tooltip.classed("show", false);
                  });*/
                  // ... (other attributes and event handlers)

               /*  u.transition()
                    .delay(500)
                    .attr("cx", d => xScale(d3.timeParse("%H:%M")(d.time)))
                    .attr("cy", d => yScale(d.megawatts))
                    .style("fill","yellow")
                    .style("opacity", 0.5)
                    .style("stroke", "black")
                    .style("stroke-width", 1)*/

              
            

                
                

            return svg.node();   
    }

 

    ticked(svg, originalData) {
    // Update data with the current time interval's data
    let data = originalData[this.ariaCheckedcurrentTimeInterval];

    const u = svg.selectAll(".bubble")
        .data(data)
        .join("circle")
        .attr("class", "bubble")
        .attr("r", d => radiusScale(d.megawatts))
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        // ... (other attributes and event handlers)

    u.transition()
        .duration(100)
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);

    // Increment the time interval (assuming 288 intervals for a 24-hour period)
    this.currentTimeInterval = (this.currentTimeInterval + 1) % 288;
    }
    

    createMWEnergyChart(originalData){
        // Data preparation
    const data_ = [
        { time: "03.00", megawatts: 0.0 },
        { time: "04.00", megawatts: 0.0 },
        { time: "05.00", megawatts: 1.0 },
        // ...
    ];
 
    

   /* const data = originalData.filter((d, i) => i % 12 === 0);
    for(let i = 0;i < data.length;i++){
        console.log('ex ',data[i].time);
        console.log('ex now ',data[i].megawatts);
    }*/

    const data = originalData;

    // Initialising start and end time 
    const dateStartString = "November 11, 2023 00:00:00";
    const dateEndString = "November 11, 2023 24:00:00";
    var startTime = new Date(dateStartString); 
    var endTime = new Date(dateEndString); 
      
    // Calling the timeMinute function 
    // without step value 
   // const times = d3.timeMinute.range(startTime, endTime, 5);

    // Set up the SVG canvas
    const svg = d3.select(this.template.querySelector('d3'))
        .append("svg")
        .attr("width", 800)
        .attr("height", 400);
    
    // Define scales
    const xScale = d3.scaleTime()
        .domain(d3.extent(data, d => d3.timeParse("%H:%M")(d.time)))
        .range([0, 750]);
    
    const yScale = d3.scaleLinear()
        .domain(d3.extent(data, d => d.megawatts))
        .range([350, 0]);
    
    // Create axes
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);
    
    // Append axes to the SVG
    svg.append("g")
        .attr("transform", "translate(0, 350)")
        .call(xAxis);
    
    svg.append("g")
        .attr("transform", "translate(50, 0)")
        .call(yAxis);
    
    // Plot the data as a line chart
    const line = d3.line()
        .x(d => xScale(d3.timeParse("%H:%M")(d.time)))
        .y(d => yScale(d.megawatts));
    
    svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("d", line);

     return svg.node();
    }
        
   
}
