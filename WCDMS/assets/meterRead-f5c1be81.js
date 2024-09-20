import{a as m,o as k,c as E,f as e,w as l,i as a,h as c,t as S,F as G,Z as x,l as U,k as K,q as O,m as P,n as j,K as J,C as W,e as M,p as Q,E as z,_ as X,u as h,x as ee,L as le}from"./index-a9e193d8.js";import{c as te}from"./index-a3ff275a.js";import{y as ae,f as oe}from"./index-5c87c2db.js";import{Z as A}from"./index-5c44996e.js";import{V as L}from"./index-362eaca0.js";/* empty css              */import{n as ne,Z as ie}from"./index-4df89be4.js";/* empty css              *//* empty css              *//* empty css              */import{_ as se}from"./meterReadSearch-0a53ab2c.js";import{_ as re}from"./meterReaderSearch-19096e83.js";import{_ as de}from"./meterSearch-4f0cc28d.js";import{U as B,B as F}from"./index-5bfab842.js";import{w as ue}from"./index-31dd4159.js";import"./index2-db5e8257.js";import"./index2-db67ae5b.js";const pe={class:"descriptions-flex"},me={style:{"padding-left":"10px"}},fe={__name:"readingInformation",setup(T){const o=m({field1:"",field2:"",field3:"",field4:"",field5:!1,field6:"",field7:"",field8:"",field9:"",field10:"",field11:"",field12:"",field13:""}),g=m(null),f=m(null),C=m(null),w=()=>{g.value.layerShow()},D=()=>{f.value.layerShow()},r=()=>{C.value.layerShow()},d=i=>{o.value.field1=i.field8,o.value.field3=i.field3,o.value.field5=i.field5},_=i=>{o.value.field8=i.field1},V=i=>{o.value.field2=i.field1,o.value.field11=i.field3,o.value.field12=i.field5},R=()=>{x.confirm("Outstanding Special Read Re-Read FA is found undepremise. Confirm to create?",{title:"Warning",icon:3,btn:[{text:"Yes",callback:()=>{x.closeAll()}},{text:"No",callback:()=>{x.closeAll()}}]})};return(i,t)=>{const v=U,y=K,u=O,n=ne,p=P,H=j,N=J,b=B,$=F,q=W,I=ie,Y=L,Z=ue;return k(),E(G,null,[e(Z,{model:o.value,size:"sm",ref:"layFormRef",required:"",isLabelTooltip:""},{default:l(()=>[e(Y,{title:"Reading Information"},{default:l(()=>[e(I,{border:!0,size:"sm",column:"2"},{default:l(()=>[e(n,{span:"2"},{label:l(()=>t[9]||(t[9]=[a("span",null,"Meter Read ID",-1)])),default:l(()=>[e(u,null,{default:l(()=>[e(y,{placeholder:"",disabled:"",allowClear:"",style:{width:"300px"},modelValue:o.value.field1,"onUpdate:modelValue":t[0]||(t[0]=s=>o.value.field1=s)},{append:l(({disabled:s})=>[a("span",{class:"point-cu",onClick:w},[e(v,{type:"layui-icon-search"})])]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(n,{span:2},{label:l(()=>t[10]||(t[10]=[a("span",null,[c("Meter Number "),a("em",{class:"require-xin"},"*")],-1)])),default:l(()=>[a("div",pe,[e(u,null,{default:l(()=>[e(y,{allowClear:"",placeholder:"",style:{width:"300px"},modelValue:o.value.field2,"onUpdate:modelValue":t[1]||(t[1]=s=>o.value.field2=s)},{append:l(({disabled:s})=>[a("span",{class:"point-cu",onClick:r},[e(v,{type:"layui-icon-search"})])]),_:1},8,["modelValue"])]),_:1}),a("span",me,[e(p,null,{default:l(()=>[c(S(o.value.field11)+";"+S(o.value.field12),1)]),_:1})])])]),_:1}),e(n,{span:2},{label:l(()=>t[11]||(t[11]=[a("span",null,[c("Reading Date/Time "),a("em",{class:"require-xin"},"*")],-1)])),default:l(()=>[e(u,null,{default:l(()=>[e(H,{type:"datetime",placeholder:"",style:{width:"300px"},modelValue:o.value.field3,"onUpdate:modelValue":t[2]||(t[2]=s=>o.value.field3=s),format:"YYYY/MM/DD hh:mm:ss",allowClear:""},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:"2"},{label:l(()=>t[12]||(t[12]=[a("span",null,[c("Premise ID"),a("em",{class:"require-xin"},"*")],-1)])),default:l(()=>[t[13]||(t[13]=a("div",{class:"descriptions-flex"},[a("span",{class:"key-color"},"4930975385"),a("span",{style:{"padding-left":"10px"}},"3889077216 / MELV15 / 10000000001 / ELV10000000001- Active - CM, Dial 4.4 / M25610/ 950 / 13")],-1))]),_:1}),e(n,null,{label:l(()=>t[14]||(t[14]=[a("span",null,"Billable",-1)])),default:l(()=>[e(u,null,{default:l(()=>[e(N,{name:"like",skin:"primary",disabled:"",modelValue:o.value.field5,"onUpdate:modelValue":t[3]||(t[3]=s=>o.value.field5=s)},null,8,["modelValue"])]),_:1})]),_:1}),e(n,null,{label:l(()=>t[15]||(t[15]=[a("span",null,"Meter Read Source *",-1)])),default:l(()=>[e(u,null,{default:l(()=>[e($,{allowClear:"",modelValue:o.value.field6,"onUpdate:modelValue":t[4]||(t[4]=s=>o.value.field6=s)},{default:l(()=>[e(b,{value:"1",label:"WCDMS- Routine Meter Read"}),e(b,{value:"2",label:"WCDMS-FA"}),e(b,{value:"3",label:"Customer Read"}),e(b,{value:"4",label:"MSNUSL"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(n,null,{label:l(()=>t[16]||(t[16]=[a("span",null,[c("Meter Reading "),a("em",{class:"require-xin"},"*")],-1)])),default:l(()=>[e(u,null,{default:l(()=>[e(y,{allowClear:"",placeholder:"",disabled:"",modelValue:o.value.field7,"onUpdate:modelValue":t[5]||(t[5]=s=>o.value.field7=s)},null,8,["modelValue"])]),_:1})]),_:1}),e(n,null,{label:l(()=>t[17]||(t[17]=[a("span",null,"Field Worker ID",-1)])),default:l(()=>[e(u,null,{default:l(()=>[e(y,{allowClear:"",placeholder:"",modelValue:o.value.field8,"onUpdate:modelValue":t[6]||(t[6]=s=>o.value.field8=s)},{append:l(({disabled:s})=>[a("span",{class:"point-cu",onClick:D},[e(v,{type:"layui-icon-search"})])]),_:1},8,["modelValue"])]),_:1}),t[18]||(t[18]=a("span",null,"TSE Chun Wai",-1))]),_:1}),e(n,null,{label:l(()=>t[19]||(t[19]=[a("span",null,[c("Read Type "),a("em",{class:"require-xin"},"*")],-1)])),default:l(()=>[e(u,null,{default:l(()=>[e($,{allowClear:"",modelValue:o.value.field9,"onUpdate:modelValue":t[7]||(t[7]=s=>o.value.field9=s)},{default:l(()=>[e(b,{value:"1",label:"20 - No Read"}),e(b,{value:"2",label:"50 - Customer Read"}),e(b,{value:"3",label:"60 - Regular"}),e(b,{value:"4",label:"70 - Verifed"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(n,null,{label:l(()=>t[20]||(t[20]=[a("span",null,"Create By",-1)])),default:l(()=>[e(u,null,{default:l(()=>[e(y,{allowClear:"",placeholder:"",modelValue:o.value.field10,"onUpdate:modelValue":t[8]||(t[8]=s=>o.value.field10=s)},null,8,["modelValue"])]),_:1})]),_:1}),e(n,null,{label:l(()=>t[21]||(t[21]=[a("span",null,"Usage",-1)])),_:1}),e(n,null,{label:l(()=>t[22]||(t[22]=[a("span",null,"Previous Reading Content",-1)])),default:l(()=>[t[23]||(t[23]=a("span",{class:"key-color"},"60-Regualr, 2018/07/24 10:08:06,292.222",-1))]),_:1}),e(n,null,{label:l(()=>t[24]||(t[24]=[a("span",null,"Estimation Basis",-1)])),default:l(()=>[t[25]||(t[25]=a("span",null,null,-1))]),_:1}),e(n,null,{label:l(()=>[e(q,{type:"primary",onClick:R},{default:l(()=>t[26]||(t[26]=[c(" Reread Meter ")])),_:1})]),default:l(()=>[t[27]||(t[27]=a("span",{class:"key-color"},"48293456",-1)),t[28]||(t[28]=c(" SREADRRD;{meterno.};{premiseid};P "))]),_:1}),e(n,null,{label:l(()=>t[29]||(t[29]=[a("span",null,"MR Security Group",-1)])),default:l(()=>[t[30]||(t[30]=a("span",null,"MR",-1))]),_:1})]),_:1})]),_:1})]),_:1},8,["model"]),e(se,{ref_key:"searchRef",ref:g,onSureData:d},null,512),e(re,{ref_key:"searchRef1",ref:f,onSureData:_},null,512),e(de,{ref_key:"searchRef2",ref:C,onSureData:V},null,512)],64)}}},ce={class:"circle-btn"},_e={key:1},ye={key:1},ve={__name:"readerRemark",setup(T){const o=m({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),g=[{title:"Create Date/Time",width:"140px",key:"time"},{title:"Meter Reader Remark",key:"description",customSlot:"description"},{title:"Automtion ID",key:"weight",width:"120px"},{title:"Processing Status",key:"remark",ellipsisTooltip:!0,customSlot:"remark"},{title:"Last Processing Date/Time",key:"processing",ellipsisTooltip:!0},{title:"Exception",key:"exception",ellipsisTooltip:!0},{title:"handles",width:"180px",key:"operate",customSlot:"operate",ellipsisTooltip:!0}],f=m([{time:"2023/05/06 16:27:58",description:"MP. Wrong meter particulars including meter type and size",remark:"PD-Pending"}]),C=r=>{r.isEdit=!0},w=r=>{x.confirm("Are you sure to delete this data?",{title:"tips",icon:3,btn:[{text:"confirm",callback:()=>{f.value.forEach((d,_)=>{d.id===r.id&&(f.value.splice(_,1),o.value.total--)}),x.closeAll()}},{text:"cancel",callback:()=>{x.closeAll()}}]})},D=()=>{f.value.push({id:(f.value.length+1).toString(),name:"",description:"",weight:"",remark:"",isEdit:!0}),o.value.total++};return(r,d)=>{const _=U,V=z,R=P,i=B,t=F,v=W,y=A,u=L;return k(),M(u,{title:"Meter Reader Remark"},{extra:l(()=>[e(R,null,{default:l(()=>[e(V,{position:"top",content:"export","is-dark":""},{default:l(()=>[a("div",ce,[e(_,{type:"layui-icon-export"})])]),_:1}),e(V,{position:"top",content:"create","is-dark":""},{default:l(()=>[a("div",{onClick:D,class:"circle-btn"},[e(_,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:l(()=>[e(y,{columns:g,"data-source":f.value,page:o.value},{description:l(({data:n})=>[n.isEdit?(k(),M(t,{key:0,modelValue:n.description,"onUpdate:modelValue":p=>n.description=p,size:"sm","show-search":!0,"allow-clear":!0},{default:l(()=>[e(i,{value:"CL-Water leaking from stop-cock",label:"CL-Water leaking from stop-cock"}),e(i,{value:"DH-Premises demolished",label:"DH-Premises demolished"}),e(i,{value:"ER-Error reading of previous reading found",label:"ER-Error reading of previous reading found"}),e(i,{value:"F-Meter location flooded",label:"F-Meter location flooded"}),e(i,{value:"FW-Meter facing wall",label:"FW-Meter facing wall"}),e(i,{value:"Mp.Wrong meter particulars including meter type and size",label:"Mp.Wrong meter particulars including meter type and size"})]),_:2},1032,["modelValue","onUpdate:modelValue"])):(k(),E("span",_e,S(n.description),1))]),remark:l(({data:n})=>[n.isEdit?(k(),M(t,{key:0,modelValue:n.remark,"onUpdate:modelValue":p=>n.remark=p,size:"sm","show-search":!0,"allow-clear":!0},{default:l(()=>[e(i,{value:"PD-Pending",label:"PD-Pending"}),e(i,{value:"ER-Completed with Error",label:"ER-Completed with Error"}),e(i,{value:"CU-Cancelled By User",label:"CU-Cancelled By User"}),e(i,{value:"CP-Completed",label:"CP-Completed"})]),_:2},1032,["modelValue","onUpdate:modelValue"])):(k(),E("span",ye,S(n.remark),1))]),operate:l(({data:n})=>[n.isEdit?Q("",!0):(k(),M(v,{key:0,type:"primary",size:"xs",onClick:p=>C(n)},{default:l(()=>d[0]||(d[0]=[c(" Edit ")])),_:2},1032,["onClick"])),e(v,{type:"danger",size:"xs",onClick:p=>w(n)},{default:l(()=>d[1]||(d[1]=[c(" Delete ")])),_:2},1032,["onClick"])]),_:1},8,["data-source","page"])]),_:1})}}};const be={class:"top-use-box"},ke={class:"top-use-fun"},ge=["innerHTML"],Ce={__name:"meterRead",setup(T){h(),m("");const o=m("1");m({});const g=m({total:1,limit:10,current:2,layout:["page","limits","prev","next","count"]}),f=[{title:"Create Date/Time",width:"200px",key:"name"},{title:"Calculation Log",key:"description",customSlot:"description"}],C=[{name:"2024-8-20 20:00:00",description:`<p>ADC: 0.449153 ( Last year same period )</p><p>
Period: 2021112128-2022104125</p><p>
Previous meter reading: 102.656 , Reading date time : 2023/01/06 13:36:40</p><p>
No.of consumption days: 118</p><p>
Low factor: 0.33</p><p>
High factor: 2.5</p><p>
Low valid reading: 120.4425</p><p>
High valid reading: 237.4019</p>`}],w=m(["export"]);return(D,r)=>{const d=z,_=U,V=P,R=L,i=ee,t=A,v=ae,y=oe,u=le,n=te;return k(),M(n,{fluid:!0,class:"common-container"},{default:l(()=>[e(R,{class:"top-use-card"},{default:l(()=>[a("div",be,[r[3]||(r[3]=a("h1",{class:"top-use-title"},"Meter Read",-1)),a("div",ke,[e(V,{size:"md"},{default:l(()=>[e(d,{position:"top",content:"save","is-dark":""},{default:l(()=>r[1]||(r[1]=[a("span",{class:"iconfont icon-baocun"},null,-1)])),_:1}),e(d,{position:"top",content:"delete","is-dark":""},{default:l(()=>r[2]||(r[2]=[a("span",{class:"iconfont icon-rubber"},null,-1)])),_:1}),e(d,{position:"top",content:"refresh","is-dark":""},{default:l(()=>[a("span",null,[e(_,{type:"layui-icon-refresh"})])]),_:1}),e(d,{position:"top",content:"create","is-dark":""},{default:l(()=>[a("span",null,[e(_,{type:"layui-icon-addition"})])]),_:1})]),_:1})])])]),_:1}),e(u,{type:"card",modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=p=>o.value=p)},{default:l(()=>[e(i,{title:"General",id:"1"},{default:l(()=>[e(fe),e(ve)]),_:1}),e(i,{title:"High/Low Calculation Log",id:"2"},{default:l(()=>[e(y,null,{default:l(()=>[e(v,{md:24},{default:l(()=>[e(R,null,{default:l(()=>[e(t,{page:g.value,columns:f,dataSource:C,"default-toolbar":w.value,resize:"",onChange:D.change},{description:l(({data:p})=>[a("div",{innerHTML:p.description},null,8,ge)]),_:1},8,["page","default-toolbar","onChange"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}}},Fe=X(Ce,[["__scopeId","data-v-1f71a52c"]]);export{Fe as default};
