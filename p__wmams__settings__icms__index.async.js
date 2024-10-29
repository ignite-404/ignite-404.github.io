!(function(){var Ce=Object.defineProperty,Se=Object.defineProperties;var De=Object.getOwnPropertyDescriptors;var ue=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var ge=(s,l,e)=>l in s?Ce(s,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[l]=e,fe=(s,l)=>{for(var e in l||(l={}))pe.call(l,e)&&ge(s,e,l[e]);if(ue)for(var e of ue(l))he.call(l,e)&&ge(s,e,l[e]);return s},ye=(s,l)=>Se(s,De(l));var xe=(s,l)=>{var e={};for(var i in s)pe.call(s,i)&&l.indexOf(i)<0&&(e[i]=s[i]);if(s!=null&&ue)for(var i of ue(s))l.indexOf(i)<0&&he.call(s,i)&&(e[i]=s[i]);return e};(self.webpackChunk=self.webpackChunk||[]).push([[9081,4284],{3083:function(s,l,e){"use strict";var i=e(50545),d=e(70278),b=e(78298),v=e(97975),y=e(78957),M=e(83062),c=e(85893);l.Z=function(p){var E=p.title,u=p.subtitle,O=p.extra,I=p.hide_add,R=p.hide_save,A=p.hide_refresh,P=p.hide_delete,n=function(){return O?null:(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(y.Z,{direction:"horizontal",children:[R||(0,c.jsx)(M.Z,{title:"save",children:(0,c.jsx)(i.Z,{stroke:1})}),P||(0,c.jsx)(M.Z,{title:"delete",children:(0,c.jsx)(d.Z,{stroke:1})}),A||(0,c.jsx)(M.Z,{title:"refresh",children:(0,c.jsx)(b.Z,{stroke:1})}),I||(0,c.jsx)(M.Z,{title:"add",children:(0,c.jsx)(v.Z,{stroke:1})})]})})};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("div",{className:"mb-3 rounded-lg border-1 border-slate-800 bg-blue-900 p-2 text-white",children:(0,c.jsxs)("div",{className:"flex-row-between",children:[(0,c.jsxs)("div",{className:"flex w-full flex-row items-end gap-2",children:[(0,c.jsx)("h1",{className:"text-large font-bold",children:E}),(0,c.jsx)("div",{className:"text-large text-yellow-500",children:u})]}),(0,c.jsxs)("div",{className:"",children:[O||null,n()]})]})})})}},84660:function(s,l,e){"use strict";e.r(l),e.d(l,{default:function(){return re}});var i=e(5574),d=e.n(i),b=e(3083),v=e(78957),y=e(67294),M=e(26412),c=e(25278),p=e(84567),E=e(34041),u=e(13129),O=e(46629),I=e(85576),R=e(14726),A=e(4393),P=e(80799),n=e(85893),U=function(C){var $=C.open,j=C.close,S=C.ok,B=[{title:"Case Type ID",render:function(G,L){return"4561321"}},{title:"Name",render:function(G,L){return"--"}},{title:"Description",render:function(G,L){return"--"}},{title:"Description(Chinese)",render:function(G,L){return"--"}},{title:"Obsolete",render:function(G,L){return(0,n.jsx)(p.Z,{defaultChecked:!0})}},{title:"Creation date",render:function(G,L){return O.ND.utc().format(O.dq)}}];return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(I.Z,{width:"80%",open:$,onCancel:function(){j()},title:"Search ICMS Case Type",onOk:function(){},children:(0,n.jsxs)(v.Z,{direction:"vertical",style:{width:"100%"},children:[(0,n.jsx)(M.Z,{column:2,bordered:!0,items:[{label:"Case Type ID",children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(c.Z,{})})},{label:"Name",children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(c.Z,{})})},{label:"Description",children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(c.Z,{})})},{label:"Description(Chinese)",children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(c.Z,{})})},{label:"Obsolete",children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(p.Z,{defaultChecked:!0})})},{label:"",children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(v.Z,{direction:"horizontal",children:[(0,n.jsx)(R.ZP,{type:"primary",children:"Search"}),(0,n.jsx)(R.ZP,{type:"link",children:"Reset"})]})})}]}),(0,n.jsx)(A.Z,{title:"Search Result",children:(0,n.jsx)(P.Z,{columns:B,dataSource:[{},{},{}],pagination:!1})})]})})})};function Q(){var C=(0,y.useState)(!1),$=d()(C,2),j=$[0],S=$[1];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(U,{open:j,ok:function(){return S(!1)},close:function(){return S(!1)}}),(0,n.jsx)(c.Z,{addonAfter:(0,n.jsx)(u.Z,{stroke:1,onClick:function(){return S(!0)}})})]})}var w=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(M.Z,{column:2,bordered:!0,items:[{label:"Case Type ID",children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(Q,{})})},{label:"Name",children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(c.Z,{})})},{label:"Description",children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(c.Z,{})})},{label:"Description(Chinese)",children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(c.Z,{})})},{label:"Obsolete",children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(p.Z,{defaultChecked:!0})})},{label:"Main System",children:(0,n.jsx)(E.Z,{style:{minWidth:300},options:[{label:"wmams",value:"1"},{label:"pems",value:"2"}],defaultValue:void 0})}]})})},Y=e(19632),ee=e.n(Y),k=e(45360),te=e(75549),X=e(97975),K=e(66628),ne=function(){var C=(0,y.useState)(!1),$=d()(C,2),j=$[0],S=$[1],B=(0,y.useState)([1,2,3,4,5,6,7].map(function(T,W){return{id:W+1}})),Z=d()(B,2),G=Z[0],L=Z[1],V=[{title:"No",dataIndex:"index",valueType:"indexBorder"},{title:"\u6392\u5E8F",dataIndex:"sort",width:60,className:"drag-visible"},{title:"Name",render:function(W,r,a){return"step-".concat(r.id||(a+1).toString().padStart(2,"0"))}},{title:"Description",render:function(W,r){return(0,n.jsx)("span",{children:"some desc"})}},{title:"Source System",render:function(W,r){return(0,n.jsx)("span",{children:Math.random()>.5?"pems":"wmams"})}},{title:"Dispatch System",render:function(W,r){return(0,n.jsx)("span",{children:Math.random()>.5?"pems":"wmams"})}},{title:"Created by",render:function(W,r){return(0,n.jsx)("span",{children:"some sys"})}},{title:"Obsolete",render:function(W,r){return(0,n.jsx)(p.Z,{defaultChecked:!0})}},{title:"Creation Time",render:function(W,r){return O.ND.utc().format(O.dq)}},{title:"Action",render:function(W,r){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(R.ZP,{size:"small",icon:(0,n.jsx)(te.Z,{stroke:1}),type:"dashed",variant:"dashed",onClick:function(){S(!0)}})})}}];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(I.Z,{title:"Add Case Type Steps",width:"70%",open:j,onOk:function(){S(!1),k.ZP.success("Add successfully")},onCancel:function(){S(!1)},children:(0,n.jsx)(M.Z,{column:1,bordered:!0,items:[{label:"Step Name",children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(c.Z,{})})},{label:"Description",children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(c.Z,{})})},{label:"Description(Chinese)",children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(c.Z,{})})},{label:"Obsolete",children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(p.Z,{defaultChecked:!0})})},{label:"Source System",children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(E.Z,{style:{minWidth:300},options:[{label:"wmams",value:"1"},{label:"pems",value:"2"}],defaultValue:"1"})})},{label:"Dispatch System",children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(E.Z,{style:{minWidth:300},options:[{label:"wmams",value:"1"},{label:"pems",value:"2"}],defaultValue:"2"})})}]})}),(0,n.jsx)(A.Z,{title:"Case Type Steps",extra:(0,n.jsx)(R.ZP,{size:"small",icon:(0,n.jsx)(X.Z,{stroke:1}),onClick:function(){return S(!0)}}),children:(0,n.jsx)(K.Z,{rowKey:"id",columns:V,dataSource:G,toolBarRender:!1,pagination:!1,headerTitle:!1,search:!1,dragSortKey:"sort",onDragSortEnd:function(W,r,a){L(ee()(a))}})})]})},re=function(){var C=(0,y.useState)(!1),$=d()(C,2),j=$[0],S=$[1];return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(v.Z,{direction:"vertical",style:{width:"100%"},children:[(0,n.jsx)(b.Z,{title:"Inner Case Management System - Settings"}),(0,n.jsx)(w,{}),(0,n.jsx)(ne,{})]})})}},46629:function(s,l,e){"use strict";e.d(l,{AK:function(){return ne},Gl:function(){return S},Kt:function(){return j},Mg:function(){return te},ND:function(){return k},On:function(){return $},PR:function(){return Z},bF:function(){return X},dq:function(){return re},mg:function(){return B},t9:function(){return C},vc:function(){return K}});var i=e(33852),d=e.n(i),b=e(27484),v=e.n(b),y=e(10285),M=e.n(y),c=e(7124),p=e.n(c),E=e(49133),u=e.n(E),O=e(50356),I=e.n(O),R=e(96036),A=e.n(R),P=e(56176),n=e.n(P),U=e(84110),Q=e.n(U),w=e(70178),Y=e.n(w),ee=e(66419);v().extend(A()),v().extend(Q()),v().extend(n()),v().extend(M()),v().extend(p()),v().extend(I()),v().extend(u()),v().extend(Y()),v().locale("zh-cn");var k=v(),te=8,X="HH:mm",K="YYYY-MM-DD",ne="MM-DD",re="YYYY-MM-DD HH:mm",C="YYYY-MM-DD HH:mm:ss",$="dddd",j="MMMM DD A h:mm",S=function(L){var V,T=(V=B(L))===null||V===void 0?void 0:V.add(te,"hour");if(!T)return null;var W=v().utc().add(te,"hour"),r=T.diff(W,"day");return Math.abs(r)>7?T.format(re):T.fromNow()},B=function(L){if((0,ee.Wq)(L))return null;try{return v()(L)}catch(V){return null}},Z=function(L){var V,T=(V=B(L))===null||V===void 0?void 0:V.isBefore(k().utc());return T}},66419:function(s,l,e){"use strict";e.d(l,{C6:function(){return w},C7:function(){return ee},CB:function(){return T},G5:function(){return O},Gk:function(){return C},IS:function(){return B},JR:function(){return R},K1:function(){return c},LW:function(){return re},M8:function(){return te},MK:function(){return F},OB:function(){return I},Sh:function(){return j},Te:function(){return A},Ti:function(){return f},W9:function(){return P},Wq:function(){return u},ZP:function(){return z},ZQ:function(){return E},Zp:function(){return S},_y:function(){return U},cQ:function(){return g},gB:function(){return a},hP:function(){return X},hU:function(){return W},iI:function(){return y},iu:function(){return ie},kv:function(){return r},kw:function(){return G},lb:function(){return _},lk:function(){return K},mD:function(){return $},qW:function(){return p},tq:function(){return Z},uw:function(){return n},zO:function(){return h},zd:function(){return M}});var i=e(19632),d=e.n(i),b=e(42268),v=e(91845),y={message:void 0,store:void 0,setGoodsDetailId:void 0},M=function(){var t;return self!=top||window.frames.length!=parent.frames.length||((t=self.frameElement)===null||t===void 0||(t=t.tagName)===null||t===void 0?void 0:t.toLowerCase())=="iframe"},c=function(){return/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(navigator.userAgent)},p=function(t,o,x){var N=t.at(o);return t[o]=t.at(x),t[x]=N,t},E=function(t,o,x){var N=d()(t);return x>t.length-1||x<0?N.push(o):N=[].concat(d()(N.slice(0,x)),[o],d()(N.slice(x,void 0))),N},u=function(t){return!t||t.length<=0},O=function(t){return!t||t.length<=0},I=function(t){return!t||t<=0},R=function(t){if(!(!t||t.length<=0)){var o=A(t);if(!u(o))return o==null?void 0:o.substring(0,1)}},A=function(t){var o=(0,v.N9)(t,{type:"array",pattern:"first",toneType:"none"});return o.filter(function(x){return!u(x)}).join("")},P=function(t){var o=(0,v.N9)(t,{type:"array",pattern:"pinyin",toneType:"none"});return o.filter(function(x){return!u(x)}).join("")},n=function(t){var o=(0,v.N9)(t,{type:"array",pattern:"pinyin",toneType:"none"});return o.filter(function(x){return!u(x)}).join("-").toLowerCase()},U=function(t,o,x){var N;return(N=t.data.Error)!==null&&N!==void 0&&N.Message?(f(t.data.Error.Message||"\u64CD\u4F5C\u672A\u80FD\u5982\u671F\u5B8C\u6210"),x&&x(),!1):(o&&o(),!0)},Q=function(t,o){for(var x=t,N=function(){var ae=!1;if(o.forEach(function(oe){var q=(0,b.Z)(x,oe);q!=x&&(ae=!0,x=q)}),!ae)return 1};!N(););return x},w=function(t){return t.map(function(o){return o||""}).map(function(o){return Q(o,["/","\\"])}).filter(function(o){return o.length>0}).join("/")},Y=function(t){return t=t.toLowerCase(),t=(0,b.Z)(t,"/"),t},ee=function(t,o){return t=t||"",o=o||"",Y(t)===Y(o)},k="access_token",te=function(t){return localStorage.setItem(k,t)},X=function(){return localStorage.getItem(k)},K=function(){return!u(X())},ne="sales-selected-store-id",re=function(t){localStorage.setItem(ne,t)},C=function(){return localStorage.getItem(ne)},$=function(t){var o=(t==null?void 0:t.split("."))||[];if(!(o.length<=0))return o.at(o.length-1)},j=function(t){return!u(t)&&/^[a-zA-Z]+$/.test(t)},S=function(t){return!u(t)&&/^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)\s*$/i.test(t)};function B(){return/MicroMessenger/i.test(window.navigator.userAgent)}var Z=function(t){return!u(t)&&/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(t)},G=function(t){if(t)return t.match(/\b1\d{10}\b/g)||void 0},L=function(t){return!u(t)&&/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(t)},V=function(t){return!u(t)&&/^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/.test(t)},T=function(t){return!u(t)&&/^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/.test(t)},W=function(t){return!u(t)&&/^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i.test(t)},r=function(t){if(t&&!u(t))return t},a=function(t){var o=t.filter(function(x){return!u(x)}).at(0);return o||void 0},h=function(t,o){return t.length<=o?t:"".concat(t.substring(0,o),"...")},f=function(t){var o;if(y.message==null){alert(t);return}(o=y.message)===null||o===void 0||o.error(t)},g=function(t){var o;if(y.message==null){alert(t);return}(o=y.message)===null||o===void 0||o.success(t)},D=new Intl.NumberFormat("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),_=function(t){return"\uFFE5".concat(D.format(t))},H=function(t){return t.toFixed(2)},ie=function(t){return JSON.parse(JSON.stringify(t))},z=function(t){try{if(t)return JSON.parse(t)}catch(o){console.log(o)}return null},F=function(){return new Promise(function(t,o){try{navigator.geolocation.getCurrentPosition(function(x){t(x)},function(x){o(x)})}catch(x){o(x)}})}},26412:function(s,l,e){"use strict";e.d(l,{Z:function(){return W}});var i=e(67294),d=e(93967),b=e.n(d),v=e(74443),y=e(53124),M=e(98675),c=e(25378),E={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1},O=i.createContext({}),I=e(50344),R=function(r,a){var h={};for(var f in r)Object.prototype.hasOwnProperty.call(r,f)&&a.indexOf(f)<0&&(h[f]=r[f]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,f=Object.getOwnPropertySymbols(r);g<f.length;g++)a.indexOf(f[g])<0&&Object.prototype.propertyIsEnumerable.call(r,f[g])&&(h[f[g]]=r[f[g]]);return h};const A=r=>(0,I.Z)(r).map(a=>Object.assign(Object.assign({},a==null?void 0:a.props),{key:a.key}));function P(r,a,h){const f=i.useMemo(()=>a||A(h),[a,h]);return i.useMemo(()=>f.map(D=>{var{span:_}=D,H=R(D,["span"]);return Object.assign(Object.assign({},H),{span:typeof _=="number"?_:(0,v.m9)(r,_)})}),[f,r])}function n(r,a,h){let f=r,g=!1;return(h===void 0||h>a)&&(f=Object.assign(Object.assign({},r),{span:a}),g=h!==void 0),[f,g]}function U(r,a){const h=[];let f=[],g=a,D=!1;return r.filter(_=>_).forEach((_,H)=>{const ie=_==null?void 0:_.span,z=ie||1;if(H===r.length-1){const[F,m]=n(_,g,ie);D=D||m,f.push(F),h.push(f);return}if(z<g)g-=z,f.push(_);else{const[F,m]=n(_,g,z);D=D||m,f.push(F),h.push(f),g=a,f=[]}}),[h,D]}var w=(r,a)=>{const[h,f]=(0,i.useMemo)(()=>U(a,r),[a,r]);return h},ee=r=>{let{children:a}=r;return a};function k(r){return r!=null}var X=r=>{const{itemPrefixCls:a,component:h,span:f,className:g,style:D,labelStyle:_,contentStyle:H,bordered:ie,label:z,content:F,colon:m,type:t}=r,o=h;return ie?i.createElement(o,{className:b()({[`${a}-item-label`]:t==="label",[`${a}-item-content`]:t==="content"},g),style:D,colSpan:f},k(z)&&i.createElement("span",{style:_},z),k(F)&&i.createElement("span",{style:H},F)):i.createElement(o,{className:b()(`${a}-item`,g),style:D,colSpan:f},i.createElement("div",{className:`${a}-item-container`},(z||z===0)&&i.createElement("span",{className:b()(`${a}-item-label`,{[`${a}-item-no-colon`]:!m}),style:_},z),(F||F===0)&&i.createElement("span",{className:b()(`${a}-item-content`),style:H},F)))};function K(r,a,h){let{colon:f,prefixCls:g,bordered:D}=a,{component:_,type:H,showLabel:ie,showContent:z,labelStyle:F,contentStyle:m}=h;return r.map((t,o)=>{let{label:x,children:N,prefixCls:se=g,className:ae,style:oe,labelStyle:q,contentStyle:J,span:le=1,key:ce}=t;return typeof _=="string"?i.createElement(X,{key:`${H}-${ce||o}`,className:ae,style:oe,labelStyle:Object.assign(Object.assign({},F),q),contentStyle:Object.assign(Object.assign({},m),J),span:le,colon:f,component:_,itemPrefixCls:se,bordered:D,label:ie?x:null,content:z?N:null,type:H}):[i.createElement(X,{key:`label-${ce||o}`,className:ae,style:Object.assign(Object.assign(Object.assign({},F),oe),q),span:1,colon:f,component:_[0],itemPrefixCls:se,bordered:D,label:x,type:"label"}),i.createElement(X,{key:`content-${ce||o}`,className:ae,style:Object.assign(Object.assign(Object.assign({},m),oe),J),span:le*2-1,component:_[1],itemPrefixCls:se,bordered:D,content:N,type:"content"})]})}var re=r=>{const a=i.useContext(O),{prefixCls:h,vertical:f,row:g,index:D,bordered:_}=r;return f?i.createElement(i.Fragment,null,i.createElement("tr",{key:`label-${D}`,className:`${h}-row`},K(g,r,Object.assign({component:"th",type:"label",showLabel:!0},a))),i.createElement("tr",{key:`content-${D}`,className:`${h}-row`},K(g,r,Object.assign({component:"td",type:"content",showContent:!0},a)))):i.createElement("tr",{key:D,className:`${h}-row`},K(g,r,Object.assign({component:_?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},a)))},C=e(11568),$=e(14747),j=e(83559),S=e(83262);const B=r=>{const{componentCls:a,labelBg:h}=r;return{[`&${a}-bordered`]:{[`> ${a}-view`]:{border:`${(0,C.bf)(r.lineWidth)} ${r.lineType} ${r.colorSplit}`,"> table":{tableLayout:"auto"},[`${a}-row`]:{borderBottom:`${(0,C.bf)(r.lineWidth)} ${r.lineType} ${r.colorSplit}`,"&:last-child":{borderBottom:"none"},[`> ${a}-item-label, > ${a}-item-content`]:{padding:`${(0,C.bf)(r.padding)} ${(0,C.bf)(r.paddingLG)}`,borderInlineEnd:`${(0,C.bf)(r.lineWidth)} ${r.lineType} ${r.colorSplit}`,"&:last-child":{borderInlineEnd:"none"}},[`> ${a}-item-label`]:{color:r.colorTextSecondary,backgroundColor:h,"&::after":{display:"none"}}}},[`&${a}-middle`]:{[`${a}-row`]:{[`> ${a}-item-label, > ${a}-item-content`]:{padding:`${(0,C.bf)(r.paddingSM)} ${(0,C.bf)(r.paddingLG)}`}}},[`&${a}-small`]:{[`${a}-row`]:{[`> ${a}-item-label, > ${a}-item-content`]:{padding:`${(0,C.bf)(r.paddingXS)} ${(0,C.bf)(r.padding)}`}}}}}},Z=r=>{const{componentCls:a,extraColor:h,itemPaddingBottom:f,itemPaddingEnd:g,colonMarginRight:D,colonMarginLeft:_,titleMarginBottom:H}=r;return{[a]:Object.assign(Object.assign(Object.assign({},(0,$.Wf)(r)),B(r)),{"&-rtl":{direction:"rtl"},[`${a}-header`]:{display:"flex",alignItems:"center",marginBottom:H},[`${a}-title`]:Object.assign(Object.assign({},$.vS),{flex:"auto",color:r.titleColor,fontWeight:r.fontWeightStrong,fontSize:r.fontSizeLG,lineHeight:r.lineHeightLG}),[`${a}-extra`]:{marginInlineStart:"auto",color:h,fontSize:r.fontSize},[`${a}-view`]:{width:"100%",borderRadius:r.borderRadiusLG,table:{width:"100%",tableLayout:"fixed",borderCollapse:"collapse"}},[`${a}-row`]:{"> th, > td":{paddingBottom:f,paddingInlineEnd:g},"> th:last-child, > td:last-child":{paddingInlineEnd:0},"&:last-child":{borderBottom:"none","> th, > td":{paddingBottom:0}}},[`${a}-item-label`]:{color:r.colorTextTertiary,fontWeight:"normal",fontSize:r.fontSize,lineHeight:r.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:`${(0,C.bf)(_)} ${(0,C.bf)(D)}`},[`&${a}-item-no-colon::after`]:{content:'""'}},[`${a}-item-no-label`]:{"&::after":{margin:0,content:'""'}},[`${a}-item-content`]:{display:"table-cell",flex:1,color:r.contentColor,fontSize:r.fontSize,lineHeight:r.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"},[`${a}-item`]:{paddingBottom:0,verticalAlign:"top","&-container":{display:"flex",[`${a}-item-label`]:{display:"inline-flex",alignItems:"baseline"},[`${a}-item-content`]:{display:"inline-flex",alignItems:"baseline",minWidth:"1em"}}},"&-middle":{[`${a}-row`]:{"> th, > td":{paddingBottom:r.paddingSM}}},"&-small":{[`${a}-row`]:{"> th, > td":{paddingBottom:r.paddingXS}}}})}},G=r=>({labelBg:r.colorFillAlter,titleColor:r.colorText,titleMarginBottom:r.fontSizeSM*r.lineHeightSM,itemPaddingBottom:r.padding,itemPaddingEnd:r.padding,colonMarginRight:r.marginXS,colonMarginLeft:r.marginXXS/2,contentColor:r.colorText,extraColor:r.colorText});var L=(0,j.I$)("Descriptions",r=>{const a=(0,S.IX)(r,{});return Z(a)},G),V=function(r,a){var h={};for(var f in r)Object.prototype.hasOwnProperty.call(r,f)&&a.indexOf(f)<0&&(h[f]=r[f]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,f=Object.getOwnPropertySymbols(r);g<f.length;g++)a.indexOf(f[g])<0&&Object.prototype.propertyIsEnumerable.call(r,f[g])&&(h[f[g]]=r[f[g]]);return h};const T=r=>{const{prefixCls:a,title:h,extra:f,column:g,colon:D=!0,bordered:_,layout:H,children:ie,className:z,rootClassName:F,style:m,size:t,labelStyle:o,contentStyle:x,items:N}=r,se=V(r,["prefixCls","title","extra","column","colon","bordered","layout","children","className","rootClassName","style","size","labelStyle","contentStyle","items"]),{getPrefixCls:ae,direction:oe,descriptions:q}=i.useContext(y.E_),J=ae("descriptions",a),le=(0,c.Z)(),ce=i.useMemo(()=>{var de;return typeof g=="number"?g:(de=(0,v.m9)(le,Object.assign(Object.assign({},E),g)))!==null&&de!==void 0?de:3},[le,g]),be=P(le,N,ie),me=(0,M.Z)(t),je=w(ce,be),[Ee,Oe,_e]=L(J),Me=i.useMemo(()=>({labelStyle:o,contentStyle:x}),[o,x]);return Ee(i.createElement(O.Provider,{value:Me},i.createElement("div",Object.assign({className:b()(J,q==null?void 0:q.className,{[`${J}-${me}`]:me&&me!=="default",[`${J}-bordered`]:!!_,[`${J}-rtl`]:oe==="rtl"},z,F,Oe,_e),style:Object.assign(Object.assign({},q==null?void 0:q.style),m)},se),(h||f)&&i.createElement("div",{className:`${J}-header`},h&&i.createElement("div",{className:`${J}-title`},h),f&&i.createElement("div",{className:`${J}-extra`},f)),i.createElement("div",{className:`${J}-view`},i.createElement("table",null,i.createElement("tbody",null,je.map((de,ve)=>i.createElement(re,{key:ve,index:ve,colon:D,prefixCls:J,vertical:H==="vertical",bordered:_,row:de}))))))))};T.Item=ee;var W=T},62705:function(s,l,e){var i=e(55639),d=i.Symbol;s.exports=d},44239:function(s,l,e){var i=e(62705),d=e(89607),b=e(2333),v="[object Null]",y="[object Undefined]",M=i?i.toStringTag:void 0;function c(p){return p==null?p===void 0?y:v:M&&M in Object(p)?d(p):b(p)}s.exports=c},27561:function(s,l,e){var i=e(67990),d=/^\s+/;function b(v){return v&&v.slice(0,i(v)+1).replace(d,"")}s.exports=b},31957:function(s,l,e){var i=typeof e.g=="object"&&e.g&&e.g.Object===Object&&e.g;s.exports=i},89607:function(s,l,e){var i=e(62705),d=Object.prototype,b=d.hasOwnProperty,v=d.toString,y=i?i.toStringTag:void 0;function M(c){var p=b.call(c,y),E=c[y];try{c[y]=void 0;var u=!0}catch(I){}var O=v.call(c);return u&&(p?c[y]=E:delete c[y]),O}s.exports=M},2333:function(s){var l=Object.prototype,e=l.toString;function i(d){return e.call(d)}s.exports=i},55639:function(s,l,e){var i=e(31957),d=typeof self=="object"&&self&&self.Object===Object&&self,b=i||d||Function("return this")();s.exports=b},67990:function(s){var l=/\s/;function e(i){for(var d=i.length;d--&&l.test(i.charAt(d)););return d}s.exports=e},23279:function(s,l,e){var i=e(13218),d=e(7771),b=e(14841),v="Expected a function",y=Math.max,M=Math.min;function c(p,E,u){var O,I,R,A,P,n,U=0,Q=!1,w=!1,Y=!0;if(typeof p!="function")throw new TypeError(v);E=b(E)||0,i(u)&&(Q=!!u.leading,w="maxWait"in u,R=w?y(b(u.maxWait)||0,E):R,Y="trailing"in u?!!u.trailing:Y);function ee(j){var S=O,B=I;return O=I=void 0,U=j,A=p.apply(B,S),A}function k(j){return U=j,P=setTimeout(K,E),Q?ee(j):A}function te(j){var S=j-n,B=j-U,Z=E-S;return w?M(Z,R-B):Z}function X(j){var S=j-n,B=j-U;return n===void 0||S>=E||S<0||w&&B>=R}function K(){var j=d();if(X(j))return ne(j);P=setTimeout(K,te(j))}function ne(j){return P=void 0,Y&&O?ee(j):(O=I=void 0,A)}function re(){P!==void 0&&clearTimeout(P),U=0,O=n=I=P=void 0}function C(){return P===void 0?A:ne(d())}function $(){var j=d(),S=X(j);if(O=arguments,I=this,n=j,S){if(P===void 0)return k(n);if(w)return clearTimeout(P),P=setTimeout(K,E),ee(n)}return P===void 0&&(P=setTimeout(K,E)),A}return $.cancel=re,$.flush=C,$}s.exports=c},13218:function(s){function l(e){var i=typeof e;return e!=null&&(i=="object"||i=="function")}s.exports=l},37005:function(s){function l(e){return e!=null&&typeof e=="object"}s.exports=l},33448:function(s,l,e){var i=e(44239),d=e(37005),b="[object Symbol]";function v(y){return typeof y=="symbol"||d(y)&&i(y)==b}s.exports=v},7771:function(s,l,e){var i=e(55639),d=function(){return i.Date.now()};s.exports=d},23493:function(s,l,e){var i=e(23279),d=e(13218),b="Expected a function";function v(y,M,c){var p=!0,E=!0;if(typeof y!="function")throw new TypeError(b);return d(c)&&(p="leading"in c?!!c.leading:p,E="trailing"in c?!!c.trailing:E),i(y,M,{leading:p,maxWait:M,trailing:E})}s.exports=v},14841:function(s,l,e){var i=e(27561),d=e(13218),b=e(33448),v=NaN,y=/^[-+]0x[0-9a-f]+$/i,M=/^0b[01]+$/i,c=/^0o[0-7]+$/i,p=parseInt;function E(u){if(typeof u=="number")return u;if(b(u))return v;if(d(u)){var O=typeof u.valueOf=="function"?u.valueOf():u;u=d(O)?O+"":O}if(typeof u!="string")return u===0?u:+u;u=i(u);var I=M.test(u);return I||c.test(u)?p(u.slice(2),I?2:8):y.test(u)?v:+u}s.exports=E},33733:function(s,l,e){"use strict";e.d(l,{Z:function(){return b}});var i=e(67294);var d={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};const b=(v,y,M,c)=>{const p=(0,i.forwardRef)((U,n)=>{var Q=U,{color:E="currentColor",size:u=24,stroke:O=2,title:I,className:R,children:A}=Q,P=xe(Q,["color","size","stroke","title","className","children"]);return(0,i.createElement)("svg",fe(fe(ye(fe({ref:n},d[v]),{width:u,height:u,className:["tabler-icon",`tabler-icon-${y}`,R].join(" ")}),v==="filled"?{fill:E}:{strokeWidth:O,stroke:E}),P),[I&&(0,i.createElement)("title",{key:"svg-title"},I),...c.map(([w,Y])=>(0,i.createElement)(w,Y)),...Array.isArray(A)?A:[A]])});return p.displayName=`${M}`,p}},50545:function(s,l,e){"use strict";e.d(l,{Z:function(){return d}});var i=e(33733);var d=(0,i.Z)("outline","archive","IconArchive",[["path",{d:"M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10",key:"svg-1"}],["path",{d:"M10 12l4 0",key:"svg-2"}]])},75549:function(s,l,e){"use strict";e.d(l,{Z:function(){return d}});var i=e(33733);var d=(0,i.Z)("outline","edit","IconEdit",[["path",{d:"M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1",key:"svg-0"}],["path",{d:"M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z",key:"svg-1"}],["path",{d:"M16 5l3 3",key:"svg-2"}]])},97975:function(s,l,e){"use strict";e.d(l,{Z:function(){return d}});var i=e(33733);var d=(0,i.Z)("outline","plus","IconPlus",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M5 12l14 0",key:"svg-1"}]])},78298:function(s,l,e){"use strict";e.d(l,{Z:function(){return d}});var i=e(33733);var d=(0,i.Z)("outline","refresh","IconRefresh",[["path",{d:"M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4",key:"svg-0"}],["path",{d:"M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4",key:"svg-1"}]])},13129:function(s,l,e){"use strict";e.d(l,{Z:function(){return d}});var i=e(33733);var d=(0,i.Z)("outline","search","IconSearch",[["path",{d:"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",key:"svg-0"}],["path",{d:"M21 21l-6 -6",key:"svg-1"}]])},70278:function(s,l,e){"use strict";e.d(l,{Z:function(){return d}});var i=e(33733);var d=(0,i.Z)("outline","trash","IconTrash",[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]])}}]);
}());