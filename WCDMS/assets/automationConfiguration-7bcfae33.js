import{a as t,o as s,e as x,w as e,f as l,i as r,c as w,t as z,h as D,p as Z,Z as I,l as H,E as F,m as O,k as N,K as q,C as Q,R as j,_ as te,F as K,M as ae,q as X,u as de,s as ue}from"./index-5ba83812.js";import{c as re}from"./index-f7d389ff.js";import{y as W,f as Y}from"./index-9c118bc9.js";/* empty css              */import{n as ee,Z as le}from"./index-08f7b130.js";/* empty css              */import{V as B}from"./index-70d2da72.js";import{_ as ne}from"./codeSearch-c124819f.js";import{Z as M}from"./index-a25747be.js";/* empty css              */import{U as ce,B as G}from"./index-e1c7a2f1.js";import{w as oe}from"./index-2b452765.js";import{_ as pe}from"./doTypeSearch-81e58717.js";import"./index2-75365c6f.js";import"./index2-ab9f2a8e.js";const me={class:"circle-btn"},_e={key:1},fe={key:1},ye={key:1},ke={key:1},Ve={__name:"inputParameter",setup(L){const C=t({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),A=[{title:"Input Parameter",width:"240px",key:"name",customSlot:"name"},{title:"Default Parameter Value",key:"description",customSlot:"description",width:"240px"},{title:"Required",key:"weight",width:"120px",customSlot:"weight"},{title:"Remove",key:"remark",ellipsisTooltip:!0,customSlot:"remark",width:"120px"},{title:"handles",width:"180px",key:"operate",customSlot:"operate",ellipsisTooltip:!0,fixed:"right"}],c=t([]),U=n=>{n.isEdit=!0},E=n=>{n.isEdit=!1},P=n=>{I.confirm("Are you sure to delete this data?",{title:"tips",icon:3,btn:[{text:"confirm",callback:()=>{c.value.forEach((V,o)=>{V.id===n.id&&(c.value.splice(o,1),C.value.total--)}),I.closeAll()}},{text:"cancel",callback:()=>{I.closeAll()}}]})},S=()=>{c.value.push({id:(c.value.length+1).toString(),name:"",description:"",weight:!1,remark:!1,isEdit:!0}),C.value.total++};return(n,V)=>{const o=H,y=F,k=O,p=N,v=q,m=Q,g=M,R=B;return s(),x(R,{title:"Input Parameter(s)"},{extra:e(()=>[l(k,null,{default:e(()=>[l(y,{position:"top",content:"export","is-dark":""},{default:e(()=>[r("div",me,[l(o,{type:"layui-icon-export"})])]),_:1}),l(y,{position:"top",content:"create","is-dark":""},{default:e(()=>[r("div",{onClick:S,class:"circle-btn"},[l(o,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:e(()=>[l(g,{columns:A,"data-source":c.value,page:C.value,resize:""},{name:e(({data:i})=>[i.isEdit?(s(),x(p,{key:0,allowClear:"",modelValue:i.name,"onUpdate:modelValue":u=>i.name=u,size:"sm"},null,8,["modelValue","onUpdate:modelValue"])):(s(),w("span",_e,z(i.description),1))]),description:e(({data:i})=>[i.isEdit?(s(),x(p,{key:0,allowClear:"",modelValue:i.description,"onUpdate:modelValue":u=>i.description=u,size:"sm"},null,8,["modelValue","onUpdate:modelValue"])):(s(),w("span",fe,z(i.description),1))]),weight:e(({data:i})=>[i.isEdit?(s(),x(v,{key:0,name:"like",skin:"primary",modelValue:i.weight,"onUpdate:modelValue":u=>i.weight=u},null,8,["modelValue","onUpdate:modelValue"])):(s(),w("span",ye,z(i.weight?"Y-Yes":"N-No"),1))]),remark:e(({data:i})=>[i.isEdit?(s(),x(v,{key:0,name:"like",skin:"primary",modelValue:i.remark,"onUpdate:modelValue":u=>i.remark=u},null,8,["modelValue","onUpdate:modelValue"])):(s(),w("span",ke,z(i.remark?"Y-Yes":"N-No"),1))]),operate:e(({data:i})=>[i.isEdit?Z("",!0):(s(),x(m,{key:0,type:"primary",size:"xs",onClick:u=>U(i)},{default:e(()=>V[0]||(V[0]=[D(" Edit ")])),_:2},1032,["onClick"])),i.isEdit?(s(),x(m,{key:1,type:"primary",size:"xs",onClick:u=>E(i)},{default:e(()=>V[1]||(V[1]=[D(" Save ")])),_:2},1032,["onClick"])):Z("",!0),l(m,{type:"danger",size:"xs",onClick:u=>P(i)},{default:e(()=>V[2]||(V[2]=[D(" Delete ")])),_:2},1032,["onClick"])]),_:1},8,["data-source","page"])]),_:1})}}},ve={__name:"condition",props:{},emits:["sureData"],setup(L,{expose:C,emit:A}){const c=t(!1),U=()=>{c.value=!0},E=t([{text:"Confirm",callback:()=>{c.value=!1}},{text:"Cancel",callback:()=>{c.value=!1}}]);t(["1"]),t(!0),t(["export"]);const P=[{title:"Parameter Code/Variable",width:"150px",key:"field1",customSlot:"field1"},{title:"Operator",width:"110px",key:"field2",customSlot:"field2"},{title:"Parameter Value",width:"110px",key:"field3",customSlot:"field3"},{title:"Remove",key:"field4",width:"110px",customSlot:"field4"}],S=t([{field1:"",field2:"",field3:"",field4:!1}]),n=function({current:o,limit:y}){console.log(o,y)},V=()=>{S.value.push({field1:"",field2:"",field3:"",field4:!1})};return t(""),t(""),C({layerShow:U}),(o,y)=>{const k=H,p=F,v=O,m=N,g=ce,R=G,i=q,u=M,d=B,h=W,$=Y,_=j;return s(),x(_,{modelValue:c.value,"onUpdate:modelValue":y[0]||(y[0]=f=>c.value=f),area:["1000px","70vh"],btn:E.value,move:"",maxmin:"",title:"API Code - PBL-ACTCHK"},{default:e(()=>[l($,null,{default:e(()=>[l(h,{md:24},{default:e(()=>[l(d,{title:"Condition"},{extra:e(()=>[l(v,null,{default:e(()=>[l(p,{position:"top",content:"create","is-dark":""},{default:e(()=>[r("div",{onClick:V,class:"circle-btn"},[l(k,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:e(()=>[l(u,{columns:P,dataSource:S.value,resize:"",onChange:n},{field1:e(({data:f})=>[l(m,{allowClear:"",modelValue:f.field1,"onUpdate:modelValue":T=>f.field1=T,size:"sm"},null,8,["modelValue","onUpdate:modelValue"])]),field2:e(({data:f})=>[l(R,{modelValue:f.field2,"onUpdate:modelValue":T=>f.field2=T,size:"sm","allow-clear":!0},{default:e(()=>[l(g,{value:"=",label:"="})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),field3:e(({data:f})=>[l(m,{allowClear:"",modelValue:f.field3,"onUpdate:modelValue":T=>f.field3=T,size:"sm"},null,8,["modelValue","onUpdate:modelValue"])]),field4:e(({data:f})=>[l(i,{name:"like",skin:"primary",modelValue:f.field4,"onUpdate:modelValue":T=>f.field4=T},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["dataSource"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","btn"])}}};const we={class:"descriptions-flex"},xe={__name:"parameter",props:{},emits:["sureData"],setup(L,{expose:C,emit:A}){const c=t(!1),U=()=>{c.value=!0},E=t([{text:"OK",callback:()=>{}}]);t(["1"]),t(!0),t(["export"]);const P=t([{field1:"BIZ_DATE - Business Date",field3:"BIZ_DATE",field4:!1},{field1:"USER_ID - User ID",field3:"USER_ID",field4:!0},{field1:"COLLECTION_ID - Collection Process ID",field3:"COLLECTION_ID",field4:!1}]);return t(""),t(""),C({layerShow:U}),(S,n)=>{const V=O,o=q,y=N,k=X,p=ee,v=le,m=oe,g=B,R=W,i=Y,u=j;return s(),x(u,{modelValue:c.value,"onUpdate:modelValue":n[0]||(n[0]=d=>c.value=d),area:["1000px","70vh"],btn:E.value,move:"",maxmin:"",title:"Waiting API Code - CMDOJ2-DOJ"},{default:e(()=>[l(i,null,{default:e(()=>[l(R,{md:24},{default:e(()=>[l(g,{title:"Input Parameter"},{default:e(()=>[l(m,{size:"sm","label-width":110,"label-position":"left",allowClear:"",isLabelTooltip:""},{default:e(()=>[l(v,{border:!0,size:"sm",column:"1"},{default:e(()=>[(s(!0),w(K,null,ae(P.value,d=>(s(),x(p,{key:d.field1},{label:e(()=>[l(V,null,{default:e(()=>[D(z(d.field1),1)]),_:2},1024)]),default:e(()=>[l(k,null,{default:e(()=>[r("div",we,[n[1]||(n[1]=r("span",{style:{width:"50px"}},"Variable:",-1)),l(o,{name:"like",skin:"primary",modelValue:d.field4,"onUpdate:modelValue":h=>d.field4=h},null,8,["modelValue","onUpdate:modelValue"]),n[2]||(n[2]=r("span",{style:{width:"50px"}},"Label:",-1)),l(y,{allowClear:"",modelValue:d.field3,"onUpdate:modelValue":h=>d.field3=h},null,8,["modelValue","onUpdate:modelValue"])])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","btn"])}}},Ce=te(xe,[["__scopeId","data-v-c8396967"]]);const be={class:"descriptions-flex"},he={__name:"waitingParameter",props:{},emits:["sureData"],setup(L,{expose:C,emit:A}){const c=t(!1),U=()=>{c.value=!0},E=t([{text:"OK",callback:()=>{}}]);t(["1"]),t(!0),t(["export"]);const P=t([{field1:"BNCPROCESS_ID - B&C Process ID",field3:"",field4:!1},{field1:"WAIT_PERIOD - Waiting Period",field3:"",field4:!1}]);return t(""),t(""),C({layerShow:U}),(S,n)=>{const V=O,o=q,y=N,k=X,p=ee,v=le,m=oe,g=B,R=W,i=Y,u=j;return s(),x(u,{modelValue:c.value,"onUpdate:modelValue":n[0]||(n[0]=d=>c.value=d),area:["1000px","70vh"],btn:E.value,move:"",maxmin:"",title:"API Code - SURCHARGE_T1"},{default:e(()=>[l(i,null,{default:e(()=>[l(R,{md:24},{default:e(()=>[l(g,{title:"Input Parameter"},{default:e(()=>[l(m,{size:"sm","label-width":110,"label-position":"left",allowClear:"",isLabelTooltip:""},{default:e(()=>[l(v,{border:!0,size:"sm",column:"1"},{default:e(()=>[(s(!0),w(K,null,ae(P.value,d=>(s(),x(p,{key:d.field1},{label:e(()=>[l(V,null,{default:e(()=>[D(z(d.field1),1)]),_:2},1024)]),default:e(()=>[l(k,null,{default:e(()=>[r("div",be,[n[1]||(n[1]=r("span",{style:{width:"50px"}},"Variable:",-1)),l(o,{name:"like",skin:"primary",modelValue:d.field4,"onUpdate:modelValue":h=>d.field4=h},null,8,["modelValue","onUpdate:modelValue"]),n[2]||(n[2]=r("span",{style:{width:"50px"}},"Label:",-1)),l(y,{allowClear:"",modelValue:d.field3,"onUpdate:modelValue":h=>d.field3=h},null,8,["modelValue","onUpdate:modelValue"])])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),l(g,{title:"Output Parameter"},{default:e(()=>[l(m,{size:"sm","label-width":110,"label-position":"left",allowClear:"",isLabelTooltip:""},{default:e(()=>[l(v,{border:!0,size:"sm",column:"1"},{default:e(()=>[l(p,null,{label:e(()=>[l(V,null,{default:e(()=>n[3]||(n[3]=[D("EVENT_CP - Event Completed")])),_:1})]),default:e(()=>[l(k,null,{default:e(()=>[l(y,{allowClear:""})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","btn"])}}},Se=te(he,[["__scopeId","data-v-b0ef6604"]]),ge={__name:"toDoSearch",props:{},emits:["sureData"],setup(L,{expose:C,emit:A}){const c=t(!1),U=()=>{c.value=!0},E=t([{text:"Confirm",callback:()=>{c.value=!1}},{text:"Cancel",callback:()=>{c.value=!1}}]);t(["1"]),t(!0),t(["export"]);const P=[{title:"To Do Type",width:"200px",key:"field1",customSlot:"field1"},{title:"To Do Group",width:"200px",key:"field2",customSlot:"field2"},{title:"handles",key:"field3",width:"120px",customSlot:"field3"}],S=t([{field1:"",field2:"",field3:!1}]),n=function({current:y,limit:k}){console.log(y,k)},V=()=>{S.value.push({field1:"",field2:"",field3:"",field4:!1})};t(""),t("");const o=y=>{I.confirm("Are you sure delete this data?",{title:"tips",icon:3,btn:[{text:"Yes",callback:()=>{S.value.forEach((k,p)=>{k.field1===y.field1&&S.value.splice(p,1)}),I.closeAll()}},{text:"No",callback:()=>{I.closeAll()}}]})};return C({layerShow:U}),(y,k)=>{const p=H,v=F,m=O,g=N,R=G,i=Q,u=M,d=B,h=W,$=Y,_=j;return s(),x(_,{modelValue:c.value,"onUpdate:modelValue":k[0]||(k[0]=f=>c.value=f),area:["1000px","70vh"],btn:E.value,move:"",maxmin:"",title:"Step To Do"},{default:e(()=>[l($,null,{default:e(()=>[l(h,{md:24},{default:e(()=>[l(d,{title:"Step To Do"},{extra:e(()=>[l(m,null,{default:e(()=>[l(v,{position:"top",content:"create","is-dark":""},{default:e(()=>[r("div",{onClick:V,class:"circle-btn"},[l(p,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:e(()=>[l(u,{columns:P,dataSource:S.value,resize:"",onChange:n},{field1:e(({data:f})=>[l(g,{allowClear:"",modelValue:f.field1,"onUpdate:modelValue":T=>f.field1=T,size:"sm"},null,8,["modelValue","onUpdate:modelValue"])]),field2:e(({data:f})=>[l(R,{modelValue:f.field2,"onUpdate:modelValue":T=>f.field2=T,size:"sm","allow-clear":!0},{default:e(()=>k[1]||(k[1]=[r("i",{class:"iconfont icon-zanwushuju"},null,-1)])),_:2},1032,["modelValue","onUpdate:modelValue"])]),field3:e(({data:f})=>[l(i,{type:"danger",size:"xs",onClick:T=>o(f)},{default:e(()=>k[2]||(k[2]=[D(" Delete ")])),_:2},1032,["onClick"])]),_:1},8,["dataSource"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","btn"])}}},De={class:"circle-btn"},Ue={key:1},Ee={key:1},Pe={key:1},Re={key:0,class:"cursor-pointer"},Te={key:1},ze={key:1},Ae={key:0,class:"cursor-pointer"},Ie={key:1},$e={key:0,class:"cursor-pointer"},Ne={key:1},Be={key:1},Le={key:1},Oe={key:1},qe={key:1},He={__name:"stepList",setup(L){const C=t({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),A=t(null),c=t(null),U=t(null),E=t(null),P=t(null),S=()=>{A.value.layerShow()},n=()=>{c.value.layerShow()},V=()=>{U.value.layerShow()},o=()=>{E.value.layerShow()},y=()=>{P.value.layerShow()},k=[{title:"Seq",width:"120px",key:"name",customSlot:"name"},{title:"API Code",key:"description",customSlot:"description",width:"170px"},{title:"Description",key:"weight",width:"120px"},{title:"Description (Chinese)",key:"remark",width:"120px"},{title:"Condition",key:"Condition",customSlot:"Condition",width:"120px"},{title:"Parameter",key:"Parameter",customSlot:"Parameter",width:"120px"},{title:"Waiting API Code",key:"Code",customSlot:"Code",width:"120px"},{title:"Waiting Parameter",key:"Waiting",customSlot:"Waiting",width:"120px"},{title:"To Do",key:"Do",customSlot:"Do",width:"120px"},{title:"No.",key:"No",customSlot:"No",width:"120px"},{title:"Trigger  Unit",key:"Trigger",customSlot:"Trigger",width:"120px"},{title:"Dependence Pre. Step",key:"Step",customSlot:"Step",width:"120px"},{title:"Remove",key:"Remove",customSlot:"Remove",width:"120px"},{title:"handles",width:"180px",key:"operate",customSlot:"operate",fixed:"right"}],p=t([]),v=i=>{i.isEdit=!0},m=i=>{i.isEdit=!1},g=i=>{I.confirm("Are you sure to delete this data?",{title:"tips",icon:3,btn:[{text:"confirm",callback:()=>{p.value.forEach((u,d)=>{u.id===i.id&&(p.value.splice(d,1),C.value.total--)}),I.closeAll()}},{text:"cancel",callback:()=>{I.closeAll()}}]})},R=()=>{p.value.push({id:(p.value.length+1).toString(),name:"",description:"",weight:"",remark:"",Condition:"",Parameter:"",Code:"",Waiting:"",Do:"",No:"",Trigger:"",Step:"",Remove:!1,isEdit:!0}),C.value.total++};return(i,u)=>{const d=H,h=F,$=O,_=N,f=G,T=q,J=Q,ie=M,se=B;return s(),w(K,null,[l(se,{title:"Step List"},{extra:e(()=>[l($,null,{default:e(()=>[l(h,{position:"top",content:"export","is-dark":""},{default:e(()=>[r("div",De,[l(d,{type:"layui-icon-export"})])]),_:1}),l(h,{position:"top",content:"create","is-dark":""},{default:e(()=>[r("div",{onClick:R,class:"circle-btn"},[l(d,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:e(()=>[l(ie,{columns:k,"data-source":p.value,page:C.value,resize:""},{name:e(({data:a})=>[a.isEdit?(s(),x(_,{key:0,allowClear:"",modelValue:a.name,"onUpdate:modelValue":b=>a.name=b,size:"sm"},null,8,["modelValue","onUpdate:modelValue"])):(s(),w("span",Ue,z(a.name),1))]),description:e(({data:a})=>[a.isEdit?(s(),x(_,{key:0,allowClear:"",modelValue:a.description,"onUpdate:modelValue":b=>a.description=b,disabled:"",size:"sm"},{append:e(({disabled:b})=>[r("span",{class:"point-cu",onClick:S},[l(d,{type:"layui-icon-search"})])]),_:2},1032,["modelValue","onUpdate:modelValue"])):(s(),w("span",Ee,z(a.description),1))]),Condition:e(({data:a})=>[a.isEdit?(s(),w("span",{key:0,class:"cursor-pointer",onClick:n},[l(d,{type:"layui-icon-set",color:"#006AB4"})])):(s(),w("span",Pe,[l(d,{type:"layui-icon-read",color:"#006AB4",onClick:n})]))]),Parameter:e(({data:a})=>[a.isEdit?(s(),w("span",Re,[l(d,{type:"layui-icon-set",color:"#006AB4",onClick:V})])):(s(),w("span",Te,[l(d,{type:"layui-icon-read",color:"#006AB4",onClick:V})]))]),Code:e(({data:a})=>[a.isEdit?(s(),x(_,{key:0,allowClear:"",modelValue:a.Code,"onUpdate:modelValue":b=>a.Code=b,size:"sm"},null,8,["modelValue","onUpdate:modelValue"])):(s(),w("span",ze,z(a.Code),1))]),Waiting:e(({data:a})=>[a.isEdit?(s(),w("span",Ae,[l(d,{type:"layui-icon-set",color:"#006AB4",onClick:o})])):(s(),w("span",Ie,[l(d,{type:"layui-icon-read",color:"#006AB4",onClick:o})]))]),Do:e(({data:a})=>[a.isEdit?(s(),w("span",$e,[l(d,{type:"layui-icon-set",color:"#006AB4",onClick:y})])):(s(),w("span",Ne,[l(d,{type:"layui-icon-read",color:"#006AB4",onClick:y})]))]),No:e(({data:a})=>[a.isEdit?(s(),x(_,{key:0,allowClear:"",modelValue:a.No,"onUpdate:modelValue":b=>a.No=b,size:"sm"},null,8,["modelValue","onUpdate:modelValue"])):(s(),w("span",Be,z(a.No),1))]),Trigger:e(({data:a})=>[a.isEdit?(s(),x(f,{key:0,modelValue:a.Trigger,"onUpdate:modelValue":b=>a.Trigger=b,size:"sm","show-search":!0,"allow-clear":!0},{default:e(()=>u[0]||(u[0]=[r("i",{class:"iconfont icon-zanwushuju"},null,-1)])),_:2},1032,["modelValue","onUpdate:modelValue"])):(s(),w("span",Le,z(a.Trigger),1))]),Step:e(({data:a})=>[a.isEdit?(s(),x(_,{key:0,allowClear:"",modelValue:a.Step,"onUpdate:modelValue":b=>a.Step=b,size:"sm"},null,8,["modelValue","onUpdate:modelValue"])):(s(),w("span",Oe,z(a.Step),1))]),Remove:e(({data:a})=>[a.isEdit?(s(),x(T,{key:0,name:"like",skin:"primary",modelValue:a.Remove,"onUpdate:modelValue":b=>a.Remove=b},null,8,["modelValue","onUpdate:modelValue"])):(s(),w("span",qe,z(a.Remove?"Y-Yes":"N-No"),1))]),operate:e(({data:a})=>[a.isEdit?Z("",!0):(s(),x(J,{key:0,type:"primary",size:"xs",onClick:b=>v(a)},{default:e(()=>u[1]||(u[1]=[D(" Edit ")])),_:2},1032,["onClick"])),a.isEdit?(s(),x(J,{key:1,type:"primary",size:"xs",onClick:b=>m(a)},{default:e(()=>u[2]||(u[2]=[D(" Save ")])),_:2},1032,["onClick"])):Z("",!0),l(J,{type:"danger",size:"xs",onClick:b=>g(a)},{default:e(()=>u[3]||(u[3]=[D(" Delete ")])),_:2},1032,["onClick"])]),_:1},8,["data-source","page"])]),_:1}),l(ne,{ref_key:"searchRef",ref:A,onSureData:i.sureData},null,8,["onSureData"]),l(ve,{ref_key:"searchRef1",ref:c,onSureData1:i.sureData1},null,8,["onSureData1"]),l(Ce,{ref_key:"searchRef2",ref:U,onSureData1:i.sureData2},null,8,["onSureData1"]),l(Se,{ref_key:"searchRef3",ref:E},null,512),l(ge,{ref_key:"searchRef4",ref:P},null,512)],64)}}},al={__name:"automationConfiguration",setup(L){const C={field1:{type:"field",required:!0,message:"Please input Description"},field3:{required:!0,message:"Please input Description"}},A=t(null),c=t(null),U=()=>{A.value.layerShow()},E=V=>{n.value.field1=V.field1},P=()=>{c.value.layerShow()};t(["1"]),t(!0),t(["filter","export"]),t({total:100,limit:10,current:2,layout:["page","limits","prev","next","count"]}),de(),ue();const S=t(null);t(""),t("");const n=t({field:"",field2:!1,field3:"",field4:"",field5:""});return(V,o)=>{const y=B,k=H,p=N,v=X,m=ee,g=q,R=le,i=oe,u=W,d=G,h=Y,$=re;return s(),w(K,null,[l($,{fluid:"true",class:"common-container"},{default:e(()=>[l(y,{class:"top-use-card"},{default:e(()=>o[7]||(o[7]=[r("div",{class:"top-use-box"},[r("h1",{class:"top-use-title"},"Automation Configuration")],-1)])),_:1}),l(h,{class:"results-list"},{default:e(()=>[l(u,{md:24},{default:e(()=>[l(y,null,{default:e(()=>[l(i,{ref_key:"layFormRef",ref:S,size:"sm","label-width":110,"label-position":"left",allowClear:"",isLabelTooltip:"",rules:C,model:n.value,required:""},{default:e(()=>[l(R,{border:!0,size:"sm",column:"2"},{default:e(()=>[l(m,null,{label:e(()=>o[8]||(o[8]=[r("span",null,[D("Automation Code "),r("em",{class:"require-xin"},"*")],-1)])),default:e(()=>[l(v,{prop:"field"},{default:e(()=>[l(p,{placeholder:"Please enter",modelValue:n.value.field,"onUpdate:modelValue":o[0]||(o[0]=_=>n.value.field=_),allowClear:"",disabled:""},{append:e(({disabled:_})=>[r("span",{class:"point-cu",onClick:U},[l(k,{type:"layui-icon-search"})])]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(m,null,{label:e(()=>o[9]||(o[9]=[r("span",null,"Obsolete",-1)])),default:e(()=>[l(v,null,{default:e(()=>[l(g,{placeholder:"Please enter",name:"like",skin:"primary",modelValue:n.value.field2,"onUpdate:modelValue":o[1]||(o[1]=_=>n.value.field2=_)},null,8,["modelValue"])]),_:1})]),_:1}),l(m,null,{label:e(()=>o[10]||(o[10]=[r("span",null,[D("Description "),r("em",{class:"require-xin"},"*")],-1)])),default:e(()=>[l(v,{prop:"field3"},{default:e(()=>[l(p,{allowClear:"",modelValue:n.value.field3,"onUpdate:modelValue":o[2]||(o[2]=_=>n.value.field3=_),placeholder:"Please enter"},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{prop:"field4"},{label:e(()=>o[11]||(o[11]=[r("span",null,[D("Description(Chinese) "),r("em",{class:"require-xin"},"*")],-1)])),default:e(()=>[l(v,null,{default:e(()=>[l(p,{allowClear:"",modelValue:n.value.field4,"onUpdate:modelValue":o[3]||(o[3]=_=>n.value.field4=_),placeholder:"Please enter"},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{prop:"field4"},{label:e(()=>o[12]||(o[12]=[r("span",null,[D("Mode "),r("em",{class:"require-xin"},"*")],-1)])),default:e(()=>[l(v,null,{default:e(()=>[l(p,{allowClear:"",modelValue:n.value.field5,"onUpdate:modelValue":o[4]||(o[4]=_=>n.value.field5=_),placeholder:"Please enter"},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{prop:"field4"},{label:e(()=>o[13]||(o[13]=[r("span",null,[D("Frequency "),r("em",{class:"require-xin"},"*")],-1)])),default:e(()=>[l(v,null,{default:e(()=>[l(p,{allowClear:"",modelValue:n.value.field7,"onUpdate:modelValue":o[5]||(o[5]=_=>n.value.field7=_),placeholder:"Please enter"},null,8,["modelValue"])]),_:1})]),_:1}),l(m,null,{label:e(()=>o[14]||(o[14]=[r("span",null,"Auto Retry",-1)])),default:e(()=>[l(v,null,{default:e(()=>[l(g,{placeholder:"Please enter",name:"like",skin:"primary",modelValue:n.value.field8,"onUpdate:modelValue":o[6]||(o[6]=_=>n.value.field8=_)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})]),_:1}),l(u,{md:24},{default:e(()=>[l(y,{title:"Defaul To Do"},{default:e(()=>[l(i,{size:"sm","label-width":110,"label-position":"left",allowClear:"",isLabelTooltip:""},{default:e(()=>[l(R,{border:!0,size:"sm",column:"2"},{default:e(()=>[l(m,null,{label:e(()=>o[15]||(o[15]=[r("span",null,"To Do Type",-1)])),default:e(()=>[l(v,null,{default:e(()=>[l(p,{placeholder:"Please enter",allowClear:"",disabled:""},{append:e(({disabled:_})=>[r("span",{class:"point-cu",onClick:P},[l(k,{type:"layui-icon-search"})])]),_:1})]),_:1})]),_:1}),l(m,null,{label:e(()=>o[16]||(o[16]=[r("span",null,"To Do Type",-1)])),default:e(()=>[l(v,null,{default:e(()=>[l(d,{allowClear:""},{default:e(()=>o[17]||(o[17]=[r("i",{class:"iconfont icon-zanwushuju"},null,-1)])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l(u,{md:24},{default:e(()=>[l(Ve)]),_:1}),l(u,{md:24},{default:e(()=>[l(He)]),_:1})]),_:1})]),_:1}),l(ne,{ref_key:"searchRef",ref:A,onSureData:E},null,512),l(pe,{ref_key:"searchRef1",ref:c},null,512)],64)}}};export{al as default};