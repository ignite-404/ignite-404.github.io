import{a as t,b as C,o as m,c as S,e as h,p as g,F as V,_ as M,u as H,z as D,w as p,f as a,i as b,x as I,L as N}from"./index-99541687.js";import{c as B}from"./index-a6c9f0ae.js";import{V as L}from"./index-8cb0198a.js";import{s as k}from"./searchform-2dbe1e53.js";import{Z as z}from"./index-45f8edc9.js";/* empty css              *//* empty css              */import"./index-890504cf.js";/* empty css              *//* empty css              */import"./index-d6be05a9.js";import"./index-f0ab03bb.js";import"./index2-97dbc1fc.js";import"./readCycleSearch-677015c8.js";import"./index-ca186075.js";/* empty css                                                                   */import"./index2-454c9625.js";const T={__name:"tableroutereview",props:{formType:{type:String,default:"1"}},setup(f,{expose:o}){const l=t(!1),u=t({total:100,limit:10,current:1,layout:["page","limits","prev","next","count"]}),y=t({total:100,limit:10,current:1,layout:["page","limits","prev","next","count"]});C(()=>{u.value.total=i.value.length,y.value.total=R.value.length});const r=e=>{l.value=!0,setTimeout(()=>{i.value=n(e.current,e.limit),l.value=!1},1e3)},v=e=>{Object.assign(u,{limit:e.limit,current:e.current}),l.value=!0,setTimeout(()=>{i.value=n(e.current,e.limit),l.value=!1},1e3)},n=(e,s)=>{for(var c=[],d=(e-1)*s+1,K=e*s,x=d;x<=K;x++)c.push({field1:"2023/04/07",field2:"Rejected",field3:"Manual Review",field4:"Mandy.K",field5:"System"});return c};t(["filter","export"]);const _=[{title:"Route Optimization Job ID",width:"140px",key:"field1"},{title:"Review Date",key:"field2",width:"140px"},{title:"Nbr of Route",key:"field3",width:"140px"},{title:"Schedule",key:"field4",width:"140px"}],i=t([]);for(let e=0;e<5;e++)i.value.push({field1:"RO49676827433561",field2:"14-02-2023",field3:"8",field4:"C1 - 2023 - P1"});const w=[{title:"Route ID",width:"140px",key:"field1"},{title:"Last Review Date",key:"field2",width:"140px"},{title:"Variance",key:"field3",width:"140px"},{title:"Route Load",key:"field4",width:"140px"},{title:"Nbr of Premise",key:"field5",width:"140px"}],R=t([]);for(let e=0;e<5;e++)R.value.push({field1:`5111${e}`,field2:"14-08-2023",field3:"3%",field4:"670 min(s)",field5:"45"});return t([]),o({search:v}),(e,s)=>{const c=z;return m(),S(V,null,[f.formType=="RouteReviewHistory_Main"?(m(),h(c,{key:0,page:u.value,resize:!0,columns:_,loading:l.value,dataSource:i.value,selectedKeys:e.selectedKeys,"onUpdate:selectedKeys":s[0]||(s[0]=d=>e.selectedKeys=d),onRow:e.rowClick,onChange:r},null,8,["page","loading","dataSource","selectedKeys","onRow"])):g("",!0),f.formType=="RouteReviewHistory_Cycle"?(m(),h(c,{key:1,page:y.value,resize:!0,columns:w,loading:l.value,dataSource:R.value,selectedKeys:e.selectedKeys,"onUpdate:selectedKeys":s[1]||(s[1]=d=>e.selectedKeys=d),onRow:e.rowClick,onChange:r},null,8,["page","loading","dataSource","selectedKeys","onRow"])):g("",!0)],64)}}};const O={__name:"routereviewhistory",setup(f){H(),D({}),t(!1);const o=t("RouteReviewHistory_Main"),l=t(null);t(null);const u=()=>{l.value.search({limit:10,current:1})};return(y,r)=>{const v=L,n=I,_=N,i=B;return m(),h(i,{fluid:!0,class:"common-container"},{default:p(()=>[a(v,{class:"top-use-card"},{default:p(()=>r[1]||(r[1]=[b("div",{class:"top-use-box"},[b("h1",{class:"top-use-title"},"Route Review History")],-1)])),_:1}),a(_,{type:"card",modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=w=>o.value=w)},{default:p(()=>[a(n,{title:"Main",id:"RouteReviewHistory_Main"},{default:p(()=>[a(k,{formType:o.value,onSearch:u},null,8,["formType"]),a(T,{ref:"tableroutereviewRef",formType:o.value},null,8,["formType"])]),_:1}),a(n,{title:"Cycle",id:"RouteReviewHistory_Cycle"},{default:p(()=>[a(k,{formType:o.value},null,8,["formType"]),a(T,{ref:"tableroutereviewRef",formType:o.value},null,8,["formType"])]),_:1})]),_:1},8,["modelValue"])]),_:1})}}},oe=M(O,[["__scopeId","data-v-9cc1c4ab"]]);export{oe as default};