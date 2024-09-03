"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9301],{40411:function(At,ct,S){S.d(ct,{Z:function(){return It}});var s=S(67294),dt=S(93967),E=S.n(dt),ut=S(29372),G=S(98787),J=S(96159),F=S(53124),$=S(11568),K=S(14747),Q=S(98719),mt=S(83262),k=S(83559);const bt=new $.E4("antStatusProcessing",{"0%":{transform:"scale(0.8)",opacity:.5},"100%":{transform:"scale(2.4)",opacity:0}}),gt=new $.E4("antZoomBadgeIn",{"0%":{transform:"scale(0) translate(50%, -50%)",opacity:0},"100%":{transform:"scale(1) translate(50%, -50%)"}}),ft=new $.E4("antZoomBadgeOut",{"0%":{transform:"scale(1) translate(50%, -50%)"},"100%":{transform:"scale(0) translate(50%, -50%)",opacity:0}}),pt=new $.E4("antNoWrapperZoomBadgeIn",{"0%":{transform:"scale(0)",opacity:0},"100%":{transform:"scale(1)"}}),vt=new $.E4("antNoWrapperZoomBadgeOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0)",opacity:0}}),Ct=new $.E4("antBadgeLoadingCircle",{"0%":{transformOrigin:"50%"},"100%":{transform:"translate(50%, -50%) rotate(360deg)",transformOrigin:"50%"}}),ht=t=>{const{componentCls:e,iconCls:i,antCls:n,badgeShadowSize:o,motionDurationSlow:d,textFontSize:a,textFontSizeSM:N,statusSize:y,dotSize:g,textFontWeight:m,indicatorHeight:l,indicatorHeightSM:c,marginXS:f,calc:v}=t,u=`${n}-scroll-number`,C=(0,Q.Z)(t,(b,h)=>{let{darkColor:O}=h;return{[`&${e} ${e}-color-${b}`]:{background:O,[`&:not(${e}-count)`]:{color:O},"a:hover &":{background:O}}}});return{[e]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,K.Wf)(t)),{position:"relative",display:"inline-block",width:"fit-content",lineHeight:1,[`${e}-count`]:{display:"inline-flex",justifyContent:"center",zIndex:t.indicatorZIndex,minWidth:l,height:l,color:t.badgeTextColor,fontWeight:m,fontSize:a,lineHeight:(0,$.bf)(l),whiteSpace:"nowrap",textAlign:"center",background:t.badgeColor,borderRadius:v(l).div(2).equal(),boxShadow:`0 0 0 ${(0,$.bf)(o)} ${t.badgeShadowColor}`,transition:`background ${t.motionDurationMid}`,a:{color:t.badgeTextColor},"a:hover":{color:t.badgeTextColor},"a:hover &":{background:t.badgeColorHover}},[`${e}-count-sm`]:{minWidth:c,height:c,fontSize:N,lineHeight:(0,$.bf)(c),borderRadius:v(c).div(2).equal()},[`${e}-multiple-words`]:{padding:`0 ${(0,$.bf)(t.paddingXS)}`,bdi:{unicodeBidi:"plaintext"}},[`${e}-dot`]:{zIndex:t.indicatorZIndex,width:g,minWidth:g,height:g,background:t.badgeColor,borderRadius:"100%",boxShadow:`0 0 0 ${(0,$.bf)(o)} ${t.badgeShadowColor}`},[`${e}-dot${u}`]:{transition:`background ${d}`},[`${e}-count, ${e}-dot, ${u}-custom-component`]:{position:"absolute",top:0,insetInlineEnd:0,transform:"translate(50%, -50%)",transformOrigin:"100% 0%",[`&${i}-spin`]:{animationName:Ct,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&${e}-status`]:{lineHeight:"inherit",verticalAlign:"baseline",[`${e}-status-dot`]:{position:"relative",top:-1,display:"inline-block",width:y,height:y,verticalAlign:"middle",borderRadius:"50%"},[`${e}-status-success`]:{backgroundColor:t.colorSuccess},[`${e}-status-processing`]:{overflow:"visible",color:t.colorInfo,backgroundColor:t.colorInfo,borderColor:"currentcolor","&::after":{position:"absolute",top:0,insetInlineStart:0,width:"100%",height:"100%",borderWidth:o,borderStyle:"solid",borderColor:"inherit",borderRadius:"50%",animationName:bt,animationDuration:t.badgeProcessingDuration,animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",content:'""'}},[`${e}-status-default`]:{backgroundColor:t.colorTextPlaceholder},[`${e}-status-error`]:{backgroundColor:t.colorError},[`${e}-status-warning`]:{backgroundColor:t.colorWarning},[`${e}-status-text`]:{marginInlineStart:f,color:t.colorText,fontSize:t.fontSize}}}),C),{[`${e}-zoom-appear, ${e}-zoom-enter`]:{animationName:gt,animationDuration:t.motionDurationSlow,animationTimingFunction:t.motionEaseOutBack,animationFillMode:"both"},[`${e}-zoom-leave`]:{animationName:ft,animationDuration:t.motionDurationSlow,animationTimingFunction:t.motionEaseOutBack,animationFillMode:"both"},[`&${e}-not-a-wrapper`]:{[`${e}-zoom-appear, ${e}-zoom-enter`]:{animationName:pt,animationDuration:t.motionDurationSlow,animationTimingFunction:t.motionEaseOutBack},[`${e}-zoom-leave`]:{animationName:vt,animationDuration:t.motionDurationSlow,animationTimingFunction:t.motionEaseOutBack},[`&:not(${e}-status)`]:{verticalAlign:"middle"},[`${u}-custom-component, ${e}-count`]:{transform:"none"},[`${u}-custom-component, ${u}`]:{position:"relative",top:"auto",display:"block",transformOrigin:"50% 50%"}},[u]:{overflow:"hidden",[`${u}-only`]:{position:"relative",display:"inline-block",height:l,transition:`all ${t.motionDurationSlow} ${t.motionEaseOutBack}`,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",[`> p${u}-only-unit`]:{height:l,margin:0,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden"}},[`${u}-symbol`]:{verticalAlign:"top"}},"&-rtl":{direction:"rtl",[`${e}-count, ${e}-dot, ${u}-custom-component`]:{transform:"translate(-50%, -50%)"}}})}},q=t=>{const{fontHeight:e,lineWidth:i,marginXS:n,colorBorderBg:o}=t,d=e,a=i,N=t.colorBgContainer,y=t.colorError,g=t.colorErrorHover;return(0,mt.IX)(t,{badgeFontHeight:d,badgeShadowSize:a,badgeTextColor:N,badgeColor:y,badgeColorHover:g,badgeShadowColor:o,badgeProcessingDuration:"1.2s",badgeRibbonOffset:n,badgeRibbonCornerTransform:"scaleY(0.75)",badgeRibbonCornerFilter:"brightness(75%)"})},_=t=>{const{fontSize:e,lineHeight:i,fontSizeSM:n,lineWidth:o}=t;return{indicatorZIndex:"auto",indicatorHeight:Math.round(e*i)-2*o,indicatorHeightSM:e,dotSize:n/2,textFontSize:n,textFontSizeSM:n,textFontWeight:"normal",statusSize:n/2}};var $t=(0,k.I$)("Badge",t=>{const e=q(t);return ht(e)},_);const yt=t=>{const{antCls:e,badgeFontHeight:i,marginXS:n,badgeRibbonOffset:o,calc:d}=t,a=`${e}-ribbon`,N=`${e}-ribbon-wrapper`,y=(0,Q.Z)(t,(g,m)=>{let{darkColor:l}=m;return{[`&${a}-color-${g}`]:{background:l,color:l}}});return{[N]:{position:"relative"},[a]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,K.Wf)(t)),{position:"absolute",top:n,padding:`0 ${(0,$.bf)(t.paddingXS)}`,color:t.colorPrimary,lineHeight:(0,$.bf)(i),whiteSpace:"nowrap",backgroundColor:t.colorPrimary,borderRadius:t.borderRadiusSM,[`${a}-text`]:{color:t.colorTextLightSolid},[`${a}-corner`]:{position:"absolute",top:"100%",width:o,height:o,color:"currentcolor",border:`${(0,$.bf)(d(o).div(2).equal())} solid`,transform:t.badgeRibbonCornerTransform,transformOrigin:"top",filter:t.badgeRibbonCornerFilter}}),y),{[`&${a}-placement-end`]:{insetInlineEnd:d(o).mul(-1).equal(),borderEndEndRadius:0,[`${a}-corner`]:{insetInlineEnd:0,borderInlineEndColor:"transparent",borderBlockEndColor:"transparent"}},[`&${a}-placement-start`]:{insetInlineStart:d(o).mul(-1).equal(),borderEndStartRadius:0,[`${a}-corner`]:{insetInlineStart:0,borderBlockEndColor:"transparent",borderInlineStartColor:"transparent"}},"&-rtl":{direction:"rtl"}})}};var St=(0,k.I$)(["Badge","Ribbon"],t=>{const e=q(t);return yt(e)},_),Nt=t=>{const{className:e,prefixCls:i,style:n,color:o,children:d,text:a,placement:N="end",rootClassName:y}=t,{getPrefixCls:g,direction:m}=s.useContext(F.E_),l=g("ribbon",i),c=`${l}-wrapper`,[f,v,u]=St(l,c),C=(0,G.o2)(o,!1),b=E()(l,`${l}-placement-${N}`,{[`${l}-rtl`]:m==="rtl",[`${l}-color-${o}`]:C},e),h={},O={};return o&&!C&&(h.background=o,O.color=o),f(s.createElement("div",{className:E()(c,y,v,u)},d,s.createElement("div",{className:E()(b,v),style:Object.assign(Object.assign({},h),n)},s.createElement("span",{className:`${l}-text`},a),s.createElement("div",{className:`${l}-corner`,style:O}))))};const tt=t=>{const{prefixCls:e,value:i,current:n,offset:o=0}=t;let d;return o&&(d={position:"absolute",top:`${o}00%`,left:0}),s.createElement("span",{style:d,className:E()(`${e}-only-unit`,{current:n})},i)};function Ot(t,e,i){let n=t,o=0;for(;(n+10)%10!==e;)n+=i,o+=i;return o}var xt=t=>{const{prefixCls:e,count:i,value:n}=t,o=Number(n),d=Math.abs(i),[a,N]=s.useState(o),[y,g]=s.useState(d),m=()=>{N(o),g(d)};s.useEffect(()=>{const f=setTimeout(m,1e3);return()=>clearTimeout(f)},[o]);let l,c;if(a===o||Number.isNaN(o)||Number.isNaN(a))l=[s.createElement(tt,Object.assign({},t,{key:o,current:!0}))],c={transition:"none"};else{l=[];const f=o+10,v=[];for(let b=o;b<=f;b+=1)v.push(b);const u=v.findIndex(b=>b%10===a);l=v.map((b,h)=>{const O=b%10;return s.createElement(tt,Object.assign({},t,{key:b,value:O,offset:h-u,current:h===u}))});const C=y<d?1:-1;c={transform:`translateY(${-Ot(a,o,C)}00%)`}}return s.createElement("span",{className:`${e}-only`,style:c,onTransitionEnd:m},l)},wt=function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(i[n[o]]=t[n[o]]);return i},Et=s.forwardRef((t,e)=>{const{prefixCls:i,count:n,className:o,motionClassName:d,style:a,title:N,show:y,component:g="sup",children:m}=t,l=wt(t,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),{getPrefixCls:c}=s.useContext(F.E_),f=c("scroll-number",i),v=Object.assign(Object.assign({},l),{"data-show":y,style:a,className:E()(f,o,d),title:N});let u=n;if(n&&Number(n)%1===0){const C=String(n).split("");u=s.createElement("bdi",null,C.map((b,h)=>s.createElement(xt,{prefixCls:f,count:Number(n),value:b,key:C.length-h})))}return a!=null&&a.borderColor&&(v.style=Object.assign(Object.assign({},a),{boxShadow:`0 0 0 1px ${a.borderColor} inset`})),m?(0,J.Tm)(m,C=>({className:E()(`${f}-custom-component`,C==null?void 0:C.className,d)})):s.createElement(g,Object.assign({},v,{ref:e}),u)}),jt=function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(i[n[o]]=t[n[o]]);return i};const et=s.forwardRef((t,e)=>{var i,n,o,d,a;const{prefixCls:N,scrollNumberPrefixCls:y,children:g,status:m,text:l,color:c,count:f=null,overflowCount:v=99,dot:u=!1,size:C="default",title:b,offset:h,style:O,className:Pt,rootClassName:Tt,classNames:j,styles:x,showZero:Z=!1}=t,ot=jt(t,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","rootClassName","classNames","styles","showZero"]),{getPrefixCls:nt,direction:H,badge:r}=s.useContext(F.E_),p=nt("badge",N),[rt,zt,Rt]=$t(p),M=f>v?`${v}+`:f,R=M==="0"||M===0,Bt=f===null||R&&!Z,V=(m!=null||c!=null)&&Bt,z=u&&!R,I=z?"":M,P=(0,s.useMemo)(()=>(I==null||I===""||R&&!Z)&&!z,[I,R,Z,z]),st=(0,s.useRef)(f);P||(st.current=f);const T=st.current,it=(0,s.useRef)(I);P||(it.current=I);const A=it.current,at=(0,s.useRef)(z);P||(at.current=z);const B=(0,s.useMemo)(()=>{if(!h)return Object.assign(Object.assign({},r==null?void 0:r.style),O);const w={marginTop:h[1]};return H==="rtl"?w.left=parseInt(h[0],10):w.right=-parseInt(h[0],10),Object.assign(Object.assign(Object.assign({},w),r==null?void 0:r.style),O)},[H,h,O,r==null?void 0:r.style]),Wt=b!=null?b:typeof T=="string"||typeof T=="number"?T:void 0,Dt=P||!l?null:s.createElement("span",{className:`${p}-status-text`},l),Ft=!T||typeof T!="object"?void 0:(0,J.Tm)(T,w=>({style:Object.assign(Object.assign({},B),w.style)})),W=(0,G.o2)(c,!1),Zt=E()(j==null?void 0:j.indicator,(i=r==null?void 0:r.classNames)===null||i===void 0?void 0:i.indicator,{[`${p}-status-dot`]:V,[`${p}-status-${m}`]:!!m,[`${p}-color-${c}`]:W}),X={};c&&!W&&(X.color=c,X.background=c);const lt=E()(p,{[`${p}-status`]:V,[`${p}-not-a-wrapper`]:!g,[`${p}-rtl`]:H==="rtl"},Pt,Tt,r==null?void 0:r.className,(n=r==null?void 0:r.classNames)===null||n===void 0?void 0:n.root,j==null?void 0:j.root,zt,Rt);if(!g&&V){const w=B.color;return rt(s.createElement("span",Object.assign({},ot,{className:lt,style:Object.assign(Object.assign(Object.assign({},x==null?void 0:x.root),(o=r==null?void 0:r.styles)===null||o===void 0?void 0:o.root),B)}),s.createElement("span",{className:Zt,style:Object.assign(Object.assign(Object.assign({},x==null?void 0:x.indicator),(d=r==null?void 0:r.styles)===null||d===void 0?void 0:d.indicator),X)}),l&&s.createElement("span",{style:{color:w},className:`${p}-status-text`},l)))}return rt(s.createElement("span",Object.assign({ref:e},ot,{className:lt,style:Object.assign(Object.assign({},(a=r==null?void 0:r.styles)===null||a===void 0?void 0:a.root),x==null?void 0:x.root)}),g,s.createElement(ut.ZP,{visible:!P,motionName:`${p}-zoom`,motionAppear:!1,motionDeadline:1e3},w=>{let{className:Ht}=w;var L,U;const Mt=nt("scroll-number",y),Y=at.current,Vt=E()(j==null?void 0:j.indicator,(L=r==null?void 0:r.classNames)===null||L===void 0?void 0:L.indicator,{[`${p}-dot`]:Y,[`${p}-count`]:!Y,[`${p}-count-sm`]:C==="small",[`${p}-multiple-words`]:!Y&&A&&A.toString().length>1,[`${p}-status-${m}`]:!!m,[`${p}-color-${c}`]:W});let D=Object.assign(Object.assign(Object.assign({},x==null?void 0:x.indicator),(U=r==null?void 0:r.styles)===null||U===void 0?void 0:U.indicator),B);return c&&!W&&(D=D||{},D.background=c),s.createElement(Et,{prefixCls:Mt,show:!P,motionClassName:Ht,className:Vt,count:A,title:Wt,style:D,key:"scrollNumber"},Ft)}),Dt))});et.Ribbon=Nt;var It=et}}]);
