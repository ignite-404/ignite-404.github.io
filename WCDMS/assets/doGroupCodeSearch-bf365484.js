import{a as t,o as q,e as O,w as e,f as o,i as s,h as m,Z as h,k as A,q as E,K as I,C as L,R as P}from"./index-237ca1fa.js";import{y as $,f as j}from"./index-fb954438.js";import{Z as F}from"./index-279d97c1.js";import{V as H}from"./index-6bd32735.js";import{n as J,Z as M}from"./index-48928b4c.js";/* empty css              */import{w as Q}from"./index-b94db6d9.js";const W={class:"search-btn-box"},se={__name:"doGroupCodeSearch",props:{},emits:["sureData"],setup(X,{expose:v,emit:x}){const C=x,u=t(!1),k=()=>{u.value=!0},c=t(["1"]);t(!0);const w=t(["export"]),D=t({total:2,limit:10,current:2,layout:["page","limits","prev","next","count"]}),V=[{title:"To Do Group Code",key:"field1"},{title:"Description",key:"field2"},{title:"Description(Chinese)",key:"field3"},{title:"Obsolete",key:"field4"}],f=t([{field1:"xxxx",field2:"xxxx"}]),g=function(a){C("sureData",a),u.value=!1},S=function({current:a,limit:l}){console.log(a,l)},T=()=>{h.load(2,{time:500}),f.value.push({field1:"66565155",field2:"4930975385"})},K=t(""),d=t(!1);function Z(){K.value="",d.value=""}return v({layerShow:k}),(a,l)=>{const p=A,r=E,i=J,G=I,R=M,_=L,z=Q,y=H,b=$,B=F,N=j,U=P;return q(),O(U,{modelValue:u.value,"onUpdate:modelValue":l[2]||(l[2]=n=>u.value=n),area:["1200px","70vh"],btn:a.action11,move:"",maxmin:"",title:"To Do Group Code Search"},{default:e(()=>[o(N,null,{default:e(()=>[o(b,{md:24},{default:e(()=>[o(y,null,{default:e(()=>[o(z,{size:"sm","label-width":110,"label-position":"left",allowClear:"",isLabelTooltip:""},{default:e(()=>[o(R,{border:!0,size:"sm",column:"2"},{default:e(()=>[o(i,null,{label:e(()=>l[3]||(l[3]=[s("span",null,"To Do Group Code",-1)])),default:e(()=>[o(r,null,{default:e(()=>[o(p,{allowClear:""})]),_:1})]),_:1}),o(i,null,{label:e(()=>l[4]||(l[4]=[s("span",null,"Obsolete",-1)])),default:e(()=>[o(r,null,{default:e(()=>[o(G,{placeholder:"Please enter",name:"like",skin:"primary",modelValue:d.value,"onUpdate:modelValue":l[0]||(l[0]=n=>d.value=n)},{default:e(()=>l[5]||(l[5]=[m(" Include")])),_:1},8,["modelValue"])]),_:1})]),_:1}),o(i,null,{label:e(()=>l[6]||(l[6]=[s("span",null,"Description",-1)])),default:e(()=>[o(r,null,{default:e(()=>[o(p,{allowClear:""})]),_:1})]),_:1}),o(i,null,{label:e(()=>l[7]||(l[7]=[s("span",null,"Description(Chinese)",-1)])),default:e(()=>[o(r,null,{default:e(()=>[o(p,{allowClear:""})]),_:1})]),_:1})]),_:1}),s("div",W,[o(_,{type:"primary",onClick:T},{default:e(()=>l[8]||(l[8]=[m("search")])),_:1}),o(_,{onClick:Z},{default:e(()=>l[9]||(l[9]=[m("reset")])),_:1})])]),_:1})]),_:1})]),_:1}),o(b,{md:24},{default:e(()=>[o(y,null,{default:e(()=>[o(B,{page:D.value,columns:V,dataSource:f.value,resize:"","default-toolbar":w.value,selectedKeys:c.value,"onUpdate:selectedKeys":l[1]||(l[1]=n=>c.value=n),onRowDouble:g,onChange:S},null,8,["page","dataSource","default-toolbar","selectedKeys"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","btn"])}}};export{se as _};