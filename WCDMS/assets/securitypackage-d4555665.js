import{_ as U,b as z,a as c,o,c as r,f as t,w as l,i as n,e as a,p as w,t as m,F,l as G,s as J,m as M,k as O,K as A,u as K,E as P,M as Q,y as j,z as q}from"./index-0f1dbffa.js";import{c as W}from"./index-791fece4.js";import{V as B}from"./index-653c2f3d.js";import{s as X}from"./searchform-3e3eaf00.js";import{J as Y}from"./index-2d4ddb61.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index-203e73ba.js";import"./index-15df4815.js";/* empty css                                                                   */import{_ as Z}from"./userGroupSearch-6b3f2d06.js";import{_ as ee}from"./userSearch-8014df1a.js";import{U as te,B as le}from"./index-09643b1a.js";import"./routeSearch-0d9ec547.js";import"./index-c88e3fd6.js";import"./index2-f5b11353.js";import"./index2-84f017df.js";const oe=["onClick"],ie=["onClick"],se=["onClick"],ce={class:"circle-btn"},ae={key:1},ne={key:1},re={key:1},de={key:1},ue={key:1},pe={__name:"tablesecuritypackage",props:{formType:{type:Array,default:()=>[]}},emits:["addData","addLetter","editLetter"],setup(d,{expose:y,emit:C}){z(()=>{u.value.total=v.value.length});const g=function(s){let p="";switch(s){case"securityaccessgroup_ServiceRegion":p="Service District List";break;case"securityaccessgroup_BillingCycle":p="Billing Cycle List";break;case"securityaccessgroup_Report":p="Report List";break}k.value=p},k=c("Service District List"),h=c(null),V=c(null);c(null);const u=c({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),b=[{title:"SEQ.",width:"200px",key:"field1",customSlot:"field1"},{title:"Level",key:"field2",width:"200px",customSlot:"field2"},{title:"Operation",key:"field3",width:"200px",customSlot:"field3"},{title:"Value",key:"field4",width:"200px",customSlot:"field4"},{title:"Obsolete",key:"field5",width:"200px",customSlot:"field5"},{title:"Handles",key:"field6",width:"200px",customSlot:"field6"}],v=c([]);for(let s=0;s<5;s++)v.value.push({field1:`${s}`,field2:"	1001",field3:"	666",field4:"	999",field5:"	N-No",isEdit:!1});const $=()=>{v.value.push({field1:"",field2:"",field3:"",field4:"",field5:"",isEdit:!0}),u.value.total++},L=s=>{},R=s=>{s.isEdit=!1},H=s=>{s.isEdit=!0};return y({init:g}),(s,p)=>{const _=G,f=J,E=M,S=O,x=te,I=le,N=A,D=Y,T=B;return o(),r(F,null,[t(T,{title:k.value},{extra:l(()=>[t(E,null,{default:l(()=>[t(f,{position:"top",content:"create"},{default:l(()=>[n("div",{onClick:$,class:"circle-btn"},[t(_,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:l(()=>[t(D,{columns:b,"data-source":v.value,page:u.value,resize:""},{field6:l(({data:e})=>[t(E,null,{default:l(()=>[e.isEdit?w("",!0):(o(),a(f,{key:0,position:"top",content:"edit"},{default:l(()=>[n("div",{onClick:i=>H(e),class:"circle-btn"},[t(_,{type:"layui-icon-edit"})],8,oe)]),_:2},1024)),e.isEdit?(o(),a(f,{key:1,position:"top",content:"save"},{default:l(()=>[n("div",{onClick:i=>L(e),class:"circle-btn"},[t(_,{type:"layui-icon-ok"})],8,ie)]),_:2},1024)):w("",!0),e.isEdit?(o(),a(f,{key:2,position:"top",content:"cancel"},{default:l(()=>[n("div",{onClick:i=>R(e),class:"circle-btn"},[t(_,{type:"layui-icon-close"})],8,se)]),_:2},1024)):w("",!0),t(f,{position:"top",content:"delete"},{default:l(()=>[n("div",ce,[t(_,{type:"layui-icon-delete"})])]),_:1})]),_:2},1024)]),field1:l(({data:e})=>[e.isEdit?(o(),a(S,{key:0,placeholder:"",modelValue:e.field1,"onUpdate:modelValue":i=>e.field1=i,allowClear:""},null,8,["modelValue","onUpdate:modelValue"])):(o(),r("span",ae,m(e.field1),1))]),field2:l(({data:e})=>[e.isEdit?(o(),a(S,{key:0,placeholder:"",modelValue:e.field2,"onUpdate:modelValue":i=>e.field2=i,allowClear:""},null,8,["modelValue","onUpdate:modelValue"])):(o(),r("span",ne,m(e.field2),1))]),field3:l(({data:e})=>[e.isEdit?(o(),a(I,{key:0,style:{width:"100%"},modelValue:e.field3,"onUpdate:modelValue":i=>e.field3=i,"show-search":!0},{default:l(()=>[t(x,{value:"1",label:"test1"}),t(x,{value:"2",label:"test2"}),t(x,{value:"3",label:"test3"})]),_:2},1032,["modelValue","onUpdate:modelValue"])):(o(),r("span",re,m(e.field3),1))]),field4:l(({data:e})=>[e.isEdit?(o(),a(S,{key:0,placeholder:"",modelValue:e.field4,"onUpdate:modelValue":i=>e.field4=i,allowClear:""},null,8,["modelValue","onUpdate:modelValue"])):(o(),r("span",de,m(e.field4),1))]),field5:l(({data:e})=>[e.isEdit?(o(),a(N,{key:0,name:"like",skin:"primary",modelValue:e.field5,"onUpdate:modelValue":i=>e.field5=i},null,8,["modelValue","onUpdate:modelValue"])):(o(),r("span",ue,m(e.field5),1))]),_:1},8,["data-source","page"])]),_:1},8,["title"]),t(Z,{ref_key:"accessgroup_userGroupSearch",ref:V},null,512),t(ee,{ref_key:"accessgroup_userSearch",ref:h},null,512)],64)}}},_e=U(pe,[["__scopeId","data-v-03fde098"]]);const fe=d=>(j("data-v-d2982916"),d=d(),q(),d),me=fe(()=>n("div",{class:"top-use-box"},[n("h1",{class:"top-use-title"},"Security Package")],-1)),ye={__name:"securitypackage",setup(d){K(),P({}),c(!1);const y=c("securityuser_general"),C=c(null),g=c(null),k=()=>{C.value.search({limit:10,current:1})};return Q(()=>y.value,(h,V)=>{h=="securityuser_history"&&g.value.init("securityuser_history")}),(h,V)=>{const u=B,b=W;return o(),a(b,{fluid:!0,class:"common-container"},{default:l(()=>[t(u,{class:"top-use-card"},{default:l(()=>[me]),_:1}),t(X,{formType:"securitypackage",onSearch:k}),t(_e,{ref:"tablesecuritypackageref1",formType:y.value},null,8,["formType"])]),_:1})}}},De=U(ye,[["__scopeId","data-v-d2982916"]]);export{De as default};