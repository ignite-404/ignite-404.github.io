import{a as t,o as Z,e as q,w as e,f as l,h as _,i as s,Z as J,k as O,q as A,K as E,C as I,R as L}from"./index-0f1dbffa.js";import{y as P,f as $}from"./index-15df4815.js";import{J as j}from"./index-2d4ddb61.js";import{V as F}from"./index-653c2f3d.js";import{n as H,Z as M}from"./index-203e73ba.js";/* empty css              */import{w as Q}from"./index-c88e3fd6.js";const W=s("span",null,"To Do Group Code",-1),X=s("span",null,"Obsolete",-1),Y=s("span",null,"Description",-1),ee=s("span",null,"Description(Chinese)",-1),le={class:"search-btn-box"},ie={__name:"doGroupCodeSearch",props:{},emits:["sureData"],setup(oe,{expose:h,emit:v}){const x=v,u=t(!1),C=()=>{u.value=!0},p=t(["1"]);t(!0);const k=t(["export"]),w=t({total:2,limit:10,current:2,layout:["page","limits","prev","next","count"]}),D=[{title:"To Do Group Code",key:"field1"},{title:"Description",key:"field2"},{title:"Description(Chinese)",key:"field3"},{title:"Obsolete",key:"field4"}],m=t([{field1:"xxxx",field2:"xxxx"}]),V=function(a){x("sureData",a),u.value=!1},g=function({current:a,limit:o}){console.log(a,o)},S=()=>{J.load(2,{time:500}),m.value.push({field1:"66565155",field2:"4930975385"})},T=t(""),i=t(!1);function K(){T.value="",i.value=""}return h({layerShow:C}),(a,o)=>{const d=O,c=A,r=H,G=E,R=M,f=I,z=Q,y=F,b=P,B=j,N=$,U=L;return Z(),q(U,{modelValue:u.value,"onUpdate:modelValue":o[2]||(o[2]=n=>u.value=n),area:["1200px","70vh"],btn:a.action11,move:"",maxmin:"",title:"To Do Group Code Search"},{default:e(()=>[l(N,null,{default:e(()=>[l(b,{md:24},{default:e(()=>[l(y,null,{default:e(()=>[l(z,{size:"sm","label-width":110,"label-position":"left",allowClear:"",isLabelTooltip:""},{default:e(()=>[l(R,{border:!0,size:"sm",column:"2"},{default:e(()=>[l(r,null,{label:e(()=>[W]),default:e(()=>[l(c,null,{default:e(()=>[l(d,{allowClear:""})]),_:1})]),_:1}),l(r,null,{label:e(()=>[X]),default:e(()=>[l(c,null,{default:e(()=>[l(G,{placeholder:"Please enter",name:"like",skin:"primary",modelValue:i.value,"onUpdate:modelValue":o[0]||(o[0]=n=>i.value=n)},{default:e(()=>[_(" Include")]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(r,null,{label:e(()=>[Y]),default:e(()=>[l(c,null,{default:e(()=>[l(d,{allowClear:""})]),_:1})]),_:1}),l(r,null,{label:e(()=>[ee]),default:e(()=>[l(c,null,{default:e(()=>[l(d,{allowClear:""})]),_:1})]),_:1})]),_:1}),s("div",le,[l(f,{type:"primary",onClick:S},{default:e(()=>[_("search")]),_:1}),l(f,{onClick:K},{default:e(()=>[_("reset")]),_:1})])]),_:1})]),_:1})]),_:1}),l(b,{md:24},{default:e(()=>[l(y,null,{default:e(()=>[l(B,{page:w.value,columns:D,dataSource:m.value,resize:"","default-toolbar":k.value,selectedKeys:p.value,"onUpdate:selectedKeys":o[1]||(o[1]=n=>p.value=n),onRowDouble:V,onChange:g},null,8,["page","dataSource","default-toolbar","selectedKeys"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","btn"])}}};export{ie as _};