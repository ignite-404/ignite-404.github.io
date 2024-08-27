"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7462],{83946:function(ae,L,n){n.r(L),n.d(L,{default:function(){return D}});var a=n(51255),m=n(4393),V=n(26412),w=n(25278),Y=n(13129),l=n(85893),z=function(){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(m.Z,{title:"Search",children:(0,l.jsx)(V.Z,{column:2,bordered:!0,items:[{label:"Premise ID",children:(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"flex-row-left gap-2",children:[(0,l.jsx)(w.Z,{value:"6541316817646",disabled:!0,addonAfter:(0,l.jsx)(Y.Z,{})}),(0,l.jsx)("b",{children:"FLAT H, 17/F, HING FAT HOUSE, 9-13 KAU YUK ROAD, YUEN LONG, NEW TERRITORIES"})]})})}]})})})},J=n(14726),A=n(80799),C=n(46629),h=function(){var G=[{title:"Field Activity ID",render:function(S,I){return S.id||""}},{title:"Field Activity Type",render:function(S,I){return S.type||""}},{title:"FA Creation Date/Time",render:function(S,I){return C.ND.utc().format(C.dq)}},{title:"FA Status",render:function(S,I){return"Complete"}},{title:"Appointment Type",render:function(S,I){return""}},{title:"Appointment Date/Time",render:function(S,I){return C.ND.utc().format(C.dq)}},{title:"Set By",render:function(S,I){return"WSD"}},{render:function(S,I){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(J.ZP,{size:"small",type:"primary",children:"Cancel"})})}}];return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(m.Z,{title:"Appointment for FA",children:(0,l.jsx)(A.Z,{columns:G,dataSource:[{id:"",type:""},{id:"",type:""},{id:"",type:""},{id:"",type:""},{id:"",type:""},{id:"",type:""},{id:"",type:""}]})})})},O=function(){var G=[{title:"TODO ID",render:function(S,I){return""}},{title:"TODO Type",render:function(S,I){return""}},{title:"TODO Date/Time",render:function(S,I){return C.ND.utc().format(C.dq)}},{title:"TODO Status",render:function(S,I){return"Complete"}},{title:"Appointment Type",render:function(S,I){return"some type"}},{title:"Appointment Date/Time",render:function(S,I){return C.ND.utc().format(C.dq)}},{title:"Set By",render:function(S,I){return"WSD"}},{render:function(S,I){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(J.ZP,{size:"small",type:"primary",children:"Cancel"})})}}];return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(m.Z,{title:"Appointment for TODO",children:(0,l.jsx)(A.Z,{columns:G,dataSource:[{id:"",type:""},{id:"",type:""},{id:"",type:""}]})})})},s=n(66309),r=n(71230),y=n(15746),u=n(31156),b=n(55742),d=(0,C.ND)(C.ND.utc().add(C.Mg,"hour").format(C.vc)).add(9,"hour"),p=function(){var G=[{title:"Appointment Date/Time",render:function(S,I){var _=S.t,te=_.add(30,"minutes");return(0,l.jsxs)(s.Z,{color:"green",children:[_.format(C.bF),"~",te.format(C.bF)]})}},{title:"Maximum",render:function(S,I){return"4"}},{title:"Available",render:function(S,I){return"3"}}];return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(r.Z,{gutter:[10,10],children:[(0,l.jsx)(y.Z,{span:16,children:(0,l.jsx)(u.Z,{})}),(0,l.jsxs)(y.Z,{span:8,children:[(0,l.jsx)(A.Z,{columns:G,dataSource:[{t:d.add(0,"hour")},{t:d.add(1,"hour")},{t:d.add(2,"hour")},{t:d.add(3,"hour")},{t:d.add(4,"hour")},{t:d.add(5,"hour")},{t:d.add(6,"hour")},{t:d.add(7,"hour")},{t:d.add(8,"hour")},{t:d.add(9,"hour")}],pagination:!1}),(0,l.jsxs)("table",{className:"w-full border-collapse border border-slate-400 mt-3 bg-slate-50",children:[(0,l.jsx)("thead",{children:(0,l.jsx)("tr",{children:(0,l.jsx)("td",{className:"border border-slate-300",children:"Appointment Detail"})})}),(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:"border border-slate-300",children:"Appointment Date/Time"}),(0,l.jsx)("td",{className:"border border-slate-300",children:"2022/05/06 09:00-09:30"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:"border border-slate-300",children:"Set By"}),(0,l.jsx)("td",{className:"border border-slate-300",children:(0,l.jsx)(b.ZP.Group,{options:[{label:"WSD",value:"123"},{label:"Customer",value:"123d"}]})})]})]})]})]})]})})},ee=n(78957),D=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Z,{title:"Appointment Maintenance",extra:(0,l.jsx)("span",{})}),(0,l.jsxs)(ee.Z,{direction:"vertical",style:{width:"100%"},children:[(0,l.jsx)(z,{}),(0,l.jsx)(h,{}),(0,l.jsx)(O,{}),(0,l.jsx)(p,{})]})]})}},69760:function(ae,L,n){n.d(L,{Z:function(){return J},w:function(){return w}});var a=n(67294),m=n(97937),V=n(64217);function w(A){if(A)return{closable:A.closable,closeIcon:A.closeIcon}}function Y(A){const{closable:C,closeIcon:h}=A||{};return a.useMemo(()=>{if(!C&&(C===!1||h===!1||h===null))return!1;if(C===void 0&&h===void 0)return null;let O={closeIcon:typeof h!="boolean"&&h!==null?h:void 0};return C&&typeof C=="object"&&(O=Object.assign(Object.assign({},O),C)),O},[C,h])}function l(){const A={};for(var C=arguments.length,h=new Array(C),O=0;O<C;O++)h[O]=arguments[O];return h.forEach(s=>{s&&Object.keys(s).forEach(r=>{s[r]!==void 0&&(A[r]=s[r])})}),A}const z={};function J(A,C){let h=arguments.length>2&&arguments[2]!==void 0?arguments[2]:z;const O=Y(A),s=Y(C),r=a.useMemo(()=>Object.assign({closeIcon:a.createElement(m.Z,null)},h),[h]),y=a.useMemo(()=>O===!1?!1:O?l(r,s,O):s===!1?!1:s?l(r,s):r.closable?r:!1,[O,s,r]);return a.useMemo(()=>{if(y===!1)return[!1,null];const{closeIconRender:u}=r,{closeIcon:b}=y;let d=b;if(d!=null){u&&(d=u(b));const p=(0,V.Z)(y,!0);Object.keys(p).length&&(d=a.isValidElement(d)?a.cloneElement(d,p):a.createElement("span",Object.assign({},p),d))}return[!0,d]},[y,r])}},31156:function(ae,L,n){n.d(L,{Z:function(){return g}});var a=n(63697),m=n(67294),V=n(93967),w=n.n(V),Y=n(49866),l=n(21770),z=n(53124),J=n(10110),A=n(65223),C=n(99692),h=n(16984),O=n(34041);const s=10,r=20;function y(e){const{fullscreen:o,validRange:c,generateConfig:f,locale:T,prefixCls:x,value:Z,onChange:N,divRef:K}=e,W=f.getYear(Z||f.getNow());let E=W-s,P=E+r;c&&(E=f.getYear(c[0]),P=f.getYear(c[1])+1);const F=T&&T.year==="\u5E74"?"\u5E74":"",k=[];for(let R=E;R<P;R++)k.push({label:`${R}${F}`,value:R});return m.createElement(O.Z,{size:o?void 0:"small",options:k,value:W,className:`${x}-year-select`,onChange:R=>{let Q=f.setYear(Z,R);if(c){const[q,fe]=c,H=f.getYear(Q),ie=f.getMonth(Q);H===f.getYear(fe)&&ie>f.getMonth(fe)&&(Q=f.setMonth(Q,f.getMonth(fe))),H===f.getYear(q)&&ie<f.getMonth(q)&&(Q=f.setMonth(Q,f.getMonth(q)))}N(Q)},getPopupContainer:()=>K.current})}function u(e){const{prefixCls:o,fullscreen:c,validRange:f,value:T,generateConfig:x,locale:Z,onChange:N,divRef:K}=e,W=x.getMonth(T||x.getNow());let E=0,P=11;if(f){const[R,Q]=f,q=x.getYear(T);x.getYear(Q)===q&&(P=x.getMonth(Q)),x.getYear(R)===q&&(E=x.getMonth(R))}const F=Z.shortMonths||x.locale.getShortMonths(Z.locale),k=[];for(let R=E;R<=P;R+=1)k.push({label:F[R],value:R});return m.createElement(O.Z,{size:c?void 0:"small",className:`${o}-month-select`,value:W,options:k,onChange:R=>{N(x.setMonth(T,R))},getPopupContainer:()=>K.current})}function b(e){const{prefixCls:o,locale:c,mode:f,fullscreen:T,onModeChange:x}=e;return m.createElement(C.Z,{onChange:Z=>{let{target:{value:N}}=Z;x(N)},value:f,size:T?void 0:"small",className:`${o}-mode-switch`},m.createElement(h.Z,{value:"month"},c.month),m.createElement(h.Z,{value:"year"},c.year))}function d(e){const{prefixCls:o,fullscreen:c,mode:f,onChange:T,onModeChange:x}=e,Z=m.useRef(null),N=(0,m.useContext)(A.aM),K=(0,m.useMemo)(()=>Object.assign(Object.assign({},N),{isFormItemInput:!1}),[N]),W=Object.assign(Object.assign({},e),{fullscreen:c,divRef:Z});return m.createElement("div",{className:`${o}-header`,ref:Z},m.createElement(A.aM.Provider,{value:K},m.createElement(y,Object.assign({},W,{onChange:E=>{T(E,"year")}})),f==="month"&&m.createElement(u,Object.assign({},W,{onChange:E=>{T(E,"month")}}))),m.createElement(b,Object.assign({},W,{onModeChange:x})))}var p=d,ee=n(74228),D=n(11568),G=n(59844),M=n(83270),S=n(14747),I=n(83559),_=n(83262);const te=e=>{const{calendarCls:o,componentCls:c,fullBg:f,fullPanelBg:T,itemActiveBg:x}=e;return{[o]:Object.assign(Object.assign(Object.assign({},(0,G.k)(e)),(0,S.Wf)(e)),{background:f,"&-rtl":{direction:"rtl"},[`${o}-header`]:{display:"flex",justifyContent:"flex-end",padding:`${(0,D.bf)(e.paddingSM)} 0`,[`${o}-year-select`]:{minWidth:e.yearControlWidth},[`${o}-month-select`]:{minWidth:e.monthControlWidth,marginInlineStart:e.marginXS},[`${o}-mode-switch`]:{marginInlineStart:e.marginXS}}}),[`${o} ${c}-panel`]:{background:T,border:0,borderTop:`${(0,D.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,borderRadius:0,[`${c}-month-panel, ${c}-date-panel`]:{width:"auto"},[`${c}-body`]:{padding:`${(0,D.bf)(e.paddingXS)} 0`},[`${c}-content`]:{width:"100%"}},[`${o}-mini`]:{borderRadius:e.borderRadiusLG,[`${o}-header`]:{paddingInlineEnd:e.paddingXS,paddingInlineStart:e.paddingXS},[`${c}-panel`]:{borderRadius:`0 0 ${(0,D.bf)(e.borderRadiusLG)} ${(0,D.bf)(e.borderRadiusLG)}`},[`${c}-content`]:{height:e.miniContentHeight,th:{height:"auto",padding:0,lineHeight:(0,D.bf)(e.weekHeight)}},[`${c}-cell::before`]:{pointerEvents:"none"}},[`${o}${o}-full`]:{[`${c}-panel`]:{display:"block",width:"100%",textAlign:"end",background:f,border:0,[`${c}-body`]:{"th, td":{padding:0},th:{height:"auto",paddingInlineEnd:e.paddingSM,paddingBottom:e.paddingXXS,lineHeight:(0,D.bf)(e.weekHeight)}}},[`${c}-cell`]:{"&::before":{display:"none"},"&:hover":{[`${o}-date`]:{background:e.controlItemBgHover}},[`${o}-date-today::before`]:{display:"none"},[`&-in-view${c}-cell-selected`]:{[`${o}-date, ${o}-date-today`]:{background:x}},"&-selected, &-selected:hover":{[`${o}-date, ${o}-date-today`]:{[`${o}-date-value`]:{color:e.colorPrimary}}}},[`${o}-date`]:{display:"block",width:"auto",height:"auto",margin:`0 ${(0,D.bf)(e.calc(e.marginXS).div(2).equal())}`,padding:`${(0,D.bf)(e.calc(e.paddingXS).div(2).equal())} ${(0,D.bf)(e.paddingXS)} 0`,border:0,borderTop:`${(0,D.bf)(e.lineWidthBold)} ${e.lineType} ${e.colorSplit}`,borderRadius:0,transition:`background ${e.motionDurationSlow}`,"&-value":{lineHeight:(0,D.bf)(e.dateValueHeight),transition:`color ${e.motionDurationSlow}`},"&-content":{position:"static",width:"auto",height:e.dateContentHeight,overflowY:"auto",color:e.colorText,lineHeight:e.lineHeight,textAlign:"start"},"&-today":{borderColor:e.colorPrimary,[`${o}-date-value`]:{color:e.colorText}}}},[`@media only screen and (max-width: ${(0,D.bf)(e.screenXS)}) `]:{[o]:{[`${o}-header`]:{display:"block",[`${o}-year-select`]:{width:"50%"},[`${o}-month-select`]:{width:`calc(50% - ${(0,D.bf)(e.paddingXS)})`},[`${o}-mode-switch`]:{width:"100%",marginTop:e.marginXS,marginInlineStart:0,"> label":{width:"50%",textAlign:"center"}}}}}}},B=e=>Object.assign({fullBg:e.colorBgContainer,fullPanelBg:e.colorBgContainer,itemActiveBg:e.controlItemBgActive,yearControlWidth:80,monthControlWidth:70,miniContentHeight:256},(0,M.GM)(e));var ge=(0,I.I$)("Calendar",e=>{const o=`${e.componentCls}-calendar`,c=(0,_.IX)(e,(0,M.vA)(e),{calendarCls:o,pickerCellInnerCls:`${e.componentCls}-cell-inner`,dateValueHeight:e.controlHeightSM,weekHeight:e.calc(e.controlHeightSM).mul(.75).equal(),dateContentHeight:e.calc(e.calc(e.fontHeightSM).add(e.marginXS)).mul(3).add(e.calc(e.lineWidth).mul(2)).equal()});return[te(c)]},B);const ne=(e,o,c)=>{const{getYear:f}=c;return e&&o&&f(e)===f(o)},re=(e,o,c)=>{const{getMonth:f}=c;return ne(e,o,c)&&f(e)===f(o)},t=(e,o,c)=>{const{getDate:f}=c;return re(e,o,c)&&f(e)===f(o)};var j=e=>c=>{const{prefixCls:f,className:T,rootClassName:x,style:Z,dateFullCellRender:N,dateCellRender:K,monthFullCellRender:W,monthCellRender:E,cellRender:P,fullCellRender:F,headerRender:k,value:R,defaultValue:Q,disabledDate:q,mode:fe,validRange:H,fullscreen:ie=!0,onChange:me,onPanelChange:he,onSelect:pe}=c,{getPrefixCls:$e,direction:xe,calendar:ce}=m.useContext(z.E_),de=$e("picker",f),X=`${de}-calendar`,[be,ue,Oe]=ge(de,X),le=e.getNow(),[oe,ve]=(0,l.Z)(()=>R||e.getNow(),{defaultValue:Q,value:R}),[Ce,Me]=(0,l.Z)("month",{value:fe}),ye=m.useMemo(()=>Ce==="year"?"month":"date",[Ce]),Ie=m.useCallback(v=>(H?e.isAfter(H[0],v)||e.isAfter(v,H[1]):!1)||!!(q!=null&&q(v)),[q,H]),Ee=(v,U)=>{he==null||he(v,U)},Pe=v=>{ve(v),t(v,oe,e)||((ye==="date"&&!re(v,oe,e)||ye==="month"&&!ne(v,oe,e))&&Ee(v,Ce),me==null||me(v))},je=v=>{Me(v),Ee(oe,v)},Se=(v,U)=>{Pe(v),pe==null||pe(v,{source:U})},De=m.useCallback((v,U)=>F?F(v,U):N?N(v):m.createElement("div",{className:w()(`${de}-cell-inner`,`${X}-date`,{[`${X}-date-today`]:t(le,v,e)})},m.createElement("div",{className:`${X}-date-value`},String(e.getDate(v)).padStart(2,"0")),m.createElement("div",{className:`${X}-date-content`},P?P(v,U):K==null?void 0:K(v))),[N,K,P,F]),Te=m.useCallback((v,U)=>{if(F)return F(v,U);if(W)return W(v);const Ne=U.locale.shortMonths||e.locale.getShortMonths(U.locale.locale);return m.createElement("div",{className:w()(`${de}-cell-inner`,`${X}-date`,{[`${X}-date-today`]:re(le,v,e)})},m.createElement("div",{className:`${X}-date-value`},Ne[e.getMonth(v)]),m.createElement("div",{className:`${X}-date-content`},P?P(v,U):E==null?void 0:E(v)))},[W,E,P,F]),[Re]=(0,J.Z)("Calendar",ee.Z),se=Object.assign(Object.assign({},Re),c.locale),Ae=(v,U)=>{if(U.type==="date")return De(v,U);if(U.type==="month")return Te(v,Object.assign(Object.assign({},U),{locale:se==null?void 0:se.lang}))};return be(m.createElement("div",{className:w()(X,{[`${X}-full`]:ie,[`${X}-mini`]:!ie,[`${X}-rtl`]:xe==="rtl"},ce==null?void 0:ce.className,T,x,ue,Oe),style:Object.assign(Object.assign({},ce==null?void 0:ce.style),Z)},k?k({value:oe,type:Ce,onChange:v=>{Se(v,"customize")},onTypeChange:je}):m.createElement(p,{prefixCls:X,value:oe,generateConfig:e,mode:Ce,fullscreen:ie,locale:se==null?void 0:se.lang,validRange:H,onChange:Se,onModeChange:je}),m.createElement(Y.N4,{value:oe,prefixCls:de,locale:se==null?void 0:se.lang,generateConfig:e,cellRender:Ae,onSelect:v=>{Se(v,ye)},mode:ye,picker:ye,disabledDate:Ie,hideHeader:!0})))};const i=j(a.Z);i.generateCalendar=j;var g=i},15746:function(ae,L,n){var a=n(21584);L.Z=a.Z},99134:function(ae,L,n){var a=n(67294);const m=(0,a.createContext)({});L.Z=m},21584:function(ae,L,n){var a=n(67294),m=n(93967),V=n.n(m),w=n(53124),Y=n(99134),l=n(6999),z=function(h,O){var s={};for(var r in h)Object.prototype.hasOwnProperty.call(h,r)&&O.indexOf(r)<0&&(s[r]=h[r]);if(h!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,r=Object.getOwnPropertySymbols(h);y<r.length;y++)O.indexOf(r[y])<0&&Object.prototype.propertyIsEnumerable.call(h,r[y])&&(s[r[y]]=h[r[y]]);return s};function J(h){return typeof h=="number"?`${h} ${h} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(h)?`0 0 ${h}`:h}const A=["xs","sm","md","lg","xl","xxl"],C=a.forwardRef((h,O)=>{const{getPrefixCls:s,direction:r}=a.useContext(w.E_),{gutter:y,wrap:u}=a.useContext(Y.Z),{prefixCls:b,span:d,order:p,offset:ee,push:D,pull:G,className:M,children:S,flex:I,style:_}=h,te=z(h,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),B=s("col",b),[ge,ne,re]=(0,l.cG)(B),t={};let $={};A.forEach(g=>{let e={};const o=h[g];typeof o=="number"?e.span=o:typeof o=="object"&&(e=o||{}),delete te[g],$=Object.assign(Object.assign({},$),{[`${B}-${g}-${e.span}`]:e.span!==void 0,[`${B}-${g}-order-${e.order}`]:e.order||e.order===0,[`${B}-${g}-offset-${e.offset}`]:e.offset||e.offset===0,[`${B}-${g}-push-${e.push}`]:e.push||e.push===0,[`${B}-${g}-pull-${e.pull}`]:e.pull||e.pull===0,[`${B}-rtl`]:r==="rtl"}),e.flex&&($[`${B}-${g}-flex`]=!0,t[`--${B}-${g}-flex`]=J(e.flex))});const j=V()(B,{[`${B}-${d}`]:d!==void 0,[`${B}-order-${p}`]:p,[`${B}-offset-${ee}`]:ee,[`${B}-push-${D}`]:D,[`${B}-pull-${G}`]:G},M,$,ne,re),i={};if(y&&y[0]>0){const g=y[0]/2;i.paddingLeft=g,i.paddingRight=g}return I&&(i.flex=J(I),u===!1&&!i.minWidth&&(i.minWidth=0)),ge(a.createElement("div",Object.assign({},te,{style:Object.assign(Object.assign(Object.assign({},i),_),t),className:j,ref:O}),S))});L.Z=C},92820:function(ae,L,n){var a=n(67294),m=n(93967),V=n.n(m),w=n(74443),Y=n(53124),l=n(99134),z=n(6999),J=function(s,r){var y={};for(var u in s)Object.prototype.hasOwnProperty.call(s,u)&&r.indexOf(u)<0&&(y[u]=s[u]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var b=0,u=Object.getOwnPropertySymbols(s);b<u.length;b++)r.indexOf(u[b])<0&&Object.prototype.propertyIsEnumerable.call(s,u[b])&&(y[u[b]]=s[u[b]]);return y};const A=null,C=null;function h(s,r){const[y,u]=a.useState(typeof s=="string"?s:""),b=()=>{if(typeof s=="string"&&u(s),typeof s=="object")for(let d=0;d<w.c4.length;d++){const p=w.c4[d];if(!r[p])continue;const ee=s[p];if(ee!==void 0){u(ee);return}}};return a.useEffect(()=>{b()},[JSON.stringify(s),r]),y}const O=a.forwardRef((s,r)=>{const{prefixCls:y,justify:u,align:b,className:d,style:p,children:ee,gutter:D=0,wrap:G}=s,M=J(s,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:S,direction:I}=a.useContext(Y.E_),[_,te]=a.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[B,ge]=a.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),ne=h(b,B),re=h(u,B),t=a.useRef(D),$=(0,w.ZP)();a.useEffect(()=>{const W=$.subscribe(E=>{ge(E);const P=t.current||0;(!Array.isArray(P)&&typeof P=="object"||Array.isArray(P)&&(typeof P[0]=="object"||typeof P[1]=="object"))&&te(E)});return()=>$.unsubscribe(W)},[]);const j=()=>{const W=[void 0,void 0];return(Array.isArray(D)?D:[D,void 0]).forEach((P,F)=>{if(typeof P=="object")for(let k=0;k<w.c4.length;k++){const R=w.c4[k];if(_[R]&&P[R]!==void 0){W[F]=P[R];break}}else W[F]=P}),W},i=S("row",y),[g,e,o]=(0,z.VM)(i),c=j(),f=V()(i,{[`${i}-no-wrap`]:G===!1,[`${i}-${re}`]:re,[`${i}-${ne}`]:ne,[`${i}-rtl`]:I==="rtl"},d,e,o),T={},x=c[0]!=null&&c[0]>0?c[0]/-2:void 0;x&&(T.marginLeft=x,T.marginRight=x);const[Z,N]=c;T.rowGap=N;const K=a.useMemo(()=>({gutter:[Z,N],wrap:G}),[Z,N,G]);return g(a.createElement(l.Z.Provider,{value:K},a.createElement("div",Object.assign({},M,{className:f,style:Object.assign(Object.assign({},T),p),ref:r}),ee)))});L.Z=O},6999:function(ae,L,n){n.d(L,{VM:function(){return h},cG:function(){return O}});var a=n(11568),m=n(83559),V=n(83262);const w=s=>{const{componentCls:r}=s;return{[r]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},Y=s=>{const{componentCls:r}=s;return{[r]:{position:"relative",maxWidth:"100%",minHeight:1}}},l=(s,r)=>{const{prefixCls:y,componentCls:u,gridColumns:b}=s,d={};for(let p=b;p>=0;p--)p===0?(d[`${u}${r}-${p}`]={display:"none"},d[`${u}-push-${p}`]={insetInlineStart:"auto"},d[`${u}-pull-${p}`]={insetInlineEnd:"auto"},d[`${u}${r}-push-${p}`]={insetInlineStart:"auto"},d[`${u}${r}-pull-${p}`]={insetInlineEnd:"auto"},d[`${u}${r}-offset-${p}`]={marginInlineStart:0},d[`${u}${r}-order-${p}`]={order:0}):(d[`${u}${r}-${p}`]=[{"--ant-display":"block",display:"block"},{display:"var(--ant-display)",flex:`0 0 ${p/b*100}%`,maxWidth:`${p/b*100}%`}],d[`${u}${r}-push-${p}`]={insetInlineStart:`${p/b*100}%`},d[`${u}${r}-pull-${p}`]={insetInlineEnd:`${p/b*100}%`},d[`${u}${r}-offset-${p}`]={marginInlineStart:`${p/b*100}%`},d[`${u}${r}-order-${p}`]={order:p});return d[`${u}${r}-flex`]={flex:`var(--${y}${r}-flex)`},d},z=(s,r)=>l(s,r),J=(s,r,y)=>({[`@media (min-width: ${(0,a.bf)(r)})`]:Object.assign({},z(s,y))}),A=()=>({}),C=()=>({}),h=(0,m.I$)("Grid",w,A),O=(0,m.I$)("Grid",s=>{const r=(0,V.IX)(s,{gridColumns:24}),y={"-sm":r.screenSMMin,"-md":r.screenMDMin,"-lg":r.screenLGMin,"-xl":r.screenXLMin,"-xxl":r.screenXXLMin};return[Y(r),z(r,""),z(r,"-xs"),Object.keys(y).map(u=>J(r,y[u],u)).reduce((u,b)=>Object.assign(Object.assign({},u),b),{})]},C)},71230:function(ae,L,n){var a=n(92820);L.Z=a.Z},66309:function(ae,L,n){n.d(L,{Z:function(){return re}});var a=n(67294),m=n(93967),V=n.n(m),w=n(98423),Y=n(98787),l=n(69760),z=n(96159),J=n(45353),A=n(53124),C=n(11568),h=n(10274),O=n(14747),s=n(83262),r=n(83559);const y=t=>{const{paddingXXS:$,lineWidth:j,tagPaddingHorizontal:i,componentCls:g,calc:e}=t,o=e(i).sub(j).equal(),c=e($).sub(j).equal();return{[g]:Object.assign(Object.assign({},(0,O.Wf)(t)),{display:"inline-block",height:"auto",marginInlineEnd:t.marginXS,paddingInline:o,fontSize:t.tagFontSize,lineHeight:t.tagLineHeight,whiteSpace:"nowrap",background:t.defaultBg,border:`${(0,C.bf)(t.lineWidth)} ${t.lineType} ${t.colorBorder}`,borderRadius:t.borderRadiusSM,opacity:1,transition:`all ${t.motionDurationMid}`,textAlign:"start",position:"relative",[`&${g}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:t.defaultColor},[`${g}-close-icon`]:{marginInlineStart:c,fontSize:t.tagIconSize,color:t.colorTextDescription,cursor:"pointer",transition:`all ${t.motionDurationMid}`,"&:hover":{color:t.colorTextHeading}},[`&${g}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${t.iconCls}-close, ${t.iconCls}-close:hover`]:{color:t.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${g}-checkable-checked):hover`]:{color:t.colorPrimary,backgroundColor:t.colorFillSecondary},"&:active, &-checked":{color:t.colorTextLightSolid},"&-checked":{backgroundColor:t.colorPrimary,"&:hover":{backgroundColor:t.colorPrimaryHover}},"&:active":{backgroundColor:t.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${t.iconCls} + span, > span + ${t.iconCls}`]:{marginInlineStart:o}}),[`${g}-borderless`]:{borderColor:"transparent",background:t.tagBorderlessBg}}},u=t=>{const{lineWidth:$,fontSizeIcon:j,calc:i}=t,g=t.fontSizeSM;return(0,s.IX)(t,{tagFontSize:g,tagLineHeight:(0,C.bf)(i(t.lineHeightSM).mul(g).equal()),tagIconSize:i(j).sub(i($).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:t.defaultBg})},b=t=>({defaultBg:new h.C(t.colorFillQuaternary).onBackground(t.colorBgContainer).toHexString(),defaultColor:t.colorText});var d=(0,r.I$)("Tag",t=>{const $=u(t);return y($)},b),p=function(t,$){var j={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&$.indexOf(i)<0&&(j[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,i=Object.getOwnPropertySymbols(t);g<i.length;g++)$.indexOf(i[g])<0&&Object.prototype.propertyIsEnumerable.call(t,i[g])&&(j[i[g]]=t[i[g]]);return j},D=a.forwardRef((t,$)=>{const{prefixCls:j,style:i,className:g,checked:e,onChange:o,onClick:c}=t,f=p(t,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:T,tag:x}=a.useContext(A.E_),Z=F=>{o==null||o(!e),c==null||c(F)},N=T("tag",j),[K,W,E]=d(N),P=V()(N,`${N}-checkable`,{[`${N}-checkable-checked`]:e},x==null?void 0:x.className,g,W,E);return K(a.createElement("span",Object.assign({},f,{ref:$,style:Object.assign(Object.assign({},i),x==null?void 0:x.style),className:P,onClick:Z})))}),G=n(98719);const M=t=>(0,G.Z)(t,($,j)=>{let{textColor:i,lightBorderColor:g,lightColor:e,darkColor:o}=j;return{[`${t.componentCls}${t.componentCls}-${$}`]:{color:i,background:e,borderColor:g,"&-inverse":{color:t.colorTextLightSolid,background:o,borderColor:o},[`&${t.componentCls}-borderless`]:{borderColor:"transparent"}}}});var S=(0,r.bk)(["Tag","preset"],t=>{const $=u(t);return M($)},b);function I(t){return typeof t!="string"?t:t.charAt(0).toUpperCase()+t.slice(1)}const _=(t,$,j)=>{const i=I(j);return{[`${t.componentCls}${t.componentCls}-${$}`]:{color:t[`color${j}`],background:t[`color${i}Bg`],borderColor:t[`color${i}Border`],[`&${t.componentCls}-borderless`]:{borderColor:"transparent"}}}};var te=(0,r.bk)(["Tag","status"],t=>{const $=u(t);return[_($,"success","Success"),_($,"processing","Info"),_($,"error","Error"),_($,"warning","Warning")]},b),B=function(t,$){var j={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&$.indexOf(i)<0&&(j[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,i=Object.getOwnPropertySymbols(t);g<i.length;g++)$.indexOf(i[g])<0&&Object.prototype.propertyIsEnumerable.call(t,i[g])&&(j[i[g]]=t[i[g]]);return j};const ne=a.forwardRef((t,$)=>{const{prefixCls:j,className:i,rootClassName:g,style:e,children:o,icon:c,color:f,onClose:T,bordered:x=!0,visible:Z}=t,N=B(t,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:K,direction:W,tag:E}=a.useContext(A.E_),[P,F]=a.useState(!0),k=(0,w.Z)(N,["closeIcon","closable"]);a.useEffect(()=>{Z!==void 0&&F(Z)},[Z]);const R=(0,Y.o2)(f),Q=(0,Y.yT)(f),q=R||Q,fe=Object.assign(Object.assign({backgroundColor:f&&!q?f:void 0},E==null?void 0:E.style),e),H=K("tag",j),[ie,me,he]=d(H),pe=V()(H,E==null?void 0:E.className,{[`${H}-${f}`]:q,[`${H}-has-color`]:f&&!q,[`${H}-hidden`]:!P,[`${H}-rtl`]:W==="rtl",[`${H}-borderless`]:!x},i,g,me,he),$e=ue=>{ue.stopPropagation(),T==null||T(ue),!ue.defaultPrevented&&F(!1)},[,xe]=(0,l.Z)((0,l.w)(t),(0,l.w)(E),{closable:!1,closeIconRender:ue=>{const Oe=a.createElement("span",{className:`${H}-close-icon`,onClick:$e},ue);return(0,z.wm)(ue,Oe,le=>({onClick:oe=>{var ve;(ve=le==null?void 0:le.onClick)===null||ve===void 0||ve.call(le,oe),$e(oe)},className:V()(le==null?void 0:le.className,`${H}-close-icon`)}))}}),ce=typeof N.onClick=="function"||o&&o.type==="a",de=c||null,X=de?a.createElement(a.Fragment,null,de,o&&a.createElement("span",null,o)):o,be=a.createElement("span",Object.assign({},k,{ref:$,className:pe,style:fe}),X,xe,R&&a.createElement(S,{key:"preset",prefixCls:H}),Q&&a.createElement(te,{key:"status",prefixCls:H}));return ie(ce?a.createElement(J.Z,{component:"Tag"},be):be)});ne.CheckableTag=D;var re=ne}}]);
