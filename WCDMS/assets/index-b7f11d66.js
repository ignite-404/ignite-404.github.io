import{A as r,d,X as n,o as s,c as t,i as a,N as u,r as l,F as p,p as i,t as o}from"./index-0f1dbffa.js";const y={class:"layui-exception"},x={class:"layui-exception-image"},m={key:0,class:"error-401"},v={key:1,class:"error-403"},k={key:2,class:"error-404"},f={key:3,class:"error-500"},b={class:"layui-exception-details"},g={class:"layui-exception-details-content"},B={class:"layui-exception-details-title"},S={class:"layui-exception-details-describe"},E={class:"layui-exception-details-extra"},$=r(d({name:"LayException",__name:"index",props:{title:{default:"exception"},status:{},describe:{default:"describe"}},setup(N){const c=n();return(e,V)=>(s(),t("div",y,[a("div",x,[u(c).default?l(e.$slots,"image",{key:0}):(s(),t(p,{key:1},[e.status=="401"?(s(),t("div",m)):i("",!0),e.status=="403"?(s(),t("div",v)):i("",!0),e.status=="404"?(s(),t("div",k)):i("",!0),e.status=="500"?(s(),t("div",f)):i("",!0)],64))]),a("div",b,[a("div",g,[a("div",B,o(e.title),1),a("div",S,o(e.describe),1),a("div",E,[l(e.$slots,"extra")])])])]))}}));export{$ as V};
