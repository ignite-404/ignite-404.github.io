import{_ as h,b as S,a as e,o as y,c as k,f as t,w as d,F as x,u as w,E as R,M as D,e as B,y as L,z as C,i as f}from"./index-0f1dbffa.js";import{c as I}from"./index-791fece4.js";import{V as v}from"./index-653c2f3d.js";import{s as T}from"./searchform-3e3eaf00.js";import{J as V}from"./index-2d4ddb61.js";/* empty css              *//* empty css              *//* empty css              */import"./index-203e73ba.js";import"./index-15df4815.js";/* empty css                                                                   */import{_ as M}from"./userGroupSearch-6b3f2d06.js";import{_ as P}from"./userSearch-8014df1a.js";import"./tablesebatchreportretrieval.vue_vue_type_style_index_0_scoped_50a840c8_lang-4ed993c7.js";import"./routeSearch-0d9ec547.js";import"./index-c88e3fd6.js";import"./index-09643b1a.js";import"./index2-84f017df.js";import"./index2-f5b11353.js";const $={__name:"tablesebatchreportretrieval",props:{formType:{type:Array,default:()=>[]}},emits:["addData","addLetter","editLetter"],setup(r,{expose:s,emit:m}){S(()=>{i.value.total=_.value.length});const l=function(a){let o="";switch(a){case"securityaccessgroup_ServiceRegion":o="Service District List";break;case"securityaccessgroup_BillingCycle":o="Billing Cycle List";break;case"securityaccessgroup_Report":o="Report List";break}p.value=o},p=e("Service District List"),c=e(null),n=e(null);e(null);const i=e({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),u=[{title:"Report Code",width:"200px",key:"field1"},{title:"Description",key:"field2",width:"200px"},{title:"Schedule Date",key:"field3",width:"200px"},{title:"Parameters",key:"field4",width:"200px"},{title:"Status",key:"field5",width:"200px"},{title:"Download",key:"field6",width:"200px"}],_=e([]);for(let a=0;a<5;a++)_.value.push({field1:"Report Code",field2:"Description",field3:"Schedule Date",field4:"Parameters",field5:"Status",field6:"Download"});return s({init:l}),(a,o)=>{const b=V,g=v;return y(),k(x,null,[t(g,{title:"Batchre Port Retrieval List"},{default:d(()=>[t(b,{columns:u,"data-source":_.value,page:i.value,resize:""},null,8,["data-source","page"])]),_:1}),t(M,{ref_key:"accessgroup_userGroupSearch",ref:n},null,512),t(P,{ref_key:"accessgroup_userSearch",ref:c},null,512)],64)}}},z=h($,[["__scopeId","data-v-50a840c8"]]);const E=r=>(L("data-v-d15ebef9"),r=r(),C(),r),F=E(()=>f("div",{class:"top-use-box"},[f("h1",{class:"top-use-title"},"Work Calendar Maintenance")],-1)),G={__name:"batchreportretrieval",setup(r){w(),R({}),e(!1);const s=e("securityuser_general"),m=e(null),l=e(null),p=()=>{m.value.search({limit:10,current:1})};return D(()=>s.value,(c,n)=>{c=="securityuser_history"&&l.value.init("securityuser_history")}),(c,n)=>{const i=v,u=I;return y(),B(u,{fluid:!0,class:"common-container"},{default:d(()=>[t(i,{class:"top-use-card"},{default:d(()=>[F]),_:1}),t(T,{formType:"batchreportretrieval",onSearch:p}),t(z,{ref:"tablesebatchreportretrievalRef",formType:s.value},null,8,["formType"])]),_:1})}}},se=h(G,[["__scopeId","data-v-d15ebef9"]]);export{se as default};
