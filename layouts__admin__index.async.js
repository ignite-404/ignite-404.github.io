"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[812],{42288:function(g,r,e){e.d(r,{Z:function(){return B}});var t=e(5574),o=e.n(t),x=e(67294),O=e(46629),M=e(22638),Z=e(92770),a=function(p,d,R){R===void 0&&(R={});var F=(0,M.Z)(p),C=(0,x.useRef)(null),X=(0,x.useCallback)(function(){C.current&&clearInterval(C.current)},[]);return(0,x.useEffect)(function(){if(!(!(0,Z.hj)(d)||d<0))return R.immediate&&F(),C.current=setInterval(F,d),X},[d,R.immediate]),X},l=a,i=e(85893);function B(p){var d=p.className,R=(0,x.useState)(""),F=o()(R,2),C=F[0],X=F[1];return l(function(){X(O.ND.utc().add(O.Mg,"hour").format("MM/DD HH:mm:ss"))},1e3,{immediate:!0}),(0,i.jsx)("div",{className:d||"text-overline text-tiny font-thin uppercase",children:C})}},29249:function(g,r,e){e.r(r),e.d(r,{default:function(){return Qe}});var t=e(15009),o=e.n(t),x=e(99289),O=e.n(x),M=e(47650),Z=e(83062),a=e(14726),l=e(7134),i=e(67294),B=e(97857),p=e.n(B),d=e(5574),R=e.n(d),F=e(30967),C=e(42838),X=e(50472),re=e(45360),te=e(85576),P=e(40056),G=e(11346),u=e(84567),n=e(85893),L=function(){var U=(0,i.useState)(!1),b=R()(U,2),Q=b[0],V=b[1],oe=(0,i.useState)(void 0),se=R()(oe,2),T=se[0],ae=se[1],ve=T||{},be=T!=null,Pe=function(D){ae(D?{Home:!0,RootCategory:!0,Dashboard:!0,Search:!0}:void 0)},w=function(D){V(!0),F.x1.mallAdmin.settingRefreshViewCache(p()({},D)).then(function(Me){(0,C._y)(Me,function(){re.ZP.success("\u7F13\u5B58\u5237\u65B0\u6210\u529F\uFF01"),Pe(!1)})}).finally(function(){V(!1)})};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(te.Z,{open:be,title:"\u5237\u65B0\u7F13\u5B58",confirmLoading:Q,okText:"\u5237\u65B0\u7F13\u5B58",onOk:function(){w(ve)},onCancel:function(){Pe(!1)},children:[(0,n.jsx)(P.Z,{style:{marginBottom:10},message:"\u521A\u66F4\u65B0\u4E86\u6570\u636E\uFF0C\u4F46\u662F\u7528\u6237\u7AEF\u5374\u6CA1\u6709\u663E\u793A\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u5237\u65B0\u7F13\u5B58",type:"warning"}),(0,n.jsxs)(G.Z,{children:[(0,n.jsx)(G.Z.Item,{label:"\u9996\u9875",children:(0,n.jsx)(u.Z,{checked:ve.Home,onChange:function(D){ae(p()(p()({},T),{},{Home:D.target.checked}))},children:"\u9996\u9875"})}),(0,n.jsx)(G.Z.Item,{label:"\u5206\u7C7B",children:(0,n.jsx)(u.Z,{checked:ve.RootCategory,onChange:function(D){ae(p()(p()({},T),{},{RootCategory:D.target.checked}))},children:"\u5206\u7C7B"})}),(0,n.jsx)(G.Z.Item,{label:"\u62A5\u8868\u7EDF\u8BA1",children:(0,n.jsx)(u.Z,{checked:ve.Dashboard,onChange:function(D){ae(p()(p()({},T),{},{Dashboard:D.target.checked}))},children:"\u62A5\u8868\u7EDF\u8BA1"})}),(0,n.jsx)(G.Z.Item,{label:"\u641C\u7D22",children:(0,n.jsx)(u.Z,{checked:ve.Search,onChange:function(D){ae(p()(p()({},T),{},{Search:D.target.checked}))},children:"\u641C\u7D22\u9875\u9762"})})]})]}),(0,n.jsx)(Z.Z,{title:"\u5237\u65B0\u7F13\u5B58",children:(0,n.jsx)(a.ZP,{size:"small",icon:(0,n.jsx)(X.Z,{stroke:1}),type:"dashed",onClick:function(){Pe(!0)}})})]})},I=e(16308),s=e(33733);var k=(0,s.Z)("outline","dashboard","IconDashboard",[["path",{d:"M12 13m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-0"}],["path",{d:"M13.45 11.55l2.05 -2.05",key:"svg-1"}],["path",{d:"M6.4 20a9 9 0 1 1 11.2 0z",key:"svg-2"}]]);var y=(0,s.Z)("outline","chart-area-line","IconChartAreaLine",[["path",{d:"M4 19l4 -6l4 2l4 -5l4 4l0 5l-16 0",key:"svg-0"}],["path",{d:"M4 12l3 -4l4 2l5 -6l4 4",key:"svg-1"}]]),c=e(13129),m=e(25619),_=e(63070),W=e(64491),H=e(33192);var S=(0,s.Z)("outline","flag","IconFlag",[["path",{d:"M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0v9a5 5 0 0 1 -7 0a5 5 0 0 0 -7 0v-9z",key:"svg-0"}],["path",{d:"M5 21v-7",key:"svg-1"}]]),K=e(46295);var E=(0,s.Z)("outline","tags","IconTags",[["path",{d:"M3 8v4.172a2 2 0 0 0 .586 1.414l5.71 5.71a2.41 2.41 0 0 0 3.408 0l3.592 -3.592a2.41 2.41 0 0 0 0 -3.408l-5.71 -5.71a2 2 0 0 0 -1.414 -.586h-4.172a2 2 0 0 0 -2 2z",key:"svg-0"}],["path",{d:"M18 19l1.592 -1.592a4.82 4.82 0 0 0 0 -6.816l-4.592 -4.592",key:"svg-1"}],["path",{d:"M7 10h-.01",key:"svg-2"}]]);var j=(0,s.Z)("outline","chart-pie","IconChartPie",[["path",{d:"M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-6.8a2 2 0 0 1 -2 -2v-7a.9 .9 0 0 0 -1 -.8",key:"svg-0"}],["path",{d:"M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a1 1 0 0 1 -1 -1v-4.5",key:"svg-1"}]]);var N=(0,s.Z)("outline","discount","IconDiscount",[["path",{d:"M9 15l6 -6",key:"svg-0"}],["circle",{cx:"9.5",cy:"9.5",r:".5",fill:"currentColor",key:"svg-1"}],["circle",{cx:"14.5",cy:"14.5",r:".5",fill:"currentColor",key:"svg-2"}],["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-3"}]]),f=e(39276);var q=(0,s.Z)("outline","gift-card","IconGiftCard",[["path",{d:"M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z",key:"svg-0"}],["path",{d:"M7 16l3 -3l3 3",key:"svg-1"}],["path",{d:"M8 13c-.789 0 -2 -.672 -2 -1.5s.711 -1.5 1.5 -1.5c1.128 -.02 2.077 1.17 2.5 3c.423 -1.83 1.372 -3.02 2.5 -3c.789 0 1.5 .672 1.5 1.5s-1.211 1.5 -2 1.5h-4z",key:"svg-2"}]]),pe=e(83121),Y=e(97975),v=e(77249),ye=e(55046),de=e(50286),le=e(15741),J=e(45991),A=e(17226),ie=e(39336),he=e(14738);var ue=(0,s.Z)("outline","logs","IconLogs",[["path",{d:"M4 12h.01",key:"svg-0"}],["path",{d:"M4 6h.01",key:"svg-1"}],["path",{d:"M4 18h.01",key:"svg-2"}],["path",{d:"M8 18h2",key:"svg-3"}],["path",{d:"M8 12h2",key:"svg-4"}],["path",{d:"M8 6h2",key:"svg-5"}],["path",{d:"M14 6h6",key:"svg-6"}],["path",{d:"M14 12h6",key:"svg-7"}],["path",{d:"M14 18h6",key:"svg-8"}]]);var Ce=(0,s.Z)("outline","robot","IconRobot",[["path",{d:"M6 4m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M12 2v2",key:"svg-1"}],["path",{d:"M9 12v9",key:"svg-2"}],["path",{d:"M15 12v9",key:"svg-3"}],["path",{d:"M5 16l4 -2",key:"svg-4"}],["path",{d:"M15 14l4 2",key:"svg-5"}],["path",{d:"M9 18h6",key:"svg-6"}],["path",{d:"M10 8v.01",key:"svg-7"}],["path",{d:"M14 8v.01",key:"svg-8"}]]),ee=e(31837);var me=(0,s.Z)("outline","library","IconLibrary",[["path",{d:"M7 3m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z",key:"svg-0"}],["path",{d:"M4.012 7.26a2.005 2.005 0 0 0 -1.012 1.737v10c0 1.1 .9 2 2 2h10c.75 0 1.158 -.385 1.5 -1",key:"svg-1"}],["path",{d:"M11 7h5",key:"svg-2"}],["path",{d:"M11 10h6",key:"svg-3"}],["path",{d:"M11 13h3",key:"svg-4"}]]),z=e(35291),fe=[{name:"\u7EDF\u8BA1",path:"/admin/dashboard/home",key:"dashboard",icon:(0,n.jsx)(I.Z,{stroke:1}),children:[{name:"\u7EDF\u8BA1\u62A5\u8868",path:"/admin/dashboard/home",icon:(0,n.jsx)(k,{stroke:1})},{name:"\u9500\u552E\u7EDF\u8BA1",path:"/admin/dashboard/sales",icon:(0,n.jsx)(y,{stroke:1})},{name:"\u5173\u952E\u8BCD",path:"/admin/dashboard/keywords",icon:(0,n.jsx)(c.Z,{stroke:1})},{name:"\u6D3B\u8DC3\u65F6\u95F4",path:"/admin/dashboard/activity",icon:(0,n.jsx)(m.Z,{stroke:1})},{name:"\u6D3B\u8DC3\u57CE\u5E02",path:"/admin/dashboard/activity-geo",icon:(0,n.jsx)(_.Z,{stroke:1})}]},{name:"\u5546\u54C1",path:"/admin/catalog/goods",key:"catalog",icon:(0,n.jsx)(W.Z,{stroke:1}),children:[{name:"\u5546\u54C1\u7BA1\u7406",path:"/admin/catalog/goods",icon:(0,n.jsx)(H.Z,{stroke:1})},{name:"\u54C1\u724C\u7BA1\u7406",path:"/admin/catalog/brand",icon:(0,n.jsx)(S,{stroke:1})},{name:"\u5206\u7C7B\u7BA1\u7406",path:"/admin/catalog/category",icon:(0,n.jsx)(K.Z,{stroke:1})},{name:"\u6807\u7B7E\u7BA1\u7406",path:"/admin/catalog/tag",icon:(0,n.jsx)(E,{stroke:1})}]},{name:"\u4FC3\u9500",path:"/admin/marketing/coupon",key:"marketing",icon:(0,n.jsx)(j,{stroke:1}),children:[{name:"\u6298\u6263",path:"/admin/marketing/discount",icon:(0,n.jsx)(N,{stroke:1})},{name:"\u4F18\u60E0\u5238",path:"/admin/marketing/coupon",icon:(0,n.jsx)(f.Z,{stroke:1})},{name:"\u9884\u552E\u5361",path:"/admin/marketing/gift-card",icon:(0,n.jsx)(q,{stroke:1})}]},{name:"\u5E93\u5B58",path:"/admin/wms/stock/list",key:"warehouse",icon:(0,n.jsx)(pe.Z,{stroke:1}),children:[{name:"\u91C7\u8D2D\u5355",path:"/admin/wms/stock/list",icon:(0,n.jsx)(Y.Z,{stroke:1})},{name:"\u5E93\u5B58\u67E5\u8BE2",path:"/admin/wms/stock/items",icon:(0,n.jsx)(v.Z,{stroke:1})},{name:"\u4ED3\u5E93\u7BA1\u7406",path:"/admin/wms/warehouse",icon:(0,n.jsx)(ye.Z,{stroke:1})},{name:"\u4F9B\u5E94\u5546\u7BA1\u7406",path:"/admin/wms/supplier",icon:(0,n.jsx)(de.Z,{stroke:1})}]},{name:"\u8BBE\u7F6E",path:"/admin/settings/store",key:"settings",icon:(0,n.jsx)(le.Z,{stroke:1}),children:[{name:"\u5546\u57CE\u7BA1\u7406",path:"/admin/settings/store",icon:(0,n.jsx)(J.Z,{stroke:1})},{name:"\u7528\u6237\u7BA1\u7406",path:"/admin/settings/store-user",icon:(0,n.jsx)(A.Z,{stroke:1})},{name:"\u7CFB\u7EDF\u7BA1\u7406\u5458",path:"/admin/settings/admin",icon:(0,n.jsx)(de.Z,{stroke:1})},{name:"\u5FAE\u4FE1\u8BBE\u7F6E",path:"/admin/settings/wechat",icon:(0,n.jsx)(ie.Z,{stroke:1})},{name:"\u8D26\u5355\u5BF9\u8D26",path:"/admin/settings/bill-verification",icon:(0,n.jsx)(he.Z,{stroke:1})},{name:"\u6D3B\u52A8\u65E5\u5FD7",path:"/admin/settings/activity-log",icon:(0,n.jsx)(ue,{stroke:1})},{name:"\u7CFB\u7EDF\u8BBE\u7F6E",icon:(0,n.jsx)(Ce,{}),children:[{name:"\u56FD\u5BB6\u548C\u5730\u533A",path:"/admin/settings/area",icon:(0,n.jsx)(ee.Z,{stroke:1})},{name:"\u73AF\u5883\u53D8\u91CF",path:"/admin/settings/env",icon:(0,n.jsx)(me,{stroke:1})},{name:"\u5E73\u53F0\u914D\u7F6E",path:"/admin/settings/system/common"}]}]}];(0,z.$H)(fe);var h=fe,ce=e(37545),ne=e(38295),xe=e(55932),Ie=e(11306),je=e(68421),Ze=e(57381),ge=e(71230),Oe=e(15746),De=e(4393),Be=e(22181),Re=function(){return(0,n.jsx)(ge.Z,{justify:"center",style:{marginTop:"100px"},children:(0,n.jsx)(Oe.Z,{span:12,children:(0,n.jsx)(De.Z,{title:"\u63D0\u793A",children:(0,n.jsx)(Be.ZP,{status:"warning",title:"\u7BA1\u7406\u5458\u8D26\u53F7",subTitle:"\u7BA1\u7406\u5458\u8D26\u53F7\u88AB\u7981\u7528",extra:(0,n.jsx)(a.ZP,{type:"primary",onClick:function(){(0,z.rf)()},children:"\u7ACB\u5373\u767B\u5F55"})})})})})},Ae=function(){return(0,n.jsx)(ge.Z,{justify:"center",style:{paddingTop:"100px"},children:(0,n.jsx)(Oe.Z,{span:12,children:(0,n.jsx)(De.Z,{title:"\u63D0\u793A",children:(0,n.jsx)(Be.ZP,{status:"403",title:"\u7BA1\u7406\u5458\u8D26\u53F7",subTitle:"\u7BA1\u7406\u5458\u8D26\u53F7\u672A\u767B\u5F55",extra:(0,n.jsx)(a.ZP,{type:"primary",onClick:function(){(0,z.rf)()},children:"\u7ACB\u5373\u767B\u5F55"})})})})})},Xe=function(){return _jsx(Row,{justify:"center",style:{marginTop:"100px"},children:_jsx(Col,{span:12,children:_jsx(Card,{title:"\u63D0\u793A",children:_jsx(Result,{status:"warning",title:"\u7BA1\u7406\u5458\u8D26\u53F7",subTitle:"\u7BA1\u7406\u5458\u8D26\u53F7\u88AB\u7981\u7528",extra:_jsx(Button,{type:"primary",onClick:function(){redirectToLogin()},children:"\u7ACB\u5373\u767B\u5F55"})})})})})};function $e(U){var b,Q=U.children,V=(0,ne.o)(),oe=(0,M.TH)(),se=((b=V.adminAuthResult)===null||b===void 0?void 0:b.Admin)||{},T=(0,je.Z)(V.queryAdminAuthResult,{manual:!0});return(0,i.useEffect)(function(){(0,C.lk)()?T.run():V.adminAuthResult=void 0},[oe.pathname]),!(0,z.KY)(se)&&T.loading?(0,n.jsx)(Ze.Z,{spinning:T.loading,size:"large",fullscreen:!0,tip:(0,n.jsx)("p",{children:"\u52A0\u8F7D\u767B\u5F55\u4FE1\u606F..."})}):(0,z.KY)(se)?se.IsActive?(0,n.jsx)(n.Fragment,{children:Q}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(Re,{})}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(Ae,{})})}function Se(U){var b=U.children,Q=(0,ne.o)(),V=(0,M.TH)(),oe=(0,je.Z)(Q.queryAdminPermission,{manual:!0});return i.useEffect(function(){(0,C.lk)()&&(0,z.KY)(Q.admin)?oe.run():Q.adminPermissions=void 0},[V.pathname,Q.admin]),Q.adminPermissions==null&&oe.loading?(0,n.jsx)(Ze.Z,{spinning:oe.loading,size:"large",fullscreen:!0,tip:(0,n.jsx)("p",{children:"\u52A0\u8F7D\u6743\u9650\u4FE1\u606F..."})}):(0,n.jsx)(n.Fragment,{children:b})}var Te=e(35839);function Fe(U){var b=U.children;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(Te.Z,{children:(0,n.jsx)($e,{children:(0,n.jsx)(Se,{children:b})})})})}var Le=[{name:"\u5546\u54C1",path:"/admin/catalog/goods",key:"catalog",icon:(0,n.jsx)(W.Z,{stroke:1}),children:[{name:"\u5546\u54C1\u7BA1\u7406",path:"/admin/catalog/goods",icon:(0,n.jsx)(H.Z,{stroke:1})},{name:"\u54C1\u724C\u7BA1\u7406",path:"/admin/catalog/brand",icon:(0,n.jsx)(S,{stroke:1})},{name:"\u5206\u7C7B\u7BA1\u7406",path:"/admin/catalog/category",icon:(0,n.jsx)(K.Z,{stroke:1})},{name:"\u6807\u7B7E\u7BA1\u7406",path:"/admin/catalog/tag",icon:(0,n.jsx)(E,{stroke:1})}]},{name:"\u8BBE\u7F6E",path:"/admin/settings/store",key:"settings",icon:(0,n.jsx)(le.Z,{stroke:1}),children:[{name:"\u5546\u57CE\u7BA1\u7406",path:"/admin/settings/store",icon:(0,n.jsx)(J.Z,{stroke:1})},{name:"\u7528\u6237\u7BA1\u7406",path:"/admin/settings/store-user",icon:(0,n.jsx)(A.Z,{stroke:1})},{name:"\u7CFB\u7EDF\u7BA1\u7406\u5458",path:"/admin/settings/admin",icon:(0,n.jsx)(de.Z,{stroke:1})},{name:"\u5FAE\u4FE1\u8BBE\u7F6E",path:"/admin/settings/wechat",icon:(0,n.jsx)(ie.Z,{stroke:1})},{name:"\u56FD\u5BB6\u548C\u5730\u533A",path:"/admin/settings/area",icon:(0,n.jsx)(ee.Z,{stroke:1})},{name:"\u73AF\u5883\u53D8\u91CF",path:"/admin/settings/env",icon:(0,n.jsx)(me,{stroke:1})},{name:"\u8D26\u5355\u5BF9\u8D26",path:"/admin/settings/bill-verification",icon:(0,n.jsx)(he.Z,{stroke:1})},{name:"\u6D3B\u52A8\u65E5\u5FD7",path:"/admin/settings/activity-log",icon:(0,n.jsx)(ue,{stroke:1})}]}],We=Le,ze=e(5753),Ue=e(73752),Ke=e(99115),Ne=e(17777),Ve=e(14123),Ge=e(42288),He=e(11329),ke=e(74621);function Qe(){var U,b,Q=(0,M.pC)(),V=(0,ne.o)(),oe=(0,M.TH)(),se=(0,z.tC)()?We:h,T=(0,z.H_)(se,V.adminPermissions||{});(0,i.useEffect)(function(){console.log("\u83DC\u5355\u6570\u636E",T)},[T]);var ae=(0,C.zO)((0,z.vW)((U=V.admin)===null||U===void 0?void 0:U.User)||"--",8),ve=(0,xe.SZ)((b=V.admin)===null||b===void 0||(b=b.User)===null||b===void 0?void 0:b.Avatar),be=function(){var w;return(0,C.zd)()?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{style:{display:"none"},children:"in iframe"}),Q]}):(0,n.jsx)(Ie.f,{location:oe,appList:(0,z.tC)()?ze.Z:ce.Z,theme:"light",navTheme:"light",layout:"top",fixedHeader:!0,splitMenus:!0,logo:(0,n.jsx)(ke.Zd,{onClick:function(){M.m8.push({pathname:"/admin"})}}),title:"\u7BA1\u7406\u7AEF",menu:{request:function(){var $=O()(o()().mark(function Me(){return o()().wrap(function(Ee){for(;;)switch(Ee.prev=Ee.next){case 0:return Ee.abrupt("return",T);case 1:case"end":return Ee.stop()}},Me)}));function D(){return $.apply(this,arguments)}return D}(),params:T},menuItemRender:function(D,Me){return(0,ke.Pp)(D,Me)},actionsRender:function(){return[(0,n.jsx)(Ue.pD,{}),(0,n.jsx)(L,{}),(0,n.jsx)(Z.Z,{title:"TODO",children:(0,n.jsx)(a.ZP,{type:"primary",size:"small",shape:"circle",icon:(0,n.jsx)(Ke.Z,{size:15})})}),(0,n.jsx)(Z.Z,{title:"Search",children:(0,n.jsx)(a.ZP,{type:"primary",size:"small",shape:"circle",icon:(0,n.jsx)(c.Z,{size:15})})}),(0,n.jsx)(Z.Z,{title:"Profile",children:(0,n.jsx)(a.ZP,{type:"primary",size:"small",shape:"circle",icon:(0,n.jsx)(Ne.Z,{size:15})})}),(0,n.jsx)(Z.Z,{title:"FQ&A",children:(0,n.jsx)(a.ZP,{type:"primary",size:"small",shape:"circle",icon:(0,n.jsx)(Ve.Z,{size:15})})})]},waterMarkProps:{content:["\u7BA1\u7406\u7AEF\uFF1A".concat(ae),((w=V.admin)===null||w===void 0||(w=w.User)===null||w===void 0||(w=w.UserMobile)===null||w===void 0?void 0:w.MobilePhone)||""].filter(function($){return $.length>0})},avatarProps:{icon:(0,n.jsx)(l.C,{src:ve,children:ae}),title:(0,n.jsxs)("div",{className:"flex flex-col items-start",children:[(0,n.jsx)("div",{className:"text-body",children:ae}),(0,n.jsx)(Ge.Z,{})]}),onClick:function(D){console.log(D),M.m8.push({pathname:"/admin/ucenter"})}},token:ke.RZ,children:(0,n.jsx)(He.Z,{menus:se,children:Q})})};return(0,n.jsx)(Fe,{children:be()})}},84567:function(g,r,e){e.d(r,{Z:function(){return I}});var t=e(67294),o=e(93967),x=e.n(o),O=e(50132),M=e(45353),Z=e(17415),a=e(53124),l=e(98866),i=e(35792),B=e(65223),d=t.createContext(null),R=e(63185),F=function(s,k){var y={};for(var c in s)Object.prototype.hasOwnProperty.call(s,c)&&k.indexOf(c)<0&&(y[c]=s[c]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,c=Object.getOwnPropertySymbols(s);m<c.length;m++)k.indexOf(c[m])<0&&Object.prototype.propertyIsEnumerable.call(s,c[m])&&(y[c[m]]=s[c[m]]);return y};const C=(s,k)=>{var y;const{prefixCls:c,className:m,rootClassName:_,children:W,indeterminate:H=!1,style:S,onMouseEnter:K,onMouseLeave:E,skipGroup:j=!1,disabled:N}=s,f=F(s,["prefixCls","className","rootClassName","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),{getPrefixCls:q,direction:pe,checkbox:Y}=t.useContext(a.E_),v=t.useContext(d),{isFormItemInput:ye}=t.useContext(B.aM),de=t.useContext(l.Z),le=(y=(v==null?void 0:v.disabled)||N)!==null&&y!==void 0?y:de,J=t.useRef(f.value);t.useEffect(()=>{v==null||v.registerValue(f.value)},[]),t.useEffect(()=>{if(!j)return f.value!==J.current&&(v==null||v.cancelValue(J.current),v==null||v.registerValue(f.value),J.current=f.value),()=>v==null?void 0:v.cancelValue(f.value)},[f.value]);const A=q("checkbox",c),ie=(0,i.Z)(A),[he,ue,Ce]=(0,R.ZP)(A,ie),ee=Object.assign({},f);v&&!j&&(ee.onChange=function(){f.onChange&&f.onChange.apply(f,arguments),v.toggleOption&&v.toggleOption({label:W,value:f.value})},ee.name=v.name,ee.checked=v.value.includes(f.value));const me=x()(`${A}-wrapper`,{[`${A}-rtl`]:pe==="rtl",[`${A}-wrapper-checked`]:ee.checked,[`${A}-wrapper-disabled`]:le,[`${A}-wrapper-in-form-item`]:ye},Y==null?void 0:Y.className,m,_,Ce,ie,ue),z=x()({[`${A}-indeterminate`]:H},Z.A,ue),fe=H?"mixed":void 0;return he(t.createElement(M.Z,{component:"Checkbox",disabled:le},t.createElement("label",{className:me,style:Object.assign(Object.assign({},Y==null?void 0:Y.style),S),onMouseEnter:K,onMouseLeave:E},t.createElement(O.Z,Object.assign({"aria-checked":fe},ee,{prefixCls:A,className:z,disabled:le,ref:k})),W!==void 0&&t.createElement("span",null,W))))};var re=t.forwardRef(C),te=e(74902),P=e(98423),G=function(s,k){var y={};for(var c in s)Object.prototype.hasOwnProperty.call(s,c)&&k.indexOf(c)<0&&(y[c]=s[c]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,c=Object.getOwnPropertySymbols(s);m<c.length;m++)k.indexOf(c[m])<0&&Object.prototype.propertyIsEnumerable.call(s,c[m])&&(y[c[m]]=s[c[m]]);return y},n=t.forwardRef((s,k)=>{const{defaultValue:y,children:c,options:m=[],prefixCls:_,className:W,rootClassName:H,style:S,onChange:K}=s,E=G(s,["defaultValue","children","options","prefixCls","className","rootClassName","style","onChange"]),{getPrefixCls:j,direction:N}=t.useContext(a.E_),[f,q]=t.useState(E.value||y||[]),[pe,Y]=t.useState([]);t.useEffect(()=>{"value"in E&&q(E.value||[])},[E.value]);const v=t.useMemo(()=>m.map(h=>typeof h=="string"||typeof h=="number"?{label:h,value:h}:h),[m]),ye=h=>{Y(ce=>ce.filter(ne=>ne!==h))},de=h=>{Y(ce=>[].concat((0,te.Z)(ce),[h]))},le=h=>{const ce=f.indexOf(h.value),ne=(0,te.Z)(f);ce===-1?ne.push(h.value):ne.splice(ce,1),"value"in E||q(ne),K==null||K(ne.filter(xe=>pe.includes(xe)).sort((xe,Ie)=>{const je=v.findIndex(ge=>ge.value===xe),Ze=v.findIndex(ge=>ge.value===Ie);return je-Ze}))},J=j("checkbox",_),A=`${J}-group`,ie=(0,i.Z)(J),[he,ue,Ce]=(0,R.ZP)(J,ie),ee=(0,P.Z)(E,["value","disabled"]),me=m.length?v.map(h=>t.createElement(re,{prefixCls:J,key:h.value.toString(),disabled:"disabled"in h?h.disabled:E.disabled,value:h.value,checked:f.includes(h.value),onChange:h.onChange,className:`${A}-item`,style:h.style,title:h.title,id:h.id,required:h.required},h.label)):c,z={toggleOption:le,value:f,disabled:E.disabled,name:E.name,registerValue:de,cancelValue:ye},fe=x()(A,{[`${A}-rtl`]:N==="rtl"},W,H,Ce,ie,ue);return he(t.createElement("div",Object.assign({className:fe,style:S},ee,{ref:k}),t.createElement(d.Provider,{value:z},me)))});const L=re;L.Group=n,L.__ANT_CHECKBOX=!0;var I=L},63185:function(g,r,e){e.d(r,{C2:function(){return Z}});var t=e(11568),o=e(14747),x=e(83262),O=e(83559);const M=a=>{const{checkboxCls:l}=a,i=`${l}-wrapper`;return[{[`${l}-group`]:Object.assign(Object.assign({},(0,o.Wf)(a)),{display:"inline-flex",flexWrap:"wrap",columnGap:a.marginXS,[`> ${a.antCls}-row`]:{flex:1}}),[i]:Object.assign(Object.assign({},(0,o.Wf)(a)),{display:"inline-flex",alignItems:"baseline",cursor:"pointer","&:after":{display:"inline-block",width:0,overflow:"hidden",content:"'\\a0'"},[`& + ${i}`]:{marginInlineStart:0},[`&${i}-in-form-item`]:{'input[type="checkbox"]':{width:14,height:14}}}),[l]:Object.assign(Object.assign({},(0,o.Wf)(a)),{position:"relative",whiteSpace:"nowrap",lineHeight:1,cursor:"pointer",borderRadius:a.borderRadiusSM,alignSelf:"center",[`${l}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0,margin:0,[`&:focus-visible + ${l}-inner`]:Object.assign({},(0,o.oN)(a))},[`${l}-inner`]:{boxSizing:"border-box",display:"block",width:a.checkboxSize,height:a.checkboxSize,direction:"ltr",backgroundColor:a.colorBgContainer,border:`${(0,t.bf)(a.lineWidth)} ${a.lineType} ${a.colorBorder}`,borderRadius:a.borderRadiusSM,borderCollapse:"separate",transition:`all ${a.motionDurationSlow}`,"&:after":{boxSizing:"border-box",position:"absolute",top:"50%",insetInlineStart:"25%",display:"table",width:a.calc(a.checkboxSize).div(14).mul(5).equal(),height:a.calc(a.checkboxSize).div(14).mul(8).equal(),border:`${(0,t.bf)(a.lineWidthBold)} solid ${a.colorWhite}`,borderTop:0,borderInlineStart:0,transform:"rotate(45deg) scale(0) translate(-50%,-50%)",opacity:0,content:'""',transition:`all ${a.motionDurationFast} ${a.motionEaseInBack}, opacity ${a.motionDurationFast}`}},"& + span":{paddingInlineStart:a.paddingXS,paddingInlineEnd:a.paddingXS}})},{[`
        ${i}:not(${i}-disabled),
        ${l}:not(${l}-disabled)
      `]:{[`&:hover ${l}-inner`]:{borderColor:a.colorPrimary}},[`${i}:not(${i}-disabled)`]:{[`&:hover ${l}-checked:not(${l}-disabled) ${l}-inner`]:{backgroundColor:a.colorPrimaryHover,borderColor:"transparent"},[`&:hover ${l}-checked:not(${l}-disabled):after`]:{borderColor:a.colorPrimaryHover}}},{[`${l}-checked`]:{[`${l}-inner`]:{backgroundColor:a.colorPrimary,borderColor:a.colorPrimary,"&:after":{opacity:1,transform:"rotate(45deg) scale(1) translate(-50%,-50%)",transition:`all ${a.motionDurationMid} ${a.motionEaseOutBack} ${a.motionDurationFast}`}}},[`
        ${i}-checked:not(${i}-disabled),
        ${l}-checked:not(${l}-disabled)
      `]:{[`&:hover ${l}-inner`]:{backgroundColor:a.colorPrimaryHover,borderColor:"transparent"}}},{[l]:{"&-indeterminate":{[`${l}-inner`]:{backgroundColor:`${a.colorBgContainer} !important`,borderColor:`${a.colorBorder} !important`,"&:after":{top:"50%",insetInlineStart:"50%",width:a.calc(a.fontSizeLG).div(2).equal(),height:a.calc(a.fontSizeLG).div(2).equal(),backgroundColor:a.colorPrimary,border:0,transform:"translate(-50%, -50%) scale(1)",opacity:1,content:'""'}},[`&:hover ${l}-inner`]:{backgroundColor:`${a.colorBgContainer} !important`,borderColor:`${a.colorPrimary} !important`}}}},{[`${i}-disabled`]:{cursor:"not-allowed"},[`${l}-disabled`]:{[`&, ${l}-input`]:{cursor:"not-allowed",pointerEvents:"none"},[`${l}-inner`]:{background:a.colorBgContainerDisabled,borderColor:a.colorBorder,"&:after":{borderColor:a.colorTextDisabled}},"&:after":{display:"none"},"& + span":{color:a.colorTextDisabled},[`&${l}-indeterminate ${l}-inner::after`]:{background:a.colorTextDisabled}}}]};function Z(a,l){const i=(0,x.IX)(l,{checkboxCls:`.${a}`,checkboxSize:l.controlInteractiveSize});return[M(i)]}r.ZP=(0,O.I$)("Checkbox",(a,l)=>{let{prefixCls:i}=l;return[Z(i,a)]})},10110:function(g,r,e){var t=e(67294),o=e(76745),x=e(40378);const O=(M,Z)=>{const a=t.useContext(o.Z),l=t.useMemo(()=>{var B;const p=Z||x.Z[M],d=(B=a==null?void 0:a[M])!==null&&B!==void 0?B:{};return Object.assign(Object.assign({},typeof p=="function"?p():p),d||{})},[M,Z,a]),i=t.useMemo(()=>{const B=a==null?void 0:a.locale;return a!=null&&a.exist&&!B?x.Z.locale:B},[a]);return[l,i]};r.Z=O},85576:function(g,r,e){e.d(r,{Z:function(){return G}});var t=e(56080),o=e(38657),x=e(56745),O=e(67294),M=e(93967),Z=e.n(M),a=e(40974),l=e(8745),i=e(53124),B=e(35792),p=e(32409),d=e(4941),R=e(71194),F=function(u,n){var L={};for(var I in u)Object.prototype.hasOwnProperty.call(u,I)&&n.indexOf(I)<0&&(L[I]=u[I]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,I=Object.getOwnPropertySymbols(u);s<I.length;s++)n.indexOf(I[s])<0&&Object.prototype.propertyIsEnumerable.call(u,I[s])&&(L[I[s]]=u[I[s]]);return L};const C=u=>{const{prefixCls:n,className:L,closeIcon:I,closable:s,type:k,title:y,children:c,footer:m}=u,_=F(u,["prefixCls","className","closeIcon","closable","type","title","children","footer"]),{getPrefixCls:W}=O.useContext(i.E_),H=W(),S=n||W("modal"),K=(0,B.Z)(H),[E,j,N]=(0,R.ZP)(S,K),f=`${S}-confirm`;let q={};return k?q={closable:s!=null?s:!1,title:"",footer:"",children:O.createElement(p.O,Object.assign({},u,{prefixCls:S,confirmPrefixCls:f,rootPrefixCls:H,content:c}))}:q={closable:s!=null?s:!0,title:y,footer:m!==null&&O.createElement(d.$,Object.assign({},u)),children:c},E(O.createElement(a.s,Object.assign({prefixCls:S,className:Z()(j,`${S}-pure-panel`,k&&f,k&&`${f}-${k}`,L,N,K)},_,{closeIcon:(0,d.b)(S,I),closable:s},q)))};var X=(0,l.i)(C),re=e(94423);function te(u){return(0,t.ZP)((0,t.uW)(u))}const P=x.Z;P.useModal=re.Z,P.info=function(n){return(0,t.ZP)((0,t.cw)(n))},P.success=function(n){return(0,t.ZP)((0,t.vq)(n))},P.error=function(n){return(0,t.ZP)((0,t.AQ)(n))},P.warning=te,P.warn=te,P.confirm=function(n){return(0,t.ZP)((0,t.Au)(n))},P.destroyAll=function(){for(;o.Z.length;){const n=o.Z.pop();n&&n()}},P.config=t.ai,P._InternalPanelDoNotUseOrYouWillBeFired=X;var G=P},50132:function(g,r,e){var t=e(87462),o=e(1413),x=e(4942),O=e(97685),M=e(45987),Z=e(93967),a=e.n(Z),l=e(21770),i=e(67294),B=["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange"],p=(0,i.forwardRef)(function(d,R){var F=d.prefixCls,C=F===void 0?"rc-checkbox":F,X=d.className,re=d.style,te=d.checked,P=d.disabled,G=d.defaultChecked,u=G===void 0?!1:G,n=d.type,L=n===void 0?"checkbox":n,I=d.title,s=d.onChange,k=(0,M.Z)(d,B),y=(0,i.useRef)(null),c=(0,i.useRef)(null),m=(0,l.Z)(u,{value:te}),_=(0,O.Z)(m,2),W=_[0],H=_[1];(0,i.useImperativeHandle)(R,function(){return{focus:function(j){var N;(N=y.current)===null||N===void 0||N.focus(j)},blur:function(){var j;(j=y.current)===null||j===void 0||j.blur()},input:y.current,nativeElement:c.current}});var S=a()(C,X,(0,x.Z)((0,x.Z)({},"".concat(C,"-checked"),W),"".concat(C,"-disabled"),P)),K=function(j){P||("checked"in d||H(j.target.checked),s==null||s({target:(0,o.Z)((0,o.Z)({},d),{},{type:L,checked:j.target.checked}),stopPropagation:function(){j.stopPropagation()},preventDefault:function(){j.preventDefault()},nativeEvent:j.nativeEvent}))};return i.createElement("span",{className:S,title:I,style:re,ref:c},i.createElement("input",(0,t.Z)({},k,{className:"".concat(C,"-input"),ref:y,onChange:K,disabled:P,checked:!!W,type:L})),i.createElement("span",{className:"".concat(C,"-inner")}))});r.Z=p},39336:function(g,r,e){e.d(r,{Z:function(){return o}});var t=e(33733);var o=(0,t.Z)("outline","brand-wechat","IconBrandWechat",[["path",{d:"M16.5 10c3.038 0 5.5 2.015 5.5 4.5c0 1.397 -.778 2.645 -2 3.47l0 2.03l-1.964 -1.178a6.649 6.649 0 0 1 -1.536 .178c-3.038 0 -5.5 -2.015 -5.5 -4.5s2.462 -4.5 5.5 -4.5z",key:"svg-0"}],["path",{d:"M11.197 15.698c-.69 .196 -1.43 .302 -2.197 .302a8.008 8.008 0 0 1 -2.612 -.432l-2.388 1.432v-2.801c-1.237 -1.082 -2 -2.564 -2 -4.199c0 -3.314 3.134 -6 7 -6c3.782 0 6.863 2.57 7 5.785l0 .233",key:"svg-1"}],["path",{d:"M10 8h.01",key:"svg-2"}],["path",{d:"M7 8h.01",key:"svg-3"}],["path",{d:"M15 14h.01",key:"svg-4"}],["path",{d:"M18 14h.01",key:"svg-5"}]])},45991:function(g,r,e){e.d(r,{Z:function(){return o}});var t=e(33733);var o=(0,t.Z)("outline","building-store","IconBuildingStore",[["path",{d:"M3 21l18 0",key:"svg-0"}],["path",{d:"M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4",key:"svg-1"}],["path",{d:"M5 21l0 -10.15",key:"svg-2"}],["path",{d:"M19 21l0 -10.15",key:"svg-3"}],["path",{d:"M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4",key:"svg-4"}]])},83121:function(g,r,e){e.d(r,{Z:function(){return o}});var t=e(33733);var o=(0,t.Z)("outline","building-warehouse","IconBuildingWarehouse",[["path",{d:"M3 21v-13l9 -4l9 4v13",key:"svg-0"}],["path",{d:"M13 13h4v8h-10v-6h6",key:"svg-1"}],["path",{d:"M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3",key:"svg-2"}]])},46295:function(g,r,e){e.d(r,{Z:function(){return o}});var t=e(33733);var o=(0,t.Z)("outline","category","IconCategory",[["path",{d:"M4 4h6v6h-6z",key:"svg-0"}],["path",{d:"M14 4h6v6h-6z",key:"svg-1"}],["path",{d:"M4 14h6v6h-6z",key:"svg-2"}],["path",{d:"M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",key:"svg-3"}]])},16308:function(g,r,e){e.d(r,{Z:function(){return o}});var t=e(33733);var o=(0,t.Z)("outline","chart-bar","IconChartBar",[["path",{d:"M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z",key:"svg-0"}],["path",{d:"M15 9a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z",key:"svg-1"}],["path",{d:"M9 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z",key:"svg-2"}],["path",{d:"M4 20h14",key:"svg-3"}]])},77249:function(g,r,e){e.d(r,{Z:function(){return o}});var t=e(33733);var o=(0,t.Z)("outline","check","IconCheck",[["path",{d:"M5 12l5 5l10 -10",key:"svg-0"}]])},25619:function(g,r,e){e.d(r,{Z:function(){return o}});var t=e(33733);var o=(0,t.Z)("outline","clock","IconClock",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 7v5l3 3",key:"svg-1"}]])},17777:function(g,r,e){e.d(r,{Z:function(){return o}});var t=e(33733);var o=(0,t.Z)("outline","eye","IconEye",[["path",{d:"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6",key:"svg-1"}]])},14123:function(g,r,e){e.d(r,{Z:function(){return o}});var t=e(33733);var o=(0,t.Z)("outline","flag-question","IconFlagQuestion",[["path",{d:"M13.5 15a4.914 4.914 0 0 1 -1.5 -1a5 5 0 0 0 -7 0v-9a5 5 0 0 1 7 0a5 5 0 0 0 7 0v6",key:"svg-0"}],["path",{d:"M5 21v-7",key:"svg-1"}],["path",{d:"M19 22v.01",key:"svg-2"}],["path",{d:"M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483",key:"svg-3"}]])},99115:function(g,r,e){e.d(r,{Z:function(){return o}});var t=e(33733);var o=(0,t.Z)("outline","list-check","IconListCheck",[["path",{d:"M3.5 5.5l1.5 1.5l2.5 -2.5",key:"svg-0"}],["path",{d:"M3.5 11.5l1.5 1.5l2.5 -2.5",key:"svg-1"}],["path",{d:"M3.5 17.5l1.5 1.5l2.5 -2.5",key:"svg-2"}],["path",{d:"M11 6l9 0",key:"svg-3"}],["path",{d:"M11 12l9 0",key:"svg-4"}],["path",{d:"M11 18l9 0",key:"svg-5"}]])},31837:function(g,r,e){e.d(r,{Z:function(){return o}});var t=e(33733);var o=(0,t.Z)("outline","map-2","IconMap2",[["path",{d:"M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5",key:"svg-0"}],["path",{d:"M9 4v13",key:"svg-1"}],["path",{d:"M15 7v5.5",key:"svg-2"}],["path",{d:"M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z",key:"svg-3"}],["path",{d:"M19 18v.01",key:"svg-4"}]])},63070:function(g,r,e){e.d(r,{Z:function(){return o}});var t=e(33733);var o=(0,t.Z)("outline","map-pin","IconMapPin",[["path",{d:"M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-0"}],["path",{d:"M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z",key:"svg-1"}]])},97975:function(g,r,e){e.d(r,{Z:function(){return o}});var t=e(33733);var o=(0,t.Z)("outline","plus","IconPlus",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M5 12l14 0",key:"svg-1"}]])},50472:function(g,r,e){e.d(r,{Z:function(){return o}});var t=e(33733);var o=(0,t.Z)("outline","reload","IconReload",[["path",{d:"M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747",key:"svg-0"}],["path",{d:"M20 4v5h-5",key:"svg-1"}]])},13129:function(g,r,e){e.d(r,{Z:function(){return o}});var t=e(33733);var o=(0,t.Z)("outline","search","IconSearch",[["path",{d:"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",key:"svg-0"}],["path",{d:"M21 21l-6 -6",key:"svg-1"}]])},39276:function(g,r,e){e.d(r,{Z:function(){return o}});var t=e(33733);var o=(0,t.Z)("outline","ticket","IconTicket",[["path",{d:"M15 5l0 2",key:"svg-0"}],["path",{d:"M15 11l0 2",key:"svg-1"}],["path",{d:"M15 17l0 2",key:"svg-2"}],["path",{d:"M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2",key:"svg-3"}]])}}]);
