"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9768],{23806:function(z,O,r){var l=r(1288),f=r(85893);O.Z=function(g){var c=g.model,p=g.fallback;if(c==null||c==null)return null;var P=c==null?void 0:c.CreationTime,h=c==null?void 0:c.LastModificationTime;return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("div",{style:{},children:[(0,f.jsx)("div",{children:(0,f.jsx)(l.Z,{prefix:(0,f.jsx)("span",{children:"\u521B\u5EFA\uFF1A"}),onlyDate:!0,timeStr:P,fallback:p})}),(0,f.jsx)("div",{children:(0,f.jsx)(l.Z,{prefix:(0,f.jsx)("span",{children:"\u4FEE\u6539\uFF1A"}),onlyDate:!0,timeStr:h,fallback:p})})]})})}},1288:function(z,O,r){var l=r(78957),f=r(83062),g=r(46629),c=r(85893);O.Z=function(p){var P,h=p.timeStr,E=p.fallback,x=p.onlyDate,F=p.prefix,y=(P=(0,g.mg)(h))===null||P===void 0?void 0:P.add(g.Mg,"hour");if(!y)return E||null;var L=(0,g.ND)().utc().add(g.Mg,"hour"),K=y.isSame(L,"year"),D=y.diff(L,"day"),o=K?y.format(g.AK):y.format(g.vc),Q=function(){return(0,c.jsxs)("div",{children:[(0,c.jsxs)(l.Z,{direction:"horizontal",children:[(0,c.jsx)("div",{children:y.fromNow()}),(0,c.jsx)("div",{children:y.format(g.On)})]}),(0,c.jsx)("div",{children:y.format(g.t9)})]})};return(0,c.jsx)(f.Z,{title:Q(),children:(0,c.jsxs)(l.Z,{direction:"horizontal",children:[F,(0,c.jsx)("div",{className:"inline-block cursor-pointer hover:bg-orange-500",children:x?y.format(g.vc):y.format(g.dq)})]})})}},11518:function(z,O,r){var l=r(55241),f=r(78957),g=r(7134),c=r(55932),p=r(66419),P=r(8885),h=r(85893);O.Z=function(E){var x=E.model;if(!x)return null;var F=(0,c.SZ)(x.Avatar,{width:100,height:100}),y=(0,p.zO)([x.NickName,x.IdentityName,x.Id].filter(function(L){return L&&L.length>0}).at(0)||"--",10);return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(l.Z,{content:(0,h.jsx)(P.Z,{model:x}),children:(0,h.jsxs)(f.Z,{direction:"horizontal",children:[(0,h.jsx)(g.C,{size:"small",shape:"square",src:F,children:y}),(0,h.jsx)("span",{children:(0,h.jsx)("a",{children:y})})]})})})}},8885:function(z,O,r){var l=r(78957),f=r(7134),g=r(55932),c=r(66419),p=r(85893);O.Z=function(P){var h,E=P.model;if(!E)return null;var x=(0,g.SZ)(E.Avatar,{width:100,height:100}),F=(0,c.zO)([E.NickName,E.IdentityName,E.Id].filter(function(y){return y&&y.length>0}).at(0)||"--",10);return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(l.Z,{direction:"horizontal",children:[(0,p.jsx)("div",{children:(0,p.jsx)(f.C,{src:x,size:100})}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("p",{children:["\u6635\u79F0\uFF1A",F]}),(0,p.jsxs)("p",{children:["\u7528\u6237\u540D\uFF1A",(E==null?void 0:E.IdentityName)||"--"]}),(0,p.jsxs)("p",{children:["\u624B\u673A\u53F7\uFF1A",(E==null||(h=E.UserMobile)===null||h===void 0?void 0:h.MobilePhone)||"--"]})]})]})})}},22229:function(z,O,r){r.r(O),r.d(O,{default:function(){return $}});var l=r(97857),f=r.n(l),g=r(5574),c=r.n(g),p=r(45360),P=r(14726),h=r(4393),E=r(80799),x=r(67294),F=r(23806),y=r(11518),L=r(30699),K=r(66419),D=r(26412),o=r(85893),Q=function(T){var j=T.model;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(D.Z,{title:"\u65E5\u5FD7\u7EC6\u8282",bordered:!0,children:[(0,o.jsx)(D.Z.Item,{label:"\u8BF7\u6C42\u5730\u5740",children:j.RequestPath}),(0,o.jsx)(D.Z.Item,{label:"ip\u5730\u5740",children:j.IpAddress}),(0,o.jsx)(D.Z.Item,{label:"\u4F4D\u7F6E",children:[j.GeoCountry,j.GeoCity].filter(function(U){return!(0,K.Wq)(U)}).join("/")}),(0,o.jsx)(D.Z.Item,{label:"\u5750\u6807",children:"".concat(j.Lng,",").concat(j.Lat)}),(0,o.jsx)(D.Z.Item,{label:"\u5BA2\u6237\u7AEF\u4FE1\u606F",children:j.UserAgent}),(0,o.jsx)(D.Z.Item,{label:"\u8BBE\u5907\u7C7B\u578B",children:j.Device}),(0,o.jsx)(D.Z.Item,{label:"\u6D4F\u89C8\u5668\u7C7B\u578B",span:2,children:j.BrowserType}),(0,o.jsx)(D.Z.Item,{label:"\u8BF7\u6C42\u6765\u6E90\u9875\u9762",span:3,children:j.UrlReferrer}),(0,o.jsx)(D.Z.Item,{label:"\u503C",children:j.Value}),(0,o.jsx)(D.Z.Item,{label:"\u8BE6\u7EC6\u53C2\u6570",children:j.Data})]})})},le=Q,J=r(11346),se=r(71230),ie=r(15746),de=r(96864),ae=r(34041),I={Login:-1,VisiteGoods:1,SearchGoods:2,PlaceOrder:3,CreatePayment:4,VisitePage:5,GetCoupon:6,AddShoppingCart:7,DeleteShoppingCart:8,AddFavorite:9,DeleteFavorite:10,AuditLog:11},Y=[{id:I.Login,name:"\u767B\u5F55"},{id:I.VisiteGoods,name:"\u67E5\u770B\u5546\u54C1"},{id:I.SearchGoods,name:"\u641C\u7D22\u5546\u54C1"},{id:I.PlaceOrder,name:"\u4E0B\u5355"},{id:I.CreatePayment,name:"\u5524\u8D77\u652F\u4ED8"},{id:I.VisitePage,name:"\u67E5\u770B\u9875\u9762"},{id:I.GetCoupon,name:"\u9886\u53D6\u4F18\u60E0\u5238"},{id:I.AddShoppingCart,name:"\u6DFB\u52A0\u8D2D\u7269\u8F66"},{id:I.DeleteShoppingCart,name:"\u5220\u9664\u8D2D\u7269\u8F66"},{id:I.AddFavorite,name:"\u6DFB\u52A0\u6536\u85CF"},{id:I.DeleteFavorite,name:"\u5220\u9664\u6536\u85CF"},{id:I.AuditLog,name:"\u5BA1\u8BA1\u65E5\u5FD7"}],G={ActivityLogTypes:I,ActivityLogTypesDescription:Y},B=r(46629),ce=function(N){var T,j,U=N.query,V=N.onSearch,H=(0,x.useState)({}),w=c()(H,2),W=w[0],Z=w[1],_=function(t){t.Page=1,V&&V(t)};return(0,x.useEffect)(function(){Z(U)},[]),(0,o.jsx)(h.Z,{bordered:!1,style:{marginBottom:10},children:(0,o.jsx)(J.Z,{children:(0,o.jsxs)(se.Z,{gutter:10,children:[(0,o.jsx)(ie.Z,{span:6,children:(0,o.jsx)(J.Z.Item,{label:"\u65F6\u95F4",children:(0,o.jsx)(de.default.RangePicker,{value:[((T=(0,B.mg)(W.StartTime))===null||T===void 0?void 0:T.add(B.Mg,"hour"))||null,((j=(0,B.mg)(W.EndTime))===null||j===void 0?void 0:j.add(B.Mg,"hour"))||null],onChange:function(t){Z(function(a){var n,i;return f()(f()({},a),{},{StartTime:t==null||(n=t.at(0))===null||n===void 0?void 0:n.add(-B.Mg,"hour").format(B.dq),EndTime:t==null||(i=t.at(1))===null||i===void 0?void 0:i.add(-B.Mg,"hour").format(B.dq)})})}})})}),(0,o.jsx)(ie.Z,{span:6,children:(0,o.jsx)(J.Z.Item,{label:"\u65E5\u5FD7\u7C7B\u578B",children:(0,o.jsx)(ae.Z,{placeholder:"\u65E5\u5FD7\u7C7B\u578B",allowClear:!0,options:G.ActivityLogTypesDescription.map(function(e){return{value:e.id,label:e.name}}),value:W.ActivityLogTypeId,onChange:function(t){Z(function(a){return f()(f()({},a),{},{ActivityLogTypeId:t})})},onClear:function(){Z(function(t){return f()(f()({},t),{},{ActivityLogTypeId:void 0})})}})})}),(0,o.jsx)(ie.Z,{span:6,children:(0,o.jsx)(J.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,o.jsx)(P.ZP,{type:"primary",htmlType:"submit",onClick:function(){return _(W)},children:"\u641C\u7D22"})})})]})})})},$=function(){var N=(0,x.useState)(!0),T=c()(N,2),j=T[0],U=T[1],V=(0,x.useState)({Items:[],TotalCount:0}),H=c()(V,2),w=H[0],W=H[1],Z=(0,x.useState)({Page:1}),_=c()(Z,2),e=_[0],t=_[1],a=(0,x.useState)(0),n=c()(a,2),i=n[0],m=n[1],s=function(d){U(!0),L.x1.mallAdmin.activityLogQueryActivityLogPaging(d).then(function(u){(0,K._y)(u,function(){W(u.data||{})})}).finally(function(){U(!1)})},b=function(d){confirm("\u5220\u9664\uFF1F")&&(m(d.Id),L.x1.mallAdmin.activityLogDeleteActivityLog({Id:d.Id}).then(function(u){(0,K._y)(u,function(){p.ZP.success("\u5220\u9664\u6210\u529F"),s(e)})}).finally(function(){m(void 0)}))},S=[{title:"\u65E5\u5FD7\u5185\u5BB9",render:function(d,u){return u.Comment||"--"}},{title:"\u65E5\u5FD7\u7C7B\u578B",render:function(d,u){var C=G.ActivityLogTypesDescription.find(function(M){return M.id==u.ActivityLogTypeId});return C?(0,o.jsx)("span",{children:C.name||"--"}):"--"}},{title:"\u7BA1\u7406\u5458",render:function(d,u){var C;return(0,o.jsx)(y.Z,{model:(C=u.Admin)===null||C===void 0?void 0:C.User})}},{title:"\u7528\u6237",render:function(d,u){var C;return(0,o.jsx)(y.Z,{model:(C=u.StoreUser)===null||C===void 0?void 0:C.User})}},{title:"\u5730\u5740",render:function(d,u){return u.GeoCity||u.GeoCountry||"--"}},{title:"\u65F6\u95F4",render:function(d,u){return(0,o.jsx)(F.Z,{model:u})}},{fixed:"right",title:"\u64CD\u4F5C",width:200,render:function(d,u){return(0,o.jsx)(P.ZP.Group,{children:(0,o.jsx)(P.ZP,{loading:i==u.Id,type:"link",danger:!0,onClick:function(){b(u)},children:"\u5220\u9664"})})}}];return(0,x.useEffect)(function(){s(e)},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(ce,{query:e,onSearch:function(d){t(d),s(d)}}),(0,o.jsx)(h.Z,{title:"\u6D3B\u52A8\u65E5\u5FD7",children:(0,o.jsx)(E.Z,{style:{width:"100%"},rowKey:function(d){return d.Id||0},loading:j,columns:S,dataSource:w.Items||[],expandable:{expandedRowRender:function(d){return(0,o.jsx)("div",{style:{padding:10,border:"5px dashed orange"},children:(0,o.jsx)(le,{model:d})})}},pagination:{showSizeChanger:!1,pageSize:20,current:e.Page,total:w.TotalCount,onChange:function(d){var u=f()(f()({},e),{},{Page:d});t(u),s(u)}}})})]})}},15746:function(z,O,r){var l=r(21584);O.Z=l.Z},26412:function(z,O,r){r.d(O,{Z:function(){return _}});var l=r(67294),f=r(93967),g=r.n(f),c=r(74443),p=r(53124),P=r(98675),h=r(25378),x={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1},y=l.createContext({}),L=r(50344),K=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(a[n[i]]=e[n[i]]);return a};const D=e=>(0,L.Z)(e).map(t=>Object.assign(Object.assign({},t==null?void 0:t.props),{key:t.key}));function o(e,t,a){const n=l.useMemo(()=>t||D(a),[t,a]);return l.useMemo(()=>n.map(m=>{var{span:s}=m,b=K(m,["span"]);return s==="filled"?Object.assign(Object.assign({},b),{filled:!0}):Object.assign(Object.assign({},b),{span:typeof s=="number"?s:(0,c.m9)(e,s)})}),[n,e])}var Q=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(a[n[i]]=e[n[i]]);return a};function le(e,t){let a=[],n=[],i=!1,m=0;return e.filter(s=>s).forEach(s=>{const{filled:b}=s,S=Q(s,["filled"]);if(b){n.push(S),a.push(n),n=[],m=0;return}const v=t-m;m+=s.span||1,m>=t?(m>t?(i=!0,n.push(Object.assign(Object.assign({},S),{span:v}))):n.push(S),a.push(n),n=[],m=0):n.push(S)}),n.length>0&&a.push(n),a=a.map(s=>{const b=s.reduce((S,v)=>S+(v.span||1),0);if(b<t){const S=s[s.length-1];return S.span=t-b+1,s}return s}),[a,i]}var se=(e,t)=>{const[a,n]=(0,l.useMemo)(()=>le(t,e),[t,e]);return a},de=e=>{let{children:t}=e;return t};function ae(e){return e!=null}var Y=e=>{const{itemPrefixCls:t,component:a,span:n,className:i,style:m,labelStyle:s,contentStyle:b,bordered:S,label:v,content:d,colon:u,type:C}=e,M=a;return S?l.createElement(M,{className:g()({[`${t}-item-label`]:C==="label",[`${t}-item-content`]:C==="content"},i),style:m,colSpan:n},ae(v)&&l.createElement("span",{style:s},v),ae(d)&&l.createElement("span",{style:b},d)):l.createElement(M,{className:g()(`${t}-item`,i),style:m,colSpan:n},l.createElement("div",{className:`${t}-item-container`},(v||v===0)&&l.createElement("span",{className:g()(`${t}-item-label`,{[`${t}-item-no-colon`]:!u}),style:s},v),(d||d===0)&&l.createElement("span",{className:g()(`${t}-item-content`),style:b},d)))};function G(e,t,a){let{colon:n,prefixCls:i,bordered:m}=t,{component:s,type:b,showLabel:S,showContent:v,labelStyle:d,contentStyle:u}=a;return e.map((C,M)=>{let{label:q,children:oe,prefixCls:k=i,className:ee,style:te,labelStyle:R,contentStyle:A,span:X=1,key:ne}=C;return typeof s=="string"?l.createElement(Y,{key:`${b}-${ne||M}`,className:ee,style:te,labelStyle:Object.assign(Object.assign({},d),R),contentStyle:Object.assign(Object.assign({},u),A),span:X,colon:n,component:s,itemPrefixCls:k,bordered:m,label:S?q:null,content:v?oe:null,type:b}):[l.createElement(Y,{key:`label-${ne||M}`,className:ee,style:Object.assign(Object.assign(Object.assign({},d),te),R),span:1,colon:n,component:s[0],itemPrefixCls:k,bordered:m,label:q,type:"label"}),l.createElement(Y,{key:`content-${ne||M}`,className:ee,style:Object.assign(Object.assign(Object.assign({},u),te),A),span:X*2-1,component:s[1],itemPrefixCls:k,bordered:m,content:oe,type:"content"})]})}var ce=e=>{const t=l.useContext(y),{prefixCls:a,vertical:n,row:i,index:m,bordered:s}=e;return n?l.createElement(l.Fragment,null,l.createElement("tr",{key:`label-${m}`,className:`${a}-row`},G(i,e,Object.assign({component:"th",type:"label",showLabel:!0},t))),l.createElement("tr",{key:`content-${m}`,className:`${a}-row`},G(i,e,Object.assign({component:"td",type:"content",showContent:!0},t)))):l.createElement("tr",{key:m,className:`${a}-row`},G(i,e,Object.assign({component:s?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))},$=r(11568),N=r(14747),T=r(83559),j=r(83262);const U=e=>{const{componentCls:t,labelBg:a}=e;return{[`&${t}-bordered`]:{[`> ${t}-view`]:{border:`${(0,$.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"> table":{tableLayout:"auto"},[`${t}-row`]:{borderBottom:`${(0,$.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBottom:"none"},[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${(0,$.bf)(e.padding)} ${(0,$.bf)(e.paddingLG)}`,borderInlineEnd:`${(0,$.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderInlineEnd:"none"}},[`> ${t}-item-label`]:{color:e.colorTextSecondary,backgroundColor:a,"&::after":{display:"none"}}}},[`&${t}-middle`]:{[`${t}-row`]:{[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${(0,$.bf)(e.paddingSM)} ${(0,$.bf)(e.paddingLG)}`}}},[`&${t}-small`]:{[`${t}-row`]:{[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${(0,$.bf)(e.paddingXS)} ${(0,$.bf)(e.padding)}`}}}}}},V=e=>{const{componentCls:t,extraColor:a,itemPaddingBottom:n,itemPaddingEnd:i,colonMarginRight:m,colonMarginLeft:s,titleMarginBottom:b}=e;return{[t]:Object.assign(Object.assign(Object.assign({},(0,N.Wf)(e)),U(e)),{"&-rtl":{direction:"rtl"},[`${t}-header`]:{display:"flex",alignItems:"center",marginBottom:b},[`${t}-title`]:Object.assign(Object.assign({},N.vS),{flex:"auto",color:e.titleColor,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}),[`${t}-extra`]:{marginInlineStart:"auto",color:a,fontSize:e.fontSize},[`${t}-view`]:{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed",borderCollapse:"collapse"}},[`${t}-row`]:{"> th, > td":{paddingBottom:n,paddingInlineEnd:i},"> th:last-child, > td:last-child":{paddingInlineEnd:0},"&:last-child":{borderBottom:"none","> th, > td":{paddingBottom:0}}},[`${t}-item-label`]:{color:e.colorTextTertiary,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:`${(0,$.bf)(s)} ${(0,$.bf)(m)}`},[`&${t}-item-no-colon::after`]:{content:'""'}},[`${t}-item-no-label`]:{"&::after":{margin:0,content:'""'}},[`${t}-item-content`]:{display:"table-cell",flex:1,color:e.contentColor,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"},[`${t}-item`]:{paddingBottom:0,verticalAlign:"top","&-container":{display:"flex",[`${t}-item-label`]:{display:"inline-flex",alignItems:"baseline"},[`${t}-item-content`]:{display:"inline-flex",alignItems:"baseline",minWidth:"1em"}}},"&-middle":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingSM}}},"&-small":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingXS}}}})}},H=e=>({labelBg:e.colorFillAlter,titleColor:e.colorText,titleMarginBottom:e.fontSizeSM*e.lineHeightSM,itemPaddingBottom:e.padding,itemPaddingEnd:e.padding,colonMarginRight:e.marginXS,colonMarginLeft:e.marginXXS/2,contentColor:e.colorText,extraColor:e.colorText});var w=(0,T.I$)("Descriptions",e=>{const t=(0,j.IX)(e,{});return V(t)},H),W=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(a[n[i]]=e[n[i]]);return a};const Z=e=>{const{prefixCls:t,title:a,extra:n,column:i,colon:m=!0,bordered:s,layout:b,children:S,className:v,rootClassName:d,style:u,size:C,labelStyle:M,contentStyle:q,items:oe}=e,k=W(e,["prefixCls","title","extra","column","colon","bordered","layout","children","className","rootClassName","style","size","labelStyle","contentStyle","items"]),{getPrefixCls:ee,direction:te,descriptions:R}=l.useContext(p.E_),A=ee("descriptions",t),X=(0,h.Z)(),ne=l.useMemo(()=>{var re;return typeof i=="number"?i:(re=(0,c.m9)(X,Object.assign(Object.assign({},x),i)))!==null&&re!==void 0?re:3},[X,i]),fe=o(X,oe,S),ue=(0,P.Z)(C),ve=se(ne,fe),[ge,pe,ye]=w(A),he=l.useMemo(()=>({labelStyle:M,contentStyle:q}),[M,q]);return ge(l.createElement(y.Provider,{value:he},l.createElement("div",Object.assign({className:g()(A,R==null?void 0:R.className,{[`${A}-${ue}`]:ue&&ue!=="default",[`${A}-bordered`]:!!s,[`${A}-rtl`]:te==="rtl"},v,d,pe,ye),style:Object.assign(Object.assign({},R==null?void 0:R.style),u)},k),(a||n)&&l.createElement("div",{className:`${A}-header`},a&&l.createElement("div",{className:`${A}-title`},a),n&&l.createElement("div",{className:`${A}-extra`},n)),l.createElement("div",{className:`${A}-view`},l.createElement("table",null,l.createElement("tbody",null,ve.map((re,me)=>l.createElement(ce,{key:me,index:me,colon:m,prefixCls:A,vertical:b==="vertical",bordered:s,row:re}))))))))};Z.Item=de;var _=Z},71230:function(z,O,r){var l=r(92820);O.Z=l.Z}}]);
