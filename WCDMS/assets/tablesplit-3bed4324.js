import{_ as D,a as o,D as V,z as B,o as m,c as N,f as i,w as l,i as R,e as k,p as g,h as _,F as Z,n as q,q as F,C as E,m as I,H as O}from"./index-a9e193d8.js";import{V as U}from"./index-362eaca0.js";import{n as X,Z as j}from"./index-4df89be4.js";/* empty css              *//* empty css              */import{_ as H}from"./routeSearch-1935382d.js";import{U as L,B as P}from"./index-5bfab842.js";import{w as W}from"./index-31dd4159.js";import{Z as A}from"./index-5c44996e.js";const G={class:"search-btn-box"},J={__name:"searchform",props:{formType:{type:String,default:"0"},disType:{type:String,default:""}},emits:["search"],setup(n,{emit:x}){let y=n;const d=x,c=o([]),h=V(()=>y.formType=="6"&&y.disType=="detail"?"Combine Route Details":""),v=B({});o("right");const p=o({field1:"",field2:"",field3:"",field4:"",field5:!1,field6:"",field7:"",field8:"",field9:"",field10:"",field11:"",field12:"",field13:""});o(!1);const S=o(null),b=()=>{d("search")},r=e=>{p.value.field1=e.field8,p.value.field5=e.field5};return(e,t)=>{const s=q,f=F,u=X,a=L,w=P,z=j,C=E,K=I,$=W,M=U;return m(),N(Z,null,[i(M,{title:h.value},{default:l(()=>[i($,{size:"sm","label-width":110,"label-position":"left",allowClear:"",isLabelTooltip:""},{default:l(()=>[i(z,{border:!0,size:"sm",column:"3"},{default:l(()=>[i(u,null,{label:l(()=>t[2]||(t[2]=[R("span",null,"Scheduled Section Date",-1)])),default:l(()=>[i(f,null,{default:l(()=>[i(s,{modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=T=>c.value=T),range:"",placeholder:["开始日期","结束日期"],"allow-clear":!0},null,8,["modelValue"])]),_:1})]),_:1}),n.disType=="Search"?(m(),k(u,{key:0},{label:l(()=>t[3]||(t[3]=[R("span",null,"Status",-1)])),default:l(()=>[i(f,null,{default:l(()=>[i(w,{modelValue:v.routeReviewSetting,"onUpdate:modelValue":t[1]||(t[1]=T=>v.routeReviewSetting=T),"show-search":!0},{default:l(()=>[i(a,{value:"1",label:"Pending"}),i(a,{value:"2",label:"Confirmed"})]),_:1},8,["modelValue"])]),_:1})]),_:1})):g("",!0)]),_:1}),R("div",G,[i(K,null,{default:l(()=>[i(C,{type:"primary","prefix-icon":"layui-icon-search",onClick:b},{default:l(()=>t[4]||(t[4]=[_("Search")])),_:1}),n.disType=="Search"?(m(),k(C,{key:0,onClick:e.toReset},{default:l(()=>t[5]||(t[5]=[_("Reset")])),_:1},8,["onClick"])):g("",!0),n.disType=="Review"?(m(),k(C,{key:1,type:"primary","prefix-icon":"layui-icon-edit",onClick:e.toConfirm},{default:l(()=>t[6]||(t[6]=[_("Confirm")])),_:1},8,["onClick"])):g("",!0)]),_:1})])]),_:1})]),_:1},8,["title"]),i(H,{ref_key:"routesearch",ref:S,onSureData:r},null,512)],64)}}},se=D(J,[["__scopeId","data-v-1e507007"]]);const Q={__name:"tablesplit",props:{formType:{type:String,default:"1"},disType:{type:String,default:""}},setup(n,{expose:x}){let y=n;const d=o(!1),c=B({total:100,limit:10,current:1,layout:["page","limits","prev","next","count"]}),h=e=>{d.value=!0,setTimeout(()=>{r.value=p(e.current,e.limit),d.value=!1},1e3)},v=e=>{Object.assign(c,{limit:e.limit,current:e.current}),d.value=!0,setTimeout(()=>{r.value=p(e.current,e.limit),d.value=!1},1e3)},p=(e,t)=>{for(var s=[],f=(e-1)*t+1,u=e*t,a=f;a<=u;a++)s.push({field0:!1,field1:`${a}`,field2:"275",field3:"2/10/2018",field4:"5/10/2018",field5:"12/10/2018",field6:"19/10/2018",field7:"confirm",field8:"C.X",field8:"4/10/2018 8:20:12",field8:"Edward S",field8:"4/10/2018 10:20:12"});return s},S=o(["filter","export"]),b=V(()=>y.disType=="Search"?[{title:"Cycle",width:"140px",key:"field1"},{title:"Route ID",key:"field2",width:"140px"},{title:"Selection Date",key:"field3",width:"140px"},{title:"Transfer Date",key:"field4",width:"140px"},{title:"RMR Start",key:"field5",width:"140px"},{title:"RMR End",key:"field6",width:"140px"},{title:"Status",key:"field7",width:"140px"},{title:"Uploader",key:"field8",width:"140px"},{title:"Upload Date/Time",key:"field8",width:"140px"},{title:"Reviewer",key:"field8",width:"140px"},{title:"Confirm Date/Time",key:"field8",width:"140px"}]:[{title:"Cycle",width:"140px",key:"field1"},{title:"Route ID",key:"field2",width:"140px"},{title:"Selection Date",key:"field3",width:"140px"},{title:"Transfer Date",key:"field4",width:"140px"},{title:"RMR Start",key:"field5",width:"140px"},{title:"RMR End",key:"field6",width:"140px"},{title:"Operation",customSlot:"field7",key:"field7",width:"140px"}]),r=o([]);for(let e=0;e<10;e++)r.value.push({field0:!1,field1:`${e}`,field2:"275",field3:"2/10/2018",field4:"5/10/2018",field5:"12/10/2018",field6:"19/10/2018",field7:"confirm",field8:"C.X",field8:"4/10/2018 8:20:12",field8:"Edward S",field8:"4/10/2018 10:20:12"});return o([]),x({search:v}),(e,t)=>{const s=E,f=I,u=A,a=U;return m(),k(a,null,{default:l(()=>[i(u,{page:c,resize:!0,autoColsWidth:"",even:"",columns:b.value,loading:d.value,dataSource:r.value,"default-toolbar":S.value,selectedKeys:e.selectedKeys,"onUpdate:selectedKeys":t[0]||(t[0]=w=>e.selectedKeys=w),onRow:e.rowClick,onChange:h},O({_:2},[n.disType=="Review"?{name:"field7",fn:l(({data:w})=>[i(f,null,{default:l(()=>[i(s,{size:"xs",class:"table_edit_button","prefix-icon":"layui-icon-edit"},{default:l(()=>t[1]||(t[1]=[_(" Edit ")])),_:1}),i(s,{size:"xs",class:"table_save_button","prefix-icon":"layui-icon-ok"},{default:l(()=>t[2]||(t[2]=[_("Save")])),_:1})]),_:1})]),key:"0"}:void 0]),1032,["page","columns","loading","dataSource","default-toolbar","selectedKeys","onRow"])]),_:1})}}},re=D(Q,[["__scopeId","data-v-2294b6da"]]);export{se as s,re as t};