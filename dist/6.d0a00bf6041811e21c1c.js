webpackJsonp([6],{198:function(e,t,n){function o(e){a||n(267)}var a=!1,s=n(4)(n(223),n(256),o,"data-v-e2d3e84e",null);s.options.__file="D:\\567\\src\\components\\news\\newsDetail.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] newsDetail.vue: functional components are not supported with templates, they should use render functions."),e.exports=s.exports},223:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{Darr:[],detail:{},title:""}},created:function(){var e=this,t=this.$route.query.id;this.$ajax.get("data.json").then(function(n){e.Darr=n.data.message;for(var o=0;o<e.Darr.length;o++)e.Darr[o].id==t&&(e.detail=e.Darr[o]);console.log(e.detail)}).catch(function(e){console.log(e)})},beforeRouteEnter:function(e,t,n){console.log(t);var o="";"news.list"==t.name?o="新闻详情":"goods.detail"==t.name&&(o="商品介绍"),n(n(function(e){e.title=o}))}}},239:function(e,t,n){t=e.exports=n(2)(void 0),t.push([e.i,"\n.news-title p[data-v-e2d3e84e] {\n    color: #0a87f8;\n    font-size: 20px;\n    font-weight: bold;\n}\n.news-title span[data-v-e2d3e84e] {\n    margin-right: 30px;\n}\n.news-title[data-v-e2d3e84e] {\n    margin-top: 5px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n}\n\n\n/*主体文章的左右距离*/\n.news-content[data-v-e2d3e84e] {\n    padding: 10 5;\n}\n",""])},256:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tmpl"},[n("nav-bar",{attrs:{title:e.title}}),e._v(" "),n("div",{staticClass:"news-title"},[n("p",[e._v(e._s(e.detail.title))]),e._v(" "),n("div",[n("span",[e._v(e._s(e.detail.click)+"次点击")]),e._v(" "),n("span",[e._v("分类：民生经济")]),e._v(" "),n("span",[e._v("添加时间："+e._s(e._f("formatDate")(e.detail.add_time)))])])]),e._v(" "),n("div",{staticClass:"news-content"},[e._v("\n        "+e._s(e.detail.content)+"\n    ")])],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},267:function(e,t,n){var o=n(239);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(5)("2822f7f2",o,!1)}});