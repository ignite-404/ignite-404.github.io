"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8835],{74590:function(G,Z,e){var s=e(15009),i=e.n(s),A=e(99289),x=e.n(A),P=e(5574),n=e.n(P),O=e(83062),M=e(28036),I=e(67294),g=e(85893);Z.Z=function(B){var y=B.action,h=B.confirmText,r=B.hide,C=(0,I.useState)(!1),d=n()(C,2),E=d[0],D=d[1],u=h||"\u786E\u5B9A\u5220\u9664\uFF1F",b=function(){var t=x()(i()().mark(function l(){return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(confirm(u)){a.next=2;break}return a.abrupt("return");case 2:return D(!0),a.prev=3,a.next=6,y();case 6:return a.prev=6,D(!1),a.finish(6);case 9:case"end":return a.stop()}},l,null,[[3,,6,9]])}));return function(){return t.apply(this,arguments)}}();return r?null:(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(O.Z,{title:u,children:(0,g.jsx)(M.ZP,{loading:E,danger:!0,type:"link",onClick:function(){b()},children:"\u5220\u9664"})})})}},92088:function(G,Z,e){e.d(Z,{LB:function(){return M},t2:function(){return B},tz:function(){return g},vI:function(){return I}});var s=e(5574),i=e.n(s),A=e(67294),x=e(18629),P=e(46629),n=e(76021),O=e(95813),M=function(){var h=(0,n.YB)(),r=function(d,E){var D=h.formatMessage({id:d,defaultMessage:E});return(0,O.Wq)(D)?null:D};return{intl:h,format_message:r}},I=function(){var h=(0,A.useState)(void 0),r=i()(h,2),C=r[0],d=r[1];return(0,x.Z)(function(){d(P.ND.utc())},1e3,{immediate:!0}),C||P.ND.utc()},g=function(h){var r=(0,A.useState)(h||!1),C=i()(r,2),d=C[0],E=C[1];return{open:d,setOpen:function(){return E(!0)},setClose:function(){return E(!1)}}},B=function(h){var r=(0,A.useState)(h),C=i()(r,2),d=C[0],E=C[1];return{data:d,open:d!=null,setData:function(u){return E(u)},onHide:function(){return E(void 0)}}}},11587:function(G,Z,e){e.r(Z),e.d(Z,{default:function(){return H}});var s=e(68421),i=e(28036),A=e(4393),x=e(80799),P=e(67294),n=e(85893),O=function(o){var j=o.model,T=o.children,S=o.deletedNotice;return j==null||j.IsDeleted?S||(0,n.jsx)("span",{children:"\u8D44\u6E90\u5DF2\u7ECF\u88AB\u5220\u9664"}):(0,n.jsx)(n.Fragment,{children:T})},M=e(30699),I=e(15009),g=e.n(I),B=e(99289),y=e.n(B),h=e(97857),r=e.n(h),C=e(5574),d=e.n(C),E=e(45360),D=e(85576),u=e(78957),b=e(57381),t=e(11346),l=e(65233),F=e(74590),a=e(95813),c=function(o){var j=o.show,T=o.hide,S=o.data,R=o.ok,L=(0,P.useState)(!1),m=d()(L,2),U=m[0],v=m[1],z=(0,P.useState)({}),N=d()(z,2),f=N[0],$=N[1],Y=function(_){var V;_.Name=(V=_.Name)===null||V===void 0?void 0:V.trim(),!(0,a.Wq)(_.Name)&&(v(!0),M.x1.mallAdmin.tagSaveTag(r()({},_)).then(function(p){p.data.Error?E.ZP.error(p.data.Error.Message):(E.ZP.success("\u4FDD\u5B58\u6210\u529F"),R())}).finally(function(){v(!1)}))};return(0,P.useEffect)(function(){$(r()({},S||{}))},[S]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(D.Z,{title:"\u6807\u7B7E",open:j,onCancel:function(){return T()},footer:(0,n.jsxs)(u.Z,{children:[(0,n.jsx)(F.Z,{action:y()(g()().mark(function W(){var _;return g()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,M.x1.mallAdmin.tagDelete({Id:f.Id});case 2:_=p.sent,(0,a._y)(_,function(){T(),R()});case 4:case"end":return p.stop()}},W)})),hide:(0,a.Wq)(f.Id)}),(0,n.jsx)(i.ZP,{type:"primary",onClick:function(){Y(f)},children:"\u4FDD\u5B58"})]}),children:(0,n.jsx)(b.Z,{spinning:U,children:(0,n.jsxs)(t.Z,{labelCol:{flex:"110px"},labelAlign:"right",wrapperCol:{flex:1},children:[(0,n.jsxs)(t.Z.Item,{label:"\u540D\u79F0",required:!0,children:[(0,n.jsx)(l.Z,{count:{show:!0,max:20},maxLength:20,value:f.Name||"",onChange:function(_){$(r()(r()({},f),{},{Name:_.target.value}))}}),(0,a.Wq)(f.Name)&&(0,n.jsx)("p",{style:{color:"red"},children:"\u5FC5\u586B"})]}),(0,n.jsx)(t.Z.Item,{label:"\u63CF\u8FF0",children:(0,n.jsx)(l.Z.TextArea,{maxLength:200,value:f.Description||"",onChange:function(_){$(r()(r()({},f),{},{Description:_.target.value}))}})}),(0,n.jsx)(t.Z.Item,{label:"\u63D0\u793A",children:(0,n.jsx)(l.Z,{maxLength:50,value:f.Alert||"",onChange:function(_){$(r()(r()({},f),{},{Alert:_.target.value}))}})}),(0,n.jsx)(t.Z.Item,{label:"\u8FDE\u63A5",tooltip:"\u6682\u4E0D\u53EF\u7528",children:(0,n.jsx)(l.Z,{maxLength:1e3,value:f.Link||"",onChange:function(_){$(r()(r()({},f),{},{Link:_.target.value}))}})})]})})})})},K=e(92088),H=function(){var o,j=(0,K.t2)(),T=(0,s.Z)(M.x1.mallAdmin.tagListTags),S=((o=T.data)===null||o===void 0||(o=o.data)===null||o===void 0?void 0:o.Data)||[],R=function(){T.run({})},L=[{title:"\u540D\u79F0",render:function(U,v){return v.Name||"--"}},{title:"\u63CF\u8FF0",render:function(U,v){return v.Description||"--"}},{title:"\u63D0\u793A",render:function(U,v){return v.Alert||"--"}},{title:"\u94FE\u63A5",render:function(U,v){return v.Link||"--"}},{title:"\u64CD\u4F5C",width:200,render:function(U,v){return(0,n.jsx)(O,{model:v,children:(0,n.jsx)(i.ZP.Group,{children:(0,n.jsx)(i.ZP,{type:"link",onClick:function(){j.setData(v)},children:"\u7F16\u8F91"})})})}}];return(0,P.useEffect)(function(){R()},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c,{show:j.open,hide:function(){return j.setData(void 0)},data:j.data||{},ok:function(){j.setData(void 0),R()}}),(0,n.jsx)(A.Z,{title:"\u6807\u7B7E",extra:(0,n.jsx)(i.ZP,{type:"primary",onClick:function(){j.setData({})},children:"\u65B0\u589E"}),children:(0,n.jsx)(x.Z,{rowKey:function(U){return U.Id||""},loading:T.loading,columns:L,dataSource:S,pagination:!1})})]})}},18629:function(G,Z,e){var s=e(67294),i=e(22638),A=e(92770),x=function(P,n,O){O===void 0&&(O={});var M=(0,i.Z)(P),I=(0,s.useRef)(null),g=(0,s.useCallback)(function(){I.current&&clearInterval(I.current)},[]);return(0,s.useEffect)(function(){if(!(!(0,A.hj)(n)||n<0))return O.immediate&&M(),I.current=setInterval(M,n),g},[n,O.immediate]),g};Z.Z=x},85576:function(G,Z,e){e.d(Z,{Z:function(){return b}});var s=e(56080),i=e(38657),A=e(56745),x=e(67294),P=e(93967),n=e.n(P),O=e(40974),M=e(8745),I=e(53124),g=e(35792),B=e(32409),y=e(4941),h=e(71194),r=function(t,l){var F={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&l.indexOf(a)<0&&(F[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,a=Object.getOwnPropertySymbols(t);c<a.length;c++)l.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(t,a[c])&&(F[a[c]]=t[a[c]]);return F};const C=t=>{const{prefixCls:l,className:F,closeIcon:a,closable:c,type:K,title:H,children:o,footer:j}=t,T=r(t,["prefixCls","className","closeIcon","closable","type","title","children","footer"]),{getPrefixCls:S}=x.useContext(I.E_),R=S(),L=l||S("modal"),m=(0,g.Z)(R),[U,v,z]=(0,h.ZP)(L,m),N=`${L}-confirm`;let f={};return K?f={closable:c!=null?c:!1,title:"",footer:"",children:x.createElement(B.O,Object.assign({},t,{prefixCls:L,confirmPrefixCls:N,rootPrefixCls:R,content:o}))}:f={closable:c!=null?c:!0,title:H,footer:j!==null&&x.createElement(y.$,Object.assign({},t)),children:o},U(x.createElement(O.s,Object.assign({prefixCls:L,className:n()(v,`${L}-pure-panel`,K&&N,K&&`${N}-${K}`,F,z,m)},T,{closeIcon:(0,y.b)(L,a),closable:c},f)))};var d=(0,M.i)(C),E=e(94423);function D(t){return(0,s.ZP)((0,s.uW)(t))}const u=A.Z;u.useModal=E.Z,u.info=function(l){return(0,s.ZP)((0,s.cw)(l))},u.success=function(l){return(0,s.ZP)((0,s.vq)(l))},u.error=function(l){return(0,s.ZP)((0,s.AQ)(l))},u.warning=D,u.warn=D,u.confirm=function(l){return(0,s.ZP)((0,s.Au)(l))},u.destroyAll=function(){for(;i.Z.length;){const l=i.Z.pop();l&&l()}},u.config=s.ai,u._InternalPanelDoNotUseOrYouWillBeFired=d;var b=u}}]);
