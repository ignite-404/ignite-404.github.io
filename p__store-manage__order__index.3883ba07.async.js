"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7860],{55600:function(p,_,s){var m=s(38295),a=s(68994),c=s(85893);_.Z=function(i){var d=i.children,h=i.permissionKey,f=(0,m.o)();return f.managerPermissions==null?(0,c.jsx)("h1",{children:"\u6743\u9650\u672A\u52A0\u8F7D"}):(0,a.as)(f.managerPermissions,h)?d:(0,c.jsx)("h1",{children:"\u65E0\u6743\u8BBF\u95EE"})}},70140:function(p,_,s){s.r(_);var m=s(55600),a=s(68994),c=s(47650),i=s(85893);_.default=function(){var d=(0,c.pC)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(m.Z,{permissionKey:a.Cx.Order,children:d})})}},38295:function(p,_,s){s.d(_,{o:function(){return K}});var m=s(17061),a=s.n(m),c=s(17156),i=s.n(c),d=s(861),h=s.n(d),f=s(47650),o=s(30967),v=s(85134),g=s(42838),y=function(t){var u=l.mallSettings||{},e=[u.StoreNickName,u.StoreEnglishName];t?e=[u.StoreOfficialName,u.StoreOfficialEnglishName].concat(h()(e)):e=[].concat(h()(e),[u.StoreOfficialName,u.StoreOfficialEnglishName]);var r=e.filter(function(N){return!(0,g.Wq)(N)}).at(0);return r||v.v.app.name||v.v.app.englishName},A=function(){var n=i()(a()().mark(function t(){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.x1.mall.notificationUnReadCount().then(function(r){l.notificationCount=r.data.Data||0});case 2:case"end":return e.stop()}},t)}));return function(){return n.apply(this,arguments)}}(),E=function(){var n=i()(a()().mark(function t(){var u;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.x1.mallAdmin.gradeListGrades();case 2:u=r.sent,l.grades=u.data.Data||[];case 4:case"end":return r.stop()}},t)}));return function(){return n.apply(this,arguments)}}(),M=function(){var n=i()(a()().mark(function t(){var u;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.x1.mallAdmin.storeQueryStores();case 2:u=r.sent,l.stores=u.data.Data||[];case 4:case"end":return r.stop()}},t)}));return function(){return n.apply(this,arguments)}}(),C=function(){var n=i()(a()().mark(function t(){var u;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.x1.mall.shoppingCartCount();case 2:u=r.sent,l.shoppingCartCount=u.data.Data||0;case 4:case"end":return r.stop()}},t)}));return function(){return n.apply(this,arguments)}}(),P=function(){var n=i()(a()().mark(function t(){var u;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.x1.mall.storeGetCurrentStore();case 2:u=r.sent,l.currentStore=u.data.Data||{};case 4:case"end":return r.stop()}},t)}));return function(){return n.apply(this,arguments)}}(),D=function(){var n=i()(a()().mark(function t(){var u;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.x1.mall.storeMostNearbyStore();case 2:u=r.sent,l.mostNearbyStore=u.data.Data||{};case 4:case"end":return r.stop()}},t)}));return function(){return n.apply(this,arguments)}}(),R=function(){var n=i()(a()().mark(function t(){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.x1.platform.userAuth().then(function(r){l.userAuthResult=r.data||{}});case 2:case"end":return e.stop()}},t)}));return function(){return n.apply(this,arguments)}}(),S=function(){var n=i()(a()().mark(function t(){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.x1.sys.adminAuth().then(function(r){l.adminAuthResult=r.data||{}});case 2:case"end":return e.stop()}},t)}));return function(){return n.apply(this,arguments)}}(),O=function(){var n=i()(a()().mark(function t(){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.x1.sys.manageAdminQueryAdminPermissions().then(function(r){l.adminPermissions=r.data||{}});case 2:case"end":return e.stop()}},t)}));return function(){return n.apply(this,arguments)}}(),U=function(){var n=i()(a()().mark(function t(){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.x1.mallManager.storeManagerPermissionGetMyPermission().then(function(r){l.managerPermissions=r.data||{}});case 2:case"end":return e.stop()}},t)}));return function(){return n.apply(this,arguments)}}(),w=function(){var n=i()(a()().mark(function t(){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.x1.mallManager.storeManagerAuth().then(function(r){l.storeManagerAuthResult=r.data||{}});case 2:case"end":return e.stop()}},t)}));return function(){return n.apply(this,arguments)}}(),q=function(){var n=i()(a()().mark(function t(){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.x1.mall.userStoreUserAuth().then(function(r){l.storeUserAuthResult=r.data||{}});case 2:case"end":return e.stop()}},t)}));return function(){return n.apply(this,arguments)}}(),l=(0,f.sj)({queryUserAuthResult:R,getAppName:y,queryAdminAuthResult:S,queryStoreManagerAuthResult:w,queryStoreUserAuthResult:q,queryAdminPermission:O,queryStoreManagerPermission:U,queryGrades:E,queryStores:M,queryNotificationCount:A,queryShoppingCartCount:C,queryCurrentStore:P,queryMostNearbyStore:D,messageHistory:[],grades:[],stores:[],notificationCount:0,headerHeight:0,bottomHeight:0,mallSettings:{},shoppingCartCount:0,currentStore:void 0,mostNearbyStore:void 0,userAuthResult:void 0,adminAuthResult:void 0,adminPermissions:void 0,storeUserAuthResult:void 0,storeManagerAuthResult:void 0,managerPermissions:void 0,get user(){var n;return(n=this.userAuthResult)===null||n===void 0?void 0:n.User},get admin(){var n;return(n=this.adminAuthResult)===null||n===void 0?void 0:n.Admin},get storeUser(){var n;return(n=this.storeUserAuthResult)===null||n===void 0?void 0:n.StoreUser},get storeManager(){var n;return(n=this.storeManagerAuthResult)===null||n===void 0?void 0:n.StoreManager}}),K=function(){return(0,f.ey)(l)}}}]);
