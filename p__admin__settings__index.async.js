"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1030],{46445:function(y,d,u){var h=u(38295),t=u(35291),c=u(85893);d.Z=function(_){var p=_.children,v=_.permissionKey,f=(0,h.o)();return f.adminPermissions==null?(0,c.jsx)("h1",{children:"\u6743\u9650\u672A\u52A0\u8F7D"}):(0,t.eg)(f.adminPermissions,v)?p:(0,c.jsx)("h1",{children:"\u65E0\u6743\u8BBF\u95EE"})}},25256:function(y,d,u){u.r(d);var h=u(46445),t=u(35291),c=u(47650),_=u(85893);d.default=function(){var p=(0,c.pC)();return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(h.Z,{permissionKey:t.eP.Settings,children:p})})}},38295:function(y,d,u){u.d(d,{o:function(){return w}});var h=u(15009),t=u.n(h),c=u(99289),_=u.n(c),p=u(19632),v=u.n(p),f=u(47650),i=u(30967),g=u(85134),M=u(42838),D=function(s){var a=l.mallSettings||{},e=[a.StoreNickName,a.StoreEnglishName];s?e=[a.StoreOfficialName,a.StoreOfficialEnglishName].concat(v()(e)):e=[].concat(v()(e),[a.StoreOfficialName,a.StoreOfficialEnglishName]);var r=e.filter(function(K){return!(0,M.Wq)(K)}).at(0);return r||g.v.app.name||g.v.app.englishName},m=function(){var n=_()(t()().mark(function s(){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.x1.mall.notificationUnReadCount().then(function(r){l.notificationCount=r.data.Data||0});case 2:case"end":return e.stop()}},s)}));return function(){return n.apply(this,arguments)}}(),A=function(){var n=_()(t()().mark(function s(){var a;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.x1.mallAdmin.gradeListGrades();case 2:a=r.sent,l.grades=a.data.Data||[];case 4:case"end":return r.stop()}},s)}));return function(){return n.apply(this,arguments)}}(),E=function(){var n=_()(t()().mark(function s(){var a;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.x1.mallAdmin.storeQueryStores();case 2:a=r.sent,l.stores=a.data.Data||[];case 4:case"end":return r.stop()}},s)}));return function(){return n.apply(this,arguments)}}(),P=function(){var n=_()(t()().mark(function s(){var a;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.x1.mall.shoppingCartCount();case 2:a=r.sent,l.shoppingCartCount=a.data.Data||0;case 4:case"end":return r.stop()}},s)}));return function(){return n.apply(this,arguments)}}(),o=function(){var n=_()(t()().mark(function s(){var a;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.x1.mall.storeGetCurrentStore();case 2:a=r.sent,l.currentStore=a.data.Data||{};case 4:case"end":return r.stop()}},s)}));return function(){return n.apply(this,arguments)}}(),R=function(){var n=_()(t()().mark(function s(){var a;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.x1.mall.storeMostNearbyStore();case 2:a=r.sent,l.mostNearbyStore=a.data.Data||{};case 4:case"end":return r.stop()}},s)}));return function(){return n.apply(this,arguments)}}(),C=function(){var n=_()(t()().mark(function s(){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.x1.platform.userAuth().then(function(r){l.userAuthResult=r.data||{}});case 2:case"end":return e.stop()}},s)}));return function(){return n.apply(this,arguments)}}(),O=function(){var n=_()(t()().mark(function s(){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.x1.sys.adminAuth().then(function(r){l.adminAuthResult=r.data||{}});case 2:case"end":return e.stop()}},s)}));return function(){return n.apply(this,arguments)}}(),U=function(){var n=_()(t()().mark(function s(){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.x1.sys.manageAdminQueryAdminPermissions().then(function(r){l.adminPermissions=r.data||{}});case 2:case"end":return e.stop()}},s)}));return function(){return n.apply(this,arguments)}}(),S=function(){var n=_()(t()().mark(function s(){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.x1.mallManager.storeManagerPermissionGetMyPermission().then(function(r){l.managerPermissions=r.data||{}});case 2:case"end":return e.stop()}},s)}));return function(){return n.apply(this,arguments)}}(),b=function(){var n=_()(t()().mark(function s(){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.x1.mallManager.storeManagerAuth().then(function(r){l.storeManagerAuthResult=r.data||{}});case 2:case"end":return e.stop()}},s)}));return function(){return n.apply(this,arguments)}}(),j=function(){var n=_()(t()().mark(function s(){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.x1.mall.userStoreUserAuth().then(function(r){l.storeUserAuthResult=r.data||{}});case 2:case"end":return e.stop()}},s)}));return function(){return n.apply(this,arguments)}}(),l=(0,f.sj)({queryUserAuthResult:C,getAppName:D,queryAdminAuthResult:O,queryStoreManagerAuthResult:b,queryStoreUserAuthResult:j,queryAdminPermission:U,queryStoreManagerPermission:S,queryGrades:A,queryStores:E,queryNotificationCount:m,queryShoppingCartCount:P,queryCurrentStore:o,queryMostNearbyStore:R,messageHistory:[],grades:[],stores:[],notificationCount:0,headerHeight:0,bottomHeight:0,mallSettings:{},shoppingCartCount:0,currentStore:void 0,mostNearbyStore:void 0,userAuthResult:void 0,adminAuthResult:void 0,adminPermissions:void 0,storeUserAuthResult:void 0,storeManagerAuthResult:void 0,managerPermissions:void 0,get user(){var n;return(n=this.userAuthResult)===null||n===void 0?void 0:n.User},get admin(){var n;return(n=this.adminAuthResult)===null||n===void 0?void 0:n.Admin},get storeUser(){var n;return(n=this.storeUserAuthResult)===null||n===void 0?void 0:n.StoreUser},get storeManager(){var n;return(n=this.storeManagerAuthResult)===null||n===void 0?void 0:n.StoreManager}}),w=function(){return(0,f.ey)(l)}},30967:function(y,d,u){u.d(d,{HK:function(){return D},c2:function(){return M},x1:function(){return g}});var h=u(15009),t=u.n(h),c=u(97857),_=u.n(c),p=u(99289),v=u.n(p),f=u(76857),i=u(60379),g=function(){var m=new i.V0;return m.instance=f.M,m}(),M=function(){var m=new i.V0;return m.instance=f.M,m}(),D=function(){var m=v()(t()().mark(function A(E){return t()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(E){o.next=2;break}return o.abrupt("return");case 2:return o.next=4,g.mall.commonSaveActivityLog(_()(_()({},E),{},{Id:void 0}));case 4:return o.abrupt("return",o.sent);case 5:case"end":return o.stop()}},A)}));return function(E){return m.apply(this,arguments)}}()}}]);
