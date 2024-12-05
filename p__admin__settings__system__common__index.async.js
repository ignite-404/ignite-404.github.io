"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6622],{90262:function(nn,O,t){t.r(O);var $=t(97857),j=t.n($),y=t(5574),T=t.n(y),L=t(68421),B=t(45360),U=t(4393),v=t(28036),l=t(11346),u=t(72269),E=t(67294),M=t(30699),m=t(95813),h=t(85893);O.default=function(){var d=(0,E.useState)({}),S=T()(d,2),w=S[0],f=S[1],W=(0,L.Z)(M.x1.sys.manageSettingGetPlatformSettings,{manual:!0,onSuccess:function(x,Q){var Z;f(((Z=x.data)===null||Z===void 0?void 0:Z.Data)||{})}}),H=(0,L.Z)(M.x1.sys.manageSettingSavePlatformSettings,{manual:!0,onSuccess:function(x,Q){(0,m._y)(x,function(){B.ZP.success("\u4FDD\u5B58\u6210\u529F"),W.run()})}}),V=function(x){H.run(x)};return(0,E.useEffect)(function(){W.run()},[]),(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(U.Z,{title:"\u5E73\u53F0\u8BBE\u7F6E",loading:W.loading,style:{marginBottom:10},extra:(0,h.jsx)(v.ZP,{loading:H.loading,type:"primary",onClick:function(){V(w)},children:"\u4FDD\u5B58\u8BBE\u7F6E"}),children:(0,h.jsx)(l.Z,{labelCol:{flex:"210px"},labelAlign:"right",wrapperCol:{flex:1},children:(0,h.jsx)(l.Z.Item,{label:"\u5141\u8BB8\u5BC6\u7801\u6CE8\u518C",children:(0,h.jsx)(u.Z,{checked:w.PasswordRegEnabled||!1,onChange:function(x){f(j()(j()({},w),{},{PasswordRegEnabled:x}))}})})})})})}},74443:function(nn,O,t){t.d(O,{ZP:function(){return B},c4:function(){return y},m9:function(){return U}});var $=t(67294),j=t(29691);const y=["xxl","xl","lg","md","sm","xs"],T=v=>({xs:`(max-width: ${v.screenXSMax}px)`,sm:`(min-width: ${v.screenSM}px)`,md:`(min-width: ${v.screenMD}px)`,lg:`(min-width: ${v.screenLG}px)`,xl:`(min-width: ${v.screenXL}px)`,xxl:`(min-width: ${v.screenXXL}px)`}),L=v=>{const l=v,u=[].concat(y).reverse();return u.forEach((E,M)=>{const m=E.toUpperCase(),h=`screen${m}Min`,d=`screen${m}`;if(!(l[h]<=l[d]))throw new Error(`${h}<=${d} fails : !(${l[h]}<=${l[d]})`);if(M<u.length-1){const S=`screen${m}Max`;if(!(l[d]<=l[S]))throw new Error(`${d}<=${S} fails : !(${l[d]}<=${l[S]})`);const f=`screen${u[M+1].toUpperCase()}Min`;if(!(l[S]<=l[f]))throw new Error(`${S}<=${f} fails : !(${l[S]}<=${l[f]})`)}}),v};function B(){const[,v]=(0,j.ZP)(),l=T(L(v));return $.useMemo(()=>{const u=new Map;let E=-1,M={};return{matchHandlers:{},dispatch(m){return M=m,u.forEach(h=>h(M)),u.size>=1},subscribe(m){return u.size||this.register(),E+=1,u.set(E,m),m(M),E},unsubscribe(m){u.delete(m),u.size||this.unregister()},unregister(){Object.keys(l).forEach(m=>{const h=l[m],d=this.matchHandlers[h];d==null||d.mql.removeListener(d==null?void 0:d.listener)}),u.clear()},register(){Object.keys(l).forEach(m=>{const h=l[m],d=w=>{let{matches:f}=w;this.dispatch(Object.assign(Object.assign({},M),{[m]:f}))},S=window.matchMedia(h);S.addListener(d),this.matchHandlers[h]={mql:S,listener:d},d(S)})},responsiveMap:l}},[v])}const U=(v,l)=>{if(l&&typeof l=="object")for(let u=0;u<y.length;u++){const E=y[u];if(v[E]&&l[E]!==void 0)return l[E]}}},72269:function(nn,O,t){t.d(O,{Z:function(){return rn}});var $=t(67294),j=t(50888),y=t(93967),T=t.n(y),L=t(87462),B=t(4942),U=t(97685),v=t(45987),l=t(21770),u=t(15105),E=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],M=$.forwardRef(function(n,e){var c,i=n.prefixCls,r=i===void 0?"rc-switch":i,g=n.className,C=n.checked,s=n.defaultChecked,a=n.disabled,o=n.loadingIcon,p=n.checkedChildren,b=n.unCheckedChildren,z=n.onClick,P=n.onChange,K=n.onKeyDown,G=(0,v.Z)(n,E),J=(0,l.Z)(!1,{value:C,defaultValue:s}),F=(0,U.Z)(J,2),A=F[0],D=F[1];function N(I,X){var R=A;return a||(R=I,D(R),P==null||P(R,X)),R}function Y(I){I.which===u.Z.LEFT?N(!1,I):I.which===u.Z.RIGHT&&N(!0,I),K==null||K(I)}function _(I){var X=N(!A,I);z==null||z(X,I)}var q=T()(r,g,(c={},(0,B.Z)(c,"".concat(r,"-checked"),A),(0,B.Z)(c,"".concat(r,"-disabled"),a),c));return $.createElement("button",(0,L.Z)({},G,{type:"button",role:"switch","aria-checked":A,disabled:a,className:q,ref:e,onKeyDown:Y,onClick:_}),o,$.createElement("span",{className:"".concat(r,"-inner")},$.createElement("span",{className:"".concat(r,"-inner-checked")},p),$.createElement("span",{className:"".concat(r,"-inner-unchecked")},b)))});M.displayName="Switch";var m=M,h=t(45353),d=t(53124),S=t(98866),w=t(98675),f=t(11568),W=t(10274),H=t(14747),V=t(83559),k=t(83262);const x=n=>{const{componentCls:e,trackHeightSM:c,trackPadding:i,trackMinWidthSM:r,innerMinMarginSM:g,innerMaxMarginSM:C,handleSizeSM:s,calc:a}=n,o=`${e}-inner`,p=(0,f.bf)(a(s).add(a(i).mul(2)).equal()),b=(0,f.bf)(a(C).mul(2).equal());return{[e]:{[`&${e}-small`]:{minWidth:r,height:c,lineHeight:(0,f.bf)(c),[`${e}-inner`]:{paddingInlineStart:C,paddingInlineEnd:g,[`${o}-checked, ${o}-unchecked`]:{minHeight:c},[`${o}-checked`]:{marginInlineStart:`calc(-100% + ${p} - ${b})`,marginInlineEnd:`calc(100% - ${p} + ${b})`},[`${o}-unchecked`]:{marginTop:a(c).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`${e}-handle`]:{width:s,height:s},[`${e}-loading-icon`]:{top:a(a(s).sub(n.switchLoadingIconSize)).div(2).equal(),fontSize:n.switchLoadingIconSize},[`&${e}-checked`]:{[`${e}-inner`]:{paddingInlineStart:g,paddingInlineEnd:C,[`${o}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${o}-unchecked`]:{marginInlineStart:`calc(100% - ${p} + ${b})`,marginInlineEnd:`calc(-100% + ${p} - ${b})`}},[`${e}-handle`]:{insetInlineStart:`calc(100% - ${(0,f.bf)(a(s).add(i).equal())})`}},[`&:not(${e}-disabled):active`]:{[`&:not(${e}-checked) ${o}`]:{[`${o}-unchecked`]:{marginInlineStart:a(n.marginXXS).div(2).equal(),marginInlineEnd:a(n.marginXXS).mul(-1).div(2).equal()}},[`&${e}-checked ${o}`]:{[`${o}-checked`]:{marginInlineStart:a(n.marginXXS).mul(-1).div(2).equal(),marginInlineEnd:a(n.marginXXS).div(2).equal()}}}}}}},Q=n=>{const{componentCls:e,handleSize:c,calc:i}=n;return{[e]:{[`${e}-loading-icon${n.iconCls}`]:{position:"relative",top:i(i(c).sub(n.fontSize)).div(2).equal(),color:n.switchLoadingIconColor,verticalAlign:"top"},[`&${e}-checked ${e}-loading-icon`]:{color:n.switchColor}}}},Z=n=>{const{componentCls:e,trackPadding:c,handleBg:i,handleShadow:r,handleSize:g,calc:C}=n,s=`${e}-handle`;return{[e]:{[s]:{position:"absolute",top:c,insetInlineStart:c,width:g,height:g,transition:`all ${n.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:i,borderRadius:C(g).div(2).equal(),boxShadow:r,transition:`all ${n.switchDuration} ease-in-out`,content:'""'}},[`&${e}-checked ${s}`]:{insetInlineStart:`calc(100% - ${(0,f.bf)(C(g).add(c).equal())})`},[`&:not(${e}-disabled):active`]:{[`${s}::before`]:{insetInlineEnd:n.switchHandleActiveInset,insetInlineStart:0},[`&${e}-checked ${s}::before`]:{insetInlineEnd:0,insetInlineStart:n.switchHandleActiveInset}}}}},tn=n=>{const{componentCls:e,trackHeight:c,trackPadding:i,innerMinMargin:r,innerMaxMargin:g,handleSize:C,calc:s}=n,a=`${e}-inner`,o=(0,f.bf)(s(C).add(s(i).mul(2)).equal()),p=(0,f.bf)(s(g).mul(2).equal());return{[e]:{[a]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:g,paddingInlineEnd:r,transition:`padding-inline-start ${n.switchDuration} ease-in-out, padding-inline-end ${n.switchDuration} ease-in-out`,[`${a}-checked, ${a}-unchecked`]:{display:"block",color:n.colorTextLightSolid,fontSize:n.fontSizeSM,transition:`margin-inline-start ${n.switchDuration} ease-in-out, margin-inline-end ${n.switchDuration} ease-in-out`,pointerEvents:"none",minHeight:c},[`${a}-checked`]:{marginInlineStart:`calc(-100% + ${o} - ${p})`,marginInlineEnd:`calc(100% - ${o} + ${p})`},[`${a}-unchecked`]:{marginTop:s(c).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`&${e}-checked ${a}`]:{paddingInlineStart:r,paddingInlineEnd:g,[`${a}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${a}-unchecked`]:{marginInlineStart:`calc(100% - ${o} + ${p})`,marginInlineEnd:`calc(-100% + ${o} - ${p})`}},[`&:not(${e}-disabled):active`]:{[`&:not(${e}-checked) ${a}`]:{[`${a}-unchecked`]:{marginInlineStart:s(i).mul(2).equal(),marginInlineEnd:s(i).mul(-1).mul(2).equal()}},[`&${e}-checked ${a}`]:{[`${a}-checked`]:{marginInlineStart:s(i).mul(-1).mul(2).equal(),marginInlineEnd:s(i).mul(2).equal()}}}}}},an=n=>{const{componentCls:e,trackHeight:c,trackMinWidth:i}=n;return{[e]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,H.Wf)(n)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:i,height:c,lineHeight:(0,f.bf)(c),verticalAlign:"middle",background:n.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${n.motionDurationMid}`,userSelect:"none",[`&:hover:not(${e}-disabled)`]:{background:n.colorTextTertiary}}),(0,H.Qy)(n)),{[`&${e}-checked`]:{background:n.switchColor,[`&:hover:not(${e}-disabled)`]:{background:n.colorPrimaryHover}},[`&${e}-loading, &${e}-disabled`]:{cursor:"not-allowed",opacity:n.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${e}-rtl`]:{direction:"rtl"}})}},sn=n=>{const{fontSize:e,lineHeight:c,controlHeight:i,colorWhite:r}=n,g=e*c,C=i/2,s=2,a=g-s*2,o=C-s*2;return{trackHeight:g,trackHeightSM:C,trackMinWidth:a*2+s*4,trackMinWidthSM:o*2+s*2,trackPadding:s,handleBg:r,handleSize:a,handleSizeSM:o,handleShadow:`0 2px 4px 0 ${new W.C("#00230b").setAlpha(.2).toRgbString()}`,innerMinMargin:a/2,innerMaxMargin:a+s+s*2,innerMinMarginSM:o/2,innerMaxMarginSM:o+s+s*2}};var ln=(0,V.I$)("Switch",n=>{const e=(0,k.IX)(n,{switchDuration:n.motionDurationMid,switchColor:n.colorPrimary,switchDisabledOpacity:n.opacityLoading,switchLoadingIconSize:n.calc(n.fontSizeIcon).mul(.75).equal(),switchLoadingIconColor:`rgba(0, 0, 0, ${n.opacityLoading})`,switchHandleActiveInset:"-30%"});return[an(e),tn(e),Z(e),Q(e),x(e)]},sn),cn=function(n,e){var c={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(c[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(c[i[r]]=n[i[r]]);return c};const en=$.forwardRef((n,e)=>{const{prefixCls:c,size:i,disabled:r,loading:g,className:C,rootClassName:s,style:a,checked:o,value:p,defaultChecked:b,defaultValue:z,onChange:P}=n,K=cn(n,["prefixCls","size","disabled","loading","className","rootClassName","style","checked","value","defaultChecked","defaultValue","onChange"]),[G,J]=(0,l.Z)(!1,{value:o!=null?o:p,defaultValue:b!=null?b:z}),{getPrefixCls:F,direction:A,switch:D}=$.useContext(d.E_),N=$.useContext(S.Z),Y=(r!=null?r:N)||g,_=F("switch",c),q=$.createElement("div",{className:`${_}-handle`},g&&$.createElement(j.Z,{className:`${_}-loading-icon`})),[I,X,R]=ln(_),on=(0,w.Z)(i),dn=T()(D==null?void 0:D.className,{[`${_}-small`]:on==="small",[`${_}-loading`]:g,[`${_}-rtl`]:A==="rtl"},C,s,X,R),un=Object.assign(Object.assign({},D==null?void 0:D.style),a),hn=function(){J(arguments.length<=0?void 0:arguments[0]),P==null||P.apply(void 0,arguments)};return I($.createElement(h.Z,{component:"Switch"},$.createElement(m,Object.assign({},K,{checked:G,onChange:hn,prefixCls:_,className:dn,style:un,disabled:Y,ref:e,loadingIcon:q}))))});en.__ANT_SWITCH=!0;var rn=en}}]);
