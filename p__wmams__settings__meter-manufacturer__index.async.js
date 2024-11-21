!(function(){"use strict";var $e=Object.defineProperty,Se=Object.defineProperties;var Me=Object.getOwnPropertyDescriptors;var ie=Object.getOwnPropertySymbols;var ve=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable;var pe=(u,i,t)=>i in u?$e(u,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):u[i]=t,ce=(u,i)=>{for(var t in i||(i={}))ve.call(i,t)&&pe(u,t,i[t]);if(ie)for(var t of ie(i))ge.call(i,t)&&pe(u,t,i[t]);return u},xe=(u,i)=>Se(u,Me(i));var ye=(u,i)=>{var t={};for(var l in u)ve.call(u,l)&&i.indexOf(l)<0&&(t[l]=u[l]);if(u!=null&&ie)for(var l of ie(u))i.indexOf(l)<0&&ge.call(u,l)&&(t[l]=u[l]);return t};(self.webpackChunk=self.webpackChunk||[]).push([[4342],{3083:function(u,i,t){var l=t(50545),g=t(70278),C=t(78298),E=t(97975),w=t(78957),b=t(83062),m=t(85893);i.Z=function(y){var r=y.title,B=y.subtitle,Z=y.extra,I=y.hide_add,A=y.hide_save,D=y.hide_refresh,L=y.hide_delete,T=function(){return Z?null:(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(w.Z,{direction:"horizontal",children:[A||(0,m.jsx)(b.Z,{title:"save",children:(0,m.jsx)(l.Z,{stroke:1})}),L||(0,m.jsx)(b.Z,{title:"delete",children:(0,m.jsx)(g.Z,{stroke:1})}),D||(0,m.jsx)(b.Z,{title:"refresh",children:(0,m.jsx)(C.Z,{stroke:1})}),I||(0,m.jsx)(b.Z,{title:"add",children:(0,m.jsx)(E.Z,{stroke:1})})]})})};return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("div",{className:"mb-3 rounded-lg border-1 border-slate-800 bg-blue-900 p-2 text-white",children:(0,m.jsxs)("div",{className:"flex-row-between",children:[(0,m.jsxs)("div",{className:"flex w-full flex-row items-end gap-2",children:[(0,m.jsx)("h1",{className:"text-large font-bold",children:r}),(0,m.jsx)("div",{className:"text-large text-yellow-500",children:B})]}),(0,m.jsxs)("div",{className:"",children:[Z||null,T()]})]})})})}},84733:function(u,i,t){t.r(i),t.d(i,{default:function(){return G}});var l=t(5574),g=t.n(l),C=t(78957),E=t(4393),w=t(26412),b=t(65233),m=t(84567),y=t(14726),r=t(85893),B=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(E.Z,{title:"Search",children:(0,r.jsx)(w.Z,{column:2,bordered:!0,items:[{label:"Manufacturer Code",children:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"flex-row-left gap-2",children:(0,r.jsx)(b.Z,{value:"6541316817646",disabled:!0})})})},{label:"Obsolete",children:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(m.Z,{checked:!0})})},{label:"Description",children:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(b.Z,{})})},{label:"Description(Chinese)",children:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(b.Z,{})})},{label:"",children:(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(C.Z,{direction:"horizontal",children:[(0,r.jsx)(y.ZP,{type:"primary",children:"Search"}),(0,r.jsx)(y.ZP,{type:"link",children:"Reset"})]})})}]})})})},Z=t(67294),I=t(3083),A=t(15741),D=t(97975),L=t(83062),T=t(80799),H=t(85576),z=function(d){var f=d.open,N=d.close,p=d.ok;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(H.Z,{width:"80%",open:f,onCancel:function(){N()},title:"Edit Field Worker Group",onOk:function(){},children:(0,r.jsx)(C.Z,{direction:"vertical",style:{width:"100%"},children:(0,r.jsx)(w.Z,{column:2,bordered:!0,items:[{label:"Manufacturer Code",children:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"flex-row-left gap-2",children:(0,r.jsx)(b.Z,{value:"6541316817646",disabled:!0})})})},{label:"Obsolete",children:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(m.Z,{checked:!0})})},{label:"Description",children:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(b.Z,{})})},{label:"Description(Chinese)",children:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(b.Z,{})})}]})})})})},j=function(){var d=(0,Z.useState)(!1),f=g()(d,2),N=f[0],p=f[1],v=[{title:"Model",render:function(U,x){return(0,r.jsx)("a",{className:"text-blue-600",children:"#123"})}},{title:"Description",render:function(U,x){return(0,r.jsx)("div",{className:"text-overline",children:"--"})}},{title:"Description(Chinese)",render:function(U,x){return"--"}},{title:"Obsolete",render:function(U,x){return"Yes"}},{title:"Actions",render:function(U,x){return(0,r.jsx)("div",{children:(0,r.jsx)(L.Z,{title:"edit",children:(0,r.jsx)(y.ZP,{size:"small",icon:(0,r.jsx)(A.Z,{stroke:1}),type:"dashed",onClick:function(){p(!0)}})})})}}];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(z,{open:N,ok:function(){return p(!1)},close:function(){return p(!1)}}),(0,r.jsx)(E.Z,{title:"Model",extra:(0,r.jsx)(y.ZP,{size:"small",icon:(0,r.jsx)(D.Z,{stroke:1}),onClick:function(){return p(!0)}}),children:(0,r.jsx)(T.Z,{columns:v,dataSource:[{id:"",type:""},{id:"",type:""},{id:"",type:""}]})})]})},G=function(){var d=(0,Z.useState)(!1),f=g()(d,2),N=f[0],p=f[1];return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(C.Z,{direction:"vertical",style:{width:"100%"},children:[(0,r.jsx)(I.Z,{title:"Meter Manufacturer Maintenance"}),(0,r.jsx)(B,{}),(0,r.jsx)(j,{})]})})}},26412:function(u,i,t){t.d(i,{Z:function(){return J}});var l=t(67294),g=t(93967),C=t.n(g),E=t(74443),w=t(53124),b=t(98675),m=t(25378),r={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1},Z=l.createContext({}),I=t(50344),A=function(e,n){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&n.indexOf(s)<0&&(a[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(e);o<s.length;o++)n.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(a[s[o]]=e[s[o]]);return a};const D=e=>(0,I.Z)(e).map(n=>Object.assign(Object.assign({},n==null?void 0:n.props),{key:n.key}));function L(e,n,a){const s=l.useMemo(()=>n||D(a),[n,a]);return l.useMemo(()=>s.map(h=>{var{span:c}=h,O=A(h,["span"]);return c==="filled"?Object.assign(Object.assign({},O),{filled:!0}):Object.assign(Object.assign({},O),{span:typeof c=="number"?c:(0,E.m9)(e,c)})}),[s,e])}var T=function(e,n){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&n.indexOf(s)<0&&(a[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(e);o<s.length;o++)n.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(a[s[o]]=e[s[o]]);return a};function H(e,n){let a=[],s=[],o=!1,h=0;return e.filter(c=>c).forEach(c=>{const{filled:O}=c,P=T(c,["filled"]);if(O){s.push(P),a.push(s),s=[],h=0;return}const S=n-h;h+=c.span||1,h>=n?(h>n?(o=!0,s.push(Object.assign(Object.assign({},P),{span:S}))):s.push(P),a.push(s),s=[],h=0):s.push(P)}),s.length>0&&a.push(s),a=a.map(c=>{const O=c.reduce((P,S)=>P+(S.span||1),0);if(O<n){const P=c[c.length-1];return P.span=n-O+1,c}return c}),[a,o]}var j=(e,n)=>{const[a,s]=(0,l.useMemo)(()=>H(n,e),[n,e]);return a},d=e=>{let{children:n}=e;return n};function f(e){return e!=null}var p=e=>{const{itemPrefixCls:n,component:a,span:s,className:o,style:h,labelStyle:c,contentStyle:O,bordered:P,label:S,content:R,colon:V,type:X}=e,F=a;return P?l.createElement(F,{className:C()({[`${n}-item-label`]:X==="label",[`${n}-item-content`]:X==="content"},o),style:h,colSpan:s},f(S)&&l.createElement("span",{style:c},S),f(R)&&l.createElement("span",{style:O},R)):l.createElement(F,{className:C()(`${n}-item`,o),style:h,colSpan:s},l.createElement("div",{className:`${n}-item-container`},(S||S===0)&&l.createElement("span",{className:C()(`${n}-item-label`,{[`${n}-item-no-colon`]:!V}),style:c},S),(R||R===0)&&l.createElement("span",{className:C()(`${n}-item-content`),style:O},R)))};function v(e,n,a){let{colon:s,prefixCls:o,bordered:h}=n,{component:c,type:O,showLabel:P,showContent:S,labelStyle:R,contentStyle:V}=a;return e.map((X,F)=>{let{label:k,children:ae,prefixCls:q=o,className:_,style:ee,labelStyle:W,contentStyle:M,span:Y=1,key:te}=X;return typeof c=="string"?l.createElement(p,{key:`${O}-${te||F}`,className:_,style:ee,labelStyle:Object.assign(Object.assign({},R),W),contentStyle:Object.assign(Object.assign({},V),M),span:Y,colon:s,component:c,itemPrefixCls:q,bordered:h,label:P?k:null,content:S?ae:null,type:O}):[l.createElement(p,{key:`label-${te||F}`,className:_,style:Object.assign(Object.assign(Object.assign({},R),ee),W),span:1,colon:s,component:c[0],itemPrefixCls:q,bordered:h,label:k,type:"label"}),l.createElement(p,{key:`content-${te||F}`,className:_,style:Object.assign(Object.assign(Object.assign({},V),ee),M),span:Y*2-1,component:c[1],itemPrefixCls:q,bordered:h,content:ae,type:"content"})]})}var U=e=>{const n=l.useContext(Z),{prefixCls:a,vertical:s,row:o,index:h,bordered:c}=e;return s?l.createElement(l.Fragment,null,l.createElement("tr",{key:`label-${h}`,className:`${a}-row`},v(o,e,Object.assign({component:"th",type:"label",showLabel:!0},n))),l.createElement("tr",{key:`content-${h}`,className:`${a}-row`},v(o,e,Object.assign({component:"td",type:"content",showContent:!0},n)))):l.createElement("tr",{key:h,className:`${a}-row`},v(o,e,Object.assign({component:c?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},n)))},x=t(11568),Q=t(14747),de=t(83559),le=t(83262);const re=e=>{const{componentCls:n,labelBg:a}=e;return{[`&${n}-bordered`]:{[`> ${n}-view`]:{border:`${(0,x.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"> table":{tableLayout:"auto"},[`${n}-row`]:{borderBottom:`${(0,x.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBottom:"none"},[`> ${n}-item-label, > ${n}-item-content`]:{padding:`${(0,x.bf)(e.padding)} ${(0,x.bf)(e.paddingLG)}`,borderInlineEnd:`${(0,x.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderInlineEnd:"none"}},[`> ${n}-item-label`]:{color:e.colorTextSecondary,backgroundColor:a,"&::after":{display:"none"}}}},[`&${n}-middle`]:{[`${n}-row`]:{[`> ${n}-item-label, > ${n}-item-content`]:{padding:`${(0,x.bf)(e.paddingSM)} ${(0,x.bf)(e.paddingLG)}`}}},[`&${n}-small`]:{[`${n}-row`]:{[`> ${n}-item-label, > ${n}-item-content`]:{padding:`${(0,x.bf)(e.paddingXS)} ${(0,x.bf)(e.padding)}`}}}}}},K=e=>{const{componentCls:n,extraColor:a,itemPaddingBottom:s,itemPaddingEnd:o,colonMarginRight:h,colonMarginLeft:c,titleMarginBottom:O}=e;return{[n]:Object.assign(Object.assign(Object.assign({},(0,Q.Wf)(e)),re(e)),{"&-rtl":{direction:"rtl"},[`${n}-header`]:{display:"flex",alignItems:"center",marginBottom:O},[`${n}-title`]:Object.assign(Object.assign({},Q.vS),{flex:"auto",color:e.titleColor,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}),[`${n}-extra`]:{marginInlineStart:"auto",color:a,fontSize:e.fontSize},[`${n}-view`]:{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed",borderCollapse:"collapse"}},[`${n}-row`]:{"> th, > td":{paddingBottom:s,paddingInlineEnd:o},"> th:last-child, > td:last-child":{paddingInlineEnd:0},"&:last-child":{borderBottom:"none","> th, > td":{paddingBottom:0}}},[`${n}-item-label`]:{color:e.colorTextTertiary,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:`${(0,x.bf)(c)} ${(0,x.bf)(h)}`},[`&${n}-item-no-colon::after`]:{content:'""'}},[`${n}-item-no-label`]:{"&::after":{margin:0,content:'""'}},[`${n}-item-content`]:{display:"table-cell",flex:1,color:e.contentColor,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"},[`${n}-item`]:{paddingBottom:0,verticalAlign:"top","&-container":{display:"flex",[`${n}-item-label`]:{display:"inline-flex",alignItems:"baseline"},[`${n}-item-content`]:{display:"inline-flex",alignItems:"baseline",minWidth:"1em"}}},"&-middle":{[`${n}-row`]:{"> th, > td":{paddingBottom:e.paddingSM}}},"&-small":{[`${n}-row`]:{"> th, > td":{paddingBottom:e.paddingXS}}}})}},se=e=>({labelBg:e.colorFillAlter,titleColor:e.colorText,titleMarginBottom:e.fontSizeSM*e.lineHeightSM,itemPaddingBottom:e.padding,itemPaddingEnd:e.padding,colonMarginRight:e.marginXS,colonMarginLeft:e.marginXXS/2,contentColor:e.colorText,extraColor:e.colorText});var me=(0,de.I$)("Descriptions",e=>{const n=(0,le.IX)(e,{});return K(n)},se),ue=function(e,n){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&n.indexOf(s)<0&&(a[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(e);o<s.length;o++)n.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(a[s[o]]=e[s[o]]);return a};const oe=e=>{const{prefixCls:n,title:a,extra:s,column:o,colon:h=!0,bordered:c,layout:O,children:P,className:S,rootClassName:R,style:V,size:X,labelStyle:F,contentStyle:k,items:ae}=e,q=ue(e,["prefixCls","title","extra","column","colon","bordered","layout","children","className","rootClassName","style","size","labelStyle","contentStyle","items"]),{getPrefixCls:_,direction:ee,descriptions:W}=l.useContext(w.E_),M=_("descriptions",n),Y=(0,m.Z)(),te=l.useMemo(()=>{var ne;return typeof o=="number"?o:(ne=(0,E.m9)(Y,Object.assign(Object.assign({},r),o)))!==null&&ne!==void 0?ne:3},[Y,o]),be=L(Y,ae,P),fe=(0,b.Z)(X),je=j(te,be),[Oe,Ce,Ee]=me(M),Pe=l.useMemo(()=>({labelStyle:F,contentStyle:k}),[F,k]);return Oe(l.createElement(Z.Provider,{value:Pe},l.createElement("div",Object.assign({className:C()(M,W==null?void 0:W.className,{[`${M}-${fe}`]:fe&&fe!=="default",[`${M}-bordered`]:!!c,[`${M}-rtl`]:ee==="rtl"},S,R,Ce,Ee),style:Object.assign(Object.assign({},W==null?void 0:W.style),V)},q),(a||s)&&l.createElement("div",{className:`${M}-header`},a&&l.createElement("div",{className:`${M}-title`},a),s&&l.createElement("div",{className:`${M}-extra`},s)),l.createElement("div",{className:`${M}-view`},l.createElement("table",null,l.createElement("tbody",null,je.map((ne,he)=>l.createElement(U,{key:he,index:he,colon:h,prefixCls:M,vertical:O==="vertical",bordered:c,row:ne}))))))))};oe.Item=d;var J=oe},85576:function(u,i,t){t.d(i,{Z:function(){return G}});var l=t(56080),g=t(38657),C=t(56745),E=t(67294),w=t(93967),b=t.n(w),m=t(40974),y=t(8745),r=t(53124),B=t(35792),Z=t(32409),I=t(4941),A=t(71194),D=function(d,f){var N={};for(var p in d)Object.prototype.hasOwnProperty.call(d,p)&&f.indexOf(p)<0&&(N[p]=d[p]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,p=Object.getOwnPropertySymbols(d);v<p.length;v++)f.indexOf(p[v])<0&&Object.prototype.propertyIsEnumerable.call(d,p[v])&&(N[p[v]]=d[p[v]]);return N};const L=d=>{const{prefixCls:f,className:N,closeIcon:p,closable:v,type:$,title:U,children:x,footer:Q}=d,de=D(d,["prefixCls","className","closeIcon","closable","type","title","children","footer"]),{getPrefixCls:le}=E.useContext(r.E_),re=le(),K=f||le("modal"),se=(0,B.Z)(re),[me,ue,oe]=(0,A.ZP)(K,se),J=`${K}-confirm`;let e={};return $?e={closable:v!=null?v:!1,title:"",footer:"",children:E.createElement(Z.O,Object.assign({},d,{prefixCls:K,confirmPrefixCls:J,rootPrefixCls:re,content:x}))}:e={closable:v!=null?v:!0,title:U,footer:Q!==null&&E.createElement(I.$,Object.assign({},d)),children:x},me(E.createElement(m.s,Object.assign({prefixCls:K,className:b()(ue,`${K}-pure-panel`,$&&J,$&&`${J}-${$}`,N,oe,se)},de,{closeIcon:(0,I.b)(K,p),closable:v},e)))};var T=(0,y.i)(L),H=t(94423);function z(d){return(0,l.ZP)((0,l.uW)(d))}const j=C.Z;j.useModal=H.Z,j.info=function(f){return(0,l.ZP)((0,l.cw)(f))},j.success=function(f){return(0,l.ZP)((0,l.vq)(f))},j.error=function(f){return(0,l.ZP)((0,l.AQ)(f))},j.warning=z,j.warn=z,j.confirm=function(f){return(0,l.ZP)((0,l.Au)(f))},j.destroyAll=function(){for(;g.Z.length;){const f=g.Z.pop();f&&f()}},j.config=l.ai,j._InternalPanelDoNotUseOrYouWillBeFired=T;var G=j},33733:function(u,i,t){t.d(i,{Z:function(){return C}});var l=t(67294);var g={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};const C=(E,w,b,m)=>{const y=(0,l.forwardRef)((H,T)=>{var z=H,{color:r="currentColor",size:B=24,stroke:Z=2,title:I,className:A,children:D}=z,L=ye(z,["color","size","stroke","title","className","children"]);return(0,l.createElement)("svg",ce(ce(xe(ce({ref:T},g[E]),{width:B,height:B,className:["tabler-icon",`tabler-icon-${w}`,A].join(" ")}),E==="filled"?{fill:r}:{strokeWidth:Z,stroke:r}),L),[I&&(0,l.createElement)("title",{key:"svg-title"},I),...m.map(([j,G])=>(0,l.createElement)(j,G)),...Array.isArray(D)?D:[D]])});return y.displayName=`${b}`,y}},50545:function(u,i,t){t.d(i,{Z:function(){return g}});var l=t(33733);var g=(0,l.Z)("outline","archive","IconArchive",[["path",{d:"M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10",key:"svg-1"}],["path",{d:"M10 12l4 0",key:"svg-2"}]])},97975:function(u,i,t){t.d(i,{Z:function(){return g}});var l=t(33733);var g=(0,l.Z)("outline","plus","IconPlus",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M5 12l14 0",key:"svg-1"}]])},78298:function(u,i,t){t.d(i,{Z:function(){return g}});var l=t(33733);var g=(0,l.Z)("outline","refresh","IconRefresh",[["path",{d:"M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4",key:"svg-0"}],["path",{d:"M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4",key:"svg-1"}]])},15741:function(u,i,t){t.d(i,{Z:function(){return g}});var l=t(33733);var g=(0,l.Z)("outline","settings","IconSettings",[["path",{d:"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z",key:"svg-0"}],["path",{d:"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-1"}]])},70278:function(u,i,t){t.d(i,{Z:function(){return g}});var l=t(33733);var g=(0,l.Z)("outline","trash","IconTrash",[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]])}}]);
}());