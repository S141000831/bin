(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-54c9"],{Z4AV:function(t,a,i){"use strict";var n=i("vJQB");i.n(n).a},grFW:function(t,a,i){"use strict";i.r(a);var n=i("MT78"),e=i.n(n),r={mixins:[i("9CxU").a],props:{className:{type:String,default:"chart"},id:{type:String,default:"chart"},width:{type:String,default:"200px"},height:{type:String,default:"200px"}},data:function(){return{chart:null}},mounted:function(){this.initChart()},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=e.a.init(document.getElementById(this.id));for(var t=[],a=[],i=[],n=0;n<50;n++)t.push(n),a.push(5*(Math.sin(n/5)*(n/5-10)+n/6)),i.push(3*(Math.sin(n/5)*(n/5+10)+n/6));this.chart.setOption({backgroundColor:"#08263a",grid:{left:"5%",right:"5%"},xAxis:[{show:!1,data:t},{show:!1,data:t}],visualMap:{show:!1,min:0,max:50,dimension:0,inRange:{color:["#4a657a","#308e92","#b1cfa5","#f5d69f","#f5898b","#ef5055"]}},yAxis:{axisLine:{show:!1},axisLabel:{textStyle:{color:"#4a657a"}},splitLine:{show:!0,lineStyle:{color:"#08263f"}},axisTick:{show:!1}},series:[{name:"back",type:"bar",data:i,z:1,itemStyle:{normal:{opacity:.4,barBorderRadius:5,shadowBlur:3,shadowColor:"#111"}}},{name:"Simulate Shadow",type:"line",data:a,z:2,showSymbol:!1,animationDelay:0,animationEasing:"linear",animationDuration:1200,lineStyle:{normal:{color:"transparent"}},areaStyle:{normal:{color:"#08263a",shadowBlur:50,shadowColor:"#000"}}},{name:"front",type:"bar",data:a,xAxisIndex:1,z:3,itemStyle:{normal:{barBorderRadius:5}}}],animationEasing:"elasticOut",animationEasingUpdate:"elasticOut",animationDelay:function(t){return 20*t},animationDelayUpdate:function(t){return 20*t}})}}},o=i("KHd+"),s=Object(o.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.className,style:{height:this.height,width:this.width},attrs:{id:this.id}})},[],!1,null,null,null);s.options.__file="keyboard.vue";var l={name:"KeyboardChart",components:{Chart:s.exports}},h=(i("Z4AV"),Object(o.a)(l,function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"chart-container"},[a("chart",{attrs:{height:"100%",width:"100%"}})],1)},[],!1,null,"3669100c",null));h.options.__file="keyboard.vue";a.default=h.exports},vJQB:function(t,a,i){}}]);