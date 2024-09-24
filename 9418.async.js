"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9418],{62635:function(G,x,a){a.d(x,{Z:function(){return S}});var o=a(87462),$=a(67294),C={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"}}]},name:"vertical-align-top",theme:"outlined"},u=C,b=a(84089),y=function(p,j){return $.createElement(b.Z,(0,o.Z)({},p,{ref:j,icon:u}))},T=$.forwardRef(y),S=T},40351:function(G,x,a){var o=a(67294),$=a(45210),C=a(8224),u=a(48002),b=function(y){var T=function(S,B,p){var j=(0,o.useRef)(!1),V=(0,o.useRef)([]),U=(0,o.useRef)([]),z=(0,o.useRef)();y(function(){var R,et=Array.isArray(p)?p:[p],Z=et.map(function(nt){return(0,u.n)(nt)});if(!j.current){j.current=!0,V.current=Z,U.current=B,z.current=S();return}(Z.length!==V.current.length||!(0,C.Z)(V.current,Z)||!(0,C.Z)(U.current,B))&&((R=z.current)===null||R===void 0||R.call(z),V.current=Z,U.current=B,z.current=S())}),(0,$.Z)(function(){var R;(R=z.current)===null||R===void 0||R.call(z),j.current=!1})};return T};x.Z=b},48002:function(G,x,a){a.d(x,{n:function(){return C}});var o=a(92770),$=a(52982);function C(u,b){if($.Z){if(!u)return b;var y;return(0,o.mf)(u)?y=u():"current"in u?y=u.current:y=u,y}}},59682:function(G,x,a){var o=a(67294),$=a(40351),C=(0,$.Z)(o.useEffect);x.Z=C},48783:function(G,x,a){var o=a(74902),$=a(75164);function C(u){let b;const y=S=>()=>{b=null,u.apply(void 0,(0,o.Z)(S))},T=function(){if(b==null){for(var S=arguments.length,B=new Array(S),p=0;p<S;p++)B[p]=arguments[p];b=(0,$.Z)(y(B))}};return T.cancel=()=>{$.Z.cancel(b),b=null},T}x.Z=C},85137:function(G,x,a){a.d(x,{Z:function(){return Nt}});var o=a(67294),$=a(62635),C=a(93967),u=a.n(C),b=a(29372),y=a(42550),T=a(66367),S=a(58375),B=a(48783),p=a(53124);const j=o.createContext(void 0),{Provider:V}=j;var U=j,z=a(98423),R=a(87263),et=a(40411),Z=a(35792),nt=a(83062),vt=a(87462),ht={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z"}}]},name:"file-text",theme:"outlined"},bt=ht,Ot=a(84089),$t=function(l,n){return o.createElement(Ot.Z,(0,vt.Z)({},l,{ref:n,icon:bt}))},yt=o.forwardRef($t),lt=yt;const Et=t=>{const{icon:l,description:n,prefixCls:e,className:r}=t,s=o.createElement("div",{className:`${e}-icon`},o.createElement(lt,null));return o.createElement("div",{onClick:t.onClick,onFocus:t.onFocus,onMouseEnter:t.onMouseEnter,onMouseLeave:t.onMouseLeave,className:u()(r,`${e}-content`)},l||n?o.createElement(o.Fragment,null,l&&o.createElement("div",{className:`${e}-icon`},l),n&&o.createElement("div",{className:`${e}-description`},n)):s)};var Ct=(0,o.memo)(Et),v=a(11568),it=a(14747),Bt=a(16932),xt=a(83559),St=a(83262),st=t=>t===0?0:t-Math.sqrt(Math.pow(t,2)/2),_=a(93590),It=t=>{const{componentCls:l,floatButtonSize:n,motionDurationSlow:e,motionEaseInOutCirc:r,calc:s}=t,h=new v.E4("antFloatButtonMoveTopIn",{"0%":{transform:`translate3d(0, ${(0,v.bf)(n)}, 0)`,transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),g=new v.E4("antFloatButtonMoveTopOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:`translate3d(0, ${(0,v.bf)(n)}, 0)`,transformOrigin:"0 0",opacity:0}}),m=new v.E4("antFloatButtonMoveRightIn",{"0%":{transform:`translate3d(${s(n).mul(-1).equal()}, 0, 0)`,transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),d=new v.E4("antFloatButtonMoveRightOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:`translate3d(${s(n).mul(-1).equal()}, 0, 0)`,transformOrigin:"0 0",opacity:0}}),f=new v.E4("antFloatButtonMoveBottomIn",{"0%":{transform:`translate3d(0, ${s(n).mul(-1).equal()}, 0)`,transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),i=new v.E4("antFloatButtonMoveBottomOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:`translate3d(0, ${s(n).mul(-1).equal()}, 0)`,transformOrigin:"0 0",opacity:0}}),L=new v.E4("antFloatButtonMoveLeftIn",{"0%":{transform:`translate3d(${(0,v.bf)(n)}, 0, 0)`,transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),M=new v.E4("antFloatButtonMoveLeftOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:`translate3d(${(0,v.bf)(n)}, 0, 0)`,transformOrigin:"0 0",opacity:0}}),c=`${l}-group`;return[{[c]:{[`&${c}-top ${c}-wrap`]:(0,_.R)(`${c}-wrap`,h,g,e,!0),[`&${c}-bottom ${c}-wrap`]:(0,_.R)(`${c}-wrap`,f,i,e,!0),[`&${c}-left ${c}-wrap`]:(0,_.R)(`${c}-wrap`,L,M,e,!0),[`&${c}-right ${c}-wrap`]:(0,_.R)(`${c}-wrap`,m,d,e,!0)}},{[`${c}-wrap`]:{[`&${c}-wrap-enter, &${c}-wrap-appear`]:{opacity:0,animationTimingFunction:r},[`&${c}-wrap-leave`]:{opacity:1,animationTimingFunction:r}}}]};const Pt=t=>{const{antCls:l,componentCls:n,floatButtonSize:e,margin:r,borderRadiusLG:s,borderRadiusSM:h,badgeOffset:g,floatButtonBodyPadding:m,zIndexPopupBase:d,calc:f}=t,i=`${n}-group`;return{[i]:Object.assign(Object.assign({},(0,it.Wf)(t)),{zIndex:d,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",border:"none",position:"fixed",height:"auto",boxShadow:"none",minWidth:e,minHeight:e,insetInlineEnd:t.floatButtonInsetInlineEnd,bottom:t.floatButtonInsetBlockEnd,borderRadius:s,[`${i}-wrap`]:{zIndex:-1,display:"flex",justifyContent:"center",alignItems:"center",position:"absolute"},[`&${i}-rtl`]:{direction:"rtl"},[n]:{position:"static"}}),[`${i}-top > ${i}-wrap`]:{flexDirection:"column",top:"auto",bottom:f(e).add(r).equal()},[`${i}-bottom > ${i}-wrap`]:{flexDirection:"column",top:f(e).add(r).equal(),bottom:"auto"},[`${i}-right > ${i}-wrap`]:{flexDirection:"row",left:{_skip_check_:!0,value:f(e).add(r).equal()},right:{_skip_check_:!0,value:"auto"}},[`${i}-left > ${i}-wrap`]:{flexDirection:"row",left:{_skip_check_:!0,value:"auto"},right:{_skip_check_:!0,value:f(e).add(r).equal()}},[`${i}-circle`]:{gap:r,[`${i}-wrap`]:{gap:r}},[`${i}-square`]:{[`${n}-square`]:{padding:0,borderRadius:0,[`&${i}-trigger`]:{borderRadius:s},"&:first-child":{borderStartStartRadius:s,borderStartEndRadius:s},"&:last-child":{borderEndStartRadius:s,borderEndEndRadius:s},"&:not(:last-child)":{borderBottom:`${(0,v.bf)(t.lineWidth)} ${t.lineType} ${t.colorSplit}`},[`${l}-badge`]:{[`${l}-badge-count`]:{top:f(f(m).add(g)).mul(-1).equal(),insetInlineEnd:f(f(m).add(g)).mul(-1).equal()}}},[`${i}-wrap`]:{borderRadius:s,boxShadow:t.boxShadowSecondary,[`${n}-square`]:{boxShadow:"none",borderRadius:0,padding:m,[`${n}-body`]:{width:t.floatButtonBodySize,height:t.floatButtonBodySize,borderRadius:h}}}},[`${i}-top > ${i}-wrap, ${i}-bottom > ${i}-wrap`]:{[`> ${n}-square`]:{"&:first-child":{borderStartStartRadius:s,borderStartEndRadius:s},"&:last-child":{borderEndStartRadius:s,borderEndEndRadius:s},"&:not(:last-child)":{borderBottom:`${(0,v.bf)(t.lineWidth)} ${t.lineType} ${t.colorSplit}`}}},[`${i}-left > ${i}-wrap, ${i}-right > ${i}-wrap`]:{[`> ${n}-square`]:{"&:first-child":{borderStartStartRadius:s,borderEndStartRadius:s},"&:last-child":{borderStartEndRadius:s,borderEndEndRadius:s},"&:not(:last-child)":{borderInlineEnd:`${(0,v.bf)(t.lineWidth)} ${t.lineType} ${t.colorSplit}`}}},[`${i}-circle-shadow`]:{boxShadow:"none"},[`${i}-square-shadow`]:{boxShadow:t.boxShadowSecondary,[`${n}-square`]:{boxShadow:"none",padding:m,[`${n}-body`]:{width:t.floatButtonBodySize,height:t.floatButtonBodySize,borderRadius:h}}}}},Tt=t=>{const{antCls:l,componentCls:n,floatButtonBodyPadding:e,floatButtonIconSize:r,floatButtonSize:s,borderRadiusLG:h,badgeOffset:g,dotOffsetInSquare:m,dotOffsetInCircle:d,zIndexPopupBase:f,calc:i}=t;return{[n]:Object.assign(Object.assign({},(0,it.Wf)(t)),{border:"none",position:"fixed",cursor:"pointer",zIndex:f,display:"block",width:s,height:s,insetInlineEnd:t.floatButtonInsetInlineEnd,bottom:t.floatButtonInsetBlockEnd,boxShadow:t.boxShadowSecondary,"&-pure":{position:"relative",inset:"auto"},"&:empty":{display:"none"},[`${l}-badge`]:{width:"100%",height:"100%",[`${l}-badge-count`]:{transform:"translate(0, 0)",transformOrigin:"center",top:i(g).mul(-1).equal(),insetInlineEnd:i(g).mul(-1).equal()}},[`${n}-body`]:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",transition:`all ${t.motionDurationMid}`,[`${n}-content`]:{overflow:"hidden",textAlign:"center",minHeight:s,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:`${(0,v.bf)(i(e).div(2).equal())} ${(0,v.bf)(e)}`,[`${n}-icon`]:{textAlign:"center",margin:"auto",width:r,fontSize:r,lineHeight:1}}}}),[`${n}-rtl`]:{direction:"rtl"},[`${n}-circle`]:{height:s,borderRadius:"50%",[`${l}-badge`]:{[`${l}-badge-dot`]:{top:d,insetInlineEnd:d}},[`${n}-body`]:{borderRadius:"50%"}},[`${n}-square`]:{height:"auto",minHeight:s,borderRadius:h,[`${l}-badge`]:{[`${l}-badge-dot`]:{top:m,insetInlineEnd:m}},[`${n}-body`]:{height:"auto",borderRadius:h}},[`${n}-default`]:{backgroundColor:t.floatButtonBackgroundColor,transition:`background-color ${t.motionDurationMid}`,[`${n}-body`]:{backgroundColor:t.floatButtonBackgroundColor,transition:`background-color ${t.motionDurationMid}`,"&:hover":{backgroundColor:t.colorFillContent},[`${n}-content`]:{[`${n}-icon`]:{color:t.colorText},[`${n}-description`]:{display:"flex",alignItems:"center",lineHeight:(0,v.bf)(t.fontSizeLG),color:t.colorText,fontSize:t.fontSizeSM}}}},[`${n}-primary`]:{backgroundColor:t.colorPrimary,[`${n}-body`]:{backgroundColor:t.colorPrimary,transition:`background-color ${t.motionDurationMid}`,"&:hover":{backgroundColor:t.colorPrimaryHover},[`${n}-content`]:{[`${n}-icon`]:{color:t.colorTextLightSolid},[`${n}-description`]:{display:"flex",alignItems:"center",lineHeight:(0,v.bf)(t.fontSizeLG),color:t.colorTextLightSolid,fontSize:t.fontSizeSM}}}}}},Rt=t=>({dotOffsetInCircle:st(t.controlHeightLG/2),dotOffsetInSquare:st(t.borderRadiusLG)});var ct=(0,xt.I$)("FloatButton",t=>{const{colorTextLightSolid:l,colorBgElevated:n,controlHeightLG:e,marginXXL:r,marginLG:s,fontSize:h,fontSizeIcon:g,controlItemBgHover:m,paddingXXS:d,calc:f}=t,i=(0,St.IX)(t,{floatButtonBackgroundColor:n,floatButtonColor:l,floatButtonHoverBackgroundColor:m,floatButtonFontSize:h,floatButtonIconSize:f(g).mul(1.5).equal(),floatButtonSize:e,floatButtonInsetBlockEnd:r,floatButtonInsetInlineEnd:s,floatButtonBodySize:f(e).sub(f(d).mul(2)).equal(),floatButtonBodyPadding:d,badgeOffset:f(d).mul(1.5).equal()});return[Pt(i),Tt(i),(0,Bt.J$)(t),It(i)]},Rt),Mt=function(t,l){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&l.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(t);r<e.length;r++)l.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(t,e[r])&&(n[e[r]]=t[e[r]]);return n};const q="float-btn";var A=o.forwardRef((t,l)=>{const{prefixCls:n,className:e,rootClassName:r,style:s,type:h="default",shape:g="circle",icon:m,description:d,tooltip:f,htmlType:i="button",badge:L={}}=t,M=Mt(t,["prefixCls","className","rootClassName","style","type","shape","icon","description","tooltip","htmlType","badge"]),{getPrefixCls:c,direction:F}=(0,o.useContext)(p.E_),D=(0,o.useContext)(U),I=c(q,n),W=(0,Z.Z)(I),[H,Q,K]=ct(I,W),X=D||g,J=u()(Q,K,W,I,e,r,`${I}-${h}`,`${I}-${X}`,{[`${I}-rtl`]:F==="rtl"}),[E]=(0,R.Cn)("FloatButton",s==null?void 0:s.zIndex),O=Object.assign(Object.assign({},s),{zIndex:E}),P=(0,z.Z)(L,["title","children","status","text"]),Y=(0,o.useMemo)(()=>({prefixCls:I,description:d,icon:m,type:h}),[I,d,m,h]);let N=o.createElement("div",{className:`${I}-body`},o.createElement(Ct,Object.assign({},Y)));return"badge"in t&&(N=o.createElement(et.Z,Object.assign({},P),N)),"tooltip"in t&&(N=o.createElement(nt.Z,{title:f,placement:F==="rtl"?"right":"left"},N)),H(t.href?o.createElement("a",Object.assign({ref:l},M,{className:J,style:O}),N):o.createElement("button",Object.assign({ref:l},M,{className:J,style:O,type:i}),N))}),wt=function(t,l){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&l.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(t);r<e.length;r++)l.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(t,e[r])&&(n[e[r]]=t[e[r]]);return n},ut=o.forwardRef((t,l)=>{const{prefixCls:n,className:e,type:r="default",shape:s="circle",visibilityHeight:h=400,icon:g=o.createElement($.Z,null),target:m,onClick:d,duration:f=450}=t,i=wt(t,["prefixCls","className","type","shape","visibilityHeight","icon","target","onClick","duration"]),[L,M]=(0,o.useState)(h===0),c=o.useRef(null);o.useImperativeHandle(l,()=>({nativeElement:c.current}));const F=()=>{var E;return((E=c.current)===null||E===void 0?void 0:E.ownerDocument)||window},D=(0,B.Z)(E=>{const O=(0,T.Z)(E.target);M(O>=h)});(0,o.useEffect)(()=>{const O=(m||F)();return D({target:O}),O==null||O.addEventListener("scroll",D),()=>{D.cancel(),O==null||O.removeEventListener("scroll",D)}},[m]);const I=E=>{(0,S.Z)(0,{getContainer:m||F,duration:f}),d==null||d(E)},{getPrefixCls:W}=(0,o.useContext)(p.E_),H=W(q,n),Q=W(),X=(0,o.useContext)(U)||s,J=Object.assign({prefixCls:H,icon:g,type:r,shape:X},i);return o.createElement(b.ZP,{visible:L,motionName:`${Q}-fade`},(E,O)=>{let{className:P}=E;return o.createElement(A,Object.assign({ref:(0,y.sQ)(c,O)},J,{onClick:I,className:u()(e,P)}))})}),Ft=a(97937),jt=a(56790),zt=a(21770),Lt=function(t,l){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&l.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(t);r<e.length;r++)l.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(t,e[r])&&(n[e[r]]=t[e[r]]);return n},dt=t=>{var l;const{prefixCls:n,className:e,style:r,shape:s="circle",type:h="default",placement:g="top",icon:m=o.createElement(lt,null),closeIcon:d,description:f,trigger:i,children:L,onOpenChange:M,open:c,onClick:F}=t,D=Lt(t,["prefixCls","className","style","shape","type","placement","icon","closeIcon","description","trigger","children","onOpenChange","open","onClick"]),{direction:I,getPrefixCls:W,floatButtonGroup:H}=o.useContext(p.E_),Q=(l=d!=null?d:H==null?void 0:H.closeIcon)!==null&&l!==void 0?l:o.createElement(Ft.Z,null),K=W(q,n),X=(0,Z.Z)(K),[J,E,O]=ct(K,X),P=`${K}-group`,Y=i&&["click","hover"].includes(i),N=g&&["top","left","right","bottom"].includes(g),Zt=u()(P,E,O,X,e,{[`${P}-rtl`]:I==="rtl",[`${P}-${s}`]:s,[`${P}-${s}-shadow`]:!Y,[`${P}-${g}`]:Y&&N}),[At]=(0,R.Cn)("FloatButton",r==null?void 0:r.zIndex),Wt=Object.assign(Object.assign({},r),{zIndex:At}),Ht=u()(E,`${P}-wrap`),[k,Gt]=(0,zt.Z)(!1,{value:c}),gt=o.useRef(null),pt=i==="hover",ot=i==="click",tt=(0,jt.zX)(w=>{k!==w&&(Gt(w),M==null||M(w))}),Vt=()=>{pt&&tt(!0)},Ut=()=>{pt&&tt(!1)},Kt=w=>{ot&&tt(!k),F==null||F(w)};return o.useEffect(()=>{if(ot){const w=rt=>{var at;!((at=gt.current)===null||at===void 0)&&at.contains(rt.target)||tt(!1)};return document.addEventListener("click",w,{capture:!0}),()=>document.removeEventListener("click",w,{capture:!0})}},[ot]),J(o.createElement(V,{value:s},o.createElement("div",{ref:gt,className:Zt,style:Wt,onMouseEnter:Vt,onMouseLeave:Ut},Y?o.createElement(o.Fragment,null,o.createElement(b.ZP,{visible:k,motionName:`${P}-wrap`},w=>{let{className:rt}=w;return o.createElement("div",{className:u()(rt,Ht)},L)}),o.createElement(A,Object.assign({type:h,icon:k?Q:m,description:f,"aria-label":t["aria-label"],className:`${P}-trigger`,onClick:Kt},D))):L)))},ft=function(t,l){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&l.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(t);r<e.length;r++)l.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(t,e[r])&&(n[e[r]]=t[e[r]]);return n};const mt=t=>{var{backTop:l}=t,n=ft(t,["backTop"]);return l?o.createElement(ut,Object.assign({},n,{visibilityHeight:0})):o.createElement(A,Object.assign({},n))};var Dt=t=>{var{className:l,items:n}=t,e=ft(t,["className","items"]);const{prefixCls:r}=e,{getPrefixCls:s}=o.useContext(p.E_),g=`${s(q,r)}-pure`;return n?o.createElement(dt,Object.assign({className:u()(l,g)},e),n.map((m,d)=>o.createElement(mt,Object.assign({key:d},m)))):o.createElement(mt,Object.assign({className:u()(l,g)},e))};A.BackTop=ut,A.Group=dt,A._InternalPanelDoNotUseOrYouWillBeFired=Dt;var Nt=A},16932:function(G,x,a){a.d(x,{J$:function(){return b}});var o=a(11568),$=a(93590);const C=new o.E4("antFadeIn",{"0%":{opacity:0},"100%":{opacity:1}}),u=new o.E4("antFadeOut",{"0%":{opacity:1},"100%":{opacity:0}}),b=function(y){let T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const{antCls:S}=y,B=`${S}-fade`,p=T?"&":"";return[(0,$.R)(B,C,u,y.motionDurationMid,T),{[`
        ${p}${B}-enter,
        ${p}${B}-appear
      `]:{opacity:0,animationTimingFunction:"linear"},[`${p}${B}-leave`]:{animationTimingFunction:"linear"}}]}}}]);