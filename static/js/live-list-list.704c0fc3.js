(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["live-list-list"],{"0763":function(t,i,e){"use strict";e.r(i);var a=e("a03b"),n=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(i,t,(function(){return a[t]}))}(r);i["default"]=n.a},"1b6f":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{list:[]}},onShow:function(){},onLoad:function(t){this.getlist()},methods:{tolivedesc:function(t){uni.navigateTo({url:"../desc/desc?type=3&playcode="+t})},getlist:function(){var t=this;t.$https.request({url:t.$interfaces.livetvplayerApi,method:"POST",data:{limit:100,page:1}}).then((function(i){0==i.code&&(t.list=i.data.records)}))}}};i.default=a},2067:function(t,i,e){"use strict";var a=e("bcda"),n=e.n(a);n.a},"553b":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,"uni-page-body[data-v-a49ffe42]{background-color:#f6faff;width:100%;height:100%}.content[data-v-a49ffe42]{width:100%;height:100%}.listbox[data-v-a49ffe42]{width:100%;margin:0 auto;background:#fff}.list[data-v-a49ffe42]{width:92%;margin:0 auto ;position:relative}.livetitlebox[data-v-a49ffe42]{width:100%;line-height:%?109?%;display:-webkit-box;display:-webkit-flex;display:flex}.title[data-v-a49ffe42]{width:80%;font-size:%?30?%;font-family:PingFang SC;font-weight:700;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.datetime[data-v-a49ffe42]{width:20%;text-align:right}.liveimg[data-v-a49ffe42]{position:relative}.liveimg uni-image[data-v-a49ffe42]{width:100%;height:%?552?%;border-radius:%?8?%}.tuiguang[data-v-a49ffe42]{width:18%;text-align:center;background:#1a91ff;border-radius:%?35?%;font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#fff;line-height:%?70?%;height:%?70?%;margin-top:%?20?%}.livestatus[data-v-a49ffe42]{font-size:%?30?%;font-family:PingFang SC;font-weight:400;color:#fff;width:%?154?%;height:%?50?%;background:#000;opacity:.5;position:absolute;right:%?20?%;top:%?25?%;line-height:%?50?%;text-align:center;border-radius:%?26?%}.livestatus1[data-v-a49ffe42]{font-size:%?50?%;font-family:PingFang SC;font-weight:400;color:#e1e1e1;width:%?206?%;height:%?206?%;background:#000;opacity:.5;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);line-height:%?206?%;text-align:center;border-radius:50%}body.?%PAGE?%[data-v-a49ffe42]{background-color:#f6faff}",""]),t.exports=i},6385:function(t,i,e){"use strict";e.r(i);var a=e("1b6f"),n=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(i,t,(function(){return a[t]}))}(r);i["default"]=n.a},7510:function(t,i,e){"use strict";e.r(i);var a=e("a01a"),n=e("0763");for(var r in n)"default"!==r&&function(t){e.d(i,t,(function(){return n[t]}))}(r);e("f4d8");var o,s=e("f0c5"),u=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"71495536",null,!1,a["a"],o);i["default"]=u.exports},"92f2":function(t,i,e){var a=e("d572");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("100bd50c",a,!0,{sourceMap:!1,shadowMode:!1})},a01a:function(t,i,e){"use strict";var a,n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"u-gap",style:[t.gapStyle]})},r=[];e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return a}))},a03b:function(t,i,e){"use strict";e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={name:"u-gap",props:{bgColor:{type:String,default:"transparent "},height:{type:[String,Number],default:30},marginTop:{type:[String,Number],default:0},marginBottom:{type:[String,Number],default:0}},computed:{gapStyle:function(){return{backgroundColor:this.bgColor,height:this.height+"rpx",marginTop:this.marginTop+"rpx",marginBottom:this.marginBottom+"rpx"}}}};i.default=a},bcda:function(t,i,e){var a=e("553b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("769e466c",a,!0,{sourceMap:!1,shadowMode:!1})},d572:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/* uni.scss */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */',""]),t.exports=i},d6ce:function(t,i,e){"use strict";e.r(i);var a=e("eced"),n=e("6385");for(var r in n)"default"!==r&&function(t){e.d(i,t,(function(){return n[t]}))}(r);e("2067");var o,s=e("f0c5"),u=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"a49ffe42",null,!1,a["a"],o);i["default"]=u.exports},eced:function(t,i,e){"use strict";var a={uGap:e("7510").default},n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"listbox"},t._l(t.list,(function(i,a){return e("v-uni-view",{key:a},[e("v-uni-view",{staticClass:"list",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tolivedesc(i.playcode)}}},[e("v-uni-view",{staticClass:"livetitlebox"},[e("v-uni-view",{staticClass:"title"},[t._v("主播昵称："+t._s(i.anchorname))]),e("v-uni-view",{staticClass:"datetime"},[t._v("04月08日")])],1),e("v-uni-view",{staticClass:"liveimg"},[e("v-uni-image",{attrs:{src:i.coverimg}}),e("v-uni-view",{staticClass:"livestatus"},[t._v(t._s(101==i.livestatus?"直播中":102==i.livestatus?"未开始":103==i.livestatus?"已结束":104==i.livestatus?"禁播":105==i.livestatus?"暂停中":106==i.livestatus?"异常":107==i.livestatus?"已过期":""))])],1),e("v-uni-view",{staticClass:"livetitlebox"},[e("v-uni-view",{staticClass:"title"},[t._v("主播标题："+t._s(i.livename))]),e("v-uni-view",{staticClass:"tuiguang"},[t._v("推广")])],1)],1),e("u-gap",{attrs:{height:"20","bg-color":"#F6FAFF"}})],1)})),1)],1)},r=[];e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return a}))},f4d8:function(t,i,e){"use strict";var a=e("92f2"),n=e.n(a);n.a}}]);