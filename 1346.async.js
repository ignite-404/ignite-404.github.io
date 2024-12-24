"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1346],{11346:function(Ye,xe,a){a.d(xe,{Z:function(){return pn}});var u=a(65223),T=a(74902),o=a(67294),re=a(93967),_=a.n(re),Fe=a(29372),g=a(33603),w=a(35792);function G(e){const[t,n]=o.useState(e);return o.useEffect(()=>{const r=setTimeout(()=>{n(e)},e.length?0:10);return()=>{clearTimeout(r)}},[e]),t}var N=a(11568),b=a(14747),L=a(50438),d=a(33507),i=a(83262),h=a(83559),j=e=>{const{componentCls:t}=e,n=`${t}-show-help`,r=`${t}-show-help-item`;return{[n]:{transition:`opacity ${e.motionDurationFast} ${e.motionEaseInOut}`,"&-appear, &-enter":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}},[r]:{overflow:"hidden",transition:`height ${e.motionDurationFast} ${e.motionEaseInOut},
                     opacity ${e.motionDurationFast} ${e.motionEaseInOut},
                     transform ${e.motionDurationFast} ${e.motionEaseInOut} !important`,[`&${r}-appear, &${r}-enter`]:{transform:"translateY(-5px)",opacity:0,"&-active":{transform:"translateY(0)",opacity:1}},[`&${r}-leave-active`]:{transform:"translateY(-5px)"}}}}};const I=e=>({legend:{display:"block",width:"100%",marginBottom:e.marginLG,padding:0,color:e.colorTextDescription,fontSize:e.fontSizeLG,lineHeight:"inherit",border:0,borderBottom:`${(0,N.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},'input[type="search"]':{boxSizing:"border-box"},'input[type="radio"], input[type="checkbox"]':{lineHeight:"normal"},'input[type="file"]':{display:"block"},'input[type="range"]':{display:"block",width:"100%"},"select[multiple], select[size]":{height:"auto"},"input[type='file']:focus,\n  input[type='radio']:focus,\n  input[type='checkbox']:focus":{outline:0,boxShadow:`0 0 0 ${(0,N.bf)(e.controlOutlineWidth)} ${e.controlOutline}`},output:{display:"block",paddingTop:15,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight}}),v=(e,t)=>{const{formItemCls:n}=e;return{[n]:{[`${n}-label > label`]:{height:t},[`${n}-control-input`]:{minHeight:t}}}},fe=e=>{const{componentCls:t}=e;return{[e.componentCls]:Object.assign(Object.assign(Object.assign({},(0,b.Wf)(e)),I(e)),{[`${t}-text`]:{display:"inline-block",paddingInlineEnd:e.paddingSM},"&-small":Object.assign({},v(e,e.controlHeightSM)),"&-large":Object.assign({},v(e,e.controlHeightLG))})}},V=e=>{const{formItemCls:t,iconCls:n,componentCls:r,rootPrefixCls:l,antCls:s,labelRequiredMarkColor:c,labelColor:M,labelFontSize:$,labelHeight:C,labelColonMarginInlineStart:D,labelColonMarginInlineEnd:x,itemMarginBottom:W}=e;return{[t]:Object.assign(Object.assign({},(0,b.Wf)(e)),{marginBottom:W,verticalAlign:"top","&-with-help":{transition:"none"},[`&-hidden,
        &-hidden${s}-row`]:{display:"none"},"&-has-warning":{[`${t}-split`]:{color:e.colorError}},"&-has-error":{[`${t}-split`]:{color:e.colorWarning}},[`${t}-label`]:{flexGrow:0,overflow:"hidden",whiteSpace:"nowrap",textAlign:"end",verticalAlign:"middle","&-left":{textAlign:"start"},"&-wrap":{overflow:"unset",lineHeight:e.lineHeight,whiteSpace:"unset"},"> label":{position:"relative",display:"inline-flex",alignItems:"center",maxWidth:"100%",height:C,color:M,fontSize:$,[`> ${n}`]:{fontSize:e.fontSize,verticalAlign:"top"},[`&${t}-required:not(${t}-required-mark-optional)::before`]:{display:"inline-block",marginInlineEnd:e.marginXXS,color:c,fontSize:e.fontSize,fontFamily:"SimSun, sans-serif",lineHeight:1,content:'"*"',[`${r}-hide-required-mark &`]:{display:"none"}},[`${t}-optional`]:{display:"inline-block",marginInlineStart:e.marginXXS,color:e.colorTextDescription,[`${r}-hide-required-mark &`]:{display:"none"}},[`${t}-tooltip`]:{color:e.colorTextDescription,cursor:"help",writingMode:"horizontal-tb",marginInlineStart:e.marginXXS},"&::after":{content:'":"',position:"relative",marginBlock:0,marginInlineStart:D,marginInlineEnd:x},[`&${t}-no-colon::after`]:{content:'"\\a0"'}}},[`${t}-control`]:{"--ant-display":"flex",flexDirection:"column",flexGrow:1,[`&:first-child:not([class^="'${l}-col-'"]):not([class*="' ${l}-col-'"])`]:{width:"100%"},"&-input":{position:"relative",display:"flex",alignItems:"center",minHeight:e.controlHeight,"&-content":{flex:"auto",maxWidth:"100%"}}},[t]:{"&-additional":{display:"flex",flexDirection:"column"},"&-explain, &-extra":{clear:"both",color:e.colorTextDescription,fontSize:e.fontSize,lineHeight:e.lineHeight},"&-explain-connected":{width:"100%"},"&-extra":{minHeight:e.controlHeightSM,transition:`color ${e.motionDurationMid} ${e.motionEaseOut}`},"&-explain":{"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning}}},[`&-with-help ${t}-explain`]:{height:"auto",opacity:1},[`${t}-feedback-icon`]:{fontSize:e.fontSize,textAlign:"center",visibility:"visible",animationName:L.kr,animationDuration:e.motionDurationMid,animationTimingFunction:e.motionEaseOutBack,pointerEvents:"none","&-success":{color:e.colorSuccess},"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning},"&-validating":{color:e.colorPrimary}}})}},ce=(e,t)=>{const{formItemCls:n}=e;return{[`${t}-horizontal`]:{[`${n}-label`]:{flexGrow:0},[`${n}-control`]:{flex:"1 1 0",minWidth:0},[`${n}-label[class$='-24'], ${n}-label[class*='-24 ']`]:{[`& + ${n}-control`]:{minWidth:"unset"}}}}},Ee=e=>{const{componentCls:t,formItemCls:n,inlineItemMarginBottom:r}=e;return{[`${t}-inline`]:{display:"flex",flexWrap:"wrap",[n]:{flex:"none",marginInlineEnd:e.margin,marginBottom:r,"&-row":{flexWrap:"nowrap"},[`> ${n}-label,
        > ${n}-control`]:{display:"inline-block",verticalAlign:"top"},[`> ${n}-label`]:{flex:"none"},[`${t}-text`]:{display:"inline-block"},[`${n}-has-feedback`]:{display:"inline-block"}}}}},H=e=>({padding:e.verticalLabelPadding,margin:e.verticalLabelMargin,whiteSpace:"initial",textAlign:"start","> label":{margin:0,"&::after":{visibility:"hidden"}}}),pe=e=>{const{componentCls:t,formItemCls:n,rootPrefixCls:r}=e;return{[`${n} ${n}-label`]:H(e),[`${t}:not(${t}-inline)`]:{[n]:{flexWrap:"wrap",[`${n}-label, ${n}-control`]:{[`&:not([class*=" ${r}-col-xs"])`]:{flex:"0 0 100%",maxWidth:"100%"}}}}}},Oe=e=>{const{componentCls:t,formItemCls:n,antCls:r}=e;return{[`${t}-vertical`]:{[`${n}:not(${n}-horizontal)`]:{[`${n}-row`]:{flexDirection:"column"},[`${n}-label > label`]:{height:"auto"},[`${n}-control`]:{width:"100%"},[`${n}-label,
        ${r}-col-24${n}-label,
        ${r}-col-xl-24${n}-label`]:H(e)}},[`@media (max-width: ${(0,N.bf)(e.screenXSMax)})`]:[pe(e),{[t]:{[`${n}:not(${n}-horizontal)`]:{[`${r}-col-xs-24${n}-label`]:H(e)}}}],[`@media (max-width: ${(0,N.bf)(e.screenSMMax)})`]:{[t]:{[`${n}:not(${n}-horizontal)`]:{[`${r}-col-sm-24${n}-label`]:H(e)}}},[`@media (max-width: ${(0,N.bf)(e.screenMDMax)})`]:{[t]:{[`${n}:not(${n}-horizontal)`]:{[`${r}-col-md-24${n}-label`]:H(e)}}},[`@media (max-width: ${(0,N.bf)(e.screenLGMax)})`]:{[t]:{[`${n}:not(${n}-horizontal)`]:{[`${r}-col-lg-24${n}-label`]:H(e)}}}}},ye=e=>{const{formItemCls:t,antCls:n}=e;return{[`${t}-vertical`]:{[`${t}-row`]:{flexDirection:"column"},[`${t}-label > label`]:{height:"auto"},[`${t}-control`]:{width:"100%"}},[`${t}-vertical ${t}-label,
      ${n}-col-24${t}-label,
      ${n}-col-xl-24${t}-label`]:H(e),[`@media (max-width: ${(0,N.bf)(e.screenXSMax)})`]:[pe(e),{[t]:{[`${n}-col-xs-24${t}-label`]:H(e)}}],[`@media (max-width: ${(0,N.bf)(e.screenSMMax)})`]:{[t]:{[`${n}-col-sm-24${t}-label`]:H(e)}},[`@media (max-width: ${(0,N.bf)(e.screenMDMax)})`]:{[t]:{[`${n}-col-md-24${t}-label`]:H(e)}},[`@media (max-width: ${(0,N.bf)(e.screenLGMax)})`]:{[t]:{[`${n}-col-lg-24${t}-label`]:H(e)}}}},P=e=>({labelRequiredMarkColor:e.colorError,labelColor:e.colorTextHeading,labelFontSize:e.fontSize,labelHeight:e.controlHeight,labelColonMarginInlineStart:e.marginXXS/2,labelColonMarginInlineEnd:e.marginXS,itemMarginBottom:e.marginLG,verticalLabelPadding:`0 0 ${e.paddingXS}px`,verticalLabelMargin:0,inlineItemMarginBottom:0}),Re=(e,t)=>(0,i.IX)(e,{formItemCls:`${e.componentCls}-item`,rootPrefixCls:t});var $e=(0,h.I$)("Form",(e,t)=>{let{rootPrefixCls:n}=t;const r=Re(e,n);return[fe(r),V(r),j(r),ce(r,r.componentCls),ce(r,r.formItemCls),Ee(r),Oe(r),ye(r),(0,d.Z)(r),L.kr]},P,{order:-1e3});const Ce=[];function K(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return{key:typeof e=="string"?e:`${t}-${r}`,error:e,errorStatus:n}}var Ne=e=>{let{help:t,helpStatus:n,errors:r=Ce,warnings:l=Ce,className:s,fieldId:c,onVisibleChanged:M}=e;const{prefixCls:$}=o.useContext(u.Rk),C=`${$}-item-explain`,D=(0,w.Z)($),[x,W,le]=$e($,D),de=(0,o.useMemo)(()=>(0,g.Z)($),[$]),Z=G(r),z=G(l),B=o.useMemo(()=>t!=null?[K(t,"help",n)]:[].concat((0,T.Z)(Z.map((E,y)=>K(E,"error","error",y))),(0,T.Z)(z.map((E,y)=>K(E,"warning","warning",y)))),[t,n,Z,z]),k=o.useMemo(()=>{const E={};return B.forEach(y=>{let{key:F}=y;E[F]=(E[F]||0)+1}),B.map((y,F)=>Object.assign(Object.assign({},y),{key:E[y.key]>1?`${y.key}-fallback-${F}`:y.key}))},[B]),f={};return c&&(f.id=`${c}_help`),x(o.createElement(Fe.ZP,{motionDeadline:de.motionDeadline,motionName:`${$}-show-help`,visible:!!k.length,onVisibleChanged:M},E=>{const{className:y,style:F}=E;return o.createElement("div",Object.assign({},f,{className:_()(C,y,le,D,s,W),style:F,role:"alert"}),o.createElement(Fe.V4,Object.assign({keys:k},(0,g.Z)($),{motionName:`${$}-show-help-item`,component:!1}),se=>{const{key:X,error:Q,errorStatus:ae,className:ee,style:Pe}=se;return o.createElement("div",{key:X,className:_()(ee,{[`${C}-${ae}`]:ae}),style:Pe},Q)}))}))},S=a(88692),p=a(53124),O=a(98866),he=a(98675),Ie=a(97647),ze=a(34203),Se=a(65706);const Le=e=>e===!1?{block:"end",inline:"nearest"}:(t=>t===Object(t)&&Object.keys(t).length!==0)(e)?e:{block:"start",inline:"nearest"};function We(e,t){if(!e.isConnected||!(l=>{let s=l;for(;s&&s.parentNode;){if(s.parentNode===document)return!0;s=s.parentNode instanceof ShadowRoot?s.parentNode.host:s.parentNode}return!1})(e))return;const n=(l=>{const s=window.getComputedStyle(l);return{top:parseFloat(s.scrollMarginTop)||0,right:parseFloat(s.scrollMarginRight)||0,bottom:parseFloat(s.scrollMarginBottom)||0,left:parseFloat(s.scrollMarginLeft)||0}})(e);if((l=>typeof l=="object"&&typeof l.behavior=="function")(t))return t.behavior((0,Se.Q)(e,t));const r=typeof t=="boolean"||t==null?void 0:t.behavior;for(const{el:l,top:s,left:c}of(0,Se.Q)(e,Le(t))){const M=s-n.top+n.bottom,$=c-n.left+n.right;l.scroll({top:M,left:$,behavior:r})}}const De=["parentNode"],Ae="form_item";function oe(e){return e===void 0||e===!1?[]:Array.isArray(e)?e:[e]}function Me(e,t){if(!e.length)return;const n=e.join("_");return t?`${t}_${n}`:De.includes(n)?`${Ae}_${n}`:n}function A(e,t,n,r,l,s){let c=r;return s!==void 0?c=s:n.validating?c="validating":e.length?c="error":t.length?c="warning":(n.touched||l&&n.validated)&&(c="success"),c}function me(e){return oe(e).join("_")}function we(e,t){const n=t.getFieldInstance(e),r=(0,ze.bn)(n);if(r)return r;const l=Me(oe(e),t.__INTERNAL__.name);if(l)return document.getElementById(l)}function je(e){const[t]=(0,S.cI)(),n=o.useRef({}),r=o.useMemo(()=>e!=null?e:Object.assign(Object.assign({},t),{__INTERNAL__:{itemRef:l=>s=>{const c=me(l);s?n.current[c]=s:delete n.current[c]}},scrollToField:function(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const c=we(l,r);c&&We(c,Object.assign({scrollMode:"if-needed",block:"nearest"},s))},focusField:l=>{var s;const c=we(l,r);c&&((s=c.focus)===null||s===void 0||s.call(c))},getFieldInstance:l=>{const s=me(l);return n.current[s]}}),[e,t]);return[r]}var _e=a(37920),ke=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]]);return n};const et=(e,t)=>{const n=o.useContext(O.Z),{getPrefixCls:r,direction:l,form:s}=o.useContext(p.E_),{prefixCls:c,className:M,rootClassName:$,size:C,disabled:D=n,form:x,colon:W,labelAlign:le,labelWrap:de,labelCol:Z,wrapperCol:z,hideRequiredMark:B,layout:k="horizontal",scrollToFirstError:f,requiredMark:E,onFinishFailed:y,name:F,style:se,feedbackIcons:X,variant:Q}=e,ae=ke(e,["prefixCls","className","rootClassName","size","disabled","form","colon","labelAlign","labelWrap","labelCol","wrapperCol","hideRequiredMark","layout","scrollToFirstError","requiredMark","onFinishFailed","name","style","feedbackIcons","variant"]),ee=(0,he.Z)(C),Pe=o.useContext(_e.Z),be=(0,o.useMemo)(()=>E!==void 0?E:B?!1:s&&s.requiredMark!==void 0?s.requiredMark:!0,[B,E,s]),ge=W!=null?W:s==null?void 0:s.colon,te=r("form",c),Te=(0,w.Z)(te),[ie,Ze,Y]=$e(te,Te),Be=_()(te,`${te}-${k}`,{[`${te}-hide-required-mark`]:be===!1,[`${te}-rtl`]:l==="rtl",[`${te}-${ee}`]:ee},Y,Te,Ze,s==null?void 0:s.className,M,$),[ve]=je(x),{__INTERNAL__:tt}=ve;tt.name=F;const Ge=(0,o.useMemo)(()=>({name:F,labelAlign:le,labelCol:Z,labelWrap:de,wrapperCol:z,vertical:k==="vertical",colon:ge,requiredMark:be,itemRef:tt.itemRef,form:ve,feedbackIcons:X}),[F,le,Z,z,k,ge,be,ve,X]),Qe=o.useRef(null);o.useImperativeHandle(t,()=>{var ne;return Object.assign(Object.assign({},ve),{nativeElement:(ne=Qe.current)===null||ne===void 0?void 0:ne.nativeElement})});const nt=(ne,R)=>{if(ne){let J={block:"nearest"};typeof ne=="object"&&(J=Object.assign(Object.assign({},J),ne)),ve.scrollToField(R,J),J.focus&&ve.focusField(R)}},rt=ne=>{if(y==null||y(ne),ne.errorFields.length){const R=ne.errorFields[0].name;if(f!==void 0){nt(f,R);return}s&&s.scrollToFirstError!==void 0&&nt(s.scrollToFirstError,R)}};return ie(o.createElement(u.pg.Provider,{value:Q},o.createElement(O.n,{disabled:D},o.createElement(Ie.Z.Provider,{value:ee},o.createElement(u.RV,{validateMessages:Pe},o.createElement(u.q3.Provider,{value:Ge},o.createElement(S.ZP,Object.assign({id:F},ae,{name:F,onFinishFailed:rt,form:ve,ref:Qe,style:Object.assign(Object.assign({},s==null?void 0:s.style),se),className:Be}))))))))};var Et=o.forwardRef(et),Ot=a(30470),at=a(42550),It=a(96159),St=a(27288),Mt=a(50344);function wt(e){if(typeof e=="function")return e;const t=(0,Mt.Z)(e);return t.length<=1?t[0]:t}const ft=()=>{const{status:e,errors:t=[],warnings:n=[]}=(0,o.useContext)(u.aM);return{status:e,errors:t,warnings:n}};ft.Context=u.aM;var jt=ft,mt=a(75164);function Pt(e){const[t,n]=o.useState(e),r=(0,o.useRef)(null),l=(0,o.useRef)([]),s=(0,o.useRef)(!1);o.useEffect(()=>(s.current=!1,()=>{s.current=!0,mt.Z.cancel(r.current),r.current=null}),[]);function c(M){s.current||(r.current===null&&(l.current=[],r.current=(0,mt.Z)(()=>{r.current=null,n($=>{let C=$;return l.current.forEach(D=>{C=D(C)}),C})})),l.current.push(M))}return[t,c]}function Ft(){const{itemRef:e}=o.useContext(u.q3),t=o.useRef({});function n(r,l){const s=l&&typeof l=="object"&&(0,at.C4)(l),c=r.join("_");return(t.current.name!==c||t.current.originRef!==s)&&(t.current.name=c,t.current.originRef=s,t.current.ref=(0,at.sQ)(e(r),s)),t.current.ref}return n}var Rt=a(5110),gt=a(8410),Nt=a(98423),Lt=a(92820),it=a(56790),pt=a(21584);const Dt=e=>{const{formItemCls:t}=e;return{"@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)":{[`${t}-control`]:{display:"flex"}}}};var Tt=(0,h.bk)(["Form","item-item"],(e,t)=>{let{rootPrefixCls:n}=t;const r=Re(e,n);return[Dt(r)]}),Wt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]]);return n};const Vt=24;var At=e=>{const{prefixCls:t,status:n,labelCol:r,wrapperCol:l,children:s,errors:c,warnings:M,_internalItemRender:$,extra:C,help:D,fieldId:x,marginBottom:W,onErrorVisibleChanged:le,label:de}=e,Z=`${t}-item`,z=o.useContext(u.q3),B=o.useMemo(()=>{let ge=Object.assign({},l||z.wrapperCol||{});return de===null&&!r&&!l&&z.labelCol&&[void 0,"xs","sm","md","lg","xl","xxl"].forEach(Te=>{const ie=Te?[Te]:[],Ze=(0,it.U2)(z.labelCol,ie),Y=typeof Ze=="object"?Ze:{},Be=(0,it.U2)(ge,ie),ve=typeof Be=="object"?Be:{};"span"in Y&&!("offset"in ve)&&Y.span<Vt&&(ge=(0,it.t8)(ge,[].concat(ie,["offset"]),Y.span))}),ge},[l,z]),k=_()(`${Z}-control`,B.className),f=o.useMemo(()=>{const{labelCol:ge,wrapperCol:te}=z;return Wt(z,["labelCol","wrapperCol"])},[z]),E=o.useRef(null),[y,F]=o.useState(0);(0,gt.Z)(()=>{C&&E.current?F(E.current.clientHeight):F(0)},[C]);const se=o.createElement("div",{className:`${Z}-control-input`},o.createElement("div",{className:`${Z}-control-input-content`},s)),X=o.useMemo(()=>({prefixCls:t,status:n}),[t,n]),Q=W!==null||c.length||M.length?o.createElement(u.Rk.Provider,{value:X},o.createElement(Ne,{fieldId:x,errors:c,warnings:M,help:D,helpStatus:n,className:`${Z}-explain-connected`,onVisibleChanged:le})):null,ae={};x&&(ae.id=`${x}_extra`);const ee=C?o.createElement("div",Object.assign({},ae,{className:`${Z}-extra`,ref:E}),C):null,Pe=Q||ee?o.createElement("div",{className:`${Z}-additional`,style:W?{minHeight:W+y}:{}},Q,ee):null,be=$&&$.mark==="pro_table_render"&&$.render?$.render(e,{input:se,errorList:Q,extra:ee}):o.createElement(o.Fragment,null,se,Pe);return o.createElement(u.q3.Provider,{value:f},o.createElement(pt.Z,Object.assign({},B,{className:k}),be),o.createElement(Tt,{prefixCls:t}))},Zt=a(87462),Bt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"},Ht=Bt,zt=a(84089),Gt=function(t,n){return o.createElement(zt.Z,(0,Zt.Z)({},t,{ref:n,icon:Ht}))},Kt=o.forwardRef(Gt),Ut=Kt,Xt=a(10110),Qt=a(40378),Yt=a(83062),Jt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]]);return n};function qt(e){return e?typeof e=="object"&&!o.isValidElement(e)?e:{title:e}:null}var _t=e=>{let{prefixCls:t,label:n,htmlFor:r,labelCol:l,labelAlign:s,colon:c,required:M,requiredMark:$,tooltip:C,vertical:D}=e;var x;const[W]=(0,Xt.Z)("Form"),{labelAlign:le,labelCol:de,labelWrap:Z,colon:z}=o.useContext(u.q3);if(!n)return null;const B=l||de||{},k=s||le,f=`${t}-item-label`,E=_()(f,k==="left"&&`${f}-left`,B.className,{[`${f}-wrap`]:!!Z});let y=n;const F=c===!0||z!==!1&&c!==!1;F&&!D&&typeof n=="string"&&n.trim()&&(y=n.replace(/[:|：]\s*$/,""));const X=qt(C);if(X){const{icon:Pe=o.createElement(Ut,null)}=X,be=Jt(X,["icon"]),ge=o.createElement(Yt.Z,Object.assign({},be),o.cloneElement(Pe,{className:`${t}-item-tooltip`,title:"",onClick:te=>{te.preventDefault()},tabIndex:null}));y=o.createElement(o.Fragment,null,y,ge)}const Q=$==="optional",ae=typeof $=="function";ae?y=$(y,{required:!!M}):Q&&!M&&(y=o.createElement(o.Fragment,null,y,o.createElement("span",{className:`${t}-item-optional`,title:""},(W==null?void 0:W.optional)||((x=Qt.Z.Form)===null||x===void 0?void 0:x.optional))));const ee=_()({[`${t}-item-required`]:M,[`${t}-item-required-mark-optional`]:Q||ae,[`${t}-item-no-colon`]:!F});return o.createElement(pt.Z,Object.assign({},B,{className:E}),o.createElement("label",{htmlFor:r,className:ee,title:typeof n=="string"?n:""},y))},kt=a(89739),en=a(4340),tn=a(21640),nn=a(50888);const rn={success:kt.Z,warning:tn.Z,error:en.Z,validating:nn.Z};function ht(e){let{children:t,errors:n,warnings:r,hasFeedback:l,validateStatus:s,prefixCls:c,meta:M,noStyle:$}=e;const C=`${c}-item`,{feedbackIcons:D}=o.useContext(u.q3),x=A(n,r,M,null,!!l,s),{isFormItemInput:W,status:le,hasFeedback:de,feedbackIcon:Z}=o.useContext(u.aM),z=o.useMemo(()=>{var B;let k;if(l){const E=l!==!0&&l.icons||D,y=x&&((B=E==null?void 0:E({status:x,errors:n,warnings:r}))===null||B===void 0?void 0:B[x]),F=x&&rn[x];k=y!==!1&&F?o.createElement("span",{className:_()(`${C}-feedback-icon`,`${C}-feedback-icon-${x}`)},y||o.createElement(F,null)):null}const f={status:x||"",errors:n,warnings:r,hasFeedback:!!l,feedbackIcon:k,isFormItemInput:!0};return $&&(f.status=(x!=null?x:le)||"",f.isFormItemInput=W,f.hasFeedback=!!(l!=null?l:de),f.feedbackIcon=l!==void 0?f.feedbackIcon:Z),f},[x,l,$,W,le]);return o.createElement(u.aM.Provider,{value:z},t)}var on=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]]);return n};function ln(e){const{prefixCls:t,className:n,rootClassName:r,style:l,help:s,errors:c,warnings:M,validateStatus:$,meta:C,hasFeedback:D,hidden:x,children:W,fieldId:le,required:de,isRequired:Z,onSubItemMetaChange:z,layout:B}=e,k=on(e,["prefixCls","className","rootClassName","style","help","errors","warnings","validateStatus","meta","hasFeedback","hidden","children","fieldId","required","isRequired","onSubItemMetaChange","layout"]),f=`${t}-item`,{requiredMark:E,vertical:y}=o.useContext(u.q3),F=y||B==="vertical",se=o.useRef(null),X=G(c),Q=G(M),ae=s!=null,ee=!!(ae||c.length||M.length),Pe=!!se.current&&(0,Rt.Z)(se.current),[be,ge]=o.useState(null);(0,gt.Z)(()=>{if(ee&&se.current){const Y=getComputedStyle(se.current);ge(parseInt(Y.marginBottom,10))}},[ee,Pe]);const te=Y=>{Y||ge(null)},ie=function(){let Y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const Be=Y?X:C.errors,ve=Y?Q:C.warnings;return A(Be,ve,C,"",!!D,$)}(),Ze=_()(f,n,r,{[`${f}-with-help`]:ae||X.length||Q.length,[`${f}-has-feedback`]:ie&&D,[`${f}-has-success`]:ie==="success",[`${f}-has-warning`]:ie==="warning",[`${f}-has-error`]:ie==="error",[`${f}-is-validating`]:ie==="validating",[`${f}-hidden`]:x,[`${f}-${B}`]:B});return o.createElement("div",{className:Ze,style:l,ref:se},o.createElement(Lt.Z,Object.assign({className:`${f}-row`},(0,Nt.Z)(k,["_internalItemRender","colon","dependencies","extra","fieldKey","getValueFromEvent","getValueProps","htmlFor","id","initialValue","isListField","label","labelAlign","labelCol","labelWrap","messageVariables","name","normalize","noStyle","preserve","requiredMark","rules","shouldUpdate","trigger","tooltip","validateFirst","validateTrigger","valuePropName","wrapperCol","validateDebounce"])),o.createElement(_t,Object.assign({htmlFor:le},e,{requiredMark:E,required:de!=null?de:Z,prefixCls:t,vertical:F})),o.createElement(At,Object.assign({},e,C,{errors:X,warnings:Q,prefixCls:t,status:ie,help:s,marginBottom:be,onErrorVisibleChanged:te}),o.createElement(u.qI.Provider,{value:z},o.createElement(ht,{prefixCls:t,meta:C,errors:C.errors,warnings:C.warnings,hasFeedback:D,validateStatus:ie},W)))),!!be&&o.createElement("div",{className:`${f}-margin-offset`,style:{marginBottom:-be}}))}const sn="__SPLIT__",yn=null;function an(e,t){const n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&n.every(l=>{const s=e[l],c=t[l];return s===c||typeof s=="function"||typeof c=="function"})}const cn=o.memo(e=>{let{children:t}=e;return t},(e,t)=>an(e.control,t.control)&&e.update===t.update&&e.childProps.length===t.childProps.length&&e.childProps.every((n,r)=>n===t.childProps[r]));function bt(){return{errors:[],warnings:[],touched:!1,validating:!1,name:[],validated:!1}}function dn(e){const{name:t,noStyle:n,className:r,dependencies:l,prefixCls:s,shouldUpdate:c,rules:M,children:$,required:C,label:D,messageVariables:x,trigger:W="onChange",validateTrigger:le,hidden:de,help:Z,layout:z}=e,{getPrefixCls:B}=o.useContext(p.E_),{name:k}=o.useContext(u.q3),f=wt($),E=typeof f=="function",y=o.useContext(u.qI),{validateTrigger:F}=o.useContext(S.zb),se=le!==void 0?le:F,X=t!=null,Q=B("form",s),ae=(0,w.Z)(Q),[ee,Pe,be]=$e(Q,ae),ge=(0,St.ln)("Form.Item"),te=o.useContext(S.ZM),Te=o.useRef(),[ie,Ze]=Pt({}),[Y,Be]=(0,Ot.Z)(()=>bt()),ve=R=>{const J=te==null?void 0:te.getKey(R.name);if(Be(R.destroy?bt():R,!0),n&&Z!==!1&&y){let ue=R.name;if(R.destroy)ue=Te.current||ue;else if(J!==void 0){const[He,Ke]=J;ue=[He].concat((0,T.Z)(Ke)),Te.current=ue}y(R,ue)}},tt=(R,J)=>{Ze(ue=>{const He=Object.assign({},ue),Je=[].concat((0,T.Z)(R.name.slice(0,-1)),(0,T.Z)(J)).join(sn);return R.destroy?delete He[Je]:He[Je]=R,He})},[Ge,Qe]=o.useMemo(()=>{const R=(0,T.Z)(Y.errors),J=(0,T.Z)(Y.warnings);return Object.values(ie).forEach(ue=>{R.push.apply(R,(0,T.Z)(ue.errors||[])),J.push.apply(J,(0,T.Z)(ue.warnings||[]))}),[R,J]},[ie,Y.errors,Y.warnings]),nt=Ft();function rt(R,J,ue){return n&&!de?o.createElement(ht,{prefixCls:Q,hasFeedback:e.hasFeedback,validateStatus:e.validateStatus,meta:Y,errors:Ge,warnings:Qe,noStyle:!0},R):o.createElement(ln,Object.assign({key:"row"},e,{className:_()(r,be,ae,Pe),prefixCls:Q,fieldId:J,isRequired:ue,errors:Ge,warnings:Qe,meta:Y,onSubItemMetaChange:tt,layout:z}),R)}if(!X&&!E&&!l)return ee(rt(f));let ne={};return typeof D=="string"?ne.label=D:t&&(ne.label=String(t)),x&&(ne=Object.assign(Object.assign({},ne),x)),ee(o.createElement(S.gN,Object.assign({},e,{messageVariables:ne,trigger:W,validateTrigger:se,onMetaChange:ve}),(R,J,ue)=>{const He=oe(t).length&&J?J.name:[],Ke=Me(He,k),Je=C!==void 0?C:!!(M!=null&&M.some(q=>{if(q&&typeof q=="object"&&q.required&&!q.warningOnly)return!0;if(typeof q=="function"){const Ue=q(ue);return(Ue==null?void 0:Ue.required)&&!(Ue!=null&&Ue.warningOnly)}return!1})),ot=Object.assign({},R);let qe=null;if(Array.isArray(f)&&X)qe=f;else if(!(E&&(!(c||l)||X))){if(!(l&&!E&&!X))if(o.isValidElement(f)){const q=Object.assign(Object.assign({},f.props),ot);if(q.id||(q.id=Ke),Z||Ge.length>0||Qe.length>0||e.extra){const Xe=[];(Z||Ge.length>0)&&Xe.push(`${Ke}_help`),e.extra&&Xe.push(`${Ke}_extra`),q["aria-describedby"]=Xe.join(" ")}Ge.length>0&&(q["aria-invalid"]="true"),Je&&(q["aria-required"]="true"),(0,at.Yr)(f)&&(q.ref=nt(He,f)),new Set([].concat((0,T.Z)(oe(W)),(0,T.Z)(oe(se)))).forEach(Xe=>{q[Xe]=function(){for(var yt,$t,ct,Ct,dt,xt=arguments.length,ut=new Array(xt),lt=0;lt<xt;lt++)ut[lt]=arguments[lt];(ct=ot[Xe])===null||ct===void 0||(yt=ct).call.apply(yt,[ot].concat(ut)),(dt=(Ct=f.props)[Xe])===null||dt===void 0||($t=dt).call.apply($t,[Ct].concat(ut))}});const hn=[q["aria-required"],q["aria-invalid"],q["aria-describedby"]];qe=o.createElement(cn,{control:ot,update:f,childProps:hn},(0,It.Tm)(f,q))}else E&&(c||l)&&!X?qe=f(ue):qe=f}return rt(qe,Ke,Je)}))}const vt=dn;vt.useStatus=jt;var un=vt,fn=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]]);return n},mn=e=>{var{prefixCls:t,children:n}=e,r=fn(e,["prefixCls","children"]);const{getPrefixCls:l}=o.useContext(p.E_),s=l("form",t),c=o.useMemo(()=>({prefixCls:s,status:"error"}),[s]);return o.createElement(S.aV,Object.assign({},r),(M,$,C)=>o.createElement(u.Rk.Provider,{value:c},n(M.map(D=>Object.assign(Object.assign({},D),{fieldKey:D.key})),$,{errors:C.errors,warnings:C.warnings})))};function gn(){const{form:e}=(0,o.useContext)(u.q3);return e}const Ve=Et;Ve.Item=un,Ve.List=mn,Ve.ErrorList=Ne,Ve.useForm=je,Ve.useFormInstance=gn,Ve.useWatch=S.qo,Ve.Provider=u.RV,Ve.create=()=>{};var pn=Ve},99134:function(Ye,xe,a){var u=a(67294);const T=(0,u.createContext)({});xe.Z=T},21584:function(Ye,xe,a){var u=a(67294),T=a(93967),o=a.n(T),re=a(53124),_=a(99134),Fe=a(6999),g=function(b,L){var d={};for(var i in b)Object.prototype.hasOwnProperty.call(b,i)&&L.indexOf(i)<0&&(d[i]=b[i]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,i=Object.getOwnPropertySymbols(b);h<i.length;h++)L.indexOf(i[h])<0&&Object.prototype.propertyIsEnumerable.call(b,i[h])&&(d[i[h]]=b[i[h]]);return d};function w(b){return typeof b=="number"?`${b} ${b} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(b)?`0 0 ${b}`:b}const G=["xs","sm","md","lg","xl","xxl"],N=u.forwardRef((b,L)=>{const{getPrefixCls:d,direction:i}=u.useContext(re.E_),{gutter:h,wrap:m}=u.useContext(_.Z),{prefixCls:j,span:I,order:v,offset:fe,push:V,pull:ce,className:Ee,children:H,flex:pe,style:Oe}=b,ye=g(b,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),P=d("col",j),[Re,$e,Ce]=(0,Fe.cG)(P),K={};let U={};G.forEach(p=>{let O={};const he=b[p];typeof he=="number"?O.span=he:typeof he=="object"&&(O=he||{}),delete ye[p],U=Object.assign(Object.assign({},U),{[`${P}-${p}-${O.span}`]:O.span!==void 0,[`${P}-${p}-order-${O.order}`]:O.order||O.order===0,[`${P}-${p}-offset-${O.offset}`]:O.offset||O.offset===0,[`${P}-${p}-push-${O.push}`]:O.push||O.push===0,[`${P}-${p}-pull-${O.pull}`]:O.pull||O.pull===0,[`${P}-rtl`]:i==="rtl"}),O.flex&&(U[`${P}-${p}-flex`]=!0,K[`--${P}-${p}-flex`]=w(O.flex))});const Ne=o()(P,{[`${P}-${I}`]:I!==void 0,[`${P}-order-${v}`]:v,[`${P}-offset-${fe}`]:fe,[`${P}-push-${V}`]:V,[`${P}-pull-${ce}`]:ce},Ee,U,$e,Ce),S={};if(h&&h[0]>0){const p=h[0]/2;S.paddingLeft=p,S.paddingRight=p}return pe&&(S.flex=w(pe),m===!1&&!S.minWidth&&(S.minWidth=0)),Re(u.createElement("div",Object.assign({},ye,{style:Object.assign(Object.assign(Object.assign({},S),Oe),K),className:Ne,ref:L}),H))});xe.Z=N},92820:function(Ye,xe,a){var u=a(67294),T=a(93967),o=a.n(T),re=a(74443),_=a(53124),Fe=a(99134),g=a(6999),w=function(d,i){var h={};for(var m in d)Object.prototype.hasOwnProperty.call(d,m)&&i.indexOf(m)<0&&(h[m]=d[m]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var j=0,m=Object.getOwnPropertySymbols(d);j<m.length;j++)i.indexOf(m[j])<0&&Object.prototype.propertyIsEnumerable.call(d,m[j])&&(h[m[j]]=d[m[j]]);return h};const G=null,N=null;function b(d,i){const[h,m]=u.useState(typeof d=="string"?d:""),j=()=>{if(typeof d=="string"&&m(d),typeof d=="object")for(let I=0;I<re.c4.length;I++){const v=re.c4[I];if(!i[v])continue;const fe=d[v];if(fe!==void 0){m(fe);return}}};return u.useEffect(()=>{j()},[JSON.stringify(d),i]),h}const L=u.forwardRef((d,i)=>{const{prefixCls:h,justify:m,align:j,className:I,style:v,children:fe,gutter:V=0,wrap:ce}=d,Ee=w(d,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:H,direction:pe}=u.useContext(_.E_),[Oe,ye]=u.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[P,Re]=u.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),$e=b(j,P),Ce=b(m,P),K=u.useRef(V),U=(0,re.ZP)();u.useEffect(()=>{const oe=U.subscribe(Me=>{Re(Me);const A=K.current||0;(!Array.isArray(A)&&typeof A=="object"||Array.isArray(A)&&(typeof A[0]=="object"||typeof A[1]=="object"))&&ye(Me)});return()=>U.unsubscribe(oe)},[]);const Ne=()=>{const oe=[void 0,void 0];return(Array.isArray(V)?V:[V,void 0]).forEach((A,me)=>{if(typeof A=="object")for(let we=0;we<re.c4.length;we++){const je=re.c4[we];if(Oe[je]&&A[je]!==void 0){oe[me]=A[je];break}}else oe[me]=A}),oe},S=H("row",h),[p,O,he]=(0,g.VM)(S),Ie=Ne(),ze=o()(S,{[`${S}-no-wrap`]:ce===!1,[`${S}-${Ce}`]:Ce,[`${S}-${$e}`]:$e,[`${S}-rtl`]:pe==="rtl"},I,O,he),Se={},Le=Ie[0]!=null&&Ie[0]>0?Ie[0]/-2:void 0;Le&&(Se.marginLeft=Le,Se.marginRight=Le);const[We,De]=Ie;Se.rowGap=De;const Ae=u.useMemo(()=>({gutter:[We,De],wrap:ce}),[We,De,ce]);return p(u.createElement(Fe.Z.Provider,{value:Ae},u.createElement("div",Object.assign({},Ee,{className:ze,style:Object.assign(Object.assign({},Se),v),ref:i}),fe)))});xe.Z=L},6999:function(Ye,xe,a){a.d(xe,{VM:function(){return b},cG:function(){return L}});var u=a(11568),T=a(83559),o=a(83262);const re=d=>{const{componentCls:i}=d;return{[i]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},_=d=>{const{componentCls:i}=d;return{[i]:{position:"relative",maxWidth:"100%",minHeight:1}}},Fe=(d,i)=>{const{prefixCls:h,componentCls:m,gridColumns:j}=d,I={};for(let v=j;v>=0;v--)v===0?(I[`${m}${i}-${v}`]={display:"none"},I[`${m}-push-${v}`]={insetInlineStart:"auto"},I[`${m}-pull-${v}`]={insetInlineEnd:"auto"},I[`${m}${i}-push-${v}`]={insetInlineStart:"auto"},I[`${m}${i}-pull-${v}`]={insetInlineEnd:"auto"},I[`${m}${i}-offset-${v}`]={marginInlineStart:0},I[`${m}${i}-order-${v}`]={order:0}):(I[`${m}${i}-${v}`]=[{"--ant-display":"block",display:"block"},{display:"var(--ant-display)",flex:`0 0 ${v/j*100}%`,maxWidth:`${v/j*100}%`}],I[`${m}${i}-push-${v}`]={insetInlineStart:`${v/j*100}%`},I[`${m}${i}-pull-${v}`]={insetInlineEnd:`${v/j*100}%`},I[`${m}${i}-offset-${v}`]={marginInlineStart:`${v/j*100}%`},I[`${m}${i}-order-${v}`]={order:v});return I[`${m}${i}-flex`]={flex:`var(--${h}${i}-flex)`},I},g=(d,i)=>Fe(d,i),w=(d,i,h)=>({[`@media (min-width: ${(0,u.bf)(i)})`]:Object.assign({},g(d,h))}),G=()=>({}),N=()=>({}),b=(0,T.I$)("Grid",re,G),L=(0,T.I$)("Grid",d=>{const i=(0,o.IX)(d,{gridColumns:24}),h={"-sm":i.screenSMMin,"-md":i.screenMDMin,"-lg":i.screenLGMin,"-xl":i.screenXLMin,"-xxl":i.screenXXLMin};return[_(i),g(i,""),g(i,"-xs"),Object.keys(h).map(m=>w(i,h[m],m)).reduce((m,j)=>Object.assign(Object.assign({},m),j),{})]},N)},65706:function(Ye,xe,a){a.d(xe,{Q:function(){return Fe}});const u=g=>typeof g=="object"&&g!=null&&g.nodeType===1,T=(g,w)=>(!w||g!=="hidden")&&g!=="visible"&&g!=="clip",o=(g,w)=>{if(g.clientHeight<g.scrollHeight||g.clientWidth<g.scrollWidth){const G=getComputedStyle(g,null);return T(G.overflowY,w)||T(G.overflowX,w)||(N=>{const b=(L=>{if(!L.ownerDocument||!L.ownerDocument.defaultView)return null;try{return L.ownerDocument.defaultView.frameElement}catch(d){return null}})(N);return!!b&&(b.clientHeight<N.scrollHeight||b.clientWidth<N.scrollWidth)})(g)}return!1},re=(g,w,G,N,b,L,d,i)=>L<g&&d>w||L>g&&d<w?0:L<=g&&i<=G||d>=w&&i>=G?L-g-N:d>w&&i<G||L<g&&i>G?d-w+b:0,_=g=>{const w=g.parentElement;return w==null?g.getRootNode().host||null:w},Fe=(g,w)=>{var G,N,b,L;if(typeof document=="undefined")return[];const{scrollMode:d,block:i,inline:h,boundary:m,skipOverflowHiddenElements:j}=w,I=typeof m=="function"?m:S=>S!==m;if(!u(g))throw new TypeError("Invalid target");const v=document.scrollingElement||document.documentElement,fe=[];let V=g;for(;u(V)&&I(V);){if(V=_(V),V===v){fe.push(V);break}V!=null&&V===document.body&&o(V)&&!o(document.documentElement)||V!=null&&o(V,j)&&fe.push(V)}const ce=(N=(G=window.visualViewport)==null?void 0:G.width)!=null?N:innerWidth,Ee=(L=(b=window.visualViewport)==null?void 0:b.height)!=null?L:innerHeight,{scrollX:H,scrollY:pe}=window,{height:Oe,width:ye,top:P,right:Re,bottom:$e,left:Ce}=g.getBoundingClientRect();let K=i==="start"||i==="nearest"?P:i==="end"?$e:P+Oe/2,U=h==="center"?Ce+ye/2:h==="end"?Re:Ce;const Ne=[];for(let S=0;S<fe.length;S++){const p=fe[S],{height:O,width:he,top:Ie,right:ze,bottom:Se,left:Le}=p.getBoundingClientRect();if(d==="if-needed"&&P>=0&&Ce>=0&&$e<=Ee&&Re<=ce&&P>=Ie&&$e<=Se&&Ce>=Le&&Re<=ze)return Ne;const We=getComputedStyle(p),De=parseInt(We.borderLeftWidth,10),Ae=parseInt(We.borderTopWidth,10),oe=parseInt(We.borderRightWidth,10),Me=parseInt(We.borderBottomWidth,10);let A=0,me=0;const we="offsetWidth"in p?p.offsetWidth-p.clientWidth-De-oe:0,je="offsetHeight"in p?p.offsetHeight-p.clientHeight-Ae-Me:0,_e="offsetWidth"in p?p.offsetWidth===0?0:he/p.offsetWidth:0,ke="offsetHeight"in p?p.offsetHeight===0?0:O/p.offsetHeight:0;if(v===p)A=i==="start"?K:i==="end"?K-Ee:i==="nearest"?re(pe,pe+Ee,Ee,Ae,Me,pe+K,pe+K+Oe,Oe):K-Ee/2,me=h==="start"?U:h==="center"?U-ce/2:h==="end"?U-ce:re(H,H+ce,ce,De,oe,H+U,H+U+ye,ye),A=Math.max(0,A+pe),me=Math.max(0,me+H);else{A=i==="start"?K-Ie-Ae:i==="end"?K-Se+Me+je:i==="nearest"?re(Ie,Se,O,Ae,Me+je,K,K+Oe,Oe):K-(Ie+O/2)+je/2,me=h==="start"?U-Le-De:h==="center"?U-(Le+he/2)+we/2:h==="end"?U-ze+oe+we:re(Le,ze,he,De,oe+we,U,U+ye,ye);const{scrollLeft:et,scrollTop:st}=p;A=Math.max(0,Math.min(st+A/ke,p.scrollHeight-O/ke+je)),me=Math.max(0,Math.min(et+me/_e,p.scrollWidth-he/_e+we)),K+=st-A,U+=et-me}Ne.push({el:p,top:A,left:me})}return Ne}}}]);
