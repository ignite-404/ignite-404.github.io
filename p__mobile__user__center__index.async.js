"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8958],{66386:function(K,p,e){e.d(p,{Z:function(){return y}});var g=e(10843),u=e(85893);function y(){return(0,u.jsxs)("div",{className:"py-3",children:[(0,u.jsx)("div",{children:(0,u.jsx)(g.X,{className:"flex h-12 w-12 rounded-full"})}),(0,u.jsxs)("div",{className:"flex w-full flex-col gap-2",children:[(0,u.jsx)(g.X,{className:"h-3 w-3/5 rounded-lg"}),(0,u.jsx)(g.X,{className:"h-3 w-4/5 rounded-lg"})]})]})}},99872:function(K,p,e){var g=e(5574),u=e.n(g),y=e(68421),c=e(67294),C=e(66386),P=e(30699),E=e(47650),f=e(66419),D=e(45837),U=e(19314),O=e(82354),N=e(1461),S=e(80570),n=e(85893);p.Z=function(){var _,I=(0,c.useState)(!1),R=u()(I,2),T=R[0],b=R[1],x=(0,y.Z)(P.x1.mall.userUserBalanceAndPoints,{manual:!0}),A=((_=x.data)===null||_===void 0||(_=_.data)===null||_===void 0?void 0:_.Data)||{};(0,c.useEffect)(function(){x.run({})},[]);var j=function(o){return(0,n.jsx)(D.w,{isPressable:!0,isHoverable:!0,className:"h-full w-full",onClick:function(){o.action&&o.action(),o.pathname&&E.m8.push({pathname:o.pathname})},children:(0,n.jsxs)(U.G,{className:"flex h-full w-full flex-col items-center justify-center py-2",children:[o.icon,(0,n.jsx)("h3",{className:"mb-1 text-nowrap font-bold",children:o.title}),(0,n.jsx)("span",{className:"text-sm text-slate-600",style:{visibility:(0,f.Wq)(o.subtitle)?"hidden":"visible"},children:o.subtitle||"--"})]})})};return x.loading?(0,n.jsx)(C.Z,{}):(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"my-4 grid grid-flow-row grid-cols-3 gap-2 px-2",children:[j({icon:(0,n.jsx)(O.Z,{stroke:1,size:35}),title:"\u4F59\u989D",subtitle:"".concat((0,f.lb)(A.Balance||0)),pathname:"/ucenter/balance"}),j({icon:(0,n.jsx)(N.Z,{stroke:1,size:35}),title:"\u4ED8\u6B3E",action:function(){b(!0)}}),j({icon:(0,n.jsx)(S.Z,{stroke:1,size:35}),title:"\u79EF\u5206",subtitle:"".concat(A.Points==null?"--":A.Points),pathname:"/ucenter/points"})]})})}},62966:function(K,p,e){e.r(p),e.d(p,{default:function(){return $}});var g=e(84179),u=e(67294),y=e(99872),c=e(38295),C=e(35291),P=e(55932),E=e(66419),f=e(85472),D=e(17226),U=e(47650),O=e(41279),N=e(39278),S=e(38787),n=e(85893);function _(){var l=(0,c.o)(),d=function(){(0,C.lE)(l.storeUser)&&l.queryNotificationCount()};(0,u.useEffect)(function(){d()},[]),(0,u.useEffect)(function(){(0,C.lE)(l.storeUser)||(l.notificationCount=0)},[l.storeUser]);var m=l.notificationCount||0;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(N.O,{shape:"circle",content:m,isInvisible:m<=0,color:"danger",children:(0,n.jsx)(S.A,{variant:"light",size:"sm",color:"default",radius:"full",isIconOnly:!0,onClick:function(){U.m8.push("/inbox")},children:(0,n.jsx)(O.Z,{stroke:1})})})})}var I=function(){var d,m,h,v,M=(0,c.o)(),L=(d=M.storeUser)===null||d===void 0||(d=d.Grade)===null||d===void 0?void 0:d.Name;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"px-3 py-6 flex-row-between gap-2 flex-nowrap flex-shrink-0",children:[(0,n.jsx)(f.z,{name:(0,n.jsx)("div",{className:"text-black",children:(0,E.zO)((0,C.vW)((m=M.storeUser)===null||m===void 0?void 0:m.User)||"New User",8)}),description:(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"text-light text-xs text-gray-400",children:"@".concat((h=M.storeUser)===null||h===void 0?void 0:h.Id)}),(0,E.Wq)(L)||(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{className:"text-overline text-tiny font-light",children:L})})]}),avatarProps:{className:"w-20 h-20 text-large mr-2",size:"lg",isBordered:!0,icon:(0,n.jsx)(D.Z,{stroke:1}),color:"primary",showFallback:!0,src:(0,P.SZ)((v=M.storeUser)===null||v===void 0||(v=v.User)===null||v===void 0?void 0:v.Avatar,{width:80,height:80})}}),(0,n.jsx)("div",{className:"",children:(0,n.jsx)(_,{})})]})})},R=I,T=e(68421),b=e(30699),x=e(97322),A=e(73138),j=e(39276),B=e(63070),o=e(26380),W=e(15741),s=e(79818),a=e(18266),i=function(d){var m=d.content;return(0,n.jsxs)("div",{className:"flex items-center gap-1 text-default-400",children:[(0,n.jsx)("span",{className:"text-small text-slate-500",children:m}),(0,n.jsx)(x.Z,{stroke:1})]})},r=function(d){return(0,n.jsx)(s.X,{className:"p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 w-full overflow-visible shadow-small rounded-medium",itemClasses:{base:"px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80"},children:d.map(function(m,h){return(0,n.jsx)(a.R,{startContent:m.icon,endContent:m.right==null||(0,n.jsx)(i,{content:m.right}),onClick:function(){m.path?U.m8.push({pathname:m.path}):m.action&&m.action()},children:m.name},h)})})};function t(){var l,d,m=(0,c.o)(),h=(l=m.storeUser)===null||l===void 0||(l=l.User)===null||l===void 0||(l=l.UserMobile)===null||l===void 0?void 0:l.MobilePhone,v=(0,T.Z)(b.x1.mall.orderPendingCount,{manual:!0}),M=((d=v.data)===null||d===void 0||(d=d.data)===null||d===void 0?void 0:d.Data)||0;(0,u.useEffect)(function(){v.run()},[]);var L=[{icon:(0,n.jsx)(A.Z,{stroke:1}),name:"\u8BA2\u5355",path:"/order",right:M>0?"".concat(M,"\u4E2A\u8FDB\u884C\u4E2D"):""},{icon:(0,n.jsx)(j.Z,{stroke:1}),name:"\u4F18\u60E0\u5238",right:"\u2318X",path:"/user/coupon"},{icon:(0,n.jsx)(B.Z,{stroke:1}),name:"\u6536\u8D27\u5730\u5740",right:"\u2318X",path:"/user/address"},{icon:(0,n.jsx)(o.Z,{stroke:1}),name:"\u7ED1\u5B9A\u624B\u673A",right:(0,E.Wq)(h)?"\u2318C":"".concat(h),path:"/user/mobile",action:function(){}}],w=[{icon:(0,n.jsx)(W.Z,{stroke:1}),name:"\u8BBE \u7F6E",path:"/ucenter/profile"}];return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"mb-3 px-1",children:[(0,n.jsx)("div",{className:"mb-2",children:r(L)}),(0,n.jsx)("div",{className:"mb-2",children:r(w)})]})})}function $(){return(0,g.Z)("\u7528\u6237"),(0,u.useEffect)(function(){var l=document.body.style.backgroundColor;return document.body.style.backgroundColor="#f5f7f9",function(){document.body.style.backgroundColor=l}},[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"container mx-auto max-w-md mb-1",children:[(0,n.jsx)(R,{}),(0,n.jsx)(y.Z,{}),(0,n.jsx)(t,{})]})})}},38295:function(K,p,e){e.d(p,{o:function(){return W}});var g=e(15009),u=e.n(g),y=e(99289),c=e.n(y),C=e(19632),P=e.n(C),E=e(47650),f=e(30699),D=e(85134),U=e(66419),O=function(a){var i=o.mallSettings||{},r=[i.StoreNickName,i.StoreEnglishName];a?r=[i.StoreOfficialName,i.StoreOfficialEnglishName].concat(P()(r)):r=[].concat(P()(r),[i.StoreOfficialName,i.StoreOfficialEnglishName]);var t=r.filter(function($){return!(0,U.Wq)($)}).at(0);return t||D.v.app.name||D.v.app.english_name},N=function(){var s=c()(u()().mark(function a(){return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,f.x1.mall.notificationUnReadCount().then(function(t){o.notificationCount=t.data.Data||0});case 2:case"end":return r.stop()}},a)}));return function(){return s.apply(this,arguments)}}(),S=function(){var s=c()(u()().mark(function a(){var i;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.x1.mallAdmin.gradeListGrades();case 2:i=t.sent,o.grades=i.data.Data||[];case 4:case"end":return t.stop()}},a)}));return function(){return s.apply(this,arguments)}}(),n=function(){var s=c()(u()().mark(function a(){var i;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.x1.mallAdmin.storeQueryStores();case 2:i=t.sent,o.stores=i.data.Data||[];case 4:case"end":return t.stop()}},a)}));return function(){return s.apply(this,arguments)}}(),_=function(){var s=c()(u()().mark(function a(){var i;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.x1.mall.shoppingCartCount();case 2:i=t.sent,o.shoppingCartCount=i.data.Data||0;case 4:case"end":return t.stop()}},a)}));return function(){return s.apply(this,arguments)}}(),I=function(){var s=c()(u()().mark(function a(){var i;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.x1.mall.storeGetCurrentStore();case 2:i=t.sent,o.currentStore=i.data.Data||{};case 4:case"end":return t.stop()}},a)}));return function(){return s.apply(this,arguments)}}(),R=function(){var s=c()(u()().mark(function a(){var i;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.x1.mall.storeMostNearbyStore();case 2:i=t.sent,o.mostNearbyStore=i.data.Data||{};case 4:case"end":return t.stop()}},a)}));return function(){return s.apply(this,arguments)}}(),T=function(){var s=c()(u()().mark(function a(){return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,f.x1.platform.userAuth().then(function(t){o.userAuthResult=t.data||{}});case 2:case"end":return r.stop()}},a)}));return function(){return s.apply(this,arguments)}}(),b=function(){var s=c()(u()().mark(function a(){return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,f.x1.sys.adminAuth().then(function(t){o.adminAuthResult=t.data||{}});case 2:case"end":return r.stop()}},a)}));return function(){return s.apply(this,arguments)}}(),x=function(){var s=c()(u()().mark(function a(){return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,f.x1.sys.manageAdminQueryAdminPermissions().then(function(t){o.adminPermissions=t.data||{}});case 2:case"end":return r.stop()}},a)}));return function(){return s.apply(this,arguments)}}(),A=function(){var s=c()(u()().mark(function a(){return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,f.x1.mallManager.storeManagerPermissionGetMyPermission().then(function(t){o.managerPermissions=t.data||{}});case 2:case"end":return r.stop()}},a)}));return function(){return s.apply(this,arguments)}}(),j=function(){var s=c()(u()().mark(function a(){return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,f.x1.mallManager.storeManagerAuth().then(function(t){o.storeManagerAuthResult=t.data||{}});case 2:case"end":return r.stop()}},a)}));return function(){return s.apply(this,arguments)}}(),B=function(){var s=c()(u()().mark(function a(){return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,f.x1.mall.userStoreUserAuth().then(function(t){o.storeUserAuthResult=t.data||{}});case 2:case"end":return r.stop()}},a)}));return function(){return s.apply(this,arguments)}}(),o=(0,E.sj)({queryUserAuthResult:T,getAppName:O,queryAdminAuthResult:b,queryStoreManagerAuthResult:j,queryStoreUserAuthResult:B,queryAdminPermission:x,queryStoreManagerPermission:A,queryGrades:S,queryStores:n,queryNotificationCount:N,queryShoppingCartCount:_,queryCurrentStore:I,queryMostNearbyStore:R,messageHistory:[],grades:[],stores:[],notificationCount:0,headerHeight:0,bottomHeight:0,mallSettings:{},shoppingCartCount:0,currentStore:void 0,mostNearbyStore:void 0,userAuthResult:void 0,adminAuthResult:void 0,adminPermissions:void 0,storeUserAuthResult:void 0,storeManagerAuthResult:void 0,managerPermissions:void 0,get user(){var s;return(s=this.userAuthResult)===null||s===void 0?void 0:s.User},get admin(){var s;return(s=this.adminAuthResult)===null||s===void 0?void 0:s.Admin},get storeUser(){var s;return(s=this.storeUserAuthResult)===null||s===void 0?void 0:s.StoreUser},get storeManager(){var s;return(s=this.storeManagerAuthResult)===null||s===void 0?void 0:s.StoreManager}}),W=function(){return(0,E.ey)(o)}}}]);
