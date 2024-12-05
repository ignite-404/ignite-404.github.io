!(function(){"use strict";var $e=Object.defineProperty,Se=Object.defineProperties;var Me=Object.getOwnPropertyDescriptors;var ie=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable;var he=(m,i,t)=>i in m?$e(m,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):m[i]=t,ce=(m,i)=>{for(var t in i||(i={}))pe.call(i,t)&&he(m,t,i[t]);if(ie)for(var t of ie(i))ge.call(i,t)&&he(m,t,i[t]);return m},ye=(m,i)=>Se(m,Me(i));var xe=(m,i)=>{var t={};for(var l in m)pe.call(m,l)&&i.indexOf(l)<0&&(t[l]=m[l]);if(m!=null&&ie)for(var l of ie(m))i.indexOf(l)<0&&ge.call(m,l)&&(t[l]=m[l]);return t};(self.webpackChunk=self.webpackChunk||[]).push([[2768],{3083:function(m,i,t){var l=t(50545),g=t(70278),E=t(78298),O=t(97975),B=t(78957),M=t(83062),d=t(85893);i.Z=function(j){var I=j.title,w=j.subtitle,Z=j.extra,D=j.hide_add,L=j.hide_save,R=j.hide_refresh,N=j.hide_delete,W=function(){return Z?null:(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(B.Z,{direction:"horizontal",children:[L||(0,d.jsx)(M.Z,{title:"save",children:(0,d.jsx)(l.Z,{stroke:1})}),N||(0,d.jsx)(M.Z,{title:"delete",children:(0,d.jsx)(g.Z,{stroke:1})}),R||(0,d.jsx)(M.Z,{title:"refresh",children:(0,d.jsx)(E.Z,{stroke:1})}),D||(0,d.jsx)(M.Z,{title:"add",children:(0,d.jsx)(O.Z,{stroke:1})})]})})};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{className:"mb-3 rounded-lg border-1 border-slate-800 bg-blue-900 p-2 text-white",children:(0,d.jsxs)("div",{className:"flex-row-between",children:[(0,d.jsxs)("div",{className:"flex w-full flex-row items-end gap-2",children:[(0,d.jsx)("h1",{className:"text-large font-bold",children:I}),(0,d.jsx)("div",{className:"text-large text-yellow-500",children:w})]}),(0,d.jsxs)("div",{className:"",children:[Z||null,W()]})]})})})}},80720:function(m,i,t){t.r(i),t.d(i,{default:function(){return V}});var l=t(5574),g=t.n(l),E=t(3083),O=t(15741),B=t(70278),M=t(97975),d=t(78957),j=t(83062),I=t(28036),w=t(4393),Z=t(80799),D=t(67294),L=t(85576),R=t(26412),N=t(65233),W=t(24435),H=t(34041),o=t(85893),x=function(u){var v=u.open,A=u.close,h=u.ok;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(L.Z,{open:v,onCancel:function(){A()},title:"Edit",onOk:function(){},children:(0,o.jsx)(d.Z,{direction:"vertical",style:{width:"100%"},children:(0,o.jsx)(R.Z,{column:1,bordered:!0,items:[{label:"Description",children:(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(N.Z.TextArea,{})})},{label:"Retention Period",children:(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(W.Z,{})})},{label:"Retention Period Type",children:(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(H.Z,{style:{minWidth:300},defaultValue:"1",options:[{label:"some type",value:"1"}]})})},{label:"Run Time(mins)",children:(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(N.Z,{disabled:!0})})}]})})})})},V=function(){var u=(0,D.useState)(!1),v=g()(u,2),A=v[0],h=v[1],p=[{title:"Description",render:function(U,y){return(0,o.jsx)("a",{className:"text-blue-600",children:"Meter"})}},{title:"Retention Period",render:function(U,y){return(0,o.jsx)("div",{className:"text-overline",children:"6"})}},{title:"Retention Period Type",render:function(U,y){return"1"}},{title:"Run Time(mins)",render:function(U,y){return"400"}},{title:"Actions",render:function(U,y){return(0,o.jsx)("div",{children:(0,o.jsxs)(d.Z,{direction:"horizontal",children:[(0,o.jsx)(j.Z,{title:"edit",children:(0,o.jsx)(I.ZP,{size:"small",icon:(0,o.jsx)(O.Z,{stroke:1}),type:"dashed",onClick:function(){h(!0)}})}),(0,o.jsx)(I.ZP,{size:"small",danger:!0,icon:(0,o.jsx)(B.Z,{stroke:1}),type:"dashed"})]})})}}];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(x,{open:A,ok:function(){return h(!1)},close:function(){return h(!1)}}),(0,o.jsxs)(d.Z,{direction:"vertical",style:{width:"100%"},children:[(0,o.jsx)(E.Z,{title:"Archiving Configuration"}),(0,o.jsx)(w.Z,{title:"Archiving Configuration",extra:(0,o.jsx)(I.ZP,{size:"small",icon:(0,o.jsx)(M.Z,{stroke:1}),onClick:function(){return h(!0)}}),children:(0,o.jsx)(Z.Z,{columns:p,dataSource:[{id:"",type:""},{id:"",type:""},{id:"",type:""}]})})]})]})}},26412:function(m,i,t){t.d(i,{Z:function(){return J}});var l=t(67294),g=t(93967),E=t.n(g),O=t(74443),B=t(53124),M=t(98675),d=t(25378),I={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1},Z=l.createContext({}),D=t(50344),L=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};const R=e=>(0,D.Z)(e).map(n=>Object.assign(Object.assign({},n==null?void 0:n.props),{key:n.key}));function N(e,n,a){const r=l.useMemo(()=>n||R(a),[n,a]);return l.useMemo(()=>r.map(f=>{var{span:c}=f,b=L(f,["span"]);return c==="filled"?Object.assign(Object.assign({},b),{filled:!0}):Object.assign(Object.assign({},b),{span:typeof c=="number"?c:(0,O.m9)(e,c)})}),[r,e])}var W=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};function H(e,n){let a=[],r=[],s=!1,f=0;return e.filter(c=>c).forEach(c=>{const{filled:b}=c,C=W(c,["filled"]);if(b){r.push(C),a.push(r),r=[],f=0;return}const $=n-f;f+=c.span||1,f>=n?(f>n?(s=!0,r.push(Object.assign(Object.assign({},C),{span:$}))):r.push(C),a.push(r),r=[],f=0):r.push(C)}),r.length>0&&a.push(r),a=a.map(c=>{const b=c.reduce((C,$)=>C+($.span||1),0);if(b<n){const C=c[c.length-1];return C.span=n-b+1,c}return c}),[a,s]}var x=(e,n)=>{const[a,r]=(0,l.useMemo)(()=>H(n,e),[n,e]);return a},u=e=>{let{children:n}=e;return n};function v(e){return e!=null}var h=e=>{const{itemPrefixCls:n,component:a,span:r,className:s,style:f,labelStyle:c,contentStyle:b,bordered:C,label:$,content:T,colon:X,type:G}=e,z=a;return C?l.createElement(z,{className:E()({[`${n}-item-label`]:G==="label",[`${n}-item-content`]:G==="content"},s),style:f,colSpan:r},v($)&&l.createElement("span",{style:c},$),v(T)&&l.createElement("span",{style:b},T)):l.createElement(z,{className:E()(`${n}-item`,s),style:f,colSpan:r},l.createElement("div",{className:`${n}-item-container`},($||$===0)&&l.createElement("span",{className:E()(`${n}-item-label`,{[`${n}-item-no-colon`]:!X}),style:c},$),(T||T===0)&&l.createElement("span",{className:E()(`${n}-item-content`),style:b},T)))};function p(e,n,a){let{colon:r,prefixCls:s,bordered:f}=n,{component:c,type:b,showLabel:C,showContent:$,labelStyle:T,contentStyle:X}=a;return e.map((G,z)=>{let{label:k,children:ae,prefixCls:q=s,className:_,style:ee,labelStyle:F,contentStyle:S,span:Q=1,key:te}=G;return typeof c=="string"?l.createElement(h,{key:`${b}-${te||z}`,className:_,style:ee,labelStyle:Object.assign(Object.assign({},T),F),contentStyle:Object.assign(Object.assign({},X),S),span:Q,colon:r,component:c,itemPrefixCls:q,bordered:f,label:C?k:null,content:$?ae:null,type:b}):[l.createElement(h,{key:`label-${te||z}`,className:_,style:Object.assign(Object.assign(Object.assign({},T),ee),F),span:1,colon:r,component:c[0],itemPrefixCls:q,bordered:f,label:k,type:"label"}),l.createElement(h,{key:`content-${te||z}`,className:_,style:Object.assign(Object.assign(Object.assign({},X),ee),S),span:Q*2-1,component:c[1],itemPrefixCls:q,bordered:f,content:ae,type:"content"})]})}var U=e=>{const n=l.useContext(Z),{prefixCls:a,vertical:r,row:s,index:f,bordered:c}=e;return r?l.createElement(l.Fragment,null,l.createElement("tr",{key:`label-${f}`,className:`${a}-row`},p(s,e,Object.assign({component:"th",type:"label",showLabel:!0},n))),l.createElement("tr",{key:`content-${f}`,className:`${a}-row`},p(s,e,Object.assign({component:"td",type:"content",showContent:!0},n)))):l.createElement("tr",{key:f,className:`${a}-row`},p(s,e,Object.assign({component:c?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},n)))},y=t(11568),Y=t(14747),de=t(83559),le=t(83262);const re=e=>{const{componentCls:n,labelBg:a}=e;return{[`&${n}-bordered`]:{[`> ${n}-view`]:{border:`${(0,y.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"> table":{tableLayout:"auto"},[`${n}-row`]:{borderBottom:`${(0,y.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBottom:"none"},[`> ${n}-item-label, > ${n}-item-content`]:{padding:`${(0,y.bf)(e.padding)} ${(0,y.bf)(e.paddingLG)}`,borderInlineEnd:`${(0,y.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderInlineEnd:"none"}},[`> ${n}-item-label`]:{color:e.colorTextSecondary,backgroundColor:a,"&::after":{display:"none"}}}},[`&${n}-middle`]:{[`${n}-row`]:{[`> ${n}-item-label, > ${n}-item-content`]:{padding:`${(0,y.bf)(e.paddingSM)} ${(0,y.bf)(e.paddingLG)}`}}},[`&${n}-small`]:{[`${n}-row`]:{[`> ${n}-item-label, > ${n}-item-content`]:{padding:`${(0,y.bf)(e.paddingXS)} ${(0,y.bf)(e.padding)}`}}}}}},K=e=>{const{componentCls:n,extraColor:a,itemPaddingBottom:r,itemPaddingEnd:s,colonMarginRight:f,colonMarginLeft:c,titleMarginBottom:b}=e;return{[n]:Object.assign(Object.assign(Object.assign({},(0,Y.Wf)(e)),re(e)),{"&-rtl":{direction:"rtl"},[`${n}-header`]:{display:"flex",alignItems:"center",marginBottom:b},[`${n}-title`]:Object.assign(Object.assign({},Y.vS),{flex:"auto",color:e.titleColor,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}),[`${n}-extra`]:{marginInlineStart:"auto",color:a,fontSize:e.fontSize},[`${n}-view`]:{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed",borderCollapse:"collapse"}},[`${n}-row`]:{"> th, > td":{paddingBottom:r,paddingInlineEnd:s},"> th:last-child, > td:last-child":{paddingInlineEnd:0},"&:last-child":{borderBottom:"none","> th, > td":{paddingBottom:0}}},[`${n}-item-label`]:{color:e.colorTextTertiary,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:`${(0,y.bf)(c)} ${(0,y.bf)(f)}`},[`&${n}-item-no-colon::after`]:{content:'""'}},[`${n}-item-no-label`]:{"&::after":{margin:0,content:'""'}},[`${n}-item-content`]:{display:"table-cell",flex:1,color:e.contentColor,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"},[`${n}-item`]:{paddingBottom:0,verticalAlign:"top","&-container":{display:"flex",[`${n}-item-label`]:{display:"inline-flex",alignItems:"baseline"},[`${n}-item-content`]:{display:"inline-flex",alignItems:"baseline",minWidth:"1em"}}},"&-middle":{[`${n}-row`]:{"> th, > td":{paddingBottom:e.paddingSM}}},"&-small":{[`${n}-row`]:{"> th, > td":{paddingBottom:e.paddingXS}}}})}},oe=e=>({labelBg:e.colorFillAlter,titleColor:e.colorText,titleMarginBottom:e.fontSizeSM*e.lineHeightSM,itemPaddingBottom:e.padding,itemPaddingEnd:e.padding,colonMarginRight:e.marginXS,colonMarginLeft:e.marginXXS/2,contentColor:e.colorText,extraColor:e.colorText});var me=(0,de.I$)("Descriptions",e=>{const n=(0,le.IX)(e,{});return K(n)},oe),ue=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};const se=e=>{const{prefixCls:n,title:a,extra:r,column:s,colon:f=!0,bordered:c,layout:b,children:C,className:$,rootClassName:T,style:X,size:G,labelStyle:z,contentStyle:k,items:ae}=e,q=ue(e,["prefixCls","title","extra","column","colon","bordered","layout","children","className","rootClassName","style","size","labelStyle","contentStyle","items"]),{getPrefixCls:_,direction:ee,descriptions:F}=l.useContext(B.E_),S=_("descriptions",n),Q=(0,d.Z)(),te=l.useMemo(()=>{var ne;return typeof s=="number"?s:(ne=(0,O.m9)(Q,Object.assign(Object.assign({},I),s)))!==null&&ne!==void 0?ne:3},[Q,s]),be=N(Q,ae,C),fe=(0,M.Z)(G),je=x(te,be),[Oe,Ce,Ee]=me(S),Pe=l.useMemo(()=>({labelStyle:z,contentStyle:k}),[z,k]);return Oe(l.createElement(Z.Provider,{value:Pe},l.createElement("div",Object.assign({className:E()(S,F==null?void 0:F.className,{[`${S}-${fe}`]:fe&&fe!=="default",[`${S}-bordered`]:!!c,[`${S}-rtl`]:ee==="rtl"},$,T,Ce,Ee),style:Object.assign(Object.assign({},F==null?void 0:F.style),X)},q),(a||r)&&l.createElement("div",{className:`${S}-header`},a&&l.createElement("div",{className:`${S}-title`},a),r&&l.createElement("div",{className:`${S}-extra`},r)),l.createElement("div",{className:`${S}-view`},l.createElement("table",null,l.createElement("tbody",null,je.map((ne,ve)=>l.createElement(U,{key:ve,index:ve,colon:f,prefixCls:S,vertical:b==="vertical",bordered:c,row:ne}))))))))};se.Item=u;var J=se},85576:function(m,i,t){t.d(i,{Z:function(){return V}});var l=t(56080),g=t(38657),E=t(56745),O=t(67294),B=t(93967),M=t.n(B),d=t(40974),j=t(8745),I=t(53124),w=t(35792),Z=t(32409),D=t(4941),L=t(71194),R=function(u,v){var A={};for(var h in u)Object.prototype.hasOwnProperty.call(u,h)&&v.indexOf(h)<0&&(A[h]=u[h]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,h=Object.getOwnPropertySymbols(u);p<h.length;p++)v.indexOf(h[p])<0&&Object.prototype.propertyIsEnumerable.call(u,h[p])&&(A[h[p]]=u[h[p]]);return A};const N=u=>{const{prefixCls:v,className:A,closeIcon:h,closable:p,type:P,title:U,children:y,footer:Y}=u,de=R(u,["prefixCls","className","closeIcon","closable","type","title","children","footer"]),{getPrefixCls:le}=O.useContext(I.E_),re=le(),K=v||le("modal"),oe=(0,w.Z)(re),[me,ue,se]=(0,L.ZP)(K,oe),J=`${K}-confirm`;let e={};return P?e={closable:p!=null?p:!1,title:"",footer:"",children:O.createElement(Z.O,Object.assign({},u,{prefixCls:K,confirmPrefixCls:J,rootPrefixCls:re,content:y}))}:e={closable:p!=null?p:!0,title:U,footer:Y!==null&&O.createElement(D.$,Object.assign({},u)),children:y},me(O.createElement(d.s,Object.assign({prefixCls:K,className:M()(ue,`${K}-pure-panel`,P&&J,P&&`${J}-${P}`,A,se,oe)},de,{closeIcon:(0,D.b)(K,h),closable:p},e)))};var W=(0,j.i)(N),H=t(94423);function o(u){return(0,l.ZP)((0,l.uW)(u))}const x=E.Z;x.useModal=H.Z,x.info=function(v){return(0,l.ZP)((0,l.cw)(v))},x.success=function(v){return(0,l.ZP)((0,l.vq)(v))},x.error=function(v){return(0,l.ZP)((0,l.AQ)(v))},x.warning=o,x.warn=o,x.confirm=function(v){return(0,l.ZP)((0,l.Au)(v))},x.destroyAll=function(){for(;g.Z.length;){const v=g.Z.pop();v&&v()}},x.config=l.ai,x._InternalPanelDoNotUseOrYouWillBeFired=W;var V=x},33733:function(m,i,t){t.d(i,{Z:function(){return E}});var l=t(67294);var g={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};const E=(O,B,M,d)=>{const j=(0,l.forwardRef)((H,W)=>{var o=H,{color:I="currentColor",size:w=24,stroke:Z=2,title:D,className:L,children:R}=o,N=xe(o,["color","size","stroke","title","className","children"]);return(0,l.createElement)("svg",ce(ce(ye(ce({ref:W},g[O]),{width:w,height:w,className:["tabler-icon",`tabler-icon-${B}`,L].join(" ")}),O==="filled"?{fill:I}:{strokeWidth:Z,stroke:I}),N),[D&&(0,l.createElement)("title",{key:"svg-title"},D),...d.map(([x,V])=>(0,l.createElement)(x,V)),...Array.isArray(R)?R:[R]])});return j.displayName=`${M}`,j}},50545:function(m,i,t){t.d(i,{Z:function(){return g}});var l=t(33733);var g=(0,l.Z)("outline","archive","IconArchive",[["path",{d:"M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10",key:"svg-1"}],["path",{d:"M10 12l4 0",key:"svg-2"}]])},97975:function(m,i,t){t.d(i,{Z:function(){return g}});var l=t(33733);var g=(0,l.Z)("outline","plus","IconPlus",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M5 12l14 0",key:"svg-1"}]])},78298:function(m,i,t){t.d(i,{Z:function(){return g}});var l=t(33733);var g=(0,l.Z)("outline","refresh","IconRefresh",[["path",{d:"M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4",key:"svg-0"}],["path",{d:"M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4",key:"svg-1"}]])},15741:function(m,i,t){t.d(i,{Z:function(){return g}});var l=t(33733);var g=(0,l.Z)("outline","settings","IconSettings",[["path",{d:"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z",key:"svg-0"}],["path",{d:"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-1"}]])},70278:function(m,i,t){t.d(i,{Z:function(){return g}});var l=t(33733);var g=(0,l.Z)("outline","trash","IconTrash",[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]])}}]);
}());