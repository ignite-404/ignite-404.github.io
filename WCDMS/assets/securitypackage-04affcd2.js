import{_ as $,b as O,a as n,o as l,c as p,f as t,w as o,i as s,e as r,p as E,t as y,F as Z,l as B,E as L,m as R,k as A,K as J,u as K,z as M,J as P}from"./index-237ca1fa.js";import{c as Q}from"./index-8f88edd5.js";import{V as H}from"./index-6bd32735.js";/* empty css              */import{s as j}from"./searchform-9102192c.js";import{Z as q}from"./index-279d97c1.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index-48928b4c.js";import"./index-fb954438.js";import{_ as W}from"./userSearch-9713da49.js";/* empty css                                                                   */import{_ as X}from"./userGroupSearch-9d320ace.js";import{U as Y,B as ee}from"./index-f0966849.js";import"./routeSearch-7ca5c7cc.js";import"./index-b94db6d9.js";import"./automationCodeSearch-0ea9e2e2.js";import"./index-d401adb3.js";import"./index-37a87004.js";import"./index2-0225e6fb.js";import"./index2-e6d9c937.js";const te=["onClick"],oe=["onClick"],le=["onClick"],ie={class:"circle-btn"},se={key:1},ae={key:1},ne={key:1},ce={key:1},re={key:1},ue={__name:"tablesecuritypackage",props:{formType:{type:Array,default:()=>[]}},emits:["addData","addLetter","editLetter"],setup(N,{expose:k,emit:C}){O(()=>{u.value.total=d.value.length});const b=function(a){let _="";switch(a){case"securityaccessgroup_ServiceRegion":_="Service District List";break;case"securityaccessgroup_BillingCycle":_="Billing Cycle List";break;case"securityaccessgroup_Report":_="Report List";break}v.value=_},v=n("Service District List"),h=n(null),c=n(null);n(null);const u=n({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),g=[{title:"SEQ.",width:"200px",key:"field1",customSlot:"field1"},{title:"Level",key:"field2",width:"200px",customSlot:"field2"},{title:"Operation",key:"field3",width:"200px",customSlot:"field3"},{title:"Value",key:"field4",width:"200px",customSlot:"field4"},{title:"Obsolete",key:"field5",width:"200px",customSlot:"field5"},{title:"Handles",key:"field6",width:"200px",customSlot:"field6"}],d=n([]);for(let a=0;a<5;a++)d.value.push({field1:`${a}`,field2:"	1001",field3:"	666",field4:"	999",field5:"	N-No",isEdit:!1});const V=()=>{d.value.push({field1:"",field2:"",field3:"",field4:"",field5:"",isEdit:!0}),u.value.total++},x=a=>{},D=a=>{a.isEdit=!1},T=a=>{a.isEdit=!0};return k({init:b}),(a,_)=>{const f=B,m=L,U=R,S=A,w=Y,z=ee,F=J,G=q,I=H;return l(),p(Z,null,[t(I,{title:v.value},{extra:o(()=>[t(U,null,{default:o(()=>[t(m,{position:"top",content:"create"},{default:o(()=>[s("div",{onClick:V,class:"circle-btn"},[t(f,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:o(()=>[t(G,{columns:g,"data-source":d.value,page:u.value,resize:""},{field6:o(({data:e})=>[t(U,null,{default:o(()=>[e.isEdit?E("",!0):(l(),r(m,{key:0,position:"top",content:"edit"},{default:o(()=>[s("div",{onClick:i=>T(e),class:"circle-btn"},[t(f,{type:"layui-icon-edit"})],8,te)]),_:2},1024)),e.isEdit?(l(),r(m,{key:1,position:"top",content:"save"},{default:o(()=>[s("div",{onClick:i=>x(e),class:"circle-btn"},[t(f,{type:"layui-icon-ok"})],8,oe)]),_:2},1024)):E("",!0),e.isEdit?(l(),r(m,{key:2,position:"top",content:"cancel"},{default:o(()=>[s("div",{onClick:i=>D(e),class:"circle-btn"},[t(f,{type:"layui-icon-close"})],8,le)]),_:2},1024)):E("",!0),t(m,{position:"top",content:"delete"},{default:o(()=>[s("div",ie,[t(f,{type:"layui-icon-delete"})])]),_:1})]),_:2},1024)]),field1:o(({data:e})=>[e.isEdit?(l(),r(S,{key:0,placeholder:"",modelValue:e.field1,"onUpdate:modelValue":i=>e.field1=i,allowClear:""},null,8,["modelValue","onUpdate:modelValue"])):(l(),p("span",se,y(e.field1),1))]),field2:o(({data:e})=>[e.isEdit?(l(),r(S,{key:0,placeholder:"",modelValue:e.field2,"onUpdate:modelValue":i=>e.field2=i,allowClear:""},null,8,["modelValue","onUpdate:modelValue"])):(l(),p("span",ae,y(e.field2),1))]),field3:o(({data:e})=>[e.isEdit?(l(),r(z,{key:0,style:{width:"100%"},modelValue:e.field3,"onUpdate:modelValue":i=>e.field3=i,"show-search":!0},{default:o(()=>[t(w,{value:"1",label:"test1"}),t(w,{value:"2",label:"test2"}),t(w,{value:"3",label:"test3"})]),_:2},1032,["modelValue","onUpdate:modelValue"])):(l(),p("span",ne,y(e.field3),1))]),field4:o(({data:e})=>[e.isEdit?(l(),r(S,{key:0,placeholder:"",modelValue:e.field4,"onUpdate:modelValue":i=>e.field4=i,allowClear:""},null,8,["modelValue","onUpdate:modelValue"])):(l(),p("span",ce,y(e.field4),1))]),field5:o(({data:e})=>[e.isEdit?(l(),r(F,{key:0,name:"like",skin:"primary",modelValue:e.field5,"onUpdate:modelValue":i=>e.field5=i},null,8,["modelValue","onUpdate:modelValue"])):(l(),p("span",re,y(e.field5),1))]),_:1},8,["data-source","page"])]),_:1},8,["title"]),t(X,{ref_key:"accessgroup_userGroupSearch",ref:c},null,512),t(W,{ref_key:"accessgroup_userSearch",ref:h},null,512)],64)}}},de=$(ue,[["__scopeId","data-v-03fde098"]]);const pe={class:"top-use-box"},_e={class:"top-use-fun"},fe={__name:"securitypackage",setup(N){K(),M({}),n(!1);const k=n("securityuser_general"),C=n(null),b=n(null),v=()=>{C.value.search({limit:10,current:1})};return P(()=>k.value,(h,c)=>{h=="securityuser_history"&&b.value.init("securityuser_history")}),(h,c)=>{const u=L,g=B,d=R,V=H,x=Q;return l(),r(x,{fluid:!0,class:"common-container"},{default:o(()=>[t(V,{class:"top-use-card"},{default:o(()=>[s("div",pe,[c[2]||(c[2]=s("h1",{class:"top-use-title"},"Security Package",-1)),s("div",_e,[t(d,{size:"md"},{default:o(()=>[t(u,{position:"top",content:"save","is-dark":""},{default:o(()=>c[0]||(c[0]=[s("span",{class:"iconfont icon-baocun"},null,-1)])),_:1}),t(u,{position:"top",content:"delete","is-dark":""},{default:o(()=>c[1]||(c[1]=[s("span",{class:"iconfont icon-rubber"},null,-1)])),_:1}),t(u,{position:"top",content:"refresh","is-dark":""},{default:o(()=>[s("span",null,[t(g,{type:"layui-icon-refresh"})])]),_:1}),t(u,{position:"top",content:"create","is-dark":""},{default:o(()=>[s("span",null,[t(g,{type:"layui-icon-addition"})])]),_:1})]),_:1})])])]),_:1}),t(j,{formType:"securitypackage",onSearch:v}),t(de,{ref:"tablesecuritypackageref1",formType:k.value},null,8,["formType"])]),_:1})}}},Fe=$(fe,[["__scopeId","data-v-abde9809"]]);export{Fe as default};