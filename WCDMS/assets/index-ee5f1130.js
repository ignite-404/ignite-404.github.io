import{_ as U,b as I,a,o as t,c as d,f as o,w as l,i as c,e as n,p as g,t as r,F as N,l as z,E as G,m as K,k as Z,n as J,K as M,u as P,z as j,J as q}from"./index-99541687.js";import{c as O}from"./index-a6c9f0ae.js";import{V as R}from"./index-8cb0198a.js";import{s as Q}from"./searchform-48c6423a.js";import{Z as W}from"./index-45f8edc9.js";/* empty css              *//* empty css              *//* empty css              */import{_ as X}from"./userGroupSearch-9b9446d2.js";import{_ as Y}from"./userSearch-3314d775.js";/* empty css              *//* empty css              */import"./index-890504cf.js";import"./routeSearch-8c046a85.js";import"./index-d6be05a9.js";import"./index-ca186075.js";import"./index-f0ab03bb.js";import"./index2-97dbc1fc.js";import"./automationCodeSearch-f5ac715c.js";/* empty css                                                                   */import"./index-0685b90a.js";import"./index-b3d90a3e.js";import"./index2-454c9625.js";const ee={class:"circle-btn"},le=["onClick"],te=["onClick"],ie=["onClick"],oe={class:"circle-btn"},se={key:1},ne={key:1},ae={key:1},de={key:1},ce={key:1},re={key:1},ue={key:1},pe={key:1},_e={__name:"tableAudiTrial",props:{formType:{type:Array,default:()=>[]}},emits:["addData","addLetter","editLetter"],setup(T,{expose:y,emit:w}){I(()=>{m.value.total=h.value.length});const V=function(s){let u="";switch(s){case"securityaccessgroup_ServiceRegion":u="Service District List";break;case"securityaccessgroup_BillingCycle":u="Billing Cycle List";break;case"securityaccessgroup_Report":u="Report List";break}x.value=u},x=a("Service District List"),k=a(null),f=a(null);a(null);const m=a({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),b=[{title:"Table",width:"100px",key:"field1",customSlot:"field1"},{title:"Field",key:"field2",width:"200px",customSlot:"field2"},{title:"Description",key:"field3",width:"200px",customSlot:"field3"},{title:"Description(Chinese)",key:"field4",width:"200px",customSlot:"field4"},{title:"Insert",key:"field5",width:"200px",customSlot:"field5"},{title:"Update",key:"field6",width:"200px",customSlot:"field6"},{title:"Delete",key:"field7",width:"200px",customSlot:"field7"},{title:"Remove",key:"field8",width:"200px",customSlot:"field8"},{title:"Handles",key:"field9",width:"100px",customSlot:"field9"}],h=a([]);for(let s=0;s<5;s++)h.value.push({field1:`0${s}`,field2:"2024-7-30 09:49",field3:"2024-7-30 09:49",field4:"Ending",field5:"Insert",field6:"Primary Keys",field7:"delete",field8:"remove",isEdit:!1});const A=()=>{h.value.push({field1:"",field2:"",field3:"",field4:"",field5:!1,field6:!1,field7:!1,field8:!1,isEdit:!0}),m.value.total++},D=s=>{},L=s=>{s.isEdit=!1},$=s=>{s.isEdit=!0};return y({init:V}),(s,u)=>{const p=z,_=G,E=K,S=Z,C=J,v=M,B=W,H=R;return t(),d(N,null,[o(H,{title:"Attribute Field List"},{extra:l(()=>[o(E,null,{default:l(()=>[o(_,{position:"top",content:"export"},{default:l(()=>[c("div",ee,[o(p,{type:"layui-icon-export"})])]),_:1}),o(_,{position:"top",content:"create"},{default:l(()=>[c("div",{onClick:A,class:"circle-btn"},[o(p,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:l(()=>[o(B,{columns:b,"data-source":h.value,page:m.value,resize:""},{field9:l(({data:e})=>[o(E,null,{default:l(()=>[e.isEdit?g("",!0):(t(),n(_,{key:0,position:"top",content:"edit"},{default:l(()=>[c("div",{onClick:i=>$(e),class:"circle-btn"},[o(p,{type:"layui-icon-edit"})],8,le)]),_:2},1024)),e.isEdit?(t(),n(_,{key:1,position:"top",content:"save"},{default:l(()=>[c("div",{onClick:i=>D(e),class:"circle-btn"},[o(p,{type:"layui-icon-ok"})],8,te)]),_:2},1024)):g("",!0),e.isEdit?(t(),n(_,{key:2,position:"top",content:"cancel"},{default:l(()=>[c("div",{onClick:i=>L(e),class:"circle-btn"},[o(p,{type:"layui-icon-close"})],8,ie)]),_:2},1024)):g("",!0),o(_,{position:"top",content:"delete"},{default:l(()=>[c("div",oe,[o(p,{type:"layui-icon-delete"})])]),_:1})]),_:2},1024)]),field1:l(({data:e})=>[e.isEdit?(t(),n(S,{key:0,placeholder:"",modelValue:e.field1,"onUpdate:modelValue":i=>e.field1=i,allowClear:""},{append:l(({disabled:i})=>[c("span",{class:"point-cu",onClick:u[0]||(u[0]=(...F)=>s.searchRoute&&s.searchRoute(...F))},[o(p,{type:"layui-icon-search"})])]),_:2},1032,["modelValue","onUpdate:modelValue"])):(t(),d("span",se,r(e.field1),1))]),field2:l(({data:e})=>[e.isEdit?(t(),n(C,{key:0,style:{width:"100%"},modelValue:e.field2,"onUpdate:modelValue":i=>e.field2=i,placeholder:"",allowClear:""},null,8,["modelValue","onUpdate:modelValue"])):(t(),d("span",ne,r(e.field2),1))]),field3:l(({data:e})=>[e.isEdit?(t(),n(C,{key:0,style:{width:"100%"},modelValue:e.field3,"onUpdate:modelValue":i=>e.field3=i,placeholder:"",allowClear:""},null,8,["modelValue","onUpdate:modelValue"])):(t(),d("span",ae,r(e.field3),1))]),field4:l(({data:e})=>[e.isEdit?(t(),n(S,{key:0,placeholder:"",modelValue:e.field4,"onUpdate:modelValue":i=>e.field4=i,allowClear:""},null,8,["modelValue","onUpdate:modelValue"])):(t(),d("span",de,r(e.field4),1))]),field5:l(({data:e})=>[e.isEdit?(t(),n(v,{key:0,name:"like",skin:"primary",modelValue:e.field5,"onUpdate:modelValue":i=>e.field5=i},null,8,["modelValue","onUpdate:modelValue"])):(t(),d("span",ce,r(e.field5),1))]),field6:l(({data:e})=>[e.isEdit?(t(),n(v,{key:0,name:"like",skin:"primary",modelValue:e.field6,"onUpdate:modelValue":i=>e.field6=i},null,8,["modelValue","onUpdate:modelValue"])):(t(),d("span",re,r(e.field6),1))]),field7:l(({data:e})=>[e.isEdit?(t(),n(v,{key:0,name:"like",skin:"primary",modelValue:e.field7,"onUpdate:modelValue":i=>e.field7=i},null,8,["modelValue","onUpdate:modelValue"])):(t(),d("span",ue,r(e.field7),1))]),field8:l(({data:e})=>[e.isEdit?(t(),n(v,{key:0,name:"like",skin:"primary",modelValue:e.field8,"onUpdate:modelValue":i=>e.field8=i},null,8,["modelValue","onUpdate:modelValue"])):(t(),d("span",pe,r(e.field8),1))]),_:1},8,["data-source","page"])]),_:1}),o(X,{ref_key:"accessgroup_userGroupSearch",ref:f},null,512),o(Y,{ref_key:"accessgroup_userSearch",ref:k},null,512)],64)}}},fe=U(_e,[["__scopeId","data-v-3d3ac54e"]]);const me={__name:"index",setup(T){P(),j({}),a(!1);const y=a("securityuser_general"),w=a(null),V=a(null),x=()=>{w.value.search({limit:10,current:1})};return q(()=>y.value,(k,f)=>{k=="securityuser_history"&&V.value.init("securityuser_history")}),(k,f)=>{const m=R,b=O;return t(),n(b,{fluid:!0,class:"common-container"},{default:l(()=>[o(m,{class:"top-use-card"},{default:l(()=>f[0]||(f[0]=[c("div",{class:"top-use-box"},[c("h1",{class:"top-use-title"},"Audit Trial")],-1)])),_:1}),o(Q,{formType:"audittrial",onSearch:x}),o(fe,{ref:"tableAudiTrialRef",formType:y.value},null,8,["formType"])]),_:1})}}},Ne=U(me,[["__scopeId","data-v-530aa675"]]);export{Ne as default};
