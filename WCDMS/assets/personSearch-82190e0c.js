import{a as s,o as q,e as E,w as e,f as l,i as o,h as m,Z as G,k as $,K as L,m as F,q as H,C as J,R as M}from"./index-5ba83812.js";import{y as O,f as Q}from"./index-9c118bc9.js";import{Z as W}from"./index-a25747be.js";import{V as X}from"./index-70d2da72.js";import{n as Y,Z as h}from"./index-08f7b130.js";/* empty css              *//* empty css              */import{B as ll}from"./index-e1c7a2f1.js";import{w as el}from"./index-2b452765.js";const tl={class:"search-btn-box"},ml={__name:"personSearch",props:{},emits:["sureData"],setup(ol,{expose:x,emit:k}){const N=k,r=s(!1),V=()=>{r.value=!0},_=s({field5:!1,field6:!1}),y=s(["1"]);s(!0);const D=s(["export"]),S=s({total:2,limit:10,current:2,layout:["page","limits","prev","next","count"]}),T=[{title:"Surname/Company Name",width:"140px",key:"field1"},{title:"Given Name",width:"110px",key:"field2"},{title:"Presentation Name",width:"110px",key:"field3"},{title:"Person ID",key:"field4",ellipsisTooltip:!0,width:"110px"},{title:"Identification No.",key:"field5",ellipsisTooltip:!0,width:"110px"},{title:"Account ID",key:"field6",ellipsisTooltip:!0,width:"110px"},{title:"Customer Class",key:"field7",ellipsisTooltip:!0,width:"110px"},{title:"Service Status",key:"field8",ellipsisTooltip:!0,width:"110px"},{title:"Premise ID",key:"field9",ellipsisTooltip:!0,width:"110px"},{title:"Premise Address",key:"field10",ellipsisTooltip:!0,width:"110px"}],c=s([{field1:"Company Name",field2:"",field3:"",field4:"59595954",field5:"",field6:""}]),I=function(d){N("sureData",d),r.value=!1},P=function({current:d,limit:t}){console.log(d,t)},g=()=>{G.load(2,{time:500}),c.value.push({field1:"",field2:"",field3:"",field4:"",field5:"",field6:""})},p=s(""),A=s("");function z(){p.value="",A.value=""}return x({layerShow:V}),(d,t)=>{const n=$,B=L,f=F,a=H,u=Y,w=ll,K=h,b=J,Z=el,C=X,v=O,R=W,U=Q,j=M;return q(),E(j,{modelValue:r.value,"onUpdate:modelValue":t[3]||(t[3]=i=>r.value=i),area:["1200px","70vh"],btn:d.action11,move:"",maxmin:"",title:"Person Search"},{default:e(()=>[l(U,null,{default:e(()=>[l(v,{md:24},{default:e(()=>[l(C,null,{default:e(()=>[l(Z,{size:"sm","label-width":110,"label-position":"left",allowClear:"",isLabelTooltip:""},{default:e(()=>[l(K,{border:!0,size:"sm",column:"2"},{default:e(()=>[l(u,null,{label:e(()=>t[4]||(t[4]=[o("span",null,"Person ID",-1)])),default:e(()=>[l(a,null,{default:e(()=>[l(f,null,{default:e(()=>[l(n,{modelValue:p.value,"onUpdate:modelValue":t[0]||(t[0]=i=>p.value=i),allowClear:""},null,8,["modelValue"]),l(B,{name:"like",skin:"primary",class:"checkbox-bot",modelValue:_.value.field6,"onUpdate:modelValue":t[1]||(t[1]=i=>_.value.field6=i)},{default:e(()=>t[5]||(t[5]=[m("Advanced Person Search")])),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),l(u,null,{label:e(()=>t[6]||(t[6]=[o("span",null,"Customer Communication ID",-1)])),default:e(()=>[l(a,null,{default:e(()=>[l(n,{allowClear:""})]),_:1})]),_:1}),l(u,null,{label:e(()=>t[7]||(t[7]=[o("span",null,"Account ID",-1)])),default:e(()=>[l(a,null,{default:e(()=>[l(n,{allowClear:""})]),_:1})]),_:1}),l(u,null,{label:e(()=>t[8]||(t[8]=[o("span",null,"Premise ID",-1)])),default:e(()=>[l(a,null,{default:e(()=>[l(n,{allowClear:""})]),_:1})]),_:1}),l(u,null,{label:e(()=>t[9]||(t[9]=[o("span",null,"E-mail Address",-1)])),default:e(()=>[l(a,null,{default:e(()=>[l(n,{allowClear:""})]),_:1}),l(a)]),_:1}),l(u,null,{label:e(()=>t[10]||(t[10]=[o("span",null,"Presentation Name",-1)])),default:e(()=>[l(a,null,{default:e(()=>[l(n,{allowClear:""})]),_:1})]),_:1}),l(u,null,{label:e(()=>t[11]||(t[11]=[o("span",null,"Surname/Company Name",-1)])),default:e(()=>[l(a,null,{default:e(()=>[l(n,{allowClear:""})]),_:1})]),_:1}),l(u,null,{label:e(()=>t[12]||(t[12]=[o("span",null,"Given Name",-1)])),default:e(()=>[l(a,null,{default:e(()=>[l(n,{allowClear:""})]),_:1})]),_:1}),l(u,null,{label:e(()=>t[13]||(t[13]=[o("span",null,"Identification Type/No.",-1)])),default:e(()=>[l(a,null,{default:e(()=>[l(f,null,{default:e(()=>[l(w,{allowClear:""},{default:e(()=>t[14]||(t[14]=[o("i",{class:"iconfont icon-zanwushuju"},null,-1)])),_:1}),l(n,{allowClear:""})]),_:1})]),_:1})]),_:1}),l(u,null,{label:e(()=>t[15]||(t[15]=[o("span",null,"Contact Type/No.",-1)])),default:e(()=>[l(a,null,{default:e(()=>[l(f,null,{default:e(()=>[l(w,{allowClear:""},{default:e(()=>t[16]||(t[16]=[o("i",{class:"iconfont icon-zanwushuju"},null,-1)])),_:1}),l(n,{allowClear:""})]),_:1})]),_:1})]),_:1})]),_:1}),o("div",tl,[l(b,{type:"primary",onClick:g},{default:e(()=>t[17]||(t[17]=[m("search")])),_:1}),l(b,{onClick:z},{default:e(()=>t[18]||(t[18]=[m("reset")])),_:1})])]),_:1})]),_:1})]),_:1}),l(v,{md:24},{default:e(()=>[l(C,null,{default:e(()=>[l(R,{page:S.value,columns:T,dataSource:c.value,resize:"","default-toolbar":D.value,selectedKeys:y.value,"onUpdate:selectedKeys":t[2]||(t[2]=i=>y.value=i),onRowDouble:I,onChange:P},null,8,["page","dataSource","default-toolbar","selectedKeys"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","btn"])}}};export{ml as _};