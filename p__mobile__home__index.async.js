"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6845],{37085:function(K,D,n){n.d(D,{Z:function(){return R}});var L=n(5574),z=n.n(L),N=n(67294),A=n(38295),f=n(66419),$=n(38016),c=n(68421),H=n(66386),r=n(30699),T=n(70025),y=n(78957),p=n(84367),t=n(85893),U=function(d){var e=d.store,o=d.currentId;if(!e)return null;var j=e.Id==o,v=function(m){return(0,t.jsx)("span",{className:"text-sm font-light text-slate-400",children:m})};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"my-2 cursor-pointer overflow-hidden rounded-md border-1 border-gray-100 bg-gray-50 p-2 shadow-sm hover:border-gray-200",onClick:function(){confirm("\u786E\u5B9A\u9009\u62E9[".concat(e.Name,"]\u4F5C\u4E3A\u5F53\u524D\u95E8\u5E97\uFF1F"))&&((0,f.LW)(e.Id||""),window.location.reload())},children:(0,t.jsxs)(y.Z,{direction:"vertical",children:[(0,t.jsxs)(y.Z,{direction:"horizontal",children:[(0,t.jsx)("h6",{className:"mb-1",children:e.Name}),j&&(0,t.jsx)("span",{className:"text-red-400",children:"\u5F53\u524D\u9009\u62E9"})]}),(0,t.jsxs)(y.Z,{direction:"horizontal",split:(0,t.jsx)(p.j,{orientation:"vertical"}),children:[(0,f.Wq)(e.Telephone)||(0,t.jsx)("span",{className:"mb-1 text-sm font-light text-slate-400",children:e.Telephone}),(0,f.Wq)(e.AddressDetail)||(0,t.jsx)("span",{className:"mb-1 text-sm font-light text-slate-400",children:e.AddressDetail})]}),(0,t.jsxs)(y.Z,{direction:"horizontal",split:(0,t.jsx)(p.j,{orientation:"vertical"}),children:[e.Opening&&v("\u8425\u4E1A\u4E2D"),e.InvoiceSupported&&v("\u652F\u6301\u5F00\u53D1\u7968"),e.Distance&&e.Distance>0&&v("".concat((e.Distance/1e3).toFixed(2),"km")),e.InServiceArea!=null&&e.InServiceArea&&v("\u5728\u670D\u52A1\u8303\u56F4\u5185")]})]})})})},B=function(d){var e,o=d.show,j=d.close,v=(0,A.o)(),h=(0,c.Z)(r.x1.mall.storeListStores,{manual:!0,onSuccess:function(u,x){(0,f._y)(u,function(){})}}),m=((e=h.data)===null||e===void 0||(e=e.data)===null||e===void 0?void 0:e.Data)||[],F=(0,c.Z)(f.MK,{manual:!0,onSuccess:function(u){console.log("\u5B9A\u4F4D\u7ED3\u679C",u);var x={Lat:u.coords.latitude,Lon:u.coords.longitude};h.run({headers:{"x-location":JSON.stringify(x)}})},onError:function(u){var x;console.log(u),(x=f.iI.message)===null||x===void 0||x.error("\u5B9A\u4F4D\u5931\u8D25\uFF0C\u5C06\u5C55\u793A\u9ED8\u8BA4\u95E8\u5E97"),h.run({})}});(0,N.useEffect)(function(){o&&(alert("\u8BF7\u5141\u8BB8\u6211\u4EEC\u901A\u8FC7\u60A8\u7684\u5B9A\u4F4D\u6765\u83B7\u53D6\u9644\u8FD1\u7684\u95E8\u5E97"),F.run())},[o]);var E=function(){return h.loading||F.loading?(0,t.jsx)(H.Z,{}):(0,f.G5)(m)?(0,t.jsx)("h2",{children:"\u9644\u8FD1\u6CA1\u6709\u53EF\u9009\u95E8\u5E97"}):m==null?void 0:m.map(function(u,x){var I;return(0,t.jsx)("div",{children:(0,t.jsx)(U,{currentId:(I=v.currentStore)===null||I===void 0?void 0:I.Id,store:u})},x)})};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(T.Z,{open:o,onClose:function(){return j&&j()},title:"\u9644\u8FD1\u95E8\u5E97",children:E()})})},P=n(45991),R=function(){var d,e,o=(0,A.o)(),j=(0,c.Z)(o.queryCurrentStore,{manual:!0}),v=(0,c.Z)(o.queryMostNearbyStore,{manual:!0}),h=(0,N.useState)(!1),m=z()(h,2),F=m[0],E=m[1];return(0,N.useEffect)(function(){var l,u;o.currentStore!=null&&(l=o.mostNearbyStore)!==null&&l!==void 0&&l.Id&&o.mostNearbyStore.Id!=((u=o.currentStore)===null||u===void 0?void 0:u.Id)&&(confirm("\u662F\u5426\u5207\u6362\u5230\u9644\u8FD1\u7684\u95E8\u5E97\uFF1A[".concat(o.mostNearbyStore.Id,"]"))?((0,f.LW)(o.mostNearbyStore.Id||""),setTimeout(function(){window.location.reload()},500)):o.mostNearbyStore=void 0)},[o.mostNearbyStore,o.currentStore]),(0,N.useEffect)(function(){j.run(),o.mostNearbyStore==null&&v.run()},[]),(0,N.useEffect)(function(){var l;(l=o.currentStore)!==null&&l!==void 0&&l.Id&&!o.currentStore.Opening&&confirm("\u5F53\u524D\u95E8\u5E97[".concat(o.currentStore.Name||"--","]\u5DF2\u7ECF\u95ED\u5E97\uFF0C\u662F\u5426\u66F4\u6362\u95E8\u5E97"))&&E(!0)},[o.currentStore]),j.loading||v.loading?(0,t.jsx)("span",{children:"..."}):(d=o.currentStore)!==null&&d!==void 0&&d.Id?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(B,{show:F,close:function(){E(!1)}}),(0,t.jsx)($.e,{content:"\u9009\u62E9\u95E8\u5E97",showArrow:!0,color:"warning",children:(0,t.jsxs)("div",{className:"flex-row-center gap-1 cursor-pointer",children:[(0,t.jsx)(P.Z,{stroke:1,size:20}),(0,t.jsx)("span",{className:"text-overline m-0 p-0",onClick:function(){E(!0)},children:((e=o.currentStore)===null||e===void 0?void 0:e.Name)||"--"})]})})]}):(0,t.jsx)("span",{children:"\u65E0\u95E8\u5E97\u4FE1\u606F"})}},1102:function(K,D,n){n.r(D),n.d(D,{default:function(){return M}});var L=n(5574),z=n.n(L),N=n(84179),A=n(65885),f=n(68421),$=n(67294),c=n(66419),H=n(22548),r=n(85893),T=function(a){var s=a.blocks,i=a.showHidden,S=i?s:s==null?void 0:s.filter(function(g){return!g.hide});return!S||(0,c.G5)(S)?null:(0,r.jsx)(r.Fragment,{children:S.map(function(g,W){return(0,r.jsx)("div",{children:(0,r.jsx)(H.Z,{block:g})},W)})})},y=n(21274),p=n(38295),t=n(30699),U=function(){var a,s,i=(0,p.o)();return(0,c.Wq)((a=i.mallSettings)===null||a===void 0?void 0:a.FilingNumber)?null:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"flex flex-row items-center justify-center py-4",children:(0,r.jsx)("a",{className:"text-sm font-light text-slate-400 no-underline",href:"https://beian.miit.gov.cn/",target:"_blank",children:(s=i.mallSettings)===null||s===void 0?void 0:s.FilingNumber})})})};function B(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(U,{})})}var P=n(99380),R=function(){var a,s,i=(0,p.o)();return(0,c.Wq)((a=i.mallSettings)===null||a===void 0?void 0:a.HomePageNotice)?null:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"mb-3 px-1",children:(0,r.jsx)(P.z,{color:"warning",children:(s=i.mallSettings)===null||s===void 0?void 0:s.HomePageNotice})})})},d=n(37085),e=n(15142),o=n(45336),j=n(79479),v=n(7311),h=n(85134),m=n(55932),F=n(47650);function E(){var a=(0,p.o)(),s=a.mallSettings||{},i=(0,$.useMemo)(function(){var S=[s.FullLogoStorageData,s.SimpleLogoStorageData].map(function(g){return(0,m.Kk)(g,{height:100})});return S.filter(function(g){return!(0,c.Wq)(g)}).at(0)},[s]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(F.rU,{to:{pathname:"/"},children:(0,r.jsx)("img",{src:i||h.v.app.logo.normal,alt:"logo",style:{height:"30px",width:"auto"}})})})}var l=n(35291),u=n(38016),x=n(45820),I=n(17226);function O(){var a,s,i=(0,p.o)(),S=(0,m.SZ)((a=i.storeUser)===null||a===void 0||(a=a.User)===null||a===void 0?void 0:a.Avatar,{height:100});return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(u.e,{content:((s=i.storeUser)===null||s===void 0||(s=s.User)===null||s===void 0?void 0:s.NickName)||"Login Your Account",isDisabled:!(0,l.lE)(i.storeUser),color:"warning",showArrow:!0,children:(0,r.jsx)(x.h,{className:"cursor-pointer",showFallback:!0,isBordered:!0,radius:"full",size:"sm",src:S||void 0,fallback:(0,r.jsx)(I.Z,{stroke:1}),color:"default",onClick:function(){(0,l.lE)(i.storeUser)?F.m8.push({pathname:"/ucenter"}):(0,l.rf)()}})})})}function V(){if((0,c.zd)()||(0,c.K1)())return null;var a=!0;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(e.R,{position:"static",className:"px-0",classNames:{base:"px-0",wrapper:"px-0"},children:[(0,r.jsxs)(o.H,{children:[a||(0,r.jsx)(E,{}),a&&(0,r.jsx)(d.Z,{})]}),(0,r.jsxs)(j.U,{justify:"end",className:"flex-shrink-0 flex-nowrap",children:[(0,r.jsx)(v.k,{children:a||(0,r.jsx)(d.Z,{})}),(0,r.jsx)(v.k,{children:(0,r.jsx)(O,{})})]})]})})}function M(){var a=(0,p.o)();(0,N.Z)("".concat(a.getAppName(),"-\u9996\u9875"));var s=(0,A.Z)("home.page.data.blocks",{serializer:function(C){return JSON.stringify(C||[])},deserializer:function(C){return(0,c.ZP)(C)},defaultValue:void 0}),i=z()(s,2),S=i[0],g=i[1],W=S||[],k=(0,f.Z)(t.x1.mall.homeHomePageBlocks,{manual:!0,onSuccess:function(C,J){var Z,X=(0,c.ZP)((Z=C.data)===null||Z===void 0||(Z=Z.Data)===null||Z===void 0?void 0:Z.Blocks);g(X)}});return(0,$.useEffect)(function(){k.run()},[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"container mx-auto max-w-lg",style:{minHeight:1e3},children:[(0,r.jsx)(V,{}),k.loading&&(0,r.jsx)(y.Z,{}),(0,r.jsx)(R,{}),(0,r.jsx)(T,{showHidden:!0,blocks:W}),(0,r.jsx)(B,{})]})})}}}]);
