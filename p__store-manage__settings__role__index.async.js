"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3685],{74590:function(k,L,n){var s=n(15009),i=n.n(s),f=n(99289),l=n.n(f),u=n(5574),E=n.n(u),Z=n(83062),C=n(14726),H=n(67294),$=n(85893);L.Z=function(y){var F=y.action,j=y.confirmText,b=y.hide,B=(0,H.useState)(!1),P=E()(B,2),A=P[0],W=P[1],h=j||"\u786E\u5B9A\u5220\u9664\uFF1F",Y=function(){var m=l()(i()().mark(function v(){return i()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:if(confirm(h)){g.next=2;break}return g.abrupt("return");case 2:return W(!0),g.prev=3,g.next=6,F();case 6:return g.prev=6,W(!1),g.finish(6);case 9:case"end":return g.stop()}},v,null,[[3,,6,9]])}));return function(){return m.apply(this,arguments)}}();return b?null:(0,$.jsx)($.Fragment,{children:(0,$.jsx)(Z.Z,{title:h,children:(0,$.jsx)(C.ZP,{loading:A,danger:!0,type:"link",onClick:function(){Y()},children:"\u5220\u9664"})})})}},23806:function(k,L,n){var s=n(1288),i=n(85893);L.Z=function(f){var l=f.model,u=f.fallback;if(l==null||l==null)return null;var E=l==null?void 0:l.CreationTime,Z=l==null?void 0:l.LastModificationTime;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{style:{},children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.Z,{prefix:(0,i.jsx)("span",{children:"\u521B\u5EFA\uFF1A"}),onlyDate:!0,timeStr:E,fallback:u})}),(0,i.jsx)("div",{children:(0,i.jsx)(s.Z,{prefix:(0,i.jsx)("span",{children:"\u4FEE\u6539\uFF1A"}),onlyDate:!0,timeStr:Z,fallback:u})})]})})}},1288:function(k,L,n){var s=n(78957),i=n(83062),f=n(46629),l=n(85893);L.Z=function(u){var E,Z=u.timeStr,C=u.fallback,H=u.onlyDate,$=u.prefix,y=(E=(0,f.mg)(Z))===null||E===void 0?void 0:E.add(f.Mg,"hour");if(!y)return C||null;var F=(0,f.ND)().utc().add(f.Mg,"hour"),j=y.isSame(F,"year"),b=y.diff(F,"day"),B=j?y.format(f.AK):y.format(f.vc),P=function(){return(0,l.jsxs)("div",{children:[(0,l.jsxs)(s.Z,{direction:"horizontal",children:[(0,l.jsx)("div",{children:y.fromNow()}),(0,l.jsx)("div",{children:y.format(f.On)})]}),(0,l.jsx)("div",{children:y.format(f.t9)})]})};return(0,l.jsx)(i.Z,{title:P(),children:(0,l.jsxs)(s.Z,{direction:"horizontal",children:[$,(0,l.jsx)("div",{className:"inline-block cursor-pointer hover:bg-orange-500",children:H?y.format(f.vc):y.format(f.dq)})]})})}},70635:function(k,L,n){var s=n(19632),i=n.n(s),f=n(84567),l=n(4393),u=n(85893);L.Z=function(E){var Z=E.selectedKeys,C=E.onChange,H=E.permissions,$=function(j){return(0,u.jsx)(f.Z,{checked:Z.indexOf(j.key)>=0,onChange:function(B){var P=Z.filter(function(A){return A!=j.key});B.target.checked&&P.push(j.key),C(P)},children:j.name})},y=function(j){var b=j.permissions.every(function(B){return Z.indexOf(B.key)>=0});return(0,u.jsx)(l.Z,{size:"small",title:j.name,style:{marginBottom:10},extra:(0,u.jsx)(f.Z,{checked:b,onChange:function(P){var A=j.permissions.map(function(h){return h.key}),W=Z.filter(function(h){return A.indexOf(h)<0});P.target.checked&&(W=[].concat(i()(W),i()(A))),C(W)},children:"\u5168\u9009"}),children:j.permissions.map(function(B,P){return(0,u.jsx)("span",{style:{marginRight:10,marginBottom:10},children:$(B)},P)})})};return(0,u.jsx)("div",{style:{},children:H.map(function(F,j){return(0,u.jsx)("div",{children:y(F)},j)})})}},53045:function(k,L,n){n.r(L),n.d(L,{default:function(){return te}});var s=n(5574),i=n.n(s),f=n(23806),l=n(30699),u=n(14726),E=n(4393),Z=n(80799),C=n(67294),H=n(15009),$=n.n(H),y=n(99289),F=n.n(y),j=n(97857),b=n.n(j),B=n(45360),P=n(85576),A=n(78957),W=n(57381),h=n(11346),Y=n(65233),m=n(74590),v=n(66419),o=n(85893),g=function(K){var N=K.show,e=K.hide,r=K.data,c=K.ok,t=(0,C.useState)(!1),a=i()(t,2),D=a[0],d=a[1],T=(0,C.useState)({}),R=i()(T,2),U=R[0],M=R[1],z=function(S){d(!0),l.x1.mallManager.storeManagerPermissionSaveRole(b()({},S)).then(function(G){(0,v._y)(G,function(){B.ZP.success("\u4FDD\u5B58\u6210\u529F"),c()})}).finally(function(){d(!1)})};return(0,C.useEffect)(function(){M(b()({},r))},[r]),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(P.Z,{title:"\u89D2\u8272",open:N,onCancel:function(){return e()},footer:(0,o.jsxs)(A.Z,{children:[(0,o.jsx)(m.Z,{action:F()($()().mark(function p(){var S;return $()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,l.x1.sys.manageRoleDelete({Id:U.Id});case 2:S=x.sent,(0,v._y)(S,function(){e(),c()});case 4:case"end":return x.stop()}},p)})),hide:(0,v.Wq)(U.Id)}),(0,o.jsx)(u.ZP,{type:"primary",onClick:function(){z(U)},children:"\u4FDD\u5B58"})]}),children:(0,o.jsx)(W.Z,{spinning:D,children:(0,o.jsxs)(h.Z,{labelCol:{flex:"110px"},labelAlign:"right",wrapperCol:{flex:1},children:[(0,o.jsx)(h.Z.Item,{label:"\u540D\u79F0",rules:[{required:!0},{max:10}],children:(0,o.jsx)(Y.Z,{value:U.Name||"",onChange:function(S){M(b()(b()({},U),{},{Name:S.target.value}))}})}),(0,o.jsx)(h.Z.Item,{label:"\u63CF\u8FF0",rules:[{max:50}],children:(0,o.jsx)(Y.Z,{value:U.Description||"",onChange:function(S){M(b()(b()({},U),{},{Description:S.target.value}))}})})]})})})})},O=n(35291),X=n(66309),ne=n(70635),w=function(K){var N=K.model,e=K.ok,r=(0,C.useState)(!1),c=i()(r,2),t=c[0],a=c[1],D=(0,C.useState)(!1),d=i()(D,2),T=d[0],R=d[1],U=(0,C.useState)([]),M=i()(U,2),z=M[0],p=M[1];(0,C.useEffect)(function(){p(N.PermissionKeys||[])},[N]);var S=function(_){R(!0),l.x1.mallManager.storeManagerPermissionSetRolePermissions({Key:N.Id,Value:_||[]}).then(function(I){(0,v._y)(I,function(){B.ZP.success("\u4FDD\u5B58\u6210\u529F"),a(!1),e&&e()})}).finally(function(){R(!1)})},G=function(){var _=N.PermissionKeys||[],I=O.zM.filter(function(V){return _.indexOf(V.key)>=0});return(0,o.jsx)("div",{children:I.map(function(V,q){return(0,o.jsx)(X.Z,{style:{marginRight:5,marginBottom:5},children:V.name},q)})})};return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{children:[(0,o.jsxs)(A.Z,{direction:"horizontal",children:[G(),(0,o.jsx)(u.ZP,{type:"link",onClick:function(){a(!0)},children:"\u4FEE\u6539"})]}),(0,o.jsx)(P.Z,{title:"\u7ED1\u5B9A\u6743\u9650",confirmLoading:T,open:t,onCancel:function(){a(!1)},onOk:function(){S(z)},children:(0,o.jsx)(ne.Z,{selectedKeys:z,onChange:function(_){return p(_)},permissions:O.al})})]})})},te=function(){var K=(0,C.useState)(!0),N=i()(K,2),e=N[0],r=N[1],c=(0,C.useState)([]),t=i()(c,2),a=t[0],D=t[1],d=(0,C.useState)({Page:1}),T=i()(d,2),R=T[0],U=T[1],M=(0,C.useState)(void 0),z=i()(M,2),p=z[0],S=z[1],G=function(){r(!0),l.x1.mallManager.storeManagerPermissionListRoles({}).then(function(I){(0,v._y)(I,function(){D(I.data.Data||[])})}).finally(function(){r(!1)})},x=[{title:"\u540D\u79F0",render:function(I,V){return V.Name}},{title:"\u63CF\u8FF0",render:function(I,V){return V.Description||"--"}},{title:"\u6743\u9650",render:function(I,V){return(0,o.jsx)(w,{model:V,ok:function(){G()}})}},{title:"\u65F6\u95F4",render:function(I){return(0,o.jsx)(f.Z,{model:I})}},{title:"\u64CD\u4F5C",width:200,render:function(I,V){return(0,o.jsx)(u.ZP.Group,{children:(0,o.jsx)(u.ZP,{type:"link",onClick:function(){S(V)},children:"\u7F16\u8F91"})})}}];return(0,C.useEffect)(function(){G()},[R]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(g,{show:p!=null,hide:function(){return S(void 0)},data:p||{},ok:function(){S(void 0),G()}}),(0,o.jsx)(E.Z,{title:"\u89D2\u8272",extra:(0,o.jsx)(u.ZP,{type:"primary",onClick:function(){S({})},children:"\u65B0\u589E"}),children:(0,o.jsx)(Z.Z,{loading:e,columns:x,dataSource:a,pagination:!1})})]})}},85576:function(k,L,n){n.d(L,{Z:function(){return Y}});var s=n(56080),i=n(38657),f=n(56745),l=n(67294),u=n(93967),E=n.n(u),Z=n(40974),C=n(8745),H=n(53124),$=n(35792),y=n(32409),F=n(4941),j=n(71194),b=function(m,v){var o={};for(var g in m)Object.prototype.hasOwnProperty.call(m,g)&&v.indexOf(g)<0&&(o[g]=m[g]);if(m!=null&&typeof Object.getOwnPropertySymbols=="function")for(var O=0,g=Object.getOwnPropertySymbols(m);O<g.length;O++)v.indexOf(g[O])<0&&Object.prototype.propertyIsEnumerable.call(m,g[O])&&(o[g[O]]=m[g[O]]);return o};const B=m=>{const{prefixCls:v,className:o,closeIcon:g,closable:O,type:X,title:ne,children:w,footer:te}=m,K=b(m,["prefixCls","className","closeIcon","closable","type","title","children","footer"]),{getPrefixCls:N}=l.useContext(H.E_),e=N(),r=v||N("modal"),c=(0,$.Z)(e),[t,a,D]=(0,j.ZP)(r,c),d=`${r}-confirm`;let T={};return X?T={closable:O!=null?O:!1,title:"",footer:"",children:l.createElement(y.O,Object.assign({},m,{prefixCls:r,confirmPrefixCls:d,rootPrefixCls:e,content:w}))}:T={closable:O!=null?O:!0,title:ne,footer:te!==null&&l.createElement(F.$,Object.assign({},m)),children:w},t(l.createElement(Z.s,Object.assign({prefixCls:r,className:E()(a,`${r}-pure-panel`,X&&d,X&&`${d}-${X}`,o,D,c)},K,{closeIcon:(0,F.b)(r,g),closable:O},T)))};var P=(0,C.i)(B),A=n(94423);function W(m){return(0,s.ZP)((0,s.uW)(m))}const h=f.Z;h.useModal=A.Z,h.info=function(v){return(0,s.ZP)((0,s.cw)(v))},h.success=function(v){return(0,s.ZP)((0,s.vq)(v))},h.error=function(v){return(0,s.ZP)((0,s.AQ)(v))},h.warning=W,h.warn=W,h.confirm=function(v){return(0,s.ZP)((0,s.Au)(v))},h.destroyAll=function(){for(;i.Z.length;){const v=i.Z.pop();v&&v()}},h.config=s.ai,h._InternalPanelDoNotUseOrYouWillBeFired=P;var Y=h},66309:function(k,L,n){n.d(L,{Z:function(){return N}});var s=n(67294),i=n(93967),f=n.n(i),l=n(98423),u=n(98787),E=n(69760),Z=n(96159),C=n(45353),H=n(53124),$=n(11568),y=n(10274),F=n(14747),j=n(83262),b=n(83559);const B=e=>{const{paddingXXS:r,lineWidth:c,tagPaddingHorizontal:t,componentCls:a,calc:D}=e,d=D(t).sub(c).equal(),T=D(r).sub(c).equal();return{[a]:Object.assign(Object.assign({},(0,F.Wf)(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:d,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${(0,$.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${a}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${a}-close-icon`]:{marginInlineStart:T,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${a}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${a}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:d}}),[`${a}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},P=e=>{const{lineWidth:r,fontSizeIcon:c,calc:t}=e,a=e.fontSizeSM;return(0,j.IX)(e,{tagFontSize:a,tagLineHeight:(0,$.bf)(t(e.lineHeightSM).mul(a).equal()),tagIconSize:t(c).sub(t(r).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg})},A=e=>({defaultBg:new y.C(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText});var W=(0,b.I$)("Tag",e=>{const r=P(e);return B(r)},A),h=function(e,r){var c={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(c[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(c[t[a]]=e[t[a]]);return c},m=s.forwardRef((e,r)=>{const{prefixCls:c,style:t,className:a,checked:D,onChange:d,onClick:T}=e,R=h(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:U,tag:M}=s.useContext(H.E_),z=I=>{d==null||d(!D),T==null||T(I)},p=U("tag",c),[S,G,x]=W(p),_=f()(p,`${p}-checkable`,{[`${p}-checkable-checked`]:D},M==null?void 0:M.className,a,G,x);return S(s.createElement("span",Object.assign({},R,{ref:r,style:Object.assign(Object.assign({},t),M==null?void 0:M.style),className:_,onClick:z})))}),v=n(98719);const o=e=>(0,v.Z)(e,(r,c)=>{let{textColor:t,lightBorderColor:a,lightColor:D,darkColor:d}=c;return{[`${e.componentCls}${e.componentCls}-${r}`]:{color:t,background:D,borderColor:a,"&-inverse":{color:e.colorTextLightSolid,background:d,borderColor:d},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}});var g=(0,b.bk)(["Tag","preset"],e=>{const r=P(e);return o(r)},A);function O(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}const X=(e,r,c)=>{const t=O(c);return{[`${e.componentCls}${e.componentCls}-${r}`]:{color:e[`color${c}`],background:e[`color${t}Bg`],borderColor:e[`color${t}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}};var ne=(0,b.bk)(["Tag","status"],e=>{const r=P(e);return[X(r,"success","Success"),X(r,"processing","Info"),X(r,"error","Error"),X(r,"warning","Warning")]},A),w=function(e,r){var c={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(c[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(c[t[a]]=e[t[a]]);return c};const K=s.forwardRef((e,r)=>{const{prefixCls:c,className:t,rootClassName:a,style:D,children:d,icon:T,color:R,onClose:U,bordered:M=!0,visible:z}=e,p=w(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:S,direction:G,tag:x}=s.useContext(H.E_),[_,I]=s.useState(!0),V=(0,l.Z)(p,["closeIcon","closable"]);s.useEffect(()=>{z!==void 0&&I(z)},[z]);const q=(0,u.o2)(R),ae=(0,u.yT)(R),re=q||ae,ue=Object.assign(Object.assign({backgroundColor:R&&!re?R:void 0},x==null?void 0:x.style),D),Q=S("tag",c),[de,fe,me]=W(Q),ve=f()(Q,x==null?void 0:x.className,{[`${Q}-${R}`]:re,[`${Q}-has-color`]:R&&!re,[`${Q}-hidden`]:!_,[`${Q}-rtl`]:G==="rtl",[`${Q}-borderless`]:!M},t,a,fe,me),se=ee=>{ee.stopPropagation(),U==null||U(ee),!ee.defaultPrevented&&I(!1)},[,ge]=(0,E.Z)((0,E.w)(e),(0,E.w)(x),{closable:!1,closeIconRender:ee=>{const xe=s.createElement("span",{className:`${Q}-close-icon`,onClick:se},ee);return(0,Z.wm)(ee,xe,J=>({onClick:ce=>{var oe;(oe=J==null?void 0:J.onClick)===null||oe===void 0||oe.call(J,ce),se(ce)},className:f()(J==null?void 0:J.className,`${Q}-close-icon`)}))}}),he=typeof p.onClick=="function"||d&&d.type==="a",le=T||null,Ce=le?s.createElement(s.Fragment,null,le,d&&s.createElement("span",null,d)):d,ie=s.createElement("span",Object.assign({},V,{ref:r,className:ve,style:ue}),Ce,ge,q&&s.createElement(g,{key:"preset",prefixCls:Q}),ae&&s.createElement(ne,{key:"status",prefixCls:Q}));return de(he?s.createElement(C.Z,{component:"Tag"},ie):ie)});K.CheckableTag=m;var N=K}}]);
