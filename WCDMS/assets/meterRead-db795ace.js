import{a as u,o as b,c as E,f as e,w as l,i as t,h as p,t as M,F as G,Z as x,l as U,k as J,q as K,m as $,n as O,K as j,C as L,e as S,p as Q,s as A,_ as X,u as ee,x as le,L as te,y as ae,z as oe}from"./index-0f1dbffa.js";import{c as ne}from"./index-791fece4.js";import{y as se,f as ie}from"./index-15df4815.js";import{J as B}from"./index-2d4ddb61.js";import{V as P}from"./index-653c2f3d.js";/* empty css              */import{n as de,Z as re}from"./index-203e73ba.js";/* empty css              *//* empty css              *//* empty css              */import{_ as ue}from"./meterReadSearch-205f8e9a.js";import{_ as ce}from"./meterReaderSearch-6b3506ed.js";import{_ as pe}from"./meterSearch-cb379aa9.js";import{U as F,B as H}from"./index-09643b1a.js";import{w as _e}from"./index-c88e3fd6.js";import"./index2-f5b11353.js";import"./index2-84f017df.js";const me=t("span",null,"Meter Read ID",-1),fe=t("span",null,[p("Meter Number "),t("em",{class:"require-xin"},"*")],-1),ye={class:"descriptions-flex"},ve={style:{"padding-left":"10px"}},he=t("span",null,[p("Reading Date/Time "),t("em",{class:"require-xin"},"*")],-1),be=t("span",null,[p("Premise ID"),t("em",{class:"require-xin"},"*")],-1),ke=t("div",{class:"descriptions-flex"},[t("span",{class:"key-color"},"4930975385"),t("span",{style:{"padding-left":"10px"}},"3889077216 / MELV15 / 10000000001 / ELV10000000001- Active - CM, Dial 4.4 / M25610/ 950 / 13")],-1),ge=t("span",null,"Billable",-1),Ce=t("span",null,"Meter Read Source *",-1),Ve=t("span",null,[p("Meter Reading "),t("em",{class:"require-xin"},"*")],-1),Re=t("span",null,"Field Worker ID",-1),xe=t("span",null,"TSE Chun Wai",-1),we=t("span",null,[p("Read Type "),t("em",{class:"require-xin"},"*")],-1),De=t("span",null,"Create By",-1),Se=t("span",null,"Usage",-1),Me=t("span",null,"Previous Reading Content",-1),Ee=t("span",{class:"key-color"},"60-Regualr, 2018/07/24 10:08:06,292.222",-1),Ue=t("span",null,"MR Security Group",-1),$e=t("span",null,"MR",-1),Pe=t("span",{class:"key-color"},"48293456",-1),Te={__name:"readingInformation",setup(k){const a=u({field1:"",field2:"",field3:"",field4:"",field5:!1,field6:"",field7:"",field8:"",field9:"",field10:"",field11:"",field12:"",field13:""}),g=u(null),c=u(null),C=u(null),w=()=>{g.value.layerShow()},D=()=>{c.value.layerShow()},_=()=>{C.value.layerShow()},y=n=>{a.value.field1=n.field8,a.value.field3=n.field3,a.value.field5=n.field5},m=n=>{a.value.field8=n.field1},V=n=>{a.value.field2=n.field1,a.value.field11=n.field3,a.value.field12=n.field5},R=()=>{x.confirm("Outstanding Special Read Re-Read FA is found undepremise. Confirm to create?",{title:"Warning",icon:3,btn:[{text:"Yes",callback:()=>{x.closeAll()}},{text:"No",callback:()=>{x.closeAll()}}]})};return(n,s)=>{const v=U,f=J,d=K,o=de,r=$,z=O,W=j,h=F,T=H,q=L,N=re,Y=P,Z=_e;return b(),E(G,null,[e(Z,{model:a.value,size:"sm",ref:"layFormRef",required:"",isLabelTooltip:""},{default:l(()=>[e(Y,{title:"Reading Information"},{default:l(()=>[e(N,{border:!0,size:"sm",column:"2"},{default:l(()=>[e(o,{span:"2"},{label:l(()=>[me]),default:l(()=>[e(d,null,{default:l(()=>[e(f,{placeholder:"",disabled:"",allowClear:"",style:{width:"300px"},modelValue:a.value.field1,"onUpdate:modelValue":s[0]||(s[0]=i=>a.value.field1=i)},{append:l(({disabled:i})=>[t("span",{class:"point-cu",onClick:w},[e(v,{type:"layui-icon-search"})])]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(o,{span:2},{label:l(()=>[fe]),default:l(()=>[t("div",ye,[e(d,null,{default:l(()=>[e(f,{allowClear:"",placeholder:"",style:{width:"300px"},modelValue:a.value.field2,"onUpdate:modelValue":s[1]||(s[1]=i=>a.value.field2=i)},{append:l(({disabled:i})=>[t("span",{class:"point-cu",onClick:_},[e(v,{type:"layui-icon-search"})])]),_:1},8,["modelValue"])]),_:1}),t("span",ve,[e(r,null,{default:l(()=>[p(M(a.value.field11)+";"+M(a.value.field12),1)]),_:1})])])]),_:1}),e(o,{span:2},{label:l(()=>[he]),default:l(()=>[e(d,null,{default:l(()=>[e(z,{type:"datetime",placeholder:"",style:{width:"300px"},modelValue:a.value.field3,"onUpdate:modelValue":s[2]||(s[2]=i=>a.value.field3=i),format:"YYYY/MM/DD hh:mm:ss",allowClear:""},null,8,["modelValue"])]),_:1})]),_:1}),e(o,{span:"2"},{label:l(()=>[be]),default:l(()=>[ke]),_:1}),e(o,null,{label:l(()=>[ge]),default:l(()=>[e(d,null,{default:l(()=>[e(W,{name:"like",skin:"primary",disabled:"",modelValue:a.value.field5,"onUpdate:modelValue":s[3]||(s[3]=i=>a.value.field5=i)},null,8,["modelValue"])]),_:1})]),_:1}),e(o,null,{label:l(()=>[Ce]),default:l(()=>[e(d,null,{default:l(()=>[e(T,{allowClear:"",modelValue:a.value.field6,"onUpdate:modelValue":s[4]||(s[4]=i=>a.value.field6=i)},{default:l(()=>[e(h,{value:"1",label:"WCDMS- Routine Meter Read"}),e(h,{value:"2",label:"WCDMS-FA"}),e(h,{value:"3",label:"Customer Read"}),e(h,{value:"4",label:"MSNUSL"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(o,null,{label:l(()=>[Ve]),default:l(()=>[e(d,null,{default:l(()=>[e(f,{allowClear:"",placeholder:"",disabled:"",modelValue:a.value.field7,"onUpdate:modelValue":s[5]||(s[5]=i=>a.value.field7=i)},null,8,["modelValue"])]),_:1})]),_:1}),e(o,null,{label:l(()=>[Re]),default:l(()=>[e(d,null,{default:l(()=>[e(f,{allowClear:"",placeholder:"",modelValue:a.value.field8,"onUpdate:modelValue":s[6]||(s[6]=i=>a.value.field8=i)},{append:l(({disabled:i})=>[t("span",{class:"point-cu",onClick:D},[e(v,{type:"layui-icon-search"})])]),_:1},8,["modelValue"])]),_:1}),xe]),_:1}),e(o,null,{label:l(()=>[we]),default:l(()=>[e(d,null,{default:l(()=>[e(T,{allowClear:"",modelValue:a.value.field9,"onUpdate:modelValue":s[7]||(s[7]=i=>a.value.field9=i)},{default:l(()=>[e(h,{value:"1",label:"20 - No Read"}),e(h,{value:"2",label:"50 - Customer Read"}),e(h,{value:"3",label:"60 - Regular"}),e(h,{value:"4",label:"70 - Verifed"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(o,null,{label:l(()=>[De]),default:l(()=>[e(d,null,{default:l(()=>[e(f,{allowClear:"",placeholder:"",modelValue:a.value.field10,"onUpdate:modelValue":s[8]||(s[8]=i=>a.value.field10=i)},null,8,["modelValue"])]),_:1})]),_:1}),e(o,null,{label:l(()=>[Se]),_:1}),e(o,null,{label:l(()=>[Me]),default:l(()=>[Ee]),_:1}),e(o,null,{label:l(()=>[Ue]),default:l(()=>[$e]),_:1}),e(o,null,{label:l(()=>[e(q,{type:"primary",onClick:R},{default:l(()=>[p(" Reread Meter ")]),_:1})]),default:l(()=>[Pe,p(" SREADRRD;{meterno.};{premiseid};P ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"]),e(ue,{ref_key:"searchRef",ref:g,onSureData:y},null,512),e(ce,{ref_key:"searchRef1",ref:c,onSureData:m},null,512),e(pe,{ref_key:"searchRef2",ref:C,onSureData:V},null,512)],64)}}},Le={class:"circle-btn"},Ae={key:1},Be={key:1},Fe={__name:"readerRemark",setup(k){const a=u({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),g=[{title:"Create Date/Time",width:"140px",key:"name"},{title:"Meter Reader Remark",key:"description",customSlot:"description"},{title:"Automtion ID",key:"weight",width:"120px"},{title:"Processing Status",key:"remark",ellipsisTooltip:!0,customSlot:"remark"},{title:"Last Processing Date/Time",key:"processing",ellipsisTooltip:!0},{title:"Exception",key:"exception",ellipsisTooltip:!0},{title:"handles",width:"180px",key:"operate",customSlot:"operate",ellipsisTooltip:!0}],c=u([]),C=_=>{_.isEdit=!0},w=_=>{x.confirm("Are you sure to delete this data?",{title:"tips",icon:3,btn:[{text:"confirm",callback:()=>{c.value.forEach((y,m)=>{y.id===_.id&&(c.value.splice(m,1),a.value.total--)}),x.closeAll()}},{text:"cancel",callback:()=>{x.closeAll()}}]})},D=()=>{c.value.push({id:(c.value.length+1).toString(),name:"",description:"",weight:"",remark:"",isEdit:!0}),a.value.total++};return(_,y)=>{const m=U,V=A,R=$,n=F,s=H,v=L,f=B,d=P;return b(),S(d,{title:"Meter Reader Remark",style:{"margin-top":"10px"}},{extra:l(()=>[e(R,null,{default:l(()=>[e(V,{position:"top",content:"export","is-dark":""},{default:l(()=>[t("div",Le,[e(m,{type:"layui-icon-export"})])]),_:1}),e(V,{position:"top",content:"create","is-dark":""},{default:l(()=>[t("div",{onClick:D,class:"circle-btn"},[e(m,{type:"layui-icon-addition"})])]),_:1})]),_:1})]),default:l(()=>[e(f,{columns:g,"data-source":c.value,page:a.value},{description:l(({data:o})=>[o.isEdit?(b(),S(s,{key:0,modelValue:o.description,"onUpdate:modelValue":r=>o.description=r,size:"sm","show-search":!0,"allow-clear":!0},{default:l(()=>[e(n,{value:"CL-Water leaking from stop-cock",label:"CL-Water leaking from stop-cock"}),e(n,{value:"DH-Premises demolished",label:"DH-Premises demolished"}),e(n,{value:"ER-Error reading of previous reading found",label:"ER-Error reading of previous reading found"}),e(n,{value:"F-Meter location flooded",label:"F-Meter location flooded"}),e(n,{value:"FW-Meter facing wall",label:"FW-Meter facing wall"})]),_:2},1032,["modelValue","onUpdate:modelValue"])):(b(),E("span",Ae,M(o.description),1))]),remark:l(({data:o})=>[o.isEdit?(b(),S(s,{key:0,modelValue:o.remark,"onUpdate:modelValue":r=>o.remark=r,size:"sm","show-search":!0,"allow-clear":!0},{default:l(()=>[e(n,{value:"PD-Pending",label:"PD-Pending"}),e(n,{value:"ER-Completed with Error",label:"ER-Completed with Error"}),e(n,{value:"CU-Cancelled By User",label:"CU-Cancelled By User"}),e(n,{value:"CP-Completed",label:"CP-Completed"})]),_:2},1032,["modelValue","onUpdate:modelValue"])):(b(),E("span",Be,M(o.remark),1))]),operate:l(({data:o})=>[o.isEdit?Q("",!0):(b(),S(v,{key:0,type:"primary",size:"xs",onClick:r=>C(o)},{default:l(()=>[p(" Edit ")]),_:2},1032,["onClick"])),e(v,{type:"danger",size:"xs",onClick:r=>w(o)},{default:l(()=>[p(" Delete ")]),_:2},1032,["onClick"])]),_:1},8,["data-source","page"])]),_:1})}}};const I=k=>(ae("data-v-ed00e3b8"),k=k(),oe(),k),He={class:"top-use-box"},Ie=I(()=>t("h1",{class:"top-use-title"},"Meter Read",-1)),ze={class:"top-use-fun"},We=I(()=>t("span",{class:"iconfont icon-baocun"},null,-1)),qe=["innerHTML"],Ne={__name:"meterRead",setup(k){ee(),u("");const a=u("1");u({});const g=u({total:1,limit:10,current:2,layout:["page","limits","prev","next","count"]}),c=[{title:"Create Date/Time",width:"200px",key:"name"},{title:"Calculation Log",key:"description",customSlot:"description"}],C=[{name:"2024-8-20",description:"<p>ADC:0.468(Preceding period)</p><p>Period: yyyy/mm/dd - yyyy/mm/dd</p><p>Previous meter reading: 1113.0500, Reading date time:2023/09/24 00:00:00</p><p>High factor: 1:00</p><p>High factor: 1:00</p>"}],w=u(["export"]);return(D,_)=>{const y=A,m=U,V=$,R=P,n=le,s=B,v=se,f=ie,d=te,o=ne;return b(),S(o,{fluid:!0,class:"common-container"},{default:l(()=>[e(R,{class:"top-use-card"},{default:l(()=>[t("div",He,[Ie,t("div",ze,[e(V,{size:"md"},{default:l(()=>[e(y,{position:"top",content:"save","is-dark":""},{default:l(()=>[We]),_:1}),e(y,{position:"top",content:"refresh","is-dark":""},{default:l(()=>[t("span",null,[e(m,{type:"layui-icon-refresh"})])]),_:1}),e(y,{position:"top",content:"create","is-dark":""},{default:l(()=>[t("span",null,[e(m,{type:"layui-icon-addition"})])]),_:1})]),_:1})])])]),_:1}),e(d,{type:"card",modelValue:a.value,"onUpdate:modelValue":_[0]||(_[0]=r=>a.value=r)},{default:l(()=>[e(n,{title:"General",id:"1"},{default:l(()=>[e(Te),e(Fe)]),_:1}),e(n,{title:"High/Low Calculation Log",id:"2"},{default:l(()=>[e(f,null,{default:l(()=>[e(v,{md:24},{default:l(()=>[e(R,null,{default:l(()=>[e(s,{page:g.value,columns:c,dataSource:C,"default-toolbar":w.value,resize:"",onChange:D.change},{description:l(({data:r})=>[t("div",{innerHTML:r.description},null,8,qe)]),_:1},8,["page","default-toolbar","onChange"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}}},dl=X(Ne,[["__scopeId","data-v-ed00e3b8"]]);export{dl as default};
