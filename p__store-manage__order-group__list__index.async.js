"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2146],{74590:function(T,c,e){var t=e(15009),l=e.n(t),n=e(99289),r=e.n(n),a=e(5574),o=e.n(a),m=e(83062),y=e(14726),E=e(67294),j=e(85893);c.Z=function(f){var O=f.action,p=f.confirmText,C=f.hide,Z=(0,E.useState)(!1),D=o()(Z,2),W=D[0],L=D[1],v=p||"\u786E\u5B9A\u5220\u9664\uFF1F",b=function(){var i=r()(l()().mark(function u(){return l()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(confirm(v)){d.next=2;break}return d.abrupt("return");case 2:return L(!0),d.prev=3,d.next=6,O();case 6:return d.prev=6,L(!1),d.finish(6);case 9:case"end":return d.stop()}},u,null,[[3,,6,9]])}));return function(){return i.apply(this,arguments)}}();return C?null:(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(m.Z,{title:v,children:(0,j.jsx)(y.ZP,{loading:W,danger:!0,type:"link",onClick:function(){b()},children:"\u5220\u9664"})})})}},23806:function(T,c,e){var t=e(1288),l=e(85893);c.Z=function(n){var r=n.model,a=n.fallback;if(r==null||r==null)return null;var o=r==null?void 0:r.CreationTime,m=r==null?void 0:r.LastModificationTime;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{style:{},children:[(0,l.jsx)("div",{children:(0,l.jsx)(t.Z,{prefix:(0,l.jsx)("span",{children:"\u521B\u5EFA\uFF1A"}),onlyDate:!0,timeStr:o,fallback:a})}),(0,l.jsx)("div",{children:(0,l.jsx)(t.Z,{prefix:(0,l.jsx)("span",{children:"\u4FEE\u6539\uFF1A"}),onlyDate:!0,timeStr:m,fallback:a})})]})})}},1288:function(T,c,e){var t=e(78957),l=e(83062),n=e(46629),r=e(85893);c.Z=function(a){var o,m=a.timeStr,y=a.fallback,E=a.onlyDate,j=a.prefix,f=(o=(0,n.mg)(m))===null||o===void 0?void 0:o.add(n.Mg,"hour");if(!f)return y||null;var O=(0,n.ND)().utc().add(n.Mg,"hour"),p=f.isSame(O,"year"),C=f.diff(O,"day"),Z=p?f.format(n.AK):f.format(n.vc),D=function(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(t.Z,{direction:"horizontal",children:[(0,r.jsx)("div",{children:f.fromNow()}),(0,r.jsx)("div",{children:f.format(n.On)})]}),(0,r.jsx)("div",{children:f.format(n.t9)})]})};return(0,r.jsx)(l.Z,{title:D(),children:(0,r.jsxs)(t.Z,{direction:"horizontal",children:[j,(0,r.jsx)("div",{className:"inline-block cursor-pointer hover:bg-orange-500",children:E?f.format(n.vc):f.format(n.dq)})]})})}},68043:function(T,c,e){e.r(c),e.d(c,{default:function(){return J}});var t=e(15009),l=e.n(t),n=e(99289),r=e.n(n),a=e(97857),o=e.n(a),m=e(5574),y=e.n(m),E=e(68421),j=e(78957),f=e(45360),O=e(4393),p=e(14726),C=e(80799),Z=e(87735),D=e(67294),W=e(74590),L=e(23806),v=e(30699),b=e(46629),i=e(47650),u=e(66419),_=e(85576),d=e(57381),g=e(11346),N=e(25278),s=e(85893),H=function(I){var S=I.show,$=I.hide,M=I.data,G=I.ok,z=(0,D.useState)(!1),U=y()(z,2),V=U[0],B=U[1],F=(0,D.useState)({}),Q=y()(F,2),A=Q[0],K=Q[1],X=function(h){var x;h.Name=(x=h.Name)===null||x===void 0?void 0:x.trim(),!(0,u.Wq)(h.Name)&&(B(!0),v.x1.mallManager.orderGroupSave(o()({},h)).then(function(R){(0,u._y)(R,function(){f.ZP.success("\u4FDD\u5B58\u6210\u529F"),G()})}).finally(function(){B(!1)}))};return(0,D.useEffect)(function(){K(o()({},M))},[M]),(0,D.useEffect)(function(){S||K({})},[S]),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(_.Z,{title:"\u6279\u6B21",open:S,onCancel:function(){return $()},destroyOnClose:!0,footer:(0,s.jsxs)(j.Z,{children:[(0,s.jsx)(W.Z,{action:r()(l()().mark(function P(){var h;return l()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,v.x1.mallManager.orderGroupDelete({Id:A.Id});case 2:h=R.sent,(0,u._y)(h,function(){$(),G()});case 4:case"end":return R.stop()}},P)})),hide:(0,u.Wq)(A.Id)}),(0,s.jsx)(p.ZP,{type:"primary",loading:V,onClick:function(){X(A)},children:"\u4FDD\u5B58"})]}),children:(0,s.jsx)(d.Z,{spinning:V,children:(0,s.jsxs)(g.Z,{labelCol:{flex:"110px"},labelAlign:"right",wrapperCol:{flex:1},children:[(0,s.jsxs)(g.Z.Item,{label:"\u540D\u79F0",required:!0,children:[(0,s.jsx)(N.Z,{count:{show:!0,max:20},maxLength:20,value:A.Name||"",onChange:function(h){K(o()(o()({},A),{},{Name:h.target.value}))}}),(0,u.Wq)(A.Name)&&(0,s.jsx)("p",{style:{color:"red"},children:"\u5FC5\u586B"})]}),(0,s.jsx)(g.Z.Item,{label:"\u63CF\u8FF0",rules:[{max:50}],children:(0,s.jsx)(N.Z.TextArea,{value:A.Description||"",onChange:function(h){K(o()(o()({},A),{},{Description:h.target.value}))}})})]})})})})},J=function(){var I,S=(0,E.Z)(v.x1.mallManager.orderGroupQueryPaging,{manual:!0}),$=S.loading,M=((I=S.data)===null||I===void 0?void 0:I.data)||{},G=(0,D.useState)({Page:1}),z=y()(G,2),U=z[0],V=z[1],B=(0,D.useState)(void 0),F=y()(B,2),Q=F[0],A=F[1],K=function(){S.run(o()({},U))},X=[{title:"\u540D\u79F0",render:function(h,x){return(0,s.jsx)(i.rU,{to:{pathname:"/store-manage/order-group/detail",search:Z.stringify({id:x.Id})},target:"_blank",children:x.Name})}},{title:"\u63CF\u8FF0",render:function(h,x){return x.Description||"--"}},{title:"\u65F6\u95F4",render:function(h,x){return(0,s.jsx)(L.Z,{model:x})}},{title:"\u64CD\u4F5C",width:200,render:function(h,x){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(j.Z,{direction:"horizontal",children:(0,s.jsx)(W.Z,{action:r()(l()().mark(function R(){var w;return l()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:return Y.next=2,v.x1.mallManager.orderGroupDelete({Id:x==null?void 0:x.Id});case 2:w=Y.sent,(0,u._y)(w,function(){f.ZP.success("\u5220\u9664\u6210\u529F"),K()});case 4:case"end":return Y.stop()}},R)}))})})})}}];return(0,D.useEffect)(function(){K()},[U]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(H,{show:Q!=null,hide:function(){return A(void 0)},data:Q||{},ok:function(){A(void 0),K()}}),(0,s.jsx)(O.Z,{title:"\u8BA2\u5355\u6279\u6B21",extra:(0,s.jsx)(p.ZP,{type:"primary",onClick:function(){A({Name:"\u8BA2\u5355\u6279\u6B21-".concat(b.ND.utc().add(b.Mg,"hour").format(b.vc)),Description:void 0})},children:"\u65B0\u589E"}),children:(0,s.jsx)(C.Z,{rowKey:function(h){return h.Id||""},loading:$,columns:X,dataSource:M.Items||[],pagination:{showSizeChanger:!1,pageSize:20,current:U.Page,total:M.TotalCount,onChange:function(h){V(o()(o()({},U),{},{Page:h}))}}})})]})}},85576:function(T,c,e){e.d(c,{Z:function(){return b}});var t=e(56080),l=e(38657),n=e(56745),r=e(67294),a=e(93967),o=e.n(a),m=e(40974),y=e(8745),E=e(53124),j=e(35792),f=e(32409),O=e(4941),p=e(71194),C=function(i,u){var _={};for(var d in i)Object.prototype.hasOwnProperty.call(i,d)&&u.indexOf(d)<0&&(_[d]=i[d]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,d=Object.getOwnPropertySymbols(i);g<d.length;g++)u.indexOf(d[g])<0&&Object.prototype.propertyIsEnumerable.call(i,d[g])&&(_[d[g]]=i[d[g]]);return _};const Z=i=>{const{prefixCls:u,className:_,closeIcon:d,closable:g,type:N,title:s,children:H,footer:J}=i,I=C(i,["prefixCls","className","closeIcon","closable","type","title","children","footer"]),{getPrefixCls:S}=r.useContext(E.E_),$=S(),M=u||S("modal"),G=(0,j.Z)($),[z,U,V]=(0,p.ZP)(M,G),B=`${M}-confirm`;let F={};return N?F={closable:g!=null?g:!1,title:"",footer:"",children:r.createElement(f.O,Object.assign({},i,{prefixCls:M,confirmPrefixCls:B,rootPrefixCls:$,content:H}))}:F={closable:g!=null?g:!0,title:s,footer:J!==null&&r.createElement(O.$,Object.assign({},i)),children:H},z(r.createElement(m.s,Object.assign({prefixCls:M,className:o()(U,`${M}-pure-panel`,N&&B,N&&`${B}-${N}`,_,V,G)},I,{closeIcon:(0,O.b)(M,d),closable:g},F)))};var D=(0,y.i)(Z),W=e(94423);function L(i){return(0,t.ZP)((0,t.uW)(i))}const v=n.Z;v.useModal=W.Z,v.info=function(u){return(0,t.ZP)((0,t.cw)(u))},v.success=function(u){return(0,t.ZP)((0,t.vq)(u))},v.error=function(u){return(0,t.ZP)((0,t.AQ)(u))},v.warning=L,v.warn=L,v.confirm=function(u){return(0,t.ZP)((0,t.Au)(u))},v.destroyAll=function(){for(;l.Z.length;){const u=l.Z.pop();u&&u()}},v.config=t.ai,v._InternalPanelDoNotUseOrYouWillBeFired=D;var b=v},29335:function(T){function c(t,l){return Object.prototype.hasOwnProperty.call(t,l)}T.exports=function(t,l,n,r){l=l||"&",n=n||"=";var a={};if(typeof t!="string"||t.length===0)return a;var o=/\+/g;t=t.split(l);var m=1e3;r&&typeof r.maxKeys=="number"&&(m=r.maxKeys);var y=t.length;m>0&&y>m&&(y=m);for(var E=0;E<y;++E){var j=t[E].replace(o,"%20"),f=j.indexOf(n),O,p,C,Z;f>=0?(O=j.substr(0,f),p=j.substr(f+1)):(O=j,p=""),C=decodeURIComponent(O),Z=decodeURIComponent(p),c(a,C)?e(a[C])?a[C].push(Z):a[C]=[a[C],Z]:a[C]=Z}return a};var e=Array.isArray||function(t){return Object.prototype.toString.call(t)==="[object Array]"}},33120:function(T){var c=function(n){switch(typeof n){case"string":return n;case"boolean":return n?"true":"false";case"number":return isFinite(n)?n:"";default:return""}};T.exports=function(n,r,a,o){return r=r||"&",a=a||"=",n===null&&(n=void 0),typeof n=="object"?t(l(n),function(m){var y=encodeURIComponent(c(m))+a;return e(n[m])?t(n[m],function(E){return y+encodeURIComponent(c(E))}).join(r):y+encodeURIComponent(c(n[m]))}).join(r):o?encodeURIComponent(c(o))+a+encodeURIComponent(c(n)):""};var e=Array.isArray||function(n){return Object.prototype.toString.call(n)==="[object Array]"};function t(n,r){if(n.map)return n.map(r);for(var a=[],o=0;o<n.length;o++)a.push(r(n[o],o));return a}var l=Object.keys||function(n){var r=[];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&r.push(a);return r}},87735:function(T,c,e){c.decode=c.parse=e(29335),c.encode=c.stringify=e(33120)}}]);
