import{a as o,o as $,e as V,w as e,f as l,p as E,i as t,h as c,q as P,C as B,Z as H,l as G,k as M,R as Q,c as ee,t as le,F as te,K as oe,n as ae,_ as ne,u as se,s as ie,m as de,x as ue,L as ce,y as _e,z as re}from"./index-0f1dbffa.js";import{c as fe}from"./index-791fece4.js";import{V as A}from"./index-653c2f3d.js";/* empty css              */import{J as N}from"./index-2d4ddb61.js";import{n as j,Z as K}from"./index-203e73ba.js";/* empty css              */import{B as W}from"./index-09643b1a.js";import{w as q}from"./index-c88e3fd6.js";/* empty css              *//* empty css              */import{_ as pe}from"./doTypeSearch-8022fa96.js";import{_ as me}from"./doGroupCodeSearch-0eb6bc7f.js";import{y as ye,f as he}from"./index-15df4815.js";import{_ as ke}from"./userSearch-8014df1a.js";import"./index2-f5b11353.js";import"./index2-84f017df.js";const we=t("span",null,"Supervisor",-1),be=t("i",{class:"iconfont icon-zanwushuju"},null,-1),Ce=t("span",null,"Supervisor",-1),ve=t("i",{class:"iconfont icon-zanwushuju"},null,-1),xe={class:"search-btn-box"},Xe={__name:"Summary",setup(X){o(!1);const f=o(!0),C=o({total:1,limit:10,current:2,layout:["page","limits","prev","next","count"]}),p=[{title:"To Do Type",width:"200px",key:"field1"},{title:"Total #",key:"field2",width:"120px"},{title:"Open",children:[{title:"<10days #",key:"field3",width:"100px"},{title:">=10days and <50days #",key:"field4",width:"160px"},{title:">=50days #",key:"field5",width:"100px"}]},{title:"Working",children:[{title:"<10days #",key:"field6",width:"100px"},{title:">=10days and <50days #",key:"field7",width:"160px"},{title:">=50days #",key:"field8",width:"100"}]}],u=o([{field1:"TD-ATERR -Automation process errors",field2:"17 / 0",field3:"0 / 0",field4:"4 / 0",field5:"13 / 0",field6:"0 / 0",field7:"0 / 0",field8:"0 / 0"}]),w=o({field1:"1",field2:"",field3:"",field4:"",field5:!1,field6:"",field7:"",field8:"",field9:"",field10:"",field11:"",field12:"",field13:""}),b=o(null);o(null),o(null);const v=()=>{b.value.layerShow()};return(m,T)=>{const _=W,y=P,s=j,g=K,i=B,h=A,k=N,a=q;return $(),V(a,{model:w.value,size:"sm",ref:"layFormRef",required:"",isLabelTooltip:""},{default:e(()=>[l(h,null,{default:e(()=>[f.value?($(),V(g,{key:0,border:!0,size:"sm",column:"2"},{default:e(()=>[l(s,null,{label:e(()=>[we]),default:e(()=>[l(y,null,{default:e(()=>[l(_,{allowClear:""},{default:e(()=>[be]),_:1})]),_:1})]),_:1}),l(s,null,{label:e(()=>[Ce]),default:e(()=>[l(y,null,{default:e(()=>[l(_,{allowClear:""},{default:e(()=>[ve]),_:1})]),_:1})]),_:1})]),_:1})):E("",!0),t("div",xe,[l(i,{type:"primary",onClick:v},{default:e(()=>[c("search")]),_:1}),l(i,{onClick:m.toReset},{default:e(()=>[c("reset")]),_:1},8,["onClick"])])]),_:1}),l(h,null,{default:e(()=>[l(k,{columns:p,"data-source":u.value,page:C.value},null,8,["data-source","page"])]),_:1})]),_:1},8,["model"])}}},ge=t("span",null,"Supervisor",-1),Se=t("i",{class:"iconfont icon-zanwushuju"},null,-1),De=t("span",null,"Subordinate",-1),Te=t("i",{class:"iconfont icon-zanwushuju"},null,-1),$e={class:"search-btn-box"},Re={__name:"Subordinates",setup(X){o(!1);const f=o(!0),C=o({total:1,limit:10,current:2,layout:["page","limits","prev","next","count"]}),p=[{title:"Level",width:"100px",key:"field1"},{title:"User ID",key:"field2",width:"120px"},{title:"Direct Supervisor Id",key:"field3",width:"120px"},{title:"To Do Type",key:"field4",width:"120px"},{title:"Total Working on #",key:"field5",width:"120px"},{title:"Working on This Type",children:[{title:"<10days #",key:"field6",width:"100px"},{title:">=10days and <50days #",key:"field7",width:"160px"},{title:">=50days #",key:"field8",width:"100px"}]}],u=o([{field1:"1",field2:"XXXX",field3:"XXXX",field4:"XXXX",field5:"13 / 0",field6:"0 / 0",field7:"0 / 0",field8:"0 / 0"}]),w=o({field1:"1",field2:"",field3:"",field4:"",field5:!1,field6:"",field7:"",field8:"",field9:"",field10:"",field11:"",field12:"",field13:""}),b=o(null);o(null),o(null);const v=()=>{b.value.layerShow()};return(m,T)=>{const _=W,y=P,s=j,g=K,i=B,h=A,k=N,a=q;return $(),V(a,{model:w.value,size:"sm",ref:"layFormRef",required:"",isLabelTooltip:""},{default:e(()=>[l(h,null,{default:e(()=>[f.value?($(),V(g,{key:0,border:!0,size:"sm",column:"2"},{default:e(()=>[l(s,null,{label:e(()=>[ge]),default:e(()=>[l(y,null,{default:e(()=>[l(_,{allowClear:""},{default:e(()=>[Se]),_:1})]),_:1})]),_:1}),l(s,null,{label:e(()=>[De]),default:e(()=>[l(y,null,{default:e(()=>[l(_,{allowClear:""},{default:e(()=>[Te]),_:1})]),_:1})]),_:1})]),_:1})):E("",!0),t("div",$e,[l(i,{type:"primary",onClick:v},{default:e(()=>[c("search")]),_:1}),l(i,{onClick:m.toReset},{default:e(()=>[c("reset")]),_:1},8,["onClick"])])]),_:1}),l(h,null,{default:e(()=>[l(k,{columns:p,"data-source":u.value,page:C.value},null,8,["data-source","page"])]),_:1})]),_:1},8,["model"])}}},Ve=t("span",null,"Person ID",-1),ze=t("span",null,"Presentation Name",-1),Ie=t("span",null,"Surname/Company Name",-1),Ae=t("span",null,"Given Name",-1),Le=t("span",null,"Account ID",-1),Ue=t("span",null,"Premise ID",-1),Pe={class:"search-btn-box"},Be={__name:"customerCommunicationSearch",props:{},emits:["sureData"],setup(X,{expose:f,emit:C}){const p=C,u=o(!1),w=()=>{u.value=!0},b=o(["1"]);o(!0);const v=o(["export"]),m=o({total:2,limit:10,current:2,layout:["page","limits","prev","next","count"]}),T=[{title:"Person ID",width:"200px",key:"field1"},{title:"Surname/Company Name",width:"160px",key:"field2"},{title:"Given Name",width:"160px",key:"field3"},{title:"Presentation Name",width:"160px",key:"field4"},{title:"Account ID",width:"160px",key:"field6"},{title:"Premise ID",width:"160px",key:"field4"},{title:"Customer Communication ID",width:"160px",key:"field7"},{title:"Communication Date Time",width:"160px",key:"field8"},{title:"CC Created By",width:"160px",key:"field9"},{title:"Class",width:"160px",key:"field10"},{title:"Type",width:"160px",key:"field11"},{title:"Status",width:"160px",key:"field12"},{title:"remark",width:"160px",key:"field13"},{title:"Last CC Log Creation Date Time",width:"160px",key:"field14"},{title:"Last CC Log Content",width:"160px",key:"field15"},{title:"Last CC Log Created By",key:"field16",width:"160px"}],_=o([{field1:"xxxx",field2:"xxxx"}]),y=function(a){p("sureData",a),u.value=!1},s=function({current:a,limit:n}){console.log(a,n)},g=()=>{H.load(2,{time:500}),_.value.push({field1:"66565155",field2:"4930975385"})},i=o(""),h=o(!1);function k(){i.value="",h.value=""}return f({layerShow:w}),(a,n)=>{const x=G,r=M,S=P,D=j,L=K,z=B,F=q,U=A,d=ye,J=N,O=he,Y=Q;return $(),V(Y,{modelValue:u.value,"onUpdate:modelValue":n[4]||(n[4]=R=>u.value=R),area:["1200px","70vh"],btn:a.action11,move:"",maxmin:"",title:"Customer Communication Search"},{default:e(()=>[l(O,null,{default:e(()=>[l(d,{md:24},{default:e(()=>[l(U,null,{default:e(()=>[l(F,{size:"sm","label-width":110,"label-position":"left",allowClear:"",isLabelTooltip:""},{default:e(()=>[l(L,{border:!0,size:"sm",column:"2"},{default:e(()=>[l(D,null,{label:e(()=>[Ve]),default:e(()=>[l(S,null,{default:e(()=>[l(r,{allowClear:"",disabled:""},{append:e(({disabled:R})=>[t("span",{class:"point-cu",onClick:n[0]||(n[0]=(...I)=>a.customerSearch&&a.customerSearch(...I))},[l(x,{type:"layui-icon-search"})])]),_:1})]),_:1})]),_:1}),l(D,null,{label:e(()=>[ze]),default:e(()=>[l(S,null,{default:e(()=>[l(r,{allowClear:""})]),_:1})]),_:1}),l(D,null,{label:e(()=>[Ie]),default:e(()=>[l(S,null,{default:e(()=>[l(r,{allowClear:""})]),_:1})]),_:1}),l(D,null,{label:e(()=>[Ae]),default:e(()=>[l(S,null,{default:e(()=>[l(r,{allowClear:""})]),_:1})]),_:1}),l(D,null,{label:e(()=>[Le]),default:e(()=>[l(S,null,{default:e(()=>[l(r,{allowClear:"",disabled:""},{append:e(({disabled:R})=>[t("span",{class:"point-cu",onClick:n[1]||(n[1]=(...I)=>a.customerSearch&&a.customerSearch(...I))},[l(x,{type:"layui-icon-search"})])]),_:1})]),_:1})]),_:1}),l(D,null,{label:e(()=>[Ue]),default:e(()=>[l(S,null,{default:e(()=>[l(r,{allowClear:"",disabled:""},{append:e(({disabled:R})=>[t("span",{class:"point-cu",onClick:n[2]||(n[2]=(...I)=>a.customerSearch&&a.customerSearch(...I))},[l(x,{type:"layui-icon-search"})])]),_:1})]),_:1})]),_:1})]),_:1}),t("div",Pe,[l(z,{type:"primary",onClick:g},{default:e(()=>[c("search")]),_:1}),l(z,{onClick:k},{default:e(()=>[c("reset")]),_:1})])]),_:1})]),_:1})]),_:1}),l(d,{md:24},{default:e(()=>[l(U,null,{default:e(()=>[l(J,{page:m.value,columns:T,dataSource:_.value,resize:"","default-toolbar":v.value,selectedKeys:b.value,"onUpdate:selectedKeys":n[3]||(n[3]=R=>b.value=R),onRowDouble:y,onChange:s},null,8,["page","dataSource","default-toolbar","selectedKeys"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","btn"])}}},Ne=t("span",null,"To Do Type",-1),je=t("span",null,"To Do Id",-1),Ke=t("span",null,"Supervisor",-1),qe=t("i",{class:"iconfont icon-zanwushuju"},null,-1),Fe=t("span",null,"Urgent",-1),Ge=t("span",null,"Assigned to User ID",-1),We=t("i",{class:"iconfont icon-zanwushuju"},null,-1),Ee=t("span",null,"Assigned to To Do Group",-1),Me=t("span",null,"Status",-1),Ze=t("span",null,"Read Status",-1),Je=t("span",null,"Bill Cycle",-1),Oe=t("i",{class:"iconfont icon-zanwushuju"},null,-1),Ye=t("span",null,"To Do Group District",-1),He=t("i",{class:"iconfont icon-zanwushuju"},null,-1),Qe=t("span",null,"Parent CC ID",-1),el=t("span",null,"Created Date Time",-1),ll=t("span",null,"Message",-1),tl=t("span",null,"Keyword",-1),ol=t("i",{class:"iconfont icon-zanwushuju"},null,-1),al={class:"search-btn-box"},nl={__name:"DoAssignment",setup(X){const f=o(null),C=o(null),p=o(null),u=o(null),w=()=>{f.value.layerShow()},b=()=>{C.value.layerShow()},v=()=>{p.value.layerShow()},m=()=>{u.value.layerShow()},T=o({total:1,limit:10,current:2,layout:["page","limits","prev","next","count"]}),_=[{fixed:"left",type:"checkbox",title:"复选"},{title:"Urgent",width:"100px",key:"field1"},{title:"Created Date Time",key:"field2",width:"140px"},{title:"To Do Type",key:"field3",width:"120px"},{title:"Status",key:"field4",width:"120px"},{title:"Read Status",key:"field5",width:"120px"},{title:"Assigned To",key:"field6",width:"120px",customSlot:"AssignedTo"},{title:"Assigned Date Time",key:"field7",width:"140px"},{title:"Keyword",key:"field8",width:"120px"},{title:"Message",key:"field9",width:"120px"},{title:"To Do Id",key:"field10",width:"120px"}],y=o([{field1:"XXXX",field2:"XXXX",field3:"XXXX",field4:"XXXX",field5:"XXXX",field6:"XXXX",field7:"XXXX",field8:"XXXX",field9:"XXXX",field10:"XXXX"}]),s=o({field1:"1",field2:"",field3:"",field4:"",field5:!1,field6:"",field7:"",field8:"",field9:"",field10:"",field11:"",field12:"",field13:""});return(g,i)=>{const h=G,k=M,a=P,n=j,x=W,r=oe,S=ae,D=K,L=B,z=A,F=q,U=N;return $(),ee(te,null,[l(F,{model:s.value,size:"sm",ref:"layFormRef",required:"",isLabelTooltip:""},{default:e(()=>[l(z,null,{default:e(()=>[l(D,{border:!0,size:"sm",column:"2"},{default:e(()=>[l(n,null,{label:e(()=>[Ne]),default:e(()=>[l(a,null,{default:e(()=>[l(k,{allowClear:"",disabled:""},{append:e(({disabled:d})=>[t("span",{class:"point-cu",onClick:w},[l(h,{type:"layui-icon-search"})])]),_:1})]),_:1})]),_:1}),l(n,null,{label:e(()=>[je]),default:e(()=>[l(a,null,{default:e(()=>[l(k,{allowClear:""})]),_:1})]),_:1}),l(n,null,{label:e(()=>[Ke]),default:e(()=>[l(a,null,{default:e(()=>[l(x,{allowClear:""},{default:e(()=>[qe]),_:1})]),_:1})]),_:1}),l(n,null,{label:e(()=>[Fe]),default:e(()=>[l(a,null,{default:e(()=>[l(r,{placeholder:"Please enter",name:"like",skin:"primary",modelValue:s.value.field5,"onUpdate:modelValue":i[0]||(i[0]=d=>s.value.field5=d)},{default:e(()=>[c("Yes")]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(n,null,{label:e(()=>[Ge]),default:e(()=>[l(a,null,{default:e(()=>[l(x,{allowClear:""},{default:e(()=>[We]),_:1})]),_:1})]),_:1}),l(n,null,{label:e(()=>[Ee]),default:e(()=>[l(a,null,{default:e(()=>[l(k,{allowClear:"",disabled:""},{append:e(({disabled:d})=>[t("span",{class:"point-cu",onClick:b},[l(h,{type:"layui-icon-search"})])]),_:1})]),_:1})]),_:1}),l(n,null,{label:e(()=>[Me]),default:e(()=>[l(a,null,{default:e(()=>[l(r,{placeholder:"Please enter",name:"like",skin:"primary",modelValue:s.value.field5,"onUpdate:modelValue":i[1]||(i[1]=d=>s.value.field5=d)},{default:e(()=>[c(" Open")]),_:1},8,["modelValue"]),l(r,{placeholder:"Please enter",name:"like",skin:"primary",modelValue:s.value.field5,"onUpdate:modelValue":i[2]||(i[2]=d=>s.value.field5=d)},{default:e(()=>[c("Working")]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(n,null,{label:e(()=>[Ze]),default:e(()=>[l(a,null,{default:e(()=>[l(r,{placeholder:"Please enter",name:"like",skin:"primary",modelValue:s.value.field5,"onUpdate:modelValue":i[3]||(i[3]=d=>s.value.field5=d)},{default:e(()=>[c(" Read")]),_:1},8,["modelValue"]),l(r,{placeholder:"Please enter",name:"like",skin:"primary",modelValue:s.value.field5,"onUpdate:modelValue":i[4]||(i[4]=d=>s.value.field5=d)},{default:e(()=>[c("Unread")]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(n,null,{label:e(()=>[Je]),default:e(()=>[l(a,null,{default:e(()=>[l(x,{allowClear:""},{default:e(()=>[Oe]),_:1})]),_:1})]),_:1}),l(n,null,{label:e(()=>[Ye]),default:e(()=>[l(a,null,{default:e(()=>[l(x,{allowClear:""},{default:e(()=>[He]),_:1})]),_:1})]),_:1}),l(n,null,{label:e(()=>[Qe]),default:e(()=>[l(a,null,{default:e(()=>[l(k,{allowClear:"",disabled:""},{append:e(({disabled:d})=>[t("span",{class:"point-cu",onClick:v},[l(h,{type:"layui-icon-search"})])]),_:1})]),_:1})]),_:1}),l(n,null,{label:e(()=>[el]),default:e(()=>[l(a,null,{default:e(()=>[l(S,{style:{width:"100%"},placeholder:"",allowClear:""})]),_:1})]),_:1}),l(n,null,{label:e(()=>[ll]),default:e(()=>[l(a,null,{default:e(()=>[l(k,{allowClear:""})]),_:1})]),_:1}),l(n,null,{label:e(()=>[tl]),default:e(()=>[l(a,null,{default:e(()=>[l(x,{allowClear:""},{default:e(()=>[ol]),_:1})]),_:1})]),_:1})]),_:1}),t("div",al,[l(L,{type:"primary",onClick:g.toSearch},{default:e(()=>[c("search")]),_:1},8,["onClick"]),l(L,{onClick:g.toReset},{default:e(()=>[c("reset")]),_:1},8,["onClick"])])]),_:1})]),_:1},8,["model"]),l(z,null,{default:e(()=>[l(U,{columns:_,"data-source":y.value,page:T.value},{AssignedTo:e(({data:d})=>[t("span",{class:"key-color cursor-pointer",onClick:m},le(d.field6),1)]),_:1},8,["data-source","page"])]),_:1}),l(pe,{ref_key:"searchRef",ref:f},null,512),l(me,{ref_key:"searchRef1",ref:C},null,512),l(Be,{ref_key:"searchRef2",ref:p},null,512),l(ke,{ref_key:"searchRef3",ref:u},null,512)],64)}}};const Z=X=>(_e("data-v-c7424d32"),X=X(),re(),X),sl={class:"top-use-box"},il=Z(()=>t("h1",{class:"top-use-title"},"To Do Monitoring and Assignment",-1)),dl={class:"top-use-fun"},ul=Z(()=>t("span",{class:"iconfont icon-rubber"},null,-1)),cl={__name:"assignment",setup(X){se(),o("");const f=o("1");return o({}),o({total:1,limit:10,current:2,layout:["page","limits","prev","next","count"]}),o(["export"]),(C,p)=>{const u=G,w=ie,b=de,v=A,m=ue,T=ce,_=fe;return $(),V(_,{fluid:!0,class:"common-container"},{default:e(()=>[l(v,{class:"top-use-card"},{default:e(()=>[t("div",sl,[il,t("div",dl,[l(b,{size:"md"},{default:e(()=>[l(w,{position:"top",content:"refresh","is-dark":""},{default:e(()=>[t("span",null,[l(u,{type:"layui-icon-refresh"})])]),_:1}),l(w,{position:"top",content:"delete","is-dark":""},{default:e(()=>[ul]),_:1})]),_:1})])])]),_:1}),l(T,{type:"card",modelValue:f.value,"onUpdate:modelValue":p[0]||(p[0]=y=>f.value=y)},{default:e(()=>[l(m,{title:"Summary",id:"1"},{default:e(()=>[l(Xe)]),_:1}),l(m,{title:"Summary By Subordinates",id:"2"},{default:e(()=>[l(Re)]),_:1}),l(m,{title:"To Do Assignment",id:"3"},{default:e(()=>[l(nl)]),_:1})]),_:1},8,["modelValue"])]),_:1})}}},Tl=ne(cl,[["__scopeId","data-v-c7424d32"]]);export{Tl as default};
