!(function(){"use strict";var ae=Object.defineProperty,ie=Object.defineProperties;var ce=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var te=(f,r,e)=>r in f?ae(f,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):f[r]=e,V=(f,r)=>{for(var e in r||(r={}))ne.call(r,e)&&te(f,e,r[e]);if(G)for(var e of G(r))re.call(r,e)&&te(f,e,r[e]);return f},oe=(f,r)=>ie(f,ce(r));var se=(f,r)=>{var e={};for(var t in f)ne.call(f,t)&&r.indexOf(t)<0&&(e[t]=f[t]);if(f!=null&&G)for(var t of G(f))r.indexOf(t)<0&&re.call(f,t)&&(e[t]=f[t]);return e};(self.webpackChunk=self.webpackChunk||[]).push([[7432],{49091:function(f,r,e){e.d(r,{Z:function(){return P}});var t=e(97857),h=e.n(t),$=e(5574),x=e.n($),y=e(67294),M=e(57381),o=e(22638),O=e(92770),D=function(l,n){var d=(0,o.Z)(l),s=(0,y.useRef)(null),m=(0,y.useCallback)(function(){s.current&&clearTimeout(s.current)},[]);return(0,y.useEffect)(function(){if(!(!(0,O.hj)(n)||n<0))return s.current=setTimeout(d,n),m},[n]),m},W=D,u=e(85893),P=function(l){var n=(0,y.useRef)(null),d=(0,y.useState)(1e3),s=x()(d,2),m=s[0],p=s[1],a=(0,y.useState)(!0),I=x()(a,2),i=I[0],c=I[1],C=function(){c(!1);try{var g,E=((g=n.current)===null||g===void 0||(g=g.contentWindow)===null||g===void 0?void 0:g.document.body.scrollHeight)||0}catch(S){console.log("set-iframe-height",S)}};return W(function(){c(!1)},3e3),(0,u.jsx)(M.Z,{spinning:i,tip:(0,u.jsx)("span",{className:"text-overline",children:"loading..."}),size:"large",children:(0,u.jsx)("iframe",h()({ref:n,onResize:function(){return C()},onLoad:function(){return C()},onLoadStart:function(){return c(!0)},width:"100%",height:m,style:{width:"100%",overflow:"auto"},className:"scrollbar-hide border-none"},l))})}},3083:function(f,r,e){var t=e(50545),h=e(70278),$=e(78298),x=e(97975),y=e(78957),M=e(83062),o=e(85893);r.Z=function(O){var D=O.title,W=O.subtitle,u=O.extra,P=O.hide_add,l=O.hide_save,n=O.hide_refresh,d=O.hide_delete,s=function(){return u?null:(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(y.Z,{direction:"horizontal",children:[l||(0,o.jsx)(M.Z,{title:"save",children:(0,o.jsx)(t.Z,{stroke:1})}),d||(0,o.jsx)(M.Z,{title:"delete",children:(0,o.jsx)(h.Z,{stroke:1})}),n||(0,o.jsx)(M.Z,{title:"refresh",children:(0,o.jsx)($.Z,{stroke:1})}),P||(0,o.jsx)(M.Z,{title:"add",children:(0,o.jsx)(x.Z,{stroke:1})})]})})};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"mb-3 rounded-lg border-1 border-slate-800 bg-blue-900 p-2 text-white",children:(0,o.jsxs)("div",{className:"flex-row-between",children:[(0,o.jsxs)("div",{className:"flex w-full flex-row items-end gap-2",children:[(0,o.jsx)("h1",{className:"text-large font-bold",children:D}),(0,o.jsx)("div",{className:"text-large text-yellow-500",children:W})]}),(0,o.jsxs)("div",{className:"",children:[u||null,s()]})]})})})}},12884:function(f,r,e){e.r(r),e.d(r,{default:function(){return d}});var t=e(5574),h=e.n(t),$=[{name:"WFM-OS-003",description:"Daily Assignment Location Summary (By Individual FW)",url:"http://bz.dfyzwater.com:8080/webroot/decision/view/report?viewlet=WATERSUPPLIES.cpt"},{name:"WFM-OS-004",description:"Daily Assignment Location Summary (By Worker Group)",url:""},{name:"WFM-OS-005",description:"Daily Assignment Location Summary (By District)",url:""},{name:"WFM-OS-006",description:"Daily Assignment Summary (By Individual FW)",url:""},{name:"WFM-OS-008",description:"Daily Completion Summary Report (for CS District)",url:""},{name:"WFM-OS-011",description:"Exception Report on RforS Field Activity",url:""},{name:"WFM-OS-012",description:"Cases Completed by MSSET",url:""},{name:"WFM-OS-013",description:"Cases Required Manual Reassignment",url:""},{name:"WFM-OS-014",description:"Cumulative Time Worked by Field Worker",url:""},{name:"WFM-OS-015",description:"Cumulative Time Worked By Worker Rank",url:""}],x=e(95813),y=e(13129),M=e(71230),o=e(15746),O=e(65233),D=e(50136),W=e(32983),u=e(67294),P=e(49091),l=e(3083),n=e(85893),d=function(){var s=(0,u.useState)(void 0),m=h()(s,2),p=m[0],a=m[1],I=(0,u.useState)(void 0),i=h()(I,2),c=i[0],C=i[1],v=function(S){return(0,x.Wq)(c)||!c?!0:(S.name||"").indexOf(c)>=0||(S.description||"").indexOf(c)>=0},g=$.filter(function(E){return v(E)}).map(function(E,S){var _=(0,x.Wq)(E.url);return{key:S,label:(0,n.jsxs)("div",{className:"flex-col-top",children:[(0,n.jsxs)("div",{className:"text-body flex flex-row items-end gap-2",children:[(0,n.jsx)("span",{children:E.name}),_&&(0,n.jsx)("span",{className:"text-caption font-bold text-red-500",children:"no url set"})]}),(0,x.Wq)(E.description)||(0,n.jsx)("div",{className:"text-overline",children:E.description})]}),disabled:_,onClick:function(){a(E.url||void 0)}}});return(0,u.useEffect)(function(){var E=$.filter(function(S){return!(0,x.Wq)(S.url)}).at(0);a((E==null?void 0:E.url)||void 0)},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{title:"Reports"}),(0,n.jsxs)(M.Z,{gutter:[10,10],children:[(0,n.jsxs)(o.Z,{span:6,children:[(0,n.jsx)("div",{className:"mb-2",children:(0,n.jsx)(O.Z,{placeholder:"filter reports",value:c,onChange:function(S){return C(S.target.value)},addonAfter:(0,n.jsx)(y.Z,{stroke:1})})}),(0,n.jsx)(D.Z,{multiple:!1,mode:"vertical",items:g})]}),(0,n.jsx)(o.Z,{span:18,children:p&&p.length>0?(0,n.jsx)(P.Z,{src:p}):(0,n.jsx)(W.Z,{})})]})]})}},22638:function(f,r,e){var t=e(67294),h=e(92770),$=e(31663);function x(y){$.Z&&((0,h.mf)(y)||console.error("useMemoizedFn expected parameter is a function, got ".concat(typeof y)));var M=(0,t.useRef)(y);M.current=(0,t.useMemo)(function(){return y},[y]);var o=(0,t.useRef)();return o.current||(o.current=function(){for(var O=[],D=0;D<arguments.length;D++)O[D]=arguments[D];return M.current.apply(this,O)}),o.current}r.Z=x},92770:function(f,r,e){e.d(r,{G7:function(){return M},HD:function(){return $},hj:function(){return y},mf:function(){return h}});var t=function(o){return o!==null&&typeof o=="object"},h=function(o){return typeof o=="function"},$=function(o){return typeof o=="string"},x=function(o){return typeof o=="boolean"},y=function(o){return typeof o=="number"},M=function(o){return typeof o=="undefined"}},31663:function(f,r){var e=!1;r.Z=e},15746:function(f,r,e){var t=e(21584);r.Z=t.Z},32983:function(f,r,e){e.d(r,{Z:function(){return I}});var t=e(67294),h=e(93967),$=e.n(h),x=e(53124),y=e(10110),M=e(10274),o=e(29691),D=()=>{const[,i]=(0,o.ZP)(),[c]=(0,y.Z)("Empty"),v=new M.C(i.colorBgBase).toHsl().l<.5?{opacity:.65}:{};return t.createElement("svg",{style:v,width:"184",height:"152",viewBox:"0 0 184 152",xmlns:"http://www.w3.org/2000/svg"},t.createElement("title",null,(c==null?void 0:c.description)||"Empty"),t.createElement("g",{fill:"none",fillRule:"evenodd"},t.createElement("g",{transform:"translate(24 31.67)"},t.createElement("ellipse",{fillOpacity:".8",fill:"#F5F5F7",cx:"67.797",cy:"106.89",rx:"67.797",ry:"12.668"}),t.createElement("path",{d:"M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",fill:"#AEB8C2"}),t.createElement("path",{d:"M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",fill:"url(#linearGradient-1)",transform:"translate(13.56)"}),t.createElement("path",{d:"M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",fill:"#F5F5F7"}),t.createElement("path",{d:"M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",fill:"#DCE0E6"})),t.createElement("path",{d:"M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",fill:"#DCE0E6"}),t.createElement("g",{transform:"translate(149.65 15.383)",fill:"#FFF"},t.createElement("ellipse",{cx:"20.654",cy:"3.167",rx:"2.849",ry:"2.815"}),t.createElement("path",{d:"M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"}))))},u=()=>{const[,i]=(0,o.ZP)(),[c]=(0,y.Z)("Empty"),{colorFill:C,colorFillTertiary:v,colorFillQuaternary:g,colorBgContainer:E}=i,{borderColor:S,shadowColor:_,contentColor:Z}=(0,t.useMemo)(()=>({borderColor:new M.C(C).onBackground(E).toHexShortString(),shadowColor:new M.C(v).onBackground(E).toHexShortString(),contentColor:new M.C(g).onBackground(E).toHexShortString()}),[C,v,g,E]);return t.createElement("svg",{width:"64",height:"41",viewBox:"0 0 64 41",xmlns:"http://www.w3.org/2000/svg"},t.createElement("title",null,(c==null?void 0:c.description)||"Empty"),t.createElement("g",{transform:"translate(0 1)",fill:"none",fillRule:"evenodd"},t.createElement("ellipse",{fill:_,cx:"32",cy:"33",rx:"32",ry:"7"}),t.createElement("g",{fillRule:"nonzero",stroke:S},t.createElement("path",{d:"M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"}),t.createElement("path",{d:"M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",fill:Z}))))},P=e(83559),l=e(83262);const n=i=>{const{componentCls:c,margin:C,marginXS:v,marginXL:g,fontSize:E,lineHeight:S}=i;return{[c]:{marginInline:v,fontSize:E,lineHeight:S,textAlign:"center",[`${c}-image`]:{height:i.emptyImgHeight,marginBottom:v,opacity:i.opacityImage,img:{height:"100%"},svg:{maxWidth:"100%",height:"100%",margin:"auto"}},[`${c}-description`]:{color:i.colorTextDescription},[`${c}-footer`]:{marginTop:C},"&-normal":{marginBlock:g,color:i.colorTextDescription,[`${c}-description`]:{color:i.colorTextDescription},[`${c}-image`]:{height:i.emptyImgHeightMD}},"&-small":{marginBlock:v,color:i.colorTextDescription,[`${c}-image`]:{height:i.emptyImgHeightSM}}}}};var d=(0,P.I$)("Empty",i=>{const{componentCls:c,controlHeightLG:C,calc:v}=i,g=(0,l.IX)(i,{emptyImgCls:`${c}-img`,emptyImgHeight:v(C).mul(2.5).equal(),emptyImgHeightMD:C,emptyImgHeightSM:v(C).mul(.875).equal()});return[n(g)]}),s=function(i,c){var C={};for(var v in i)Object.prototype.hasOwnProperty.call(i,v)&&c.indexOf(v)<0&&(C[v]=i[v]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,v=Object.getOwnPropertySymbols(i);g<v.length;g++)c.indexOf(v[g])<0&&Object.prototype.propertyIsEnumerable.call(i,v[g])&&(C[v[g]]=i[v[g]]);return C};const m=t.createElement(D,null),p=t.createElement(u,null),a=i=>{var{className:c,rootClassName:C,prefixCls:v,image:g=m,description:E,children:S,imageStyle:_,style:Z}=i,F=s(i,["className","rootClassName","prefixCls","image","description","children","imageStyle","style"]);const{getPrefixCls:N,direction:K,empty:A}=t.useContext(x.E_),L=N("empty",v),[b,R,j]=d(L),[T]=(0,y.Z)("Empty"),B=typeof E!="undefined"?E:T==null?void 0:T.description,k=typeof B=="string"?B:"empty";let U=null;return typeof g=="string"?U=t.createElement("img",{alt:k,src:g}):U=g,b(t.createElement("div",Object.assign({className:$()(R,j,L,A==null?void 0:A.className,{[`${L}-normal`]:g===p,[`${L}-rtl`]:K==="rtl"},c,C),style:Object.assign(Object.assign({},A==null?void 0:A.style),Z)},F),t.createElement("div",{className:`${L}-image`,style:_},U),B&&t.createElement("div",{className:`${L}-description`},B),S&&t.createElement("div",{className:`${L}-footer`},S)))};a.PRESENTED_IMAGE_DEFAULT=m,a.PRESENTED_IMAGE_SIMPLE=p;var I=a},99134:function(f,r,e){var t=e(67294);const h=(0,t.createContext)({});r.Z=h},21584:function(f,r,e){var t=e(67294),h=e(93967),$=e.n(h),x=e(53124),y=e(99134),M=e(6999),o=function(u,P){var l={};for(var n in u)Object.prototype.hasOwnProperty.call(u,n)&&P.indexOf(n)<0&&(l[n]=u[n]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,n=Object.getOwnPropertySymbols(u);d<n.length;d++)P.indexOf(n[d])<0&&Object.prototype.propertyIsEnumerable.call(u,n[d])&&(l[n[d]]=u[n[d]]);return l};function O(u){return typeof u=="number"?`${u} ${u} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(u)?`0 0 ${u}`:u}const D=["xs","sm","md","lg","xl","xxl"],W=t.forwardRef((u,P)=>{const{getPrefixCls:l,direction:n}=t.useContext(x.E_),{gutter:d,wrap:s}=t.useContext(y.Z),{prefixCls:m,span:p,order:a,offset:I,push:i,pull:c,className:C,children:v,flex:g,style:E}=u,S=o(u,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),_=l("col",m),[Z,F,N]=(0,M.cG)(_),K={};let A={};D.forEach(R=>{let j={};const T=u[R];typeof T=="number"?j.span=T:typeof T=="object"&&(j=T||{}),delete S[R],A=Object.assign(Object.assign({},A),{[`${_}-${R}-${j.span}`]:j.span!==void 0,[`${_}-${R}-order-${j.order}`]:j.order||j.order===0,[`${_}-${R}-offset-${j.offset}`]:j.offset||j.offset===0,[`${_}-${R}-push-${j.push}`]:j.push||j.push===0,[`${_}-${R}-pull-${j.pull}`]:j.pull||j.pull===0,[`${_}-rtl`]:n==="rtl"}),j.flex&&(A[`${_}-${R}-flex`]=!0,K[`--${_}-${R}-flex`]=O(j.flex))});const L=$()(_,{[`${_}-${p}`]:p!==void 0,[`${_}-order-${a}`]:a,[`${_}-offset-${I}`]:I,[`${_}-push-${i}`]:i,[`${_}-pull-${c}`]:c},C,A,F,N),b={};if(d&&d[0]>0){const R=d[0]/2;b.paddingLeft=R,b.paddingRight=R}return g&&(b.flex=O(g),s===!1&&!b.minWidth&&(b.minWidth=0)),Z(t.createElement("div",Object.assign({},S,{style:Object.assign(Object.assign(Object.assign({},b),E),K),className:L,ref:P}),v))});r.Z=W},92820:function(f,r,e){var t=e(67294),h=e(93967),$=e.n(h),x=e(74443),y=e(53124),M=e(99134),o=e(6999),O=function(l,n){var d={};for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&n.indexOf(s)<0&&(d[s]=l[s]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,s=Object.getOwnPropertySymbols(l);m<s.length;m++)n.indexOf(s[m])<0&&Object.prototype.propertyIsEnumerable.call(l,s[m])&&(d[s[m]]=l[s[m]]);return d};const D=null,W=null;function u(l,n){const[d,s]=t.useState(typeof l=="string"?l:""),m=()=>{if(typeof l=="string"&&s(l),typeof l=="object")for(let p=0;p<x.c4.length;p++){const a=x.c4[p];if(!n[a])continue;const I=l[a];if(I!==void 0){s(I);return}}};return t.useEffect(()=>{m()},[JSON.stringify(l),n]),d}const P=t.forwardRef((l,n)=>{const{prefixCls:d,justify:s,align:m,className:p,style:a,children:I,gutter:i=0,wrap:c}=l,C=O(l,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:v,direction:g}=t.useContext(y.E_),[E,S]=t.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[_,Z]=t.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),F=u(m,_),N=u(s,_),K=t.useRef(i),A=(0,x.ZP)();t.useEffect(()=>{const H=A.subscribe(J=>{Z(J);const w=K.current||0;(!Array.isArray(w)&&typeof w=="object"||Array.isArray(w)&&(typeof w[0]=="object"||typeof w[1]=="object"))&&S(J)});return()=>A.unsubscribe(H)},[]);const L=()=>{const H=[void 0,void 0];return(Array.isArray(i)?i:[i,void 0]).forEach((w,ee)=>{if(typeof w=="object")for(let Q=0;Q<x.c4.length;Q++){const Y=x.c4[Q];if(E[Y]&&w[Y]!==void 0){H[ee]=w[Y];break}}else H[ee]=w}),H},b=v("row",d),[R,j,T]=(0,o.VM)(b),B=L(),k=$()(b,{[`${b}-no-wrap`]:c===!1,[`${b}-${N}`]:N,[`${b}-${F}`]:F,[`${b}-rtl`]:g==="rtl"},p,j,T),U={},z=B[0]!=null&&B[0]>0?B[0]/-2:void 0;z&&(U.marginLeft=z,U.marginRight=z);const[q,X]=B;U.rowGap=X;const le=t.useMemo(()=>({gutter:[q,X],wrap:c}),[q,X,c]);return R(t.createElement(M.Z.Provider,{value:le},t.createElement("div",Object.assign({},C,{className:k,style:Object.assign(Object.assign({},U),a),ref:n}),I)))});r.Z=P},6999:function(f,r,e){e.d(r,{VM:function(){return u},cG:function(){return P}});var t=e(11568),h=e(83559),$=e(83262);const x=l=>{const{componentCls:n}=l;return{[n]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},y=l=>{const{componentCls:n}=l;return{[n]:{position:"relative",maxWidth:"100%",minHeight:1}}},M=(l,n)=>{const{prefixCls:d,componentCls:s,gridColumns:m}=l,p={};for(let a=m;a>=0;a--)a===0?(p[`${s}${n}-${a}`]={display:"none"},p[`${s}-push-${a}`]={insetInlineStart:"auto"},p[`${s}-pull-${a}`]={insetInlineEnd:"auto"},p[`${s}${n}-push-${a}`]={insetInlineStart:"auto"},p[`${s}${n}-pull-${a}`]={insetInlineEnd:"auto"},p[`${s}${n}-offset-${a}`]={marginInlineStart:0},p[`${s}${n}-order-${a}`]={order:0}):(p[`${s}${n}-${a}`]=[{"--ant-display":"block",display:"block"},{display:"var(--ant-display)",flex:`0 0 ${a/m*100}%`,maxWidth:`${a/m*100}%`}],p[`${s}${n}-push-${a}`]={insetInlineStart:`${a/m*100}%`},p[`${s}${n}-pull-${a}`]={insetInlineEnd:`${a/m*100}%`},p[`${s}${n}-offset-${a}`]={marginInlineStart:`${a/m*100}%`},p[`${s}${n}-order-${a}`]={order:a});return p[`${s}${n}-flex`]={flex:`var(--${d}${n}-flex)`},p},o=(l,n)=>M(l,n),O=(l,n,d)=>({[`@media (min-width: ${(0,t.bf)(n)})`]:Object.assign({},o(l,d))}),D=()=>({}),W=()=>({}),u=(0,h.I$)("Grid",x,D),P=(0,h.I$)("Grid",l=>{const n=(0,$.IX)(l,{gridColumns:24}),d={"-sm":n.screenSMMin,"-md":n.screenMDMin,"-lg":n.screenLGMin,"-xl":n.screenXLMin,"-xxl":n.screenXXLMin};return[y(n),o(n,""),o(n,"-xs"),Object.keys(d).map(s=>O(n,d[s],s)).reduce((s,m)=>Object.assign(Object.assign({},s),m),{})]},W)},71230:function(f,r,e){var t=e(92820);r.Z=t.Z},33733:function(f,r,e){e.d(r,{Z:function(){return $}});var t=e(67294);var h={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};const $=(x,y,M,o)=>{const O=(0,t.forwardRef)((m,s)=>{var p=m,{color:D="currentColor",size:W=24,stroke:u=2,title:P,className:l,children:n}=p,d=se(p,["color","size","stroke","title","className","children"]);return(0,t.createElement)("svg",V(V(oe(V({ref:s},h[x]),{width:W,height:W,className:["tabler-icon",`tabler-icon-${y}`,l].join(" ")}),x==="filled"?{fill:D}:{strokeWidth:u,stroke:D}),d),[P&&(0,t.createElement)("title",{key:"svg-title"},P),...o.map(([a,I])=>(0,t.createElement)(a,I)),...Array.isArray(n)?n:[n]])});return O.displayName=`${M}`,O}},50545:function(f,r,e){e.d(r,{Z:function(){return h}});var t=e(33733);var h=(0,t.Z)("outline","archive","IconArchive",[["path",{d:"M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10",key:"svg-1"}],["path",{d:"M10 12l4 0",key:"svg-2"}]])},97975:function(f,r,e){e.d(r,{Z:function(){return h}});var t=e(33733);var h=(0,t.Z)("outline","plus","IconPlus",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M5 12l14 0",key:"svg-1"}]])},78298:function(f,r,e){e.d(r,{Z:function(){return h}});var t=e(33733);var h=(0,t.Z)("outline","refresh","IconRefresh",[["path",{d:"M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4",key:"svg-0"}],["path",{d:"M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4",key:"svg-1"}]])},13129:function(f,r,e){e.d(r,{Z:function(){return h}});var t=e(33733);var h=(0,t.Z)("outline","search","IconSearch",[["path",{d:"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",key:"svg-0"}],["path",{d:"M21 21l-6 -6",key:"svg-1"}]])},70278:function(f,r,e){e.d(r,{Z:function(){return h}});var t=e(33733);var h=(0,t.Z)("outline","trash","IconTrash",[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]])}}]);
}());