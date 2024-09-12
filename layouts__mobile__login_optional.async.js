"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1408],{84621:function(M,h,n){n.d(h,{Z:function(){return y}});var v=n(68421),s=n(67294),c=n(47650),l=n(21274),j=n(38295),p=n(35291),g=n(30967),o=n(42838),A=n(52900),E=n(38787),a=n(85893),d=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"container max-w-lg",children:(0,a.jsx)("div",{className:"m-2",children:(0,a.jsxs)("div",{className:"flex flex-col gap-2",style:{width:"100%"},children:[(0,a.jsx)("div",{className:"mb-2 flex flex-row items-center justify-center",children:(0,a.jsx)("img",{src:A,height:200,alt:""})}),(0,a.jsxs)("div",{className:"p-3",children:[(0,a.jsxs)("div",{className:"my-3",children:[(0,a.jsx)("div",{className:"text-title",children:"\u767B\u5F55\u53EF\u4EE5\u5F00\u542F\u5B8C\u6574\u529F\u80FD\uFF01"}),(0,a.jsx)("p",{className:"text-caption",children:"\u5546\u54C1\u660E\u7EC6\u3001\u8D2D\u7269\u8F66\u3001\u8BA2\u5355\u3001\u4E2A\u4EBA\u4E2D\u5FC3\u7B49"})]}),(0,a.jsx)("div",{className:"py-2",children:(0,a.jsx)(E.A,{fullWidth:!0,variant:"flat",color:"primary",onClick:function(){(0,p.rf)()},children:"\u7ACB\u9A6C\u767B\u5F55"})}),(0,a.jsx)("div",{className:"py-1",children:(0,a.jsx)(E.A,{fullWidth:!0,size:"sm",variant:"light",onClick:function(){c.m8.push({pathname:"/"})},children:"\u8FD4\u56DE\u9996\u9875"})})]})]})})})})};function y(f){var D,m=f.children,U=f.optional,C=(0,j.o)(),S=(0,c.TH)(),R=((D=C.storeUserAuthResult)===null||D===void 0?void 0:D.StoreUser)||{},P=(0,v.Z)(g.x1.mall.userStoreUserAuth,{manual:!0,onSuccess:function(O,_){C.storeUserAuthResult=O.data||{}}});if((0,s.useEffect)(function(){(0,o.lk)()?P.run():C.storeUserAuthResult=void 0},[S.pathname]),P.loading)return(0,a.jsx)(l.Z,{});if(!U){if(!(0,p.lE)(R))return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(d,{})});if(!R.IsActive)return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("h1",{children:"\u5546\u57CE\u8D26\u53F7\u5DF2\u7ECF\u88AB\u7981\u7528"})})}return(0,a.jsx)(a.Fragment,{children:m})}},74585:function(M,h,n){n.r(h);var v=n(84621),s=n(47650),c=n(85893);h.default=function(){var l=(0,s.pC)();return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(v.Z,{optional:!0,children:l})})}},38295:function(M,h,n){n.d(h,{o:function(){return x}});var v=n(15009),s=n.n(v),c=n(99289),l=n.n(c),j=n(19632),p=n.n(j),g=n(47650),o=n(30967),A=n(85134),E=n(42838),a=function(u){var i=_.mallSettings||{},e=[i.StoreNickName,i.StoreEnglishName];u?e=[i.StoreOfficialName,i.StoreOfficialEnglishName].concat(p()(e)):e=[].concat(p()(e),[i.StoreOfficialName,i.StoreOfficialEnglishName]);var r=e.filter(function(w){return!(0,E.Wq)(w)}).at(0);return r||A.v.app.name||A.v.app.englishName},d=function(){var t=l()(s()().mark(function u(){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.x1.mall.notificationUnReadCount().then(function(r){_.notificationCount=r.data.Data||0});case 2:case"end":return e.stop()}},u)}));return function(){return t.apply(this,arguments)}}(),y=function(){var t=l()(s()().mark(function u(){var i;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.x1.mallAdmin.gradeListGrades();case 2:i=r.sent,_.grades=i.data.Data||[];case 4:case"end":return r.stop()}},u)}));return function(){return t.apply(this,arguments)}}(),f=function(){var t=l()(s()().mark(function u(){var i;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.x1.mallAdmin.storeQueryStores();case 2:i=r.sent,_.stores=i.data.Data||[];case 4:case"end":return r.stop()}},u)}));return function(){return t.apply(this,arguments)}}(),D=function(){var t=l()(s()().mark(function u(){var i;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.x1.mall.shoppingCartCount();case 2:i=r.sent,_.shoppingCartCount=i.data.Data||0;case 4:case"end":return r.stop()}},u)}));return function(){return t.apply(this,arguments)}}(),m=function(){var t=l()(s()().mark(function u(){var i;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.x1.mall.storeGetCurrentStore();case 2:i=r.sent,_.currentStore=i.data.Data||{};case 4:case"end":return r.stop()}},u)}));return function(){return t.apply(this,arguments)}}(),U=function(){var t=l()(s()().mark(function u(){var i;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.x1.mall.storeMostNearbyStore();case 2:i=r.sent,_.mostNearbyStore=i.data.Data||{};case 4:case"end":return r.stop()}},u)}));return function(){return t.apply(this,arguments)}}(),C=function(){var t=l()(s()().mark(function u(){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.x1.platform.userAuth().then(function(r){_.userAuthResult=r.data||{}});case 2:case"end":return e.stop()}},u)}));return function(){return t.apply(this,arguments)}}(),S=function(){var t=l()(s()().mark(function u(){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.x1.sys.adminAuth().then(function(r){_.adminAuthResult=r.data||{}});case 2:case"end":return e.stop()}},u)}));return function(){return t.apply(this,arguments)}}(),R=function(){var t=l()(s()().mark(function u(){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.x1.sys.manageAdminQueryAdminPermissions().then(function(r){_.adminPermissions=r.data||{}});case 2:case"end":return e.stop()}},u)}));return function(){return t.apply(this,arguments)}}(),P=function(){var t=l()(s()().mark(function u(){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.x1.mallManager.storeManagerPermissionGetMyPermission().then(function(r){_.managerPermissions=r.data||{}});case 2:case"end":return e.stop()}},u)}));return function(){return t.apply(this,arguments)}}(),b=function(){var t=l()(s()().mark(function u(){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.x1.mallManager.storeManagerAuth().then(function(r){_.storeManagerAuthResult=r.data||{}});case 2:case"end":return e.stop()}},u)}));return function(){return t.apply(this,arguments)}}(),O=function(){var t=l()(s()().mark(function u(){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.x1.mall.userStoreUserAuth().then(function(r){_.storeUserAuthResult=r.data||{}});case 2:case"end":return e.stop()}},u)}));return function(){return t.apply(this,arguments)}}(),_=(0,g.sj)({queryUserAuthResult:C,getAppName:a,queryAdminAuthResult:S,queryStoreManagerAuthResult:b,queryStoreUserAuthResult:O,queryAdminPermission:R,queryStoreManagerPermission:P,queryGrades:y,queryStores:f,queryNotificationCount:d,queryShoppingCartCount:D,queryCurrentStore:m,queryMostNearbyStore:U,messageHistory:[],grades:[],stores:[],notificationCount:0,headerHeight:0,bottomHeight:0,mallSettings:{},shoppingCartCount:0,currentStore:void 0,mostNearbyStore:void 0,userAuthResult:void 0,adminAuthResult:void 0,adminPermissions:void 0,storeUserAuthResult:void 0,storeManagerAuthResult:void 0,managerPermissions:void 0,get user(){var t;return(t=this.userAuthResult)===null||t===void 0?void 0:t.User},get admin(){var t;return(t=this.adminAuthResult)===null||t===void 0?void 0:t.Admin},get storeUser(){var t;return(t=this.storeUserAuthResult)===null||t===void 0?void 0:t.StoreUser},get storeManager(){var t;return(t=this.storeManagerAuthResult)===null||t===void 0?void 0:t.StoreManager}}),x=function(){return(0,g.ey)(_)}},30967:function(M,h,n){n.d(h,{HK:function(){return a},c2:function(){return E},x1:function(){return A}});var v=n(15009),s=n.n(v),c=n(97857),l=n.n(c),j=n(99289),p=n.n(j),g=n(76857),o=n(60379),A=function(){var d=new o.V0;return d.instance=g.M,d}(),E=function(){var d=new o.V0;return d.instance=g.M,d}(),a=function(){var d=p()(s()().mark(function y(f){return s()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:if(f){m.next=2;break}return m.abrupt("return");case 2:return m.next=4,A.mall.commonSaveActivityLog(l()(l()({},f),{},{Id:void 0}));case 4:return m.abrupt("return",m.sent);case 5:case"end":return m.stop()}},y)}));return function(f){return d.apply(this,arguments)}}()},52900:function(M,h,n){M.exports=n.p+"static/illustration_register.94d8a10e.png"}}]);
