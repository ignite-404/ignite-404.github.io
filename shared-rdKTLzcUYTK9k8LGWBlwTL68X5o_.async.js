!(function(){"use strict";var Ae=Object.defineProperty,Ge=Object.defineProperties;var je=Object.getOwnPropertyDescriptors;var H=Object.getOwnPropertySymbols;var Pe=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var ye=(i,a,e)=>a in i?Ae(i,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[a]=e,z=(i,a)=>{for(var e in a||(a={}))Pe.call(a,e)&&ye(i,e,a[e]);if(H)for(var e of H(a))Ce.call(a,e)&&ye(i,e,a[e]);return i},U=(i,a)=>Ge(i,je(a));var V=(i,a)=>{var e={};for(var r in i)Pe.call(i,r)&&a.indexOf(r)<0&&(e[r]=i[r]);if(i!=null&&H)for(var r of H(i))a.indexOf(r)<0&&Ce.call(i,r)&&(e[r]=i[r]);return e};(self.webpackChunk=self.webpackChunk||[]).push([[4572],{27967:function(i,a,e){e.d(a,{D:function(){return t},M:function(){return n}});var r=e(46347),[t,n]=(0,r.k)({name:"ButtonGroupContext",strict:!1})},38787:function(i,a,e){e.d(a,{A:function(){return J}});var r=e(27967),t=e(76733),n=e(50262),l=e(67294),y=e(2459),m=e(11086),D=e(37127),p=e(33295),h=e(27963),M=e(79022),v=e(27316),s=e(18419),f=e(10918);function _(B){var w,c,E,I,x,C,k,K,$;const b=(0,r.M)(),L=(0,t.w)(),G=!!b,xe=B,{ref:O,as:P,children:A,startContent:S,endContent:F,autoFocus:Q,className:re,spinner:we,isLoading:N=!1,disableRipple:Ee=!1,fullWidth:te=(w=b==null?void 0:b.fullWidth)!=null?w:!1,radius:ne=b==null?void 0:b.radius,size:X=(c=b==null?void 0:b.size)!=null?c:"md",color:ae=(E=b==null?void 0:b.color)!=null?E:"default",variant:oe=(I=b==null?void 0:b.variant)!=null?I:"solid",disableAnimation:T=(C=(x=b==null?void 0:b.disableAnimation)!=null?x:L==null?void 0:L.disableAnimation)!=null?C:!1,isDisabled:Ie=(k=b==null?void 0:b.isDisabled)!=null?k:!1,isIconOnly:Y=(K=b==null?void 0:b.isIconOnly)!=null?K:!1,spinnerPlacement:De="start",onPress:Me,onClick:Re}=xe,q=V(xe,["ref","as","children","startContent","endContent","autoFocus","className","spinner","isLoading","disableRipple","fullWidth","radius","size","color","variant","disableAnimation","isDisabled","isIconOnly","spinnerPlacement","onPress","onClick"]),se=P||"button",de=typeof se=="string",Z=(0,p.gy)(O),ee=($=Ee||(L==null?void 0:L.disableRipple))!=null?$:T,{isFocusVisible:le,isFocused:ie,focusProps:ue}=(0,y.F)({autoFocus:Q}),j=Ie||N,Oe=(0,l.useMemo)(()=>(0,M.L)({size:X,color:ae,variant:oe,radius:ne,fullWidth:te,isDisabled:j,isInGroup:G,disableAnimation:T,isIconOnly:Y,className:re}),[X,ae,oe,ne,te,j,G,Y,T,re]),{onClick:ce,onClear:fe,ripples:ge}=(0,f.i)(),_e=(0,l.useCallback)(W=>{ee||j||T||Z.current&&ce(W)},[ee,j,T,Z,ce]),{buttonProps:pe,isPressed:he}=(0,v.j)(z({elementType:P,isDisabled:j,onPress:Me,onClick:(0,m.t)(Re,_e)},q),Z),{isHovered:me,hoverProps:ve}=(0,s.X)({isDisabled:j}),Je=(0,l.useCallback)((W={})=>z({"data-disabled":(0,n.PB)(j),"data-focus":(0,n.PB)(ie),"data-pressed":(0,n.PB)(he),"data-focus-visible":(0,n.PB)(le),"data-hover":(0,n.PB)(me),"data-loading":(0,n.PB)(N)},(0,D.d)(pe,ue,ve,(0,h.z)(q,{enabled:de}),(0,h.z)(W))),[N,j,ie,he,de,le,me,pe,ue,ve,q]),be=W=>(0,l.isValidElement)(W)?(0,l.cloneElement)(W,{"aria-hidden":!0,focusable:!1,tabIndex:-1}):null,Be=be(S),$e=be(F),Le=(0,l.useMemo)(()=>({sm:"sm",md:"sm",lg:"md"})[X],[X]),ze=(0,l.useCallback)(()=>({ripples:ge,onClear:fe}),[ge,fe]);return{Component:se,children:A,domRef:Z,spinner:we,styles:Oe,startContent:Be,endContent:$e,isLoading:N,spinnerPlacement:De,spinnerSize:Le,disableRipple:ee,getButtonProps:Je,getRippleProps:ze,isIconOnly:Y}}var R=e(34863),u=e(61394),d=e(15607),o=e(85893),g=(0,d.Gp)((B,w)=>{const{Component:c,domRef:E,children:I,styles:x,spinnerSize:C,spinner:k=(0,o.jsx)(R.c,{color:"current",size:C}),spinnerPlacement:K,startContent:$,endContent:b,isLoading:L,disableRipple:G,getButtonProps:O,getRippleProps:P,isIconOnly:A}=_(U(z({},B),{ref:w}));return(0,o.jsxs)(c,U(z({ref:E,className:x},O()),{children:[$,L&&K==="start"&&k,L&&A?null:I,L&&K==="end"&&k,b,!G&&(0,o.jsx)(u.L,z({},P()))]}))});g.displayName="NextUI.Button";var J=g},10918:function(i,a,e){e.d(a,{i:function(){return n}});var r=e(49037),t=e(67294);function n(l={}){const[y,m]=(0,t.useState)([]),D=(0,t.useCallback)(h=>{const M=h.currentTarget,v=Math.max(M.clientWidth,M.clientHeight),s=M.getBoundingClientRect();m(f=>[...f,{key:(0,r.QI)(f.length.toString()),size:v,x:h.clientX-s.left-v/2,y:h.clientY-s.top-v/2}])},[]),p=(0,t.useCallback)(h=>{m(M=>M.filter(v=>v.key!==h))},[]);return z({ripples:y,onClick:D,onClear:p},l)}},61394:function(i,a,e){e.d(a,{L:function(){return M}});var r=e(18522),t=e(97642),n=e(13114),l=e(80663);function y(v,s){const f=s-v+1;return Array.from({length:f},(_,R)=>R+v)}function m(v,s,f){return Math.min(Math.max(v,s),f)}function D(v,s=100){return Math.min(Math.max(v,0),s)}var p=e(85893),h=v=>{const{ripples:s=[],motionProps:f,color:_="currentColor",style:R,onClear:u}=v;return(0,p.jsx)(p.Fragment,{children:s.map(d=>{const o=m(.01*d.size,.2,d.size>100?.75:.5);return(0,p.jsx)(r.X,{features:t.H,children:(0,p.jsx)(n.M,{mode:"popLayout",children:(0,p.jsx)(l.m.span,z({animate:{transform:"scale(2)",opacity:0},className:"nextui-ripple",exit:{opacity:0},initial:{transform:"scale(0)",opacity:.35},style:z({position:"absolute",backgroundColor:_,borderRadius:"100%",transformOrigin:"center",pointerEvents:"none",overflow:"hidden",inset:0,zIndex:0,top:d.y,left:d.x,width:`${d.size}px`,height:`${d.size}px`},R),transition:{duration:o},onAnimationComplete:()=>{u(d.key)}},f))})},d.key)})})};h.displayName="NextUI.Ripple";var M=h},67381:function(i,a,e){e.d(a,{J:function(){return p}});var r={default:"bg-default text-default-foreground",primary:"bg-primary text-primary-foreground",secondary:"bg-secondary text-secondary-foreground",success:"bg-success text-success-foreground",warning:"bg-warning text-warning-foreground",danger:"bg-danger text-danger-foreground",foreground:"bg-foreground text-background"},t={default:"shadow-lg shadow-default/50 bg-default text-default-foreground",primary:"shadow-lg shadow-primary/40 bg-primary text-primary-foreground",secondary:"shadow-lg shadow-secondary/40 bg-secondary text-secondary-foreground",success:"shadow-lg shadow-success/40 bg-success text-success-foreground",warning:"shadow-lg shadow-warning/40 bg-warning text-warning-foreground",danger:"shadow-lg shadow-danger/40 bg-danger text-danger-foreground",foreground:"shadow-lg shadow-foreground/40 bg-foreground text-background"},n={default:"bg-transparent border-default text-foreground",primary:"bg-transparent border-primary text-primary",secondary:"bg-transparent border-secondary text-secondary",success:"bg-transparent border-success text-success",warning:"bg-transparent border-warning text-warning",danger:"bg-transparent border-danger text-danger",foreground:"bg-transparent border-foreground text-foreground"},l={default:"bg-default/40 text-default-700",primary:"bg-primary/20 text-primary-700",secondary:"bg-secondary/20 text-secondary-700",success:"bg-success/20 text-success-800 dark:text-success",warning:"bg-warning/20 text-warning-800 dark:text-warning",danger:"bg-danger/20 text-danger-800 dark:text-danger-500",foreground:"bg-foreground/10 text-foreground"},y={default:"border-default bg-default-100 text-default-foreground",primary:"border-default bg-default-100 text-primary",secondary:"border-default bg-default-100 text-secondary",success:"border-default bg-default-100 text-success",warning:"border-default bg-default-100 text-warning",danger:"border-default bg-default-100 text-danger",foreground:"border-default bg-default-100 text-foreground"},m={default:"bg-transparent text-default-foreground",primary:"bg-transparent text-primary",secondary:"bg-transparent text-secondary",success:"bg-transparent text-success",warning:"bg-transparent text-warning",danger:"bg-transparent text-danger",foreground:"bg-transparent text-foreground"},D={default:"border-default text-default-foreground",primary:"border-primary text-primary",secondary:"border-secondary text-secondary",success:"border-success text-success",warning:"border-warning text-warning",danger:"border-danger text-danger",foreground:"border-foreground text-foreground hover:!bg-foreground"},p={solid:r,shadow:t,bordered:n,flat:l,faded:y,light:m,ghost:D}},79022:function(i,a,e){e.d(a,{D:function(){return y},L:function(){return l}});var r=e(67381),t=e(55344),n=e(65512),l=(0,t.tv)({base:["z-0","group","relative","inline-flex","items-center","justify-center","box-border","appearance-none","outline-none","select-none","whitespace-nowrap","min-w-max","font-normal","subpixel-antialiased","overflow-hidden","tap-highlight-transparent","data-[pressed=true]:scale-[0.97]",...n.Dh],variants:{variant:{solid:"",bordered:"border-medium bg-transparent",light:"bg-transparent",flat:"",faded:"border-medium",shadow:"",ghost:"border-medium bg-transparent"},size:{sm:"px-3 min-w-16 h-8 text-tiny gap-2 rounded-small",md:"px-4 min-w-20 h-10 text-small gap-2 rounded-medium",lg:"px-6 min-w-24 h-12 text-medium gap-3 rounded-large"},color:{default:"",primary:"",secondary:"",success:"",warning:"",danger:""},radius:{none:"rounded-none",sm:"rounded-small",md:"rounded-medium",lg:"rounded-large",full:"rounded-full"},fullWidth:{true:"w-full"},isDisabled:{true:"opacity-disabled pointer-events-none"},isInGroup:{true:"[&:not(:first-child):not(:last-child)]:rounded-none"},isIconOnly:{true:"px-0 !gap-0",false:"[&>svg]:max-w-[theme(spacing.8)]"},disableAnimation:{true:"!transition-none data-[pressed=true]:scale-100",false:"transition-transform-colors-opacity motion-reduce:transition-none"}},defaultVariants:{size:"md",variant:"solid",color:"default",fullWidth:!1,isDisabled:!1,isInGroup:!1},compoundVariants:[{variant:"solid",color:"default",class:r.J.solid.default},{variant:"solid",color:"primary",class:r.J.solid.primary},{variant:"solid",color:"secondary",class:r.J.solid.secondary},{variant:"solid",color:"success",class:r.J.solid.success},{variant:"solid",color:"warning",class:r.J.solid.warning},{variant:"solid",color:"danger",class:r.J.solid.danger},{variant:"shadow",color:"default",class:r.J.shadow.default},{variant:"shadow",color:"primary",class:r.J.shadow.primary},{variant:"shadow",color:"secondary",class:r.J.shadow.secondary},{variant:"shadow",color:"success",class:r.J.shadow.success},{variant:"shadow",color:"warning",class:r.J.shadow.warning},{variant:"shadow",color:"danger",class:r.J.shadow.danger},{variant:"bordered",color:"default",class:r.J.bordered.default},{variant:"bordered",color:"primary",class:r.J.bordered.primary},{variant:"bordered",color:"secondary",class:r.J.bordered.secondary},{variant:"bordered",color:"success",class:r.J.bordered.success},{variant:"bordered",color:"warning",class:r.J.bordered.warning},{variant:"bordered",color:"danger",class:r.J.bordered.danger},{variant:"flat",color:"default",class:r.J.flat.default},{variant:"flat",color:"primary",class:r.J.flat.primary},{variant:"flat",color:"secondary",class:r.J.flat.secondary},{variant:"flat",color:"success",class:r.J.flat.success},{variant:"flat",color:"warning",class:r.J.flat.warning},{variant:"flat",color:"danger",class:r.J.flat.danger},{variant:"faded",color:"default",class:r.J.faded.default},{variant:"faded",color:"primary",class:r.J.faded.primary},{variant:"faded",color:"secondary",class:r.J.faded.secondary},{variant:"faded",color:"success",class:r.J.faded.success},{variant:"faded",color:"warning",class:r.J.faded.warning},{variant:"faded",color:"danger",class:r.J.faded.danger},{variant:"light",color:"default",class:[r.J.light.default,"data-[hover=true]:bg-default/40"]},{variant:"light",color:"primary",class:[r.J.light.primary,"data-[hover=true]:bg-primary/20"]},{variant:"light",color:"secondary",class:[r.J.light.secondary,"data-[hover=true]:bg-secondary/20"]},{variant:"light",color:"success",class:[r.J.light.success,"data-[hover=true]:bg-success/20"]},{variant:"light",color:"warning",class:[r.J.light.warning,"data-[hover=true]:bg-warning/20"]},{variant:"light",color:"danger",class:[r.J.light.danger,"data-[hover=true]:bg-danger/20"]},{variant:"ghost",color:"default",class:[r.J.ghost.default,"data-[hover=true]:!bg-default"]},{variant:"ghost",color:"primary",class:[r.J.ghost.primary,"data-[hover=true]:!bg-primary data-[hover=true]:!text-primary-foreground"]},{variant:"ghost",color:"secondary",class:[r.J.ghost.secondary,"data-[hover=true]:!bg-secondary data-[hover=true]:!text-secondary-foreground"]},{variant:"ghost",color:"success",class:[r.J.ghost.success,"data-[hover=true]:!bg-success data-[hover=true]:!text-success-foreground"]},{variant:"ghost",color:"warning",class:[r.J.ghost.warning,"data-[hover=true]:!bg-warning data-[hover=true]:!text-warning-foreground"]},{variant:"ghost",color:"danger",class:[r.J.ghost.danger,"data-[hover=true]:!bg-danger !text-danger-foreground"]},{isInGroup:!0,class:"rounded-none first:rounded-s-medium last:rounded-e-medium"},{isInGroup:!0,size:"sm",class:"rounded-none first:rounded-s-small last:rounded-e-small"},{isInGroup:!0,size:"md",class:"rounded-none first:rounded-s-medium last:rounded-e-medium"},{isInGroup:!0,size:"lg",class:"rounded-none first:rounded-s-large last:rounded-e-large"},{isInGroup:!0,isRounded:!0,class:"rounded-none first:rounded-s-full last:rounded-e-full"},{isInGroup:!0,radius:"none",class:"rounded-none first:rounded-s-none last:rounded-e-none"},{isInGroup:!0,radius:"sm",class:"rounded-none first:rounded-s-small last:rounded-e-small"},{isInGroup:!0,radius:"md",class:"rounded-none first:rounded-s-medium last:rounded-e-medium"},{isInGroup:!0,radius:"lg",class:"rounded-none first:rounded-s-large last:rounded-e-large"},{isInGroup:!0,radius:"full",class:"rounded-none first:rounded-s-full last:rounded-e-full"},{isInGroup:!0,variant:["ghost","bordered"],color:"default",className:n.Zs.default},{isInGroup:!0,variant:["ghost","bordered"],color:"primary",className:n.Zs.primary},{isInGroup:!0,variant:["ghost","bordered"],color:"secondary",className:n.Zs.secondary},{isInGroup:!0,variant:["ghost","bordered"],color:"success",className:n.Zs.success},{isInGroup:!0,variant:["ghost","bordered"],color:"warning",className:n.Zs.warning},{isInGroup:!0,variant:["ghost","bordered"],color:"danger",className:n.Zs.danger},{isIconOnly:!0,size:"sm",class:"min-w-8 w-8 h-8"},{isIconOnly:!0,size:"md",class:"min-w-10 w-10 h-10"},{isIconOnly:!0,size:"lg",class:"min-w-12 w-12 h-12"},{variant:["solid","faded","flat","bordered","shadow"],class:"data-[hover=true]:opacity-hover"}]}),y=(0,t.tv)({base:"inline-flex items-center justify-center h-auto",variants:{fullWidth:{true:"w-full"}},defaultVariants:{fullWidth:!1}})},27316:function(i,a,e){e.d(a,{j:function(){return y}});var r=e(37127),t=e(3136),n=e(68587),l=e(14943);function y(m,D){let{elementType:p="button",isDisabled:h,onPress:M,onPressStart:v,onPressEnd:s,onPressChange:f,preventFocusOnPress:_,allowFocusWhenDisabled:R,onClick:u,href:d,target:o,rel:g,type:J="button",allowTextSelectionOnPress:B}=m,w;p==="button"?w={type:J,disabled:h}:w={role:"button",tabIndex:h?void 0:0,href:p==="a"&&h?void 0:d,target:p==="a"?o:void 0,type:p==="input"?J:void 0,disabled:p==="input"?h:void 0,"aria-disabled":!h||p==="input"?void 0:h,rel:p==="a"?g:void 0};let{pressProps:c,isPressed:E}=(0,l.r)({onPressStart:v,onPressEnd:s,onPressChange:f,onPress:M,isDisabled:h,preventFocusOnPress:_,allowTextSelectionOnPress:B,ref:D}),{focusableProps:I}=(0,n.k)(m,D);R&&(I.tabIndex=h?-1:I.tabIndex);let x=(0,r.d)(I,c,(0,t.z)(m,{labelable:!0}));return{isPressed:E,buttonProps:(0,r.d)(w,x,{"aria-haspopup":m["aria-haspopup"],"aria-expanded":m["aria-expanded"],"aria-controls":m["aria-controls"],"aria-pressed":m["aria-pressed"],onClick:C=>{u==null||u(C)}})}}},68587:function(i,a,e){e.d(a,{k:function(){return v}});var r=e(26590),t=e(72970),n=e(37127),l=e(67294),y=e(47234),m=e(91243);let D=l.createContext(null);function p(s){let f=(0,l.useContext)(D)||{};(0,t.l)(f,s);let u=f,{ref:_}=u;return V(u,["ref"])}function h(s,f){let o=s,{children:_}=o,R=V(o,["children"]),u=$h8xso$useObjectRef(f),d=U(z({},R),{ref:u});return $h8xso$react.createElement(D.Provider,{value:d},_)}let M=null;function v(s,f){let{focusProps:_}=(0,y.K)(s),{keyboardProps:R}=(0,m.v)(s),u=(0,n.d)(_,R),d=p(f),o=s.isDisabled?{}:d,g=(0,l.useRef)(s.autoFocus);return(0,l.useEffect)(()=>{g.current&&f.current&&(0,r.e)(f.current),g.current=!1},[f]),{focusableProps:(0,n.d)(U(z({},u),{tabIndex:s.excludeFromTabOrder&&!s.isDisabled?-1:void 0}),o)}}},91243:function(i,a,e){e.d(a,{v:function(){return t}});function r(n){if(!n)return;let l=!0;return y=>{let m=U(z({},y),{preventDefault(){y.preventDefault()},isDefaultPrevented(){return y.isDefaultPrevented()},stopPropagation(){console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")},continuePropagation(){l=!1}});n(m),l&&y.stopPropagation()}}function t(n){return{keyboardProps:n.isDisabled?{}:{onKeyDown:r(n.onKeyDown),onKeyUp:r(n.onKeyUp)}}}},13114:function(i,a,e){e.d(a,{M:function(){return R}});var r=e(85893),t=e(67294),n=e(240),l=e(96681),y=e(16014);class m extends t.Component{getSnapshotBeforeUpdate(d){const o=this.props.childRef.current;if(o&&d.isPresent&&!this.props.isPresent){const g=this.props.sizeRef.current;g.height=o.offsetHeight||0,g.width=o.offsetWidth||0,g.top=o.offsetTop,g.left=o.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function D({children:u,isPresent:d}){const o=(0,t.useId)(),g=(0,t.useRef)(null),J=(0,t.useRef)({width:0,height:0,top:0,left:0}),{nonce:B}=(0,t.useContext)(y._);return(0,t.useInsertionEffect)(()=>{const{width:w,height:c,top:E,left:I}=J.current;if(d||!g.current||!w||!c)return;g.current.dataset.motionPopId=o;const x=document.createElement("style");return B&&(x.nonce=B),document.head.appendChild(x),x.sheet&&x.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${w}px !important;
            height: ${c}px !important;
            top: ${E}px !important;
            left: ${I}px !important;
          }
        `),()=>{document.head.removeChild(x)}},[d]),(0,r.jsx)(m,{isPresent:d,childRef:g,sizeRef:J,children:t.cloneElement(u,{ref:g})})}const p=({children:u,initial:d,isPresent:o,onExitComplete:g,custom:J,presenceAffectsLayout:B,mode:w})=>{const c=(0,l.h)(h),E=(0,t.useId)(),I=(0,t.useMemo)(()=>({id:E,initial:d,isPresent:o,custom:J,onExitComplete:x=>{c.set(x,!0);for(const C of c.values())if(!C)return;g&&g()},register:x=>(c.set(x,!1),()=>c.delete(x))}),B?[Math.random()]:[o]);return(0,t.useMemo)(()=>{c.forEach((x,C)=>c.set(C,!1))},[o]),t.useEffect(()=>{!o&&!c.size&&g&&g()},[o]),w==="popLayout"&&(u=(0,r.jsx)(D,{isPresent:o,children:u})),(0,r.jsx)(n.O.Provider,{value:I,children:u})};function h(){return new Map}var M=e(25364),v=e(45487);const s=u=>u.key||"";function f(u){const d=[];return t.Children.forEach(u,o=>{(0,t.isValidElement)(o)&&d.push(o)}),d}var _=e(58868);const R=({children:u,exitBeforeEnter:d,custom:o,initial:g=!0,onExitComplete:J,presenceAffectsLayout:B=!0,mode:w="sync"})=>{(0,v.k)(!d,"Replace exitBeforeEnter with mode='wait'");const c=(0,t.useMemo)(()=>f(u),[u]),E=c.map(s),I=(0,t.useRef)(!0),x=(0,t.useRef)(c),C=(0,l.h)(()=>new Map),[k,K]=(0,t.useState)(c),[$,b]=(0,t.useState)(c);(0,_.L)(()=>{I.current=!1,x.current=c;for(let O=0;O<$.length;O++){const P=s($[O]);E.includes(P)?C.delete(P):C.get(P)!==!0&&C.set(P,!1)}},[$,E.length,E.join("-")]);const L=[];if(c!==k){let O=[...c];for(let P=0;P<$.length;P++){const A=$[P],S=s(A);E.includes(S)||(O.splice(P,0,A),L.push(A))}w==="wait"&&L.length&&(O=L),b(f(O)),K(c);return}const{forceRender:G}=(0,t.useContext)(M.p);return(0,r.jsx)(r.Fragment,{children:$.map(O=>{const P=s(O),A=c===$||E.includes(P),S=()=>{if(C.has(P))C.set(P,!0);else return;let F=!0;C.forEach(Q=>{Q||(F=!1)}),F&&(G==null||G(),b(x.current),J&&J())};return(0,r.jsx)(p,{isPresent:A,initial:!I.current||g?void 0:!1,custom:A?void 0:o,presenceAffectsLayout:B,mode:w,onExitComplete:A?void 0:S,children:O},P)})})}}}]);
}());