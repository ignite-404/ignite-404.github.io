!(function(){"use strict";var se=Object.defineProperty,ie=Object.defineProperties;var ce=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var te=(f,r,e)=>r in f?se(f,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):f[r]=e,V=(f,r)=>{for(var e in r||(r={}))ne.call(r,e)&&te(f,e,r[e]);if(G)for(var e of G(r))re.call(r,e)&&te(f,e,r[e]);return f},oe=(f,r)=>ie(f,ce(r));var ae=(f,r)=>{var e={};for(var t in f)ne.call(f,t)&&r.indexOf(t)<0&&(e[t]=f[t]);if(f!=null&&G)for(var t of G(f))r.indexOf(t)<0&&re.call(f,t)&&(e[t]=f[t]);return e};(self.webpackChunk=self.webpackChunk||[]).push([[7432],{4340:function(f,r,e){e.d(r,{Z:function(){return i}});var t=e(87462),c=e(67294),j={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"}}]},name:"close-circle",theme:"filled"},C=j,m=e(84089),M=function(x,l){return c.createElement(m.Z,(0,t.Z)({},x,{ref:l,icon:C}))},a=c.forwardRef(M),i=a},49091:function(f,r,e){e.d(r,{Z:function(){return S}});var t=e(97857),c=e.n(t),j=e(5574),C=e.n(j),m=e(67294),M=e(57381),a=e(22638),i=e(92770),O=function(o,n){var p=(0,a.Z)(o),s=(0,m.useRef)(null),y=(0,m.useCallback)(function(){s.current&&clearTimeout(s.current)},[]);return(0,m.useEffect)(function(){if(!(!(0,i.hj)(n)||n<0))return s.current=setTimeout(p,n),y},[n]),y},x=O,l=e(85893),S=function(o){var n=(0,m.useRef)(null),p=(0,m.useState)(1e3),s=C()(p,2),y=s[0],g=s[1],u=(0,m.useState)(!0),R=C()(u,2),d=R[0],v=R[1],D=function(){v(!1);try{var h,P=((h=n.current)===null||h===void 0||(h=h.contentWindow)===null||h===void 0?void 0:h.document.body.scrollHeight)||0}catch(I){console.log("set-iframe-height",I)}};return x(function(){v(!1)},3e3),(0,l.jsx)(M.Z,{spinning:d,tip:(0,l.jsx)("span",{className:"text-overline",children:"loading..."}),size:"large",children:(0,l.jsx)("iframe",c()({ref:n,onResize:function(){return D()},onLoad:function(){return D()},onLoadStart:function(){return v(!0)},width:"100%",height:y,style:{width:"100%",overflow:"auto"},className:"scrollbar-hide border-none"},o))})}},51255:function(f,r,e){e.d(r,{Z:function(){return O}});var t=e(78957),c=e(83062),j=e(33733);var C=(0,j.Z)("outline","archive","IconArchive",[["path",{d:"M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10",key:"svg-1"}],["path",{d:"M10 12l4 0",key:"svg-2"}]]),m=e(70278),M=e(78298),a=e(97975),i=e(85893),O=function(x){var l=x.title,S=x.subtitle,o=x.extra,n=function(){return o?null:(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(t.Z,{direction:"horizontal",children:[(0,i.jsx)(c.Z,{title:"save",children:(0,i.jsx)(C,{})}),(0,i.jsx)(c.Z,{title:"delete",children:(0,i.jsx)(m.Z,{})}),(0,i.jsx)(c.Z,{title:"refresh",children:(0,i.jsx)(M.Z,{})}),(0,i.jsx)(c.Z,{title:"add",children:(0,i.jsx)(a.Z,{})})]})})};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"p-2 mb-3 rounded-lg bg-blue-900 border-1 border-slate-800 text-white",children:(0,i.jsxs)("div",{className:"flex-row-between",children:[(0,i.jsxs)("div",{className:"w-full flex flex-row items-end gap-2",children:[(0,i.jsx)("h1",{className:"text-large font-bold",children:l}),(0,i.jsx)("div",{className:"text-yellow-500 text-large",children:S})]}),(0,i.jsxs)("div",{className:"",children:[o||null,n()]})]})})})}},12884:function(f,r,e){e.r(r),e.d(r,{default:function(){return p}});var t=e(5574),c=e.n(t),j=e(51255),C=e(71230),m=e(15746),M=e(25278),a=e(50136),i=e(32983),O=e(67294),x=e(49091),l=[{name:"WFM-OS-003",description:"Daily Assignment Location Summary (By Individual FW)",url:"http://bz.dfyzwater.com:8080/webroot/decision/view/report?viewlet=WATERSUPPLIES.cpt"},{name:"WFM-OS-004",description:"Daily Assignment Location Summary (By Worker Group)",url:""},{name:"WFM-OS-005",description:"Daily Assignment Location Summary (By District)",url:""},{name:"WFM-OS-006",description:"Daily Assignment Summary (By Individual FW)",url:""},{name:"WFM-OS-008",description:"Daily Completion Summary Report (for CS District)",url:""},{name:"WFM-OS-011",description:"Exception Report on RforS Field Activity",url:""},{name:"WFM-OS-012",description:"Cases Completed by MSSET",url:""},{name:"WFM-OS-013",description:"Cases Required Manual Reassignment",url:""},{name:"WFM-OS-014",description:"Cumulative Time Worked by Field Worker",url:""},{name:"WFM-OS-015",description:"Cumulative Time Worked By Worker Rank",url:""}],S=e(42838),o=e(13129),n=e(85893),p=function(){var s=(0,O.useState)(void 0),y=c()(s,2),g=y[0],u=y[1],R=(0,O.useState)(void 0),d=c()(R,2),v=d[0],D=d[1],E=function(I){return(0,S.Wq)(v)||!v?!0:(I.name||"").indexOf(v)>=0||(I.description||"").indexOf(v)>=0},h=l.filter(function(P){return E(P)}).map(function(P,I){var $=(0,S.Wq)(P.url);return{key:I,label:(0,n.jsxs)("div",{className:"flex-col-top",children:[(0,n.jsxs)("div",{className:"text-body flex flex-row items-end gap-2",children:[(0,n.jsx)("span",{children:P.name}),$&&(0,n.jsx)("span",{className:"text-caption text-red-500 font-bold",children:"no url set"})]}),(0,S.Wq)(P.description)||(0,n.jsx)("div",{className:"text-overline",children:P.description})]}),disabled:$,onClick:function(){u(P.url||void 0)}}});return(0,O.useEffect)(function(){var P=l.filter(function(I){return!(0,S.Wq)(I.url)}).at(0);u((P==null?void 0:P.url)||void 0)},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(j.Z,{title:"Reports"}),(0,n.jsxs)(C.Z,{gutter:[10,10],children:[(0,n.jsxs)(m.Z,{span:6,children:[(0,n.jsx)("div",{className:"mb-2",children:(0,n.jsx)(M.Z,{placeholder:"filter reports",value:v,onChange:function(I){return D(I.target.value)},addonAfter:(0,n.jsx)(o.Z,{})})}),(0,n.jsx)(a.Z,{multiple:!1,mode:"vertical",items:h})]}),(0,n.jsx)(m.Z,{span:18,children:g&&g.length>0?(0,n.jsx)(x.Z,{src:g}):(0,n.jsx)(i.Z,{})})]})]})}},22638:function(f,r,e){var t=e(67294),c=e(92770),j=e(31663);function C(m){j.Z&&((0,c.mf)(m)||console.error("useMemoizedFn expected parameter is a function, got ".concat(typeof m)));var M=(0,t.useRef)(m);M.current=(0,t.useMemo)(function(){return m},[m]);var a=(0,t.useRef)();return a.current||(a.current=function(){for(var i=[],O=0;O<arguments.length;O++)i[O]=arguments[O];return M.current.apply(this,i)}),a.current}r.Z=C},92770:function(f,r,e){e.d(r,{G7:function(){return M},hj:function(){return m},mf:function(){return c}});var t=function(a){return a!==null&&typeof a=="object"},c=function(a){return typeof a=="function"},j=function(a){return typeof a=="string"},C=function(a){return typeof a=="boolean"},m=function(a){return typeof a=="number"},M=function(a){return typeof a=="undefined"}},31663:function(f,r){var e=!1;r.Z=e},15746:function(f,r,e){var t=e(21584);r.Z=t.Z},32983:function(f,r,e){e.d(r,{Z:function(){return R}});var t=e(67294),c=e(93967),j=e.n(c),C=e(53124),m=e(10110),M=e(10274),a=e(29691),O=()=>{const[,d]=(0,a.ZP)(),D=new M.C(d.colorBgBase).toHsl().l<.5?{opacity:.65}:{};return t.createElement("svg",{style:D,width:"184",height:"152",viewBox:"0 0 184 152",xmlns:"http://www.w3.org/2000/svg"},t.createElement("title",null,"empty image"),t.createElement("g",{fill:"none",fillRule:"evenodd"},t.createElement("g",{transform:"translate(24 31.67)"},t.createElement("ellipse",{fillOpacity:".8",fill:"#F5F5F7",cx:"67.797",cy:"106.89",rx:"67.797",ry:"12.668"}),t.createElement("path",{d:"M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",fill:"#AEB8C2"}),t.createElement("path",{d:"M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",fill:"url(#linearGradient-1)",transform:"translate(13.56)"}),t.createElement("path",{d:"M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",fill:"#F5F5F7"}),t.createElement("path",{d:"M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",fill:"#DCE0E6"})),t.createElement("path",{d:"M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",fill:"#DCE0E6"}),t.createElement("g",{transform:"translate(149.65 15.383)",fill:"#FFF"},t.createElement("ellipse",{cx:"20.654",cy:"3.167",rx:"2.849",ry:"2.815"}),t.createElement("path",{d:"M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"}))))},l=()=>{const[,d]=(0,a.ZP)(),{colorFill:v,colorFillTertiary:D,colorFillQuaternary:E,colorBgContainer:h}=d,{borderColor:P,shadowColor:I,contentColor:$}=(0,t.useMemo)(()=>({borderColor:new M.C(v).onBackground(h).toHexShortString(),shadowColor:new M.C(D).onBackground(h).toHexShortString(),contentColor:new M.C(E).onBackground(h).toHexShortString()}),[v,D,E,h]);return t.createElement("svg",{width:"64",height:"41",viewBox:"0 0 64 41",xmlns:"http://www.w3.org/2000/svg"},t.createElement("title",null,"Simple Empty"),t.createElement("g",{transform:"translate(0 1)",fill:"none",fillRule:"evenodd"},t.createElement("ellipse",{fill:I,cx:"32",cy:"33",rx:"32",ry:"7"}),t.createElement("g",{fillRule:"nonzero",stroke:P},t.createElement("path",{d:"M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"}),t.createElement("path",{d:"M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",fill:$}))))},S=e(83559),o=e(83262);const n=d=>{const{componentCls:v,margin:D,marginXS:E,marginXL:h,fontSize:P,lineHeight:I}=d;return{[v]:{marginInline:E,fontSize:P,lineHeight:I,textAlign:"center",[`${v}-image`]:{height:d.emptyImgHeight,marginBottom:E,opacity:d.opacityImage,img:{height:"100%"},svg:{maxWidth:"100%",height:"100%",margin:"auto"}},[`${v}-description`]:{color:d.colorTextDescription},[`${v}-footer`]:{marginTop:D},"&-normal":{marginBlock:h,color:d.colorTextDescription,[`${v}-description`]:{color:d.colorTextDescription},[`${v}-image`]:{height:d.emptyImgHeightMD}},"&-small":{marginBlock:E,color:d.colorTextDescription,[`${v}-image`]:{height:d.emptyImgHeightSM}}}}};var p=(0,S.I$)("Empty",d=>{const{componentCls:v,controlHeightLG:D,calc:E}=d,h=(0,o.IX)(d,{emptyImgCls:`${v}-img`,emptyImgHeight:E(D).mul(2.5).equal(),emptyImgHeightMD:D,emptyImgHeightSM:E(D).mul(.875).equal()});return[n(h)]}),s=function(d,v){var D={};for(var E in d)Object.prototype.hasOwnProperty.call(d,E)&&v.indexOf(E)<0&&(D[E]=d[E]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,E=Object.getOwnPropertySymbols(d);h<E.length;h++)v.indexOf(E[h])<0&&Object.prototype.propertyIsEnumerable.call(d,E[h])&&(D[E[h]]=d[E[h]]);return D};const y=t.createElement(O,null),g=t.createElement(l,null),u=d=>{var{className:v,rootClassName:D,prefixCls:E,image:h=y,description:P,children:I,imageStyle:$,style:F}=d,U=s(d,["className","rootClassName","prefixCls","image","description","children","imageStyle","style"]);const{getPrefixCls:N,direction:K,empty:_}=t.useContext(C.E_),W=N("empty",E),[T,L,b]=p(W),[w]=(0,m.Z)("Empty"),Z=typeof P!="undefined"?P:w==null?void 0:w.description,z=typeof Z=="string"?Z:"empty";let B=null;return typeof h=="string"?B=t.createElement("img",{alt:z,src:h}):B=h,T(t.createElement("div",Object.assign({className:j()(L,b,W,_==null?void 0:_.className,{[`${W}-normal`]:h===g,[`${W}-rtl`]:K==="rtl"},v,D),style:Object.assign(Object.assign({},_==null?void 0:_.style),F)},U),t.createElement("div",{className:`${W}-image`,style:$},B),Z&&t.createElement("div",{className:`${W}-description`},Z),I&&t.createElement("div",{className:`${W}-footer`},I)))};u.PRESENTED_IMAGE_DEFAULT=y,u.PRESENTED_IMAGE_SIMPLE=g;var R=u},99134:function(f,r,e){var t=e(67294);const c=(0,t.createContext)({});r.Z=c},21584:function(f,r,e){var t=e(67294),c=e(93967),j=e.n(c),C=e(53124),m=e(99134),M=e(6999),a=function(l,S){var o={};for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&S.indexOf(n)<0&&(o[n]=l[n]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,n=Object.getOwnPropertySymbols(l);p<n.length;p++)S.indexOf(n[p])<0&&Object.prototype.propertyIsEnumerable.call(l,n[p])&&(o[n[p]]=l[n[p]]);return o};function i(l){return typeof l=="number"?`${l} ${l} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(l)?`0 0 ${l}`:l}const O=["xs","sm","md","lg","xl","xxl"],x=t.forwardRef((l,S)=>{const{getPrefixCls:o,direction:n}=t.useContext(C.E_),{gutter:p,wrap:s}=t.useContext(m.Z),{prefixCls:y,span:g,order:u,offset:R,push:d,pull:v,className:D,children:E,flex:h,style:P}=l,I=a(l,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),$=o("col",y),[F,U,N]=(0,M.cG)($),K={};let _={};O.forEach(L=>{let b={};const w=l[L];typeof w=="number"?b.span=w:typeof w=="object"&&(b=w||{}),delete I[L],_=Object.assign(Object.assign({},_),{[`${$}-${L}-${b.span}`]:b.span!==void 0,[`${$}-${L}-order-${b.order}`]:b.order||b.order===0,[`${$}-${L}-offset-${b.offset}`]:b.offset||b.offset===0,[`${$}-${L}-push-${b.push}`]:b.push||b.push===0,[`${$}-${L}-pull-${b.pull}`]:b.pull||b.pull===0,[`${$}-rtl`]:n==="rtl"}),b.flex&&(_[`${$}-${L}-flex`]=!0,K[`--${$}-${L}-flex`]=i(b.flex))});const W=j()($,{[`${$}-${g}`]:g!==void 0,[`${$}-order-${u}`]:u,[`${$}-offset-${R}`]:R,[`${$}-push-${d}`]:d,[`${$}-pull-${v}`]:v},D,_,U,N),T={};if(p&&p[0]>0){const L=p[0]/2;T.paddingLeft=L,T.paddingRight=L}return h&&(T.flex=i(h),s===!1&&!T.minWidth&&(T.minWidth=0)),F(t.createElement("div",Object.assign({},I,{style:Object.assign(Object.assign(Object.assign({},T),P),K),className:W,ref:S}),E))});r.Z=x},92820:function(f,r,e){var t=e(67294),c=e(93967),j=e.n(c),C=e(74443),m=e(53124),M=e(99134),a=e(6999),i=function(o,n){var p={};for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&n.indexOf(s)<0&&(p[s]=o[s]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,s=Object.getOwnPropertySymbols(o);y<s.length;y++)n.indexOf(s[y])<0&&Object.prototype.propertyIsEnumerable.call(o,s[y])&&(p[s[y]]=o[s[y]]);return p};const O=null,x=null;function l(o,n){const[p,s]=t.useState(typeof o=="string"?o:""),y=()=>{if(typeof o=="string"&&s(o),typeof o=="object")for(let g=0;g<C.c4.length;g++){const u=C.c4[g];if(!n[u])continue;const R=o[u];if(R!==void 0){s(R);return}}};return t.useEffect(()=>{y()},[JSON.stringify(o),n]),p}const S=t.forwardRef((o,n)=>{const{prefixCls:p,justify:s,align:y,className:g,style:u,children:R,gutter:d=0,wrap:v}=o,D=i(o,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:E,direction:h}=t.useContext(m.E_),[P,I]=t.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[$,F]=t.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),U=l(y,$),N=l(s,$),K=t.useRef(d),_=(0,C.ZP)();t.useEffect(()=>{const H=_.subscribe(J=>{F(J);const A=K.current||0;(!Array.isArray(A)&&typeof A=="object"||Array.isArray(A)&&(typeof A[0]=="object"||typeof A[1]=="object"))&&I(J)});return()=>_.unsubscribe(H)},[]);const W=()=>{const H=[void 0,void 0];return(Array.isArray(d)?d:[d,void 0]).forEach((A,ee)=>{if(typeof A=="object")for(let Q=0;Q<C.c4.length;Q++){const Y=C.c4[Q];if(P[Y]&&A[Y]!==void 0){H[ee]=A[Y];break}}else H[ee]=A}),H},T=E("row",p),[L,b,w]=(0,a.VM)(T),Z=W(),z=j()(T,{[`${T}-no-wrap`]:v===!1,[`${T}-${N}`]:N,[`${T}-${U}`]:U,[`${T}-rtl`]:h==="rtl"},g,b,w),B={},k=Z[0]!=null&&Z[0]>0?Z[0]/-2:void 0;k&&(B.marginLeft=k,B.marginRight=k);const[q,X]=Z;B.rowGap=X;const le=t.useMemo(()=>({gutter:[q,X],wrap:v}),[q,X,v]);return L(t.createElement(M.Z.Provider,{value:le},t.createElement("div",Object.assign({},D,{className:z,style:Object.assign(Object.assign({},B),u),ref:n}),R)))});r.Z=S},6999:function(f,r,e){e.d(r,{VM:function(){return l},cG:function(){return S}});var t=e(11568),c=e(83559),j=e(83262);const C=o=>{const{componentCls:n}=o;return{[n]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},m=o=>{const{componentCls:n}=o;return{[n]:{position:"relative",maxWidth:"100%",minHeight:1}}},M=(o,n)=>{const{prefixCls:p,componentCls:s,gridColumns:y}=o,g={};for(let u=y;u>=0;u--)u===0?(g[`${s}${n}-${u}`]={display:"none"},g[`${s}-push-${u}`]={insetInlineStart:"auto"},g[`${s}-pull-${u}`]={insetInlineEnd:"auto"},g[`${s}${n}-push-${u}`]={insetInlineStart:"auto"},g[`${s}${n}-pull-${u}`]={insetInlineEnd:"auto"},g[`${s}${n}-offset-${u}`]={marginInlineStart:0},g[`${s}${n}-order-${u}`]={order:0}):(g[`${s}${n}-${u}`]=[{"--ant-display":"block",display:"block"},{display:"var(--ant-display)",flex:`0 0 ${u/y*100}%`,maxWidth:`${u/y*100}%`}],g[`${s}${n}-push-${u}`]={insetInlineStart:`${u/y*100}%`},g[`${s}${n}-pull-${u}`]={insetInlineEnd:`${u/y*100}%`},g[`${s}${n}-offset-${u}`]={marginInlineStart:`${u/y*100}%`},g[`${s}${n}-order-${u}`]={order:u});return g[`${s}${n}-flex`]={flex:`var(--${p}${n}-flex)`},g},a=(o,n)=>M(o,n),i=(o,n,p)=>({[`@media (min-width: ${(0,t.bf)(n)})`]:Object.assign({},a(o,p))}),O=()=>({}),x=()=>({}),l=(0,c.I$)("Grid",C,O),S=(0,c.I$)("Grid",o=>{const n=(0,j.IX)(o,{gridColumns:24}),p={"-sm":n.screenSMMin,"-md":n.screenMDMin,"-lg":n.screenLGMin,"-xl":n.screenXLMin,"-xxl":n.screenXXLMin};return[m(n),a(n,""),a(n,"-xs"),Object.keys(p).map(s=>i(n,p[s],s)).reduce((s,y)=>Object.assign(Object.assign({},s),y),{})]},x)},10110:function(f,r,e){var t=e(67294),c=e(76745),j=e(40378);const C=(m,M)=>{const a=t.useContext(c.Z),i=t.useMemo(()=>{var x;const l=M||j.Z[m],S=(x=a==null?void 0:a[m])!==null&&x!==void 0?x:{};return Object.assign(Object.assign({},typeof l=="function"?l():l),S||{})},[m,M,a]),O=t.useMemo(()=>{const x=a==null?void 0:a.locale;return a!=null&&a.exist&&!x?j.Z.locale:x},[a]);return[i,O]};r.Z=C},71230:function(f,r,e){var t=e(92820);r.Z=t.Z},64217:function(f,r,e){e.d(r,{Z:function(){return i}});var t=e(1413),c=`accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,j=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,C="".concat(c," ").concat(j).split(/[\s\n]+/),m="aria-",M="data-";function a(O,x){return O.indexOf(x)===0}function i(O){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l;x===!1?l={aria:!0,data:!0,attr:!0}:x===!0?l={aria:!0}:l=(0,t.Z)({},x);var S={};return Object.keys(O).forEach(function(o){(l.aria&&(o==="role"||a(o,m))||l.data&&a(o,M)||l.attr&&C.includes(o))&&(S[o]=O[o])}),S}},33733:function(f,r,e){e.d(r,{Z:function(){return j}});var t=e(67294);var c={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};const j=(C,m,M,a)=>{const i=(0,t.forwardRef)((y,s)=>{var g=y,{color:O="currentColor",size:x=24,stroke:l=2,title:S,className:o,children:n}=g,p=ae(g,["color","size","stroke","title","className","children"]);return(0,t.createElement)("svg",V(V(oe(V({ref:s},c[C]),{width:x,height:x,className:["tabler-icon",`tabler-icon-${m}`,o].join(" ")}),C==="filled"?{fill:O}:{strokeWidth:l,stroke:O}),p),[S&&(0,t.createElement)("title",{key:"svg-title"},S),...a.map(([u,R])=>(0,t.createElement)(u,R)),...Array.isArray(n)?n:[n]])});return i.displayName=`${M}`,i}},97975:function(f,r,e){e.d(r,{Z:function(){return c}});var t=e(33733);var c=(0,t.Z)("outline","plus","IconPlus",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M5 12l14 0",key:"svg-1"}]])},78298:function(f,r,e){e.d(r,{Z:function(){return c}});var t=e(33733);var c=(0,t.Z)("outline","refresh","IconRefresh",[["path",{d:"M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4",key:"svg-0"}],["path",{d:"M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4",key:"svg-1"}]])},13129:function(f,r,e){e.d(r,{Z:function(){return c}});var t=e(33733);var c=(0,t.Z)("outline","search","IconSearch",[["path",{d:"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",key:"svg-0"}],["path",{d:"M21 21l-6 -6",key:"svg-1"}]])},70278:function(f,r,e){e.d(r,{Z:function(){return c}});var t=e(33733);var c=(0,t.Z)("outline","trash","IconTrash",[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]])}}]);
}());