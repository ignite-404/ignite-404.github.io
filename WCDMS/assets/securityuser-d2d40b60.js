import{_ as X,b as _e,a as c,o as i,e as d,w as t,f as l,i as s,p as r,c as p,t as f,l as Y,E as ee,m as te,k as ke,n as ve,K as he,x as le,L as ie,u as Ve,z as xe,J as ge}from"./index-99541687.js";import{c as Ce}from"./index-a6c9f0ae.js";import{V as oe}from"./index-8cb0198a.js";/* empty css              */import{s as q}from"./searchform-48c6423a.js";import{Z as we}from"./index-45f8edc9.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index-890504cf.js";import"./routeSearch-8c046a85.js";import"./index-d6be05a9.js";import"./index-ca186075.js";import"./index-f0ab03bb.js";import"./index2-97dbc1fc.js";import"./automationCodeSearch-f5ac715c.js";import"./userSearch-3314d775.js";/* empty css                                                                   */import"./index-0685b90a.js";import"./index-b3d90a3e.js";import"./index2-454c9625.js";const Ue=["onClick"],be=["onClick"],Ee=["onClick"],Se=["onClick"],$e={key:1},De={key:1},Te={key:1},He={key:1},Ae=["onClick"],Be=["onClick"],Ge=["onClick"],Ne=["onClick"],Re={key:1},Pe={key:1},ze={key:1},Le={key:1},Me={key:1},We={key:1},Fe=["onClick"],Ie=["onClick"],Ze=["onClick"],Je=["onClick"],Ke={key:1},Oe=["onClick"],je=["onClick"],qe=["onClick"],Qe=["onClick"],Xe={class:"point-cu"},Ye={key:1},et={key:1},tt={key:1},lt={key:1},it={__name:"tablesecurityuser",props:{formType:{type:Array,default:()=>[]}},emits:["addData","addLetter","editLetter"],setup(k,{expose:v,emit:T}){let H=T;_e(()=>{m.value.total=b.value.length,g.value.total=b.value.length,C.value.total=E.value.length,A.value.total=S.value.length,F.value.total=O.value.length,U.value.total=I.value.length,B.value.total=Z.value.length,G.value.total=J.value.length,N.value.total=K.value.length});const W=function(n){y.value=n=="securityuser_general"?"Acting Position":"User / User Group History"},y=c("Acting Position"),m=c({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),g=c({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),C=c({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),A=c({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),F=c({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),U=c({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),B=c({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),G=c({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),N=c({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),ne=[{title:"User ID",width:"200px",key:"field1"},{title:"User Name",key:"field2",width:"200px",customSlot:"field2"},{title:"Effective Date From",key:"field3",width:"260px",customSlot:"field3"},{title:"Effective Date To",key:"field4",width:"200px",customSlot:"field4"},{title:"Remove",key:"field5",width:"200px",customSlot:"field5"},{title:"Handles",key:"field6",width:"200px",customSlot:"field6"}],de=[{title:"User ID",width:"200px",key:"field1"},{title:"User Name",key:"field2",width:"200px"},{title:"Effective Date From",key:"field3",width:"260px"},{title:"Effective Date To",key:"field4",width:"200px"}],b=c([]);for(let n=0;n<10;n++)b.value.push({field1:`${n}`,field2:"userName",field3:"2021-02-05",field4:"2026-04-05",field5:"	remove"});const se=[{title:"User Group",width:"100px",key:"field1"},{title:"Description",key:"field2",customSlot:"field2",width:"150px"},{title:"Description (Chinese)",key:"field3",customSlot:"field3",width:"150px"},{title:"Effective Date From",key:"field4",customSlot:"field4",width:"150px"},{title:"Effective Date To",key:"field5",customSlot:"field5",width:"150px"},{title:"Super User",key:"field6",customSlot:"field6",width:"150px"},{title:"Remove",key:"field7",customSlot:"field7",width:"150px"},{title:"Handles",key:"field8",customSlot:"field8",width:"150px"}],E=c([]);for(let n=0;n<5;n++)E.value.push({field1:`${n}`,field2:"description",field3:"Current Amount",field4:"2024/03/02",field5:"2024/03/02",field6:"superUser",field7:"remove",isEdit:!1});const ae=()=>{E.value.push({field1:E.value.length.toString(),field2:"",field3:"",field4:"",field5:"",field6:"",field7:"",isEdit:!0}),C.value.total++},ue=[{title:"Service Region Group",width:"200px",key:"field1"},{title:"Remove",key:"field2",customSlot:"field2",width:"200px"},{title:"Handles",key:"field3",customSlot:"field3",width:"200px"}],S=c([]);for(let n=0;n<5;n++)S.value.push({field1:`${n}`,field2:"	remove"});const ce=()=>{S.value.push({field1:S.value.length.toString(),field2:"",isEdit:!0}),C.value.total++},O=c([]);for(let n=0;n<10;n++)O.value.push({field1:`${n}`,field2:"	remove"});const re=[{title:"To Do Group",width:"300px",key:"field1",customSlot:"field1"},{title:"Description",key:"field2",width:"200px"},{title:"Description (Chinese)",key:"field3",width:"200px"},{title:"Effective Date From",key:"field4",width:"150px",customSlot:"field4"},{title:"Effective Date To",key:"field5",width:"150px",customSlot:"field5"},{title:"Remove",key:"field6",width:"200px",customSlot:"field6"},{title:"Handles",key:"field7",width:"100px",customSlot:"field7"}],I=c([]);for(let n=0;n<10;n++)I.value.push({field1:`${n}`,field2:"description",field3:"Current Amount",field4:"2015-05-01",field5:"2025-05-01",field6:"	remove"});const pe=[{title:"Modified Date",width:"200px",key:"field1"},{title:"Action",key:"field2",width:"200px"},{title:"Modified By",key:"field3",width:"200px"},{title:"Before Value",key:"field4",width:"260px"},{title:"After Value",key:"field5",width:"200px"}],Z=c([]);for(let n=0;n<10;n++)Z.value.push({field1:`${n}`,field2:"action",field3:"Current Amount",field4:"Modified By",field5:"beforeValue",field6:"	Production - Person lD View"});const fe=[{title:"Modified Date",width:"200px",key:"field1"},{title:"Modified By",key:"field2",width:"200px"},{title:"Old User Name",key:"field3",width:"200px"},{title:"New User Name",key:"field4",width:"260px"},{title:"Effective Date",key:"field5",width:"200px"}],J=c([]);for(let n=0;n<10;n++)J.value.push({field1:`${n}`,field2:"action",field3:"Current Amount",field4:"oldUserName",field5:"newUserName",field6:"	effectiveDate"});const ye=[{title:"Modified Date",width:"200px",key:"field1"},{title:"Action",key:"field2",width:"200px"},{title:"Modified By",key:"field3",width:"200px"},{title:"Before Value",key:"field4",width:"260px"},{title:"After Value",key:"field5",width:"200px"}],K=c([]);for(let n=0;n<10;n++)K.value.push({field1:`${n}`,field2:"action",field3:"Current Amount",field4:"Modified By",field5:"beforeValue",field6:"	Production - Person lD View"});const R=n=>{},P=n=>{n.isEdit=!1},z=n=>{},L=n=>{n.isEdit=!0},$=()=>{H("addLetter")};return v({init:W}),(n,j)=>{const a=Y,u=ee,_=te,D=ke,w=ve,M=he,h=we,V=oe,x=le,me=ie;return i(),d(me,{type:"card",modelValue:y.value,"onUpdate:modelValue":j[0]||(j[0]=e=>y.value=e)},{default:t(()=>[k.formType=="securityuser_general"?(i(),d(x,{key:0,title:"Acting Position",id:"Acting Position"},{default:t(()=>[l(V,{title:y.value},{extra:t(()=>[l(_,null,{default:t(()=>[l(u,{position:"top",content:"create"},{default:t(()=>[s("div",{onClick:$,class:"circle-btn"},[l(a,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:t(()=>[l(h,{columns:ne,autoColsWidth:"","data-source":b.value,page:m.value,resize:""},{field6:t(({data:e})=>[l(_,null,{default:t(()=>[e.isEdit?r("",!0):(i(),d(u,{key:0,position:"top",content:"edit"},{default:t(()=>[s("div",{onClick:o=>L(e),class:"circle-btn"},[l(a,{type:"layui-icon-edit"})],8,Ue)]),_:2},1024)),e.isEdit?(i(),d(u,{key:1,position:"top",content:"save"},{default:t(()=>[s("div",{onClick:o=>R(e),class:"circle-btn"},[l(a,{type:"layui-icon-ok"})],8,be)]),_:2},1024)):r("",!0),e.isEdit?(i(),d(u,{key:2,position:"top",content:"cancel"},{default:t(()=>[s("div",{onClick:o=>P(e),class:"circle-btn"},[l(a,{type:"layui-icon-close"})],8,Ee)]),_:2},1024)):r("",!0),l(u,{position:"top",content:"delete"},{default:t(()=>[s("div",{onClick:o=>z(e),class:"circle-btn"},[l(a,{type:"layui-icon-delete"})],8,Se)]),_:2},1024)]),_:2},1024)]),field2:t(({data:e})=>[e.isEdit?(i(),d(D,{key:0,placeholder:"",modelValue:e.field2,"onUpdate:modelValue":o=>e.field2=o,allowClear:""},null,8,["modelValue","onUpdate:modelValue"])):(i(),p("span",$e,f(e.field2),1))]),field3:t(({data:e})=>[e.isEdit?(i(),d(w,{key:0,modelValue:e.field3,"onUpdate:modelValue":o=>e.field3=o,placeholder:"click me",allowClear:"",simple:""},null,8,["modelValue","onUpdate:modelValue"])):(i(),p("span",De,f(e.field3),1))]),field4:t(({data:e})=>[e.isEdit?(i(),d(w,{key:0,modelValue:e.field4,"onUpdate:modelValue":o=>e.field4=o,placeholder:"click me",allowClear:"",simple:""},null,8,["modelValue","onUpdate:modelValue"])):(i(),p("span",Te,f(e.field4),1))]),field5:t(({data:e})=>[e.isEdit?(i(),d(M,{key:0,skin:"primary",modelValue:e.field5,"onUpdate:modelValue":o=>e.field5=o,value:"1"},null,8,["modelValue","onUpdate:modelValue"])):(i(),p("span",He,f(e.field5),1))]),_:1},8,["data-source","page"])]),_:1},8,["title"])]),_:1})):r("",!0),k.formType=="securityuser_general"?(i(),d(x,{key:1,title:"History of Acted By",id:"History of Acted By"},{default:t(()=>[l(V,{title:y.value},{default:t(()=>[l(h,{columns:de,autoColsWidth:"","data-source":b.value,page:g.value,resize:""},null,8,["data-source","page"])]),_:1},8,["title"])]),_:1})):r("",!0),k.formType=="securityuser_general"?(i(),d(x,{key:2,title:"User Group List",id:"User Group List"},{default:t(()=>[l(V,{title:y.value},{extra:t(()=>[l(_,null,{default:t(()=>[l(u,{position:"top",content:"create"},{default:t(()=>[s("div",{onClick:ae,class:"circle-btn"},[l(a,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:t(()=>[l(h,{columns:se,"data-source":E.value,page:C.value,resize:""},{field8:t(({data:e})=>[l(_,null,{default:t(()=>[e.isEdit?r("",!0):(i(),d(u,{key:0,position:"top",content:"edit"},{default:t(()=>[s("div",{onClick:o=>L(e),class:"circle-btn"},[l(a,{type:"layui-icon-edit"})],8,Ae)]),_:2},1024)),e.isEdit?(i(),d(u,{key:1,position:"top",content:"save"},{default:t(()=>[s("div",{onClick:o=>R(e),class:"circle-btn"},[l(a,{type:"layui-icon-ok"})],8,Be)]),_:2},1024)):r("",!0),e.isEdit?(i(),d(u,{key:2,position:"top",content:"cancel"},{default:t(()=>[s("div",{onClick:o=>P(e),class:"circle-btn"},[l(a,{type:"layui-icon-close"})],8,Ge)]),_:2},1024)):r("",!0),l(u,{position:"top",content:"delete"},{default:t(()=>[s("div",{onClick:o=>z(e),class:"circle-btn"},[l(a,{type:"layui-icon-delete"})],8,Ne)]),_:2},1024)]),_:2},1024)]),field2:t(({data:e})=>[e.isEdit?(i(),d(D,{key:0,placeholder:"",modelValue:e.field2,"onUpdate:modelValue":o=>e.field2=o,allowClear:""},null,8,["modelValue","onUpdate:modelValue"])):(i(),p("span",Re,f(e.field2),1))]),field3:t(({data:e})=>[e.isEdit?(i(),d(D,{key:0,placeholder:"",modelValue:e.field3,"onUpdate:modelValue":o=>e.field3=o,allowClear:""},null,8,["modelValue","onUpdate:modelValue"])):(i(),p("span",Pe,f(e.field3),1))]),field4:t(({data:e})=>[e.isEdit?(i(),d(w,{key:0,style:{width:"100%"},modelValue:e.field4,"onUpdate:modelValue":o=>e.field4=o,placeholder:"",allowClear:""},null,8,["modelValue","onUpdate:modelValue"])):(i(),p("span",ze,f(e.field4),1))]),field5:t(({data:e})=>[e.isEdit?(i(),d(w,{key:0,style:{width:"100%"},modelValue:e.field5,"onUpdate:modelValue":o=>e.field5=o,placeholder:"",allowClear:""},null,8,["modelValue","onUpdate:modelValue"])):(i(),p("span",Le,f(e.field5),1))]),field6:t(({data:e})=>[e.isEdit?(i(),d(M,{key:0,name:"like",skin:"primary",modelValue:e.field6,"onUpdate:modelValue":o=>e.field6=o},null,8,["modelValue","onUpdate:modelValue"])):(i(),p("span",Me,f(e.field6),1))]),field7:t(({data:e})=>[e.isEdit?(i(),d(M,{key:0,name:"like",skin:"primary",modelValue:e.field7,"onUpdate:modelValue":o=>e.field7=o},null,8,["modelValue","onUpdate:modelValue"])):(i(),p("span",We,f(e.field7),1))]),_:1},8,["data-source","page"])]),_:1},8,["title"])]),_:1})):r("",!0),k.formType=="securityuser_general"?(i(),d(x,{key:3,title:"Service Region Group",id:"Service Region Group"},{default:t(()=>[l(V,{title:y.value},{extra:t(()=>[l(_,null,{default:t(()=>[l(u,{position:"top",content:"create"},{default:t(()=>[s("div",{onClick:ce,class:"circle-btn"},[l(a,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:t(()=>[l(h,{columns:ue,"data-source":S.value,page:A.value,resize:""},{field3:t(({data:e})=>[l(_,null,{default:t(()=>[e.isEdit?r("",!0):(i(),d(u,{key:0,position:"top",content:"edit"},{default:t(()=>[s("div",{onClick:o=>L(e),class:"circle-btn"},[l(a,{type:"layui-icon-edit"})],8,Fe)]),_:2},1024)),e.isEdit?(i(),d(u,{key:1,position:"top",content:"save"},{default:t(()=>[s("div",{onClick:o=>R(e),class:"circle-btn"},[l(a,{type:"layui-icon-ok"})],8,Ie)]),_:2},1024)):r("",!0),e.isEdit?(i(),d(u,{key:2,position:"top",content:"cancel"},{default:t(()=>[s("div",{onClick:o=>P(e),class:"circle-btn"},[l(a,{type:"layui-icon-close"})],8,Ze)]),_:2},1024)):r("",!0),l(u,{position:"top",content:"delete"},{default:t(()=>[s("div",{onClick:o=>z(e),class:"circle-btn"},[l(a,{type:"layui-icon-delete"})],8,Je)]),_:2},1024)]),_:2},1024)]),field2:t(({data:e})=>[e.isEdit?(i(),d(D,{key:0,placeholder:"",modelValue:e.field2,"onUpdate:modelValue":o=>e.field2=o,allowClear:""},null,8,["modelValue","onUpdate:modelValue"])):(i(),p("span",Ke,f(e.field2),1))]),_:1},8,["data-source","page"])]),_:1},8,["title"])]),_:1})):r("",!0),k.formType=="securityuser_general"?(i(),d(x,{key:4,title:"To Do Group List",id:"To Do Group List"},{default:t(()=>[l(V,{title:y.value},{extra:t(()=>[l(_,null,{default:t(()=>[l(u,{position:"top",content:"create"},{default:t(()=>[s("div",{onClick:$,class:"circle-btn"},[l(a,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:t(()=>[l(h,{columns:re,autoColsWidth:"","data-source":I.value,page:U.value,resize:""},{field7:t(({data:e})=>[l(_,null,{default:t(()=>[e.isEdit?r("",!0):(i(),d(u,{key:0,position:"top",content:"edit"},{default:t(()=>[s("div",{onClick:o=>L(e),class:"circle-btn"},[l(a,{type:"layui-icon-edit"})],8,Oe)]),_:2},1024)),e.isEdit?(i(),d(u,{key:1,position:"top",content:"save"},{default:t(()=>[s("div",{onClick:o=>R(e),class:"circle-btn"},[l(a,{type:"layui-icon-ok"})],8,je)]),_:2},1024)):r("",!0),e.isEdit?(i(),d(u,{key:2,position:"top",content:"cancel"},{default:t(()=>[s("div",{onClick:o=>P(e),class:"circle-btn"},[l(a,{type:"layui-icon-close"})],8,qe)]),_:2},1024)):r("",!0),l(u,{position:"top",content:"delete"},{default:t(()=>[s("div",{onClick:o=>z(e),class:"circle-btn"},[l(a,{type:"layui-icon-delete"})],8,Qe)]),_:2},1024)]),_:2},1024)]),field1:t(({data:e})=>[e.isEdit?(i(),d(D,{key:0,placeholder:"Please enter",modelValue:e.field1,"onUpdate:modelValue":o=>e.field1=o,allowClear:"",disabled:""},{append:t(({disabled:o})=>[s("span",Xe,[l(a,{type:"layui-icon-search"})])]),_:2},1032,["modelValue","onUpdate:modelValue"])):(i(),p("span",Ye,f(e.field1),1))]),field4:t(({data:e})=>[e.isEdit?(i(),d(w,{key:0,modelValue:e.field4,"onUpdate:modelValue":o=>e.field4=o,placeholder:"click me",allowClear:"",simple:""},null,8,["modelValue","onUpdate:modelValue"])):(i(),p("span",et,f(e.field4),1))]),field5:t(({data:e})=>[e.isEdit?(i(),d(w,{key:0,modelValue:e.field5,"onUpdate:modelValue":o=>e.field5=o,placeholder:"click me",allowClear:"",simple:""},null,8,["modelValue","onUpdate:modelValue"])):(i(),p("span",tt,f(e.field5),1))]),field6:t(({data:e})=>[e.isEdit?(i(),d(M,{key:0,skin:"primary",modelValue:e.field6,"onUpdate:modelValue":o=>e.field6=o,value:"1"},null,8,["modelValue","onUpdate:modelValue"])):(i(),p("span",lt,f(e.field6),1))]),_:1},8,["data-source","page"])]),_:1},8,["title"])]),_:1})):r("",!0),k.formType=="securityuser_history"?(i(),d(x,{key:5,title:"User / User Group History",id:"User / User Group History"},{default:t(()=>[l(V,{title:y.value},{extra:t(()=>[l(_,null,{default:t(()=>[l(u,{position:"top",content:"create"},{default:t(()=>[s("div",{onClick:$,class:"circle-btn"},[l(a,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:t(()=>[l(h,{columns:pe,autoColsWidth:"","data-source":Z.value,page:B.value,resize:""},null,8,["data-source","page"])]),_:1},8,["title"])]),_:1})):r("",!0),k.formType=="securityuser_history"?(i(),d(x,{key:6,title:"User Name History",id:"User Name History"},{default:t(()=>[l(V,{title:y.value},{extra:t(()=>[l(_,null,{default:t(()=>[l(u,{position:"top",content:"create"},{default:t(()=>[s("div",{onClick:$,class:"circle-btn"},[l(a,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:t(()=>[l(h,{columns:fe,autoColsWidth:"","data-source":J.value,page:G.value,resize:""},null,8,["data-source","page"])]),_:1},8,["title"])]),_:1})):r("",!0),k.formType=="securityuser_history"?(i(),d(x,{key:7,title:"Acting Positions History",id:"Acting Positions History"},{default:t(()=>[l(V,{title:y.value},{extra:t(()=>[l(_,null,{default:t(()=>[l(u,{position:"top",content:"create"},{default:t(()=>[s("div",{onClick:$,class:"circle-btn"},[l(a,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:t(()=>[l(h,{columns:ye,autoColsWidth:"","data-source":K.value,page:N.value,resize:""},null,8,["data-source","page"])]),_:1},8,["title"])]),_:1})):r("",!0)]),_:1},8,["modelValue"])}}},Q=X(it,[["__scopeId","data-v-80e02799"]]);const ot={class:"top-use-box"},nt={class:"top-use-fun"},dt={__name:"securityuser",setup(k){Ve(),xe({}),c(!1);const v=c("securityuser_general"),T=c(null),H=c(null),W=()=>{T.value.search({limit:10,current:1})};return ge(()=>v.value,(y,m)=>{y=="securityuser_history"&&H.value.init("securityuser_history")}),(y,m)=>{const g=ee,C=Y,A=te,F=oe,U=le,B=ie,G=Ce;return i(),d(G,{fluid:!0,class:"common-container"},{default:t(()=>[l(F,{class:"top-use-card"},{default:t(()=>[s("div",ot,[m[3]||(m[3]=s("h1",{class:"top-use-title"},"User",-1)),s("div",nt,[l(A,{size:"md"},{default:t(()=>[l(g,{position:"top",content:"save","is-dark":""},{default:t(()=>m[1]||(m[1]=[s("span",{class:"iconfont icon-baocun"},null,-1)])),_:1}),l(g,{position:"top",content:"delete","is-dark":""},{default:t(()=>m[2]||(m[2]=[s("span",{class:"iconfont icon-rubber"},null,-1)])),_:1}),l(g,{position:"top",content:"refresh","is-dark":""},{default:t(()=>[s("span",null,[l(C,{type:"layui-icon-refresh"})])]),_:1}),l(g,{position:"top",content:"create","is-dark":""},{default:t(()=>[s("span",null,[l(C,{type:"layui-icon-addition"})])]),_:1})]),_:1})])])]),_:1}),l(B,{type:"card",modelValue:v.value,"onUpdate:modelValue":m[0]||(m[0]=N=>v.value=N)},{default:t(()=>[l(U,{title:"General",id:"securityuser_general"},{default:t(()=>[l(q,{formType:v.value,onSearch:W},null,8,["formType"]),l(Q,{ref_key:"tableresultRef1",ref:T,formType:v.value},null,8,["formType"])]),_:1}),l(U,{title:"History",id:"securityuser_history"},{default:t(()=>[l(q,{formType:v.value},null,8,["formType"]),l(Q,{ref_key:"tableresultRef2",ref:H,formType:v.value},null,8,["formType"])]),_:1})]),_:1},8,["modelValue"])]),_:1})}}},$t=X(dt,[["__scopeId","data-v-9c8b5cc6"]]);export{$t as default};