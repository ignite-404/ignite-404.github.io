import{_ as H,b as I,a as n,o as l,c as f,f as t,w as o,i,e as d,p as C,t as v,F as W,l as U,E as $,m as L,n as Z,k as A,K as J,u as K,z as M,J as O}from"./index-237ca1fa.js";import{c as j}from"./index-8f88edd5.js";import{V as N}from"./index-6bd32735.js";/* empty css              */import{s as q}from"./searchform-9102192c.js";import{Z as P}from"./index-279d97c1.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index-48928b4c.js";import"./index-fb954438.js";import{_ as Q}from"./userSearch-9713da49.js";/* empty css                                                                   */import{_ as X}from"./userGroupSearch-9d320ace.js";import"./routeSearch-7ca5c7cc.js";import"./index-b94db6d9.js";import"./index-f0966849.js";import"./index2-e6d9c937.js";import"./automationCodeSearch-0ea9e2e2.js";import"./index-d401adb3.js";import"./index-37a87004.js";import"./index2-0225e6fb.js";const Y=["onClick"],ee=["onClick"],te=["onClick"],oe={class:"circle-btn"},le={key:1},ie={key:1},se={key:1},ae={key:1},ne={__name:"tableseworkcalendar",props:{formType:{type:Array,default:()=>[]}},emits:["addData","addLetter","editLetter"],setup(B,{expose:y,emit:x}){I(()=>{r.value.total=u.value.length});const b=function(s){let p="";switch(s){case"securityaccessgroup_ServiceRegion":p="Service District List";break;case"securityaccessgroup_BillingCycle":p="Billing Cycle List";break;case"securityaccessgroup_Report":p="Report List";break}w.value=p},w=n("Service District List"),k=n(null),c=n(null);n(null);const r=n({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),h=[{title:"Holiday Date",width:"200px",key:"field1",customSlot:"field1"},{title:"Holiday Name",key:"field2",width:"200px",customSlot:"field2"},{title:"Holiday Name(Chinese)",key:"field3",width:"200px",customSlot:"field3"},{title:"Obsolete",key:"field4",width:"200px",customSlot:"field4"},{title:"Handles",key:"field5",width:"200px",customSlot:"field5"}],u=n([]);for(let s=0;s<5;s++)u.value.push({field1:"2022-8-30",field2:"Holiday Name",field3:"Holiday Name(Chinese)",field4:!1,isEdit:!1});const V=()=>{u.value.push({field1:"",field2:"",field3:"",field4:"",isEdit:!0}),r.value.total++},g=s=>{},R=s=>{s.isEdit=!1},D=s=>{s.isEdit=!0};return y({init:b}),(s,p)=>{const _=U,m=$,S=L,T=Z,E=A,z=J,F=P,G=N;return l(),f(W,null,[t(G,{title:"Work Calendar List"},{extra:o(()=>[t(S,null,{default:o(()=>[t(m,{position:"top",content:"create"},{default:o(()=>[i("div",{onClick:V,class:"circle-btn"},[t(_,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:o(()=>[t(F,{columns:h,"data-source":u.value,page:r.value,resize:""},{field5:o(({data:e})=>[t(S,null,{default:o(()=>[e.isEdit?C("",!0):(l(),d(m,{key:0,position:"top",content:"edit"},{default:o(()=>[i("div",{onClick:a=>D(e),class:"circle-btn"},[t(_,{type:"layui-icon-edit"})],8,Y)]),_:2},1024)),e.isEdit?(l(),d(m,{key:1,position:"top",content:"save"},{default:o(()=>[i("div",{onClick:a=>g(e),class:"circle-btn"},[t(_,{type:"layui-icon-ok"})],8,ee)]),_:2},1024)):C("",!0),e.isEdit?(l(),d(m,{key:2,position:"top",content:"cancel"},{default:o(()=>[i("div",{onClick:a=>R(e),class:"circle-btn"},[t(_,{type:"layui-icon-close"})],8,te)]),_:2},1024)):C("",!0),t(m,{position:"top",content:"delete"},{default:o(()=>[i("div",oe,[t(_,{type:"layui-icon-delete"})])]),_:1})]),_:2},1024)]),field1:o(({data:e})=>[e.isEdit?(l(),d(T,{key:0,style:{width:"100%"},modelValue:e.field1,"onUpdate:modelValue":a=>e.field1=a,placeholder:"",allowClear:""},null,8,["modelValue","onUpdate:modelValue"])):(l(),f("span",le,v(e.field1),1))]),field2:o(({data:e})=>[e.isEdit?(l(),d(E,{key:0,placeholder:"",modelValue:e.field2,"onUpdate:modelValue":a=>e.field2=a,allowClear:""},null,8,["modelValue","onUpdate:modelValue"])):(l(),f("span",ie,v(e.field2),1))]),field3:o(({data:e})=>[e.isEdit?(l(),d(E,{key:0,placeholder:"",modelValue:e.field3,"onUpdate:modelValue":a=>e.field3=a,allowClear:""},null,8,["modelValue","onUpdate:modelValue"])):(l(),f("span",se,v(e.field3),1))]),field4:o(({data:e})=>[e.isEdit?(l(),d(z,{key:0,name:"like",skin:"primary",modelValue:e.field4,"onUpdate:modelValue":a=>e.field4=a},null,8,["modelValue","onUpdate:modelValue"])):(l(),f("span",ae,v(e.field4),1))]),_:1},8,["data-source","page"])]),_:1}),t(X,{ref_key:"accessgroup_userGroupSearch",ref:c},null,512),t(Q,{ref_key:"accessgroup_userSearch",ref:k},null,512)],64)}}},ce=H(ne,[["__scopeId","data-v-fd53fdbd"]]);const re={class:"top-use-box"},de={class:"top-use-fun"},ue={__name:"workcalendar",setup(B){K(),M({}),n(!1);const y=n("securityuser_general"),x=n(null),b=n(null),w=()=>{x.value.search({limit:10,current:1})};return O(()=>y.value,(k,c)=>{k=="securityuser_history"&&b.value.init("securityuser_history")}),(k,c)=>{const r=$,h=U,u=L,V=N,g=j;return l(),d(g,{fluid:!0,class:"common-container"},{default:o(()=>[t(V,{class:"top-use-card"},{default:o(()=>[i("div",re,[c[2]||(c[2]=i("h1",{class:"top-use-title"},"Work Calendar",-1)),i("div",de,[t(u,{size:"md"},{default:o(()=>[t(r,{position:"top",content:"save","is-dark":""},{default:o(()=>c[0]||(c[0]=[i("span",{class:"iconfont icon-baocun"},null,-1)])),_:1}),t(r,{position:"top",content:"delete","is-dark":""},{default:o(()=>c[1]||(c[1]=[i("span",{class:"iconfont icon-rubber"},null,-1)])),_:1}),t(r,{position:"top",content:"refresh","is-dark":""},{default:o(()=>[i("span",null,[t(h,{type:"layui-icon-refresh"})])]),_:1}),t(r,{position:"top",content:"create","is-dark":""},{default:o(()=>[i("span",null,[t(h,{type:"layui-icon-addition"})])]),_:1})]),_:1})])])]),_:1}),t(q,{formType:"workcalendar",onSearch:w}),t(ce,{ref:"tableseworkcalendarref1",formType:y.value},null,8,["formType"])]),_:1})}}},De=H(ue,[["__scopeId","data-v-79ada94e"]]);export{De as default};