"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3170],{74590:function(re,G,n){var z=n(15009),r=n.n(z),U=n(99289),t=n.n(U),D=n(5574),O=n.n(D),I=n(83062),x=n(14726),L=n(67294),k=n(85893);G.Z=function(Z){var T=Z.action,p=Z.confirmText,X=Z.hide,B=(0,L.useState)(!1),W=O()(B,2),$=W[0],H=W[1],Q=p||"\u786E\u5B9A\u5220\u9664\uFF1F",Y=function(){var te=t()(r()().mark(function ae(){return r()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:if(confirm(Q)){A.next=2;break}return A.abrupt("return");case 2:return H(!0),A.prev=3,A.next=6,T();case 6:return A.prev=6,H(!1),A.finish(6);case 9:case"end":return A.stop()}},ae,null,[[3,,6,9]])}));return function(){return te.apply(this,arguments)}}();return X?null:(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(I.Z,{title:Q,children:(0,k.jsx)(x.ZP,{loading:$,danger:!0,type:"link",onClick:function(){Y()},children:"\u5220\u9664"})})})}},56774:function(re,G,n){var z=n(19632),r=n.n(z),U=n(84567),t=n(4393),D=n(85893);G.Z=function(O){var I=O.selectedKeys,x=O.onChange,L=O.permissions,k=function(p){return(0,D.jsx)(U.Z,{checked:I.indexOf(p.key)>=0,onChange:function(B){var W=I.filter(function($){return $!=p.key});B.target.checked&&W.push(p.key),x(W)},children:p.name})},Z=function(p){var X=p.permissions.every(function(B){return I.indexOf(B.key)>=0});return(0,D.jsx)(t.Z,{size:"small",title:p.name,style:{marginBottom:10},extra:(0,D.jsx)(U.Z,{checked:X,onChange:function(W){var $=p.permissions.map(function(Q){return Q.key}),H=I.filter(function(Q){return $.indexOf(Q)<0});W.target.checked&&(H=[].concat(r()(H),r()($))),x(H)},children:"\u5168\u9009"}),children:p.permissions.map(function(B,W){return(0,D.jsx)("span",{style:{marginRight:10,marginBottom:10},children:k(B)},W)})})};return(0,D.jsx)("div",{style:{},children:L.map(function(T,p){return(0,D.jsx)("div",{children:Z(T)},p)})})}},23806:function(re,G,n){var z=n(1288),r=n(85893);G.Z=function(U){var t=U.model,D=U.fallback;if(t==null||t==null)return null;var O=t==null?void 0:t.CreationTime,I=t==null?void 0:t.LastModificationTime;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{style:{},children:[(0,r.jsx)("div",{children:(0,r.jsx)(z.Z,{prefix:(0,r.jsx)("span",{children:"\u521B\u5EFA\uFF1A"}),onlyDate:!0,timeStr:O,fallback:D})}),(0,r.jsx)("div",{children:(0,r.jsx)(z.Z,{prefix:(0,r.jsx)("span",{children:"\u4FEE\u6539\uFF1A"}),onlyDate:!0,timeStr:I,fallback:D})})]})})}},1288:function(re,G,n){var z=n(78957),r=n(83062),U=n(46629),t=n(85893);G.Z=function(D){var O,I=D.timeStr,x=D.fallback,L=D.onlyDate,k=D.prefix,Z=(O=(0,U.mg)(I))===null||O===void 0?void 0:O.add(U.Mg,"hour");if(!Z)return x||null;var T=(0,U.ND)().utc().add(U.Mg,"hour"),p=Z.isSame(T,"year"),X=Z.diff(T,"day"),B=p?Z.format(U.AK):Z.format(U.vc),W=function(){return(0,t.jsxs)("div",{children:[(0,t.jsxs)(z.Z,{direction:"horizontal",children:[(0,t.jsx)("div",{children:Z.fromNow()}),(0,t.jsx)("div",{children:Z.format(U.On)})]}),(0,t.jsx)("div",{children:Z.format(U.t9)})]})};return(0,t.jsx)(r.Z,{title:W(),children:(0,t.jsxs)(z.Z,{direction:"horizontal",children:[k,(0,t.jsx)("div",{className:"inline-block cursor-pointer hover:bg-orange-500",children:L?Z.format(U.vc):Z.format(U.dq)})]})})}},11518:function(re,G,n){var z=n(55241),r=n(78957),U=n(7134),t=n(55932),D=n(66419),O=n(8885),I=n(85893);G.Z=function(x){var L=x.model;if(!L)return null;var k=(0,t.SZ)(L.Avatar,{width:100,height:100}),Z=(0,D.zO)([L.NickName,L.IdentityName,L.Id].filter(function(T){return T&&T.length>0}).at(0)||"--",10);return(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(z.Z,{content:(0,I.jsx)(O.Z,{model:L}),children:(0,I.jsxs)(r.Z,{direction:"horizontal",children:[(0,I.jsx)(U.C,{size:"small",shape:"square",src:k,children:Z}),(0,I.jsx)("span",{children:(0,I.jsx)("a",{children:Z})})]})})})}},8885:function(re,G,n){var z=n(78957),r=n(7134),U=n(55932),t=n(66419),D=n(85893);G.Z=function(O){var I,x=O.model;if(!x)return null;var L=(0,U.SZ)(x.Avatar,{width:100,height:100}),k=(0,t.zO)([x.NickName,x.IdentityName,x.Id].filter(function(Z){return Z&&Z.length>0}).at(0)||"--",10);return(0,D.jsx)(D.Fragment,{children:(0,D.jsxs)(z.Z,{direction:"horizontal",children:[(0,D.jsx)("div",{children:(0,D.jsx)(r.C,{src:L,size:100})}),(0,D.jsxs)("div",{children:[(0,D.jsxs)("p",{children:["\u6635\u79F0\uFF1A",k]}),(0,D.jsxs)("p",{children:["\u7528\u6237\u540D\uFF1A",(x==null?void 0:x.IdentityName)||"--"]}),(0,D.jsxs)("p",{children:["\u624B\u673A\u53F7\uFF1A",(x==null||(I=x.UserMobile)===null||I===void 0?void 0:I.MobilePhone)||"--"]})]})]})})}},26873:function(re,G,n){var z=n(97857),r=n.n(z),U=n(68421),t=n(45360),D=n(85576),O=n(25278),I=n(30699),x=n(66419),L=n(8885),k=n(85893);G.Z=function(Z){var T,p=Z.onFind,X=Z.style,B=Z.loading,W=(0,U.Z)(I.x1.sys.manageUserSearchUserAccount,{manual:!0,onSuccess:function(Q){var Y,te=(Y=Q.data)===null||Y===void 0?void 0:Y.Data;if(!te){t.ZP.error("\u627E\u4E0D\u5230\u8D26\u53F7");return}}}),$=(T=W.data)===null||T===void 0||(T=T.data)===null||T===void 0?void 0:T.Data;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(D.Z,{title:"\u786E\u5B9A\u6DFB\u52A0",open:$!=null,onCancel:function(){return W.mutate(void 0)},onOk:function(){$&&p($),W.mutate(void 0)},children:(0,k.jsx)(L.Z,{model:$})}),(0,k.jsx)("div",{style:r()({marginBottom:10,marginTop:10},X),children:(0,k.jsx)(O.Z.Search,{style:{width:"100%"},loading:W.loading||B,onSearch:function(Q){if((0,x.Wq)(Q)){t.ZP.error("\u8F93\u5165\u8D26\u53F7");return}W.run({AccountIdentity:Q})},placeholder:"\u641C\u7D22\u8D26\u53F7\uFF08\u624B\u673A\u53F7\uFF0C\u90AE\u7BB1\uFF09\u4EE5\u6DFB\u52A0...",size:"large"})})]})}},1549:function(re,G,n){n.r(G),n.d(G,{default:function(){return Re}});var z=n(5574),r=n.n(z),U=n(92398),t=n(67294),D=n(47650),O=n(68421),I=n(71230),x=n(15746),L=n(57381),k=n(17960),Z=n(38295),T=n(35291),p=n(30699),X=n(40411),B=n(14726),W=n(4393),$=n(78957),H=n(80799),Q=n(66309),Y=n(40056),te=n(23806),ae=n(11518),q=n(45360),A=n(85576),ue=n(97857),a=n.n(ue),v=n(19632),M=n.n(v),c=n(59847),s=n(66419),e=n(85893),le=function(l){var o,m=l.value,u=l.onChange,P=l.style,C=(0,O.Z)(p.x1.sys.departmentDepartmentTree,{manual:!0}),h=((o=C.data)===null||o===void 0||(o=o.data)===null||o===void 0?void 0:o.Data)||[],_=h.flatMap(function(g){return(0,T.PC)(g)}),j=M()(new Set(_.map(function(g){return g.key||""}))),F=h.map(function(g){return(0,T.iw)(g,function(d){return"".concat(d.title,"-").concat((0,s.Te)(d.title||"")||"N/A")})});return(0,t.useEffect)(function(){C.run({})},[]),(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(c.Z,{style:a()({},P),loading:C.loading,value:m,onChange:function(d){var i;u&&u((i=_.find(function(S){return S.key==d}))===null||i===void 0?void 0:i.raw_data)},placeholder:"\u8F93\u5165\u62FC\u97F3\u7F29\u5199\u53EF\u4EE5\u641C\u7D22...",treeData:F,treeExpandedKeys:j,treeDefaultExpandAll:!0,allowClear:!0,showSearch:!0,treeNodeFilterProp:"label",filterTreeNode:void 0})})},_e=function(l){var o,m=l.data,u=l.ok,P=(0,t.useState)(!1),C=r()(P,2),h=C[0],_=C[1],j=(0,t.useState)([]),F=r()(j,2),g=F[0],d=F[1],i=(0,O.Z)(p.x1.sys.departmentSetAdminDepartments,{manual:!0,onSuccess:function(f,R){(0,s._y)(f,function(){q.ZP.success("\u8BBE\u7F6E\u6210\u529F"),_(!1),u()})}});return(0,t.useEffect)(function(){var S;d(((S=m.Departments)===null||S===void 0?void 0:S.map(function(f){return f.Id||""}))||[])},[m]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(A.Z,{open:h,title:"\u4FEE\u6539\u90E8\u95E8",onOk:function(){i.run({Key:m.Id,Value:g})},onCancel:function(){_(!1)},children:(0,e.jsx)(le,{style:{width:"100%"},value:g.at(0),onChange:function(f){d([(f==null?void 0:f.Id)||""].filter(function(R){return!(0,s.Wq)(R)}))}})}),(0,e.jsxs)($.Z,{direction:"horizontal",children:[(o=m.Departments)===null||o===void 0?void 0:o.map(function(S,f){return(0,e.jsx)(Q.Z,{children:S.Name},f)}),(0,e.jsx)(B.ZP,{type:"link",onClick:function(){return _(!0)},children:"\u4FEE\u6539"})]})]})},fe=n(26873),ve=function(l){var o=l.show,m=l.hide,u=l.department,P=l.ok,C=(0,O.Z)(p.x1.sys.departmentSetAdminDepartments,{manual:!0,onSuccess:function(j,F){(0,s._y)(j,function(){m(),P()})}}),h=(0,O.Z)(p.x1.sys.manageAdminSetAsAdmin,{manual:!0,onSuccess:function(j,F){(0,s._y)(j,function(){var g=j.data.Data;g?C.run({Key:g.Id,Value:[(u==null?void 0:u.Id)||""].filter(function(d){return!(0,s.Wq)(d)})}):q.ZP.error("\u6DFB\u52A0\u5931\u8D25")})}});return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(A.Z,{title:"\u641C\u7D22\u7528\u6237\u6DFB\u52A0",confirmLoading:h.loading||C.loading,open:o,onCancel:function(){return m()},footer:!1,children:(0,e.jsx)(fe.Z,{onFind:function(j){h.run({UserId:j.Id})}})})})},he=n(84567),ge=function(l){var o=l.model,m=l.ok,u=(0,t.useState)(!1),P=r()(u,2),C=P[0],h=P[1],_=(0,t.useState)([]),j=r()(_,2),F=j[0],g=j[1],d=(0,t.useState)(!1),i=r()(d,2),S=i[0],f=i[1],R=(0,t.useState)([]),K=r()(R,2),y=K[0],N=K[1],E=function(){f(!1),p.x1.sys.manageRoleQueryPaging({Page:1,PageSize:100}).then(function(J){(0,s._y)(J,function(){N(J.data.Items||[])})}).finally(function(){f(!1)})};(0,t.useEffect)(function(){C&&E()},[C]);var w=function(){f(!1),p.x1.sys.manageRoleSetAdminRoles({Id:o.Id,RoleIds:F}).then(function(J){(0,s._y)(J,function(){q.ZP.success("\u4FDD\u5B58\u6210\u529F"),h(!1),m&&m()})}).finally(function(){f(!1)})},b=function(){return(0,s.G5)(o.Roles)?null:(0,e.jsx)("div",{children:(o.Roles||[]).map(function(J,ie){return(0,e.jsx)(Q.Z,{style:{marginRight:5,marginBottom:5},children:J.Name},ie)})})};(0,t.useEffect)(function(){o.Roles&&g(o.Roles.map(function(V){return V.Id||""}))},[o]);var ne=function(){return!y||y.length<=0?(0,e.jsx)(Y.Z,{message:"\u65E0\u89D2\u8272"}):(0,e.jsx)("div",{children:y.map(function(J,ie){return(0,e.jsx)(he.Z,{checked:F.indexOf(J.Id||"")>=0,onChange:function(Ue){var oe=F.filter(function(Te){return Te!=J.Id});Ue.target.checked&&(oe=[].concat(M()(oe),[J.Id||"."])),g(oe)},style:{marginRight:5,marginBottom:5},value:J.Id,children:J.Name},ie)})})};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)($.Z,{direction:"horizontal",children:[b(),(0,e.jsx)(B.ZP,{type:"link",onClick:function(){h(!0)},children:"\u4FEE\u6539"})]}),(0,e.jsx)(A.Z,{title:"\u7ED1\u5B9A\u89D2\u8272",confirmLoading:S,open:C,onCancel:function(){h(!1)},onOk:function(){w()},children:ne()})]})},ee=n(11346),de=n(72269),xe=function(l){var o=l.show,m=l.hide,u=l.ok,P=l.model,C=(0,t.useState)(!1),h=r()(C,2),_=h[0],j=h[1],F=(0,t.useState)({}),g=r()(F,2),d=g[0],i=g[1],S=function(R){j(!0),p.x1.sys.manageAdminUpdateStatus(a()(a()({},R),{},{Id:P.Id})).then(function(K){(0,s._y)(K,function(){q.ZP.success("\u4FDD\u5B58\u6210\u529F"),u&&u()})}).finally(function(){j(!1)})};return(0,t.useEffect)(function(){i({IsActive:P.IsActive,IsSuperAdmin:P.IsSuperAdmin})},[P]),(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(A.Z,{title:"\u4FEE\u6539\u72B6\u6001",confirmLoading:_,open:o,onCancel:function(){m()},onOk:function(){S(d)},children:(0,e.jsxs)(ee.Z,{children:[(0,e.jsx)(ee.Z.Item,{label:"\u8D85\u7EA7\u7BA1\u7406\u5458",children:(0,e.jsx)(de.Z,{checked:d.IsSuperAdmin||!1,onChange:function(R){i(a()(a()({},d),{},{IsSuperAdmin:R}))}})}),(0,e.jsx)(ee.Z.Item,{label:"\u662F\u5426\u6FC0\u6D3B",children:(0,e.jsx)(de.Z,{checked:d.IsActive||!1,onChange:function(R){i(a()(a()({},d),{},{IsActive:R}))}})})]})})})},je=function(l){var o,m,u=l.department,P=l.ok,C=(0,O.Z)(p.x1.sys.departmentListDepartmentAdmins,{manual:!0}),h=(0,O.Z)(p.x1.sys.departmentDanglingAdmin,{manual:!0}),_=C.loading||h.loading,j=((o=C.data)===null||o===void 0||(o=o.data)===null||o===void 0?void 0:o.Data)||((m=h.data)===null||m===void 0||(m=m.data)===null||m===void 0?void 0:m.Data)||[],F=(0,t.useState)(void 0),g=r()(F,2),d=g[0],i=g[1],S=(0,t.useState)(!1),f=r()(S,2),R=f[0],K=f[1],y=function(){C.mutate(),h.mutate(),u&&u.Id?C.run({Id:u.Id}):h.run({})};(0,t.useEffect)(function(){y()},[u==null?void 0:u.Id]);var N=[{title:"\u8D26\u53F7\u4E3B\u4F53",render:function(w){return(0,e.jsx)(ae.Z,{model:w.User})}},{title:"\u540D\u79F0",fixed:"left",render:function(w,b){var ne,V=(ne=b.User)===null||ne===void 0?void 0:ne.IdentityName;return(0,e.jsx)("a",{children:V})}},{title:"\u6240\u5C5E\u90E8\u95E8",render:function(w,b){return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(_e,{data:b,ok:function(){y(),P()}})})}},{title:"\u89D2\u8272",render:function(w,b){return(0,e.jsx)(ge,{model:b,ok:function(){y()}})}},{title:"\u6D3B\u52A8\u72B6\u6001",render:function(w,b){return(0,e.jsx)(X.Z,{status:b.IsActive?"success":"default",text:b.IsActive?"\u6D3B\u52A8":"\u51BB\u7ED3"})}},{title:"\u8D85\u7EA7\u7BA1\u7406\u5458",render:function(w,b){return(0,e.jsx)(X.Z,{status:b.IsSuperAdmin?"success":"default",text:b.IsSuperAdmin?"\u8D85\u7EA7\u7BA1\u7406\u5458":"\u666E\u901A\u7BA1\u7406\u5458"})}},{title:"\u65F6\u95F4",render:function(w,b){return(0,e.jsx)(te.Z,{model:b})}},{title:"\u64CD\u4F5C",render:function(w,b){return(0,e.jsx)(B.ZP.Group,{children:(0,e.jsx)(B.ZP,{type:"link",onClick:function(){i(b)},children:"\u7F16\u8F91"})})}}];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(xe,{show:d!=null,hide:function(){return i(void 0)},ok:function(){i(void 0),y()},model:d||{}}),(0,e.jsx)(ve,{show:R,hide:function(){return K(!1)},ok:function(){y(),P()},department:u}),(0,e.jsx)(W.Z,{title:"\u90E8\u95E8\u6210\u5458",extra:(0,e.jsx)($.Z,{direction:"horizontal",children:(0,e.jsx)(B.ZP,{type:"link",onClick:function(){K(!0)},children:"\u6DFB\u52A0\u6210\u5458"})}),children:(0,e.jsx)(H.Z,{rowKey:function(w){return w.Id||""},loading:_,columns:N,dataSource:j,pagination:!1,expandable:{expandedRowRender:function(w){var b,ne=((b=w.Roles)===null||b===void 0?void 0:b.flatMap(function(V){return V.PermissionKeys||[]}))||[];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("h5",{children:"\u6743\u9650\u503C"}),(0,e.jsxs)("div",{children:[ne.map(function(V,J){return(0,e.jsx)(Q.Z,{style:{margin:5},children:V},J)}),ne.length<=0&&(0,e.jsx)(Y.Z,{message:"\u65E0\u4EFB\u4F55\u6743\u9650"})]})]})}}})})]})},ye=n(26412),se=n(25278),pe=function(l){var o=l.show,m=l.hide,u=l.data,P=l.ok,C=(0,t.useState)({}),h=r()(C,2),_=h[0],j=h[1],F=(0,O.Z)(p.x1.sys.departmentSave,{manual:!0,onSuccess:function(i,S){(0,s._y)(i,function(){q.ZP.success("\u4FDD\u5B58\u6210\u529F"),P()})}}),g=function(i){var S;i.Name=(S=i.Name)===null||S===void 0?void 0:S.trim(),!(0,s.Wq)(i.Name)&&F.run(i)};return(0,t.useEffect)(function(){j(a()({},u||{}))},[u]),(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(A.Z,{title:"\u90E8\u95E8",forceRender:!0,destroyOnClose:!0,open:o,onCancel:function(){return m()},footer:(0,e.jsx)($.Z,{children:(0,e.jsx)(B.ZP,{type:"primary",onClick:function(){g(_)},children:"\u4FDD\u5B58"})}),children:(0,e.jsx)(L.Z,{spinning:F.loading,children:(0,e.jsxs)(ee.Z,{labelCol:{flex:"110px"},labelAlign:"right",wrapperCol:{flex:1},children:[(0,e.jsx)(ee.Z.Item,{label:"\u7236\u7EA7\u90E8\u95E8",children:o&&(0,e.jsx)(le,{value:_.ParentId||void 0,onChange:function(i){j(a()(a()({},_),{},{ParentId:i==null?void 0:i.Id}))}})}),(0,e.jsxs)(ee.Z.Item,{label:"\u540D\u79F0",required:!0,children:[(0,e.jsx)(se.Z,{count:{show:!0,max:20},maxLength:20,value:_.Name||"",onChange:function(i){j(a()(a()({},_),{},{Name:i.target.value}))}}),(0,s.Wq)(_.Name)&&(0,e.jsx)("p",{style:{color:"red"},children:"\u5FC5\u586B"})]}),(0,e.jsx)(ee.Z.Item,{label:"\u63CF\u8FF0",children:(0,e.jsx)(se.Z.TextArea,{maxLength:200,value:_.Description||"",onChange:function(i){j(a()(a()({},_),{},{Description:i.target.value}))}})}),(0,e.jsx)(ee.Z.Item,{label:"\u90E8\u95E8\u7C7B\u578B",style:{display:"none"},children:(0,e.jsx)(se.Z,{maxLength:50,value:_.DeptType||"",onChange:function(i){j(a()(a()({},_),{},{DeptType:i.target.value}))}})})]})})})})},Ee=function(l){var o=l.node,m=l.ok,u=o==null?void 0:o.raw_data,P=(0,t.useState)(void 0),C=r()(P,2),h=C[0],_=C[1],j=(0,O.Z)(p.x1.sys.departmentDeleteById,{manual:!0,onSuccess:function(i,S){(0,s._y)(i,function(){q.ZP.success("\u5220\u9664\u6210\u529F"),m()})}}),F=function(){if(!u)return(0,e.jsx)(Y.Z,{message:"\u672A\u9009\u62E9\u90E8\u95E8"});var i=[{label:"\u63CF\u8FF0",children:(0,e.jsx)("span",{children:u.Description})}];return(0,e.jsx)(ye.Z,{title:u.Name,items:i})},g=function(){return(0,e.jsxs)($.Z,{direction:"horizontal",children:[(0,e.jsx)(B.ZP,{type:"link",onClick:function(){_({ParentId:u==null?void 0:u.Id})},children:"\u6DFB\u52A0\u5B50\u90E8\u95E8"}),(0,e.jsx)(B.ZP,{type:"link",disabled:(0,s.Wq)(u==null?void 0:u.Id),onClick:function(){_(a()({},u))},children:"\u7F16\u8F91"}),(0,e.jsx)(B.ZP,{type:"link",danger:!0,disabled:(0,s.Wq)(u==null?void 0:u.Id)||!(0,s.G5)(o==null?void 0:o.children),loading:j.loading,onClick:function(){confirm("\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u90E8\u95E8\u5417\uFF1F")&&j.run({Id:u==null?void 0:u.Id})},children:"\u5220\u9664"})]})};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(pe,{data:h||{},show:h!=null,ok:function(){_(void 0),m&&m()},hide:function(){return _(void 0)}}),(0,e.jsx)(W.Z,{style:{marginBottom:10},extra:g(),children:F()})]})},ce="00000000000000.0000000000000000000",Ce=function(){var l,o=(0,Z.o)(),m=(0,O.Z)(p.x1.sys.departmentDepartmentTree,{manual:!0}),u=(0,t.useState)(void 0),P=r()(u,2),C=P[0],h=P[1],_=(0,t.useState)([]),j=r()(_,2),F=j[0],g=j[1];(0,t.useEffect)(function(){m.run({})},[]);var d=((l=m.data)===null||l===void 0||(l=l.data)===null||l===void 0?void 0:l.Data)||[],i=[{key:ce,raw_data:void 0,title:o.getAppName()||"\u7EC4\u7EC7\u67B6\u6784",children:d}];(0,t.useEffect)(function(){var K=i.flatMap(function(y){return(0,T.PC)(y)}).map(function(y){return y.key||""});g(K)},[d]);var S=i.flatMap(T.PC),f=S.find(function(K){return K.key===C}),R=i.map(function(K){return(0,T.jR)(K,function(y){var N=y.raw_data;return y.key==ce||!N||(N.MemberCount||0)<=0?y.title||"":"".concat(y.title," (").concat(N.MemberCount,")")})});return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(I.Z,{gutter:[10,10],children:[(0,e.jsx)(x.Z,{span:6,children:(0,e.jsx)(L.Z,{spinning:m.loading,children:(0,e.jsx)(k.Z,{showIcon:!0,showLine:!0,treeData:R,blockNode:!0,onSelect:function(y){console.log(y),h(y.at(0))},expandedKeys:F,onExpand:function(y){g(y)},rootStyle:{background:"none"}})})}),(0,e.jsxs)(x.Z,{span:18,children:[(0,e.jsx)(Ee,{node:f,ok:function(){m.run({})}}),(0,e.jsx)(je,{department:f==null?void 0:f.raw_data,ok:function(){m.run({})}})]})]})})},De=n(15009),me=n.n(De),Se=n(99289),Pe=n.n(Se),Ae=n(74590),Me=function(l){var o=l.show,m=l.hide,u=l.data,P=l.ok,C=(0,t.useState)(!1),h=r()(C,2),_=h[0],j=h[1],F=(0,t.useState)({}),g=r()(F,2),d=g[0],i=g[1],S=function(R){j(!0),p.x1.sys.manageRoleSave(a()({},R)).then(function(K){(0,s._y)(K,function(){q.ZP.success("\u4FDD\u5B58\u6210\u529F"),P()})}).finally(function(){j(!1)})};return(0,t.useEffect)(function(){i(a()({},u))},[u]),(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(A.Z,{title:"\u89D2\u8272",open:o,onCancel:function(){return m()},footer:(0,e.jsxs)($.Z,{children:[(0,e.jsx)(Ae.Z,{action:Pe()(me()().mark(function f(){var R;return me()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,p.x1.sys.manageRoleDelete({Id:d.Id});case 2:R=y.sent,(0,s._y)(R,function(){m(),P()});case 4:case"end":return y.stop()}},f)})),hide:(0,s.Wq)(d.Id)}),(0,e.jsx)(B.ZP,{type:"primary",onClick:function(){S(d)},children:"\u4FDD\u5B58"})]}),children:(0,e.jsx)(L.Z,{spinning:_,children:(0,e.jsxs)(ee.Z,{labelCol:{flex:"110px"},labelAlign:"right",wrapperCol:{flex:1},children:[(0,e.jsx)(ee.Z.Item,{label:"\u540D\u79F0",rules:[{required:!0},{max:10}],children:(0,e.jsx)(se.Z,{value:d.Name||"",onChange:function(R){i(a()(a()({},d),{},{Name:R.target.value}))}})}),(0,e.jsx)(ee.Z.Item,{label:"\u63CF\u8FF0",rules:[{max:50}],children:(0,e.jsx)(se.Z,{value:d.Description||"",onChange:function(R){i(a()(a()({},d),{},{Description:R.target.value}))}})})]})})})})},Oe=n(56774),Ie=function(l){var o=l.model,m=l.ok,u=(0,t.useState)(!1),P=r()(u,2),C=P[0],h=P[1],_=(0,t.useState)(!1),j=r()(_,2),F=j[0],g=j[1],d=(0,t.useState)([]),i=r()(d,2),S=i[0],f=i[1];(0,t.useEffect)(function(){f(o.PermissionKeys||[])},[o]);var R=function(N){g(!0),p.x1.sys.manageRoleSetRolePermissions({Id:o.Id,PermissionKeys:N||[]}).then(function(E){(0,s._y)(E,function(){q.ZP.success("\u4FDD\u5B58\u6210\u529F"),h(!1),m&&m()})}).finally(function(){g(!1)})},K=function(){var N=o.PermissionKeys||[],E=T.i_.filter(function(w){return N.indexOf(w.key)>=0});return(0,e.jsx)("div",{children:E.map(function(w,b){return(0,e.jsx)(Q.Z,{style:{marginRight:5,marginBottom:5},children:w.name},b)})})};return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{children:[(0,e.jsxs)($.Z,{direction:"horizontal",children:[K(),(0,e.jsx)(B.ZP,{type:"link",onClick:function(){h(!0)},children:"\u4FEE\u6539"})]}),(0,e.jsx)(A.Z,{title:"\u7ED1\u5B9A\u6743\u9650",confirmLoading:F,open:C,onCancel:function(){h(!1)},onOk:function(){R(S)},children:(0,e.jsx)(Oe.Z,{selectedKeys:S,onChange:function(N){return f(N)},permissions:T.bp})})]})})},Ze=function(){var l=(0,t.useState)(!0),o=r()(l,2),m=o[0],u=o[1],P=(0,t.useState)({Items:[],TotalCount:0}),C=r()(P,2),h=C[0],_=C[1],j=(0,t.useState)({Page:1}),F=r()(j,2),g=F[0],d=F[1],i=(0,t.useState)(void 0),S=r()(i,2),f=S[0],R=S[1],K=function(){u(!0),p.x1.sys.manageRoleQueryPaging(a()({},g)).then(function(E){(0,s._y)(E,function(){_(E.data||{})})}).finally(function(){u(!1)})},y=[{title:"\u540D\u79F0",render:function(E){return E.Name}},{title:"\u63CF\u8FF0",render:function(E){return E.Description||"--"}},{title:"\u6743\u9650",render:function(E){return(0,e.jsx)(Ie,{model:E,ok:function(){K()}})}},{title:"\u65F6\u95F4",render:function(E){return(0,e.jsx)(te.Z,{model:E})}},{title:"\u64CD\u4F5C",width:200,render:function(E){return(0,e.jsx)(B.ZP.Group,{children:(0,e.jsx)(B.ZP,{type:"link",onClick:function(){R(E)},children:"\u7F16\u8F91"})})}}];return(0,t.useEffect)(function(){K()},[g]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Me,{show:f!=null,hide:function(){return R(void 0)},data:f||{},ok:function(){R(void 0),K()}}),(0,e.jsx)(W.Z,{title:"\u89D2\u8272",extra:(0,e.jsx)(B.ZP,{type:"primary",onClick:function(){R({})},children:"\u65B0\u589E"}),children:(0,e.jsx)(H.Z,{loading:m,columns:y,dataSource:h.Items||[],pagination:{showSizeChanger:!1,pageSize:20,current:g.Page,total:h.TotalCount,onChange:function(E){d(a()(a()({},g),{},{Page:E}))}}})})]})},Re=function(){var l=(0,D.UO)(),o=(0,t.useState)(l.id),m=r()(o,2),u=m[0],P=m[1];return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(U.Z,{destroyInactiveTabPane:!0,activeKey:u||"org",onChange:function(h){return P(h)},items:[{key:"org",label:"\u7EC4\u7EC7\u67B6\u6784",children:(0,e.jsx)(Ce,{})},{key:"role",label:"\u89D2\u8272",children:(0,e.jsx)(Ze,{})}]})})}},38295:function(re,G,n){n.d(G,{o:function(){return ue}});var z=n(15009),r=n.n(z),U=n(99289),t=n.n(U),D=n(19632),O=n.n(D),I=n(47650),x=n(30699),L=n(85134),k=n(66419),Z=function(v){var M=A.mallSettings||{},c=[M.StoreNickName,M.StoreEnglishName];v?c=[M.StoreOfficialName,M.StoreOfficialEnglishName].concat(O()(c)):c=[].concat(O()(c),[M.StoreOfficialName,M.StoreOfficialEnglishName]);var s=c.filter(function(e){return!(0,k.Wq)(e)}).at(0);return s||L.v.app.name||L.v.app.englishName},T=function(){var a=t()(r()().mark(function v(){return r()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,x.x1.mall.notificationUnReadCount().then(function(s){A.notificationCount=s.data.Data||0});case 2:case"end":return c.stop()}},v)}));return function(){return a.apply(this,arguments)}}(),p=function(){var a=t()(r()().mark(function v(){var M;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,x.x1.mallAdmin.gradeListGrades();case 2:M=s.sent,A.grades=M.data.Data||[];case 4:case"end":return s.stop()}},v)}));return function(){return a.apply(this,arguments)}}(),X=function(){var a=t()(r()().mark(function v(){var M;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,x.x1.mallAdmin.storeQueryStores();case 2:M=s.sent,A.stores=M.data.Data||[];case 4:case"end":return s.stop()}},v)}));return function(){return a.apply(this,arguments)}}(),B=function(){var a=t()(r()().mark(function v(){var M;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,x.x1.mall.shoppingCartCount();case 2:M=s.sent,A.shoppingCartCount=M.data.Data||0;case 4:case"end":return s.stop()}},v)}));return function(){return a.apply(this,arguments)}}(),W=function(){var a=t()(r()().mark(function v(){var M;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,x.x1.mall.storeGetCurrentStore();case 2:M=s.sent,A.currentStore=M.data.Data||{};case 4:case"end":return s.stop()}},v)}));return function(){return a.apply(this,arguments)}}(),$=function(){var a=t()(r()().mark(function v(){var M;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,x.x1.mall.storeMostNearbyStore();case 2:M=s.sent,A.mostNearbyStore=M.data.Data||{};case 4:case"end":return s.stop()}},v)}));return function(){return a.apply(this,arguments)}}(),H=function(){var a=t()(r()().mark(function v(){return r()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,x.x1.platform.userAuth().then(function(s){A.userAuthResult=s.data||{}});case 2:case"end":return c.stop()}},v)}));return function(){return a.apply(this,arguments)}}(),Q=function(){var a=t()(r()().mark(function v(){return r()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,x.x1.sys.adminAuth().then(function(s){A.adminAuthResult=s.data||{}});case 2:case"end":return c.stop()}},v)}));return function(){return a.apply(this,arguments)}}(),Y=function(){var a=t()(r()().mark(function v(){return r()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,x.x1.sys.manageAdminQueryAdminPermissions().then(function(s){A.adminPermissions=s.data||{}});case 2:case"end":return c.stop()}},v)}));return function(){return a.apply(this,arguments)}}(),te=function(){var a=t()(r()().mark(function v(){return r()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,x.x1.mallManager.storeManagerPermissionGetMyPermission().then(function(s){A.managerPermissions=s.data||{}});case 2:case"end":return c.stop()}},v)}));return function(){return a.apply(this,arguments)}}(),ae=function(){var a=t()(r()().mark(function v(){return r()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,x.x1.mallManager.storeManagerAuth().then(function(s){A.storeManagerAuthResult=s.data||{}});case 2:case"end":return c.stop()}},v)}));return function(){return a.apply(this,arguments)}}(),q=function(){var a=t()(r()().mark(function v(){return r()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,x.x1.mall.userStoreUserAuth().then(function(s){A.storeUserAuthResult=s.data||{}});case 2:case"end":return c.stop()}},v)}));return function(){return a.apply(this,arguments)}}(),A=(0,I.sj)({queryUserAuthResult:H,getAppName:Z,queryAdminAuthResult:Q,queryStoreManagerAuthResult:ae,queryStoreUserAuthResult:q,queryAdminPermission:Y,queryStoreManagerPermission:te,queryGrades:p,queryStores:X,queryNotificationCount:T,queryShoppingCartCount:B,queryCurrentStore:W,queryMostNearbyStore:$,messageHistory:[],grades:[],stores:[],notificationCount:0,headerHeight:0,bottomHeight:0,mallSettings:{},shoppingCartCount:0,currentStore:void 0,mostNearbyStore:void 0,userAuthResult:void 0,adminAuthResult:void 0,adminPermissions:void 0,storeUserAuthResult:void 0,storeManagerAuthResult:void 0,managerPermissions:void 0,get user(){var a;return(a=this.userAuthResult)===null||a===void 0?void 0:a.User},get admin(){var a;return(a=this.adminAuthResult)===null||a===void 0?void 0:a.Admin},get storeUser(){var a;return(a=this.storeUserAuthResult)===null||a===void 0?void 0:a.StoreUser},get storeManager(){var a;return(a=this.storeManagerAuthResult)===null||a===void 0?void 0:a.StoreManager}}),ue=function(){return(0,I.ey)(A)}}}]);
