"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9732],{89780:function(te,C,n){n.r(C),n.d(C,{default:function(){return Y}});var w=n(97857),i=n.n(w),z=n(5574),v=n.n(z),E=n(45360),g=n(14726),I=n(59606),H=n(40411),L=n(83062),Q=n(85576),o=n(67294),R=n(80427),D=n(23806),p=n(30699),G=n(66419),F=n(57731),$=n(99646),J=n(35291),e=n(85893),N=function(f){var c=f.review,h=[{title:"\u5546\u54C1\u4FE1\u606F",render:function(s,a){var l;return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("div",{children:(0,J.CQ)(((l=a.OrderItem)===null||l===void 0?void 0:l.Sku)||{})})})}},{title:"\u8BC4\u8BBA",render:function(s,a){return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("div",{children:a.ReviewText||"--"})})}},{title:"\u56FE\u7247",render:function(s,a){return a.StorageMeta==null||a.StorageMeta.length<=0?null:(0,e.jsx)(R.Z,{data:a.StorageMeta,count:10})}},{title:"\u5F97\u5206",render:function(s,a){return(0,e.jsx)(I.Z,{value:a.Rating||0,allowHalf:!0,disabled:!0})}}];return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(F.Z,{search:!1,headerTitle:"\u8BE6\u60C5",options:!1,columns:h,dataSource:c.Items||[],pagination:!1})})},U=n(4393),m=n(11346),V=n(71230),P=n(15746),W=n(65233),X=function(f){var c=f.query,h=f.onSearch,u=(0,o.useState)({}),s=v()(u,2),a=s[0],l=s[1];return(0,o.useEffect)(function(){l(i()(i()({},a),c))},[c]),(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(U.Z,{bordered:!1,style:{marginBottom:10},children:(0,e.jsx)(m.Z,{onFinish:function(){h(i()(i()({},a),{},{Page:1}))},children:(0,e.jsxs)(V.Z,{gutter:10,children:[(0,e.jsx)(P.Z,{span:6,children:(0,e.jsx)(m.Z.Item,{label:"\u5173\u952E\u8BCD",children:(0,e.jsx)(W.Z,{value:a.Keywords||"",onChange:function(Z){l(i()(i()({},a),{},{Keywords:Z.target.value}))}})})}),(0,e.jsx)(P.Z,{span:6,children:(0,e.jsx)(m.Z.Item,{children:(0,e.jsx)(g.ZP,{htmlType:"submit",type:"primary",children:"\u641C\u7D22"})})})]})})})})},Y=function(){var f=(0,o.useState)(!0),c=v()(f,2),h=c[0],u=c[1],s=(0,o.useState)({}),a=v()(s,2),l=a[0],S=a[1],Z=(0,o.useState)({}),T=v()(Z,2),j=T[0],M=T[1],b=(0,o.useState)(void 0),B=v()(b,2),k=B[0],A=B[1],q=(0,o.useState)(void 0),O=v()(q,2),y=O[0],K=O[1],_=function(r){confirm("\u786E\u5B9A\u5BA1\u6279?")&&(A(r.Id),p.x1.mallManager.orderReviewApproveReview({Id:r.Id}).then(function(t){(0,G._y)(t,function(){E.ZP.success("\u5BA1\u6279\u6210\u529F"),x(j)})}).finally(function(){return A(void 0)}))},x=function(r){u(!0),p.x1.mallManager.orderReviewQueryOrderReviewPaging(r).then(function(t){S(t.data||{})}).finally(function(){u(!1)})},ee=[{title:"",render:function(r,t){return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("div",{children:(0,e.jsx)(g.ZP,{type:"link",onClick:function(){K(t.OrderId||"")},children:"\u67E5\u770B\u76F8\u5173\u8BA2\u5355"})})})}},{title:"\u8BC4\u8BBA",render:function(r,t){return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("div",{children:t.ReviewText||"--"})})}},{title:"\u56FE\u7247",render:function(r,t){return t.StorageMeta==null||t.StorageMeta.length<=0?null:(0,e.jsx)(R.Z,{data:t.StorageMeta,count:10})}},{title:"\u8BC4\u5206",render:function(r,t){return(0,e.jsx)(I.Z,{value:t.Rating||0,allowHalf:!0,disabled:!0})}},{title:"\u65F6\u95F4",render:function(r,t){return(0,e.jsx)(D.Z,{model:t})}},{title:"\u64CD\u4F5C",width:200,render:function(r,t){return t.Approved?(0,e.jsx)(H.Z,{text:"\u5DF2\u5BA1\u6279",color:"green"}):(0,e.jsx)(g.ZP.Group,{children:(0,e.jsx)(L.Z,{title:"\u6279\u51C6\u540E\u53EF\u4EE5\u516C\u5F00\u5C55\u793A",children:(0,e.jsx)(g.ZP,{loading:k==t.Id,type:"link",onClick:function(){_(t)},children:"\u6279\u51C6\u6B64\u8BC4\u8BBA"})})})}}];return(0,o.useEffect)(function(){x(i()(i()({},j),{},{Page:1}))},[]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Q.Z,{title:"\u8BA2\u5355",open:y!=null,footer:!1,width:"95%",onCancel:function(){return K(void 0)},children:y&&(0,e.jsx)($.Z,{detailId:y})}),(0,e.jsx)(X,{query:j,onSearch:function(r){M(r),x(r)}}),(0,e.jsx)(F.Z,{search:!1,headerTitle:"\u8BA2\u5355\u8BC4\u8BBA",options:!1,rowKey:function(r){return r.Id||""},loading:h,columns:ee,dataSource:l.Items||[],expandable:{expandedRowRender:function(r){return(0,e.jsx)(N,{review:r||{}})}},pagination:{total:l.TotalCount,pageSize:l.PageSize,onChange:function(r){var t=i()(i()({},j),{},{Page:r});M(t),x(t)}}})]})}}}]);
