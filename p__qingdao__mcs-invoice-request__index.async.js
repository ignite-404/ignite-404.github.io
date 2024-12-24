"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8730],{23806:function(G,A,e){var P=e(1288),l=e(85893);A.Z=function(v){var u=v.model,f=v.fallback;if(u==null||u==null)return null;var a=u==null?void 0:u.CreationTime,O=u==null?void 0:u.LastModificationTime;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{style:{},children:[(0,l.jsx)("div",{children:(0,l.jsx)(P.Z,{prefix:(0,l.jsx)("span",{children:"\u521B\u5EFA\uFF1A"}),onlyDate:!0,timeStr:a,fallback:f})}),(0,l.jsx)("div",{children:(0,l.jsx)(P.Z,{prefix:(0,l.jsx)("span",{children:"\u4FEE\u6539\uFF1A"}),onlyDate:!0,timeStr:O,fallback:f})})]})})}},1288:function(G,A,e){var P=e(78957),l=e(83062),v=e(46629),u=e(85893);A.Z=function(f){var a,O=f.timeStr,W=f.fallback,F=f.onlyDate,h=f.prefix,d=(a=(0,v.QW)(O))===null||a===void 0?void 0:a.local();if(!d)return W||null;var j=(0,v.ND)().utc().local(),S=d.isSame(j,"year"),Z=d.diff(j,"day"),V=S?d.format(v.AK):d.format(v.vc),H=function(){return(0,u.jsxs)("div",{children:[(0,u.jsxs)(P.Z,{direction:"horizontal",children:[(0,u.jsx)("div",{children:d.fromNow()}),(0,u.jsx)("div",{children:d.format(v.On)})]}),(0,u.jsx)("div",{children:d.format(v.t9)})]})};return(0,u.jsx)(l.Z,{title:H(),children:(0,u.jsxs)(P.Z,{direction:"horizontal",children:[h,(0,u.jsx)("div",{className:"inline-block cursor-pointer hover:bg-orange-500",children:F?d.format(v.vc):d.format(v.dq)})]})})}},8045:function(G,A,e){var P=e(97857),l=e.n(P),v=e(28036),u=e(67294),f=e(85893);A.Z=function(a){var O=a.loading,W=a.inputProps,F=a.onSelect,h=a.uploadButtonProps,d=(0,u.useRef)(null);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{style:{display:"none"},children:(0,f.jsx)("input",l()(l()({ref:d,type:"file",multiple:!1},W),{},{onChange:function(S){try{var Z=S.target.files;Z&&F&&F(Z)}finally{d.current&&(d.current.value="",d.current.files=null)}}}))}),(0,f.jsx)(v.ZP,l()(l()({size:"small",loading:O,type:"dashed"},h),{},{onClick:function(){var S;(S=d.current)===null||S===void 0||S.click()},children:"\u9009\u62E9\u56FE\u7247"}))]})}},73042:function(G,A,e){e.r(A),e.d(A,{default:function(){return hn}});var P=e(15009),l=e.n(P),v=e(99289),u=e.n(v),f=e(97857),a=e.n(f),O=e(5574),W=e.n(O),F=e(45360),h=e(11346),d=e(9798),j=e(66309),S=e(55241),Z=e(28036),V=e(40411),H=e(78957),Y=e(80799),N=e(67294),nn=e(23806),X=e(1288),en=[{label:"\u5F00\u7968\u4E2D",value:"pending"},{label:"\u5F00\u7968\u6210\u529F",value:"success"},{label:"\u5F00\u7968\u5931\u8D25",value:"failed"}],q=[{name:"mcs\u4E1A\u52A1\u5355",id:"3"}],K=e(30699),p=e(95813),rn=e(80918),tn=e(11774),n=e(85893),an=function(M){var E=M.items;if(!E||(0,p.G5)(E))return(0,n.jsx)("h1",{children:"empty items"});var T=[{title:"\u91D1\u989D",render:function(Q,s){return(0,n.jsx)(j.Z,{color:"warning",children:(0,p.lb)(s.Price||0)})}},{title:"\u8D26\u5355\u53F7",render:function(Q,s){return(0,n.jsx)(j.Z,{children:s.McsBizOrderId})}},{title:"\u4E1A\u52A1\u63CF\u8FF0",render:function(Q,s){return(0,n.jsx)(j.Z,{children:s.Description})}}];return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{style:{},children:(0,n.jsx)(Y.Z,{size:"small",bordered:!0,columns:T,dataSource:E||[],pagination:!1})})})},un=e(4393),ln=e(71230),U=e(15746),w=e(34041),dn=e(65233),sn=e(96864),on=e(72269),R=e(46629),k=e(35291),cn=function(M){var E,T,g=M.query,Q=M.onChange,s=(0,N.useState)({}),z=W()(s,2),o=z[0],C=z[1];return(0,N.useEffect)(function(){C(g)},[g]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(un.Z,{bordered:!1,style:{marginBottom:10},children:(0,n.jsx)(h.Z,{labelCol:{span:5},children:(0,n.jsxs)(ln.Z,{gutter:[10,10],children:[(0,n.jsx)(U.Z,{span:8,children:(0,n.jsx)(h.Z.Item,{label:"\u4E1A\u52A1\u7C7B\u578B",children:(0,n.jsx)(w.Z,{allowClear:!0,value:o.BizType,options:q.map(function(x){return{label:x.name,value:x.id}}),onClear:function(){C(a()(a()({},o),{},{BizType:void 0}))},onChange:function(c){C(a()(a()({},o),{},{BizType:c}))}})})}),(0,n.jsx)(U.Z,{span:8,children:(0,n.jsx)(h.Z.Item,{label:"\u4E1A\u52A1\u5355\u53F7",children:(0,n.jsx)(dn.Z,{value:o.BizOrderId||"",onChange:function(c){C(a()(a()({},o),{},{BizOrderId:c.target.value}))}})})}),(0,n.jsx)(U.Z,{span:8,children:(0,n.jsx)(h.Z.Item,{label:"\u65F6\u95F4\u8303\u56F4",children:(0,n.jsx)(sn.default.RangePicker,{allowClear:!0,value:[((E=(0,R.QW)(o.StartTime))===null||E===void 0?void 0:E.add(R.Mg,"hour"))||null,((T=(0,R.QW)(o.EndTime))===null||T===void 0?void 0:T.add(R.Mg,"hour"))||null],onChange:function(c){var D,B;C(a()(a()({},o),{},{StartTime:c==null||(D=c.at(0))===null||D===void 0||(D=D.add(-R.Mg,"hour"))===null||D===void 0?void 0:D.format(R.dq),EndTime:c==null||(B=c.at(1))===null||B===void 0||(B=B.add(-R.Mg,"hour"))===null||B===void 0?void 0:B.format(R.dq)}))}})})}),(0,n.jsx)(U.Z,{span:8,children:(0,n.jsx)(h.Z.Item,{label:"\u5F00\u7968\u72B6\u6001",children:(0,n.jsx)(w.Z,{allowClear:!0,value:o.Status,options:en,onClear:function(){C(a()(a()({},o),{},{Status:void 0}))},onChange:function(c){C(a()(a()({},o),{},{Status:c}))}})})}),(0,n.jsx)(U.Z,{span:8,children:(0,n.jsx)(h.Z.Item,{label:"\u662F\u5426\u9886\u53D6",hidden:(0,k.RZ)(),children:(0,n.jsx)(on.Z,{checked:o.Picked||!1,onChange:function(c){C(a()(a()({},o),{},{Picked:c}))}})})}),(0,n.jsx)(U.Z,{span:8,children:(0,n.jsx)(h.Z.Item,{children:(0,n.jsx)(Z.ZP,{type:"primary",onClick:function(){Q(o)},children:"\u641C\u7D22"})})})]})})})})},L=e(68421),vn=e(85134),fn=e(8045),mn=e(76857),hn=function(){var M,E=(0,N.useState)({}),T=W()(E,2),g=T[0],Q=T[1],s=(0,L.Z)(K.c2.mallQingdao.invoiceRequestAdminQueryPaging,{manual:!0}),z=((M=s.data)===null||M===void 0?void 0:M.data)||{},o=(0,L.Z)(K.c2.mallQingdao.invoiceRequestAdminMarkAsPicked,{manual:!0,onSuccess:function(t){(0,p._y)(t,function(){s.run(a()({},g))})}}),C=function(t){confirm("\u786E\u5B9A\u6807\u8BB0\u4E3A\u5DF2\u9886\u53D6\uFF1F")&&o.run({Id:t.Id})},x=(0,L.Z)(K.c2.mallQingdao.invoiceRequestAdminMarkAsSuccess,{manual:!0,onSuccess:function(t){(0,p._y)(t,function(){s.run(a()({},g))})}}),c=function(t){confirm("\u786E\u5B9A\u6807\u8BB0\u4E3A\u5F00\u7968\u6210\u529F\uFF1F")&&x.run({Id:t.Id})},D=(0,L.Z)(K.c2.mallQingdao.invoiceRequestAdminMarkAsFailed,{manual:!0,onSuccess:function(t){(0,p._y)(t,function(){s.run(a()({},g))})}}),B=function(t){confirm("\u786E\u5B9A\u6807\u8BB0\u4E3A\u5F00\u7968\u5931\u8D25\uFF1F")&&D.run({Id:t.Id})},J=(0,L.Z)(K.c2.mallQingdao.invoiceRequestAdminRefreshCallback,{manual:!0,onSuccess:function(t){(0,p._y)(t,function(){F.ZP.success("\u5237\u65B0\u6210\u529F"),s.run(a()({},g))})}}),jn=s.loading||o.loading||x.loading||D.loading||J.loading;(0,N.useEffect)(function(){s.run(g)},[]);var gn=function(t){var r=function(y,b){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(h.Z.Item,{label:y,children:(0,n.jsx)(d.Z.Text,{copyable:!0,children:b||"--"})})})};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{style:{width:500},children:(0,n.jsxs)(h.Z,{labelCol:{span:4},children:[r("\u7A0E\u53F7",t.Code),r("\u62AC\u5934",t.Head),r("\u94F6\u884C\u7F16\u7801",t.BankCode),r("\u94F6\u884C\u540D\u79F0",t.BankName),r("\u53D1\u7968\u7C7B\u578B",t.InvoiceType),r("\u8054\u7CFB\u7535\u8BDD",t.PhoneNumber)]})})})},xn=function(t){var r=t.Status;return r=="pending"?(0,n.jsx)(j.Z,{color:"processing",children:"\u5F00\u7968\u4E2D"}):r=="success"?(0,n.jsx)(j.Z,{color:"success",children:"\u5F00\u7968\u6210\u529F"}):r=="failed"?(0,n.jsx)(j.Z,{color:"error",children:"\u5F00\u7968\u5931\u8D25"}):(0,n.jsx)("span",{children:"error status"})},pn=function(t){if(!t.ResourceKey)return null;var r=(0,p.C6)([vn.vc.API_GATEWAY,"api/mall-qingdao/invoice-request/download",t.ResourceKey]);return r?(0,n.jsx)("div",{children:(0,n.jsx)("a",{className:"text-blue-900",href:r,target:"_blank",children:"\u4E0B\u8F7DPDF"})}):null},Zn=function(){var i=u()(l()().mark(function t(r,m){var y,b,$,_;return l()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return b=new FormData,b.append("formFileCollection",m,m.name),I.next=4,mn.M.post("/api/mall-qingdao/admin/invoice-request/upload-attachment",b);case 4:if($=I.sent,$!=null&&(y=$.data)!==null&&y!==void 0&&y.Data){I.next=8;break}return F.ZP.error("upload error"),I.abrupt("return");case 8:return I.next=10,K.c2.mallQingdao.invoiceRequestAdminSetAttachment({Id:r,StorageMeta:$.data.Data});case 10:_=I.sent,(0,p._y)(_,function(){s.run(a()({},g))});case 12:case"end":return I.stop()}},t)}));return function(r,m){return i.apply(this,arguments)}}(),Cn=(0,L.Z)(Zn,{manual:!0}),yn=function(t){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(fn.Z,{loading:!1,onSelect:function(m){var y=m.item(0);if(!y){F.ZP.info("\u672A\u9009\u62E9\u6587\u4EF6");return}confirm("\u786E\u5B9A\u4E0A\u4F20\u4E3A\u9644\u4EF6\uFF1F")&&Cn.run(t.Id,y)}})})},Pn=[{title:"\u91D1\u989D",render:function(t,r){return(0,n.jsx)(j.Z,{color:"warning",children:(0,p.lb)(r.TotalAmount||0)})},width:100,fixed:"left"},{title:"\u4E1A\u52A1\u7C7B\u578B",render:function(t,r){var m;return(0,n.jsx)(j.Z,{children:((m=q.find(function(y){return y.id==r.BizType}))===null||m===void 0?void 0:m.name)||"--"})}},{title:"\u5F00\u7968\u4FE1\u606F",render:function(t,r){return(0,n.jsx)(S.Z,{title:"\u5F00\u7968\u4FE1\u606F",content:gn(r.UserInvoice||{}),trigger:["hover"],children:(0,n.jsx)(Z.ZP,{type:"link",children:"\u67E5\u770B\u5F00\u7968\u4FE1\u606F"})})}},{title:"\u5F00\u7968\u72B6\u6001",render:function(t,r){return xn(r)}},{title:"\u5F00\u7968\u65F6\u95F4",render:function(t,r){return(0,n.jsx)(X.Z,{timeStr:r.InvoicingTime})}},{title:"\u662F\u5426\u9886\u53D6",render:function(t,r){return(0,n.jsx)(V.Z,{status:r.Picked?"success":"default",text:r.Picked?"\u5DF2\u9886\u53D6":"\u672A\u9886\u53D6"})},hidden:(0,k.RZ)()},{title:"\u9886\u53D6\u65F6\u95F4",render:function(t,r){return(0,n.jsx)(X.Z,{timeStr:r.PickedTime})},hidden:(0,k.RZ)()},{title:"\u7533\u8BF7\u65F6\u95F4",render:function(t,r){return(0,n.jsx)(nn.Z,{model:r})},hidden:(0,k.RZ)()},{title:"\u64CD\u4F5C",render:function(t,r){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(H.Z,{direction:"vertical",children:[r.StorageMeta==null||pn(r.StorageMeta),(0,p.Wq)(r.AttachmentMetaId)&&yn(r),r.Status=="pending"&&!(0,p.Wq)(r.InvoiceRequestFlowId)&&(0,n.jsx)(Z.ZP,{type:"link",loading:J.loading,onClick:function(){J.run({Id:r.Id})},children:"\u5237\u65B0\u5F00\u7968\u72B6\u6001"}),!(0,k.RZ)()&&r.Status=="pending"&&(0,n.jsx)(Z.ZP,{type:"link",onClick:function(){c(r)},children:"\u5F00\u7968\u6210\u529F"}),!(0,k.RZ)()&&r.Status=="pending"&&(0,n.jsx)(Z.ZP,{type:"link",danger:!0,onClick:function(){B(r)},children:"\u5F00\u7968\u5931\u8D25"}),!(0,k.RZ)()&&r.Status=="success"&&!r.Picked&&(0,n.jsx)(Z.ZP,{type:"link",onClick:function(){C(r)},children:"\u6807\u8BB0\u4E3A\u5DF2\u9886\u53D6"})]})})}}];return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(rn.f,{pure:!0,children:(0,n.jsxs)(tn._z,{children:[(0,n.jsx)("h1",{children:"\u53D1\u7968\u7533\u8BF7\u53D7\u7406"}),(0,n.jsx)(cn,{query:g,onChange:function(t){var r=a()(a()({},t),{},{Page:1});s.run(r),Q(r)}}),(0,n.jsx)(Y.Z,{rowKey:function(t){return t.Id||"--"},loading:jn,columns:Pn,dataSource:z.Items||[],expandable:{expandedRowRender:function(t){return(0,n.jsx)(an,{items:t.Items||void 0})}},pagination:{current:z.PageIndex||void 0,total:z.TotalCount||void 0,pageSize:z.PageSize||void 0}})]})})})}}}]);
