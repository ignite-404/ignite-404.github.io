"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3292],{55600:function(y,d,s){var h=s(38295),t=s(35291),c=s(85893);d.Z=function(_){var p=_.children,v=_.permissionKey,f=(0,h.o)();return f.managerPermissions==null?(0,c.jsx)("h1",{children:"\u6743\u9650\u672A\u52A0\u8F7D"}):(0,t.as)(f.managerPermissions,v)?p:(0,c.jsx)("h1",{children:"\u65E0\u6743\u8BBF\u95EE"})}},58824:function(y,d,s){s.r(d);var h=s(55600),t=s(35291),c=s(47650),_=s(85893);d.default=function(){var p=(0,c.pC)();return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(h.Z,{permissionKey:t.Cx.Sku,children:p})})}},38295:function(y,d,s){s.d(d,{o:function(){return w}});var h=s(15009),t=s.n(h),c=s(99289),_=s.n(c),p=s(19632),v=s.n(p),f=s(47650),i=s(30967),g=s(85134),M=s(42838),D=function(u){var a=l.mallSettings||{},e=[a.StoreNickName,a.StoreEnglishName];u?e=[a.StoreOfficialName,a.StoreOfficialEnglishName].concat(v()(e)):e=[].concat(v()(e),[a.StoreOfficialName,a.StoreOfficialEnglishName]);var r=e.filter(function(K){return!(0,M.Wq)(K)}).at(0);return r||g.v.app.name||g.v.app.englishName},m=function(){var n=_()(t()().mark(function u(){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.x1.mall.notificationUnReadCount().then(function(r){l.notificationCount=r.data.Data||0});case 2:case"end":return e.stop()}},u)}));return function(){return n.apply(this,arguments)}}(),A=function(){var n=_()(t()().mark(function u(){var a;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.x1.mallAdmin.gradeListGrades();case 2:a=r.sent,l.grades=a.data.Data||[];case 4:case"end":return r.stop()}},u)}));return function(){return n.apply(this,arguments)}}(),E=function(){var n=_()(t()().mark(function u(){var a;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.x1.mallAdmin.storeQueryStores();case 2:a=r.sent,l.stores=a.data.Data||[];case 4:case"end":return r.stop()}},u)}));return function(){return n.apply(this,arguments)}}(),P=function(){var n=_()(t()().mark(function u(){var a;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.x1.mall.shoppingCartCount();case 2:a=r.sent,l.shoppingCartCount=a.data.Data||0;case 4:case"end":return r.stop()}},u)}));return function(){return n.apply(this,arguments)}}(),o=function(){var n=_()(t()().mark(function u(){var a;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.x1.mall.storeGetCurrentStore();case 2:a=r.sent,l.currentStore=a.data.Data||{};case 4:case"end":return r.stop()}},u)}));return function(){return n.apply(this,arguments)}}(),R=function(){var n=_()(t()().mark(function u(){var a;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.x1.mall.storeMostNearbyStore();case 2:a=r.sent,l.mostNearbyStore=a.data.Data||{};case 4:case"end":return r.stop()}},u)}));return function(){return n.apply(this,arguments)}}(),C=function(){var n=_()(t()().mark(function u(){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.x1.platform.userAuth().then(function(r){l.userAuthResult=r.data||{}});case 2:case"end":return e.stop()}},u)}));return function(){return n.apply(this,arguments)}}(),O=function(){var n=_()(t()().mark(function u(){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.x1.sys.adminAuth().then(function(r){l.adminAuthResult=r.data||{}});case 2:case"end":return e.stop()}},u)}));return function(){return n.apply(this,arguments)}}(),U=function(){var n=_()(t()().mark(function u(){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.x1.sys.manageAdminQueryAdminPermissions().then(function(r){l.adminPermissions=r.data||{}});case 2:case"end":return e.stop()}},u)}));return function(){return n.apply(this,arguments)}}(),S=function(){var n=_()(t()().mark(function u(){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.x1.mallManager.storeManagerPermissionGetMyPermission().then(function(r){l.managerPermissions=r.data||{}});case 2:case"end":return e.stop()}},u)}));return function(){return n.apply(this,arguments)}}(),b=function(){var n=_()(t()().mark(function u(){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.x1.mallManager.storeManagerAuth().then(function(r){l.storeManagerAuthResult=r.data||{}});case 2:case"end":return e.stop()}},u)}));return function(){return n.apply(this,arguments)}}(),j=function(){var n=_()(t()().mark(function u(){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.x1.mall.userStoreUserAuth().then(function(r){l.storeUserAuthResult=r.data||{}});case 2:case"end":return e.stop()}},u)}));return function(){return n.apply(this,arguments)}}(),l=(0,f.sj)({queryUserAuthResult:C,getAppName:D,queryAdminAuthResult:O,queryStoreManagerAuthResult:b,queryStoreUserAuthResult:j,queryAdminPermission:U,queryStoreManagerPermission:S,queryGrades:A,queryStores:E,queryNotificationCount:m,queryShoppingCartCount:P,queryCurrentStore:o,queryMostNearbyStore:R,messageHistory:[],grades:[],stores:[],notificationCount:0,headerHeight:0,bottomHeight:0,mallSettings:{},shoppingCartCount:0,currentStore:void 0,mostNearbyStore:void 0,userAuthResult:void 0,adminAuthResult:void 0,adminPermissions:void 0,storeUserAuthResult:void 0,storeManagerAuthResult:void 0,managerPermissions:void 0,get user(){var n;return(n=this.userAuthResult)===null||n===void 0?void 0:n.User},get admin(){var n;return(n=this.adminAuthResult)===null||n===void 0?void 0:n.Admin},get storeUser(){var n;return(n=this.storeUserAuthResult)===null||n===void 0?void 0:n.StoreUser},get storeManager(){var n;return(n=this.storeManagerAuthResult)===null||n===void 0?void 0:n.StoreManager}}),w=function(){return(0,f.ey)(l)}},30967:function(y,d,s){s.d(d,{HK:function(){return D},c2:function(){return M},x1:function(){return g}});var h=s(15009),t=s.n(h),c=s(97857),_=s.n(c),p=s(99289),v=s.n(p),f=s(76857),i=s(60379),g=function(){var m=new i.V0;return m.instance=f.M,m}(),M=function(){var m=new i.V0;return m.instance=f.M,m}(),D=function(){var m=v()(t()().mark(function A(E){return t()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(E){o.next=2;break}return o.abrupt("return");case 2:return o.next=4,g.mall.commonSaveActivityLog(_()(_()({},E),{},{Id:void 0}));case 4:return o.abrupt("return",o.sent);case 5:case"end":return o.stop()}},A)}));return function(E){return m.apply(this,arguments)}}()}}]);
