"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6476],{69760:function(me,Y,o){o.d(Y,{Z:function(){return _},w:function(){return G}});var t=o(67294),k=o(97937),F=o(64217);function G(h){if(h)return{closable:h.closable,closeIcon:h.closeIcon}}function U(h){const{closable:u,closeIcon:g}=h||{};return t.useMemo(()=>{if(!u&&(u===!1||g===!1||g===null))return!1;if(u===void 0&&g===void 0)return null;let a={closeIcon:typeof g!="boolean"&&g!==null?g:void 0};return u&&typeof u=="object"&&(a=Object.assign(Object.assign({},a),u)),a},[u,g])}function A(){const h={};for(var u=arguments.length,g=new Array(u),a=0;a<u;a++)g[a]=arguments[a];return g.forEach(m=>{m&&Object.keys(m).forEach(b=>{m[b]!==void 0&&(h[b]=m[b])})}),h}const q={};function _(h,u){let g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:q;const a=U(h),m=U(u),b=typeof a!="boolean"?!!(a!=null&&a.disabled):!1,E=t.useMemo(()=>Object.assign({closeIcon:t.createElement(k.Z,null)},g),[g]),R=t.useMemo(()=>a===!1?!1:a?A(E,m,a):m===!1?!1:m?A(E,m):E.closable?E:!1,[a,m,E]);return t.useMemo(()=>{if(R===!1)return[!1,null,b];const{closeIconRender:B}=E,{closeIcon:L}=R;let $=L;if($!=null){B&&($=B(L));const Q=(0,F.Z)(R,!0);Object.keys(Q).length&&($=t.isValidElement($)?t.cloneElement($,Q):t.createElement("span",Object.assign({},Q),$))}return[!0,$,b]},[R,E])}},30291:function(me,Y,o){o.d(Y,{Z:function(){return Q}});var t=o(67294),k=o(93967),F=o.n(k),G=o(48555),U=o(98423),A=o(48783),q=o(53124),_=o(83559);const h=C=>{const{componentCls:P}=C;return{[P]:{position:"fixed",zIndex:C.zIndexPopup}}},u=C=>({zIndexPopup:C.zIndexBase+10});var g=(0,_.I$)("Affix",h,u);function a(C){return C!==window?C.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function m(C,P,y){if(y!==void 0&&Math.round(P.top)>Math.round(C.top)-y)return y+P.top}function b(C,P,y){if(y!==void 0&&Math.round(P.bottom)<Math.round(C.bottom)+y){const ee=window.innerHeight-P.bottom;return y+ee}}const E=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"];function R(){return typeof window!="undefined"?window:null}const B=0,L=1;var Q=t.forwardRef((C,P)=>{var y;const{style:ee,offsetTop:te,offsetBottom:w,prefixCls:ae,className:ce,rootClassName:ve,children:oe,target:V,onChange:e}=C,{getPrefixCls:l,getTargetContainer:i}=t.useContext(q.E_),n=l("affix",ae),[r,T]=t.useState(!1),[d,z]=t.useState(),[N,W]=t.useState(),I=t.useRef(B),j=t.useRef(null),x=t.useRef(),M=t.useRef(null),J=t.useRef(null),v=t.useRef(null),p=(y=V!=null?V:i)!==null&&y!==void 0?y:R,X=w===void 0&&te===void 0?0:te,ie=()=>{if(I.current!==L||!J.current||!M.current||!p)return;const f=p();if(f){const c={status:B},s=a(M.current);if(s.top===0&&s.left===0&&s.width===0&&s.height===0)return;const D=a(f),O=m(s,D,X),se=b(s,D,w);O!==void 0?(c.affixStyle={position:"fixed",top:O,width:s.width,height:s.height},c.placeholderStyle={width:s.width,height:s.height}):se!==void 0&&(c.affixStyle={position:"fixed",bottom:se,width:s.width,height:s.height},c.placeholderStyle={width:s.width,height:s.height}),c.lastAffix=!!c.affixStyle,r!==c.lastAffix&&(e==null||e(c.lastAffix)),I.current=c.status,z(c.affixStyle),W(c.placeholderStyle),T(c.lastAffix)}},ne=()=>{var f;I.current=L,ie()},Z=(0,A.Z)(()=>{ne()}),H=(0,A.Z)(()=>{if(p&&d){const f=p();if(f&&M.current){const c=a(f),s=a(M.current),D=m(s,c,X),O=b(s,c,w);if(D!==void 0&&d.top===D||O!==void 0&&d.bottom===O)return}}ne()}),re=()=>{const f=p==null?void 0:p();f&&(E.forEach(c=>{var s;x.current&&((s=j.current)===null||s===void 0||s.removeEventListener(c,x.current)),f==null||f.addEventListener(c,H)}),j.current=f,x.current=H)},S=()=>{v.current&&(clearTimeout(v.current),v.current=null);const f=p==null?void 0:p();E.forEach(c=>{var s;f==null||f.removeEventListener(c,H),x.current&&((s=j.current)===null||s===void 0||s.removeEventListener(c,x.current))}),Z.cancel(),H.cancel()};t.useImperativeHandle(P,()=>({updatePosition:Z})),t.useEffect(()=>(v.current=setTimeout(re),()=>S()),[]),t.useEffect(()=>{re()},[V,d]),t.useEffect(()=>{Z()},[V,te,w]);const[de,fe,ue]=g(n),ge=F()(ve,fe,n,ue),le=F()({[ge]:d});let Ce=(0,U.Z)(C,["prefixCls","offsetTop","offsetBottom","target","onChange","rootClassName"]);return de(t.createElement(G.Z,{onResize:Z},t.createElement("div",Object.assign({style:ee,className:ce,ref:M},Ce),d&&t.createElement("div",{style:N,"aria-hidden":"true"}),t.createElement("div",{className:le,ref:J,style:d},t.createElement(G.Z,{onResize:Z},oe)))))})},66309:function(me,Y,o){o.d(Y,{Z:function(){return V}});var t=o(67294),k=o(93967),F=o.n(k),G=o(98423),U=o(98787),A=o(69760),q=o(96159),_=o(45353),h=o(53124),u=o(11568),g=o(10274),a=o(14747),m=o(83262),b=o(83559);const E=e=>{const{paddingXXS:l,lineWidth:i,tagPaddingHorizontal:n,componentCls:r,calc:T}=e,d=T(n).sub(i).equal(),z=T(l).sub(i).equal();return{[r]:Object.assign(Object.assign({},(0,a.Wf)(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:d,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${(0,u.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${r}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${r}-close-icon`]:{marginInlineStart:z,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${r}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${r}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:d}}),[`${r}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},R=e=>{const{lineWidth:l,fontSizeIcon:i,calc:n}=e,r=e.fontSizeSM;return(0,m.IX)(e,{tagFontSize:r,tagLineHeight:(0,u.bf)(n(e.lineHeightSM).mul(r).equal()),tagIconSize:n(i).sub(n(l).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg})},B=e=>({defaultBg:new g.C(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText});var L=(0,b.I$)("Tag",e=>{const l=R(e);return E(l)},B),$=function(e,l){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&l.indexOf(n)<0&&(i[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)l.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(i[n[r]]=e[n[r]]);return i},C=t.forwardRef((e,l)=>{const{prefixCls:i,style:n,className:r,checked:T,onChange:d,onClick:z}=e,N=$(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:W,tag:I}=t.useContext(h.E_),j=X=>{d==null||d(!T),z==null||z(X)},x=W("tag",i),[M,J,v]=L(x),p=F()(x,`${x}-checkable`,{[`${x}-checkable-checked`]:T},I==null?void 0:I.className,r,J,v);return M(t.createElement("span",Object.assign({},N,{ref:l,style:Object.assign(Object.assign({},n),I==null?void 0:I.style),className:p,onClick:j})))}),P=o(98719);const y=e=>(0,P.Z)(e,(l,i)=>{let{textColor:n,lightBorderColor:r,lightColor:T,darkColor:d}=i;return{[`${e.componentCls}${e.componentCls}-${l}`]:{color:n,background:T,borderColor:r,"&-inverse":{color:e.colorTextLightSolid,background:d,borderColor:d},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}});var ee=(0,b.bk)(["Tag","preset"],e=>{const l=R(e);return y(l)},B);function te(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}const w=(e,l,i)=>{const n=te(i);return{[`${e.componentCls}${e.componentCls}-${l}`]:{color:e[`color${i}`],background:e[`color${n}Bg`],borderColor:e[`color${n}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}};var ae=(0,b.bk)(["Tag","status"],e=>{const l=R(e);return[w(l,"success","Success"),w(l,"processing","Info"),w(l,"error","Error"),w(l,"warning","Warning")]},B),ce=function(e,l){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&l.indexOf(n)<0&&(i[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)l.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(i[n[r]]=e[n[r]]);return i};const oe=t.forwardRef((e,l)=>{const{prefixCls:i,className:n,rootClassName:r,style:T,children:d,icon:z,color:N,onClose:W,bordered:I=!0,visible:j}=e,x=ce(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:M,direction:J,tag:v}=t.useContext(h.E_),[p,X]=t.useState(!0),ie=(0,G.Z)(x,["closeIcon","closable"]);t.useEffect(()=>{j!==void 0&&X(j)},[j]);const ne=(0,U.o2)(N),Z=(0,U.yT)(N),H=ne||Z,re=Object.assign(Object.assign({backgroundColor:N&&!H?N:void 0},v==null?void 0:v.style),T),S=M("tag",i),[de,fe,ue]=L(S),ge=F()(S,v==null?void 0:v.className,{[`${S}-${N}`]:H,[`${S}-has-color`]:N&&!H,[`${S}-hidden`]:!p,[`${S}-rtl`]:J==="rtl",[`${S}-borderless`]:!I},n,r,fe,ue),le=O=>{O.stopPropagation(),W==null||W(O),!O.defaultPrevented&&X(!1)},[,Ce]=(0,A.Z)((0,A.w)(e),(0,A.w)(v),{closable:!1,closeIconRender:O=>{const se=t.createElement("span",{className:`${S}-close-icon`,onClick:le},O);return(0,q.wm)(O,se,K=>({onClick:pe=>{var he;(he=K==null?void 0:K.onClick)===null||he===void 0||he.call(K,pe),le(pe)},className:F()(K==null?void 0:K.className,`${S}-close-icon`)}))}}),f=typeof x.onClick=="function"||d&&d.type==="a",c=z||null,s=c?t.createElement(t.Fragment,null,c,d&&t.createElement("span",null,d)):d,D=t.createElement("span",Object.assign({},ie,{ref:l,className:ge,style:re}),s,Ce,ne&&t.createElement(ee,{key:"preset",prefixCls:S}),Z&&t.createElement(ae,{key:"status",prefixCls:S}));return de(f?t.createElement(_.Z,{component:"Tag"},D):D)});oe.CheckableTag=C;var V=oe}}]);