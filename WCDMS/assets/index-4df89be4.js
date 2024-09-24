import{A as C,d as $,X as I,D as N,$ as j,o as S,c as D,i as u,r as k,h as z,t as A,Q as B,F as E,N as F,e as J,J as O,W as _,ac as o,ak as Q,z as V,ao as K,ap as M}from"./index-a9e193d8.js";const P=C($({name:"LayDescriptionsItem",__name:"descriptionsItem",props:{label:{},span:{default:1},align:{default:"left"},labelAlign:{default:"left"},style:{},class:{},labelStyle:{},labelClass:{}},setup:t=>()=>{}})),w=Symbol("LayDescriptions"),v=$({name:"LayDescriptionsCell",props:{cell:{type:Object,default:()=>({})},tag:{type:String,default:""},type:{type:String,default:""}},setup(t){var s,p,a,y;const{border:L,direction:e}=_(w,{}),l=t.cell.props||{},r=((p=(s=t.cell.children)==null?void 0:s.label)==null?void 0:p.call(s))||l.label,i=(y=(a=t.cell.children)==null?void 0:a.default)==null?void 0:y.call(a),c=l.span,b=l.align?`is-${l.align}`:"",n=l.labelAlign?`is-${l.labelAlign}`:"",m=l.style,f=l.labelStyle,d=l.class,g=l.labelClass,x=e==="vertical",h=t.type==="label";return()=>{switch(t.type){case"label":case"content":return o(t.tag,{style:h?f:m,class:["layui-descriptions-cell",`layui-descriptions-${t.type}`,h?`${g} ${n}`:`${d} ${b}`,,{[`is-border-${t.type}`]:L,[`is-vertical-${t.type}`]:x}],colSpan:x?c:h?1:2*c-1},h?r:i);default:return o("td",{class:["layui-descriptions-cell"],colSpan:c},[M(r)?void 0:o("span",{style:f,class:["layui-descriptions-label",g,n]},r),o("span",{style:m,class:["layui-descriptions-content",d,b]},i)])}}}}),R=$({name:"LayDescriptionsRow",props:{row:{type:Array,default:()=>[]}},setup(t){const{direction:s,border:p}=_(w,{});return()=>s==="vertical"?[o("tr",t.row.map(a=>o(v,{cell:a,tag:"th",type:"label"}))),o("tr",t.row.map(a=>o(v,{cell:a,tag:"td",type:"content"})))]:o("tr",t.row.map(a=>p?[o(v,{cell:a,tag:"td",type:"label"}),o(v,{cell:a,tag:"td",type:"content"})]:o(v,{cell:a,tag:"td",type:"item"})))}}),T={class:"layui-descriptions-header"},W={class:"layui-descriptions-header-title"},X={class:"layui-descriptions-header-extra"},Z={class:"layui-descriptions-body"},G=C($({name:"LayDescriptions",__name:"descriptions",props:{dataList:{},title:{},extra:{},border:{type:Boolean,default:!1},column:{default:3},direction:{default:"horizontal"},size:{default:"md"}},setup(t){const s=t,p=I(),a=N(()=>["layui-descriptions",`layui-descriptions-${s.size}`]),y=(e,l,r,i=!1)=>(e.props||(e.props={}),l>r&&(e.props.span=r),i&&(e.props.span=l),e),L=()=>{let e=[];var l;s.dataList&&s.dataList.length?(l=s.dataList,e=l.map(n=>o(P,{...Q(V(n),"label","content")},{default:()=>n.content,label:()=>n.label}))):p!=null&&p.default&&(e=K(p.default()).filter(n=>n.type.name==="LayDescriptionsItem"));const r=[];let i=[],c=s.column,b=0;return e.forEach((n,m)=>{var f;const d=((f=n.props)==null?void 0:f.span)||1;if(m<e.length-1&&(b+=d>c?c:d),m===e.length-1){const g=s.column-b%s.column;return i.push(y(n,g,c,!0)),void r.push(i)}d<c?(c-=d,i.push(n)):(i.push(y(n,d,c)),r.push(i),c=s.column,i=[])}),r};return j(w,{...s}),(e,l)=>(S(),D("div",{class:B(a.value)},[u("div",T,[u("div",W,[k(e.$slots,"title",{},()=>[z(A(e.title),1)])]),u("div",X,[k(e.$slots,"extra",{},()=>[z(A(e.extra),1)])])]),u("div",Z,[u("table",{class:B({"is-border":e.border})},[u("tbody",null,[(S(!0),D(E,null,F(L(),(r,i)=>(S(),J(O(R),{key:i,row:r},null,8,["row"]))),128))])],2)])],2))}}));export{G as Z,P as n};