"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[812],{42288:function(g,o,n){n.d(o,{Z:function(){return d}});var e=n(27424),t=n.n(e),A=n(67294),j=n(46629),M=n(22638),L=n(92770),i=function(x,u,R){R===void 0&&(R={});var k=(0,M.Z)(x),I=(0,A.useRef)(null),v=(0,A.useCallback)(function(){I.current&&clearInterval(I.current)},[]);return(0,A.useEffect)(function(){if(!(!(0,L.hj)(u)||u<0))return R.immediate&&k(),I.current=setInterval(k,u),v},[u,R.immediate]),v},Z=i,S=n(85893);function d(x){var u=x.className,R=(0,A.useState)(""),k=t()(R,2),I=k[0],v=k[1];return Z(function(){v(j.ND.utc().add(j.Mg,"hour").format("MM/DD HH:mm:ss"))},1e3,{immediate:!0}),(0,S.jsx)("div",{className:u||"text-overline text-tiny font-thin uppercase",children:I})}},53502:function(g,o,n){n.r(o),n.d(o,{default:function(){return Vn}});var e=n(17061),t=n.n(e),A=n(17156),j=n.n(A),M=n(47650),L=n(28459),i=n(83062),Z=n(14726),S=n(7134),d=n(67294),x=n(42122),u=n.n(x),R=n(27424),k=n.n(R),I=n(30967),v=n(42838),b=n(50472),W=n(45360),m=n(85576),$=n(65975),s=n(11346),l=n(84567),a=n(85893),C=function(){var P=(0,d.useState)(!1),y=k()(P,2),f=y[0],U=y[1],D=(0,d.useState)(void 0),H=k()(D,2),O=H[0],F=H[1],_=O||{},J=O!=null,w=function(h){F(h?{Home:!0,RootCategory:!0,Dashboard:!0,Search:!0}:void 0)},rn=function(h){U(!0),I.x1.mallAdmin.settingRefreshViewCache(u()({},h)).then(function(q){(0,v._y)(q,function(){W.ZP.success("\u7F13\u5B58\u5237\u65B0\u6210\u529F\uFF01"),w(!1)})}).finally(function(){U(!1)})};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(m.Z,{open:J,title:"\u5237\u65B0\u7F13\u5B58",confirmLoading:f,okText:"\u5237\u65B0\u7F13\u5B58",onOk:function(){rn(_)},onCancel:function(){w(!1)},children:[(0,a.jsx)($.Z,{style:{marginBottom:10},message:"\u521A\u66F4\u65B0\u4E86\u6570\u636E\uFF0C\u4F46\u662F\u7528\u6237\u7AEF\u5374\u6CA1\u6709\u663E\u793A\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u5237\u65B0\u7F13\u5B58",type:"warning"}),(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(s.Z.Item,{label:"\u9996\u9875",children:(0,a.jsx)(l.Z,{checked:_.Home,onChange:function(h){F(u()(u()({},O),{},{Home:h.target.checked}))},children:"\u9996\u9875"})}),(0,a.jsx)(s.Z.Item,{label:"\u5206\u7C7B",children:(0,a.jsx)(l.Z,{checked:_.RootCategory,onChange:function(h){F(u()(u()({},O),{},{RootCategory:h.target.checked}))},children:"\u5206\u7C7B"})}),(0,a.jsx)(s.Z.Item,{label:"\u62A5\u8868\u7EDF\u8BA1",children:(0,a.jsx)(l.Z,{checked:_.Dashboard,onChange:function(h){F(u()(u()({},O),{},{Dashboard:h.target.checked}))},children:"\u62A5\u8868\u7EDF\u8BA1"})}),(0,a.jsx)(s.Z.Item,{label:"\u641C\u7D22",children:(0,a.jsx)(l.Z,{checked:_.Search,onChange:function(h){F(u()(u()({},O),{},{Search:h.target.checked}))},children:"\u641C\u7D22\u9875\u9762"})})]})]}),(0,a.jsx)(i.Z,{title:"\u5237\u65B0\u7F13\u5B58",children:(0,a.jsx)(Z.ZP,{size:"small",icon:(0,a.jsx)(b.Z,{stroke:1}),type:"dashed",onClick:function(){w(!0)}})})]})},p=n(16308),r=n(33733);var E=(0,r.Z)("outline","dashboard","IconDashboard",[["path",{d:"M12 13m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-0"}],["path",{d:"M13.45 11.55l2.05 -2.05",key:"svg-1"}],["path",{d:"M6.4 20a9 9 0 1 1 11.2 0z",key:"svg-2"}]]);var B=(0,r.Z)("outline","chart-area-line","IconChartAreaLine",[["path",{d:"M4 19l4 -6l4 2l4 -5l4 4l0 5l-16 0",key:"svg-0"}],["path",{d:"M4 12l3 -4l4 2l5 -6l4 4",key:"svg-1"}]]),T=n(13129),N=n(25619),G=n(63070),Q=n(64491),K=n(33192);var V=(0,r.Z)("outline","flag","IconFlag",[["path",{d:"M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0v9a5 5 0 0 1 -7 0a5 5 0 0 0 -7 0v-9z",key:"svg-0"}],["path",{d:"M5 21v-7",key:"svg-1"}]]),nn=n(46295);var an=(0,r.Z)("outline","tags","IconTags",[["path",{d:"M3 8v4.172a2 2 0 0 0 .586 1.414l5.71 5.71a2.41 2.41 0 0 0 3.408 0l3.592 -3.592a2.41 2.41 0 0 0 0 -3.408l-5.71 -5.71a2 2 0 0 0 -1.414 -.586h-4.172a2 2 0 0 0 -2 2z",key:"svg-0"}],["path",{d:"M18 19l1.592 -1.592a4.82 4.82 0 0 0 0 -6.816l-4.592 -4.592",key:"svg-1"}],["path",{d:"M7 10h-.01",key:"svg-2"}]]);var tn=(0,r.Z)("outline","chart-pie","IconChartPie",[["path",{d:"M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-6.8a2 2 0 0 1 -2 -2v-7a.9 .9 0 0 0 -1 -.8",key:"svg-0"}],["path",{d:"M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a1 1 0 0 1 -1 -1v-4.5",key:"svg-1"}]]);var Y=(0,r.Z)("outline","discount","IconDiscount",[["path",{d:"M9 15l6 -6",key:"svg-0"}],["circle",{cx:"9.5",cy:"9.5",r:".5",fill:"currentColor",key:"svg-1"}],["circle",{cx:"14.5",cy:"14.5",r:".5",fill:"currentColor",key:"svg-2"}],["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-3"}]]),X=n(39276);var Zn=(0,r.Z)("outline","gift-card","IconGiftCard",[["path",{d:"M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z",key:"svg-0"}],["path",{d:"M7 16l3 -3l3 3",key:"svg-1"}],["path",{d:"M8 13c-.789 0 -2 -.672 -2 -1.5s.711 -1.5 1.5 -1.5c1.128 -.02 2.077 1.17 2.5 3c.423 -1.83 1.372 -3.02 2.5 -3c.789 0 1.5 .672 1.5 1.5s-1.211 1.5 -2 1.5h-4z",key:"svg-2"}]]),kn=n(83121),In=n(97975),En=n(77249),Pn=n(55046),on=n(50286),ln=n(15741),cn=n(45991),un=n(17226),dn=n(39336);var hn=(0,r.Z)("outline","map-2","IconMap2",[["path",{d:"M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5",key:"svg-0"}],["path",{d:"M9 4v13",key:"svg-1"}],["path",{d:"M15 7v5.5",key:"svg-2"}],["path",{d:"M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z",key:"svg-3"}],["path",{d:"M19 18v.01",key:"svg-4"}]]);var vn=(0,r.Z)("outline","library","IconLibrary",[["path",{d:"M7 3m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z",key:"svg-0"}],["path",{d:"M4.012 7.26a2.005 2.005 0 0 0 -1.012 1.737v10c0 1.1 .9 2 2 2h10c.75 0 1.158 -.385 1.5 -1",key:"svg-1"}],["path",{d:"M11 7h5",key:"svg-2"}],["path",{d:"M11 10h6",key:"svg-3"}],["path",{d:"M11 13h3",key:"svg-4"}]]),mn=n(14738);var gn=(0,r.Z)("outline","logs","IconLogs",[["path",{d:"M4 12h.01",key:"svg-0"}],["path",{d:"M4 6h.01",key:"svg-1"}],["path",{d:"M4 18h.01",key:"svg-2"}],["path",{d:"M8 18h2",key:"svg-3"}],["path",{d:"M8 12h2",key:"svg-4"}],["path",{d:"M8 6h2",key:"svg-5"}],["path",{d:"M14 6h6",key:"svg-6"}],["path",{d:"M14 12h6",key:"svg-7"}],["path",{d:"M14 18h6",key:"svg-8"}]]),Dn=[{name:"\u7EDF\u8BA1",path:"/admin/dashboard/home",key:"dashboard",icon:(0,a.jsx)(p.Z,{stroke:1}),children:[{name:"\u7EDF\u8BA1\u62A5\u8868",path:"/admin/dashboard/home",icon:(0,a.jsx)(E,{stroke:1})},{name:"\u9500\u552E\u7EDF\u8BA1",path:"/admin/dashboard/sales",icon:(0,a.jsx)(B,{stroke:1})},{name:"\u5173\u952E\u8BCD",path:"/admin/dashboard/keywords",icon:(0,a.jsx)(T.Z,{stroke:1})},{name:"\u6D3B\u8DC3\u65F6\u95F4",path:"/admin/dashboard/activity",icon:(0,a.jsx)(N.Z,{stroke:1})},{name:"\u6D3B\u8DC3\u57CE\u5E02",path:"/admin/dashboard/activity-geo",icon:(0,a.jsx)(G.Z,{stroke:1})}]},{name:"\u5546\u54C1",path:"/admin/catalog/goods",key:"catalog",icon:(0,a.jsx)(Q.Z,{stroke:1}),children:[{name:"\u5546\u54C1\u7BA1\u7406",path:"/admin/catalog/goods",icon:(0,a.jsx)(K.Z,{stroke:1})},{name:"\u54C1\u724C\u7BA1\u7406",path:"/admin/catalog/brand",icon:(0,a.jsx)(V,{stroke:1})},{name:"\u5206\u7C7B\u7BA1\u7406",path:"/admin/catalog/category",icon:(0,a.jsx)(nn.Z,{stroke:1})},{name:"\u6807\u7B7E\u7BA1\u7406",path:"/admin/catalog/tag",icon:(0,a.jsx)(an,{stroke:1})}]},{name:"\u4FC3\u9500",path:"/admin/marketing/coupon",key:"marketing",icon:(0,a.jsx)(tn,{stroke:1}),children:[{name:"\u6298\u6263",path:"/admin/marketing/discount",icon:(0,a.jsx)(Y,{stroke:1})},{name:"\u4F18\u60E0\u5238",path:"/admin/marketing/coupon",icon:(0,a.jsx)(X.Z,{stroke:1})},{name:"\u9884\u552E\u5361",path:"/admin/marketing/gift-card",icon:(0,a.jsx)(Zn,{stroke:1})}]},{name:"\u5E93\u5B58",path:"/admin/wms/stock/list",key:"warehouse",icon:(0,a.jsx)(kn.Z,{stroke:1}),children:[{name:"\u91C7\u8D2D\u5355",path:"/admin/wms/stock/list",icon:(0,a.jsx)(In.Z,{stroke:1})},{name:"\u5E93\u5B58\u67E5\u8BE2",path:"/admin/wms/stock/items",icon:(0,a.jsx)(En.Z,{stroke:1})},{name:"\u4ED3\u5E93\u7BA1\u7406",path:"/admin/wms/warehouse",icon:(0,a.jsx)(Pn.Z,{stroke:1})},{name:"\u4F9B\u5E94\u5546\u7BA1\u7406",path:"/admin/wms/supplier",icon:(0,a.jsx)(on.Z,{stroke:1})}]},{name:"\u8BBE\u7F6E",path:"/admin/settings/store",key:"settings",icon:(0,a.jsx)(ln.Z,{stroke:1}),children:[{name:"\u5546\u57CE\u7BA1\u7406",path:"/admin/settings/store",icon:(0,a.jsx)(cn.Z,{stroke:1})},{name:"\u7528\u6237\u7BA1\u7406",path:"/admin/settings/store-user",icon:(0,a.jsx)(un.Z,{stroke:1})},{name:"\u7CFB\u7EDF\u7BA1\u7406\u5458",path:"/admin/settings/admin",icon:(0,a.jsx)(on.Z,{stroke:1})},{name:"\u5FAE\u4FE1\u8BBE\u7F6E",path:"/admin/settings/wechat",icon:(0,a.jsx)(dn.Z,{stroke:1})},{name:"\u56FD\u5BB6\u548C\u5730\u533A",path:"/admin/settings/area",icon:(0,a.jsx)(hn,{stroke:1})},{name:"\u73AF\u5883\u53D8\u91CF",path:"/admin/settings/env",icon:(0,a.jsx)(vn,{stroke:1})},{name:"\u8D26\u5355\u5BF9\u8D26",path:"/admin/settings/bill-verification",icon:(0,a.jsx)(mn.Z,{stroke:1})},{name:"\u6D3B\u52A8\u65E5\u5FD7",path:"/admin/settings/activity-log",icon:(0,a.jsx)(gn,{stroke:1})}]}],An=Dn,Bn=n(37545),sn=n(38295),z=n(68994),On=n(85134),fn=n(55932),Rn=n(11306),pn=n(68421),yn=n(57381),Mn=n(71230),jn=n(15746),xn=n(4393),Cn=n(22181),Tn=function(){return(0,a.jsx)(Mn.Z,{justify:"center",style:{marginTop:"100px"},children:(0,a.jsx)(jn.Z,{span:12,children:(0,a.jsx)(xn.Z,{title:"\u63D0\u793A",children:(0,a.jsx)(Cn.ZP,{status:"warning",title:"\u7BA1\u7406\u5458\u8D26\u53F7",subTitle:"\u7BA1\u7406\u5458\u8D26\u53F7\u88AB\u7981\u7528",extra:(0,a.jsx)(Z.ZP,{type:"primary",onClick:function(){(0,z.rf)()},children:"\u7ACB\u5373\u767B\u5F55"})})})})})},Fn=function(){return(0,a.jsx)(Mn.Z,{justify:"center",style:{paddingTop:"100px"},children:(0,a.jsx)(jn.Z,{span:12,children:(0,a.jsx)(xn.Z,{title:"\u63D0\u793A",children:(0,a.jsx)(Cn.ZP,{status:"403",title:"\u7BA1\u7406\u5458\u8D26\u53F7",subTitle:"\u7BA1\u7406\u5458\u8D26\u53F7\u672A\u767B\u5F55",extra:(0,a.jsx)(Z.ZP,{type:"primary",onClick:function(){(0,z.rf)()},children:"\u7ACB\u5373\u767B\u5F55"})})})})})},Yn=function(){return _jsx(Row,{justify:"center",style:{marginTop:"100px"},children:_jsx(Col,{span:12,children:_jsx(Card,{title:"\u63D0\u793A",children:_jsx(Result,{status:"warning",title:"\u7BA1\u7406\u5458\u8D26\u53F7",subTitle:"\u7BA1\u7406\u5458\u8D26\u53F7\u88AB\u7981\u7528",extra:_jsx(Button,{type:"primary",onClick:function(){redirectToLogin()},children:"\u7ACB\u5373\u767B\u5F55"})})})})})};function Ln(P){var y,f=P.children,U=(0,sn.o)(),D=(0,M.TH)(),H=((y=U.adminAuthResult)===null||y===void 0?void 0:y.Admin)||{},O=(0,pn.Z)(U.queryAdminAuthResult,{manual:!0});return(0,d.useEffect)(function(){(0,v.lk)()?O.run():U.adminAuthResult=void 0},[D.pathname]),!(0,z.KY)(H)&&O.loading?(0,a.jsx)(yn.Z,{spinning:O.loading,size:"large",fullscreen:!0,tip:(0,a.jsx)("p",{children:"\u52A0\u8F7D\u767B\u5F55\u4FE1\u606F..."})}):(0,z.KY)(H)?H.IsActive?(0,a.jsx)(a.Fragment,{children:f}):(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(Tn,{})}):(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(Fn,{})})}function Un(P){var y=P.children,f=(0,sn.o)(),U=(0,M.TH)(),D=(0,pn.Z)(f.queryAdminPermission,{manual:!0});return d.useEffect(function(){(0,v.lk)()&&(0,z.KY)(f.admin)?D.run():f.adminPermissions=void 0},[U.pathname,f.admin]),f.adminPermissions==null&&D.loading?(0,a.jsx)(yn.Z,{spinning:D.loading,size:"large",fullscreen:!0,tip:(0,a.jsx)("p",{children:"\u52A0\u8F7D\u6743\u9650\u4FE1\u606F..."})}):(0,a.jsx)(a.Fragment,{children:y})}var Sn=n(35839);function Wn(P){var y=P.children;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(Sn.Z,{children:(0,a.jsx)(Ln,{children:(0,a.jsx)(Un,{children:y})})})})}var Kn=[{name:"\u5546\u54C1",path:"/admin/catalog/goods",key:"catalog",icon:(0,a.jsx)(Q.Z,{stroke:1}),children:[{name:"\u5546\u54C1\u7BA1\u7406",path:"/admin/catalog/goods",icon:(0,a.jsx)(K.Z,{stroke:1})},{name:"\u54C1\u724C\u7BA1\u7406",path:"/admin/catalog/brand",icon:(0,a.jsx)(V,{stroke:1})},{name:"\u5206\u7C7B\u7BA1\u7406",path:"/admin/catalog/category",icon:(0,a.jsx)(nn.Z,{stroke:1})},{name:"\u6807\u7B7E\u7BA1\u7406",path:"/admin/catalog/tag",icon:(0,a.jsx)(an,{stroke:1})}]},{name:"\u8BBE\u7F6E",path:"/admin/settings/store",key:"settings",icon:(0,a.jsx)(ln.Z,{stroke:1}),children:[{name:"\u5546\u57CE\u7BA1\u7406",path:"/admin/settings/store",icon:(0,a.jsx)(cn.Z,{stroke:1})},{name:"\u7528\u6237\u7BA1\u7406",path:"/admin/settings/store-user",icon:(0,a.jsx)(un.Z,{stroke:1})},{name:"\u7CFB\u7EDF\u7BA1\u7406\u5458",path:"/admin/settings/admin",icon:(0,a.jsx)(on.Z,{stroke:1})},{name:"\u5FAE\u4FE1\u8BBE\u7F6E",path:"/admin/settings/wechat",icon:(0,a.jsx)(dn.Z,{stroke:1})},{name:"\u56FD\u5BB6\u548C\u5730\u533A",path:"/admin/settings/area",icon:(0,a.jsx)(hn,{stroke:1})},{name:"\u73AF\u5883\u53D8\u91CF",path:"/admin/settings/env",icon:(0,a.jsx)(vn,{stroke:1})},{name:"\u8D26\u5355\u5BF9\u8D26",path:"/admin/settings/bill-verification",icon:(0,a.jsx)(mn.Z,{stroke:1})},{name:"\u6D3B\u52A8\u65E5\u5FD7",path:"/admin/settings/activity-log",icon:(0,a.jsx)(gn,{stroke:1})}]}],zn=Kn,_n=n(5753),Hn=n(25906),bn=n(99115),$n=n(17777),Nn=n(14123),Gn=n(42288),Qn=n(11329);function Vn(){var P,y,f,U=(0,M.pC)(),D=(0,sn.o)(),H=(0,M.TH)(),O=(0,z.tC)()?zn:An,F=(0,z.H_)(O,D.adminPermissions||{});(0,d.useEffect)(function(){console.log("\u83DC\u5355\u6570\u636E",F)},[F]);var _=(0,v.zO)((0,z.vW)((P=D.admin)===null||P===void 0?void 0:P.User)||"--",8),J=D.mallSettings||{},w=(0,d.useMemo)(function(){var c=[J.FullLogoStorageData,J.SimpleLogoStorageData].map(function(h){return(0,fn.Kk)(h,{height:100})});return c.filter(function(h){return!(0,v.Wq)(h)}).at(0)},[J])||On.v.app.logo.normal,rn=(0,d.useMemo)(function(){var c;return(0,fn.SZ)((c=D.admin)===null||c===void 0||(c=c.User)===null||c===void 0?void 0:c.Avatar)},[(y=D.storeManager)===null||y===void 0||(y=y.User)===null||y===void 0?void 0:y.Avatar]);return(0,a.jsx)(L.ZP,{theme:{components:{Card:{headerBg:"#006AB4",headerHeight:35,colorTextHeading:"white"}},token:{}},children:(0,a.jsxs)(Wn,{children:[(0,v.zd)()&&(0,a.jsx)("div",{style:{display:"none"},children:"in iframe"}),(0,a.jsx)(Rn.f,{pure:(0,v.zd)(),location:H,appList:(0,z.tC)()?_n.Z:Bn.Z,theme:"light",navTheme:"light",layout:"top",fixedHeader:!0,splitMenus:!0,logo:(0,a.jsx)("img",{style:{},alt:"",src:w,onClick:function(){M.m8.push({pathname:"/admin"})}}),title:"\u7BA1\u7406\u7AEF",menu:{request:function(){var c=j()(t()().mark(function q(){return t()().wrap(function(en){for(;;)switch(en.prev=en.next){case 0:return en.abrupt("return",F);case 1:case"end":return en.stop()}},q)}));function h(){return c.apply(this,arguments)}return h}(),params:F},menuItemRender:function(h,q){return(0,a.jsx)(M.rU,{to:h.path||"/",children:q})},actionsRender:function(){return[(0,a.jsx)(Hn.pD,{}),(0,a.jsx)(C,{}),(0,a.jsx)(i.Z,{title:"TODO",children:(0,a.jsx)(Z.ZP,{type:"primary",size:"small",shape:"circle",icon:(0,a.jsx)(bn.Z,{size:15})})}),(0,a.jsx)(i.Z,{title:"Search",children:(0,a.jsx)(Z.ZP,{type:"primary",size:"small",shape:"circle",icon:(0,a.jsx)(T.Z,{size:15})})}),(0,a.jsx)(i.Z,{title:"Profile",children:(0,a.jsx)(Z.ZP,{type:"primary",size:"small",shape:"circle",icon:(0,a.jsx)($n.Z,{size:15})})}),(0,a.jsx)(i.Z,{title:"FQ&A",children:(0,a.jsx)(Z.ZP,{type:"primary",size:"small",shape:"circle",icon:(0,a.jsx)(Nn.Z,{size:15})})})]},waterMarkProps:{content:["\u7BA1\u7406\u7AEF\uFF1A".concat(_),((f=D.admin)===null||f===void 0||(f=f.User)===null||f===void 0||(f=f.UserMobile)===null||f===void 0?void 0:f.MobilePhone)||""].filter(function(c){return c.length>0})},avatarProps:{icon:(0,a.jsx)(S.C,{src:rn,children:_}),title:(0,a.jsxs)("div",{className:"flex flex-col items-start",children:[(0,a.jsx)("div",{className:"text-body",children:_}),(0,a.jsx)(Gn.Z,{})]}),onClick:function(h){console.log(h),M.m8.push({pathname:"/admin/ucenter"})}},token:{pageContainer:{},header:{colorBgHeader:"#e6f4ff",colorBgMenuItemHover:"#006AB4",colorBgRightActionsItemHover:"#006AB4",colorBgMenuItemSelected:"#006AB4"}},children:(0,a.jsx)(Qn.Z,{menus:O,children:U})})]})})}},11329:function(g,o,n){n.d(o,{Z:function(){return R}});var e=n(27424),t=n.n(e),A=n(42122),j=n.n(A),M=n(861),L=n.n(M),i=n(47650),Z=n(92398),S=n(42838),d=n(67294),x=n(85893),u=function k(I){var v,b=((v=I.children)===null||v===void 0?void 0:v.flatMap(function(W){return k(W)}))||[];return[j()(j()({},I),{},{children:void 0})].concat(L()(b))};function R(k){var I=k.children,v=k.menus,b=(0,d.useState)({}),W=t()(b,2),m=W[0],$=W[1],s=(0,i.TH)(),l="".concat(s.pathname).concat(s.search).trim(),a=v.flatMap(function(r){return u(r)});(0,d.useEffect)(function(){console.log(m,a,"path_and_query_string",l)},[m,a,l]),(0,d.useEffect)(function(){l.length<=0||$(function(r){var E=j()({},r);return E[l]=I,E})},[l]);var C=function(E){var B=a.find(function(T){return(0,S.C7)(T.path||"",E)});return(0,x.jsxs)("div",{className:"flex-row-center gap-1",children:[(B==null?void 0:B.icon)||null,(0,x.jsx)("span",{children:(B==null?void 0:B.name)||E})]})},p=Object.keys(m).filter(function(r){return m[r]!=null}).map(function(r){return{key:r,label:C(r),children:m[r]||(0,x.jsx)("span",{children:"should never show this"}),closable:!0}});return(0,x.jsx)(Z.Z,{hideAdd:!0,size:"small",type:"editable-card",destroyInactiveTabPane:!1,items:p,activeKey:l,onChange:function(E){E&&i.m8.push({pathname:E})},onEdit:function(E,B){if(B=="remove"){var T=j()({},m);T[E]=void 0,$(T);var N=Object.keys(T).filter(function(G){return T[G]!=null}).reverse().at(0);N&&i.m8.push({pathname:N})}}})}},10110:function(g,o,n){var e=n(67294),t=n(76745),A=n(40378);const j=(M,L)=>{const i=e.useContext(t.Z),Z=e.useMemo(()=>{var d;const x=L||A.Z[M],u=(d=i==null?void 0:i[M])!==null&&d!==void 0?d:{};return Object.assign(Object.assign({},typeof x=="function"?x():x),u||{})},[M,L,i]),S=e.useMemo(()=>{const d=i==null?void 0:i.locale;return i!=null&&i.exist&&!d?A.Z.locale:d},[i]);return[Z,S]};o.Z=j},85576:function(g,o,n){n.d(o,{Z:function(){return $}});var e=n(56080),t=n(38657),A=n(56745),j=n(67294),M=n(93967),L=n.n(M),i=n(40974),Z=n(8745),S=n(53124),d=n(35792),x=n(32409),u=n(4941),R=n(71194),k=function(s,l){var a={};for(var C in s)Object.prototype.hasOwnProperty.call(s,C)&&l.indexOf(C)<0&&(a[C]=s[C]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,C=Object.getOwnPropertySymbols(s);p<C.length;p++)l.indexOf(C[p])<0&&Object.prototype.propertyIsEnumerable.call(s,C[p])&&(a[C[p]]=s[C[p]]);return a};const I=s=>{const{prefixCls:l,className:a,closeIcon:C,closable:p,type:r,title:E,children:B,footer:T}=s,N=k(s,["prefixCls","className","closeIcon","closable","type","title","children","footer"]),{getPrefixCls:G}=j.useContext(S.E_),Q=G(),K=l||G("modal"),V=(0,d.Z)(Q),[nn,an,tn]=(0,R.ZP)(K,V),Y=`${K}-confirm`;let X={};return r?X={closable:p!=null?p:!1,title:"",footer:"",children:j.createElement(x.O,Object.assign({},s,{prefixCls:K,confirmPrefixCls:Y,rootPrefixCls:Q,content:B}))}:X={closable:p!=null?p:!0,title:E,footer:T!==null&&j.createElement(u.$,Object.assign({},s)),children:B},nn(j.createElement(i.s,Object.assign({prefixCls:K,className:L()(an,`${K}-pure-panel`,r&&Y,r&&`${Y}-${r}`,a,tn,V)},N,{closeIcon:(0,u.b)(K,C),closable:p},X)))};var v=(0,Z.i)(I),b=n(94423);function W(s){return(0,e.ZP)((0,e.uW)(s))}const m=A.Z;m.useModal=b.Z,m.info=function(l){return(0,e.ZP)((0,e.cw)(l))},m.success=function(l){return(0,e.ZP)((0,e.vq)(l))},m.error=function(l){return(0,e.ZP)((0,e.AQ)(l))},m.warning=W,m.warn=W,m.confirm=function(l){return(0,e.ZP)((0,e.Au)(l))},m.destroyAll=function(){for(;t.Z.length;){const l=t.Z.pop();l&&l()}},m.config=e.ai,m._InternalPanelDoNotUseOrYouWillBeFired=v;var $=m},39336:function(g,o,n){n.d(o,{Z:function(){return t}});var e=n(33733);var t=(0,e.Z)("outline","brand-wechat","IconBrandWechat",[["path",{d:"M16.5 10c3.038 0 5.5 2.015 5.5 4.5c0 1.397 -.778 2.645 -2 3.47l0 2.03l-1.964 -1.178a6.649 6.649 0 0 1 -1.536 .178c-3.038 0 -5.5 -2.015 -5.5 -4.5s2.462 -4.5 5.5 -4.5z",key:"svg-0"}],["path",{d:"M11.197 15.698c-.69 .196 -1.43 .302 -2.197 .302a8.008 8.008 0 0 1 -2.612 -.432l-2.388 1.432v-2.801c-1.237 -1.082 -2 -2.564 -2 -4.199c0 -3.314 3.134 -6 7 -6c3.782 0 6.863 2.57 7 5.785l0 .233",key:"svg-1"}],["path",{d:"M10 8h.01",key:"svg-2"}],["path",{d:"M7 8h.01",key:"svg-3"}],["path",{d:"M15 14h.01",key:"svg-4"}],["path",{d:"M18 14h.01",key:"svg-5"}]])},45991:function(g,o,n){n.d(o,{Z:function(){return t}});var e=n(33733);var t=(0,e.Z)("outline","building-store","IconBuildingStore",[["path",{d:"M3 21l18 0",key:"svg-0"}],["path",{d:"M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4",key:"svg-1"}],["path",{d:"M5 21l0 -10.15",key:"svg-2"}],["path",{d:"M19 21l0 -10.15",key:"svg-3"}],["path",{d:"M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4",key:"svg-4"}]])},83121:function(g,o,n){n.d(o,{Z:function(){return t}});var e=n(33733);var t=(0,e.Z)("outline","building-warehouse","IconBuildingWarehouse",[["path",{d:"M3 21v-13l9 -4l9 4v13",key:"svg-0"}],["path",{d:"M13 13h4v8h-10v-6h6",key:"svg-1"}],["path",{d:"M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3",key:"svg-2"}]])},46295:function(g,o,n){n.d(o,{Z:function(){return t}});var e=n(33733);var t=(0,e.Z)("outline","category","IconCategory",[["path",{d:"M4 4h6v6h-6z",key:"svg-0"}],["path",{d:"M14 4h6v6h-6z",key:"svg-1"}],["path",{d:"M4 14h6v6h-6z",key:"svg-2"}],["path",{d:"M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",key:"svg-3"}]])},16308:function(g,o,n){n.d(o,{Z:function(){return t}});var e=n(33733);var t=(0,e.Z)("outline","chart-bar","IconChartBar",[["path",{d:"M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z",key:"svg-0"}],["path",{d:"M15 9a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z",key:"svg-1"}],["path",{d:"M9 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z",key:"svg-2"}],["path",{d:"M4 20h14",key:"svg-3"}]])},77249:function(g,o,n){n.d(o,{Z:function(){return t}});var e=n(33733);var t=(0,e.Z)("outline","check","IconCheck",[["path",{d:"M5 12l5 5l10 -10",key:"svg-0"}]])},25619:function(g,o,n){n.d(o,{Z:function(){return t}});var e=n(33733);var t=(0,e.Z)("outline","clock","IconClock",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 7v5l3 3",key:"svg-1"}]])},17777:function(g,o,n){n.d(o,{Z:function(){return t}});var e=n(33733);var t=(0,e.Z)("outline","eye","IconEye",[["path",{d:"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6",key:"svg-1"}]])},14123:function(g,o,n){n.d(o,{Z:function(){return t}});var e=n(33733);var t=(0,e.Z)("outline","flag-question","IconFlagQuestion",[["path",{d:"M13.5 15a4.914 4.914 0 0 1 -1.5 -1a5 5 0 0 0 -7 0v-9a5 5 0 0 1 7 0a5 5 0 0 0 7 0v6",key:"svg-0"}],["path",{d:"M5 21v-7",key:"svg-1"}],["path",{d:"M19 22v.01",key:"svg-2"}],["path",{d:"M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483",key:"svg-3"}]])},99115:function(g,o,n){n.d(o,{Z:function(){return t}});var e=n(33733);var t=(0,e.Z)("outline","list-check","IconListCheck",[["path",{d:"M3.5 5.5l1.5 1.5l2.5 -2.5",key:"svg-0"}],["path",{d:"M3.5 11.5l1.5 1.5l2.5 -2.5",key:"svg-1"}],["path",{d:"M3.5 17.5l1.5 1.5l2.5 -2.5",key:"svg-2"}],["path",{d:"M11 6l9 0",key:"svg-3"}],["path",{d:"M11 12l9 0",key:"svg-4"}],["path",{d:"M11 18l9 0",key:"svg-5"}]])},63070:function(g,o,n){n.d(o,{Z:function(){return t}});var e=n(33733);var t=(0,e.Z)("outline","map-pin","IconMapPin",[["path",{d:"M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-0"}],["path",{d:"M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z",key:"svg-1"}]])},97975:function(g,o,n){n.d(o,{Z:function(){return t}});var e=n(33733);var t=(0,e.Z)("outline","plus","IconPlus",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M5 12l14 0",key:"svg-1"}]])},50472:function(g,o,n){n.d(o,{Z:function(){return t}});var e=n(33733);var t=(0,e.Z)("outline","reload","IconReload",[["path",{d:"M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747",key:"svg-0"}],["path",{d:"M20 4v5h-5",key:"svg-1"}]])},13129:function(g,o,n){n.d(o,{Z:function(){return t}});var e=n(33733);var t=(0,e.Z)("outline","search","IconSearch",[["path",{d:"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",key:"svg-0"}],["path",{d:"M21 21l-6 -6",key:"svg-1"}]])},39276:function(g,o,n){n.d(o,{Z:function(){return t}});var e=n(33733);var t=(0,e.Z)("outline","ticket","IconTicket",[["path",{d:"M15 5l0 2",key:"svg-0"}],["path",{d:"M15 11l0 2",key:"svg-1"}],["path",{d:"M15 17l0 2",key:"svg-2"}],["path",{d:"M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2",key:"svg-3"}]])}}]);
