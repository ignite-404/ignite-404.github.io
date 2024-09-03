"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4385],{84621:function(g,m,u){u.d(m,{Z:function(){return S}});var f=u(68421),a=u(67294),d=u(47650),l=u(21274),D=u(38295),v=u(35291),A=u(30967),c=u(42838),y=u(52900),C=u(38787),i=u(85893),M=function(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"container max-w-lg",children:(0,i.jsx)("div",{className:"m-2",children:(0,i.jsxs)("div",{className:"flex flex-col gap-2",style:{width:"100%"},children:[(0,i.jsx)("div",{className:"mb-2 flex flex-row items-center justify-center",children:(0,i.jsx)("img",{src:y,height:200,alt:""})}),(0,i.jsxs)("div",{className:"p-3",children:[(0,i.jsxs)("div",{className:"my-3",children:[(0,i.jsx)("div",{className:"text-title",children:"\u767B\u5F55\u53EF\u4EE5\u5F00\u542F\u5B8C\u6574\u529F\u80FD\uFF01"}),(0,i.jsx)("p",{className:"text-caption",children:"\u5546\u54C1\u660E\u7EC6\u3001\u8D2D\u7269\u8F66\u3001\u8BA2\u5355\u3001\u4E2A\u4EBA\u4E2D\u5FC3\u7B49"})]}),(0,i.jsx)("div",{className:"py-2",children:(0,i.jsx)(C.A,{fullWidth:!0,variant:"flat",color:"primary",onClick:function(){(0,v.rf)()},children:"\u7ACB\u9A6C\u767B\u5F55"})}),(0,i.jsx)("div",{className:"py-1",children:(0,i.jsx)(C.A,{fullWidth:!0,size:"sm",variant:"light",onClick:function(){d.m8.push({pathname:"/"})},children:"\u8FD4\u56DE\u9996\u9875"})})]})]})})})})};function S(h){var _,U=h.children,P=h.optional,p=(0,D.o)(),j=(0,d.TH)(),E=((_=p.storeUserAuthResult)===null||_===void 0?void 0:_.StoreUser)||{},R=(0,f.Z)(A.x1.mall.userStoreUserAuth,{manual:!0,onSuccess:function(x,o){p.storeUserAuthResult=x.data||{}}});if((0,a.useEffect)(function(){(0,c.lk)()?R.run():p.storeUserAuthResult=void 0},[j.pathname]),R.loading)return(0,i.jsx)(l.Z,{});if(!P){if(!(0,v.lE)(E))return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(M,{})});if(!E.IsActive)return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("h1",{children:"\u5546\u57CE\u8D26\u53F7\u5DF2\u7ECF\u88AB\u7981\u7528"})})}return(0,i.jsx)(i.Fragment,{children:U})}},88199:function(g,m,u){u.r(m);var f=u(84621),a=u(47650),d=u(85893);m.default=function(){var l=(0,a.pC)();return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(f.Z,{children:l})})}},38295:function(g,m,u){u.d(m,{o:function(){return O}});var f=u(17061),a=u.n(f),d=u(17156),l=u.n(d),D=u(861),v=u.n(D),A=u(47650),c=u(30967),y=u(85134),C=u(42838),i=function(t){var s=o.mallSettings||{},e=[s.StoreNickName,s.StoreEnglishName];t?e=[s.StoreOfficialName,s.StoreOfficialEnglishName].concat(v()(e)):e=[].concat(v()(e),[s.StoreOfficialName,s.StoreOfficialEnglishName]);var r=e.filter(function(w){return!(0,C.Wq)(w)}).at(0);return r||y.v.app.name||y.v.app.englishName},M=function(){var n=l()(a()().mark(function t(){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.x1.mall.notificationUnReadCount().then(function(r){o.notificationCount=r.data.Data||0});case 2:case"end":return e.stop()}},t)}));return function(){return n.apply(this,arguments)}}(),S=function(){var n=l()(a()().mark(function t(){var s;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.x1.mallAdmin.gradeListGrades();case 2:s=r.sent,o.grades=s.data.Data||[];case 4:case"end":return r.stop()}},t)}));return function(){return n.apply(this,arguments)}}(),h=function(){var n=l()(a()().mark(function t(){var s;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.x1.mallAdmin.storeQueryStores();case 2:s=r.sent,o.stores=s.data.Data||[];case 4:case"end":return r.stop()}},t)}));return function(){return n.apply(this,arguments)}}(),_=function(){var n=l()(a()().mark(function t(){var s;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.x1.mall.shoppingCartCount();case 2:s=r.sent,o.shoppingCartCount=s.data.Data||0;case 4:case"end":return r.stop()}},t)}));return function(){return n.apply(this,arguments)}}(),U=function(){var n=l()(a()().mark(function t(){var s;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.x1.mall.storeGetCurrentStore();case 2:s=r.sent,o.currentStore=s.data.Data||{};case 4:case"end":return r.stop()}},t)}));return function(){return n.apply(this,arguments)}}(),P=function(){var n=l()(a()().mark(function t(){var s;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.x1.mall.storeMostNearbyStore();case 2:s=r.sent,o.mostNearbyStore=s.data.Data||{};case 4:case"end":return r.stop()}},t)}));return function(){return n.apply(this,arguments)}}(),p=function(){var n=l()(a()().mark(function t(){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.x1.platform.userAuth().then(function(r){o.userAuthResult=r.data||{}});case 2:case"end":return e.stop()}},t)}));return function(){return n.apply(this,arguments)}}(),j=function(){var n=l()(a()().mark(function t(){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.x1.sys.adminAuth().then(function(r){o.adminAuthResult=r.data||{}});case 2:case"end":return e.stop()}},t)}));return function(){return n.apply(this,arguments)}}(),E=function(){var n=l()(a()().mark(function t(){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.x1.sys.manageAdminQueryAdminPermissions().then(function(r){o.adminPermissions=r.data||{}});case 2:case"end":return e.stop()}},t)}));return function(){return n.apply(this,arguments)}}(),R=function(){var n=l()(a()().mark(function t(){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.x1.mallManager.storeManagerPermissionGetMyPermission().then(function(r){o.managerPermissions=r.data||{}});case 2:case"end":return e.stop()}},t)}));return function(){return n.apply(this,arguments)}}(),N=function(){var n=l()(a()().mark(function t(){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.x1.mallManager.storeManagerAuth().then(function(r){o.storeManagerAuthResult=r.data||{}});case 2:case"end":return e.stop()}},t)}));return function(){return n.apply(this,arguments)}}(),x=function(){var n=l()(a()().mark(function t(){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.x1.mall.userStoreUserAuth().then(function(r){o.storeUserAuthResult=r.data||{}});case 2:case"end":return e.stop()}},t)}));return function(){return n.apply(this,arguments)}}(),o=(0,A.sj)({queryUserAuthResult:p,getAppName:i,queryAdminAuthResult:j,queryStoreManagerAuthResult:N,queryStoreUserAuthResult:x,queryAdminPermission:E,queryStoreManagerPermission:R,queryGrades:S,queryStores:h,queryNotificationCount:M,queryShoppingCartCount:_,queryCurrentStore:U,queryMostNearbyStore:P,messageHistory:[],grades:[],stores:[],notificationCount:0,headerHeight:0,bottomHeight:0,mallSettings:{},shoppingCartCount:0,currentStore:void 0,mostNearbyStore:void 0,userAuthResult:void 0,adminAuthResult:void 0,adminPermissions:void 0,storeUserAuthResult:void 0,storeManagerAuthResult:void 0,managerPermissions:void 0,get user(){var n;return(n=this.userAuthResult)===null||n===void 0?void 0:n.User},get admin(){var n;return(n=this.adminAuthResult)===null||n===void 0?void 0:n.Admin},get storeUser(){var n;return(n=this.storeUserAuthResult)===null||n===void 0?void 0:n.StoreUser},get storeManager(){var n;return(n=this.storeManagerAuthResult)===null||n===void 0?void 0:n.StoreManager}}),O=function(){return(0,A.ey)(o)}},52900:function(g,m,u){g.exports=u.p+"static/illustration_register.94d8a10e.png"}}]);
