webpackJsonp([19],{"/9V0":function(a,l,t){"use strict";function e(a){t("TMZO")}var r=t("e8tO"),o=t("us//"),s=t("VU/8"),i=e,n=s(r.a,o.a,i,null,null);l.a=n.exports},GSnC:function(a,l,t){"use strict";var e=t("/9V0");l.a={components:{vTitle:e.a},data:function(){return{radio1:1,radio2:2,radio3:2,radio4:1,radio5:2,radio6:1,radio7:2,radio8:1,radio9:2,radio10:2,radio11:1,radio12:1}},methods:{showAll:function(){for(var a=1;a<13;a++)this["radio"+a]=2},hideAll:function(){for(var a=1;a<13;a++)this["radio"+a]=1},setSave:function(){}}}},On6C:function(a,l,t){"use strict";var e=function(){var a=this,l=a.$createElement,t=a._self._c||l;return t("div",{},[t("v-title",{attrs:{title:"上架设置"}}),a._v(" "),t("el-row",[t("el-col",{attrs:{span:24}},[t("div",{staticClass:"bg-purple h-purple"},[t("h2",[a._v("设置各型号版本显示状态(全局)")])])]),a._v(" "),t("el-col",{attrs:{span:1}},[a._v(" ")]),a._v(" "),t("el-col",{attrs:{span:23}},[t("label",{staticClass:"label-item",attrs:{for:""}},[a._v("资讯列表页来源：")]),a._v(" "),t("el-radio-group",{model:{value:a.radio1,callback:function(l){a.radio1=l},expression:"radio1"}},[t("el-radio",{attrs:{label:1}},[a._v("隐藏")]),a._v(" "),t("el-radio",{attrs:{label:2}},[a._v("显示")])],1)],1),a._v(" "),t("el-col",{attrs:{span:24}},[t("div",{staticClass:"bg-purple h-purple"},[t("h2",[a._v("设置登录页显示状态")])])]),a._v(" "),t("el-col",{attrs:{span:1}},[a._v(" ")]),a._v(" "),t("el-col",{attrs:{span:23}},[t("label",{staticClass:"label-item",attrs:{for:""}},[a._v("新浪微博登录：")]),a._v(" "),t("el-radio-group",{model:{value:a.radio2,callback:function(l){a.radio2=l},expression:"radio2"}},[t("el-radio",{attrs:{label:1}},[a._v("隐藏")]),a._v(" "),t("el-radio",{attrs:{label:2}},[a._v("显示")])],1)],1),a._v(" "),t("el-col",{attrs:{span:1}},[a._v(" ")]),a._v(" "),t("el-col",{attrs:{span:23}},[t("label",{staticClass:"label-item",attrs:{for:""}},[a._v("QQ登录：")]),a._v(" "),t("el-radio-group",{model:{value:a.radio3,callback:function(l){a.radio3=l},expression:"radio3"}},[t("el-radio",{attrs:{label:1}},[a._v("隐藏")]),a._v(" "),t("el-radio",{attrs:{label:2}},[a._v("显示")])],1)],1),a._v(" "),t("el-col",{attrs:{span:1}},[a._v(" ")]),a._v(" "),t("el-col",{attrs:{span:23}},[t("label",{staticClass:"label-item",attrs:{for:""}},[a._v("微信登录：")]),a._v(" "),t("el-radio-group",{model:{value:a.radio4,callback:function(l){a.radio4=l},expression:"radio4"}},[t("el-radio",{attrs:{label:1}},[a._v("隐藏")]),a._v(" "),t("el-radio",{attrs:{label:2}},[a._v("显示")])],1)],1),a._v(" "),t("el-col",{attrs:{span:24}},[t("div",{staticClass:"bg-purple h-purple"},[t("h2",[a._v("设置会员中心显示状态")])])]),a._v(" "),t("el-col",{attrs:{span:1}},[a._v(" ")]),a._v(" "),t("el-col",{attrs:{span:23}},[t("label",{staticClass:"label-item",attrs:{for:""}},[a._v("个人信息：")]),a._v(" "),t("el-radio-group",{model:{value:a.radio5,callback:function(l){a.radio5=l},expression:"radio5"}},[t("el-radio",{attrs:{label:1}},[a._v("隐藏")]),a._v(" "),t("el-radio",{attrs:{label:2}},[a._v("显示")])],1)],1),a._v(" "),t("el-col",{attrs:{span:1}},[a._v(" ")]),a._v(" "),t("el-col",{attrs:{span:23}},[t("label",{staticClass:"label-item",attrs:{for:""}},[a._v("设置：")]),a._v(" "),t("el-radio-group",{model:{value:a.radio6,callback:function(l){a.radio6=l},expression:"radio6"}},[t("el-radio",{attrs:{label:1}},[a._v("隐藏")]),a._v(" "),t("el-radio",{attrs:{label:2}},[a._v("显示")])],1)],1),a._v(" "),t("el-col",{attrs:{span:1}},[a._v(" ")]),a._v(" "),t("el-col",{attrs:{span:23}},[t("label",{staticClass:"label-item",attrs:{for:""}},[a._v("声音：")]),a._v(" "),t("el-radio-group",{model:{value:a.radio7,callback:function(l){a.radio7=l},expression:"radio7"}},[t("el-radio",{attrs:{label:1}},[a._v("隐藏")]),a._v(" "),t("el-radio",{attrs:{label:2}},[a._v("显示")])],1)],1),a._v(" "),t("el-col",{attrs:{span:1}},[a._v(" ")]),a._v(" "),t("el-col",{attrs:{span:23}},[t("label",{staticClass:"label-item",attrs:{for:""}},[a._v("评分：")]),a._v(" "),t("el-radio-group",{model:{value:a.radio8,callback:function(l){a.radio8=l},expression:"radio8"}},[t("el-radio",{attrs:{label:1}},[a._v("隐藏")]),a._v(" "),t("el-radio",{attrs:{label:2}},[a._v("显示")])],1)],1),a._v(" "),t("el-col",{attrs:{span:1}},[a._v(" ")]),a._v(" "),t("el-col",{attrs:{span:23}},[t("label",{staticClass:"label-item",attrs:{for:""}},[a._v("新版本检测：")]),a._v(" "),t("el-radio-group",{model:{value:a.radio9,callback:function(l){a.radio9=l},expression:"radio9"}},[t("el-radio",{attrs:{label:1}},[a._v("隐藏")]),a._v(" "),t("el-radio",{attrs:{label:2}},[a._v("显示")])],1)],1),a._v(" "),t("el-col",{attrs:{span:1}},[a._v(" ")]),a._v(" "),t("el-col",{attrs:{span:23}},[t("label",{staticClass:"label-item",attrs:{for:""}},[a._v("安全中心：")]),a._v(" "),t("el-radio-group",{model:{value:a.radio10,callback:function(l){a.radio10=l},expression:"radio10"}},[t("el-radio",{attrs:{label:1}},[a._v("隐藏")]),a._v(" "),t("el-radio",{attrs:{label:2}},[a._v("显示")])],1)],1),a._v(" "),t("el-col",{attrs:{span:1}},[a._v(" ")]),a._v(" "),t("el-col",{attrs:{span:23}},[t("label",{staticClass:"label-item",attrs:{for:""}},[a._v("清除缓存：")]),a._v(" "),t("el-radio-group",{model:{value:a.radio11,callback:function(l){a.radio11=l},expression:"radio11"}},[t("el-radio",{attrs:{label:1}},[a._v("隐藏")]),a._v(" "),t("el-radio",{attrs:{label:2}},[a._v("显示")])],1)],1),a._v(" "),t("el-col",{attrs:{span:1}},[a._v(" ")]),a._v(" "),t("el-col",{attrs:{span:23}},[t("label",{staticClass:"label-item",attrs:{for:""}},[a._v("关于我们：")]),a._v(" "),t("el-radio-group",{model:{value:a.radio12,callback:function(l){a.radio12=l},expression:"radio12"}},[t("el-radio",{attrs:{label:1}},[a._v("隐藏")]),a._v(" "),t("el-radio",{attrs:{label:2}},[a._v("显示")])],1)],1),a._v(" "),t("el-col",{attrs:{span:1}},[a._v(" ")]),a._v(" "),t("el-col",{attrs:{span:23}},[t("el-button",{attrs:{type:"primary"},on:{click:a.showAll}},[a._v("全部显示")]),a._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:a.hideAll}},[a._v("全部隐藏")]),a._v(" "),t("el-button",{attrs:{type:"primary"},on:{cilck:a.setSave}},[a._v("保存设置")])],1)],1)],1)},r=[],o={render:e,staticRenderFns:r};l.a=o},TMZO:function(a,l,t){var e=t("mEI9");"string"==typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);t("rjj0")("2dae145c",e,!0)},aECU:function(a,l,t){"use strict";function e(a){t("hK+b")}Object.defineProperty(l,"__esModule",{value:!0});var r=t("GSnC"),o=t("On6C"),s=t("VU/8"),i=e,n=s(r.a,o.a,i,null,null);l.default=n.exports},e8tO:function(a,l,t){"use strict";l.a={props:["title"]}},"hK+b":function(a,l,t){var e=t("nX/i");"string"==typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);t("rjj0")("ccbcf708",e,!0)},mEI9:function(a,l,t){l=a.exports=t("FZ+f")(!0),l.push([a.i,".title{height:50px}hr{margin-top:6px;border:1px solid #d9d9d9}","",{version:3,sources:["F:/vue_plat_manage/src/components/common/Title.vue"],names:[],mappings:"AACA,OACE,WAAa,CACd,AACD,GACE,eAAgB,AAChB,wBAA0B,CAC3B",file:"Title.vue",sourcesContent:["\n.title {\n  height: 50px;\n}\nhr {\n  margin-top: 6px;\n  border: 1px solid #d9d9d9;\n}\n"],sourceRoot:""}])},"nX/i":function(a,l,t){l=a.exports=t("FZ+f")(!0),l.push([a.i,".el-col{margin:10px 0}.bg-purple{background-color:#ccc;border-radius:5px}.h-purple{padding:0 10px;height:45px;line-height:45px}.label-item{display:inline-block;width:100px}","",{version:3,sources:["F:/vue_plat_manage/src/components/page/advance/setground.vue"],names:[],mappings:"AACA,QACE,aAAe,CAChB,AACD,WACE,sBAAuB,AACvB,iBAAmB,CACpB,AACD,UACE,eAAgB,AAChB,YAAa,AACb,gBAAkB,CACnB,AACD,YACE,qBAAsB,AACtB,WAAa,CACd",file:"setground.vue",sourcesContent:["\n.el-col {\n  margin: 10px 0;\n}\n.bg-purple {\n  background-color: #ccc;\n  border-radius: 5px;\n}\n.h-purple {\n  padding: 0 10px;\n  height: 45px;\n  line-height: 45px;\n}\n.label-item {\n  display: inline-block;\n  width: 100px;\n}\n"],sourceRoot:""}])},"us//":function(a,l,t){"use strict";var e=function(){var a=this,l=a.$createElement,t=a._self._c||l;return t("div",{staticClass:"title"},[t("h3",[a._v(a._s(a.title))]),a._v(" "),t("hr")])},r=[],o={render:e,staticRenderFns:r};l.a=o}});
//# sourceMappingURL=19.8089a4cb7d970ac569ff.js.map