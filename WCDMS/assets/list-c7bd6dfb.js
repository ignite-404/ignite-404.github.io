import{a as m,o as g,c as el,f as e,w as l,i as n,h as f,F as tl,k as N,q as E,l as P,n as al,C as M,e as $,R as G,_ as j,t as nl,E as H,m as O,u as ol}from"./index-5ba83812.js";import{c as sl}from"./index-f7d389ff.js";import{V as I}from"./index-70d2da72.js";/* empty css              */import{n as F,Z as J}from"./index-08f7b130.js";/* empty css              *//* empty css              */import{_ as W}from"./personSearch-82190e0c.js";import{U as Y,B as q}from"./index-e1c7a2f1.js";import{w as Z}from"./index-2b452765.js";import{Z as ul}from"./index-a25747be.js";import{y as K,f as Q}from"./index-9c118bc9.js";import{W as X}from"./index-3ac82776.js";import{_ as h}from"./accountSearch-ee6d0745.js";/* empty css              */import"./index2-ab9f2a8e.js";import"./index2-75365c6f.js";const dl={class:"search-btn-box"},rl={__name:"letterInformation",emits:["sureRouter","filterData"],setup(U,{emit:c}){const V=y=>{u.value.field5=y.field4},u=m({field1:"",field2:"",field3:"",field4:"",field5:"",field6:""}),k=m(null),C=()=>{k.value.layerShow()};return(y,o)=>{const w=N,_=E,b=F,t=Y,v=q,a=P,D=al,i=J,d=M,s=I,p=Z;return g(),el(tl,null,[e(p,{model:u.value,size:"sm",ref:"layFormRef",required:"",isLabelTooltip:""},{default:l(()=>[e(s,null,{default:l(()=>[e(i,{border:!0,size:"sm",column:"2"},{default:l(()=>[e(b,null,{label:l(()=>o[6]||(o[6]=[n("span",null,"Letter Class",-1)])),default:l(()=>[e(_,null,{default:l(()=>[e(w,{placeholder:"Please enter",allowClear:"",modelValue:u.value.field1,"onUpdate:modelValue":o[0]||(o[0]=r=>u.value.field1=r)},null,8,["modelValue"])]),_:1})]),_:1}),e(b,null,{label:l(()=>o[7]||(o[7]=[n("span",null,"Letter Type",-1)])),default:l(()=>[e(_,null,{default:l(()=>[e(w,{placeholder:"Please enter",allowClear:"",modelValue:u.value.field2,"onUpdate:modelValue":o[1]||(o[1]=r=>u.value.field2=r)},null,8,["modelValue"])]),_:1})]),_:1}),e(b,null,{label:l(()=>o[8]||(o[8]=[n("span",null,"Letter Name",-1)])),default:l(()=>[e(_,null,{default:l(()=>[e(w,{placeholder:"Please enter",allowClear:"",modelValue:u.value.field3,"onUpdate:modelValue":o[2]||(o[2]=r=>u.value.field3=r)},null,8,["modelValue"])]),_:1})]),_:1}),e(b,null,{label:l(()=>o[9]||(o[9]=[f("Status")])),default:l(()=>[e(_,null,{default:l(()=>[e(v,{allowClear:"",placeholder:"Please select",modelValue:u.value.field4,"onUpdate:modelValue":o[3]||(o[3]=r=>u.value.field4=r)},{default:l(()=>[e(t,{value:"1",label:"approved"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(b,null,{label:l(()=>o[10]||(o[10]=[n("span",null,"Create By",-1)])),default:l(()=>[e(_,null,{default:l(()=>[e(w,{placeholder:"Please select",allowClear:"",disabled:"",modelValue:u.value.field5,"onUpdate:modelValue":o[4]||(o[4]=r=>u.value.field5=r)},{append:l(({disabled:r})=>[n("span",{class:"point-cu",onClick:C},[e(a,{type:"layui-icon-search"})])]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(b,null,{label:l(()=>o[11]||(o[11]=[n("span",null,"Create Date",-1)])),default:l(()=>[e(_,null,{default:l(()=>[e(D,{style:{width:"100%"},placeholder:"Please select",modelValue:u.value.field6,"onUpdate:modelValue":o[5]||(o[5]=r=>u.value.field6=r),format:"YYYY/MM/DD",allowClear:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),n("div",dl,[e(d,{type:"primary",onClick:y.Reset},{default:l(()=>o[12]||(o[12]=[f("Reset")])),_:1},8,["onClick"]),e(d,{onClick:y.SearchLetter,type:"primary"},{default:l(()=>o[13]||(o[13]=[f("Search")])),_:1},8,["onClick"])])]),_:1})]),_:1},8,["model"]),e(W,{ref_key:"searchRef",ref:k,onSureData:V},null,512)],64)}}},il={class:"search-btn-box"},pl={__name:"letterDetail",props:{},emits:["sureData"],setup(U,{expose:c,emit:V}){const u=m(!1),k=m(null),C=m(null),y=()=>{C.value.layerShow()},o=()=>{k.value.layerShow()},w=()=>{u.value=!0},_=m({field5:!1,field6:!1});return c({layerShow:w}),(b,t)=>{const v=I,a=Y,D=q,i=E,d=F,s=N,p=P,r=X,L=J,z=Z,S=M,T=K,A=Q,B=G;return g(),$(B,{modelValue:u.value,"onUpdate:modelValue":t[2]||(t[2]=x=>u.value=x),area:["1200px","770px"],btn:b.action11,move:"",maxmin:"",title:"Letter Detail"},{default:l(()=>[e(A,null,{default:l(()=>[e(T,{md:24},{default:l(()=>[e(v,{class:"top-use-card"},{default:l(()=>t[3]||(t[3]=[n("div",{class:"top-use-box"},[n("h1",{class:"top-use-title"},"General Information")],-1)])),_:1}),e(v,null,{default:l(()=>[e(z,{size:"sm","label-width":110,"label-position":"left",allowClear:"",isLabelTooltip:""},{default:l(()=>[e(L,{border:!0,size:"sm",column:"2"},{default:l(()=>[e(d,null,{label:l(()=>t[4]||(t[4]=[n("span",null,"Letter Class",-1)])),default:l(()=>[e(i,null,{default:l(()=>[e(D,{allowClear:"",disabled:""},{default:l(()=>[e(a,{value:"1",label:"Consumer Account/Auto"})]),_:1})]),_:1})]),_:1}),e(d,null,{label:l(()=>t[5]||(t[5]=[n("span",null,"Letter Type",-1)])),default:l(()=>[e(i,null,{default:l(()=>[e(D,{allowClear:"",disabled:""},{default:l(()=>[e(a,{value:"1",label:"Letter to consumer advising"})]),_:1})]),_:1})]),_:1}),e(d,null,{label:l(()=>t[6]||(t[6]=[n("span",null,"Created By",-1)])),default:l(()=>[e(i,null,{default:l(()=>t[7]||(t[7]=[f(" Jack on 2024/03/23 22:34 ")])),_:1})]),_:1}),e(d,null,{label:l(()=>t[8]||(t[8]=[n("span",null,"Relate ID",-1)])),default:l(()=>[e(i,null,{default:l(()=>t[9]||(t[9]=[f(" IC(1286390434684) ")])),_:1})]),_:1}),e(d,null,{label:l(()=>t[10]||(t[10]=[n("span",null,"Approver",-1)])),default:l(()=>[e(i,null,{default:l(()=>[e(s,{allowClear:"",disabled:""})]),_:1})]),_:1}),e(d,null,{label:l(()=>t[11]||(t[11]=[n("span",null,"Approved Date",-1)])),default:l(()=>[e(i,null,{default:l(()=>t[12]||(t[12]=[f(" Jack on 2024/03/23 22:34 ")])),_:1})]),_:1}),e(d,null,{label:l(()=>t[13]||(t[13]=[n("span",null,"Person ID",-1)])),default:l(()=>[e(i,null,{default:l(()=>[e(s,{placeholder:"",allowClear:"",modelValue:_.value.field4,"onUpdate:modelValue":t[0]||(t[0]=x=>_.value.field4=x),disabled:""},{append:l(({disabled:x})=>[n("span",{class:"point-cu",onClick:o},[e(p,{type:"layui-icon-search"})])]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(d,null,{label:l(()=>t[14]||(t[14]=[n("span",null,"Account ID",-1)])),default:l(()=>[e(i,null,{default:l(()=>[e(s,{placeholder:"",allowClear:"",modelValue:_.value.field4,"onUpdate:modelValue":t[1]||(t[1]=x=>_.value.field4=x),disabled:""},{append:l(({disabled:x})=>[n("span",{class:"point-cu",onClick:y},[e(p,{type:"layui-icon-search"})])]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(d,null,{label:l(()=>t[15]||(t[15]=[n("span",null,"Receive Person",-1)])),default:l(()=>[e(i,null,{default:l(()=>[e(s,{allowClear:"",disabled:""})]),_:1})]),_:1}),e(d,null,{label:l(()=>t[16]||(t[16]=[n("span",null,"Receive Address",-1)])),default:l(()=>[e(i,null,{default:l(()=>[e(s,{allowClear:"",disabled:""})]),_:1})]),_:1}),e(d,null,{label:l(()=>t[17]||(t[17]=[n("span",null,"Send Channel",-1)])),default:l(()=>[e(i,null,{default:l(()=>[e(D,{allowClear:"",disabled:""},{default:l(()=>[e(a,{value:"1",label:"Post"})]),_:1})]),_:1})]),_:1}),e(d,null,{label:l(()=>t[18]||(t[18]=[n("span",null,"Email Address",-1)])),default:l(()=>[e(i,null,{default:l(()=>[e(s,{allowClear:"",disabled:""})]),_:1})]),_:1}),e(d,null,{label:l(()=>t[19]||(t[19]=[n("span",null,"Phone No.",-1)])),default:l(()=>[e(i,null,{default:l(()=>[e(s,{allowClear:"",disabled:""})]),_:1})]),_:1}),e(d,null,{label:l(()=>t[20]||(t[20]=[n("span",null,"Status",-1)])),default:l(()=>[e(i,null,{default:l(()=>t[21]||(t[21]=[f(" Approved ")])),_:1})]),_:1}),e(d,{span:"2"},{label:l(()=>t[22]||(t[22]=[n("span",null,"Remarks",-1)])),default:l(()=>[e(i,null,{default:l(()=>[e(r,{placeholder:"",style:{"min-height":"50px"},disabled:""}),t[23]||(t[23]=n("span",{class:"key-color"}," 500 characters remaining",-1))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(v,{class:"top-use-card"},{default:l(()=>t[24]||(t[24]=[n("div",{class:"top-use-box"},[n("h1",{class:"top-use-title"},"Additional Information")],-1)])),_:1}),e(v,null,{default:l(()=>[e(z,{size:"sm","label-width":110,"label-position":"left",allowClear:"",isLabelTooltip:""},{default:l(()=>[e(L,{border:!0,size:"sm",column:"2"},{default:l(()=>[e(d,null,{label:l(()=>t[25]||(t[25]=[n("span",null,"Address of Company",-1)])),default:l(()=>[e(i,null,{default:l(()=>[e(s,{allowClear:"",disabled:""})]),_:1})]),_:1}),e(d,null,{label:l(()=>t[26]||(t[26]=[n("span",null,"Name of Company",-1)])),default:l(()=>[e(i,null,{default:l(()=>[e(s,{allowClear:"",disabled:""})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),n("div",il,[e(S,null,{default:l(()=>t[27]||(t[27]=[f("Cancel")])),_:1}),e(S,{type:"primary"},{default:l(()=>t[28]||(t[28]=[f("Save")])),_:1}),e(S,{type:"primary"},{default:l(()=>t[29]||(t[29]=[f("Preview")])),_:1}),e(S,{type:"primary"},{default:l(()=>t[30]||(t[30]=[f("Reject")])),_:1}),e(S,{type:"primary"},{default:l(()=>t[31]||(t[31]=[f("Approve")])),_:1})])]),_:1})]),_:1}),e(W,{ref_key:"personRef",ref:k,onSureData:b.sureData},null,8,["onSureData"]),e(h,{ref_key:"accountRef",ref:C,onSureData:b.sureData},null,8,["onSureData"])]),_:1},8,["modelValue","btn"])}}};const fl={class:"circle-btn"},ml={__name:"letterList",setup(U){const c=m(null),V=()=>{c.value.layerShow()},u=m([{class:"Dispute",ltype:"WWO261 Reason for High Water Consumption (C)",name:"letterName",id:52351568,status:"approved",by:"Mr wang",cdate:"2024/08/02",rperson:"Mr li",address:"xx road",aperson:"Mr wang",adate:"2024/08/23",stype:"air transport"}]),k=m({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),C=[{fixed:"left",type:"checkbox",title:""},{title:"Letter Class",width:"120px",key:"class"},{title:"Letter Type",key:"ltype",width:"300px"},{title:"Letter Name",key:"name",width:"120px",customSlot:"name"},{title:"Account ID",key:"id",width:"100px"},{title:"Status",width:"180px",key:"status"},{title:"Create By",width:"180px",key:"by"},{title:"Create Date",width:"200px",key:"cdate"},{title:"Receive Person",width:"180px",key:"rperson"},{title:"Receive Address",width:"280px",key:"address"},{title:"Approve Person",width:"180px",key:"aperson"},{title:"Approve Date",width:"180px",key:"adate"},{title:"Send Type",width:"180px",key:"stype"}];return(y,o)=>{const w=P,_=H,b=O,t=ul,v=I;return g(),$(v,{title:"Letter List"},{extra:l(()=>[e(b,null,{default:l(()=>[e(_,{position:"top",content:"export","is-dark":""},{default:l(()=>[n("div",fl,[e(w,{type:"layui-icon-export"})])]),_:1})]),_:1})]),default:l(()=>[e(t,{columns:C,"data-source":u.value,page:k.value,resize:""},{name:l(({data:a})=>[n("a",{onClick:V,class:"modal-link"},nl(a.name),1)]),_:1},8,["data-source","page"]),e(pl,{ref_key:"detailRef",ref:c,onSureData:y.sureData},null,8,["onSureData"])]),_:1})}}},_l=j(ml,[["__scopeId","data-v-955bb04f"]]),yl={class:"search-btn-box"},bl={__name:"letterAdd",props:{},emits:["sureData"],setup(U,{expose:c,emit:V}){const u=v=>{t.value.field4=v.field4},k=v=>{t.value.field5=v.field4},C=m(!1),y=m(null),o=m(null),w=()=>{o.value.layerShow()},_=()=>{y.value.layerShow()},b=()=>{C.value=!0},t=m({field4:"",field5:""});return c({layerShow:b}),(v,a)=>{const D=I,i=Y,d=q,s=E,p=F,r=N,L=P,z=X,S=J,T=Z,A=M,B=K,x=Q,ll=G;return g(),$(ll,{modelValue:C.value,"onUpdate:modelValue":a[2]||(a[2]=R=>C.value=R),area:["1200px","770px"],btn:v.action11,move:"",maxmin:"",title:"Letter Add"},{default:l(()=>[e(x,null,{default:l(()=>[e(B,{md:24},{default:l(()=>[e(D,{class:"top-use-card"},{default:l(()=>a[3]||(a[3]=[n("div",{class:"top-use-box"},[n("h1",{class:"top-use-title"},"General Information")],-1)])),_:1}),e(D,null,{default:l(()=>[e(T,{size:"sm","label-width":110,"label-position":"left",allowClear:"",isLabelTooltip:""},{default:l(()=>[e(S,{border:!0,size:"sm",column:"2"},{default:l(()=>[e(p,null,{label:l(()=>a[4]||(a[4]=[n("span",null,"Letter Class",-1)])),default:l(()=>[e(s,null,{default:l(()=>[e(d,{allowClear:""},{default:l(()=>[e(i,{value:"1",label:"Consumer Account/Auto"})]),_:1})]),_:1})]),_:1}),e(p,null,{label:l(()=>a[5]||(a[5]=[n("span",null,"Letter Type",-1)])),default:l(()=>[e(s,null,{default:l(()=>[e(d,{allowClear:""},{default:l(()=>[e(i,{value:"1",label:"Letter to consumer advising"})]),_:1})]),_:1})]),_:1}),e(p,null,{label:l(()=>a[6]||(a[6]=[n("span",null,"Created By",-1)])),default:l(()=>[e(s,null,{default:l(()=>a[7]||(a[7]=[f(" Jack on 2024/03/23 22:34 ")])),_:1})]),_:1}),e(p,null,{label:l(()=>a[8]||(a[8]=[n("span",null,"Relate ID",-1)])),default:l(()=>[e(s,null,{default:l(()=>a[9]||(a[9]=[f(" IC(1286390434684) ")])),_:1})]),_:1}),e(p,null,{label:l(()=>a[10]||(a[10]=[n("span",null,"Approver",-1)])),default:l(()=>[e(s,null,{default:l(()=>[e(r,{allowClear:""})]),_:1})]),_:1}),e(p,null,{label:l(()=>a[11]||(a[11]=[n("span",null,"Approved Date",-1)])),default:l(()=>[e(s,null,{default:l(()=>a[12]||(a[12]=[f(" Jack on 2024/03/23 22:34 ")])),_:1})]),_:1}),e(p,null,{label:l(()=>a[13]||(a[13]=[n("span",null,"Person ID",-1)])),default:l(()=>[e(s,null,{default:l(()=>[e(r,{placeholder:"",allowClear:"",modelValue:t.value.field4,"onUpdate:modelValue":a[0]||(a[0]=R=>t.value.field4=R),disabled:""},{append:l(({disabled:R})=>[n("span",{class:"point-cu",onClick:_},[e(L,{type:"layui-icon-search"})])]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(p,null,{label:l(()=>a[14]||(a[14]=[n("span",null,"Account ID",-1)])),default:l(()=>[e(s,null,{default:l(()=>[e(r,{placeholder:"",allowClear:"",modelValue:t.value.field5,"onUpdate:modelValue":a[1]||(a[1]=R=>t.value.field5=R),disabled:""},{append:l(({disabled:R})=>[n("span",{class:"point-cu",onClick:w},[e(L,{type:"layui-icon-search"})])]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(p,null,{label:l(()=>a[15]||(a[15]=[n("span",null,"Receive Person",-1)])),default:l(()=>[e(s,null,{default:l(()=>[e(r,{allowClear:""})]),_:1})]),_:1}),e(p,null,{label:l(()=>a[16]||(a[16]=[n("span",null,"Receive Address",-1)])),default:l(()=>[e(s,null,{default:l(()=>[e(r,{allowClear:""})]),_:1})]),_:1}),e(p,null,{label:l(()=>a[17]||(a[17]=[n("span",null,"Send Channel",-1)])),default:l(()=>[e(s,null,{default:l(()=>[e(d,{allowClear:""},{default:l(()=>[e(i,{value:"1",label:"Post"})]),_:1})]),_:1})]),_:1}),e(p,null,{label:l(()=>a[18]||(a[18]=[n("span",null,"Email Address",-1)])),default:l(()=>[e(s,null,{default:l(()=>[e(r,{allowClear:""})]),_:1})]),_:1}),e(p,null,{label:l(()=>a[19]||(a[19]=[n("span",null,"Phone No.",-1)])),default:l(()=>[e(s,null,{default:l(()=>[e(r,{allowClear:""})]),_:1})]),_:1}),e(p,null,{label:l(()=>a[20]||(a[20]=[n("span",null,"Status",-1)])),default:l(()=>[e(s,null,{default:l(()=>a[21]||(a[21]=[f(" Approved ")])),_:1})]),_:1}),e(p,{span:"2"},{label:l(()=>a[22]||(a[22]=[n("span",null,"Remarks",-1)])),default:l(()=>[e(s,null,{default:l(()=>[e(z,{placeholder:"",style:{"min-height":"50px"}}),a[23]||(a[23]=n("span",{class:"key-color"}," 500 characters remaining",-1))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(D,{class:"top-use-card"},{default:l(()=>a[24]||(a[24]=[n("div",{class:"top-use-box"},[n("h1",{class:"top-use-title"},"Additional Information")],-1)])),_:1}),e(D,null,{default:l(()=>[e(T,{size:"sm","label-width":110,"label-position":"left",allowClear:"",isLabelTooltip:""},{default:l(()=>[e(S,{border:!0,size:"sm",column:"2"},{default:l(()=>[e(p,null,{label:l(()=>a[25]||(a[25]=[n("span",null,"Address of Company",-1)])),default:l(()=>[e(s,null,{default:l(()=>[e(r,{allowClear:""})]),_:1})]),_:1}),e(p,null,{label:l(()=>a[26]||(a[26]=[n("span",null,"Name of Company",-1)])),default:l(()=>[e(s,null,{default:l(()=>[e(r,{allowClear:""})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),n("div",yl,[e(A,null,{default:l(()=>a[27]||(a[27]=[f("Cancel")])),_:1}),e(A,{type:"primary"},{default:l(()=>a[28]||(a[28]=[f("Save")])),_:1}),e(A,{type:"primary"},{default:l(()=>a[29]||(a[29]=[f("Preview")])),_:1}),e(A,{type:"primary"},{default:l(()=>a[30]||(a[30]=[f("Approve")])),_:1})])]),_:1})]),_:1}),e(W,{ref_key:"personRef",ref:y,onSureData:u},null,512),e(h,{ref_key:"accountRef",ref:o,onSureData:k},null,512)]),_:1},8,["modelValue","btn"])}}};const vl={class:"top-use-box"},wl={class:"top-use-fun"},Cl={class:"results-list"},cl={__name:"list",setup(U){const c=m([]),V=m(null),u=()=>{V.value.layerShow()},k=y=>{c.value=[{id:5956,name:"A00010",description:"就魚避村 將軍渎",weight:"鱿魚灣村 将軍澳",remark:"PDA",processing:"Download Reads",exception:"Pending",isEdit:!1},{id:5956,name:"A02712",description:"彩頤花園 3&9座",weight:"彩頤花園3&9座",remark:"PDA",processing:"Download Reads",exception:"Pending",isEdit:!1}]},C=y=>{c.value=c.value.filter(o=>o.name.toLowerCase()===y.toLowerCase())};return ol(),m(""),m("1"),m({}),m({total:1,limit:10,current:2,layout:["page","limits","prev","next","count"]}),m(["export"]),(y,o)=>{const w=H,_=P,b=O,t=I,v=sl;return g(),$(v,{fluid:!0,class:"common-container"},{default:l(()=>[e(t,{class:"top-use-card"},{default:l(()=>[n("div",vl,[o[2]||(o[2]=n("h1",{class:"top-use-title"},"Letter Maintenace",-1)),n("div",wl,[e(b,{size:"md"},{default:l(()=>[e(w,{position:"top",content:"save","is-dark":""},{default:l(()=>o[0]||(o[0]=[n("span",{class:"iconfont icon-baocun"},null,-1)])),_:1}),e(w,{position:"top",content:"delete","is-dark":""},{default:l(()=>o[1]||(o[1]=[n("span",{class:"iconfont icon-rubber"},null,-1)])),_:1}),e(w,{position:"top",content:"refresh","is-dark":""},{default:l(()=>[n("span",null,[e(_,{type:"layui-icon-refresh"})])]),_:1}),e(w,{position:"top",content:"create","is-dark":""},{default:l(()=>[n("span",{onClick:u},[e(_,{type:"layui-icon-addition"})])]),_:1})]),_:1})])])]),_:1}),n("div",Cl,[e(rl,{onSureRouter:k,onFilterData:C}),e(_l)]),e(bl,{ref_key:"addRef",ref:V,onSureData:y.sureData},null,8,["onSureData"])]),_:1})}}},El=j(cl,[["__scopeId","data-v-7c05cc1d"]]);export{El as default};
