"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5892],{52662:function(N,S,n){n.r(S),n.d(S,{default:function(){return Be}});var i=n(97857),a=n.n(i),_=n(5574),D=n.n(_),ee=n(68421),ne=n(55241),L=n(78957),U=n(66309),K=n(28036),te=n(85576),V=n(4393),J=n(32983),re=n(80799),ae=n(84611),A=n(67294),le=n(23806),oe=n(11518),X=n(15801),I=n(9518),se=n(90730),t=n(35291),v=n(30699),p=n(95813),j=n(54666),m=n(96357),k=n(99646),ie=n(92783),Z=n(11346),de=n(71230),x=n(15746),b=n(65233),F=n(34041),R=n(96864),$=n(84567),y=n(46629),ue=n(36378),ce=n(27771),G=n(77226),Q=n(74073);function ve(C,h){return(0,Q.Z)(h,function(g){return[g,C[g]]})}var he=ve,ge=n(23353),me=n(84910);function pe(C){var h=-1,g=Array(C.size);return C.forEach(function(P){g[++h]=[P,P]}),g}var xe=pe,Se="[object Map]",je="[object Set]";function Ze(C){return function(h){var g=(0,ge.Z)(h);return g==Se?(0,me.Z)(h):g==je?xe(h):he(h,C(h))}}var ye=Ze,Ce=n(17179),Pe=ye(Ce.Z),Ie=Pe,Me=n(33733);var Ee=(0,Me.Z)("outline","star","IconStar",[["path",{d:"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z",key:"svg-0"}]]),Te=n(70781),Ae=n(43821),De=n(25092),Oe=n(80355),Fe=n(55046),e=n(85893),fe=function(h){var g=a()(a()({},h),{},{Sn:void 0,StartTime:void 0,EndTime:void 0,Page:void 0,PageSize:void 0,SkipCalculateTotalCount:void 0}),P=function B(M,O){if(O>8||(++O,!M))return null;if((0,ue.Z)(M))return M;if((0,ce.Z)(M)){var W=M;return(0,p.G5)(W)?null:W.map(function(d){return B(d,O)}).filter(function(d){return!(0,p.Wq)(d)}).sort(function(d,T){return(d==null?void 0:d.localeCompare(T||""))||0}).join(",")}return(0,G.Z)(M)?Ie(M).map(function(d){return{key:d[0],value:B(d[1],O)||""}}).filter(function(d){return!(0,p.Wq)(d.value)}).sort(function(d,T){return d.key.localeCompare(T.key)}).map(function(d){return"".concat(d.key,"=").concat(d.value)}).join("&"):M.toString()};return P(g,0)},w=[{value:"process-required",label:(0,e.jsxs)(L.Z,{direction:"horizontal",split:(0,e.jsx)("b",{children:"&"}),children:[(0,e.jsx)("span",{children:"\u5F85\u914D\u9001"}),(0,e.jsx)("span",{children:"\u5F85\u81EA\u63D0"})]}),icon:(0,e.jsx)(Ee,{stroke:1,color:"orange"}),filter:{ToService:!0,ShippingMethodId:[t.sx.Delivery,t.sx.Pickup],DeliveryStatus:[t.ld.NotShipping,t.ld.Shipping]}},{value:"delivery-required",label:"\u5F85\u914D\u9001",icon:(0,e.jsx)(Te.Z,{stroke:1}),filter:{ToService:!0,ShippingMethodId:[t.sx.Delivery],DeliveryStatus:[t.ld.NotShipping,t.ld.Shipping]}},{value:"pickup-required",label:"\u5F85\u81EA\u63D0",icon:(0,e.jsx)(Ae.Z,{stroke:1}),filter:{ToService:!0,ShippingMethodId:[t.sx.Pickup],DeliveryStatus:[t.ld.NotShipping,t.ld.Shipping]}},{value:"payment-required",label:"\u5F85\u4ED8\u6B3E",icon:(0,e.jsx)(De.Z,{stroke:1}),filter:{PaymentStatus:[t.bG.Pending],Status:[t.iF.Pending,t.iF.Processing]}},{value:"aftersales",label:"\u552E\u540E\u4E2D",icon:(0,e.jsx)(Oe.Z,{stroke:1}),filter:{IsAfterSales:!0,IsAfterSalesPending:!0}},{value:"all",label:"\u5168\u90E8\u8BA2\u5355",icon:(0,e.jsx)(Fe.Z,{stroke:1}),filter:{}}],Re=function(C){var h,g,P,B=C.query,M=C.onSearch,O=(0,A.useState)(""),W=D()(O,2),d=W[0],T=W[1],q=(0,A.useState)({}),Y=D()(q,2),o=Y[0],E=Y[1],H=fe(o),u=(h=w.find(function(r){return fe(r.filter)==H}))===null||h===void 0?void 0:h.value;(0,A.useEffect)(function(){console.log("model finger print:",H),console.log("matched preset id:",u),console.log("all finger print:",w.map(function(r){return fe(r.filter)}))},[H]),(0,A.useEffect)(function(){u&&d!=u&&T(u)},[u]);var c=function(l){var f=a()(a()({},l),{},{Page:1});f.IsAfterSales||(f.IsAfterSales=void 0),f.IsAfterSalesPending||(f.IsAfterSalesPending=void 0),f.ToService||(f.ToService=void 0),console.log("triggerSearch order",f),M&&M(f)};(0,A.useEffect)(function(){E(a()({},B))},[B]);var s=["delivery-required","pickup-required"];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(ie.Z,{block:!0,style:{marginBottom:10},size:"large",value:d,options:w.filter(function(r){return!r.hide}).filter(function(r){var l;return!(0,t.RZ)()||s.indexOf(((l=r.value)===null||l===void 0?void 0:l.toLowerCase())||"")<0}),onChange:function(l){var f;T(l);var z=((f=w.find(function(We){return We.value==l}))===null||f===void 0?void 0:f.filter)||{};c(z)}}),(0,e.jsx)(V.Z,{bordered:!1,style:{marginBottom:10},children:(0,e.jsx)(Z.Z,{labelCol:{span:8},autoComplete:"off",children:(0,e.jsxs)(de.Z,{gutter:10,children:[(0,e.jsx)(x.Z,{span:6,children:(0,e.jsx)(Z.Z.Item,{label:"\u8BA2\u5355\u53F7",children:(0,e.jsx)(b.Z,{value:o.Sn||"",onChange:function(l){E(a()(a()({},o),{},{Sn:l.target.value}))}})})}),(0,e.jsx)(x.Z,{span:6,children:(0,e.jsx)(Z.Z.Item,{label:"\u8BA2\u5355\u72B6\u6001",children:(0,e.jsx)(F.Z,{value:o.Status||[],mode:"multiple",allowClear:!0,options:t.iK.map(function(r){return{label:r.name,value:r.id}}),onChange:function(l){E(a()(a()({},o),{},{Status:l||[]}))}})})}),(0,e.jsx)(x.Z,{span:6,children:(0,e.jsx)(Z.Z.Item,{label:"\u652F\u4ED8\u72B6\u6001",children:(0,e.jsx)(F.Z,{mode:"multiple",value:o.PaymentStatus||[],allowClear:!0,options:t.Qq.map(function(r){return{label:r.name,value:r.id}}),onChange:function(l){E(a()(a()({},o),{},{PaymentStatus:l||[]}))}})})}),(0,e.jsx)(x.Z,{span:6,children:(0,e.jsx)(Z.Z.Item,{label:"\u65F6\u95F4\u8303\u56F4",children:(0,e.jsx)(R.default.RangePicker,{format:"YYYY-MM-DD",picker:"date",allowClear:!0,value:[(g=(0,y.QW)(o.StartTime))===null||g===void 0?void 0:g.add(y.Mg,"hour"),(P=(0,y.QW)(o.EndTime))===null||P===void 0?void 0:P.add(y.Mg,"hour")],onChange:function(l){var f,z;E(a()(a()({},o),{},{StartTime:l==null||(f=l.at(0))===null||f===void 0||(f=f.add(-y.Mg,"hour"))===null||f===void 0?void 0:f.format(y.dq),EndTime:l==null||(z=l.at(1))===null||z===void 0||(z=z.add(-y.Mg,"hour"))===null||z===void 0?void 0:z.format(y.dq)}))},presets:[{label:"\u8FC7\u53BB\u4E00\u5468",value:[y.ND.utc().add(y.Mg,"hour").add(-1,"week"),y.ND.utc().add(y.Mg,"hour")]}]})})}),(0,e.jsx)(x.Z,{span:6,children:(0,e.jsx)(Z.Z.Item,{label:"\u5F85\u670D\u52A1",tooltip:"\u5DF2\u652F\u4ED8\u6216\u8005\u8D27\u5230\u4ED8\u6B3E",children:(0,e.jsx)($.Z,{checked:o.ToService||!1,onChange:function(l){E(a()(a()({},o),{},{ToService:l.target.checked}))}})})}),(0,e.jsx)(x.Z,{span:6,children:(0,e.jsx)(Z.Z.Item,{label:"\u4EA4\u4ED8\u65B9\u5F0F",children:(0,e.jsx)(F.Z,{mode:"multiple",value:o.ShippingMethodId,allowClear:!0,options:t.yd.map(function(r){return{label:r.name,value:r.id}}),onChange:function(l){E(a()(a()({},o),{},{ShippingMethodId:l}))}})})}),(0,e.jsx)(x.Z,{span:6,children:(0,e.jsx)(Z.Z.Item,{label:"\u4EA4\u4ED8\u72B6\u6001",children:(0,e.jsx)(F.Z,{mode:"multiple",value:o.DeliveryStatus||[],allowClear:!0,options:t.uc.map(function(r){return{label:r.name,value:r.id}}),onChange:function(l){E(a()(a()({},o),{},{DeliveryStatus:l||[]}))}})})}),(0,e.jsx)(x.Z,{span:6}),(0,e.jsx)(x.Z,{span:6,children:(0,e.jsx)(Z.Z.Item,{label:"\u6709\u552E\u540E",children:(0,e.jsx)($.Z,{checked:o.IsAfterSales||!1,onChange:function(l){E(a()(a()({},o),{},{IsAfterSales:l.target.checked||void 0,IsAfterSalesPending:l.target.checked?o.IsAfterSalesPending:void 0,AfterSalesStatus:l.target.checked?o.AfterSalesStatus:void 0}))}})})}),o.IsAfterSales&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(x.Z,{span:6,children:(0,e.jsx)(Z.Z.Item,{label:"\u552E\u540E\u4E2D",children:(0,e.jsx)($.Z,{checked:o.IsAfterSalesPending||!1,onChange:function(l){E(a()(a()({},o),{},{IsAfterSalesPending:l.target.checked||void 0}))}})})}),(0,e.jsx)(x.Z,{span:6,children:(0,e.jsx)(Z.Z.Item,{label:"\u552E\u540E\u72B6\u6001",children:(0,e.jsx)(F.Z,{mode:"multiple",value:o.AfterSalesStatus||[],allowClear:!0,options:t.GP.map(function(r){return{label:r.name,value:r.id}}),onChange:function(l){E(a()(a()({},o),{},{AfterSalesStatus:l||[]}))}})})})]}),(0,e.jsx)(x.Z,{span:6,children:(0,e.jsx)(L.Z,{children:(0,e.jsx)(K.ZP,{type:"primary",htmlType:"submit",onClick:function(){return c(o)},children:"\u641C\u7D22"})})}),(0,e.jsx)(x.Z,{span:6})]})})})]})},Be=function(){var C,h=(0,A.useState)({ToService:!0,ShippingMethodId:[t.sx.Delivery,t.sx.Pickup],DeliveryStatus:[t.ld.NotShipping,t.ld.Shipping],Page:1}),g=D()(h,2),P=g[0],B=g[1],M=(0,A.useState)(""),O=D()(M,2),W=O[0],d=O[1],T=(0,ee.Z)(v.x1.mallManager.orderQueryOrderPaging,{manual:!0}),q=((C=T.data)===null||C===void 0?void 0:C.data)||{},Y=(0,t.Wq)(q.Items||[],function(u){return u.CreationTime}),o=function(){T.run(a()({},P))};(0,A.useEffect)(function(){o()},[P]);var E=function(c){return(0,p.Wq)(c.Remark)?null:(0,e.jsx)(ne.Z,{title:"\u5907\u6CE8",content:c.Remark,trigger:["hover"],children:(0,e.jsx)(j.Z,{stroke:1})})},H=[{title:"\u8BA2\u5355\u53F7",render:function(c,s){return(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{children:(0,e.jsx)("b",{children:s.OrderSn||"--"})}),(0,e.jsxs)(L.Z,{direction:"horizontal",children:[(0,e.jsx)(U.Z,{color:"blue",children:(0,t.Dp)(s)}),(0,e.jsx)(U.Z,{color:"red",children:(0,t.wr)(s)}),E(s)]})]})}},{title:"\u603B\u91D1\u989D",render:function(c,s){return(0,e.jsx)(U.Z,{color:"warning",children:(0,e.jsx)("b",{children:(0,p.lb)(s.TotalPrice||0)})})}},{title:"\u652F\u4ED8\u72B6\u6001",render:function(c,s){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(se.Z,{model:s}),(s.PaidTotalPrice||0)>0&&(0,e.jsxs)("p",{style:{color:"gray"},children:["\u5DF2\u652F\u4ED8",(0,p.lb)(s.PaidTotalPrice||0)]}),(s.RefundedAmount||0)>0&&(0,e.jsxs)("p",{style:{color:"red"},children:["\u5DF2\u9000\u6B3E",(0,p.lb)(s.RefundedAmount||0)]})]})}},{title:"\u4EA4\u4ED8\u72B6\u6001",render:function(c,s){return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(X.Z,{model:s})})}},{title:"\u8BA2\u5355\u72B6\u6001",render:function(c,s){return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(I.Z,{model:s})})}},{title:"\u4E70\u5BB6\u4FE1\u606F",render:function(c,s){var r;return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(oe.Z,{model:(r=s.StoreUser)===null||r===void 0?void 0:r.User})})}},{title:"\u65F6\u95F4",render:function(c,s){return(0,e.jsx)(le.Z,{model:s})}},{title:"\u64CD\u4F5C",fixed:"right",width:100,render:function(c,s){return(0,e.jsx)(K.ZP.Group,{children:(0,e.jsx)(K.ZP,{type:"link",onClick:function(){d(s.Id||"")},children:"\u67E5\u770B"})})}}];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(te.Z,{title:"\u8BE6\u60C5",open:!(0,p.Wq)(W),onCancel:function(){d("")},footer:!1,forceRender:!0,width:"100%",children:(0,e.jsx)(k.Z,{detailId:W})}),(0,e.jsx)(Re,{query:P,onSearch:function(c){B(c)}}),(0,e.jsxs)(V.Z,{bordered:!1,loading:T.loading,children:[Y.length<=0&&(0,e.jsx)(J.Z,{}),Y.map(function(u,c){return(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"text-title",children:u.key}),(0,e.jsx)(re.Z,{rowKey:function(r){return r.Id||""},loading:T.loading,columns:H,dataSource:u.value||[],expandable:{expandedRowRender:function(r){return(0,p.G5)(r.Items)||(0,e.jsx)("div",{style:{padding:10,border:"5px dashed orange"},children:(0,e.jsx)(m.Z,{items:r.Items||[]})})}},pagination:!1})]},c)}),(0,e.jsx)("div",{className:"flex-row-right hidden",children:(0,e.jsx)(ae.Z,{showSizeChanger:!1,pageSize:20,current:P.Page,total:q.TotalCount,onChange:function(c){B(a()(a()({},P),{},{Page:c}))}})})]})]})}},85576:function(N,S,n){n.d(S,{Z:function(){return se}});var i=n(56080),a=n(38657),_=n(56745),D=n(67294),ee=n(93967),ne=n.n(ee),L=n(40974),U=n(8745),K=n(53124),te=n(35792),V=n(32409),J=n(4941),re=n(71194),ae=function(t,v){var p={};for(var j in t)Object.prototype.hasOwnProperty.call(t,j)&&v.indexOf(j)<0&&(p[j]=t[j]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,j=Object.getOwnPropertySymbols(t);m<j.length;m++)v.indexOf(j[m])<0&&Object.prototype.propertyIsEnumerable.call(t,j[m])&&(p[j[m]]=t[j[m]]);return p};const A=t=>{const{prefixCls:v,className:p,closeIcon:j,closable:m,type:k,title:ie,children:Z,footer:de}=t,x=ae(t,["prefixCls","className","closeIcon","closable","type","title","children","footer"]),{getPrefixCls:b}=D.useContext(K.E_),F=b(),R=v||b("modal"),$=(0,te.Z)(F),[y,ue,ce]=(0,re.ZP)(R,$),G=`${R}-confirm`;let Q={};return k?Q={closable:m!=null?m:!1,title:"",footer:"",children:D.createElement(V.O,Object.assign({},t,{prefixCls:R,confirmPrefixCls:G,rootPrefixCls:F,content:Z}))}:Q={closable:m!=null?m:!0,title:ie,footer:de!==null&&D.createElement(J.$,Object.assign({},t)),children:Z},y(D.createElement(L.s,Object.assign({prefixCls:R,className:ne()(ue,`${R}-pure-panel`,k&&G,k&&`${G}-${k}`,p,ce,$)},x,{closeIcon:(0,J.b)(R,j),closable:m},Q)))};var le=(0,U.i)(A),oe=n(94423);function X(t){return(0,i.ZP)((0,i.uW)(t))}const I=_.Z;I.useModal=oe.Z,I.info=function(v){return(0,i.ZP)((0,i.cw)(v))},I.success=function(v){return(0,i.ZP)((0,i.vq)(v))},I.error=function(v){return(0,i.ZP)((0,i.AQ)(v))},I.warning=X,I.warn=X,I.confirm=function(v){return(0,i.ZP)((0,i.Au)(v))},I.destroyAll=function(){for(;a.Z.length;){const v=a.Z.pop();v&&v()}},I.config=i.ai,I._InternalPanelDoNotUseOrYouWillBeFired=le;var se=I},25092:function(N,S,n){n.d(S,{Z:function(){return a}});var i=n(33733);var a=(0,i.Z)("outline","cash","IconCash",[["path",{d:"M7 9m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M14 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-1"}],["path",{d:"M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2",key:"svg-2"}]])},55046:function(N,S,n){n.d(S,{Z:function(){return a}});var i=n(33733);var a=(0,i.Z)("outline","home","IconHome",[["path",{d:"M5 12l-2 0l9 -9l9 9l-2 0",key:"svg-0"}],["path",{d:"M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7",key:"svg-1"}],["path",{d:"M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6",key:"svg-2"}]])},54666:function(N,S,n){n.d(S,{Z:function(){return a}});var i=n(33733);var a=(0,i.Z)("outline","message","IconMessage",[["path",{d:"M8 9h8",key:"svg-0"}],["path",{d:"M8 13h6",key:"svg-1"}],["path",{d:"M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z",key:"svg-2"}]])},43821:function(N,S,n){n.d(S,{Z:function(){return a}});var i=n(33733);var a=(0,i.Z)("outline","pick","IconPick",[["path",{d:"M13 8l-9.383 9.418a2.091 2.091 0 0 0 0 2.967a2.11 2.11 0 0 0 2.976 0l9.407 -9.385",key:"svg-0"}],["path",{d:"M9 3h4.586a1 1 0 0 1 .707 .293l6.414 6.414a1 1 0 0 1 .293 .707v4.586a2 2 0 1 1 -4 0v-3l-5 -5h-3a2 2 0 1 1 0 -4z",key:"svg-1"}]])},70781:function(N,S,n){n.d(S,{Z:function(){return a}});var i=n(33733);var a=(0,i.Z)("outline","truck","IconTruck",[["path",{d:"M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-0"}],["path",{d:"M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-1"}],["path",{d:"M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5",key:"svg-2"}]])}}]);
