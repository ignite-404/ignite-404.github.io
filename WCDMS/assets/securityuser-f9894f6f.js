import{_ as Z,b as pe,a as n,o,e as a,w as e,f as t,i as u,p as f,c as x,t as w,l as ye,s as me,m as _e,x as ee,k as ve,n as ke,K as he,L as te,u as ge,E as xe,M as we,y as Ce,z as Ve}from"./index-0f1dbffa.js";import{c as be}from"./index-791fece4.js";import{V as le}from"./index-653c2f3d.js";import{s as X}from"./searchform-3e3eaf00.js";/* empty css              *//* empty css              */import{J as Ue}from"./index-2d4ddb61.js";/* empty css              *//* empty css              */import"./index-203e73ba.js";import"./routeSearch-0d9ec547.js";import"./index-15df4815.js";import"./index-c88e3fd6.js";import"./index-09643b1a.js";import"./index2-84f017df.js";/* empty css                                                                   */import"./index2-f5b11353.js";const Se=["onClick"],Ee=["onClick"],De=["onClick"],Te=["onClick"],He={key:1},Ae={key:1},$e={key:1},Be={key:1},Ge={key:1},Re={key:1},Ne=["onClick"],Me=["onClick"],ze=["onClick"],Pe=["onClick"],Le={key:1},We={__name:"tablesecurityuser",props:{formType:{type:Array,default:()=>[]}},emits:["addData","addLetter","editLetter"],setup(p,{expose:m,emit:S}){let E=S;pe(()=>{C.value.total=V.value.length,D.value.total=V.value.length,h.value.total=b.value.length,T.value.total=U.value.length,H.value.total=B.value.length,A.value.total=G.value.length,P.value.total=R.value.length,L.value.total=N.value.length,W.value.total=M.value.length});const $=function(i){r.value=i=="securityuser_general"?"Acting Position":"User / User Group History"},r=n("Acting Position"),C=n({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),D=n({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),h=n({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),T=n({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),H=n({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),A=n({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),P=n({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),L=n({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),W=n({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),I=[{title:"User ID",width:"200px",key:"field1"},{title:"User Name",key:"field2",width:"200px"},{title:"Effective Date From",key:"field3",width:"260px"},{title:"Effective Date To",key:"field4",width:"200px"},{title:"Remove",key:"field5",width:"200px"}],V=n([]);for(let i=0;i<10;i++)V.value.push({field1:`${i}`,field2:"userName",field3:"Current Amount",field4:"effectiveDateTo",field5:"	remove"});const ie=[{title:"User Group",width:"100px",key:"field1"},{title:"Description",key:"field2",customSlot:"field2",width:"150px"},{title:"Description (Chinese)",key:"field3",customSlot:"field3",width:"150px"},{title:"Effective Date From",key:"field4",customSlot:"field4",width:"150px"},{title:"Effective Date To",key:"field5",customSlot:"field5",width:"150px"},{title:"Super User",key:"field6",customSlot:"field6",width:"150px"},{title:"Remove",key:"field7",customSlot:"field7",width:"150px"},{title:"Handles",key:"field8",customSlot:"field8",width:"150px"}],b=n([]);for(let i=0;i<5;i++)b.value.push({field1:`${i}`,field2:"description",field3:"Current Amount",field4:"2024/03/02",field5:"2024/03/02",field6:"superUser",field7:"remove",isEdit:!1});const oe=()=>{b.value.push({field1:b.value.length.toString(),field2:"",field3:"",field4:"",field5:"",field6:"",field7:"",isEdit:!0}),h.value.total++},ae=[{title:"Service Region Group",width:"200px",key:"field1"},{title:"Remove",key:"field2",customSlot:"field2",width:"200px"},{title:"Handles",key:"field3",customSlot:"field3",width:"200px"}],U=n([]);for(let i=0;i<5;i++)U.value.push({field1:`${i}`,field2:"	remove"});const ne=()=>{U.value.push({field1:U.value.length.toString(),field2:"",isEdit:!0}),h.value.total++},de=[{title:"Billing Cycle Group",width:"200px",key:"field1"},{title:"Remove",key:"field2",width:"200px"}],B=n([]);for(let i=0;i<10;i++)B.value.push({field1:`${i}`,field2:"	remove"});const ue=[{title:"To Do Group",width:"200px",key:"field1"},{title:"Description",key:"field2",width:"200px"},{title:"Description (Chinese)",key:"field3",width:"200px"},{title:"Effective Date From",key:"field4",width:"260px"},{title:"Effective Date To",key:"field5",width:"200px"},{title:"Remove",key:"field6",width:"200px"},{title:"Handles",key:"field7",width:"200px"}],G=n([]);for(let i=0;i<10;i++)G.value.push({field1:`${i}`,field2:"description",field3:"Current Amount",field4:"effectiveDateFrom",field5:"effectiveDateTo",field6:"	remove"});const se=[{title:"Modified Date",width:"200px",key:"field1"},{title:"Action",key:"field2",width:"200px"},{title:"Modified By",key:"field3",width:"200px"},{title:"Before Value",key:"field4",width:"260px"},{title:"After Value",key:"field5",width:"200px"}],R=n([]);for(let i=0;i<10;i++)R.value.push({field1:`${i}`,field2:"action",field3:"Current Amount",field4:"Modified By",field5:"beforeValue",field6:"	Production - Person lD View"});const ce=[{title:"Modified Date",width:"200px",key:"field1"},{title:"Modified By",key:"field2",width:"200px"},{title:"Old User Name",key:"field3",width:"200px"},{title:"New User Name",key:"field4",width:"260px"},{title:"Effective Date",key:"field5",width:"200px"}],N=n([]);for(let i=0;i<10;i++)N.value.push({field1:`${i}`,field2:"action",field3:"Current Amount",field4:"oldUserName",field5:"newUserName",field6:"	effectiveDate"});const re=[{title:"Modified Date",width:"200px",key:"field1"},{title:"Action",key:"field2",width:"200px"},{title:"Modified By",key:"field3",width:"200px"},{title:"Before Value",key:"field4",width:"260px"},{title:"After Value",key:"field5",width:"200px"}],M=n([]);for(let i=0;i<10;i++)M.value.push({field1:`${i}`,field2:"action",field3:"Current Amount",field4:"Modified By",field5:"beforeValue",field6:"	Production - Person lD View"});const F=i=>{},J=i=>{i.isEdit=!1},K=i=>{},O=i=>{i.isEdit=!0},g=()=>{E("addLetter")};return m({init:$}),(i,j)=>{const s=ye,c=me,y=_e,_=Ue,v=le,k=ee,z=ve,q=ke,Q=he,fe=te;return o(),a(fe,{type:"card",modelValue:r.value,"onUpdate:modelValue":j[0]||(j[0]=l=>r.value=l)},{default:e(()=>[p.formType=="securityuser_general"?(o(),a(k,{key:0,title:"Acting Position",id:"Acting Position"},{default:e(()=>[t(v,{title:r.value},{extra:e(()=>[t(y,null,{default:e(()=>[t(c,{position:"top",content:"create"},{default:e(()=>[u("div",{onClick:g,class:"circle-btn"},[t(s,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:e(()=>[t(_,{columns:I,autoColsWidth:"","data-source":V.value,page:C.value,resize:""},null,8,["data-source","page"])]),_:1},8,["title"])]),_:1})):f("",!0),p.formType=="securityuser_general"?(o(),a(k,{key:1,title:"History of Acted By",id:"History of Acted By"},{default:e(()=>[t(v,{title:r.value},{extra:e(()=>[t(y,null,{default:e(()=>[t(c,{position:"top",content:"create"},{default:e(()=>[u("div",{onClick:g,class:"circle-btn"},[t(s,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:e(()=>[t(_,{columns:I,autoColsWidth:"","data-source":V.value,page:D.value,resize:""},null,8,["data-source","page"])]),_:1},8,["title"])]),_:1})):f("",!0),p.formType=="securityuser_general"?(o(),a(k,{key:2,title:"User Group List",id:"User Group List"},{default:e(()=>[t(v,{title:r.value},{extra:e(()=>[t(y,null,{default:e(()=>[t(c,{position:"top",content:"create"},{default:e(()=>[u("div",{onClick:oe,class:"circle-btn"},[t(s,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:e(()=>[t(_,{columns:ie,"data-source":b.value,page:h.value,resize:""},{field8:e(({data:l})=>[t(y,null,{default:e(()=>[l.isEdit?f("",!0):(o(),a(c,{key:0,position:"top",content:"edit"},{default:e(()=>[u("div",{onClick:d=>O(l),class:"circle-btn"},[t(s,{type:"layui-icon-edit"})],8,Se)]),_:2},1024)),l.isEdit?(o(),a(c,{key:1,position:"top",content:"save"},{default:e(()=>[u("div",{onClick:d=>F(l),class:"circle-btn"},[t(s,{type:"layui-icon-ok"})],8,Ee)]),_:2},1024)):f("",!0),l.isEdit?(o(),a(c,{key:2,position:"top",content:"cancel"},{default:e(()=>[u("div",{onClick:d=>J(l),class:"circle-btn"},[t(s,{type:"layui-icon-close"})],8,De)]),_:2},1024)):f("",!0),t(c,{position:"top",content:"delete"},{default:e(()=>[u("div",{onClick:d=>K(l),class:"circle-btn"},[t(s,{type:"layui-icon-delete"})],8,Te)]),_:2},1024)]),_:2},1024)]),field2:e(({data:l})=>[l.isEdit?(o(),a(z,{key:0,placeholder:"",modelValue:l.field2,"onUpdate:modelValue":d=>l.field2=d,allowClear:""},null,8,["modelValue","onUpdate:modelValue"])):(o(),x("span",He,w(l.field2),1))]),field3:e(({data:l})=>[l.isEdit?(o(),a(z,{key:0,placeholder:"",modelValue:l.field3,"onUpdate:modelValue":d=>l.field3=d,allowClear:""},null,8,["modelValue","onUpdate:modelValue"])):(o(),x("span",Ae,w(l.field3),1))]),field4:e(({data:l})=>[l.isEdit?(o(),a(q,{key:0,style:{width:"100%"},modelValue:l.field4,"onUpdate:modelValue":d=>l.field4=d,placeholder:"",allowClear:""},null,8,["modelValue","onUpdate:modelValue"])):(o(),x("span",$e,w(l.field4),1))]),field5:e(({data:l})=>[l.isEdit?(o(),a(q,{key:0,style:{width:"100%"},modelValue:l.field5,"onUpdate:modelValue":d=>l.field5=d,placeholder:"",allowClear:""},null,8,["modelValue","onUpdate:modelValue"])):(o(),x("span",Be,w(l.field5),1))]),field6:e(({data:l})=>[l.isEdit?(o(),a(Q,{key:0,name:"like",skin:"primary",modelValue:l.field6,"onUpdate:modelValue":d=>l.field6=d},null,8,["modelValue","onUpdate:modelValue"])):(o(),x("span",Ge,w(l.field6),1))]),field7:e(({data:l})=>[l.isEdit?(o(),a(Q,{key:0,name:"like",skin:"primary",modelValue:l.field7,"onUpdate:modelValue":d=>l.field7=d},null,8,["modelValue","onUpdate:modelValue"])):(o(),x("span",Re,w(l.field7),1))]),_:1},8,["data-source","page"])]),_:1},8,["title"])]),_:1})):f("",!0),p.formType=="securityuser_general"?(o(),a(k,{key:3,title:"Service Region Group",id:"Service Region Group"},{default:e(()=>[t(v,{title:r.value},{extra:e(()=>[t(y,null,{default:e(()=>[t(c,{position:"top",content:"create"},{default:e(()=>[u("div",{onClick:ne,class:"circle-btn"},[t(s,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:e(()=>[t(_,{columns:ae,"data-source":U.value,page:T.value,resize:""},{field3:e(({data:l})=>[t(y,null,{default:e(()=>[l.isEdit?f("",!0):(o(),a(c,{key:0,position:"top",content:"edit"},{default:e(()=>[u("div",{onClick:d=>O(l),class:"circle-btn"},[t(s,{type:"layui-icon-edit"})],8,Ne)]),_:2},1024)),l.isEdit?(o(),a(c,{key:1,position:"top",content:"save"},{default:e(()=>[u("div",{onClick:d=>F(l),class:"circle-btn"},[t(s,{type:"layui-icon-ok"})],8,Me)]),_:2},1024)):f("",!0),l.isEdit?(o(),a(c,{key:2,position:"top",content:"cancel"},{default:e(()=>[u("div",{onClick:d=>J(l),class:"circle-btn"},[t(s,{type:"layui-icon-close"})],8,ze)]),_:2},1024)):f("",!0),t(c,{position:"top",content:"delete"},{default:e(()=>[u("div",{onClick:d=>K(l),class:"circle-btn"},[t(s,{type:"layui-icon-delete"})],8,Pe)]),_:2},1024)]),_:2},1024)]),field2:e(({data:l})=>[l.isEdit?(o(),a(z,{key:0,placeholder:"",modelValue:l.field2,"onUpdate:modelValue":d=>l.field2=d,allowClear:""},null,8,["modelValue","onUpdate:modelValue"])):(o(),x("span",Le,w(l.field2),1))]),_:1},8,["data-source","page"])]),_:1},8,["title"])]),_:1})):f("",!0),p.formType=="securityuser_general"?(o(),a(k,{key:4,title:"Billing Cycle Group",id:"Billing Cycle Group"},{default:e(()=>[t(v,{title:r.value},{extra:e(()=>[t(y,null,{default:e(()=>[t(c,{position:"top",content:"create"},{default:e(()=>[u("div",{onClick:g,class:"circle-btn"},[t(s,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:e(()=>[t(_,{columns:de,autoColsWidth:"","data-source":B.value,page:H.value,resize:""},null,8,["data-source","page"])]),_:1},8,["title"])]),_:1})):f("",!0),p.formType=="securityuser_general"?(o(),a(k,{key:5,title:"To Do Group List",id:"To Do Group List"},{default:e(()=>[t(v,{title:r.value},{extra:e(()=>[t(y,null,{default:e(()=>[t(c,{position:"top",content:"create"},{default:e(()=>[u("div",{onClick:g,class:"circle-btn"},[t(s,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:e(()=>[t(_,{columns:ue,autoColsWidth:"","data-source":G.value,page:A.value,resize:""},null,8,["data-source","page"])]),_:1},8,["title"])]),_:1})):f("",!0),p.formType=="securityuser_history"?(o(),a(k,{key:6,title:"User / User Group History",id:"User / User Group History"},{default:e(()=>[t(v,{title:r.value},{extra:e(()=>[t(y,null,{default:e(()=>[t(c,{position:"top",content:"create"},{default:e(()=>[u("div",{onClick:g,class:"circle-btn"},[t(s,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:e(()=>[t(_,{columns:se,autoColsWidth:"","data-source":R.value,page:P.value,resize:""},null,8,["data-source","page"])]),_:1},8,["title"])]),_:1})):f("",!0),p.formType=="securityuser_history"?(o(),a(k,{key:7,title:"User Name History",id:"User Name History"},{default:e(()=>[t(v,{title:r.value},{extra:e(()=>[t(y,null,{default:e(()=>[t(c,{position:"top",content:"create"},{default:e(()=>[u("div",{onClick:g,class:"circle-btn"},[t(s,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:e(()=>[t(_,{columns:ce,autoColsWidth:"","data-source":N.value,page:L.value,resize:""},null,8,["data-source","page"])]),_:1},8,["title"])]),_:1})):f("",!0),p.formType=="securityuser_history"?(o(),a(k,{key:8,title:"Acting Positions History",id:"Acting Positions History"},{default:e(()=>[t(v,{title:r.value},{extra:e(()=>[t(y,null,{default:e(()=>[t(c,{position:"top",content:"create"},{default:e(()=>[u("div",{onClick:g,class:"circle-btn"},[t(s,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:e(()=>[t(_,{columns:re,autoColsWidth:"","data-source":M.value,page:W.value,resize:""},null,8,["data-source","page"])]),_:1},8,["title"])]),_:1})):f("",!0)]),_:1},8,["modelValue"])}}},Y=Z(We,[["__scopeId","data-v-ebeae32c"]]);const Ie=p=>(Ce("data-v-ae988935"),p=p(),Ve(),p),Fe=Ie(()=>u("div",{class:"top-use-box"},[u("h1",{class:"top-use-title"},"User Maintenance")],-1)),Je={__name:"securityuser",setup(p){ge(),xe({}),n(!1);const m=n("securityuser_general"),S=n(null),E=n(null),$=()=>{S.value.search({limit:10,current:1})};return we(()=>m.value,(r,C)=>{r=="securityuser_history"&&E.value.init("securityuser_history")}),(r,C)=>{const D=le,h=ee,T=te,H=be;return o(),a(H,{fluid:!0,class:"common-container"},{default:e(()=>[t(D,{class:"top-use-card"},{default:e(()=>[Fe]),_:1}),t(T,{type:"card",modelValue:m.value,"onUpdate:modelValue":C[0]||(C[0]=A=>m.value=A)},{default:e(()=>[t(h,{title:"General",id:"securityuser_general"},{default:e(()=>[t(X,{formType:m.value,onSearch:$},null,8,["formType"]),t(Y,{ref_key:"tableresultRef1",ref:S,formType:m.value},null,8,["formType"])]),_:1}),t(h,{title:"History",id:"securityuser_history"},{default:e(()=>[t(X,{formType:m.value},null,8,["formType"]),t(Y,{ref_key:"tableresultRef2",ref:E,formType:m.value},null,8,["formType"])]),_:1})]),_:1},8,["modelValue"])]),_:1})}}},st=Z(Je,[["__scopeId","data-v-ae988935"]]);export{st as default};