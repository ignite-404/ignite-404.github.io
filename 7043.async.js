"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7043],{85043:function(L,D,r){var j=r(97857),i=r.n(j),g=r(35291),c=r(55932),l=r(95813),A=r(94442),d=r(85893);D.Z=function(E){var a=E.data;if(!a)return null;var s=(0,c.Kk)(a.storage,{width:a.width||500,height:a.height});return!s||(0,l.Wq)(s)?null:(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(A.Z,i()(i()({rate:a.rate,src:s,isZoomed:!0,radius:"sm",className:"object-cover",classNames:{img:"object-cover"},width:"100%",alt:a.caption||void 0},a.props),{},{onClick:function(){a!=null&&a.link&&(0,g.hu)(a.link)}}))})}},22548:function(L,D,r){r.d(D,{Z:function(){return De}});var j=r(97857),i=r.n(j),g=r(5574),c=r.n(g),l=r(71016),A=r(38018),d=r(67294),E=r(72640),a=r(14887),s=r(95813),e=r(85893),m=function(_){var n=_.goods;return(0,s.G5)(n)?(0,e.jsx)(E.Z,{}):(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("div",{className:"grid grid-cols-2 gap-2 lg:grid-cols-3",children:n.map(function(t,u){return(0,e.jsx)("div",{children:(0,e.jsx)(a.Z,{model:t,count:1,onClick:function(){(0,s.E4)(t.Id)}})},u)})})})},Z=r(13386),h=function(_){var n=_.goods;return(0,s.G5)(n)?(0,e.jsx)(E.Z,{}):(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("div",{className:"px-1",children:n==null?void 0:n.map(function(t,u){return(0,e.jsx)("div",{className:"my-2",children:(0,e.jsx)(Z.Z,{model:t,count:3,onClick:function(){(0,s.E4)(t.Id)}})},u)})})})},x=r(66386),p=r(30699),C=r(38787),F=r(76021),z=r(82052),w=r(81239),S=function(_){var n=_.goods,t=(0,d.useRef)(null),u=(0,z.Z)(t),o=(u==null?void 0:u.width)||1e3;return(0,d.useEffect)(function(){console.log("full_width",o)},[o]),(0,s.G5)(n)?(0,e.jsx)(E.Z,{}):(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(w.o,{ref:t,size:3,hideScrollBar:!0,orientation:"horizontal",isEnabled:!0,className:"w-full",children:(0,e.jsx)("div",{className:"flex-nowrap flex flex-row items-start justify-start gap-1 py-1",children:n.map(function(P,I){return(0,e.jsx)("div",{style:{width:o*.4,flexShrink:0},children:(0,e.jsx)(a.Z,{model:P,count:1,lazy:!0,onClick:function(){(0,s.E4)(P.Id)}})},I)})})})})},N=function(_){var n,t=_.data,u=(0,d.useState)(void 0),o=c()(u,2),P=o[0],I=o[1],W=(0,d.useState)([]),T=c()(W,2),b=T[0],B=T[1],M=(0,d.useState)(!1),O=c()(M,2),R=O[0],v=O[1],f=P||(t==null?void 0:t.category),K=function(G){(0,s.Wq)(G)||(v(!0),p.x1.mall.searchSearchGoodsList({IsPublished:!0,CategoryId:G,PageSize:(t==null?void 0:t.count)||10,Page:1,SkipCalculateTotalCount:!0}).then(function(Ce){B(Ce.data.Items||[])}).finally(function(){return v(!1)}))},k=function(G){},H=t==null||(n=t.category)===null||n===void 0?void 0:n.Id;if((0,d.useEffect)(function(){H&&!(0,s.Wq)(H)&&(k(H),K(H))},[H]),f==null)return null;var J=function(){if(R)return(0,e.jsx)(x.Z,{});var G=(0,l.Z)(b,t.count||1e3);return t.display_type=="slider"?(0,e.jsx)(S,{goods:G}):t.display_type=="grid"?(0,e.jsx)(m,{goods:G}):t.display_type=="item"?(0,e.jsx)(h,{goods:G}):(0,e.jsx)(m,{goods:G})};return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"py-2",children:[(0,e.jsxs)("div",{className:"px-1",style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"text-title",children:f.Name||"--"}),(0,s.Wq)(f.Description)||(0,e.jsx)("span",{className:"text-caption",children:f.Description})]}),(0,e.jsx)(C.A,{size:"sm",variant:"light",onClick:function(){f&&f.Id&&F.m8.push({pathname:"/category",search:A.stringify({cat:"".concat(f.Id)})})},children:"\u66F4\u591A"})]}),J()]})})},y=r(85043),V=r(71230),U=r(15746),ee=function(_){var n=_.data;if(!n)return null;var t=n.gutter||0;if(n.style=="1-column"){var u;return(0,e.jsx)("div",{children:(0,e.jsx)(y.Z,{data:(u=n.pictureList)===null||u===void 0?void 0:u.at(0)})})}if(n.style=="2-columns"){var o,P;return(0,e.jsxs)(V.Z,{gutter:[t,t],children:[(0,e.jsx)(U.Z,{span:12,children:(0,e.jsx)(y.Z,{data:(o=n.pictureList)===null||o===void 0?void 0:o.at(0)})}),(0,e.jsx)(U.Z,{span:12,children:(0,e.jsx)(y.Z,{data:(P=n.pictureList)===null||P===void 0?void 0:P.at(1)})})]})}if(n.style=="3-columns"){var I,W,T;return(0,e.jsxs)(V.Z,{gutter:[t,t],children:[(0,e.jsx)(U.Z,{span:8,children:(0,e.jsx)(y.Z,{data:(I=n.pictureList)===null||I===void 0?void 0:I.at(0)})}),(0,e.jsx)(U.Z,{span:8,children:(0,e.jsx)(y.Z,{data:(W=n.pictureList)===null||W===void 0?void 0:W.at(1)})}),(0,e.jsx)(U.Z,{span:8,children:(0,e.jsx)(y.Z,{data:(T=n.pictureList)===null||T===void 0?void 0:T.at(2)})})]})}if(n.style=="4-grids"){var b,B,M,O;return(0,e.jsxs)(V.Z,{gutter:[t,t],children:[(0,e.jsx)(U.Z,{span:12,children:(0,e.jsx)(y.Z,{data:(b=n.pictureList)===null||b===void 0?void 0:b.at(0)})}),(0,e.jsx)(U.Z,{span:12,children:(0,e.jsx)(y.Z,{data:(B=n.pictureList)===null||B===void 0?void 0:B.at(1)})}),(0,e.jsx)(U.Z,{span:12,children:(0,e.jsx)(y.Z,{data:(M=n.pictureList)===null||M===void 0?void 0:M.at(2)})}),(0,e.jsx)(U.Z,{span:12,children:(0,e.jsx)(y.Z,{data:(O=n.pictureList)===null||O===void 0?void 0:O.at(3)})})]})}if(n.style=="style-1"){var R,v,f;return(0,e.jsxs)(V.Z,{gutter:[t,t],children:[(0,e.jsx)(U.Z,{span:12,children:(0,e.jsx)(y.Z,{data:(R=n.pictureList)===null||R===void 0?void 0:R.at(0)})}),(0,e.jsx)(U.Z,{span:12,children:(0,e.jsxs)(V.Z,{gutter:[t,t],children:[(0,e.jsx)(U.Z,{span:24,children:(0,e.jsx)(y.Z,{data:(v=n.pictureList)===null||v===void 0?void 0:v.at(1)})}),(0,e.jsx)(U.Z,{span:24,children:(0,e.jsx)(y.Z,{data:(f=n.pictureList)===null||f===void 0?void 0:f.at(2)})})]})})]})}return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("p",{children:"grid error"})})},ne=r.p+"static/illustration_avatar.7e60c067.png",re=r(38295),te=r(45837),se=r(19314),ae=r(35194);function le(_){var n=_.data,t=(0,re.o)();return(0,e.jsx)(te.w,{shadow:"none",fullWidth:!0,isHoverable:!0,radius:"sm",children:(0,e.jsx)(se.G,{children:(0,e.jsxs)("div",{className:"flex-row-between",children:[(0,e.jsx)("div",{className:"flex-grow flex-row-center",children:(0,e.jsx)("img",{alt:"",src:ne,style:{width:"100px"}})}),(0,e.jsxs)("div",{className:"flex-nowrap",style:{flexGrow:1},children:[(0,e.jsx)("div",{className:"text-sm text-slate-400",children:"".concat(t.getAppName())}),(0,e.jsx)("div",{className:"mb-1 text-lg",children:(0,s.Wq)(n==null?void 0:n.helloText)?"\u{1F389}\u65B0\u5E97\u5F00\u4E1A":n==null?void 0:n.helloText}),(0,e.jsx)(C.A,{className:"bg-white px-5 py-1",radius:"lg",color:"danger",variant:"flat",size:"sm",onClick:function(){var o;(o=s.iI.message)===null||o===void 0||o.success((0,e.jsx)(ae.Z,{stroke:1,color:"orange",size:50}))},children:"\u6563\u82B1 ~"})]})]})})})}var oe=r(19632),ie=r.n(oe),de=function(_){var n=_.data,t=(0,d.useState)([]),u=c()(t,2),o=u[0],P=u[1],I=(0,d.useState)(!1),W=c()(I,2),T=W[0],b=W[1],B=function(v){var f,K,k;b(!0),p.x1.mall.searchSearchGoodsList({IsPublished:!0,Keywords:v.keywords,BrandId:(f=v.brand)===null||f===void 0?void 0:f.Id,CategoryId:(K=v.category)===null||K===void 0?void 0:K.Id,TagId:(k=v.tag)===null||k===void 0?void 0:k.Id,Page:1,PageSize:v.count||10,SkipCalculateTotalCount:!0}).then(function(H){P(H.data.Items||[])}).finally(function(){return b(!1)})},M=function(v){if(!(0,s.G5)(v)){var f=v.map(function(K){return K.Id||""});b(!0),p.x1.mall.goodsByIds(f).then(function(K){var k=[];v.forEach(function(H){var J,X=(J=K.data.Data)===null||J===void 0?void 0:J.find(function(G){return G.Id==H.Id});X&&k.push(X)}),P(k)}).finally(function(){return b(!1)})}};(0,d.useEffect)(function(){n.type=="selected-goods"?M(n.goods_list||[]):B(n.search||{})},[n]);var O=function(){if(T)return(0,e.jsx)(x.Z,{});var v=ie()(o);if(n.type!="selected-goods"){var f;v=(0,l.Z)(v,((f=n.search)===null||f===void 0?void 0:f.count)||1e3)}return n.display_type=="slider"?(0,e.jsx)(S,{goods:v}):n.display_type=="grid"?(0,e.jsx)(m,{goods:v}):n.display_type=="item"?(0,e.jsx)(h,{goods:v}):(0,e.jsx)(m,{goods:v})};return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"px-1 py-2",children:[(0,e.jsx)("h3",{className:"mb-1 text-title",children:"\u70ED\u9500\u5546\u54C1\u{1F525}"}),O()]})})},ue=r(41537),ce=function(_){var n=_.data,t=n==null?void 0:n.markdownText;return!t||(0,s.Wq)(t)?null:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(ue.Z,{md:t})})},_e=r(28913),ve=function(_){var n=_.data;return!n||!n.sliders||(0,s.G5)(n.sliders)?null:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(_e.Z,{touchMove:!0,draggable:!0,adaptiveHeight:!0,autoplay:n.auto_play,autoplaySpeed:n.auto_play_interval==null?void 0:n.auto_play_interval*1e3,infinite:n.loop,vertical:n.vertical,dots:!n.hide_indicator,arrows:!n.hide_indicator,children:n.sliders.map(function(t,u){return(0,e.jsx)("div",{children:(0,e.jsx)(y.Z,{data:i()(i()({},t),{},{rate:3/4})})},"slider-".concat(u))})})})},me=r(9383),Y=r(35291),Q=r(55932),$=r(68421),he=function(_){var n,t=_.data,u=(0,$.Z)(p.x1.mall.goodsByIds,{manual:!0}),o=((n=u.data)===null||n===void 0||(n=n.data)===null||n===void 0?void 0:n.Data)||[],P=function(M){!M||(0,s.G5)(M)||u.run(M)};if((0,d.useEffect)(function(){var B,M=(t==null||(B=t.goods_list)===null||B===void 0?void 0:B.map(function(O){return O.Id||""}))||[];P(M.filter(function(O){return!(0,s.Wq)(O)}))},[t]),!t)return null;var I=function(M){return(0,e.jsx)(e.Fragment,{children:M.map(function(O,R){var v,f;return(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[(0,e.jsx)("span",{className:"text-white",children:O.Name||"--"}),(0,e.jsx)("span",{className:"text-sm text-orange-500",children:((v=O.PriceModel)===null||v===void 0?void 0:v.FinalPrice)!=null?(0,s.lb)((f=O.PriceModel)===null||f===void 0?void 0:f.FinalPrice):"--"})]},R)})})},W=function(M){var O,R=(0,Q.Kk)((O=(0,Y.zH)(M.GoodsPictures||[]).at(0))===null||O===void 0?void 0:O.StorageMeta,{width:100,height:100});if(!R||(0,s.Wq)(R))return null;var v=M.Skus||[],f=(0,l.Z)(v,1),K=v.length-f.length;return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"rounded-md p-1 hover:bg-[rgba(0,0,0,0.3)]",style:{display:"flex",flexDirection:"row",alignItems:"start",justifyContent:"start",cursor:"pointer"},onClick:function(){(0,s.E4)(M.Id||void 0)},children:[(0,e.jsx)(me.J,{isZoomed:!0,alt:"",src:R,style:{width:70,height:70,borderRadius:8}}),(0,e.jsxs)("div",{className:"flex-grow px-1",children:[(0,e.jsx)("div",{className:"text-white",children:M.Name}),I(f),K>0&&(0,e.jsx)("div",{className:"text-slate-400",children:"\u8FD8\u6709".concat(K,"\u4E2A\u6B3E\u5F0F")})]})]})})},T=function(){return u.loading||(0,s.G5)(o)?null:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("div",{className:"overflow-hidden p-2",style:{backgroundColor:"rgba(50,50,50,0.5)"},children:(0,e.jsx)("div",{className:"flex-col-top gap-1 w-full",children:o.map(function(M,O){return(0,e.jsx)("div",{children:W(M)},O)})})})})},b=function(){return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{style:{position:"relative"},children:[(0,e.jsx)(y.Z,{data:t.picture}),(0,e.jsx)("div",{className:"text-title",style:{position:"absolute",left:0,top:0,zIndex:10,padding:"1px 8px",backgroundColor:t.color||"black",borderBottomRightRadius:t.borderRadius,color:"white"},children:t.tag}),(0,e.jsxs)("div",{className:"p-2",style:{position:"absolute",left:0,right:0,bottom:0,zIndex:10,background:"linear-gradient(0deg, rgba(8,8,8,0.8) 0%, rgba(125,125,125,0.4) 75%, rgba(255,255,255,0) 100%)"},children:[(0,s.Wq)(t.subtitle)||(0,e.jsx)("div",{className:"text-subtitle text-white",children:t.subtitle}),(0,s.Wq)(t.title)||(0,e.jsx)("h3",{className:"text-title text-white",children:(0,s.zO)(t.title||"",10)}),(0,s.Wq)(t.caption)||(0,e.jsx)("div",{className:"text-caption text-slate-400",children:t.caption})]})]})})};return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{style:{backgroundColor:t.color||void 0,borderColor:t.color,borderStyle:"solid",borderWidth:t.borderWidth,borderRadius:t.borderRadius,overflow:"hidden"},children:[b(),T()]})})},xe=r(21274),q=function(_){var n=_.data;return(0,s.Wq)(n==null?void 0:n.title)?null:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"px-1 flex-row-between",children:[(0,e.jsx)("h4",{className:"text-subtitle",children:n.title}),(0,s.Wq)(n.moreText)||(0,e.jsx)(C.A,{size:"sm",variant:"light",onClick:function(){n.moreLink&&(0,Y.hu)(n.moreLink)},children:n.moreText})]})})},fe=r(38016),je=function(_){var n=_.data,t=_.onUpdate;if(!n)return null;var u=(0,$.Z)(p.x1.mall.couponIssueCoupon,{manual:!0,onSuccess:function(I,W){(0,s._y)(I,function(){var T;(T=s.iI.message)===null||T===void 0||T.success("\u9886\u53D6\u6210\u529F"),t()})}}),o=function(){return n.CanBeIssued?(0,e.jsx)(C.A,{isLoading:u.loading,disabled:!n.CanBeIssued||u.loading,size:"sm",variant:"light",onClick:function(){u.run({CouponId:n.Id})},children:"\u9886\u53D6"}):(0,e.jsx)(fe.e,{showArrow:!0,content:n.UnableToIssueReason||"\u65E0\u6CD5\u9886\u53D6",children:(0,e.jsx)("span",{className:"text-slate-400 text-tiny text-overline uppercase",children:"\u65E0\u6CD5\u9886\u53D6"})})};return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"bg-slate-100 border-1 border-slate-200 p-2 rounded-sm shadow-sm flex-row-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"flex-row-left w-full gap-1",children:[(0,e.jsx)("h3",{children:n.Name}),(0,e.jsx)("span",{className:"text-red-500",children:(0,s.lb)(n.Price||0)})]}),(0,s.Wq)(n.Description)||(0,e.jsx)("div",{className:"text-gray-400",children:n.Description})]}),(0,e.jsx)("div",{children:o()})]})})},ge=function(_){var n,t=_.data;if(!t)return null;var u=t.count||10,o=(0,$.Z)(p.x1.mall.couponQueryCouponPaging,{manual:!0}),P=(0,l.Z)(((n=o.data)===null||n===void 0||(n=n.data)===null||n===void 0?void 0:n.Items)||[],u);(0,d.useEffect)(function(){o.run({Page:1,PageSize:u,SkipCalculateTotalCount:!0})},[]);var I=function(){return P.length<=0?(0,e.jsx)("p",{children:"\u6682\u65E0\u4F18\u60E0\u5238\u53EF\u4EE5\u9886\u53D6"}):P.map(function(T,b){return(0,e.jsx)("div",{className:"mb-1",children:(0,e.jsx)(je,{data:T,onUpdate:function(){o.run({Page:1,PageSize:u,SkipCalculateTotalCount:!0})}})},b)})};return o.loading?(0,e.jsx)(xe.Z,{}):P.length<=0&&t.hide_if_empty?null:(0,e.jsxs)(e.Fragment,{children:[(0,s.Wq)(t.title)||(0,e.jsx)(q,{data:{title:t.title}}),(0,e.jsx)("div",{className:"py-1",children:I()})]})},Ee=r(66972),pe=function(_){var n=_.data,t=(0,d.useState)(""),u=c()(t,2),o=u[0],P=u[1];return n?(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(Ee.Z,{keywords:o,placeholder:n.placeholder||void 0,onChange:function(W){P(W)},onSearch:function(W){(0,Y.iv)({Keywords:W})}})}):null},Pe=function(_){var n=_.data;if(!n)return null;var t=function(){return n.video_url&&!(0,s.Wq)(n.video_url)?n.video_url:(0,Q.Kk)(n.storage)},u=t();if(!u||(0,s.Wq)(u))return(0,e.jsx)("h5",{children:"\u89C6\u9891\u4E0D\u5B58\u5728"});var o=function(){if(u.toLowerCase().endsWith(".mp4"))return(0,e.jsx)("source",{src:u,type:"video/mp4"})},P=o();return P?(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("video",{poster:(0,Q.Kk)(n.poster)||void 0,loop:n.loop,autoPlay:n.auto_play,controls:n.controls,width:"100%",height:"auto",preload:"none",children:[P,(0,e.jsx)("p",{children:"Your browser doesn't support HTML5 video."})]})}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("h5",{children:"\u4E0D\u652F\u6301\u7684\u89C6\u9891\u683C\u5F0F"}),(0,e.jsx)("p",{children:u})]})},De=function(_){var n=_.block;if(!n)return(0,e.jsx)("p",{children:"block is null"});var t=function(){var o=n.body||{};return n.type=="slider"?(0,e.jsx)(ve,{data:o}):n.type=="hello"?(0,e.jsx)(le,{data:o}):n.type=="gallery"?(0,e.jsx)(ee,{data:o}):n.type=="markdown"?(0,e.jsx)(ce,{data:o}):n.type=="hot-goods"?(0,e.jsx)(de,{data:o}):n.type=="category-goods"?(0,e.jsx)(N,{data:o}):n.type=="title"?(0,e.jsx)(q,{data:o}):n.type=="video"?(0,e.jsx)(Pe,{data:o}):n.type=="search"?(0,e.jsx)(pe,{data:o}):n.type=="coupon"?(0,e.jsx)(ge,{data:o}):n.type=="card"?(0,e.jsx)(he,{data:o}):n.type=="coupon"?(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("h4",{children:"todo"})}):(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{children:"error block item"}),(0,e.jsx)("div",{children:JSON.stringify(n)})]})};return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("div",{style:i()({},n.style),children:t()})})}},66386:function(L,D,r){r.d(D,{Z:function(){return g}});var j=r(10843),i=r(85893);function g(){return(0,i.jsxs)("div",{className:"py-3",children:[(0,i.jsx)("div",{children:(0,i.jsx)(j.X,{className:"flex h-12 w-12 rounded-full"})}),(0,i.jsxs)("div",{className:"flex w-full flex-col gap-2",children:[(0,i.jsx)(j.X,{className:"h-3 w-3/5 rounded-lg"}),(0,i.jsx)(j.X,{className:"h-3 w-4/5 rounded-lg"})]})]})}},66972:function(L,D,r){r.d(D,{Z:function(){return A}});var j=r(95813),i=r(38787),g=r(69047),c=r(13129),l=r(85893);function A(d){var E=d.keywords,a=d.onSearch,s=d.onChange,e=d.placeholder,m=d.addonAfter,Z=d.addonBefore,h=d.hideSearchButton,x=d.hideSearchIcon,p=d.style,C=function(){a&&a((0,j.gB)([E,e]))},F=function(){if(e&&!(0,j.Wq)(e))return"".concat(e,"...")},z=function(){return(0,l.jsxs)("div",{className:"flex flex-row items-center justify-center gap-1",children:[x||(0,l.jsx)(i.A,{size:"sm",isIconOnly:!0,variant:"light",children:(0,l.jsx)(c.Z,{stroke:1})}),Z]})},w=function(){return(0,l.jsxs)("div",{className:"flex flex-row items-center justify-center gap-1",children:[m,h||(0,l.jsx)(i.A,{size:"sm",color:"danger",variant:"light",onClick:function(){C()},children:"\u641C \u7D22"})]})};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("form",{onSubmit:function(N){N.preventDefault(),C()},children:(0,l.jsx)(g.Y,{style:p,className:"px-0",fullWidth:!0,size:"md",variant:"bordered",color:"danger",value:E,onChange:function(N){s&&s(N.target.value)},placeholder:F()||"\u641C\u7D22...",startContent:z(),endContent:w()})})})}},14887:function(L,D,r){r.d(D,{Z:function(){return s}});var j=r(97857),i=r.n(j),g=r(50209),c=r(95813),l=r(45837),A=r(19314),d=r(35291),E=r(94442),a=r(85893);function s(e){var m=e.model,Z=e.count,h=e.lazy;if((0,c.Wq)(m==null?void 0:m.Id))return null;var x=(0,d.LK)(m,{width:250,height:250});return m.Published,(0,a.jsxs)(l.w,i()(i()({shadow:"none",className:"w-full",isHoverable:!0,isPressable:!0},e),{},{children:[(0,a.jsx)(A.G,{className:"overflow-visible p-0",children:(0,a.jsx)(E.Z,{rate:3/3,shadow:"none",radius:"lg",isZoomed:!0,loading:h?"lazy":"eager",src:x||void 0,className:"object-cover",classNames:{img:"object-cover"},width:"100%",alt:""})}),(0,a.jsx)(A.G,{className:"p-2",children:(0,a.jsxs)("div",{className:"w-full flex-col-top",children:[(0,a.jsx)("div",{className:"text-nowrap",children:m.Name||"--"}),(0,c.Wq)(m.AdminComment)||(0,a.jsx)("span",{className:"text-overline text-sm",children:m.AdminComment}),(0,a.jsx)(g.Z,{skus:m.Skus||[],count:Z})]})})]}))}},13386:function(L,D,r){r.d(D,{Z:function(){return Z}});var j=r(97857),i=r.n(j),g=r(78957),c=r(84367),l=r(85893),A=function(h){var x,p=h.model;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(g.Z,{direction:"horizontal",split:(0,l.jsx)(c.j,{orientation:"vertical"}),children:[p.StickyTop&&(0,l.jsx)("span",{className:"inline text-slate-400",children:"\u7F6E\u9876"}),(x=p.Tags)===null||x===void 0?void 0:x.map(function(C,F){return(0,l.jsx)("span",{className:"inline text-slate-400",children:C.Name},F)})]})})},d=r(50209),E=r(95813),a=r(45837),s=r(19314),e=r(35291),m=r(94442);function Z(h){var x=h.model,p=h.count,C=h.lazy;if((0,E.Wq)(x.Id))return null;var F=(0,e.LK)(x,{width:250,height:250});return x.Published,(0,l.jsx)(a.w,i()(i()({shadow:"none",className:"w-full p-0",isHoverable:!0,isPressable:!0},h),{},{children:(0,l.jsx)(s.G,{className:"overflow-hidden",children:(0,l.jsxs)("div",{className:"flex flex-row justify-start items-start gap-2",children:[(0,l.jsx)("div",{className:"xs:w-[120px] w-[120px] sm:w-[170px] md:w-[230px]",children:(0,l.jsx)(m.Z,{rate:3/3,radius:"sm",shadow:"none",isZoomed:!0,loading:C?"lazy":"eager",src:F||void 0,className:"object-cover",classNames:{img:"object-cover"},width:"100%",style:{width:"100%"},alt:""})}),(0,l.jsxs)("div",{className:"w-full flex-grow p-1 ml-0",children:[(0,l.jsx)("h5",{className:"mb-1 text-title",children:x.Name||"--"}),(0,l.jsx)(d.Z,{skus:x.Skus||[],count:p}),(0,E.Wq)(x.AdminComment)||(0,l.jsx)("div",{className:"text-overline",children:x.AdminComment||"--"}),(0,l.jsx)(A,{model:x})]})]})})}))}},37087:function(L,D,r){r.d(D,{Z:function(){return l}});var j=r(67294),i=r(95813),g=r(38016),c=r(85893);function l(A){var d,E,a=A.model;if(a==null)return null;if(a.PriceModel==null||a.PriceModel.Empty)return(0,c.jsx)(g.e,{content:"\u4EF7\u683C\u767B\u5F55\u53EF\u89C1",color:"warning",showArrow:!0,children:(0,c.jsx)("span",{className:"text-nowrap font-light text-slate-400",children:"\u767B\u5F55\u89C1\u4EF7\u683C"})});var s=((d=a.PriceModel)===null||d===void 0?void 0:d.BasePrice)||0,e=((E=a.PriceModel)===null||E===void 0?void 0:E.FinalPrice)||0,m=(0,j.useMemo)(function(){var h=[];if(a.PriceModel==null)return h;if(a.PriceModel.DiscountModel!=null){var x=a.PriceModel.DiscountModel.DiscountPercentage||0;h.push("\u6298\u6263-".concat(a.PriceModel.DiscountModel.Name,":").concat(x*100,"%"))}if(a.PriceModel.GradePriceModel!=null){var p=a.PriceModel.GradePriceModel.PriceOffset||0;if(p!=0){var C;h.push("".concat(((C=a.PriceModel.GradePriceModel.Grade)===null||C===void 0?void 0:C.Name)||"\u4F1A\u5458\u4EF7",":").concat(p))}}return h},[a]),Z=function(){return(0,c.jsxs)("div",{style:{display:"inline-block"},children:[s==e||(0,c.jsx)("span",{className:"text-slate-400",style:{textDecoration:"line-through",fontSize:"9px",whiteSpace:"nowrap",fontWeight:"lighter"},children:"".concat((0,i.lb)(s))}),(0,c.jsx)("span",{className:"text-nowrap text-black",children:(0,i.lb)(e)})]})};return(0,c.jsxs)(c.Fragment,{children:[m.length<=0&&Z(),m.length<=0||(0,c.jsx)(g.e,{color:"warning",showArrow:!0,content:(0,c.jsx)("p",{children:m.map(function(h,x){return(0,c.jsxs)("p",{children:[x+1,":",h]},x)})}),children:Z()})]})}},50209:function(L,D,r){var j=r(71016),i=r(74715),g=r(85893);D.Z=function(c){var l=c.skus,A=c.count,d=A||1,E=l.length;return E<=0?(0,g.jsx)("div",{className:"font-mono text-sm font-light text-slate-400",children:"\u6682\u65E0\u53EF\u552E"}):(0,g.jsxs)(g.Fragment,{children:[(0,j.Z)(l,d).map(function(a,s){return(0,g.jsx)(i.Z,{model:a},s)}),E>d&&(0,g.jsx)("div",{className:"text-caption text-sm",children:"\u4E00\u5171".concat(E,"\u79CD\u6B3E\u5F0F")})]})}},74715:function(L,D,r){var j=r(37087),i=r(85893);D.Z=function(g){var c=g.model;return(0,i.jsxs)("div",{className:"flex-row-between",children:[(0,i.jsx)("span",{className:"text-caption",children:c.Name||"--"}),(0,i.jsx)("span",{className:"ml-1",children:(0,i.jsx)(j.Z,{model:c})})]})}},94442:function(L,D,r){var j=r(97857),i=r.n(j),g=r(15009),c=r.n(g),l=r(99289),A=r.n(l),d=r(82052),E=r(68421),a=r(9383),s=r(67294),e=r(85893);D.Z=function(m){var Z=m.width,h=m.rate,x=(0,s.useRef)(null),p=(0,d.Z)(x),C=p==null?void 0:p.width,F=function(){var w=A()(c()().mark(function S(){return c()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:if(!(h!=null&&C!=null)){y.next=2;break}return y.abrupt("return",C*h);case 2:return y.abrupt("return",void 0);case 3:case"end":return y.stop()}},S)}));return function(){return w.apply(this,arguments)}}(),z=(0,E.Z)(F,{manual:!0,debounceWait:30});return(0,s.useEffect)(function(){z.run()},[C]),(0,e.jsx)("div",{ref:x,style:{display:"block",padding:0,margin:0,width:Z!=null?Z:"100%"},children:(0,e.jsx)(a.J,i()({width:C||void 0,height:z.data||void 0,radius:"none"},m))})}},41537:function(L,D,r){r.d(D,{Z:function(){return e}});var j=r(15009),i=r.n(j),g=r(99289),c=r.n(g),l=r(32096),A=r(95813),d=r(68421),E=r(76857),a=r(67294),s=r(85893);function e(m){var Z=m.md,h=m.url,x=function(){var F=c()(i()().mark(function z(){var w;return i()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:if(h){N.next=2;break}return N.abrupt("return",null);case 2:return N.next=4,E.M.get(h);case 4:return w=N.sent,N.abrupt("return",(w==null?void 0:w.data)||null);case 6:case"end":return N.stop()}},z)}));return function(){return F.apply(this,arguments)}}(),p=(0,d.Z)(x,{manual:!0});(0,a.useEffect)(function(){h&&p.run()},[h]);var C=Z||p.data;return p.loading?(0,s.jsx)("span",{children:"loading..."}):(0,A.Wq)(C)?null:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(l.U,{remarkPlugins:[],children:C})})}},72640:function(L,D,r){var j=r(32983),i=r(85893);D.Z=function(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",paddingTop:100},children:(0,i.jsx)(j.Z,{})})})}}}]);
