"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[411],{40411:function(At,ct,S){S.d(ct,{Z:function(){return It}});var s=S(67294),dt=S(93967),E=S.n(dt),ut=S(29372),G=S(98787),J=S(96159),F=S(53124),$=S(11568),K=S(14747),Q=S(98719),mt=S(83262),q=S(83559);const bt=new $.E4("antStatusProcessing",{"0%":{transform:"scale(0.8)",opacity:.5},"100%":{transform:"scale(2.4)",opacity:0}}),gt=new $.E4("antZoomBadgeIn",{"0%":{transform:"scale(0) translate(50%, -50%)",opacity:0},"100%":{transform:"scale(1) translate(50%, -50%)"}}),ft=new $.E4("antZoomBadgeOut",{"0%":{transform:"scale(1) translate(50%, -50%)"},"100%":{transform:"scale(0) translate(50%, -50%)",opacity:0}}),pt=new $.E4("antNoWrapperZoomBadgeIn",{"0%":{transform:"scale(0)",opacity:0},"100%":{transform:"scale(1)"}}),vt=new $.E4("antNoWrapperZoomBadgeOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0)",opacity:0}}),Ct=new $.E4("antBadgeLoadingCircle",{"0%":{transformOrigin:"50%"},"100%":{transform:"translate(50%, -50%) rotate(360deg)",transformOrigin:"50%"}}),ht=t=>{const{componentCls:e,iconCls:i,antCls:n,badgeShadowSize:o,textFontSize:d,textFontSizeSM:a,statusSize:y,dotSize:v,textFontWeight:C,indicatorHeight:c,indicatorHeightSM:l,marginXS:m,calc:b}=t,u=`${n}-scroll-number`,O=(0,Q.Z)(t,(h,g)=>{let{darkColor:f}=g;return{[`&${e} ${e}-color-${h}`]:{background:f,[`&:not(${e}-count)`]:{color:f},"a:hover &":{background:f}}}});return{[e]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,K.Wf)(t)),{position:"relative",display:"inline-block",width:"fit-content",lineHeight:1,[`${e}-count`]:{display:"inline-flex",justifyContent:"center",zIndex:t.indicatorZIndex,minWidth:c,height:c,color:t.badgeTextColor,fontWeight:C,fontSize:d,lineHeight:(0,$.bf)(c),whiteSpace:"nowrap",textAlign:"center",background:t.badgeColor,borderRadius:b(c).div(2).equal(),boxShadow:`0 0 0 ${(0,$.bf)(o)} ${t.badgeShadowColor}`,transition:`background ${t.motionDurationMid}`,a:{color:t.badgeTextColor},"a:hover":{color:t.badgeTextColor},"a:hover &":{background:t.badgeColorHover}},[`${e}-count-sm`]:{minWidth:l,height:l,fontSize:a,lineHeight:(0,$.bf)(l),borderRadius:b(l).div(2).equal()},[`${e}-multiple-words`]:{padding:`0 ${(0,$.bf)(t.paddingXS)}`,bdi:{unicodeBidi:"plaintext"}},[`${e}-dot`]:{zIndex:t.indicatorZIndex,width:v,minWidth:v,height:v,background:t.badgeColor,borderRadius:"100%",boxShadow:`0 0 0 ${(0,$.bf)(o)} ${t.badgeShadowColor}`},[`${e}-count, ${e}-dot, ${u}-custom-component`]:{position:"absolute",top:0,insetInlineEnd:0,transform:"translate(50%, -50%)",transformOrigin:"100% 0%",[`&${i}-spin`]:{animationName:Ct,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&${e}-status`]:{lineHeight:"inherit",verticalAlign:"baseline",[`${e}-status-dot`]:{position:"relative",top:-1,display:"inline-block",width:y,height:y,verticalAlign:"middle",borderRadius:"50%"},[`${e}-status-success`]:{backgroundColor:t.colorSuccess},[`${e}-status-processing`]:{overflow:"visible",color:t.colorInfo,backgroundColor:t.colorInfo,borderColor:"currentcolor","&::after":{position:"absolute",top:0,insetInlineStart:0,width:"100%",height:"100%",borderWidth:o,borderStyle:"solid",borderColor:"inherit",borderRadius:"50%",animationName:bt,animationDuration:t.badgeProcessingDuration,animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",content:'""'}},[`${e}-status-default`]:{backgroundColor:t.colorTextPlaceholder},[`${e}-status-error`]:{backgroundColor:t.colorError},[`${e}-status-warning`]:{backgroundColor:t.colorWarning},[`${e}-status-text`]:{marginInlineStart:m,color:t.colorText,fontSize:t.fontSize}}}),O),{[`${e}-zoom-appear, ${e}-zoom-enter`]:{animationName:gt,animationDuration:t.motionDurationSlow,animationTimingFunction:t.motionEaseOutBack,animationFillMode:"both"},[`${e}-zoom-leave`]:{animationName:ft,animationDuration:t.motionDurationSlow,animationTimingFunction:t.motionEaseOutBack,animationFillMode:"both"},[`&${e}-not-a-wrapper`]:{[`${e}-zoom-appear, ${e}-zoom-enter`]:{animationName:pt,animationDuration:t.motionDurationSlow,animationTimingFunction:t.motionEaseOutBack},[`${e}-zoom-leave`]:{animationName:vt,animationDuration:t.motionDurationSlow,animationTimingFunction:t.motionEaseOutBack},[`&:not(${e}-status)`]:{verticalAlign:"middle"},[`${u}-custom-component, ${e}-count`]:{transform:"none"},[`${u}-custom-component, ${u}`]:{position:"relative",top:"auto",display:"block",transformOrigin:"50% 50%"}},[u]:{overflow:"hidden",transition:`all ${t.motionDurationMid} ${t.motionEaseOutBack}`,[`${u}-only`]:{position:"relative",display:"inline-block",height:c,transition:`all ${t.motionDurationSlow} ${t.motionEaseOutBack}`,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",[`> p${u}-only-unit`]:{height:c,margin:0,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden"}},[`${u}-symbol`]:{verticalAlign:"top"}},"&-rtl":{direction:"rtl",[`${e}-count, ${e}-dot, ${u}-custom-component`]:{transform:"translate(-50%, -50%)"}}})}},k=t=>{const{fontHeight:e,lineWidth:i,marginXS:n,colorBorderBg:o}=t,d=e,a=i,y=t.colorBgContainer,v=t.colorError,C=t.colorErrorHover;return(0,mt.IX)(t,{badgeFontHeight:d,badgeShadowSize:a,badgeTextColor:y,badgeColor:v,badgeColorHover:C,badgeShadowColor:o,badgeProcessingDuration:"1.2s",badgeRibbonOffset:n,badgeRibbonCornerTransform:"scaleY(0.75)",badgeRibbonCornerFilter:"brightness(75%)"})},_=t=>{const{fontSize:e,lineHeight:i,fontSizeSM:n,lineWidth:o}=t;return{indicatorZIndex:"auto",indicatorHeight:Math.round(e*i)-2*o,indicatorHeightSM:e,dotSize:n/2,textFontSize:n,textFontSizeSM:n,textFontWeight:"normal",statusSize:n/2}};var $t=(0,q.I$)("Badge",t=>{const e=k(t);return ht(e)},_);const yt=t=>{const{antCls:e,badgeFontHeight:i,marginXS:n,badgeRibbonOffset:o,calc:d}=t,a=`${e}-ribbon`,y=`${e}-ribbon-wrapper`,v=(0,Q.Z)(t,(C,c)=>{let{darkColor:l}=c;return{[`&${a}-color-${C}`]:{background:l,color:l}}});return{[y]:{position:"relative"},[a]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,K.Wf)(t)),{position:"absolute",top:n,padding:`0 ${(0,$.bf)(t.paddingXS)}`,color:t.colorPrimary,lineHeight:(0,$.bf)(i),whiteSpace:"nowrap",backgroundColor:t.colorPrimary,borderRadius:t.borderRadiusSM,[`${a}-text`]:{color:t.colorTextLightSolid},[`${a}-corner`]:{position:"absolute",top:"100%",width:o,height:o,color:"currentcolor",border:`${(0,$.bf)(d(o).div(2).equal())} solid`,transform:t.badgeRibbonCornerTransform,transformOrigin:"top",filter:t.badgeRibbonCornerFilter}}),v),{[`&${a}-placement-end`]:{insetInlineEnd:d(o).mul(-1).equal(),borderEndEndRadius:0,[`${a}-corner`]:{insetInlineEnd:0,borderInlineEndColor:"transparent",borderBlockEndColor:"transparent"}},[`&${a}-placement-start`]:{insetInlineStart:d(o).mul(-1).equal(),borderEndStartRadius:0,[`${a}-corner`]:{insetInlineStart:0,borderBlockEndColor:"transparent",borderInlineStartColor:"transparent"}},"&-rtl":{direction:"rtl"}})}};var St=(0,q.I$)(["Badge","Ribbon"],t=>{const e=k(t);return yt(e)},_),Nt=t=>{const{className:e,prefixCls:i,style:n,color:o,children:d,text:a,placement:y="end",rootClassName:v}=t,{getPrefixCls:C,direction:c}=s.useContext(F.E_),l=C("ribbon",i),m=`${l}-wrapper`,[b,u,O]=St(l,m),h=(0,G.o2)(o,!1),g=E()(l,`${l}-placement-${y}`,{[`${l}-rtl`]:c==="rtl",[`${l}-color-${o}`]:h},e),f={},j={};return o&&!h&&(f.background=o,j.color=o),b(s.createElement("div",{className:E()(m,v,u,O)},d,s.createElement("div",{className:E()(g,u),style:Object.assign(Object.assign({},f),n)},s.createElement("span",{className:`${l}-text`},a),s.createElement("div",{className:`${l}-corner`,style:j}))))};const tt=t=>{const{prefixCls:e,value:i,current:n,offset:o=0}=t;let d;return o&&(d={position:"absolute",top:`${o}00%`,left:0}),s.createElement("span",{style:d,className:E()(`${e}-only-unit`,{current:n})},i)};function Ot(t,e,i){let n=t,o=0;for(;(n+10)%10!==e;)n+=i,o+=i;return o}var xt=t=>{const{prefixCls:e,count:i,value:n}=t,o=Number(n),d=Math.abs(i),[a,y]=s.useState(o),[v,C]=s.useState(d),c=()=>{y(o),C(d)};s.useEffect(()=>{const b=setTimeout(c,1e3);return()=>clearTimeout(b)},[o]);let l,m;if(a===o||Number.isNaN(o)||Number.isNaN(a))l=[s.createElement(tt,Object.assign({},t,{key:o,current:!0}))],m={transition:"none"};else{l=[];const b=o+10,u=[];for(let g=o;g<=b;g+=1)u.push(g);const O=u.findIndex(g=>g%10===a);l=u.map((g,f)=>{const j=g%10;return s.createElement(tt,Object.assign({},t,{key:g,value:j,offset:f-O,current:f===O}))});const h=v<d?1:-1;m={transform:`translateY(${-Ot(a,o,h)}00%)`}}return s.createElement("span",{className:`${e}-only`,style:m,onTransitionEnd:c},l)},Et=function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(i[n[o]]=t[n[o]]);return i},wt=s.forwardRef((t,e)=>{const{prefixCls:i,count:n,className:o,motionClassName:d,style:a,title:y,show:v,component:C="sup",children:c}=t,l=Et(t,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),{getPrefixCls:m}=s.useContext(F.E_),b=m("scroll-number",i),u=Object.assign(Object.assign({},l),{"data-show":v,style:a,className:E()(b,o,d),title:y});let O=n;if(n&&Number(n)%1===0){const h=String(n).split("");O=s.createElement("bdi",null,h.map((g,f)=>s.createElement(xt,{prefixCls:b,count:Number(n),value:g,key:h.length-f})))}return a!=null&&a.borderColor&&(u.style=Object.assign(Object.assign({},a),{boxShadow:`0 0 0 1px ${a.borderColor} inset`})),c?(0,J.Tm)(c,h=>({className:E()(`${b}-custom-component`,h==null?void 0:h.className,d)})):s.createElement(C,Object.assign({},u,{ref:e}),O)}),jt=function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(i[n[o]]=t[n[o]]);return i};const et=s.forwardRef((t,e)=>{var i,n,o,d,a;const{prefixCls:y,scrollNumberPrefixCls:v,children:C,status:c,text:l,color:m,count:b=null,overflowCount:u=99,dot:O=!1,size:h="default",title:g,offset:f,style:j,className:Pt,rootClassName:Tt,classNames:w,styles:N,showZero:Z=!1}=t,ot=jt(t,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","rootClassName","classNames","styles","showZero"]),{getPrefixCls:nt,direction:H,badge:r}=s.useContext(F.E_),p=nt("badge",y),[rt,zt,Bt]=$t(p),M=b>u?`${u}+`:b,B=M==="0"||M===0,Rt=b===null||B&&!Z,V=(c!=null||m!=null)&&Rt,z=O&&!B,I=z?"":M,P=(0,s.useMemo)(()=>(I==null||I===""||B&&!Z)&&!z,[I,B,Z,z]),st=(0,s.useRef)(b);P||(st.current=b);const T=st.current,it=(0,s.useRef)(I);P||(it.current=I);const A=it.current,at=(0,s.useRef)(z);P||(at.current=z);const R=(0,s.useMemo)(()=>{if(!f)return Object.assign(Object.assign({},r==null?void 0:r.style),j);const x={marginTop:f[1]};return H==="rtl"?x.left=parseInt(f[0],10):x.right=-parseInt(f[0],10),Object.assign(Object.assign(Object.assign({},x),r==null?void 0:r.style),j)},[H,f,j,r==null?void 0:r.style]),Wt=g!=null?g:typeof T=="string"||typeof T=="number"?T:void 0,Dt=P||!l?null:s.createElement("span",{className:`${p}-status-text`},l),Ft=!T||typeof T!="object"?void 0:(0,J.Tm)(T,x=>({style:Object.assign(Object.assign({},R),x.style)})),W=(0,G.o2)(m,!1),Zt=E()(w==null?void 0:w.indicator,(i=r==null?void 0:r.classNames)===null||i===void 0?void 0:i.indicator,{[`${p}-status-dot`]:V,[`${p}-status-${c}`]:!!c,[`${p}-color-${m}`]:W}),X={};m&&!W&&(X.color=m,X.background=m);const lt=E()(p,{[`${p}-status`]:V,[`${p}-not-a-wrapper`]:!C,[`${p}-rtl`]:H==="rtl"},Pt,Tt,r==null?void 0:r.className,(n=r==null?void 0:r.classNames)===null||n===void 0?void 0:n.root,w==null?void 0:w.root,zt,Bt);if(!C&&V){const x=R.color;return rt(s.createElement("span",Object.assign({},ot,{className:lt,style:Object.assign(Object.assign(Object.assign({},N==null?void 0:N.root),(o=r==null?void 0:r.styles)===null||o===void 0?void 0:o.root),R)}),s.createElement("span",{className:Zt,style:Object.assign(Object.assign(Object.assign({},N==null?void 0:N.indicator),(d=r==null?void 0:r.styles)===null||d===void 0?void 0:d.indicator),X)}),l&&s.createElement("span",{style:{color:x},className:`${p}-status-text`},l)))}return rt(s.createElement("span",Object.assign({ref:e},ot,{className:lt,style:Object.assign(Object.assign({},(a=r==null?void 0:r.styles)===null||a===void 0?void 0:a.root),N==null?void 0:N.root)}),C,s.createElement(ut.ZP,{visible:!P,motionName:`${p}-zoom`,motionAppear:!1,motionDeadline:1e3},x=>{let{className:Ht}=x;var L,U;const Mt=nt("scroll-number",v),Y=at.current,Vt=E()(w==null?void 0:w.indicator,(L=r==null?void 0:r.classNames)===null||L===void 0?void 0:L.indicator,{[`${p}-dot`]:Y,[`${p}-count`]:!Y,[`${p}-count-sm`]:h==="small",[`${p}-multiple-words`]:!Y&&A&&A.toString().length>1,[`${p}-status-${c}`]:!!c,[`${p}-color-${m}`]:W});let D=Object.assign(Object.assign(Object.assign({},N==null?void 0:N.indicator),(U=r==null?void 0:r.styles)===null||U===void 0?void 0:U.indicator),R);return m&&!W&&(D=D||{},D.background=m),s.createElement(wt,{prefixCls:Mt,show:!P,motionClassName:Ht,className:Vt,count:A,title:Wt,style:D,key:"scrollNumber"},Ft)}),Dt))});et.Ribbon=Nt;var It=et}}]);
