"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7084],{24731:function(M,c,e){e.r(c);var i=e(38018),E=e(67294),m=e(21274),v=e(30699),t=e(95813),d=e(68421),r=e(76021),n=e(85893);c.default=function(){var _=(0,r.TH)(),u=(0,d.Z)(v.x1.platform.wechatMpAuthWxMpOAuthCodeLogin,{manual:!0,onSuccess:function(o){(0,t._y)(o,function(){var s=o.data.Data||{},l=s.AccessToken;if((0,t.Wq)(l)){(0,t.Ti)("\u65E0\u6CD5\u83B7\u53D6token");return}else{(0,t.M8)(l),(0,t.cQ)("\u767B\u5F55\u6210\u529F\uFF0C\u5373\u5C06\u8DF3\u8F6C");var f=localStorage.getItem("login_next")||"/";setTimeout(function(){window.location.href=f},500)}})}});return(0,E.useEffect)(function(){var a;console.log(_);var o=(a=i.parse(_.search))===null||a===void 0?void 0:a.code;if((0,t.Wq)(o))r.m8.push({pathname:"/"});else{var s="use_wechat_profile_key",l=localStorage.getItem(s)=="true";localStorage.removeItem(s),u.run({Code:o,UseWechatProfile:l})}},[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"container max-w-lg",children:[u.loading&&(0,n.jsx)(m.Z,{}),(0,n.jsx)("div",{className:"flex flex-row items-center justify-center py-5",children:(0,n.jsx)("h5",{className:"text-lg",children:"\u767B\u5F55\u4E2D..."})})]})})}}}]);
