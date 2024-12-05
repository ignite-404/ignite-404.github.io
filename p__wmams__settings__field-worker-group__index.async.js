!(function(){"use strict";var $e=Object.defineProperty,Se=Object.defineProperties;var Me=Object.getOwnPropertyDescriptors;var ie=Object.getOwnPropertySymbols;var he=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable;var ve=(m,i,t)=>i in m?$e(m,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):m[i]=t,ce=(m,i)=>{for(var t in i||(i={}))he.call(i,t)&&ve(m,t,i[t]);if(ie)for(var t of ie(i))ge.call(i,t)&&ve(m,t,i[t]);return m},ye=(m,i)=>Se(m,Me(i));var xe=(m,i)=>{var t={};for(var l in m)he.call(m,l)&&i.indexOf(l)<0&&(t[l]=m[l]);if(m!=null&&ie)for(var l of ie(m))i.indexOf(l)<0&&ge.call(m,l)&&(t[l]=m[l]);return t};(self.webpackChunk=self.webpackChunk||[]).push([[3422,3032,4937],{3083:function(m,i,t){var l=t(50545),g=t(70278),C=t(78298),j=t(97975),S=t(78957),M=t(83062),u=t(85893);i.Z=function(O){var w=O.title,B=O.subtitle,r=O.extra,I=O.hide_add,T=O.hide_save,N=O.hide_refresh,L=O.hide_delete,R=function(){return r?null:(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(S.Z,{direction:"horizontal",children:[T||(0,u.jsx)(M.Z,{title:"save",children:(0,u.jsx)(l.Z,{stroke:1})}),L||(0,u.jsx)(M.Z,{title:"delete",children:(0,u.jsx)(g.Z,{stroke:1})}),N||(0,u.jsx)(M.Z,{title:"refresh",children:(0,u.jsx)(C.Z,{stroke:1})}),I||(0,u.jsx)(M.Z,{title:"add",children:(0,u.jsx)(j.Z,{stroke:1})})]})})};return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{className:"mb-3 rounded-lg border-1 border-slate-800 bg-blue-900 p-2 text-white",children:(0,u.jsxs)("div",{className:"flex-row-between",children:[(0,u.jsxs)("div",{className:"flex w-full flex-row items-end gap-2",children:[(0,u.jsx)("h1",{className:"text-large font-bold",children:w}),(0,u.jsx)("div",{className:"text-large text-yellow-500",children:B})]}),(0,u.jsxs)("div",{className:"",children:[r||null,R()]})]})})})}},20673:function(m,i,t){t.r(i),t.d(i,{default:function(){return G}});var l=t(5574),g=t.n(l),C=t(13129),j=t(26412),S=t(65233),M=t(92398),u=t(67294),O=t(3083),w=t(85576),B=t(78957),r=t(85893),I=function(d){var f=d.open,Z=d.close,p=d.ok;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(w.Z,{width:"80%",open:f,onCancel:function(){Z()},title:"Edit Work Group",onOk:function(){},children:(0,r.jsx)(B.Z,{direction:"vertical",style:{width:"100%"},children:(0,r.jsx)(j.Z,{column:1,bordered:!0,items:[{label:"Group Name",children:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"flex-row-left gap-2",children:(0,r.jsx)(S.Z,{value:"6541316817646",disabled:!0})})})},{label:"Description",children:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(S.Z,{})})},{label:"Region",children:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(S.Z,{addonAfter:(0,r.jsx)(C.Z,{stroke:1})})})}]})})})})},T=t(15741),N=t(97975),L=t(83062),R=t(28036),K=t(4393),F=t(80799),y=function(){var d=(0,u.useState)(!1),f=g()(d,2),Z=f[0],p=f[1],v=[{title:"Group Name",render:function(H,x){return(0,r.jsx)("a",{className:"text-blue-600",children:"#123"})}},{title:"Description",render:function(H,x){return(0,r.jsx)("div",{className:"text-overline",children:"--"})}},{title:"Actions",render:function(H,x){return(0,r.jsx)("div",{children:(0,r.jsx)(L.Z,{title:"edit",children:(0,r.jsx)(R.ZP,{size:"small",icon:(0,r.jsx)(T.Z,{stroke:1}),type:"dashed",onClick:function(){p(!0)}})})})}}];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(I,{open:Z,ok:function(){return p(!1)},close:function(){return p(!1)}}),(0,r.jsx)(K.Z,{title:"Model",extra:(0,r.jsx)(R.ZP,{size:"small",icon:(0,r.jsx)(N.Z,{stroke:1}),onClick:function(){return p(!0)}}),children:(0,r.jsx)(F.Z,{columns:v,dataSource:[{id:"",type:""},{id:"",type:""},{id:"",type:""}]})})]})},G=function(){var d=(0,u.useState)(!1),f=g()(d,2),Z=f[0],p=f[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(I,{open:Z,ok:function(){return p(!1)},close:function(){return p(!1)}}),(0,r.jsx)(O.Z,{title:"Worker Group Maintenance",extra:(0,r.jsx)("span",{})}),(0,r.jsx)("div",{className:"my-2",children:(0,r.jsx)(j.Z,{bordered:!0,column:1,items:[{label:"Business Unit",children:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(S.Z,{addonAfter:(0,r.jsx)(C.Z,{stroke:1}),style:{maxWidth:300}})})}]})}),(0,r.jsx)("div",{className:"mb-2",children:(0,r.jsx)(M.Z,{type:"card",defaultActiveKey:"1",items:[{key:"1",label:"HK",children:(0,r.jsx)(y,{})},{key:"2",label:"Kowloon",children:(0,r.jsx)(y,{})},{key:"3",label:"NT",children:(0,r.jsx)(y,{})},{key:"4",label:"NTE",children:(0,r.jsx)(y,{})},{key:"5",label:"NTW",children:(0,r.jsx)(y,{})}]})})]})}},26412:function(m,i,t){t.d(i,{Z:function(){return J}});var l=t(67294),g=t(93967),C=t.n(g),j=t(74443),S=t(53124),M=t(98675),u=t(25378),w={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1},r=l.createContext({}),I=t(50344),T=function(e,n){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(e);s<o.length;s++)n.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(a[o[s]]=e[o[s]]);return a};const N=e=>(0,I.Z)(e).map(n=>Object.assign(Object.assign({},n==null?void 0:n.props),{key:n.key}));function L(e,n,a){const o=l.useMemo(()=>n||N(a),[n,a]);return l.useMemo(()=>o.map(h=>{var{span:c}=h,b=T(h,["span"]);return c==="filled"?Object.assign(Object.assign({},b),{filled:!0}):Object.assign(Object.assign({},b),{span:typeof c=="number"?c:(0,j.m9)(e,c)})}),[o,e])}var R=function(e,n){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(e);s<o.length;s++)n.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(a[o[s]]=e[o[s]]);return a};function K(e,n){let a=[],o=[],s=!1,h=0;return e.filter(c=>c).forEach(c=>{const{filled:b}=c,E=R(c,["filled"]);if(b){o.push(E),a.push(o),o=[],h=0;return}const P=n-h;h+=c.span||1,h>=n?(h>n?(s=!0,o.push(Object.assign(Object.assign({},E),{span:P}))):o.push(E),a.push(o),o=[],h=0):o.push(E)}),o.length>0&&a.push(o),a=a.map(c=>{const b=c.reduce((E,P)=>E+(P.span||1),0);if(b<n){const E=c[c.length-1];return E.span=n-b+1,c}return c}),[a,s]}var y=(e,n)=>{const[a,o]=(0,l.useMemo)(()=>K(n,e),[n,e]);return a},d=e=>{let{children:n}=e;return n};function f(e){return e!=null}var p=e=>{const{itemPrefixCls:n,component:a,span:o,className:s,style:h,labelStyle:c,contentStyle:b,bordered:E,label:P,content:A,colon:V,type:X}=e,W=a;return E?l.createElement(W,{className:C()({[`${n}-item-label`]:X==="label",[`${n}-item-content`]:X==="content"},s),style:h,colSpan:o},f(P)&&l.createElement("span",{style:c},P),f(A)&&l.createElement("span",{style:b},A)):l.createElement(W,{className:C()(`${n}-item`,s),style:h,colSpan:o},l.createElement("div",{className:`${n}-item-container`},(P||P===0)&&l.createElement("span",{className:C()(`${n}-item-label`,{[`${n}-item-no-colon`]:!V}),style:c},P),(A||A===0)&&l.createElement("span",{className:C()(`${n}-item-content`),style:b},A)))};function v(e,n,a){let{colon:o,prefixCls:s,bordered:h}=n,{component:c,type:b,showLabel:E,showContent:P,labelStyle:A,contentStyle:V}=a;return e.map((X,W)=>{let{label:k,children:ae,prefixCls:_=s,className:q,style:ee,labelStyle:z,contentStyle:$,span:Q=1,key:te}=X;return typeof c=="string"?l.createElement(p,{key:`${b}-${te||W}`,className:q,style:ee,labelStyle:Object.assign(Object.assign({},A),z),contentStyle:Object.assign(Object.assign({},V),$),span:Q,colon:o,component:c,itemPrefixCls:_,bordered:h,label:E?k:null,content:P?ae:null,type:b}):[l.createElement(p,{key:`label-${te||W}`,className:q,style:Object.assign(Object.assign(Object.assign({},A),ee),z),span:1,colon:o,component:c[0],itemPrefixCls:_,bordered:h,label:k,type:"label"}),l.createElement(p,{key:`content-${te||W}`,className:q,style:Object.assign(Object.assign(Object.assign({},V),ee),$),span:Q*2-1,component:c[1],itemPrefixCls:_,bordered:h,content:ae,type:"content"})]})}var H=e=>{const n=l.useContext(r),{prefixCls:a,vertical:o,row:s,index:h,bordered:c}=e;return o?l.createElement(l.Fragment,null,l.createElement("tr",{key:`label-${h}`,className:`${a}-row`},v(s,e,Object.assign({component:"th",type:"label",showLabel:!0},n))),l.createElement("tr",{key:`content-${h}`,className:`${a}-row`},v(s,e,Object.assign({component:"td",type:"content",showContent:!0},n)))):l.createElement("tr",{key:h,className:`${a}-row`},v(s,e,Object.assign({component:c?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},n)))},x=t(11568),Y=t(14747),de=t(83559),le=t(83262);const oe=e=>{const{componentCls:n,labelBg:a}=e;return{[`&${n}-bordered`]:{[`> ${n}-view`]:{border:`${(0,x.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"> table":{tableLayout:"auto"},[`${n}-row`]:{borderBottom:`${(0,x.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBottom:"none"},[`> ${n}-item-label, > ${n}-item-content`]:{padding:`${(0,x.bf)(e.padding)} ${(0,x.bf)(e.paddingLG)}`,borderInlineEnd:`${(0,x.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderInlineEnd:"none"}},[`> ${n}-item-label`]:{color:e.colorTextSecondary,backgroundColor:a,"&::after":{display:"none"}}}},[`&${n}-middle`]:{[`${n}-row`]:{[`> ${n}-item-label, > ${n}-item-content`]:{padding:`${(0,x.bf)(e.paddingSM)} ${(0,x.bf)(e.paddingLG)}`}}},[`&${n}-small`]:{[`${n}-row`]:{[`> ${n}-item-label, > ${n}-item-content`]:{padding:`${(0,x.bf)(e.paddingXS)} ${(0,x.bf)(e.padding)}`}}}}}},U=e=>{const{componentCls:n,extraColor:a,itemPaddingBottom:o,itemPaddingEnd:s,colonMarginRight:h,colonMarginLeft:c,titleMarginBottom:b}=e;return{[n]:Object.assign(Object.assign(Object.assign({},(0,Y.Wf)(e)),oe(e)),{"&-rtl":{direction:"rtl"},[`${n}-header`]:{display:"flex",alignItems:"center",marginBottom:b},[`${n}-title`]:Object.assign(Object.assign({},Y.vS),{flex:"auto",color:e.titleColor,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}),[`${n}-extra`]:{marginInlineStart:"auto",color:a,fontSize:e.fontSize},[`${n}-view`]:{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed",borderCollapse:"collapse"}},[`${n}-row`]:{"> th, > td":{paddingBottom:o,paddingInlineEnd:s},"> th:last-child, > td:last-child":{paddingInlineEnd:0},"&:last-child":{borderBottom:"none","> th, > td":{paddingBottom:0}}},[`${n}-item-label`]:{color:e.colorTextTertiary,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:`${(0,x.bf)(c)} ${(0,x.bf)(h)}`},[`&${n}-item-no-colon::after`]:{content:'""'}},[`${n}-item-no-label`]:{"&::after":{margin:0,content:'""'}},[`${n}-item-content`]:{display:"table-cell",flex:1,color:e.contentColor,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"},[`${n}-item`]:{paddingBottom:0,verticalAlign:"top","&-container":{display:"flex",[`${n}-item-label`]:{display:"inline-flex",alignItems:"baseline"},[`${n}-item-content`]:{display:"inline-flex",alignItems:"baseline",minWidth:"1em"}}},"&-middle":{[`${n}-row`]:{"> th, > td":{paddingBottom:e.paddingSM}}},"&-small":{[`${n}-row`]:{"> th, > td":{paddingBottom:e.paddingXS}}}})}},re=e=>({labelBg:e.colorFillAlter,titleColor:e.colorText,titleMarginBottom:e.fontSizeSM*e.lineHeightSM,itemPaddingBottom:e.padding,itemPaddingEnd:e.padding,colonMarginRight:e.marginXS,colonMarginLeft:e.marginXXS/2,contentColor:e.colorText,extraColor:e.colorText});var me=(0,de.I$)("Descriptions",e=>{const n=(0,le.IX)(e,{});return U(n)},re),ue=function(e,n){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(e);s<o.length;s++)n.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(a[o[s]]=e[o[s]]);return a};const se=e=>{const{prefixCls:n,title:a,extra:o,column:s,colon:h=!0,bordered:c,layout:b,children:E,className:P,rootClassName:A,style:V,size:X,labelStyle:W,contentStyle:k,items:ae}=e,_=ue(e,["prefixCls","title","extra","column","colon","bordered","layout","children","className","rootClassName","style","size","labelStyle","contentStyle","items"]),{getPrefixCls:q,direction:ee,descriptions:z}=l.useContext(S.E_),$=q("descriptions",n),Q=(0,u.Z)(),te=l.useMemo(()=>{var ne;return typeof s=="number"?s:(ne=(0,j.m9)(Q,Object.assign(Object.assign({},w),s)))!==null&&ne!==void 0?ne:3},[Q,s]),be=L(Q,ae,E),fe=(0,M.Z)(X),je=y(te,be),[Oe,Ce,Ee]=me($),Pe=l.useMemo(()=>({labelStyle:W,contentStyle:k}),[W,k]);return Oe(l.createElement(r.Provider,{value:Pe},l.createElement("div",Object.assign({className:C()($,z==null?void 0:z.className,{[`${$}-${fe}`]:fe&&fe!=="default",[`${$}-bordered`]:!!c,[`${$}-rtl`]:ee==="rtl"},P,A,Ce,Ee),style:Object.assign(Object.assign({},z==null?void 0:z.style),V)},_),(a||o)&&l.createElement("div",{className:`${$}-header`},a&&l.createElement("div",{className:`${$}-title`},a),o&&l.createElement("div",{className:`${$}-extra`},o)),l.createElement("div",{className:`${$}-view`},l.createElement("table",null,l.createElement("tbody",null,je.map((ne,pe)=>l.createElement(H,{key:pe,index:pe,colon:h,prefixCls:$,vertical:b==="vertical",bordered:c,row:ne}))))))))};se.Item=d;var J=se},85576:function(m,i,t){t.d(i,{Z:function(){return G}});var l=t(56080),g=t(38657),C=t(56745),j=t(67294),S=t(93967),M=t.n(S),u=t(40974),O=t(8745),w=t(53124),B=t(35792),r=t(32409),I=t(4941),T=t(71194),N=function(d,f){var Z={};for(var p in d)Object.prototype.hasOwnProperty.call(d,p)&&f.indexOf(p)<0&&(Z[p]=d[p]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,p=Object.getOwnPropertySymbols(d);v<p.length;v++)f.indexOf(p[v])<0&&Object.prototype.propertyIsEnumerable.call(d,p[v])&&(Z[p[v]]=d[p[v]]);return Z};const L=d=>{const{prefixCls:f,className:Z,closeIcon:p,closable:v,type:D,title:H,children:x,footer:Y}=d,de=N(d,["prefixCls","className","closeIcon","closable","type","title","children","footer"]),{getPrefixCls:le}=j.useContext(w.E_),oe=le(),U=f||le("modal"),re=(0,B.Z)(oe),[me,ue,se]=(0,T.ZP)(U,re),J=`${U}-confirm`;let e={};return D?e={closable:v!=null?v:!1,title:"",footer:"",children:j.createElement(r.O,Object.assign({},d,{prefixCls:U,confirmPrefixCls:J,rootPrefixCls:oe,content:x}))}:e={closable:v!=null?v:!0,title:H,footer:Y!==null&&j.createElement(I.$,Object.assign({},d)),children:x},me(j.createElement(u.s,Object.assign({prefixCls:U,className:M()(ue,`${U}-pure-panel`,D&&J,D&&`${J}-${D}`,Z,se,re)},de,{closeIcon:(0,I.b)(U,p),closable:v},e)))};var R=(0,O.i)(L),K=t(94423);function F(d){return(0,l.ZP)((0,l.uW)(d))}const y=C.Z;y.useModal=K.Z,y.info=function(f){return(0,l.ZP)((0,l.cw)(f))},y.success=function(f){return(0,l.ZP)((0,l.vq)(f))},y.error=function(f){return(0,l.ZP)((0,l.AQ)(f))},y.warning=F,y.warn=F,y.confirm=function(f){return(0,l.ZP)((0,l.Au)(f))},y.destroyAll=function(){for(;g.Z.length;){const f=g.Z.pop();f&&f()}},y.config=l.ai,y._InternalPanelDoNotUseOrYouWillBeFired=R;var G=y},33733:function(m,i,t){t.d(i,{Z:function(){return C}});var l=t(67294);var g={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};const C=(j,S,M,u)=>{const O=(0,l.forwardRef)((K,R)=>{var F=K,{color:w="currentColor",size:B=24,stroke:r=2,title:I,className:T,children:N}=F,L=xe(F,["color","size","stroke","title","className","children"]);return(0,l.createElement)("svg",ce(ce(ye(ce({ref:R},g[j]),{width:B,height:B,className:["tabler-icon",`tabler-icon-${S}`,T].join(" ")}),j==="filled"?{fill:w}:{strokeWidth:r,stroke:w}),L),[I&&(0,l.createElement)("title",{key:"svg-title"},I),...u.map(([y,G])=>(0,l.createElement)(y,G)),...Array.isArray(N)?N:[N]])});return O.displayName=`${M}`,O}},50545:function(m,i,t){t.d(i,{Z:function(){return g}});var l=t(33733);var g=(0,l.Z)("outline","archive","IconArchive",[["path",{d:"M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10",key:"svg-1"}],["path",{d:"M10 12l4 0",key:"svg-2"}]])},97975:function(m,i,t){t.d(i,{Z:function(){return g}});var l=t(33733);var g=(0,l.Z)("outline","plus","IconPlus",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M5 12l14 0",key:"svg-1"}]])},78298:function(m,i,t){t.d(i,{Z:function(){return g}});var l=t(33733);var g=(0,l.Z)("outline","refresh","IconRefresh",[["path",{d:"M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4",key:"svg-0"}],["path",{d:"M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4",key:"svg-1"}]])},13129:function(m,i,t){t.d(i,{Z:function(){return g}});var l=t(33733);var g=(0,l.Z)("outline","search","IconSearch",[["path",{d:"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",key:"svg-0"}],["path",{d:"M21 21l-6 -6",key:"svg-1"}]])},15741:function(m,i,t){t.d(i,{Z:function(){return g}});var l=t(33733);var g=(0,l.Z)("outline","settings","IconSettings",[["path",{d:"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z",key:"svg-0"}],["path",{d:"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-1"}]])},70278:function(m,i,t){t.d(i,{Z:function(){return g}});var l=t(33733);var g=(0,l.Z)("outline","trash","IconTrash",[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]])}}]);
}());