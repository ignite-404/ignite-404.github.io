(self.webpackChunk=self.webpackChunk||[]).push([[2482],{1288:function(ae,U,c){"use strict";var J=c(78957),y=c(83062),A=c(46629),D=c(85893);U.Z=function(C){var b,V=C.timeStr,G=C.fallback,H=C.onlyDate,i=C.prefix,k=(b=(0,A.QW)(V))===null||b===void 0?void 0:b.local();if(!k)return G||null;var M=(0,A.ND)().utc().local(),p=k.isSame(M,"year"),x=k.diff(M,"day"),P=p?k.format(A.AK):k.format(A.vc),F=function(){return(0,D.jsxs)("div",{children:[(0,D.jsxs)(J.Z,{direction:"horizontal",children:[(0,D.jsx)("div",{children:k.fromNow()}),(0,D.jsx)("div",{children:k.format(A.On)})]}),(0,D.jsx)("div",{children:k.format(A.t9)})]})};return(0,D.jsx)(y.Z,{title:F(),children:(0,D.jsxs)(J.Z,{direction:"horizontal",children:[i,(0,D.jsx)("div",{className:"inline-block cursor-pointer hover:bg-orange-500",children:H?k.format(A.vc):k.format(A.dq)})]})})}},17469:function(ae,U,c){"use strict";c.r(U),c.d(U,{default:function(){return Te}});var J=c(5574),y=c.n(J),A=c(92783),D=c(4393),C=c(67294),b=c(58409),V=c(70781),G=c(43821),H=c(97857),i=c.n(H),k=c(68421),M=c(45360),p=c(28036),x=c(11346),P=c(72269),F=c(24435),z=c(96074),T=c(30699),B=c(95813),Q=c(40411),W=c(85576),ie=c(71230),X=c(15746),w=c(40056),re=c(31156),le=c(45855),oe=c.n(le),g=c(46629),se=c(19632),E=c.n(se),Be=c(38445),K=c(65233),I=c(2487),L=c(77953),ue=c(44897),e=c(85893),de=function(v){var l=v.data,d=v.ok,u=(0,C.useState)(void 0),f=y()(u,2),o=f[0],s=f[1];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(W.Z,{title:"\u5468\u671F\u6027\u89C4\u5219",width:"50%",open:o!=null,onOk:function(){var a=l||[];d([].concat(E()(a),[o||{}])),s(void 0)},onCancel:function(){s(void 0)},children:(0,e.jsxs)(x.Z,{children:[(0,e.jsx)(x.Z.Item,{label:"\u540D\u79F0",tooltip:"\u6BD4\u5982\uFF1A\u5DE5\u4F5C\u65E5",children:(0,e.jsx)(K.Z,{value:(o==null?void 0:o.Name)||"",onChange:function(a){s(i()(i()({},o),{},{Name:a.target.value}))}})}),(0,e.jsx)(x.Z.Item,{label:"Cron\u8868\u8FBE\u5F0F",children:(0,e.jsx)(ue.Po,{locale:{everyText:"\u6BCF"},allowedDropdowns:["period","months","month-days","week-days"],allowedPeriods:["year","month","week","day"],value:(o==null?void 0:o.Cron)||"",setValue:function(a){s(i()(i()({},o),{},{Cron:a}))}})})]})}),(0,e.jsx)(D.Z,{size:"small",title:"\u5468\u671F\u6027\u89C4\u5219",extra:(0,e.jsx)(p.ZP,{onClick:function(){s({Name:"\u6B63\u5E38\u5DE5\u4F5C\u65E5",Cron:"0 0 * * 1-5"})},type:"link",children:"\u6DFB\u52A0"}),children:(0,e.jsx)(I.Z,{dataSource:l,renderItem:function(a,h){return(0,e.jsx)(I.Z.Item,{actions:[(0,e.jsx)(p.ZP,{type:"link",danger:!0,onClick:function(){var t=l||[];t=E()(t),(0,L.Z)(t,h),d(t)},children:"\u5220\u9664"})],children:(0,e.jsx)(I.Z.Item.Meta,{title:a.Name||"--",description:a.Cron||"--"})})}})})]})},ce=c(96864),N=c(78957),q=c(1288),ve=function(v){var l,d,u=v.data,f=v.ok,o=(0,C.useState)(void 0),s=y()(o,2),r=s[0],a=s[1];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(W.Z,{title:"\u7279\u6B8A\u65F6\u95F4\u6BB5",open:r!=null,onOk:function(){var n=u||[];f([].concat(E()(n),[r||{}])),a(void 0)},onCancel:function(){a(void 0)},children:(0,e.jsxs)(x.Z,{labelCol:{span:4},children:[(0,e.jsx)(x.Z.Item,{label:"\u540D\u79F0",tooltip:"\u6BD4\u5982\uFF1A\u8C03\u4F11",children:(0,e.jsx)(K.Z,{value:(r==null?void 0:r.Name)||"",onChange:function(n){a(i()(i()({},r),{},{Name:n.target.value}))}})}),(0,e.jsx)(x.Z.Item,{label:"\u65F6\u95F4\u8303\u56F4",children:(0,e.jsx)(ce.default.RangePicker,{allowClear:!1,value:[(l=(0,g.QW)(r==null?void 0:r.StartTime))===null||l===void 0?void 0:l.add(g.Mg,"hour"),(d=(0,g.QW)(r==null?void 0:r.EndTime))===null||d===void 0?void 0:d.add(g.Mg,"hour")],onChange:function(n){var t,m;a(i()(i()({},r),{},{StartTime:n==null||(t=n.at(0))===null||t===void 0||(t=t.add(-g.Mg,"hour"))===null||t===void 0?void 0:t.format(g.dq),EndTime:n==null||(m=n.at(1))===null||m===void 0||(m=m.add(-g.Mg,"hour"))===null||m===void 0?void 0:m.format(g.dq)}))},presets:[{label:"\u5C06\u67657\u5929",value:[(0,g.ND)().utc().add(g.Mg,"hour"),(0,g.ND)().utc().add(g.Mg,"hour").add(7,"d")]},{label:"\u5C06\u676514\u5929",value:[(0,g.ND)().utc().add(g.Mg,"hour"),(0,g.ND)().utc().add(g.Mg,"hour").add(14,"d")]}]})}),(0,e.jsx)(x.Z.Item,{label:"\u670D\u52A1\u72B6\u6001",children:(0,e.jsx)(A.Z,{value:r!=null&&r.Include?1:0,options:[{label:"\u4E0D\u63D0\u4F9B\u670D\u52A1",value:0},{label:"\u63D0\u4F9B\u670D\u52A1",value:1}],onChange:function(n){var t=n;a(i()(i()({},r),{},{Include:t>0}))}})})]})}),(0,e.jsxs)(D.Z,{size:"small",title:"\u4F8B\u5916\u65F6\u95F4\u6BB5",extra:(0,e.jsx)(p.ZP,{onClick:function(){a({Name:"\u4F8B\u5916\u65F6\u95F4\u6BB5"})},type:"link",children:"\u6DFB\u52A0"}),children:[(0,e.jsx)(w.Z,{message:(0,e.jsx)("span",{children:"\u5DF2\u8FC7\u671F\u65F6\u95F4\u6BB5\u8BF7\u53CA\u65F6\u5220\u9664"})}),(0,e.jsx)(I.Z,{dataSource:u,renderItem:function(n,t){return(0,e.jsx)(I.Z.Item,{actions:[(0,e.jsx)(p.ZP,{type:"link",danger:!0,onClick:function(){var j=u||[];j=E()(j),(0,L.Z)(j,t),f(j)},children:"\u5220\u9664"})],children:(0,e.jsx)(I.Z.Item.Meta,{title:(0,e.jsxs)(N.Z,{direction:"horizontal",children:[(0,e.jsx)("span",{children:n.Name||"--"}),n.Include?(0,e.jsx)(Q.Z,{status:"success",text:"\u5305\u542B"}):(0,e.jsx)(Q.Z,{status:"error",text:"\u6392\u9664"})]}),description:(0,e.jsxs)(N.Z,{direction:"horizontal",children:[(0,e.jsx)("span",{children:"\u5F00\u59CB\uFF1A"}),(0,e.jsx)(q.Z,{timeStr:n.StartTime}),(0,e.jsx)("span",{children:"\u7ED3\u675F\uFF1A"}),(0,e.jsx)(q.Z,{timeStr:n.EndTime})]})})})}})]})]})},fe=c(68351),_=c(66309),$=function(){return(0,g.ND)("00:00",g.bF)},he=function(v){var l=v.data,d=v.ok,u=(0,C.useState)(void 0),f=y()(u,2),o=f[0],s=f[1];return(0,C.useEffect)(function(){console.log("time-range",o||{})},[o]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(W.Z,{title:"\u6BCF\u5929\u670D\u52A1\u65F6\u95F4\u6BB5",open:o!=null,onOk:function(){var a=l||[];d([].concat(E()(a),[o||{}])),s(void 0)},onCancel:function(){s(void 0)},children:(0,e.jsxs)(x.Z,{labelCol:{span:4},children:[(0,e.jsx)(x.Z.Item,{label:"\u65F6\u95F4\u8303\u56F4",children:(0,e.jsx)(fe.Z.RangePicker,{allowClear:!1,format:g.bF,value:[(o==null?void 0:o.StartSecond)==null?null:$().add((o==null?void 0:o.StartSecond)||0,"second"),(o==null?void 0:o.EndSecond)==null?null:$().add((o==null?void 0:o.EndSecond)||0,"second")],onChange:function(a){var h,n,t,m;console.log(a==null||(h=a.at(0))===null||h===void 0?void 0:h.format(g.dq),a==null||(n=a.at(1))===null||n===void 0?void 0:n.format(g.dq));var j=$();s(i()(i()({},o),{},{StartSecond:Math.abs((a==null||(t=a.at(0))===null||t===void 0?void 0:t.diff(j,"second"))||0),EndSecond:Math.abs((a==null||(m=a.at(1))===null||m===void 0?void 0:m.diff(j,"second"))||0)}))}})}),(0,e.jsx)(x.Z.Item,{label:"\u53EF\u670D\u52A1\u6570\u91CF",children:(0,e.jsx)(F.Z,{changeOnWheel:!0,min:0,value:(o==null?void 0:o.TotalTickets)||0,onChange:function(a){s(i()(i()({},o),{},{TotalTickets:a||void 0}))}})})]})}),(0,e.jsx)(D.Z,{size:"small",title:"\u6BCF\u5929\u670D\u52A1\u65F6\u95F4\u6BB5",extra:(0,e.jsx)(p.ZP,{onClick:function(){s({})},type:"link",children:"\u6DFB\u52A0"}),children:(0,e.jsx)(I.Z,{dataSource:l,renderItem:function(a,h){return(0,e.jsx)(I.Z.Item,{actions:[(0,e.jsx)(p.ZP,{type:"link",danger:!0,onClick:function(){var t=l||[];t=E()(t),(0,L.Z)(t,h),d(t)},children:"\u5220\u9664"})],children:(0,e.jsx)(I.Z.Item.Meta,{title:"",description:(0,e.jsx)("div",{children:(0,e.jsxs)(N.Z,{direction:"horizontal",children:[(0,e.jsx)(_.Z,{children:$().add(a.StartSecond||0,"second").format(g.bF)||"--"}),(0,e.jsx)("b",{children:"\u5230"}),(0,e.jsx)(_.Z,{children:$().add(a.EndSecond||0,"second").format(g.bF)||"--"})]})})})})}})})]})},me=function(l,d){var u=(0,g.QW)(l.StartTime),f=(0,g.QW)(l.EndTime),o=u==null||u.isBefore(d)||u.isSame(d,"date"),s=f==null||f.isAfter(d)||f.isSame(d,"date");return o&&s},xe=function(l,d,u,f){try{for(var o=oe().parseExpression(l,{currentDate:d.format(g.dq),iterator:!0}),s=[],r=0;o.hasNext()&&(++r,!(r>=f));){var a=o.next(),h=(0,g.ND)(a.value.toDate());if(h.isAfter(u))break;s.push(h)}return s}catch(n){return console.log(n),[]}},ee=function(v){var l=v.data,d=v.ok,u=(0,C.useState)(!1),f=y()(u,2),o=f[0],s=f[1],r=g.ND.utc(),a=r.add(30,"day"),h=function(S){return{name:S.Name,dates:xe(S.Cron||"",r,a,1e3)}},n=(0,C.useMemo)(function(){var j;return(j=l.CronRules)===null||j===void 0?void 0:j.map(h)},[l.CronRules,r,a])||[],t=function(S){var Z=n.filter(function(O){return O.dates.some(function(R){return R.isSame(S,"date")})});return(0,e.jsx)(e.Fragment,{children:Z.map(function(O){return(0,e.jsx)("div",{style:{},children:(0,e.jsx)(Q.Z,{status:"success",text:O.name||"--"})})})})},m=function(S){var Z,O=((Z=l.ExceptionTimes)===null||Z===void 0?void 0:Z.filter(function(R){return me(R,S)}))||[];return O.length<=0?null:O.map(function(R){return(0,e.jsx)("div",{style:{},children:(0,e.jsx)(Q.Z,{text:R.Name,status:R.Include?"success":"error"})})})};return(0,C.useEffect)(function(){console.log(n.flatMap(function(j){return j.dates}).map(function(j){return j.format(g.dq)}))},[n]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(W.Z,{title:"\u670D\u52A1\u65F6\u95F4\u8BA1\u5212",open:o,onCancel:function(){return s(!1)},onOk:function(){return s(!1)},width:"80%",destroyOnClose:!0,forceRender:!0,children:(0,e.jsxs)(ie.Z,{gutter:[10,10],children:[(0,e.jsx)(X.Z,{span:12,children:(0,e.jsx)(de,{data:l.CronRules||[],ok:function(S){d(i()(i()({},l),{},{CronRules:S}))}})}),(0,e.jsx)(X.Z,{span:12,children:(0,e.jsx)(he,{data:l.TimeRanges||[],ok:function(S){d(i()(i()({},l),{},{TimeRanges:S}))}})}),(0,e.jsx)(z.Z,{type:"horizontal",orientation:"left",children:"\u4F8B\u5916\u60C5\u51B5"}),(0,e.jsx)(X.Z,{span:12,children:(0,e.jsx)(ve,{data:l.ExceptionTimes||[],ok:function(S){d(i()(i()({},l),{},{ExceptionTimes:S}))}})})]})}),(0,e.jsxs)(D.Z,{size:"small",title:"\u670D\u52A1\u65F6\u95F4\u8BA1\u5212\u8868",style:{marginTop:10},extra:(0,e.jsx)(p.ZP,{type:"link",onClick:function(){s(!0)},children:"\u7F16\u8F91"}),children:[(0,e.jsx)(w.Z,{style:{marginBottom:10},type:"info",message:"\u4E3A\u4E86\u6027\u80FD\u8003\u8651\uFF0C\u53EA\u5C55\u793A\u4E86\u8FD1\u671F\u65F6\u95F4\u8BA1\u5212"}),(0,e.jsx)(re.Z,{mode:"month",onSelect:function(S){console.log(S.format(g.dq))},cellRender:function(S,Z){return(0,e.jsxs)(e.Fragment,{children:[t(S),m(S)]})}})]})]})},ne=function(v){var l=v.data,d=v.onChange,u=v.unit;if(!l)return null;var f=u||"kg";return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(N.Z,{direction:"horizontal",size:"small",style:{width:"100%"},children:[(0,e.jsx)(F.Z,{changeOnWheel:!0,min:0,addonAfter:"".concat(f,"\u4EE5\u5185"),value:l.StartingAmount,onChange:function(s){d(i()(i()({},l),{},{StartingAmount:s||0}))}}),(0,e.jsx)(F.Z,{changeOnWheel:!0,min:0,addonAfter:"\u5143",value:l.StartingPrice,onChange:function(s){d(i()(i()({},l),{},{StartingPrice:s||0}))}}),(0,e.jsx)(F.Z,{changeOnWheel:!0,min:0,addonBefore:"\u6BCF\u589E\u52A0",addonAfter:f,value:l.AddedUnitAmount,onChange:function(s){d(i()(i()({},l),{},{AddedUnitAmount:s||0}))}}),(0,e.jsx)(F.Z,{changeOnWheel:!0,min:0,addonBefore:"\u589E\u52A0",addonAfter:"\u5143",value:l.AddedUnitPrice,onChange:function(s){d(i()(i()({},l),{},{AddedUnitPrice:s||0}))}})]})})},ge=function(){var v=(0,k.Z)(T.x1.mallManager.deliverySettingsGetShortDistanceDeliverySettings,{manual:!0,onSuccess:function(t){var m;f(((m=t.data)===null||m===void 0?void 0:m.Data)||{})}}),l=(0,C.useState)({}),d=y()(l,2),u=d[0],f=d[1],o=(0,C.useState)(!1),s=y()(o,2),r=s[0],a=s[1],h=function(){a(!0),T.x1.mallManager.deliverySettingsSaveShortDistanceDeliverySettings(i()({},u)).then(function(t){(0,B._y)(t,function(){M.ZP.success("\u4FDD\u5B58\u6210\u529F"),v.run({})})}).finally(function(){a(!1)})};return(0,C.useEffect)(function(){v.run({})},[]),(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{style:{marginBottom:20,display:"flex",flexDirection:"row",alignItems:"center",justifyItems:"center",justifyContent:"space-between"},children:[(0,e.jsx)("h2",{children:"\u540C\u57CE\u914D\u9001"}),(0,e.jsx)(p.ZP,{type:"primary",loading:r,onClick:function(){h()},children:"\u4FDD\u5B58\u8BBE\u7F6E"})]}),(0,e.jsxs)("div",{style:{marginBottom:10},children:[(0,e.jsxs)(x.Z,{labelCol:{span:3},style:{marginBottom:10},children:[(0,e.jsx)(x.Z.Item,{label:"\u652F\u6301\u540C\u57CE\u914D\u9001",tooltip:"\u7528\u6237\u53EF\u5728\u8D2D\u4E70\u5546\u54C1\u65F6\u9009\u62E9\u8BE5\u914D\u9001\u65B9\u5F0F",children:(0,e.jsx)(P.Z,{loading:r||v.loading,checked:u.Enabled,onChange:function(t){f(i()(i()({},u),{},{Enabled:t}))}})}),(0,e.jsx)(x.Z.Item,{label:"\u652F\u6301\u8D27\u5230\u4ED8\u6B3E",tooltip:"\u9700\u8981\u4E0A\u95E8\u6536\u6B3E",children:(0,e.jsx)(P.Z,{checked:u.OfflinePaymentSupported,onChange:function(t){f(i()(i()({},u),{},{OfflinePaymentSupported:t}))}})}),(0,e.jsx)(x.Z.Item,{label:"\u8BA2\u5355\u6700\u4F4E\u6D88\u8D39",children:(0,e.jsx)(F.Z,{min:0,value:u.MinimalOrderPrice,onChange:function(t){f(i()(i()({},u),{},{MinimalOrderPrice:t}))}})}),(0,e.jsx)(x.Z.Item,{label:"\u6700\u8FDC\u914D\u9001\u8DDD\u79BB",children:(0,e.jsx)(F.Z,{min:0,value:u.MaxDistance,onChange:function(t){f(i()(i()({},u),{},{MaxDistance:t}))}})}),(0,e.jsx)(x.Z.Item,{label:"\u8BA1\u8D39\u65B9\u5F0F",children:(0,e.jsx)(A.Z,{value:u.CalculatePriceType||void 0,onChange:function(t){f(i()(i()({},u),{},{CalculatePriceType:t==null?void 0:t.toString()}))},options:[{label:"\u514D\u8D39",value:"free"},{label:"\u9636\u68AF\u8BA1\u8D39",value:"tiered"}]})}),u.CalculatePriceType=="tiered"&&(0,e.jsx)(x.Z.Item,{label:"\u9636\u68AF\u8BA1\u8D39",children:(0,e.jsx)(ne,{unit:"km",data:u.TieredPrice||{},onChange:function(t){f(i()(i()({},u),{},{TieredPrice:t}))}})})]}),(0,e.jsx)(z.Z,{type:"horizontal"}),(0,e.jsx)(ee,{data:u.ServiceTime||{},ok:function(t){f(i()(i()({},u),{},{ServiceTime:i()({},t)}))}})]})]})})},je=c(57731),Ce=c(83062),Y=c(35291),Se=c(63920),Ze=c(97975),pe=c(92648),ye=c(48258),ke=function(v){var l=v.data,d=v.onChange,u=v.style,f=v.placeholder;if(!l)return null;var o=(0,ye.q)(),s=o.map(function(a){return(0,Y.M3)(a)}),r=function(h){var n=[h.ProvinceId||"",h.CityId||"",h.AreaId||""].filter(function(t){return!(0,B.Wq)(t)});if(!(n.length<=0))return n};return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(pe.Z,{style:i()({minWidth:200},u),options:s,value:r(l),placeholder:f||"\u8BF7\u9009\u62E9\u533A\u57DF",changeOnSelect:!0,allowClear:!0,onChange:function(h){var n,t,m,j={ProvinceId:h==null||(n=h.at(0))===null||n===void 0||(n=n.valueOf())===null||n===void 0?void 0:n.toString(),CityId:h==null||(t=h.at(1))===null||t===void 0||(t=t.valueOf())===null||t===void 0?void 0:t.toString(),AreaId:h==null||(m=h.at(2))===null||m===void 0||(m=m.valueOf())===null||m===void 0?void 0:m.toString()};d(j)}})})},te=function(v){var l=v.area_list,d=v.ok,u=v.style,f=l.map(function(o){return(0,Y.tv)(o)});return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("div",{className:"p-x border-1 border-transparent hover:border-slate-300",children:(0,e.jsxs)(N.Z,{direction:"vertical",children:[l==null?void 0:l.map(function(o,s){return(0,e.jsxs)(N.Z,{direction:"horizontal",children:[(0,e.jsx)(ke,{style:u,data:o,onChange:function(a){var h=(0,Y.tv)(a);if(f.indexOf(h)>=0){var n;(n=B.iI.message)===null||n===void 0||n.error("\u5730\u533A\u5DF2\u5B58\u5728");return}var t=E()(l);t[s]=a,d(t)}}),(0,e.jsx)(Ce.Z,{title:"\u5220\u9664",children:(0,e.jsx)(p.ZP,{size:"small",shape:"circle",icon:(0,e.jsx)(Se.Z,{stroke:1}),danger:!0,onClick:function(){var a=E()(l);(0,L.Z)(a,s),d(a)}})})]})}),(0,e.jsx)(p.ZP,{size:"small",type:"dashed",block:!0,icon:(0,e.jsx)(Ze.Z,{stroke:1}),onClick:function(){var s=[].concat(E()(l),[{}]);d(s)},children:"\u6DFB\u52A0"})]})})})},De=c(80799),Ee=function(v){var l=v.delivery_rules,d=v.ok,u=[{title:"\u5730\u533A",render:function(o,s,r){return s.IsDefault?(0,e.jsx)("span",{children:"\u6240\u6709\u5730\u533A"}):(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(te,{area_list:s.Areas||[],ok:function(h){var n=E()(l);n[r].Areas=h||[],d(n)}})})}},{title:"\u9636\u68AF\u5B9A\u4EF7",render:function(o,s,r){return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(ne,{unit:"kg",data:s.TieredPrice||{},onChange:function(h){var n=E()(l);n[r].TieredPrice=h||{},d(n)}})})}},{title:"\u9ED8\u8BA4",render:function(o,s,r){return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(P.Z,{checked:s.IsDefault,onChange:function(h){var n=E()(l);n.forEach(function(t){return t.IsDefault=!1}),n[r].IsDefault=h,d(n)}})})}},{title:"--",render:function(o,s,r){return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(p.ZP.Group,{children:(0,e.jsx)(p.ZP,{danger:!0,type:"primary",onClick:function(){},children:"\u5220\u9664"})})})}}];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(De.Z,{columns:u,dataSource:l||[],pagination:!1}),(0,e.jsx)(p.ZP,{style:{marginTop:10,marginBottom:10},block:!0,type:"dashed",onClick:function(){d([].concat(E()(l),[{Areas:[],TieredPrice:{StartingAmount:0,StartingPrice:0,AddedUnitPrice:0,AddedUnitAmount:0},IsDefault:!1}]))},children:"\u6DFB\u52A0\u5730\u533A\u90AE\u8D39\u8BBE\u7F6E"})]})},Ae=function(v){var l=v.show,d=v.data,u=v.hide,f=v.ok,o=(0,C.useState)({}),s=y()(o,2),r=s[0],a=s[1],h=(0,C.useState)(!1),n=y()(h,2),t=n[0],m=n[1],j=function(Z){m(!0),T.x1.mallManager.freightTemplateSave(i()(i()({},Z),{},{RulesJson:JSON.stringify(Z.Rules||[]),ExcludedAreaJson:JSON.stringify(Z.ExcludedAreas||[])})).then(function(O){(0,B._y)(O,function(){M.ZP.success("\u4FDD\u5B58\u6210\u529F"),f()})}).finally(function(){m(!1)})};return(0,C.useEffect)(function(){a(d?i()(i()({},d),{},{Rules:(0,B.Jp)(d.RulesJson)||[],ExcludedAreas:(0,B.Jp)(d.ExcludedAreaJson)||[]}):{})},[d]),(0,C.useEffect)(function(){console.log(r)},[r]),(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(W.Z,{forceRender:!0,confirmLoading:t,width:"95%",open:l,title:"\u8FD0\u8D39\u6A21\u677F",onOk:function(){j(r)},onCancel:function(){u()},children:(0,e.jsxs)(x.Z,{labelCol:{span:3},children:[(0,e.jsx)(x.Z.Item,{label:"\u540D\u79F0",children:(0,e.jsx)(K.Z,{value:r.Name||"",onChange:function(Z){a(i()(i()({},r),{},{Name:Z.target.value}))}})}),(0,e.jsx)(x.Z.Item,{label:"\u63CF\u8FF0",children:(0,e.jsx)(K.Z.TextArea,{value:r.Description||"",onChange:function(Z){a(i()(i()({},r),{},{Description:Z.target.value}))}})}),(0,e.jsx)(x.Z.Item,{label:"\u5305\u90AE\u4EF7\u683C",children:(0,e.jsx)(F.Z,{value:r.FreeShippingMinOrderTotalPrice,onChange:function(Z){a(i()(i()({},r),{},{FreeShippingMinOrderTotalPrice:Z||0}))}})}),(0,e.jsx)(x.Z.Item,{label:"\u5730\u533A\u8BBE\u7F6E",children:(0,e.jsx)(Ee,{delivery_rules:r.Rules||[],ok:function(Z){a(i()(i()({},r),{},{Rules:Z}))}})}),(0,e.jsx)(x.Z.Item,{label:"\u4E0D\u914D\u9001\u5730\u533A",children:(0,e.jsx)(te,{area_list:r.ExcludedAreas||[],ok:function(Z){a(i()(i()({},r),{},{ExcludedAreas:Z}))}})})]})})})},Fe=function(){var v,l=(0,k.Z)(T.x1.mallManager.freightTemplateQueryAll,{manual:!0}),d=((v=l.data)===null||v===void 0||(v=v.data)===null||v===void 0?void 0:v.Data)||[],u=(0,C.useState)(void 0),f=y()(u,2),o=f[0],s=f[1],r=[{dataIndex:"index",valueType:"indexBorder",width:100},{title:"\u540D\u79F0",render:function(h,n){return n.Name||"--"}},{title:"\u63CF\u8FF0",render:function(h,n){return n.Description||"--"}},{title:"\u7F16\u8F91",width:200,render:function(h,n){return(0,e.jsx)(p.ZP,{type:"link",onClick:function(){s(i()({},n))},children:"\u7F16\u8F91"})}}];return(0,C.useEffect)(function(){l.run({})},[]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Ae,{show:o!=null,data:o||{},ok:function(){l.run({}),s(void 0)},hide:function(){s(void 0)}}),(0,e.jsx)(je.Z,{style:{},loading:l.loading,columns:r,dataSource:d,pagination:!1,search:!1,toolbar:{title:"\u8FD0\u8D39\u6A21\u677F",settings:[]},toolBarRender:function(){return[(0,e.jsx)(p.ZP,{type:"link",onClick:function(){s({})},children:"\u65B0\u589E"})]}})]})},Ie=function(){var v=(0,k.Z)(T.x1.mallManager.deliverySettingsGetExpressSettings,{manual:!0,onSuccess:function(t){var m;f(((m=t.data)===null||m===void 0?void 0:m.Data)||{})}}),l=(0,C.useState)({}),d=y()(l,2),u=d[0],f=d[1],o=(0,C.useState)(!1),s=y()(o,2),r=s[0],a=s[1],h=function(){a(!0),T.x1.mallManager.deliverySettingsSaveExpressSettings(i()({},u)).then(function(t){(0,B._y)(t,function(){M.ZP.success("\u4FDD\u5B58\u6210\u529F"),v.run({})})}).finally(function(){a(!1)})};return(0,C.useEffect)(function(){v.run({})},[]),(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{style:{},children:[(0,e.jsxs)("div",{style:{marginBottom:20,display:"flex",flexDirection:"row",alignItems:"center",justifyItems:"center",justifyContent:"space-between"},children:[(0,e.jsx)("h2",{children:"\u90AE\u5BC4"}),(0,e.jsx)(p.ZP,{type:"primary",loading:r,onClick:function(){h()},children:"\u4FDD\u5B58\u8BBE\u7F6E"})]}),(0,e.jsxs)(x.Z,{labelCol:{span:3},style:{marginBottom:10},children:[(0,e.jsx)(x.Z.Item,{label:"\u652F\u6301\u5FEB\u9012\u90AE\u5BC4",tooltip:"\u7528\u6237\u53EF\u5728\u8D2D\u4E70\u5546\u54C1\u65F6\u9009\u62E9\u8BE5\u914D\u9001\u65B9\u5F0F",children:(0,e.jsx)(P.Z,{loading:r||v.loading,checked:u.Enabled,onChange:function(t){f(i()(i()({},u),{},{Enabled:t}))}})}),(0,e.jsx)(x.Z.Item,{label:"\u652F\u6301\u8D27\u5230\u4ED8\u6B3E",tooltip:"\u9700\u8981\u4E0A\u95E8\u6536\u6B3E",children:(0,e.jsx)(P.Z,{checked:u.OfflinePaymentSupported,onChange:function(t){f(i()(i()({},u),{},{OfflinePaymentSupported:t}))}})})]}),(0,e.jsx)(z.Z,{type:"horizontal"}),(0,e.jsx)(Fe,{})]})})},Pe=function(){var v=(0,k.Z)(T.x1.mallManager.pickupGetSettings,{manual:!0,onSuccess:function(t){var m;f(((m=t.data)===null||m===void 0?void 0:m.Data)||{})}}),l=(0,C.useState)({}),d=y()(l,2),u=d[0],f=d[1],o=(0,C.useState)(!1),s=y()(o,2),r=s[0],a=s[1],h=function(){a(!0),T.x1.mallManager.pickupSaveSettings(i()({},u)).then(function(t){(0,B._y)(t,function(){M.ZP.success("\u4FDD\u5B58\u6210\u529F"),v.run({})})}).finally(function(){a(!1)})};return(0,C.useEffect)(function(){v.run({})},[]),(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{style:{marginBottom:20,display:"flex",flexDirection:"row",alignItems:"center",justifyItems:"center",justifyContent:"space-between"},children:[(0,e.jsx)("h2",{children:"\u81EA\u63D0"}),(0,e.jsx)(p.ZP,{type:"primary",loading:r,onClick:function(){h()},children:"\u4FDD\u5B58\u8BBE\u7F6E"})]}),(0,e.jsxs)("div",{style:{marginBottom:10},children:[(0,e.jsxs)(x.Z,{labelCol:{span:3},style:{marginBottom:10},children:[(0,e.jsx)(x.Z.Item,{label:"\u652F\u6301\u5BA2\u6237\u81EA\u63D0",tooltip:"\u7528\u6237\u53EF\u5728\u8D2D\u4E70\u5546\u54C1\u65F6\u9009\u62E9\u81EA\u63D0",children:(0,e.jsx)(P.Z,{loading:r||v.loading,checked:u.Enabled,onChange:function(t){f(i()(i()({},u),{},{Enabled:t}))}})}),(0,e.jsx)(x.Z.Item,{label:"\u652F\u6301\u8D27\u5230\u4ED8\u6B3E",tooltip:"\u9700\u8981\u4E0A\u95E8\u6536\u6B3E",children:(0,e.jsx)(P.Z,{checked:u.OfflinePaymentSupported,onChange:function(t){f(i()(i()({},u),{},{OfflinePaymentSupported:t}))}})})]}),(0,e.jsx)(z.Z,{type:"horizontal"}),(0,e.jsx)(ee,{data:u.ServiceTime||{},ok:function(t){f(i()(i()({},u),{},{ServiceTime:i()({},t)}))}})]})]})})},Te=function(){var v=(0,C.useState)("express"),l=y()(v,2),d=l[0],u=l[1];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(A.Z,{style:{marginBottom:10},size:"large",value:d,options:[{label:"\u90AE\u5BC4",value:"express",icon:(0,e.jsx)(b.Z,{stroke:1})},{label:"\u540C\u57CE\u914D\u9001",value:"delivery",icon:(0,e.jsx)(V.Z,{stroke:1})},{label:"\u95E8\u5E97\u81EA\u63D0",value:"pickup",icon:(0,e.jsx)(G.Z,{stroke:1})}],onChange:function(o){u(o)}}),(0,e.jsxs)(D.Z,{size:"small",children:[d=="express"&&(0,e.jsx)(Ie,{}),d=="delivery"&&(0,e.jsx)(ge,{}),d=="pickup"&&(0,e.jsx)(Pe,{})]})]})}},37281:function(){}}]);
