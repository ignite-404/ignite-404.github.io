"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2938],{33097:function(z,L,n){n.r(L),n.d(L,{default:function(){return Q}});var d=n(5574),C=n.n(d),F=n(30699),m=n(45360),O=n(28036),$=n(4393),B=n(80799),h=n(67294),V=n(97857),c=n.n(V),W=n(85576),y=n(11346),M=n(65233),N=n(24435),t=n(85893),K=function(P){var i=P.show,D=P.hide,e=P.data,r=P.ok,g=(0,h.useState)(!1),s=C()(g,2),l=s[0],Z=s[1],A=(0,h.useState)({}),S=C()(A,2),f=S[0],j=S[1],E=function(o){Z(!0),F.x1.mallAdmin.warehouseSave(o).then(function(u){u.data.Error?m.ZP.error(u.data.Error.Message):(m.ZP.success("\u4FDD\u5B58\u6210\u529F"),r())}).finally(function(){Z(!1)})};return(0,h.useEffect)(function(){j(c()({},e))},[e]),(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(W.Z,{open:i,confirmLoading:l,onCancel:function(){return D()},onOk:function(){return E(f)},children:(0,t.jsxs)(y.Z,{labelCol:{flex:"110px"},labelAlign:"right",wrapperCol:{flex:1},children:[(0,t.jsx)(y.Z.Item,{label:"\u540D\u79F0",children:(0,t.jsx)(M.Z,{value:f.Name||"",onChange:function(o){j(function(u){return c()(c()({},u),{},{Name:o.target.value})})}})}),(0,t.jsx)(y.Z.Item,{label:"\u5730\u5740",children:(0,t.jsx)(M.Z,{value:f.Address||"",onChange:function(o){j(function(u){return c()(c()({},u),{},{Address:o.target.value})})}})}),(0,t.jsx)(y.Z.Item,{label:"lat",children:(0,t.jsx)(N.Z,{value:f.Lat,onChange:function(o){j(function(u){return c()(c()({},u),{},{Lat:o})})}})}),(0,t.jsx)(y.Z.Item,{label:"lng",children:(0,t.jsx)(N.Z,{value:f.Lng,onChange:function(o){j(function(u){return c()(c()({},u),{},{Lng:o})})}})})]})})})},Q=function(){var P=(0,h.useState)(!0),i=C()(P,2),D=i[0],e=i[1],r=(0,h.useState)([]),g=C()(r,2),s=g[0],l=g[1],Z=(0,h.useState)(void 0),A=C()(Z,2),S=A[0],f=A[1],j=(0,h.useState)(""),E=C()(j,2),v=E[0],o=E[1],u=function(){e(!0),F.x1.mallAdmin.warehouseQueryAll({}).then(function(a){a.data.Error?m.ZP.error(a.data.Error.Message):l(a.data.Data||[])}).finally(function(){e(!1)})},T=function(a){confirm("\u5220\u9664\u54C1\u724C\uFF1F")&&(o(a.Id||""),F.x1.mallAdmin.warehouseUpdateStatus({Id:a.Id,IsDeleted:!0}).then(function(I){I.data.Error?m.ZP.error(I.data.Error.Message):(m.ZP.success("\u5220\u9664\u6210\u529F"),u())}).finally(function(){o("")}))},U=[{title:"\u540D\u79F0",render:function(a){return a.Name}},{title:"\u5730\u5740",render:function(a){return a.Address||"--"}},{title:"\u64CD\u4F5C",width:200,render:function(a){return(0,t.jsxs)(O.ZP.Group,{children:[(0,t.jsx)(O.ZP,{type:"link",onClick:function(){f(a)},children:"\u7F16\u8F91"}),(0,t.jsx)(O.ZP,{loading:v==a.Id,type:"link",danger:!0,onClick:function(){T(a)},children:"\u5220\u9664"})]})}}];return(0,h.useEffect)(function(){u()},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(K,{show:S!=null,hide:function(){return f(void 0)},data:S||{},ok:function(){f(void 0),u()}}),(0,t.jsx)($.Z,{title:"\u4ED3\u5E93",extra:(0,t.jsx)(O.ZP,{type:"primary",onClick:function(){f({})},children:"\u65B0\u589E"}),children:(0,t.jsx)(B.Z,{rowKey:function(a){return a.Id},loading:D,columns:U,dataSource:s,pagination:!1})})]})}},85576:function(z,L,n){n.d(L,{Z:function(){return D}});var d=n(56080),C=n(38657),F=n(56745),m=n(67294),O=n(93967),$=n.n(O),B=n(40974),h=n(8745),V=n(53124),c=n(35792),W=n(32409),y=n(4941),M=n(71194),N=function(e,r){var g={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&r.indexOf(s)<0&&(g[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(e);l<s.length;l++)r.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(e,s[l])&&(g[s[l]]=e[s[l]]);return g};const t=e=>{const{prefixCls:r,className:g,closeIcon:s,closable:l,type:Z,title:A,children:S,footer:f}=e,j=N(e,["prefixCls","className","closeIcon","closable","type","title","children","footer"]),{getPrefixCls:E}=m.useContext(V.E_),v=E(),o=r||E("modal"),u=(0,c.Z)(v),[T,U,x]=(0,M.ZP)(o,u),a=`${o}-confirm`;let I={};return Z?I={closable:l!=null?l:!1,title:"",footer:"",children:m.createElement(W.O,Object.assign({},e,{prefixCls:o,confirmPrefixCls:a,rootPrefixCls:v,content:S}))}:I={closable:l!=null?l:!0,title:A,footer:f!==null&&m.createElement(y.$,Object.assign({},e)),children:S},T(m.createElement(B.s,Object.assign({prefixCls:o,className:$()(U,`${o}-pure-panel`,Z&&a,Z&&`${a}-${Z}`,g,x,u)},j,{closeIcon:(0,y.b)(o,s),closable:l},I)))};var K=(0,h.i)(t),Q=n(94423);function P(e){return(0,d.ZP)((0,d.uW)(e))}const i=F.Z;i.useModal=Q.Z,i.info=function(r){return(0,d.ZP)((0,d.cw)(r))},i.success=function(r){return(0,d.ZP)((0,d.vq)(r))},i.error=function(r){return(0,d.ZP)((0,d.AQ)(r))},i.warning=P,i.warn=P,i.confirm=function(r){return(0,d.ZP)((0,d.Au)(r))},i.destroyAll=function(){for(;C.Z.length;){const r=C.Z.pop();r&&r()}},i.config=d.ai,i._InternalPanelDoNotUseOrYouWillBeFired=K;var D=i}}]);
