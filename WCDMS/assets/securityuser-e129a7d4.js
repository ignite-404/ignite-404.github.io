import{_ as Y,b as pe,a as n,o,e as a,w as e,f as t,i as u,p as f,c as w,t as C,l as ye,E as me,m as _e,x as ee,k as ve,n as ke,K as he,L as te,u as ge,z as xe,J as we}from"./index-5ba83812.js";import{c as Ce}from"./index-f7d389ff.js";import{V as le}from"./index-70d2da72.js";import{s as Q}from"./searchform-fec4c453.js";/* empty css              *//* empty css              */import{Z as Ve}from"./index-a25747be.js";/* empty css              *//* empty css              *//* empty css              */import"./index-08f7b130.js";import"./routeSearch-adcc7523.js";import"./index-9c118bc9.js";import"./index-2b452765.js";import"./index-e1c7a2f1.js";import"./index2-ab9f2a8e.js";import"./automationCodeSearch-d5faf66c.js";import"./userSearch-e23500da.js";/* empty css                                                                   */import"./index-4238b014.js";import"./index2-75365c6f.js";const be=["onClick"],Ue=["onClick"],Ee=["onClick"],De=["onClick"],Te={key:1},Se={key:1},He={key:1},Ae={key:1},$e={key:1},Be={key:1},Ge=["onClick"],Re=["onClick"],Ne=["onClick"],ze=["onClick"],Me={key:1},Pe={__name:"tablesecurityuser",props:{formType:{type:Array,default:()=>[]}},emits:["addData","addLetter","editLetter"],setup(y,{expose:m,emit:E}){let D=E;pe(()=>{h.value.total=V.value.length,T.value.total=V.value.length,g.value.total=b.value.length,S.value.total=U.value.length,H.value.total=B.value.length,A.value.total=G.value.length,P.value.total=R.value.length,L.value.total=N.value.length,W.value.total=z.value.length});const $=function(i){r.value=i=="securityuser_general"?"Acting Position":"User / User Group History"},r=n("Acting Position"),h=n({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),T=n({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),g=n({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),S=n({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),H=n({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),A=n({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),P=n({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),L=n({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),W=n({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),F=[{title:"User ID",width:"200px",key:"field1"},{title:"User Name",key:"field2",width:"200px"},{title:"Effective Date From",key:"field3",width:"260px"},{title:"Effective Date To",key:"field4",width:"200px"},{title:"Remove",key:"field5",width:"200px"}],V=n([]);for(let i=0;i<10;i++)V.value.push({field1:`${i}`,field2:"userName",field3:"Current Amount",field4:"effectiveDateTo",field5:"	remove"});const ie=[{title:"User Group",width:"100px",key:"field1"},{title:"Description",key:"field2",customSlot:"field2",width:"150px"},{title:"Description (Chinese)",key:"field3",customSlot:"field3",width:"150px"},{title:"Effective Date From",key:"field4",customSlot:"field4",width:"150px"},{title:"Effective Date To",key:"field5",customSlot:"field5",width:"150px"},{title:"Super User",key:"field6",customSlot:"field6",width:"150px"},{title:"Remove",key:"field7",customSlot:"field7",width:"150px"},{title:"Handles",key:"field8",customSlot:"field8",width:"150px"}],b=n([]);for(let i=0;i<5;i++)b.value.push({field1:`${i}`,field2:"description",field3:"Current Amount",field4:"2024/03/02",field5:"2024/03/02",field6:"superUser",field7:"remove",isEdit:!1});const oe=()=>{b.value.push({field1:b.value.length.toString(),field2:"",field3:"",field4:"",field5:"",field6:"",field7:"",isEdit:!0}),g.value.total++},ae=[{title:"Service Region Group",width:"200px",key:"field1"},{title:"Remove",key:"field2",customSlot:"field2",width:"200px"},{title:"Handles",key:"field3",customSlot:"field3",width:"200px"}],U=n([]);for(let i=0;i<5;i++)U.value.push({field1:`${i}`,field2:"	remove"});const ne=()=>{U.value.push({field1:U.value.length.toString(),field2:"",isEdit:!0}),g.value.total++},de=[{title:"Billing Cycle Group",width:"200px",key:"field1"},{title:"Remove",key:"field2",width:"200px"}],B=n([]);for(let i=0;i<10;i++)B.value.push({field1:`${i}`,field2:"	remove"});const ue=[{title:"To Do Group",width:"200px",key:"field1"},{title:"Description",key:"field2",width:"200px"},{title:"Description (Chinese)",key:"field3",width:"200px"},{title:"Effective Date From",key:"field4",width:"260px"},{title:"Effective Date To",key:"field5",width:"200px"},{title:"Remove",key:"field6",width:"200px"},{title:"Handles",key:"field7",width:"200px"}],G=n([]);for(let i=0;i<10;i++)G.value.push({field1:`${i}`,field2:"description",field3:"Current Amount",field4:"effectiveDateFrom",field5:"effectiveDateTo",field6:"	remove"});const se=[{title:"Modified Date",width:"200px",key:"field1"},{title:"Action",key:"field2",width:"200px"},{title:"Modified By",key:"field3",width:"200px"},{title:"Before Value",key:"field4",width:"260px"},{title:"After Value",key:"field5",width:"200px"}],R=n([]);for(let i=0;i<10;i++)R.value.push({field1:`${i}`,field2:"action",field3:"Current Amount",field4:"Modified By",field5:"beforeValue",field6:"	Production - Person lD View"});const ce=[{title:"Modified Date",width:"200px",key:"field1"},{title:"Modified By",key:"field2",width:"200px"},{title:"Old User Name",key:"field3",width:"200px"},{title:"New User Name",key:"field4",width:"260px"},{title:"Effective Date",key:"field5",width:"200px"}],N=n([]);for(let i=0;i<10;i++)N.value.push({field1:`${i}`,field2:"action",field3:"Current Amount",field4:"oldUserName",field5:"newUserName",field6:"	effectiveDate"});const re=[{title:"Modified Date",width:"200px",key:"field1"},{title:"Action",key:"field2",width:"200px"},{title:"Modified By",key:"field3",width:"200px"},{title:"Before Value",key:"field4",width:"260px"},{title:"After Value",key:"field5",width:"200px"}],z=n([]);for(let i=0;i<10;i++)z.value.push({field1:`${i}`,field2:"action",field3:"Current Amount",field4:"Modified By",field5:"beforeValue",field6:"	Production - Person lD View"});const I=i=>{},Z=i=>{i.isEdit=!1},J=i=>{},K=i=>{i.isEdit=!0},x=()=>{D("addLetter")};return m({init:$}),(i,O)=>{const s=ye,c=me,p=_e,_=Ve,v=le,k=ee,M=ve,j=ke,q=he,fe=te;return o(),a(fe,{type:"card",modelValue:r.value,"onUpdate:modelValue":O[0]||(O[0]=l=>r.value=l)},{default:e(()=>[y.formType=="securityuser_general"?(o(),a(k,{key:0,title:"Acting Position",id:"Acting Position"},{default:e(()=>[t(v,{title:r.value},{extra:e(()=>[t(p,null,{default:e(()=>[t(c,{position:"top",content:"create"},{default:e(()=>[u("div",{onClick:x,class:"circle-btn"},[t(s,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:e(()=>[t(_,{columns:F,autoColsWidth:"","data-source":V.value,page:h.value,resize:""},null,8,["data-source","page"])]),_:1},8,["title"])]),_:1})):f("",!0),y.formType=="securityuser_general"?(o(),a(k,{key:1,title:"History of Acted By",id:"History of Acted By"},{default:e(()=>[t(v,{title:r.value},{extra:e(()=>[t(p,null,{default:e(()=>[t(c,{position:"top",content:"create"},{default:e(()=>[u("div",{onClick:x,class:"circle-btn"},[t(s,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:e(()=>[t(_,{columns:F,autoColsWidth:"","data-source":V.value,page:T.value,resize:""},null,8,["data-source","page"])]),_:1},8,["title"])]),_:1})):f("",!0),y.formType=="securityuser_general"?(o(),a(k,{key:2,title:"User Group List",id:"User Group List"},{default:e(()=>[t(v,{title:r.value},{extra:e(()=>[t(p,null,{default:e(()=>[t(c,{position:"top",content:"create"},{default:e(()=>[u("div",{onClick:oe,class:"circle-btn"},[t(s,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:e(()=>[t(_,{columns:ie,"data-source":b.value,page:g.value,resize:""},{field8:e(({data:l})=>[t(p,null,{default:e(()=>[l.isEdit?f("",!0):(o(),a(c,{key:0,position:"top",content:"edit"},{default:e(()=>[u("div",{onClick:d=>K(l),class:"circle-btn"},[t(s,{type:"layui-icon-edit"})],8,be)]),_:2},1024)),l.isEdit?(o(),a(c,{key:1,position:"top",content:"save"},{default:e(()=>[u("div",{onClick:d=>I(l),class:"circle-btn"},[t(s,{type:"layui-icon-ok"})],8,Ue)]),_:2},1024)):f("",!0),l.isEdit?(o(),a(c,{key:2,position:"top",content:"cancel"},{default:e(()=>[u("div",{onClick:d=>Z(l),class:"circle-btn"},[t(s,{type:"layui-icon-close"})],8,Ee)]),_:2},1024)):f("",!0),t(c,{position:"top",content:"delete"},{default:e(()=>[u("div",{onClick:d=>J(l),class:"circle-btn"},[t(s,{type:"layui-icon-delete"})],8,De)]),_:2},1024)]),_:2},1024)]),field2:e(({data:l})=>[l.isEdit?(o(),a(M,{key:0,placeholder:"",modelValue:l.field2,"onUpdate:modelValue":d=>l.field2=d,allowClear:""},null,8,["modelValue","onUpdate:modelValue"])):(o(),w("span",Te,C(l.field2),1))]),field3:e(({data:l})=>[l.isEdit?(o(),a(M,{key:0,placeholder:"",modelValue:l.field3,"onUpdate:modelValue":d=>l.field3=d,allowClear:""},null,8,["modelValue","onUpdate:modelValue"])):(o(),w("span",Se,C(l.field3),1))]),field4:e(({data:l})=>[l.isEdit?(o(),a(j,{key:0,style:{width:"100%"},modelValue:l.field4,"onUpdate:modelValue":d=>l.field4=d,placeholder:"",allowClear:""},null,8,["modelValue","onUpdate:modelValue"])):(o(),w("span",He,C(l.field4),1))]),field5:e(({data:l})=>[l.isEdit?(o(),a(j,{key:0,style:{width:"100%"},modelValue:l.field5,"onUpdate:modelValue":d=>l.field5=d,placeholder:"",allowClear:""},null,8,["modelValue","onUpdate:modelValue"])):(o(),w("span",Ae,C(l.field5),1))]),field6:e(({data:l})=>[l.isEdit?(o(),a(q,{key:0,name:"like",skin:"primary",modelValue:l.field6,"onUpdate:modelValue":d=>l.field6=d},null,8,["modelValue","onUpdate:modelValue"])):(o(),w("span",$e,C(l.field6),1))]),field7:e(({data:l})=>[l.isEdit?(o(),a(q,{key:0,name:"like",skin:"primary",modelValue:l.field7,"onUpdate:modelValue":d=>l.field7=d},null,8,["modelValue","onUpdate:modelValue"])):(o(),w("span",Be,C(l.field7),1))]),_:1},8,["data-source","page"])]),_:1},8,["title"])]),_:1})):f("",!0),y.formType=="securityuser_general"?(o(),a(k,{key:3,title:"Service Region Group",id:"Service Region Group"},{default:e(()=>[t(v,{title:r.value},{extra:e(()=>[t(p,null,{default:e(()=>[t(c,{position:"top",content:"create"},{default:e(()=>[u("div",{onClick:ne,class:"circle-btn"},[t(s,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:e(()=>[t(_,{columns:ae,"data-source":U.value,page:S.value,resize:""},{field3:e(({data:l})=>[t(p,null,{default:e(()=>[l.isEdit?f("",!0):(o(),a(c,{key:0,position:"top",content:"edit"},{default:e(()=>[u("div",{onClick:d=>K(l),class:"circle-btn"},[t(s,{type:"layui-icon-edit"})],8,Ge)]),_:2},1024)),l.isEdit?(o(),a(c,{key:1,position:"top",content:"save"},{default:e(()=>[u("div",{onClick:d=>I(l),class:"circle-btn"},[t(s,{type:"layui-icon-ok"})],8,Re)]),_:2},1024)):f("",!0),l.isEdit?(o(),a(c,{key:2,position:"top",content:"cancel"},{default:e(()=>[u("div",{onClick:d=>Z(l),class:"circle-btn"},[t(s,{type:"layui-icon-close"})],8,Ne)]),_:2},1024)):f("",!0),t(c,{position:"top",content:"delete"},{default:e(()=>[u("div",{onClick:d=>J(l),class:"circle-btn"},[t(s,{type:"layui-icon-delete"})],8,ze)]),_:2},1024)]),_:2},1024)]),field2:e(({data:l})=>[l.isEdit?(o(),a(M,{key:0,placeholder:"",modelValue:l.field2,"onUpdate:modelValue":d=>l.field2=d,allowClear:""},null,8,["modelValue","onUpdate:modelValue"])):(o(),w("span",Me,C(l.field2),1))]),_:1},8,["data-source","page"])]),_:1},8,["title"])]),_:1})):f("",!0),y.formType=="securityuser_general"?(o(),a(k,{key:4,title:"Billing Cycle Group",id:"Billing Cycle Group"},{default:e(()=>[t(v,{title:r.value},{extra:e(()=>[t(p,null,{default:e(()=>[t(c,{position:"top",content:"create"},{default:e(()=>[u("div",{onClick:x,class:"circle-btn"},[t(s,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:e(()=>[t(_,{columns:de,autoColsWidth:"","data-source":B.value,page:H.value,resize:""},null,8,["data-source","page"])]),_:1},8,["title"])]),_:1})):f("",!0),y.formType=="securityuser_general"?(o(),a(k,{key:5,title:"To Do Group List",id:"To Do Group List"},{default:e(()=>[t(v,{title:r.value},{extra:e(()=>[t(p,null,{default:e(()=>[t(c,{position:"top",content:"create"},{default:e(()=>[u("div",{onClick:x,class:"circle-btn"},[t(s,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:e(()=>[t(_,{columns:ue,autoColsWidth:"","data-source":G.value,page:A.value,resize:""},null,8,["data-source","page"])]),_:1},8,["title"])]),_:1})):f("",!0),y.formType=="securityuser_history"?(o(),a(k,{key:6,title:"User / User Group History",id:"User / User Group History"},{default:e(()=>[t(v,{title:r.value},{extra:e(()=>[t(p,null,{default:e(()=>[t(c,{position:"top",content:"create"},{default:e(()=>[u("div",{onClick:x,class:"circle-btn"},[t(s,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:e(()=>[t(_,{columns:se,autoColsWidth:"","data-source":R.value,page:P.value,resize:""},null,8,["data-source","page"])]),_:1},8,["title"])]),_:1})):f("",!0),y.formType=="securityuser_history"?(o(),a(k,{key:7,title:"User Name History",id:"User Name History"},{default:e(()=>[t(v,{title:r.value},{extra:e(()=>[t(p,null,{default:e(()=>[t(c,{position:"top",content:"create"},{default:e(()=>[u("div",{onClick:x,class:"circle-btn"},[t(s,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:e(()=>[t(_,{columns:ce,autoColsWidth:"","data-source":N.value,page:L.value,resize:""},null,8,["data-source","page"])]),_:1},8,["title"])]),_:1})):f("",!0),y.formType=="securityuser_history"?(o(),a(k,{key:8,title:"Acting Positions History",id:"Acting Positions History"},{default:e(()=>[t(v,{title:r.value},{extra:e(()=>[t(p,null,{default:e(()=>[t(c,{position:"top",content:"create"},{default:e(()=>[u("div",{onClick:x,class:"circle-btn"},[t(s,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:e(()=>[t(_,{columns:re,autoColsWidth:"","data-source":z.value,page:W.value,resize:""},null,8,["data-source","page"])]),_:1},8,["title"])]),_:1})):f("",!0)]),_:1},8,["modelValue"])}}},X=Y(Pe,[["__scopeId","data-v-ebeae32c"]]);const Le={__name:"securityuser",setup(y){ge(),xe({}),n(!1);const m=n("securityuser_general"),E=n(null),D=n(null),$=()=>{E.value.search({limit:10,current:1})};return we(()=>m.value,(r,h)=>{r=="securityuser_history"&&D.value.init("securityuser_history")}),(r,h)=>{const T=le,g=ee,S=te,H=Ce;return o(),a(H,{fluid:!0,class:"common-container"},{default:e(()=>[t(T,{class:"top-use-card"},{default:e(()=>h[1]||(h[1]=[u("div",{class:"top-use-box"},[u("h1",{class:"top-use-title"},"User Maintenance")],-1)])),_:1}),t(S,{type:"card",modelValue:m.value,"onUpdate:modelValue":h[0]||(h[0]=A=>m.value=A)},{default:e(()=>[t(g,{title:"General",id:"securityuser_general"},{default:e(()=>[t(Q,{formType:m.value,onSearch:$},null,8,["formType"]),t(X,{ref_key:"tableresultRef1",ref:E,formType:m.value},null,8,["formType"])]),_:1}),t(g,{title:"History",id:"securityuser_history"},{default:e(()=>[t(Q,{formType:m.value},null,8,["formType"]),t(X,{ref_key:"tableresultRef2",ref:D,formType:m.value},null,8,["formType"])]),_:1})]),_:1},8,["modelValue"])]),_:1})}}},st=Y(Le,[["__scopeId","data-v-ae988935"]]);export{st as default};