"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3170],{74590:function(q,z,n){var N=n(15009),u=n.n(N),Z=n(99289),t=n.n(Z),C=n(5574),p=n.n(C),S=n(83062),R=n(14726),k=n(67294),U=n(85893);z.Z=function(D){var I=D.action,g=D.confirmText,X=D.hide,O=(0,k.useState)(!1),K=p()(O,2),L=K[0],V=K[1],$=g||"\u786E\u5B9A\u5220\u9664\uFF1F",Y=function(){var ee=t()(u()().mark(function te(){return u()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(confirm($)){b.next=2;break}return b.abrupt("return");case 2:return V(!0),b.prev=3,b.next=6,I();case 6:return b.prev=6,V(!1),b.finish(6);case 9:case"end":return b.stop()}},te,null,[[3,,6,9]])}));return function(){return ee.apply(this,arguments)}}();return X?null:(0,U.jsx)(U.Fragment,{children:(0,U.jsx)(S.Z,{title:$,children:(0,U.jsx)(R.ZP,{loading:L,danger:!0,type:"link",onClick:function(){Y()},children:"\u5220\u9664"})})})}},23806:function(q,z,n){var N=n(1288),u=n(85893);z.Z=function(Z){var t=Z.model,C=Z.fallback;if(t==null||t==null)return null;var p=t==null?void 0:t.CreationTime,S=t==null?void 0:t.LastModificationTime;return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{style:{},children:[(0,u.jsx)("div",{children:(0,u.jsx)(N.Z,{prefix:(0,u.jsx)("span",{children:"\u521B\u5EFA\uFF1A"}),onlyDate:!0,timeStr:p,fallback:C})}),(0,u.jsx)("div",{children:(0,u.jsx)(N.Z,{prefix:(0,u.jsx)("span",{children:"\u4FEE\u6539\uFF1A"}),onlyDate:!0,timeStr:S,fallback:C})})]})})}},1288:function(q,z,n){var N=n(78957),u=n(83062),Z=n(46629),t=n(85893);z.Z=function(C){var p,S=C.timeStr,R=C.fallback,k=C.onlyDate,U=C.prefix,D=(p=(0,Z.mg)(S))===null||p===void 0?void 0:p.add(Z.Mg,"hour");if(!D)return R||null;var I=(0,Z.ND)().utc().add(Z.Mg,"hour"),g=D.isSame(I,"year"),X=D.diff(I,"day"),O=g?D.format(Z.AK):D.format(Z.vc),K=function(){return(0,t.jsxs)("div",{children:[(0,t.jsxs)(N.Z,{direction:"horizontal",children:[(0,t.jsx)("div",{children:D.fromNow()}),(0,t.jsx)("div",{children:D.format(Z.On)})]}),(0,t.jsx)("div",{children:D.format(Z.t9)})]})};return(0,t.jsx)(u.Z,{title:K(),children:(0,t.jsxs)(N.Z,{direction:"horizontal",children:[U,(0,t.jsx)("div",{className:"inline-block cursor-pointer hover:bg-orange-500",children:k?D.format(Z.vc):D.format(Z.dq)})]})})}},11518:function(q,z,n){var N=n(55241),u=n(78957),Z=n(7134),t=n(55932),C=n(95813),p=n(8885),S=n(85893);z.Z=function(R){var k=R.model;if(!k)return null;var U=(0,t.SZ)(k.Avatar,{width:100,height:100}),D=(0,C.zO)([k.NickName,k.IdentityName,k.Id].filter(function(I){return I&&I.length>0}).at(0)||"--",10);return(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(N.Z,{content:(0,S.jsx)(p.Z,{model:k}),children:(0,S.jsxs)(u.Z,{direction:"horizontal",children:[(0,S.jsx)(Z.C,{size:"small",shape:"square",src:U,children:D}),(0,S.jsx)("span",{children:(0,S.jsx)("a",{children:D})})]})})})}},8885:function(q,z,n){var N=n(78957),u=n(7134),Z=n(55932),t=n(95813),C=n(85893);z.Z=function(p){var S,R=p.model;if(!R)return null;var k=(0,Z.SZ)(R.Avatar,{width:100,height:100}),U=(0,t.zO)([R.NickName,R.IdentityName,R.Id].filter(function(D){return D&&D.length>0}).at(0)||"--",10);return(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)(N.Z,{direction:"horizontal",children:[(0,C.jsx)("div",{children:(0,C.jsx)(u.C,{src:k,size:100})}),(0,C.jsxs)("div",{children:[(0,C.jsxs)("p",{children:["\u6635\u79F0\uFF1A",U]}),(0,C.jsxs)("p",{children:["\u7528\u6237\u540D\uFF1A",(R==null?void 0:R.IdentityName)||"--"]}),(0,C.jsxs)("p",{children:["\u624B\u673A\u53F7\uFF1A",(R==null||(S=R.UserMobile)===null||S===void 0?void 0:S.MobilePhone)||"--"]})]})]})})}},26873:function(q,z,n){var N=n(97857),u=n.n(N),Z=n(68421),t=n(45360),C=n(85576),p=n(65233),S=n(30699),R=n(95813),k=n(8885),U=n(85893);z.Z=function(D){var I,g=D.onFind,X=D.style,O=D.loading,K=(0,Z.Z)(S.x1.sys.manageUserSearchUserAccount,{manual:!0,onSuccess:function($){var Y,ee=(Y=$.data)===null||Y===void 0?void 0:Y.Data;if(!ee){t.ZP.error("\u627E\u4E0D\u5230\u8D26\u53F7");return}}}),L=(I=K.data)===null||I===void 0||(I=I.data)===null||I===void 0?void 0:I.Data;return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(C.Z,{title:"\u786E\u5B9A\u6DFB\u52A0",open:L!=null,onCancel:function(){return K.mutate(void 0)},onOk:function(){L&&g(L),K.mutate(void 0)},children:(0,U.jsx)(k.Z,{model:L})}),(0,U.jsx)("div",{style:u()({marginBottom:10,marginTop:10},X),children:(0,U.jsx)(p.Z.Search,{style:{width:"100%"},loading:K.loading||O,onSearch:function($){if((0,R.Wq)($)){t.ZP.error("\u8F93\u5165\u8D26\u53F7");return}K.run({AccountIdentity:$})},placeholder:"\u641C\u7D22\u8D26\u53F7\uFF08\u624B\u673A\u53F7\uFF0C\u90AE\u7BB1\uFF09\u4EE5\u6DFB\u52A0...",size:"large"})})]})}},70635:function(q,z,n){var N=n(19632),u=n.n(N),Z=n(84567),t=n(4393),C=n(85893);z.Z=function(p){var S=p.selectedKeys,R=p.onChange,k=p.permissions,U=function(g){return(0,C.jsx)(Z.Z,{checked:S.indexOf(g.key)>=0,onChange:function(O){var K=S.filter(function(L){return L!=g.key});O.target.checked&&K.push(g.key),R(K)},children:g.name})},D=function(g){var X=g.permissions.every(function(O){return S.indexOf(O.key)>=0});return(0,C.jsx)(t.Z,{size:"small",title:g.name,style:{marginBottom:10},extra:(0,C.jsx)(Z.Z,{checked:X,onChange:function(K){var L=g.permissions.map(function($){return $.key}),V=S.filter(function($){return L.indexOf($)<0});K.target.checked&&(V=[].concat(u()(V),u()(L))),R(V)},children:"\u5168\u9009"}),children:g.permissions.map(function(O,K){return(0,C.jsx)("span",{style:{marginRight:10,marginBottom:10},children:U(O)},K)})})};return(0,C.jsx)("div",{style:{},children:k.map(function(I,g){return(0,C.jsx)("div",{children:D(I)},g)})})}},1549:function(q,z,n){n.r(z),n.d(z,{default:function(){return Re}});var N=n(5574),u=n.n(N),Z=n(92398),t=n(67294),C=n(76021),p=n(68421),S=n(71230),R=n(15746),k=n(57381),U=n(35375),D=n(38295),I=n(35291),g=n(30699),X=n(40411),O=n(14726),K=n(4393),L=n(78957),V=n(80799),$=n(66309),Y=n(40056),ee=n(23806),te=n(11518),w=n(45360),b=n(85576),de=n(97857),A=n.n(de),ce=n(19632),se=n.n(ce),me=n(39019),B=n(95813),e=n(85893),ie=function(i){var s,l=i.value,a=i.onChange,E=i.style,x=(0,p.Z)(g.x1.sys.departmentDepartmentTree,{manual:!0}),m=((s=x.data)===null||s===void 0||(s=s.data)===null||s===void 0?void 0:s.Data)||[],d=m.flatMap(function(f){return(0,I.PC)(f)}),v=se()(new Set(d.map(function(f){return f.key||""}))),P=m.map(function(f){return(0,I.iw)(f,function(o){return"".concat(o.title,"-").concat((0,B.Te)(o.title||"")||"N/A")})});return(0,t.useEffect)(function(){x.run({})},[]),(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(me.Z,{style:A()({},E),loading:x.loading,value:l,onChange:function(o){var r;a&&a((r=d.find(function(j){return j.key==o}))===null||r===void 0?void 0:r.raw_data)},placeholder:"\u8F93\u5165\u62FC\u97F3\u7F29\u5199\u53EF\u4EE5\u641C\u7D22...",treeData:P,treeExpandedKeys:v,treeDefaultExpandAll:!0,allowClear:!0,showSearch:!0,treeNodeFilterProp:"label",filterTreeNode:void 0})})},fe=function(i){var s,l=i.data,a=i.ok,E=(0,t.useState)(!1),x=u()(E,2),m=x[0],d=x[1],v=(0,t.useState)([]),P=u()(v,2),f=P[0],o=P[1],r=(0,p.Z)(g.x1.sys.departmentSetAdminDepartments,{manual:!0,onSuccess:function(c,y){(0,B._y)(c,function(){w.ZP.success("\u8BBE\u7F6E\u6210\u529F"),d(!1),a()})}});return(0,t.useEffect)(function(){var j;o(((j=l.Departments)===null||j===void 0?void 0:j.map(function(c){return c.Id||""}))||[])},[l]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(b.Z,{open:m,title:"\u4FEE\u6539\u90E8\u95E8",onOk:function(){r.run({Key:l.Id,Value:f})},onCancel:function(){d(!1)},children:(0,e.jsx)(ie,{style:{width:"100%"},value:f.at(0),onChange:function(c){o([(c==null?void 0:c.Id)||""].filter(function(y){return!(0,B.Wq)(y)}))}})}),(0,e.jsxs)(L.Z,{direction:"horizontal",children:[(s=l.Departments)===null||s===void 0?void 0:s.map(function(j,c){return(0,e.jsx)($.Z,{children:j.Name},c)}),(0,e.jsx)(O.ZP,{type:"link",onClick:function(){return d(!0)},children:"\u4FEE\u6539"})]})]})},ve=n(26873),_e=function(i){var s=i.show,l=i.hide,a=i.department,E=i.ok,x=(0,p.Z)(g.x1.sys.departmentSetAdminDepartments,{manual:!0,onSuccess:function(v,P){(0,B._y)(v,function(){l(),E()})}}),m=(0,p.Z)(g.x1.sys.manageAdminSetAsAdmin,{manual:!0,onSuccess:function(v,P){(0,B._y)(v,function(){var f=v.data.Data;f?x.run({Key:f.Id,Value:[(a==null?void 0:a.Id)||""].filter(function(o){return!(0,B.Wq)(o)})}):w.ZP.error("\u6DFB\u52A0\u5931\u8D25")})}});return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(b.Z,{title:"\u641C\u7D22\u7528\u6237\u6DFB\u52A0",confirmLoading:m.loading||x.loading,open:s,onCancel:function(){return l()},footer:!1,children:(0,e.jsx)(ve.Z,{onFind:function(v){m.run({UserId:v.Id})}})})})},he=n(84567),xe=function(i){var s=i.model,l=i.ok,a=(0,t.useState)(!1),E=u()(a,2),x=E[0],m=E[1],d=(0,t.useState)([]),v=u()(d,2),P=v[0],f=v[1],o=(0,t.useState)(!1),r=u()(o,2),j=r[0],c=r[1],y=(0,t.useState)([]),M=u()(y,2),_=M[0],F=M[1],h=function(){c(!1),g.x1.sys.manageRoleQueryPaging({Page:1,PageSize:100}).then(function(Q){(0,B._y)(Q,function(){F(Q.data.Items||[])})}).finally(function(){c(!1)})};(0,t.useEffect)(function(){x&&h()},[x]);var W=function(){c(!1),g.x1.sys.manageRoleSetAdminRoles({Id:s.Id,RoleIds:P}).then(function(Q){(0,B._y)(Q,function(){w.ZP.success("\u4FDD\u5B58\u6210\u529F"),m(!1),l&&l()})}).finally(function(){c(!1)})},T=function(){return(0,B.G5)(s.Roles)?null:(0,e.jsx)("div",{children:(s.Roles||[]).map(function(Q,ae){return(0,e.jsx)($.Z,{style:{marginRight:5,marginBottom:5},children:Q.Name},ae)})})};(0,t.useEffect)(function(){s.Roles&&f(s.Roles.map(function(G){return G.Id||""}))},[s]);var J=function(){return!_||_.length<=0?(0,e.jsx)(Y.Z,{message:"\u65E0\u89D2\u8272"}):(0,e.jsx)("div",{children:_.map(function(Q,ae){return(0,e.jsx)(he.Z,{checked:P.indexOf(Q.Id||"")>=0,onChange:function(Fe){var re=P.filter(function(Te){return Te!=Q.Id});Fe.target.checked&&(re=[].concat(se()(re),[Q.Id||"."])),f(re)},style:{marginRight:5,marginBottom:5},value:Q.Id,children:Q.Name},ae)})})};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(L.Z,{direction:"horizontal",children:[T(),(0,e.jsx)(O.ZP,{type:"link",onClick:function(){m(!0)},children:"\u4FEE\u6539"})]}),(0,e.jsx)(b.Z,{title:"\u7ED1\u5B9A\u89D2\u8272",confirmLoading:j,open:x,onCancel:function(){m(!1)},onOk:function(){W()},children:J()})]})},H=n(11346),ue=n(72269),ge=function(i){var s=i.show,l=i.hide,a=i.ok,E=i.model,x=(0,t.useState)(!1),m=u()(x,2),d=m[0],v=m[1],P=(0,t.useState)({}),f=u()(P,2),o=f[0],r=f[1],j=function(y){v(!0),g.x1.sys.manageAdminUpdateStatus(A()(A()({},y),{},{Id:E.Id})).then(function(M){(0,B._y)(M,function(){w.ZP.success("\u4FDD\u5B58\u6210\u529F"),a&&a()})}).finally(function(){v(!1)})};return(0,t.useEffect)(function(){r({IsActive:E.IsActive,IsSuperAdmin:E.IsSuperAdmin})},[E]),(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(b.Z,{title:"\u4FEE\u6539\u72B6\u6001",confirmLoading:d,open:s,onCancel:function(){l()},onOk:function(){j(o)},children:(0,e.jsxs)(H.Z,{children:[(0,e.jsx)(H.Z.Item,{label:"\u8D85\u7EA7\u7BA1\u7406\u5458",children:(0,e.jsx)(ue.Z,{checked:o.IsSuperAdmin||!1,onChange:function(y){r(A()(A()({},o),{},{IsSuperAdmin:y}))}})}),(0,e.jsx)(H.Z.Item,{label:"\u662F\u5426\u6FC0\u6D3B",children:(0,e.jsx)(ue.Z,{checked:o.IsActive||!1,onChange:function(y){r(A()(A()({},o),{},{IsActive:y}))}})})]})})})},je=function(i){var s,l,a=i.department,E=i.ok,x=(0,p.Z)(g.x1.sys.departmentListDepartmentAdmins,{manual:!0}),m=(0,p.Z)(g.x1.sys.departmentDanglingAdmin,{manual:!0}),d=x.loading||m.loading,v=((s=x.data)===null||s===void 0||(s=s.data)===null||s===void 0?void 0:s.Data)||((l=m.data)===null||l===void 0||(l=l.data)===null||l===void 0?void 0:l.Data)||[],P=(0,t.useState)(void 0),f=u()(P,2),o=f[0],r=f[1],j=(0,t.useState)(!1),c=u()(j,2),y=c[0],M=c[1],_=function(){x.mutate(),m.mutate(),a&&a.Id?x.run({Id:a.Id}):m.run({})};(0,t.useEffect)(function(){_()},[a==null?void 0:a.Id]);var F=[{title:"\u8D26\u53F7\u4E3B\u4F53",render:function(W){return(0,e.jsx)(te.Z,{model:W.User})}},{title:"\u540D\u79F0",fixed:"left",render:function(W,T){var J,G=(J=T.User)===null||J===void 0?void 0:J.IdentityName;return(0,e.jsx)("a",{children:G})}},{title:"\u6240\u5C5E\u90E8\u95E8",render:function(W,T){return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(fe,{data:T,ok:function(){_(),E()}})})}},{title:"\u89D2\u8272",render:function(W,T){return(0,e.jsx)(xe,{model:T,ok:function(){_()}})}},{title:"\u6D3B\u52A8\u72B6\u6001",render:function(W,T){return(0,e.jsx)(X.Z,{status:T.IsActive?"success":"default",text:T.IsActive?"\u6D3B\u52A8":"\u51BB\u7ED3"})}},{title:"\u8D85\u7EA7\u7BA1\u7406\u5458",render:function(W,T){return(0,e.jsx)(X.Z,{status:T.IsSuperAdmin?"success":"default",text:T.IsSuperAdmin?"\u8D85\u7EA7\u7BA1\u7406\u5458":"\u666E\u901A\u7BA1\u7406\u5458"})}},{title:"\u65F6\u95F4",render:function(W,T){return(0,e.jsx)(ee.Z,{model:T})}},{title:"\u64CD\u4F5C",render:function(W,T){return(0,e.jsx)(O.ZP.Group,{children:(0,e.jsx)(O.ZP,{type:"link",onClick:function(){r(T)},children:"\u7F16\u8F91"})})}}];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(ge,{show:o!=null,hide:function(){return r(void 0)},ok:function(){r(void 0),_()},model:o||{}}),(0,e.jsx)(_e,{show:y,hide:function(){return M(!1)},ok:function(){_(),E()},department:a}),(0,e.jsx)(K.Z,{title:"\u90E8\u95E8\u6210\u5458",extra:(0,e.jsx)(L.Z,{direction:"horizontal",children:(0,e.jsx)(O.ZP,{type:"link",onClick:function(){M(!0)},children:"\u6DFB\u52A0\u6210\u5458"})}),children:(0,e.jsx)(V.Z,{rowKey:function(W){return W.Id||""},loading:d,columns:F,dataSource:v,pagination:!1,expandable:{expandedRowRender:function(W){var T,J=((T=W.Roles)===null||T===void 0?void 0:T.flatMap(function(G){return G.PermissionKeys||[]}))||[];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("h5",{children:"\u6743\u9650\u503C"}),(0,e.jsxs)("div",{children:[J.map(function(G,Q){return(0,e.jsx)($.Z,{style:{margin:5},children:G},Q)}),J.length<=0&&(0,e.jsx)(Y.Z,{message:"\u65E0\u4EFB\u4F55\u6743\u9650"})]})]})}}})})]})},Ee=n(26412),ne=n(65233),Ce=function(i){var s=i.show,l=i.hide,a=i.data,E=i.ok,x=(0,t.useState)({}),m=u()(x,2),d=m[0],v=m[1],P=(0,p.Z)(g.x1.sys.departmentSave,{manual:!0,onSuccess:function(r,j){(0,B._y)(r,function(){w.ZP.success("\u4FDD\u5B58\u6210\u529F"),E()})}}),f=function(r){var j;r.Name=(j=r.Name)===null||j===void 0?void 0:j.trim(),!(0,B.Wq)(r.Name)&&P.run(r)};return(0,t.useEffect)(function(){v(A()({},a||{}))},[a]),(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(b.Z,{title:"\u90E8\u95E8",forceRender:!0,destroyOnClose:!0,open:s,onCancel:function(){return l()},footer:(0,e.jsx)(L.Z,{children:(0,e.jsx)(O.ZP,{type:"primary",onClick:function(){f(d)},children:"\u4FDD\u5B58"})}),children:(0,e.jsx)(k.Z,{spinning:P.loading,children:(0,e.jsxs)(H.Z,{labelCol:{flex:"110px"},labelAlign:"right",wrapperCol:{flex:1},children:[(0,e.jsx)(H.Z.Item,{label:"\u7236\u7EA7\u90E8\u95E8",children:s&&(0,e.jsx)(ie,{value:d.ParentId||void 0,onChange:function(r){v(A()(A()({},d),{},{ParentId:r==null?void 0:r.Id}))}})}),(0,e.jsxs)(H.Z.Item,{label:"\u540D\u79F0",required:!0,children:[(0,e.jsx)(ne.Z,{count:{show:!0,max:20},maxLength:20,value:d.Name||"",onChange:function(r){v(A()(A()({},d),{},{Name:r.target.value}))}}),(0,B.Wq)(d.Name)&&(0,e.jsx)("p",{style:{color:"red"},children:"\u5FC5\u586B"})]}),(0,e.jsx)(H.Z.Item,{label:"\u63CF\u8FF0",children:(0,e.jsx)(ne.Z.TextArea,{maxLength:200,value:d.Description||"",onChange:function(r){v(A()(A()({},d),{},{Description:r.target.value}))}})}),(0,e.jsx)(H.Z.Item,{label:"\u90E8\u95E8\u7C7B\u578B",style:{display:"none"},children:(0,e.jsx)(ne.Z,{maxLength:50,value:d.DeptType||"",onChange:function(r){v(A()(A()({},d),{},{DeptType:r.target.value}))}})})]})})})})},ye=function(i){var s=i.node,l=i.ok,a=s==null?void 0:s.raw_data,E=(0,t.useState)(void 0),x=u()(E,2),m=x[0],d=x[1],v=(0,p.Z)(g.x1.sys.departmentDeleteById,{manual:!0,onSuccess:function(r,j){(0,B._y)(r,function(){w.ZP.success("\u5220\u9664\u6210\u529F"),l()})}}),P=function(){if(!a)return(0,e.jsx)(Y.Z,{message:"\u672A\u9009\u62E9\u90E8\u95E8"});var r=[{label:"\u63CF\u8FF0",children:(0,e.jsx)("span",{children:a.Description})}];return(0,e.jsx)(Ee.Z,{title:a.Name,items:r})},f=function(){return(0,e.jsxs)(L.Z,{direction:"horizontal",children:[(0,e.jsx)(O.ZP,{type:"link",onClick:function(){d({ParentId:a==null?void 0:a.Id})},children:"\u6DFB\u52A0\u5B50\u90E8\u95E8"}),(0,e.jsx)(O.ZP,{type:"link",disabled:(0,B.Wq)(a==null?void 0:a.Id),onClick:function(){d(A()({},a))},children:"\u7F16\u8F91"}),(0,e.jsx)(O.ZP,{type:"link",danger:!0,disabled:(0,B.Wq)(a==null?void 0:a.Id)||!(0,B.G5)(s==null?void 0:s.children),loading:v.loading,onClick:function(){confirm("\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u90E8\u95E8\u5417\uFF1F")&&v.run({Id:a==null?void 0:a.Id})},children:"\u5220\u9664"})]})};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Ce,{data:m||{},show:m!=null,ok:function(){d(void 0),l&&l()},hide:function(){return d(void 0)}}),(0,e.jsx)(K.Z,{style:{marginBottom:10},extra:f(),children:P()})]})},oe="00000000000000.0000000000000000000",De=function(){var i,s=(0,D.o)(),l=(0,p.Z)(g.x1.sys.departmentDepartmentTree,{manual:!0}),a=(0,t.useState)(void 0),E=u()(a,2),x=E[0],m=E[1],d=(0,t.useState)([]),v=u()(d,2),P=v[0],f=v[1];(0,t.useEffect)(function(){l.run({})},[]);var o=((i=l.data)===null||i===void 0||(i=i.data)===null||i===void 0?void 0:i.Data)||[],r=[{key:oe,raw_data:void 0,title:s.getAppName()||"\u7EC4\u7EC7\u67B6\u6784",children:o}];(0,t.useEffect)(function(){var M=r.flatMap(function(_){return(0,I.PC)(_)}).map(function(_){return _.key||""});f(M)},[o]);var j=r.flatMap(I.PC),c=j.find(function(M){return M.key===x}),y=r.map(function(M){return(0,I.jR)(M,function(_){var F=_.raw_data;return _.key==oe||!F||(F.MemberCount||0)<=0?_.title||"":"".concat(_.title," (").concat(F.MemberCount,")")})});return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(S.Z,{gutter:[10,10],children:[(0,e.jsx)(R.Z,{span:6,children:(0,e.jsx)(k.Z,{spinning:l.loading,children:(0,e.jsx)(U.Z,{showIcon:!0,showLine:!0,treeData:y,blockNode:!0,onSelect:function(_){console.log(_),m(_.at(0))},expandedKeys:P,onExpand:function(_){f(_)},rootStyle:{background:"none"}})})}),(0,e.jsxs)(R.Z,{span:18,children:[(0,e.jsx)(ye,{node:c,ok:function(){l.run({})}}),(0,e.jsx)(je,{department:c==null?void 0:c.raw_data,ok:function(){l.run({})}})]})]})})},Pe=n(15009),le=n.n(Pe),pe=n(99289),Se=n.n(pe),Ze=n(74590),Ie=function(i){var s=i.show,l=i.hide,a=i.data,E=i.ok,x=(0,t.useState)(!1),m=u()(x,2),d=m[0],v=m[1],P=(0,t.useState)({}),f=u()(P,2),o=f[0],r=f[1],j=function(y){v(!0),g.x1.sys.manageRoleSave(A()({},y)).then(function(M){(0,B._y)(M,function(){w.ZP.success("\u4FDD\u5B58\u6210\u529F"),E()})}).finally(function(){v(!1)})};return(0,t.useEffect)(function(){r(A()({},a))},[a]),(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(b.Z,{title:"\u89D2\u8272",open:s,onCancel:function(){return l()},footer:(0,e.jsxs)(L.Z,{children:[(0,e.jsx)(Ze.Z,{action:Se()(le()().mark(function c(){var y;return le()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,g.x1.sys.manageRoleDelete({Id:o.Id});case 2:y=_.sent,(0,B._y)(y,function(){l(),E()});case 4:case"end":return _.stop()}},c)})),hide:(0,B.Wq)(o.Id)}),(0,e.jsx)(O.ZP,{type:"primary",onClick:function(){j(o)},children:"\u4FDD\u5B58"})]}),children:(0,e.jsx)(k.Z,{spinning:d,children:(0,e.jsxs)(H.Z,{labelCol:{flex:"110px"},labelAlign:"right",wrapperCol:{flex:1},children:[(0,e.jsx)(H.Z.Item,{label:"\u540D\u79F0",rules:[{required:!0},{max:10}],children:(0,e.jsx)(ne.Z,{value:o.Name||"",onChange:function(y){r(A()(A()({},o),{},{Name:y.target.value}))}})}),(0,e.jsx)(H.Z.Item,{label:"\u63CF\u8FF0",rules:[{max:50}],children:(0,e.jsx)(ne.Z,{value:o.Description||"",onChange:function(y){r(A()(A()({},o),{},{Description:y.target.value}))}})})]})})})})},Oe=n(70635),Ae=function(i){var s=i.model,l=i.ok,a=(0,t.useState)(!1),E=u()(a,2),x=E[0],m=E[1],d=(0,t.useState)(!1),v=u()(d,2),P=v[0],f=v[1],o=(0,t.useState)([]),r=u()(o,2),j=r[0],c=r[1];(0,t.useEffect)(function(){c(s.PermissionKeys||[])},[s]);var y=function(F){f(!0),g.x1.sys.manageRoleSetRolePermissions({Id:s.Id,PermissionKeys:F||[]}).then(function(h){(0,B._y)(h,function(){w.ZP.success("\u4FDD\u5B58\u6210\u529F"),m(!1),l&&l()})}).finally(function(){f(!1)})},M=function(){var F=s.PermissionKeys||[],h=I.i_.filter(function(W){return F.indexOf(W.key)>=0});return(0,e.jsx)("div",{children:h.map(function(W,T){return(0,e.jsx)($.Z,{style:{marginRight:5,marginBottom:5},children:W.name},T)})})};return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{children:[(0,e.jsxs)(L.Z,{direction:"horizontal",children:[M(),(0,e.jsx)(O.ZP,{type:"link",onClick:function(){m(!0)},children:"\u4FEE\u6539"})]}),(0,e.jsx)(b.Z,{title:"\u7ED1\u5B9A\u6743\u9650",confirmLoading:P,open:x,onCancel:function(){m(!1)},onOk:function(){y(j)},children:(0,e.jsx)(Oe.Z,{selectedKeys:j,onChange:function(F){return c(F)},permissions:I.bp})})]})})},Me=function(){var i=(0,t.useState)(!0),s=u()(i,2),l=s[0],a=s[1],E=(0,t.useState)({Items:[],TotalCount:0}),x=u()(E,2),m=x[0],d=x[1],v=(0,t.useState)({Page:1}),P=u()(v,2),f=P[0],o=P[1],r=(0,t.useState)(void 0),j=u()(r,2),c=j[0],y=j[1],M=function(){a(!0),g.x1.sys.manageRoleQueryPaging(A()({},f)).then(function(h){(0,B._y)(h,function(){d(h.data||{})})}).finally(function(){a(!1)})},_=[{title:"\u540D\u79F0",render:function(h){return h.Name}},{title:"\u63CF\u8FF0",render:function(h){return h.Description||"--"}},{title:"\u6743\u9650",render:function(h){return(0,e.jsx)(Ae,{model:h,ok:function(){M()}})}},{title:"\u65F6\u95F4",render:function(h){return(0,e.jsx)(ee.Z,{model:h})}},{title:"\u64CD\u4F5C",width:200,render:function(h){return(0,e.jsx)(O.ZP.Group,{children:(0,e.jsx)(O.ZP,{type:"link",onClick:function(){y(h)},children:"\u7F16\u8F91"})})}}];return(0,t.useEffect)(function(){M()},[f]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Ie,{show:c!=null,hide:function(){return y(void 0)},data:c||{},ok:function(){y(void 0),M()}}),(0,e.jsx)(K.Z,{title:"\u89D2\u8272",extra:(0,e.jsx)(O.ZP,{type:"primary",onClick:function(){y({})},children:"\u65B0\u589E"}),children:(0,e.jsx)(V.Z,{loading:l,columns:_,dataSource:m.Items||[],pagination:{showSizeChanger:!1,pageSize:20,current:f.Page,total:m.TotalCount,onChange:function(h){o(A()(A()({},f),{},{Page:h}))}}})})]})},Re=function(){var i=(0,C.UO)(),s=(0,t.useState)(i.id),l=u()(s,2),a=l[0],E=l[1];return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(Z.Z,{destroyInactiveTabPane:!0,activeKey:a||"org",onChange:function(m){return E(m)},items:[{key:"org",label:"\u7EC4\u7EC7\u67B6\u6784",children:(0,e.jsx)(De,{})},{key:"role",label:"\u89D2\u8272",children:(0,e.jsx)(Me,{})}]})})}}}]);
