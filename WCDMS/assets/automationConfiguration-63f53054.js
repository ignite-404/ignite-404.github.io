import{a as t,o as s,e as w,w as e,f as l,i as d,c as k,t as R,h as U,p as F,Z as $,l as H,E as W,m as N,k as B,K as q,C as Q,R as j,_ as te,F as K,M as ae,q as X,u as de,s as ue}from"./index-99541687.js";import{c as re}from"./index-a6c9f0ae.js";import{y as Y,f as Z}from"./index-d6be05a9.js";/* empty css              */import{n as ee,Z as le}from"./index-890504cf.js";/* empty css              */import{V as L}from"./index-8cb0198a.js";/* empty css              */import{_ as ne}from"./codeSearch-315fc896.js";import{Z as M}from"./index-45f8edc9.js";import{U as ce,B as G}from"./index-f0ab03bb.js";import{w as oe}from"./index-ca186075.js";import{_ as pe}from"./doTypeSearch-1f242e34.js";import"./index2-454c9625.js";import"./index2-97dbc1fc.js";const me={class:"circle-btn"},_e={key:1},fe={key:1},ye={key:1},ke={key:1},Ve={__name:"inputParameter",setup(O){const h=t({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),T=[{title:"Input Parameter",width:"240px",key:"name",customSlot:"name"},{title:"Default Parameter Value",key:"description",customSlot:"description",width:"240px"},{title:"Required",key:"weight",width:"120px",customSlot:"weight"},{title:"Remove",key:"remark",ellipsisTooltip:!0,customSlot:"remark",width:"120px"},{title:"handles",width:"180px",key:"operate",customSlot:"operate",ellipsisTooltip:!0,fixed:"right"}],c=t([]),E=n=>{n.isEdit=!0},P=n=>{n.isEdit=!1},z=n=>{$.confirm("Are you sure to delete this data?",{title:"tips",icon:3,btn:[{text:"confirm",callback:()=>{c.value.forEach((y,o)=>{y.id===n.id&&(c.value.splice(o,1),h.value.total--)}),$.closeAll()}},{text:"cancel",callback:()=>{$.closeAll()}}]})},D=()=>{c.value.push({id:(c.value.length+1).toString(),name:"",description:"",weight:!1,remark:!1,isEdit:!0}),h.value.total++};return(n,y)=>{const o=H,f=W,_=N,x=B,S=q,V=Q,v=M,b=L;return s(),w(b,{title:"Input Parameter(s)"},{extra:e(()=>[l(_,null,{default:e(()=>[l(f,{position:"top",content:"export","is-dark":""},{default:e(()=>[d("div",me,[l(o,{type:"layui-icon-export"})])]),_:1}),l(f,{position:"top",content:"create","is-dark":""},{default:e(()=>[d("div",{onClick:D,class:"circle-btn"},[l(o,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:e(()=>[l(v,{columns:T,"data-source":c.value,page:h.value,resize:""},{name:e(({data:i})=>[i.isEdit?(s(),w(x,{key:0,allowClear:"",modelValue:i.name,"onUpdate:modelValue":r=>i.name=r,size:"sm"},null,8,["modelValue","onUpdate:modelValue"])):(s(),k("span",_e,R(i.description),1))]),description:e(({data:i})=>[i.isEdit?(s(),w(x,{key:0,allowClear:"",modelValue:i.description,"onUpdate:modelValue":r=>i.description=r,size:"sm"},null,8,["modelValue","onUpdate:modelValue"])):(s(),k("span",fe,R(i.description),1))]),weight:e(({data:i})=>[i.isEdit?(s(),w(S,{key:0,name:"like",skin:"primary",modelValue:i.weight,"onUpdate:modelValue":r=>i.weight=r},null,8,["modelValue","onUpdate:modelValue"])):(s(),k("span",ye,R(i.weight?"Y-Yes":"N-No"),1))]),remark:e(({data:i})=>[i.isEdit?(s(),w(S,{key:0,name:"like",skin:"primary",modelValue:i.remark,"onUpdate:modelValue":r=>i.remark=r},null,8,["modelValue","onUpdate:modelValue"])):(s(),k("span",ke,R(i.remark?"Y-Yes":"N-No"),1))]),operate:e(({data:i})=>[i.isEdit?F("",!0):(s(),w(V,{key:0,type:"primary",size:"xs",onClick:r=>E(i)},{default:e(()=>y[0]||(y[0]=[U(" Edit ")])),_:2},1032,["onClick"])),i.isEdit?(s(),w(V,{key:1,type:"primary",size:"xs",onClick:r=>P(i)},{default:e(()=>y[1]||(y[1]=[U(" Save ")])),_:2},1032,["onClick"])):F("",!0),l(V,{type:"danger",size:"xs",onClick:r=>z(i)},{default:e(()=>y[2]||(y[2]=[U(" Delete ")])),_:2},1032,["onClick"])]),_:1},8,["data-source","page"])]),_:1})}}},ve={__name:"condition",props:{},emits:["sureData"],setup(O,{expose:h,emit:T}){const c=t(!1),E=()=>{c.value=!0},P=t([{text:"Confirm",callback:()=>{c.value=!1}},{text:"Cancel",callback:()=>{c.value=!1}}]);t(["1"]),t(!0),t(["export"]);const z=[{title:"Parameter Code/Variable",width:"150px",key:"field1",customSlot:"field1"},{title:"Operator",width:"110px",key:"field2",customSlot:"field2"},{title:"Parameter Value",width:"110px",key:"field3",customSlot:"field3"},{title:"Remove",key:"field4",width:"110px",customSlot:"field4"}],D=t([{field1:"",field2:"",field3:"",field4:!1}]),n=function({current:o,limit:f}){console.log(o,f)},y=()=>{D.value.push({field1:"",field2:"",field3:"",field4:!1})};return t(""),t(""),h({layerShow:E}),(o,f)=>{const _=H,x=W,S=N,V=B,v=ce,b=G,i=q,r=M,u=L,C=Y,I=Z,A=j;return s(),w(A,{modelValue:c.value,"onUpdate:modelValue":f[0]||(f[0]=m=>c.value=m),area:["1000px","70vh"],btn:P.value,move:"",maxmin:"",title:"API Code - PBL-ACTCHK"},{default:e(()=>[l(I,null,{default:e(()=>[l(C,{md:24},{default:e(()=>[l(u,{title:"Condition"},{extra:e(()=>[l(S,null,{default:e(()=>[l(x,{position:"top",content:"create","is-dark":""},{default:e(()=>[d("div",{onClick:y,class:"circle-btn"},[l(_,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:e(()=>[l(r,{columns:z,dataSource:D.value,resize:"",onChange:n},{field1:e(({data:m})=>[l(V,{allowClear:"",modelValue:m.field1,"onUpdate:modelValue":p=>m.field1=p,size:"sm"},null,8,["modelValue","onUpdate:modelValue"])]),field2:e(({data:m})=>[l(b,{modelValue:m.field2,"onUpdate:modelValue":p=>m.field2=p,size:"sm","allow-clear":!0},{default:e(()=>[l(v,{value:"=",label:"="})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),field3:e(({data:m})=>[l(V,{allowClear:"",modelValue:m.field3,"onUpdate:modelValue":p=>m.field3=p,size:"sm"},null,8,["modelValue","onUpdate:modelValue"])]),field4:e(({data:m})=>[l(i,{name:"like",skin:"primary",modelValue:m.field4,"onUpdate:modelValue":p=>m.field4=p},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["dataSource"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","btn"])}}};const we={class:"descriptions-flex"},xe={__name:"parameter",props:{},emits:["sureData"],setup(O,{expose:h,emit:T}){const c=t(!1),E=()=>{c.value=!0},P=t([{text:"OK",callback:()=>{}}]);t(["1"]),t(!0),t(["export"]);const z=t([{field1:"BIZ_DATE - Business Date",field3:"BIZ_DATE",field4:!1},{field1:"USER_ID - User ID",field3:"USER_ID",field4:!0},{field1:"COLLECTION_ID - Collection Process ID",field3:"COLLECTION_ID",field4:!1}]);return t(""),t(""),h({layerShow:E}),(D,n)=>{const y=N,o=q,f=B,_=X,x=ee,S=le,V=oe,v=L,b=Y,i=Z,r=j;return s(),w(r,{modelValue:c.value,"onUpdate:modelValue":n[0]||(n[0]=u=>c.value=u),area:["1000px","70vh"],btn:P.value,move:"",maxmin:"",title:"Waiting API Code - CMDOJ2-DOJ"},{default:e(()=>[l(i,null,{default:e(()=>[l(b,{md:24},{default:e(()=>[l(v,{title:"Input Parameter"},{default:e(()=>[l(V,{size:"sm","label-width":110,"label-position":"left",allowClear:"",isLabelTooltip:""},{default:e(()=>[l(S,{border:!0,size:"sm",column:"1"},{default:e(()=>[(s(!0),k(K,null,ae(z.value,u=>(s(),w(x,{key:u.field1},{label:e(()=>[l(y,null,{default:e(()=>[U(R(u.field1),1)]),_:2},1024)]),default:e(()=>[l(_,null,{default:e(()=>[d("div",we,[n[1]||(n[1]=d("span",{style:{width:"50px"}},"Variable:",-1)),l(o,{name:"like",skin:"primary",modelValue:u.field4,"onUpdate:modelValue":C=>u.field4=C},null,8,["modelValue","onUpdate:modelValue"]),n[2]||(n[2]=d("span",{style:{width:"50px"}},"Label:",-1)),l(f,{allowClear:"",modelValue:u.field3,"onUpdate:modelValue":C=>u.field3=C},null,8,["modelValue","onUpdate:modelValue"])])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","btn"])}}},be=te(xe,[["__scopeId","data-v-c8396967"]]);const Ce={class:"descriptions-flex"},he={__name:"waitingParameter",props:{},emits:["sureData"],setup(O,{expose:h,emit:T}){const c=t(!1),E=()=>{c.value=!0},P=t([{text:"OK",callback:()=>{}}]);t(["1"]),t(!0),t(["export"]);const z=t([{field1:"BNCPROCESS_ID - B&C Process ID",field3:"",field4:!1},{field1:"WAIT_PERIOD - Waiting Period",field3:"",field4:!1}]);return t(""),t(""),h({layerShow:E}),(D,n)=>{const y=N,o=q,f=B,_=X,x=ee,S=le,V=oe,v=L,b=Y,i=Z,r=j;return s(),w(r,{modelValue:c.value,"onUpdate:modelValue":n[0]||(n[0]=u=>c.value=u),area:["1000px","70vh"],btn:P.value,move:"",maxmin:"",title:"API Code - SURCHARGE_T1"},{default:e(()=>[l(i,null,{default:e(()=>[l(b,{md:24},{default:e(()=>[l(v,{title:"Input Parameter"},{default:e(()=>[l(V,{size:"sm","label-width":110,"label-position":"left",allowClear:"",isLabelTooltip:""},{default:e(()=>[l(S,{border:!0,size:"sm",column:"1"},{default:e(()=>[(s(!0),k(K,null,ae(z.value,u=>(s(),w(x,{key:u.field1},{label:e(()=>[l(y,null,{default:e(()=>[U(R(u.field1),1)]),_:2},1024)]),default:e(()=>[l(_,null,{default:e(()=>[d("div",Ce,[n[1]||(n[1]=d("span",{style:{width:"50px"}},"Variable:",-1)),l(o,{name:"like",skin:"primary",modelValue:u.field4,"onUpdate:modelValue":C=>u.field4=C},null,8,["modelValue","onUpdate:modelValue"]),n[2]||(n[2]=d("span",{style:{width:"50px"}},"Label:",-1)),l(f,{allowClear:"",modelValue:u.field3,"onUpdate:modelValue":C=>u.field3=C},null,8,["modelValue","onUpdate:modelValue"])])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),l(v,{title:"Output Parameter"},{default:e(()=>[l(V,{size:"sm","label-width":110,"label-position":"left",allowClear:"",isLabelTooltip:""},{default:e(()=>[l(S,{border:!0,size:"sm",column:"1"},{default:e(()=>[l(x,null,{label:e(()=>[l(y,null,{default:e(()=>n[3]||(n[3]=[U("EVENT_CP - Event Completed")])),_:1})]),default:e(()=>[l(_,null,{default:e(()=>[l(f,{allowClear:""})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","btn"])}}},Se=te(he,[["__scopeId","data-v-b0ef6604"]]),ge={__name:"toDoSearch",props:{},emits:["sureData"],setup(O,{expose:h,emit:T}){const c=t(!1),E=()=>{c.value=!0},P=t([{text:"Confirm",callback:()=>{c.value=!1}},{text:"Cancel",callback:()=>{c.value=!1}}]);t(["1"]),t(!0),t(["export"]);const z=[{title:"To Do Type",width:"200px",key:"field1",customSlot:"field1"},{title:"To Do Group",width:"200px",key:"field2",customSlot:"field2"},{title:"handles",key:"field3",width:"120px",customSlot:"field3"}],D=t([{field1:"",field2:"",field3:!1}]),n=function({current:f,limit:_}){console.log(f,_)},y=()=>{D.value.push({field1:"",field2:"",field3:"",field4:!1})};t(""),t("");const o=f=>{$.confirm("Are you sure delete this data?",{title:"tips",icon:3,btn:[{text:"Yes",callback:()=>{D.value.forEach((_,x)=>{_.field1===f.field1&&D.value.splice(x,1)}),$.closeAll()}},{text:"No",callback:()=>{$.closeAll()}}]})};return h({layerShow:E}),(f,_)=>{const x=H,S=W,V=N,v=B,b=G,i=Q,r=M,u=L,C=Y,I=Z,A=j;return s(),w(A,{modelValue:c.value,"onUpdate:modelValue":_[0]||(_[0]=m=>c.value=m),area:["1000px","70vh"],btn:P.value,move:"",maxmin:"",title:"Step To Do"},{default:e(()=>[l(I,null,{default:e(()=>[l(C,{md:24},{default:e(()=>[l(u,{title:"Step To Do"},{extra:e(()=>[l(V,null,{default:e(()=>[l(S,{position:"top",content:"create","is-dark":""},{default:e(()=>[d("div",{onClick:y,class:"circle-btn"},[l(x,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:e(()=>[l(r,{columns:z,dataSource:D.value,resize:"",onChange:n},{field1:e(({data:m})=>[l(v,{allowClear:"",modelValue:m.field1,"onUpdate:modelValue":p=>m.field1=p,size:"sm"},null,8,["modelValue","onUpdate:modelValue"])]),field2:e(({data:m})=>[l(b,{modelValue:m.field2,"onUpdate:modelValue":p=>m.field2=p,size:"sm","allow-clear":!0},{default:e(()=>_[1]||(_[1]=[d("i",{class:"iconfont icon-zanwushuju"},null,-1)])),_:2},1032,["modelValue","onUpdate:modelValue"])]),field3:e(({data:m})=>[l(i,{type:"danger",size:"xs",onClick:p=>o(m)},{default:e(()=>_[2]||(_[2]=[U(" Delete ")])),_:2},1032,["onClick"])]),_:1},8,["dataSource"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","btn"])}}},De={class:"circle-btn"},Ue={key:1},Ee={key:1},Pe={key:1},ze={key:0,class:"cursor-pointer"},Re={key:1},Te={key:1},Ae={key:0,class:"cursor-pointer"},$e={key:1},Ie={key:0,class:"cursor-pointer"},Ne={key:1},Be={key:1},Le={key:1},Oe={key:1},qe={key:1},He={__name:"stepList",setup(O){const h=t({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),T=t(null),c=t(null),E=t(null),P=t(null),z=t(null),D=()=>{T.value.layerShow()},n=()=>{c.value.layerShow()},y=()=>{E.value.layerShow()},o=()=>{P.value.layerShow()},f=()=>{z.value.layerShow()},_=[{title:"Seq",width:"120px",key:"name",customSlot:"name"},{title:"API Code",key:"description",customSlot:"description",width:"170px"},{title:"Description",key:"weight",width:"120px"},{title:"Description (Chinese)",key:"remark",width:"120px"},{title:"Condition",key:"Condition",customSlot:"Condition",width:"120px"},{title:"Parameter",key:"Parameter",customSlot:"Parameter",width:"120px"},{title:"Waiting API Code",key:"Code",customSlot:"Code",width:"120px"},{title:"Waiting Parameter",key:"Waiting",customSlot:"Waiting",width:"120px"},{title:"To Do",key:"Do",customSlot:"Do",width:"120px"},{title:"No.",key:"No",customSlot:"No",width:"120px"},{title:"Trigger  Unit",key:"Trigger",customSlot:"Trigger",width:"120px"},{title:"Dependence Pre. Step",key:"Step",customSlot:"Step",width:"120px"},{title:"Remove",key:"Remove",customSlot:"Remove",width:"120px"},{title:"handles",width:"180px",key:"operate",customSlot:"operate",fixed:"right"}],x=t([]),S=i=>{i.isEdit=!0},V=i=>{i.isEdit=!1},v=i=>{$.confirm("Are you sure to delete this data?",{title:"tips",icon:3,btn:[{text:"confirm",callback:()=>{x.value.forEach((r,u)=>{r.id===i.id&&(x.value.splice(u,1),h.value.total--)}),$.closeAll()}},{text:"cancel",callback:()=>{$.closeAll()}}]})},b=()=>{x.value.push({id:(x.value.length+1).toString(),name:"",description:"",weight:"",remark:"",Condition:"",Parameter:"",Code:"",Waiting:"",Do:"",No:"",Trigger:"",Step:"",Remove:!1,isEdit:!0}),h.value.total++};return(i,r)=>{const u=H,C=W,I=N,A=B,m=G,p=q,J=Q,ie=M,se=L;return s(),k(K,null,[l(se,{title:"Step List"},{extra:e(()=>[l(I,null,{default:e(()=>[l(C,{position:"top",content:"export","is-dark":""},{default:e(()=>[d("div",De,[l(u,{type:"layui-icon-export"})])]),_:1}),l(C,{position:"top",content:"create","is-dark":""},{default:e(()=>[d("div",{onClick:b,class:"circle-btn"},[l(u,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:e(()=>[l(ie,{columns:_,"data-source":x.value,page:h.value,resize:""},{name:e(({data:a})=>[a.isEdit?(s(),w(A,{key:0,allowClear:"",modelValue:a.name,"onUpdate:modelValue":g=>a.name=g,size:"sm"},null,8,["modelValue","onUpdate:modelValue"])):(s(),k("span",Ue,R(a.name),1))]),description:e(({data:a})=>[a.isEdit?(s(),w(A,{key:0,allowClear:"",modelValue:a.description,"onUpdate:modelValue":g=>a.description=g,disabled:"",size:"sm"},{append:e(({disabled:g})=>[d("span",{class:"point-cu",onClick:D},[l(u,{type:"layui-icon-search"})])]),_:2},1032,["modelValue","onUpdate:modelValue"])):(s(),k("span",Ee,R(a.description),1))]),Condition:e(({data:a})=>[a.isEdit?(s(),k("span",{key:0,class:"cursor-pointer",onClick:n},[l(u,{type:"layui-icon-set",color:"#006AB4"})])):(s(),k("span",Pe,[l(u,{type:"layui-icon-read",color:"#006AB4",onClick:n})]))]),Parameter:e(({data:a})=>[a.isEdit?(s(),k("span",ze,[l(u,{type:"layui-icon-set",color:"#006AB4",onClick:y})])):(s(),k("span",Re,[l(u,{type:"layui-icon-read",color:"#006AB4",onClick:y})]))]),Code:e(({data:a})=>[a.isEdit?(s(),w(A,{key:0,allowClear:"",modelValue:a.Code,"onUpdate:modelValue":g=>a.Code=g,size:"sm"},null,8,["modelValue","onUpdate:modelValue"])):(s(),k("span",Te,R(a.Code),1))]),Waiting:e(({data:a})=>[a.isEdit?(s(),k("span",Ae,[l(u,{type:"layui-icon-set",color:"#006AB4",onClick:o})])):(s(),k("span",$e,[l(u,{type:"layui-icon-read",color:"#006AB4",onClick:o})]))]),Do:e(({data:a})=>[a.isEdit?(s(),k("span",Ie,[l(u,{type:"layui-icon-set",color:"#006AB4",onClick:f})])):(s(),k("span",Ne,[l(u,{type:"layui-icon-read",color:"#006AB4",onClick:f})]))]),No:e(({data:a})=>[a.isEdit?(s(),w(A,{key:0,allowClear:"",modelValue:a.No,"onUpdate:modelValue":g=>a.No=g,size:"sm"},null,8,["modelValue","onUpdate:modelValue"])):(s(),k("span",Be,R(a.No),1))]),Trigger:e(({data:a})=>[a.isEdit?(s(),w(m,{key:0,modelValue:a.Trigger,"onUpdate:modelValue":g=>a.Trigger=g,size:"sm","show-search":!0,"allow-clear":!0},{default:e(()=>r[0]||(r[0]=[d("i",{class:"iconfont icon-zanwushuju"},null,-1)])),_:2},1032,["modelValue","onUpdate:modelValue"])):(s(),k("span",Le,R(a.Trigger),1))]),Step:e(({data:a})=>[a.isEdit?(s(),w(A,{key:0,allowClear:"",modelValue:a.Step,"onUpdate:modelValue":g=>a.Step=g,size:"sm"},null,8,["modelValue","onUpdate:modelValue"])):(s(),k("span",Oe,R(a.Step),1))]),Remove:e(({data:a})=>[a.isEdit?(s(),w(p,{key:0,name:"like",skin:"primary",modelValue:a.Remove,"onUpdate:modelValue":g=>a.Remove=g},null,8,["modelValue","onUpdate:modelValue"])):(s(),k("span",qe,R(a.Remove?"Y-Yes":"N-No"),1))]),operate:e(({data:a})=>[a.isEdit?F("",!0):(s(),w(J,{key:0,type:"primary",size:"xs",onClick:g=>S(a)},{default:e(()=>r[1]||(r[1]=[U(" Edit ")])),_:2},1032,["onClick"])),a.isEdit?(s(),w(J,{key:1,type:"primary",size:"xs",onClick:g=>V(a)},{default:e(()=>r[2]||(r[2]=[U(" Save ")])),_:2},1032,["onClick"])):F("",!0),l(J,{type:"danger",size:"xs",onClick:g=>v(a)},{default:e(()=>r[3]||(r[3]=[U(" Delete ")])),_:2},1032,["onClick"])]),_:1},8,["data-source","page"])]),_:1}),l(ne,{ref_key:"searchRef",ref:T,onSureData:i.sureData},null,8,["onSureData"]),l(ve,{ref_key:"searchRef1",ref:c,onSureData1:i.sureData1},null,8,["onSureData1"]),l(be,{ref_key:"searchRef2",ref:E,onSureData1:i.sureData2},null,8,["onSureData1"]),l(Se,{ref_key:"searchRef3",ref:P},null,512),l(ge,{ref_key:"searchRef4",ref:z},null,512)],64)}}},We={class:"top-use-box"},Ye={class:"top-use-fun"},il={__name:"automationConfiguration",setup(O){const h={field1:{type:"field",required:!0,message:"Please input Description"},field3:{required:!0,message:"Please input Description"}},T=t(null),c=t(null),E=()=>{T.value.layerShow()},P=y=>{n.value.field1=y.field1},z=()=>{c.value.layerShow()};t(["1"]),t(!0),t(["filter","export"]),t({total:100,limit:10,current:2,layout:["page","limits","prev","next","count"]}),de(),ue();const D=t(null);t(""),t("");const n=t({field:"",field2:!1,field3:"",field4:"",field5:""});return(y,o)=>{const f=W,_=H,x=N,S=L,V=B,v=X,b=ee,i=q,r=le,u=oe,C=Y,I=G,A=Z,m=re;return s(),k(K,null,[l(m,{fluid:"true",class:"common-container"},{default:e(()=>[l(S,{class:"top-use-card"},{default:e(()=>[d("div",We,[o[9]||(o[9]=d("h1",{class:"top-use-title"},"Automation Configuration",-1)),d("div",Ye,[l(x,{size:"md"},{default:e(()=>[l(f,{position:"top",content:"save","is-dark":""},{default:e(()=>o[7]||(o[7]=[d("span",{class:"iconfont icon-baocun"},null,-1)])),_:1}),l(f,{position:"top",content:"delete","is-dark":""},{default:e(()=>o[8]||(o[8]=[d("span",{class:"iconfont icon-rubber"},null,-1)])),_:1}),l(f,{position:"top",content:"refresh","is-dark":""},{default:e(()=>[d("span",null,[l(_,{type:"layui-icon-refresh"})])]),_:1}),l(f,{position:"top",content:"create","is-dark":""},{default:e(()=>[d("span",null,[l(_,{type:"layui-icon-addition"})])]),_:1})]),_:1})])])]),_:1}),l(A,{class:"results-list"},{default:e(()=>[l(C,{md:24},{default:e(()=>[l(S,null,{default:e(()=>[l(u,{ref_key:"layFormRef",ref:D,size:"sm","label-width":110,"label-position":"left",allowClear:"",isLabelTooltip:"",rules:h,model:n.value,required:""},{default:e(()=>[l(r,{border:!0,size:"sm",column:"2"},{default:e(()=>[l(b,null,{label:e(()=>o[10]||(o[10]=[d("span",null,[U("Automation Code "),d("em",{class:"require-xin"},"*")],-1)])),default:e(()=>[l(v,{prop:"field"},{default:e(()=>[l(V,{placeholder:"Please enter",modelValue:n.value.field,"onUpdate:modelValue":o[0]||(o[0]=p=>n.value.field=p),allowClear:"",disabled:""},{append:e(({disabled:p})=>[d("span",{class:"point-cu",onClick:E},[l(_,{type:"layui-icon-search"})])]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(b,null,{label:e(()=>o[11]||(o[11]=[d("span",null,"Obsolete",-1)])),default:e(()=>[l(v,null,{default:e(()=>[l(i,{placeholder:"Please enter",name:"like",skin:"primary",modelValue:n.value.field2,"onUpdate:modelValue":o[1]||(o[1]=p=>n.value.field2=p)},null,8,["modelValue"])]),_:1})]),_:1}),l(b,null,{label:e(()=>o[12]||(o[12]=[d("span",null,[U("Description "),d("em",{class:"require-xin"},"*")],-1)])),default:e(()=>[l(v,{prop:"field3"},{default:e(()=>[l(V,{allowClear:"",modelValue:n.value.field3,"onUpdate:modelValue":o[2]||(o[2]=p=>n.value.field3=p),placeholder:"Please enter"},null,8,["modelValue"])]),_:1})]),_:1}),l(b,{prop:"field4"},{label:e(()=>o[13]||(o[13]=[d("span",null,[U("Description(Chinese) "),d("em",{class:"require-xin"},"*")],-1)])),default:e(()=>[l(v,null,{default:e(()=>[l(V,{allowClear:"",modelValue:n.value.field4,"onUpdate:modelValue":o[3]||(o[3]=p=>n.value.field4=p),placeholder:"Please enter"},null,8,["modelValue"])]),_:1})]),_:1}),l(b,{prop:"field4"},{label:e(()=>o[14]||(o[14]=[d("span",null,[U("Mode "),d("em",{class:"require-xin"},"*")],-1)])),default:e(()=>[l(v,null,{default:e(()=>[l(V,{allowClear:"",modelValue:n.value.field5,"onUpdate:modelValue":o[4]||(o[4]=p=>n.value.field5=p),placeholder:"Please enter"},null,8,["modelValue"])]),_:1})]),_:1}),l(b,{prop:"field4"},{label:e(()=>o[15]||(o[15]=[d("span",null,[U("Frequency "),d("em",{class:"require-xin"},"*")],-1)])),default:e(()=>[l(v,null,{default:e(()=>[l(V,{allowClear:"",modelValue:n.value.field7,"onUpdate:modelValue":o[5]||(o[5]=p=>n.value.field7=p),placeholder:"Please enter"},null,8,["modelValue"])]),_:1})]),_:1}),l(b,null,{label:e(()=>o[16]||(o[16]=[d("span",null,"Auto Retry",-1)])),default:e(()=>[l(v,null,{default:e(()=>[l(i,{placeholder:"Please enter",name:"like",skin:"primary",modelValue:n.value.field8,"onUpdate:modelValue":o[6]||(o[6]=p=>n.value.field8=p)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})]),_:1}),l(C,{md:24},{default:e(()=>[l(S,{title:"Defaul To Do"},{default:e(()=>[l(u,{size:"sm","label-width":110,"label-position":"left",allowClear:"",isLabelTooltip:""},{default:e(()=>[l(r,{border:!0,size:"sm",column:"2"},{default:e(()=>[l(b,null,{label:e(()=>o[17]||(o[17]=[d("span",null,"To Do Type",-1)])),default:e(()=>[l(v,null,{default:e(()=>[l(V,{placeholder:"Please enter",allowClear:"",disabled:""},{append:e(({disabled:p})=>[d("span",{class:"point-cu",onClick:z},[l(_,{type:"layui-icon-search"})])]),_:1})]),_:1})]),_:1}),l(b,null,{label:e(()=>o[18]||(o[18]=[d("span",null,"To Do Type",-1)])),default:e(()=>[l(v,null,{default:e(()=>[l(I,{allowClear:""},{default:e(()=>o[19]||(o[19]=[d("i",{class:"iconfont icon-zanwushuju"},null,-1)])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l(C,{md:24},{default:e(()=>[l(Ve)]),_:1}),l(C,{md:24},{default:e(()=>[l(He)]),_:1})]),_:1})]),_:1}),l(ne,{ref_key:"searchRef",ref:T,onSureData:P},null,512),l(pe,{ref_key:"searchRef1",ref:c},null,512)],64)}}};export{il as default};