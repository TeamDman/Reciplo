(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["recipe"],{"2d11":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return void 0===e.recipe?i("div",[e._v(" Recipe not found. ")]):i("main",[i("div",{attrs:{id:"content"}},[i("div",[i("h1",[e._v(e._s(e.recipe.name))]),i("em",[e._v("by "+e._s(e.recipe.author))]),i("br"),i("strong",[e._v("Prep time: ")]),e._v(e._s(e.recipe.time)+" "),i("br"),i("strong",[e._v("Serves: ")]),e._v(e._s(e.recipe.serves)+" ")]),i("div",[i("h2",[e._v("Ingredients")]),i("ol",{staticStyle:{"padding-left":"0"}},[e._l(e.recipe.ingredients,(function(t,n){return[i("ul",{key:n,staticClass:"recipe-ingredient"},[e._v(" - "+e._s(t)+" ")])]}))],2)]),i("div",[i("h2",[e._v("Instructions")]),i("ol",[e._l(e.recipe.instructions,(function(t,n){return[i("li",{key:n,staticClass:"recipe-instruction",class:{selected:n===e.activeInstruction},on:{click:function(t){return e.onInstructionClick(n)}}},[e._v(" "+e._s(t)+" ")])]}))],2)])]),i("Sidebar"),i("Controls",{ref:"controls",on:{"read-ingredients":e.readIngredients,"read-instruction":e.readInstruction,next:e.readNext,previous:e.readPrevious,timer:e.addTimer}}),i("Timers",{ref:"timers"})],1)},r=[],s=i("2b0e"),c=i("4a33"),a=s["a"].extend({name:"app-recipe-details",components:{Sidebar:()=>i.e("chunk-3d09772a").then(i.bind(null,"5ea5")),Controls:()=>i.e("chunk-2846d4f6").then(i.bind(null,"c75a")),Timers:()=>i.e("chunk-6a8fab0b").then(i.bind(null,"e1dc"))},data(){return{recipe:Object(c["b"])(this.$route.params.id),activeInstruction:0}},watch:{$route(e){this.recipe=Object(c["b"])(e.params.id)}},methods:{onInstructionClick(e){this.activeInstruction=e,this.readInstruction()},read(e){this.$refs.controls.read(e)},readIngredients(){this.read("ingredients:"),this.recipe.ingredients.forEach(this.read)},readInstruction(){this.read(this.recipe.instructions[this.activeInstruction])},readNext(){if(this.activeInstruction==this.recipe.instructions.length-1)return this.read("no further instructions");this.onInstructionClick(this.activeInstruction+1)},readPrevious(){if(0==this.activeInstruction)return this.read("no previous instructions");this.onInstructionClick(this.activeInstruction-1)},addTimer(e){this.$refs.timers.addTimer(e)}}}),o=a,d=(i("63a5"),i("2877")),u=Object(d["a"])(o,n,r,!1,null,"44739740",null);t["default"]=u.exports},"63a5":function(e,t,i){"use strict";var n=i("8429"),r=i.n(n);r.a},8429:function(e,t,i){}}]);
//# sourceMappingURL=recipe.d43fde85.js.map