"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5778],{69760:function(H,P,r){r.d(P,{Z:function(){return Q},w:function(){return v}});var l=r(67294),B=r(97937),m=r(64217);function v(y){if(y)return{closable:y.closable,closeIcon:y.closeIcon}}function j(y){const{closable:f,closeIcon:d}=y||{};return l.useMemo(()=>{if(!f&&(f===!1||d===!1||d===null))return!1;if(f===void 0&&d===void 0)return null;let c={closeIcon:typeof d!="boolean"&&d!==null?d:void 0};return f&&typeof f=="object"&&(c=Object.assign(Object.assign({},c),f)),c},[f,d])}function I(){const y={};for(var f=arguments.length,d=new Array(f),c=0;c<f;c++)d[c]=arguments[c];return d.forEach(C=>{C&&Object.keys(C).forEach(M=>{C[M]!==void 0&&(y[M]=C[M])})}),y}const X={};function Q(y,f){let d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:X;const c=j(y),C=j(f),M=typeof c!="boolean"?!!(c!=null&&c.disabled):!1,E=l.useMemo(()=>Object.assign({closeIcon:l.createElement(B.Z,null)},d),[d]),N=l.useMemo(()=>c===!1?!1:c?I(E,C,c):C===!1?!1:C?I(E,C):E.closable?E:!1,[c,C,E]);return l.useMemo(()=>{if(N===!1)return[!1,null,M];const{closeIconRender:Z}=E,{closeIcon:G}=N;let h=G;if(h!=null){Z&&(h=Z(G));const _=(0,m.Z)(N,!0);Object.keys(_).length&&(h=l.isValidElement(h)?l.cloneElement(h,_):l.createElement("span",Object.assign({},_),h))}return[!0,h,M]},[N,E])}},26412:function(H,P,r){r.d(P,{Z:function(){return de}});var l=r(67294),B=r(93967),m=r.n(B),v=r(74443),j=r(53124),I=r(98675),X=r(25378),y={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1},d=l.createContext({}),c=r(50344),C=function(e,t){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(s[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(s[n[o]]=e[n[o]]);return s};const M=e=>(0,c.Z)(e).map(t=>Object.assign(Object.assign({},t==null?void 0:t.props),{key:t.key}));function E(e,t,s){const n=l.useMemo(()=>t||M(s),[t,s]);return l.useMemo(()=>n.map(a=>{var{span:i}=a,b=C(a,["span"]);return Object.assign(Object.assign({},b),{span:typeof i=="number"?i:(0,v.m9)(e,i)})}),[n,e])}function N(e,t,s){let n=e,o=!1;return(s===void 0||s>t)&&(n=Object.assign(Object.assign({},e),{span:t}),o=s!==void 0),[n,o]}function Z(e,t){const s=[];let n=[],o=t,a=!1;return e.filter(i=>i).forEach((i,b)=>{const w=i==null?void 0:i.span,p=w||1;if(b===e.length-1){const[u,O]=N(i,o,w);a=a||O,n.push(u),s.push(n);return}if(p<o)o-=p,n.push(i);else{const[u,O]=N(i,o,p);a=a||O,n.push(u),s.push(n),o=t,n=[]}}),[s,a]}var h=(e,t)=>{const[s,n]=(0,l.useMemo)(()=>Z(t,e),[t,e]);return s},te=e=>{let{children:t}=e;return t};function Y(e){return e!=null}var K=e=>{const{itemPrefixCls:t,component:s,span:n,className:o,style:a,labelStyle:i,contentStyle:b,bordered:w,label:p,content:u,colon:O,type:D}=e,S=s;return w?l.createElement(S,{className:m()({[`${t}-item-label`]:D==="label",[`${t}-item-content`]:D==="content"},o),style:a,colSpan:n},Y(p)&&l.createElement("span",{style:i},p),Y(u)&&l.createElement("span",{style:b},u)):l.createElement(S,{className:m()(`${t}-item`,o),style:a,colSpan:n},l.createElement("div",{className:`${t}-item-container`},(p||p===0)&&l.createElement("span",{className:m()(`${t}-item-label`,{[`${t}-item-no-colon`]:!O}),style:i},p),(u||u===0)&&l.createElement("span",{className:m()(`${t}-item-content`),style:b},u)))};function V(e,t,s){let{colon:n,prefixCls:o,bordered:a}=t,{component:i,type:b,showLabel:w,showContent:p,labelStyle:u,contentStyle:O}=s;return e.map((D,S)=>{let{label:R,children:F,prefixCls:T=o,className:z,style:A,labelStyle:x,contentStyle:g,span:L=1,key:W}=D;return typeof i=="string"?l.createElement(K,{key:`${b}-${W||S}`,className:z,style:A,labelStyle:Object.assign(Object.assign({},u),x),contentStyle:Object.assign(Object.assign({},O),g),span:L,colon:n,component:i,itemPrefixCls:T,bordered:a,label:w?R:null,content:p?F:null,type:b}):[l.createElement(K,{key:`label-${W||S}`,className:z,style:Object.assign(Object.assign(Object.assign({},u),A),x),span:1,colon:n,component:i[0],itemPrefixCls:T,bordered:a,label:R,type:"label"}),l.createElement(K,{key:`content-${W||S}`,className:z,style:Object.assign(Object.assign(Object.assign({},O),A),g),span:L*2-1,component:i[1],itemPrefixCls:T,bordered:a,content:F,type:"content"})]})}var ne=e=>{const t=l.useContext(d),{prefixCls:s,vertical:n,row:o,index:a,bordered:i}=e;return n?l.createElement(l.Fragment,null,l.createElement("tr",{key:`label-${a}`,className:`${s}-row`},V(o,e,Object.assign({component:"th",type:"label",showLabel:!0},t))),l.createElement("tr",{key:`content-${a}`,className:`${s}-row`},V(o,e,Object.assign({component:"td",type:"content",showContent:!0},t)))):l.createElement("tr",{key:a,className:`${s}-row`},V(o,e,Object.assign({component:i?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))},$=r(11568),q=r(14747),le=r(83559),oe=r(83262);const se=e=>{const{componentCls:t,labelBg:s}=e;return{[`&${t}-bordered`]:{[`> ${t}-view`]:{border:`${(0,$.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"> table":{tableLayout:"auto"},[`${t}-row`]:{borderBottom:`${(0,$.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBottom:"none"},[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${(0,$.bf)(e.padding)} ${(0,$.bf)(e.paddingLG)}`,borderInlineEnd:`${(0,$.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderInlineEnd:"none"}},[`> ${t}-item-label`]:{color:e.colorTextSecondary,backgroundColor:s,"&::after":{display:"none"}}}},[`&${t}-middle`]:{[`${t}-row`]:{[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${(0,$.bf)(e.paddingSM)} ${(0,$.bf)(e.paddingLG)}`}}},[`&${t}-small`]:{[`${t}-row`]:{[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${(0,$.bf)(e.paddingXS)} ${(0,$.bf)(e.padding)}`}}}}}},ie=e=>{const{componentCls:t,extraColor:s,itemPaddingBottom:n,itemPaddingEnd:o,colonMarginRight:a,colonMarginLeft:i,titleMarginBottom:b}=e;return{[t]:Object.assign(Object.assign(Object.assign({},(0,q.Wf)(e)),se(e)),{"&-rtl":{direction:"rtl"},[`${t}-header`]:{display:"flex",alignItems:"center",marginBottom:b},[`${t}-title`]:Object.assign(Object.assign({},q.vS),{flex:"auto",color:e.titleColor,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}),[`${t}-extra`]:{marginInlineStart:"auto",color:s,fontSize:e.fontSize},[`${t}-view`]:{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed",borderCollapse:"collapse"}},[`${t}-row`]:{"> th, > td":{paddingBottom:n,paddingInlineEnd:o},"> th:last-child, > td:last-child":{paddingInlineEnd:0},"&:last-child":{borderBottom:"none","> th, > td":{paddingBottom:0}}},[`${t}-item-label`]:{color:e.colorTextTertiary,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:`${(0,$.bf)(i)} ${(0,$.bf)(a)}`},[`&${t}-item-no-colon::after`]:{content:'""'}},[`${t}-item-no-label`]:{"&::after":{margin:0,content:'""'}},[`${t}-item-content`]:{display:"table-cell",flex:1,color:e.contentColor,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"},[`${t}-item`]:{paddingBottom:0,verticalAlign:"top","&-container":{display:"flex",[`${t}-item-label`]:{display:"inline-flex",alignItems:"baseline"},[`${t}-item-content`]:{display:"inline-flex",alignItems:"baseline",minWidth:"1em"}}},"&-middle":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingSM}}},"&-small":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingXS}}}})}},re=e=>({labelBg:e.colorFillAlter,titleColor:e.colorText,titleMarginBottom:e.fontSizeSM*e.lineHeightSM,itemPaddingBottom:e.padding,itemPaddingEnd:e.padding,colonMarginRight:e.marginXS,colonMarginLeft:e.marginXXS/2,contentColor:e.colorText,extraColor:e.colorText});var ae=(0,le.I$)("Descriptions",e=>{const t=(0,oe.IX)(e,{});return ie(t)},re),ce=function(e,t){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(s[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(s[n[o]]=e[n[o]]);return s};const k=e=>{const{prefixCls:t,title:s,extra:n,column:o,colon:a=!0,bordered:i,layout:b,children:w,className:p,rootClassName:u,style:O,size:D,labelStyle:S,contentStyle:R,items:F}=e,T=ce(e,["prefixCls","title","extra","column","colon","bordered","layout","children","className","rootClassName","style","size","labelStyle","contentStyle","items"]),{getPrefixCls:z,direction:A,descriptions:x}=l.useContext(j.E_),g=z("descriptions",t),L=(0,X.Z)(),W=l.useMemo(()=>{var U;return typeof o=="number"?o:(U=(0,v.m9)(L,Object.assign(Object.assign({},y),o)))!==null&&U!==void 0?U:3},[L,o]),me=E(L,F,w),J=(0,I.Z)(D),ue=h(W,me),[fe,be,pe]=ae(g),ge=l.useMemo(()=>({labelStyle:S,contentStyle:R}),[S,R]);return fe(l.createElement(d.Provider,{value:ge},l.createElement("div",Object.assign({className:m()(g,x==null?void 0:x.className,{[`${g}-${J}`]:J&&J!=="default",[`${g}-bordered`]:!!i,[`${g}-rtl`]:A==="rtl"},p,u,be,pe),style:Object.assign(Object.assign({},x==null?void 0:x.style),O)},T),(s||n)&&l.createElement("div",{className:`${g}-header`},s&&l.createElement("div",{className:`${g}-title`},s),n&&l.createElement("div",{className:`${g}-extra`},n)),l.createElement("div",{className:`${g}-view`},l.createElement("table",null,l.createElement("tbody",null,ue.map((U,ee)=>l.createElement(ne,{key:ee,index:ee,colon:a,prefixCls:g,vertical:b==="vertical",bordered:i,row:U}))))))))};k.Item=te;var de=k},58811:function(H,P){function r(l,B){for(var m,v=-1,j=l.length;++v<j;){var I=B(l[v]);I!==void 0&&(m=m===void 0?I:m+I)}return m}P.Z=r},66090:function(H,P,r){var l=r(76658),B=r(58811);function m(v,j){return v&&v.length?(0,B.Z)(v,(0,l.Z)(j,2)):0}P.Z=m}}]);