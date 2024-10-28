"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9884],{66386:function(N,h,e){e.d(h,{Z:function(){return v}});var f=e(10843),t=e(85893);function v(){return(0,t.jsxs)("div",{className:"py-3",children:[(0,t.jsx)("div",{children:(0,t.jsx)(f.X,{className:"flex h-12 w-12 rounded-full"})}),(0,t.jsxs)("div",{className:"flex w-full flex-col gap-2",children:[(0,t.jsx)(f.X,{className:"h-3 w-3/5 rounded-lg"}),(0,t.jsx)(f.X,{className:"h-3 w-4/5 rounded-lg"})]})]})}},64080:function(N,h,e){var f=e(21274),t=e(85893);h.Z=function(v){var o=v.loading,y=v.hasMore;return o?(0,t.jsx)(f.Z,{}):y?null:(0,t.jsx)("div",{className:"flex flex-row items-center justify-center gap-2",children:(0,t.jsx)("span",{className:"text-slate-400",children:"\u6CA1\u6709\u66F4\u591A\u4E86"})})}},85685:function(N,h,e){e.d(h,{Z:function(){return A}});var f=e(38295),t=e(47650),v=e(66419),o=e(38787),y=e(48135),d=e(85893);function A(c){var P=c.children,E=c.rightButtons,p=c.leftButtons,C=(0,f.o)(),D=function(){window.history.length>1?t.m8.back():t.m8.push({pathname:"/"})},_=function(){return(0,d.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[(0,v.G5)(p)&&(0,d.jsxs)("div",{className:"flex-row-center cursor-pointer gap-1",onClick:function(g){g.preventDefault(),g.stopPropagation(),D()},children:[(0,d.jsx)(o.A,{size:"lg",color:"default",radius:"full",variant:"light",isIconOnly:!0,onClick:function(g){g.preventDefault(),g.stopPropagation(),D()},children:(0,d.jsx)(y.Z,{stroke:1})}),(0,d.jsx)("h1",{className:"text-title m-0 p-0",children:window.document.title||C.getAppName()})]}),p==null?void 0:p.map(function(M){return M})]})};return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"container max-w-lg",children:[(0,d.jsxs)("div",{className:"flex-row-between py-1",children:[_(),(0,d.jsx)("div",{className:"flex-row-center gap-2",children:E==null?void 0:E.map(function(m){return m})})]}),(0,d.jsx)("div",{children:P})]})})}},67574:function(N,h,e){e.r(h),e.d(h,{default:function(){return R}});var f=e(15009),t=e.n(f),v=e(97857),o=e.n(v),y=e(99289),d=e.n(y),A=e(5574),c=e.n(A),P=e(68770),E=e(67294),p=e(64080),C=e(85685),D=e(30699),_=e(38787),m=e(99872),M=e(46629),g=e(66419),S=e(75968),I=e(84367),i=e(85893),O=function(U){var u=U.model;if(!u||u.Balance==0)return null;var j=function(){return u.ActionType==1?(0,i.jsx)(S.z,{color:"danger",size:"sm",children:"+".concat(u.Balance)}):u.ActionType==-1?(0,i.jsx)(S.z,{color:"success",size:"sm",children:"-".concat(u.Balance)}):(0,i.jsx)(S.z,{size:"sm",children:u.Balance})};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"flex flex-row items-center justify-between p-2",children:[(0,i.jsx)("div",{children:j()}),(0,i.jsx)("div",{className:"text-slate-400",children:(0,M.Gl)(u.CreationTime)}),(0,g.Wq)(u.Message)||(0,i.jsx)("div",{className:"py-1 text-sm text-blue-500",children:u.Message})]}),(0,i.jsx)(I.j,{})]})};function R(){var U=E.useState({}),u=c()(U,2),j=u[0],a=u[1],s=(0,P.Z)(function(){var L=d()(t()().mark(function x(B){var w,$;return t()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,D.x1.mall.userQueryBalancePaging(o()(o()({},j),{},{Page:((B==null||(w=B.res)===null||w===void 0?void 0:w.PageIndex)||0)+1}));case 2:return $=T.sent,T.abrupt("return",{list:$.data.Items||[],res:$.data});case 4:case"end":return T.stop()}},x)}));return function(x){return L.apply(this,arguments)}}(),{target:window.document,isNoMore:function(x){var B;return(x==null||(B=x.res)===null||B===void 0?void 0:B.IsEmpty)||!1},reloadDeps:[j]}),l=s.loading,n=s.loadingMore,r=s.mutate,W=s.noMore,K=s.data,b=(K==null?void 0:K.list)||[];return E.useEffect(function(){r({list:[]})},[j]),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(C.Z,{children:[(0,i.jsx)("div",{className:"my-2",children:(0,i.jsx)(m.Z,{})}),(0,i.jsx)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-end"},children:(0,i.jsx)(_.A,{onClick:function(){},children:"\u9884\u5145\u503C"})}),(0,i.jsx)("div",{style:{backgroundColor:"white"},children:b.map(function(L,x){return(0,i.jsx)("div",{children:(0,i.jsx)(O,{model:L})},x)})}),(0,i.jsx)(p.Z,{loading:l||n,hasMore:!W})]})})}},99872:function(N,h,e){var f=e(5574),t=e.n(f),v=e(68421),o=e(67294),y=e(66386),d=e(30699),A=e(47650),c=e(66419),P=e(45837),E=e(19314),p=e(82354),C=e(1461),D=e(80570),_=e(85893);h.Z=function(){var m,M=(0,o.useState)(!1),g=t()(M,2),S=g[0],I=g[1],i=(0,v.Z)(d.x1.mall.userUserBalanceAndPoints,{manual:!0}),O=((m=i.data)===null||m===void 0||(m=m.data)===null||m===void 0?void 0:m.Data)||{};(0,o.useEffect)(function(){i.run({})},[]);var R=function(u){return(0,_.jsx)(P.w,{isPressable:!0,isHoverable:!0,className:"h-full w-full",onClick:function(){u.action&&u.action(),u.pathname&&A.m8.push({pathname:u.pathname})},children:(0,_.jsxs)(E.G,{className:"flex h-full w-full flex-col items-center justify-center py-2",children:[u.icon,(0,_.jsx)("h3",{className:"mb-1 text-nowrap font-bold",children:u.title}),(0,_.jsx)("span",{className:"text-sm text-slate-600",style:{visibility:(0,c.Wq)(u.subtitle)?"hidden":"visible"},children:u.subtitle||"--"})]})})};return i.loading?(0,_.jsx)(y.Z,{}):(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:"my-4 grid grid-flow-row grid-cols-3 gap-2 px-2",children:[R({icon:(0,_.jsx)(p.Z,{stroke:1,size:35}),title:"\u4F59\u989D",subtitle:"".concat((0,c.lb)(O.Balance||0)),pathname:"/ucenter/balance"}),R({icon:(0,_.jsx)(C.Z,{stroke:1,size:35}),title:"\u4ED8\u6B3E",action:function(){I(!0)}}),R({icon:(0,_.jsx)(D.Z,{stroke:1,size:35}),title:"\u79EF\u5206",subtitle:"".concat(O.Points==null?"--":O.Points),pathname:"/ucenter/points"})]})})}},38295:function(N,h,e){e.d(h,{o:function(){return j}});var f=e(15009),t=e.n(f),v=e(99289),o=e.n(v),y=e(19632),d=e.n(y),A=e(47650),c=e(30699),P=e(85134),E=e(66419),p=function(s){var l=u.mallSettings||{},n=[l.StoreNickName,l.StoreEnglishName];s?n=[l.StoreOfficialName,l.StoreOfficialEnglishName].concat(d()(n)):n=[].concat(d()(n),[l.StoreOfficialName,l.StoreOfficialEnglishName]);var r=n.filter(function(W){return!(0,E.Wq)(W)}).at(0);return r||P.v.app.name||P.v.app.english_name},C=function(){var a=o()(t()().mark(function s(){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.x1.mall.notificationUnReadCount().then(function(r){u.notificationCount=r.data.Data||0});case 2:case"end":return n.stop()}},s)}));return function(){return a.apply(this,arguments)}}(),D=function(){var a=o()(t()().mark(function s(){var l;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.x1.mallAdmin.gradeListGrades();case 2:l=r.sent,u.grades=l.data.Data||[];case 4:case"end":return r.stop()}},s)}));return function(){return a.apply(this,arguments)}}(),_=function(){var a=o()(t()().mark(function s(){var l;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.x1.mallAdmin.storeQueryStores();case 2:l=r.sent,u.stores=l.data.Data||[];case 4:case"end":return r.stop()}},s)}));return function(){return a.apply(this,arguments)}}(),m=function(){var a=o()(t()().mark(function s(){var l;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.x1.mall.shoppingCartCount();case 2:l=r.sent,u.shoppingCartCount=l.data.Data||0;case 4:case"end":return r.stop()}},s)}));return function(){return a.apply(this,arguments)}}(),M=function(){var a=o()(t()().mark(function s(){var l;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.x1.mall.storeGetCurrentStore();case 2:l=r.sent,u.currentStore=l.data.Data||{};case 4:case"end":return r.stop()}},s)}));return function(){return a.apply(this,arguments)}}(),g=function(){var a=o()(t()().mark(function s(){var l;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.x1.mall.storeMostNearbyStore();case 2:l=r.sent,u.mostNearbyStore=l.data.Data||{};case 4:case"end":return r.stop()}},s)}));return function(){return a.apply(this,arguments)}}(),S=function(){var a=o()(t()().mark(function s(){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.x1.platform.userAuth().then(function(r){u.userAuthResult=r.data||{}});case 2:case"end":return n.stop()}},s)}));return function(){return a.apply(this,arguments)}}(),I=function(){var a=o()(t()().mark(function s(){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.x1.sys.adminAuth().then(function(r){u.adminAuthResult=r.data||{}});case 2:case"end":return n.stop()}},s)}));return function(){return a.apply(this,arguments)}}(),i=function(){var a=o()(t()().mark(function s(){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.x1.sys.manageAdminQueryAdminPermissions().then(function(r){u.adminPermissions=r.data||{}});case 2:case"end":return n.stop()}},s)}));return function(){return a.apply(this,arguments)}}(),O=function(){var a=o()(t()().mark(function s(){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.x1.mallManager.storeManagerPermissionGetMyPermission().then(function(r){u.managerPermissions=r.data||{}});case 2:case"end":return n.stop()}},s)}));return function(){return a.apply(this,arguments)}}(),R=function(){var a=o()(t()().mark(function s(){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.x1.mallManager.storeManagerAuth().then(function(r){u.storeManagerAuthResult=r.data||{}});case 2:case"end":return n.stop()}},s)}));return function(){return a.apply(this,arguments)}}(),U=function(){var a=o()(t()().mark(function s(){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.x1.mall.userStoreUserAuth().then(function(r){u.storeUserAuthResult=r.data||{}});case 2:case"end":return n.stop()}},s)}));return function(){return a.apply(this,arguments)}}(),u=(0,A.sj)({queryUserAuthResult:S,getAppName:p,queryAdminAuthResult:I,queryStoreManagerAuthResult:R,queryStoreUserAuthResult:U,queryAdminPermission:i,queryStoreManagerPermission:O,queryGrades:D,queryStores:_,queryNotificationCount:C,queryShoppingCartCount:m,queryCurrentStore:M,queryMostNearbyStore:g,messageHistory:[],grades:[],stores:[],notificationCount:0,headerHeight:0,bottomHeight:0,mallSettings:{},shoppingCartCount:0,currentStore:void 0,mostNearbyStore:void 0,userAuthResult:void 0,adminAuthResult:void 0,adminPermissions:void 0,storeUserAuthResult:void 0,storeManagerAuthResult:void 0,managerPermissions:void 0,get user(){var a;return(a=this.userAuthResult)===null||a===void 0?void 0:a.User},get admin(){var a;return(a=this.adminAuthResult)===null||a===void 0?void 0:a.Admin},get storeUser(){var a;return(a=this.storeUserAuthResult)===null||a===void 0?void 0:a.StoreUser},get storeManager(){var a;return(a=this.storeManagerAuthResult)===null||a===void 0?void 0:a.StoreManager}}),j=function(){return(0,A.ey)(u)}}}]);
