import{_ as D,a as o,I as V,E as I,o as _,c as J,f as l,w as t,e as w,p as R,i as g,h as m,F as q,n as F,q as O,C as E,m as B,y as X,z as j,J as L}from"./index-0f1dbffa.js";import{V as U}from"./index-653c2f3d.js";import{n as P,Z as W}from"./index-203e73ba.js";/* empty css              *//* empty css              */import{_ as Z}from"./routeSearch-0d9ec547.js";import{U as A,B as G}from"./index-09643b1a.js";import{w as H}from"./index-c88e3fd6.js";import{J as Q}from"./index-2d4ddb61.js";const z=i=>(X("data-v-1e507007"),i=i(),j(),i),Y=z(()=>g("span",null,"Scheduled Section Date",-1)),ee=z(()=>g("span",null,"Status",-1)),te={class:"search-btn-box"},le={__name:"searchform",props:{formType:{type:String,default:"0"},disType:{type:String,default:""}},emits:["search"],setup(i,{emit:k}){let y=i;const n=k,u=o([]),x=V(()=>y.formType=="6"&&y.disType=="detail"?"Combine Route Details":""),h=I({});o("right");const p=o({field1:"",field2:"",field3:"",field4:"",field5:!1,field6:"",field7:"",field8:"",field9:"",field10:"",field11:"",field12:"",field13:""});o(!1);const S=o(null),b=()=>{n("search")},r=e=>{p.value.field1=e.field8,p.value.field5=e.field5};return(e,a)=>{const s=F,c=O,f=P,d=A,v=G,K=W,C=E,$=B,M=H,N=U;return _(),J(q,null,[l(N,{title:x.value},{default:t(()=>[l(M,{size:"sm","label-width":110,"label-position":"left",allowClear:"",isLabelTooltip:""},{default:t(()=>[l(K,{border:!0,size:"sm",column:"3"},{default:t(()=>[l(f,null,{label:t(()=>[Y]),default:t(()=>[l(c,null,{default:t(()=>[l(s,{modelValue:u.value,"onUpdate:modelValue":a[0]||(a[0]=T=>u.value=T),range:"",placeholder:["开始日期","结束日期"],"allow-clear":!0},null,8,["modelValue"])]),_:1})]),_:1}),i.disType=="Search"?(_(),w(f,{key:0},{label:t(()=>[ee]),default:t(()=>[l(c,null,{default:t(()=>[l(v,{modelValue:h.routeReviewSetting,"onUpdate:modelValue":a[1]||(a[1]=T=>h.routeReviewSetting=T),"show-search":!0},{default:t(()=>[l(d,{value:"1",label:"Pending"}),l(d,{value:"2",label:"Confirmed"})]),_:1},8,["modelValue"])]),_:1})]),_:1})):R("",!0)]),_:1}),g("div",te,[l($,null,{default:t(()=>[l(C,{type:"primary","prefix-icon":"layui-icon-search",onClick:b},{default:t(()=>[m("Search")]),_:1}),i.disType=="Search"?(_(),w(C,{key:0,onClick:e.toReset},{default:t(()=>[m("Reset")]),_:1},8,["onClick"])):R("",!0),i.disType=="Review"?(_(),w(C,{key:1,type:"primary","prefix-icon":"layui-icon-edit",onClick:e.toConfirm},{default:t(()=>[m("Confirm")]),_:1},8,["onClick"])):R("",!0)]),_:1})])]),_:1})]),_:1},8,["title"]),l(Z,{ref_key:"routesearch",ref:S,onSureData:r},null,512)],64)}}},pe=D(le,[["__scopeId","data-v-1e507007"]]);const ie={__name:"tablesplit",props:{formType:{type:String,default:"1"},disType:{type:String,default:""}},setup(i,{expose:k}){let y=i;const n=o(!1),u=I({total:100,limit:10,current:1,layout:["page","limits","prev","next","count"]}),x=e=>{n.value=!0,setTimeout(()=>{r.value=p(e.current,e.limit),n.value=!1},1e3)},h=e=>{Object.assign(u,{limit:e.limit,current:e.current}),n.value=!0,setTimeout(()=>{r.value=p(e.current,e.limit),n.value=!1},1e3)},p=(e,a)=>{for(var s=[],c=(e-1)*a+1,f=e*a,d=c;d<=f;d++)s.push({field0:!1,field1:`${d}`,field2:"275",field3:"2/10/2018",field4:"5/10/2018",field5:"12/10/2018",field6:"19/10/2018",field7:"confirm",field8:"C.X",field8:"4/10/2018 8:20:12",field8:"Edward S",field8:"4/10/2018 10:20:12"});return s},S=o(["filter","export"]),b=V(()=>y.disType=="Search"?[{title:"Cycle",width:"140px",key:"field1"},{title:"Route ID",key:"field2",width:"140px"},{title:"Selection Date",key:"field3",width:"140px"},{title:"Transfer Date",key:"field4",width:"140px"},{title:"RMR Start",key:"field5",width:"140px"},{title:"RMR End",key:"field6",width:"140px"},{title:"Status",key:"field7",width:"140px"},{title:"Uploader",key:"field8",width:"140px"},{title:"Upload Date/Time",key:"field8",width:"140px"},{title:"Reviewer",key:"field8",width:"140px"},{title:"Confirm Date/Time",key:"field8",width:"140px"}]:[{title:"Cycle",width:"140px",key:"field1"},{title:"Route ID",key:"field2",width:"140px"},{title:"Selection Date",key:"field3",width:"140px"},{title:"Transfer Date",key:"field4",width:"140px"},{title:"RMR Start",key:"field5",width:"140px"},{title:"RMR End",key:"field6",width:"140px"},{title:"Operation",customSlot:"field7",key:"field7",width:"140px"}]),r=o([]);for(let e=0;e<10;e++)r.value.push({field0:!1,field1:`${e}`,field2:"275",field3:"2/10/2018",field4:"5/10/2018",field5:"12/10/2018",field6:"19/10/2018",field7:"confirm",field8:"C.X",field8:"4/10/2018 8:20:12",field8:"Edward S",field8:"4/10/2018 10:20:12"});return o([]),k({search:h}),(e,a)=>{const s=E,c=B,f=Q,d=U;return _(),w(d,null,{default:t(()=>[l(f,{page:u,resize:!0,autoColsWidth:"",even:"",columns:b.value,loading:n.value,dataSource:r.value,"default-toolbar":S.value,selectedKeys:e.selectedKeys,"onUpdate:selectedKeys":a[0]||(a[0]=v=>e.selectedKeys=v),onRow:e.rowClick,onChange:x},L({_:2},[i.disType=="Review"?{name:"field7",fn:t(({data:v})=>[l(c,null,{default:t(()=>[l(s,{size:"xs",class:"table_edit_button","prefix-icon":"layui-icon-edit"},{default:t(()=>[m(" Edit ")]),_:1}),l(s,{size:"xs",class:"table_save_button","prefix-icon":"layui-icon-ok"},{default:t(()=>[m("Save")]),_:1})]),_:1})]),key:"0"}:void 0]),1032,["page","columns","loading","dataSource","default-toolbar","selectedKeys","onRow"])]),_:1})}}},_e=D(ie,[["__scopeId","data-v-2294b6da"]]);export{pe as s,_e as t};