import{A as H,d as O,D as m,a as C,J as F,a4 as J,b as U,T as $,o as x,c as B,f as D,H as j,w as M,r as I,I as w,P as K,V as R,W,i as L,h as P,t as G,p as z,X as T,U as A,O as X,M as q,j as Q,v as Y,e as E,as as Z,F as ee,$ as _}from"./index-5ba83812.js";import{x as le}from"./index2-ab9f2a8e.js";const te=["size"],ae=["name","value"],ie=["lay-skin"],ne={class:"layui-checkbox-label"},se=O({name:"LayCheckboxV2",__name:"index",props:{name:{},skin:{},label:{default:""},value:{},modelValue:{type:[Boolean,Array],default:!1},isIndeterminate:{type:Boolean,default:!1},size:{},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(b,{expose:i,emit:t}){const l=b,{size:o}=function(a){return{size:m(()=>{const r=R("LayForm",{});return a.size||r.size||"md"})}}(l),c=R("checkboxGroup",{}),d=m(()=>c!=null&&(c==null?void 0:c.name)==="LayCheckboxGroup"),n=t,h=W(),u=m({get:()=>d.value?c.modelValue.value.includes(l.value):Array.isArray(l.modelValue)?l.modelValue.includes(l.value):l.modelValue,set(a){d.value?v(a):Array.isArray(l.modelValue)?e(a):(n("update:modelValue",a),n("change",a))}}),g=m(()=>Array.isArray(l.modelValue)?[...l.modelValue]:[]),v=function(a){let r=[...c.modelValue.value];a?r.push(l.value):r.splice(r.indexOf(l.value),1),c.modelValue.value=r},e=function(a){let r=[...g.value];a?r.push(l.value):r.splice(r.indexOf(l.value),1),n("update:modelValue",r),n("change",r)},y=function(){f.value||(u.value=!u.value)},f=m(()=>!!l.disabled||!(!c.hasOwnProperty("disabled")||!c.disabled.value));return i({toggle:y}),(a,r)=>(x(),B("span",{onClick:A(y,["stop"]),class:"layui-checkbox",size:w(o)},[L("input",{type:"checkbox",name:a.name,value:a.value},null,8,ae),L("div",{class:K(["layui-form-checkbox",{"layui-form-checked":u.value,"layui-checkbox-indeterminate":l.isIndeterminate,"layui-checkbox-disabled layui-disabled":f.value}]),"lay-skin":a.skin},[L("span",ne,[w(h).default||a.label?I(a.$slots,"default",{key:0},()=>[P(G(a.label),1)]):z("",!0)]),D(w(T),{type:u.value?"layui-icon-ok":l.isIndeterminate?"layui-icon-subtraction":""},null,8,["type"])],10,ie)],8,te))}}),oe=["onClick"],ce={class:"layui-tree-main"},de=["onClick"],re={key:0,class:"layui-tree-pack layui-tree-showLine",style:{display:"block"}},ue=O({name:"TreeNode",__name:"TreeNode",props:{tree:{},nodeList:{},showCheckbox:{type:Boolean},showLine:{type:Boolean},selectedKey:{},checkStrictly:{type:[Boolean,String]},collapseTransition:{type:Boolean},onlyIconControl:{type:Boolean},tailNodeIcon:{type:[String,Boolean]},replaceFields:{},load:{type:Function}},emits:["node-click","check-change"],setup(b,{emit:i}){const t=b,l=i;function o(e){const{children:y}=t.replaceFields;return!e.hasNextSibling&&e.parentNode&&(!e.parentNode.hasNextSibling||e.parentNode.hasNextSibling&&!e.parentNode[y])}const c=e=>{var y;const{children:f}=t.replaceFields;return t.showLine?((y=e[f])==null?void 0:y.length)>0||e.isLazy?e.isLeaf?"layui-icon-subtraction":"layui-icon-addition":t.tailNodeIcon?t.tailNodeIcon:"":e[f].length>0||e.isLazy?e.isLeaf?"layui-icon-triangle-d":"layui-icon-triangle-r":""};function d(e){l("node-click",e)}const n=(e,y)=>{l("check-change",e,y)},h=le();function u(e){const{id:y,children:f}=t.replaceFields,a=e[y],r=t.tree.getOriginData(a),s=e[f]&&e[f].length>0;t.load&&e.isLazy&&!s?(e.isLoading=!0,t.load(r,p=>{const k=t.tree.createTree(p,a);Reflect.set(e,f,k),e.isLoading=!1,e.isLazy=!1,$(()=>{e.isLeaf=!e.isLeaf})})):s&&(e.isLeaf=!e.isLeaf)}function g(e){t.onlyIconControl||u(e),e.isDisabled||l("node-click",e)}const v=m(()=>{function e(y){var f;const{children:a}=t.replaceFields;let r=!1;for(const s of y[a]||[])s.isChecked&&(r=!0);if(!r&&(f=y[a])!=null&&f.length){for(const s of y[a]||[])if(r=e(s),r)break}return r}return y=>t.checkStrictly||!t.showCheckbox?!1:e(y)});return(e,y)=>{const f=X("tree-node",!0);return x(!0),B(ee,null,q(e.nodeList,(a,r)=>{var s,p;return Q((x(),B("div",{key:r,class:K({"layui-tree-set":!0,"layui-tree-setLineShort":o(a),"layui-tree-setHide":a.isRoot})},[L("div",{class:K(["layui-tree-entry",{"layui-this":e.selectedKey===a[e.replaceFields.id]}]),onClick:k=>function(N){t.showLine||g(N)}(a)},[L("div",ce,[L("span",{class:K([e.showLine&&(((s=a[e.replaceFields.children])==null?void 0:s.length)>0||a.isLazy)?"layui-tree-icon":"",{"layui-tree-iconClick":!0},{"layui-tree-icon-standalone":c(a).length&&a.isLeaf&&!((p=a[e.replaceFields.children])!=null&&p.length)}])},[D(w(T),{type:c(a),onClick:A(k=>u(a),["stop"])},null,8,["type","onClick"])],2),e.showCheckbox?(x(),E(se,{key:0,value:"",skin:"primary",modelValue:a.isChecked,disabled:a.isDisabled,isIndeterminate:v.value(a),onChange:k=>function(N,S){var V;t.tree.setCheckedKeys(N,t.checkStrictly,S),l("check-change",S,N),h&&h!=null&&h.inputEl&&((V=h==null?void 0:h.inputEl.value)==null||V.focus())}(k,a)},null,8,["modelValue","disabled","isIndeterminate","onChange"])):z("",!0),a.isLoading?(x(),E(w(T),{key:1,class:"layui-tree-loading layui-anim layui-anim-rotate layui-anim-loop",type:"layui-icon-loading"})):z("",!0),L("span",{class:K({"layui-tree-txt":!0,"layui-disabled":a.isDisabled}),onClick:A(k=>g(a),["stop"])},[I(e.$slots,"title",{data:a},()=>[P(G(a[t.replaceFields.title]),1)])],10,de)])],10,oe),D(Z,{enable:e.collapseTransition},{default:M(()=>[a.isLeaf?(x(),B("div",re,[D(f,{tree:e.tree,"node-list":a[e.replaceFields.children]||[],"show-checkbox":e.showCheckbox,"show-line":e.showLine,"selected-key":e.selectedKey,"collapse-transition":e.collapseTransition,checkStrictly:e.checkStrictly,"only-icon-control":e.onlyIconControl,"tail-node-icon":e.tailNodeIcon,"replace-fields":e.replaceFields,load:e.load,onNodeClick:d,onCheckChange:n},j({_:2},[e.$slots.title?{name:"title",fn:M(k=>[I(e.$slots,"title",{data:k.data})]),key:"0"}:void 0]),1032,["tree","node-list","show-checkbox","show-line","selected-key","collapse-transition","checkStrictly","only-icon-control","tail-node-icon","replace-fields","load"])])):z("",!0)]),_:2},1032,["enable"])],2)),[[Y,a.visible]])}),128)}}});class he{constructor(i,t){this.config=i,this.treeData=[],this.init(t)}init(i){const t=this.createTree(i);this.treeData=t}createTree(i,t=""){let l;l=Array.isArray(i)?i:Array.of(Object.assign({},i));const o=[],{children:c,id:d}=this.config.replaceFields,n=l.length;for(let h=0;h<n;h++){const u=this.getNode(l[h],t,h<n-1),g=Reflect.get(u,c);Reflect.get(u,c)&&Reflect.set(u,c,this.createTree(g,u[d])),o.push(u)}return o}getNode(i,t,l){const{nodeMap:o,originMap:c,checkedKeys:d,expandKeys:n,replaceFields:{children:h,id:u,title:g},lazy:v}=this.config,e=Reflect.get(i,u),y=Reflect.get(i,g),f=Reflect.get(i,h),a=!!Reflect.get(i,"disabled"),r=!!Reflect.get(i,"spread")||n.includes(e),s=o.get(t),p=Object.assign({},i,{id:e,title:y,children:f||[],parentKey:t,isRoot:t==="",isDisabled:!1,isChecked:!1,isLeaf:!1,isLazy:!Reflect.get(i,"spread")&&v,isLoading:!1,hasNextSibling:l,parentNode:s||null,visible:!0});return p.isDisabled=a,p.isChecked=d.includes(e),p.isLeaf=s?s.isLeaf:n.includes(e),p.isLeaf=r||this.config.defaultExpandAll&&!v,o.has(e)||o.set(e,p),c.has(e)||c.set(e,i),p}treeForeach(i,t){const{children:l}=this.config.replaceFields;i.forEach(o=>{o[l]&&this.treeForeach(o[l],t),t(o)})}setCheckedKeys(i,t,l){const{children:o}=this.config.replaceFields;if(t)l.isChecked=i;else{if(_(l[o])){let c=0,d=0;this.treeForeach(l[o],n=>{n.isDisabled||(c++,n.isChecked&&d++)}),i=d<c,i=this.setChildrenChecked(i,l[o])}l.isChecked=i,l.parentNode&&this.setParentChecked(l.parentNode)}}setParentChecked(i){const{children:t}=this.config.replaceFields;if(!i)return;const l=i[t].every(o=>o.isChecked);i.isChecked=l,i.parentNode&&this.setParentChecked(i.parentNode)}setChildrenChecked(i,t){const{children:l}=this.config.replaceFields,o=t.length;let c=i;for(let d=0;d<o;d++)if(_(t[d][l])){const n=this.setChildrenChecked(i,t[d][l]);n||(c=!1),t[d].isChecked=n}else t[d].isDisabled?t[d].isChecked=c=!1:t[d].isChecked=i;return c}getData(){return this.treeData}getKeys(){const i=[],t=[],l=this.config.nodeMap[Symbol.iterator](),{id:o,children:c}=this.config.replaceFields;let d=l.next();for(;!d.done;){const[,n]=d.value,h=Reflect.get(n,o);n.isChecked&&t.push(h),!this.config.checkStrictly&&n.isChecked&&n[c]&&this.treeForeach(n[c],u=>{if(!u.isChecked){const g=t.findIndex(v=>v===u.parentKey);g>=0&&t.splice(g,1)}}),n.isLeaf&&i.push(h),d=l.next()}return{checkedKeys:t,expandKeys:i}}getOriginData(i){return this.config.originMap.get(i)}_filter(i){const{replaceFields:{children:t},searchNodeMethod:l,lazy:o}=this.config,c=function(d){d.forEach(n=>{const h=n[t];if(n.visible=l(n,i),c(h),!n.visible&&h.length){let u=!0;u=!h.some(g=>g.visible),n.visible=u===!1}i&&(!n.visible||n.isLeaf||o||(n.isLeaf=!0))})};c(this.treeData)}}const ye=b=>{const{id:i,title:t,children:l}=b||{};return{id:i||"id",title:t||"title",children:l||"children"}},pe=O({name:"LayTree",__name:"index",props:{data:{},treeOriginData:{},disabled:{type:Boolean,default:!1},edit:{type:[Boolean,String],default:!1},checkedKeys:{default:()=>[]},expandKeys:{},checkStrictly:{type:[Boolean,String],default:!1},collapseTransition:{type:Boolean,default:!0},onlyIconControl:{type:Boolean,default:!1},selectedKey:{},showLine:{type:Boolean,default:!0},showCheckbox:{type:Boolean,default:!1},replaceFields:{},tailNodeIcon:{type:[String,Boolean],default:"layui-icon-file"},isSelect:{type:Boolean,default:!0},defaultExpandAll:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},load:{},searchNodeMethod:{}},emits:["update:expandKeys","update:checkedKeys","node-click","update:selectedKey","update:treeOriginData","check-change"],setup(b,{expose:i,emit:t}){const l=b,o=t,c=m(()=>({"layui-tree":!0,"layui-form":l.showCheckbox,"layui-tree-line":l.showLine,"layui-tree-unline":!l.showLine})),d=m(()=>ye(l.replaceFields));let n=C(),h=C();const u=C(!1),g=C(!1),v=()=>{let{tree:s,nodeList:p}=((k,N)=>{const S=new he({nodeMap:new Map,originMap:new Map,replaceFields:k.replaceFields,showCheckbox:k.showCheckbox??!1,checkedKeys:k.checkedKeys??[],expandKeys:k.expandKeys??[],checkStrictly:k.checkStrictly??!1,defaultExpandAll:k.defaultExpandAll??!1,lazy:k.lazy??!1,searchNodeMethod:k.searchNodeMethod},k.data),V=m(()=>S.getData());return{tree:S,nodeList:V}})(Object.assign({},l,{replaceFields:d.value}));n.value=s,h.value=p.value};F(()=>l.data,()=>{u.value||v()},{deep:!0,immediate:!0}),F(()=>l.checkedKeys,()=>{u.value||v()}),F(()=>l.expandKeys,()=>{u.value||v()});const e=C([]),y=C([]);function f(s){const p=n.value.getOriginData(s[d.value.id]);l.isSelect&&o("update:selectedKey",s[d.value.id]),o("node-click",p)}F(n,()=>{if(g.value){const{checkedKeys:s,expandKeys:p}=n.value.getKeys();u.value=!0,String(y.value)!=String(s)&&(y.value=s,o("update:checkedKeys",s)),String(e.value)!=String(p)&&(e.value=p,o("update:expandKeys",p)),setTimeout(()=>{u.value=!1},0)}},{deep:!0}),J(()=>{o("update:treeOriginData",n.value.treeData)}),U(()=>{$(()=>{g.value=!0})});const a=(s,p)=>{o("check-change",s,p)},r=C(l.selectedKey);return F(()=>l.selectedKey,()=>{r.value=l.selectedKey}),i({filter:s=>{if(!l.searchNodeMethod)throw new Error("[Layui-vue/Tree] filterNodeMethod为空");n.value._filter(s)}}),(s,p)=>(x(),B("div",{class:K(c.value)},[D(ue,{tree:w(n),"node-list":w(h),"show-checkbox":s.showCheckbox,"show-line":s.showLine,selectedKey:r.value,"check-strictly":s.checkStrictly,"collapse-transition":s.collapseTransition,"only-icon-control":s.onlyIconControl,"tail-node-icon":s.tailNodeIcon,"replace-fields":d.value,load:s.load,onNodeClick:f,onCheckChange:a},j({_:2},[s.$slots.title?{name:"title",fn:M(({data:k})=>[I(s.$slots,"title",{data:k})]),key:"0"}:void 0]),1032,["tree","node-list","show-checkbox","show-line","selectedKey","check-strictly","collapse-transition","only-icon-control","tail-node-icon","replace-fields","load"])],2))}}),ge=H(pe);export{ge as b,se as n};
