"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3789],{25299:function(T,g,r){r.d(g,{aV:function(){return v},Bq:function(){return C}});var l=r(67294);const E=(0,l.createContext)({});function b(n){let{getContainer:e}=n,{getContainer:t}=f();return $7yuSY$react.createElement(E.Provider,{value:{getContainer:e===null?void 0:e!=null?e:t}},n.children)}function f(){var n;return(n=(0,l.useContext)(E))!==null&&n!==void 0?n:{}}var i=r(54499);const _=null;function x({children:n}){let e=(0,l.useMemo)(()=>({register:()=>{}}),[]);return l.createElement(i.O.Provider,{value:e},n)}var h=r(37873),w=r(73935),P=r(37385),R=r(69786);const u=l.createContext(null);function v(n){let e=(0,P.Av)(),{portalContainer:t=e?null:document.body,isExiting:c}=n,[o,m]=(0,l.useState)(!1),p=(0,l.useMemo)(()=>({contain:o,setContain:m}),[o,m]),{getContainer:s}=f();if(!n.portalContainer&&s&&(t=s()),!t)return null;let $=n.children;return n.disableFocusManagement||($=l.createElement(h.MT,{restoreFocus:!0,contain:o&&!c},$)),$=l.createElement(u.Provider,{value:p},l.createElement(x,null,$)),w.createPortal($,t)}function C(){let n=(0,l.useContext)(u),e=n==null?void 0:n.setContain;(0,R.b)(()=>{e==null||e(!0)},[e])}},77553:function(T,g,r){r.d(g,{t:function(){return w}});var l=r(69786),E=r(68806),b=r(11086),f=r(49665);const i=typeof document!="undefined"&&window.visualViewport,_=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);let x=0,h;function w(e={}){let{isDisabled:t}=e;(0,l.b)(()=>{if(!t)return x++,x===1&&((0,E.gn)()?h=R():h=P()),()=>{x--,x===0&&h()}},[t])}function P(){return(0,b.t)(u(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),u(document.documentElement,"overflow","hidden"))}function R(){let e,t,c=d=>{e=(0,f.r)(d.target,!0),!(e===document.documentElement&&e===document.body)&&e instanceof HTMLElement&&window.getComputedStyle(e).overscrollBehavior==="auto"&&(t=u(e,"overscrollBehavior","contain"))},o=d=>{if(!e||e===document.documentElement||e===document.body){d.preventDefault();return}e.scrollHeight===e.clientHeight&&e.scrollWidth===e.clientWidth&&d.preventDefault()},m=d=>{let a=d.target;n(a)&&a!==document.activeElement&&(d.preventDefault(),$(),a.style.transform="translateY(-2000px)",a.focus(),requestAnimationFrame(()=>{a.style.transform=""})),t&&t()},p=d=>{let a=d.target;n(a)&&($(),a.style.transform="translateY(-2000px)",requestAnimationFrame(()=>{a.style.transform="",i&&(i.height<window.innerHeight?requestAnimationFrame(()=>{C(a)}):i.addEventListener("resize",()=>C(a),{once:!0}))}))},s=null,$=()=>{if(s)return;let d=()=>{window.scrollTo(0,0)},a=window.pageXOffset,y=window.pageYOffset;s=(0,b.t)(v(window,"scroll",d),u(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),u(document.documentElement,"overflow","hidden"),u(document.body,"marginTop",`-${y}px`),()=>{window.scrollTo(a,y)}),window.scrollTo(0,0)},S=(0,b.t)(v(document,"touchstart",c,{passive:!1,capture:!0}),v(document,"touchmove",o,{passive:!1,capture:!0}),v(document,"touchend",m,{passive:!1,capture:!0}),v(document,"focus",p,!0));return()=>{t==null||t(),s==null||s(),S()}}function u(e,t,c){let o=e.style[t];return e.style[t]=c,()=>{e.style[t]=o}}function v(e,t,c,o){return e.addEventListener(t,c,o),()=>{e.removeEventListener(t,c,o)}}function C(e){let t=document.scrollingElement||document.documentElement,c=e;for(;c&&c!==t;){let o=(0,f.r)(c);if(o!==document.documentElement&&o!==document.body&&o!==c){let m=o.getBoundingClientRect().top,p=c.getBoundingClientRect().top;p>m+c.clientHeight&&(o.scrollTop+=p-m)}c=o.parentElement}}function n(e){return e instanceof HTMLInputElement&&!_.has(e.type)||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}},49665:function(T,g,r){r.d(g,{r:function(){return E}});var l=r(96791);function E(b,f){let i=b;for((0,l.a)(i,f)&&(i=i.parentElement);i&&!(0,l.a)(i,f);)i=i.parentElement;return i||document.scrollingElement||document.documentElement}}}]);
