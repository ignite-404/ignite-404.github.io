(self.webpackChunk=self.webpackChunk||[]).push([[8780],{57132:function(me,w,a){"use strict";a.d(w,{Z:function(){return W}});var t=a(87462),z=a(67294),X={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"},Ee=X,ae=a(84089),M=function(V,_){return z.createElement(ae.Z,(0,t.Z)({},V,{ref:_,icon:Ee}))},j=z.forwardRef(M),W=j},15746:function(me,w,a){"use strict";var t=a(21584);w.Z=t.Z},71230:function(me,w,a){"use strict";var t=a(92820);w.Z=t.Z},66309:function(me,w,a){"use strict";a.d(w,{Z:function(){return at}});var t=a(67294),z=a(93967),X=a.n(z),Ee=a(98423),ae=a(98787),M=a(69760),j=a(96159),W=a(45353),ye=a(53124),V=a(11568),_=a(10274),J=a(14747),h=a(83262),ee=a(83559);const Oe=l=>{const{paddingXXS:m,lineWidth:E,tagPaddingHorizontal:c,componentCls:p,calc:F}=l,P=F(c).sub(E).equal(),ie=F(m).sub(E).equal();return{[p]:Object.assign(Object.assign({},(0,J.Wf)(l)),{display:"inline-block",height:"auto",marginInlineEnd:l.marginXS,paddingInline:P,fontSize:l.tagFontSize,lineHeight:l.tagLineHeight,whiteSpace:"nowrap",background:l.defaultBg,border:`${(0,V.bf)(l.lineWidth)} ${l.lineType} ${l.colorBorder}`,borderRadius:l.borderRadiusSM,opacity:1,transition:`all ${l.motionDurationMid}`,textAlign:"start",position:"relative",[`&${p}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:l.defaultColor},[`${p}-close-icon`]:{marginInlineStart:ie,fontSize:l.tagIconSize,color:l.colorTextDescription,cursor:"pointer",transition:`all ${l.motionDurationMid}`,"&:hover":{color:l.colorTextHeading}},[`&${p}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${l.iconCls}-close, ${l.iconCls}-close:hover`]:{color:l.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${p}-checkable-checked):hover`]:{color:l.colorPrimary,backgroundColor:l.colorFillSecondary},"&:active, &-checked":{color:l.colorTextLightSolid},"&-checked":{backgroundColor:l.colorPrimary,"&:hover":{backgroundColor:l.colorPrimaryHover}},"&:active":{backgroundColor:l.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${l.iconCls} + span, > span + ${l.iconCls}`]:{marginInlineStart:P}}),[`${p}-borderless`]:{borderColor:"transparent",background:l.tagBorderlessBg}}},L=l=>{const{lineWidth:m,fontSizeIcon:E,calc:c}=l,p=l.fontSizeSM;return(0,h.IX)(l,{tagFontSize:p,tagLineHeight:(0,V.bf)(c(l.lineHeightSM).mul(p).equal()),tagIconSize:c(E).sub(c(m).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:l.defaultBg})},te=l=>({defaultBg:new _.C(l.colorFillQuaternary).onBackground(l.colorBgContainer).toHexString(),defaultColor:l.colorText});var Re=(0,ee.I$)("Tag",l=>{const m=L(l);return Oe(m)},te),qe=function(l,m){var E={};for(var c in l)Object.prototype.hasOwnProperty.call(l,c)&&m.indexOf(c)<0&&(E[c]=l[c]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,c=Object.getOwnPropertySymbols(l);p<c.length;p++)m.indexOf(c[p])<0&&Object.prototype.propertyIsEnumerable.call(l,c[p])&&(E[c[p]]=l[c[p]]);return E},_e=t.forwardRef((l,m)=>{const{prefixCls:E,style:c,className:p,checked:F,onChange:P,onClick:ie}=l,ne=qe(l,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:Se,tag:Q}=t.useContext(ye.E_),Te=je=>{P==null||P(!F),ie==null||ie(je)},ce=Se("tag",E),[$e,Pe,G]=Re(ce),Le=X()(ce,`${ce}-checkable`,{[`${ce}-checkable-checked`]:F},Q==null?void 0:Q.className,p,Pe,G);return $e(t.createElement("span",Object.assign({},ne,{ref:m,style:Object.assign(Object.assign({},c),Q==null?void 0:Q.style),className:Le,onClick:Te})))}),et=a(98719);const tt=l=>(0,et.Z)(l,(m,E)=>{let{textColor:c,lightBorderColor:p,lightColor:F,darkColor:P}=E;return{[`${l.componentCls}${l.componentCls}-${m}`]:{color:c,background:F,borderColor:p,"&-inverse":{color:l.colorTextLightSolid,background:P,borderColor:P},[`&${l.componentCls}-borderless`]:{borderColor:"transparent"}}}});var nt=(0,ee.bk)(["Tag","preset"],l=>{const m=L(l);return tt(m)},te);function ot(l){return typeof l!="string"?l:l.charAt(0).toUpperCase()+l.slice(1)}const xe=(l,m,E)=>{const c=ot(E);return{[`${l.componentCls}${l.componentCls}-${m}`]:{color:l[`color${E}`],background:l[`color${c}Bg`],borderColor:l[`color${c}Border`],[`&${l.componentCls}-borderless`]:{borderColor:"transparent"}}}};var rt=(0,ee.bk)(["Tag","status"],l=>{const m=L(l);return[xe(m,"success","Success"),xe(m,"processing","Info"),xe(m,"error","Error"),xe(m,"warning","Warning")]},te),lt=function(l,m){var E={};for(var c in l)Object.prototype.hasOwnProperty.call(l,c)&&m.indexOf(c)<0&&(E[c]=l[c]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,c=Object.getOwnPropertySymbols(l);p<c.length;p++)m.indexOf(c[p])<0&&Object.prototype.propertyIsEnumerable.call(l,c[p])&&(E[c[p]]=l[c[p]]);return E};const Ae=t.forwardRef((l,m)=>{const{prefixCls:E,className:c,rootClassName:p,style:F,children:P,icon:ie,color:ne,onClose:Se,bordered:Q=!0,visible:Te}=l,ce=lt(l,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:$e,direction:Pe,tag:G}=t.useContext(ye.E_),[Le,je]=t.useState(!0),xt=(0,Ee.Z)(ce,["closeIcon","closable"]);t.useEffect(()=>{Te!==void 0&&je(Te)},[Te]);const We=(0,ae.o2)(ne),Ie=(0,ae.yT)(ne),Ue=We||Ie,it=Object.assign(Object.assign({backgroundColor:ne&&!Ue?ne:void 0},G==null?void 0:G.style),F),K=$e("tag",E),[ct,dt,St]=Re(K),ke=X()(K,G==null?void 0:G.className,{[`${K}-${ne}`]:Ue,[`${K}-has-color`]:ne&&!Ue,[`${K}-hidden`]:!Le,[`${K}-rtl`]:Pe==="rtl",[`${K}-borderless`]:!Q},c,p,dt,St),Ve=oe=>{oe.stopPropagation(),Se==null||Se(oe),!oe.defaultPrevented&&je(!1)},[,ut]=(0,M.Z)((0,M.w)(l),(0,M.w)(G),{closable:!1,closeIconRender:oe=>{const Ot=t.createElement("span",{className:`${K}-close-icon`,onClick:Ve},oe);return(0,j.wm)(oe,Ot,de=>({onClick:Ke=>{var ve;(ve=de==null?void 0:de.onClick)===null||ve===void 0||ve.call(de,Ke),Ve(Ke)},className:X()(de==null?void 0:de.className,`${K}-close-icon`)}))}}),pt=typeof ce.onClick=="function"||P&&P.type==="a",Ne=ie||null,Me=Ne?t.createElement(t.Fragment,null,Ne,P&&t.createElement("span",null,P)):P,Fe=t.createElement("span",Object.assign({},xt,{ref:m,className:ke,style:it}),Me,ut,We&&t.createElement(nt,{key:"preset",prefixCls:K}),Ie&&t.createElement(rt,{key:"status",prefixCls:K}));return ct(pt?t.createElement(W.Z,{component:"Tag"},Fe):Fe)});Ae.CheckableTag=_e;var at=Ae},9798:function(me,w,a){"use strict";a.d(w,{Z:function(){return Jt}});var t=a(67294),z=a(87462),X={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},Ee=X,ae=a(84089),M=function(o,r){return t.createElement(ae.Z,(0,z.Z)({},o,{ref:r,icon:Ee}))},j=t.forwardRef(M),W=j,ye=a(93967),V=a.n(ye),_=a(48555),J=a(50344),h=a(8410),ee=a(21770),Oe=a(98423),L=a(42550),te=a(79370),Re=a(53124),qe=a(10110),ze=a(83062),_e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},et=_e,tt=function(o,r){return t.createElement(ae.Z,(0,z.Z)({},o,{ref:r,icon:et}))},nt=t.forwardRef(tt),ot=nt,xe=a(15105),rt=a(96159),lt=a(22913),st=a(14747),Ae=a(83559),at=a(84898),l=a(11568);const m=(e,o,r,n)=>{const{titleMarginBottom:s,fontWeightStrong:d}=n;return{marginBottom:s,color:r,fontWeight:d,fontSize:e,lineHeight:o}},E=e=>{const o=[1,2,3,4,5],r={};return o.forEach(n=>{r[`
      h${n}&,
      div&-h${n},
      div&-h${n} > textarea,
      h${n}
    `]=m(e[`fontSizeHeading${n}`],e[`lineHeightHeading${n}`],e.colorTextHeading,e)}),r},c=e=>{const{componentCls:o}=e;return{"a&, a":Object.assign(Object.assign({},(0,st.Nd)(e)),{[`&[disabled], &${o}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed","&:active, &:hover":{color:e.colorTextDisabled},"&:active":{pointerEvents:"none"}}})}},p=e=>({code:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.2em 0.1em",fontSize:"85%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3},kbd:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.15em 0.1em",fontSize:"90%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.06)",border:"1px solid rgba(100, 100, 100, 0.2)",borderBottomWidth:2,borderRadius:3},mark:{padding:0,backgroundColor:at.gold[2]},"u, ins":{textDecoration:"underline",textDecorationSkipInk:"auto"},"s, del":{textDecoration:"line-through"},strong:{fontWeight:600},"ul, ol":{marginInline:0,marginBlock:"0 1em",padding:0,li:{marginInline:"20px 0",marginBlock:0,paddingInline:"4px 0",paddingBlock:0}},ul:{listStyleType:"circle",ul:{listStyleType:"disc"}},ol:{listStyleType:"decimal"},"pre, blockquote":{margin:"1em 0"},pre:{padding:"0.4em 0.6em",whiteSpace:"pre-wrap",wordWrap:"break-word",background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3,fontFamily:e.fontFamilyCode,code:{display:"inline",margin:0,padding:0,fontSize:"inherit",fontFamily:"inherit",background:"transparent",border:0}},blockquote:{paddingInline:"0.6em 0",paddingBlock:0,borderInlineStart:"4px solid rgba(100, 100, 100, 0.2)",opacity:.85}}),F=e=>{const{componentCls:o,paddingSM:r}=e,n=r;return{"&-edit-content":{position:"relative","div&":{insetInlineStart:e.calc(e.paddingSM).mul(-1).equal(),marginTop:e.calc(n).mul(-1).equal(),marginBottom:`calc(1em - ${(0,l.bf)(n)})`},[`${o}-edit-content-confirm`]:{position:"absolute",insetInlineEnd:e.calc(e.marginXS).add(2).equal(),insetBlockEnd:e.marginXS,color:e.colorTextDescription,fontWeight:"normal",fontSize:e.fontSize,fontStyle:"normal",pointerEvents:"none"},textarea:{margin:"0!important",MozTransition:"none",height:"1em"}}}},P=e=>({[`${e.componentCls}-copy-success`]:{"\n    &,\n    &:hover,\n    &:focus":{color:e.colorSuccess}},[`${e.componentCls}-copy-icon-only`]:{marginInlineStart:0}}),ie=()=>({"\n  a&-ellipsis,\n  span&-ellipsis\n  ":{display:"inline-block",maxWidth:"100%"},"&-ellipsis-single-line":{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis","a&, span&":{verticalAlign:"bottom"},"> code":{paddingBlock:0,maxWidth:"calc(100% - 1.2em)",display:"inline-block",overflow:"hidden",textOverflow:"ellipsis",verticalAlign:"bottom",boxSizing:"content-box"}},"&-ellipsis-multiple-line":{display:"-webkit-box",overflow:"hidden",WebkitLineClamp:3,WebkitBoxOrient:"vertical"}}),ne=e=>{const{componentCls:o,titleMarginTop:r}=e;return{[o]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.colorText,wordBreak:"break-word",lineHeight:e.lineHeight,[`&${o}-secondary`]:{color:e.colorTextDescription},[`&${o}-success`]:{color:e.colorSuccess},[`&${o}-warning`]:{color:e.colorWarning},[`&${o}-danger`]:{color:e.colorError,"a&:active, a&:focus":{color:e.colorErrorActive},"a&:hover":{color:e.colorErrorHover}},[`&${o}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed",userSelect:"none"},"\n        div&,\n        p\n      ":{marginBottom:"1em"}},E(e)),{[`
      & + h1${o},
      & + h2${o},
      & + h3${o},
      & + h4${o},
      & + h5${o}
      `]:{marginTop:r},"\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5":{"\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ":{marginTop:r}}}),p(e)),c(e)),{[`
        ${o}-expand,
        ${o}-collapse,
        ${o}-edit,
        ${o}-copy
      `]:Object.assign(Object.assign({},(0,st.Nd)(e)),{marginInlineStart:e.marginXXS})}),F(e)),P(e)),ie()),{"&-rtl":{direction:"rtl"}})}},Se=()=>({titleMarginTop:"1.2em",titleMarginBottom:"0.5em"});var Q=(0,Ae.I$)("Typography",e=>[ne(e)],Se),ce=e=>{const{prefixCls:o,"aria-label":r,className:n,style:s,direction:d,maxLength:C,autoSize:R=!0,value:f,onSave:g,onCancel:v,onEnd:b,component:y,enterIcon:x=t.createElement(ot,null)}=e,U=t.useRef(null),N=t.useRef(!1),B=t.useRef(),[S,Y]=t.useState(f);t.useEffect(()=>{Y(f)},[f]),t.useEffect(()=>{var O;if(!((O=U.current)===null||O===void 0)&&O.resizableTextArea){const{textArea:T}=U.current.resizableTextArea;T.focus();const{length:$}=T.value;T.setSelectionRange($,$)}},[]);const be=O=>{let{target:T}=O;Y(T.value.replace(/[\n\r]/g,""))},D=()=>{N.current=!0},H=()=>{N.current=!1},q=O=>{let{keyCode:T}=O;N.current||(B.current=T)},I=()=>{g(S.trim())},he=O=>{let{keyCode:T,ctrlKey:$,altKey:fe,metaKey:A,shiftKey:re}=O;B.current!==T||N.current||$||fe||A||re||(T===xe.Z.ENTER?(I(),b==null||b()):T===xe.Z.ESC&&v())},De=()=>{I()},[we,ue,He]=Q(o),pe=V()(o,`${o}-edit-content`,{[`${o}-rtl`]:d==="rtl",[`${o}-${y}`]:!!y},n,ue,He);return we(t.createElement("div",{className:pe,style:s},t.createElement(lt.Z,{ref:U,maxLength:C,value:S,onChange:be,onKeyDown:q,onKeyUp:he,onCompositionStart:D,onCompositionEnd:H,onBlur:De,"aria-label":r,rows:1,autoSize:R}),x!==null?(0,rt.Tm)(x,{className:`${o}-edit-content-confirm`}):null))},$e=a(20640),Pe=a.n($e),G=a(66680);function Le(e){return(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)&&e==null?[]:Array.isArray(e)?e:[e]}var je=function(e,o,r,n){function s(d){return d instanceof r?d:new r(function(C){C(d)})}return new(r||(r=Promise))(function(d,C){function R(v){try{g(n.next(v))}catch(b){C(b)}}function f(v){try{g(n.throw(v))}catch(b){C(b)}}function g(v){v.done?d(v.value):s(v.value).then(R,f)}g((n=n.apply(e,o||[])).next())})},We=e=>{let{copyConfig:o,children:r}=e;const[n,s]=t.useState(!1),[d,C]=t.useState(!1),R=t.useRef(null),f=()=>{R.current&&clearTimeout(R.current)},g={};o.format&&(g.format=o.format),t.useEffect(()=>f,[]);const v=(0,G.Z)(b=>je(void 0,void 0,void 0,function*(){var y;b==null||b.preventDefault(),b==null||b.stopPropagation(),C(!0);try{const x=typeof o.text=="function"?yield o.text():o.text;Pe()(x||Le(r,!0).join("")||"",g),C(!1),s(!0),f(),R.current=setTimeout(()=>{s(!1)},3e3),(y=o.onCopy)===null||y===void 0||y.call(o,b)}catch(x){throw C(!1),x}}));return{copied:n,copyLoading:d,onClick:v}};function Ie(e,o){return t.useMemo(()=>{const r=!!e;return[r,Object.assign(Object.assign({},o),r&&typeof e=="object"?e:null)]},[e])}var it=e=>{const o=(0,t.useRef)();return(0,t.useEffect)(()=>{o.current=e}),o.current},ct=(e,o,r)=>(0,t.useMemo)(()=>e===!0?{title:o!=null?o:r}:(0,t.isValidElement)(e)?{title:e}:typeof e=="object"?Object.assign({title:o!=null?o:r},e):{title:e},[e,o,r]),dt=function(e,o){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&o.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)o.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r},ke=t.forwardRef((e,o)=>{const{prefixCls:r,component:n="article",className:s,rootClassName:d,setContentRef:C,children:R,direction:f,style:g}=e,v=dt(e,["prefixCls","component","className","rootClassName","setContentRef","children","direction","style"]),{getPrefixCls:b,direction:y,typography:x}=t.useContext(Re.E_),U=f!=null?f:y,N=C?(0,L.sQ)(o,C):o,B=b("typography",r),[S,Y,be]=Q(B),D=V()(B,x==null?void 0:x.className,{[`${B}-rtl`]:U==="rtl"},s,d,Y,be),H=Object.assign(Object.assign({},x==null?void 0:x.style),g);return S(t.createElement(n,Object.assign({className:D,style:H,ref:N},v),R))}),Ve=a(63606),ut=a(57132),pt=a(50888);function Ne(e){return e===!1?[!1,!1]:Array.isArray(e)?e:[e]}function Me(e,o,r){return e===!0||e===void 0?o:e||r&&o}function Fe(e){const o=document.createElement("em");e.appendChild(o);const r=e.getBoundingClientRect(),n=o.getBoundingClientRect();return e.removeChild(o),r.left>n.left||n.right>r.right||r.top>n.top||n.bottom>r.bottom}const oe=e=>["string","number"].includes(typeof e);var de=e=>{let{prefixCls:o,copied:r,locale:n,iconOnly:s,tooltips:d,icon:C,tabIndex:R,onCopy:f,loading:g}=e;const v=Ne(d),b=Ne(C),{copied:y,copy:x}=n!=null?n:{},U=r?y:x,N=Me(v[r?1:0],U),B=typeof N=="string"?N:U;return t.createElement(ze.Z,{title:N},t.createElement("button",{type:"button",className:V()(`${o}-copy`,{[`${o}-copy-success`]:r,[`${o}-copy-icon-only`]:s}),onClick:f,"aria-label":B,tabIndex:R},r?Me(b[1],t.createElement(Ve.Z,null),!0):Me(b[0],g?t.createElement(pt.Z,null):t.createElement(ut.Z,null),!0)))},Ke=a(74902);const ve=t.forwardRef((e,o)=>{let{style:r,children:n}=e;const s=t.useRef(null);return t.useImperativeHandle(o,()=>({isExceed:()=>{const d=s.current;return d.scrollHeight>d.clientHeight},getHeight:()=>s.current.clientHeight})),t.createElement("span",{"aria-hidden":!0,ref:s,style:Object.assign({position:"fixed",display:"block",left:0,top:0,pointerEvents:"none",backgroundColor:"rgba(255, 0, 0, 0.65)"},r)},n)}),Nt=e=>e.reduce((o,r)=>o+(oe(r)?String(r).length:1),0);function Tt(e,o){let r=0;const n=[];for(let s=0;s<e.length;s+=1){if(r===o)return n;const d=e[s],R=oe(d)?String(d).length:1,f=r+R;if(f>o){const g=o-r;return n.push(String(d).slice(0,g)),n}n.push(d),r=f}return e}const ft=0,gt=1,mt=2,yt=3,jt=4,Xe={display:"-webkit-box",overflow:"hidden",WebkitBoxOrient:"vertical"};function Mt(e){const{enableMeasure:o,width:r,text:n,children:s,rows:d,expanded:C,miscDeps:R,onEllipsis:f}=e,g=t.useMemo(()=>(0,J.Z)(n),[n]),v=t.useMemo(()=>Nt(g),[n]),b=t.useMemo(()=>s(g,!1),[n]),[y,x]=t.useState(null),U=t.useRef(null),N=t.useRef(null),B=t.useRef(null),S=t.useRef(null),Y=t.useRef(null),[be,D]=t.useState(!1),[H,q]=t.useState(ft),[I,he]=t.useState(0),[De,we]=t.useState(null);(0,h.Z)(()=>{q(o&&r&&v?gt:ft)},[r,n,d,o,g]),(0,h.Z)(()=>{var O,T,$,fe;if(H===gt){q(mt);const A=N.current&&getComputedStyle(N.current).whiteSpace;we(A)}else if(H===mt){const A=!!(!((O=B.current)===null||O===void 0)&&O.isExceed());q(A?yt:jt),x(A?[0,v]:null),D(A);const re=((T=B.current)===null||T===void 0?void 0:T.getHeight())||0,vt=d===1?0:(($=S.current)===null||$===void 0?void 0:$.getHeight())||0,Qe=((fe=Y.current)===null||fe===void 0?void 0:fe.getHeight())||0,bt=Math.max(re,vt+Qe);he(bt+1),f(A)}},[H]);const ue=y?Math.ceil((y[0]+y[1])/2):0;(0,h.Z)(()=>{var O;const[T,$]=y||[0,0];if(T!==$){const A=(((O=U.current)===null||O===void 0?void 0:O.getHeight())||0)>I;let re=ue;$-T===1&&(re=A?T:$),x(A?[T,re]:[re,$])}},[y,ue]);const He=t.useMemo(()=>{if(!o)return s(g,!1);if(H!==yt||!y||y[0]!==y[1]){const O=s(g,!1);return[jt,ft].includes(H)?O:t.createElement("span",{style:Object.assign(Object.assign({},Xe),{WebkitLineClamp:d})},O)}return s(C?g:Tt(g,y[0]),be)},[C,H,y,g].concat((0,Ke.Z)(R))),pe={width:r,margin:0,padding:0,whiteSpace:De==="nowrap"?"normal":"inherit"};return t.createElement(t.Fragment,null,He,H===mt&&t.createElement(t.Fragment,null,t.createElement(ve,{style:Object.assign(Object.assign(Object.assign({},pe),Xe),{WebkitLineClamp:d}),ref:B},b),t.createElement(ve,{style:Object.assign(Object.assign(Object.assign({},pe),Xe),{WebkitLineClamp:d-1}),ref:S},b),t.createElement(ve,{style:Object.assign(Object.assign(Object.assign({},pe),Xe),{WebkitLineClamp:1}),ref:Y},s([],!0))),H===yt&&y&&y[0]!==y[1]&&t.createElement(ve,{style:Object.assign(Object.assign({},pe),{top:400}),ref:U},s(Tt(g,ue),!0)),H===gt&&t.createElement("span",{style:{whiteSpace:"inherit"},ref:N}))}var Bt=e=>{let{enableEllipsis:o,isEllipsis:r,children:n,tooltipProps:s}=e;return!(s!=null&&s.title)||!o?n:t.createElement(ze.Z,Object.assign({open:r?void 0:!1},s),n)},Dt=function(e,o){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&o.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)o.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};function Ht(e,o){let{mark:r,code:n,underline:s,delete:d,strong:C,keyboard:R,italic:f}=e,g=o;function v(b,y){y&&(g=t.createElement(b,{},g))}return v("strong",C),v("u",s),v("del",d),v("code",n),v("mark",r),v("kbd",R),v("i",f),g}const Zt="...";var Je=t.forwardRef((e,o)=>{var r;const{prefixCls:n,className:s,style:d,type:C,disabled:R,children:f,ellipsis:g,editable:v,copyable:b,component:y,title:x}=e,U=Dt(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),{getPrefixCls:N,direction:B}=t.useContext(Re.E_),[S]=(0,qe.Z)("Text"),Y=t.useRef(null),be=t.useRef(null),D=N("typography",n),H=(0,Oe.Z)(U,["mark","code","delete","underline","strong","keyboard","italic"]),[q,I]=Ie(v),[he,De]=(0,ee.Z)(!1,{value:I.editing}),{triggerType:we=["icon"]}=I,ue=i=>{var u;i&&((u=I.onStart)===null||u===void 0||u.call(I)),De(i)},He=it(he);(0,h.Z)(()=>{var i;!he&&He&&((i=be.current)===null||i===void 0||i.focus())},[he]);const pe=i=>{i==null||i.preventDefault(),ue(!0)},O=i=>{var u;(u=I.onChange)===null||u===void 0||u.call(I,i),ue(!1)},T=()=>{var i;(i=I.onCancel)===null||i===void 0||i.call(I),ue(!1)},[$,fe]=Ie(b),{copied:A,copyLoading:re,onClick:vt}=We({copyConfig:fe,children:f}),[Qe,bt]=t.useState(!1),[It,Qt]=t.useState(!1),[wt,Gt]=t.useState(!1),[Rt,Yt]=t.useState(!1),[qt,_t]=t.useState(!0),[Ce,Z]=Ie(g,{expandable:!1,symbol:i=>i?S==null?void 0:S.collapse:S==null?void 0:S.expand}),[ge,en]=(0,ee.Z)(Z.defaultExpanded||!1,{value:Z.expanded}),k=Ce&&(!ge||Z.expandable==="collapsible"),{rows:Ze=1}=Z,Ge=t.useMemo(()=>k&&(Z.suffix!==void 0||Z.onEllipsis||Z.expandable||q||$),[k,Z,q,$]);(0,h.Z)(()=>{Ce&&!Ge&&(bt((0,te.G)("webkitLineClamp")),Qt((0,te.G)("textOverflow")))},[Ge,Ce]);const[le,tn]=t.useState(k),$t=t.useMemo(()=>Ge?!1:Ze===1?It:Qe,[Ge,It,Qe]);(0,h.Z)(()=>{tn($t&&k)},[$t,k]);const Pt=k&&(le?Rt:wt),nn=k&&Ze===1&&le,ht=k&&Ze>1&&le,on=(i,u)=>{var se;en(u.expanded),(se=Z.onExpand)===null||se===void 0||se.call(Z,i,u)},[Lt,rn]=t.useState(0),ln=i=>{let{offsetWidth:u}=i;rn(u)},sn=i=>{var u;Gt(i),wt!==i&&((u=Z.onEllipsis)===null||u===void 0||u.call(Z,i))};t.useEffect(()=>{const i=Y.current;if(Ce&&le&&i){const u=Fe(i);Rt!==u&&Yt(u)}},[Ce,le,f,ht,qt,Lt]),t.useEffect(()=>{const i=Y.current;if(typeof IntersectionObserver=="undefined"||!i||!le||!k)return;const u=new IntersectionObserver(()=>{_t(!!i.offsetParent)});return u.observe(i),()=>{u.disconnect()}},[le,k]);const Ct=ct(Z.tooltip,I.text,f),Ye=t.useMemo(()=>{if(!(!Ce||le))return[I.text,f,x,Ct.title].find(oe)},[Ce,le,x,Ct.title,Pt]);if(he)return t.createElement(ce,{value:(r=I.text)!==null&&r!==void 0?r:typeof f=="string"?f:"",onSave:O,onCancel:T,onEnd:I.onEnd,prefixCls:D,className:s,style:d,direction:B,component:y,maxLength:I.maxLength,autoSize:I.autoSize,enterIcon:I.enterIcon});const an=()=>{const{expandable:i,symbol:u}=Z;return i?t.createElement("button",{type:"button",key:"expand",className:`${D}-${ge?"collapse":"expand"}`,onClick:se=>on(se,{expanded:!ge}),"aria-label":ge?S.collapse:S==null?void 0:S.expand},typeof u=="function"?u(ge):u):null},cn=()=>{if(!q)return;const{icon:i,tooltip:u,tabIndex:se}=I,Et=(0,J.Z)(u)[0]||(S==null?void 0:S.edit),fn=typeof Et=="string"?Et:"";return we.includes("icon")?t.createElement(ze.Z,{key:"edit",title:u===!1?"":Et},t.createElement("button",{type:"button",ref:be,className:`${D}-edit`,onClick:pe,"aria-label":fn,tabIndex:se},i||t.createElement(W,{role:"button"}))):null},dn=()=>$?t.createElement(de,Object.assign({key:"copy"},fe,{prefixCls:D,copied:A,locale:S,onCopy:vt,loading:re,iconOnly:f==null})):null,un=i=>[i&&an(),cn(),dn()],pn=i=>[i&&!ge&&t.createElement("span",{"aria-hidden":!0,key:"ellipsis"},Zt),Z.suffix,un(i)];return t.createElement(_.Z,{onResize:ln,disabled:!k},i=>t.createElement(Bt,{tooltipProps:Ct,enableEllipsis:k,isEllipsis:Pt},t.createElement(ke,Object.assign({className:V()({[`${D}-${C}`]:C,[`${D}-disabled`]:R,[`${D}-ellipsis`]:Ce,[`${D}-ellipsis-single-line`]:nn,[`${D}-ellipsis-multiple-line`]:ht},s),prefixCls:n,style:Object.assign(Object.assign({},d),{WebkitLineClamp:ht?Ze:void 0}),component:y,ref:(0,L.sQ)(i,Y,o),direction:B,onClick:we.includes("text")?pe:void 0,"aria-label":Ye==null?void 0:Ye.toString(),title:x},H),t.createElement(Mt,{enableMeasure:k&&!le,text:f,rows:Ze,width:Lt,onEllipsis:sn,expanded:ge,miscDeps:[A,ge,re,q,$]},(u,se)=>Ht(e,t.createElement(t.Fragment,null,u.length>0&&se&&!ge&&Ye?t.createElement("span",{key:"show-content","aria-hidden":!0},u):u,pn(se)))))))}),zt=function(e,o){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&o.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)o.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r},At=t.forwardRef((e,o)=>{var{ellipsis:r,rel:n}=e,s=zt(e,["ellipsis","rel"]);const d=Object.assign(Object.assign({},s),{rel:n===void 0&&s.target==="_blank"?"noopener noreferrer":n});return delete d.navigate,t.createElement(Je,Object.assign({},d,{ref:o,ellipsis:!!r,component:"a"}))}),Wt=t.forwardRef((e,o)=>t.createElement(Je,Object.assign({ref:o},e,{component:"div"}))),Ut=function(e,o){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&o.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)o.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const kt=(e,o)=>{var{ellipsis:r}=e,n=Ut(e,["ellipsis"]);const s=t.useMemo(()=>r&&typeof r=="object"?(0,Oe.Z)(r,["expandable","rows"]):r,[r]);return t.createElement(Je,Object.assign({ref:o},n,{ellipsis:s,component:"span"}))};var Vt=t.forwardRef(kt),Ft=function(e,o){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&o.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)o.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Kt=[1,2,3,4,5];var Xt=t.forwardRef((e,o)=>{const{level:r=1}=e,n=Ft(e,["level"]),s=Kt.includes(r)?`h${r}`:"h1";return t.createElement(Je,Object.assign({ref:o},n,{component:s}))});const Be=ke;Be.Text=Vt,Be.Link=At,Be.Title=Xt,Be.Paragraph=Wt;var Jt=Be},20640:function(me,w,a){"use strict";var t=a(11742),z={"text/plain":"Text","text/html":"Url",default:"Text"},X="Copy to clipboard: #{key}, Enter";function Ee(M){var j=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return M.replace(/#{\s*key\s*}/g,j)}function ae(M,j){var W,ye,V,_,J,h,ee=!1;j||(j={}),W=j.debug||!1;try{V=t(),_=document.createRange(),J=document.getSelection(),h=document.createElement("span"),h.textContent=M,h.ariaHidden="true",h.style.all="unset",h.style.position="fixed",h.style.top=0,h.style.clip="rect(0, 0, 0, 0)",h.style.whiteSpace="pre",h.style.webkitUserSelect="text",h.style.MozUserSelect="text",h.style.msUserSelect="text",h.style.userSelect="text",h.addEventListener("copy",function(L){if(L.stopPropagation(),j.format)if(L.preventDefault(),typeof L.clipboardData=="undefined"){W&&console.warn("unable to use e.clipboardData"),W&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var te=z[j.format]||z.default;window.clipboardData.setData(te,M)}else L.clipboardData.clearData(),L.clipboardData.setData(j.format,M);j.onCopy&&(L.preventDefault(),j.onCopy(L.clipboardData))}),document.body.appendChild(h),_.selectNodeContents(h),J.addRange(_);var Oe=document.execCommand("copy");if(!Oe)throw new Error("copy command was unsuccessful");ee=!0}catch(L){W&&console.error("unable to copy using execCommand: ",L),W&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(j.format||"text",M),j.onCopy&&j.onCopy(window.clipboardData),ee=!0}catch(te){W&&console.error("unable to copy using clipboardData: ",te),W&&console.error("falling back to prompt"),ye=Ee("message"in j?j.message:X),window.prompt(ye,M)}}finally{J&&(typeof J.removeRange=="function"?J.removeRange(_):J.removeAllRanges()),h&&document.body.removeChild(h),V()}return ee}me.exports=ae},11742:function(me){me.exports=function(){var w=document.getSelection();if(!w.rangeCount)return function(){};for(var a=document.activeElement,t=[],z=0;z<w.rangeCount;z++)t.push(w.getRangeAt(z));switch(a.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":a.blur();break;default:a=null;break}return w.removeAllRanges(),function(){w.type==="Caret"&&w.removeAllRanges(),w.rangeCount||t.forEach(function(X){w.addRange(X)}),a&&a.focus()}}}}]);
