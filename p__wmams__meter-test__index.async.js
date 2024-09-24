"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2941],{3083:function(G,p,t){var P=t(78957),D=t(83062),T=t(50545),c=t(70278),g=t(78298),y=t(97975),r=t(85893);p.Z=function(s){var M=s.title,u=s.subtitle,b=s.extra,C=s.hide_add,_=s.hide_save,e=s.hide_refresh,O=s.hide_delete,F=function(){return b?null:(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(P.Z,{direction:"horizontal",children:[_||(0,r.jsx)(D.Z,{title:"save",children:(0,r.jsx)(T.Z,{})}),O||(0,r.jsx)(D.Z,{title:"delete",children:(0,r.jsx)(c.Z,{})}),e||(0,r.jsx)(D.Z,{title:"refresh",children:(0,r.jsx)(g.Z,{})}),C||(0,r.jsx)(D.Z,{title:"add",children:(0,r.jsx)(y.Z,{})})]})})};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"p-2 mb-3 rounded-lg bg-blue-900 border-1 border-slate-800 text-white",children:(0,r.jsxs)("div",{className:"flex-row-between",children:[(0,r.jsxs)("div",{className:"w-full flex flex-row items-end gap-2",children:[(0,r.jsx)("h1",{className:"text-large font-bold",children:M}),(0,r.jsx)("div",{className:"text-yellow-500 text-large",children:u})]}),(0,r.jsxs)("div",{className:"",children:[b||null,F()]})]})})})}},51402:function(G,p,t){t.r(p),t.d(p,{default:function(){return Y}});var P=t(92398),D=t(5574),T=t.n(D),c=t(85576),g=t(78957),y=t(26412),r=t(25278),s=t(34041),M=t(96864),u=t(14726),b=t(4393),C=t(80799),_=t(13129),e=t(85893),O=function(o){var f=o.open,v=o.close,x=o.ok;return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(c.Z,{width:"80%",open:f,onCancel:function(){v()},title:"Search Meter Test",onOk:function(){},children:(0,e.jsxs)(g.Z,{direction:"vertical",style:{width:"100%"},children:[(0,e.jsx)(y.Z,{column:2,bordered:!0,items:[{label:"Meter Number",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(r.Z,{addonAfter:(0,e.jsx)(_.Z,{onClick:function(){}})})})},{label:"Meter Serial Number",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(r.Z,{addonAfter:(0,e.jsx)(_.Z,{onClick:function(){}})})})},{label:"Meter Test ID",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(r.Z,{addonAfter:(0,e.jsx)(_.Z,{onClick:function(){}})})})},{label:"Meter Test Type",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(s.Z,{defaultValue:123,style:{minWidth:300},options:[{label:"type-01",value:123}]})})},{label:"Meter Start Date From",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(M.default,{})})},{label:"To",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(M.default,{})})},{label:"Meter ID",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(r.Z,{})})},{label:"",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(g.Z,{direction:"horizontal",children:[(0,e.jsx)(u.ZP,{type:"primary",children:"Search"}),(0,e.jsx)(u.ZP,{type:"link",children:"Reset"})]})})}]}),(0,e.jsx)(b.Z,{title:"Search Result",children:(0,e.jsx)(C.Z,{})})]})})})},F=t(67294),S=t(86125),Z=t(46629),L=function(o){var f=o.open,v=o.close,x=o.ok,h=[{title:"Meter Number",render:function(m,j){return"4561321"}},{title:"Meter Serial Number",render:function(m,j){return"--"}},{title:"Meter Type",render:function(m,j){return"some type"}},{title:"Meter Commodity Code",render:function(m,j){return"xxx"}},{title:"Meter Status",render:function(m,j){return"Repairing"}},{title:"Manufacturer",render:function(m,j){return"some manufacturer"}},{title:"Model",render:function(m,j){return"--"}},{title:"Received Date/Time",render:function(m,j){return Z.ND.utc().format(Z.dq)}},{title:"Meter ID",render:function(m,j){return"123"}}];return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(c.Z,{width:"80%",open:f,onCancel:function(){v()},title:"Search Meter",onOk:function(){},children:(0,e.jsxs)(g.Z,{direction:"vertical",style:{width:"100%"},children:[(0,e.jsx)(y.Z,{column:2,bordered:!0,items:[{label:"Meter Number",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(r.Z,{addonAfter:(0,e.jsx)(_.Z,{onClick:function(){}})})})},{label:"Meter Serial Number",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(r.Z,{addonAfter:(0,e.jsx)(_.Z,{onClick:function(){}})})})},{label:"Meter ID",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(r.Z,{})})},{label:"Region",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(s.Z,{style:{minWidth:300},options:[{label:"Hong Kong Island",value:"1"}],defaultValue:"1"})})},{label:"Manufactured before",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(M.default,{})})},{label:"Date Received from",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(M.default,{})})},{label:"Date Received to",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(M.default,{})})},{label:"Water Consumption Amount",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(S.Z,{range:!0,defaultValue:[0,5e4],max:1e5})})},{label:"",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(g.Z,{direction:"horizontal",children:[(0,e.jsx)(u.ZP,{type:"primary",children:"Search"}),(0,e.jsx)(u.ZP,{type:"link",children:"Reset"})]})})}]}),(0,e.jsx)(b.Z,{title:"Search Result",children:(0,e.jsx)(C.Z,{columns:h,dataSource:[{},{},{}],pagination:!1})})]})})})};function W(){var o=(0,F.useState)(!1),f=T()(o,2),v=f[0],x=f[1];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(L,{open:v,ok:function(){return x(!1)},close:function(){return x(!1)}}),(0,e.jsx)(r.Z,{addonAfter:(0,e.jsx)(_.Z,{onClick:function(){return x(!0)}})})]})}var K=function(o){var f=o.search,v=o.test_type,x=o._test_type;return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(b.Z,{title:"General",children:(0,e.jsx)(y.Z,{bordered:!0,column:2,items:[{label:"Meter Test ID",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(r.Z,{addonAfter:(0,e.jsx)(_.Z,{onClick:function(){return f()}})})})},{label:"Meter Test Type",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(s.Z,{value:v,onChange:function(d){x&&x(d)},style:{minWidth:300},options:[{label:"CRT-Customer Requested Meter Test",value:"CRT"},{label:"IRT -Internal Requested Meter Test",value:"IRT"},{label:"NMMR -New Meter Maintenance Record",value:"NMMR"},{label:"OMMR - Old Meter Maintenance Record",value:"OMMR"},{label:"STT-Statistical Meter Test",value:"STT"}]})})},{label:"Meter No",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(W,{})})},{label:"Meter Size",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("b",{children:"100mm"})})},{label:"Created by",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("b",{children:"SYS-ENG (CCBS)on 2021/10/17 15:40"})})},{label:"Remark",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(r.Z.TextArea,{rows:3,showCount:!0,maxLength:200})})},{label:"Test Status",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("b",{children:"V_ Validated"})})},{label:"Automation ID",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("b",{children:"3154072557 CMDVTEST:CP-Completed:SYS-ENG(CCBS)"})})}]})})})},A=function(o){var f=o.search;return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(b.Z,{title:"Field Activity Information",children:(0,e.jsx)(y.Z,{bordered:!0,column:2,items:[{label:"Field Activity ID",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(r.Z,{value:"435245"})})},{label:"Customer Communication ID",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(r.Z,{disabled:!0,value:"4651321654651"})})},{label:"Removal Date/Time(of FA)",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("b",{children:"2021/10/17 15:13:57"})})},{label:"Field Activity Reason",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("b",{children:"Fl-Form l.test meter"})})},{label:"Nature of Supply(Customer Class)",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("b",{children:"RESIDENT-Resident"})})},{label:"Responsible Region",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(s.Z,{defaultValue:123,style:{minWidth:300},options:[{label:"NTW - New Territories West",value:123}]})})}]})})})},R=t(49677),N=t.n(R),z=function(o){return N()(o),(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(b.Z,{title:"Test Report Information",children:(0,e.jsx)(y.Z,{bordered:!0,column:2,items:[{label:"Test Report No",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(r.Z,{disabled:!0,value:"4651321654651"})})},{label:"Date of Meter Received by Meter Testing lab",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(M.default,{})})},{label:"Test Start Date/Time",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(M.default,{})})},{label:"Test Stop Date/Time",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(M.default,{})})},{label:"Test Rig Number",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(s.Z,{defaultValue:123,style:{minWidth:300},options:[{label:"01 - TR01",value:123}]})})},{label:"Storage Container Number",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(r.Z,{disabled:!0,value:"4651321654651"})})},{label:"Operator To test",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(s.Z,{defaultValue:123,style:{minWidth:300},options:[{label:"02 - CHIU Tat Ming",value:123}]})})},{label:"Measured Volume in tank",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(r.Z,{disabled:!0,value:"500.00"})})},{label:"Operator to check",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(s.Z,{defaultValue:123,style:{minWidth:300},options:[{label:"07 - LI Chi Hoi",value:123}]})})},{label:"Meter Reading Before Test",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(r.Z,{disabled:!0,value:"200.00"})})},{label:"Duration of meter test",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(r.Z,{disabled:!0,value:"1200"})})},{label:"Meter Reading After Test",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(r.Z,{disabled:!0,value:"680.00"})})},{label:"Mean Test FlowRate",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(r.Z,{disabled:!0,value:"1.50"})})},{label:"Difference in meter reading",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(r.Z,{disabled:!0,value:"480.00"})})},{label:"up stream pressure",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(r.Z,{disabled:!0,value:"3.5"})})},{label:"test result",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(r.Z,{disabled:!0,value:"-4.00"})})},{label:"water temperature",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(r.Z,{disabled:!0,value:"21.0"})})},{label:"Inspection Code",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(s.Z,{defaultValue:123,style:{minWidth:300},options:[{label:"07 - Meter Leaking",value:123}]})})},{label:"Room Temperature",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(r.Z,{disabled:!0,value:"25.0"})})},{label:"Unit of Counter Reading",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(s.Z,{defaultValue:123,style:{minWidth:300},options:[{label:"L - Litres",value:123}]})})},{label:"Humidity",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(r.Z,{disabled:!0,value:"65.0"})})},{label:"Remarks in test report",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(s.Z,{defaultValue:1,style:{minWidth:300},allowClear:!0,options:[{label:"01 . Cannot be tested . Counter window broken leaking",value:1},{label:"02 - Cannot be tested - Water was found leaking",value:2},{label:"03 - Reading unreliable - Digit roller(s) not in proper position",value:3},{label:"04- Reading unreliable - Digit rollers moving together",value:4},{label:"05 - Reading unreliable - Counter not registering occasionally",value:5},{label:"06 .Reading unreliable . Digit roller(s) not registering",value:6}]})})},{label:"Conductivity",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(r.Z,{disabled:!0,value:"4651321654651"})})},{label:"-",children:(0,e.jsx)(e.Fragment,{})},{label:"Turbidity",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(r.Z,{disabled:!0,value:"4651321654651"})})},{label:"-",children:(0,e.jsx)(e.Fragment,{})}]})})})},U=function(o){var f=o.test_type,v=function(){return(0,e.jsx)(b.Z,{title:"System Use",style:{marginTop:10},children:(0,e.jsx)(y.Z,{bordered:!0,column:2,items:[{span:1,label:"Automation ID to Meter Test",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(r.Z,{disabled:!0})})},{span:1,label:"-",children:(0,e.jsx)(e.Fragment,{})}]})})},x=function(){return["IRT","STT"].indexOf((f==null?void 0:f.toUpperCase())||"")>=0?(0,e.jsx)(b.Z,{title:"Additional Information",children:(0,e.jsx)(y.Z,{bordered:!0,column:2,items:[{label:"Meter Counter Reading In Received By MTL",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(r.Z,{})})},{label:"--",children:(0,e.jsx)(e.Fragment,{})}]})}):(0,e.jsx)(b.Z,{title:"Additional Information",children:(0,e.jsx)(y.Z,{bordered:!0,column:2,items:[{label:"Account Number",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(r.Z,{disabled:!0})})},{label:"Person ID",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(r.Z,{disabled:!0,value:"4651321654651"})})},{label:"Premise ID",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(r.Z,{disabled:!0,value:"4651321654651"})})},{label:"Mailing Address",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("b",{children:"G/F. DD 116 LOT 3527SD. TONG TAU PO TSUEN. SHAP PATHEUNG YUEN LONG, NEW TERRITORIES"})})},{label:"Invitation Letter Issue Date",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("b",{})})},{label:"Payment Date",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("b",{children:(0,Z.ND)().format(Z.vc)})})},{label:"Number of Day Counted",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("b",{children:"4"})})},{label:"Customer Attended The Meter Test",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(s.Z,{defaultValue:123,style:{minWidth:300},options:[{label:"YES",value:123}]})})},{label:"Is it Within 8-days Performance Peldge Target",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(s.Z,{defaultValue:123,style:{minWidth:300},options:[{label:"YES",value:123}]})})},{label:"Endorsed by",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(s.Z,{defaultValue:123,style:{minWidth:300},options:[{label:"AIM - AIM/Meter(2)",value:123}]})})}]})})};return(0,e.jsxs)(e.Fragment,{children:[x(),v()]})},B=function(){var o=(0,F.useState)(!1),f=T()(o,2),v=f[0],x=f[1],h=(0,F.useState)("NMMR"),d=T()(h,2),m=d[0],j=d[1];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(O,{open:v,close:function(){return x(!1)},ok:function(){x(!1)}}),(0,e.jsxs)(g.Z,{direction:"vertical",style:{width:"100%"},children:[(0,e.jsx)(K,{search:function(){return x(!0)},test_type:m,_test_type:j}),(0,e.jsx)(A,{search:function(){}}),(0,e.jsx)(z,{}),(0,e.jsx)(U,{test_type:m})]})]})},V=t(3083),Y=function(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(V.Z,{title:"Meter Test",subtitle:"8362434514:17264491;Customer Requested Meter Test;2021/10/17 15:40;Validated",hide_delete:!0}),(0,e.jsx)(P.Z,{type:"card",defaultActiveKey:"1",items:[{key:"1",label:"General",children:(0,e.jsx)(B,{})}]})]})}},46629:function(G,p,t){t.d(p,{AK:function(){return U},Gl:function(){return f},Kt:function(){return o},Mg:function(){return R},ND:function(){return A},On:function(){return Y},PR:function(){return x},bF:function(){return N},dq:function(){return B},mg:function(){return v},t9:function(){return V},vc:function(){return z}});var P=t(33852),D=t.n(P),T=t(27484),c=t.n(T),g=t(10285),y=t.n(g),r=t(7124),s=t.n(r),M=t(49133),u=t.n(M),b=t(50356),C=t.n(b),_=t(96036),e=t.n(_),O=t(56176),F=t.n(O),S=t(84110),Z=t.n(S),L=t(70178),W=t.n(L),K=t(66419);c().extend(e()),c().extend(Z()),c().extend(F()),c().extend(y()),c().extend(s()),c().extend(C()),c().extend(u()),c().extend(W()),c().locale("zh-cn");var A=c(),R=8,N="HH:mm",z="YYYY-MM-DD",U="MM-DD",B="YYYY-MM-DD HH:mm",V="YYYY-MM-DD HH:mm:ss",Y="dddd",o="MMMM DD A h:mm",f=function(d){var m,j=(m=v(d))===null||m===void 0?void 0:m.add(R,"hour");if(!j)return null;var I=c().utc().add(R,"hour"),$=j.diff(I,"day");return Math.abs($)>7?j.format(B):j.fromNow()},v=function(d){if((0,K.Wq)(d))return null;try{return c()(d)}catch(m){return null}},x=function(d){var m,j=(m=v(d))===null||m===void 0?void 0:m.isBefore(A().utc());return j}},66419:function(G,p,t){t.d(p,{C6:function(){return L},C7:function(){return K},CB:function(){return j},G5:function(){return b},Gk:function(){return V},IS:function(){return v},JR:function(){return _},K1:function(){return r},LW:function(){return B},M8:function(){return R},MK:function(){return re},OB:function(){return C},Sh:function(){return o},Te:function(){return e},Ti:function(){return w},W9:function(){return O},Wq:function(){return u},ZP:function(){return te},ZQ:function(){return M},Zp:function(){return f},_y:function(){return S},cQ:function(){return X},gB:function(){return J},hP:function(){return N},hU:function(){return I},iI:function(){return g},iu:function(){return ne},kv:function(){return $},kw:function(){return h},lb:function(){return ee},lk:function(){return z},mD:function(){return Y},qW:function(){return s},tq:function(){return x},uw:function(){return F},zO:function(){return Q},zd:function(){return y}});var P=t(19632),D=t.n(P),T=t(42268),c=t(91845),g={message:void 0,store:void 0,setGoodsDetailId:void 0},y=function(){var n;return self!=top||window.frames.length!=parent.frames.length||((n=self.frameElement)===null||n===void 0||(n=n.tagName)===null||n===void 0?void 0:n.toLowerCase())=="iframe"},r=function(){return/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(navigator.userAgent)},s=function(n,l,i){var E=n.at(l);return n[l]=n.at(i),n[i]=E,n},M=function(n,l,i){var E=D()(n);return i>n.length-1||i<0?E.push(l):E=[].concat(D()(E.slice(0,i)),[l],D()(E.slice(i,void 0))),E},u=function(n){return!n||n.length<=0},b=function(n){return!n||n.length<=0},C=function(n){return!n||n<=0},_=function(n){if(!(!n||n.length<=0)){var l=e(n);if(!u(l))return l==null?void 0:l.substring(0,1)}},e=function(n){var l=(0,c.N9)(n,{type:"array",pattern:"first",toneType:"none"});return l.filter(function(i){return!u(i)}).join("")},O=function(n){var l=(0,c.N9)(n,{type:"array",pattern:"pinyin",toneType:"none"});return l.filter(function(i){return!u(i)}).join("")},F=function(n){var l=(0,c.N9)(n,{type:"array",pattern:"pinyin",toneType:"none"});return l.filter(function(i){return!u(i)}).join("-").toLowerCase()},S=function(n,l,i){var E;return(E=n.data.Error)!==null&&E!==void 0&&E.Message?(w(n.data.Error.Message||"\u64CD\u4F5C\u672A\u80FD\u5982\u671F\u5B8C\u6210"),i&&i(),!1):(l&&l(),!0)},Z=function(n,l){for(var i=n,E=function(){var H=!1;if(l.forEach(function(le){var k=(0,T.Z)(i,le);k!=i&&(H=!0,i=k)}),!H)return 1};!E(););return i},L=function(n){return n.map(function(l){return l||""}).map(function(l){return Z(l,["/","\\"])}).filter(function(l){return l.length>0}).join("/")},W=function(n){return n=n.toLowerCase(),n=(0,T.Z)(n,"/"),n},K=function(n,l){return n=n||"",l=l||"",W(n)===W(l)},A="access_token",R=function(n){return localStorage.setItem(A,n)},N=function(){return localStorage.getItem(A)},z=function(){return!u(N())},U="sales-selected-store-id",B=function(n){localStorage.setItem(U,n)},V=function(){return localStorage.getItem(U)},Y=function(n){var l=(n==null?void 0:n.split("."))||[];if(!(l.length<=0))return l.at(l.length-1)},o=function(n){return!u(n)&&/^[a-zA-Z]+$/.test(n)},f=function(n){return!u(n)&&/^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)\s*$/i.test(n)};function v(){return/MicroMessenger/i.test(window.navigator.userAgent)}var x=function(n){return!u(n)&&/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(n)},h=function(n){if(n)return n.match(/\b1\d{10}\b/g)||void 0},d=function(n){return!u(n)&&/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(n)},m=function(n){return!u(n)&&/^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/.test(n)},j=function(n){return!u(n)&&/^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/.test(n)},I=function(n){return!u(n)&&/^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i.test(n)},$=function(n){if(n&&!u(n))return n},J=function(n){var l=n.filter(function(i){return!u(i)}).at(0);return l||void 0},Q=function(n,l){return n.length<=l?n:"".concat(n.substring(0,l),"...")},w=function(n){var l;if(g.message==null){alert(n);return}(l=g.message)===null||l===void 0||l.error(n)},X=function(n){var l;if(g.message==null){alert(n);return}(l=g.message)===null||l===void 0||l.success(n)},q=new Intl.NumberFormat("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),ee=function(n){return"\uFFE5".concat(q.format(n))},ae=function(n){return n.toFixed(2)},ne=function(n){return JSON.parse(JSON.stringify(n))},te=function(n){try{if(n)return JSON.parse(n)}catch(l){console.log(l)}return null},re=function(){return new Promise(function(n,l){try{navigator.geolocation.getCurrentPosition(function(i){n(i)},function(i){l(i)})}catch(i){l(i)}})}}}]);
