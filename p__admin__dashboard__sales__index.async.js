"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9278],{11650:function(g,d,e){var f=e(97857),c=e.n(f),E=e(64389),a=e(67294),D=e(82052),r=e(85893);d.Z=function(u){var i=u.options,m=u.style,o=(0,a.useRef)(null),n=(0,a.useRef)(null),_=(0,D.Z)(o);return(0,a.useEffect)(function(){var t;(t=n.current)===null||t===void 0||t.resize()},[_==null?void 0:_.width,_==null?void 0:_.height]),(0,a.useEffect)(function(){o.current!=null&&n.current==null&&(n.current=E.S1(o.current))},[o.current]),(0,a.useEffect)(function(){return function(){var t;(t=n.current)===null||t===void 0||t.dispose(),console.log("dispose charts")}},[]),(0,a.useEffect)(function(){var t;i&&((t=n.current)===null||t===void 0||t.setOption(i))},[i,n.current]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{style:c()({minHeight:300},m),ref:o})})}},86643:function(g,d,e){e.r(d);var f=e(5574),c=e.n(f),E=e(97857),a=e.n(E),D=e(68421),r=e(4393),u=e(67294),i=e(30699),m=e(46629),o=e(11650),n=e(85893);d.default=function(){var _,t=(0,D.Z)(i.x1.mallAdmin.reportOrderSumByDate,{manual:!0}),l=((_=t.data)===null||_===void 0||(_=_.data)===null||_===void 0||(_=_.Data)===null||_===void 0?void 0:_.map(function(s){var v;return a()(a()({},s),{},{formatedDate:((v=(0,m.QW)(s.Date))===null||v===void 0?void 0:v.format(m.vc))||s.Date||"--"})}))||[],h=(0,u.useState)(void 0),O=c()(h,2),p=O[0],M=O[1],j=(0,u.useState)(void 0),P=c()(j,2),A=P[0],C=P[1];return(0,u.useEffect)(function(){t.run({})},[]),(0,u.useEffect)(function(){M({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:l.map(function(s){return s.formatedDate}),axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"\u8BA2\u5355\u603B\u6570",type:"bar",barWidth:"60%",data:l.map(function(s){return s.Total})}]})},[l]),(0,u.useEffect)(function(){C({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:l.map(function(s){return s.formatedDate}),axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"\u9500\u552E\u91D1\u989D\u{1F4B0}",type:"bar",barWidth:"60%",data:l.map(function(s){return s.Amount})}]})},[l]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.Z,{title:"\u8BA2\u5355\u6570\u91CF\u7EDF\u8BA1",style:{marginBottom:10},loading:t.loading,children:(0,n.jsx)(o.Z,{options:p})}),(0,n.jsx)(r.Z,{title:"\u8BA2\u5355\u91D1\u989D\u7EDF\u8BA1",style:{marginBottom:10},loading:t.loading,children:(0,n.jsx)(o.Z,{options:A})})]})}}}]);
