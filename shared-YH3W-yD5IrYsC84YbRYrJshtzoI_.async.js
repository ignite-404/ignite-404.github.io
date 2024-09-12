"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8119],{62635:function(N,B,r){r.d(B,{Z:function(){return $}});var o=r(87462),b=r(67294),O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"}}]},name:"vertical-align-top",theme:"outlined"},c=O,p=r(84089),E=function(f,w){return b.createElement(p.Z,(0,o.Z)({},f,{ref:w,icon:c}))},x=b.forwardRef(E),$=x},40351:function(N,B,r){var o=r(67294),b=r(45210),O=r(8224),c=r(48002),p=function(E){var x=function($,y,f){var w=(0,o.useRef)(!1),A=(0,o.useRef)([]),Z=(0,o.useRef)([]),D=(0,o.useRef)();E(function(){var T,J=Array.isArray(f)?f:[f],H=J.map(function(q){return(0,c.n)(q)});if(!w.current){w.current=!0,A.current=H,Z.current=y,D.current=$();return}(H.length!==A.current.length||!(0,O.Z)(A.current,H)||!(0,O.Z)(Z.current,y))&&((T=D.current)===null||T===void 0||T.call(D),A.current=H,Z.current=y,D.current=$())}),(0,b.Z)(function(){var T;(T=D.current)===null||T===void 0||T.call(D),w.current=!1})};return x};B.Z=p},48002:function(N,B,r){r.d(B,{n:function(){return O}});var o=r(92770),b=r(52982);function O(c,p){if(b.Z){if(!c)return p;var E;return(0,o.mf)(c)?E=c():"current"in c?E=c.current:E=c,E}}},59682:function(N,B,r){var o=r(67294),b=r(40351),O=(0,b.Z)(o.useEffect);B.Z=O},48783:function(N,B,r){var o=r(74902),b=r(75164);function O(c){let p;const E=$=>()=>{p=null,c.apply(void 0,(0,o.Z)($))},x=function(){if(p==null){for(var $=arguments.length,y=new Array($),f=0;f<$;f++)y[f]=arguments[f];p=(0,b.Z)(E(y))}};return x.cancel=()=>{b.Z.cancel(p),p=null},x}B.Z=O},28062:function(N,B,r){r.d(B,{Z:function(){return zt}});var o=r(67294),b=r(62635),O=r(93967),c=r.n(O),p=r(29372),E=r(42550),x=r(66367),$=r(58375),y=r(48783),f=r(53124);const w=o.createContext(void 0),{Provider:A}=w;var Z=w,D=r(98423),T=r(40411),J=r(35792),H=r(83062),q=r(87462),mt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z"}}]},name:"file-text",theme:"outlined"},gt=mt,vt=r(84089),pt=function(l,n){return o.createElement(vt.Z,(0,q.Z)({},l,{ref:n,icon:gt}))},ht=o.forwardRef(pt),ot=ht;const bt=t=>{const{icon:l,description:n,prefixCls:e,className:a}=t,i=o.createElement("div",{className:`${e}-icon`},o.createElement(ot,null));return o.createElement("div",{onClick:t.onClick,onFocus:t.onFocus,onMouseEnter:t.onMouseEnter,onMouseLeave:t.onMouseLeave,className:c()(a,`${e}-content`)},l||n?o.createElement(o.Fragment,null,l&&o.createElement("div",{className:`${e}-icon`},l),n&&o.createElement("div",{className:`${e}-description`},n)):i)};var Et=(0,o.memo)(bt),P=r(11568),rt=r(14747),Ot=r(16932),yt=r(93590),Ct=r(83559),Bt=r(83262),at=t=>t===0?0:t-Math.sqrt(Math.pow(t,2)/2);const $t=t=>{const{componentCls:l,floatButtonSize:n,motionDurationSlow:e,motionEaseInOutCirc:a}=t,i=`${l}-group`,h=new P.E4("antFloatButtonMoveDownIn",{"0%":{transform:`translate3d(0, ${(0,P.bf)(n)}, 0)`,transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),m=new P.E4("antFloatButtonMoveDownOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:`translate3d(0, ${(0,P.bf)(n)}, 0)`,transformOrigin:"0 0",opacity:0}});return[{[`${i}-wrap`]:Object.assign({},(0,yt.R)(`${i}-wrap`,h,m,e,!0))},{[`${i}-wrap`]:{[`
          &${i}-wrap-enter,
          &${i}-wrap-appear
        `]:{opacity:0,animationTimingFunction:a},[`&${i}-wrap-leave`]:{animationTimingFunction:a}}}]},xt=t=>{const{antCls:l,componentCls:n,floatButtonSize:e,margin:a,borderRadiusLG:i,borderRadiusSM:h,badgeOffset:m,floatButtonBodyPadding:u,calc:d}=t,s=`${n}-group`;return{[s]:Object.assign(Object.assign({},(0,rt.Wf)(t)),{zIndex:t.zIndexPopupBase,display:"block",border:"none",position:"fixed",width:e,height:"auto",boxShadow:"none",minHeight:e,insetInlineEnd:t.floatButtonInsetInlineEnd,insetBlockEnd:t.floatButtonInsetBlockEnd,borderRadius:i,[`${s}-wrap`]:{zIndex:-1,display:"block",position:"relative",marginBottom:a},[`&${s}-rtl`]:{direction:"rtl"},[n]:{position:"static"}}),[`${s}-circle`]:{[`${n}-circle:not(:last-child)`]:{marginBottom:t.margin,[`${n}-body`]:{width:e,height:e,borderRadius:"50%"}}},[`${s}-square`]:{[`${n}-square`]:{padding:0,borderRadius:0,[`&${s}-trigger`]:{borderRadius:i},"&:first-child":{borderStartStartRadius:i,borderStartEndRadius:i},"&:last-child":{borderEndStartRadius:i,borderEndEndRadius:i},"&:not(:last-child)":{borderBottom:`${(0,P.bf)(t.lineWidth)} ${t.lineType} ${t.colorSplit}`},[`${l}-badge`]:{[`${l}-badge-count`]:{top:d(d(u).add(m)).mul(-1).equal(),insetInlineEnd:d(d(u).add(m)).mul(-1).equal()}}},[`${s}-wrap`]:{display:"block",borderRadius:i,boxShadow:t.boxShadowSecondary,[`${n}-square`]:{boxShadow:"none",marginTop:0,borderRadius:0,padding:u,"&:first-child":{borderStartStartRadius:i,borderStartEndRadius:i},"&:last-child":{borderEndStartRadius:i,borderEndEndRadius:i},"&:not(:last-child)":{borderBottom:`${(0,P.bf)(t.lineWidth)} ${t.lineType} ${t.colorSplit}`},[`${n}-body`]:{width:t.floatButtonBodySize,height:t.floatButtonBodySize}}}},[`${s}-circle-shadow`]:{boxShadow:"none"},[`${s}-square-shadow`]:{boxShadow:t.boxShadowSecondary,[`${n}-square`]:{boxShadow:"none",padding:u,[`${n}-body`]:{width:t.floatButtonBodySize,height:t.floatButtonBodySize,borderRadius:h}}}}},St=t=>{const{antCls:l,componentCls:n,floatButtonBodyPadding:e,floatButtonIconSize:a,floatButtonSize:i,borderRadiusLG:h,badgeOffset:m,dotOffsetInSquare:u,dotOffsetInCircle:d,calc:s}=t;return{[n]:Object.assign(Object.assign({},(0,rt.Wf)(t)),{border:"none",position:"fixed",cursor:"pointer",zIndex:t.zIndexPopupBase,display:"block",width:i,height:i,insetInlineEnd:t.floatButtonInsetInlineEnd,insetBlockEnd:t.floatButtonInsetBlockEnd,boxShadow:t.boxShadowSecondary,"&-pure":{position:"relative",inset:"auto"},"&:empty":{display:"none"},[`${l}-badge`]:{width:"100%",height:"100%",[`${l}-badge-count`]:{transform:"translate(0, 0)",transformOrigin:"center",top:s(m).mul(-1).equal(),insetInlineEnd:s(m).mul(-1).equal()}},[`${n}-body`]:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",transition:`all ${t.motionDurationMid}`,[`${n}-content`]:{overflow:"hidden",textAlign:"center",minHeight:i,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:`${(0,P.bf)(s(e).div(2).equal())} ${(0,P.bf)(e)}`,[`${n}-icon`]:{textAlign:"center",margin:"auto",width:a,fontSize:a,lineHeight:1}}}}),[`${n}-rtl`]:{direction:"rtl"},[`${n}-circle`]:{height:i,borderRadius:"50%",[`${l}-badge`]:{[`${l}-badge-dot`]:{top:d,insetInlineEnd:d}},[`${n}-body`]:{borderRadius:"50%"}},[`${n}-square`]:{height:"auto",minHeight:i,borderRadius:h,[`${l}-badge`]:{[`${l}-badge-dot`]:{top:u,insetInlineEnd:u}},[`${n}-body`]:{height:"auto",borderRadius:h}},[`${n}-default`]:{backgroundColor:t.floatButtonBackgroundColor,transition:`background-color ${t.motionDurationMid}`,[`${n}-body`]:{backgroundColor:t.floatButtonBackgroundColor,transition:`background-color ${t.motionDurationMid}`,"&:hover":{backgroundColor:t.colorFillContent},[`${n}-content`]:{[`${n}-icon`]:{color:t.colorText},[`${n}-description`]:{display:"flex",alignItems:"center",lineHeight:(0,P.bf)(t.fontSizeLG),color:t.colorText,fontSize:t.fontSizeSM}}}},[`${n}-primary`]:{backgroundColor:t.colorPrimary,[`${n}-body`]:{backgroundColor:t.colorPrimary,transition:`background-color ${t.motionDurationMid}`,"&:hover":{backgroundColor:t.colorPrimaryHover},[`${n}-content`]:{[`${n}-icon`]:{color:t.colorTextLightSolid},[`${n}-description`]:{display:"flex",alignItems:"center",lineHeight:(0,P.bf)(t.fontSizeLG),color:t.colorTextLightSolid,fontSize:t.fontSizeSM}}}}}},Pt=t=>({dotOffsetInCircle:at(t.controlHeightLG/2),dotOffsetInSquare:at(t.borderRadiusLG)});var lt=(0,Ct.I$)("FloatButton",t=>{const{colorTextLightSolid:l,colorBgElevated:n,controlHeightLG:e,marginXXL:a,marginLG:i,fontSize:h,fontSizeIcon:m,controlItemBgHover:u,paddingXXS:d,calc:s}=t,S=(0,Bt.IX)(t,{floatButtonBackgroundColor:n,floatButtonColor:l,floatButtonHoverBackgroundColor:u,floatButtonFontSize:h,floatButtonIconSize:s(m).mul(1.5).equal(),floatButtonSize:e,floatButtonInsetBlockEnd:a,floatButtonInsetInlineEnd:i,floatButtonBodySize:s(e).sub(s(d).mul(2)).equal(),floatButtonBodyPadding:d,badgeOffset:s(d).mul(1.5).equal()});return[xt(S),St(S),(0,Ot.J$)(t),$t(S)]},Pt),It=function(t,l){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&l.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)l.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};const Q="float-btn";var j=o.forwardRef((t,l)=>{const{prefixCls:n,className:e,rootClassName:a,type:i="default",shape:h="circle",icon:m,description:u,tooltip:d,badge:s={}}=t,S=It(t,["prefixCls","className","rootClassName","type","shape","icon","description","tooltip","badge"]),{getPrefixCls:z,direction:W}=(0,o.useContext)(f.E_),M=(0,o.useContext)(Z),C=z(Q,n),R=(0,J.Z)(C),[U,F,K]=lt(C,R),L=M||h,G=c()(F,K,R,C,e,a,`${C}-${i}`,`${C}-${L}`,{[`${C}-rtl`]:W==="rtl"}),X=(0,o.useMemo)(()=>(0,D.Z)(s,["title","children","status","text"]),[s]),V=(0,o.useMemo)(()=>({prefixCls:C,description:u,icon:m,type:i}),[C,u,m,i]);let g=o.createElement("div",{className:`${C}-body`},o.createElement(Et,Object.assign({},V)));return"badge"in t&&(g=o.createElement(T.Z,Object.assign({},X),g)),"tooltip"in t&&(g=o.createElement(H.Z,{title:d,placement:W==="rtl"?"right":"left"},g)),U(t.href?o.createElement("a",Object.assign({ref:l},S,{className:G}),g):o.createElement("button",Object.assign({ref:l},S,{className:G,type:"button"}),g))}),Tt=function(t,l){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&l.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)l.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n},it=o.forwardRef((t,l)=>{const{prefixCls:n,className:e,type:a="default",shape:i="circle",visibilityHeight:h=400,icon:m=o.createElement(b.Z,null),target:u,onClick:d,duration:s=450}=t,S=Tt(t,["prefixCls","className","type","shape","visibilityHeight","icon","target","onClick","duration"]),[z,W]=(0,o.useState)(h===0),M=o.useRef(null);o.useImperativeHandle(l,()=>({nativeElement:M.current}));const C=()=>{var g;return((g=M.current)===null||g===void 0?void 0:g.ownerDocument)||window},R=(0,y.Z)(g=>{const v=(0,x.Z)(g.target);W(v>=h)});(0,o.useEffect)(()=>{const v=(u||C)();return R({target:v}),v==null||v.addEventListener("scroll",R),()=>{R.cancel(),v==null||v.removeEventListener("scroll",R)}},[u]);const U=g=>{(0,$.Z)(0,{getContainer:u||C,duration:s}),d==null||d(g)},{getPrefixCls:F}=(0,o.useContext)(f.E_),K=F(Q,n),L=F(),X=(0,o.useContext)(Z)||i,V=Object.assign({prefixCls:K,icon:m,type:a,shape:X},S);return o.createElement(p.ZP,{visible:z,motionName:`${L}-fade`},(g,v)=>{let{className:k}=g;return o.createElement(j,Object.assign({ref:(0,E.sQ)(M,v)},V,{onClick:U,className:c()(e,k)}))})}),Mt=r(97937),Rt=r(56790),wt=r(21770),Dt=function(t,l){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&l.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)l.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};const Ft=t=>{var l;const{prefixCls:n,className:e,style:a,shape:i="circle",type:h="default",icon:m=o.createElement(ot,null),closeIcon:u,description:d,trigger:s,children:S,onOpenChange:z,open:W,onClick:M}=t,C=Dt(t,["prefixCls","className","style","shape","type","icon","closeIcon","description","trigger","children","onOpenChange","open","onClick"]),{direction:R,getPrefixCls:U,floatButtonGroup:F}=(0,o.useContext)(f.E_),K=(l=u!=null?u:F==null?void 0:F.closeIcon)!==null&&l!==void 0?l:o.createElement(Mt.Z,null),L=U(Q,n),G=(0,J.Z)(L),[X,V,g]=lt(L,G),v=`${L}-group`,k=c()(v,V,g,G,e,{[`${v}-rtl`]:R==="rtl",[`${v}-${i}`]:i,[`${v}-${i}-shadow`]:!s}),Lt=c()(V,`${v}-wrap`),[Y,Nt]=(0,wt.Z)(!1,{value:W}),dt=o.useRef(null),ft=s==="hover",tt=s==="click",_=(0,Rt.zX)(I=>{Y!==I&&(Nt(I),z==null||z(I))}),At=()=>{ft&&_(!0)},Zt=()=>{ft&&_(!1)},Ht=I=>{tt&&_(!Y),M==null||M(I)};return o.useEffect(()=>{if(tt){const I=et=>{var nt;!((nt=dt.current)===null||nt===void 0)&&nt.contains(et.target)||_(!1)};return document.addEventListener("click",I,{capture:!0}),()=>{document.removeEventListener("click",I,{capture:!0})}}},[tt]),X(o.createElement(A,{value:i},o.createElement("div",{ref:dt,className:k,style:a,onMouseEnter:At,onMouseLeave:Zt},s&&["click","hover"].includes(s)?o.createElement(o.Fragment,null,o.createElement(p.ZP,{visible:Y,motionName:`${v}-wrap`},I=>{let{className:et}=I;return o.createElement("div",{className:c()(et,Lt)},S)}),o.createElement(j,Object.assign({type:h,icon:Y?K:m,description:d,"aria-label":t["aria-label"],className:`${v}-trigger`,onClick:Ht},C))):S)))};var st=(0,o.memo)(Ft),ct=function(t,l){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&l.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)l.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};const ut=t=>{var{backTop:l}=t,n=ct(t,["backTop"]);return l?o.createElement(it,Object.assign({},n,{visibilityHeight:0})):o.createElement(j,Object.assign({},n))};var jt=t=>{var{className:l,items:n}=t,e=ct(t,["className","items"]);const{prefixCls:a}=e,{getPrefixCls:i}=o.useContext(f.E_),m=`${i(Q,a)}-pure`;return n?o.createElement(st,Object.assign({className:c()(l,m)},e),n.map((u,d)=>o.createElement(ut,Object.assign({key:d},u)))):o.createElement(ut,Object.assign({className:c()(l,m)},e))};j.BackTop=it,j.Group=st,j._InternalPanelDoNotUseOrYouWillBeFired=jt;var zt=j},16932:function(N,B,r){r.d(B,{J$:function(){return p}});var o=r(11568),b=r(93590);const O=new o.E4("antFadeIn",{"0%":{opacity:0},"100%":{opacity:1}}),c=new o.E4("antFadeOut",{"0%":{opacity:1},"100%":{opacity:0}}),p=function(E){let x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const{antCls:$}=E,y=`${$}-fade`,f=x?"&":"";return[(0,b.R)(y,O,c,E.motionDurationMid,x),{[`
        ${f}${y}-enter,
        ${f}${y}-appear
      `]:{opacity:0,animationTimingFunction:"linear"},[`${f}${y}-leave`]:{animationTimingFunction:"linear"}}]}}}]);
