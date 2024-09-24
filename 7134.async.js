"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7134],{81643:function(le,$,e){e.d($,{Z:function(){return t}});const t=S=>S?typeof S=="function"?S():S:null},7134:function(le,$,e){e.d($,{C:function(){return de}});var t=e(67294),S=e(93967),M=e.n(S),k=e(48555),G=e(42550),w=e(74443),F=e(53124),H=e(35792),X=e(98675),q=e(25378),n=t.createContext({}),d=e(11568),a=e(14747),l=e(83559),r=e(83262);const P=o=>{const{antCls:i,componentCls:c,iconCls:s,avatarBg:p,avatarColor:L,containerSize:R,containerSizeLG:z,containerSizeSM:D,textFontSize:x,textFontSizeLG:N,textFontSizeSM:Y,borderRadius:y,borderRadiusLG:g,borderRadiusSM:I,lineWidth:K,lineType:ae}=o,u=(T,B,te)=>({width:T,height:T,borderRadius:"50%",[`&${c}-square`]:{borderRadius:te},[`&${c}-icon`]:{fontSize:B,[`> ${s}`]:{margin:0}}});return{[c]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,a.Wf)(o)),{position:"relative",display:"inline-flex",justifyContent:"center",alignItems:"center",overflow:"hidden",color:L,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:p,border:`${(0,d.bf)(K)} ${ae} transparent`,"&-image":{background:"transparent"},[`${i}-image-img`]:{display:"block"}}),u(R,x,y)),{"&-lg":Object.assign({},u(z,N,g)),"&-sm":Object.assign({},u(D,Y,I)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},C=o=>{const{componentCls:i,groupBorderColor:c,groupOverlapping:s,groupSpace:p}=o;return{[`${i}-group`]:{display:"inline-flex",[i]:{borderColor:c},"> *:not(:first-child)":{marginInlineStart:s}},[`${i}-group-popover`]:{[`${i} + ${i}`]:{marginInlineStart:p}}}},v=o=>{const{controlHeight:i,controlHeightLG:c,controlHeightSM:s,fontSize:p,fontSizeLG:L,fontSizeXL:R,fontSizeHeading3:z,marginXS:D,marginXXS:x,colorBorderBg:N}=o;return{containerSize:i,containerSizeLG:c,containerSizeSM:s,textFontSize:Math.round((L+R)/2),textFontSizeLG:z,textFontSizeSM:p,groupSpace:x,groupOverlapping:-D,groupBorderColor:N}};var f=(0,l.I$)("Avatar",o=>{const{colorTextLightSolid:i,colorTextPlaceholder:c}=o,s=(0,r.IX)(o,{avatarBg:c,avatarColor:i});return[P(s),C(s)]},v),W=function(o,i){var c={};for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&i.indexOf(s)<0&&(c[s]=o[s]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,s=Object.getOwnPropertySymbols(o);p<s.length;p++)i.indexOf(s[p])<0&&Object.prototype.propertyIsEnumerable.call(o,s[p])&&(c[s[p]]=o[s[p]]);return c};const j=(o,i)=>{const[c,s]=t.useState(1),[p,L]=t.useState(!1),[R,z]=t.useState(!0),D=t.useRef(null),x=t.useRef(null),N=(0,G.sQ)(i,D),{getPrefixCls:Y,avatar:y}=t.useContext(F.E_),g=t.useContext(n),I=()=>{if(!x.current||!D.current)return;const E=x.current.offsetWidth,O=D.current.offsetWidth;if(E!==0&&O!==0){const{gap:V=4}=o;V*2<O&&s(O-V*2<E?(O-V*2)/E:1)}};t.useEffect(()=>{L(!0)},[]),t.useEffect(()=>{z(!0),s(1)},[o.src]),t.useEffect(I,[o.gap]);const K=()=>{const{onError:E}=o;(E==null?void 0:E())!==!1&&z(!1)},{prefixCls:ae,shape:u,size:T,src:B,srcSet:te,icon:J,className:fe,rootClassName:pe,alt:ve,draggable:ne,children:U,crossOrigin:se}=o,Z=W(o,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),h=(0,X.Z)(E=>{var O,V;return(V=(O=T!=null?T:g==null?void 0:g.size)!==null&&O!==void 0?O:E)!==null&&V!==void 0?V:"default"}),Ce=Object.keys(typeof h=="object"?h||{}:{}).some(E=>["xs","sm","md","lg","xl","xxl"].includes(E)),ue=(0,q.Z)(Ce),Ee=t.useMemo(()=>{if(typeof h!="object")return{};const E=w.c4.find(V=>ue[V]),O=h[E];return O?{width:O,height:O,fontSize:O&&(J||U)?O/2:18}:{}},[ue,h]),b=Y("avatar",ae),Oe=(0,H.Z)(b),[he,ye,xe]=f(b,Oe),Se=M()({[`${b}-lg`]:h==="large",[`${b}-sm`]:h==="small"}),Pe=t.isValidElement(B),Me=u||(g==null?void 0:g.shape)||"circle",_e=M()(b,Se,y==null?void 0:y.className,`${b}-${Me}`,{[`${b}-image`]:Pe||B&&R,[`${b}-icon`]:!!J},xe,Oe,fe,pe,ye),De=typeof h=="number"?{width:h,height:h,fontSize:J?h/2:18}:{};let oe;if(typeof B=="string"&&R)oe=t.createElement("img",{src:B,draggable:ne,srcSet:te,onError:K,alt:ve,crossOrigin:se});else if(Pe)oe=B;else if(J)oe=J;else if(p||c!==1){const E=`scale(${c})`,O={msTransform:E,WebkitTransform:E,transform:E};oe=t.createElement(k.Z,{onResize:I},t.createElement("span",{className:`${b}-string`,ref:x,style:Object.assign({},O)},U))}else oe=t.createElement("span",{className:`${b}-string`,style:{opacity:0},ref:x},U);return delete Z.onError,delete Z.gap,he(t.createElement("span",Object.assign({},Z,{style:Object.assign(Object.assign(Object.assign(Object.assign({},De),Ee),y==null?void 0:y.style),Z.style),className:_e,ref:N}),oe))};var Q=t.forwardRef(j),ee=e(50344),_=e(96159),ge=e(55241);const ie=o=>{const{size:i,shape:c}=t.useContext(n),s=t.useMemo(()=>({size:o.size||i,shape:o.shape||c}),[o.size,o.shape,i,c]);return t.createElement(n.Provider,{value:s},o.children)};var me=o=>{var i,c,s;const{getPrefixCls:p,direction:L}=t.useContext(F.E_),{prefixCls:R,className:z,rootClassName:D,style:x,maxCount:N,maxStyle:Y,size:y,shape:g,maxPopoverPlacement:I,maxPopoverTrigger:K,children:ae,max:u}=o,T=p("avatar",R),B=`${T}-group`,te=(0,H.Z)(T),[J,fe,pe]=f(T,te),ve=M()(B,{[`${B}-rtl`]:L==="rtl"},pe,te,z,D,fe),ne=(0,ee.Z)(ae).map((Z,h)=>(0,_.Tm)(Z,{key:`avatar-key-${h}`})),U=(u==null?void 0:u.count)||N,se=ne.length;if(U&&U<se){const Z=ne.slice(0,U),h=ne.slice(U,se),Ce=(u==null?void 0:u.style)||Y,ue=((i=u==null?void 0:u.popover)===null||i===void 0?void 0:i.trigger)||K||"hover",Ee=((c=u==null?void 0:u.popover)===null||c===void 0?void 0:c.placement)||I||"top",b=Object.assign(Object.assign({content:h},u==null?void 0:u.popover),{overlayClassName:M()(`${B}-popover`,(s=u==null?void 0:u.popover)===null||s===void 0?void 0:s.overlayClassName),placement:Ee,trigger:ue});return Z.push(t.createElement(ge.Z,Object.assign({key:"avatar-popover-key",destroyTooltipOnHide:!0},b),t.createElement(Q,{style:Ce},`+${se-U}`))),J(t.createElement(ie,{shape:g,size:y},t.createElement("div",{className:ve,style:x},Z)))}return J(t.createElement(ie,{shape:g,size:y},t.createElement("div",{className:ve,style:x},ne)))};const re=Q;re.Group=me;var de=re},66330:function(le,$,e){e.d($,{aV:function(){return X}});var t=e(67294),S=e(93967),M=e.n(S),k=e(92419),G=e(81643),w=e(53124),F=e(20136),H=function(n,d){var a={};for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&d.indexOf(l)<0&&(a[l]=n[l]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,l=Object.getOwnPropertySymbols(n);r<l.length;r++)d.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(n,l[r])&&(a[l[r]]=n[l[r]]);return a};const X=n=>{let{title:d,content:a,prefixCls:l}=n;return!d&&!a?null:t.createElement(t.Fragment,null,d&&t.createElement("div",{className:`${l}-title`},d),a&&t.createElement("div",{className:`${l}-inner-content`},a))},q=n=>{const{hashId:d,prefixCls:a,className:l,style:r,placement:P="top",title:C,content:v,children:f}=n,W=(0,G.Z)(C),j=(0,G.Z)(v),A=M()(d,a,`${a}-pure`,`${a}-placement-${P}`,l);return t.createElement("div",{className:A,style:r},t.createElement("div",{className:`${a}-arrow`}),t.createElement(k.G,Object.assign({},n,{className:d,prefixCls:a}),f||t.createElement(X,{prefixCls:a,title:W,content:j})))},m=n=>{const{prefixCls:d,className:a}=n,l=H(n,["prefixCls","className"]),{getPrefixCls:r}=t.useContext(w.E_),P=r("popover",d),[C,v,f]=(0,F.Z)(P);return C(t.createElement(q,Object.assign({},l,{prefixCls:P,hashId:v,className:M()(a,f)})))};$.ZP=m},55241:function(le,$,e){var t=e(67294),S=e(93967),M=e.n(S),k=e(21770),G=e(15105),w=e(81643),F=e(33603),H=e(96159),X=e(53124),q=e(83062),m=e(66330),n=e(20136),d=function(r,P){var C={};for(var v in r)Object.prototype.hasOwnProperty.call(r,v)&&P.indexOf(v)<0&&(C[v]=r[v]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,v=Object.getOwnPropertySymbols(r);f<v.length;f++)P.indexOf(v[f])<0&&Object.prototype.propertyIsEnumerable.call(r,v[f])&&(C[v[f]]=r[v[f]]);return C};const l=t.forwardRef((r,P)=>{var C,v;const{prefixCls:f,title:W,content:j,overlayClassName:A,placement:Q="top",trigger:ee="hover",children:_,mouseEnterDelay:ge=.1,mouseLeaveDelay:ie=.1,onOpenChange:ce,overlayStyle:me={}}=r,re=d(r,["prefixCls","title","content","overlayClassName","placement","trigger","children","mouseEnterDelay","mouseLeaveDelay","onOpenChange","overlayStyle"]),{getPrefixCls:de}=t.useContext(X.E_),o=de("popover",f),[i,c,s]=(0,n.Z)(o),p=de(),L=M()(A,c,s),[R,z]=(0,k.Z)(!1,{value:(C=r.open)!==null&&C!==void 0?C:r.visible,defaultValue:(v=r.defaultOpen)!==null&&v!==void 0?v:r.defaultVisible}),D=(g,I)=>{z(g,!0),ce==null||ce(g,I)},x=g=>{g.keyCode===G.Z.ESC&&D(!1,g)},N=g=>{D(g)},Y=(0,w.Z)(W),y=(0,w.Z)(j);return i(t.createElement(q.Z,Object.assign({placement:Q,trigger:ee,mouseEnterDelay:ge,mouseLeaveDelay:ie,overlayStyle:me},re,{prefixCls:o,overlayClassName:L,ref:P,open:R,onOpenChange:N,overlay:Y||y?t.createElement(m.aV,{prefixCls:o,title:Y,content:y}):null,transitionName:(0,F.m)(p,"zoom-big",re.transitionName),"data-popover-inject":!0}),(0,H.Tm)(_,{onKeyDown:g=>{var I,K;t.isValidElement(_)&&((K=_==null?void 0:(I=_.props).onKeyDown)===null||K===void 0||K.call(I,g)),x(g)}})))});l._InternalPanelDoNotUseOrYouWillBeFired=m.ZP,$.Z=l},20136:function(le,$,e){var t=e(14747),S=e(50438),M=e(97414),k=e(79511),G=e(8796),w=e(83559),F=e(83262);const H=m=>{const{componentCls:n,popoverColor:d,titleMinWidth:a,fontWeightStrong:l,innerPadding:r,boxShadowSecondary:P,colorTextHeading:C,borderRadiusLG:v,zIndexPopup:f,titleMarginBottom:W,colorBgElevated:j,popoverBg:A,titleBorderBottom:Q,innerContentPadding:ee,titlePadding:_}=m;return[{[n]:Object.assign(Object.assign({},(0,t.Wf)(m)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:f,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text","--valid-offset-x":"var(--arrow-offset-horizontal, var(--arrow-x))",transformOrigin:["var(--valid-offset-x, 50%)","var(--arrow-y, 50%)"].join(" "),"--antd-arrow-background-color":j,width:"max-content",maxWidth:"100vw","&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${n}-content`]:{position:"relative"},[`${n}-inner`]:{backgroundColor:A,backgroundClip:"padding-box",borderRadius:v,boxShadow:P,padding:r},[`${n}-title`]:{minWidth:a,marginBottom:W,color:C,fontWeight:l,borderBottom:Q,padding:_},[`${n}-inner-content`]:{color:d,padding:ee}})},(0,M.ZP)(m,"var(--antd-arrow-background-color)"),{[`${n}-pure`]:{position:"relative",maxWidth:"none",margin:m.sizePopupArrow,display:"inline-block",[`${n}-content`]:{display:"inline-block"}}}]},X=m=>{const{componentCls:n}=m;return{[n]:G.i.map(d=>{const a=m[`${d}6`];return{[`&${n}-${d}`]:{"--antd-arrow-background-color":a,[`${n}-inner`]:{backgroundColor:a},[`${n}-arrow`]:{background:"transparent"}}}})}},q=m=>{const{lineWidth:n,controlHeight:d,fontHeight:a,padding:l,wireframe:r,zIndexPopupBase:P,borderRadiusLG:C,marginXS:v,lineType:f,colorSplit:W,paddingSM:j}=m,A=d-a,Q=A/2,ee=A/2-n,_=l;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:P+30},(0,k.w)(m)),(0,M.wZ)({contentRadius:C,limitVerticalRadius:!0})),{innerPadding:r?0:12,titleMarginBottom:r?0:v,titlePadding:r?`${Q}px ${_}px ${ee}px`:0,titleBorderBottom:r?`${n}px ${f} ${W}`:"none",innerContentPadding:r?`${j}px ${_}px`:0})};$.Z=(0,w.I$)("Popover",m=>{const{colorBgElevated:n,colorText:d}=m,a=(0,F.IX)(m,{popoverBg:n,popoverColor:d});return[H(a),X(a),(0,S._y)(a,"zoom-big")]},q,{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]})}}]);
