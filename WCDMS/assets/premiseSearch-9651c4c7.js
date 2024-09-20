import{a as d,o as O,e as G,w as e,f as l,i as t,h as _,Z as J,k as Q,q as X,ar as Y,m as h,K as ll,C as el,R as al}from"./index-a9e193d8.js";import{y as tl,f as ol}from"./index-5c87c2db.js";import{Z as nl}from"./index-5c44996e.js";import{V as ul}from"./index-362eaca0.js";/* empty css              *//* empty css              */import{W as sl}from"./index-0acfba08.js";import{n as dl,Z as rl}from"./index-4df89be4.js";/* empty css              */import{U as il,B as pl}from"./index-5bfab842.js";import{w as fl}from"./index-31dd4159.js";import{$ as ml,B as _l}from"./index-11ac81a5.js";import{E as yl}from"./index2-db5e8257.js";const bl={class:"search-btn-box"},Ul={__name:"premiseSearch",props:{},emits:["sureData"],setup(wl,{expose:D,emit:R}){const T=R,m=d(!1),w=d(!1),U=()=>{m.value=!0},C=d(["1"]);d(!0);const B=d(["export"]),z=d({total:2,limit:10,current:2,layout:["page","limits","prev","next","count"]}),v=d([1,2]),V=d("1"),A=[{title:"Premise ID",width:"100px",key:"field1",sort:"ascending"},{title:"Premise Type",key:"field2"},{title:"Address",width:"110px"},{title:"Supply Type",key:"field4",ellipsisTooltip:!0},{title:"Meter Read Cycle",key:"field5",ellipsisTooltip:!0},{title:"Read Route",key:"field6",ellipsisTooltip:!0,width:"110px"}],E=d([{field1:"66565155",field2:"4930975385",field3:"2024-08-12",field4:"Supply Type: Fresh Water, Meter Read Cycle: 01; Read Route: A46305; RouteSequence: 4180",field5:"45545",field6:"2",field7:"0005123268",field8:"FLATB",field9:"2",field10:"AZER15",field11:"4930975385",field12:"4930975385"}]),F=function(f){T("sureData1",f),m.value=!1},c=function({current:f,limit:a}){console.log(f,a)},K=()=>{J.load(2,{time:500})},y=d(""),b=d("");function L(){y.value="",b.value=""}return D({layerShow:U}),(f,a)=>{const o=Q,n=X,u=dl,r=il,i=pl,g=rl,N=fl,P=ml,S=yl,Z=Y,p=h,I=sl,$=ll,x=el,q=_l,k=ul,M=nl,W=tl,j=ol,H=al;return O(),G(H,{modelValue:m.value,"onUpdate:modelValue":a[6]||(a[6]=s=>m.value=s),area:["1200px","70vh"],btn:f.action11,move:"",maxmin:"",title:"Premise Search"},{default:e(()=>[l(k,null,{default:e(()=>[l(q,{modelValue:v.value,"onUpdate:modelValue":a[4]||(a[4]=s=>v.value=s),onChange:c},{default:e(()=>[l(P,{title:"Premise Keys",id:1},{default:e(()=>[l(N,{size:"sm","label-width":110,"label-position":"left",allowClear:"",isLabelTooltip:""},{default:e(()=>[l(g,{border:!0,size:"sm",column:"2"},{default:e(()=>[l(u,null,{label:e(()=>a[7]||(a[7]=[t("span",null,"Premise ID",-1)])),default:e(()=>[l(n,null,{default:e(()=>[l(o,{modelValue:y.value,"onUpdate:modelValue":a[0]||(a[0]=s=>y.value=s),allowClear:""},null,8,["modelValue"])]),_:1})]),_:1}),l(u,null,{label:e(()=>a[8]||(a[8]=[t("span",null,"Premise Type",-1)])),default:e(()=>[l(n,null,{default:e(()=>[l(i,{allowClear:""},{default:e(()=>[l(r,{value:"1",label:""})]),_:1})]),_:1})]),_:1}),l(u,null,{label:e(()=>a[9]||(a[9]=[t("span",null,"Meter Number",-1)])),default:e(()=>[l(n,null,{default:e(()=>[l(o,{modelValue:b.value,"onUpdate:modelValue":a[1]||(a[1]=s=>b.value=s),allowClear:""},null,8,["modelValue"])]),_:1})]),_:1}),l(u,null,{label:e(()=>a[10]||(a[10]=[t("span",null,"Parent Premise ID",-1)])),default:e(()=>[l(n,null,{default:e(()=>[l(o,{allowClear:""})]),_:1})]),_:1}),l(u,{span:"1"},{label:e(()=>a[11]||(a[11]=[t("span",null,"AWS Ref. Number",-1)])),default:e(()=>[l(n,null,{default:e(()=>[l(o,{allowClear:""})]),_:1})]),_:1}),l(u,{span:"1"},{label:e(()=>a[12]||(a[12]=[t("span",null,"Route Code",-1)])),default:e(()=>[l(n,null,{default:e(()=>[l(o,{allowClear:""})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l(P,{title:"Premise Address",id:2},{default:e(()=>[l(N,{size:"sm","label-width":110,"label-position":"left",allowClear:"",isLabelTooltip:""},{default:e(()=>[l(g,{border:!0,size:"sm",column:"2"},{default:e(()=>[l(u,{span:"2"},{label:e(()=>a[13]||(a[13]=[t("span",null,"Language Type",-1)])),default:e(()=>[l(n,null,{default:e(()=>[l(Z,{name:"action",modelValue:V.value,"onUpdate:modelValue":a[2]||(a[2]=s=>V.value=s)},{default:e(()=>[l(S,{value:"1"},{default:e(()=>a[14]||(a[14]=[_("English")])),_:1}),l(S,{value:"2"},{default:e(()=>a[15]||(a[15]=[_("Chinese")])),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(u,{span:"2"},{label:e(()=>a[16]||(a[16]=[t("span",null,"Region/District/Sub-district",-1)])),default:e(()=>[l(n,null,{default:e(()=>[l(p,{style:{width:"100%"}},{default:e(()=>[l(i,{allowClear:""},{default:e(()=>[l(r,{value:"1",label:""})]),_:1}),l(i,{allowClear:""},{default:e(()=>[l(r,{value:"1",label:""})]),_:1}),l(i,{allowClear:""},{default:e(()=>[l(r,{value:"1",label:""})]),_:1})]),_:1})]),_:1})]),_:1}),l(u,{span:"2"},{label:e(()=>a[17]||(a[17]=[t("span",null,"Street",-1)])),default:e(()=>[l(n,null,{default:e(()=>[l(p,{style:{width:"100%"}},{default:e(()=>[l(o,{allowClear:"",placeholder:"Slreet No.Example: 1 or 1-20"}),l(o,{allowClear:"",placeholder:"Street Name"})]),_:1})]),_:1})]),_:1}),l(u,{span:"2"},{label:e(()=>a[18]||(a[18]=[t("span",null,"Estate/Village/Phase",-1)])),default:e(()=>[l(n,null,{default:e(()=>[l(p,{style:{width:"100%"}},{default:e(()=>[l(o,{allowClear:"",placeholder:"Estate / Village"}),l(o,{allowClear:"",placeholder:"Phase"})]),_:1})]),_:1})]),_:1}),l(u,{span:"2"},{label:e(()=>a[19]||(a[19]=[t("span",null,"Village/Place",-1)])),default:e(()=>[l(n,null,{default:e(()=>[l(p,{style:{width:"100%"}},{default:e(()=>[l(o,{allowClear:"",placeholder:"Village No .Place No. (Not For Used)",disabled:""}),l(o,{allowClear:"",placeholder:"Village Name/Place Name (No For Used)",disabled:""})]),_:1})]),_:1})]),_:1}),l(u,{span:"2"},{label:e(()=>a[20]||(a[20]=[t("span",null,"Block/House",-1)])),default:e(()=>[l(n,null,{default:e(()=>[l(p,{style:{width:"100%"}},{default:e(()=>[l(i,{allowClear:""},{default:e(()=>[l(r,{value:"1",label:""})]),_:1}),l(o,{allowClear:"",placeholder:""})]),_:1})]),_:1})]),_:1}),l(u,{span:"2"},{label:e(()=>a[21]||(a[21]=[t("span",null,"Building",-1)])),default:e(()=>[l(n,null,{default:e(()=>[l(o,{allowClear:"",placeholder:"Building"})]),_:1})]),_:1}),l(u,{span:"2"},{label:e(()=>a[22]||(a[22]=[t("span",null,"Floor No./Flat/Unit",-1)])),default:e(()=>[l(n,null,{default:e(()=>[l(p,{style:{width:"100%"}},{default:e(()=>[l(i,{allowClear:""},{default:e(()=>[l(r,{value:"1",label:""})]),_:1}),l(o,{allowClear:"",placeholder:""}),l(i,{allowClear:""},{default:e(()=>[l(r,{value:"1",label:""})]),_:1}),l(o,{allowClear:"",placeholder:""})]),_:1})]),_:1})]),_:1}),l(u,{span:"2"},{label:e(()=>a[23]||(a[23]=[t("span",null,"DDLot No.",-1)])),default:e(()=>[l(n,null,{default:e(()=>[l(p,{style:{width:"100%"}},{default:e(()=>[l(o,{allowClear:"",placeholder:"DD No (Not For Used)",disabled:""}),l(o,{allowClear:"",placeholder:"DD / Lot No."})]),_:1})]),_:1})]),_:1}),l(u,{span:"2"},{label:e(()=>a[24]||(a[24]=[t("span",null,"Site/Project/Incident Description",-1)])),default:e(()=>[l(n,null,{default:e(()=>[l(I,{placeholder:"Site/Project/Incident",style:{"min-height":"50px"}})]),_:1})]),_:1}),l(u,{span:"2"},{label:e(()=>a[25]||(a[25]=[t("span",null,"Contract No.",-1)])),default:e(()=>[l(n,null,{default:e(()=>[l(o,{allowClear:""})]),_:1})]),_:1}),l(u,null,{label:e(()=>a[26]||(a[26]=[t("span",null,"Obsoleted Premise(s)",-1)])),default:e(()=>[l(n,null,{default:e(()=>[l($,{name:"like",skin:"primary",modelValue:w.value,"onUpdate:modelValue":a[3]||(a[3]=s=>w.value=s)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),t("div",bl,[l(x,{type:"primary",onClick:K,size:"sm"},{default:e(()=>a[27]||(a[27]=[_("search")])),_:1}),l(x,{onClick:L,size:"sm"},{default:e(()=>a[28]||(a[28]=[_("reset")])),_:1})])]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(j,null,{default:e(()=>[l(W,{md:24},{default:e(()=>[l(k,null,{default:e(()=>[l(M,{page:z.value,columns:A,dataSource:E.value,resize:"","default-toolbar":B.value,selectedKeys:C.value,"onUpdate:selectedKeys":a[5]||(a[5]=s=>C.value=s),onRowDouble:F,onChange:c},null,8,["page","dataSource","default-toolbar","selectedKeys"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","btn"])}}};export{Ul as _};
