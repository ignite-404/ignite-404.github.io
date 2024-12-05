!(function(){"use strict";var R=(o,n)=>(n=Symbol[o])?n:Symbol.for("Symbol."+o),F=o=>{throw TypeError(o)};var H=function(o,n){this[0]=o,this[1]=n};var N=o=>{var n=o[R("asyncIterator")],e=!1,l,_={};return n==null?(n=o[R("iterator")](),l=s=>_[s]=r=>n[s](r)):(n=n.call(o),l=s=>_[s]=r=>{if(e){if(e=!1,s==="throw")throw r;return r}return e=!0,{done:!1,value:new H(new Promise(i=>{var t=n[s](r);t instanceof Object||F("Object expected"),i(t)}),1)}}),_[R("iterator")]=()=>_,l("next"),"throw"in n?l("throw"):_.throw=s=>{throw s},"return"in n&&l("return"),_};(self.webpackChunk=self.webpackChunk||[]).push([[3401],{94442:function(o,n,e){var l=e(97857),_=e.n(l),s=e(15009),r=e.n(s),i=e(99289),t=e.n(i),a=e(82052),u=e(68421),O=e(9383),E=e(67294),d=e(85893);n.Z=function(h){var p=h.width,C=h.rate,D=(0,E.useRef)(null),M=(0,a.Z)(D),P=M==null?void 0:M.width,T=function(){var c=t()(r()().mark(function x(){return r()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:if(!(C!=null&&P!=null)){g.next=2;break}return g.abrupt("return",P*C);case 2:return g.abrupt("return",void 0);case 3:case"end":return g.stop()}},x)}));return function(){return c.apply(this,arguments)}}(),L=(0,u.Z)(T,{manual:!0,debounceWait:30});return(0,E.useEffect)(function(){L.run()},[P]),(0,d.jsx)("div",{ref:D,style:{display:"block",padding:0,margin:0,width:p!=null?p:"100%"},children:(0,d.jsx)(O.J,_()({width:P||void 0,height:L.data||void 0,radius:"none"},h))})}},85685:function(o,n,e){e.d(n,{Z:function(){return a}});var l=e(38295),_=e(95813),s=e(38787),r=e(48135),i=e(76021),t=e(85893);function a(u){var O=u.children,E=u.rightButtons,d=u.leftButtons,h=(0,l.o)(),p=function(){window.history.length>1?i.m8.back():i.m8.push({pathname:"/"})},C=function(){return(0,t.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[(0,_.G5)(d)&&(0,t.jsxs)("div",{className:"flex-row-center cursor-pointer gap-1",onClick:function(P){P.preventDefault(),P.stopPropagation(),p()},children:[(0,t.jsx)(s.A,{size:"lg",color:"default",radius:"full",variant:"light",isIconOnly:!0,onClick:function(P){P.preventDefault(),P.stopPropagation(),p()},children:(0,t.jsx)(r.Z,{stroke:1})}),(0,t.jsx)("h1",{className:"text-title m-0 p-0",children:window.document.title||h.getAppName()})]}),d==null?void 0:d.map(function(M){return M})]})};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"container max-w-lg",children:[(0,t.jsxs)("div",{className:"flex-row-between py-1",children:[C(),(0,t.jsx)("div",{className:"flex-row-center gap-2",children:E==null?void 0:E.map(function(D){return D})})]}),(0,t.jsx)("div",{children:O})]})})}},46555:function(o,n,e){var l=e(13690),_=e(38787),s=e(99599),r=e(85893);n.Z=function(i){var t=i.hide,a=(0,l.Z)(window.document),u=(a==null?void 0:a.top)||0;return u<100||t?null:(0,r.jsx)("div",{className:"ease-in-out",style:{position:"fixed",bottom:70,right:16,zIndex:9999},children:(0,r.jsx)(_.A,{color:"primary",size:"sm",isIconOnly:!0,radius:"full",variant:"solid",onClick:function(){window&&window.scrollTo({left:0,top:0})},children:(0,r.jsx)(s.Z,{stroke:1})})})}},72640:function(o,n,e){var l=e(32983),_=e(85893);n.Z=function(){return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",paddingTop:100},children:(0,_.jsx)(l.Z,{})})})}},65823:function(o,n,e){e.r(n),e.d(n,{default:function(){return x}});var l=e(5574),_=e.n(l),s=e(65885),r=e(68421),i=e(74911),t=e(67294),a=e(46555),u=e(72640),O=e(94442),E=e(21274),d=e(85685),h=e(35291),p=e(30699),C=e(55932),D=e(95813),M=e(18266),P=e(79818),T=e(35301),L=e(97322),c=e(85893);function x(){var U=(0,s.Z)("brand.list.data",{serializer:function(f){return JSON.stringify(f||[])},deserializer:function(f){return(0,D.Jp)(f)||[]},defaultValue:void 0}),g=_()(U,2),y=g[0],$=g[1],A=y||[],W=(0,r.Z)(p.x1.mall.brandAll,{manual:!0,onSuccess:function(f,v){$(f.data.Data||[])}}),Z=y==null&&W.loading,w=function(){W.run({})};(0,t.useEffect)(function(){w()},[]);var K=(0,t.useMemo)(function(){var b=(0,i.Z)(A,function(v){var m;return((m=(0,D.JR)(v.Name))===null||m===void 0?void 0:m.toUpperCase())||"#"}),f=Object.keys(b).sort(function(v,m){return(0,D.lj)(v,m)});return f.map(function(v){var m;return{title:v,brands:((m=b[v])===null||m===void 0?void 0:m.sort(function(j,B){var I;return(j==null||(I=j.Name)===null||I===void 0?void 0:I.localeCompare((B==null?void 0:B.Name)||""))||0}))||[]}})},[A]),S=function(f){var v=(0,C.Kk)(f.Picture,{width:50,height:50});return v?(0,c.jsx)("div",{style:{padding:5},children:(0,c.jsx)(O.Z,{rate:1,style:{borderRadius:4},src:v,width:40,height:40,loading:"lazy",className:"object-cover",alt:f.Name||""})}):null},z=function(f,v){return(0,D.G5)(f)?null:f.map(function(m,j){return(0,c.jsx)(M.R,{description:m.Description?(0,D.zO)(m.Description,10):void 0,endContent:(0,c.jsxs)("div",{className:"flex-row-left gap-1",children:[S(m),v&&(0,c.jsx)(L.Z,{stroke:1,size:10,color:"gray"})]}),onClick:function(){(0,h.iv)({BrandId:m.Id})},children:m.Name},"item-".concat(j))})},G=function(){return Z?(0,c.jsx)(E.Z,{}):(0,D.G5)(K)?(0,c.jsx)(u.Z,{}):(0,c.jsx)("div",{style:{},children:(0,c.jsx)(P.X,{variant:"flat",className:"w-full",children:K.map(function(f,v){return(0,c.jsx)(T.y,{title:f.title,showDivider:!0,children:z(f.brands,!0)||[]},"group-".concat(v))})})})};return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(d.Z,{children:[(0,c.jsx)(a.Z,{}),(0,c.jsx)("div",{className:"container max-w-lg",children:G()})]})})}},35301:function(o,n,e){e.d(n,{y:function(){return i}});var l=e(67294);function _(t){return null}_.getCollectionNode=function*(a){let{children:u,title:O,items:E}=a;yield{type:"section",props:a,hasChildNodes:!0,rendered:O,"aria-label":a["aria-label"],*childNodes(){if(typeof u=="function"){if(!E)throw new Error("props.children was a function but props.items is missing");for(let d of E)yield{type:"item",value:d,renderer:u}}else{let d=[];l.Children.forEach(u,h=>{d.push({type:"item",element:h})}),yield*N(d)}}}};var r=_,i=r},93387:function(o,n,e){e.d(n,{G:function(){return _}});var l=e(67294),_=globalThis!=null&&globalThis.document?l.useLayoutEffect:l.useEffect},50912:function(o,n,e){e.d(n,{N:function(){return s}});var l=e(9188),_=e(38768);function s(r){let{id:i,label:t,"aria-labelledby":a,"aria-label":u,labelElementType:O="label"}=r;i=(0,l.Me)(i);let E=(0,l.Me)(),d={};t?(a=a?`${E} ${a}`:E,d={id:E,htmlFor:O==="label"?i:void 0}):!a&&!u&&console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility");let h=(0,_.b)({id:i,"aria-label":u,"aria-labelledby":a});return{labelProps:d,fieldProps:h}}},96791:function(o,n,e){e.d(n,{a:function(){return l}});function l(_,s){let r=window.getComputedStyle(_),i=/(auto|scroll)/.test(r.overflow+r.overflowX+r.overflowY);return i&&s&&(i=_.scrollHeight!==_.clientHeight||_.scrollWidth!==_.clientWidth),i}},38768:function(o,n,e){e.d(n,{b:function(){return _}});var l=e(9188);function _(s,r){let{id:i,"aria-label":t,"aria-labelledby":a}=s;return i=(0,l.Me)(i),a&&t?a=[...new Set([i,...a.trim().split(/\s+/)])].join(" "):a&&(a=a.trim().split(/\s+/).join(" ")),!t&&!a&&r&&(t=r),{id:i,"aria-label":t,"aria-labelledby":a}}},97322:function(o,n,e){e.d(n,{Z:function(){return _}});var l=e(33733);var _=(0,l.Z)("outline","chevron-right","IconChevronRight",[["path",{d:"M9 6l6 6l-6 6",key:"svg-0"}]])}}]);
}());