"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2722],{23806:function(P,x,r){var j=r(1288),t=r(85893);x.Z=function(C){var l=C.model,g=C.fallback;if(l==null||l==null)return null;var o=l==null?void 0:l.CreationTime,F=l==null?void 0:l.LastModificationTime;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{style:{},children:[(0,t.jsx)("div",{children:(0,t.jsx)(j.Z,{prefix:(0,t.jsx)("span",{children:"\u521B\u5EFA\uFF1A"}),onlyDate:!0,timeStr:o,fallback:g})}),(0,t.jsx)("div",{children:(0,t.jsx)(j.Z,{prefix:(0,t.jsx)("span",{children:"\u4FEE\u6539\uFF1A"}),onlyDate:!0,timeStr:F,fallback:g})})]})})}},9916:function(P,x,r){r.r(x),r.d(x,{default:function(){return L}});var j=r(42122),t=r.n(j),C=r(27424),l=r.n(C),g=r(68421),o=r(78957),F=r(40411),D=r(80799),y=r(67294),A=r(23806),S=r(30967),c=r(46629),v=r(11346),T=r(34041),I=r(25278),R=r(96864),O=r(84567),M=r(14726),p=r(68994),n=r(85893),z=function(f){var B=f.query,E=f.onChange,h=(0,y.useState)(B),m=l()(h,2),d=m[0],i=m[1];return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(v.Z,{style:{marginBottom:10},children:[(0,n.jsx)(v.Z.Item,{label:"\u652F\u4ED8\u6E20\u9053",children:(0,n.jsx)(T.Z,{allowClear:!0,value:d.PaymentChannel||void 0,onChange:function(u){i(t()(t()({},d),{},{PaymentChannel:u}))},onClear:function(){i(t()(t()({},d),{},{PaymentChannel:void 0}))},options:p.rz.map(function(s){return{label:s.name,value:s.id}})})}),(0,n.jsx)(v.Z.Item,{label:"\u5546\u6237\u53F7",children:(0,n.jsx)(I.Z,{value:d.MchId||"",onChange:function(u){i(t()(t()({},d),{},{MchId:u.target.value}))}})}),(0,n.jsx)(v.Z.Item,{label:"\u8D26\u5355\u65E5",children:(0,n.jsx)(R.default,{format:c.vc,value:(0,c.mg)(d.BillDate),onChange:function(u){i(t()(t()({},d),{},{BillDate:(0,c.ND)(u.toDate()).format(c.dq)}))}})}),(0,n.jsx)(v.Z.Item,{label:"\u5B58\u5728\u5F02\u5E38",children:(0,n.jsx)(O.Z,{checked:d.InCorrect,onChange:function(u){i(t()(t()({},d),{},{InCorrect:u.target.checked||void 0}))}})}),(0,n.jsx)(v.Z.Item,{children:(0,n.jsx)(M.ZP,{type:"primary",onClick:function(){E(t()(t()({},d),{},{Page:1}))},children:"\u67E5\u8BE2"})})]})})},L=function(){var f,B=(0,y.useState)({Page:1}),E=l()(B,2),h=E[0],m=E[1],d=(0,g.Z)(S.x1.mallAdmin.billVerificationResultPaging,{manual:!0}),i=((f=d.data)===null||f===void 0?void 0:f.data)||{},s=[{title:"\u5E73\u53F0",render:function(a,e){return(0,n.jsx)("span",{children:e.PaymentChannel})}},{title:"\u5546\u6237\u53F7",render:function(a,e){return(0,n.jsx)("span",{children:e.MchId})}},{title:"\u8D26\u5355\u65E5",render:function(a,e){var Z;return(0,n.jsx)("span",{children:(Z=(0,c.mg)(e.BillDate))===null||Z===void 0?void 0:Z.format(c.vc)})}},{title:"\u65F6\u533A",render:function(a,e){return(0,n.jsx)("span",{children:e.BillDateTimezoneOffset})}},{title:"\u652F\u4ED8\u7B14\u6570",render:function(a,e){return(0,n.jsxs)(o.Z,{direction:"vertical",children:[(0,n.jsxs)("div",{children:["\u672C\u7CFB\u7EDF\uFF1A",e.PaymentCount]}),(0,n.jsxs)("div",{children:["\u7B2C\u4E09\u65B9\uFF1A",e.OutPaymentCount]})]})}},{title:"\u652F\u4ED8\u91D1\u989D",render:function(a,e){return(0,n.jsxs)(o.Z,{direction:"vertical",children:[(0,n.jsxs)("div",{children:["\u672C\u7CFB\u7EDF\uFF1A",e.PaymentTotal]}),(0,n.jsxs)("div",{children:["\u7B2C\u4E09\u65B9\uFF1A",e.OutPaymentTotal]})]})}},{title:"\u9000\u6B3E\u7B14\u6570",render:function(a,e){return(0,n.jsxs)(o.Z,{direction:"vertical",children:[(0,n.jsxs)("div",{children:["\u672C\u7CFB\u7EDF\uFF1A",e.RefundCount]}),(0,n.jsxs)("div",{children:["\u7B2C\u4E09\u65B9\uFF1A",e.OutRefundCount]})]})}},{title:"\u9000\u6B3E\u91D1\u989D",render:function(a,e){return(0,n.jsxs)(o.Z,{direction:"vertical",children:[(0,n.jsxs)("div",{children:["\u672C\u7CFB\u7EDF\uFF1A",e.RefundTotal]}),(0,n.jsxs)("div",{children:["\u7B2C\u4E09\u65B9\uFF1A",e.OutRefundTotal]})]})}},{title:"\u8D26\u5355",render:function(a,e){return(0,n.jsx)(F.Z,{status:e.AllCorrect?"success":"error",dot:!0,title:"\u6B63\u786E\u65E0\u8BEF"})}},{title:"\u8017\u65F6",render:function(a,e){return(0,n.jsxs)("span",{children:[e.ExecutionDuringSeconds," seconds"]})}},{title:"\u6267\u884C\u72B6\u6001",render:function(a,e){return(0,n.jsx)(F.Z,{status:e.ExecuteSuccess?"success":"error",dot:!0,title:"\u6B63\u5E38\u6267\u884C"})}},{title:"\u5BF9\u8D26\u65F6\u95F4",render:function(a,e){return(0,n.jsx)(A.Z,{model:e})}}];return(0,y.useEffect)(function(){d.run(t()(t()({},h),{},{Page:1}))},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(z,{query:h,onChange:function(a){var e=t()(t()({},a),{},{Page:1});m(e),d.run(e)}}),(0,n.jsx)(D.Z,{loading:d.loading,columns:s,dataSource:i.Items||[],expandable:{expandedRowRender:function(a){return(0,n.jsx)("pre",{children:a.LoggingText||"--"})}},pagination:{current:i.PageIndex,total:i.TotalCount,pageSize:i.PageSize,onChange:function(a){var e=t()(t()({},h),{},{Page:a});m(e),d.run(e)}}})]})}}}]);
