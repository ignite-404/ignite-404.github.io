"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9278],{86643:function(g,_,a){a.r(_);var D=a(42122),d=a.n(D),E=a(68421),c=a(4393),f=a(64389),i=a(67294),v=a(30967),m=a(46629),r=a(85893);_.default=function(){var e,l=(0,E.Z)(v.x1.mallAdmin.reportOrderSumByDate,{manual:!0}),u=((e=l.data)===null||e===void 0||(e=e.data)===null||e===void 0||(e=e.Data)===null||e===void 0?void 0:e.map(function(n){var t;return d()(d()({},n),{},{formatedDate:((t=(0,m.mg)(n.Date))===null||t===void 0?void 0:t.format(m.vc))||n.Date||"--"})}))||[],s=(0,i.useRef)(null),o=(0,i.useRef)(null);return(0,i.useEffect)(function(){l.run({})},[]),(0,i.useEffect)(function(){if(s.current!=null){var n=f.S1(s.current);n.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:u.map(function(t){return t.formatedDate}),axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"\u8BA2\u5355\u603B\u6570",type:"bar",barWidth:"60%",data:u.map(function(t){return t.Total})}]})}},[u]),(0,i.useEffect)(function(){if(o.current!=null){var n=f.S1(o.current);n.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:u.map(function(t){return t.formatedDate}),axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"\u9500\u552E\u91D1\u989D\u{1F4B0}",type:"bar",barWidth:"60%",data:u.map(function(t){return t.Amount})}]})}},[u]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.Z,{title:"\u8BA2\u5355\u6570\u91CF\u7EDF\u8BA1",style:{marginBottom:10},loading:l.loading,children:(0,r.jsx)("div",{style:{minHeight:400},ref:s})}),(0,r.jsx)(c.Z,{title:"\u8BA2\u5355\u91D1\u989D\u7EDF\u8BA1",style:{marginBottom:10},loading:l.loading,children:(0,r.jsx)("div",{style:{minHeight:400},ref:o})})]})}}}]);