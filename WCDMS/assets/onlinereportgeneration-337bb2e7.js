import{_ as x,b as D,a as e,o as _,c as I,f as t,w as s,e as g,p as R,F as P,u as B,E as L,M as T,y as C,z as G,i as k}from"./index-0f1dbffa.js";import{c as $}from"./index-791fece4.js";import{$ as z,B as N}from"./index-4a777da9.js";import{V as w}from"./index-653c2f3d.js";import{s as E}from"./searchform-3e3eaf00.js";import{J as F}from"./index-2d4ddb61.js";/* empty css              *//* empty css              *//* empty css              */import"./index-203e73ba.js";import"./index-15df4815.js";/* empty css                                                                   */import{_ as J}from"./userGroupSearch-6b3f2d06.js";import{_ as K}from"./userSearch-8014df1a.js";import"./routeSearch-0d9ec547.js";import"./index-c88e3fd6.js";import"./index-09643b1a.js";import"./index2-84f017df.js";import"./index2-f5b11353.js";const M={__name:"tableonlinereportgeneration",props:{formType:{type:String,default:""}},emits:["addData","addLetter","editLetter"],setup(r,{expose:m,emit:v}){D(()=>{c.value.total=i.value.length,p.value.total=h.value.length});const d=function(a){let n="";switch(a){case"securityaccessgroup_ServiceRegion":n="Service District List";break;case"securityaccessgroup_BillingCycle":n="Billing Cycle List";break;case"securityaccessgroup_Report":n="Report List";break}f.value=n},f=e("Service District List"),o=e(null),l=e(null);e(null);const c=e({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),u=[{title:"Parameter",width:"200px",key:"field1"},{title:"Value",key:"field2",width:"200px"}],i=e([]);for(let a=0;a<5;a++)i.value.push({field1:"Parameter",field2:"Value"});const p=e({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),y=[{title:"Report Code",width:"200px",key:"field1"},{title:"Description",key:"field2",width:"200px"},{title:"Generate Report Date",key:"field3",width:"200px"},{title:"Parameter",key:"field4",width:"200px"},{title:"Status",key:"field5",width:"200px"},{title:"Download",key:"field6",width:"200px"}],h=e([]);for(let a=0;a<5;a++)h.value.push({field1:"Report Code",field2:"Description",field3:"Generate Report Date",field4:"Parameters",field5:"Status",field6:"Download"});return m({init:d}),(a,n)=>{const S=F,V=w;return _(),I(P,null,[t(V,{title:r.formType},{default:s(()=>[r.formType=="Report Parameter Inputs"?(_(),g(S,{key:0,columns:u,"data-source":i.value,page:c.value,resize:""},null,8,["data-source","page"])):R("",!0),r.formType=="Search Results"?(_(),g(S,{key:1,columns:y,"data-source":h.value,page:p.value,resize:""},null,8,["data-source","page"])):R("",!0)]),_:1},8,["title"]),t(J,{ref_key:"accessgroup_userGroupSearch",ref:l},null,512),t(K,{ref_key:"accessgroup_userSearch",ref:o},null,512)],64)}}},b=x(M,[["__scopeId","data-v-a4d7ea32"]]);const A=r=>(C("data-v-058e0b7e"),r=r(),G(),r),O=A(()=>k("div",{class:"top-use-box"},[k("h1",{class:"top-use-title"},"Online Report Generation")],-1)),U={__name:"onlinereportgeneration",setup(r){B(),L({}),e(!1);const m=e("securityuser_general"),v=e(null),d=e(null),f=()=>{v.value.search({limit:10,current:1})};return T(()=>m.value,(o,l)=>{o=="securityuser_history"&&d.value.init("securityuser_history")}),(o,l)=>{const c=w,u=z,i=N,p=$;return _(),g(p,{fluid:!0,class:"common-container"},{default:s(()=>[t(c,{class:"top-use-card"},{default:s(()=>[O]),_:1}),t(E,{formType:"batchreportretrieval",onSearch:f}),t(i,{modelValue:o.openKeys,"onUpdate:modelValue":l[0]||(l[0]=y=>o.openKeys=y)},{default:s(()=>[t(u,{title:"Report Parameter Inputs",id:"Report Parameter Inputs"},{default:s(()=>[t(b,{ref:"tablesecurityuserpreferencesref1",formType:"Report Parameter Inputs",title:"Account Summary List"},null,512)]),_:1}),t(u,{title:"Search Results",id:"Search Results"},{default:s(()=>[t(b,{ref:"tablesecurityuserpreferencesref2",formType:"Search Results",title:"Search Results"},null,512)]),_:1})]),_:1},8,["modelValue"])]),_:1})}}},pe=x(U,[["__scopeId","data-v-058e0b7e"]]);export{pe as default};
