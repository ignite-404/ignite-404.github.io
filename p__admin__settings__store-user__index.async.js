"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6346],{74590:function(ee,Y,n){var H=n(15009),r=n.n(H),A=n(99289),t=n.n(A),M=n(5574),Q=n.n(M),U=n(83062),R=n(28036),N=n(67294),u=n(85893);Y.Z=function(d){var D=d.action,L=d.confirmText,I=d.hide,W=(0,N.useState)(!1),z=Q()(W,2),G=z[0],J=z[1],w=L||"\u786E\u5B9A\u5220\u9664\uFF1F",$=function(){var y=t()(r()().mark(function e(){return r()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:if(confirm(w)){V.next=2;break}return V.abrupt("return");case 2:return J(!0),V.prev=3,V.next=6,D();case 6:return V.prev=6,J(!1),V.finish(6);case 9:case"end":return V.stop()}},e,null,[[3,,6,9]])}));return function(){return y.apply(this,arguments)}}();return I?null:(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(U.Z,{title:w,children:(0,u.jsx)(R.ZP,{loading:G,danger:!0,type:"link",onClick:function(){$()},children:"\u5220\u9664"})})})}},23806:function(ee,Y,n){var H=n(1288),r=n(85893);Y.Z=function(A){var t=A.model,M=A.fallback;if(t==null||t==null)return null;var Q=t==null?void 0:t.CreationTime,U=t==null?void 0:t.LastModificationTime;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{style:{},children:[(0,r.jsx)("div",{children:(0,r.jsx)(H.Z,{prefix:(0,r.jsx)("span",{children:"\u521B\u5EFA\uFF1A"}),onlyDate:!0,timeStr:Q,fallback:M})}),(0,r.jsx)("div",{children:(0,r.jsx)(H.Z,{prefix:(0,r.jsx)("span",{children:"\u4FEE\u6539\uFF1A"}),onlyDate:!0,timeStr:U,fallback:M})})]})})}},1288:function(ee,Y,n){var H=n(78957),r=n(83062),A=n(46629),t=n(85893);Y.Z=function(M){var Q,U=M.timeStr,R=M.fallback,N=M.onlyDate,u=M.prefix,d=(Q=(0,A.QW)(U))===null||Q===void 0?void 0:Q.local();if(!d)return R||null;var D=(0,A.ND)().utc().local(),L=d.isSame(D,"year"),I=d.diff(D,"day"),W=L?d.format(A.AK):d.format(A.vc),z=function(){return(0,t.jsxs)("div",{children:[(0,t.jsxs)(H.Z,{direction:"horizontal",children:[(0,t.jsx)("div",{children:d.fromNow()}),(0,t.jsx)("div",{children:d.format(A.On)})]}),(0,t.jsx)("div",{children:d.format(A.t9)})]})};return(0,t.jsx)(r.Z,{title:z(),children:(0,t.jsxs)(H.Z,{direction:"horizontal",children:[u,(0,t.jsx)("div",{className:"inline-block cursor-pointer hover:bg-orange-500",children:N?d.format(A.vc):d.format(A.dq)})]})})}},11518:function(ee,Y,n){var H=n(55241),r=n(78957),A=n(7134),t=n(55932),M=n(95813),Q=n(8885),U=n(85893);Y.Z=function(R){var N=R.model;if(!N)return null;var u=(0,t.SZ)(N.Avatar,{width:100,height:100}),d=(0,M.zO)([N.NickName,N.IdentityName,N.Id].filter(function(D){return D&&D.length>0}).at(0)||"--",10);return(0,U.jsx)(U.Fragment,{children:(0,U.jsx)(H.Z,{content:(0,U.jsx)(Q.Z,{model:N}),children:(0,U.jsxs)(r.Z,{direction:"horizontal",children:[(0,U.jsx)(A.C,{size:"small",shape:"square",src:u,children:d}),(0,U.jsx)("span",{children:(0,U.jsx)("a",{children:d})})]})})})}},8885:function(ee,Y,n){var H=n(78957),r=n(7134),A=n(55932),t=n(95813),M=n(85893);Y.Z=function(Q){var U,R=Q.model;if(!R)return null;var N=(0,A.SZ)(R.Avatar,{width:100,height:100}),u=(0,t.zO)([R.NickName,R.IdentityName,R.Id].filter(function(d){return d&&d.length>0}).at(0)||"--",10);return(0,M.jsx)(M.Fragment,{children:(0,M.jsxs)(H.Z,{direction:"horizontal",children:[(0,M.jsx)("div",{children:(0,M.jsx)(r.C,{src:N,size:100})}),(0,M.jsxs)("div",{children:[(0,M.jsxs)("p",{children:["\u6635\u79F0\uFF1A",u]}),(0,M.jsxs)("p",{children:["\u7528\u6237\u540D\uFF1A",(R==null?void 0:R.IdentityName)||"--"]}),(0,M.jsxs)("p",{children:["\u624B\u673A\u53F7\uFF1A",(R==null||(U=R.UserMobile)===null||U===void 0?void 0:U.MobilePhone)||"--"]})]})]})})}},92088:function(ee,Y,n){n.d(Y,{LB:function(){return R},t2:function(){return d},tz:function(){return u},vI:function(){return N}});var H=n(5574),r=n.n(H),A=n(67294),t=n(18629),M=n(46629),Q=n(76021),U=n(95813),R=function(){var L=(0,Q.YB)(),I=function(z,G){var J=L.formatMessage({id:z,defaultMessage:G});return(0,U.Wq)(J)?null:J};return{intl:L,format_message:I}},N=function(){var L=(0,A.useState)(void 0),I=r()(L,2),W=I[0],z=I[1];return(0,t.Z)(function(){z(M.ND.utc())},1e3,{immediate:!0}),W||M.ND.utc()},u=function(L){var I=(0,A.useState)(L||!1),W=r()(I,2),z=W[0],G=W[1];return{open:z,setOpen:function(){return G(!0)},setClose:function(){return G(!1)}}},d=function(L){var I=(0,A.useState)(L),W=r()(I,2),z=W[0],G=W[1];return{data:z,open:z!=null,setData:function(w){return G(w)},onHide:function(){return G(void 0)}}}},64766:function(ee,Y,n){n.r(Y),n.d(Y,{default:function(){return ze}});var H=n(5574),r=n.n(H),A=n(92398),t=n(67294),M=n(76021),Q=n(17226),U=n(87399),R=n(27909),N=n(97857),u=n.n(N),d=n(45360),D=n(28036),L=n(85576),I=n(11346),W=n(65233),z=n(24435),G=n(4393),J=n(80799),w=n(38295),$=n(30699),y=n(95813),e=n(85893),le=function(){var m=(0,t.useState)(!1),s=r()(m,2),a=s[0],o=s[1],_=(0,t.useState)(!1),h=r()(_,2),C=h[0],P=h[1],S=(0,t.useState)(""),c=r()(S,2),j=c[0],Z=c[1],T=(0,t.useState)(!1),f=r()(T,2),p=f[0],O=f[1],K=(0,t.useState)({}),l=r()(K,2),g=l[0],B=l[1],X=(0,w.o)(),q=function(){o(!0),X.queryGrades().finally(function(){return o(!1)})},E=function(k){P(!0),$.x1.mallAdmin.gradeSave(u()({},k)).then(function(F){(0,y._y)(F,function(){d.ZP.success("\u4FDD\u5B58\u6210\u529F"),O(!1),q()})}).finally(function(){P(!1)})},x=function(k){confirm("\u786E\u5B9A\u5220\u9664\uFF1F")&&(Z(k.Id||""),$.x1.mallAdmin.gradeUpdateStatus({Id:k.Id,IsDeleted:!0}).then(function(F){(0,y._y)(F,function(){d.ZP.success("\u5220\u9664\u6210\u529F"),q()})}).finally(function(){Z("")}))},i=[{title:"\u4F1A\u5458\u540D",render:function(k,F){return F.Name}},{title:"\u4F1A\u5458\u63CF\u8FF0",render:function(k,F){return F.Description}},{title:"\u6392\u5E8F",render:function(k,F){return F.Sort}},{title:"\u4F1A\u5458\u4EBA\u6570",render:function(k,F){return F.UserCount}},{title:"\u64CD\u4F5C",width:200,render:function(k,F){return(0,e.jsxs)(D.ZP.Group,{children:[(0,e.jsx)(D.ZP,{type:"link",onClick:function(){B(F),O(!0)},children:"\u7F16\u8F91"}),(0,e.jsx)(D.ZP,{type:"link",loading:j===F.Id,onClick:function(){x(F)},danger:!0,children:"\u5220\u9664"})]})}}];return(0,t.useEffect)(function(){q()},[]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(L.Z,{title:"\u7F16\u8F91\u4EF7\u683C",open:p,onCancel:function(){O(!1)},confirmLoading:C,onOk:function(){E(g)},children:(0,e.jsxs)(I.Z,{children:[(0,e.jsx)(I.Z.Item,{label:"\u540D\u79F0",children:(0,e.jsx)(W.Z,{value:g.Name||"",onChange:function(k){B(function(F){return u()(u()({},F),{},{Name:k.target.value})})}})}),(0,e.jsx)(I.Z.Item,{label:"\u63CF\u8FF0",children:(0,e.jsx)(W.Z,{value:g.Description||"",onChange:function(k){B(function(F){return u()(u()({},F),{},{Description:k.target.value})})}})}),(0,e.jsx)(I.Z.Item,{label:"\u6392\u5E8F",children:(0,e.jsx)(z.Z,{value:g.Sort||0,onChange:function(k){B(function(F){return u()(u()({},F),{},{Sort:k||0})})}})})]})}),(0,e.jsx)(G.Z,{title:"\u4F1A\u5458\u7B49\u7EA7",loading:a,style:{marginBottom:10},extra:(0,e.jsx)(D.ZP,{type:"primary",onClick:function(){O(!0),B({})},children:"\u65B0\u589E"}),children:(0,e.jsx)(J.Z,{dataSource:(0,y.iu)(X.grades||[]),columns:i,pagination:!1})})]})},V=n(34041),de=n(23806),ve=n(1288),ce=n(11518),he=n(35291),xe=n(40056),fe=n(71230),ne=n(15746),re=n(55742),te=n(66309),ge=function(m){var s=m.model,a=m.ok,o=(0,t.useState)(!1),_=r()(o,2),h=_[0],C=_[1],P=(0,t.useState)(!1),S=r()(P,2),c=S[0],j=S[1],Z=(0,t.useState)({}),T=r()(Z,2),f=T[0],p=T[1],O=function(){if((f.Balance||0)<=0){d.ZP.error("\u91D1\u989D\u4E0D\u80FD\u4E3A0");return}C(!0),f.UserId=s.Id||0,$.x1.mallAdmin.balanceUpdateUserBalance(f).then(function(g){(0,y._y)(g,function(){d.ZP.success("\u4FDD\u5B58\u6210\u529F"),j(!1),a&&a()})}).finally(function(){C(!1)})};(0,t.useEffect)(function(){c&&p({ActionType:1,Balance:0,UserId:0,Message:""})},[c]);var K=f.ActionType==-1?s.Balance:9999999;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(L.Z,{title:"\u8C03\u6574",open:c,onCancel:function(){j(!1)},confirmLoading:h,onOk:function(){O()},children:[(0,e.jsx)(xe.Z,{message:"\u5F53\u524D\u4F59\u989D\uFF1A".concat(s.Balance),style:{marginBottom:10}}),(0,e.jsxs)(fe.Z,{gutter:[15,15],children:[(0,e.jsx)(ne.Z,{span:24,children:(0,e.jsx)(z.Z,{title:"\u91D1\u989D",min:0,max:K,value:f.Balance,onChange:function(g){p(u()(u()({},f),{},{Balance:g||0}))}})}),(0,e.jsx)(ne.Z,{span:24,children:(0,e.jsxs)(re.ZP.Group,{value:f.ActionType,onChange:function(g){p(u()(u()({},f),{},{ActionType:g.target.value}))},children:[(0,e.jsx)(re.ZP,{value:-1,children:"\u6263\u51CF"}),(0,e.jsx)(re.ZP,{value:1,children:"\u5145\u503C"})]})}),(0,e.jsx)(ne.Z,{span:24,children:(0,e.jsx)(W.Z.TextArea,{placeholder:"\u63CF\u8FF0\u4E00\u4E0B\u8FD9\u6B21\u8C03\u6574...",value:f.Message||"",onChange:function(g){p(u()(u()({},f),{},{Message:g.target.value}))}})})]})]}),(0,e.jsx)(te.Z,{color:"warning",onClick:function(){j(!0)},style:{cursor:"pointer"},children:(0,y.lb)(s.Balance||0)})]})},se=n(72269),_e=function(m){var s=m.query,a=m.onSearch,o=(0,t.useState)({}),_=r()(o,2),h=_[0],C=_[1],P=function(c){c.Page=1,a&&a(c)};return(0,t.useEffect)(function(){C(u()({},s))},[s]),(0,e.jsx)(G.Z,{bordered:!1,style:{marginBottom:10},children:(0,e.jsxs)(I.Z,{labelCol:{span:8},children:[(0,e.jsx)(I.Z.Item,{label:"\u6FC0\u6D3B",children:(0,e.jsx)(se.Z,{checked:h.Active||!1,onChange:function(c){C(u()(u()({},h),{},{Active:c}))}})}),(0,e.jsx)(I.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,e.jsx)(D.ZP,{type:"primary",onClick:function(){return P(h)},children:"\u641C\u7D22"})})]})})},ae=n(78957),je=function(s){var a=s.ok,o=s.model,_=(0,t.useState)(!1),h=r()(_,2),C=h[0],P=h[1],S=(0,t.useState)(!1),c=r()(S,2),j=c[0],Z=c[1],T=(0,t.useState)({}),f=r()(T,2),p=f[0],O=f[1],K=function(g){P(!0),$.x1.mallAdmin.userUpdateStatus(u()({},g)).then(function(B){(0,y._y)(B,function(){d.ZP.success("\u4FDD\u5B58\u6210\u529F"),a&&a()})}).finally(function(){P(!1)})};return(0,t.useEffect)(function(){O({IsActive:o.IsActive,Id:o.Id})},[o]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(L.Z,{title:"\u4FEE\u6539\u72B6\u6001",confirmLoading:C,open:j,onCancel:function(){Z(!1)},onOk:function(){K(p)},style:{padding:0},children:(0,e.jsxs)(I.Z,{children:[(0,e.jsx)(I.Z.Item,{hidden:!0,name:"Id",children:(0,e.jsx)(W.Z,{})}),(0,e.jsx)(I.Z.Item,{label:"\u662F\u5426\u6FC0\u6D3B",children:(0,e.jsx)(se.Z,{checked:p.IsActive||!1,onChange:function(g){O(function(B){return u()(u()({},B),{},{IsActive:g})})}})})]})}),(0,e.jsxs)(ae.Z,{children:[o.IsActive?(0,e.jsx)(te.Z,{color:"green",children:"\u6B63\u5E38"}):(0,e.jsx)(te.Z,{color:"error",children:"\u7981\u7528"}),(0,e.jsx)(D.ZP,{size:"small",type:"link",onClick:function(){Z(!0)},children:"\u4FEE\u6539"})]})]})},Ce=je,Se=function(){var m=(0,t.useState)({Page:1}),s=r()(m,2),a=s[0],o=s[1],_=(0,t.useState)(!1),h=r()(_,2),C=h[0],P=h[1],S=(0,t.useState)(0),c=r()(S,2),j=c[0],Z=c[1],T=(0,t.useState)({}),f=r()(T,2),p=f[0],O=f[1],K=(0,w.o)(),l=function(x){P(!0),$.x1.mallAdmin.userQueryPaging(u()({},x)).then(function(i){(0,y._y)(i,function(){O(i.data||{})})}).finally(function(){P(!1)})},g=function(x,i){confirm("\u786E\u5B9A\u8BBE\u7F6E\uFF1F")&&(Z(x.Id||0),$.x1.mallAdmin.gradeSetUserGrade({UserId:x.Id,GradeId:i}).then(function(v){(0,y._y)(v,function(){d.ZP.success("\u8BBE\u7F6E\u6210\u529F"),l(a)})}).finally(function(){Z(0)}))},B=[{title:"\u8D26\u53F7\u4E3B\u4F53",render:function(x,i){return(0,e.jsx)(ce.Z,{model:i.User})}},{key:"user-grade",title:"\u4F1A\u5458\u7B49\u7EA7",render:function(x,i){var v;return(0,e.jsx)(V.Z,{size:"small",loading:j==i.Id,onChange:function(F){g(i,F)},value:(v=i.Grade)===null||v===void 0?void 0:v.Id,options:K.grades.map(function(k){return{key:k.Id,label:k.Name,value:k.Id}}),allowClear:!0,placeholder:"\u9009\u62E9\u4F1A\u5458\u7B49\u7EA7",style:{minWidth:150}})}},{title:"\u624B\u673A\u53F7",render:function(x,i){var v;return((v=i.User)===null||v===void 0||(v=v.UserMobile)===null||v===void 0?void 0:v.MobilePhone)||"--"}},{key:"balance",title:"\u8D26\u6237\u4F59\u989D",render:function(x,i){return(0,e.jsx)(ge,{model:i,ok:function(){l(a)}})}},{title:"\u4F59\u989D\u79EF\u5206",render:function(x,i){return i.Points}},{title:"\u5386\u53F2\u79EF\u5206",render:function(x,i){return i.HistoryPoints}},{title:"\u72B6\u6001",render:function(x,i){return(0,e.jsx)(Ce,{model:i,ok:function(){l(a)}})}},{title:"\u6700\u8FD1\u4E0A\u7EBF\u65F6\u95F4",render:function(x,i){return(0,e.jsx)(ve.Z,{timeStr:i.LastActivityTime})}},{title:"\u65F6\u95F4",render:function(x,i){return(0,e.jsx)(de.Z,{model:i})}},{title:"\u64CD\u4F5C",width:200,render:function(x,i){return(0,e.jsx)(D.ZP.Group,{children:(0,e.jsx)(D.ZP,{type:"link",onClick:function(){alert("todo")},children:"\u67E5\u770B"})})}}],X=["user-grade"],q=B.filter(function(E){return X.indexOf(E.key)<=0});return(0,t.useEffect)(function(){K.queryGrades().finally(function(){l(a)})},[]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(_e,{query:a,onSearch:function(x){o(x),l(x)}}),(0,e.jsx)(G.Z,{title:"\u5546\u57CE\u4F1A\u5458",loading:C,style:{marginBottom:10},extra:(0,e.jsx)(D.ZP,{type:"text",onClick:function(){M.m8.push("/admin/settings/user/list")},children:"\u67E5\u770B\u5E73\u53F0\u7528\u6237\u4FE1\u606F"}),children:(0,e.jsx)(J.Z,{dataSource:p.Items||[],columns:(0,he.tC)()?q:B,pagination:{pageSize:p.PageSize,total:p.TotalCount,onChange:function(x,i){var v=u()(u()({},a),{},{Page:x});o(v),l(v)}}})})]})},ue=n(40411),Ze=n(96074),Ee=function(m){var s=m.show,a=m.hide,o=m.ok,_=(0,t.useState)(!1),h=r()(_,2),C=h[0],P=h[1],S=(0,t.useState)({}),c=r()(S,2),j=c[0],Z=c[1],T=function(p){P(!0),$.x1.sys.manageUserCreateUser(p).then(function(O){O.data.Error?d.ZP.error(O.data.Error.Message):(d.ZP.success("\u4FDD\u5B58\u6210\u529F"),o&&o())}).finally(function(){P(!1)})};return(0,t.useEffect)(function(){s&&Z({})},[s]),(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(L.Z,{title:"\u65B0\u589E\u7528\u6237",confirmLoading:C,open:s,onCancel:function(){a&&a()},footer:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(D.ZP,{type:"primary",onClick:function(){T(j)},children:"\u4FDD\u5B58"})}),children:(0,e.jsx)(I.Z,{children:(0,e.jsx)(I.Z.Item,{label:"\u7528\u6237\u540D",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},{pattern:new RegExp("^[a-zA-Z0-9_]{3,20}$"),message:"\u7528\u6237\u540D\u5FC5\u987B\u662F3-16\u4F4D\u5B57\u6BCD\u3001\u6570\u5B57\u6216\u4E0B\u5212\u7EBF"}],children:(0,e.jsx)(W.Z,{value:j.IdentityName||"",onChange:function(p){Z(function(O){return u()(u()({},O),{},{IdentityName:p.target.value})})}})})})})})},ie=n(68421),Ie=n(26380),Pe=n(92088),De=function(m){var s,a,o=m.model,_=m.ok,h=(0,Pe.tz)(),C=h.open,P=h.setOpen,S=h.setClose,c=(0,t.useState)(""),j=r()(c,2),Z=j[0],T=j[1];if(!o)return null;var f=(0,ie.Z)($.x1.sys.manageUserRemoveMobiles,{manual:!0,onSuccess:function(g,B){(0,y._y)(g,function(){d.ZP.success("\u79FB\u9664\u6210\u529F"),_()})}}),p=function(){confirm("\u786E\u5B9A\u79FB\u9664\u624B\u673A\u53F7\uFF1F")&&f.run({Id:o.Id})},O=(0,ie.Z)($.x1.sys.manageUserSetMobile,{manual:!0,onSuccess:function(g,B){(0,y._y)(g,function(){d.ZP.success("\u8BBE\u7F6E\u6210\u529F"),_()})}}),K=function(){if(!Z||(0,y.Wq)(Z)){d.ZP.info("\u653E\u5F03\u8BBE\u7F6E\u624B\u673A\u53F7\u7801");return}if(!/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(Z)){d.ZP.error("\u624B\u673A\u53F7\u7801\u683C\u5F0F\u4E0D\u6B63\u786E");return}O.run({Id:o.Id,Mobile:Z})};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(L.Z,{open:C,onCancel:function(){return S()},confirmLoading:O.loading,onOk:function(){K()},title:"\u8BBE\u7F6E\u624B\u673A\u53F7",children:(0,e.jsx)(W.Z,{width:"100%",size:"large",maxLength:11,placeholder:"\u8F93\u5165\u5B8C\u6574\u624B\u673A\u53F7",value:Z,onChange:function(g){T(g.target.value)},status:(0,y.tq)(Z)?void 0:"error"})}),(0,e.jsxs)(ae.Z,{direction:"vertical",children:[(0,y.Wq)((s=o.UserMobile)===null||s===void 0?void 0:s.MobilePhone)||(0,e.jsx)(te.Z,{icon:(0,e.jsx)(Ie.Z,{stroke:1}),color:"green",closable:!0,onClose:function(g){g.preventDefault(),p()},children:(a=o.UserMobile)===null||a===void 0?void 0:a.MobilePhone}),(0,e.jsx)(D.ZP,{type:"link",onClick:function(){P()},children:"\u7ED1\u5B9A\u624B\u673A"})]})]})},ye=n(48054),oe=n(32983),b=n(26412),pe=function(m){var s=m.user,a=s==null?void 0:s.AdminIdentity;return!a||(0,y.Wq)(a==null?void 0:a.Id)?(0,e.jsx)(oe.Z,{}):(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(b.Z,{title:"User Info",bordered:!0,children:[(0,e.jsx)(b.Z.Item,{label:"Product",children:"Cloud Database"}),(0,e.jsx)(b.Z.Item,{label:"Billing Mode",children:"Prepaid"}),(0,e.jsx)(b.Z.Item,{label:"Automatic Renewal",children:"YES"}),(0,e.jsx)(b.Z.Item,{label:"Order time",children:"2018-04-24 18:00:00"}),(0,e.jsx)(b.Z.Item,{label:"Usage Time",span:2,children:"2019-04-24 18:00:00"}),(0,e.jsx)(b.Z.Item,{label:"Status",span:3,children:(0,e.jsx)(ue.Z,{status:"processing",text:"Running"})}),(0,e.jsx)(b.Z.Item,{label:"Negotiated Amount",children:"$80.00"}),(0,e.jsx)(b.Z.Item,{label:"Discount",children:"$20.00"}),(0,e.jsx)(b.Z.Item,{label:"Official Receipts",children:"$60.00"}),(0,e.jsxs)(b.Z.Item,{label:"Config Info",children:["Data disk type: MongoDB",(0,e.jsx)("br",{}),"Database version: 3.4",(0,e.jsx)("br",{}),"Package: dds.mongo.mid",(0,e.jsx)("br",{}),"Storage space: 10 GB",(0,e.jsx)("br",{}),"Replication factor: 3",(0,e.jsx)("br",{}),"Region: East China 1",(0,e.jsx)("br",{})]})]})})},Me=n(7134),Oe=n(55932),Ae=function(m){var s=m.user;if((0,y.Wq)(s==null?void 0:s.Id))return(0,e.jsx)(oe.Z,{});var a=(0,Oe.SZ)(s.Avatar);return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(b.Z,{title:"User Info",bordered:!0,children:[(0,e.jsx)(b.Z.Item,{label:"Product",children:(0,e.jsx)(Me.C,{size:100,src:a,children:s.IdentityName})}),(0,e.jsx)(b.Z.Item,{label:"Billing Mode",children:"Prepaid"}),(0,e.jsx)(b.Z.Item,{label:"Automatic Renewal",children:"YES"}),(0,e.jsx)(b.Z.Item,{label:"Order time",children:"2018-04-24 18:00:00"}),(0,e.jsx)(b.Z.Item,{label:"Usage Time",span:2,children:"2019-04-24 18:00:00"}),(0,e.jsx)(b.Z.Item,{label:"Status",span:3,children:(0,e.jsx)(ue.Z,{status:"processing",text:"Running"})}),(0,e.jsx)(b.Z.Item,{label:"Negotiated Amount",children:"$80.00"}),(0,e.jsx)(b.Z.Item,{label:"Discount",children:"$20.00"}),(0,e.jsx)(b.Z.Item,{label:"Official Receipts",children:"$60.00"}),(0,e.jsxs)(b.Z.Item,{label:"Config Info",children:["Data disk type: MongoDB",(0,e.jsx)("br",{}),"Database version: 3.4",(0,e.jsx)("br",{}),"Package: dds.mongo.mid",(0,e.jsx)("br",{}),"Storage space: 10 GB",(0,e.jsx)("br",{}),"Replication factor: 3",(0,e.jsx)("br",{}),"Region: East China 1",(0,e.jsx)("br",{})]})]})})},Be=function(m){var s=m.userId,a=(0,t.useState)(!1),o=r()(a,2),_=o[0],h=o[1],C=(0,t.useState)({}),P=r()(C,2),S=P[0],c=P[1],j=function(T){(0,y.Wq)(T)||(h(!0),$.x1.sys.manageUserGetProfileById({Id:T}).then(function(f){c(f.data.Data||{})}).finally(function(){h(!1)}))};return(0,t.useEffect)(function(){s&&j(s)},[s]),_?(0,e.jsx)(ye.Z,{}):(0,y.Wq)(S==null?void 0:S.Id)?(0,e.jsx)(oe.Z,{}):(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(fe.Z,{gutter:10,children:[(0,e.jsx)(ne.Z,{span:12,children:(0,e.jsx)(Ae,{user:S})}),(0,e.jsx)(ne.Z,{span:12,children:(0,e.jsx)(pe,{user:S})})]})})},Fe=function(m){var s=m.userId,a=m.hide,o=!(0,y.Wq)(s);return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(L.Z,{title:"\u7528\u6237\u4FE1\u606F",width:"90%",open:o,onCancel:function(){a()},onOk:function(){a()},children:(0,e.jsx)(Be,{userId:s||""})})})},Ue=function(m){var s=m.model,a=m.ok,o=(0,t.useState)(!1),_=r()(o,2),h=_[0],C=_[1],P=(0,t.useState)(""),S=r()(P,2),c=S[0],j=S[1],Z=(0,ie.Z)($.x1.sys.manageUserSetPassword,{manual:!0,onSuccess:function(p,O){(0,y._y)(p,function(){d.ZP.success("\u4FEE\u6539\u6210\u529F"),a()})}}),T=function(){if(!c||(0,y.Wq)(c)){d.ZP.info("\u653E\u5F03\u4FEE\u6539\u5BC6\u7801");return}if(c.length<5){d.ZP.error("\u5BC6\u7801\u957F\u5EA6\u4E0D\u80FD\u5C0F\u4E8E5\u4F4D");return}Z.run({Id:s.Id,Password:c})};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(L.Z,{open:h,onCancel:function(){return C(!1)},confirmLoading:Z.loading,onOk:function(){T()},title:"\u4FEE\u6539\u7528\u6237\u5BC6\u7801",children:(0,e.jsx)(W.Z.Password,{width:"100%",size:"large",maxLength:20,placeholder:"\u8F93\u5165\u5BC6\u7801",value:c,onChange:function(p){j(p.target.value)},status:(0,y.Wq)(c)?"error":void 0})}),(0,e.jsx)(D.ZP,{type:"link",onClick:function(){C(!0)},children:"\u4FEE\u6539\u5BC6\u7801"})]})},be=function(s){var a=s.query,o=s.onSearch,_=(0,t.useState)({}),h=r()(_,2),C=h[0],P=h[1],S=function(j){j.Page=1,o&&o(j)};return(0,t.useEffect)(function(){P(u()({},a))},[]),(0,e.jsx)(G.Z,{bordered:!1,style:{marginBottom:10},children:(0,e.jsxs)(I.Z,{labelCol:{span:8},wrapperCol:{span:16},onFinish:function(j){return S(C)},autoComplete:"off",layout:"inline",children:[(0,e.jsx)(I.Z.Item,{label:"\u5173\u952E\u8BCD",name:"Name",children:(0,e.jsx)(W.Z,{value:C.Keyword||"",onChange:function(j){return P(function(Z){return u()(u()({},Z),{},{Keyword:j.target.value})})}})}),(0,e.jsx)(I.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,e.jsx)(D.ZP,{type:"primary",htmlType:"submit",children:"\u641C\u7D22"})})]})})},Te=be,Re=n(15009),me=n.n(Re),Le=n(99289),We=n.n(Le),ke=n(74590),Ke=function(m){var s=m.ok,a=m.model,o=(0,t.useState)(!1),_=r()(o,2),h=_[0],C=_[1],P=(0,t.useState)(!1),S=r()(P,2),c=S[0],j=S[1],Z=(0,t.useState)({}),T=r()(Z,2),f=T[0],p=T[1],O=function(l){C(!0),$.x1.sys.manageUserUpdateStatus(u()(u()({},l),{},{IsDeleted:!1,Id:a.Id})).then(function(g){(0,y._y)(g,function(){d.ZP.success("\u4FDD\u5B58\u6210\u529F"),j(!1),s&&s()})}).finally(function(){C(!1)})};return(0,t.useEffect)(function(){p({IsActive:a==null?void 0:a.IsActive,IsDeleted:a==null?void 0:a.IsDeleted})},[a]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(L.Z,{title:"\u4FEE\u6539\u72B6\u6001",confirmLoading:h,open:c,onCancel:function(){j(!1)},footer:(0,e.jsxs)(ae.Z,{children:[(0,e.jsx)(ke.Z,{action:We()(me()().mark(function K(){var l;return me()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return B.next=2,$.x1.sys.manageUserUpdateStatus({Id:a.Id,IsDeleted:!0});case 2:l=B.sent,(0,y._y)(l,function(){j(!1),s()});case 4:case"end":return B.stop()}},K)})),hide:(0,y.Wq)(a.Id)}),(0,e.jsx)(D.ZP,{type:"primary",onClick:function(){O(f)},children:"\u4FDD\u5B58"})]}),children:(0,e.jsx)(I.Z,{children:(0,e.jsx)(I.Z.Item,{label:"\u662F\u5426\u6FC0\u6D3B",children:(0,e.jsx)(se.Z,{checked:f.IsActive||!1,onChange:function(l){return p(function(g){return u()(u()({},g),{},{IsActive:l})})}})})})}),(0,e.jsx)(D.ZP,{type:"link",onClick:function(){j(!0)},children:"\u4FEE\u6539\u72B6\u6001"})]})},Ne=function(){var m=(0,t.useState)({}),s=r()(m,2),a=s[0],o=s[1],_=(0,t.useState)({}),h=r()(_,2),C=h[0],P=h[1],S=(0,t.useState)(!1),c=r()(S,2),j=c[0],Z=c[1],T=(0,t.useState)(!1),f=r()(T,2),p=f[0],O=f[1],K=(0,t.useState)(void 0),l=r()(K,2),g=l[0],B=l[1],X=function(x){Z(!0),$.x1.sys.manageUserQueryUserPagination(x).then(function(i){(0,y._y)(i,function(){P(i.data||{})})}).finally(function(){Z(!1)})};(0,t.useEffect)(function(){X(a)},[]);var q=[{title:"\u8D26\u53F7\u4E3B\u4F53",render:function(x){return(0,e.jsx)("div",{onClick:function(){return B(x.Id)},children:(0,e.jsx)(ce.Z,{model:x})})}},{title:"\u7535\u8BDD",render:function(x){return(0,e.jsx)(De,{model:x,ok:function(){X(a)}})}},{title:"\u6D3B\u52A8\u72B6\u6001",render:function(x,i){return(0,e.jsx)(ue.Z,{status:i.IsActive?"success":"default",text:i.IsActive?"\u6D3B\u52A8":"\u51BB\u7ED3"})}},{title:"\u65F6\u95F4",render:function(x,i){return(0,e.jsx)(de.Z,{model:i})}},{title:"\u64CD\u4F5C",render:function(x,i){return(0,e.jsxs)(ae.Z,{size:"small",direction:"horizontal",split:(0,e.jsx)(Ze.Z,{type:"vertical"}),children:[(0,e.jsx)(Ue,{model:i,ok:function(){}}),(0,e.jsx)(Ke,{model:i,ok:function(){X(a)}})]})}}];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Fe,{userId:g,hide:function(){B(void 0)}}),(0,e.jsx)(Ee,{show:p,hide:function(){O(!1)},ok:function(){O(!1),X(a)}}),(0,e.jsx)(Te,{query:a,onSearch:function(x){o(x)}}),(0,e.jsx)(G.Z,{title:"\u5E73\u53F0\u7528\u6237",extra:(0,e.jsx)(D.ZP,{type:"primary",onClick:function(){O(!0)},children:"\u6DFB\u52A0\u7528\u6237"}),children:(0,e.jsx)(J.Z,{loading:j,columns:q,dataSource:C.Items||[],pagination:{current:a.Page,total:C.TotalCount,pageSize:20,onChange:function(x,i){var v=u()(u()({},a),{},{Page:x});o(v),X(v)}}})})]})},ze=function(){var m=(0,M.UO)(),s=(0,t.useState)(m.id),a=r()(s,2),o=a[0],_=a[1];return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(A.Z,{destroyInactiveTabPane:!0,activeKey:o||"user",onChange:function(C){return _(C)},items:[{key:"user",label:"\u666E\u901A\u7528\u6237",children:(0,e.jsx)(Ne,{}),icon:(0,e.jsx)(Q.Z,{stroke:1})},{key:"store-user",label:"\u5546\u57CE\u7528\u6237",children:(0,e.jsx)(Se,{}),icon:(0,e.jsx)(U.Z,{stroke:1})},{key:"grade",label:"\u7528\u6237\u7B49\u7EA7",children:(0,e.jsx)(le,{}),icon:(0,e.jsx)(R.Z,{stroke:1})}]})})}}}]);
