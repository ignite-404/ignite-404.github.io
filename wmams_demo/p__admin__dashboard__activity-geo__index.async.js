"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4065],{89752:function(m,s,t){t.r(s);var l=t(68421),d=t(4393),c=t(64389),a=t(67294),E=t(30967),e=t(85893);s.default=function(){var r,n=(0,l.Z)(E.x1.mallAdmin.reportGroupByGeoLocation,{manual:!0}),i=((r=n.data)===null||r===void 0?void 0:r.data.Data)||[],u=(0,a.useRef)(null);return(0,a.useEffect)(function(){if(u.current){var f=c.S1(u.current);f.setOption({legend:{top:"bottom"},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},series:[{name:"\u57CE\u5E02\u5206\u5E03",type:"pie",radius:[50,250],center:["50%","50%"],roseType:"area",itemStyle:{borderRadius:8},data:i.map(function(o){return{name:"".concat(o.Country,"-").concat(o.City),value:o.Count}})}]})}},[i]),(0,a.useEffect)(function(){n.run({})},[]),(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(d.Z,{title:"\u7528\u6237\u6D3B\u8DC3\u65F6\u95F4\u6BB5",style:{marginBottom:10},loading:n.loading,children:(0,e.jsx)("div",{style:{minHeight:500,margin:20},ref:u})})})}}}]);
