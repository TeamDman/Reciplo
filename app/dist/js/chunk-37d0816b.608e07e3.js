(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37d0816b"],{"94cf":function(e,t,r){},ce3b:function(e,t,r){"use strict";var i=r("94cf"),n=r.n(i);n.a},e1dc:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"container"}},e._l(e.timers,(function(t,i){return r("div",{key:i},[r("div",t%60>9?[e._v(" "+e._s(String(Math.floor(t/60))+":"+String(t%60))+" ")]:[e._v(" "+e._s(String(Math.floor(t/60))+":0"+String(t%60))+" ")])])})),0)},n=[],s=r("2b0e"),a=s["a"].extend({name:"app-timers",data(){return{timers:[],inter:null}},methods:{addTimer(e){isNaN(e)||this.timers.push(60*parseInt(e))},beep(){new Audio("cursed.wav").play()}},created(){this.inter=setInterval(()=>{this.timers=this.timers.map(e=>e-1).filter(e=>e>=0||this.beep())},1e3)},destroyed(){clearInterval(this.inter)}}),c=a,d=(r("ce3b"),r("2877")),u=Object(d["a"])(c,i,n,!1,null,"7a02690e",null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-37d0816b.608e07e3.js.map