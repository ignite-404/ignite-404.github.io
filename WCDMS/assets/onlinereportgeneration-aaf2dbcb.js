import{_ as w,b as C,a as r,o as h,c as G,f as e,w as t,e as x,i as s,p as L,F as T,u as z,z as I,J as N,h as R,n as P,q as $,C as q,m as Z}from"./index-99541687.js";import{c as F}from"./index-a6c9f0ae.js";/* empty css              */import{n as K,Z as U}from"./index-890504cf.js";/* empty css              *//* empty css              */import{V as k}from"./index-8cb0198a.js";import{s as E}from"./searchform-48c6423a.js";import{Z as J}from"./index-45f8edc9.js";/* empty css              */import"./index-d6be05a9.js";import{_ as M}from"./userSearch-3314d775.js";/* empty css                                                                   */import{_ as O}from"./userGroupSearch-9b9446d2.js";import{U as j,B as A}from"./index-f0ab03bb.js";import{$ as H,B as Q}from"./index-b3d90a3e.js";import"./routeSearch-8c046a85.js";import"./index-ca186075.js";import"./automationCodeSearch-f5ac715c.js";import"./index-0685b90a.js";import"./index2-454c9625.js";import"./index2-97dbc1fc.js";const W={__name:"tableonlinereportgeneration",props:{formType:{type:String,default:""}},emits:["addData","addLetter","editLetter"],setup(b,{expose:_,emit:S}){C(()=>{u.value.total=f.value.length,i.value.total=c.value.length});const m=function(l){let a="";switch(l){case"securityaccessgroup_ServiceRegion":a="Service District List";break;case"securityaccessgroup_BillingCycle":a="Billing Cycle List";break;case"securityaccessgroup_Report":a="Report List";break}d.value=a},d=r("Service District List"),n=r(null),o=r(null);r(null);const u=r({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),f=r([{field1:"Service Region"},{field2:""}]),i=r({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),p=[{title:"Report Code",width:"200px",key:"field1"},{title:"Description",key:"field2",width:"200px"},{title:"Generate Report Date",key:"field3",width:"200px"},{title:"Parameter",key:"field4",width:"200px"},{title:"Status",key:"field5",width:"200px"},{title:"Download",key:"field6",width:"200px",customSlot:"download"}],c=r([]);for(let l=0;l<5;l++)c.value.push({field1:"Report Code",field2:"Description",field3:"Generate Report Date",field4:"Parameters",field5:"Status",field6:"Download"});return _({init:m}),(l,a)=>{const y=J,g=k;return h(),G(T,null,[e(g,null,{default:t(()=>[b.formType=="Search Results"?(h(),x(y,{key:0,columns:p,"data-source":c.value,page:i.value,resize:""},{download:t(({row:v})=>a[0]||(a[0]=[s("a",{class:"key-color"},"Download",-1)])),_:1},8,["data-source","page"])):L("",!0)]),_:1}),e(O,{ref_key:"accessgroup_userGroupSearch",ref:o},null,512),e(M,{ref_key:"accessgroup_userSearch",ref:n},null,512)],64)}}},X=w(W,[["__scopeId","data-v-8eeffa88"]]);const Y={class:"search-btn-box"},ee={__name:"onlinereportgeneration",setup(b){z(),I({}),r(!1);const _=r("securityuser_general"),S=r(null),m=r(null),d=()=>{S.value.search({limit:10,current:1})};return N(()=>_.value,(n,o)=>{n=="securityuser_history"&&m.value.init("securityuser_history")}),(n,o)=>{const u=k,f=P,i=$,p=K,c=j,l=A,a=U,y=q,g=Z,v=H,D=Q,B=F;return h(),x(B,{fluid:!0,class:"common-container"},{default:t(()=>[e(u,{class:"top-use-card"},{default:t(()=>o[1]||(o[1]=[s("div",{class:"top-use-box"},[s("h1",{class:"top-use-title"},"Online Report Generation")],-1)])),_:1}),e(E,{formType:"batchreportretrieval",onSearch:d}),e(u,null,{default:t(()=>[e(D,{modelValue:n.openKeys,"onUpdate:modelValue":o[0]||(o[0]=V=>n.openKeys=V)},{default:t(()=>[e(v,{title:"Report Parameter Inputs",id:"Report Parameter Inputs"},{default:t(()=>[e(a,{border:!0,size:"sm",column:"1"},{default:t(()=>[e(p,null,{label:t(()=>o[2]||(o[2]=[s("span",null,[R(" Shift Date"),s("em",{class:"require-xin"},"*")],-1)])),default:t(()=>[e(i,null,{default:t(()=>[e(f,{simple:""})]),_:1})]),_:1}),e(p,null,{label:t(()=>o[3]||(o[3]=[s("span",null,"Service Region",-1)])),default:t(()=>[e(i,null,{default:t(()=>[e(l,{allowClear:""},{default:t(()=>[e(c,{value:"1",label:""})]),_:1})]),_:1})]),_:1})]),_:1}),s("div",Y,[e(g,null,{default:t(()=>[e(y,{type:"primary",size:"sm"},{default:t(()=>o[4]||(o[4]=[R("Generate Report")])),_:1})]),_:1})])]),_:1}),e(v,{title:"Search Results",id:"Search Results"},{default:t(()=>[e(X,{ref:"tablesecurityuserpreferencesref2",formType:"Search Results",title:"Search Results"},null,512)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})}}},we=w(ee,[["__scopeId","data-v-cb236ff4"]]);export{we as default};