import{_ as f,b,a as e,o as y,c as k,f as t,w as _,F as S,u as w,z as A,J as T,e as R,i as m}from"./index-99541687.js";import{c as L}from"./index-a6c9f0ae.js";import{V as h}from"./index-8cb0198a.js";import{s as D}from"./searchform-48c6423a.js";import{Z as U}from"./index-45f8edc9.js";import{_ as B}from"./userGroupSearch-9b9446d2.js";import{_ as C}from"./userSearch-3314d775.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index-890504cf.js";import"./routeSearch-8c046a85.js";import"./index-d6be05a9.js";import"./index-ca186075.js";import"./index-f0ab03bb.js";import"./index2-97dbc1fc.js";import"./automationCodeSearch-f5ac715c.js";/* empty css                                                                   */import"./index-0685b90a.js";import"./index-b3d90a3e.js";import"./index2-454c9625.js";const E={__name:"tableAuditQuery",props:{formType:{type:Array,default:()=>[]}},emits:["addData","addLetter","editLetter"],setup(v,{expose:a,emit:d}){b(()=>{o.value.total=p.value.length});const c=function(i){let s="";switch(i){case"securityaccessgroup_ServiceRegion":s="Service District List";break;case"securityaccessgroup_BillingCycle":s="Billing Cycle List";break;case"securityaccessgroup_Report":s="Report List";break}u.value=s},u=e("Service District List"),l=e(null),r=e(null);e(null);const o=e({total:0,limit:10,current:2,layout:["page","limits","prev","next","count"]}),n=[{title:"Created Date Time",width:"200px",key:"field1"},{title:"UserID",key:"field2",width:"200px"},{title:"User Name",key:"field3",width:"200px"},{title:"Table",key:"field4",width:"200px"},{title:"Primary Key(s)",key:"field5",width:"200px"},{title:"Field",key:"field6",width:"200px"},{title:"Action",key:"field7",width:"200px"},{title:"Original Value",key:"field8",width:"200px"},{title:"New Value",key:"field9",width:"200px"}],p=e([]);for(let i=0;i<5;i++)p.value.push({field1:"2022-8-30 16:18",field2:"UAT9",field3:"LEUNG Wing Tai",field4:"PREMISE-Premise",field5:"1773540000",field6:"SUB DISTRICT CODE -Sub District",field7:"U-Update",field8:"LAFASY",field9:"AUTAYL",isEdit:!1});return a({init:c}),(i,s)=>{const x=U,g=h;return y(),k(S,null,[t(g,{title:"Search Results"},{default:_(()=>[t(x,{columns:n,"data-source":p.value,page:o.value,resize:""},null,8,["data-source","page"])]),_:1}),t(B,{ref_key:"accessgroup_userGroupSearch",ref:r},null,512),t(C,{ref_key:"accessgroup_userSearch",ref:l},null,512)],64)}}},I=f(E,[["__scopeId","data-v-3c896bcb"]]);const V={__name:"index",setup(v){w(),A({}),e(!1);const a=e("securityuser_general"),d=e(null),c=e(null),u=()=>{d.value.search({limit:10,current:1})};return T(()=>a.value,(l,r)=>{l=="securityuser_history"&&c.value.init("securityuser_history")}),(l,r)=>{const o=h,n=L;return y(),R(n,{fluid:!0,class:"common-container"},{default:_(()=>[t(o,{class:"top-use-card"},{default:_(()=>r[0]||(r[0]=[m("div",{class:"top-use-box"},[m("h1",{class:"top-use-title"},"Audit Query")],-1)])),_:1}),t(D,{formType:"auditquery",onSearch:u}),t(I,{ref:"tableAuditQueryRef",formType:a.value},null,8,["formType"])]),_:1})}}},se=f(V,[["__scopeId","data-v-52cb256f"]]);export{se as default};