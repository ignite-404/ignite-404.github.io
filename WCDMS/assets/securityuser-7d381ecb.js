import{_ as X,b as fe,a as c,o as i,e as n,w as t,f as l,i as s,p as r,c as p,t as f,l as ye,E as me,m as _e,k as ke,n as ve,K as he,x as Y,L as ee,u as Ve,z as xe,M as ge}from"./index-a9e193d8.js";import{c as Ce}from"./index-a3ff275a.js";import{V as te}from"./index-362eaca0.js";import{s as J}from"./searchform-391b7321.js";import{Z as we}from"./index-5c44996e.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index-4df89be4.js";import"./routeSearch-1935382d.js";import"./index-5c87c2db.js";import"./index-31dd4159.js";import"./index-5bfab842.js";import"./index2-db67ae5b.js";import"./automationCodeSearch-2b250f7a.js";import"./userSearch-2d2aa3da.js";/* empty css                                                                   */import"./index-cf01186d.js";import"./index-11ac81a5.js";import"./index2-db5e8257.js";const Ue=["onClick"],be=["onClick"],Ee=["onClick"],Se=["onClick"],De={key:1},$e={key:1},Te={key:1},He={key:1},Ae=["onClick"],Be=["onClick"],Ge=["onClick"],Ne=["onClick"],Re={key:1},Pe={key:1},Me={key:1},ze={key:1},Le={key:1},We={key:1},Fe=["onClick"],Ie=["onClick"],Ze=["onClick"],Ke=["onClick"],Oe={key:1},je=["onClick"],qe=["onClick"],Je=["onClick"],Qe=["onClick"],Xe={class:"point-cu"},Ye={key:1},et={key:1},tt={key:1},lt={key:1},it={__name:"tablesecurityuser",props:{formType:{type:Array,default:()=>[]}},emits:["addData","addLetter","editLetter"],setup(_,{expose:k,emit:D}){let $=D;fe(()=>{v.value.total=w.value.length,T.value.total=w.value.length,g.value.total=U.value.length,H.value.total=b.value.length,z.value.total=j.value.length,A.value.total=L.value.length,Z.value.total=W.value.length,K.value.total=F.value.length,O.value.total=I.value.length});const M=function(d){y.value=d=="securityuser_general"?"Acting Position":"User / User Group History"},y=c("Acting Position"),v=c({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),T=c({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),g=c({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),H=c({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),z=c({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),A=c({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),Z=c({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),K=c({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),O=c({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),le=[{title:"User ID",width:"200px",key:"field1"},{title:"User Name",key:"field2",width:"200px",customSlot:"field2"},{title:"Effective Date From",key:"field3",width:"260px",customSlot:"field3"},{title:"Effective Date To",key:"field4",width:"200px",customSlot:"field4"},{title:"Remove",key:"field5",width:"200px",customSlot:"field5"},{title:"Handles",key:"field6",width:"200px",customSlot:"field6"}],ie=[{title:"User ID",width:"200px",key:"field1"},{title:"User Name",key:"field2",width:"200px"},{title:"Effective Date From",key:"field3",width:"260px"},{title:"Effective Date To",key:"field4",width:"200px"}],w=c([]);for(let d=0;d<10;d++)w.value.push({field1:`${d}`,field2:"userName",field3:"2021-02-05",field4:"2026-04-05",field5:"	remove"});const oe=[{title:"User Group",width:"100px",key:"field1"},{title:"Description",key:"field2",customSlot:"field2",width:"150px"},{title:"Description (Chinese)",key:"field3",customSlot:"field3",width:"150px"},{title:"Effective Date From",key:"field4",customSlot:"field4",width:"150px"},{title:"Effective Date To",key:"field5",customSlot:"field5",width:"150px"},{title:"Super User",key:"field6",customSlot:"field6",width:"150px"},{title:"Remove",key:"field7",customSlot:"field7",width:"150px"},{title:"Handles",key:"field8",customSlot:"field8",width:"150px"}],U=c([]);for(let d=0;d<5;d++)U.value.push({field1:`${d}`,field2:"description",field3:"Current Amount",field4:"2024/03/02",field5:"2024/03/02",field6:"superUser",field7:"remove",isEdit:!1});const de=()=>{U.value.push({field1:U.value.length.toString(),field2:"",field3:"",field4:"",field5:"",field6:"",field7:"",isEdit:!0}),g.value.total++},ne=[{title:"Service Region Group",width:"200px",key:"field1"},{title:"Remove",key:"field2",customSlot:"field2",width:"200px"},{title:"Handles",key:"field3",customSlot:"field3",width:"200px"}],b=c([]);for(let d=0;d<5;d++)b.value.push({field1:`${d}`,field2:"	remove"});const se=()=>{b.value.push({field1:b.value.length.toString(),field2:"",isEdit:!0}),g.value.total++},j=c([]);for(let d=0;d<10;d++)j.value.push({field1:`${d}`,field2:"	remove"});const ae=[{title:"To Do Group",width:"300px",key:"field1",customSlot:"field1"},{title:"Description",key:"field2",width:"200px"},{title:"Description (Chinese)",key:"field3",width:"200px"},{title:"Effective Date From",key:"field4",width:"150px",customSlot:"field4"},{title:"Effective Date To",key:"field5",width:"150px",customSlot:"field5"},{title:"Remove",key:"field6",width:"200px",customSlot:"field6"},{title:"Handles",key:"field7",width:"100px",customSlot:"field7"}],L=c([]);for(let d=0;d<10;d++)L.value.push({field1:`${d}`,field2:"description",field3:"Current Amount",field4:"2015-05-01",field5:"2025-05-01",field6:"	remove"});const ue=[{title:"Modified Date",width:"200px",key:"field1"},{title:"Action",key:"field2",width:"200px"},{title:"Modified By",key:"field3",width:"200px"},{title:"Before Value",key:"field4",width:"260px"},{title:"After Value",key:"field5",width:"200px"}],W=c([]);for(let d=0;d<10;d++)W.value.push({field1:`${d}`,field2:"action",field3:"Current Amount",field4:"Modified By",field5:"beforeValue",field6:"	Production - Person lD View"});const ce=[{title:"Modified Date",width:"200px",key:"field1"},{title:"Modified By",key:"field2",width:"200px"},{title:"Old User Name",key:"field3",width:"200px"},{title:"New User Name",key:"field4",width:"260px"},{title:"Effective Date",key:"field5",width:"200px"}],F=c([]);for(let d=0;d<10;d++)F.value.push({field1:`${d}`,field2:"action",field3:"Current Amount",field4:"oldUserName",field5:"newUserName",field6:"	effectiveDate"});const re=[{title:"Modified Date",width:"200px",key:"field1"},{title:"Action",key:"field2",width:"200px"},{title:"Modified By",key:"field3",width:"200px"},{title:"Before Value",key:"field4",width:"260px"},{title:"After Value",key:"field5",width:"200px"}],I=c([]);for(let d=0;d<10;d++)I.value.push({field1:`${d}`,field2:"action",field3:"Current Amount",field4:"Modified By",field5:"beforeValue",field6:"	Production - Person lD View"});const B=d=>{},G=d=>{d.isEdit=!1},N=d=>{},R=d=>{d.isEdit=!0},E=()=>{$("addLetter")};return k({init:M}),(d,q)=>{const a=ye,u=me,m=_e,S=ke,C=ve,P=he,h=we,V=te,x=Y,pe=ee;return i(),n(pe,{type:"card",modelValue:y.value,"onUpdate:modelValue":q[0]||(q[0]=e=>y.value=e)},{default:t(()=>[_.formType=="securityuser_general"?(i(),n(x,{key:0,title:"Acting Position",id:"Acting Position"},{default:t(()=>[l(V,{title:y.value},{extra:t(()=>[l(m,null,{default:t(()=>[l(u,{position:"top",content:"create"},{default:t(()=>[s("div",{onClick:E,class:"circle-btn"},[l(a,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:t(()=>[l(h,{columns:le,autoColsWidth:"","data-source":w.value,page:v.value,resize:""},{field6:t(({data:e})=>[l(m,null,{default:t(()=>[e.isEdit?r("",!0):(i(),n(u,{key:0,position:"top",content:"edit"},{default:t(()=>[s("div",{onClick:o=>R(e),class:"circle-btn"},[l(a,{type:"layui-icon-edit"})],8,Ue)]),_:2},1024)),e.isEdit?(i(),n(u,{key:1,position:"top",content:"save"},{default:t(()=>[s("div",{onClick:o=>B(e),class:"circle-btn"},[l(a,{type:"layui-icon-ok"})],8,be)]),_:2},1024)):r("",!0),e.isEdit?(i(),n(u,{key:2,position:"top",content:"cancel"},{default:t(()=>[s("div",{onClick:o=>G(e),class:"circle-btn"},[l(a,{type:"layui-icon-close"})],8,Ee)]),_:2},1024)):r("",!0),l(u,{position:"top",content:"delete"},{default:t(()=>[s("div",{onClick:o=>N(e),class:"circle-btn"},[l(a,{type:"layui-icon-delete"})],8,Se)]),_:2},1024)]),_:2},1024)]),field2:t(({data:e})=>[e.isEdit?(i(),n(S,{key:0,placeholder:"",modelValue:e.field2,"onUpdate:modelValue":o=>e.field2=o,allowClear:""},null,8,["modelValue","onUpdate:modelValue"])):(i(),p("span",De,f(e.field2),1))]),field3:t(({data:e})=>[e.isEdit?(i(),n(C,{key:0,modelValue:e.field3,"onUpdate:modelValue":o=>e.field3=o,placeholder:"click me",allowClear:"",simple:""},null,8,["modelValue","onUpdate:modelValue"])):(i(),p("span",$e,f(e.field3),1))]),field4:t(({data:e})=>[e.isEdit?(i(),n(C,{key:0,modelValue:e.field4,"onUpdate:modelValue":o=>e.field4=o,placeholder:"click me",allowClear:"",simple:""},null,8,["modelValue","onUpdate:modelValue"])):(i(),p("span",Te,f(e.field4),1))]),field5:t(({data:e})=>[e.isEdit?(i(),n(P,{key:0,skin:"primary",modelValue:e.field5,"onUpdate:modelValue":o=>e.field5=o,value:"1"},null,8,["modelValue","onUpdate:modelValue"])):(i(),p("span",He,f(e.field5),1))]),_:1},8,["data-source","page"])]),_:1},8,["title"])]),_:1})):r("",!0),_.formType=="securityuser_general"?(i(),n(x,{key:1,title:"History of Acted By",id:"History of Acted By"},{default:t(()=>[l(V,{title:y.value},{default:t(()=>[l(h,{columns:ie,autoColsWidth:"","data-source":w.value,page:T.value,resize:""},null,8,["data-source","page"])]),_:1},8,["title"])]),_:1})):r("",!0),_.formType=="securityuser_general"?(i(),n(x,{key:2,title:"User Group List",id:"User Group List"},{default:t(()=>[l(V,{title:y.value},{extra:t(()=>[l(m,null,{default:t(()=>[l(u,{position:"top",content:"create"},{default:t(()=>[s("div",{onClick:de,class:"circle-btn"},[l(a,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:t(()=>[l(h,{columns:oe,"data-source":U.value,page:g.value,resize:""},{field8:t(({data:e})=>[l(m,null,{default:t(()=>[e.isEdit?r("",!0):(i(),n(u,{key:0,position:"top",content:"edit"},{default:t(()=>[s("div",{onClick:o=>R(e),class:"circle-btn"},[l(a,{type:"layui-icon-edit"})],8,Ae)]),_:2},1024)),e.isEdit?(i(),n(u,{key:1,position:"top",content:"save"},{default:t(()=>[s("div",{onClick:o=>B(e),class:"circle-btn"},[l(a,{type:"layui-icon-ok"})],8,Be)]),_:2},1024)):r("",!0),e.isEdit?(i(),n(u,{key:2,position:"top",content:"cancel"},{default:t(()=>[s("div",{onClick:o=>G(e),class:"circle-btn"},[l(a,{type:"layui-icon-close"})],8,Ge)]),_:2},1024)):r("",!0),l(u,{position:"top",content:"delete"},{default:t(()=>[s("div",{onClick:o=>N(e),class:"circle-btn"},[l(a,{type:"layui-icon-delete"})],8,Ne)]),_:2},1024)]),_:2},1024)]),field2:t(({data:e})=>[e.isEdit?(i(),n(S,{key:0,placeholder:"",modelValue:e.field2,"onUpdate:modelValue":o=>e.field2=o,allowClear:""},null,8,["modelValue","onUpdate:modelValue"])):(i(),p("span",Re,f(e.field2),1))]),field3:t(({data:e})=>[e.isEdit?(i(),n(S,{key:0,placeholder:"",modelValue:e.field3,"onUpdate:modelValue":o=>e.field3=o,allowClear:""},null,8,["modelValue","onUpdate:modelValue"])):(i(),p("span",Pe,f(e.field3),1))]),field4:t(({data:e})=>[e.isEdit?(i(),n(C,{key:0,style:{width:"100%"},modelValue:e.field4,"onUpdate:modelValue":o=>e.field4=o,placeholder:"",allowClear:""},null,8,["modelValue","onUpdate:modelValue"])):(i(),p("span",Me,f(e.field4),1))]),field5:t(({data:e})=>[e.isEdit?(i(),n(C,{key:0,style:{width:"100%"},modelValue:e.field5,"onUpdate:modelValue":o=>e.field5=o,placeholder:"",allowClear:""},null,8,["modelValue","onUpdate:modelValue"])):(i(),p("span",ze,f(e.field5),1))]),field6:t(({data:e})=>[e.isEdit?(i(),n(P,{key:0,name:"like",skin:"primary",modelValue:e.field6,"onUpdate:modelValue":o=>e.field6=o},null,8,["modelValue","onUpdate:modelValue"])):(i(),p("span",Le,f(e.field6),1))]),field7:t(({data:e})=>[e.isEdit?(i(),n(P,{key:0,name:"like",skin:"primary",modelValue:e.field7,"onUpdate:modelValue":o=>e.field7=o},null,8,["modelValue","onUpdate:modelValue"])):(i(),p("span",We,f(e.field7),1))]),_:1},8,["data-source","page"])]),_:1},8,["title"])]),_:1})):r("",!0),_.formType=="securityuser_general"?(i(),n(x,{key:3,title:"Service Region Group",id:"Service Region Group"},{default:t(()=>[l(V,{title:y.value},{extra:t(()=>[l(m,null,{default:t(()=>[l(u,{position:"top",content:"create"},{default:t(()=>[s("div",{onClick:se,class:"circle-btn"},[l(a,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:t(()=>[l(h,{columns:ne,"data-source":b.value,page:H.value,resize:""},{field3:t(({data:e})=>[l(m,null,{default:t(()=>[e.isEdit?r("",!0):(i(),n(u,{key:0,position:"top",content:"edit"},{default:t(()=>[s("div",{onClick:o=>R(e),class:"circle-btn"},[l(a,{type:"layui-icon-edit"})],8,Fe)]),_:2},1024)),e.isEdit?(i(),n(u,{key:1,position:"top",content:"save"},{default:t(()=>[s("div",{onClick:o=>B(e),class:"circle-btn"},[l(a,{type:"layui-icon-ok"})],8,Ie)]),_:2},1024)):r("",!0),e.isEdit?(i(),n(u,{key:2,position:"top",content:"cancel"},{default:t(()=>[s("div",{onClick:o=>G(e),class:"circle-btn"},[l(a,{type:"layui-icon-close"})],8,Ze)]),_:2},1024)):r("",!0),l(u,{position:"top",content:"delete"},{default:t(()=>[s("div",{onClick:o=>N(e),class:"circle-btn"},[l(a,{type:"layui-icon-delete"})],8,Ke)]),_:2},1024)]),_:2},1024)]),field2:t(({data:e})=>[e.isEdit?(i(),n(S,{key:0,placeholder:"",modelValue:e.field2,"onUpdate:modelValue":o=>e.field2=o,allowClear:""},null,8,["modelValue","onUpdate:modelValue"])):(i(),p("span",Oe,f(e.field2),1))]),_:1},8,["data-source","page"])]),_:1},8,["title"])]),_:1})):r("",!0),_.formType=="securityuser_general"?(i(),n(x,{key:4,title:"To Do Group List",id:"To Do Group List"},{default:t(()=>[l(V,{title:y.value},{extra:t(()=>[l(m,null,{default:t(()=>[l(u,{position:"top",content:"create"},{default:t(()=>[s("div",{onClick:E,class:"circle-btn"},[l(a,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:t(()=>[l(h,{columns:ae,autoColsWidth:"","data-source":L.value,page:A.value,resize:""},{field7:t(({data:e})=>[l(m,null,{default:t(()=>[e.isEdit?r("",!0):(i(),n(u,{key:0,position:"top",content:"edit"},{default:t(()=>[s("div",{onClick:o=>R(e),class:"circle-btn"},[l(a,{type:"layui-icon-edit"})],8,je)]),_:2},1024)),e.isEdit?(i(),n(u,{key:1,position:"top",content:"save"},{default:t(()=>[s("div",{onClick:o=>B(e),class:"circle-btn"},[l(a,{type:"layui-icon-ok"})],8,qe)]),_:2},1024)):r("",!0),e.isEdit?(i(),n(u,{key:2,position:"top",content:"cancel"},{default:t(()=>[s("div",{onClick:o=>G(e),class:"circle-btn"},[l(a,{type:"layui-icon-close"})],8,Je)]),_:2},1024)):r("",!0),l(u,{position:"top",content:"delete"},{default:t(()=>[s("div",{onClick:o=>N(e),class:"circle-btn"},[l(a,{type:"layui-icon-delete"})],8,Qe)]),_:2},1024)]),_:2},1024)]),field1:t(({data:e})=>[e.isEdit?(i(),n(S,{key:0,placeholder:"Please enter",modelValue:e.field1,"onUpdate:modelValue":o=>e.field1=o,allowClear:"",disabled:""},{append:t(({disabled:o})=>[s("span",Xe,[l(a,{type:"layui-icon-search"})])]),_:2},1032,["modelValue","onUpdate:modelValue"])):(i(),p("span",Ye,f(e.field1),1))]),field4:t(({data:e})=>[e.isEdit?(i(),n(C,{key:0,modelValue:e.field4,"onUpdate:modelValue":o=>e.field4=o,placeholder:"click me",allowClear:"",simple:""},null,8,["modelValue","onUpdate:modelValue"])):(i(),p("span",et,f(e.field4),1))]),field5:t(({data:e})=>[e.isEdit?(i(),n(C,{key:0,modelValue:e.field5,"onUpdate:modelValue":o=>e.field5=o,placeholder:"click me",allowClear:"",simple:""},null,8,["modelValue","onUpdate:modelValue"])):(i(),p("span",tt,f(e.field5),1))]),field6:t(({data:e})=>[e.isEdit?(i(),n(P,{key:0,skin:"primary",modelValue:e.field6,"onUpdate:modelValue":o=>e.field6=o,value:"1"},null,8,["modelValue","onUpdate:modelValue"])):(i(),p("span",lt,f(e.field6),1))]),_:1},8,["data-source","page"])]),_:1},8,["title"])]),_:1})):r("",!0),_.formType=="securityuser_history"?(i(),n(x,{key:5,title:"User / User Group History",id:"User / User Group History"},{default:t(()=>[l(V,{title:y.value},{extra:t(()=>[l(m,null,{default:t(()=>[l(u,{position:"top",content:"create"},{default:t(()=>[s("div",{onClick:E,class:"circle-btn"},[l(a,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:t(()=>[l(h,{columns:ue,autoColsWidth:"","data-source":W.value,page:Z.value,resize:""},null,8,["data-source","page"])]),_:1},8,["title"])]),_:1})):r("",!0),_.formType=="securityuser_history"?(i(),n(x,{key:6,title:"User Name History",id:"User Name History"},{default:t(()=>[l(V,{title:y.value},{extra:t(()=>[l(m,null,{default:t(()=>[l(u,{position:"top",content:"create"},{default:t(()=>[s("div",{onClick:E,class:"circle-btn"},[l(a,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:t(()=>[l(h,{columns:ce,autoColsWidth:"","data-source":F.value,page:K.value,resize:""},null,8,["data-source","page"])]),_:1},8,["title"])]),_:1})):r("",!0),_.formType=="securityuser_history"?(i(),n(x,{key:7,title:"Acting Positions History",id:"Acting Positions History"},{default:t(()=>[l(V,{title:y.value},{extra:t(()=>[l(m,null,{default:t(()=>[l(u,{position:"top",content:"create"},{default:t(()=>[s("div",{onClick:E,class:"circle-btn"},[l(a,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:t(()=>[l(h,{columns:re,autoColsWidth:"","data-source":I.value,page:O.value,resize:""},null,8,["data-source","page"])]),_:1},8,["title"])]),_:1})):r("",!0)]),_:1},8,["modelValue"])}}},Q=X(it,[["__scopeId","data-v-80e02799"]]);const ot={__name:"securityuser",setup(_){Ve(),xe({}),c(!1);const k=c("securityuser_general"),D=c(null),$=c(null),M=()=>{D.value.search({limit:10,current:1})};return ge(()=>k.value,(y,v)=>{y=="securityuser_history"&&$.value.init("securityuser_history")}),(y,v)=>{const T=te,g=Y,H=ee,z=Ce;return i(),n(z,{fluid:!0,class:"common-container"},{default:t(()=>[l(T,{class:"top-use-card"},{default:t(()=>v[1]||(v[1]=[s("div",{class:"top-use-box"},[s("h1",{class:"top-use-title"},"User")],-1)])),_:1}),l(H,{type:"card",modelValue:k.value,"onUpdate:modelValue":v[0]||(v[0]=A=>k.value=A)},{default:t(()=>[l(g,{title:"General",id:"securityuser_general"},{default:t(()=>[l(J,{formType:k.value,onSearch:M},null,8,["formType"]),l(Q,{ref_key:"tableresultRef1",ref:D,formType:k.value},null,8,["formType"])]),_:1}),l(g,{title:"History",id:"securityuser_history"},{default:t(()=>[l(J,{formType:k.value},null,8,["formType"]),l(Q,{ref_key:"tableresultRef2",ref:$,formType:k.value},null,8,["formType"])]),_:1})]),_:1},8,["modelValue"])]),_:1})}}},Et=X(ot,[["__scopeId","data-v-952ebec4"]]);export{Et as default};