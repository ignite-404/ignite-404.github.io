import{a as f,o as B,e as W,w as l,f as e,i as n,h as i,t as j,k as P,q as Y,l as g,n as G,C as H,R as J,c as K,F as O,E as Q,m as h}from"./index-99541687.js";import{n as T,Z as M}from"./index-890504cf.js";/* empty css              *//* empty css              */import{V as z}from"./index-8cb0198a.js";/* empty css              */import{_ as ll}from"./personSearch-166e8bf9.js";import{y as el,f as tl}from"./index-d6be05a9.js";import{Z as ol}from"./index-45f8edc9.js";/* empty css              */import{_ as nl}from"./userSearch-3314d775.js";import{B as E}from"./index-f0ab03bb.js";import{w as $}from"./index-ca186075.js";import{W as al}from"./index-868579d1.js";/* empty css              */import"./index2-454c9625.js";import"./index2-97dbc1fc.js";const sl={class:"search-btn-box"},ul={class:"search-btn-box"},dl={__name:"undoArchivedSearch",props:{},emits:["sureData"],setup(I,{expose:x,emit:c}){const V=m=>{u.value.field1=m.field1},_=f(!1),C=f(null),S=()=>{C.value.layerShow()},w=()=>{_.value=!0},d=()=>{_.value=!1},u=f({field1:"",field2:"",field3:"",field4:""});x({layerShow:w});const t=f([]),y=f({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),b=[{title:"Request ID",key:"id"},{title:"Created By",key:"by"},{title:"Creation Date",key:"date"},{title:"Undo Status",key:"status"}];return(m,o)=>{const v=P,a=Y,s=T,R=g,U=E,k=G,X=M,p=$,D=H,q=z,A=ol,F=el,N=tl,L=J;return B(),W(L,{modelValue:_.value,"onUpdate:modelValue":o[5]||(o[5]=r=>_.value=r),area:["1200px","660px"],btn:m.action11,move:"",maxmin:"",title:"Undo Archived Search"},{default:l(()=>[e(N,null,{default:l(()=>[e(F,{md:24},{default:l(()=>[e(q,null,{default:l(()=>[e(p,{size:"sm","label-width":110,"label-position":"left",allowClear:"",isLabelTooltip:""},{default:l(()=>[e(X,{border:!0,size:"sm",column:"2"},{default:l(()=>[e(s,null,{label:l(()=>o[6]||(o[6]=[n("span",null,"Request ID",-1)])),default:l(()=>[e(a,null,{default:l(()=>[e(v,{allowClear:""})]),_:1})]),_:1}),e(s,null,{label:l(()=>o[7]||(o[7]=[n("span",null,"User ID",-1)])),default:l(()=>[e(a,null,{default:l(()=>[e(v,{placeholder:"Please select",allowClear:"",disabled:"",modelValue:u.value.field1,"onUpdate:modelValue":o[0]||(o[0]=r=>u.value.field1=r)},{append:l(({disabled:r})=>[n("span",{class:"point-cu",onClick:S},[e(R,{type:"layui-icon-search"})])]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,null,{label:l(()=>o[8]||(o[8]=[n("span",null,"Entry Type",-1)])),default:l(()=>[e(a,null,{default:l(()=>[e(U,{allowClear:"",placeholder:"Please select",modelValue:u.value.field2,"onUpdate:modelValue":o[1]||(o[1]=r=>u.value.field2=r)},null,8,["modelValue"])]),_:1})]),_:1}),e(s,null,{label:l(()=>o[9]||(o[9]=[n("span",null,null,-1)])),default:l(()=>[e(a)]),_:1}),e(s,{span:"2"},{label:l(()=>o[10]||(o[10]=[n("span",null,"Creation Date",-1)])),default:l(()=>[e(a,null,{default:l(()=>[n("table",null,[n("tr",null,[o[11]||(o[11]=n("td",null,"From",-1)),n("td",null,[e(k,{style:{width:"100%"},placeholder:"Please select",modelValue:u.value.field3,"onUpdate:modelValue":o[2]||(o[2]=r=>u.value.field3=r),format:"YYYY/MM/DD",allowClear:""},null,8,["modelValue"])]),o[12]||(o[12]=n("td",null,"To",-1)),n("td",null,[e(k,{style:{width:"100%"},placeholder:"Please select",modelValue:u.value.field4,"onUpdate:modelValue":o[3]||(o[3]=r=>u.value.field4=r),format:"YYYY/MM/DD",allowClear:""},null,8,["modelValue"])])])])]),_:1})]),_:1})]),_:1})]),_:1}),n("div",sl,[e(D,{type:"primary",onClick:m.Reset},{default:l(()=>o[13]||(o[13]=[i("Reset")])),_:1},8,["onClick"]),e(D,{onClick:m.Search,type:"primary"},{default:l(()=>o[14]||(o[14]=[i("Search")])),_:1},8,["onClick"])])]),_:1}),e(q,{title:"Search Results"},{default:l(()=>[e(A,{columns:b,"data-source":t.value,page:y.value,resize:""},{name:l(({data:r})=>[n("a",{onClick:o[4]||(o[4]=(...Z)=>m.openModal&&m.openModal(...Z)),class:"modal-link"},j(r.name),1)]),_:1},8,["data-source","page"])]),_:1}),n("div",ul,[e(D,{onClick:d},{default:l(()=>o[15]||(o[15]=[i("Cancel")])),_:1}),e(D,{type:"primary"},{default:l(()=>o[16]||(o[16]=[i("Confirm")])),_:1})])]),_:1})]),_:1}),e(nl,{ref_key:"userRef",ref:C,onSureData:V},null,512)]),_:1},8,["modelValue","btn"])}}},il={class:"top-use-box"},rl={class:"top-use-fun"},xl={__name:"index",emits:["sureRouter","filterData"],setup(I,{emit:x}){const c=f(null),V=f(null),_=u=>{d.value.field1=u.field1},C=u=>{d.value.field4=u.field1},S=()=>{V.value.layerShow()},w=()=>{c.value.layerShow()},d=f({field1:"",field2:"",field3:"",field4:""});return(u,t)=>{const y=Q,b=g,m=h,o=z,v=P,a=Y,s=T,R=E,U=al,k=M,X=$;return B(),K(O,null,[e(X,{model:d.value,size:"sm",ref:"layFormRef",required:"",isLabelTooltip:""},{default:l(()=>[e(o,{class:"top-use-card"},{default:l(()=>[n("div",il,[t[6]||(t[6]=n("h1",{class:"top-use-title"},"Undo Archived",-1)),n("div",rl,[e(m,{size:"md"},{default:l(()=>[e(y,{position:"top",content:"save","is-dark":""},{default:l(()=>t[4]||(t[4]=[n("span",{class:"iconfont icon-baocun"},null,-1)])),_:1}),e(y,{position:"top",content:"delete","is-dark":""},{default:l(()=>t[5]||(t[5]=[n("span",{class:"iconfont icon-rubber"},null,-1)])),_:1}),e(y,{position:"top",content:"refresh","is-dark":""},{default:l(()=>[n("span",null,[e(b,{type:"layui-icon-refresh"})])]),_:1}),e(y,{position:"top",content:"create","is-dark":""},{default:l(()=>[n("span",null,[e(b,{type:"layui-icon-addition"})])]),_:1})]),_:1})])])]),_:1}),e(o,null,{default:l(()=>[e(k,{border:!0,size:"sm",column:"2"},{default:l(()=>[e(s,null,{label:l(()=>t[7]||(t[7]=[n("span",null,"Request ID",-1)])),default:l(()=>[e(a,null,{default:l(()=>[e(v,{placeholder:"Please select",allowClear:"",disabled:"",modelValue:d.value.field1,"onUpdate:modelValue":t[0]||(t[0]=p=>d.value.field1=p)},{append:l(({disabled:p})=>[n("span",{class:"point-cu",onClick:S},[e(b,{type:"layui-icon-search"})])]),_:1},8,["modelValue"]),t[8]||(t[8]=i(" XX XXXXXXXXXXXXXXXX 522421 "))]),_:1})]),_:1}),e(s,null,{label:l(()=>t[9]||(t[9]=[n("span",null,"Undo Status",-1)])),default:l(()=>[e(a,null,{default:l(()=>t[10]||(t[10]=[i(" Complete ")])),_:1})]),_:1}),e(s,null,{label:l(()=>t[11]||(t[11]=[n("span",null,[i("Entry Type "),n("em",{class:"require-xin"},"*")],-1)])),default:l(()=>[e(a,null,{default:l(()=>[e(R,{allowClear:"",placeholder:"Please select",modelValue:d.value.field2,"onUpdate:modelValue":t[1]||(t[1]=p=>d.value.field2=p)},null,8,["modelValue"])]),_:1})]),_:1}),e(s,null,{label:l(()=>t[12]||(t[12]=[i("IDs "),n("em",{class:"require-xin"},"*",-1)])),default:l(()=>[e(a,null,{default:l(()=>[e(U,{placeholder:"Please enter",modelValue:d.value.field3,"onUpdate:modelValue":t[2]||(t[2]=p=>d.value.field3=p),style:{"min-height":"50px"}},null,8,["modelValue"])]),_:1})]),_:1}),e(s,null,{label:l(()=>t[13]||(t[13]=[n("span",null,"No. of Record(s)",-1)])),default:l(()=>[e(a,null,{default:l(()=>t[14]||(t[14]=[i("2 ")])),_:1})]),_:1}),e(s,null,{label:l(()=>t[15]||(t[15]=[n("span",null,"System Message",-1)])),default:l(()=>[e(a,null,{default:l(()=>t[16]||(t[16]=[i(" Undo Request has error. Refer to Undo Archive Exception Report for details. ")])),_:1})]),_:1}),e(s,null,{label:l(()=>t[17]||(t[17]=[n("span",null,"Creation Date Time",-1)])),default:l(()=>[e(a,null,{default:l(()=>t[18]||(t[18]=[i("2024/06/26 14:57 ")])),_:1})]),_:1}),e(s,null,{label:l(()=>t[19]||(t[19]=[n("span",null,"Created By",-1)])),default:l(()=>[e(a,null,{default:l(()=>[e(v,{placeholder:"Please select",allowClear:"",disabled:"",modelValue:d.value.field4,"onUpdate:modelValue":t[3]||(t[3]=p=>d.value.field4=p)},{append:l(({disabled:p})=>[n("span",{class:"point-cu",onClick:w},[e(b,{type:"layui-icon-search"})])]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,null,{label:l(()=>t[20]||(t[20]=[n("span",null,"Last Updated Date Time",-1)])),default:l(()=>[e(a,null,{default:l(()=>t[21]||(t[21]=[i("2024/06/26 14:57 ")])),_:1})]),_:1}),e(s,null,{label:l(()=>t[22]||(t[22]=[n("span",null,"Updated By",-1)])),default:l(()=>[e(a,null,{default:l(()=>t[23]||(t[23]=[i("SYS-System ")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"]),e(ll,{ref_key:"personRef",ref:c,onSureData:_},null,512),e(dl,{ref_key:"requestRef",ref:V,onSureData:C},null,512)],64)}}};export{xl as default};
