!(function(){"use strict";var Ee=Object.defineProperty,Se=Object.defineProperties;var we=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var le=(c,r,o)=>r in c?Ee(c,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):c[r]=o,A=(c,r)=>{for(var o in r||(r={}))oe.call(r,o)&&le(c,o,r[o]);if(T)for(var o of T(r))ae.call(r,o)&&le(c,o,r[o]);return c},se=(c,r)=>Se(c,we(r));var re=(c,r)=>{var o={};for(var n in c)oe.call(c,n)&&r.indexOf(n)<0&&(o[n]=c[n]);if(c!=null&&T)for(var n of T(c))r.indexOf(n)<0&&ae.call(c,n)&&(o[n]=c[n]);return o};(self.webpackChunk=self.webpackChunk||[]).push([[4284],{26412:function(c,r,o){o.d(r,{Z:function(){return ye}});var n=o(67294),p=o(93967),C=o.n(p),E=o(74443),z=o(53124),W=o(98675),Z=o(25378),N={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1},R=n.createContext({}),B=o(50344),X=function(e,t){var s={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(s[l]=e[l]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,l=Object.getOwnPropertySymbols(e);a<l.length;a++)t.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(s[l[a]]=e[l[a]]);return s};const S=e=>(0,B.Z)(e).map(t=>Object.assign(Object.assign({},t==null?void 0:t.props),{key:t.key}));function F(e,t,s){const l=n.useMemo(()=>t||S(s),[t,s]);return n.useMemo(()=>l.map(d=>{var{span:i}=d,u=X(d,["span"]);return Object.assign(Object.assign({},u),{span:typeof i=="number"?i:(0,E.m9)(e,i)})}),[l,e])}function L(e,t,s){let l=e,a=!1;return(s===void 0||s>t)&&(l=Object.assign(Object.assign({},e),{span:t}),a=s!==void 0),[l,a]}function Y(e,t){const s=[];let l=[],a=t,d=!1;return e.filter(i=>i).forEach((i,u)=>{const $=i==null?void 0:i.span,f=$||1;if(u===e.length-1){const[m,y]=L(i,a,$);d=d||y,l.push(m),s.push(l);return}if(f<a)a-=f,l.push(i);else{const[m,y]=L(i,a,f);d=d||y,l.push(m),s.push(l),a=t,l=[]}}),[s,d]}var K=(e,t)=>{const[s,l]=(0,n.useMemo)(()=>Y(t,e),[t,e]);return s},ie=e=>{let{children:t}=e;return t};function q(e){return e!=null}var V=e=>{const{itemPrefixCls:t,component:s,span:l,className:a,style:d,labelStyle:i,contentStyle:u,bordered:$,label:f,content:m,colon:y,type:O}=e,v=s;return $?n.createElement(v,{className:C()({[`${t}-item-label`]:O==="label",[`${t}-item-content`]:O==="content"},a),style:d,colSpan:l},q(f)&&n.createElement("span",{style:i},f),q(m)&&n.createElement("span",{style:u},m)):n.createElement(v,{className:C()(`${t}-item`,a),style:d,colSpan:l},n.createElement("div",{className:`${t}-item-container`},(f||f===0)&&n.createElement("span",{className:C()(`${t}-item-label`,{[`${t}-item-no-colon`]:!y}),style:i},f),(m||m===0)&&n.createElement("span",{className:C()(`${t}-item-content`),style:u},m)))};function J(e,t,s){let{colon:l,prefixCls:a,bordered:d}=t,{component:i,type:u,showLabel:$,showContent:f,labelStyle:m,contentStyle:y}=s;return e.map((O,v)=>{let{label:w,children:D,prefixCls:j=a,className:M,style:I,labelStyle:h,contentStyle:g,span:x=1,key:P}=O;return typeof i=="string"?n.createElement(V,{key:`${u}-${P||v}`,className:M,style:I,labelStyle:Object.assign(Object.assign({},m),h),contentStyle:Object.assign(Object.assign({},y),g),span:x,colon:l,component:i,itemPrefixCls:j,bordered:d,label:$?w:null,content:f?D:null,type:u}):[n.createElement(V,{key:`label-${P||v}`,className:M,style:Object.assign(Object.assign(Object.assign({},m),I),h),span:1,colon:l,component:i[0],itemPrefixCls:j,bordered:d,label:w,type:"label"}),n.createElement(V,{key:`content-${P||v}`,className:M,style:Object.assign(Object.assign(Object.assign({},y),I),g),span:x*2-1,component:i[1],itemPrefixCls:j,bordered:d,content:D,type:"content"})]})}var ce=e=>{const t=n.useContext(R),{prefixCls:s,vertical:l,row:a,index:d,bordered:i}=e;return l?n.createElement(n.Fragment,null,n.createElement("tr",{key:`label-${d}`,className:`${s}-row`},J(a,e,Object.assign({component:"th",type:"label",showLabel:!0},t))),n.createElement("tr",{key:`content-${d}`,className:`${s}-row`},J(a,e,Object.assign({component:"td",type:"content",showContent:!0},t)))):n.createElement("tr",{key:d,className:`${s}-row`},J(a,e,Object.assign({component:i?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))},b=o(11568),ee=o(14747),de=o(83559),me=o(83262);const pe=e=>{const{componentCls:t,labelBg:s}=e;return{[`&${t}-bordered`]:{[`> ${t}-view`]:{border:`${(0,b.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"> table":{tableLayout:"auto"},[`${t}-row`]:{borderBottom:`${(0,b.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBottom:"none"},[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${(0,b.bf)(e.padding)} ${(0,b.bf)(e.paddingLG)}`,borderInlineEnd:`${(0,b.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderInlineEnd:"none"}},[`> ${t}-item-label`]:{color:e.colorTextSecondary,backgroundColor:s,"&::after":{display:"none"}}}},[`&${t}-middle`]:{[`${t}-row`]:{[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${(0,b.bf)(e.paddingSM)} ${(0,b.bf)(e.paddingLG)}`}}},[`&${t}-small`]:{[`${t}-row`]:{[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${(0,b.bf)(e.paddingXS)} ${(0,b.bf)(e.padding)}`}}}}}},ue=e=>{const{componentCls:t,extraColor:s,itemPaddingBottom:l,itemPaddingEnd:a,colonMarginRight:d,colonMarginLeft:i,titleMarginBottom:u}=e;return{[t]:Object.assign(Object.assign(Object.assign({},(0,ee.Wf)(e)),pe(e)),{"&-rtl":{direction:"rtl"},[`${t}-header`]:{display:"flex",alignItems:"center",marginBottom:u},[`${t}-title`]:Object.assign(Object.assign({},ee.vS),{flex:"auto",color:e.titleColor,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}),[`${t}-extra`]:{marginInlineStart:"auto",color:s,fontSize:e.fontSize},[`${t}-view`]:{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed",borderCollapse:"collapse"}},[`${t}-row`]:{"> th, > td":{paddingBottom:l,paddingInlineEnd:a},"> th:last-child, > td:last-child":{paddingInlineEnd:0},"&:last-child":{borderBottom:"none","> th, > td":{paddingBottom:0}}},[`${t}-item-label`]:{color:e.colorTextTertiary,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:`${(0,b.bf)(i)} ${(0,b.bf)(d)}`},[`&${t}-item-no-colon::after`]:{content:'""'}},[`${t}-item-no-label`]:{"&::after":{margin:0,content:'""'}},[`${t}-item-content`]:{display:"table-cell",flex:1,color:e.contentColor,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"},[`${t}-item`]:{paddingBottom:0,verticalAlign:"top","&-container":{display:"flex",[`${t}-item-label`]:{display:"inline-flex",alignItems:"baseline"},[`${t}-item-content`]:{display:"inline-flex",alignItems:"baseline",minWidth:"1em"}}},"&-middle":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingSM}}},"&-small":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingXS}}}})}},fe=e=>({labelBg:e.colorFillAlter,titleColor:e.colorText,titleMarginBottom:e.fontSizeSM*e.lineHeightSM,itemPaddingBottom:e.padding,itemPaddingEnd:e.padding,colonMarginRight:e.marginXS,colonMarginLeft:e.marginXXS/2,contentColor:e.colorText,extraColor:e.colorText});var ge=(0,de.I$)("Descriptions",e=>{const t=(0,me.IX)(e,{});return ue(t)},fe),be=function(e,t){var s={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(s[l]=e[l]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,l=Object.getOwnPropertySymbols(e);a<l.length;a++)t.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(s[l[a]]=e[l[a]]);return s};const te=e=>{const{prefixCls:t,title:s,extra:l,column:a,colon:d=!0,bordered:i,layout:u,children:$,className:f,rootClassName:m,style:y,size:O,labelStyle:v,contentStyle:w,items:D}=e,j=be(e,["prefixCls","title","extra","column","colon","bordered","layout","children","className","rootClassName","style","size","labelStyle","contentStyle","items"]),{getPrefixCls:M,direction:I,descriptions:h}=n.useContext(z.E_),g=M("descriptions",t),x=(0,Z.Z)(),P=n.useMemo(()=>{var _;return typeof a=="number"?a:(_=(0,E.m9)(x,Object.assign(Object.assign({},N),a)))!==null&&_!==void 0?_:3},[x,a]),ve=F(x,D,$),Q=(0,W.Z)(O),he=K(P,ve),[$e,Ce,Oe]=ge(g),xe=n.useMemo(()=>({labelStyle:v,contentStyle:w}),[v,w]);return $e(n.createElement(R.Provider,{value:xe},n.createElement("div",Object.assign({className:C()(g,h==null?void 0:h.className,{[`${g}-${Q}`]:Q&&Q!=="default",[`${g}-bordered`]:!!i,[`${g}-rtl`]:I==="rtl"},f,m,Ce,Oe),style:Object.assign(Object.assign({},h==null?void 0:h.style),y)},j),(s||l)&&n.createElement("div",{className:`${g}-header`},s&&n.createElement("div",{className:`${g}-title`},s),l&&n.createElement("div",{className:`${g}-extra`},l)),n.createElement("div",{className:`${g}-view`},n.createElement("table",null,n.createElement("tbody",null,he.map((_,ne)=>n.createElement(ce,{key:ne,index:ne,colon:d,prefixCls:g,vertical:u==="vertical",bordered:i,row:_}))))))))};te.Item=ie;var ye=te},33733:function(c,r,o){o.d(r,{Z:function(){return C}});var n=o(67294);var p={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};const C=(E,z,W,Z)=>{const U=(0,n.forwardRef)((Y,L)=>{var G=Y,{color:N="currentColor",size:H=24,stroke:R=2,title:B,className:X,children:S}=G,F=re(G,["color","size","stroke","title","className","children"]);return(0,n.createElement)("svg",A(A(se(A({ref:L},p[E]),{width:H,height:H,className:["tabler-icon",`tabler-icon-${z}`,X].join(" ")}),E==="filled"?{fill:N}:{strokeWidth:R,stroke:N}),F),[B&&(0,n.createElement)("title",{key:"svg-title"},B),...Z.map(([K,k])=>(0,n.createElement)(K,k)),...Array.isArray(S)?S:[S]])});return U.displayName=`${W}`,U}},50545:function(c,r,o){o.d(r,{Z:function(){return p}});var n=o(33733);var p=(0,n.Z)("outline","archive","IconArchive",[["path",{d:"M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10",key:"svg-1"}],["path",{d:"M10 12l4 0",key:"svg-2"}]])},75549:function(c,r,o){o.d(r,{Z:function(){return p}});var n=o(33733);var p=(0,n.Z)("outline","edit","IconEdit",[["path",{d:"M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1",key:"svg-0"}],["path",{d:"M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z",key:"svg-1"}],["path",{d:"M16 5l3 3",key:"svg-2"}]])},97975:function(c,r,o){o.d(r,{Z:function(){return p}});var n=o(33733);var p=(0,n.Z)("outline","plus","IconPlus",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M5 12l14 0",key:"svg-1"}]])},78298:function(c,r,o){o.d(r,{Z:function(){return p}});var n=o(33733);var p=(0,n.Z)("outline","refresh","IconRefresh",[["path",{d:"M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4",key:"svg-0"}],["path",{d:"M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4",key:"svg-1"}]])},70278:function(c,r,o){o.d(r,{Z:function(){return p}});var n=o(33733);var p=(0,n.Z)("outline","trash","IconTrash",[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]])}}]);
}());