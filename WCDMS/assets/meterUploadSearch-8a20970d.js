import{a as i,o as Z,e as q,w as e,f as l,i as t,h as v,Z as G,n as J,q as W,k as A,l as E,C as L,R as $}from"./index-0f1dbffa.js";import{y as j,f as F}from"./index-15df4815.js";import{J as H}from"./index-2d4ddb61.js";import{V as O}from"./index-653c2f3d.js";import{n as Q,Z as X}from"./index-203e73ba.js";/* empty css              *//* empty css              */import{U as ee,B as le}from"./index-09643b1a.js";import{w as te}from"./index-c88e3fd6.js";const oe=t("span",null,"Reading Date/Time",-1),ae=t("span",null,"To",-1),ne=t("span",null,"Meter Read Upload ID",-1),se=t("span",null,"Meter Number",-1),ie={class:"point-cu"},de=t("span",null,"Meter Read ID",-1),ue={class:"point-cu"},ce=t("span",null,"Pemise ID",-1),_e={class:"point-cu"},pe=t("span",null,"Upload Status",-1),re=t("span",null,"To Do Group District",-1),me={class:"search-btn-box"},Te={__name:"meterUploadSearch",props:{},emits:["sureData"],setup(fe,{expose:C,emit:x}){const k=x,u=i(!1),T=()=>{u.value=!0},r=i(["1"]);i(!0);const g=i(["export"]),M=i({total:2,limit:10,current:2,layout:["page","limits","prev","next","count"]}),R=[{title:"Reading Date/Time",width:"100px",key:"field1"},{title:"Meter Read Upload ID",width:"110px",key:"field2"},{title:"Meter Number",width:"110px",key:"field3"},{title:"Meter Read ID",key:"field4",ellipsisTooltip:!0,width:"110px"},{title:"Premise ID",key:"field5",ellipsisTooltip:!0,width:"110px"},{title:"Upload Status",key:"field6",ellipsisTooltip:!0,width:"110px"},{title:"To Do Group District",key:"field7",ellipsisTooltip:!0,width:"110px"}],m=i([{field1:"2023/12/06 11:04:27",field2:"228768516817",field3:"15250935",field4:"570981449550",field5:"8936450078",field6:"CP - Completed",field7:"D08 - District Wong Tai Sin"}]),S=function(d){k("sureData",d),u.value=!1},U=function({current:d,limit:o}){console.log(d,o)},V=()=>{G.load(2,{time:500}),m.value.push({field1:"2023/12/06 11:04:27",field2:"228768516817",field3:"15250935",field4:"570981449550",field5:"8936450078",field6:"CP - Completed",field7:"D08 - District Wong Tai Sin"})},Y=i(""),_=i("");function I(){Y.value="",_.value=""}return C({layerShow:T}),(d,o)=>{const f=J,a=W,n=Q,c=A,p=E,h=ee,y=le,B=X,b=L,N=te,w=O,D=j,P=H,K=F,z=$;return Z(),q(z,{modelValue:u.value,"onUpdate:modelValue":o[2]||(o[2]=s=>u.value=s),area:["1200px","70vh"],btn:d.action11,move:"",maxmin:"",title:"Meter Read Upload Search"},{default:e(()=>[l(K,null,{default:e(()=>[l(D,{md:24},{default:e(()=>[l(w,null,{default:e(()=>[l(N,{size:"sm","label-width":110,"label-position":"left",allowClear:"",isLabelTooltip:""},{default:e(()=>[l(B,{border:!0,size:"sm",column:"2"},{default:e(()=>[l(n,null,{label:e(()=>[oe]),default:e(()=>[l(a,null,{default:e(()=>[l(f,{style:{width:"100%"},placeholder:"YYYY/MM/DD hh:mm:ss",allowClear:""})]),_:1})]),_:1}),l(n,null,{label:e(()=>[ae]),default:e(()=>[l(a,null,{default:e(()=>[l(f,{style:{width:"100%"},placeholder:"YYYY/MM/DD hh:mm:ss",allowClear:""})]),_:1})]),_:1}),l(n,null,{label:e(()=>[ne]),default:e(()=>[l(a,null,{default:e(()=>[l(c,{allowClear:""})]),_:1})]),_:1}),l(n,null,{label:e(()=>[se]),default:e(()=>[l(a,null,{default:e(()=>[l(c,{modelValue:_.value,"onUpdate:modelValue":o[0]||(o[0]=s=>_.value=s),allowClear:""},{append:e(({disabled:s})=>[t("span",ie,[l(p,{type:"layui-icon-search"})])]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(n,null,{label:e(()=>[de]),default:e(()=>[l(a,null,{default:e(()=>[l(c,{allowClear:""},{append:e(({disabled:s})=>[t("span",ue,[l(p,{type:"layui-icon-search"})])]),_:1})]),_:1})]),_:1}),l(n,null,{label:e(()=>[ce]),default:e(()=>[l(a,null,{default:e(()=>[l(c,{allowClear:""},{append:e(({disabled:s})=>[t("span",_e,[l(p,{type:"layui-icon-search"})])]),_:1})]),_:1})]),_:1}),l(n,null,{label:e(()=>[pe]),default:e(()=>[l(a,null,{default:e(()=>[l(y,{allowClear:""},{default:e(()=>[l(h,{value:"1",label:"CP - Completed"})]),_:1})]),_:1})]),_:1}),l(n,null,{label:e(()=>[re]),default:e(()=>[l(a,null,{default:e(()=>[l(y,{allowClear:""},{default:e(()=>[l(h,{value:"1",label:""})]),_:1})]),_:1})]),_:1})]),_:1}),t("div",me,[l(b,{type:"primary",onClick:V},{default:e(()=>[v("search")]),_:1}),l(b,{onClick:I},{default:e(()=>[v("reset")]),_:1})])]),_:1})]),_:1})]),_:1}),l(D,{md:24},{default:e(()=>[l(w,null,{default:e(()=>[l(P,{page:M.value,columns:R,dataSource:m.value,resize:"","default-toolbar":g.value,selectedKeys:r.value,"onUpdate:selectedKeys":o[1]||(o[1]=s=>r.value=s),onRowDouble:S,onChange:U},null,8,["page","dataSource","default-toolbar","selectedKeys"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","btn"])}}};export{Te as _};