import{_ as O,a,o as L,c as q,f as e,w as l,i as t,h as n,F as W,l as P,k as H,m as Y,q as Z,C as J,at as te,y as j,z as Q,e as de,Z as fe,n as ae,K as me,R as ye,u as ue,s as xe,x as he,L as ve}from"./index-0f1dbffa.js";import{c as be}from"./index-791fece4.js";import{V as B}from"./index-653c2f3d.js";/* empty css              */import{J as K}from"./index-2d4ddb61.js";import{n as M,Z as N}from"./index-203e73ba.js";import{w as X}from"./index-c88e3fd6.js";import{E as oe}from"./index2-f5b11353.js";/* empty css              *//* empty css              */import{y as Fe,f as ke}from"./index-15df4815.js";/* empty css              */import{U as ce,B as ne}from"./index-09643b1a.js";import{$ as we,B as ge}from"./index-4a777da9.js";import"./index2-84f017df.js";const Ae=c=>(j("data-v-cf22ac0d"),c=c(),Q(),c),Se=Ae(()=>t("span",null,"Completion Date",-1)),Ce={__name:"main",setup(c){const C=a(1),r=a([]),R=a(),v=()=>{r.value=[1,2]},D=()=>{r.value=[]},y=a({field1:"",field2:"",field3:"",field4:"",field5:!1,field6:"",field7:"",field8:"",field9:"",field10:"",field11:"",field12:"",field13:""}),x=a({total:2,limit:10,current:2,layout:["page","limits","prev","next","count"]}),h=[{title:"选项",width:"55px",type:"checkbox",fixed:"left"},{title:"Field Activity",key:"Field1"},{title:"Premise Supply",key:"Field2",width:"300px"},{title:"Assigned To",key:"Field3",ellipsisTooltip:!0},{title:"Source",key:"Field4",ellipsisTooltip:!0},{title:"Required Steps",key:"Field5",ellipsisTooltip:!0},{title:"Remark",key:"Field6",ellipsisTooltip:!0}],k=a([{Field1:"xxx",id:1,Field2:"xxx",Field3:"xxx",Field4:"xxx",Field5:"xxx",Field6:"xxx"},{Field1:"xxx",id:2,Field2:"xxx",Field3:"xxx",Field4:"xxx",Field5:"xxx",Field6:"xxx"}]);return(i,s)=>{const u=P,V=H,S=Y,b=Z,f=M,E=N,_=B,m=X,w=J,d=oe,p=te,g=K;return L(),q(W,null,[e(m,{model:y.value,size:"sm",ref:"layFormRef",required:"",isLabelTooltip:""},{default:l(()=>[e(_,null,{default:l(()=>[e(E,{border:!0,size:"sm",column:"2"},{default:l(()=>[e(f,{span:"2"},{label:l(()=>[Se]),default:l(()=>[e(b,null,{default:l(()=>[e(S,null,{default:l(()=>[e(V,{placeholder:"",disabled:"",allowClear:"",style:{width:"300px"},modelValue:y.value.field1,"onUpdate:modelValue":s[1]||(s[1]=o=>y.value.field1=o)},{append:l(({disabled:o})=>[t("span",{class:"point-cu",onClick:s[0]||(s[0]=(...U)=>i.toSearch&&i.toSearch(...U))},[e(u,{type:"layui-icon-search"})])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"]),e(_,{style:{"margin-top":"10px"}},{default:l(()=>[e(g,{columns:h,"data-source":k.value,page:x.value,ref_key:"tableRef3",ref:R,selectedKeys:r.value,"onUpdate:selectedKeys":s[3]||(s[3]=o=>r.value=o)},{toolbar:l(()=>[e(S,{class:"table-select"},{default:l(()=>[e(w,{size:"sm",type:"primary",onClick:v},{default:l(()=>[n("Select All")]),_:1}),e(w,{size:"sm",onClick:D},{default:l(()=>[n("Unselect All")]),_:1}),e(p,{name:"action",modelValue:C.value,"onUpdate:modelValue":s[2]||(s[2]=o=>C.value=o),onChange:i.change4},{default:l(()=>[e(d,{value:"1",size:"xs",style:{"margin-right":"10px"}},{default:l(()=>[n("Complete fieid activties")]),_:1}),e(d,{value:"2",size:"xs"},{default:l(()=>[n("Cancel field activities")]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1})]),_:1},8,["data-source","page","selectedKeys"])]),_:1})],64)}}},Re=O(Ce,[["__scopeId","data-v-cf22ac0d"]]),De=t("span",null,"Date Range",-1),Ve=t("span",null,"Date Range",-1),Ee=t("span",null,"Activity Type",-1),$e={class:"point-cu"},Ue=t("span",null,"District",-1),ze={class:"point-cu"},Te=t("span",null,"Order Level",-1),Le=t("span",null,"Marked Alert",-1),Be=t("span",null,"Premise ID",-1),Ie={class:"point-cu"},Pe=t("span",null,"Premise Supply ID",-1),Ye=t("span",null,"Meter Nbr",-1),Ke=t("span",null,"Account ID",-1),Me=t("span",null,"Customer Contact Reference",-1),Ne=t("span",null,"Route Nbr",-1),Ge=t("span",null,"Walking Sequence",-1),Oe=t("span",null,"Field Activity ID",-1),qe={class:"point-cu"},We=t("span",null,"ASN",-1),He={class:"search-btn-box"},Ze={__name:"FASearch",props:{},emits:["sureData"],setup(c,{expose:C,emit:r}){const R=r,v=a(!1),D=()=>{v.value=!0},y=a(["1"]),x=a(!0),h=a(["export"]),k=a({total:2,limit:10,current:2,layout:["page","limits","prev","next","count"]}),i=[{title:"Date",key:"field1"},{title:"Waiting For Approval FA"},{title:"Pending FA"},{title:"Suspended FA",key:"field4",ellipsisTooltip:!0}],s=a([{field1:"2024/8/12",field2:"MELV15250935",field3:"MELV15",field4:"",field5:"A-Active",field6:"Elster Metering Ltd",field7:"Elster V100 (Rotary Piston)",field8:"2024/08/12",field9:"8540601104"}]),u=function(_){R("sureData",_),v.value=!1},V=function({current:_,limit:m}){console.log(_,m)},S=()=>{fe.load(2,{time:500}),s.value.push({field1:"xxxx",field2:"4930975385",field3:"2024-08-12",field4:"111555",field5:"yes",field6:"2",field7:"0005123268",field8:"FLATB",field9:"2",field10:"AZER15",field11:"4930975385",field12:"4930975385"})},b=a(""),f=a("");function E(){b.value="",f.value=""}return C({layerShow:D}),(_,m)=>{const w=ae,d=Z,p=M,g=P,o=H,U=ce,I=ne,z=me,A=N,T=J,ee=X,F=B,le=Fe,_e=K,pe=ke,re=ye;return L(),de(re,{modelValue:v.value,"onUpdate:modelValue":m[2]||(m[2]=$=>v.value=$),area:["1200px","70vh"],btn:_.action11,move:"",maxmin:"",title:"Field Activity Search"},{default:l(()=>[e(pe,null,{default:l(()=>[e(le,{md:24},{default:l(()=>[e(F,null,{default:l(()=>[e(ee,{size:"sm","label-width":110,"label-position":"left",allowClear:"",isLabelTooltip:""},{default:l(()=>[e(A,{border:!0,size:"sm",column:"2"},{default:l(()=>[e(p,null,{label:l(()=>[De]),default:l(()=>[e(d,null,{default:l(()=>[e(w,{range:"",rangeSeparator:"~",style:{width:"100%"},format:"YYYY/MM/DD",placeholder:"",allowClear:""})]),_:1})]),_:1}),e(p,null,{label:l(()=>[Ve]),default:l(()=>[e(d,null,{default:l(()=>[e(w,{range:"",rangeSeparator:"~",style:{width:"100%"},format:"YYYY/MM/DD",placeholder:"",allowClear:""})]),_:1})]),_:1}),e(p,null,{label:l(()=>[Ee]),default:l(()=>[e(d,null,{default:l(()=>[e(o,{allowClear:""},{append:l(({disabled:$})=>[t("span",$e,[e(g,{type:"layui-icon-search"})])]),_:1})]),_:1})]),_:1}),e(p,null,{label:l(()=>[Ue]),default:l(()=>[e(d,null,{default:l(()=>[e(o,{allowClear:""},{append:l(({disabled:$})=>[t("span",ze,[e(g,{type:"layui-icon-search"})])]),_:1})]),_:1})]),_:1}),e(p,null,{label:l(()=>[Te]),default:l(()=>[e(d,null,{default:l(()=>[e(I,{allowClear:""},{default:l(()=>[e(U,{value:"1",label:""})]),_:1})]),_:1})]),_:1}),e(p,null,{label:l(()=>[Le]),default:l(()=>[e(d,null,{default:l(()=>[e(z,{name:"like",skin:"primary",modelValue:x.value,"onUpdate:modelValue":m[0]||(m[0]=$=>x.value=$),value:"1"},null,8,["modelValue"])]),_:1})]),_:1}),e(p,null,{label:l(()=>[Be]),default:l(()=>[e(d,null,{default:l(()=>[e(o,{allowClear:""},{append:l(({disabled:$})=>[t("span",Ie,[e(g,{type:"layui-icon-search"})])]),_:1})]),_:1})]),_:1}),e(p,null,{label:l(()=>[Pe]),default:l(()=>[e(d,null,{default:l(()=>[e(o,{allowClear:""})]),_:1})]),_:1}),e(p,null,{label:l(()=>[Ye]),default:l(()=>[e(d,null,{default:l(()=>[e(o,{allowClear:""})]),_:1})]),_:1}),e(p,null,{label:l(()=>[Ke]),default:l(()=>[e(d,null,{default:l(()=>[e(o,{allowClear:""})]),_:1})]),_:1}),e(p,null,{label:l(()=>[Me]),default:l(()=>[e(d,null,{default:l(()=>[e(o,{allowClear:""})]),_:1})]),_:1}),e(p,null,{label:l(()=>[Ne]),default:l(()=>[e(d,null,{default:l(()=>[e(o,{allowClear:""})]),_:1})]),_:1}),e(p,null,{label:l(()=>[Ge]),default:l(()=>[e(d,null,{default:l(()=>[e(o,{allowClear:"",style:{width:"140px"}}),n(" to "),e(o,{allowClear:"",style:{width:"140px"}})]),_:1})]),_:1}),e(p,null,{label:l(()=>[Oe]),default:l(()=>[e(d,null,{default:l(()=>[e(o,{allowClear:""},{append:l(({disabled:$})=>[t("span",qe,[e(g,{type:"layui-icon-search"})])]),_:1})]),_:1})]),_:1}),e(p,null,{label:l(()=>[We]),default:l(()=>[e(d,null,{default:l(()=>[e(o,{allowClear:""})]),_:1})]),_:1})]),_:1}),t("div",He,[e(T,{type:"primary",onClick:S},{default:l(()=>[n("search")]),_:1}),e(T,{onClick:E},{default:l(()=>[n("reset")]),_:1})])]),_:1})]),_:1})]),_:1}),e(le,{md:24},{default:l(()=>[e(F,null,{default:l(()=>[e(_e,{page:k.value,columns:i,dataSource:s.value,resize:"","default-toolbar":h.value,selectedKeys:y.value,"onUpdate:selectedKeys":m[1]||(m[1]=$=>y.value=$),onRowDouble:u,onChange:V},null,8,["page","dataSource","default-toolbar","selectedKeys"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","btn"])}}};const G=c=>(j("data-v-f4238292"),c=c(),Q(),c),Je=G(()=>t("span",null,"Date",-1)),je=G(()=>t("span",null,"on Date",-1)),Qe=G(()=>t("span",null,"Reason",-1)),Xe=G(()=>t("span",null,"Due Date from",-1)),el=G(()=>t("span",null,"located in Districts",-1)),ll={__name:"pendingySuspended",setup(c){const C=ue(),r=a(),R=a(1),v=a([]),D=a(),y=()=>{v.value=[1,2]},x=()=>{v.value=[]},h=a(null),k=()=>{h.value.layerShow()},i=a({field1:"",field2:"",field3:"",field4:"",field5:!1,field6:"",field7:"",field8:"",field9:"",field10:"",field11:"",field12:"",field13:""}),s=a({total:2,limit:10,current:2,layout:["page","limits","prev","next","count"]}),u=[{title:"选项",width:"55px",type:"checkbox",fixed:"left"},{title:"Field Activity",key:"Field1",width:"120px"},{title:"Premise",key:"Field2",width:"300px"},{title:"Source",key:"Field3",width:"80px"},{title:"Suspended Reason",key:"Field4",width:"140px"},{title:"Suspended By",key:"Field5",width:"120px"},{title:"Suspended On",key:"Field6",width:"120px"},{title:"Skill",key:"Field7",width:"80px"},{title:"Due Date",key:"Field8",width:"100px"},{title:"Route Nbr",key:"Field6",width:"120px"},{title:"Seq#",key:"Field9",width:"100px"},{title:"FA Status",key:"Field10",width:"120px"},{title:"Premise ID",key:"Field11",width:"120px"},{title:"Meter Size",key:"Field12",width:"120px"},{title:"Operation",key:"Operation",width:"120px",fixed:"right",customSlot:"operate"}],V=a([{Field1:"xxx",id:1,Field2:"xxx",Field3:"xxx",Field4:"xxx",Field5:"xxx",Field6:"xxx"},{Field1:"xxx",id:2,Field2:"xxx",Field3:"xxx",Field4:"xxx",Field5:"xxx",Field6:"xxx"}]),S=()=>{C.push("/FAManagement/FADetails")};return(b,f)=>{const E=P,_=H,m=Z,w=M,d=ae,p=ne,g=J,o=oe,U=te,I=N,z=B,A=X,T=Y,ee=K;return L(),q(W,null,[e(A,{model:i.value,size:"sm",ref:"layFormRef",required:"",isLabelTooltip:""},{default:l(()=>[e(z,null,{default:l(()=>[e(I,{border:!0,size:"sm",column:"2"},{default:l(()=>[e(w,{span:"2"},{label:l(()=>[Je]),default:l(()=>[e(m,null,{default:l(()=>[e(_,{placeholder:"",disabled:"",allowClear:"",style:{width:"300px"},modelValue:i.value.field1,"onUpdate:modelValue":f[0]||(f[0]=F=>i.value.field1=F)},{append:l(({disabled:F})=>[t("span",{class:"point-cu",onClick:k},[e(E,{type:"layui-icon-search"})])]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(w,null,{label:l(()=>[je]),default:l(()=>[e(m,null,{default:l(()=>[e(d,{placeholder:"",style:{width:"100%"},modelValue:i.value.field3,"onUpdate:modelValue":f[1]||(f[1]=F=>i.value.field3=F),format:"YYYY/MM/DD",allowClear:""},null,8,["modelValue"])]),_:1})]),_:1}),e(w,null,{label:l(()=>[Qe]),default:l(()=>[e(m,null,{default:l(()=>[e(p)]),_:1})]),_:1}),e(w,{span:2},{label:l(()=>[e(g,{type:"primary",onClick:b.rereadMeter},{default:l(()=>[n(" Show FA ")]),_:1},8,["onClick"])]),default:l(()=>[e(m,null,{default:l(()=>[e(U,{name:"action",modelValue:R.value,"onUpdate:modelValue":f[2]||(f[2]=F=>R.value=F)},{default:l(()=>[e(o,{value:"1",size:"xs"},{default:l(()=>[n("FA pending/suspended on the Date")]),_:1}),e(o,{value:"2",size:"xs"},{default:l(()=>[n(" All pending'suspended FA located in ")]),_:1}),e(o,{value:"3",size:"xs"},{default:l(()=>[n("FA in route "),e(_,{allowClear:"",placeholder:"",style:{width:"100px"}}),n(" from "),e(_,{allowClear:"",placeholder:"",style:{width:"100px"}}),n(" to "),e(_,{allowClear:"",placeholder:"",style:{width:"100px"}})]),_:1}),e(o,{value:"4",size:"xs"},{default:l(()=>[n("Al non-routine pending/suspended FA with FA Type "),e(_,{allowClear:"",placeholder:"",style:{width:"100px"}})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(w,null,{label:l(()=>[Xe]),default:l(()=>[e(m,null,{default:l(()=>[n(" from "),e(_,{allowClear:"",placeholder:"",style:{width:"100px"}}),n(" to "),e(_,{allowClear:"",placeholder:"",style:{width:"100px"}})]),_:1})]),_:1}),e(w,null,{label:l(()=>[el]),default:l(()=>[e(m,null,{default:l(()=>[e(_,{allowClear:"",placeholder:""})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"]),e(z,{style:{"margin-top":"10px"}},{default:l(()=>[e(ee,{columns:u,"data-source":V.value,page:s.value,ref_key:"tableRef3",ref:D,selectedKeys:v.value,"onUpdate:selectedKeys":f[4]||(f[4]=F=>v.value=F)},{toolbar:l(()=>[e(T,{class:"table-select"},{default:l(()=>[e(g,{size:"sm",type:"primary",onClick:y},{default:l(()=>[n("Select All")]),_:1}),e(g,{size:"sm",onClick:x},{default:l(()=>[n("Unselect All")]),_:1}),e(U,{name:"action",modelValue:r.value,"onUpdate:modelValue":f[3]||(f[3]=F=>r.value=F),onChange:b.change4},{default:l(()=>[e(o,{value:"1",size:"xs",style:{"margin-right":"10px"}},{default:l(()=>[n("Auto schedule in next schedule run")]),_:1}),e(o,{value:"2",size:"xs",style:{"margin-right":"10px"}},{default:l(()=>[n("Assign field activities to")]),_:1}),e(o,{value:"3",size:"xs"},{default:l(()=>[n("Cancel feid activiies")]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1})]),operate:l(({data:F})=>[e(g,{size:"xs",onClick:le=>S(F)},{default:l(()=>[n("Detail")]),_:2},1032,["onClick"])]),_:1},8,["data-source","page","selectedKeys"])]),_:1}),e(Ze,{ref_key:"searchRef",ref:h},null,512)],64)}}},tl=O(ll,[["__scopeId","data-v-f4238292"]]);const se=c=>(j("data-v-b4348f7c"),c=c(),Q(),c),al=se(()=>t("span",null,"Date",-1)),ol=se(()=>t("span",null,"on Date",-1)),nl=se(()=>t("span",null,"Reason",-1)),sl={__name:"waitingApproval",setup(c){const C=a();a(1);const r=a([]),R=a(),v=()=>{r.value=[1,2]},D=()=>{r.value=[]},y=a(""),x=a({field1:"",field2:"",field3:"",field4:"",field5:!1,field6:"",field7:"",field8:"",field9:"",field10:"",field11:"",field12:"",field13:""}),h=a({total:2,limit:10,current:2,layout:["page","limits","prev","next","count"]}),k=[{title:"选项",width:"55px",type:"checkbox",fixed:"left"},{title:"Fieid Activity",key:"Field1",width:"120px"},{title:"Premise",key:"Field2",width:"300px"},{title:"Source",key:"Field3",width:"80px"},{title:"Appointment Window",key:"Field4",width:"140px"},{title:" Assigned To",key:"Field5",width:"120px"},{title:"Aert Message",key:"Field6",width:"120px"}],i=a([{Field1:"xxx",id:1,Field2:"xxx",Field3:"xxx",Field4:"xxx",Field5:"xxx",Field6:"xxx"},{Field1:"xxx",id:2,Field2:"xxx",Field3:"xxx",Field4:"xxx",Field5:"xxx",Field6:"xxx"}]);return(s,u)=>{const V=P,S=H,b=Z,f=M,E=ae,_=ce,m=ne,w=N,d=B,p=X,g=J,o=oe,U=te,I=Y,z=K;return L(),q(W,null,[e(p,{model:x.value,size:"sm",ref:"layFormRef",required:"",isLabelTooltip:""},{default:l(()=>[e(d,null,{default:l(()=>[e(w,{border:!0,size:"sm",column:"2"},{default:l(()=>[e(f,{span:"2"},{label:l(()=>[al]),default:l(()=>[e(b,null,{default:l(()=>[e(S,{placeholder:"",disabled:"",allowClear:"",style:{width:"300px"},modelValue:x.value.field1,"onUpdate:modelValue":u[1]||(u[1]=A=>x.value.field1=A)},{append:l(({disabled:A})=>[t("span",{class:"point-cu",onClick:u[0]||(u[0]=(...T)=>s.toSearch&&s.toSearch(...T))},[e(V,{type:"layui-icon-search"})])]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(f,null,{label:l(()=>[ol]),default:l(()=>[e(b,null,{default:l(()=>[e(E,{placeholder:"",style:{width:"100%"},modelValue:x.value.field3,"onUpdate:modelValue":u[2]||(u[2]=A=>x.value.field3=A),format:"YYYY/MM/DD",allowClear:""},null,8,["modelValue"])]),_:1})]),_:1}),e(f,null,{label:l(()=>[nl]),default:l(()=>[e(b,null,{default:l(()=>[e(m,{modelValue:y.value,"onUpdate:modelValue":u[3]||(u[3]=A=>y.value=A)},{default:l(()=>[e(_,{value:1},{default:l(()=>[n("其他組別要求")]),_:1}),e(_,{value:2},{default:l(()=>[n("用水量可接受")]),_:1}),e(_,{value:3},{default:l(()=>[n("顧客取消工程")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"]),e(d,{style:{"margin-top":"10px"}},{default:l(()=>[e(z,{columns:k,"data-source":i.value,page:h.value,ref_key:"tableRef3",ref:R,selectedKeys:r.value,"onUpdate:selectedKeys":u[5]||(u[5]=A=>r.value=A)},{toolbar:l(()=>[e(I,{class:"table-select"},{default:l(()=>[e(g,{size:"sm",type:"primary",onClick:v},{default:l(()=>[n("Select All")]),_:1}),e(g,{size:"sm",onClick:D},{default:l(()=>[n("Unselect All")]),_:1}),e(U,{name:"action",modelValue:C.value,"onUpdate:modelValue":u[4]||(u[4]=A=>C.value=A),onChange:s.change4},{default:l(()=>[e(o,{value:"1",size:"xs",style:{"margin-right":"10px"}},{default:l(()=>[n("Approve feid activities")]),_:1}),e(o,{value:"2",size:"xs",style:{"margin-right":"10px"}},{default:l(()=>[n("Assign field activities to")]),_:1}),e(o,{value:"3",size:"xs"},{default:l(()=>[n("Suspend feid activities")]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1})]),_:1},8,["data-source","page","selectedKeys"])]),_:1})],64)}}},il=O(sl,[["__scopeId","data-v-b4348f7c"]]),dl=t("span",null,"Field Activity",-1),ul=t("span",null,"Field Activity ID",-1),cl=t("span",{class:"key-color"},"6453970281",-1),_l=t("span",null,"Premise Supply ID",-1),pl=t("span",{class:"key-color"},"6453970797",-1),rl=t("span",null,"Fresh Water / 07 Cycle 4 Monthly / Bel!Repulse Bay Rd /13/F,20 BELLEVIEW DRIVE REPULSE BAY GAF13JF, 20 BELLEVIEW DRIVE, REPULSE BAY GARDEN, REPULSE BAY, HONG KONG, REPULSE BAYGARDEN, REPULSE BAY, HK -Premise ",-1),fl=t("span",null,"Premise ID",-1),ml=t("span",{class:"key-color"},"6453970728",-1),yl=t("span",null,"13JF, 20 BELLEVIEW DRIVE, REPULSE BAY GARDEN, REPULSE BAY, HONG KONG, REPULSE BAYGARDEN, REPULSE BAY, HK -Premise ",-1),xl=t("span",null,"Activity Type",-1),hl=t("span",{class:"key-color"},"SRGIVEUP",-1),vl=t("span",null,"Special Read . Give.Up Consumership ",-1),bl=t("div",null,"created on 18/1212021 05.44 by US",-1),Fl=t("span",null,"Assigned To",-1),kl=t("span",{class:"key-color"},"7588",-1),wl=t("span",null,"Assigned on 30/12/2021 ",-1),gl=t("span",null,"Current status",-1),Al=t("span",{class:"key-color"},"Completion Pending",-1),Sl=t("span",null,"Updated on 31/12/2021 00:17 ",-1),Cl={__name:"fieldActivityResult",props:{},emits:["sureData"],setup(c,{emit:C}){a(!1),a(!1),a(["1","2","3","4"]),a(!0),a(["export"]),a({total:2,limit:10,current:2,layout:["page","limits","prev","next","count"]});const r=a([1,2,3,4]);a("1");const R=[{title:"Step Seq",width:"100px",key:"field1"},{title:"Step Type",key:"field2"},{title:"Step Descriptior",width:"110px"},{title:"Optional",key:"field4",ellipsisTooltip:!0},{title:"Status",key:"field5",ellipsisTooltip:!0},{title:"Result",key:"field6",ellipsisTooltip:!0,width:"110px"},{title:"Step Remarks",key:"field7",ellipsisTooltip:!0,width:"110px"}],v=[{title:"Info Type",key:"field1"},{title:"Site Findings",key:"field2"},{title:"Modified Date,Time"},{title:"Not Applicable",key:"field4",ellipsisTooltip:!0}],D=[{title:"Category",key:"field1"},{title:"Description",key:"field2"},{title:"Remark"},{title:"Not Applicable",key:"field4",ellipsisTooltip:!0}],y=[{title:"Status",key:"field1"},{title:"Uodated on",key:"field2"},{title:"Updated By",key:"field3"},{title:"Reason/Remarks",key:"field4",ellipsisTooltip:!0}];a([{field1:"66565155",field2:"4930975385",field3:"2024-08-12",field4:"Supply Type: Fresh Water, Meter Read Cycle: 01; Read Route: A46305; RouteSequence: 4180",field5:"45545",field6:"2",field7:"0005123268",field8:"FLATB",field9:"2",field10:"AZER15",field11:"4930975385",field12:"4930975385"}]);const x=function({current:h,limit:k}){console.log(h,k)};return a(""),a(""),(h,k)=>{const i=Y,s=M,u=N,V=B,S=K,b=we,f=ge;return L(),q(W,null,[e(V,null,{default:l(()=>[e(u,{border:!0,size:"sm",column:"2"},{default:l(()=>[e(s,{span:"2"},{label:l(()=>[dl]),default:l(()=>[e(i,null,{default:l(()=>[n("REPULSE BAY GARDEN, REPULSE BAY, , HK - premise, Fresh water, Created on 18/12/2021 by On-ine Use IVEUPSpecial Read . Give.Up Consumership")]),_:1})]),_:1}),e(s,{span:"2"},{label:l(()=>[ul]),default:l(()=>[e(i,null,{default:l(()=>[cl]),_:1})]),_:1}),e(s,{span:"2"},{label:l(()=>[_l]),default:l(()=>[e(i,null,{default:l(()=>[pl,rl]),_:1})]),_:1}),e(s,{span:"2"},{label:l(()=>[fl]),default:l(()=>[e(i,null,{default:l(()=>[ml,yl]),_:1})]),_:1}),e(s,{span:"2"},{label:l(()=>[xl]),default:l(()=>[e(i,null,{default:l(()=>[hl,vl]),_:1}),bl]),_:1}),e(s,{span:"2"},{label:l(()=>[Fl]),default:l(()=>[e(i,null,{default:l(()=>[kl,wl]),_:1})]),_:1}),e(s,{span:"2"},{label:l(()=>[gl]),default:l(()=>[e(i,null,{default:l(()=>[Al,Sl]),_:1})]),_:1})]),_:1})]),_:1}),e(V,null,{default:l(()=>[e(f,{modelValue:r.value,"onUpdate:modelValue":k[0]||(k[0]=E=>r.value=E),onChange:x},{default:l(()=>[e(b,{title:"Field Activety Steps",id:1},{default:l(()=>[e(S,{columns:R,"data-source":h.tableData},null,8,["data-source"])]),_:1}),e(b,{title:"AMS",id:2},{default:l(()=>[e(S,{columns:v,"data-source":h.tableData},null,8,["data-source"])]),_:1}),e(b,{title:"Water Sample ",id:3},{default:l(()=>[e(S,{columns:D,"data-source":h.tableData},null,8,["data-source"])]),_:1}),e(b,{title:"System Use",id:4},{default:l(()=>[e(S,{columns:y,"data-source":h.tableData},null,8,["data-source"])]),_:1})]),_:1},8,["modelValue"])]),_:1})],64)}}};const ie=c=>(j("data-v-4fb0749d"),c=c(),Q(),c),Rl={class:"top-use-box"},Dl=ie(()=>t("h1",{class:"top-use-title"},"Order Management",-1)),Vl={class:"top-use-fun"},El=ie(()=>t("span",{class:"iconfont icon-baocun"},null,-1)),$l=ie(()=>t("span",{class:"iconfont icon-rubber"},null,-1)),Ul={__name:"index",setup(c){const C=ue();a("");const r=a("2");a({}),a({total:1,limit:10,current:2,layout:["page","limits","prev","next","count"]}),a(["export"]);const R=()=>{C.push("/FAManagement/createFA")};return(v,D)=>{const y=xe,x=P,h=Y,k=B,i=he,s=ve,u=be;return L(),de(u,{fluid:!0,class:"common-container"},{default:l(()=>[e(k,{class:"top-use-card"},{default:l(()=>[t("div",Rl,[Dl,t("div",Vl,[e(h,{size:"md"},{default:l(()=>[e(y,{position:"top",content:"save","is-dark":""},{default:l(()=>[El]),_:1}),e(y,{position:"top",content:"delete","is-dark":""},{default:l(()=>[$l]),_:1}),e(y,{position:"top",content:"refresh","is-dark":""},{default:l(()=>[t("span",null,[e(x,{type:"layui-icon-refresh"})])]),_:1}),e(y,{position:"top",content:"create","is-dark":""},{default:l(()=>[t("span",{onClick:R},[e(x,{type:"layui-icon-addition"})])]),_:1})]),_:1})])])]),_:1}),e(s,{type:"card",modelValue:r.value,"onUpdate:modelValue":D[0]||(D[0]=V=>r.value=V)},{default:l(()=>[e(i,{title:"FA.Waiting for Approval",id:"1"},{default:l(()=>[e(il)]),_:1}),e(i,{title:"FA.PendingySuspended",id:"2"},{default:l(()=>[e(tl)]),_:1}),e(i,{title:"Main",id:"3"},{default:l(()=>[e(Re)]),_:1}),e(i,{title:"Field Activity Result",id:"4"},{default:l(()=>[e(Cl)]),_:1})]),_:1},8,["modelValue"])]),_:1})}}},Zl=O(Ul,[["__scopeId","data-v-4fb0749d"]]);export{Zl as default};
