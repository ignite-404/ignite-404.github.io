!(function(){"use strict";var ae=Object.defineProperty,oe=Object.defineProperties;var ie=Object.getOwnPropertyDescriptors;var J=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var _=(s,r,e)=>r in s?ae(s,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[r]=e,L=(s,r)=>{for(var e in r||(r={}))q.call(r,e)&&_(s,e,r[e]);if(J)for(var e of J(r))ee.call(r,e)&&_(s,e,r[e]);return s},Y=(s,r)=>oe(s,ie(r));var V=(s,r)=>{var e={};for(var n in s)q.call(s,n)&&r.indexOf(n)<0&&(e[n]=s[n]);if(s!=null&&J)for(var n of J(s))r.indexOf(n)<0&&ee.call(s,n)&&(e[n]=s[n]);return e};(self.webpackChunk=self.webpackChunk||[]).push([[5074],{64080:function(s,r,e){var n=e(21274),c=e(85893);r.Z=function(v){var u=v.loading,f=v.hasMore;return u?(0,c.jsx)(n.Z,{}):f?null:(0,c.jsx)("div",{className:"flex flex-row items-center justify-center gap-2",children:(0,c.jsx)("span",{className:"text-slate-400",children:"\u6CA1\u6709\u66F4\u591A\u4E86"})})}},46153:function(s,r,e){e.d(r,{Z:function(){return j}});var n=e(38295),c=e(47650),v=e(42838),u=e(38787),f=e(33733);var E=(0,f.Z)("outline","chevron-left","IconChevronLeft",[["path",{d:"M15 6l-6 6l6 6",key:"svg-0"}]]),a=e(85893);function j(m){var M=m.children,i=m.rightButtons,d=m.leftButtons,o=(0,n.o)(),t=function(){window.history.length>1?c.m8.back():c.m8.push({pathname:"/"})},h=function(){return(0,a.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[(0,v.G5)(d)&&(0,a.jsxs)("div",{className:"flex-row-center cursor-pointer gap-1",onClick:function(y){y.preventDefault(),y.stopPropagation(),t()},children:[(0,a.jsx)(u.A,{size:"lg",color:"default",radius:"full",variant:"light",isIconOnly:!0,onClick:function(y){y.preventDefault(),y.stopPropagation(),t()},children:(0,a.jsx)(E,{stroke:1})}),(0,a.jsx)("h1",{className:"text-title",children:window.document.title||o.getAppName()})]}),d==null?void 0:d.map(function(g){return g})]})};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"container max-w-lg",children:[(0,a.jsxs)("div",{className:"flex-row-between py-1",children:[h(),(0,a.jsx)("div",{className:"flex-row-center gap-2",children:i==null?void 0:i.map(function(x){return x})})]}),(0,a.jsx)("div",{children:M})]})})}},13163:function(s,r,e){e.r(r),e.d(r,{default:function(){return K}});var n=e(17061),c=e.n(n),v=e(42122),u=e.n(v),f=e(17156),E=e.n(f),a=e(27424),j=e.n(a),m=e(68770),M=e(67294),i=e(64080),d=e(46153),o=e(30967),t=e(51272),h=e(46629),x=e(42838),g=e(69775),y=e(84367),l=e(85893),N=function(W){var D=W.model;if(!D||D.Points==0)return null;var O=function(){var A=D.Points,C=D.ActionType;return C==1?(0,l.jsx)(g.z,{color:"danger",variant:"bordered",size:"sm",children:"+".concat(A)}):C==-1?(0,l.jsx)(g.z,{color:"success",variant:"bordered",size:"sm",children:"-".concat(A)}):(0,l.jsx)(g.z,{variant:"bordered",size:"sm",children:A})};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"p-2",children:(0,l.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[(0,l.jsx)("div",{children:O()}),(0,l.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"end"},children:[(0,l.jsx)("div",{className:"text-slate-400",children:(0,h.Gl)(D.CreationTime)}),(0,x.Wq)(D.Message)||(0,l.jsx)("div",{className:"py-1 text-blue-500",children:D.Message})]})]})}),(0,l.jsx)(y.j,{})]})};function K(){var W=M.useState({}),D=j()(W,2),O=D[0],z=D[1],A=(0,m.Z)(function(){var R=E()(c()().mark(function T(I){var S,U;return c()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,o.x1.mall.userQueryPointsPaging(u()(u()({},O),{},{Page:((I==null||(S=I.res)===null||S===void 0?void 0:S.PageIndex)||0)+1}));case 2:return U=Z.sent,Z.abrupt("return",{list:U.data.Items||[],res:U.data});case 4:case"end":return Z.stop()}},T)}));return function(T){return R.apply(this,arguments)}}(),{target:window.document,isNoMore:function(T){var I;return(T==null||(I=T.res)===null||I===void 0?void 0:I.IsEmpty)||!1},reloadDeps:[O]}),C=A.loading,F=A.loadingMore,Q=A.mutate,w=A.noMore,B=A.data,G=(B==null?void 0:B.list)||[];return M.useEffect(function(){Q({list:[]})},[O]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(d.Z,{children:[(0,l.jsx)("div",{className:"my-2",children:(0,l.jsx)(t.Z,{})}),(0,l.jsx)("div",{className:"bg-white",children:G.map(function(R,T){return(0,l.jsx)("div",{children:(0,l.jsx)(N,{model:R})},T)})}),(0,l.jsx)(i.Z,{loading:C||F,hasMore:!w})]})})}},83204:function(s,r,e){var n=e(3930),c=e(48002),v=e(59682);function u(f,E,a){a===void 0&&(a={});var j=a.enable,m=j===void 0?!0:j,M=(0,n.Z)(E);(0,v.Z)(function(){if(m){var i=(0,c.n)(a.target,window);if(i!=null&&i.addEventListener){var d=function(o){return M.current(o)};return i.addEventListener(f,d,{capture:a.capture,once:a.once,passive:a.passive}),function(){i.removeEventListener(f,d,{capture:a.capture})}}}},[f,a.capture,a.once,a.passive,m],a.target)}r.Z=u},68770:function(s,r,e){e.d(r,{Z:function(){return d}});var n=e(97582),c=e(67294),v=e(83204),u=e(22638),f=e(68421),E=e(77598),a=e(48002),j=function(o){return o===document||o===document.documentElement||o===document.body?Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop):o.scrollTop},m=function(o){return o.scrollHeight||Math.max(document.documentElement.scrollHeight,document.body.scrollHeight)},M=function(o){return o.clientHeight||Math.max(document.documentElement.clientHeight,document.body.clientHeight)},i=function(o,t){t===void 0&&(t={});var h=t.target,x=t.isNoMore,g=t.threshold,y=g===void 0?100:g,l=t.reloadDeps,N=l===void 0?[]:l,K=t.manual,W=t.onBefore,D=t.onSuccess,O=t.onError,z=t.onFinally,A=(0,n.__read)((0,c.useState)(),2),C=A[0],F=A[1],Q=(0,n.__read)((0,c.useState)(!1),2),w=Q[0],B=Q[1],G=(0,c.useMemo)(function(){return x?x(C):!1},[C]),R=(0,f.Z)(function(P){return(0,n.__awaiter)(void 0,void 0,void 0,function(){var p,H,$;return(0,n.__generator)(this,function(k){switch(k.label){case 0:return[4,o(P)];case 1:return p=k.sent(),F(P?(0,n.__assign)((0,n.__assign)({},p),{list:(0,n.__spreadArray)((0,n.__spreadArray)([],(0,n.__read)(($=P.list)!==null&&$!==void 0?$:[]),!1),(0,n.__read)(p.list),!1)}):(0,n.__assign)((0,n.__assign)({},p),{list:(0,n.__spreadArray)([],(0,n.__read)((H=p.list)!==null&&H!==void 0?H:[]),!1)})),[2,p]}})})},{manual:K,onFinally:function(P,p,H){B(!1),z==null||z(p,H)},onBefore:function(){return W==null?void 0:W()},onSuccess:function(P){setTimeout(function(){b()}),D==null||D(P)},onError:function(P){return O==null?void 0:O(P)}}),T=R.loading,I=R.error,S=R.run,U=R.runAsync,X=R.cancel,Z=(0,u.Z)(function(){G||(B(!0),S(C))}),ne=(0,u.Z)(function(){return G?Promise.reject():(B(!0),U(C))}),re=function(){return B(!1),S()},te=function(){return B(!1),U()},b=function(){var P=(0,a.n)(h);if(P){P=P===document?document.documentElement:P;var p=j(P),H=m(P),$=M(P);H-p<=$+y&&Z()}};return(0,v.Z)("scroll",function(){T||w||b()},{target:h}),(0,E.Z)(function(){S()},(0,n.__spreadArray)([],(0,n.__read)(N),!1)),{data:C,loading:!w&&T,error:I,loadingMore:w,noMore:G,loadMore:Z,loadMoreAsync:ne,reload:(0,u.Z)(re),reloadAsync:(0,u.Z)(te),mutate:F,cancel:X}},d=i},40351:function(s,r,e){var n=e(67294),c=e(45210),v=e(8224),u=e(48002),f=function(E){var a=function(j,m,M){var i=(0,n.useRef)(!1),d=(0,n.useRef)([]),o=(0,n.useRef)([]),t=(0,n.useRef)();E(function(){var h,x=Array.isArray(M)?M:[M],g=x.map(function(y){return(0,u.n)(y)});if(!i.current){i.current=!0,d.current=g,o.current=m,t.current=j();return}(g.length!==d.current.length||!(0,v.Z)(d.current,g)||!(0,v.Z)(o.current,m))&&((h=t.current)===null||h===void 0||h.call(t),d.current=g,o.current=m,t.current=j())}),(0,c.Z)(function(){var h;(h=t.current)===null||h===void 0||h.call(t),i.current=!1})};return a};r.Z=f},48002:function(s,r,e){e.d(r,{n:function(){return v}});var n=e(92770),c=e(52982);function v(u,f){if(c.Z){if(!u)return f;var E;return(0,n.mf)(u)?E=u():"current"in u?E=u.current:E=u,E}}},59682:function(s,r,e){var n=e(67294),c=e(40351),v=(0,c.Z)(n.useEffect);r.Z=v},84367:function(s,r,e){e.d(r,{j:function(){return M}});var n=e(27963);function c(i){let d=(0,n.z)(i,{enabled:typeof i.elementType=="string"}),o;return i.orientation==="vertical"&&(o="vertical"),i.elementType!=="hr"?{separatorProps:Y(L({},d),{role:"separator","aria-orientation":o})}:{separatorProps:d}}var v=e(55344),u=(0,v.tv)({base:"shrink-0 bg-divider border-none",variants:{orientation:{horizontal:"w-full h-divider",vertical:"h-full w-divider"}},defaultVariants:{orientation:"horizontal"}}),f=e(67294);function E(i){const N=i,{as:d,className:o,orientation:t}=N,h=V(N,["as","className","orientation"]);let x=d||"hr";x==="hr"&&t==="vertical"&&(x="div");const{separatorProps:g}=c({elementType:typeof x=="string"?x:"hr",orientation:t}),y=(0,f.useMemo)(()=>u({orientation:t,className:o}),[t,o]),l=(0,f.useCallback)((K={})=>L(L(L({className:y,role:"separator","data-orientation":t},g),h),K),[y,t,g,h]);return{Component:x,getDividerProps:l}}var a=e(15607),j=e(85893),m=(0,a.Gp)((i,d)=>{const{Component:o,getDividerProps:t}=E(L({},i));return(0,j.jsx)(o,L({ref:d},t()))});m.displayName="NextUI.Divider";var M=m},33733:function(s,r,e){e.d(r,{Z:function(){return v}});var n=e(67294);var c={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};const v=(u,f,E,a)=>{const j=(0,n.forwardRef)((g,x)=>{var y=g,{color:m="currentColor",size:M=24,stroke:i=2,title:d,className:o,children:t}=y,h=V(y,["color","size","stroke","title","className","children"]);return(0,n.createElement)("svg",L(L(Y(L({ref:x},c[u]),{width:M,height:M,className:["tabler-icon",`tabler-icon-${f}`,o].join(" ")}),u==="filled"?{fill:m}:{strokeWidth:i,stroke:m}),h),[d&&(0,n.createElement)("title",{key:"svg-title"},d),...a.map(([l,N])=>(0,n.createElement)(l,N)),...Array.isArray(t)?t:[t]])});return j.displayName=`${E}`,j}}}]);
}());