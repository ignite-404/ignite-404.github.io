import{_ as C,b as F,a as c,o,c as r,f as t,w as l,i as n,e as a,p as S,t as f,F as G,l as I,E as O,m as Z,k as A,K as J,u as K,z as M,J as P}from"./index-5ba83812.js";import{c as Q}from"./index-f7d389ff.js";import{V as U}from"./index-70d2da72.js";import{s as j}from"./searchform-fec4c453.js";import{Z as q}from"./index-a25747be.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index-08f7b130.js";import"./index-9c118bc9.js";import{_ as W}from"./userSearch-e23500da.js";/* empty css                                                                   */import{_ as X}from"./userGroupSearch-676fb65f.js";import{U as Y,B as ee}from"./index-e1c7a2f1.js";import"./routeSearch-adcc7523.js";import"./index-2b452765.js";import"./automationCodeSearch-d5faf66c.js";import"./index-4238b014.js";import"./index2-75365c6f.js";import"./index2-ab9f2a8e.js";const te=["onClick"],le=["onClick"],oe=["onClick"],ie={class:"circle-btn"},se={key:1},ce={key:1},ae={key:1},ne={key:1},re={key:1},ue={__name:"tablesecuritypackage",props:{formType:{type:Array,default:()=>[]}},emits:["addData","addLetter","editLetter"],setup(B,{expose:y,emit:w}){F(()=>{d.value.total=h.value.length});const g=function(s){let p="";switch(s){case"securityaccessgroup_ServiceRegion":p="Service District List";break;case"securityaccessgroup_BillingCycle":p="Billing Cycle List";break;case"securityaccessgroup_Report":p="Report List";break}k.value=p},k=c("Service District List"),v=c(null),u=c(null);c(null);const d=c({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),V=[{title:"SEQ.",width:"200px",key:"field1",customSlot:"field1"},{title:"Level",key:"field2",width:"200px",customSlot:"field2"},{title:"Operation",key:"field3",width:"200px",customSlot:"field3"},{title:"Value",key:"field4",width:"200px",customSlot:"field4"},{title:"Obsolete",key:"field5",width:"200px",customSlot:"field5"},{title:"Handles",key:"field6",width:"200px",customSlot:"field6"}],h=c([]);for(let s=0;s<5;s++)h.value.push({field1:`${s}`,field2:"	1001",field3:"	666",field4:"	999",field5:"	N-No",isEdit:!1});const L=()=>{h.value.push({field1:"",field2:"",field3:"",field4:"",field5:"",isEdit:!0}),d.value.total++},$=s=>{},R=s=>{s.isEdit=!1},H=s=>{s.isEdit=!0};return y({init:g}),(s,p)=>{const _=I,m=O,E=Z,b=A,x=Y,N=ee,D=J,T=q,z=U;return o(),r(G,null,[t(z,{title:k.value},{extra:l(()=>[t(E,null,{default:l(()=>[t(m,{position:"top",content:"create"},{default:l(()=>[n("div",{onClick:L,class:"circle-btn"},[t(_,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:l(()=>[t(T,{columns:V,"data-source":h.value,page:d.value,resize:""},{field6:l(({data:e})=>[t(E,null,{default:l(()=>[e.isEdit?S("",!0):(o(),a(m,{key:0,position:"top",content:"edit"},{default:l(()=>[n("div",{onClick:i=>H(e),class:"circle-btn"},[t(_,{type:"layui-icon-edit"})],8,te)]),_:2},1024)),e.isEdit?(o(),a(m,{key:1,position:"top",content:"save"},{default:l(()=>[n("div",{onClick:i=>$(e),class:"circle-btn"},[t(_,{type:"layui-icon-ok"})],8,le)]),_:2},1024)):S("",!0),e.isEdit?(o(),a(m,{key:2,position:"top",content:"cancel"},{default:l(()=>[n("div",{onClick:i=>R(e),class:"circle-btn"},[t(_,{type:"layui-icon-close"})],8,oe)]),_:2},1024)):S("",!0),t(m,{position:"top",content:"delete"},{default:l(()=>[n("div",ie,[t(_,{type:"layui-icon-delete"})])]),_:1})]),_:2},1024)]),field1:l(({data:e})=>[e.isEdit?(o(),a(b,{key:0,placeholder:"",modelValue:e.field1,"onUpdate:modelValue":i=>e.field1=i,allowClear:""},null,8,["modelValue","onUpdate:modelValue"])):(o(),r("span",se,f(e.field1),1))]),field2:l(({data:e})=>[e.isEdit?(o(),a(b,{key:0,placeholder:"",modelValue:e.field2,"onUpdate:modelValue":i=>e.field2=i,allowClear:""},null,8,["modelValue","onUpdate:modelValue"])):(o(),r("span",ce,f(e.field2),1))]),field3:l(({data:e})=>[e.isEdit?(o(),a(N,{key:0,style:{width:"100%"},modelValue:e.field3,"onUpdate:modelValue":i=>e.field3=i,"show-search":!0},{default:l(()=>[t(x,{value:"1",label:"test1"}),t(x,{value:"2",label:"test2"}),t(x,{value:"3",label:"test3"})]),_:2},1032,["modelValue","onUpdate:modelValue"])):(o(),r("span",ae,f(e.field3),1))]),field4:l(({data:e})=>[e.isEdit?(o(),a(b,{key:0,placeholder:"",modelValue:e.field4,"onUpdate:modelValue":i=>e.field4=i,allowClear:""},null,8,["modelValue","onUpdate:modelValue"])):(o(),r("span",ne,f(e.field4),1))]),field5:l(({data:e})=>[e.isEdit?(o(),a(D,{key:0,name:"like",skin:"primary",modelValue:e.field5,"onUpdate:modelValue":i=>e.field5=i},null,8,["modelValue","onUpdate:modelValue"])):(o(),r("span",re,f(e.field5),1))]),_:1},8,["data-source","page"])]),_:1},8,["title"]),t(X,{ref_key:"accessgroup_userGroupSearch",ref:u},null,512),t(W,{ref_key:"accessgroup_userSearch",ref:v},null,512)],64)}}},de=C(ue,[["__scopeId","data-v-03fde098"]]);const pe={__name:"securitypackage",setup(B){K(),M({}),c(!1);const y=c("securityuser_general"),w=c(null),g=c(null),k=()=>{w.value.search({limit:10,current:1})};return P(()=>y.value,(v,u)=>{v=="securityuser_history"&&g.value.init("securityuser_history")}),(v,u)=>{const d=U,V=Q;return o(),a(V,{fluid:!0,class:"common-container"},{default:l(()=>[t(d,{class:"top-use-card"},{default:l(()=>u[0]||(u[0]=[n("div",{class:"top-use-box"},[n("h1",{class:"top-use-title"},"Security Package")],-1)])),_:1}),t(j,{formType:"securitypackage",onSearch:k}),t(de,{ref:"tablesecuritypackageref1",formType:y.value},null,8,["formType"])]),_:1})}}},De=C(pe,[["__scopeId","data-v-d2982916"]]);export{De as default};