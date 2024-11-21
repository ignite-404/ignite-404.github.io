"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3689],{26412:function(I,b,r){r.d(b,{Z:function(){return se}});var l=r(67294),g=r(93967),x=r.n(g),R=r(74443),A=r(53124),Z=r(98675),U=r(25378),F={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1},T=l.createContext({}),H=r(50344),X=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]]);return a};const G=e=>(0,H.Z)(e).map(t=>Object.assign(Object.assign({},t==null?void 0:t.props),{key:t.key}));function K(e,t,a){const n=l.useMemo(()=>t||G(a),[t,a]);return l.useMemo(()=>n.map(i=>{var{span:s}=i,c=X(i,["span"]);return s==="filled"?Object.assign(Object.assign({},c),{filled:!0}):Object.assign(Object.assign({},c),{span:typeof s=="number"?s:(0,R.m9)(e,s)})}),[n,e])}var V=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]]);return a};function J(e,t){let a=[],n=[],o=!1,i=0;return e.filter(s=>s).forEach(s=>{const{filled:c}=s,d=V(s,["filled"]);if(c){n.push(d),a.push(n),n=[],i=0;return}const m=t-i;i+=s.span||1,i>=t?(i>t?(o=!0,n.push(Object.assign(Object.assign({},d),{span:m}))):n.push(d),a.push(n),n=[],i=0):n.push(d)}),n.length>0&&a.push(n),a=a.map(s=>{const c=s.reduce((d,m)=>d+(m.span||1),0);if(c<t){const d=s[s.length-1];return d.span=t-c+1,s}return s}),[a,o]}var Q=(e,t)=>{const[a,n]=(0,l.useMemo)(()=>J(t,e),[t,e]);return a},Y=e=>{let{children:t}=e;return t};function _(e){return e!=null}var N=e=>{const{itemPrefixCls:t,component:a,span:n,className:o,style:i,labelStyle:s,contentStyle:c,bordered:d,label:m,content:f,colon:h,type:$}=e,y=a;return d?l.createElement(y,{className:x()({[`${t}-item-label`]:$==="label",[`${t}-item-content`]:$==="content"},o),style:i,colSpan:n},_(m)&&l.createElement("span",{style:s},m),_(f)&&l.createElement("span",{style:c},f)):l.createElement(y,{className:x()(`${t}-item`,o),style:i,colSpan:n},l.createElement("div",{className:`${t}-item-container`},(m||m===0)&&l.createElement("span",{className:x()(`${t}-item-label`,{[`${t}-item-no-colon`]:!h}),style:s},m),(f||f===0)&&l.createElement("span",{className:x()(`${t}-item-content`),style:c},f)))};function B(e,t,a){let{colon:n,prefixCls:o,bordered:i}=t,{component:s,type:c,showLabel:d,showContent:m,labelStyle:f,contentStyle:h}=a;return e.map(($,y)=>{let{label:C,children:P,prefixCls:S=o,className:E,style:j,labelStyle:v,contentStyle:p,span:O=1,key:M}=$;return typeof s=="string"?l.createElement(N,{key:`${c}-${M||y}`,className:E,style:j,labelStyle:Object.assign(Object.assign({},f),v),contentStyle:Object.assign(Object.assign({},h),p),span:O,colon:n,component:s,itemPrefixCls:S,bordered:i,label:d?C:null,content:m?P:null,type:c}):[l.createElement(N,{key:`label-${M||y}`,className:E,style:Object.assign(Object.assign(Object.assign({},f),j),v),span:1,colon:n,component:s[0],itemPrefixCls:S,bordered:i,label:C,type:"label"}),l.createElement(N,{key:`content-${M||y}`,className:E,style:Object.assign(Object.assign(Object.assign({},h),j),p),span:O*2-1,component:s[1],itemPrefixCls:S,bordered:i,content:P,type:"content"})]})}var k=e=>{const t=l.useContext(T),{prefixCls:a,vertical:n,row:o,index:i,bordered:s}=e;return n?l.createElement(l.Fragment,null,l.createElement("tr",{key:`label-${i}`,className:`${a}-row`},B(o,e,Object.assign({component:"th",type:"label",showLabel:!0},t))),l.createElement("tr",{key:`content-${i}`,className:`${a}-row`},B(o,e,Object.assign({component:"td",type:"content",showContent:!0},t)))):l.createElement("tr",{key:i,className:`${a}-row`},B(o,e,Object.assign({component:s?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))},u=r(11568),D=r(14747),q=r(83559),ee=r(83262);const te=e=>{const{componentCls:t,labelBg:a}=e;return{[`&${t}-bordered`]:{[`> ${t}-view`]:{border:`${(0,u.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"> table":{tableLayout:"auto"},[`${t}-row`]:{borderBottom:`${(0,u.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBottom:"none"},[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${(0,u.bf)(e.padding)} ${(0,u.bf)(e.paddingLG)}`,borderInlineEnd:`${(0,u.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderInlineEnd:"none"}},[`> ${t}-item-label`]:{color:e.colorTextSecondary,backgroundColor:a,"&::after":{display:"none"}}}},[`&${t}-middle`]:{[`${t}-row`]:{[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${(0,u.bf)(e.paddingSM)} ${(0,u.bf)(e.paddingLG)}`}}},[`&${t}-small`]:{[`${t}-row`]:{[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${(0,u.bf)(e.paddingXS)} ${(0,u.bf)(e.padding)}`}}}}}},ne=e=>{const{componentCls:t,extraColor:a,itemPaddingBottom:n,itemPaddingEnd:o,colonMarginRight:i,colonMarginLeft:s,titleMarginBottom:c}=e;return{[t]:Object.assign(Object.assign(Object.assign({},(0,D.Wf)(e)),te(e)),{"&-rtl":{direction:"rtl"},[`${t}-header`]:{display:"flex",alignItems:"center",marginBottom:c},[`${t}-title`]:Object.assign(Object.assign({},D.vS),{flex:"auto",color:e.titleColor,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}),[`${t}-extra`]:{marginInlineStart:"auto",color:a,fontSize:e.fontSize},[`${t}-view`]:{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed",borderCollapse:"collapse"}},[`${t}-row`]:{"> th, > td":{paddingBottom:n,paddingInlineEnd:o},"> th:last-child, > td:last-child":{paddingInlineEnd:0},"&:last-child":{borderBottom:"none","> th, > td":{paddingBottom:0}}},[`${t}-item-label`]:{color:e.colorTextTertiary,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:`${(0,u.bf)(s)} ${(0,u.bf)(i)}`},[`&${t}-item-no-colon::after`]:{content:'""'}},[`${t}-item-no-label`]:{"&::after":{margin:0,content:'""'}},[`${t}-item-content`]:{display:"table-cell",flex:1,color:e.contentColor,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"},[`${t}-item`]:{paddingBottom:0,verticalAlign:"top","&-container":{display:"flex",[`${t}-item-label`]:{display:"inline-flex",alignItems:"baseline"},[`${t}-item-content`]:{display:"inline-flex",alignItems:"baseline",minWidth:"1em"}}},"&-middle":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingSM}}},"&-small":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingXS}}}})}},le=e=>({labelBg:e.colorFillAlter,titleColor:e.colorText,titleMarginBottom:e.fontSizeSM*e.lineHeightSM,itemPaddingBottom:e.padding,itemPaddingEnd:e.padding,colonMarginRight:e.marginXS,colonMarginLeft:e.marginXXS/2,contentColor:e.colorText,extraColor:e.colorText});var oe=(0,q.I$)("Descriptions",e=>{const t=(0,ee.IX)(e,{});return ne(t)},le),ae=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]]);return a};const z=e=>{const{prefixCls:t,title:a,extra:n,column:o,colon:i=!0,bordered:s,layout:c,children:d,className:m,rootClassName:f,style:h,size:$,labelStyle:y,contentStyle:C,items:P}=e,S=ae(e,["prefixCls","title","extra","column","colon","bordered","layout","children","className","rootClassName","style","size","labelStyle","contentStyle","items"]),{getPrefixCls:E,direction:j,descriptions:v}=l.useContext(A.E_),p=E("descriptions",t),O=(0,U.Z)(),M=l.useMemo(()=>{var w;return typeof o=="number"?o:(w=(0,R.m9)(O,Object.assign(Object.assign({},F),o)))!==null&&w!==void 0?w:3},[O,o]),re=K(O,P,d),L=(0,Z.Z)($),ie=Q(M,re),[ce,de,me]=oe(p),pe=l.useMemo(()=>({labelStyle:y,contentStyle:C}),[y,C]);return ce(l.createElement(T.Provider,{value:pe},l.createElement("div",Object.assign({className:x()(p,v==null?void 0:v.className,{[`${p}-${L}`]:L&&L!=="default",[`${p}-bordered`]:!!s,[`${p}-rtl`]:j==="rtl"},m,f,de,me),style:Object.assign(Object.assign({},v==null?void 0:v.style),h)},S),(a||n)&&l.createElement("div",{className:`${p}-header`},a&&l.createElement("div",{className:`${p}-title`},a),n&&l.createElement("div",{className:`${p}-extra`},n)),l.createElement("div",{className:`${p}-view`},l.createElement("table",null,l.createElement("tbody",null,ie.map((w,W)=>l.createElement(k,{key:W,index:W,colon:i,prefixCls:p,vertical:c==="vertical",bordered:s,row:w}))))))))};z.Item=Y;var se=z},98185:function(I,b,r){r.d(b,{Z:function(){return g}});var l=r(33733);var g=(0,l.Z)("outline","file-export","IconFileExport",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M11.5 21h-4.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v5m-5 6h7m-3 -3l3 3l-3 3",key:"svg-1"}]])},69112:function(I,b,r){r.d(b,{Z:function(){return g}});var l=r(33733);var g=(0,l.Z)("outline","file-upload","IconFileUpload",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M12 11v6",key:"svg-2"}],["path",{d:"M9.5 13.5l2.5 -2.5l2.5 2.5",key:"svg-3"}]])},97975:function(I,b,r){r.d(b,{Z:function(){return g}});var l=r(33733);var g=(0,l.Z)("outline","plus","IconPlus",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M5 12l14 0",key:"svg-1"}]])},70278:function(I,b,r){r.d(b,{Z:function(){return g}});var l=r(33733);var g=(0,l.Z)("outline","trash","IconTrash",[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]])}}]);