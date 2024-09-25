"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3033],{40893:function(g,o,t){t.r(o),t.d(o,{default:function(){return C}});var s=t(97857),a=t.n(s),l=t(5574),c=t.n(l),f=t(84179),m=t(67294),i=t(47299),p=t(47650),y=t(66419),_=t(69047),D=t(38787),d=t(85893);function C(){(0,f.Z)("\u8D26\u53F7~");var O=(0,m.useState)({}),h=c()(O,2),E=h[0],b=h[1];return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{className:"container max-w-lg py-8",children:(0,d.jsxs)("div",{className:"flex-col-center w-full gap-2 overflow-hidden rounded-sm bg-white p-5",children:[(0,d.jsxs)("div",{className:"flex-col-center gap-2",children:[(0,d.jsx)("img",{src:i,width:200,alt:"login"}),(0,d.jsx)("h1",{className:"text-lg font-bold text-black",children:"\u767B\u5F55"})]}),(0,d.jsxs)("div",{className:"my-1 flex w-full flex-col gap-4",children:[(0,d.jsx)(_.Y,{required:!0,fullWidth:!0,variant:"bordered",label:"\u8D26\u53F7",value:E.IdentityName||"",onChange:function(M){return b(a()(a()({},E),{},{IdentityName:M.target.value}))},autoFocus:!0}),(0,d.jsx)(_.Y,{required:!0,fullWidth:!0,variant:"bordered",label:"\u5BC6\u7801",type:"password",value:E.Password||"",onChange:function(M){return b(a()(a()({},E),{},{Password:M.target.value}))}})]}),(0,d.jsxs)("div",{className:"p-3 flex w-full flex-col gap-1",children:[(0,d.jsx)(D.A,{fullWidth:!0,variant:"flat",color:"primary",onClick:function(){if((0,y.Wq)(E.IdentityName)||(0,y.Wq)(E.Password)){(0,y.Ti)("\u8BF7\u8F93\u5165\u5B8C\u6574\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801");return}},children:"\u6CE8\u518C"}),(0,d.jsx)(D.A,{variant:"light",size:"sm",fullWidth:!0,onClick:function(){p.m8.push({pathname:"/"})},children:"\u8FD4\u56DE"})]})]})})})}},47650:function(g,o,t){t.d(o,{TH:function(){return l},UO:function(){return c},ey:function(){return p},m8:function(){return a},pC:function(){return f},rU:function(){return m},sj:function(){return i}});var s=t(70917),a=s.m8,l=s.TH,c=s.UO,f=s.pC,m=s.rU,i=s.sj,p=s.ey},66419:function(g,o,t){t.d(o,{C6:function(){return M},C7:function(){return S},CB:function(){return k},G5:function(){return D},Gk:function(){return R},IS:function(){return Z},JR:function(){return C},K1:function(){return i},LW:function(){return x},M8:function(){return W},MK:function(){return en},OB:function(){return d},Sh:function(){return K},Te:function(){return O},Ti:function(){return B},W9:function(){return h},Wq:function(){return _},ZP:function(){return nn},ZQ:function(){return y},Zp:function(){return F},_y:function(){return b},cQ:function(){return V},gB:function(){return Q},hP:function(){return I},hU:function(){return G},iI:function(){return f},iu:function(){return q},kv:function(){return J},kw:function(){return $},lb:function(){return Y},lk:function(){return L},mD:function(){return N},qW:function(){return p},tq:function(){return z},uw:function(){return E},zO:function(){return H},zd:function(){return m}});var s=t(19632),a=t.n(s),l=t(42268),c=t(91845),f={message:void 0,store:void 0,setGoodsDetailId:void 0},m=function(){var n;return self!=top||window.frames.length!=parent.frames.length||((n=self.frameElement)===null||n===void 0||(n=n.tagName)===null||n===void 0?void 0:n.toLowerCase())=="iframe"},i=function(){return/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(navigator.userAgent)},p=function(n,e,u){var v=n.at(e);return n[e]=n.at(u),n[u]=v,n},y=function(n,e,u){var v=a()(n);return u>n.length-1||u<0?v.push(e):v=[].concat(a()(v.slice(0,u)),[e],a()(v.slice(u,void 0))),v},_=function(n){return!n||n.length<=0},D=function(n){return!n||n.length<=0},d=function(n){return!n||n<=0},C=function(n){if(!(!n||n.length<=0)){var e=O(n);if(!_(e))return e==null?void 0:e.substring(0,1)}},O=function(n){var e=(0,c.N9)(n,{type:"array",pattern:"first",toneType:"none"});return e.filter(function(u){return!_(u)}).join("")},h=function(n){var e=(0,c.N9)(n,{type:"array",pattern:"pinyin",toneType:"none"});return e.filter(function(u){return!_(u)}).join("")},E=function(n){var e=(0,c.N9)(n,{type:"array",pattern:"pinyin",toneType:"none"});return e.filter(function(u){return!_(u)}).join("-").toLowerCase()},b=function(n,e,u){var v;return(v=n.data.Error)!==null&&v!==void 0&&v.Message?(B(n.data.Error.Message||"\u64CD\u4F5C\u672A\u80FD\u5982\u671F\u5B8C\u6210"),u&&u(),!1):(e&&e(),!0)},P=function(n,e){for(var u=n,v=function(){var j=!1;if(e.forEach(function(tn){var w=(0,l.Z)(u,tn);w!=u&&(j=!0,u=w)}),!j)return 1};!v(););return u},M=function(n){return n.map(function(e){return e||""}).map(function(e){return P(e,["/","\\"])}).filter(function(e){return e.length>0}).join("/")},A=function(n){return n=n.toLowerCase(),n=(0,l.Z)(n,"/"),n},S=function(n,e){return n=n||"",e=e||"",A(n)===A(e)},U="access_token",W=function(n){return localStorage.setItem(U,n)},I=function(){return localStorage.getItem(U)},L=function(){return!_(I())},T="sales-selected-store-id",x=function(n){localStorage.setItem(T,n)},R=function(){return localStorage.getItem(T)},N=function(n){var e=(n==null?void 0:n.split("."))||[];if(!(e.length<=0))return e.at(e.length-1)},K=function(n){return!_(n)&&/^[a-zA-Z]+$/.test(n)},F=function(n){return!_(n)&&/^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)\s*$/i.test(n)};function Z(){return/MicroMessenger/i.test(window.navigator.userAgent)}var z=function(n){return!_(n)&&/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(n)},$=function(n){if(n)return n.match(/\b1\d{10}\b/g)||void 0},rn=function(n){return!_(n)&&/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(n)},un=function(n){return!_(n)&&/^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/.test(n)},k=function(n){return!_(n)&&/^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/.test(n)},G=function(n){return!_(n)&&/^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i.test(n)},J=function(n){if(n&&!_(n))return n},Q=function(n){var e=n.filter(function(u){return!_(u)}).at(0);return e||void 0},H=function(n,e){return n.length<=e?n:"".concat(n.substring(0,e),"...")},B=function(n){var e;if(f.message==null){alert(n);return}(e=f.message)===null||e===void 0||e.error(n)},V=function(n){var e;if(f.message==null){alert(n);return}(e=f.message)===null||e===void 0||e.success(n)},X=new Intl.NumberFormat("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),Y=function(n){return"\uFFE5".concat(X.format(n))},on=function(n){return n.toFixed(2)},q=function(n){return JSON.parse(JSON.stringify(n))},nn=function(n){try{if(n)return JSON.parse(n)}catch(e){console.log(e)}return null},en=function(){return new Promise(function(n,e){try{navigator.geolocation.getCurrentPosition(function(u){n(u)},function(u){e(u)})}catch(u){e(u)}})}},3930:function(g,o,t){var s=t(67294);function a(l){var c=(0,s.useRef)(l);return c.current=l,c}o.Z=a},84179:function(g,o,t){var s=t(67294),a=t(45210),l=t(52982),c={restoreOnUnmount:!1};function f(m,i){i===void 0&&(i=c);var p=(0,s.useRef)(l.Z?document.title:"");(0,s.useEffect)(function(){document.title=m},[m]),(0,a.Z)(function(){i.restoreOnUnmount&&(document.title=p.current)})}o.Z=f},45210:function(g,o,t){var s=t(67294),a=t(3930),l=t(92770),c=t(31663),f=function(m){c.Z&&((0,l.mf)(m)||console.error("useUnmount expected parameter is a function, got ".concat(typeof m)));var i=(0,a.Z)(m);(0,s.useEffect)(function(){return function(){i.current()}},[])};o.Z=f},92770:function(g,o,t){t.d(o,{G7:function(){return m},HD:function(){return l},hj:function(){return f},mf:function(){return a}});var s=function(i){return i!==null&&typeof i=="object"},a=function(i){return typeof i=="function"},l=function(i){return typeof i=="string"},c=function(i){return typeof i=="boolean"},f=function(i){return typeof i=="number"},m=function(i){return typeof i=="undefined"}},52982:function(g,o){var t=!!(typeof window!="undefined"&&window.document&&window.document.createElement);o.Z=t},31663:function(g,o){var t=!1;o.Z=t},47299:function(g,o,t){g.exports=t.p+"static/illustration_login.cfd572d9.png"}}]);
