(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["recipe"],{1294:function(e,t,i){"use strict";var n=i("4bd3"),s=i.n(n);s.a},"2d11":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return void 0===e.recipe?i("div",[e._v(" Recipe not found. ")]):i("main",{attrs:{id:"content"}},[i("div",[i("h1",[e._v(e._s(e.recipe.name))]),i("em",[e._v("by "+e._s(e.recipe.author))]),i("br"),i("strong",[e._v("Prep time:")]),e._v(e._s(e.recipe.time)+" "),i("br"),i("strong",[e._v("Serves:")]),e._v(e._s(e.recipe.serves)+" ")]),i("div",[i("h2",[e._v("Tags")]),e._l(e.recipe.tags,(function(t,n){return i("div",{key:n,staticClass:"recipe-tag"},[e._v(" "+e._s(t)+" ")])}))],2),i("div",[i("h2",[e._v("Instructions")]),i("ol",[e._l(e.recipe.instructions,(function(t,n){return[i("li",{key:n,staticClass:"recipe-instruction",class:{selected:n===e.activeInstruction},on:{click:function(t){return e.onInstructionClick(n)}}},[e._v(" "+e._s(t)+" ")])]}))],2)])])},s=[],c=i("2b0e"),r=i("4a33"),a=c["a"].extend({name:"app-recipe-details",data(){return{recipe:Object(r["b"])(this.$route.params.id),activeInstruction:0}},watch:{$route(e){this.recipe=Object(r["b"])(e.params.id)}},methods:{onInstructionClick(e){this.activeInstruction=e,this.read(this.recipe.instructions[e])},read(e){const t=new SpeechSynthesisUtterance(e);window.speechSynthesis.speak(t)}}}),o=a,u=(i("1294"),i("2877")),p=Object(u["a"])(o,n,s,!1,null,"798136dc",null);t["default"]=p.exports},"4bd3":function(e,t,i){}}]);
//# sourceMappingURL=recipe.eae411c2.js.map