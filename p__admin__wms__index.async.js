"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4755],{46445:function(p,o,s){var d=s(38295),u=s(35291),m=s(85893);o.Z=function(i){var c=i.children,h=i.permissionKey,f=(0,d.o)();return f.adminPermissions==null?(0,m.jsx)("h1",{children:"\u6743\u9650\u672A\u52A0\u8F7D"}):(0,u.eg)(f.adminPermissions,h)?c:(0,m.jsx)("h1",{children:"\u65E0\u6743\u8BBF\u95EE"})}},71617:function(p,o,s){var d=s(35291),u=s(85893);o.Z=function(m){var i=m.children;return(0,d.tC)()?(0,u.jsx)("h1",{children:"404.not.found"}):(0,u.jsx)(u.Fragment,{children:i})}},92870:function(p,o,s){s.r(o);var d=s(46445),u=s(71617),m=s(35291),i=s(47650),c=s(85893);o.default=function(){var h=(0,i.pC)();return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(u.Z,{children:(0,c.jsx)(d.Z,{permissionKey:m.eP.Warehouse,children:h})})})}},38295:function(p,o,s){s.d(o,{o:function(){return b}});var d=s(15009),u=s.n(d),m=s(99289),i=s.n(m),c=s(19632),h=s.n(c),f=s(47650),_=s(30699),v=s(85134),g=s(66419),A=function(t){var a=l.mallSettings||{},e=[a.StoreNickName,a.StoreEnglishName];t?e=[a.StoreOfficialName,a.StoreOfficialEnglishName].concat(h()(e)):e=[].concat(h()(e),[a.StoreOfficialName,a.StoreOfficialEnglishName]);var r=e.filter(function(K){return!(0,g.Wq)(K)}).at(0);return r||v.v.app.name||v.v.app.english_name},y=function(){var n=i()(u()().mark(function t(){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.x1.mall.notificationUnReadCount().then(function(r){l.notificationCount=r.data.Data||0});case 2:case"end":return e.stop()}},t)}));return function(){return n.apply(this,arguments)}}(),E=function(){var n=i()(u()().mark(function t(){var a;return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,_.x1.mallAdmin.gradeListGrades();case 2:a=r.sent,l.grades=a.data.Data||[];case 4:case"end":return r.stop()}},t)}));return function(){return n.apply(this,arguments)}}(),M=function(){var n=i()(u()().mark(function t(){var a;return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,_.x1.mallAdmin.storeQueryStores();case 2:a=r.sent,l.stores=a.data.Data||[];case 4:case"end":return r.stop()}},t)}));return function(){return n.apply(this,arguments)}}(),P=function(){var n=i()(u()().mark(function t(){var a;return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,_.x1.mall.shoppingCartCount();case 2:a=r.sent,l.shoppingCartCount=a.data.Data||0;case 4:case"end":return r.stop()}},t)}));return function(){return n.apply(this,arguments)}}(),C=function(){var n=i()(u()().mark(function t(){var a;return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,_.x1.mall.storeGetCurrentStore();case 2:a=r.sent,l.currentStore=a.data.Data||{};case 4:case"end":return r.stop()}},t)}));return function(){return n.apply(this,arguments)}}(),D=function(){var n=i()(u()().mark(function t(){var a;return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,_.x1.mall.storeMostNearbyStore();case 2:a=r.sent,l.mostNearbyStore=a.data.Data||{};case 4:case"end":return r.stop()}},t)}));return function(){return n.apply(this,arguments)}}(),R=function(){var n=i()(u()().mark(function t(){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.x1.platform.userAuth().then(function(r){l.userAuthResult=r.data||{}});case 2:case"end":return e.stop()}},t)}));return function(){return n.apply(this,arguments)}}(),O=function(){var n=i()(u()().mark(function t(){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.x1.sys.adminAuth().then(function(r){l.adminAuthResult=r.data||{}});case 2:case"end":return e.stop()}},t)}));return function(){return n.apply(this,arguments)}}(),S=function(){var n=i()(u()().mark(function t(){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.x1.sys.manageAdminQueryAdminPermissions().then(function(r){l.adminPermissions=r.data||{}});case 2:case"end":return e.stop()}},t)}));return function(){return n.apply(this,arguments)}}(),U=function(){var n=i()(u()().mark(function t(){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.x1.mallManager.storeManagerPermissionGetMyPermission().then(function(r){l.managerPermissions=r.data||{}});case 2:case"end":return e.stop()}},t)}));return function(){return n.apply(this,arguments)}}(),j=function(){var n=i()(u()().mark(function t(){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.x1.mallManager.storeManagerAuth().then(function(r){l.storeManagerAuthResult=r.data||{}});case 2:case"end":return e.stop()}},t)}));return function(){return n.apply(this,arguments)}}(),w=function(){var n=i()(u()().mark(function t(){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.x1.mall.userStoreUserAuth().then(function(r){l.storeUserAuthResult=r.data||{}});case 2:case"end":return e.stop()}},t)}));return function(){return n.apply(this,arguments)}}(),l=(0,f.sj)({queryUserAuthResult:R,getAppName:A,queryAdminAuthResult:O,queryStoreManagerAuthResult:j,queryStoreUserAuthResult:w,queryAdminPermission:S,queryStoreManagerPermission:U,queryGrades:E,queryStores:M,queryNotificationCount:y,queryShoppingCartCount:P,queryCurrentStore:C,queryMostNearbyStore:D,messageHistory:[],grades:[],stores:[],notificationCount:0,headerHeight:0,bottomHeight:0,mallSettings:{},shoppingCartCount:0,currentStore:void 0,mostNearbyStore:void 0,userAuthResult:void 0,adminAuthResult:void 0,adminPermissions:void 0,storeUserAuthResult:void 0,storeManagerAuthResult:void 0,managerPermissions:void 0,get user(){var n;return(n=this.userAuthResult)===null||n===void 0?void 0:n.User},get admin(){var n;return(n=this.adminAuthResult)===null||n===void 0?void 0:n.Admin},get storeUser(){var n;return(n=this.storeUserAuthResult)===null||n===void 0?void 0:n.StoreUser},get storeManager(){var n;return(n=this.storeManagerAuthResult)===null||n===void 0?void 0:n.StoreManager}}),b=function(){return(0,f.ey)(l)}}}]);
