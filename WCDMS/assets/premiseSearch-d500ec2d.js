import{a as d,o as H,e as O,w as e,f as l,h as f,i as a,Z as j,k as G,q as Q,at as X,m as Y,K as ll,C as el,R as al}from"./index-0f1dbffa.js";import{y as tl,f as ol}from"./index-15df4815.js";import{J as nl}from"./index-2d4ddb61.js";import{V as sl}from"./index-653c2f3d.js";import{$ as ul,B as dl}from"./index-4a777da9.js";/* empty css              */import{W as il}from"./index-96f6a96b.js";import{n as _l,Z as rl}from"./index-203e73ba.js";/* empty css              */import{U as pl,B as cl}from"./index-09643b1a.js";import{w as fl}from"./index-c88e3fd6.js";import{E as ml}from"./index2-f5b11353.js";const yl=a("span",null,"Premise ID",-1),bl=a("span",null,"Premise Type",-1),hl=a("span",null,"Meter Number",-1),wl=a("span",null,"Parent Premise ID",-1),Cl=a("span",null,"AWS Ref. Number",-1),vl=a("span",null,"Language Type",-1),Vl=a("span",null,"Region/Dislrict/Sub-district",-1),gl=a("span",null,"Sireet",-1),Nl=a("span",null,"Estate/Village/Phase",-1),kl=a("span",null,"Village/Place",-1),xl=a("span",null,"Block/House",-1),Dl=a("span",null,"Building",-1),Pl=a("span",null,"Floor No .Flat/Unit",-1),Sl=a("span",null,"DDLot No.",-1),Rl=a("span",null,"DDLot No.",-1),Tl=a("span",null,"Contract No.",-1),Ul=a("span",null,"Obsoleted Premise(s)",-1),Bl={class:"search-btn-box"},Hl={__name:"premiseSearch",props:{},emits:["sureData"],setup(zl,{expose:P,emit:S}){const R=S,c=d(!1),b=d(!1),T=()=>{c.value=!0},h=d(["1"]);d(!0);const U=d(["export"]),B=d({total:2,limit:10,current:2,layout:["page","limits","prev","next","count"]}),w=d([1,2]),C=d("1"),z=[{title:"Premise ID",width:"100px",key:"field1",sort:"ascending"},{title:"Premise Type",key:"field2"},{title:"Address",width:"110px"},{title:"Supply Type",key:"field4",ellipsisTooltip:!0},{title:"Meter ReadCycle",key:"field5",ellipsisTooltip:!0},{title:"Read Route",key:"field6",ellipsisTooltip:!0,width:"110px"}],A=d([{field1:"66565155",field2:"4930975385",field3:"2024-08-12",field4:"Supply Type: Fresh Water, Meter Read Cycle: 01; Read Route: A46305; RouteSequence: 4180",field5:"45545",field6:"2",field7:"0005123268",field8:"FLATB",field9:"2",field10:"AZER15",field11:"4930975385",field12:"4930975385"}]),E=function(p){R("sureData1",p),c.value=!1},v=function({current:p,limit:s}){console.log(p,s)},F=()=>{j.load(2,{time:500})},m=d(""),y=d("");function L(){m.value="",y.value=""}return P({layerShow:T}),(p,s)=>{const t=G,o=Q,n=_l,i=pl,_=cl,V=rl,g=fl,N=ul,k=ml,K=X,r=Y,Z=il,$=ll,x=el,q=dl,D=sl,I=nl,M=tl,W=ol,J=al;return H(),O(J,{modelValue:c.value,"onUpdate:modelValue":s[6]||(s[6]=u=>c.value=u),area:["1200px","70vh"],btn:p.action11,move:"",maxmin:"",title:"Premise Search"},{default:e(()=>[l(D,null,{default:e(()=>[l(q,{modelValue:w.value,"onUpdate:modelValue":s[4]||(s[4]=u=>w.value=u),onChange:v},{default:e(()=>[l(N,{title:"Premise keys",id:1},{default:e(()=>[l(g,{size:"sm","label-width":110,"label-position":"left",allowClear:"",isLabelTooltip:""},{default:e(()=>[l(V,{border:!0,size:"sm",column:"2"},{default:e(()=>[l(n,null,{label:e(()=>[yl]),default:e(()=>[l(o,null,{default:e(()=>[l(t,{modelValue:m.value,"onUpdate:modelValue":s[0]||(s[0]=u=>m.value=u),allowClear:""},null,8,["modelValue"])]),_:1})]),_:1}),l(n,null,{label:e(()=>[bl]),default:e(()=>[l(o,null,{default:e(()=>[l(_,{allowClear:""},{default:e(()=>[l(i,{value:"1",label:""})]),_:1})]),_:1})]),_:1}),l(n,null,{label:e(()=>[hl]),default:e(()=>[l(o,null,{default:e(()=>[l(t,{modelValue:y.value,"onUpdate:modelValue":s[1]||(s[1]=u=>y.value=u),allowClear:""},null,8,["modelValue"])]),_:1})]),_:1}),l(n,null,{label:e(()=>[wl]),default:e(()=>[l(o,null,{default:e(()=>[l(t,{allowClear:""})]),_:1})]),_:1}),l(n,{span:"1"},{label:e(()=>[Cl]),default:e(()=>[l(o,null,{default:e(()=>[l(t,{allowClear:""})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l(N,{title:"Premise Address",id:2},{default:e(()=>[l(g,{size:"sm","label-width":110,"label-position":"left",allowClear:"",isLabelTooltip:""},{default:e(()=>[l(V,{border:!0,size:"sm",column:"2"},{default:e(()=>[l(n,{span:"2"},{label:e(()=>[vl]),default:e(()=>[l(o,null,{default:e(()=>[l(K,{name:"action",modelValue:C.value,"onUpdate:modelValue":s[2]||(s[2]=u=>C.value=u)},{default:e(()=>[l(k,{value:"1"},{default:e(()=>[f("English")]),_:1}),l(k,{value:"2"},{default:e(()=>[f("Chinese")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(n,{span:"2"},{label:e(()=>[Vl]),default:e(()=>[l(o,null,{default:e(()=>[l(r,{style:{width:"100%"}},{default:e(()=>[l(_,{allowClear:""},{default:e(()=>[l(i,{value:"1",label:""})]),_:1}),l(_,{allowClear:""},{default:e(()=>[l(i,{value:"1",label:""})]),_:1}),l(_,{allowClear:""},{default:e(()=>[l(i,{value:"1",label:""})]),_:1})]),_:1})]),_:1})]),_:1}),l(n,{span:"2"},{label:e(()=>[gl]),default:e(()=>[l(o,null,{default:e(()=>[l(r,{style:{width:"100%"}},{default:e(()=>[l(t,{allowClear:"",placeholder:"Slreet No.Example: 1 or 1-20"}),l(t,{allowClear:"",placeholder:"Street Name"})]),_:1})]),_:1})]),_:1}),l(n,{span:"2"},{label:e(()=>[Nl]),default:e(()=>[l(o,null,{default:e(()=>[l(r,{style:{width:"100%"}},{default:e(()=>[l(t,{allowClear:"",placeholder:"Estate / Village"}),l(t,{allowClear:"",placeholder:"Phase"})]),_:1})]),_:1})]),_:1}),l(n,{span:"2"},{label:e(()=>[kl]),default:e(()=>[l(o,null,{default:e(()=>[l(r,{style:{width:"100%"}},{default:e(()=>[l(t,{allowClear:"",placeholder:"Village No .Place No. (Not For Used)",disabled:""}),l(t,{allowClear:"",placeholder:"Village Name/Place Name (No For Used)",disabled:""})]),_:1})]),_:1})]),_:1}),l(n,{span:"2"},{label:e(()=>[xl]),default:e(()=>[l(o,null,{default:e(()=>[l(r,{style:{width:"100%"}},{default:e(()=>[l(_,{allowClear:""},{default:e(()=>[l(i,{value:"1",label:""})]),_:1}),l(t,{allowClear:"",placeholder:""})]),_:1})]),_:1})]),_:1}),l(n,{span:"2"},{label:e(()=>[Dl]),default:e(()=>[l(o,null,{default:e(()=>[l(t,{allowClear:"",placeholder:"Building"})]),_:1})]),_:1}),l(n,{span:"2"},{label:e(()=>[Pl]),default:e(()=>[l(o,null,{default:e(()=>[l(r,{style:{width:"100%"}},{default:e(()=>[l(_,{allowClear:""},{default:e(()=>[l(i,{value:"1",label:""})]),_:1}),l(t,{allowClear:"",placeholder:""}),l(_,{allowClear:""},{default:e(()=>[l(i,{value:"1",label:""})]),_:1}),l(t,{allowClear:"",placeholder:""})]),_:1})]),_:1})]),_:1}),l(n,{span:"2"},{label:e(()=>[Sl]),default:e(()=>[l(o,null,{default:e(()=>[l(r,{style:{width:"100%"}},{default:e(()=>[l(t,{allowClear:"",placeholder:"DD No (Not For Used)",disabled:""}),l(t,{allowClear:"",placeholder:"DD / Lot No."})]),_:1})]),_:1})]),_:1}),l(n,{span:"2"},{label:e(()=>[Rl]),default:e(()=>[l(o,null,{default:e(()=>[l(Z,{placeholder:"Site/Profect/lncident",style:{"min-height":"50px"}})]),_:1})]),_:1}),l(n,{span:"2"},{label:e(()=>[Tl]),default:e(()=>[l(o,null,{default:e(()=>[l(t,{allowClear:""})]),_:1})]),_:1}),l(n,null,{label:e(()=>[Ul]),default:e(()=>[l(o,null,{default:e(()=>[l($,{name:"like",skin:"primary",modelValue:b.value,"onUpdate:modelValue":s[3]||(s[3]=u=>b.value=u)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),a("div",Bl,[l(x,{type:"primary",onClick:F,size:"sm"},{default:e(()=>[f("search")]),_:1}),l(x,{onClick:L,size:"sm"},{default:e(()=>[f("reset")]),_:1})])]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(W,null,{default:e(()=>[l(M,{md:24},{default:e(()=>[l(D,null,{default:e(()=>[l(I,{page:B.value,columns:z,dataSource:A.value,resize:"","default-toolbar":U.value,selectedKeys:h.value,"onUpdate:selectedKeys":s[5]||(s[5]=u=>h.value=u),onRowDouble:E,onChange:v},null,8,["page","dataSource","default-toolbar","selectedKeys"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","btn"])}}};export{Hl as _};