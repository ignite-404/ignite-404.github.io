"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2873],{74590:function(w,O,e){var C=e(15009),u=e.n(C),v=e(99289),s=e.n(v),g=e(5574),f=e.n(g),U=e(83062),x=e(14726),M=e(67294),i=e(85893);O.Z=function(o){var T=o.action,d=o.confirmText,A=o.hide,R=(0,M.useState)(!1),D=f()(R,2),r=D[0],n=D[1],t=d||"\u786E\u5B9A\u5220\u9664\uFF1F",m=function(){var _=s()(u()().mark(function a(){return u()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(confirm(t)){h.next=2;break}return h.abrupt("return");case 2:return n(!0),h.prev=3,h.next=6,T();case 6:return h.prev=6,n(!1),h.finish(6);case 9:case"end":return h.stop()}},a,null,[[3,,6,9]])}));return function(){return _.apply(this,arguments)}}();return A?null:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(U.Z,{title:t,children:(0,i.jsx)(x.ZP,{loading:r,danger:!0,type:"link",onClick:function(){m()},children:"\u5220\u9664"})})})}},23806:function(w,O,e){var C=e(1288),u=e(85893);O.Z=function(v){var s=v.model,g=v.fallback;if(s==null||s==null)return null;var f=s==null?void 0:s.CreationTime,U=s==null?void 0:s.LastModificationTime;return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{style:{},children:[(0,u.jsx)("div",{children:(0,u.jsx)(C.Z,{prefix:(0,u.jsx)("span",{children:"\u521B\u5EFA\uFF1A"}),onlyDate:!0,timeStr:f,fallback:g})}),(0,u.jsx)("div",{children:(0,u.jsx)(C.Z,{prefix:(0,u.jsx)("span",{children:"\u4FEE\u6539\uFF1A"}),onlyDate:!0,timeStr:U,fallback:g})})]})})}},1288:function(w,O,e){var C=e(78957),u=e(83062),v=e(46629),s=e(85893);O.Z=function(g){var f,U=g.timeStr,x=g.fallback,M=g.onlyDate,i=g.prefix,o=(f=(0,v.mg)(U))===null||f===void 0?void 0:f.add(v.Mg,"hour");if(!o)return x||null;var T=(0,v.ND)().utc().add(v.Mg,"hour"),d=o.isSame(T,"year"),A=o.diff(T,"day"),R=d?o.format(v.AK):o.format(v.vc),D=function(){return(0,s.jsxs)("div",{children:[(0,s.jsxs)(C.Z,{direction:"horizontal",children:[(0,s.jsx)("div",{children:o.fromNow()}),(0,s.jsx)("div",{children:o.format(v.On)})]}),(0,s.jsx)("div",{children:o.format(v.t9)})]})};return(0,s.jsx)(u.Z,{title:D(),children:(0,s.jsxs)(C.Z,{direction:"horizontal",children:[i,(0,s.jsx)("div",{className:"inline-block cursor-pointer hover:bg-orange-500",children:M?o.format(v.vc):o.format(v.dq)})]})})}},94442:function(w,O,e){var C=e(97857),u=e.n(C),v=e(15009),s=e.n(v),g=e(99289),f=e.n(g),U=e(82052),x=e(68421),M=e(9383),i=e(67294),o=e(85893);O.Z=function(T){var d=T.width,A=T.rate,R=(0,i.useRef)(null),D=(0,U.Z)(R),r=D==null?void 0:D.width,n=function(){var m=f()(s()().mark(function _(){return s()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(!(A!=null&&r!=null)){c.next=2;break}return c.abrupt("return",r*A);case 2:return c.abrupt("return",void 0);case 3:case"end":return c.stop()}},_)}));return function(){return m.apply(this,arguments)}}(),t=(0,x.Z)(n,{manual:!0,debounceWait:30});return(0,i.useEffect)(function(){t.run()},[r]),(0,o.jsx)("div",{ref:R,style:{display:"block",padding:0,margin:0,width:d!=null?d:"100%"},children:(0,o.jsx)(M.J,u()({width:r||void 0,height:t.data||void 0,radius:"none"},T))})}},80427:function(w,O,e){var C=e(5574),u=e.n(C),v=e(98163),s=e(7134),g=e(55241),f=e(67294),U=e(35291),x=e(95813),M=e(94442),i=e(85893);O.Z=function(o){var T=o.data,d=o.count,A=(0,f.useState)(void 0),R=u()(A,2),D=R[0],r=R[1],n=T||[],t=d||3,m=n.map(function(a){return(0,U.u2)(a)}),_=function(c){return(0,i.jsx)("div",{style:{maxWidth:500},children:(0,i.jsx)(M.Z,{src:c.small||"",alt:""})})};return(0,x.G5)(m)?null:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{style:{display:"none"},children:(0,i.jsx)(v.Z.PreviewGroup,{preview:{current:Math.max(D||0,0),visible:D!=null,onVisibleChange:function(c,h,E){r(c?E:void 0)},onChange:function(c){D!=null&&r(c)}},children:m.map(function(a,c){return(0,i.jsx)(v.Z,{src:a.large||"",alt:""},c)})})}),(0,i.jsx)("div",{style:{},children:(0,i.jsx)(s.C.Group,{maxCount:t,shape:"square",children:m.map(function(a,c){return(0,i.jsx)(g.Z,{title:"\u9884\u89C8",content:_(a),placement:"left",children:(0,i.jsx)(s.C,{style:{backgroundColor:"gray"},src:a.small||"",size:"large",onClick:function(){r(c)}})},c)})})})]})}},8045:function(w,O,e){var C=e(97857),u=e.n(C),v=e(14726),s=e(67294),g=e(85893);O.Z=function(f){var U=f.loading,x=f.inputProps,M=f.onSelect,i=f.uploadButtonProps,o=(0,s.useRef)(null);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{style:{display:"none"},children:(0,g.jsx)("input",u()(u()({ref:o,type:"file",multiple:!1},x),{},{onChange:function(d){try{var A=d.target.files;A&&M&&M(A)}finally{o.current&&(o.current.value="",o.current.files=null)}}}))}),(0,g.jsx)(v.ZP,u()(u()({size:"small",loading:U,type:"dashed"},i),{},{onClick:function(){var d;(d=o.current)===null||d===void 0||d.click()},children:"\u9009\u62E9\u56FE\u7247"}))]})}},6786:function(w,O,e){var C=e(15009),u=e.n(C),v=e(99289),s=e.n(v),g=e(97857),f=e.n(g),U=e(98163),x=e(45360),M=e(14726),i=e(78957),o=e(85134),T=e(55932),d=e(55793),A=e(95813),R=e(8045),D=e(68421),r=e(85893);O.Z=function(n){var t=n.data,m=n.ok,_=n.remove,a=n.loadingSave,c=n.width,h=n.defaultImage,E=n.imageProps,ee=n.uploadButtonProps,Q=n.removeButtonProps,X=(0,T.Kk)(t,{width:c||100}),l=function(){var K=X||h;return(0,A.Wq)(K)?null:(0,r.jsx)(U.Z,f()({src:K||"",alt:"",width:c||50},E))},ne=function(){var S=s()(u()().mark(function K(y){var z;return u()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:if(j.prev=0,(0,d.Vl)(y.name)){j.next=4;break}return x.ZP.error("\u53EA\u652F\u6301 ".concat((0,d.$z)().join("\u3001")," \u683C\u5F0F\u7684\u56FE\u7247")),j.abrupt("return");case 4:return j.next=6,(0,d.ur)(y,o.v.upload.max_size);case 6:if(y=j.sent,!(y.size>o.v.upload.max_size)){j.next=10;break}return x.ZP.error("\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC71MB"),j.abrupt("return");case 10:return j.next=12,(0,d.fn)(y);case 12:z=j.sent,z&&m&&m(z),j.next=20;break;case 16:j.prev=16,j.t0=j.catch(0),console.log(j.t0),x.ZP.error("\u4E0A\u4F20\u9047\u5230\u9519\u8BEF");case 20:case"end":return j.stop()}},K,null,[[0,16]])}));return function(y){return S.apply(this,arguments)}}(),Y=(0,D.Z)(ne,{manual:!0}),B=function(){return(0,A.Wq)(X)||!_?null:(0,r.jsx)(M.ZP,f()(f()({size:"small",type:"dashed",danger:!0,onClick:function(){confirm("\u5220\u9664\uFF1F")&&_&&_()}},Q),{},{children:"\u79FB\u9664\u56FE\u7247"}))};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(i.Z,{direction:"horizontal",children:[l(),(0,r.jsxs)(i.Z,{direction:"vertical",children:[(0,r.jsx)(R.Z,{loading:a||Y.loading,inputProps:{accept:"image/*",multiple:!1},onSelect:function(K){var y=K.item(0);y&&Y.run(y)},uploadButtonProps:ee}),B()]})]})})}},17991:function(w,O,e){e.r(O),e.d(O,{default:function(){return Y}});var C=e(15009),u=e.n(C),v=e(99289),s=e.n(v),g=e(5574),f=e.n(g),U=e(68421),x=e(78957),M=e(14726),i=e(45360),o=e(4393),T=e(80799),d=e(67294),A=e(74590),R=e(80427),D=e(23806),r=e(35291),n=e(30699),t=e(95813),m=e(97857),_=e.n(m),a=e(85576),c=e(57381),h=e(11346),E=e(39019),ee=e(92783),Q=e(65233),X=e(6786),l=e(85893),ne=function(B){var S=B.show,K=B.hide,y=B.data,z=B.ok,k=(0,d.useState)(!1),j=f()(k,2),V=j[0],F=j[1],G=(0,d.useState)([]),q=f()(G,2),ae=q[0],L=q[1],W=(0,d.useState)([]),I=f()(W,2),b=I[0],H=I[1],$=(0,d.useState)({}),re=f()($,2),P=re[0],N=re[1],te=function(){F(!0),n.x1.sys.areaLoadTree({}).then(function(p){(0,t._y)(p,function(){var J=p.data.Data||[];L(J);var ue=J.flatMap(function(se){return(0,r.PC)(se)}).map(function(se){return se.key});H(ue)})}).finally(function(){F(!1)})},_e=function(p){var J;p.Name=(J=p.Name)===null||J===void 0?void 0:J.trim(),!(0,t.Wq)(p.Name)&&(F(!0),n.x1.sys.areaSave(_()({},p)).then(function(ue){(0,t._y)(ue,function(){i.ZP.success("\u4FDD\u5B58\u6210\u529F"),z()})}).finally(function(){F(!1)}))};return(0,d.useEffect)(function(){N(_()({},y))},[y]),(0,d.useEffect)(function(){S?te():N({})},[S]),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(a.Z,{title:"\u533A\u57DF",confirmLoading:V,open:S,onCancel:function(){return K()},footer:(0,l.jsx)(x.Z,{children:(0,l.jsx)(M.ZP,{type:"primary",loading:V,onClick:function(){_e(P)},children:"\u4FDD\u5B58"})}),children:(0,l.jsx)(c.Z,{spinning:V,children:(0,l.jsxs)(h.Z,{labelCol:{flex:"110px"},labelAlign:"right",wrapperCol:{flex:1},children:[(0,l.jsx)(h.Z.Item,{label:"\u56FE\u7247",children:(0,l.jsx)(X.Z,{loadingSave:V,data:P.StorageMeta||{},ok:function(p){N(_()(_()({},P),{},{MetaId:p.Id,StorageMeta:p}))},remove:function(){confirm("\u786E\u5B9A\u5220\u9664\u56FE\u7247\u5417\uFF1F")&&N(_()(_()({},P),{},{MetaId:void 0,StorageMeta:void 0}))}})}),(0,l.jsx)(h.Z.Item,{label:"\u7236\u7EA7",children:(0,l.jsx)(E.Z,{placeholder:"\u65E0\u7236\u7EA7\u5206\u7C7B\u5219\u89C6\u4E3A\u9876\u7EA7\u5206\u7C7B",treeData:ae.map(function(Z){return(0,r.iw)(Z)}),treeExpandedKeys:b,onTreeExpand:function(p){return H(p)},allowClear:!0,value:P.ParentId||void 0,onChange:function(p){if(!(0,t.Wq)(P.Id)&&p==P.Id){i.ZP.error("\u65E0\u6CD5\u6307\u5B9A\u8BE5\u8282\u70B9");return}N(_()(_()({},P),{},{ParentId:p}))}})}),(0,l.jsx)(h.Z.Item,{label:"\u7C7B\u578B",children:(0,l.jsx)(ee.Z,{options:[{label:"\u5927\u6D32",value:"continent"},{label:"\u56FD\u5BB6",value:"country"},{label:"\u5730\u533A",value:"area"},{label:"\u5176\u4ED6",value:"other"}],value:P.AreaType,onChange:function(p){N(_()(_()({},P),{},{AreaType:p}))}})}),(0,l.jsxs)(h.Z.Item,{label:"\u540D\u79F0",required:!0,children:[(0,l.jsx)(Q.Z,{count:{show:!0,max:20},maxLength:20,required:!0,value:P.Name||"",onChange:function(p){N(_()(_()({},P),{},{Name:p.target.value}))}}),(0,t.Wq)(P.Name)&&(0,l.jsx)("p",{style:{color:"red"},children:"\u5FC5\u586B"})]}),(0,l.jsx)(h.Z.Item,{label:"\u63CF\u8FF0",children:(0,l.jsx)(Q.Z.TextArea,{rows:2,count:{show:!0,max:20},maxLength:20,required:!0,value:P.Description||"",onChange:function(p){N(_()(_()({},P),{},{Description:p.target.value}))}})})]})})})})},Y=function(){var B,S=(0,d.useState)([]),K=f()(S,2),y=K[0],z=K[1],k=(0,d.useState)(void 0),j=f()(k,2),V=j[0],F=j[1],G=(0,U.Z)(n.x1.sys.areaLoadTree,{manual:!0,onSuccess:function(W,I){var b=W.data.Data||[],H=b.flatMap(function($){return(0,r.PC)($)}).map(function($){return $.key||""});z(H)}}),q=((B=G.data)===null||B===void 0||(B=B.data)===null||B===void 0?void 0:B.Data)||[],ae=[{title:"\u540D\u79F0",render:function(W,I){return I.title}},{title:"\u63CF\u8FF0",render:function(W,I){var b;return((b=I.raw_data)===null||b===void 0?void 0:b.Description)||"--"}},{title:"\u7C7B\u578B",render:function(W,I){var b;return((b=I.raw_data)===null||b===void 0?void 0:b.AreaType)||"--"}},{title:"\u56FE\u7247",render:function(W,I){var b=I.raw_data||{};return b.StorageMeta==null?null:(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(R.Z,{data:[b.StorageMeta]})})}},{title:"\u65F6\u95F4",render:function(W,I){return(0,l.jsx)(D.Z,{model:I.raw_data})}},{title:"\u64CD\u4F5C",width:200,render:function(W,I){var b=I.raw_data||{};return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(x.Z,{direction:"horizontal",children:[(0,l.jsx)(M.ZP,{type:"link",onClick:function(){F(b)},children:"\u7F16\u8F91"}),(0,t.G5)(I.children)&&(0,l.jsx)(A.Z,{action:s()(u()().mark(function H(){var $;return u()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,n.x1.sys.areaDeleteById({Id:b.Id});case 2:$=P.sent,(0,t._y)($,function(){i.ZP.success("\u5220\u9664\u6210\u529F"),G.run({})});case 4:case"end":return P.stop()}},H)}))})]})})}}];return(0,d.useEffect)(function(){G.run({})},[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(ne,{show:V!=null,hide:function(){return F(void 0)},data:V||{},ok:function(){F(void 0),G.run({})}}),(0,l.jsx)(o.Z,{title:"\u5730\u533A",loading:G.loading,extra:(0,l.jsx)(M.ZP,{type:"primary",onClick:function(){F({})},children:"\u65B0\u589E"}),children:(0,l.jsx)(T.Z,{rowKey:function(W){return W.key||""},expandable:{expandedRowKeys:y,defaultExpandAllRows:!0,showExpandColumn:!0,onExpandedRowsChange:function(W){z(W)}},loading:G.loading,columns:ae,dataSource:q,pagination:!1})})]})}},55793:function(w,O,e){e.d(O,{$z:function(){return M},Ac:function(){return R},Vl:function(){return i},fn:function(){return d},ur:function(){return T}});var C=e(15009),u=e.n(C),v=e(99289),s=e.n(v),g=e(76857),f=e(95813),U=e(98005),x=e.n(U),M=function(){return["jpg","jpeg","png","gif"]},i=function(r){var n,t=((n=(0,f.mD)(r))===null||n===void 0?void 0:n.toLowerCase())||"";return M().indexOf(t)>=0},o=function(r,n,t,m){return new Promise(function(_,a){var c=new(x())(r,{maxHeight:n,maxWidth:t,quality:m,success:function(E){_(E)},error:function(E){a(E)}});console.log(c)})},T=function(){var D=s()(u()().mark(function r(n,t){var m,_,a,c;return u()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:if(!(n.size<=t)){E.next=2;break}return E.abrupt("return",n);case 2:return E.next=4,o(n,void 0,void 0,.9);case 4:if(n=E.sent,!(n.size<=t)){E.next=7;break}return E.abrupt("return",n);case 7:m=5,_=300,a=1e3,c=0;case 11:if(!(++c<=m)){E.next=22;break}return E.next=14,o(n,a,a,1);case 14:if(n=E.sent,!(n.size<=t)){E.next=17;break}return E.abrupt("return",n);case 17:if(a-=_,!(a<=0)){E.next=20;break}return E.abrupt("break",22);case 20:E.next=11;break;case 22:return E.abrupt("return",n);case 23:case"end":return E.stop()}},r)}));return function(n,t){return D.apply(this,arguments)}}(),d=function(){var D=s()(u()().mark(function r(n){var t,m;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,A([n]);case 2:if(t=a.sent,m=t.at(0),m){a.next=6;break}throw new Error("response error");case 6:return a.abrupt("return",m);case 7:case"end":return a.stop()}},r)}));return function(n){return D.apply(this,arguments)}}(),A=function(){var D=s()(u()().mark(function r(n){var t,m;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=new FormData,n.forEach(function(c,h){t.append("formFileCollection",c,c.name)}),a.next=4,g.M.post("/api/platform/storage/upload",t);case 4:if(m=a.sent,!m.data.Error){a.next=7;break}throw new Error(m.data.Error.Message||"upload error");case 7:return a.abrupt("return",m.data.Data||[]);case 8:case"end":return a.stop()}},r)}));return function(n){return D.apply(this,arguments)}}(),R=function(r){return new Promise(function(n,t){var m=new FileReader;m.onload=function(){n(m.result)},m.onerror=function(_){t(_)},m.readAsDataURL(r)})}}}]);
