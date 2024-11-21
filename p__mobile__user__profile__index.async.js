"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2633],{85685:function(W,U,n){n.d(U,{Z:function(){return I}});var R=n(38295),u=n(95813),f=n(38787),B=n(48135),p=n(76021),t=n(85893);function I(j){var x=j.children,l=j.rightButtons,a=j.leftButtons,y=(0,R.o)(),c=function(){window.history.length>1?p.m8.back():p.m8.push({pathname:"/"})},A=function(){return(0,t.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[(0,u.G5)(a)&&(0,t.jsxs)("div",{className:"flex-row-center cursor-pointer gap-1",onClick:function(r){r.preventDefault(),r.stopPropagation(),c()},children:[(0,t.jsx)(f.A,{size:"lg",color:"default",radius:"full",variant:"light",isIconOnly:!0,onClick:function(r){r.preventDefault(),r.stopPropagation(),c()},children:(0,t.jsx)(B.Z,{stroke:1})}),(0,t.jsx)("h1",{className:"text-title m-0 p-0",children:window.document.title||y.getAppName()})]}),a==null?void 0:a.map(function(h){return h})]})};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"container max-w-lg",children:[(0,t.jsxs)("div",{className:"flex-row-between py-1",children:[A(),(0,t.jsx)("div",{className:"flex-row-center gap-2",children:l==null?void 0:l.map(function(C){return C})})]}),(0,t.jsx)("div",{children:x})]})})}},25136:function(W,U,n){var R=n(95564),u=n(85893);U.Z=function(f){var B=f.open,p=f.onClose,t=f.title,I=f.action,j=f.children;return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(R.Z,{open:B,onClose:function(){p&&p()},title:t,action:I,props:{hideCloseButton:!1,size:"md",backdrop:"blur"},children:j})})}},95564:function(W,U,n){var R=n(97857),u=n.n(R),f=n(38787),B=n(94087),p=n(78967),t=n(87740),I=n(86597),j=n(96476),x=n(77373),l=n(85893);U.Z=function(a){var y=a.open,c=a.onClose,A=a.children,C=a.title,h=a.action,r=a.pureBody,s=a.showCloseButton,i=a.bodyStyle,_=a.props,O=function(){return s?(0,l.jsx)("div",{style:{position:"relative"},children:(0,l.jsx)(f.A,{style:{position:"absolute",display:"inline",right:"20px",top:"20px",zIndex:1},isIconOnly:!0,size:"sm",radius:"full",color:"danger",onClick:function(){c&&c()},children:(0,l.jsx)(x.Z,{stroke:1})})}):null};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(B.R,u()(u()({className:"overflow-hidden",backdrop:"blur",isOpen:y,onClose:c,hideCloseButton:!0,isDismissable:!0,scrollBehavior:"outside"},_),{},{children:(0,l.jsxs)(p.A,{children:[O(),C==null||(0,l.jsx)(t.k,{className:"flex flex-col gap-1",children:C}),r&&A,r||(0,l.jsx)(I.I,{style:i,children:(0,l.jsx)("div",{style:{minHeight:300},children:A})}),h&&(0,l.jsx)(j.R,{children:h})]})}))})}},8045:function(W,U,n){var R=n(97857),u=n.n(R),f=n(14726),B=n(67294),p=n(85893);U.Z=function(t){var I=t.loading,j=t.inputProps,x=t.onSelect,l=t.uploadButtonProps,a=(0,B.useRef)(null);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{style:{display:"none"},children:(0,p.jsx)("input",u()(u()({ref:a,type:"file",multiple:!1},j),{},{onChange:function(c){try{var A=c.target.files;A&&x&&x(A)}finally{a.current&&(a.current.value="",a.current.files=null)}}}))}),(0,p.jsx)(f.ZP,u()(u()({size:"small",loading:I,type:"dashed"},l),{},{onClick:function(){var c;(c=a.current)===null||c===void 0||c.click()},children:"\u9009\u62E9\u56FE\u7247"}))]})}},6786:function(W,U,n){var R=n(15009),u=n.n(R),f=n(99289),B=n.n(f),p=n(97857),t=n.n(p),I=n(98163),j=n(45360),x=n(14726),l=n(78957),a=n(85134),y=n(55932),c=n(55793),A=n(95813),C=n(8045),h=n(68421),r=n(85893);U.Z=function(s){var i=s.data,_=s.ok,O=s.remove,e=s.loadingSave,D=s.width,b=s.defaultImage,o=s.imageProps,$=s.uploadButtonProps,G=s.removeButtonProps,N=(0,y.Kk)(i,{width:D||100}),H=function(){var v=N||b;return(0,A.Wq)(v)?null:(0,r.jsx)(I.Z,t()({src:v||"",alt:"",width:D||50},o))},E=function(){var M=B()(u()().mark(function v(g){var T;return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(d.prev=0,(0,c.Vl)(g.name)){d.next=4;break}return j.ZP.error("\u53EA\u652F\u6301 ".concat((0,c.$z)().join("\u3001")," \u683C\u5F0F\u7684\u56FE\u7247")),d.abrupt("return");case 4:return d.next=6,(0,c.ur)(g,a.v.upload.max_size);case 6:if(g=d.sent,!(g.size>a.v.upload.max_size)){d.next=10;break}return j.ZP.error("\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC71MB"),d.abrupt("return");case 10:return d.next=12,(0,c.fn)(g);case 12:T=d.sent,T&&_&&_(T),d.next=20;break;case 16:d.prev=16,d.t0=d.catch(0),console.log(d.t0),j.ZP.error("\u4E0A\u4F20\u9047\u5230\u9519\u8BEF");case 20:case"end":return d.stop()}},v,null,[[0,16]])}));return function(g){return M.apply(this,arguments)}}(),m=(0,h.Z)(E,{manual:!0}),P=function(){return(0,A.Wq)(N)||!O?null:(0,r.jsx)(x.ZP,t()(t()({size:"small",type:"dashed",danger:!0,onClick:function(){confirm("\u5220\u9664\uFF1F")&&O&&O()}},G),{},{children:"\u79FB\u9664\u56FE\u7247"}))};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(l.Z,{direction:"horizontal",children:[H(),(0,r.jsxs)(l.Z,{direction:"vertical",children:[(0,r.jsx)(C.Z,{loading:e||m.loading,inputProps:{accept:"image/*",multiple:!1},onSelect:function(v){var g=v.item(0);g&&m.run(g)},uploadButtonProps:$}),P()]})]})})}},62666:function(W,U,n){n.r(U),n.d(U,{default:function(){return H}});var R=n(84179),u=n(68421),f=n(67294),B=n(21274),p=n(85685),t=n(38295),I=n(35291),j=n(30699),x=n(95813),l=n(38787),a=n(76021),y=n(97857),c=n.n(y),A=n(5574),C=n.n(A),h=n(6786),r=n(55932),s=n(45820),i=n(25136),_=n(84367),O=n(97322),e=n(85893);function D(E){var m=E.title,P=E.right;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"cursor-pointer px-2 py-4 hover:bg-slate-100",style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-end"},children:[(0,e.jsx)("div",{className:"flex-grow",children:(0,e.jsx)("span",{children:m||""})}),(0,e.jsx)("div",{children:P}),(0,e.jsx)(O.Z,{stroke:1,color:"gray",className:"ml-1 text-gray-300"})]}),(0,e.jsx)(_.j,{})]})}function b(E){var m=E.model,P=E.ok,M=(0,f.useState)(!1),v=C()(M,2),g=v[0],T=v[1],L=(0,f.useState)(!1),d=C()(L,2),Z=d[0],K=d[1],k=(0,r.SZ)(m.Avatar,{width:80,height:80}),z=function(){return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"flex-col-top gap-1 w-full",children:[(0,e.jsx)(h.Z,{width:200,defaultImage:k,data:m.Avatar||"{}",ok:function(J){confirm("\u66F4\u6362\u5934\u50CF\uFF1F")&&(T(!0),j.x1.platform.userUpdateProfile(c()(c()({},m),{},{Avatar:JSON.stringify(J)})).then(function(S){(0,x._y)(S,function(){K(!1),(0,x.cQ)("\u4FEE\u6539\u6210\u529F"),P&&P()})}).finally(function(){T(!1)}))}}),g&&(0,e.jsx)("p",{children:"loading..."})]})})};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.Z,{title:"\u4E0A\u4F20\u5934\u50CF",open:Z,onClose:function(){K(!1)},children:z()}),(0,e.jsx)(D,{title:"",right:(0,e.jsx)(s.h,{style:{width:80,height:80},radius:"full",color:"default",isBordered:!0,src:k,onClick:function(){K(!0)},children:m.NickName||m.IdentityName||"--"})})]})}function o(E){var m=E.model,P=E.ok;return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(D,{title:"\u7528\u6237\u540D",right:(0,e.jsx)("span",{className:"text-sm text-slate-300",children:m.IdentityName||"--"})})})}function $(E){var m,P=E.model,M=E.ok,v=(0,f.useState)(!1),g=C()(v,2),T=g[0],L=g[1];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.Z,{title:"\u4FEE\u6539\u624B\u673A\u53F7",open:T,onClose:function(){return L(!1)},action:(0,e.jsx)("div",{className:"flex-row-center",children:(0,e.jsx)(l.A,{variant:"solid",isDisabled:!0,children:"\u4FDD\u5B58"})}),children:(0,e.jsx)("p",{children:"\u4FEE\u6539\u624B\u673A\u53F7"})}),(0,e.jsx)("div",{onClick:function(){L(!0)},children:(0,e.jsx)(D,{title:"\u624B\u673A\u53F7",right:(0,e.jsx)("span",{className:"text-sm text-slate-300",children:((m=P.UserMobile)===null||m===void 0?void 0:m.MobilePhone)||"--"})})})]})}var G=n(69047);function N(E){var m=E.model,P=E.ok,M=(0,f.useState)(!1),v=C()(M,2),g=v[0],T=v[1],L=(0,f.useState)(""),d=C()(L,2),Z=d[0],K=d[1],k=(0,f.useState)(!1),z=C()(k,2),w=z[0],V=z[1],J=function(){K(m.NickName||""),T(!0)},S=function(){T(!1)},X=function(){V(!0),j.x1.platform.userUpdateProfile(c()(c()({},m),{},{NickName:Z})).then(function(Q){(0,x._y)(Q,function(){S(),P&&P()})}).finally(function(){V(!1)})};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(i.Z,{open:g,onClose:S,title:"\u4FEE\u6539\u6635\u79F0",action:(0,e.jsxs)("div",{className:"flex flex-row items-center justify-center gap-2",children:[(0,e.jsx)(l.A,{onClick:S,children:"\u53D6\u6D88"}),(0,e.jsx)(l.A,{color:"primary",onClick:function(){X()},isLoading:w,children:"\u786E\u8BA4\u4FEE\u6539"})]}),children:[(0,e.jsx)("p",{className:"mb-2",children:"\u8BF7\u8F93\u5165\u6635\u79F0\u3002\u8981\u6C4210\u4E2A\u5B57\u7B26\u5185\uFF0C\u4E0D\u5305\u542B\u7279\u6B8A\u5B57\u7B26\u548C\u7A7A\u683C\u3002"}),(0,e.jsx)(G.Y,{autoFocus:!0,label:"\u65B0\u6635\u79F0",fullWidth:!0,value:Z,onChange:function(Q){return K(Q.target.value)},variant:"bordered"})]}),(0,e.jsx)("div",{onClick:function(){J()},children:(0,e.jsx)(D,{title:"\u6635\u79F0",right:(0,e.jsx)("span",{className:"text-slate-500",children:m.NickName||"--"})})})]})}function H(){var E;(0,R.Z)("\u4E2A\u4EBA\u4FE1\u606F");var m=(0,t.o)(),P=((E=m.storeUser)===null||E===void 0?void 0:E.User)||{},M=(0,u.Z)(j.x1.mall.userAuthStoreUserAuth,{manual:!0,onSuccess:function(g,T){(0,x._y)(g,function(){m.storeUserAuthResult=g.data||{}})}});return(0,f.useEffect)(function(){M.run({})},[]),(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(p.Z,{children:(0,e.jsxs)("div",{className:"container max-w-lg",children:[M.loading&&(0,e.jsx)(B.Z,{}),(0,e.jsxs)("div",{className:"mb-2 overflow-hidden rounded-md bg-white",children:[(0,e.jsx)(b,{model:P,ok:function(){M.run({})}}),(0,e.jsx)(o,{model:P,ok:function(){M.run({})}}),(0,e.jsx)(N,{model:P,ok:function(){M.run({})}}),(0,e.jsx)($,{model:P,ok:function(){M.run({})}})]}),(0,e.jsxs)("div",{className:"mb-2 overflow-hidden rounded-md bg-white",children:[(0,e.jsx)("div",{onClick:function(){},children:(0,e.jsx)(D,{title:"\u670D\u52A1\u7EC6\u5219",right:null})}),(0,e.jsx)("div",{onClick:function(){},children:(0,e.jsx)(D,{title:"\u5173\u4E8E\u6211\u4EEC",right:null})})]}),(0,I.lE)(m.storeUser)&&(0,e.jsx)("div",{className:"mx-5 my-10",children:(0,e.jsx)(l.A,{fullWidth:!0,variant:"solid",color:"danger",onClick:function(){confirm("\u786E\u5B9A\u9000\u51FA\u561B\uFF1F")&&((0,x.M8)(""),a.m8.push({pathname:"/"}))},children:"\u9000\u51FA\u767B\u5F55"})})]})})})}},55793:function(W,U,n){n.d(U,{$z:function(){return x},Ac:function(){return C},Vl:function(){return l},fn:function(){return c},ur:function(){return y}});var R=n(15009),u=n.n(R),f=n(99289),B=n.n(f),p=n(76857),t=n(95813),I=n(98005),j=n.n(I),x=function(){return["jpg","jpeg","png","gif"]},l=function(r){var s,i=((s=(0,t.mD)(r))===null||s===void 0?void 0:s.toLowerCase())||"";return x().indexOf(i)>=0},a=function(r,s,i,_){return new Promise(function(O,e){var D=new(j())(r,{maxHeight:s,maxWidth:i,quality:_,success:function(o){O(o)},error:function(o){e(o)}});console.log(D)})},y=function(){var h=B()(u()().mark(function r(s,i){var _,O,e,D;return u()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(!(s.size<=i)){o.next=2;break}return o.abrupt("return",s);case 2:return o.next=4,a(s,void 0,void 0,.9);case 4:if(s=o.sent,!(s.size<=i)){o.next=7;break}return o.abrupt("return",s);case 7:_=5,O=300,e=1e3,D=0;case 11:if(!(++D<=_)){o.next=22;break}return o.next=14,a(s,e,e,1);case 14:if(s=o.sent,!(s.size<=i)){o.next=17;break}return o.abrupt("return",s);case 17:if(e-=O,!(e<=0)){o.next=20;break}return o.abrupt("break",22);case 20:o.next=11;break;case 22:return o.abrupt("return",s);case 23:case"end":return o.stop()}},r)}));return function(s,i){return h.apply(this,arguments)}}(),c=function(){var h=B()(u()().mark(function r(s){var i,_;return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A([s]);case 2:if(i=e.sent,_=i.at(0),_){e.next=6;break}throw new Error("response error");case 6:return e.abrupt("return",_);case 7:case"end":return e.stop()}},r)}));return function(s){return h.apply(this,arguments)}}(),A=function(){var h=B()(u()().mark(function r(s){var i,_;return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=new FormData,s.forEach(function(D,b){i.append("formFileCollection",D,D.name)}),e.next=4,p.M.post("/api/platform/storage/upload",i);case 4:if(_=e.sent,!_.data.Error){e.next=7;break}throw new Error(_.data.Error.Message||"upload error");case 7:return e.abrupt("return",_.data.Data||[]);case 8:case"end":return e.stop()}},r)}));return function(s){return h.apply(this,arguments)}}(),C=function(r){return new Promise(function(s,i){var _=new FileReader;_.onload=function(){s(_.result)},_.onerror=function(O){i(O)},_.readAsDataURL(r)})}}}]);
