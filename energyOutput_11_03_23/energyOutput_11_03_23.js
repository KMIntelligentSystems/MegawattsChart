import { LightningElement, wire } from 'lwc';
import { gql, graphql } from 'lightning/uiGraphQLApi';
import { subscribe, MessageContext, publish } from "lightning/messageService";
import  ENERGYMWDATA_SELECTED_CHANNEL from '@salesforce/messageChannel/EnergyMWData_Selected__c';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


function MWDataClass(Id,Name,Type,MW_1,MW_2,MW_3,MW_4,MW_5,MW_6,MW_7,MW_8,MW_9,MW_10,MW_11,MW_12,MW_13,MW_14,MW_15,MW_16,MW_17,MW_18,MW_19,MW_20,MW_21,MW_22,MW_23,MW_24,MW_25,MW_26,MW_27,MW_28,MW_29,MW_30,MW_31,MW_32,MW_33,MW_34,MW_35,MW_36,MW_37,MW_38,MW_39,MW_40,MW_41,MW_42,MW_43,MW_44,MW_45,MW_46,MW_47,MW_48,MW_49,MW_50,MW_51,MW_52,MW_53,MW_54,MW_55,MW_56,MW_57,MW_58,MW_59,MW_60,MW_61,MW_62,MW_63,MW_64,MW_65,MW_66,MW_67,MW_68,MW_69,MW_70,MW_71,MW_72,MW_73,MW_74,MW_75,MW_76,MW_77,MW_78,MW_79,MW_80,MW_81,MW_82,MW_83,MW_84,MW_85,MW_86,MW_87,MW_88,MW_89,MW_90,MW_91,MW_92,MW_93,MW_94,MW_95,MW_96,MW_97,MW_98,MW_99,MW_100,MW_101,MW_102,MW_103,MW_104,MW_105,MW_106,MW_107,MW_108,MW_109,MW_110,MW_111,MW_112,MW_113,MW_114,MW_115,MW_116,MW_117,MW_118,MW_119,MW_120,MW_121,MW_122,MW_123,MW_124,MW_125,MW_126,MW_127,MW_128,MW_129,MW_130,MW_131,MW_132,MW_133,MW_134,MW_135,MW_136,MW_137,MW_138,MW_139,MW_140,MW_141,MW_142,MW_143,MW_144,MW_146,MW_147,MW_148,MW_149,MW_150,MW_151,MW_152,MW_153,MW_154,MW_155,MW_156,MW_157,MW_158,MW_159,MW_160,MW_161,MW_162,MW_163,MW_164,MW_165,MW_166,MW_167,MW_168,MW_169,MW_170,MW_171,MW_172,MW_173,MW_174,MW_175,MW_176,MW_177,MW_178,MW_179,MW_180,MW_181,MW_182,MW_183,MW_184,MW_185,MW_186,MW_187,MW_188,MW_189,MW_190,MW_191,MW_192,MW_193,MW_194,MW_195,MW_196,MW_197,MW_198,MW_199,MW_200,MW_201,MW_202,MW_203,MW_204,MW_205,MW_206,MW_207,MW_208,MW_209,MW_210,MW_211,MW_212,MW_213,MW_214,MW_215,MW_216,MW_217,MW_218,MW_219,MW_220,MW_221,MW_222,MW_223,MW_224,MW_225,MW_226,MW_227,MW_228,MW_229,MW_230,MW_231,MW_232,MW_233,MW_234,MW_235,MW_236,MW_237,MW_238,MW_239,MW_240,MW_241,MW_242,MW_243,MW_244,MW_245,MW_246,MW_247,MW_248,MW_249,MW_250,MW_251,MW_252,MW_253,MW_254,MW_255,MW_256,MW_257,MW_258,MW_259,MW_260,MW_261,MW_262,MW_263,MW_264,MW_265,MW_266,MW_267,MW_268,MW_269,MW_270,MW_271,MW_272,MW_273,MW_274,MW_275,MW_276,MW_277,MW_278,MW_279,MW_280,MW_281,MW_282,MW_283,MW_284,MW_285,MW_286,MW_287,MW_288)
{
this.Id = Id;this.Name = Name;this.Type = Type; this.MW_1 = MW_1;this.MW_2 = MW_2;this.MW_3 = MW_3;this.MW_4 = MW_4;this.MW_5 = MW_5;this.MW_6 = MW_6;this.MW_7 = MW_7;this.MW_8 = MW_8;this.MW_9 = MW_9;this.MW_10 = MW_10;this.MW_11 = MW_11;this.MW_12 = MW_12;this.MW_13 = MW_13;this.MW_14 = MW_14;this.MW_15 = MW_15;this.MW_16 = MW_16;
this.MW_17 = MW_17;this.MW_18 = MW_18;this.MW_19 = MW_19;this.MW_20 = MW_20;this.MW_21 = MW_21;this.MW_22 = MW_22;this.MW_23 = MW_23;this.MW_24 = MW_24;
this.MW_25 = MW_25;this.MW_26 = MW_26;this.MW_27 = MW_27;this.MW_28 = MW_28;this.MW_29 = MW_29;this.MW_30 = MW_30;this.MW_31 = MW_31;
this.MW_32 = MW_32;this.MW_33 = MW_33;this.MW_34 = MW_34;this.MW_35 = MW_35;this.MW_36 = MW_36;this.MW_37 = MW_37;this.MW_38 = MW_38;
this.MW_39 = MW_39;this.MW_40 = MW_40;this.MW_41 = MW_41;this.MW_42 = MW_42;this.MW_43 = MW_43;this.MW_44 = MW_44;this.MW_45 = MW_45;
this.MW_46 = MW_46;this.MW_47 = MW_47;this.MW_48 = MW_48;this.MW_49 = MW_49;this.MW_50 = MW_50;this.MW_51 = MW_51;this.MW_52 = MW_52;
this.MW_53 = MW_53;this.MW_54 = MW_54;this.MW_55 = MW_55;this.MW_56 = MW_56;this.MW_57 = MW_57;this.MW_58 = MW_58;this.MW_59 = MW_59;
this.MW_60 = MW_60;this.MW_61 = MW_61;this.MW_62 = MW_62;this.MW_63 = MW_63;this.MW_64 = MW_64;this.MW_65 = MW_65;this.MW_66 = MW_66;
this.MW_67 = MW_67;this.MW_68 = MW_68;this.MW_69 = MW_69;this.MW_70 = MW_70;this.MW_71 = MW_71;this.MW_72 = MW_72;this.MW_73 = MW_73;
this.MW_74 = MW_74;this.MW_75 = MW_75;this.MW_76 = MW_76;this.MW_77 = MW_77;this.MW_78 = MW_78;this.MW_79 = MW_79;this.MW_80 = MW_80;
this.MW_81 = MW_81;this.MW_82 = MW_82;this.MW_83 = MW_83;this.MW_84 = MW_84;this.MW_85 = MW_85;this.MW_86 = MW_86;this.MW_87 = MW_87;
this.MW_88 = MW_88;this.MW_89 = MW_89;this.MW_90 = MW_90;this.MW_91 = MW_91;this.MW_92 = MW_92;this.MW_93 = MW_93;this.MW_94 = MW_94;
this.MW_95 = MW_95;this.MW_96 = MW_96;this.MW_97 = MW_97;this.MW_98 = MW_98;this.MW_99 = MW_99;this.MW_100 = MW_100;this.MW_101 = MW_101;
this.MW_102 = MW_102;this.MW_103 = MW_103;this.MW_104 = MW_104;this.MW_105 = MW_105;this.MW_106 = MW_106;this.MW_107 = MW_107;this.MW_108 = MW_108;
this.MW_109 = MW_109;this.MW_110 = MW_110;this.MW_111 = MW_111;this.MW_112 = MW_112;this.MW_113 = MW_113;this.MW_114 = MW_114;this.MW_115 = MW_115;
this.MW_116 = MW_116;this.MW_117 = MW_117;this.MW_118 = MW_118;this.MW_119 = MW_119;this.MW_120 = MW_120;this.MW_121 = MW_121;this.MW_122 = MW_122;
this.MW_123 = MW_123;this.MW_124 = MW_124;this.MW_125 = MW_125;this.MW_126 = MW_126;this.MW_127 = MW_127;this.MW_128 = MW_128;this.MW_129 = MW_129;
this.MW_130 = MW_130;this.MW_131 = MW_131;this.MW_132 = MW_132;this.MW_133 = MW_133;this.MW_134 = MW_134;this.MW_135 = MW_135;this.MW_136 = MW_136;
this.MW_137 = MW_137;this.MW_138 = MW_138;this.MW_139 = MW_139;this.MW_140 = MW_140;this.MW_141 = MW_141;this.MW_142 = MW_142;this.MW_143 = MW_143;
this.MW_144 = MW_144;this.MW_146 = MW_146;this.MW_147 = MW_147;this.MW_148 = MW_148;this.MW_149 = MW_149;this.MW_150 = MW_150;
this.MW_151 = MW_151;this.MW_152 = MW_152;this.MW_153 = MW_153;this.MW_154 = MW_154;this.MW_155 = MW_155;this.MW_156 = MW_156;this.MW_157 = MW_157;
this.MW_158 = MW_158;this.MW_159 = MW_159;this.MW_160 = MW_160;this.MW_161 = MW_161;this.MW_162 = MW_162;this.MW_163 = MW_163;this.MW_164 = MW_164;
this.MW_165 = MW_165;this.MW_166 = MW_166;this.MW_167 = MW_167;this.MW_168 = MW_168;this.MW_169 = MW_169;this.MW_170 = MW_170;this.MW_171 = MW_171;
this.MW_172 = MW_172;this.MW_173 = MW_173;this.MW_174 = MW_174;this.MW_175 = MW_175;this.MW_176 = MW_176;this.MW_177 = MW_177;this.MW_178 = MW_178;
this.MW_179 = MW_179;this.MW_180 = MW_180;this.MW_181 = MW_181;this.MW_182 = MW_182;this.MW_183 = MW_183;this.MW_184 = MW_184;this.MW_185 = MW_185;
this.MW_186 = MW_186;this.MW_187 = MW_187;this.MW_188 = MW_188;this.MW_189 = MW_189;this.MW_190 = MW_190;this.MW_191 = MW_191;this.MW_192 = MW_192;
this.MW_193 = MW_193;this.MW_194 = MW_194;this.MW_195 = MW_195;this.MW_196 = MW_196;this.MW_197 = MW_197;this.MW_198 = MW_198;this.MW_199 = MW_199;
this.MW_200 = MW_200;this.MW_201 = MW_201;this.MW_202 = MW_202;this.MW_203 = MW_203;this.MW_204 = MW_204;this.MW_205 = MW_205;this.MW_206 = MW_206;
this.MW_207 = MW_207;this.MW_208 = MW_208;this.MW_209 = MW_209;this.MW_210 = MW_210;this.MW_211 = MW_211;this.MW_212 = MW_212;this.MW_213 = MW_213;
this.MW_214 = MW_214;this.MW_215 = MW_215;this.MW_216 = MW_216;this.MW_217 = MW_217;this.MW_218 = MW_218;this.MW_219 = MW_219;this.MW_220 = MW_220;
this.MW_221 = MW_221;this.MW_222 = MW_222;this.MW_223 = MW_223;this.MW_224 = MW_224;this.MW_225 = MW_225;this.MW_226 = MW_226;this.MW_227 = MW_227;
this.MW_228 = MW_228;this.MW_229 = MW_229;this.MW_230 = MW_230;this.MW_231 = MW_231;this.MW_232 = MW_232;this.MW_233 = MW_233;this.MW_234 = MW_234;
this.MW_235 = MW_235;this.MW_236 = MW_236;this.MW_237 = MW_237;this.MW_238 = MW_238;this.MW_239 = MW_239;this.MW_240 = MW_240;this.MW_241 = MW_241;
this.MW_242 = MW_242;this.MW_243 = MW_243;this.MW_244 = MW_244;this.MW_245 = MW_245;this.MW_246 = MW_246;this.MW_247 = MW_247;this.MW_248 = MW_248;
this.MW_249 = MW_249;this.MW_250 = MW_250;this.MW_251 = MW_251;this.MW_252 = MW_252;this.MW_253 = MW_253;this.MW_254 = MW_254;this.MW_255 = MW_255;
this.MW_256 = MW_256;this.MW_257 = MW_257;this.MW_258 = MW_258;this.MW_259 = MW_259;this.MW_260 = MW_260;this.MW_261 = MW_261;this.MW_262 = MW_262;
this.MW_263 = MW_263;this.MW_264 = MW_264;this.MW_265 = MW_265;this.MW_266 = MW_266;this.MW_267 = MW_267;this.MW_268 = MW_268;this.MW_269 = MW_269;
this.MW_270 = MW_270;this.MW_271 = MW_271;this.MW_272 = MW_272;this.MW_273 = MW_273;this.MW_274 = MW_274;this.MW_275 = MW_275;this.MW_276 = MW_276;
this.MW_277 = MW_277;this.MW_278 = MW_278;this.MW_279 = MW_279;this.MW_280 = MW_280;this.MW_281 = MW_281;this.MW_282 = MW_282;this.MW_283 = MW_283;
this.MW_284 = MW_284;this.MW_285 = MW_285;this.MW_286 = MW_286;this.MW_287 = MW_287;this.MW_288 = MW_288;
};

export default class EnergyOutput_11_03_23 extends LightningElement {

    energyMWData = [];
    after;// "djE6MA==" "djE6OQ==";
    @wire(MessageContext)
    messageContext;

    @wire(graphql, {
        query: gql`
                query MWs {
                uiapi{
                    query {
                        EnergyOutput_11_03_23__c{
                            edges {
                                node {
                                    Id
                                    Name {
                                        value
                                    }
                                    Type__c {
                                        value
                                    }
                                    MW_1__c  { value }
                                    MW_2__c  { value }
                                    MW_3__c  { value }
                                    MW_4__c  { value }
                                    MW_5__c  { value }
                                    MW_6__c  { value }
                                    MW_7__c  { value }
                                    MW_8__c  { value }
                                    MW_9__c  { value }
                                    MW_10__c  { value }
                                    MW_11__c  { value }
                                    MW_12__c  { value }
                                    MW_13__c  { value }
                                    MW_14__c  { value }
                                    MW_15__c  { value }
                                    MW_16__c  { value }
                                    MW_17__c  { value }
                                    MW_18__c  { value }
                                    MW_19__c  { value }
                                    MW_20__c  { value }
                                    MW_21__c  { value }
                                    MW_22__c  { value }
                                    MW_23__c  { value }
                                    MW_24__c  { value }
                                    MW_25__c  { value }
                                    MW_26__c  { value }
                                    MW_27__c  { value }
                                    MW_28__c  { value }
                                    MW_29__c  { value }
                                    MW_30__c  { value }
                                    MW_31__c  { value }
                                    MW_32__c  { value }
                                    MW_33__c  { value }
                                    MW_34__c  { value }
                                    MW_35__c  { value }
                                    MW_36__c  { value }
                                    MW_37__c  { value }
                                    MW_38__c  { value }
                                    MW_39__c  { value }
                                    MW_40__c  { value }
                                    MW_40__c  { value }
                                    MW_41__c  { value }
                                    MW_42__c  { value }
                                    MW_43__c  { value }
                                    MW_44__c  { value }
                                    MW_46__c  { value }
                                    MW_47__c  { value }
                                    MW_48__c  { value }
                                    MW_49__c  { value }
                                    MW_50__c  { value }
                                    MW_51__c  { value }
                                    MW_52__c  { value }
                                    MW_53__c  { value }
                                    MW_54__c  { value }
                                    MW_55__c  { value }
                                    MW_56__c  { value }
                                    MW_57__c  { value }
                                    MW_58__c  { value }
                                    MW_59__c  { value }
                                    MW_60__c  { value }
                                    MW_61__c  { value }
                                    MW_62__c  { value }
                                    MW_63__c  { value }
                                    MW_64__c  { value }
                                    MW_65__c  { value }
                                    MW_66__c  { value }
                                    MW_67__c  { value }
                                    MW_68__c  { value }
                                    MW_69__c  { value }
                                    MW_70__c  { value }
                                    MW_71__c  { value }
                                    MW_72__c  { value }
                                    MW_73__c  { value }
                                    MW_74__c  { value }
                                    MW_75__c  { value }
                                    MW_76__c  { value }
                                    MW_77__c  { value }
                                    MW_78__c  { value }
                                    MW_79__c  { value }
                                    MW_80__c  { value }
                                    MW_81__c  { value }
                                    MW_82__c  { value }
                                    MW_83__c  { value }
                                    MW_84__c  { value }
                                    MW_85__c  { value }
                                    MW_86__c  { value }
                                    MW_87__c  { value }
                                    MW_88__c  { value }
                                    MW_89__c  { value }
                                    MW_90__c  { value }
                                    MW_91__c  { value }
                                    MW_92__c  { value }
                                    MW_93__c  { value }
                                    MW_94__c  { value }
                                    MW_95__c  { value }
                                    MW_96__c  { value }
                                    MW_97__c  { value }
                                    MW_98__c  { value }
                                    MW_99__c  { value }
                                    MW_100__c  { value }
                                    MW_100__c  { value }
                                    MW_101__c  { value }
                                    MW_102__c  { value }
                                    MW_103__c  { value }
                                    MW_104__c  { value }
                                    MW_105__c  { value }
                                    MW_106__c  { value }
                                    MW_107__c  { value }
                                    MW_108__c  { value }
                                    MW_109__c  { value }
                                    MW_110__c  { value }
                                    MW_111__c  { value }
                                    MW_112__c  { value }
                                    MW_113__c  { value }
                                    MW_114__c  { value }
                                    MW_115__c  { value }
                                    MW_116__c  { value }
                                    MW_117__c  { value }
                                    MW_118__c  { value }
                                    MW_119__c  { value }
                                    MW_120__c  { value }
                                    MW_121__c  { value }
                                    MW_122__c  { value }
                                    MW_123__c  { value }
                                    MW_124__c  { value }
                                    MW_125__c  { value }
                                    MW_126__c  { value }
                                    MW_127__c  { value }
                                    MW_128__c  { value }
                                    MW_129__c  { value }
                                    MW_130__c  { value }
                                    MW_131__c  { value }
                                    MW_132__c  { value }
                                    MW_133__c  { value }
                                    MW_134__c  { value }
                                    MW_135__c  { value }
                                    MW_136__c  { value }
                                    MW_137__c  { value }
                                    MW_138__c  { value }
                                    MW_139__c  { value }
                                    MW_140__c  { value }
                                    MW_141__c  { value }
                                    MW_142__c  { value }
                                    MW_143__c  { value }
                                    MW_144__c  { value }
                                    MW_146__c  { value }
                                    MW_147__c  { value }
                                    MW_148__c  { value }
                                    MW_149__c  { value }
                                    MW_150__c  { value }
                                    MW_151__c  { value }
                                    MW_152__c  { value }
                                    MW_153__c  { value }
                                    MW_154__c  { value }
                                    MW_155__c  { value }
                                    MW_156__c  { value }
                                    MW_157__c  { value }
                                    MW_158__c  { value }
                                    MW_159__c  { value }
                                    MW_160__c  { value }
                                    MW_161__c  { value }
                                    MW_162__c  { value }
                                    MW_163__c  { value }
                                    MW_164__c  { value }
                                    MW_165__c  { value }
                                    MW_166__c  { value }
                                    MW_167__c  { value }
                                    MW_168__c  { value }
                                    MW_169__c  { value }
                                    MW_170__c  { value }
                                    MW_171__c  { value }
                                    MW_172__c  { value }
                                    MW_173__c  { value }
                                    MW_174__c  { value }
                                    MW_175__c  { value }
                                    MW_176__c  { value }
                                    MW_177__c  { value }
                                    MW_178__c  { value }
                                    MW_179__c  { value }
                                    MW_180__c  { value }
                                    MW_181__c  { value }
                                    MW_182__c  { value }
                                    MW_183__c  { value }
                                    MW_184__c  { value }
                                    MW_185__c  { value }
                                    MW_186__c  { value }
                                    MW_187__c  { value }
                                    MW_188__c  { value }
                                    MW_189__c  { value }
                                    MW_190__c  { value }
                                    MW_191__c  { value }
                                    MW_192__c  { value }
                                    MW_193__c  { value }
                                    MW_194__c  { value }
                                    MW_195__c  { value }
                                    MW_196__c  { value }
                                    MW_197__c  { value }
                                    MW_198__c  { value }
                                    MW_199__c  { value }
                                    MW_200__c  { value }
                                    MW_201__c  { value }
                                    MW_202__c  { value }
                                    MW_203__c  { value }
                                    MW_204__c  { value }
                                    MW_205__c  { value }
                                    MW_206__c  { value }
                                    MW_207__c  { value }
                                    MW_208__c  { value }
                                    MW_209__c  { value }
                                    MW_210__c  { value }
                                    MW_211__c  { value }
                                    MW_212__c  { value }
                                    MW_213__c  { value }
                                    MW_214__c  { value }
                                    MW_215__c  { value }
                                    MW_216__c  { value }
                                    MW_217__c  { value }
                                    MW_218__c  { value }
                                    MW_219__c  { value }
                                    MW_220__c  { value }
                                    MW_221__c  { value }
                                    MW_222__c  { value }
                                    MW_223__c  { value }
                                    MW_224__c  { value }
                                    MW_225__c  { value }
                                    MW_226__c  { value }
                                    MW_227__c  { value }
                                    MW_228__c  { value }
                                    MW_229__c  { value }
                                    MW_230__c  { value }
                                    MW_231__c  { value }
                                    MW_232__c  { value }
                                    MW_233__c  { value }
                                    MW_234__c  { value }
                                    MW_235__c  { value }
                                    MW_236__c  { value }
                                    MW_237__c  { value }
                                    MW_238__c  { value }
                                    MW_239__c  { value }
                                    MW_240__c  { value }
                                    MW_241__c  { value }
                                    MW_242__c  { value }
                                    MW_243__c  { value }
                                    MW_244__c  { value }
                                    MW_245__c  { value }
                                    MW_246__c  { value }
                                    MW_247__c  { value }
                                    MW_248__c  { value }
                                    MW_249__c  { value }
                                    MW_250__c  { value }
                                    MW_251__c  { value }
                                    MW_252__c  { value }
                                    MW_253__c  { value }
                                    MW_254__c  { value }
                                    MW_255__c  { value }
                                    MW_256__c  { value }
                                    MW_257__c  { value }
                                    MW_258__c  { value }
                                    MW_259__c  { value }
                                    MW_260__c  { value }
                                    MW_261__c  { value }
                                    MW_262__c  { value }
                                    MW_263__c  { value }
                                    MW_264__c  { value }
                                    MW_265__c  { value }
                                    MW_266__c  { value }
                                    MW_267__c  { value }
                                    MW_268__c  { value }
                                    MW_269__c  { value }
                                    MW_270__c  { value }
                                    MW_271__c  { value }
                                    MW_272__c  { value }
                                    MW_273__c  { value }
                                    MW_274__c  { value }
                                    MW_275__c  { value }
                                    MW_276__c  { value }
                                    MW_277__c  { value }
                                    MW_278__c  { value }
                                    MW_279__c  { value }
                                    MW_280__c  { value }
                                    MW_281__c  { value }
                                    MW_282__c  { value }
                                    MW_283__c  { value }
                                    MW_284__c  { value }
                                    MW_285__c  { value }
                                    MW_286__c  { value }
                                    MW_287__c  { value }
                                    MW_288__c  { value } 
                                  
                                }
                            }
                            totalCount
                            pageInfo {
                                endCursor
                                startCursor
                                hasNextPage
                                hasPreviousPage
                            }
                        }
                       
                    }
                }
            }
        `
    })
    graphql;

    @wire(graphql, {
        query: gql`
                query MWs {
                uiapi{
                    query {
                        EnergyOutput_11_03_23__c(first:10, after:"djE6OQ==") {
                            edges {
                                node {
                                    Id
                                    Name {
                                        value
                                    }
                                    Type__c {
                                        value
                                    }
                                    MW_1__c  { value }
                                    MW_2__c  { value }
                                    MW_3__c  { value }
                                    MW_4__c  { value }
                                    MW_5__c  { value }
                                    MW_6__c  { value }
                                    MW_7__c  { value }
                                    MW_8__c  { value }
                                    MW_9__c  { value }
                                    MW_10__c  { value }
                                    MW_11__c  { value }
                                    MW_12__c  { value }
                                    MW_13__c  { value }
                                    MW_14__c  { value }
                                    MW_15__c  { value }
                                    MW_16__c  { value }
                                    MW_17__c  { value }
                                    MW_18__c  { value }
                                    MW_19__c  { value }
                                    MW_20__c  { value }
                                    MW_21__c  { value }
                                    MW_22__c  { value }
                                    MW_23__c  { value }
                                    MW_24__c  { value }
                                    MW_25__c  { value }
                                    MW_26__c  { value }
                                    MW_27__c  { value }
                                    MW_28__c  { value }
                                    MW_29__c  { value }
                                    MW_30__c  { value }
                                    MW_31__c  { value }
                                    MW_32__c  { value }
                                    MW_33__c  { value }
                                    MW_34__c  { value }
                                    MW_35__c  { value }
                                    MW_36__c  { value }
                                    MW_37__c  { value }
                                    MW_38__c  { value }
                                    MW_39__c  { value }
                                    MW_40__c  { value }
                                    MW_40__c  { value }
                                    MW_41__c  { value }
                                    MW_42__c  { value }
                                    MW_43__c  { value }
                                    MW_44__c  { value }
                                    MW_46__c  { value }
                                    MW_47__c  { value }
                                    MW_48__c  { value }
                                    MW_49__c  { value }
                                    MW_50__c  { value }
                                    MW_51__c  { value }
                                    MW_52__c  { value }
                                    MW_53__c  { value }
                                    MW_54__c  { value }
                                    MW_55__c  { value }
                                    MW_56__c  { value }
                                    MW_57__c  { value }
                                    MW_58__c  { value }
                                    MW_59__c  { value }
                                    MW_60__c  { value }
                                    MW_61__c  { value }
                                    MW_62__c  { value }
                                    MW_63__c  { value }
                                    MW_64__c  { value }
                                    MW_65__c  { value }
                                    MW_66__c  { value }
                                    MW_67__c  { value }
                                    MW_68__c  { value }
                                    MW_69__c  { value }
                                    MW_70__c  { value }
                                    MW_71__c  { value }
                                    MW_72__c  { value }
                                    MW_73__c  { value }
                                    MW_74__c  { value }
                                    MW_75__c  { value }
                                    MW_76__c  { value }
                                    MW_77__c  { value }
                                    MW_78__c  { value }
                                    MW_79__c  { value }
                                    MW_80__c  { value }
                                    MW_81__c  { value }
                                    MW_82__c  { value }
                                    MW_83__c  { value }
                                    MW_84__c  { value }
                                    MW_85__c  { value }
                                    MW_86__c  { value }
                                    MW_87__c  { value }
                                    MW_88__c  { value }
                                    MW_89__c  { value }
                                    MW_90__c  { value }
                                    MW_91__c  { value }
                                    MW_92__c  { value }
                                    MW_93__c  { value }
                                    MW_94__c  { value }
                                    MW_95__c  { value }
                                    MW_96__c  { value }
                                    MW_97__c  { value }
                                    MW_98__c  { value }
                                    MW_99__c  { value }
                                    MW_100__c  { value }
                                    MW_100__c  { value }
                                    MW_101__c  { value }
                                    MW_102__c  { value }
                                    MW_103__c  { value }
                                    MW_104__c  { value }
                                    MW_105__c  { value }
                                    MW_106__c  { value }
                                    MW_107__c  { value }
                                    MW_108__c  { value }
                                    MW_109__c  { value }
                                    MW_110__c  { value }
                                    MW_111__c  { value }
                                    MW_112__c  { value }
                                    MW_113__c  { value }
                                    MW_114__c  { value }
                                    MW_115__c  { value }
                                    MW_116__c  { value }
                                    MW_117__c  { value }
                                    MW_118__c  { value }
                                    MW_119__c  { value }
                                    MW_120__c  { value }
                                    MW_121__c  { value }
                                    MW_122__c  { value }
                                    MW_123__c  { value }
                                    MW_124__c  { value }
                                    MW_125__c  { value }
                                    MW_126__c  { value }
                                    MW_127__c  { value }
                                    MW_128__c  { value }
                                    MW_129__c  { value }
                                    MW_130__c  { value }
                                    MW_131__c  { value }
                                    MW_132__c  { value }
                                    MW_133__c  { value }
                                    MW_134__c  { value }
                                    MW_135__c  { value }
                                    MW_136__c  { value }
                                    MW_137__c  { value }
                                    MW_138__c  { value }
                                    MW_139__c  { value }
                                    MW_140__c  { value }
                                    MW_141__c  { value }
                                    MW_142__c  { value }
                                    MW_143__c  { value }
                                    MW_144__c  { value }
                                    MW_146__c  { value }
                                    MW_147__c  { value }
                                    MW_148__c  { value }
                                    MW_149__c  { value }
                                    MW_150__c  { value }
                                    MW_151__c  { value }
                                    MW_152__c  { value }
                                    MW_153__c  { value }
                                    MW_154__c  { value }
                                    MW_155__c  { value }
                                    MW_156__c  { value }
                                    MW_157__c  { value }
                                    MW_158__c  { value }
                                    MW_159__c  { value }
                                    MW_160__c  { value }
                                    MW_161__c  { value }
                                    MW_162__c  { value }
                                    MW_163__c  { value }
                                    MW_164__c  { value }
                                    MW_165__c  { value }
                                    MW_166__c  { value }
                                    MW_167__c  { value }
                                    MW_168__c  { value }
                                    MW_169__c  { value }
                                    MW_170__c  { value }
                                    MW_171__c  { value }
                                    MW_172__c  { value }
                                    MW_173__c  { value }
                                    MW_174__c  { value }
                                    MW_175__c  { value }
                                    MW_176__c  { value }
                                    MW_177__c  { value }
                                    MW_178__c  { value }
                                    MW_179__c  { value }
                                    MW_180__c  { value }
                                    MW_181__c  { value }
                                    MW_182__c  { value }
                                    MW_183__c  { value }
                                    MW_184__c  { value }
                                    MW_185__c  { value }
                                    MW_186__c  { value }
                                    MW_187__c  { value }
                                    MW_188__c  { value }
                                    MW_189__c  { value }
                                    MW_190__c  { value }
                                    MW_191__c  { value }
                                    MW_192__c  { value }
                                    MW_193__c  { value }
                                    MW_194__c  { value }
                                    MW_195__c  { value }
                                    MW_196__c  { value }
                                    MW_197__c  { value }
                                    MW_198__c  { value }
                                    MW_199__c  { value }
                                    MW_200__c  { value }
                                    MW_201__c  { value }
                                    MW_202__c  { value }
                                    MW_203__c  { value }
                                    MW_204__c  { value }
                                    MW_205__c  { value }
                                    MW_206__c  { value }
                                    MW_207__c  { value }
                                    MW_208__c  { value }
                                    MW_209__c  { value }
                                    MW_210__c  { value }
                                    MW_211__c  { value }
                                    MW_212__c  { value }
                                    MW_213__c  { value }
                                    MW_214__c  { value }
                                    MW_215__c  { value }
                                    MW_216__c  { value }
                                    MW_217__c  { value }
                                    MW_218__c  { value }
                                    MW_219__c  { value }
                                    MW_220__c  { value }
                                    MW_221__c  { value }
                                    MW_222__c  { value }
                                    MW_223__c  { value }
                                    MW_224__c  { value }
                                    MW_225__c  { value }
                                    MW_226__c  { value }
                                    MW_227__c  { value }
                                    MW_228__c  { value }
                                    MW_229__c  { value }
                                    MW_230__c  { value }
                                    MW_231__c  { value }
                                    MW_232__c  { value }
                                    MW_233__c  { value }
                                    MW_234__c  { value }
                                    MW_235__c  { value }
                                    MW_236__c  { value }
                                    MW_237__c  { value }
                                    MW_238__c  { value }
                                    MW_239__c  { value }
                                    MW_240__c  { value }
                                    MW_241__c  { value }
                                    MW_242__c  { value }
                                    MW_243__c  { value }
                                    MW_244__c  { value }
                                    MW_245__c  { value }
                                    MW_246__c  { value }
                                    MW_247__c  { value }
                                    MW_248__c  { value }
                                    MW_249__c  { value }
                                    MW_250__c  { value }
                                    MW_251__c  { value }
                                    MW_252__c  { value }
                                    MW_253__c  { value }
                                    MW_254__c  { value }
                                    MW_255__c  { value }
                                    MW_256__c  { value }
                                    MW_257__c  { value }
                                    MW_258__c  { value }
                                    MW_259__c  { value }
                                    MW_260__c  { value }
                                    MW_261__c  { value }
                                    MW_262__c  { value }
                                    MW_263__c  { value }
                                    MW_264__c  { value }
                                    MW_265__c  { value }
                                    MW_266__c  { value }
                                    MW_267__c  { value }
                                    MW_268__c  { value }
                                    MW_269__c  { value }
                                    MW_270__c  { value }
                                    MW_271__c  { value }
                                    MW_272__c  { value }
                                    MW_273__c  { value }
                                    MW_274__c  { value }
                                    MW_275__c  { value }
                                    MW_276__c  { value }
                                    MW_277__c  { value }
                                    MW_278__c  { value }
                                    MW_279__c  { value }
                                    MW_280__c  { value }
                                    MW_281__c  { value }
                                    MW_282__c  { value }
                                    MW_283__c  { value }
                                    MW_284__c  { value }
                                    MW_285__c  { value }
                                    MW_286__c  { value }
                                    MW_287__c  { value }
                                    MW_288__c  { value } 
                                  
                                }
                            }
                            totalCount
                            pageInfo {
                                endCursor
                                startCursor
                                hasNextPage
                                hasPreviousPage
                            }
                        }
                       
                    }
                }
            }
        `
    })
    graphqlNext;

    get variables() {
        return {
            first: 10,
            after: this.after
        };
    }
    
    get MWData() {
        var e = '';
        
      //  if(this.graphql.data?.uiapi.query.EnergyOutput_11_03_23__c.edges){
           let x = this.graphql.data?.uiapi.query.EnergyOutput_11_03_23__c.edges.map((edge) => ({
                Id: edge.node.Id,
                Name: edge.node.Name.value,
                Type: edge.node.Type__c.value,
                MW_1:  edge.node.MW_1__c.value,
                MW_2:  edge.node.MW_2__c.value,
                MW_3:  edge.node.MW_3__c.value,
                MW_4:  edge.node.MW_4__c.value,
                MW_5:  edge.node.MW_5__c.value,
                MW_6:  edge.node.MW_6__c.value,
                MW_7:  edge.node.MW_7__c.value,
                MW_8:  edge.node.MW_8__c.value,
                MW_9:  edge.node.MW_9__c.value,
                MW_10:  edge.node.MW_10__c.value,
                MW_11:  edge.node.MW_11__c.value,
                MW_12:  edge.node.MW_12__c.value,
                MW_13:  edge.node.MW_13__c.value,
                MW_14:  edge.node.MW_14__c.value,
                MW_15:  edge.node.MW_15__c.value,
                MW_16:  edge.node.MW_16__c.value,
                MW_17:  edge.node.MW_17__c.value,
                MW_18:  edge.node.MW_18__c.value,
                MW_19:  edge.node.MW_19__c.value,
                MW_20:  edge.node.MW_20__c.value,
                MW_21:  edge.node.MW_21__c.value,
                MW_22:  edge.node.MW_22__c.value,
                MW_23:  edge.node.MW_23__c.value,
                MW_24:  edge.node.MW_24__c.value,
                MW_25:  edge.node.MW_25__c.value,
                MW_26:  edge.node.MW_26__c.value,
                MW_27:  edge.node.MW_27__c.value,
                MW_28:  edge.node.MW_28__c.value,
                MW_29:  edge.node.MW_29__c.value,
                MW_30:  edge.node.MW_30__c.value,
                MW_31:  edge.node.MW_31__c.value,
                MW_32:  edge.node.MW_32__c.value,
                MW_33:  edge.node.MW_33__c.value,
                MW_34:  edge.node.MW_34__c.value,
                MW_35:  edge.node.MW_35__c.value,
                MW_36:  edge.node.MW_36__c.value,
                MW_37:  edge.node.MW_37__c.value,
                MW_38:  edge.node.MW_38__c.value,
                MW_39:  edge.node.MW_39__c.value,
                MW_40:  edge.node.MW_40__c.value,
                MW_41:  edge.node.MW_41__c.value,
                MW_42:  edge.node.MW_42__c.value,
                MW_43:  edge.node.MW_43__c.value,
                MW_44:  edge.node.MW_44__c.value,
                MW_46:  edge.node.MW_46__c.value,
                MW_47:  edge.node.MW_47__c.value,
                MW_48:  edge.node.MW_48__c.value,
                MW_49:  edge.node.MW_49__c.value,
                MW_50:  edge.node.MW_50__c.value,
                MW_51:  edge.node.MW_51__c.value,
                MW_52:  edge.node.MW_52__c.value,
                MW_53:  edge.node.MW_53__c.value,
                MW_54:  edge.node.MW_54__c.value,
                MW_55:  edge.node.MW_55__c.value,
                MW_56:  edge.node.MW_56__c.value,
                MW_57:  edge.node.MW_57__c.value,
                MW_58:  edge.node.MW_58__c.value,
                MW_59:  edge.node.MW_59__c.value,
                MW_60:  edge.node.MW_60__c.value,
                MW_61:  edge.node.MW_61__c.value,
                MW_62:  edge.node.MW_62__c.value,
                MW_63:  edge.node.MW_63__c.value,
                MW_64:  edge.node.MW_64__c.value,
                MW_65:  edge.node.MW_65__c.value,
                MW_66:  edge.node.MW_66__c.value,
                MW_67:  edge.node.MW_67__c.value,
                MW_68:  edge.node.MW_68__c.value,
                MW_69:  edge.node.MW_69__c.value,
                MW_70:  edge.node.MW_70__c.value,
                MW_71:  edge.node.MW_71__c.value,
                MW_72:  edge.node.MW_72__c.value,
                MW_73:  edge.node.MW_73__c.value,
                MW_74:  edge.node.MW_74__c.value,
                MW_75:  edge.node.MW_75__c.value,
                MW_76:  edge.node.MW_76__c.value,
                MW_77:  edge.node.MW_77__c.value,
                MW_78:  edge.node.MW_78__c.value,
                MW_79:  edge.node.MW_79__c.value,
                MW_80:  edge.node.MW_80__c.value,
                MW_81:  edge.node.MW_81__c.value,
                MW_82:  edge.node.MW_82__c.value,
                MW_83:  edge.node.MW_83__c.value,
                MW_84:  edge.node.MW_84__c.value,
                MW_85:  edge.node.MW_85__c.value,
                MW_86:  edge.node.MW_86__c.value,
                MW_87:  edge.node.MW_87__c.value,
                MW_88:  edge.node.MW_88__c.value,
                MW_89:  edge.node.MW_89__c.value,
                MW_90:  edge.node.MW_90__c.value,
                MW_91:  edge.node.MW_91__c.value,
                MW_92:  edge.node.MW_92__c.value,
                MW_93:  edge.node.MW_93__c.value,
                MW_94:  edge.node.MW_94__c.value,
                MW_95:  edge.node.MW_95__c.value,
                MW_96:  edge.node.MW_96__c.value,
                MW_97:  edge.node.MW_97__c.value,
                MW_98:  edge.node.MW_98__c.value,
                MW_99:  edge.node.MW_99__c.value,
                MW_100:  edge.node.MW_100__c.value,
                MW_101:  edge.node.MW_101__c.value,
                MW_102:  edge.node.MW_102__c.value,
                MW_103:  edge.node.MW_103__c.value,
                MW_104:  edge.node.MW_104__c.value,
                MW_105:  edge.node.MW_105__c.value,
                MW_106:  edge.node.MW_106__c.value,
                MW_107:  edge.node.MW_107__c.value,
                MW_108:  edge.node.MW_108__c.value,
                MW_109:  edge.node.MW_109__c.value,
                MW_110:  edge.node.MW_110__c.value,
                MW_111:  edge.node.MW_111__c.value,
                MW_112:  edge.node.MW_112__c.value,
                MW_113:  edge.node.MW_113__c.value,
                MW_114:  edge.node.MW_114__c.value,
                MW_115:  edge.node.MW_115__c.value,
                MW_116:  edge.node.MW_116__c.value,
                MW_117:  edge.node.MW_117__c.value,
                MW_118:  edge.node.MW_118__c.value,
                MW_119:  edge.node.MW_119__c.value,
                MW_120:  edge.node.MW_120__c.value,
                MW_121:  edge.node.MW_121__c.value,
                MW_122:  edge.node.MW_122__c.value,
                MW_123:  edge.node.MW_123__c.value,
                MW_124:  edge.node.MW_124__c.value,
                MW_125:  edge.node.MW_125__c.value,
                MW_126:  edge.node.MW_126__c.value,
                MW_127:  edge.node.MW_127__c.value,
                MW_128:  edge.node.MW_128__c.value,
                MW_129:  edge.node.MW_129__c.value,
                MW_130:  edge.node.MW_130__c.value,
                MW_131:  edge.node.MW_131__c.value,
                MW_132:  edge.node.MW_132__c.value,
                MW_133:  edge.node.MW_133__c.value,
                MW_134:  edge.node.MW_134__c.value,
                MW_135:  edge.node.MW_135__c.value,
                MW_136:  edge.node.MW_136__c.value,
                MW_137:  edge.node.MW_137__c.value,
                MW_138:  edge.node.MW_138__c.value,
                MW_139:  edge.node.MW_139__c.value,
                MW_140:  edge.node.MW_140__c.value,
                MW_141:  edge.node.MW_141__c.value,
                MW_142:  edge.node.MW_142__c.value,
                MW_143:  edge.node.MW_143__c.value,
                MW_144:  edge.node.MW_144__c.value,
                MW_146:  edge.node.MW_146__c.value,
                MW_147:  edge.node.MW_147__c.value,
                MW_148:  edge.node.MW_148__c.value,
                MW_149:  edge.node.MW_149__c.value,
                MW_150:  edge.node.MW_150__c.value,
                MW_150:  edge.node.MW_150__c.value,
                MW_151:  edge.node.MW_151__c.value,
                MW_152:  edge.node.MW_152__c.value,
                MW_153:  edge.node.MW_153__c.value,
                MW_154:  edge.node.MW_154__c.value,
                MW_155:  edge.node.MW_155__c.value,
                MW_156:  edge.node.MW_156__c.value,
                MW_157:  edge.node.MW_157__c.value,
                MW_158:  edge.node.MW_158__c.value,
                MW_159:  edge.node.MW_159__c.value,
                MW_160:  edge.node.MW_160__c.value,
                MW_161:  edge.node.MW_161__c.value,
                MW_162:  edge.node.MW_162__c.value,
                MW_163:  edge.node.MW_163__c.value,
                MW_164:  edge.node.MW_164__c.value,
                MW_165:  edge.node.MW_165__c.value,
                MW_166:  edge.node.MW_166__c.value,
                MW_167:  edge.node.MW_167__c.value,
                MW_168:  edge.node.MW_168__c.value,
                MW_169:  edge.node.MW_169__c.value,
                MW_170:  edge.node.MW_170__c.value,
                MW_171:  edge.node.MW_171__c.value,
                MW_172:  edge.node.MW_172__c.value,
                MW_173:  edge.node.MW_173__c.value,
                MW_174:  edge.node.MW_174__c.value,
                MW_175:  edge.node.MW_175__c.value,
                MW_176:  edge.node.MW_176__c.value,
                MW_177:  edge.node.MW_177__c.value,
                MW_178:  edge.node.MW_178__c.value,
                MW_179:  edge.node.MW_179__c.value,
                MW_180:  edge.node.MW_180__c.value,
                MW_181:  edge.node.MW_181__c.value,
                MW_182:  edge.node.MW_182__c.value,
                MW_183:  edge.node.MW_183__c.value,
                MW_184:  edge.node.MW_184__c.value,
                MW_185:  edge.node.MW_185__c.value,
                MW_186:  edge.node.MW_186__c.value,
                MW_187:  edge.node.MW_187__c.value,
                MW_188:  edge.node.MW_188__c.value,
                MW_189:  edge.node.MW_189__c.value,
                MW_190:  edge.node.MW_190__c.value,
                MW_191:  edge.node.MW_191__c.value,
                MW_192:  edge.node.MW_192__c.value,
                MW_193:  edge.node.MW_193__c.value,
                MW_194:  edge.node.MW_194__c.value,
                MW_195:  edge.node.MW_195__c.value,
                MW_196:  edge.node.MW_196__c.value,
                MW_197:  edge.node.MW_197__c.value,
                MW_198:  edge.node.MW_198__c.value,
                MW_199:  edge.node.MW_199__c.value,
                MW_200:  edge.node.MW_200__c.value,
                MW_201:  edge.node.MW_201__c.value,
                MW_202:  edge.node.MW_202__c.value,
                MW_203:  edge.node.MW_203__c.value,
                MW_204:  edge.node.MW_204__c.value,
                MW_205:  edge.node.MW_205__c.value,
                MW_206:  edge.node.MW_206__c.value,
                MW_207:  edge.node.MW_207__c.value,
                MW_208:  edge.node.MW_208__c.value,
                MW_209:  edge.node.MW_209__c.value,
                MW_210:  edge.node.MW_210__c.value,
                MW_211:  edge.node.MW_211__c.value,
                MW_212:  edge.node.MW_212__c.value,
                MW_213:  edge.node.MW_213__c.value,
                MW_214:  edge.node.MW_214__c.value,
                MW_215:  edge.node.MW_215__c.value,
                MW_216:  edge.node.MW_216__c.value,
                MW_217:  edge.node.MW_217__c.value,
                MW_218:  edge.node.MW_218__c.value,
                MW_219:  edge.node.MW_219__c.value,
                MW_220:  edge.node.MW_220__c.value,
                MW_221:  edge.node.MW_221__c.value,
                MW_222:  edge.node.MW_222__c.value,
                MW_223:  edge.node.MW_223__c.value,
                MW_224:  edge.node.MW_224__c.value,
                MW_225:  edge.node.MW_225__c.value,
                MW_226:  edge.node.MW_226__c.value,
                MW_227:  edge.node.MW_227__c.value,
                MW_228:  edge.node.MW_228__c.value,
                MW_229:  edge.node.MW_229__c.value,
                MW_230:  edge.node.MW_230__c.value,
                MW_231:  edge.node.MW_231__c.value,
                MW_232:  edge.node.MW_232__c.value,
                MW_233:  edge.node.MW_233__c.value,
                MW_234:  edge.node.MW_234__c.value,
                MW_235:  edge.node.MW_235__c.value,
                MW_236:  edge.node.MW_236__c.value,
                MW_237:  edge.node.MW_237__c.value,
                MW_238:  edge.node.MW_238__c.value,
                MW_239:  edge.node.MW_239__c.value,
                MW_240:  edge.node.MW_240__c.value,
                MW_241:  edge.node.MW_241__c.value,
                MW_242:  edge.node.MW_242__c.value,
                MW_243:  edge.node.MW_243__c.value,
                MW_244:  edge.node.MW_244__c.value,
                MW_245:  edge.node.MW_245__c.value,
                MW_246:  edge.node.MW_246__c.value,
                MW_247:  edge.node.MW_247__c.value,
                MW_248:  edge.node.MW_248__c.value,
                MW_249:  edge.node.MW_249__c.value,
                MW_250:  edge.node.MW_250__c.value,
                MW_251:  edge.node.MW_251__c.value,
                MW_252:  edge.node.MW_252__c.value,
                MW_253:  edge.node.MW_253__c.value,
                MW_254:  edge.node.MW_254__c.value,
                MW_255:  edge.node.MW_255__c.value,
                MW_256:  edge.node.MW_256__c.value,
                MW_257:  edge.node.MW_257__c.value,
                MW_258:  edge.node.MW_258__c.value,
                MW_259:  edge.node.MW_259__c.value,
                MW_260:  edge.node.MW_260__c.value,
                MW_261:  edge.node.MW_261__c.value,
                MW_262:  edge.node.MW_262__c.value,
                MW_263:  edge.node.MW_263__c.value,
                MW_264:  edge.node.MW_264__c.value,
                MW_265:  edge.node.MW_265__c.value,
                MW_266:  edge.node.MW_266__c.value,
                MW_267:  edge.node.MW_267__c.value,
                MW_268:  edge.node.MW_268__c.value,
                MW_269:  edge.node.MW_269__c.value,
                MW_270:  edge.node.MW_270__c.value,
                MW_271:  edge.node.MW_271__c.value,
                MW_272:  edge.node.MW_272__c.value,
                MW_273:  edge.node.MW_273__c.value,
                MW_274:  edge.node.MW_274__c.value,
                MW_275:  edge.node.MW_275__c.value,
                MW_276:  edge.node.MW_276__c.value,
                MW_277:  edge.node.MW_277__c.value,
                MW_278:  edge.node.MW_278__c.value,
                MW_279:  edge.node.MW_279__c.value,
                MW_280:  edge.node.MW_280__c.value,
                MW_281:  edge.node.MW_281__c.value,
                MW_282:  edge.node.MW_282__c.value,
                MW_283:  edge.node.MW_283__c.value,
                MW_284:  edge.node.MW_284__c.value,
                MW_285:  edge.node.MW_285__c.value,
                MW_286:  edge.node.MW_286__c.value,
                MW_287:  edge.node.MW_287__c.value,
                MW_288:  edge.node.MW_288__c.value

              
            }));


      /* this.graphqlNext.data?.uiapi.query.EnergyOutput_11_03_23__c.edges.map((edge) => ({
                Id: edge.node.Id,
                Name: edge.node.Name.value,
                Type: edge.node.Type__c.value,
                MW_1:  edge.node.MW_1__c.value,
                MW_2:  edge.node.MW_2__c.value,
                MW_3:  edge.node.MW_3__c.value,
                MW_4:  edge.node.MW_4__c.value,
                MW_5:  edge.node.MW_5__c.value,
                MW_6:  edge.node.MW_6__c.value,
                MW_7:  edge.node.MW_7__c.value,
                MW_8:  edge.node.MW_8__c.value,
                MW_9:  edge.node.MW_9__c.value,
                MW_10:  edge.node.MW_10__c.value,
                MW_11:  edge.node.MW_11__c.value,
                MW_12:  edge.node.MW_12__c.value,
                MW_13:  edge.node.MW_13__c.value,
                MW_14:  edge.node.MW_14__c.value,
                MW_15:  edge.node.MW_15__c.value,
                MW_16:  edge.node.MW_16__c.value,
                MW_17:  edge.node.MW_17__c.value,
                MW_18:  edge.node.MW_18__c.value,
                MW_19:  edge.node.MW_19__c.value,
                MW_20:  edge.node.MW_20__c.value,
                MW_21:  edge.node.MW_21__c.value,
                MW_22:  edge.node.MW_22__c.value,
                MW_23:  edge.node.MW_23__c.value,
                MW_24:  edge.node.MW_24__c.value,
                MW_25:  edge.node.MW_25__c.value,
                MW_26:  edge.node.MW_26__c.value,
                MW_27:  edge.node.MW_27__c.value,
                MW_28:  edge.node.MW_28__c.value,
                MW_29:  edge.node.MW_29__c.value,
                MW_30:  edge.node.MW_30__c.value,
                MW_31:  edge.node.MW_31__c.value,
                MW_32:  edge.node.MW_32__c.value,
                MW_33:  edge.node.MW_33__c.value,
                MW_34:  edge.node.MW_34__c.value,
                MW_35:  edge.node.MW_35__c.value,
                MW_36:  edge.node.MW_36__c.value,
                MW_37:  edge.node.MW_37__c.value,
                MW_38:  edge.node.MW_38__c.value,
                MW_39:  edge.node.MW_39__c.value,
                MW_40:  edge.node.MW_40__c.value,
                MW_41:  edge.node.MW_41__c.value,
                MW_42:  edge.node.MW_42__c.value,
                MW_43:  edge.node.MW_43__c.value,
                MW_44:  edge.node.MW_44__c.value,
                MW_46:  edge.node.MW_46__c.value,
                MW_47:  edge.node.MW_47__c.value,
                MW_48:  edge.node.MW_48__c.value,
                MW_49:  edge.node.MW_49__c.value,
                MW_50:  edge.node.MW_50__c.value,
                MW_51:  edge.node.MW_51__c.value,
                MW_52:  edge.node.MW_52__c.value,
                MW_53:  edge.node.MW_53__c.value,
                MW_54:  edge.node.MW_54__c.value,
                MW_55:  edge.node.MW_55__c.value,
                MW_56:  edge.node.MW_56__c.value,
                MW_57:  edge.node.MW_57__c.value,
                MW_58:  edge.node.MW_58__c.value,
                MW_59:  edge.node.MW_59__c.value,
                MW_60:  edge.node.MW_60__c.value,
                MW_61:  edge.node.MW_61__c.value,
                MW_62:  edge.node.MW_62__c.value,
                MW_63:  edge.node.MW_63__c.value,
                MW_64:  edge.node.MW_64__c.value,
                MW_65:  edge.node.MW_65__c.value,
                MW_66:  edge.node.MW_66__c.value,
                MW_67:  edge.node.MW_67__c.value,
                MW_68:  edge.node.MW_68__c.value,
                MW_69:  edge.node.MW_69__c.value,
                MW_70:  edge.node.MW_70__c.value,
                MW_71:  edge.node.MW_71__c.value,
                MW_72:  edge.node.MW_72__c.value,
                MW_73:  edge.node.MW_73__c.value,
                MW_74:  edge.node.MW_74__c.value,
                MW_75:  edge.node.MW_75__c.value,
                MW_76:  edge.node.MW_76__c.value,
                MW_77:  edge.node.MW_77__c.value,
                MW_78:  edge.node.MW_78__c.value,
                MW_79:  edge.node.MW_79__c.value,
                MW_80:  edge.node.MW_80__c.value,
                MW_81:  edge.node.MW_81__c.value,
                MW_82:  edge.node.MW_82__c.value,
                MW_83:  edge.node.MW_83__c.value,
                MW_84:  edge.node.MW_84__c.value,
                MW_85:  edge.node.MW_85__c.value,
                MW_86:  edge.node.MW_86__c.value,
                MW_87:  edge.node.MW_87__c.value,
                MW_88:  edge.node.MW_88__c.value,
                MW_89:  edge.node.MW_89__c.value,
                MW_90:  edge.node.MW_90__c.value,
                MW_91:  edge.node.MW_91__c.value,
                MW_92:  edge.node.MW_92__c.value,
                MW_93:  edge.node.MW_93__c.value,
                MW_94:  edge.node.MW_94__c.value,
                MW_95:  edge.node.MW_95__c.value,
                MW_96:  edge.node.MW_96__c.value,
                MW_97:  edge.node.MW_97__c.value,
                MW_98:  edge.node.MW_98__c.value,
                MW_99:  edge.node.MW_99__c.value,
                MW_100:  edge.node.MW_100__c.value,
                MW_101:  edge.node.MW_101__c.value,
                MW_102:  edge.node.MW_102__c.value,
                MW_103:  edge.node.MW_103__c.value,
                MW_104:  edge.node.MW_104__c.value,
                MW_105:  edge.node.MW_105__c.value,
                MW_106:  edge.node.MW_106__c.value,
                MW_107:  edge.node.MW_107__c.value,
                MW_108:  edge.node.MW_108__c.value,
                MW_109:  edge.node.MW_109__c.value,
                MW_110:  edge.node.MW_110__c.value,
                MW_111:  edge.node.MW_111__c.value,
                MW_112:  edge.node.MW_112__c.value,
                MW_113:  edge.node.MW_113__c.value,
                MW_114:  edge.node.MW_114__c.value,
                MW_115:  edge.node.MW_115__c.value,
                MW_116:  edge.node.MW_116__c.value,
                MW_117:  edge.node.MW_117__c.value,
                MW_118:  edge.node.MW_118__c.value,
                MW_119:  edge.node.MW_119__c.value,
                MW_120:  edge.node.MW_120__c.value,
                MW_121:  edge.node.MW_121__c.value,
                MW_122:  edge.node.MW_122__c.value,
                MW_123:  edge.node.MW_123__c.value,
                MW_124:  edge.node.MW_124__c.value,
                MW_125:  edge.node.MW_125__c.value,
                MW_126:  edge.node.MW_126__c.value,
                MW_127:  edge.node.MW_127__c.value,
                MW_128:  edge.node.MW_128__c.value,
                MW_129:  edge.node.MW_129__c.value,
                MW_130:  edge.node.MW_130__c.value,
                MW_131:  edge.node.MW_131__c.value,
                MW_132:  edge.node.MW_132__c.value,
                MW_133:  edge.node.MW_133__c.value,
                MW_134:  edge.node.MW_134__c.value,
                MW_135:  edge.node.MW_135__c.value,
                MW_136:  edge.node.MW_136__c.value,
                MW_137:  edge.node.MW_137__c.value,
                MW_138:  edge.node.MW_138__c.value,
                MW_139:  edge.node.MW_139__c.value,
                MW_140:  edge.node.MW_140__c.value,
                MW_141:  edge.node.MW_141__c.value,
                MW_142:  edge.node.MW_142__c.value,
                MW_143:  edge.node.MW_143__c.value,
                MW_144:  edge.node.MW_144__c.value,
                MW_146:  edge.node.MW_146__c.value,
                MW_147:  edge.node.MW_147__c.value,
                MW_148:  edge.node.MW_148__c.value,
                MW_149:  edge.node.MW_149__c.value,
                MW_150:  edge.node.MW_150__c.value,
                MW_150:  edge.node.MW_150__c.value,
                MW_151:  edge.node.MW_151__c.value,
                MW_152:  edge.node.MW_152__c.value,
                MW_153:  edge.node.MW_153__c.value,
                MW_154:  edge.node.MW_154__c.value,
                MW_155:  edge.node.MW_155__c.value,
                MW_156:  edge.node.MW_156__c.value,
                MW_157:  edge.node.MW_157__c.value,
                MW_158:  edge.node.MW_158__c.value,
                MW_159:  edge.node.MW_159__c.value,
                MW_160:  edge.node.MW_160__c.value,
                MW_161:  edge.node.MW_161__c.value,
                MW_162:  edge.node.MW_162__c.value,
                MW_163:  edge.node.MW_163__c.value,
                MW_164:  edge.node.MW_164__c.value,
                MW_165:  edge.node.MW_165__c.value,
                MW_166:  edge.node.MW_166__c.value,
                MW_167:  edge.node.MW_167__c.value,
                MW_168:  edge.node.MW_168__c.value,
                MW_169:  edge.node.MW_169__c.value,
                MW_170:  edge.node.MW_170__c.value,
                MW_171:  edge.node.MW_171__c.value,
                MW_172:  edge.node.MW_172__c.value,
                MW_173:  edge.node.MW_173__c.value,
                MW_174:  edge.node.MW_174__c.value,
                MW_175:  edge.node.MW_175__c.value,
                MW_176:  edge.node.MW_176__c.value,
                MW_177:  edge.node.MW_177__c.value,
                MW_178:  edge.node.MW_178__c.value,
                MW_179:  edge.node.MW_179__c.value,
                MW_180:  edge.node.MW_180__c.value,
                MW_181:  edge.node.MW_181__c.value,
                MW_182:  edge.node.MW_182__c.value,
                MW_183:  edge.node.MW_183__c.value,
                MW_184:  edge.node.MW_184__c.value,
                MW_185:  edge.node.MW_185__c.value,
                MW_186:  edge.node.MW_186__c.value,
                MW_187:  edge.node.MW_187__c.value,
                MW_188:  edge.node.MW_188__c.value,
                MW_189:  edge.node.MW_189__c.value,
                MW_190:  edge.node.MW_190__c.value,
                MW_191:  edge.node.MW_191__c.value,
                MW_192:  edge.node.MW_192__c.value,
                MW_193:  edge.node.MW_193__c.value,
                MW_194:  edge.node.MW_194__c.value,
                MW_195:  edge.node.MW_195__c.value,
                MW_196:  edge.node.MW_196__c.value,
                MW_197:  edge.node.MW_197__c.value,
                MW_198:  edge.node.MW_198__c.value,
                MW_199:  edge.node.MW_199__c.value,
                MW_200:  edge.node.MW_200__c.value,
                MW_201:  edge.node.MW_201__c.value,
                MW_202:  edge.node.MW_202__c.value,
                MW_203:  edge.node.MW_203__c.value,
                MW_204:  edge.node.MW_204__c.value,
                MW_205:  edge.node.MW_205__c.value,
                MW_206:  edge.node.MW_206__c.value,
                MW_207:  edge.node.MW_207__c.value,
                MW_208:  edge.node.MW_208__c.value,
                MW_209:  edge.node.MW_209__c.value,
                MW_210:  edge.node.MW_210__c.value,
                MW_211:  edge.node.MW_211__c.value,
                MW_212:  edge.node.MW_212__c.value,
                MW_213:  edge.node.MW_213__c.value,
                MW_214:  edge.node.MW_214__c.value,
                MW_215:  edge.node.MW_215__c.value,
                MW_216:  edge.node.MW_216__c.value,
                MW_217:  edge.node.MW_217__c.value,
                MW_218:  edge.node.MW_218__c.value,
                MW_219:  edge.node.MW_219__c.value,
                MW_220:  edge.node.MW_220__c.value,
                MW_221:  edge.node.MW_221__c.value,
                MW_222:  edge.node.MW_222__c.value,
                MW_223:  edge.node.MW_223__c.value,
                MW_224:  edge.node.MW_224__c.value,
                MW_225:  edge.node.MW_225__c.value,
                MW_226:  edge.node.MW_226__c.value,
                MW_227:  edge.node.MW_227__c.value,
                MW_228:  edge.node.MW_228__c.value,
                MW_229:  edge.node.MW_229__c.value,
                MW_230:  edge.node.MW_230__c.value,
                MW_231:  edge.node.MW_231__c.value,
                MW_232:  edge.node.MW_232__c.value,
                MW_233:  edge.node.MW_233__c.value,
                MW_234:  edge.node.MW_234__c.value,
                MW_235:  edge.node.MW_235__c.value,
                MW_236:  edge.node.MW_236__c.value,
                MW_237:  edge.node.MW_237__c.value,
                MW_238:  edge.node.MW_238__c.value,
                MW_239:  edge.node.MW_239__c.value,
                MW_240:  edge.node.MW_240__c.value,
                MW_241:  edge.node.MW_241__c.value,
                MW_242:  edge.node.MW_242__c.value,
                MW_243:  edge.node.MW_243__c.value,
                MW_244:  edge.node.MW_244__c.value,
                MW_245:  edge.node.MW_245__c.value,
                MW_246:  edge.node.MW_246__c.value,
                MW_247:  edge.node.MW_247__c.value,
                MW_248:  edge.node.MW_248__c.value,
                MW_249:  edge.node.MW_249__c.value,
                MW_250:  edge.node.MW_250__c.value,
                MW_251:  edge.node.MW_251__c.value,
                MW_252:  edge.node.MW_252__c.value,
                MW_253:  edge.node.MW_253__c.value,
                MW_254:  edge.node.MW_254__c.value,
                MW_255:  edge.node.MW_255__c.value,
                MW_256:  edge.node.MW_256__c.value,
                MW_257:  edge.node.MW_257__c.value,
                MW_258:  edge.node.MW_258__c.value,
                MW_259:  edge.node.MW_259__c.value,
                MW_260:  edge.node.MW_260__c.value,
                MW_261:  edge.node.MW_261__c.value,
                MW_262:  edge.node.MW_262__c.value,
                MW_263:  edge.node.MW_263__c.value,
                MW_264:  edge.node.MW_264__c.value,
                MW_265:  edge.node.MW_265__c.value,
                MW_266:  edge.node.MW_266__c.value,
                MW_267:  edge.node.MW_267__c.value,
                MW_268:  edge.node.MW_268__c.value,
                MW_269:  edge.node.MW_269__c.value,
                MW_270:  edge.node.MW_270__c.value,
                MW_271:  edge.node.MW_271__c.value,
                MW_272:  edge.node.MW_272__c.value,
                MW_273:  edge.node.MW_273__c.value,
                MW_274:  edge.node.MW_274__c.value,
                MW_275:  edge.node.MW_275__c.value,
                MW_276:  edge.node.MW_276__c.value,
                MW_277:  edge.node.MW_277__c.value,
                MW_278:  edge.node.MW_278__c.value,
                MW_279:  edge.node.MW_279__c.value,
                MW_280:  edge.node.MW_280__c.value,
                MW_281:  edge.node.MW_281__c.value,
                MW_282:  edge.node.MW_282__c.value,
                MW_283:  edge.node.MW_283__c.value,
                MW_284:  edge.node.MW_284__c.value,
                MW_285:  edge.node.MW_285__c.value,
                MW_286:  edge.node.MW_286__c.value,
                MW_287:  edge.node.MW_287__c.value,
                MW_288:  edge.node.MW_288__c.value

              
            }));*/
            
      //     console.log('next ',next[0].Name)
            console.log('total ', this.graphql.data?.uiapi.query.EnergyOutput_11_03_23__c.totalCount);
            console.log('cuursor ', this.graphql.data?.uiapi.query.EnergyOutput_11_03_23__c.pageInfo.endCursor);
            console.log('start cursor ', this.graphql.data?.uiapi.query.EnergyOutput_11_03_23__c.pageInfo.startCursor);
            var id = '';
            var counter = 0;
            var ar = [];

            x.map(function(row){
                if(id !== row.id){
                    id = row.Id;
                    ar[counter++] = new MWDataClass(row.Id, row.Name, row.Type,row.MW_1,row.MW_2,row.MW_3,row.MW_4,row.MW_5,row.MW_6,row.MW_7,row.MW_8,row.MW_9,row.MW_10,row.MW_11,row.MW_12,row.MW_13,row.MW_14,row.MW_15,row.MW_16,row.MW_17,row.MW_18,row.MW_19,row.MW_20,row.MW_21,row.MW_22,row.MW_23,row.MW_24,row.MW_25,row.MW_26,row.MW_27,row.MW_28,row.MW_29,row.MW_30,row.MW_31,row.MW_32,row.MW_33,row.MW_34,row.MW_35,row.MW_36,row.MW_37,row.MW_38,row.MW_39,row.MW_40,row.MW_41,row.MW_42,row.MW_43,row.MW_44,row.MW_45,row.MW_46,row.MW_47,row.MW_48,row.MW_49,row.MW_50,row.MW_51,row.MW_52,row.MW_53,row.MW_54,row.MW_55,row.MW_56,row.MW_57,row.MW_58,row.MW_59,row.MW_60,row.MW_61,row.MW_62,row.MW_63,row.MW_64,row.MW_65,row.MW_66,row.MW_67,row.MW_68,row.MW_69,row.MW_70,row.MW_71,row.MW_72,row.MW_73,row.MW_74,row.MW_75,row.MW_76,row.MW_77,row.MW_78,row.MW_79,row.MW_80,row.MW_81,row.MW_82,row.MW_83,row.MW_84,row.MW_85,row.MW_86,row.MW_87,row.MW_88,row.MW_89,row.MW_90,row.MW_91,row.MW_92,row.MW_93,row.MW_94,row.MW_95,row.MW_96,row.MW_97,row.MW_98,row.MW_99,row.MW_100,row.MW_101,row.MW_102,row.MW_103,row.MW_104,row.MW_105,row.MW_106,row.MW_107,row.MW_108,row.MW_109,row.MW_110,row.MW_111,row.MW_112,row.MW_113,row.MW_114,row.MW_115,row.MW_116,row.MW_117,row.MW_118,row.MW_119,row.MW_120,row.MW_121,row.MW_122,row.MW_123,row.MW_124,row.MW_125,row.MW_126,row.MW_127,row.MW_128,row.MW_129,row.MW_130,row.MW_131,row.MW_132,row.MW_133,row.MW_134,row.MW_135,row.MW_136,row.MW_137,row.MW_138,row.MW_139,row.MW_140,row.MW_141,row.MW_142,row.MW_143,row.MW_144,row.MW_146,row.MW_147,row.MW_148,row.MW_149,row.MW_150,row.MW_151,row.MW_152,row.MW_153,row.MW_154,row.MW_155,row.MW_156,row.MW_157,row.MW_158,row.MW_159,row.MW_160,row.MW_161,row.MW_162,row.MW_163,row.MW_164,row.MW_165,row.MW_166,row.MW_167,row.MW_168,row.MW_169,row.MW_170,row.MW_171,row.MW_172,row.MW_173,row.MW_174,row.MW_175,row.MW_176,row.MW_177,row.MW_178,row.MW_179,row.MW_180,row.MW_181,row.MW_182,row.MW_183,row.MW_184,row.MW_185,row.MW_186,row.MW_187,row.MW_188,row.MW_189,row.MW_190,row.MW_191,row.MW_192,row.MW_193,row.MW_194,row.MW_195,row.MW_196,row.MW_197,row.MW_198,row.MW_199,row.MW_200,row.MW_201,row.MW_202,row.MW_203,row.MW_204,row.MW_205,row.MW_206,row.MW_207,row.MW_208,row.MW_209,row.MW_210,row.MW_211,row.MW_212,row.MW_213,row.MW_214,row.MW_215,row.MW_216,row.MW_217,row.MW_218,row.MW_219,row.MW_220,row.MW_221,row.MW_222,row.MW_223,row.MW_224,row.MW_225,row.MW_226,row.MW_227,row.MW_228,row.MW_229,row.MW_230,row.MW_231,row.MW_232,row.MW_233,row.MW_234,row.MW_235,row.MW_236,row.MW_237,row.MW_238,row.MW_239,row.MW_240,row.MW_241,row.MW_242,row.MW_243,row.MW_244,row.MW_245,row.MW_246,row.MW_247,row.MW_248,row.MW_249,row.MW_250,row.MW_251,row.MW_252,row.MW_253,row.MW_254,row.MW_255,row.MW_256,row.MW_257,row.MW_258,row.MW_259,row.MW_260,row.MW_261,row.MW_262,row.MW_263,row.MW_264,row.MW_265,row.MW_266,row.MW_267,row.MW_268,row.MW_269,row.MW_270,row.MW_271,row.MW_272,row.MW_273,row.MW_274,row.MW_275,row.MW_276,row.MW_277,row.MW_278,row.MW_279,row.MW_280,row.MW_281,row.MW_282,row.MW_283,row.MW_284,row.MW_285,row.MW_286,row.MW_287,row.MW_288);
                }
            })
console.log('counter ', counter);
            this.energyMWData = ar;

      /*      ar.forEach(function(item){
                console.log('before ', item.MW_286);
                 console.log('item ',item.MW_287);
                 console.log('item 2 ',item.MW_288);
            })*/
          
            try{
                publish(this.messageContext,ENERGYMWDATA_SELECTED_CHANNEL , {data: this.energyMWData});
            } catch (error) {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error loading Energy data',
                    message: error.message,
                    variant: 'error'
                })
            );
        }

        return x;
    }

}