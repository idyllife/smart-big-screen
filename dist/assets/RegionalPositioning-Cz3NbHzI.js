import{c as e,L as s,C as d}from"./ChartComp-CqDpfrOL.js";import{_ as g,g as p,o as i,c as r,h as a,F as m,r as _,z as f,t as n,a as v,v as u,x as h}from"./index-DexiIE1D.js";const b=o=>(u("data-v-228ff79a"),o=o(),h(),o),S={class:"module"},z={class:"user"},y={class:"num"},B=b(()=>a("span",{class:"unit"},"人",-1)),x={class:"name"},w={class:"chart"},P={__name:"RegionalPositioning",setup(o){const l=[{num:122,name:"当前在场人数"},{num:152,name:"今日累计人数"}],c=p({...e.generateBarOption({series:[{...e.generateBarSeries(),color:new s(0,0,0,1,[{offset:0,color:"rgba(98, 153, 255, .8)"},{offset:1,color:"rgba(98, 153, 255, .1)"}]),barMaxWidth:e.getSize(16),barWidth:e.getSize(16)},{...e.generateBarSeries(),color:new s(0,0,0,1,[{offset:0,color:"rgba(247, 221, 116, .8)"},{offset:1,color:"rgba(247, 221, 116, .1)"}]),barMaxWidth:e.getSize(16),barWidth:e.getSize(16)},{name:"",type:"pictorialBar",symbolSize:[e.getSize(16),e.getSize(8)],color:"rgba(98, 153, 255, 1)",symbolOffset:[-12,-4],tooltip:{show:!1},symbolPosition:"end",z:13},{name:"",type:"pictorialBar",symbolSize:[e.getSize(16),e.getSize(8)],symbolOffset:[12,-4],color:"rgba(247, 221, 116, 1)",z:13,symbolPosition:"end",tooltip:{show:!1}}],legend:e.generateLegend({data:["累计","实时"],selectedMode:!1})}),dataset:{dimensions:["单位","累计","实时","val1","val2"],source:[{单位:"单位1",累计:33,实时:23,val1:33,val2:23},{单位:"单位2",累计:33,实时:23,val1:33,val2:23},{单位:"单位3",累计:33,实时:23,val1:33,val2:23},{单位:"单位4",累计:33,实时:23,val1:33,val2:23},{单位:"单位5",累计:33,实时:23,val1:33,val2:23}]}});return(k,C)=>(i(),r("div",S,[a("div",z,[(i(),r(m,null,_(l,t=>a("div",{class:"item",key:t.count},[a("div",y,[f(n(t.num)+" ",1),B]),a("div",x,n(t.name),1)])),64))]),a("div",w,[v(d,{mark:"RegionalPositioning",option:c.value},null,8,["option"])])]))}},W=g(P,[["__scopeId","data-v-228ff79a"]]);export{W as default};