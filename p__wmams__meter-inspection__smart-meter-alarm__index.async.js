"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6093],{3652:function(te,D,a){a.r(D),a.d(D,{default:function(){return K}});var i=a(5574),F=a.n(i),x=a(78957),N=a(4393),A=a(80799),O=a(46629),W=a(26412),H=a(34041),G=a(65233),Q=a(96864),p=a(14726),l=a(85893),U=function(){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(N.Z,{title:"Search",children:(0,l.jsx)(W.Z,{column:2,bordered:!0,items:[{label:"Region",children:(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(H.Z,{style:{minWidth:300},options:[{label:"Hong Kong Island",value:"1"}],defaultValue:"1"})})},{label:"Meter Type",children:(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(H.Z,{style:{minWidth:300},options:[{label:"ALL",value:"1"}],defaultValue:"1"})})},{label:"Meter Number",children:(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(G.Z,{})})},{label:"Date Range",children:(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(Q.default.RangePicker,{})})},{label:"",children:(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(x.Z,{direction:"horizontal",children:[(0,l.jsx)(p.ZP,{type:"primary",children:"Search"}),(0,l.jsx)(p.ZP,{type:"link",children:"Reset"})]})})}]})})})},V=a(67294),$=a(40411),X=function(){return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(x.Z,{direction:"horizontal",size:"large",children:[(0,l.jsx)($.Z,{count:8,children:(0,l.jsx)(p.ZP,{type:"dashed",children:"\u6C34\u91CF\u7570\u5E38"})}),(0,l.jsx)($.Z,{count:0,children:(0,l.jsx)(p.ZP,{type:"dashed",children:"\u901A\u8A0A\u7570\u5E38"})}),(0,l.jsx)($.Z,{count:3,children:(0,l.jsx)(p.ZP,{type:"dashed",children:"\u6D41\u91CF\u7570\u5E38"})}),(0,l.jsx)($.Z,{count:0,children:(0,l.jsx)(p.ZP,{type:"dashed",children:"\u58D3\u529B\u7570\u5E38"})}),(0,l.jsx)($.Z,{count:1,children:(0,l.jsx)(p.ZP,{type:"dashed",children:"\u72C0\u614B\u7570\u5E38"})}),(0,l.jsx)($.Z,{count:0,children:(0,l.jsx)(p.ZP,{type:"dashed",children:"\u96FB\u91CF\u7570\u5E38"})})]})})},K=function(){var Y=(0,V.useState)(!1),L=F()(Y,2),ne=L[0],q=L[1],w=[{title:"Region",render:function(y,b){return(0,l.jsx)("div",{className:"text-overline",children:"HK"})}},{title:"Meter Number",render:function(y,b){return"8006543218"}},{title:"Meter Type",render:function(y,b){return"M1LV15"}},{title:"Premise",render:function(y,b){return"TMF, G-2/F, HOUSE 3, 10 WING KEI ROAD, TKCTL 524, KWAI CHUNG, NEW TERRITORIES,"}},{title:"Defected Type",render:function(y,b){return"HM(\u6307\u91DD\u7F3A\u5931)"}},{title:"Start Date/Time",render:function(y,b){return O.ND.utc().format(O.dq)}},{title:"End Date/Time",render:function(y,b){return O.ND.utc().format(O.dq)}}];return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(x.Z,{direction:"vertical",style:{width:"100%"},children:[(0,l.jsx)(U,{}),(0,l.jsx)(X,{}),(0,l.jsx)(N.Z,{title:"Smart Meter Alarm",children:(0,l.jsx)(A.Z,{columns:w,dataSource:[{id:"",type:""},{id:"",type:""},{id:"",type:""}]})})]})})}},26412:function(te,D,a){a.d(D,{Z:function(){return me}});var i=a(67294),F=a(93967),x=a.n(F),N=a(74443),A=a(53124),O=a(98675),W=a(25378),G={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1},p=i.createContext({}),l=a(50344),U=function(e,t){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(s[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(s[n[r]]=e[n[r]]);return s};const V=e=>(0,l.Z)(e).map(t=>Object.assign(Object.assign({},t==null?void 0:t.props),{key:t.key}));function $(e,t,s){const n=i.useMemo(()=>t||V(s),[t,s]);return i.useMemo(()=>n.map(c=>{var{span:o}=c,d=U(c,["span"]);return o==="filled"?Object.assign(Object.assign({},d),{filled:!0}):Object.assign(Object.assign({},d),{span:typeof o=="number"?o:(0,N.m9)(e,o)})}),[n,e])}var X=function(e,t){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(s[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(s[n[r]]=e[n[r]]);return s};function K(e,t){let s=[],n=[],r=!1,c=0;return e.filter(o=>o).forEach(o=>{const{filled:d}=o,m=X(o,["filled"]);if(d){n.push(m),s.push(n),n=[],c=0;return}const u=t-c;c+=o.span||1,c>=t?(c>t?(r=!0,n.push(Object.assign(Object.assign({},m),{span:u}))):n.push(m),s.push(n),n=[],c=0):n.push(m)}),n.length>0&&s.push(n),s=s.map(o=>{const d=o.reduce((m,u)=>m+(u.span||1),0);if(d<t){const m=o[o.length-1];return m.span=t-d+1,o}return o}),[s,r]}var L=(e,t)=>{const[s,n]=(0,i.useMemo)(()=>K(t,e),[t,e]);return s},q=e=>{let{children:t}=e;return t};function w(e){return e!=null}var y=e=>{const{itemPrefixCls:t,component:s,span:n,className:r,style:c,labelStyle:o,contentStyle:d,bordered:m,label:u,content:h,colon:C,type:E}=e,v=s;return m?i.createElement(v,{className:x()({[`${t}-item-label`]:E==="label",[`${t}-item-content`]:E==="content"},r),style:c,colSpan:n},w(u)&&i.createElement("span",{style:o},u),w(h)&&i.createElement("span",{style:d},h)):i.createElement(v,{className:x()(`${t}-item`,r),style:c,colSpan:n},i.createElement("div",{className:`${t}-item-container`},(u||u===0)&&i.createElement("span",{className:x()(`${t}-item-label`,{[`${t}-item-no-colon`]:!C}),style:o},u),(h||h===0)&&i.createElement("span",{className:x()(`${t}-item-content`),style:d},h)))};function b(e,t,s){let{colon:n,prefixCls:r,bordered:c}=t,{component:o,type:d,showLabel:m,showContent:u,labelStyle:h,contentStyle:C}=s;return e.map((E,v)=>{let{label:I,children:z,prefixCls:Z=r,className:M,style:T,labelStyle:j,contentStyle:f,span:P=1,key:R}=E;return typeof o=="string"?i.createElement(y,{key:`${d}-${R||v}`,className:M,style:T,labelStyle:Object.assign(Object.assign({},h),j),contentStyle:Object.assign(Object.assign({},C),f),span:P,colon:n,component:o,itemPrefixCls:Z,bordered:c,label:m?I:null,content:u?z:null,type:d}):[i.createElement(y,{key:`label-${R||v}`,className:M,style:Object.assign(Object.assign(Object.assign({},h),T),j),span:1,colon:n,component:o[0],itemPrefixCls:Z,bordered:c,label:I,type:"label"}),i.createElement(y,{key:`content-${R||v}`,className:M,style:Object.assign(Object.assign(Object.assign({},C),T),f),span:P*2-1,component:o[1],itemPrefixCls:Z,bordered:c,content:z,type:"content"})]})}var le=e=>{const t=i.useContext(p),{prefixCls:s,vertical:n,row:r,index:c,bordered:o}=e;return n?i.createElement(i.Fragment,null,i.createElement("tr",{key:`label-${c}`,className:`${s}-row`},b(r,e,Object.assign({component:"th",type:"label",showLabel:!0},t))),i.createElement("tr",{key:`content-${c}`,className:`${s}-row`},b(r,e,Object.assign({component:"td",type:"content",showContent:!0},t)))):i.createElement("tr",{key:c,className:`${s}-row`},b(r,e,Object.assign({component:o?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))},g=a(11568),k=a(14747),re=a(83559),se=a(83262);const ie=e=>{const{componentCls:t,labelBg:s}=e;return{[`&${t}-bordered`]:{[`> ${t}-view`]:{border:`${(0,g.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"> table":{tableLayout:"auto"},[`${t}-row`]:{borderBottom:`${(0,g.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBottom:"none"},[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${(0,g.bf)(e.padding)} ${(0,g.bf)(e.paddingLG)}`,borderInlineEnd:`${(0,g.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderInlineEnd:"none"}},[`> ${t}-item-label`]:{color:e.colorTextSecondary,backgroundColor:s,"&::after":{display:"none"}}}},[`&${t}-middle`]:{[`${t}-row`]:{[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${(0,g.bf)(e.paddingSM)} ${(0,g.bf)(e.paddingLG)}`}}},[`&${t}-small`]:{[`${t}-row`]:{[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${(0,g.bf)(e.paddingXS)} ${(0,g.bf)(e.padding)}`}}}}}},oe=e=>{const{componentCls:t,extraColor:s,itemPaddingBottom:n,itemPaddingEnd:r,colonMarginRight:c,colonMarginLeft:o,titleMarginBottom:d}=e;return{[t]:Object.assign(Object.assign(Object.assign({},(0,k.Wf)(e)),ie(e)),{"&-rtl":{direction:"rtl"},[`${t}-header`]:{display:"flex",alignItems:"center",marginBottom:d},[`${t}-title`]:Object.assign(Object.assign({},k.vS),{flex:"auto",color:e.titleColor,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}),[`${t}-extra`]:{marginInlineStart:"auto",color:s,fontSize:e.fontSize},[`${t}-view`]:{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed",borderCollapse:"collapse"}},[`${t}-row`]:{"> th, > td":{paddingBottom:n,paddingInlineEnd:r},"> th:last-child, > td:last-child":{paddingInlineEnd:0},"&:last-child":{borderBottom:"none","> th, > td":{paddingBottom:0}}},[`${t}-item-label`]:{color:e.colorTextTertiary,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:`${(0,g.bf)(o)} ${(0,g.bf)(c)}`},[`&${t}-item-no-colon::after`]:{content:'""'}},[`${t}-item-no-label`]:{"&::after":{margin:0,content:'""'}},[`${t}-item-content`]:{display:"table-cell",flex:1,color:e.contentColor,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"},[`${t}-item`]:{paddingBottom:0,verticalAlign:"top","&-container":{display:"flex",[`${t}-item-label`]:{display:"inline-flex",alignItems:"baseline"},[`${t}-item-content`]:{display:"inline-flex",alignItems:"baseline",minWidth:"1em"}}},"&-middle":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingSM}}},"&-small":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingXS}}}})}},ae=e=>({labelBg:e.colorFillAlter,titleColor:e.colorText,titleMarginBottom:e.fontSizeSM*e.lineHeightSM,itemPaddingBottom:e.padding,itemPaddingEnd:e.padding,colonMarginRight:e.marginXS,colonMarginLeft:e.marginXXS/2,contentColor:e.colorText,extraColor:e.colorText});var ce=(0,re.I$)("Descriptions",e=>{const t=(0,se.IX)(e,{});return oe(t)},ae),de=function(e,t){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(s[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(s[n[r]]=e[n[r]]);return s};const _=e=>{const{prefixCls:t,title:s,extra:n,column:r,colon:c=!0,bordered:o,layout:d,children:m,className:u,rootClassName:h,style:C,size:E,labelStyle:v,contentStyle:I,items:z}=e,Z=de(e,["prefixCls","title","extra","column","colon","bordered","layout","children","className","rootClassName","style","size","labelStyle","contentStyle","items"]),{getPrefixCls:M,direction:T,descriptions:j}=i.useContext(A.E_),f=M("descriptions",t),P=(0,W.Z)(),R=i.useMemo(()=>{var B;return typeof r=="number"?r:(B=(0,N.m9)(P,Object.assign(Object.assign({},G),r)))!==null&&B!==void 0?B:3},[P,r]),ue=$(P,z,m),J=(0,O.Z)(E),fe=L(R,ue),[pe,ge,ye]=ce(f),be=i.useMemo(()=>({labelStyle:v,contentStyle:I}),[v,I]);return pe(i.createElement(p.Provider,{value:be},i.createElement("div",Object.assign({className:x()(f,j==null?void 0:j.className,{[`${f}-${J}`]:J&&J!=="default",[`${f}-bordered`]:!!o,[`${f}-rtl`]:T==="rtl"},u,h,ge,ye),style:Object.assign(Object.assign({},j==null?void 0:j.style),C)},Z),(s||n)&&i.createElement("div",{className:`${f}-header`},s&&i.createElement("div",{className:`${f}-title`},s),n&&i.createElement("div",{className:`${f}-extra`},n)),i.createElement("div",{className:`${f}-view`},i.createElement("table",null,i.createElement("tbody",null,fe.map((B,ee)=>i.createElement(le,{key:ee,index:ee,colon:c,prefixCls:f,vertical:d==="vertical",bordered:o,row:B}))))))))};_.Item=q;var me=_}}]);
