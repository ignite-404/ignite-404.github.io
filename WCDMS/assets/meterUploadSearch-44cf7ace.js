import{a as i,o as z,e as q,w as l,f as e,i as o,h as C,Z as G,n as W,q as A,k as E,l as L,C as $,R as j}from"./index-5ba83812.js";import{y as F,f as H}from"./index-9c118bc9.js";import{Z as J}from"./index-a25747be.js";import{V as O}from"./index-70d2da72.js";import{n as Q,Z as X}from"./index-08f7b130.js";/* empty css              *//* empty css              */import{U as ll,B as el}from"./index-e1c7a2f1.js";import{w as tl}from"./index-2b452765.js";const ol={class:"point-cu"},al={class:"point-cu"},nl={class:"point-cu"},sl={class:"search-btn-box"},bl={__name:"meterUploadSearch",props:{},emits:["sureData"],setup(il,{expose:x,emit:k}){const T=k,d=i(!1),h=()=>{d.value=!0},f=i(["1"]);i(!0);const g=i(["export"]),M=i({total:2,limit:10,current:2,layout:["page","limits","prev","next","count"]}),R=[{title:"Reading Date/Time",width:"100px",key:"field1"},{title:"Meter Read Upload ID",width:"110px",key:"field2"},{title:"Meter Number",width:"110px",key:"field3"},{title:"Meter Read ID",key:"field4",ellipsisTooltip:!0,width:"110px"},{title:"Premise ID",key:"field5",ellipsisTooltip:!0,width:"110px"},{title:"Upload Status",key:"field6",ellipsisTooltip:!0,width:"110px"},{title:"To Do Group District",key:"field7",ellipsisTooltip:!0,width:"110px"}],_=i([{field1:"2023/12/06 11:04:27",field2:"228768516817",field3:"15250935",field4:"570981449550",field5:"8936450078",field6:"CP - Completed",field7:"D08 - District Wong Tai Sin"}]),S=function(u){T("sureData",u),d.value=!1},U=function({current:u,limit:t}){console.log(u,t)},V=()=>{G.load(2,{time:500}),_.value.push({field1:"2023/12/06 11:04:27",field2:"228768516817",field3:"15250935",field4:"570981449550",field5:"8936450078",field6:"CP - Completed",field7:"D08 - District Wong Tai Sin"})},Y=i(""),r=i("");function I(){Y.value="",r.value=""}return x({layerShow:h}),(u,t)=>{const c=W,a=A,n=Q,p=E,m=L,y=ll,b=el,B=X,w=$,N=tl,D=O,v=F,P=J,Z=H,K=j;return z(),q(K,{modelValue:d.value,"onUpdate:modelValue":t[2]||(t[2]=s=>d.value=s),area:["1200px","70vh"],btn:u.action11,move:"",maxmin:"",title:"Meter Read Upload Search"},{default:l(()=>[e(Z,null,{default:l(()=>[e(v,{md:24},{default:l(()=>[e(D,null,{default:l(()=>[e(N,{size:"sm","label-width":110,"label-position":"left",allowClear:"",isLabelTooltip:""},{default:l(()=>[e(B,{border:!0,size:"sm",column:"2"},{default:l(()=>[e(n,null,{label:l(()=>t[3]||(t[3]=[o("span",null,"Reading Date/Time",-1)])),default:l(()=>[e(a,null,{default:l(()=>[e(c,{style:{width:"100%"},placeholder:"YYYY/MM/DD hh:mm:ss",allowClear:""})]),_:1})]),_:1}),e(n,null,{label:l(()=>t[4]||(t[4]=[o("span",null,"To",-1)])),default:l(()=>[e(a,null,{default:l(()=>[e(c,{style:{width:"100%"},placeholder:"YYYY/MM/DD hh:mm:ss",allowClear:""})]),_:1})]),_:1}),e(n,null,{label:l(()=>t[5]||(t[5]=[o("span",null,"Meter Read Upload ID",-1)])),default:l(()=>[e(a,null,{default:l(()=>[e(p,{allowClear:""})]),_:1})]),_:1}),e(n,null,{label:l(()=>t[6]||(t[6]=[o("span",null,"Meter Number",-1)])),default:l(()=>[e(a,null,{default:l(()=>[e(p,{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=s=>r.value=s),allowClear:""},{append:l(({disabled:s})=>[o("span",ol,[e(m,{type:"layui-icon-search"})])]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(n,null,{label:l(()=>t[7]||(t[7]=[o("span",null,"Meter Read ID",-1)])),default:l(()=>[e(a,null,{default:l(()=>[e(p,{allowClear:""},{append:l(({disabled:s})=>[o("span",al,[e(m,{type:"layui-icon-search"})])]),_:1})]),_:1})]),_:1}),e(n,null,{label:l(()=>t[8]||(t[8]=[o("span",null,"Pemise ID",-1)])),default:l(()=>[e(a,null,{default:l(()=>[e(p,{allowClear:""},{append:l(({disabled:s})=>[o("span",nl,[e(m,{type:"layui-icon-search"})])]),_:1})]),_:1})]),_:1}),e(n,null,{label:l(()=>t[9]||(t[9]=[o("span",null,"Upload Status",-1)])),default:l(()=>[e(a,null,{default:l(()=>[e(b,{allowClear:""},{default:l(()=>[e(y,{value:"1",label:"CP - Completed"})]),_:1})]),_:1})]),_:1}),e(n,null,{label:l(()=>t[10]||(t[10]=[o("span",null,"To Do Group District",-1)])),default:l(()=>[e(a,null,{default:l(()=>[e(b,{allowClear:""},{default:l(()=>[e(y,{value:"1",label:""})]),_:1})]),_:1})]),_:1})]),_:1}),o("div",sl,[e(w,{type:"primary",onClick:V},{default:l(()=>t[11]||(t[11]=[C("search")])),_:1}),e(w,{onClick:I},{default:l(()=>t[12]||(t[12]=[C("reset")])),_:1})])]),_:1})]),_:1})]),_:1}),e(v,{md:24},{default:l(()=>[e(D,null,{default:l(()=>[e(P,{page:M.value,columns:R,dataSource:_.value,resize:"","default-toolbar":g.value,selectedKeys:f.value,"onUpdate:selectedKeys":t[1]||(t[1]=s=>f.value=s),onRowDouble:S,onChange:U},null,8,["page","dataSource","default-toolbar","selectedKeys"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","btn"])}}};export{bl as _};