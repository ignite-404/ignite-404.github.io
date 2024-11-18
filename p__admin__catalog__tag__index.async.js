"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8835],{74590:function(G,Z,e){var l=e(15009),i=e.n(l),M=e(99289),E=e.n(M),g=e(5574),n=e.n(g),P=e(83062),j=e(14726),x=e(67294),u=e(85893);Z.Z=function(h){var C=h.action,O=h.confirmText,s=h.hide,T=(0,x.useState)(!1),L=n()(T,2),W=L[0],B=L[1],d=O||"\u786E\u5B9A\u5220\u9664\uFF1F",b=function(){var t=E()(i()().mark(function r(){return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(confirm(d)){a.next=2;break}return a.abrupt("return");case 2:return B(!0),a.prev=3,a.next=6,C();case 6:return a.prev=6,B(!1),a.finish(6);case 9:case"end":return a.stop()}},r,null,[[3,,6,9]])}));return function(){return t.apply(this,arguments)}}();return s?null:(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(P.Z,{title:d,children:(0,u.jsx)(j.ZP,{loading:W,danger:!0,type:"link",onClick:function(){b()},children:"\u5220\u9664"})})})}},92088:function(G,Z,e){e.d(Z,{d2:function(){return n},t2:function(){return j},tz:function(){return P}});var l=e(5574),i=e.n(l),M=e(67294),E=e(18629),g=e(46629),n=function(){var u=(0,M.useState)(void 0),h=i()(u,2),C=h[0],O=h[1];return(0,E.Z)(function(){O(g.ND.utc())},1e3,{immediate:!0}),C||g.ND.utc()},P=function(u){var h=(0,M.useState)(u||!1),C=i()(h,2),O=C[0],s=C[1];return{open:O,setOpen:function(){return s(!0)},setClose:function(){return s(!1)}}},j=function(u){var h=(0,M.useState)(u),C=i()(h,2),O=C[0],s=C[1];return{data:O,open:O!=null,setData:function(L){return s(L)},onHide:function(){return s(void 0)}}}},11587:function(G,Z,e){e.r(Z),e.d(Z,{default:function(){return H}});var l=e(68421),i=e(14726),M=e(4393),E=e(80799),g=e(67294),n=e(85893),P=function(o){var D=o.model,y=o.children,S=o.deletedNotice;return D==null||D.IsDeleted?S||(0,n.jsx)("span",{children:"\u8D44\u6E90\u5DF2\u7ECF\u88AB\u5220\u9664"}):(0,n.jsx)(n.Fragment,{children:y})},j=e(30699),x=e(15009),u=e.n(x),h=e(99289),C=e.n(h),O=e(97857),s=e.n(O),T=e(5574),L=e.n(T),W=e(45360),B=e(85576),d=e(78957),b=e(57381),t=e(11346),r=e(65233),U=e(74590),a=e(66419),c=function(o){var D=o.show,y=o.hide,S=o.data,p=o.ok,A=(0,g.useState)(!1),m=L()(A,2),I=m[0],v=m[1],z=(0,g.useState)({}),N=L()(z,2),f=N[0],$=N[1],Q=function(_){var V;_.Name=(V=_.Name)===null||V===void 0?void 0:V.trim(),!(0,a.Wq)(_.Name)&&(v(!0),j.x1.mallAdmin.tagSaveTag(s()({},_)).then(function(R){R.data.Error?W.ZP.error(R.data.Error.Message):(W.ZP.success("\u4FDD\u5B58\u6210\u529F"),p())}).finally(function(){v(!1)}))};return(0,g.useEffect)(function(){$(s()({},S||{}))},[S]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(B.Z,{title:"\u6807\u7B7E",open:D,onCancel:function(){return y()},footer:(0,n.jsxs)(d.Z,{children:[(0,n.jsx)(U.Z,{action:C()(u()().mark(function F(){var _;return u()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,j.x1.mallAdmin.tagDelete({Id:f.Id});case 2:_=R.sent,(0,a._y)(_,function(){y(),p()});case 4:case"end":return R.stop()}},F)})),hide:(0,a.Wq)(f.Id)}),(0,n.jsx)(i.ZP,{type:"primary",onClick:function(){Q(f)},children:"\u4FDD\u5B58"})]}),children:(0,n.jsx)(b.Z,{spinning:I,children:(0,n.jsxs)(t.Z,{labelCol:{flex:"110px"},labelAlign:"right",wrapperCol:{flex:1},children:[(0,n.jsxs)(t.Z.Item,{label:"\u540D\u79F0",required:!0,children:[(0,n.jsx)(r.Z,{count:{show:!0,max:20},maxLength:20,value:f.Name||"",onChange:function(_){$(s()(s()({},f),{},{Name:_.target.value}))}}),(0,a.Wq)(f.Name)&&(0,n.jsx)("p",{style:{color:"red"},children:"\u5FC5\u586B"})]}),(0,n.jsx)(t.Z.Item,{label:"\u63CF\u8FF0",children:(0,n.jsx)(r.Z.TextArea,{maxLength:200,value:f.Description||"",onChange:function(_){$(s()(s()({},f),{},{Description:_.target.value}))}})}),(0,n.jsx)(t.Z.Item,{label:"\u63D0\u793A",children:(0,n.jsx)(r.Z,{maxLength:50,value:f.Alert||"",onChange:function(_){$(s()(s()({},f),{},{Alert:_.target.value}))}})}),(0,n.jsx)(t.Z.Item,{label:"\u8FDE\u63A5",tooltip:"\u6682\u4E0D\u53EF\u7528",children:(0,n.jsx)(r.Z,{maxLength:1e3,value:f.Link||"",onChange:function(_){$(s()(s()({},f),{},{Link:_.target.value}))}})})]})})})})},K=e(92088),H=function(){var o,D=(0,K.t2)(),y=(0,l.Z)(j.x1.mallAdmin.tagListTags),S=((o=y.data)===null||o===void 0||(o=o.data)===null||o===void 0?void 0:o.Data)||[],p=function(){y.run({})},A=[{title:"\u540D\u79F0",render:function(I,v){return v.Name||"--"}},{title:"\u63CF\u8FF0",render:function(I,v){return v.Description||"--"}},{title:"\u63D0\u793A",render:function(I,v){return v.Alert||"--"}},{title:"\u94FE\u63A5",render:function(I,v){return v.Link||"--"}},{title:"\u64CD\u4F5C",width:200,render:function(I,v){return(0,n.jsx)(P,{model:v,children:(0,n.jsx)(i.ZP.Group,{children:(0,n.jsx)(i.ZP,{type:"link",onClick:function(){D.setData(v)},children:"\u7F16\u8F91"})})})}}];return(0,g.useEffect)(function(){p()},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c,{show:D.open,hide:function(){return D.setData(void 0)},data:D.data||{},ok:function(){D.setData(void 0),p()}}),(0,n.jsx)(M.Z,{title:"\u6807\u7B7E",extra:(0,n.jsx)(i.ZP,{type:"primary",onClick:function(){D.setData({})},children:"\u65B0\u589E"}),children:(0,n.jsx)(E.Z,{rowKey:function(I){return I.Id||""},loading:y.loading,columns:A,dataSource:S,pagination:!1})})]})}},18629:function(G,Z,e){var l=e(67294),i=e(22638),M=e(92770),E=function(g,n,P){P===void 0&&(P={});var j=(0,i.Z)(g),x=(0,l.useRef)(null),u=(0,l.useCallback)(function(){x.current&&clearInterval(x.current)},[]);return(0,l.useEffect)(function(){if(!(!(0,M.hj)(n)||n<0))return P.immediate&&j(),x.current=setInterval(j,n),u},[n,P.immediate]),u};Z.Z=E},85576:function(G,Z,e){e.d(Z,{Z:function(){return b}});var l=e(56080),i=e(38657),M=e(56745),E=e(67294),g=e(93967),n=e.n(g),P=e(40974),j=e(8745),x=e(53124),u=e(35792),h=e(32409),C=e(4941),O=e(71194),s=function(t,r){var U={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&r.indexOf(a)<0&&(U[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,a=Object.getOwnPropertySymbols(t);c<a.length;c++)r.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(t,a[c])&&(U[a[c]]=t[a[c]]);return U};const T=t=>{const{prefixCls:r,className:U,closeIcon:a,closable:c,type:K,title:H,children:o,footer:D}=t,y=s(t,["prefixCls","className","closeIcon","closable","type","title","children","footer"]),{getPrefixCls:S}=E.useContext(x.E_),p=S(),A=r||S("modal"),m=(0,u.Z)(p),[I,v,z]=(0,O.ZP)(A,m),N=`${A}-confirm`;let f={};return K?f={closable:c!=null?c:!1,title:"",footer:"",children:E.createElement(h.O,Object.assign({},t,{prefixCls:A,confirmPrefixCls:N,rootPrefixCls:p,content:o}))}:f={closable:c!=null?c:!0,title:H,footer:D!==null&&E.createElement(C.$,Object.assign({},t)),children:o},I(E.createElement(P.s,Object.assign({prefixCls:A,className:n()(v,`${A}-pure-panel`,K&&N,K&&`${N}-${K}`,U,z,m)},y,{closeIcon:(0,C.b)(A,a),closable:c},f)))};var L=(0,j.i)(T),W=e(94423);function B(t){return(0,l.ZP)((0,l.uW)(t))}const d=M.Z;d.useModal=W.Z,d.info=function(r){return(0,l.ZP)((0,l.cw)(r))},d.success=function(r){return(0,l.ZP)((0,l.vq)(r))},d.error=function(r){return(0,l.ZP)((0,l.AQ)(r))},d.warning=B,d.warn=B,d.confirm=function(r){return(0,l.ZP)((0,l.Au)(r))},d.destroyAll=function(){for(;i.Z.length;){const r=i.Z.pop();r&&r()}},d.config=l.ai,d._InternalPanelDoNotUseOrYouWillBeFired=L;var b=d}}]);
