"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3331],{23806:function(Q,F,e){var P=e(1288),l=e(85893);F.Z=function(v){var i=v.model,f=v.fallback;if(i==null||i==null)return null;var a=i==null?void 0:i.CreationTime,O=i==null?void 0:i.LastModificationTime;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{style:{},children:[(0,l.jsx)("div",{children:(0,l.jsx)(P.Z,{prefix:(0,l.jsx)("span",{children:"\u521B\u5EFA\uFF1A"}),onlyDate:!0,timeStr:a,fallback:f})}),(0,l.jsx)("div",{children:(0,l.jsx)(P.Z,{prefix:(0,l.jsx)("span",{children:"\u4FEE\u6539\uFF1A"}),onlyDate:!0,timeStr:O,fallback:f})})]})})}},1288:function(Q,F,e){var P=e(78957),l=e(83062),v=e(46629),i=e(85893);F.Z=function(f){var a,O=f.timeStr,K=f.fallback,A=f.onlyDate,m=f.prefix,d=(a=(0,v.QW)(O))===null||a===void 0?void 0:a.local();if(!d)return K||null;var h=(0,v.ND)().utc().local(),S=d.isSame(h,"year"),C=d.diff(h,"day"),X=S?d.format(v.AK):d.format(v.vc),G=function(){return(0,i.jsxs)("div",{children:[(0,i.jsxs)(P.Z,{direction:"horizontal",children:[(0,i.jsx)("div",{children:d.fromNow()}),(0,i.jsx)("div",{children:d.format(v.On)})]}),(0,i.jsx)("div",{children:d.format(v.t9)})]})};return(0,i.jsx)(l.Z,{title:G(),children:(0,i.jsxs)(P.Z,{direction:"horizontal",children:[m,(0,i.jsx)("div",{className:"inline-block cursor-pointer hover:bg-orange-500",children:A?d.format(v.vc):d.format(v.dq)})]})})}},8045:function(Q,F,e){var P=e(97857),l=e.n(P),v=e(28036),i=e(67294),f=e(85893);F.Z=function(a){var O=a.loading,K=a.inputProps,A=a.onSelect,m=a.uploadButtonProps,d=(0,i.useRef)(null);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{style:{display:"none"},children:(0,f.jsx)("input",l()(l()({ref:d,type:"file",multiple:!1},K),{},{onChange:function(S){try{var C=S.target.files;C&&A&&A(C)}finally{d.current&&(d.current.value="",d.current.files=null)}}}))}),(0,f.jsx)(v.ZP,l()(l()({size:"small",loading:O,type:"dashed"},m),{},{onClick:function(){var S;(S=d.current)===null||S===void 0||S.click()},children:"\u9009\u62E9\u56FE\u7247"}))]})}},4017:function(Q,F,e){e.r(F),e.d(F,{default:function(){return hn}});var P=e(15009),l=e.n(P),v=e(99289),i=e.n(v),f=e(97857),a=e.n(f),O=e(5574),K=e.n(O),A=e(45360),m=e(11346),d=e(9798),h=e(66309),S=e(55241),C=e(28036),X=e(40411),G=e(78957),J=e(80799),N=e(67294),nn=e(23806),Y=e(1288),en=[{label:"\u5F00\u7968\u4E2D",value:"pending"},{label:"\u5F00\u7968\u6210\u529F",value:"success"},{label:"\u5F00\u7968\u5931\u8D25",value:"failed"}],q=[{name:"mcs\u4E1A\u52A1\u5355",id:"3"}],U=e(30699),p=e(95813),rn=e(80918),tn=e(11774),n=e(85893),an=function(B){var I=B.items;if(!I||(0,p.G5)(I))return(0,n.jsx)("h1",{children:"empty items"});var T=[{title:"\u91D1\u989D",render:function(b,s){return(0,n.jsx)(h.Z,{color:"warning",children:(0,p.lb)(s.Price||0)})}},{title:"\u8D26\u5355\u53F7",render:function(b,s){return(0,n.jsx)(h.Z,{children:s.McsBizOrderId})}},{title:"\u4E1A\u52A1\u63CF\u8FF0",render:function(b,s){return(0,n.jsx)(h.Z,{children:s.Description})}}];return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{style:{},children:(0,n.jsx)(J.Z,{size:"small",bordered:!0,columns:T,dataSource:I||[],pagination:!1})})})},un=e(4393),ln=e(71230),W=e(15746),w=e(34041),dn=e(65233),sn=e(96864),on=e(72269),M=e(46629),k=e(35291),cn=function(B){var I,T,j=B.query,b=B.onChange,s=(0,N.useState)({}),z=K()(s,2),o=z[0],Z=z[1];return(0,N.useEffect)(function(){Z(j)},[j]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(un.Z,{bordered:!1,style:{marginBottom:10},children:(0,n.jsx)(m.Z,{labelCol:{span:5},children:(0,n.jsxs)(ln.Z,{gutter:[10,10],children:[(0,n.jsx)(W.Z,{span:8,children:(0,n.jsx)(m.Z.Item,{label:"\u4E1A\u52A1\u7C7B\u578B",children:(0,n.jsx)(w.Z,{allowClear:!0,value:o.BizType,options:q.map(function(g){return{label:g.name,value:g.id}}),onClear:function(){Z(a()(a()({},o),{},{BizType:void 0}))},onChange:function(c){Z(a()(a()({},o),{},{BizType:c}))}})})}),(0,n.jsx)(W.Z,{span:8,children:(0,n.jsx)(m.Z.Item,{label:"\u4E1A\u52A1\u5355\u53F7",children:(0,n.jsx)(dn.Z,{value:o.BizOrderId||"",onChange:function(c){Z(a()(a()({},o),{},{BizOrderId:c.target.value}))}})})}),(0,n.jsx)(W.Z,{span:8,children:(0,n.jsx)(m.Z.Item,{label:"\u65F6\u95F4\u8303\u56F4",children:(0,n.jsx)(sn.default.RangePicker,{allowClear:!0,value:[((I=(0,M.QW)(o.StartTime))===null||I===void 0?void 0:I.add(M.Mg,"hour"))||null,((T=(0,M.QW)(o.EndTime))===null||T===void 0?void 0:T.add(M.Mg,"hour"))||null],onChange:function(c){var D,R;Z(a()(a()({},o),{},{StartTime:c==null||(D=c.at(0))===null||D===void 0||(D=D.add(-M.Mg,"hour"))===null||D===void 0?void 0:D.format(M.dq),EndTime:c==null||(R=c.at(1))===null||R===void 0||(R=R.add(-M.Mg,"hour"))===null||R===void 0?void 0:R.format(M.dq)}))}})})}),(0,n.jsx)(W.Z,{span:8,children:(0,n.jsx)(m.Z.Item,{label:"\u5F00\u7968\u72B6\u6001",children:(0,n.jsx)(w.Z,{allowClear:!0,value:o.Status,options:en,onClear:function(){Z(a()(a()({},o),{},{Status:void 0}))},onChange:function(c){Z(a()(a()({},o),{},{Status:c}))}})})}),(0,n.jsx)(W.Z,{span:8,children:(0,n.jsx)(m.Z.Item,{label:"\u662F\u5426\u9886\u53D6",hidden:(0,k.tC)(),children:(0,n.jsx)(on.Z,{checked:o.Picked||!1,onChange:function(c){Z(a()(a()({},o),{},{Picked:c}))}})})}),(0,n.jsx)(W.Z,{span:8,children:(0,n.jsx)(m.Z.Item,{children:(0,n.jsx)(C.ZP,{type:"primary",onClick:function(){b(o)},children:"\u641C\u7D22"})})})]})})})})},L=e(68421),vn=e(85134),fn=e(8045),mn=e(76857),hn=function(){var B,I=(0,N.useState)({}),T=K()(I,2),j=T[0],b=T[1],s=(0,L.Z)(U.c2.mall3H.mcsInvoiceRequestAdminQueryPaging,{manual:!0}),z=((B=s.data)===null||B===void 0?void 0:B.data)||{},o=(0,L.Z)(U.c2.mall3H.mcsInvoiceRequestAdminMarkAsPicked,{manual:!0,onSuccess:function(t){(0,p._y)(t,function(){s.run(a()({},j))})}}),Z=function(t){confirm("\u786E\u5B9A\u6807\u8BB0\u4E3A\u5DF2\u9886\u53D6\uFF1F")&&o.run({Id:t.Id})},g=(0,L.Z)(U.c2.mall3H.mcsInvoiceRequestAdminMarkAsSuccess,{manual:!0,onSuccess:function(t){(0,p._y)(t,function(){s.run(a()({},j))})}}),c=function(t){confirm("\u786E\u5B9A\u6807\u8BB0\u4E3A\u5F00\u7968\u6210\u529F\uFF1F")&&g.run({Id:t.Id})},D=(0,L.Z)(U.c2.mall3H.mcsInvoiceRequestAdminMarkAsFailed,{manual:!0,onSuccess:function(t){(0,p._y)(t,function(){s.run(a()({},j))})}}),R=function(t){confirm("\u786E\u5B9A\u6807\u8BB0\u4E3A\u5F00\u7968\u5931\u8D25\uFF1F")&&D.run({Id:t.Id})},V=(0,L.Z)(U.c2.mall3H.mcsInvoiceRequestAdminRefreshCallback,{manual:!0,onSuccess:function(t){(0,p._y)(t,function(){A.ZP.success("\u5237\u65B0\u6210\u529F"),s.run(a()({},j))})}}),jn=s.loading||o.loading||g.loading||D.loading||V.loading;(0,N.useEffect)(function(){s.run(j)},[]);var gn=function(t){var r=function(y,H){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(m.Z.Item,{label:y,children:(0,n.jsx)(d.Z.Text,{copyable:!0,children:H||"--"})})})};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{style:{width:500},children:(0,n.jsxs)(m.Z,{labelCol:{span:4},children:[r("\u7A0E\u53F7",t.Code),r("\u62AC\u5934",t.Head),r("\u94F6\u884C\u7F16\u7801",t.BankCode),r("\u94F6\u884C\u540D\u79F0",t.BankName),r("\u53D1\u7968\u7C7B\u578B",t.InvoiceType),r("\u8054\u7CFB\u7535\u8BDD",t.PhoneNumber)]})})})},xn=function(t){var r=t.Status;return r=="pending"?(0,n.jsx)(h.Z,{color:"processing",children:"\u5F00\u7968\u4E2D"}):r=="success"?(0,n.jsx)(h.Z,{color:"success",children:"\u5F00\u7968\u6210\u529F"}):r=="failed"?(0,n.jsx)(h.Z,{color:"error",children:"\u5F00\u7968\u5931\u8D25"}):(0,n.jsx)("span",{children:"error status"})},pn=function(t){if(!t.ResourceKey)return null;var r=(0,p.C6)([vn.v.api_gateway,"api/mall-3h/invoice-request/download",t.ResourceKey]);return r?(0,n.jsx)("div",{children:(0,n.jsx)("a",{className:"text-blue-900",href:r,target:"_blank",children:"\u4E0B\u8F7DPDF"})}):null},Cn=function(){var u=i()(l()().mark(function t(r,x){var y,H,$,_;return l()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return H=new FormData,H.append("file",x),E.next=4,mn.M.post("/api/mall-3h/admin/invoice-request/upload-attachment",H);case 4:if($=E.sent,$!=null&&(y=$.data)!==null&&y!==void 0&&y.Data){E.next=8;break}return A.ZP.error("upload error"),E.abrupt("return");case 8:return E.next=10,U.c2.mall3H.mcsInvoiceRequestAdminSetAttachment({Id:r,StorageMeta:$.data.Data});case 10:_=E.sent,(0,p._y)(_,function(){s.run(a()({},j))});case 12:case"end":return E.stop()}},t)}));return function(r,x){return u.apply(this,arguments)}}(),Zn=(0,L.Z)(Cn,{manual:!0}),yn=function(t){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(fn.Z,{loading:!1,onSelect:function(x){var y=x.item(0);if(!y){A.ZP.info("\u672A\u9009\u62E9\u6587\u4EF6");return}confirm("\u786E\u5B9A\u4E0A\u4F20\u4E3A\u9644\u4EF6\uFF1F")&&Zn.run(t.Id,y)}})})},Pn=[{title:"\u91D1\u989D",render:function(t,r){return(0,n.jsx)(h.Z,{color:"warning",children:(0,p.lb)(r.TotalAmount||0)})},width:100,fixed:"left"},{title:"\u4E1A\u52A1\u7C7B\u578B",render:function(t,r){var x;return(0,n.jsx)(h.Z,{children:((x=q.find(function(y){return y.id==r.BizType}))===null||x===void 0?void 0:x.name)||"--"})}},{title:"\u5F00\u7968\u4FE1\u606F",render:function(t,r){return(0,n.jsx)(S.Z,{title:"\u5F00\u7968\u4FE1\u606F",content:gn(r.UserInvoice||{}),trigger:["hover"],children:(0,n.jsx)(C.ZP,{type:"link",children:"\u67E5\u770B\u5F00\u7968\u4FE1\u606F"})})}},{title:"\u5F00\u7968\u72B6\u6001",render:function(t,r){return xn(r)}},{title:"\u5F00\u7968\u65F6\u95F4",render:function(t,r){return(0,n.jsx)(Y.Z,{timeStr:r.InvoicingTime})}},{title:"\u662F\u5426\u9886\u53D6",render:function(t,r){return(0,n.jsx)(X.Z,{status:r.Picked?"success":"default",text:r.Picked?"\u5DF2\u9886\u53D6":"\u672A\u9886\u53D6"})},hidden:(0,k.tC)()},{title:"\u9886\u53D6\u65F6\u95F4",render:function(t,r){return(0,n.jsx)(Y.Z,{timeStr:r.PickedTime})},hidden:(0,k.tC)()},{title:"\u7533\u8BF7\u65F6\u95F4",render:function(t,r){return(0,n.jsx)(nn.Z,{model:r})},hidden:(0,k.tC)()},{title:"\u64CD\u4F5C",render:function(t,r){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(G.Z,{direction:"vertical",children:[r.StorageMeta==null||pn(r.StorageMeta),(0,p.Wq)(r.AttachmentMetaId)&&yn(r),r.Status=="pending"&&!(0,p.Wq)(r.InvoiceRequestFlowId)&&(0,n.jsx)(C.ZP,{type:"link",loading:V.loading,onClick:function(){V.run({Id:r.Id})},children:"\u5237\u65B0\u5F00\u7968\u72B6\u6001"}),!(0,k.tC)()&&r.Status=="pending"&&(0,n.jsx)(C.ZP,{type:"link",onClick:function(){c(r)},children:"\u5F00\u7968\u6210\u529F"}),!(0,k.tC)()&&r.Status=="pending"&&(0,n.jsx)(C.ZP,{type:"link",danger:!0,onClick:function(){R(r)},children:"\u5F00\u7968\u5931\u8D25"}),!(0,k.tC)()&&r.Status=="success"&&!r.Picked&&(0,n.jsx)(C.ZP,{type:"link",onClick:function(){Z(r)},children:"\u6807\u8BB0\u4E3A\u5DF2\u9886\u53D6"})]})})}}];return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(rn.f,{pure:!0,children:(0,n.jsxs)(tn._z,{children:[(0,n.jsx)("h1",{children:"\u53D1\u7968\u7533\u8BF7\u53D7\u7406"}),(0,n.jsx)(cn,{query:j,onChange:function(t){var r=a()(a()({},t),{},{Page:1});s.run(r),b(r)}}),(0,n.jsx)(J.Z,{rowKey:function(t){return t.Id||"--"},loading:jn,columns:Pn,dataSource:z.Items||[],expandable:{expandedRowRender:function(t){return(0,n.jsx)(an,{items:t.Items||void 0})}},pagination:{current:z.PageIndex||void 0,total:z.TotalCount||void 0,pageSize:z.PageSize||void 0}})]})})})}}}]);
