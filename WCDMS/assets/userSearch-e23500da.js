import{a as o,o as L,e as T,w as e,f as l,i as a,h as y,Z as q,k as F,q as I,C as A,R as E}from"./index-5ba83812.js";import{y as $,f as j}from"./index-9c118bc9.js";import{Z as G}from"./index-a25747be.js";import{V as H}from"./index-70d2da72.js";import{n as J,Z as M}from"./index-08f7b130.js";import{w as O}from"./index-2b452765.js";const P={class:"search-btn-box"},oe={__name:"userSearch",props:{},emits:["sureData"],setup(Q,{expose:b,emit:C}){const v=C,i=o(!1),x=()=>{i.value=!0},d=o(["1"]);o(!0);const w=o(["export"]),k=o({total:2,limit:10,current:2,layout:["page","limits","prev","next","count"]}),N=[{title:"User ID",key:"field1"},{title:"Last Name",key:"field2"},{title:"Last Name(Chinese)",key:"field3"},{title:"First Name",key:"field4"},{title:"First Name(Chinese)",key:"field6"}],f=o([{field1:"xxxx",field2:"xxxx"}]),S=function(n){v("sureData",n),i.value=!1},g=function({current:n,limit:t}){console.log(n,t)},V=()=>{q.load(2,{time:500}),f.value.push({field1:"66565155",field2:"4930975385"})},D=o(""),Z=o(!1);function K(){D.value="",Z.value=""}return b({layerShow:x}),(n,t)=>{const s=F,u=I,r=J,R=M,p=A,U=O,_=H,c=$,h=G,z=j,B=E;return L(),T(B,{modelValue:i.value,"onUpdate:modelValue":t[1]||(t[1]=m=>i.value=m),area:["1200px","70vh"],btn:n.action11,move:"",maxmin:"",title:"Customer Communication Search"},{default:e(()=>[l(z,null,{default:e(()=>[l(c,{md:24},{default:e(()=>[l(_,null,{default:e(()=>[l(U,{size:"sm","label-width":110,"label-position":"left",allowClear:"",isLabelTooltip:""},{default:e(()=>[l(R,{border:!0,size:"sm",column:"2"},{default:e(()=>[l(r,null,{label:e(()=>t[2]||(t[2]=[a("span",null,"User ID",-1)])),default:e(()=>[l(u,null,{default:e(()=>[l(s,{allowClear:""})]),_:1})]),_:1}),l(r,null,{label:e(()=>t[3]||(t[3]=[a("span",null,"Surname",-1)])),default:e(()=>[l(u,null,{default:e(()=>[l(s,{allowClear:""})]),_:1})]),_:1}),l(r,null,{label:e(()=>t[4]||(t[4]=[a("span",null,"Name",-1)])),default:e(()=>[l(u,null,{default:e(()=>[l(s,{allowClear:""})]),_:1})]),_:1}),l(r,null,{label:e(()=>t[5]||(t[5]=[a("span",null,"Surname(Chinese)",-1)])),default:e(()=>[l(u,null,{default:e(()=>[l(s,{allowClear:""})]),_:1})]),_:1}),l(r,null,{label:e(()=>t[6]||(t[6]=[a("span",null,"Name(Chinese)",-1)])),default:e(()=>[l(u,null,{default:e(()=>[l(s,{allowClear:""})]),_:1})]),_:1})]),_:1}),a("div",P,[l(p,{type:"primary",onClick:V},{default:e(()=>t[7]||(t[7]=[y("search")])),_:1}),l(p,{onClick:K},{default:e(()=>t[8]||(t[8]=[y("reset")])),_:1})])]),_:1})]),_:1})]),_:1}),l(c,{md:24},{default:e(()=>[l(_,null,{default:e(()=>[l(h,{page:k.value,columns:N,dataSource:f.value,resize:"","default-toolbar":w.value,selectedKeys:d.value,"onUpdate:selectedKeys":t[0]||(t[0]=m=>d.value=m),onRowDouble:S,onChange:g},null,8,["page","dataSource","default-toolbar","selectedKeys"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","btn"])}}};export{oe as _};
