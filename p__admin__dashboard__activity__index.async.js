"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[748],{54058:function(M,e,_){_.r(e);var n=_(97857),a=_.n(n),t=_(68421),u=_(4393),s=_(64389),l=_(66090),E=_(67294),P=_(30699),h=_(46629),d=_(85893);e.default=function(){var o,f=(0,t.Z)(P.x1.mallAdmin.reportUserActivityGroupByHour,{manual:!0}),g=((o=f.data)===null||o===void 0||(o=o.data.Data)===null||o===void 0?void 0:o.map(function(i){return a()(a()({},i),{},{Hour:((i.Hour||0)+h.Mg)%24})}))||[],c=(0,E.useRef)(null),p=function(){for(var r=[],B=function(O){var C=g.filter(function(D){return D.Hour==O});r.push({Hour:O,Count:(0,l.Z)(C,function(D){return D.Count||0})})},v=0;v<=24;++v)B(v);return r},m=p();return(0,E.useEffect)(function(){if(c.current!=null){var i=s.S1(c.current);i.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:m.map(function(r){return r.Hour||0}),axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"\u6D3B\u8DC3\u5EA6",type:"bar",barWidth:"60%",data:m.map(function(r){return r.Count||0})}]})}},[m]),(0,E.useEffect)(function(){f.run({})},[]),(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(u.Z,{title:"\u7528\u6237\u6D3B\u8DC3\u65F6\u95F4\u6BB5",style:{marginBottom:10},loading:f.loading,children:(0,d.jsx)("div",{style:{minHeight:400},ref:c})})})}},58811:function(M,e){function _(n,a){for(var t,u=-1,s=n.length;++u<s;){var l=a(n[u]);l!==void 0&&(t=t===void 0?l:t+l)}return t}e.Z=_},66090:function(M,e,_){var n=_(76658),a=_(58811);function t(u,s){return u&&u.length?(0,a.Z)(u,(0,n.Z)(s,2)):0}e.Z=t}}]);
