!(function(){"use strict";var Y=(F,N)=>(N=Symbol[F])?N:Symbol.for("Symbol."+F),ie=F=>{throw TypeError(F)};var ue=function(F,N){this[0]=F,this[1]=N};var ee=F=>{var N=F[Y("asyncIterator")],x=!1,C,s={};return N==null?(N=F[Y("iterator")](),C=T=>s[T]=S=>N[T](S)):(N=N.call(F),C=T=>s[T]=S=>{if(x){if(x=!1,T==="throw")throw S;return S}return x=!0,{done:!1,value:new ue(new Promise(I=>{var g=N[T](S);g instanceof Object||ie("Object expected"),I(g)}),1)}}),s[Y("iterator")]=()=>s,C("next"),"throw"in N?C("throw"):s.throw=T=>{throw T},"return"in N&&C("return"),s};(self.webpackChunk=self.webpackChunk||[]).push([[3964],{37873:function(F,N,x){x.d(N,{MT:function(){return z},E7:function(){return le},QL:function(){return M},cW:function(){return re}});var C=x(26590),s=x(78837);function T(e){const t=(0,s.k)(e);if(!(e instanceof t.HTMLElement)&&!(e instanceof t.SVGElement))return!1;let{display:r,visibility:o}=e.style,n=r!=="none"&&o!=="hidden"&&o!=="collapse";if(n){const{getComputedStyle:l}=e.ownerDocument.defaultView;let{display:c,visibility:a}=l(e);n=c!=="none"&&a!=="hidden"&&a!=="collapse"}return n}function S(e,t){return!e.hasAttribute("hidden")&&!e.hasAttribute("data-react-aria-prevent-focus")&&(e.nodeName==="DETAILS"&&t&&t.nodeName!=="SUMMARY"?e.hasAttribute("open"):!0)}function I(e,t){return e.nodeName!=="#comment"&&T(e)&&S(e,t)&&(!e.parentElement||I(e.parentElement,e))}var g=x(69786),v=x(67294);const D=v.createContext(null),m="react-aria-focus-scope-restore";let d=null;function z(e){let{children:t,contain:r,restoreFocus:o,autoFocus:n}=e,l=(0,v.useRef)(null),c=(0,v.useRef)(null),a=(0,v.useRef)([]),{parentNode:$}=(0,v.useContext)(D)||{},i=(0,v.useMemo)(()=>new J({scopeRef:a}),[a]);(0,g.b)(()=>{let h=$||E.root;if(E.getTreeNode(h.scopeRef)&&d&&!B(d,h.scopeRef)){let b=E.getTreeNode(d);b&&(h=b)}h.addChild(i),E.addNode(i)},[i,$]),(0,g.b)(()=>{let h=E.getTreeNode(a);h&&(h.contain=!!r)},[r]),(0,g.b)(()=>{var h;let b=(h=l.current)===null||h===void 0?void 0:h.nextSibling,L=[],j=Q=>Q.stopPropagation();for(;b&&b!==c.current;)L.push(b),b.addEventListener(m,j),b=b.nextSibling;return a.current=L,()=>{for(let Q of L)Q.removeEventListener(m,j)}},[t]),oe(a,o,r),te(a,r),ae(a,o,r),ne(a,n),(0,v.useEffect)(()=>{const h=(0,s.r)(a.current?a.current[0]:void 0).activeElement;let b=null;if(_(h,a.current)){for(let L of E.traverse())L.scopeRef&&_(h,L.scopeRef.current)&&(b=L);b===E.getTreeNode(a)&&(d=b.scopeRef)}},[a]),(0,g.b)(()=>()=>{var h,b,L;let j=(L=(b=E.getTreeNode(a))===null||b===void 0||(h=b.parent)===null||h===void 0?void 0:h.scopeRef)!==null&&L!==void 0?L:null;(a===d||B(a,d))&&(!j||E.getTreeNode(j))&&(d=j),E.removeTreeNode(a)},[a]);let u=(0,v.useMemo)(()=>U(a),[]),f=(0,v.useMemo)(()=>({focusManager:u,parentNode:i}),[i,u]);return v.createElement(D.Provider,{value:f},v.createElement("span",{"data-focus-scope-start":!0,hidden:!0,ref:l}),t,v.createElement("span",{"data-focus-scope-end":!0,hidden:!0,ref:c}))}function A(){var e;return(e=$cgawC$useContext(D))===null||e===void 0?void 0:e.focusManager}function U(e){return{focusNext(t={}){let r=e.current,{from:o,tabbable:n,wrap:l,accept:c}=t,a=o||(0,s.r)(r[0]).activeElement,$=r[0].previousElementSibling,i=y(r),u=M(i,{tabbable:n,accept:c},r);u.currentNode=_(a,r)?a:$;let f=u.nextNode();return!f&&l&&(u.currentNode=$,f=u.nextNode()),f&&R(f,!0),f},focusPrevious(t={}){let r=e.current,{from:o,tabbable:n,wrap:l,accept:c}=t,a=o||(0,s.r)(r[0]).activeElement,$=r[r.length-1].nextElementSibling,i=y(r),u=M(i,{tabbable:n,accept:c},r);u.currentNode=_(a,r)?a:$;let f=u.previousNode();return!f&&l&&(u.currentNode=$,f=u.previousNode()),f&&R(f,!0),f},focusFirst(t={}){let r=e.current,{tabbable:o,accept:n}=t,l=y(r),c=M(l,{tabbable:o,accept:n},r);c.currentNode=r[0].previousElementSibling;let a=c.nextNode();return a&&R(a,!0),a},focusLast(t={}){let r=e.current,{tabbable:o,accept:n}=t,l=y(r),c=M(l,{tabbable:o,accept:n},r);c.currentNode=r[r.length-1].nextElementSibling;let a=c.previousNode();return a&&R(a,!0),a}}}const K=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"],p=K.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";K.push('[tabindex]:not([tabindex="-1"]):not([disabled])');const w=K.join(':not([hidden]):not([tabindex="-1"]),');function k(e){return e.matches(p)}function y(e){return e[0].parentElement}function V(e){let t=E.getTreeNode(d);for(;t&&t.scopeRef!==e;){if(t.contain)return!1;t=t.parent}return!0}function te(e,t){let r=(0,v.useRef)(void 0),o=(0,v.useRef)(void 0);(0,g.b)(()=>{let n=e.current;if(!t){o.current&&(cancelAnimationFrame(o.current),o.current=void 0);return}const l=(0,s.r)(n?n[0]:void 0);let c=i=>{if(i.key!=="Tab"||i.altKey||i.ctrlKey||i.metaKey||!V(e)||i.isComposing)return;let u=l.activeElement,f=e.current;if(!f||!_(u,f))return;let h=y(f),b=M(h,{tabbable:!0},f);if(!u)return;b.currentNode=u;let L=i.shiftKey?b.previousNode():b.nextNode();L||(b.currentNode=i.shiftKey?f[f.length-1].nextElementSibling:f[0].previousElementSibling,L=i.shiftKey?b.previousNode():b.nextNode()),i.preventDefault(),L&&R(L,!0)},a=i=>{(!d||B(d,e))&&_(i.target,e.current)?(d=e,r.current=i.target):V(e)&&!P(i.target,e)?r.current?r.current.focus():d&&d.current&&W(d.current):V(e)&&(r.current=i.target)},$=i=>{o.current&&cancelAnimationFrame(o.current),o.current=requestAnimationFrame(()=>{if(l.activeElement&&V(e)&&!P(l.activeElement,e))if(d=e,l.body.contains(i.target)){var u;r.current=i.target,(u=r.current)===null||u===void 0||u.focus()}else d.current&&W(d.current)})};return l.addEventListener("keydown",c,!1),l.addEventListener("focusin",a,!1),n==null||n.forEach(i=>i.addEventListener("focusin",a,!1)),n==null||n.forEach(i=>i.addEventListener("focusout",$,!1)),()=>{l.removeEventListener("keydown",c,!1),l.removeEventListener("focusin",a,!1),n==null||n.forEach(i=>i.removeEventListener("focusin",a,!1)),n==null||n.forEach(i=>i.removeEventListener("focusout",$,!1))}},[e,t]),(0,g.b)(()=>()=>{o.current&&cancelAnimationFrame(o.current)},[o])}function X(e){return P(e)}function _(e,t){return!e||!t?!1:t.some(r=>r.contains(e))}function P(e,t=null){if(e instanceof Element&&e.closest("[data-react-aria-top-layer]"))return!0;for(let{scopeRef:r}of E.traverse(E.getTreeNode(t)))if(r&&_(e,r.current))return!0;return!1}function re(e){return P(e,d)}function B(e,t){var r;let o=(r=E.getTreeNode(t))===null||r===void 0?void 0:r.parent;for(;o;){if(o.scopeRef===e)return!0;o=o.parent}return!1}function R(e,t=!1){if(e!=null&&!t)try{(0,C.e)(e)}catch(r){}else if(e!=null)try{e.focus()}catch(r){}}function Z(e,t=!0){let r=e[0].previousElementSibling,o=y(e),n=M(o,{tabbable:t},e);n.currentNode=r;let l=n.nextNode();return t&&!l&&(o=y(e),n=M(o,{tabbable:!1},e),n.currentNode=r,l=n.nextNode()),l}function W(e,t=!0){R(Z(e,t))}function ne(e,t){const r=v.useRef(t);(0,v.useEffect)(()=>{if(r.current){d=e;const o=(0,s.r)(e.current?e.current[0]:void 0);!_(o.activeElement,d.current)&&e.current&&W(e.current)}r.current=!1},[e])}function oe(e,t,r){(0,g.b)(()=>{if(t||r)return;let o=e.current;const n=(0,s.r)(o?o[0]:void 0);let l=c=>{let a=c.target;_(a,e.current)?d=e:X(a)||(d=null)};return n.addEventListener("focusin",l,!1),o==null||o.forEach(c=>c.addEventListener("focusin",l,!1)),()=>{n.removeEventListener("focusin",l,!1),o==null||o.forEach(c=>c.removeEventListener("focusin",l,!1))}},[e,t,r])}function O(e){let t=E.getTreeNode(d);for(;t&&t.scopeRef!==e;){if(t.nodeToRestore)return!1;t=t.parent}return(t==null?void 0:t.scopeRef)===e}function ae(e,t,r){const o=(0,v.useRef)(typeof document!="undefined"?(0,s.r)(e.current?e.current[0]:void 0).activeElement:null);(0,g.b)(()=>{let n=e.current;const l=(0,s.r)(n?n[0]:void 0);if(!t||r)return;let c=()=>{(!d||B(d,e))&&_(l.activeElement,e.current)&&(d=e)};return l.addEventListener("focusin",c,!1),n==null||n.forEach(a=>a.addEventListener("focusin",c,!1)),()=>{l.removeEventListener("focusin",c,!1),n==null||n.forEach(a=>a.removeEventListener("focusin",c,!1))}},[e,r]),(0,g.b)(()=>{const n=(0,s.r)(e.current?e.current[0]:void 0);if(!t)return;let l=c=>{if(c.key!=="Tab"||c.altKey||c.ctrlKey||c.metaKey||!V(e)||c.isComposing)return;let a=n.activeElement;if(!P(a,e)||!O(e))return;let $=E.getTreeNode(e);if(!$)return;let i=$.nodeToRestore,u=M(n.body,{tabbable:!0});u.currentNode=a;let f=c.shiftKey?u.previousNode():u.nextNode();if((!i||!n.body.contains(i)||i===n.body)&&(i=void 0,$.nodeToRestore=void 0),(!f||!P(f,e))&&i){u.currentNode=i;do f=c.shiftKey?u.previousNode():u.nextNode();while(P(f,e));c.preventDefault(),c.stopPropagation(),f?R(f,!0):X(i)?R(i,!0):a.blur()}};return r||n.addEventListener("keydown",l,!0),()=>{r||n.removeEventListener("keydown",l,!0)}},[e,t,r]),(0,g.b)(()=>{const n=(0,s.r)(e.current?e.current[0]:void 0);if(!t)return;let l=E.getTreeNode(e);if(l){var c;return l.nodeToRestore=(c=o.current)!==null&&c!==void 0?c:void 0,()=>{let a=E.getTreeNode(e);if(!a)return;let $=a.nodeToRestore;if(t&&$&&(n.activeElement&&P(n.activeElement,e)||n.activeElement===n.body&&O(e))){let i=E.clone();requestAnimationFrame(()=>{if(n.activeElement===n.body){let u=i.getTreeNode(e);for(;u;){if(u.nodeToRestore&&u.nodeToRestore.isConnected){q(u.nodeToRestore);return}u=u.parent}for(u=i.getTreeNode(e);u;){if(u.scopeRef&&u.scopeRef.current&&E.getTreeNode(u.scopeRef)){let f=Z(u.scopeRef.current,!0);q(f);return}u=u.parent}}})}}}},[e,t])}function q(e){e.dispatchEvent(new CustomEvent(m,{bubbles:!0,cancelable:!0}))&&R(e)}function M(e,t,r){let o=t!=null&&t.tabbable?w:p,n=(0,s.r)(e).createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(l){var c;return!(t==null||(c=t.from)===null||c===void 0)&&c.contains(l)?NodeFilter.FILTER_REJECT:l.matches(o)&&I(l)&&(!r||_(l,r))&&(!(t!=null&&t.accept)||t.accept(l))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});return t!=null&&t.from&&(n.currentNode=t.from),n}function le(e,t={}){return{focusNext(r={}){let o=e.current;if(!o)return null;let{from:n,tabbable:l=t.tabbable,wrap:c=t.wrap,accept:a=t.accept}=r,$=n||(0,s.r)(o).activeElement,i=M(o,{tabbable:l,accept:a});o.contains($)&&(i.currentNode=$);let u=i.nextNode();return!u&&c&&(i.currentNode=o,u=i.nextNode()),u&&R(u,!0),u},focusPrevious(r=t){let o=e.current;if(!o)return null;let{from:n,tabbable:l=t.tabbable,wrap:c=t.wrap,accept:a=t.accept}=r,$=n||(0,s.r)(o).activeElement,i=M(o,{tabbable:l,accept:a});if(o.contains($))i.currentNode=$;else{let f=H(i);return f&&R(f,!0),f!=null?f:null}let u=i.previousNode();if(!u&&c){i.currentNode=o;let f=H(i);if(!f)return null;u=f}return u&&R(u,!0),u!=null?u:null},focusFirst(r=t){let o=e.current;if(!o)return null;let{tabbable:n=t.tabbable,accept:l=t.accept}=r,a=M(o,{tabbable:n,accept:l}).nextNode();return a&&R(a,!0),a},focusLast(r=t){let o=e.current;if(!o)return null;let{tabbable:n=t.tabbable,accept:l=t.accept}=r,c=M(o,{tabbable:n,accept:l}),a=H(c);return a&&R(a,!0),a!=null?a:null}}}function H(e){let t,r;do r=e.lastChild(),r&&(t=r);while(r);return t}class G{get size(){return this.fastMap.size}getTreeNode(t){return this.fastMap.get(t)}addTreeNode(t,r,o){let n=this.fastMap.get(r!=null?r:null);if(!n)return;let l=new J({scopeRef:t});n.addChild(l),l.parent=n,this.fastMap.set(t,l),o&&(l.nodeToRestore=o)}addNode(t){this.fastMap.set(t.scopeRef,t)}removeTreeNode(t){if(t===null)return;let r=this.fastMap.get(t);if(!r)return;let o=r.parent;for(let l of this.traverse())l!==r&&r.nodeToRestore&&l.nodeToRestore&&r.scopeRef&&r.scopeRef.current&&_(l.nodeToRestore,r.scopeRef.current)&&(l.nodeToRestore=r.nodeToRestore);let n=r.children;o&&(o.removeChild(r),n.size>0&&n.forEach(l=>o&&o.addChild(l))),this.fastMap.delete(r.scopeRef)}*traverse(t=this.root){if(t.scopeRef!=null&&(yield t),t.children.size>0)for(let r of t.children)yield*ee(this.traverse(r))}clone(){var t;let r=new G;var o;for(let n of this.traverse())r.addTreeNode(n.scopeRef,(o=(t=n.parent)===null||t===void 0?void 0:t.scopeRef)!==null&&o!==void 0?o:null,n.nodeToRestore);return r}constructor(){this.fastMap=new Map,this.root=new J({scopeRef:null}),this.fastMap.set(null,this.root)}}class J{addChild(t){this.children.add(t),t.parent=this}removeChild(t){this.children.delete(t),t.parent=void 0}constructor(t){this.children=new Set,this.contain=!1,this.scopeRef=t.scopeRef}}let E=new G},54792:function(F,N,x){x.d(N,{b:function(){return U},j:function(){return K}});const C=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),s=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function T(p){if(Intl.Locale){let k=new Intl.Locale(p).maximize(),y=typeof k.getTextInfo=="function"?k.getTextInfo():k.textInfo;if(y)return y.direction==="rtl";if(k.script)return C.has(k.script)}let w=p.split("-")[0];return s.has(w)}var S=x(67294),I=x(37385);const g=Symbol.for("react-aria.i18n.locale");function v(){let p=typeof window!="undefined"&&window[g]||typeof navigator!="undefined"&&(navigator.language||navigator.userLanguage)||"en-US";try{Intl.DateTimeFormat.supportedLocalesOf([p])}catch(w){p="en-US"}return{locale:p,direction:T(p)?"rtl":"ltr"}}let D=v(),m=new Set;function d(){D=v();for(let p of m)p(D)}function z(){let p=(0,I.Av)(),[w,k]=(0,S.useState)(D);return(0,S.useEffect)(()=>(m.size===0&&window.addEventListener("languagechange",d),m.add(k),()=>{m.delete(k),m.size===0&&window.removeEventListener("languagechange",d)}),[]),p?{locale:"en-US",direction:"ltr"}:w}const A=S.createContext(null);function U(p){let{locale:w,children:k}=p,y=z(),V=S.useMemo(()=>w?{locale:w,direction:T(w)?"rtl":"ltr"}:y,[y,w]);return S.createElement(A.Provider,{value:V},k)}function K(){let p=z();return(0,S.useContext)(A)||p}},99373:function(F,N,x){x.d(N,{z:function(){return s}});var C=x(67294);function s(T,S,I){let[g,v]=(0,C.useState)(T||S),D=(0,C.useRef)(T!==void 0),m=T!==void 0;(0,C.useEffect)(()=>{let A=D.current;A!==m&&console.warn(`WARN: A component changed from ${A?"controlled":"uncontrolled"} to ${m?"controlled":"uncontrolled"}.`),D.current=m},[m]);let d=m?T:g,z=(0,C.useCallback)((A,...U)=>{let K=(p,...w)=>{I&&(Object.is(d,p)||I(p,...w)),m||(d=p)};typeof A=="function"?(console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),v((w,...k)=>{let y=A(m?d:w,...k);return K(y,...U),m?w:y})):(m||v(A),K(A,...U))},[m,d,I]);return[d,z]}}}]);
}());