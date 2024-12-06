"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2146],{74590:function(T,d,e){var t=e(15009),l=e.n(t),n=e(99289),r=e.n(n),a=e(5574),o=e.n(a),m=e(83062),y=e(28036),E=e(67294),j=e(85893);d.Z=function(c){var O=c.action,p=c.confirmText,P=c.hide,A=(0,E.useState)(!1),D=o()(A,2),W=D[0],L=D[1],v=p||"\u786E\u5B9A\u5220\u9664\uFF1F",b=function(){var s=r()(l()().mark(function f(){return l()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(confirm(v)){i.next=2;break}return i.abrupt("return");case 2:return L(!0),i.prev=3,i.next=6,O();case 6:return i.prev=6,L(!1),i.finish(6);case 9:case"end":return i.stop()}},f,null,[[3,,6,9]])}));return function(){return s.apply(this,arguments)}}();return P?null:(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(m.Z,{title:v,children:(0,j.jsx)(y.ZP,{loading:W,danger:!0,type:"link",onClick:function(){b()},children:"\u5220\u9664"})})})}},23806:function(T,d,e){var t=e(1288),l=e(85893);d.Z=function(n){var r=n.model,a=n.fallback;if(r==null||r==null)return null;var o=r==null?void 0:r.CreationTime,m=r==null?void 0:r.LastModificationTime;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{style:{},children:[(0,l.jsx)("div",{children:(0,l.jsx)(t.Z,{prefix:(0,l.jsx)("span",{children:"\u521B\u5EFA\uFF1A"}),onlyDate:!0,timeStr:o,fallback:a})}),(0,l.jsx)("div",{children:(0,l.jsx)(t.Z,{prefix:(0,l.jsx)("span",{children:"\u4FEE\u6539\uFF1A"}),onlyDate:!0,timeStr:m,fallback:a})})]})})}},1288:function(T,d,e){var t=e(78957),l=e(83062),n=e(46629),r=e(85893);d.Z=function(a){var o,m=a.timeStr,y=a.fallback,E=a.onlyDate,j=a.prefix,c=(o=(0,n.QW)(m))===null||o===void 0?void 0:o.local();if(!c)return y||null;var O=(0,n.ND)().utc().local(),p=c.isSame(O,"year"),P=c.diff(O,"day"),A=p?c.format(n.AK):c.format(n.vc),D=function(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(t.Z,{direction:"horizontal",children:[(0,r.jsx)("div",{children:c.fromNow()}),(0,r.jsx)("div",{children:c.format(n.On)})]}),(0,r.jsx)("div",{children:c.format(n.t9)})]})};return(0,r.jsx)(l.Z,{title:D(),children:(0,r.jsxs)(t.Z,{direction:"horizontal",children:[j,(0,r.jsx)("div",{className:"inline-block cursor-pointer hover:bg-orange-500",children:E?c.format(n.vc):c.format(n.dq)})]})})}},68043:function(T,d,e){e.r(d),e.d(d,{default:function(){return J}});var t=e(15009),l=e.n(t),n=e(99289),r=e.n(n),a=e(97857),o=e.n(a),m=e(5574),y=e.n(m),E=e(68421),j=e(78957),c=e(45360),O=e(4393),p=e(28036),P=e(80799),A=e(87735),D=e(67294),W=e(74590),L=e(23806),v=e(30699),b=e(46629),s=e(95813),f=e(76021),R=e(85576),i=e(57381),g=e(11346),N=e(65233),u=e(85893),H=function(I){var S=I.show,$=I.hide,M=I.data,G=I.ok,z=(0,D.useState)(!1),_=y()(z,2),Q=_[0],B=_[1],F=(0,D.useState)({}),V=y()(F,2),Z=V[0],K=V[1],X=function(h){var x;h.Name=(x=h.Name)===null||x===void 0?void 0:x.trim(),!(0,s.Wq)(h.Name)&&(B(!0),v.x1.mallManager.orderGroupSave(o()({},h)).then(function(U){(0,s._y)(U,function(){c.ZP.success("\u4FDD\u5B58\u6210\u529F"),G()})}).finally(function(){B(!1)}))};return(0,D.useEffect)(function(){K(o()({},M))},[M]),(0,D.useEffect)(function(){S||K({})},[S]),(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(R.Z,{title:"\u6279\u6B21",open:S,onCancel:function(){return $()},destroyOnClose:!0,footer:(0,u.jsxs)(j.Z,{children:[(0,u.jsx)(W.Z,{action:r()(l()().mark(function C(){var h;return l()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,v.x1.mallManager.orderGroupDelete({Id:Z.Id});case 2:h=U.sent,(0,s._y)(h,function(){$(),G()});case 4:case"end":return U.stop()}},C)})),hide:(0,s.Wq)(Z.Id)}),(0,u.jsx)(p.ZP,{type:"primary",loading:Q,onClick:function(){X(Z)},children:"\u4FDD\u5B58"})]}),children:(0,u.jsx)(i.Z,{spinning:Q,children:(0,u.jsxs)(g.Z,{labelCol:{flex:"110px"},labelAlign:"right",wrapperCol:{flex:1},children:[(0,u.jsxs)(g.Z.Item,{label:"\u540D\u79F0",required:!0,children:[(0,u.jsx)(N.Z,{count:{show:!0,max:20},maxLength:20,value:Z.Name||"",onChange:function(h){K(o()(o()({},Z),{},{Name:h.target.value}))}}),(0,s.Wq)(Z.Name)&&(0,u.jsx)("p",{style:{color:"red"},children:"\u5FC5\u586B"})]}),(0,u.jsx)(g.Z.Item,{label:"\u63CF\u8FF0",rules:[{max:50}],children:(0,u.jsx)(N.Z.TextArea,{value:Z.Description||"",onChange:function(h){K(o()(o()({},Z),{},{Description:h.target.value}))}})})]})})})})},J=function(){var I,S=(0,E.Z)(v.x1.mallManager.orderGroupQueryPaging,{manual:!0}),$=S.loading,M=((I=S.data)===null||I===void 0?void 0:I.data)||{},G=(0,D.useState)({Page:1}),z=y()(G,2),_=z[0],Q=z[1],B=(0,D.useState)(void 0),F=y()(B,2),V=F[0],Z=F[1],K=function(){S.run(o()({},_))},X=[{title:"\u540D\u79F0",render:function(h,x){return(0,u.jsx)(f.rU,{to:{pathname:"/store-manage/order-group/detail",search:A.stringify({id:x.Id})},target:"_blank",children:x.Name})}},{title:"\u63CF\u8FF0",render:function(h,x){return x.Description||"--"}},{title:"\u65F6\u95F4",render:function(h,x){return(0,u.jsx)(L.Z,{model:x})}},{title:"\u64CD\u4F5C",width:200,render:function(h,x){return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(j.Z,{direction:"horizontal",children:(0,u.jsx)(W.Z,{action:r()(l()().mark(function U(){var w;return l()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:return Y.next=2,v.x1.mallManager.orderGroupDelete({Id:x==null?void 0:x.Id});case 2:w=Y.sent,(0,s._y)(w,function(){c.ZP.success("\u5220\u9664\u6210\u529F"),K()});case 4:case"end":return Y.stop()}},U)}))})})})}}];return(0,D.useEffect)(function(){K()},[_]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(H,{show:V!=null,hide:function(){return Z(void 0)},data:V||{},ok:function(){Z(void 0),K()}}),(0,u.jsx)(O.Z,{title:"\u8BA2\u5355\u6279\u6B21",extra:(0,u.jsx)(p.ZP,{type:"primary",onClick:function(){Z({Name:"\u8BA2\u5355\u6279\u6B21-".concat(b.ND.utc().add(b.Mg,"hour").format(b.vc)),Description:void 0})},children:"\u65B0\u589E"}),children:(0,u.jsx)(P.Z,{rowKey:function(h){return h.Id||""},loading:$,columns:X,dataSource:M.Items||[],pagination:{showSizeChanger:!1,pageSize:20,current:_.Page,total:M.TotalCount,onChange:function(h){Q(o()(o()({},_),{},{Page:h}))}}})})]})}},85576:function(T,d,e){e.d(d,{Z:function(){return b}});var t=e(56080),l=e(38657),n=e(56745),r=e(67294),a=e(93967),o=e.n(a),m=e(40974),y=e(8745),E=e(53124),j=e(35792),c=e(32409),O=e(4941),p=e(71194),P=function(s,f){var R={};for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&f.indexOf(i)<0&&(R[i]=s[i]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,i=Object.getOwnPropertySymbols(s);g<i.length;g++)f.indexOf(i[g])<0&&Object.prototype.propertyIsEnumerable.call(s,i[g])&&(R[i[g]]=s[i[g]]);return R};const A=s=>{const{prefixCls:f,className:R,closeIcon:i,closable:g,type:N,title:u,children:H,footer:J}=s,I=P(s,["prefixCls","className","closeIcon","closable","type","title","children","footer"]),{getPrefixCls:S}=r.useContext(E.E_),$=S(),M=f||S("modal"),G=(0,j.Z)($),[z,_,Q]=(0,p.ZP)(M,G),B=`${M}-confirm`;let F={};return N?F={closable:g!=null?g:!1,title:"",footer:"",children:r.createElement(c.O,Object.assign({},s,{prefixCls:M,confirmPrefixCls:B,rootPrefixCls:$,content:H}))}:F={closable:g!=null?g:!0,title:u,footer:J!==null&&r.createElement(O.$,Object.assign({},s)),children:H},z(r.createElement(m.s,Object.assign({prefixCls:M,className:o()(_,`${M}-pure-panel`,N&&B,N&&`${B}-${N}`,R,Q,G)},I,{closeIcon:(0,O.b)(M,i),closable:g},F)))};var D=(0,y.i)(A),W=e(94423);function L(s){return(0,t.ZP)((0,t.uW)(s))}const v=n.Z;v.useModal=W.Z,v.info=function(f){return(0,t.ZP)((0,t.cw)(f))},v.success=function(f){return(0,t.ZP)((0,t.vq)(f))},v.error=function(f){return(0,t.ZP)((0,t.AQ)(f))},v.warning=L,v.warn=L,v.confirm=function(f){return(0,t.ZP)((0,t.Au)(f))},v.destroyAll=function(){for(;l.Z.length;){const f=l.Z.pop();f&&f()}},v.config=t.ai,v._InternalPanelDoNotUseOrYouWillBeFired=D;var b=v},29335:function(T){function d(t,l){return Object.prototype.hasOwnProperty.call(t,l)}T.exports=function(t,l,n,r){l=l||"&",n=n||"=";var a={};if(typeof t!="string"||t.length===0)return a;var o=/\+/g;t=t.split(l);var m=1e3;r&&typeof r.maxKeys=="number"&&(m=r.maxKeys);var y=t.length;m>0&&y>m&&(y=m);for(var E=0;E<y;++E){var j=t[E].replace(o,"%20"),c=j.indexOf(n),O,p,P,A;c>=0?(O=j.substr(0,c),p=j.substr(c+1)):(O=j,p=""),P=decodeURIComponent(O),A=decodeURIComponent(p),d(a,P)?e(a[P])?a[P].push(A):a[P]=[a[P],A]:a[P]=A}return a};var e=Array.isArray||function(t){return Object.prototype.toString.call(t)==="[object Array]"}},33120:function(T){var d=function(n){switch(typeof n){case"string":return n;case"boolean":return n?"true":"false";case"number":return isFinite(n)?n:"";default:return""}};T.exports=function(n,r,a,o){return r=r||"&",a=a||"=",n===null&&(n=void 0),typeof n=="object"?t(l(n),function(m){var y=encodeURIComponent(d(m))+a;return e(n[m])?t(n[m],function(E){return y+encodeURIComponent(d(E))}).join(r):y+encodeURIComponent(d(n[m]))}).join(r):o?encodeURIComponent(d(o))+a+encodeURIComponent(d(n)):""};var e=Array.isArray||function(n){return Object.prototype.toString.call(n)==="[object Array]"};function t(n,r){if(n.map)return n.map(r);for(var a=[],o=0;o<n.length;o++)a.push(r(n[o],o));return a}var l=Object.keys||function(n){var r=[];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&r.push(a);return r}},87735:function(T,d,e){d.decode=d.parse=e(29335),d.encode=d.stringify=e(33120)}}]);
