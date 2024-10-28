"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3131],{11518:function(j,D,e){var M=e(55241),s=e(78957),A=e(7134),_=e(55932),o=e(66419),d=e(8885),c=e(85893);D.Z=function(u){var h=u.model;if(!h)return null;var f=(0,_.SZ)(h.Avatar,{width:100,height:100}),v=(0,o.zO)([h.NickName,h.IdentityName,h.Id].filter(function(E){return E&&E.length>0}).at(0)||"--",10);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(M.Z,{content:(0,c.jsx)(d.Z,{model:h}),children:(0,c.jsxs)(s.Z,{direction:"horizontal",children:[(0,c.jsx)(A.C,{size:"small",shape:"square",src:f,children:v}),(0,c.jsx)("span",{children:(0,c.jsx)("a",{children:v})})]})})})}},8885:function(j,D,e){var M=e(78957),s=e(7134),A=e(55932),_=e(66419),o=e(85893);D.Z=function(d){var c,u=d.model;if(!u)return null;var h=(0,A.SZ)(u.Avatar,{width:100,height:100}),f=(0,_.zO)([u.NickName,u.IdentityName,u.Id].filter(function(v){return v&&v.length>0}).at(0)||"--",10);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(M.Z,{direction:"horizontal",children:[(0,o.jsx)("div",{children:(0,o.jsx)(s.C,{src:h,size:100})}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("p",{children:["\u6635\u79F0\uFF1A",f]}),(0,o.jsxs)("p",{children:["\u7528\u6237\u540D\uFF1A",(u==null?void 0:u.IdentityName)||"--"]}),(0,o.jsxs)("p",{children:["\u624B\u673A\u53F7\uFF1A",(u==null||(c=u.UserMobile)===null||c===void 0?void 0:c.MobilePhone)||"--"]})]})]})})}},85685:function(j,D,e){e.d(D,{Z:function(){return c}});var M=e(38295),s=e(47650),A=e(66419),_=e(38787),o=e(48135),d=e(85893);function c(u){var h=u.children,f=u.rightButtons,v=u.leftButtons,E=(0,M.o)(),O=function(){window.history.length>1?s.m8.back():s.m8.push({pathname:"/"})},g=function(){return(0,d.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[(0,A.G5)(v)&&(0,d.jsxs)("div",{className:"flex-row-center cursor-pointer gap-1",onClick:function(P){P.preventDefault(),P.stopPropagation(),O()},children:[(0,d.jsx)(_.A,{size:"lg",color:"default",radius:"full",variant:"light",isIconOnly:!0,onClick:function(P){P.preventDefault(),P.stopPropagation(),O()},children:(0,d.jsx)(o.Z,{stroke:1})}),(0,d.jsx)("h1",{className:"text-title m-0 p-0",children:window.document.title||E.getAppName()})]}),v==null?void 0:v.map(function(p){return p})]})};return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"container max-w-lg",children:[(0,d.jsxs)("div",{className:"flex-row-between py-1",children:[g(),(0,d.jsx)("div",{className:"flex-row-center gap-2",children:f==null?void 0:f.map(function(C){return C})})]}),(0,d.jsx)("div",{children:h})]})})}},27477:function(j,D,e){e.r(D),e.d(D,{default:function(){return m}});var M=e(5574),s=e.n(M),A=e(84179),_=e(78957),o=e(67294),d=e(21274),c=e(11518),u=e(85685),h=e(38295),f=e(35291),v=e(30699),E=e(46629),O=e(47650),g=e(66419),C=e(38787),p=e(45837),P=e(24862),S=e(19314),K=e(84367),B=e(75968),N=e(22845),F=e(39658),l=e(85893);function m(){var x,t;(0,A.Z)("\u5151\u6362\u5145\u503C\u5361");var a=(0,h.o)(),i=(0,o.useState)(!1),r=s()(i,2),n=r[0],I=r[1],H=o.useState(!1),$=s()(H,2),Q=$[0],b=$[1],X=o.useState({}),w=s()(X,2),y=w[0],J=w[1],Z=!(y.Expired||y.Used),V=(0,O.TH)(),Y=(0,f.dD)(V.search)||{},q=(0,O.UO)(),T=Y.id||q.id||"",G=function(R){(0,g.Wq)(R)||(I(!0),v.x1.mall.giftCardQueryById({Id:R}).then(function(U){(0,g._y)(U,function(){J(U.data.Data||{})})}).finally(function(){I(!1)}))},k=function(){(0,g.Wq)(T)||(b(!0),v.x1.mall.giftCardUseCard({CardId:T}).then(function(R){(0,g._y)(R,function(){var U;(U=g.iI.message)===null||U===void 0||U.success("\u5145\u503C\u6210\u529F"),G(T)})}).finally(function(){b(!1)}))};(0,o.useEffect)(function(){G(T)},[]);var W=(x=(0,E.mg)(y.EndTime))===null||x===void 0?void 0:x.add(E.Mg,"hour"),ee=W?W.format(E.dq):"\u6C38\u4E45\u6709\u6548",re=W&&W.utc().isBefore((0,E.ND)().utc()),z=!y.Used&&!y.IsActive,ne=function(){return z?null:(0,l.jsx)(C.A,{disabled:!Z,variant:"bordered",color:"danger",isLoading:Q,fullWidth:!0,onClick:function(){confirm("\u786E\u5B9A\u4F7F\u7528\u6B64\u5361\uFF1F")&&k()},children:Z?"\u4F7F\u7528\u6B64\u5361\u5145\u503C":"\u6B64\u5361\u5DF2\u7ECF\u5931\u6548\uFF0C\u6216\u5DF2\u88AB\u4F7F\u7528"})},te=function(){return z?(0,l.jsx)("div",{className:"mb-1 text-red-500",children:"\u5361\u7247\u88AB\u51BB\u7ED3\uFF0C\u65E0\u6CD5\u5151\u6362\u3002\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\uFF01"}):null};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(u.Z,{children:(0,l.jsxs)("div",{className:"container max-w-lg",children:[n&&(0,l.jsx)(d.Z,{}),(0,l.jsxs)(p.w,{className:"m-1",style:{minWidth:275},children:[(0,l.jsxs)(P.u,{className:"flex gap-3",children:[(0,l.jsx)(F.Z,{stroke:1}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("p",{className:"text-lg",children:"\u9884\u5145\u503C\u5361"}),(0,l.jsx)("p",{className:"text-caption",children:"\u6B64\u5361\u662F\u975E\u8BB0\u540D\u5145\u503C\u5361\uFF0C\u8BF7\u52FF\u6CC4\u9732\u7ED9\u5176\u4ED6\u4EBA\uFF01\u5426\u5219\u5C06\u9020\u6210\u60A8\u7684\u8D22\u4EA7\u635F\u5931\u3002"})]})]}),(0,l.jsx)(S.G,{children:(0,l.jsxs)(_.Z,{direction:"vertical",style:{width:"100%",marginTop:8,marginBottom:8},split:(0,l.jsx)(K.j,{orientation:"horizontal"}),children:[(0,l.jsxs)("div",{className:"text-body mb-1",children:["\u5361\u9762\u91D1\u989D\uFF1A",(0,l.jsx)(B.z,{variant:"solid",color:"warning",size:"sm",children:(0,g.lb)(y.Amount||0)})]}),(0,l.jsxs)("div",{className:"text-body mb-1",children:[(0,l.jsx)("span",{children:"\u8FC7\u671F\u65F6\u95F4\uFF1A".concat(ee)}),re&&(0,l.jsx)(B.z,{variant:"solid",color:"danger",size:"sm",className:"ml-1",children:"\u5DF2\u8FC7\u671F"})]}),(0,l.jsxs)("div",{className:"text-body mb-1",children:[(0,l.jsx)("span",{children:"\u5145\u503C\u8D26\u6237\uFF1A"}),(0,l.jsx)(c.Z,{model:(t=a.storeUser)===null||t===void 0?void 0:t.User})]})]})}),(0,l.jsx)(N.i,{children:(0,l.jsxs)(_.Z,{direction:"vertical",style:{width:"100%"},children:[ne(),te(),(0,l.jsx)(C.A,{size:"sm",fullWidth:!0,onClick:function(){O.m8.push({pathname:"/"})},children:"\u8FD4\u56DE\u9996\u9875"})]})})]})]})})})}},38295:function(j,D,e){e.d(D,{o:function(){return x}});var M=e(15009),s=e.n(M),A=e(99289),_=e.n(A),o=e(19632),d=e.n(o),c=e(47650),u=e(30699),h=e(85134),f=e(66419),v=function(a){var i=m.mallSettings||{},r=[i.StoreNickName,i.StoreEnglishName];a?r=[i.StoreOfficialName,i.StoreOfficialEnglishName].concat(d()(r)):r=[].concat(d()(r),[i.StoreOfficialName,i.StoreOfficialEnglishName]);var n=r.filter(function(I){return!(0,f.Wq)(I)}).at(0);return n||h.v.app.name||h.v.app.english_name},E=function(){var t=_()(s()().mark(function a(){return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.x1.mall.notificationUnReadCount().then(function(n){m.notificationCount=n.data.Data||0});case 2:case"end":return r.stop()}},a)}));return function(){return t.apply(this,arguments)}}(),O=function(){var t=_()(s()().mark(function a(){var i;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.x1.mallAdmin.gradeListGrades();case 2:i=n.sent,m.grades=i.data.Data||[];case 4:case"end":return n.stop()}},a)}));return function(){return t.apply(this,arguments)}}(),g=function(){var t=_()(s()().mark(function a(){var i;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.x1.mallAdmin.storeQueryStores();case 2:i=n.sent,m.stores=i.data.Data||[];case 4:case"end":return n.stop()}},a)}));return function(){return t.apply(this,arguments)}}(),C=function(){var t=_()(s()().mark(function a(){var i;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.x1.mall.shoppingCartCount();case 2:i=n.sent,m.shoppingCartCount=i.data.Data||0;case 4:case"end":return n.stop()}},a)}));return function(){return t.apply(this,arguments)}}(),p=function(){var t=_()(s()().mark(function a(){var i;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.x1.mall.storeGetCurrentStore();case 2:i=n.sent,m.currentStore=i.data.Data||{};case 4:case"end":return n.stop()}},a)}));return function(){return t.apply(this,arguments)}}(),P=function(){var t=_()(s()().mark(function a(){var i;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.x1.mall.storeMostNearbyStore();case 2:i=n.sent,m.mostNearbyStore=i.data.Data||{};case 4:case"end":return n.stop()}},a)}));return function(){return t.apply(this,arguments)}}(),S=function(){var t=_()(s()().mark(function a(){return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.x1.platform.userAuth().then(function(n){m.userAuthResult=n.data||{}});case 2:case"end":return r.stop()}},a)}));return function(){return t.apply(this,arguments)}}(),K=function(){var t=_()(s()().mark(function a(){return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.x1.sys.adminAuth().then(function(n){m.adminAuthResult=n.data||{}});case 2:case"end":return r.stop()}},a)}));return function(){return t.apply(this,arguments)}}(),B=function(){var t=_()(s()().mark(function a(){return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.x1.sys.manageAdminQueryAdminPermissions().then(function(n){m.adminPermissions=n.data||{}});case 2:case"end":return r.stop()}},a)}));return function(){return t.apply(this,arguments)}}(),N=function(){var t=_()(s()().mark(function a(){return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.x1.mallManager.storeManagerPermissionGetMyPermission().then(function(n){m.managerPermissions=n.data||{}});case 2:case"end":return r.stop()}},a)}));return function(){return t.apply(this,arguments)}}(),F=function(){var t=_()(s()().mark(function a(){return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.x1.mallManager.storeManagerAuth().then(function(n){m.storeManagerAuthResult=n.data||{}});case 2:case"end":return r.stop()}},a)}));return function(){return t.apply(this,arguments)}}(),l=function(){var t=_()(s()().mark(function a(){return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.x1.mall.userStoreUserAuth().then(function(n){m.storeUserAuthResult=n.data||{}});case 2:case"end":return r.stop()}},a)}));return function(){return t.apply(this,arguments)}}(),m=(0,c.sj)({queryUserAuthResult:S,getAppName:v,queryAdminAuthResult:K,queryStoreManagerAuthResult:F,queryStoreUserAuthResult:l,queryAdminPermission:B,queryStoreManagerPermission:N,queryGrades:O,queryStores:g,queryNotificationCount:E,queryShoppingCartCount:C,queryCurrentStore:p,queryMostNearbyStore:P,messageHistory:[],grades:[],stores:[],notificationCount:0,headerHeight:0,bottomHeight:0,mallSettings:{},shoppingCartCount:0,currentStore:void 0,mostNearbyStore:void 0,userAuthResult:void 0,adminAuthResult:void 0,adminPermissions:void 0,storeUserAuthResult:void 0,storeManagerAuthResult:void 0,managerPermissions:void 0,get user(){var t;return(t=this.userAuthResult)===null||t===void 0?void 0:t.User},get admin(){var t;return(t=this.adminAuthResult)===null||t===void 0?void 0:t.Admin},get storeUser(){var t;return(t=this.storeUserAuthResult)===null||t===void 0?void 0:t.StoreUser},get storeManager(){var t;return(t=this.storeManagerAuthResult)===null||t===void 0?void 0:t.StoreManager}}),x=function(){return(0,c.ey)(m)}}}]);
