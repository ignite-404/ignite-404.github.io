import{A as H,d as R,av as j,X as J,a7 as M,I as b,o as u,c as _,r as N,Q as P,P as W,N as I,p as v,F as k,h as r,t as x,a as w,E as X,Z as L,_ as G,e as U,w as l,f as o,i as d,O as q,aw as K,l as Y,ax as $,k as ee,q as oe,C as te,x as le,L as ae,y as ne,z as se,ay as de}from"./index-0f1dbffa.js";import{c as ue}from"./index-791fece4.js";import{W as ie}from"./index-96f6a96b.js";/* empty css              */import{f as ce,y as re}from"./index-15df4815.js";import{V as me}from"./index-653c2f3d.js";import{U as pe,B as _e}from"./index-09643b1a.js";import{w as ye}from"./index-c88e3fd6.js";import"./index2-84f017df.js";const fe={class:"layui-badge"},be={key:2,class:"layui-badge-dot-ripple"},ve=(s,a)=>{const i=s.__vccOpts||s;for(const[e,c]of a)i[e]=c;return i},xe=H(ve(R({name:"LayBadge",__name:"index",props:{theme:{},color:{},ripple:{type:Boolean},type:{default:"rim"},value:{default:0},badgeStyle:{type:[Boolean,null,String,Object,Array]},position:{default:"top-right"},showZero:{type:Boolean,default:!1},max:{default:99}},setup(s){j(n=>({"066508d3":m.value}));const a=J(),i=M(null),e=s,c=b(()=>{if(e.type!=="dot"&&!isNaN(+e.value)){const n=Math.max(0,+e.value);return+n>e.max?`${e.max}+`:n}return e.value}),g=b(()=>[{[`layui-bg-${e.theme}`]:e.theme,"layui-badge-number":e.type=="rim","layui-badge-base":!a.default,"layui-badge-dot":e.type=="dot","is-bottom-right":e.position==="bottom-right","is-bottom-left":e.position==="bottom-left","is-top-left":e.position==="top-left"}]),f=b(()=>[{"background-color":e.color},e.badgeStyle]),m=b(()=>(i.value&&getComputedStyle(i.value).backgroundColor)??""),p=b(()=>e.type==="dot"||!!a.custom||!!isNaN(+e.value)||!!(+e.value<=0&&e.showZero)||!(+e.value<=0&&!e.showZero));return(n,h)=>(u(),_("div",fe,[N(n.$slots,"default",{},void 0,!0),p.value?(u(),_("sup",{key:0,ref_key:"layBadge",ref:i,class:P(g.value),style:W(f.value)},[n.type==="dot"||I(a).custom?v("",!0):(u(),_(k,{key:0},[r(x(c.value),1)],64)),I(a).custom?N(n.$slots,"custom",{key:1},void 0,!0):v("",!0),n.ripple?(u(),_("span",be)):v("",!0)],6)):v("",!0)]))}}),[["__scopeId","data-v-abf2081f"]]));const ge={setup(){const s="https://foruda.gitee.com/avatar/1677022544584087390/4835367_jmysy_1578975358.png",a=w([{id:1,tag:"雪",theme:"blue"},{id:2,tag:"风是从哪儿来wu",theme:""},{id:3,tag:"漫游星河",theme:"orange"},{id:4,tag:"春日之花",theme:"green"},{id:5,tag:"Hey",theme:"cyan"},{id:6,tag:"风吹一夏",theme:""}]),i=w("baseInfo"),e=X({username:"admin",password:"123456",phone:"12345678900",desc:"",sex:"",email:""}),c=w(),g=function(){c.value.validate((n,h,B)=>{L.open({type:1,title:"表单提交结果",content:`<div style="padding: 10px"><p>是否通过 : ${n}</p> <p>表单数据 : ${JSON.stringify(h)} </p> <p>错误信息 : ${JSON.stringify(B)}</p></div>`,shade:!1,isHtmlFragment:!0,btn:[{text:"确认",callback(V){L.close(V)}}],area:"500px"})})},f=()=>{c.value.clearValidate()},m=()=>{c.value.reset()},p=w([{id:1,title:"密保手机",desc:"已绑定手机: 12345678901",option:"去修改",icon:""},{id:2,title:"密保邮箱",desc:"已绑定邮箱: email@layui-vue",option:"去修改",icon:""},{id:3,title:"密保问题",desc:"未设置密保问题",option:"去设置",icon:""},{id:4,title:"绑定QQ",desc:"当前未绑定QQ账号",option:"去绑定",icon:"layui-icon-login-qq",color:"#3492ed"},{id:5,title:"绑定微信",desc:"当前未绑定绑定微信账号",option:"去绑定",icon:"layui-icon-login-wechat",color:"#4daf29"},{id:6,title:"绑定微博",desc:"当前未绑定绑定微博账号",option:"去绑定",icon:"layui-icon-login-weibo",color:"#e6162d"}]);return{src:s,model4:e,tagsList:a,activeTab:i,layFormRef4:c,bindingAccountList:p,reset4:m,submit4:g,clearValidate4:f}}};const E=s=>(ne("data-v-2e5ae5e4"),s=s(),se(),s),he={style:{"text-align":"center"}},Ae=E(()=>d("div",{class:"user-name"},"管理员",-1)),we=E(()=>d("div",{class:"user-briefing"},"孤岛高山何其多",-1)),Be=E(()=>d("h1",{style:{margin:"10px 0"}},"标签",-1)),Ve={class:"tab-content"},Ce={class:"tab-content",style:{"max-width":"unset"}},ke={key:0,style:{width:"45px",display:"inline-block"}},Ee={class:"account-desc"},Fe={style:{color:"#000000e0"}},Se={class:"account-option"};function De(s,a,i,e,c,g){const f=K,m=Y,p=ce,n=$,h=xe,B=de,V=me,F=re,A=ee,y=oe,S=pe,O=_e,z=ie,C=te,Q=ye,D=le,T=ae,Z=ue;return u(),U(Z,{fluid:!0,style:{padding:"10px"}},{default:l(()=>[o(p,{span:24,style:{display:"flex"}},{default:l(()=>[o(F,{style:{"max-width":"400px"},xs:24},{default:l(()=>[o(V,{shadow:"hover",class:"info-user"},{default:l(()=>[d("div",he,[o(f,{src:e.src,radius:"",class:"user-avatar"},null,8,["src"]),Ae,we]),o(p,null,{default:l(()=>[o(m,{type:"layui-icon-username"}),r("   资深前端工程师 ")]),_:1}),o(p,null,{default:l(()=>[o(m,{type:"layui-icon-cellphone"}),r("   12345678900 ")]),_:1}),o(p,null,{default:l(()=>[o(m,{type:"layui-icon-template"}),r("   组织机构 ")]),_:1}),o(n,{"border-style":"dashed","border-width":"1px"}),Be,(u(!0),_(k,null,q(e.tagsList,t=>(u(),U(B,{key:t.id,style:{margin:"0 6px 6px 0"}},{default:l(()=>[r("  "),o(h,{type:"dot",theme:t.theme,ripple:""},null,8,["theme"]),r("   "+x(t.tag),1)]),_:2},1024))),128))]),_:1})]),_:1}),o(F,{style:{flex:"1","background-color":"#fff"},xs:24},{default:l(()=>[o(T,{type:"brief",modelValue:e.activeTab,"onUpdate:modelValue":a[6]||(a[6]=t=>e.activeTab=t)},{default:l(()=>[o(D,{title:"基本信息",id:"baseInfo"},{default:l(()=>[d("div",Ve,[o(Q,{model:e.model4,ref:"layFormRef4","label-width":"60",size:"sm"},{default:l(()=>[o(y,{label:"昵称",prop:"username",required:""},{default:l(()=>[o(A,{modelValue:e.model4.username,"onUpdate:modelValue":a[0]||(a[0]=t=>e.model4.username=t),"allow-clear":""},null,8,["modelValue"])]),_:1}),o(y,{label:"密码",prop:"password",required:""},{default:l(()=>[o(A,{modelValue:e.model4.password,"onUpdate:modelValue":a[1]||(a[1]=t=>e.model4.password=t),type:"password","allow-clear":""},null,8,["modelValue"])]),_:1}),o(y,{label:"性别",prop:"sex"},{default:l(()=>[o(O,{modelValue:e.model4.sex,"onUpdate:modelValue":a[2]||(a[2]=t=>e.model4.sex=t),style:{width:"100%"},placeholder:"请选择性别"},{default:l(()=>[o(S,{value:"man",label:"男"}),o(S,{value:"woman",label:"女"})]),_:1},8,["modelValue"])]),_:1}),o(y,{label:"邮箱",prop:"email"},{default:l(()=>[o(A,{modelValue:e.model4.email,"onUpdate:modelValue":a[3]||(a[3]=t=>e.model4.email=t),type:"email","allow-clear":""},null,8,["modelValue"])]),_:1}),o(y,{label:"个人简介",prop:"desc"},{default:l(()=>[o(z,{placeholder:"还没有个人简介哦~",modelValue:e.model4.desc,"onUpdate:modelValue":a[4]||(a[4]=t=>e.model4.desc=t),"allow-clear":""},null,8,["modelValue"])]),_:1}),o(y,{label:"联系电话",prop:"phone",required:""},{default:l(()=>[o(A,{modelValue:e.model4.phone,"onUpdate:modelValue":a[5]||(a[5]=t=>e.model4.phone=t),type:"phone","allow-clear":""},null,8,["modelValue"])]),_:1}),o(y,{style:{"text-align":"center"}},{default:l(()=>[o(C,{type:"primary",onClick:e.submit4},{default:l(()=>[r("提交")]),_:1},8,["onClick"]),o(C,{onClick:e.clearValidate4},{default:l(()=>[r("清除校验")]),_:1},8,["onClick"]),o(C,{onClick:e.reset4},{default:l(()=>[r("重置表单")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])])]),_:1}),o(D,{title:"账号绑定",id:"bindingInfo"},{default:l(()=>[d("div",Ce,[(u(!0),_(k,null,q(e.bindingAccountList,t=>(u(),_("div",{key:t.id,class:"account-item"},[t.icon!=""?(u(),_("div",ke,[o(m,{type:t.icon,color:t.color,size:"34px"},null,8,["type","color"])])):v("",!0),d("div",Ee,[d("div",Fe,x(t.title),1),d("div",null,x(t.desc),1)]),d("div",Se,x(t.option),1)]))),128))])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})}const Ze=G(ge,[["render",De],["__scopeId","data-v-2e5ae5e4"]]);export{Ze as default};