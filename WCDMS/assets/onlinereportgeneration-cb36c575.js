import{_ as b,b as D,a as e,o as m,c as P,f as t,w as l,e as h,p as S,F as B,u as L,z as T,J as C,i as k}from"./index-5ba83812.js";import{c as I}from"./index-f7d389ff.js";/* empty css              */import{V as w}from"./index-70d2da72.js";import{s as G}from"./searchform-fec4c453.js";import{Z as $}from"./index-a25747be.js";/* empty css              *//* empty css              *//* empty css              */import"./index-08f7b130.js";import"./index-9c118bc9.js";import{_ as z}from"./userSearch-e23500da.js";/* empty css                                                                   */import{_ as N}from"./userGroupSearch-676fb65f.js";import{$ as F,B as K}from"./index-4238b014.js";import"./routeSearch-adcc7523.js";import"./index-2b452765.js";import"./index-e1c7a2f1.js";import"./index2-ab9f2a8e.js";import"./automationCodeSearch-d5faf66c.js";import"./index2-75365c6f.js";const Z={__name:"tableonlinereportgeneration",props:{formType:{type:String,default:""}},emits:["addData","addLetter","editLetter"],setup(n,{expose:_,emit:v}){D(()=>{c.value.total=s.value.length,p.value.total=g.value.length});const d=function(r){let i="";switch(r){case"securityaccessgroup_ServiceRegion":i="Service District List";break;case"securityaccessgroup_BillingCycle":i="Billing Cycle List";break;case"securityaccessgroup_Report":i="Report List";break}f.value=i},f=e("Service District List"),o=e(null),a=e(null);e(null);const c=e({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),u=[{title:"Parameter",width:"200px",key:"field1"},{title:"Value",key:"field2",width:"200px"}],s=e([]);for(let r=0;r<5;r++)s.value.push({field1:"Parameter",field2:"Value"});const p=e({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),y=[{title:"Report Code",width:"200px",key:"field1"},{title:"Description",key:"field2",width:"200px"},{title:"Generate Report Date",key:"field3",width:"200px"},{title:"Parameter",key:"field4",width:"200px"},{title:"Status",key:"field5",width:"200px"},{title:"Download",key:"field6",width:"200px"}],g=e([]);for(let r=0;r<5;r++)g.value.push({field1:"Report Code",field2:"Description",field3:"Generate Report Date",field4:"Parameters",field5:"Status",field6:"Download"});return _({init:d}),(r,i)=>{const R=$,V=w;return m(),P(B,null,[t(V,{title:n.formType},{default:l(()=>[n.formType=="Report Parameter Inputs"?(m(),h(R,{key:0,columns:u,"data-source":s.value,page:c.value,resize:""},null,8,["data-source","page"])):S("",!0),n.formType=="Search Results"?(m(),h(R,{key:1,columns:y,"data-source":g.value,page:p.value,resize:""},null,8,["data-source","page"])):S("",!0)]),_:1},8,["title"]),t(N,{ref_key:"accessgroup_userGroupSearch",ref:a},null,512),t(z,{ref_key:"accessgroup_userSearch",ref:o},null,512)],64)}}},x=b(Z,[["__scopeId","data-v-a4d7ea32"]]);const A={__name:"onlinereportgeneration",setup(n){L(),T({}),e(!1);const _=e("securityuser_general"),v=e(null),d=e(null),f=()=>{v.value.search({limit:10,current:1})};return C(()=>_.value,(o,a)=>{o=="securityuser_history"&&d.value.init("securityuser_history")}),(o,a)=>{const c=w,u=F,s=K,p=I;return m(),h(p,{fluid:!0,class:"common-container"},{default:l(()=>[t(c,{class:"top-use-card"},{default:l(()=>a[1]||(a[1]=[k("div",{class:"top-use-box"},[k("h1",{class:"top-use-title"},"Online Report Generation")],-1)])),_:1}),t(G,{formType:"batchreportretrieval",onSearch:f}),t(s,{modelValue:o.openKeys,"onUpdate:modelValue":a[0]||(a[0]=y=>o.openKeys=y)},{default:l(()=>[t(u,{title:"Report Parameter Inputs",id:"Report Parameter Inputs"},{default:l(()=>[t(x,{ref:"tablesecurityuserpreferencesref1",formType:"Report Parameter Inputs",title:"Account Summary List"},null,512)]),_:1}),t(u,{title:"Search Results",id:"Search Results"},{default:l(()=>[t(x,{ref:"tablesecurityuserpreferencesref2",formType:"Search Results",title:"Search Results"},null,512)]),_:1})]),_:1},8,["modelValue"])]),_:1})}}},ce=b(A,[["__scopeId","data-v-058e0b7e"]]);export{ce as default};
