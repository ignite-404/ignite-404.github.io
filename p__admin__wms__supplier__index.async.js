"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8182],{94014:function(G,N,e){e.r(N),e.d(N,{default:function(){return $}});var d=e(97857),A=e.n(d),V=e(5574),c=e.n(V),D=e(30699),F=e(45360),I=e(14726),M=e(4393),z=e(80799),m=e(67294),v=e(11346),T=e(85576),E=e(25278),n=e(85893),L=function(s){var P=s.show,t=s.hide,r=s.data,x=s.ok,l=(0,m.useState)(!1),a=c()(l,2),g=a[0],p=a[1],y=v.Z.useForm(),f=c()(y,1),S=f[0],O=function(i){p(!0),console.log(i),D.x1.mallAdmin.supplierSave(i).then(function(C){C.data.Error?F.ZP.error(C.data.Error.Message):(F.ZP.success("\u4FDD\u5B58\u6210\u529F"),x())}).finally(function(){p(!1)})};return(0,m.useEffect)(function(){S.resetFields(),r&&S.setFieldsValue(r)},[r]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(T.Z,{open:P,onCancel:function(){return t()},onOk:function(){return S.submit()},confirmLoading:g,children:(0,n.jsxs)(v.Z,{form:S,onFinish:function(i){return O(i)},labelCol:{flex:"110px"},labelAlign:"right",wrapperCol:{flex:1},children:[(0,n.jsx)(v.Z.Item,{name:"Id",children:(0,n.jsx)(E.Z,{type:"hidden"})}),(0,n.jsx)(v.Z.Item,{label:"\u540D\u79F0",name:"Name",rules:[{required:!0},{max:10}],children:(0,n.jsx)(E.Z,{})}),(0,n.jsx)(v.Z.Item,{label:"\u5730\u5740",name:"Address",rules:[{max:500}],children:(0,n.jsx)(E.Z,{})}),(0,n.jsx)(v.Z.Item,{label:"\u8054\u7CFB\u4EBA\u59D3\u540D",name:"ContactName",rules:[{max:500}],children:(0,n.jsx)(E.Z,{})}),(0,n.jsx)(v.Z.Item,{label:"\u8054\u7CFB\u4EBA\u7535\u8BDD",name:"Telephone",rules:[{max:500}],children:(0,n.jsx)(E.Z,{})})]})})})},W=function(P){var t=P.query,r=P.onSearch,x=(0,m.useState)({}),l=c()(x,2),a=l[0],g=l[1],p=function(f){f.Page=1,r&&r(f)};return(0,m.useEffect)(function(){g(A()({},t))},[]),(0,n.jsx)(M.Z,{bordered:!1,style:{marginBottom:10},children:(0,n.jsx)(v.Z,{labelCol:{span:8},wrapperCol:{span:16},layout:"inline",children:(0,n.jsx)(v.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,n.jsx)(I.ZP,{type:"primary",htmlType:"submit",onClick:function(){p(a)},children:"\u641C\u7D22"})})})})},K=W,$=function(){var s=(0,m.useState)(!0),P=c()(s,2),t=P[0],r=P[1],x=(0,m.useState)({Items:[],TotalCount:0}),l=c()(x,2),a=l[0],g=l[1],p=(0,m.useState)({Page:1}),y=c()(p,2),f=y[0],S=y[1],O=(0,m.useState)(void 0),Z=c()(O,2),i=Z[0],C=Z[1],Q=(0,m.useState)(""),b=c()(Q,2),U=b[0],B=b[1],j=function(u){r(!0),D.x1.mallAdmin.supplierQueryPaging(u).then(function(o){o.data.Error?F.ZP.error(o.data.Error.Message):g(o.data||{})}).finally(function(){r(!1)})},Y=function(u){confirm("\u5220\u9664\u54C1\u724C\uFF1F")&&(B(u.Id),D.x1.mallAdmin.supplierUpdateStatus({Id:u.Id,IsDeleted:!0}).then(function(o){o.data.Error?F.ZP.error(o.data.Error.Message):(F.ZP.success("\u5220\u9664\u6210\u529F"),j(f))}).finally(function(){B("")}))},H=[{title:"\u540D\u79F0",render:function(u,o){return o.Name}},{title:"\u8054\u7CFB\u4EBA",render:function(u,o){return o.ContactName||"--"}},{title:"\u8054\u7CFB\u7535\u8BDD",render:function(u,o){return o.Telephone||"--"}},{title:"\u5730\u5740",render:function(u,o){return o.Address||"--"}},{title:"\u64CD\u4F5C",width:200,render:function(u,o){return(0,n.jsxs)(I.ZP.Group,{children:[(0,n.jsx)(I.ZP,{type:"link",onClick:function(){C(o)},children:"\u7F16\u8F91"}),(0,n.jsx)(I.ZP,{loading:U==o.Id,type:"link",danger:!0,onClick:function(){Y(o)},children:"\u5220\u9664"})]})}}];return(0,m.useEffect)(function(){j(f)},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(L,{show:i!=null,hide:function(){return C(void 0)},data:i||{},ok:function(){C(void 0),j(f)}}),(0,n.jsx)(K,{query:f,onSearch:function(u){S(u),j(u)}}),(0,n.jsx)(M.Z,{title:"\u4F9B\u5E94\u5546",extra:(0,n.jsx)(I.ZP,{type:"primary",onClick:function(){C({})},children:"\u65B0\u589E"}),children:(0,n.jsx)(z.Z,{rowKey:function(u){return u.Id||""},loading:t,columns:H,dataSource:a.Items||[],pagination:{showSizeChanger:!1,pageSize:20,current:f.Page,total:a.TotalCount,onChange:function(u){var o=A()(A()({},f),{},{Page:u});S(o),j(o)}}})})]})}},85576:function(G,N,e){e.d(N,{Z:function(){return P}});var d=e(56080),A=e(38657),V=e(56745),c=e(67294),D=e(93967),F=e.n(D),I=e(40974),M=e(8745),z=e(53124),m=e(35792),v=e(32409),T=e(4941),E=e(71194),n=function(t,r){var x={};for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&r.indexOf(l)<0&&(x[l]=t[l]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,l=Object.getOwnPropertySymbols(t);a<l.length;a++)r.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(t,l[a])&&(x[l[a]]=t[l[a]]);return x};const L=t=>{const{prefixCls:r,className:x,closeIcon:l,closable:a,type:g,title:p,children:y,footer:f}=t,S=n(t,["prefixCls","className","closeIcon","closable","type","title","children","footer"]),{getPrefixCls:O}=c.useContext(z.E_),Z=O(),i=r||O("modal"),C=(0,m.Z)(Z),[Q,b,U]=(0,E.ZP)(i,C),B=`${i}-confirm`;let j={};return g?j={closable:a!=null?a:!1,title:"",footer:"",children:c.createElement(v.O,Object.assign({},t,{prefixCls:i,confirmPrefixCls:B,rootPrefixCls:Z,content:y}))}:j={closable:a!=null?a:!0,title:p,footer:f!==null&&c.createElement(T.$,Object.assign({},t)),children:y},Q(c.createElement(I.s,Object.assign({prefixCls:i,className:F()(b,`${i}-pure-panel`,g&&B,g&&`${B}-${g}`,x,U,C)},S,{closeIcon:(0,T.b)(i,l),closable:a},j)))};var W=(0,M.i)(L),K=e(94423);function $(t){return(0,d.ZP)((0,d.uW)(t))}const s=V.Z;s.useModal=K.Z,s.info=function(r){return(0,d.ZP)((0,d.cw)(r))},s.success=function(r){return(0,d.ZP)((0,d.vq)(r))},s.error=function(r){return(0,d.ZP)((0,d.AQ)(r))},s.warning=$,s.warn=$,s.confirm=function(r){return(0,d.ZP)((0,d.Au)(r))},s.destroyAll=function(){for(;A.Z.length;){const r=A.Z.pop();r&&r()}},s.config=d.ai,s._InternalPanelDoNotUseOrYouWillBeFired=W;var P=s}}]);
