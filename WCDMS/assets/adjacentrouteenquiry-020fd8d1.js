import{a as o,E as v,o as h,e as x,_ as g,w as m,f as d,y as T,z as j,i as y}from"./index-0f1dbffa.js";import{c as k}from"./index-791fece4.js";import{V as R}from"./index-653c2f3d.js";import{s as I}from"./searchform-b70249bc.js";import{J as K}from"./index-2d4ddb61.js";/* empty css              *//* empty css              *//* empty css              */import"./index-203e73ba.js";/* empty css              */import"./routeSearch-0d9ec547.js";import"./index-15df4815.js";import"./index-c88e3fd6.js";import"./index-09643b1a.js";import"./index2-84f017df.js";import"./index2-f5b11353.js";const $={__name:"tableadjacent",props:{formType:{type:String,default:"1"}},setup(a,{expose:s}){const t=o(!1),p=v({total:100,limit:10,current:1,layout:["page","limits","prev","next","count"]}),_=e=>{t.value=!0,setTimeout(()=>{i.value=n(e.current,e.limit),t.value=!1},1e3)},l=e=>{Object.assign(p,{limit:e.limit,current:e.current}),t.value=!0,setTimeout(()=>{i.value=n(e.current,e.limit),t.value=!1},1e3)},n=(e,r)=>{for(var c=[],f=(e-1)*r+1,w=e*r,u=f;u<=w;u++)c.push({field1:`${u}`,field2:`5111${u}`,field3:"Argyle St",field4:"Tsim Sha Tsui"});return c},S=o(["filter","export"]),b=[{title:"Read Cycle",width:"140px",key:"field1"},{title:"Base Route",key:"field2",width:"140px"},{title:"Description",key:"field3",width:"140px"},{title:"District",key:"field4",width:"140px"}],i=o([]);for(let e=0;e<10;e++)i.value.push({field1:`${e}`,field2:`5111${e}`,field3:"Argyle St",field4:"Tsim Sha Tsui"});return o([]),s({search:l}),(e,r)=>{const c=K;return h(),x(c,{page:p,resize:!0,columns:b,loading:t.value,dataSource:i.value,"default-toolbar":S.value,selectedKeys:e.selectedKeys,"onUpdate:selectedKeys":r[0]||(r[0]=f=>e.selectedKeys=f),onRow:e.rowClick,onChange:_},null,8,["page","loading","dataSource","default-toolbar","selectedKeys","onRow"])}}};const q=a=>(T("data-v-e9f53281"),a=a(),j(),a),B=q(()=>y("div",{class:"top-use-box"},[y("h1",{class:"top-use-title"},"Adjacent Route Enquiry")],-1)),C={__name:"adjacentrouteenquiry",setup(a){v({}),o(!1),o("1");const s=o(null),t=()=>{s.value.search({limit:10,current:1})};return(p,_)=>{const l=R,n=k;return h(),x(n,{fluid:!0,class:"common-container"},{default:m(()=>[d(l,{class:"top-use-card"},{default:m(()=>[B]),_:1}),d(I,{formType:"adjacent",onSearch:t}),d(l,null,{default:m(()=>[d($,{ref_key:"tableresultRef",ref:s},null,512)]),_:1})]),_:1})}}},W=g(C,[["__scopeId","data-v-e9f53281"]]);export{W as default};