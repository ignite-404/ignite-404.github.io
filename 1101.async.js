!(function(){"use strict";var z=Object.defineProperty,D=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var E=(h,c)=>(c=Symbol[h])?c:Symbol.for("Symbol."+h),U=h=>{throw TypeError(h)};var F=(h,c,u)=>c in h?z(h,c,{enumerable:!0,configurable:!0,writable:!0,value:u}):h[c]=u,B=(h,c)=>{for(var u in c||(c={}))V.call(c,u)&&F(h,u,c[u]);if(A)for(var u of A(c))O.call(c,u)&&F(h,u,c[u]);return h},R=(h,c)=>D(h,P(c));var W=function(h,c){this[0]=h,this[1]=c};var k=h=>{var c=h[E("asyncIterator")],u=!1,f,d={};return c==null?(c=h[E("iterator")](),f=y=>d[y]=S=>c[y](S)):(c=c.call(h),f=y=>d[y]=S=>{if(u){if(u=!1,y==="throw")throw S;return S}return u=!0,{done:!1,value:new W(new Promise(p=>{var m=c[y](S);m instanceof Object||U("Object expected"),p(m)}),1)}}),d[E("iterator")]=()=>d,f("next"),"throw"in c?f("throw"):d.throw=y=>{throw y},"return"in c&&f("return"),d};(self.webpackChunk=self.webpackChunk||[]).push([[1101],{1325:function(h,c,u){u.d(c,{P:function(){return p}});var f=u(69786),d=u(67294);let y=0;const S=new Map;function p(m){let[r,i]=(0,d.useState)();return(0,f.b)(()=>{if(!m)return;let s=S.get(m);if(s)i(s.element.id);else{let e=`react-aria-description-${y++}`;i(e);let t=document.createElement("div");t.id=e,t.style.display="none",t.textContent=m,document.body.appendChild(t),s={refCount:0,element:t},S.set(m,s)}return s.refCount++,()=>{s&&--s.refCount===0&&(s.element.remove(),S.delete(m))}},[m]),{"aria-describedby":m?r:void 0}}},19825:function(h,c,u){u.d(c,{K:function(){return m}});var f=u(67294);class d{build(i,s){return this.context=s,y(()=>this.iterateCollection(i))}*iterateCollection(i){let{children:s,items:e}=i;if(typeof s=="function"){if(!e)throw new Error("props.children was a function but props.items is missing");for(let t of i.items)yield*k(this.getFullNode({value:t},{renderer:s}))}else{let t=[];f.Children.forEach(s,n=>{t.push(n)});let l=0;for(let n of t){let o=this.getFullNode({element:n,index:l},{});for(let a of o)l++,yield a}}}getKey(i,s,e,t){if(i.key!=null)return i.key;if(s.type==="cell"&&s.key!=null)return`${t}${s.key}`;let l=s.value;if(l!=null){var n;let o=(n=l.key)!==null&&n!==void 0?n:l.id;if(o==null)throw new Error("No key found for item");return o}return t?`${t}.${s.index}`:`$.${s.index}`}getChildState(i,s){return{renderer:s.renderer||i.renderer}}*getFullNode(i,s,e,t){let l=i.element;if(!l&&i.value&&s&&s.renderer){let a=this.cache.get(i.value);if(a&&(!a.shouldInvalidate||!a.shouldInvalidate(this.context))){a.index=i.index,a.parentKey=t?t.key:null,yield a;return}l=s.renderer(i.value)}if(f.isValidElement(l)){let a=l.type;if(typeof a!="function"&&typeof a.getCollectionNode!="function"){let K=typeof l.type=="function"?l.type.name:l.type;throw new Error(`Unknown element <${K}> in collection.`)}let g=a.getCollectionNode(l.props,this.context),$=i.index,b=g.next();for(;!b.done&&b.value;){let K=b.value;i.index=$;let v=K.key;v||(v=K.element?null:this.getKey(l,i,s,e));let I=[...this.getFullNode(R(B({},K),{key:v,index:$,wrapper:S(i.wrapper,K.wrapper)}),this.getChildState(s,K),e?`${e}${l.key}`:l.key,t)];for(let w of I){if(w.value=K.value||i.value,w.value&&this.cache.set(w.value,w),i.type&&w.type!==i.type)throw new Error(`Unsupported type <${p(w.type)}> in <${p(t.type)}>. Only <${p(i.type)}> is supported.`);$++,yield w}b=g.next(I)}return}if(i.key==null)return;let n=this,o={type:i.type,props:i.props,key:i.key,parentKey:t?t.key:null,value:i.value,level:t?t.level+1:0,index:i.index,rendered:i.rendered,textValue:i.textValue,"aria-label":i["aria-label"],wrapper:i.wrapper,shouldInvalidate:i.shouldInvalidate,hasChildNodes:i.hasChildNodes,childNodes:y(function*(){if(!i.hasChildNodes)return;let a=0;for(let g of i.childNodes()){g.key!=null&&(g.key=`${o.key}${g.key}`),g.index=a;let $=n.getFullNode(g,n.getChildState(s,g),o.key,o);for(let b of $)a++,yield b}})};yield o}constructor(){this.cache=new WeakMap}}function y(r){let i=[],s=null;return{*[Symbol.iterator](){for(let e of i)yield e;s||(s=r());for(let e of s)i.push(e),yield e}}}function S(r,i){if(r&&i)return s=>r(i(s));if(r)return r;if(i)return i}function p(r){return r[0].toUpperCase()+r.slice(1)}function m(r,i,s){let e=(0,f.useMemo)(()=>new d,[]),{children:t,items:l,collection:n}=r;return(0,f.useMemo)(()=>{if(n)return n;let a=e.build({children:t,items:l},s);return i(a)},[e,t,l,n,s,i])}},71823:function(h,c,u){u.d(c,{Y:function(){return f}});class f extends Set{constructor(y,S,p){super(y),y instanceof f?(this.anchorKey=S||y.anchorKey,this.currentKey=p||y.currentKey):(this.anchorKey=S,this.currentKey=p)}}},10746:function(h,c,u){u.d(c,{Z:function(){return i}});var f=u(71823);function d(s,e){return typeof e.getChildren=="function"?e.getChildren(s.key):s.childNodes}function y(s){return S(s,0)}function S(s,e){if(e<0)return;let t=0;for(let l of s){if(t===e)return l;t++}}function p(s){let e;for(let t of s)e=t;return e}function m(s,e,t){if(e.parentKey===t.parentKey)return e.index-t.index;let l=[...r(s,e),e],n=[...r(s,t),t],o=l.slice(0,n.length).findIndex((a,g)=>a!==n[g]);return o!==-1?(e=l[o],t=n[o],e.index-t.index):l.findIndex(a=>a===t)>=0?1:(n.findIndex(a=>a===e)>=0,-1)}function r(s,e){let t=[];for(;(e==null?void 0:e.parentKey)!=null;)e=s.getItem(e.parentKey),t.unshift(e);return t}class i{get selectionMode(){return this.state.selectionMode}get disallowEmptySelection(){return this.state.disallowEmptySelection}get selectionBehavior(){return this.state.selectionBehavior}setSelectionBehavior(e){this.state.setSelectionBehavior(e)}get isFocused(){return this.state.isFocused}setFocused(e){this.state.setFocused(e)}get focusedKey(){return this.state.focusedKey}get childFocusStrategy(){return this.state.childFocusStrategy}setFocusedKey(e,t){(e==null||this.collection.getItem(e))&&this.state.setFocusedKey(e,t)}get selectedKeys(){return this.state.selectedKeys==="all"?new Set(this.getSelectAllKeys()):this.state.selectedKeys}get rawSelection(){return this.state.selectedKeys}isSelected(e){return this.state.selectionMode==="none"?!1:(e=this.getKey(e),this.state.selectedKeys==="all"?this.canSelectItem(e):this.state.selectedKeys.has(e))}get isEmpty(){return this.state.selectedKeys!=="all"&&this.state.selectedKeys.size===0}get isSelectAll(){if(this.isEmpty)return!1;if(this.state.selectedKeys==="all")return!0;if(this._isSelectAll!=null)return this._isSelectAll;let e=this.getSelectAllKeys(),t=this.state.selectedKeys;return this._isSelectAll=e.every(l=>t.has(l)),this._isSelectAll}get firstSelectedKey(){let e=null;for(let t of this.state.selectedKeys){let l=this.collection.getItem(t);(!e||l&&m(this.collection,l,e)<0)&&(e=l)}return e==null?void 0:e.key}get lastSelectedKey(){let e=null;for(let t of this.state.selectedKeys){let l=this.collection.getItem(t);(!e||l&&m(this.collection,l,e)>0)&&(e=l)}return e==null?void 0:e.key}get disabledKeys(){return this.state.disabledKeys}get disabledBehavior(){return this.state.disabledBehavior}extendSelection(e){if(this.selectionMode==="none")return;if(this.selectionMode==="single"){this.replaceSelection(e);return}e=this.getKey(e);let t;if(this.state.selectedKeys==="all")t=new f.Y([e],e,e);else{let l=this.state.selectedKeys,n=l.anchorKey||e;t=new f.Y(l,n,e);for(let o of this.getKeyRange(n,l.currentKey||e))t.delete(o);for(let o of this.getKeyRange(e,n))this.canSelectItem(o)&&t.add(o)}this.state.setSelectedKeys(t)}getKeyRange(e,t){let l=this.collection.getItem(e),n=this.collection.getItem(t);return l&&n?m(this.collection,l,n)<=0?this.getKeyRangeInternal(e,t):this.getKeyRangeInternal(t,e):[]}getKeyRangeInternal(e,t){let l=[],n=e;for(;n;){let o=this.collection.getItem(n);if((o&&o.type==="item"||o.type==="cell"&&this.allowsCellSelection)&&l.push(n),n===t)return l;n=this.collection.getKeyAfter(n)}return[]}getKey(e){let t=this.collection.getItem(e);if(!t||t.type==="cell"&&this.allowsCellSelection)return e;for(;t.type!=="item"&&t.parentKey!=null;)t=this.collection.getItem(t.parentKey);return!t||t.type!=="item"?null:t.key}toggleSelection(e){if(this.selectionMode==="none")return;if(this.selectionMode==="single"&&!this.isSelected(e)){this.replaceSelection(e);return}if(e=this.getKey(e),e==null)return;let t=new f.Y(this.state.selectedKeys==="all"?this.getSelectAllKeys():this.state.selectedKeys);t.has(e)?t.delete(e):this.canSelectItem(e)&&(t.add(e),t.anchorKey=e,t.currentKey=e),!(this.disallowEmptySelection&&t.size===0)&&this.state.setSelectedKeys(t)}replaceSelection(e){if(this.selectionMode==="none"||(e=this.getKey(e),e==null))return;let t=this.canSelectItem(e)?new f.Y([e],e,e):new f.Y;this.state.setSelectedKeys(t)}setSelectedKeys(e){if(this.selectionMode==="none")return;let t=new f.Y;for(let l of e)if(l=this.getKey(l),l!=null&&(t.add(l),this.selectionMode==="single"))break;this.state.setSelectedKeys(t)}getSelectAllKeys(){let e=[],t=l=>{for(;l!=null;){if(this.canSelectItem(l)){let n=this.collection.getItem(l);n.type==="item"&&e.push(l),n.hasChildNodes&&(this.allowsCellSelection||n.type!=="item")&&t(y(d(n,this.collection)).key)}l=this.collection.getKeyAfter(l)}};return t(this.collection.getFirstKey()),e}selectAll(){!this.isSelectAll&&this.selectionMode==="multiple"&&this.state.setSelectedKeys("all")}clearSelection(){!this.disallowEmptySelection&&(this.state.selectedKeys==="all"||this.state.selectedKeys.size>0)&&this.state.setSelectedKeys(new f.Y)}toggleSelectAll(){this.isSelectAll?this.clearSelection():this.selectAll()}select(e,t){this.selectionMode!=="none"&&(this.selectionMode==="single"?this.isSelected(e)&&!this.disallowEmptySelection?this.toggleSelection(e):this.replaceSelection(e):this.selectionBehavior==="toggle"||t&&(t.pointerType==="touch"||t.pointerType==="virtual")?this.toggleSelection(e):this.replaceSelection(e))}isSelectionEqual(e){if(e===this.state.selectedKeys)return!0;let t=this.selectedKeys;if(e.size!==t.size)return!1;for(let l of e)if(!t.has(l))return!1;for(let l of t)if(!e.has(l))return!1;return!0}canSelectItem(e){var t;if(this.state.selectionMode==="none"||this.state.disabledKeys.has(e))return!1;let l=this.collection.getItem(e);return!(!l||!(l==null||(t=l.props)===null||t===void 0)&&t.isDisabled||l.type==="cell"&&!this.allowsCellSelection)}isDisabled(e){var t,l;return this.state.disabledBehavior==="all"&&(this.state.disabledKeys.has(e)||!!(!((l=this.collection.getItem(e))===null||l===void 0||(t=l.props)===null||t===void 0)&&t.isDisabled))}isLink(e){var t,l;return!!(!((l=this.collection.getItem(e))===null||l===void 0||(t=l.props)===null||t===void 0)&&t.href)}getItemProps(e){var t;return(t=this.collection.getItem(e))===null||t===void 0?void 0:t.props}constructor(e,t,l){this.collection=e,this.state=t;var n;this.allowsCellSelection=(n=l==null?void 0:l.allowsCellSelection)!==null&&n!==void 0?n:!1,this._isSelectAll=null}}},5229:function(h,c,u){u.d(c,{q:function(){return p}});var f=u(71823),d=u(67294);function y(r,i,s){let[e,t]=(0,d.useState)(r||i),l=(0,d.useRef)(r!==void 0),n=r!==void 0;(0,d.useEffect)(()=>{let g=l.current;g!==n&&console.warn(`WARN: A component changed from ${g?"controlled":"uncontrolled"} to ${n?"controlled":"uncontrolled"}.`),l.current=n},[n]);let o=n?r:e,a=(0,d.useCallback)((g,...$)=>{let b=(K,...v)=>{s&&(Object.is(o,K)||s(K,...v)),n||(o=K)};typeof g=="function"?(console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),t((v,...x)=>{let I=g(n?o:v,...x);return b(I,...$),n?v:I})):(n||t(g),b(g,...$))},[n,o,s]);return[o,a]}function S(r,i){if(r.size!==i.size)return!1;for(let s of r)if(!i.has(s))return!1;return!0}function p(r){let{selectionMode:i="none",disallowEmptySelection:s,allowDuplicateSelectionEvents:e,selectionBehavior:t="toggle",disabledBehavior:l="all"}=r,n=(0,d.useRef)(!1),[,o]=(0,d.useState)(!1),a=(0,d.useRef)(null),g=(0,d.useRef)(null),[,$]=(0,d.useState)(null),b=(0,d.useMemo)(()=>m(r.selectedKeys),[r.selectedKeys]),K=(0,d.useMemo)(()=>m(r.defaultSelectedKeys,new f.Y),[r.defaultSelectedKeys]),[v,x]=y(b,K,r.onSelectionChange),I=(0,d.useMemo)(()=>r.disabledKeys?new Set(r.disabledKeys):new Set,[r.disabledKeys]),[w,C]=(0,d.useState)(t);t==="replace"&&w==="toggle"&&typeof v=="object"&&v.size===0&&C("replace");let M=(0,d.useRef)(t);return(0,d.useEffect)(()=>{t!==M.current&&(C(t),M.current=t)},[t]),{selectionMode:i,disallowEmptySelection:s,selectionBehavior:w,setSelectionBehavior:C,get isFocused(){return n.current},setFocused(_){n.current=_,o(_)},get focusedKey(){return a.current},get childFocusStrategy(){return g.current},setFocusedKey(_,Y="first"){a.current=_,g.current=Y,$(_)},selectedKeys:v,setSelectedKeys(_){(e||!S(_,v))&&x(_)},disabledKeys:I,disabledBehavior:l}}function m(r,i){return r?r==="all"?"all":new f.Y(r):i}}}]);
}());