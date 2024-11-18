"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[763],{3083:function(w,O,e){var B=e(50545),p=e(70278),A=e(78298),s=e(97975),f=e(78957),g=e(83062),o=e(85893);O.Z=function(d){var m=d.title,l=d.subtitle,M=d.extra,U=d.hide_add,W=d.hide_save,T=d.hide_refresh,C=d.hide_delete,Z=function(){return M?null:(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(f.Z,{direction:"horizontal",children:[W||(0,o.jsx)(g.Z,{title:"save",children:(0,o.jsx)(B.Z,{stroke:1})}),C||(0,o.jsx)(g.Z,{title:"delete",children:(0,o.jsx)(p.Z,{stroke:1})}),T||(0,o.jsx)(g.Z,{title:"refresh",children:(0,o.jsx)(A.Z,{stroke:1})}),U||(0,o.jsx)(g.Z,{title:"add",children:(0,o.jsx)(s.Z,{stroke:1})})]})})};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"mb-3 rounded-lg border-1 border-slate-800 bg-blue-900 p-2 text-white",children:(0,o.jsxs)("div",{className:"flex-row-between",children:[(0,o.jsxs)("div",{className:"flex w-full flex-row items-end gap-2",children:[(0,o.jsx)("h1",{className:"text-large font-bold",children:m}),(0,o.jsx)("div",{className:"text-large text-yellow-500",children:l})]}),(0,o.jsxs)("div",{className:"",children:[M||null,Z()]})]})})})}},45709:function(w,O,e){e.r(O),e.d(O,{default:function(){return R}});var B=e(5574),p=e.n(B),A=e(3083),s=e(46629),f=e(15741),g=e(97975),o=e(78957),d=e(83062),m=e(14726),l=e(85418),M=e(4393),U=e(80799),W=e(67294),T=e.p+"static/flow-design.64f87826.png",C=e(13129),Z=e(85576),S=e(26412),h=e(65233),t=e(85893),L=function(D){var y=D.open,x=D.close,v=D.ok;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(Z.Z,{width:"80%",open:y,onCancel:function(){x()},title:"Edit workflow",onOk:function(){},children:(0,t.jsxs)(o.Z,{direction:"vertical",style:{width:"100%"},children:[(0,t.jsx)(S.Z,{column:1,bordered:!0,items:[{label:"Flow ID",children:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(h.Z,{})})},{label:"Created by",children:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(h.Z,{addonAfter:(0,t.jsx)(C.Z,{stroke:1})})})},{label:"Workflow Template Name",children:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(h.Z,{})})}]}),(0,t.jsx)("img",{src:T,alt:"",className:"h-auto w-full"})]})})})},N=function(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(M.Z,{title:"Search",children:(0,t.jsx)(S.Z,{column:2,bordered:!0,items:[{label:"Flow ID",children:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(h.Z,{})})},{label:"Created by",children:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(h.Z,{addonAfter:(0,t.jsx)(C.Z,{stroke:1})})})},{label:"Workflow Template Name",children:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(h.Z,{})})},{label:"",children:(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(o.Z,{direction:"horizontal",children:[(0,t.jsx)(m.ZP,{type:"primary",children:"Search"}),(0,t.jsx)(m.ZP,{type:"link",children:"Reset"})]})})}]})})})},R=function(){var D=(0,W.useState)(!1),y=p()(D,2),x=y[0],v=y[1],F=[{title:"Flow ID",render:function(_,E){return(0,t.jsx)("a",{className:"text-blue-600",children:"#123"})}},{title:"Template Name",render:function(_,E){return(0,t.jsx)("div",{className:"text-overline",children:"template name"})}},{title:"Template Code",render:function(_,E){return"800"}},{title:"Version",render:function(_,E){return"2"}},{title:"Created Date/Time",render:function(_,E){return s.ND.utc().format(s.dq)}},{title:"Updated Date/Time",render:function(_,E){return s.ND.utc().format(s.dq)}},{title:"Actions",render:function(_,E){return(0,t.jsx)("div",{children:(0,t.jsxs)(o.Z,{direction:"horizontal",children:[(0,t.jsx)(d.Z,{title:"edit",children:(0,t.jsx)(m.ZP,{size:"small",icon:(0,t.jsx)(f.Z,{stroke:1}),type:"dashed",onClick:function(){v(!0)}})}),(0,t.jsx)(m.ZP,{size:"small",type:"link",onClick:function(){v(!0)},children:"Authorize"}),(0,t.jsx)(l.Z.Button,{size:"small",type:"link",menu:{items:[{key:"del",label:"Delete",danger:!0}]},children:"More"})]})})}}];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(L,{open:x,ok:function(){return v(!1)},close:function(){return v(!1)}}),(0,t.jsxs)(o.Z,{direction:"vertical",style:{width:"100%"},children:[(0,t.jsx)(A.Z,{title:"Workflow Management",extra:(0,t.jsx)("span",{})}),(0,t.jsx)(N,{}),(0,t.jsx)(M.Z,{title:"Workflow List",extra:(0,t.jsx)(m.ZP,{size:"small",icon:(0,t.jsx)(g.Z,{stroke:1}),onClick:function(){return v(!0)}}),children:(0,t.jsx)(U.Z,{columns:F,dataSource:[{id:"",type:""},{id:"",type:""},{id:"",type:""}],rowSelection:{}})})]})]})}},46629:function(w,O,e){e.d(O,{AK:function(){return c},Gl:function(){return $},Kt:function(){return Y},Mg:function(){return x},ND:function(){return y},On:function(){return K},bF:function(){return v},dq:function(){return _},jV:function(){return H},mg:function(){return z},t9:function(){return E},vc:function(){return F}});var B=e(33852),p=e.n(B),A=e(27484),s=e.n(A),f=e(10285),g=e.n(f),o=e(7124),d=e.n(o),m=e(49133),l=e.n(m),M=e(50356),U=e.n(M),W=e(66607),T=e.n(W),C=e(96036),Z=e.n(C),S=e(56176),h=e.n(S),t=e(84110),L=e.n(t),N=e(70178),R=e.n(N),D=e(66419);s().extend(Z()),s().extend(L()),s().extend(h()),s().extend(g()),s().extend(d()),s().extend(U()),s().extend(l()),s().extend(T()),s().extend(R()),s().locale("zh-cn");var y=s(),x=8,v="HH:mm",F="YYYY-MM-DD",c="MM-DD",_="YYYY-MM-DD HH:mm",E="YYYY-MM-DD HH:mm:ss",K="dddd",Y="MMMM DD A h:mm",$=function(I){var j,P=(j=z(I))===null||j===void 0?void 0:j.add(x,"hour");if(!P)return null;var b=s().utc().add(x,"hour");P.isToday(),P.isYesterday(),P.isBetween(b.startOf("week"),b.endOf("week"));var J=P.diff(b,"day");return Math.abs(J)>7?P.format(_):P.fromNow()},z=function(I){if((0,D.Wq)(I))return null;try{return s()(I)}catch(j){return null}},H=function(I){var j;return(j=z(I))===null||j===void 0?void 0:j.isBefore(y().utc())}},66419:function(w,O,e){e.d(O,{C6:function(){return t},C7:function(){return N},CB:function(){return I},G5:function(){return M},Gk:function(){return c},IS:function(){return Y},JR:function(){return W},Jp:function(){return tn},K1:function(){return o},LW:function(){return F},M8:function(){return D},MK:function(){return an},OB:function(){return U},Te:function(){return T},Ti:function(){return Q},W9:function(){return C},Wq:function(){return l},ZQ:function(){return m},Zp:function(){return K},_y:function(){return S},cQ:function(){return X},gB:function(){return b},hP:function(){return y},hU:function(){return j},iI:function(){return f},iu:function(){return en},kv:function(){return P},kw:function(){return z},lb:function(){return nn},lj:function(){return rn},lk:function(){return x},mD:function(){return _},qW:function(){return d},tq:function(){return $},uw:function(){return Z},zO:function(){return J},zd:function(){return g}});var B=e(19632),p=e.n(B),A=e(42268),s=e(91845),f={message:void 0,store:void 0,setGoodsDetailId:void 0},g=function(){var n;return self!=top||window.frames.length!=parent.frames.length||((n=self.frameElement)===null||n===void 0||(n=n.tagName)===null||n===void 0?void 0:n.toLowerCase())=="iframe"},o=function(){return/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(navigator.userAgent)},d=function(n,r,a){var u=n.at(r);return n[r]=n.at(a),n[a]=u,n},m=function(n,r,a){var u=p()(n);return a>n.length-1||a<0?u.push(r):u=[].concat(p()(u.slice(0,a)),[r],p()(u.slice(a,void 0))),u},l=function(n){return!n||n.length<=0},M=function(n){return!n||n.length<=0},U=function(n){return!n||n<=0},W=function(n){if(!(!n||n.length<=0)){var r=T(n);if(!l(r))return r==null?void 0:r.substring(0,1)}},T=function(n){var r=(0,s.N9)(n,{type:"array",pattern:"first",toneType:"none"});return r.filter(function(a){return!l(a)}).join("")},C=function(n){var r=(0,s.N9)(n,{type:"array",pattern:"pinyin",toneType:"none"});return r.filter(function(a){return!l(a)}).join("")},Z=function(n){var r=(0,s.N9)(n,{type:"array",pattern:"pinyin",toneType:"none"});return r.filter(function(a){return!l(a)}).join("-").toLowerCase()},S=function(n,r,a){var u;return(u=n.data.Error)!==null&&u!==void 0&&u.Message?(Q(n.data.Error.Message||"\u64CD\u4F5C\u672A\u80FD\u5982\u671F\u5B8C\u6210"),a&&a(),!1):(r&&r(),!0)},h=function(n,r){for(var a=n,u=function(){var V=!1;if(r.forEach(function(on){var k=(0,A.Z)(a,on);k!=a&&(V=!0,a=k)}),!V)return 1};!u(););return a},t=function(n){return n.map(function(r){return r||""}).map(function(r){return h(r,["/","\\"])}).filter(function(r){return r.length>0}).join("/")},L=function(n){return n=n.toLowerCase(),n=(0,A.Z)(n,"/"),n},N=function(n,r){return n=n||"",r=r||"",L(n)===L(r)},R="access_token",D=function(n){return localStorage.setItem(R,n)},y=function(){return localStorage.getItem(R)},x=function(){return!l(y())},v="sales-selected-store-id",F=function(n){localStorage.setItem(v,n)},c=function(){return localStorage.getItem(v)},_=function(n){var r=(n==null?void 0:n.split("."))||[];if(!(r.length<=0))return r.at(r.length-1)},E=function(n){return!l(n)&&/^[a-zA-Z]+$/.test(n)},K=function(n){return!l(n)&&/^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)\s*$/i.test(n)};function Y(){return/MicroMessenger/i.test(window.navigator.userAgent)}var $=function(n){return!l(n)&&/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(n)},z=function(n){if(n)return n.match(/\b1\d{10}\b/g)||void 0},H=function(n){return!l(n)&&/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(n)},G=function(n){return!l(n)&&/^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/.test(n)},I=function(n){return!l(n)&&/^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/.test(n)},j=function(n){return!l(n)&&/^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i.test(n)},P=function(n){if(n&&!l(n))return n},b=function(n){var r=n.filter(function(a){return!l(a)}).at(0);return r||void 0},J=function(n,r){return n.length<=r?n:"".concat(n.substring(0,r),"...")},Q=function(n){var r;if(f.message==null){alert(n);return}(r=f.message)===null||r===void 0||r.error(n)},X=function(n){var r;if(f.message==null){alert(n);return}(r=f.message)===null||r===void 0||r.success(n)},q=new Intl.NumberFormat("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),nn=function(n){return"\uFFE5".concat(q.format(n))},sn=function(n){return n.toFixed(2)},en=function(n){return JSON.parse(JSON.stringify(n))},tn=function(n){try{if(n)return JSON.parse(n)}catch(r){console.log(r)}return null},rn=function(n,r){var a=E(n),u=E(r);return a&&!u?-1:!a&&u?1:n.localeCompare(r)},an=function(){return new Promise(function(n,r){try{navigator.geolocation.getCurrentPosition(function(a){n(a)},function(a){r(a)})}catch(a){r(a)}})}}}]);
