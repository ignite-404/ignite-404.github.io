import{_ as P,u as $,a as V,b as J,o as n,c as b,i as y,f as e,w as o,Z as _,C as L,e as f,t as w,h as v,p as E,l as W,k as Z,q as j,n as G,y as K,z as O}from"./index-0f1dbffa.js";import{c as Q}from"./index-791fece4.js";import{J as X}from"./index-2d4ddb61.js";import{V as Y}from"./index-653c2f3d.js";import{y as ee,f as te}from"./index-15df4815.js";/* empty css              *//* empty css              */import{U as oe,B as le}from"./index-09643b1a.js";import{w as ae}from"./index-c88e3fd6.js";import"./index2-f5b11353.js";import"./index2-84f017df.js";const ne=h=>(K("data-v-a679cfab"),h=h(),O(),h),ie={class:"details-main"},de={class:"details-view"},se={class:"point-cu"},re={class:"point-cu"},ue=ne(()=>y("br",null,null,-1)),me={key:1},pe={key:1},ce={key:1},_e={key:1},fe={class:"footer"},ve={class:"footer-button"},ye={__name:"AddConfigurationInformation",setup(h){const x=$(),R=V("");J(()=>{console.log(x.currentRoute.value.query.id),x.currentRoute.value.query.id?R.value="Edit Meter Read Information":R.value="Add Meter Read Information"});const D=[{title:"名称",width:"200px",key:"name",customSlot:"name"},{title:"描述",key:"description",customSlot:"description"},{title:"重量",key:"weight",width:"100px",customSlot:"weight"},{title:"备注",key:"remark",ellipsisTooltip:!0,customSlot:"remark"},{title:"操作",width:"180px",key:"operate",customSlot:"operate",ellipsisTooltip:!0}],k=V([{id:"1",name:"测试",description:"描述",weight:"∞",remark:"描述 "},{id:"2",name:"测试",description:"描述",weight:"∞",remark:"描述"},{id:"3",name:"测试",description:"layui",weight:"∞",remark:"描述"},{id:"4",name:"测试",description:"描述",weight:"∞",remark:"描述 "},{id:"5",name:"测试",description:"描述",weight:"∞",remark:"描述"},{id:"6",name:"测试",description:"描述",weight:"∞",remark:"描述 "}]),T=i=>{i.isEdit=!0},M=i=>{i.isEdit=!1},g=(i,l,p)=>{l[p]=i},U=i=>{_.confirm("确定删除此条数据？",{btn:[{text:"确定",callback:()=>{k.value.forEach((l,p)=>{l.id===i.id&&k.value.splice(p,1)}),_.closeAll()}},{text:"取消",callback:()=>{_.closeAll()}}]})},q=()=>{k.value.push({id:(k.value.length+1).toString(),name:"layui",description:"layui",weight:"∞",remark:"描述"})},a=V({name:"",domain:"",admin:"",approver:"",effectiveDate:["2022-09-25","2022-10-25"],type:"",taskName:"",description:"",executor:"",principal:"",remindTime:"01:01:01",taskType:""}),I=V(),z=()=>{I.value.validate((i,l,p)=>{if(i){let d=_.load(1);setTimeout(()=>{_.close(d),_.msg("提交成功",{icon:1,time:1e3}),a.value={name:"",domain:"",admin:"",approver:"",effectiveDate:["2022-09-25","2022-10-25"],type:"",taskName:"",description:"",executor:"",principal:"",remindTime:"01:01:01",taskType:""},setTimeout(()=>{I.value.clearValidate()},200)},2e3)}})};return(i,l)=>{const p=W,d=Z,u=j,m=ee,r=oe,C=le,A=G,N=te,S=Y,B=ae,c=L,F=X,H=Q;return n(),b("div",ie,[y("div",de,[e(H,{fluid:!0,class:"details-container"},{default:o(()=>[e(B,{model:a.value,"label-width":140,size:"sm",ref_key:"layFormRef",ref:I,required:"",isLabelTooltip:""},{default:o(()=>[e(S,{title:"content"},{default:o(()=>[e(N,null,{default:o(()=>[e(m,{md:"12"},{default:o(()=>[e(u,{label:"Meter Numer",prop:"name"},{default:o(()=>[e(d,{placeholder:"",modelValue:a.value.name,"onUpdate:modelValue":l[0]||(l[0]=t=>a.value.name=t),disabled:""},{append:o(({disabled:t})=>[y("span",se,[e(p,{type:"layui-icon-search"})])]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(m,{md:"12"},{default:o(()=>[e(u,{label:"Read Route",prop:"domain"},{default:o(()=>[e(d,{placeholder:"",modelValue:a.value.domain,"onUpdate:modelValue":l[1]||(l[1]=t=>a.value.domain=t)},{append:o(({disabled:t})=>[y("span",re,[e(p,{type:"layui-icon-search"})])]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(m,{md:"12"},{default:o(()=>[e(u,{label:"Meter Read Cycle",prop:"admin"},{default:o(()=>[e(C,{modelValue:a.value.admin,"onUpdate:modelValue":l[2]||(l[2]=t=>a.value.admin=t)},{default:o(()=>[e(r,{value:"1",label:"10 - 4 Monthly"}),e(r,{value:"2",label:"20"}),e(r,{value:"3",label:"90"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(m,{md:"12"},{default:o(()=>[e(u,{label:"Route Sequence",prop:"domain"},{default:o(()=>[e(d,{placeholder:"",modelValue:a.value.domain,"onUpdate:modelValue":l[3]||(l[3]=t=>a.value.domain=t)},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{md:"12"},{default:o(()=>[e(u,{label:"Connection Status",prop:"approver"},{default:o(()=>[e(C,{modelValue:a.value.approver,"onUpdate:modelValue":l[4]||(l[4]=t=>a.value.approver=t)},{default:o(()=>[e(r,{value:"1",label:"C- Connected"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(m,{md:"12"},{default:o(()=>[e(u,{label:"MR Warning",prop:"type"},{default:o(()=>[e(C,{modelValue:a.value.type,"onUpdate:modelValue":l[5]||(l[5]=t=>a.value.type=t)},{default:o(()=>[e(r,{value:"1",label:"Premise(s) burnt"}),e(r,{value:"2",label:"Inaccessible meter - premises guarded by dogs"}),e(r,{value:"3",label:"Inaccessible, other special reasons"}),e(r,{value:"4",label:"Meter location is out of the assigned route"}),e(r,{value:"5",label:"Position of meter is dangerous to meter reader"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(m,{md:"12"},{default:o(()=>[e(u,{label:"MR Read Contact Inormation Phone",prop:"name"},{default:o(()=>[e(d,{placeholder:"",modelValue:a.value.name,"onUpdate:modelValue":l[6]||(l[6]=t=>a.value.name=t)},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{md:"12"},{default:o(()=>[e(u,{label:"Equipment",prop:"effectiveDate"},{default:o(()=>[e(A,{modelValue:a.value.effectiveDate,"onUpdate:modelValue":l[7]||(l[7]=t=>a.value.effectiveDate=t),rangeSeparator:"~",style:{width:"100%"},range:"",placeholder:"type : date"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"]),ue,e(S,{title:"list"},{default:o(()=>[e(F,{columns:D,"data-source":k.value},{name:o(({data:t})=>[t.isEdit?(n(),f(d,{key:0,"model-value":t.name,onInput:s=>g(s,t,"name")},null,8,["model-value","onInput"])):(n(),b("span",me,w(t.name),1))]),description:o(({data:t})=>[t.isEdit?(n(),f(d,{key:0,"model-value":t.description,onInput:s=>g(s,t,"description")},null,8,["model-value","onInput"])):(n(),b("span",pe,w(t.description),1))]),weight:o(({data:t})=>[t.isEdit?(n(),f(d,{key:0,"model-value":t.weight,onInput:s=>g(s,t,"weight")},null,8,["model-value","onInput"])):(n(),b("span",ce,w(t.weight),1))]),remark:o(({data:t})=>[t.isEdit?(n(),f(d,{key:0,"model-value":t.remark,onInput:s=>g(s,t,"remark")},null,8,["model-value","onInput"])):(n(),b("span",_e,w(t.remark),1))]),operate:o(({data:t})=>[t.isEdit?E("",!0):(n(),f(c,{key:0,type:"primary",size:"xs",onClick:s=>T(t)},{default:o(()=>[v(" Edit ")]),_:2},1032,["onClick"])),t.isEdit?(n(),f(c,{key:1,type:"primary",size:"xs",onClick:s=>M(t)},{default:o(()=>[v(" Save ")]),_:2},1032,["onClick"])):E("",!0),e(c,{type:"danger",size:"xs",onClick:s=>U(t)},{default:o(()=>[v(" Delete ")]),_:2},1032,["onClick"])]),_:1},8,["data-source"]),e(c,{border:"green","border-style":"dashed",fluid:!0,onClick:q,style:{"margin-top":"10px"}},{default:o(()=>[v("ADD")]),_:1})]),_:1})]),_:1})]),y("div",fe,[y("div",ve,[e(c,{size:"sm",type:"primary",onClick:z},{default:o(()=>[v("Submit")]),_:1}),e(c,{size:"sm"},{default:o(()=>[v("Reset")]),_:1})])])])}}},Ee=P(ye,[["__scopeId","data-v-a679cfab"]]);export{Ee as default};