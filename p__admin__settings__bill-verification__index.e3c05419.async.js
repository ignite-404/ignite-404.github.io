"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2722],{23806:function(I,x,r){var j=r(1288),t=r(85893);x.Z=function(l){var u=l.model,f=l.fallback;if(u==null||u==null)return null;var s=u==null?void 0:u.CreationTime,C=u==null?void 0:u.LastModificationTime;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{style:{},children:[(0,t.jsx)("div",{children:(0,t.jsx)(j.Z,{prefix:(0,t.jsx)("span",{children:"\u521B\u5EFA\uFF1A"}),onlyDate:!0,timeStr:s,fallback:f})}),(0,t.jsx)("div",{children:(0,t.jsx)(j.Z,{prefix:(0,t.jsx)("span",{children:"\u4FEE\u6539\uFF1A"}),onlyDate:!0,timeStr:C,fallback:f})})]})})}},1288:function(I,x,r){var j=r(78957),t=r(83062),l=r(46629),u=r(85893);x.Z=function(f){var s,C=f.timeStr,B=f.fallback,E=f.onlyDate,P=f.prefix,o=(s=(0,l.mg)(C))===null||s===void 0?void 0:s.add(l.Mg,"hour");if(!o)return B||null;var h=(0,l.ND)().utc().add(l.Mg,"hour"),m=o.isSame(h,"year"),M=o.diff(h,"day"),O=m?o.format(l.AK):o.format(l.vc),Z=function(){return(0,u.jsxs)("div",{children:[(0,u.jsxs)(j.Z,{direction:"horizontal",children:[(0,u.jsx)("div",{children:o.fromNow()}),(0,u.jsx)("div",{children:o.format(l.On)})]}),(0,u.jsx)("div",{children:o.format(l.t9)})]})};return(0,u.jsx)(t.Z,{title:Z(),children:(0,u.jsxs)(j.Z,{direction:"horizontal",children:[P,(0,u.jsx)("div",{className:"inline-block cursor-pointer hover:bg-orange-500",children:E?o.format(l.vc):o.format(l.dq)})]})})}},9916:function(I,x,r){r.r(x),r.d(x,{default:function(){return z}});var j=r(42122),t=r.n(j),l=r(27424),u=r.n(l),f=r(68421),s=r(78957),C=r(40411),B=r(80799),E=r(67294),P=r(23806),o=r(30967),h=r(46629),m=r(11346),M=r(34041),O=r(25278),Z=r(96864),S=r(84567),R=r(14726),p=r(68994),n=r(85893),L=function(g){var A=g.query,y=g.onChange,F=(0,E.useState)(A),D=u()(F,2),i=D[0],c=D[1];return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(m.Z,{style:{marginBottom:10},children:[(0,n.jsx)(m.Z.Item,{label:"\u652F\u4ED8\u6E20\u9053",children:(0,n.jsx)(M.Z,{allowClear:!0,value:i.PaymentChannel||void 0,onChange:function(a){c(t()(t()({},i),{},{PaymentChannel:a}))},onClear:function(){c(t()(t()({},i),{},{PaymentChannel:void 0}))},options:p.rz.map(function(v){return{label:v.name,value:v.id}})})}),(0,n.jsx)(m.Z.Item,{label:"\u5546\u6237\u53F7",children:(0,n.jsx)(O.Z,{value:i.MchId||"",onChange:function(a){c(t()(t()({},i),{},{MchId:a.target.value}))}})}),(0,n.jsx)(m.Z.Item,{label:"\u8D26\u5355\u65E5",children:(0,n.jsx)(Z.default,{format:h.vc,value:(0,h.mg)(i.BillDate),onChange:function(a){c(t()(t()({},i),{},{BillDate:(0,h.ND)(a.toDate()).format(h.dq)}))}})}),(0,n.jsx)(m.Z.Item,{label:"\u5B58\u5728\u5F02\u5E38",children:(0,n.jsx)(S.Z,{checked:i.InCorrect,onChange:function(a){c(t()(t()({},i),{},{InCorrect:a.target.checked||void 0}))}})}),(0,n.jsx)(m.Z.Item,{children:(0,n.jsx)(R.ZP,{type:"primary",onClick:function(){y(t()(t()({},i),{},{Page:1}))},children:"\u67E5\u8BE2"})})]})})},z=function(){var g,A=(0,E.useState)({Page:1}),y=u()(A,2),F=y[0],D=y[1],i=(0,f.Z)(o.x1.mallAdmin.billVerificationResultPaging,{manual:!0}),c=((g=i.data)===null||g===void 0?void 0:g.data)||{},v=[{title:"\u5E73\u53F0",render:function(d,e){return(0,n.jsx)("span",{children:e.PaymentChannel})}},{title:"\u5546\u6237\u53F7",render:function(d,e){return(0,n.jsx)("span",{children:e.MchId})}},{title:"\u8D26\u5355\u65E5",render:function(d,e){var T;return(0,n.jsx)("span",{children:(T=(0,h.mg)(e.BillDate))===null||T===void 0?void 0:T.format(h.vc)})}},{title:"\u65F6\u533A",render:function(d,e){return(0,n.jsx)("span",{children:e.BillDateTimezoneOffset})}},{title:"\u652F\u4ED8\u7B14\u6570",render:function(d,e){return(0,n.jsxs)(s.Z,{direction:"vertical",children:[(0,n.jsxs)("div",{children:["\u672C\u7CFB\u7EDF\uFF1A",e.PaymentCount]}),(0,n.jsxs)("div",{children:["\u7B2C\u4E09\u65B9\uFF1A",e.OutPaymentCount]})]})}},{title:"\u652F\u4ED8\u91D1\u989D",render:function(d,e){return(0,n.jsxs)(s.Z,{direction:"vertical",children:[(0,n.jsxs)("div",{children:["\u672C\u7CFB\u7EDF\uFF1A",e.PaymentTotal]}),(0,n.jsxs)("div",{children:["\u7B2C\u4E09\u65B9\uFF1A",e.OutPaymentTotal]})]})}},{title:"\u9000\u6B3E\u7B14\u6570",render:function(d,e){return(0,n.jsxs)(s.Z,{direction:"vertical",children:[(0,n.jsxs)("div",{children:["\u672C\u7CFB\u7EDF\uFF1A",e.RefundCount]}),(0,n.jsxs)("div",{children:["\u7B2C\u4E09\u65B9\uFF1A",e.OutRefundCount]})]})}},{title:"\u9000\u6B3E\u91D1\u989D",render:function(d,e){return(0,n.jsxs)(s.Z,{direction:"vertical",children:[(0,n.jsxs)("div",{children:["\u672C\u7CFB\u7EDF\uFF1A",e.RefundTotal]}),(0,n.jsxs)("div",{children:["\u7B2C\u4E09\u65B9\uFF1A",e.OutRefundTotal]})]})}},{title:"\u8D26\u5355",render:function(d,e){return(0,n.jsx)(C.Z,{status:e.AllCorrect?"success":"error",dot:!0,title:"\u6B63\u786E\u65E0\u8BEF"})}},{title:"\u8017\u65F6",render:function(d,e){return(0,n.jsxs)("span",{children:[e.ExecutionDuringSeconds," seconds"]})}},{title:"\u6267\u884C\u72B6\u6001",render:function(d,e){return(0,n.jsx)(C.Z,{status:e.ExecuteSuccess?"success":"error",dot:!0,title:"\u6B63\u5E38\u6267\u884C"})}},{title:"\u5BF9\u8D26\u65F6\u95F4",render:function(d,e){return(0,n.jsx)(P.Z,{model:e})}}];return(0,E.useEffect)(function(){i.run(t()(t()({},F),{},{Page:1}))},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(L,{query:F,onChange:function(d){var e=t()(t()({},d),{},{Page:1});D(e),i.run(e)}}),(0,n.jsx)(B.Z,{loading:i.loading,columns:v,dataSource:c.Items||[],expandable:{expandedRowRender:function(d){return(0,n.jsx)("pre",{children:d.LoggingText||"--"})}},pagination:{current:c.PageIndex,total:c.TotalCount,pageSize:c.PageSize,onChange:function(d){var e=t()(t()({},F),{},{Page:d});D(e),i.run(e)}}})]})}}}]);
