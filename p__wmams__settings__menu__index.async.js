"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[726],{3083:function(ee,P,e){var s=e(50545),j=e(70278),A=e(78298),M=e(97975),B=e(78957),S=e(83062),f=e(85893);P.Z=function(p){var y=p.title,Z=p.subtitle,_=p.extra,b=p.hide_add,c=p.hide_save,a=p.hide_refresh,n=p.hide_delete,r=function(){return _?null:(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(B.Z,{direction:"horizontal",children:[c||(0,f.jsx)(S.Z,{title:"save",children:(0,f.jsx)(s.Z,{stroke:1})}),n||(0,f.jsx)(S.Z,{title:"delete",children:(0,f.jsx)(j.Z,{stroke:1})}),a||(0,f.jsx)(S.Z,{title:"refresh",children:(0,f.jsx)(A.Z,{stroke:1})}),b||(0,f.jsx)(S.Z,{title:"add",children:(0,f.jsx)(M.Z,{stroke:1})})]})})};return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("div",{className:"mb-3 rounded-lg border-1 border-slate-800 bg-blue-900 p-2 text-white",children:(0,f.jsxs)("div",{className:"flex-row-between",children:[(0,f.jsxs)("div",{className:"flex w-full flex-row items-end gap-2",children:[(0,f.jsx)("h1",{className:"text-large font-bold",children:y}),(0,f.jsx)("div",{className:"text-large text-yellow-500",children:Z})]}),(0,f.jsxs)("div",{className:"",children:[_||null,r()]})]})})})}},22632:function(ee,P,e){e.r(P);var s=e(3083),j=e(75549),A=e(97975),M=e(78957),B=e(71230),S=e(15746),f=e(4393),p=e(28036),y=e(65233),Z=e(17960),_=e(26412),b=e(59847),c=e(34041),a=e(72269),n=e(85893);P.default=function(){var r=[{key:"1",value:"1",title:"Inventory",children:[{key:"1-1",value:"1-1",title:"Meter loss"},{key:"1-2",value:"1-2",title:"Meter repair"}]},{key:"2",value:"2",title:"Meter",children:[{key:"2-1",value:"2-1",title:"Meter lifecycle"},{key:"2-2",value:"2-2",title:"Meter inspection"}]},{key:"3",value:"3",title:"Field Activity",children:[{key:"3-1",value:"3-1",title:"Field Activity Maintenance"},{key:"3-2",value:"3-2",title:"Bulk FA Cancellation"}]}];return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(M.Z,{direction:"vertical",style:{width:"100%"},children:[(0,n.jsx)(s.Z,{title:"Menu Setting",extra:(0,n.jsx)("span",{})}),(0,n.jsxs)(B.Z,{gutter:[10,10],children:[(0,n.jsx)(S.Z,{span:12,children:(0,n.jsxs)(f.Z,{title:"Menu Tree",extra:(0,n.jsxs)(M.Z,{direction:"horizontal",children:[(0,n.jsx)(p.ZP,{size:"small",type:"dashed",icon:(0,n.jsx)(j.Z,{stroke:1})}),(0,n.jsx)(p.ZP,{size:"small",type:"dashed",icon:(0,n.jsx)(A.Z,{stroke:1})})]}),children:[(0,n.jsx)(y.Z.Search,{style:{marginBottom:10},placeholder:"Filter Tree Nodes"}),(0,n.jsx)(Z.Z,{filterAntTreeNode:void 0,showLine:!0,defaultExpandAll:!0,treeData:r})]})}),(0,n.jsx)(S.Z,{span:12,children:(0,n.jsx)(f.Z,{title:"Settings",children:(0,n.jsx)(_.Z,{bordered:!0,column:1,items:[{label:"\u7236\u7EA7\u83DC\u5355",children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(b.Z,{placeholder:"leave parent empty to add root menu",allowClear:!0,treeDefaultExpandAll:!0,treeLine:!0,treeData:r,defaultValue:"1",style:{minWidth:300}})})},{label:"Name",children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(y.Z,{})})},{label:"Description",children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(y.Z.TextArea,{})})},{label:"Related Function",children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(c.Z,{mode:"multiple",options:[{label:"Meter",value:"1"},{label:"Inventory",value:"2"}],defaultValue:["1","2"],style:{minWidth:300}})})},{label:"Link",children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(y.Z,{placeholder:"http://bz.dfyzwater.com:8080/webroot/decision/view/report?viewlet=\u8868\u5361\u57FA\u672C\u4FE1\u606F.cpt"})})},{label:"Parameter",children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(y.Z.TextArea,{})})},{label:"\u662F\u5426\u555F\u7528",children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.Z,{defaultChecked:!0})})},{label:"",children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(M.Z,{direction:"horizontal",children:[(0,n.jsx)(p.ZP,{type:"link",danger:!0,size:"large",children:"Delete"}),(0,n.jsx)(p.ZP,{type:"primary",size:"large",children:"Save"})]})})}]})})})]})]})})}},15746:function(ee,P,e){var s=e(21584);P.Z=s.Z},99134:function(ee,P,e){var s=e(67294);const j=(0,s.createContext)({});P.Z=j},21584:function(ee,P,e){var s=e(67294),j=e(93967),A=e.n(j),M=e(53124),B=e(99134),S=e(6999),f=function(_,b){var c={};for(var a in _)Object.prototype.hasOwnProperty.call(_,a)&&b.indexOf(a)<0&&(c[a]=_[a]);if(_!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(_);n<a.length;n++)b.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(_,a[n])&&(c[a[n]]=_[a[n]]);return c};function p(_){return typeof _=="number"?`${_} ${_} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(_)?`0 0 ${_}`:_}const y=["xs","sm","md","lg","xl","xxl"],Z=s.forwardRef((_,b)=>{const{getPrefixCls:c,direction:a}=s.useContext(M.E_),{gutter:n,wrap:r}=s.useContext(B.Z),{prefixCls:O,span:g,order:E,offset:U,push:H,pull:G,className:oe,children:ne,flex:le,style:N}=_,ae=f(_,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),h=c("col",O),[X,T,D]=(0,S.cG)(h),R={};let F={};y.forEach(o=>{let i={};const m=_[o];typeof m=="number"?i.span=m:typeof m=="object"&&(i=m||{}),delete ae[o],F=Object.assign(Object.assign({},F),{[`${h}-${o}-${i.span}`]:i.span!==void 0,[`${h}-${o}-order-${i.order}`]:i.order||i.order===0,[`${h}-${o}-offset-${i.offset}`]:i.offset||i.offset===0,[`${h}-${o}-push-${i.push}`]:i.push||i.push===0,[`${h}-${o}-pull-${i.pull}`]:i.pull||i.pull===0,[`${h}-rtl`]:a==="rtl"}),i.flex&&(F[`${h}-${o}-flex`]=!0,R[`--${h}-${o}-flex`]=p(i.flex))});const t=A()(h,{[`${h}-${g}`]:g!==void 0,[`${h}-order-${E}`]:E,[`${h}-offset-${U}`]:U,[`${h}-push-${H}`]:H,[`${h}-pull-${G}`]:G},oe,F,T,D),l={};if(n&&n[0]>0){const o=n[0]/2;l.paddingLeft=o,l.paddingRight=o}return le&&(l.flex=p(le),r===!1&&!l.minWidth&&(l.minWidth=0)),X(s.createElement("div",Object.assign({},ae,{style:Object.assign(Object.assign(Object.assign({},l),N),R),className:t,ref:b}),ne))});P.Z=Z},92820:function(ee,P,e){var s=e(67294),j=e(93967),A=e.n(j),M=e(74443),B=e(53124),S=e(99134),f=e(6999),p=function(c,a){var n={};for(var r in c)Object.prototype.hasOwnProperty.call(c,r)&&a.indexOf(r)<0&&(n[r]=c[r]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var O=0,r=Object.getOwnPropertySymbols(c);O<r.length;O++)a.indexOf(r[O])<0&&Object.prototype.propertyIsEnumerable.call(c,r[O])&&(n[r[O]]=c[r[O]]);return n};const y=null,Z=null;function _(c,a){const[n,r]=s.useState(typeof c=="string"?c:""),O=()=>{if(typeof c=="string"&&r(c),typeof c=="object")for(let g=0;g<M.c4.length;g++){const E=M.c4[g];if(!a[E])continue;const U=c[E];if(U!==void 0){r(U);return}}};return s.useEffect(()=>{O()},[JSON.stringify(c),a]),n}const b=s.forwardRef((c,a)=>{const{prefixCls:n,justify:r,align:O,className:g,style:E,children:U,gutter:H=0,wrap:G}=c,oe=p(c,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:ne,direction:le}=s.useContext(B.E_),[N,ae]=s.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[h,X]=s.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),T=_(O,h),D=_(r,h),R=s.useRef(H),F=(0,M.ZP)();s.useEffect(()=>{const K=F.subscribe(W=>{X(W);const I=R.current||0;(!Array.isArray(I)&&typeof I=="object"||Array.isArray(I)&&(typeof I[0]=="object"||typeof I[1]=="object"))&&ae(W)});return()=>F.unsubscribe(K)},[]);const t=()=>{const K=[void 0,void 0];return(Array.isArray(H)?H:[H,void 0]).forEach((I,ie)=>{if(typeof I=="object")for(let J=0;J<M.c4.length;J++){const Q=M.c4[J];if(N[Q]&&I[Q]!==void 0){K[ie]=I[Q];break}}else K[ie]=I}),K},l=ne("row",n),[o,i,m]=(0,f.VM)(l),C=t(),x=A()(l,{[`${l}-no-wrap`]:G===!1,[`${l}-${D}`]:D,[`${l}-${T}`]:T,[`${l}-rtl`]:le==="rtl"},g,i,m),u={},d=C[0]!=null&&C[0]>0?C[0]/-2:void 0;d&&(u.marginLeft=d,u.marginRight=d);const[v,$]=C;u.rowGap=$;const L=s.useMemo(()=>({gutter:[v,$],wrap:G}),[v,$,G]);return o(s.createElement(S.Z.Provider,{value:L},s.createElement("div",Object.assign({},oe,{className:x,style:Object.assign(Object.assign({},u),E),ref:a}),U)))});P.Z=b},6999:function(ee,P,e){e.d(P,{VM:function(){return _},cG:function(){return b}});var s=e(11568),j=e(83559),A=e(83262);const M=c=>{const{componentCls:a}=c;return{[a]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},B=c=>{const{componentCls:a}=c;return{[a]:{position:"relative",maxWidth:"100%",minHeight:1}}},S=(c,a)=>{const{prefixCls:n,componentCls:r,gridColumns:O}=c,g={};for(let E=O;E>=0;E--)E===0?(g[`${r}${a}-${E}`]={display:"none"},g[`${r}-push-${E}`]={insetInlineStart:"auto"},g[`${r}-pull-${E}`]={insetInlineEnd:"auto"},g[`${r}${a}-push-${E}`]={insetInlineStart:"auto"},g[`${r}${a}-pull-${E}`]={insetInlineEnd:"auto"},g[`${r}${a}-offset-${E}`]={marginInlineStart:0},g[`${r}${a}-order-${E}`]={order:0}):(g[`${r}${a}-${E}`]=[{"--ant-display":"block",display:"block"},{display:"var(--ant-display)",flex:`0 0 ${E/O*100}%`,maxWidth:`${E/O*100}%`}],g[`${r}${a}-push-${E}`]={insetInlineStart:`${E/O*100}%`},g[`${r}${a}-pull-${E}`]={insetInlineEnd:`${E/O*100}%`},g[`${r}${a}-offset-${E}`]={marginInlineStart:`${E/O*100}%`},g[`${r}${a}-order-${E}`]={order:E});return g[`${r}${a}-flex`]={flex:`var(--${n}${a}-flex)`},g},f=(c,a)=>S(c,a),p=(c,a,n)=>({[`@media (min-width: ${(0,s.bf)(a)})`]:Object.assign({},f(c,n))}),y=()=>({}),Z=()=>({}),_=(0,j.I$)("Grid",M,y),b=(0,j.I$)("Grid",c=>{const a=(0,A.IX)(c,{gridColumns:24}),n={"-sm":a.screenSMMin,"-md":a.screenMDMin,"-lg":a.screenLGMin,"-xl":a.screenXLMin,"-xxl":a.screenXXLMin};return[B(a),f(a,""),f(a,"-xs"),Object.keys(n).map(r=>p(a,n[r],r)).reduce((r,O)=>Object.assign(Object.assign({},r),O),{})]},Z)},71230:function(ee,P,e){var s=e(92820);P.Z=s.Z},34041:function(ee,P,e){var s=e(67294),j=e(93967),A=e.n(j),M=e(82275),B=e(98423),S=e(87263),f=e(33603),p=e(8745),y=e(9708),Z=e(53124),_=e(88258),b=e(98866),c=e(35792),a=e(98675),n=e(65223),r=e(27833),O=e(4173),g=e(29691),E=e(30307),U=e(15030),H=e(43277),G=e(78642),oe=function(h,X){var T={};for(var D in h)Object.prototype.hasOwnProperty.call(h,D)&&X.indexOf(D)<0&&(T[D]=h[D]);if(h!=null&&typeof Object.getOwnPropertySymbols=="function")for(var R=0,D=Object.getOwnPropertySymbols(h);R<D.length;R++)X.indexOf(D[R])<0&&Object.prototype.propertyIsEnumerable.call(h,D[R])&&(T[D[R]]=h[D[R]]);return T};const ne="SECRET_COMBOBOX_MODE_DO_NOT_USE",le=(h,X)=>{var T;const{prefixCls:D,bordered:R,className:F,rootClassName:t,getPopupContainer:l,popupClassName:o,dropdownClassName:i,listHeight:m=256,placement:C,listItemHeight:x,size:u,disabled:d,notFoundContent:v,status:$,builtinPlacements:L,dropdownMatchSelectWidth:K,popupMatchSelectWidth:W,direction:I,style:ie,allowClear:J,variant:Q,dropdownStyle:k,transitionName:Y,tagRender:re,maxCount:ue,prefix:V}=h,de=oe(h,["prefixCls","bordered","className","rootClassName","getPopupContainer","popupClassName","dropdownClassName","listHeight","placement","listItemHeight","size","disabled","notFoundContent","status","builtinPlacements","dropdownMatchSelectWidth","popupMatchSelectWidth","direction","style","allowClear","variant","dropdownStyle","transitionName","tagRender","maxCount","prefix"]),{getPopupContainer:w,getPrefixCls:se,renderEmpty:q,direction:ge,virtual:Ee,popupMatchSelectWidth:_e,popupOverflow:ve,select:te}=s.useContext(Z.E_),[,Ce]=(0,g.ZP)(),Se=x!=null?x:Ce==null?void 0:Ce.controlHeight,z=se("select",D),ye=se(),ce=I!=null?I:ge,{compactSize:De,compactItemClassnames:be}=(0,O.ri)(z,ce),[je,Re]=(0,r.Z)("select",Q,R),Oe=(0,c.Z)(z),[We,xe,Pe]=(0,U.Z)(z,Oe),me=s.useMemo(()=>{const{mode:he}=h;if(he!=="combobox")return he===ne?"combobox":he},[h.mode]),pe=me==="multiple"||me==="tags",Ae=(0,G.Z)(h.suffixIcon,h.showArrow),Te=(T=W!=null?W:K)!==null&&T!==void 0?T:_e,{status:Le,hasFeedback:Ie,isFormItemInput:we,feedbackIcon:Be}=s.useContext(n.aM),Ze=(0,y.F)(Le,$);let fe;v!==void 0?fe=v:me==="combobox"?fe=null:fe=(q==null?void 0:q("Select"))||s.createElement(_.Z,{componentName:"Select"});const{suffixIcon:Ke,itemIcon:Ue,removeIcon:Ne,clearIcon:ze}=(0,H.Z)(Object.assign(Object.assign({},de),{multiple:pe,hasFeedback:Ie,feedbackIcon:Be,showSuffixIcon:Ae,prefixCls:z,componentName:"Select"})),He=J===!0?{clearIcon:ze}:J,Fe=(0,B.Z)(de,["suffixIcon","itemIcon"]),ke=A()(o||i,{[`${z}-dropdown-${ce}`]:ce==="rtl"},t,Pe,Oe,xe),$e=(0,a.Z)(he=>{var Me;return(Me=u!=null?u:De)!==null&&Me!==void 0?Me:he}),Ve=s.useContext(b.Z),Ge=d!=null?d:Ve,Xe=A()({[`${z}-lg`]:$e==="large",[`${z}-sm`]:$e==="small",[`${z}-rtl`]:ce==="rtl",[`${z}-${je}`]:Re,[`${z}-in-form-item`]:we},(0,y.Z)(z,Ze,Ie),be,te==null?void 0:te.className,F,t,Pe,Oe,xe),Je=s.useMemo(()=>C!==void 0?C:ce==="rtl"?"bottomRight":"bottomLeft",[C,ce]),[Qe]=(0,S.Cn)("SelectLike",k==null?void 0:k.zIndex);return We(s.createElement(M.ZP,Object.assign({ref:X,virtual:Ee,showSearch:te==null?void 0:te.showSearch},Fe,{style:Object.assign(Object.assign({},te==null?void 0:te.style),ie),dropdownMatchSelectWidth:Te,transitionName:(0,f.m)(ye,"slide-up",Y),builtinPlacements:(0,E.Z)(L,ve),listHeight:m,listItemHeight:Se,mode:me,prefixCls:z,placement:Je,direction:ce,prefix:V,suffixIcon:Ke,menuItemSelectedIcon:Ue,removeIcon:Ne,allowClear:He,notFoundContent:fe,className:Xe,getPopupContainer:l||w,dropdownClassName:ke,disabled:Ge,dropdownStyle:Object.assign(Object.assign({},k),{zIndex:Qe}),maxCount:pe?ue:void 0,tagRender:pe?re:void 0})))},N=s.forwardRef(le),ae=(0,p.Z)(N);N.SECRET_COMBOBOX_MODE_DO_NOT_USE=ne,N.Option=M.Wx,N.OptGroup=M.Xo,N._InternalPanelDoNotUseOrYouWillBeFired=ae,P.Z=N},72269:function(ee,P,e){e.d(P,{Z:function(){return F}});var s=e(67294),j=e(50888),A=e(93967),M=e.n(A),B=e(87462),S=e(4942),f=e(97685),p=e(45987),y=e(21770),Z=e(15105),_=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],b=s.forwardRef(function(t,l){var o,i=t.prefixCls,m=i===void 0?"rc-switch":i,C=t.className,x=t.checked,u=t.defaultChecked,d=t.disabled,v=t.loadingIcon,$=t.checkedChildren,L=t.unCheckedChildren,K=t.onClick,W=t.onChange,I=t.onKeyDown,ie=(0,p.Z)(t,_),J=(0,y.Z)(!1,{value:x,defaultValue:u}),Q=(0,f.Z)(J,2),k=Q[0],Y=Q[1];function re(w,se){var q=k;return d||(q=w,Y(q),W==null||W(q,se)),q}function ue(w){w.which===Z.Z.LEFT?re(!1,w):w.which===Z.Z.RIGHT&&re(!0,w),I==null||I(w)}function V(w){var se=re(!k,w);K==null||K(se,w)}var de=M()(m,C,(o={},(0,S.Z)(o,"".concat(m,"-checked"),k),(0,S.Z)(o,"".concat(m,"-disabled"),d),o));return s.createElement("button",(0,B.Z)({},ie,{type:"button",role:"switch","aria-checked":k,disabled:d,className:de,ref:l,onKeyDown:ue,onClick:V}),v,s.createElement("span",{className:"".concat(m,"-inner")},s.createElement("span",{className:"".concat(m,"-inner-checked")},$),s.createElement("span",{className:"".concat(m,"-inner-unchecked")},L)))});b.displayName="Switch";var c=b,a=e(45353),n=e(53124),r=e(98866),O=e(98675),g=e(11568),E=e(10274),U=e(14747),H=e(83559),G=e(83262);const oe=t=>{const{componentCls:l,trackHeightSM:o,trackPadding:i,trackMinWidthSM:m,innerMinMarginSM:C,innerMaxMarginSM:x,handleSizeSM:u,calc:d}=t,v=`${l}-inner`,$=(0,g.bf)(d(u).add(d(i).mul(2)).equal()),L=(0,g.bf)(d(x).mul(2).equal());return{[l]:{[`&${l}-small`]:{minWidth:m,height:o,lineHeight:(0,g.bf)(o),[`${l}-inner`]:{paddingInlineStart:x,paddingInlineEnd:C,[`${v}-checked, ${v}-unchecked`]:{minHeight:o},[`${v}-checked`]:{marginInlineStart:`calc(-100% + ${$} - ${L})`,marginInlineEnd:`calc(100% - ${$} + ${L})`},[`${v}-unchecked`]:{marginTop:d(o).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`${l}-handle`]:{width:u,height:u},[`${l}-loading-icon`]:{top:d(d(u).sub(t.switchLoadingIconSize)).div(2).equal(),fontSize:t.switchLoadingIconSize},[`&${l}-checked`]:{[`${l}-inner`]:{paddingInlineStart:C,paddingInlineEnd:x,[`${v}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${v}-unchecked`]:{marginInlineStart:`calc(100% - ${$} + ${L})`,marginInlineEnd:`calc(-100% + ${$} - ${L})`}},[`${l}-handle`]:{insetInlineStart:`calc(100% - ${(0,g.bf)(d(u).add(i).equal())})`}},[`&:not(${l}-disabled):active`]:{[`&:not(${l}-checked) ${v}`]:{[`${v}-unchecked`]:{marginInlineStart:d(t.marginXXS).div(2).equal(),marginInlineEnd:d(t.marginXXS).mul(-1).div(2).equal()}},[`&${l}-checked ${v}`]:{[`${v}-checked`]:{marginInlineStart:d(t.marginXXS).mul(-1).div(2).equal(),marginInlineEnd:d(t.marginXXS).div(2).equal()}}}}}}},ne=t=>{const{componentCls:l,handleSize:o,calc:i}=t;return{[l]:{[`${l}-loading-icon${t.iconCls}`]:{position:"relative",top:i(i(o).sub(t.fontSize)).div(2).equal(),color:t.switchLoadingIconColor,verticalAlign:"top"},[`&${l}-checked ${l}-loading-icon`]:{color:t.switchColor}}}},le=t=>{const{componentCls:l,trackPadding:o,handleBg:i,handleShadow:m,handleSize:C,calc:x}=t,u=`${l}-handle`;return{[l]:{[u]:{position:"absolute",top:o,insetInlineStart:o,width:C,height:C,transition:`all ${t.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:i,borderRadius:x(C).div(2).equal(),boxShadow:m,transition:`all ${t.switchDuration} ease-in-out`,content:'""'}},[`&${l}-checked ${u}`]:{insetInlineStart:`calc(100% - ${(0,g.bf)(x(C).add(o).equal())})`},[`&:not(${l}-disabled):active`]:{[`${u}::before`]:{insetInlineEnd:t.switchHandleActiveInset,insetInlineStart:0},[`&${l}-checked ${u}::before`]:{insetInlineEnd:0,insetInlineStart:t.switchHandleActiveInset}}}}},N=t=>{const{componentCls:l,trackHeight:o,trackPadding:i,innerMinMargin:m,innerMaxMargin:C,handleSize:x,calc:u}=t,d=`${l}-inner`,v=(0,g.bf)(u(x).add(u(i).mul(2)).equal()),$=(0,g.bf)(u(C).mul(2).equal());return{[l]:{[d]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:C,paddingInlineEnd:m,transition:`padding-inline-start ${t.switchDuration} ease-in-out, padding-inline-end ${t.switchDuration} ease-in-out`,[`${d}-checked, ${d}-unchecked`]:{display:"block",color:t.colorTextLightSolid,fontSize:t.fontSizeSM,transition:`margin-inline-start ${t.switchDuration} ease-in-out, margin-inline-end ${t.switchDuration} ease-in-out`,pointerEvents:"none",minHeight:o},[`${d}-checked`]:{marginInlineStart:`calc(-100% + ${v} - ${$})`,marginInlineEnd:`calc(100% - ${v} + ${$})`},[`${d}-unchecked`]:{marginTop:u(o).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`&${l}-checked ${d}`]:{paddingInlineStart:m,paddingInlineEnd:C,[`${d}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${d}-unchecked`]:{marginInlineStart:`calc(100% - ${v} + ${$})`,marginInlineEnd:`calc(-100% + ${v} - ${$})`}},[`&:not(${l}-disabled):active`]:{[`&:not(${l}-checked) ${d}`]:{[`${d}-unchecked`]:{marginInlineStart:u(i).mul(2).equal(),marginInlineEnd:u(i).mul(-1).mul(2).equal()}},[`&${l}-checked ${d}`]:{[`${d}-checked`]:{marginInlineStart:u(i).mul(-1).mul(2).equal(),marginInlineEnd:u(i).mul(2).equal()}}}}}},ae=t=>{const{componentCls:l,trackHeight:o,trackMinWidth:i}=t;return{[l]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,U.Wf)(t)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:i,height:o,lineHeight:(0,g.bf)(o),verticalAlign:"middle",background:t.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${t.motionDurationMid}`,userSelect:"none",[`&:hover:not(${l}-disabled)`]:{background:t.colorTextTertiary}}),(0,U.Qy)(t)),{[`&${l}-checked`]:{background:t.switchColor,[`&:hover:not(${l}-disabled)`]:{background:t.colorPrimaryHover}},[`&${l}-loading, &${l}-disabled`]:{cursor:"not-allowed",opacity:t.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${l}-rtl`]:{direction:"rtl"}})}},h=t=>{const{fontSize:l,lineHeight:o,controlHeight:i,colorWhite:m}=t,C=l*o,x=i/2,u=2,d=C-u*2,v=x-u*2;return{trackHeight:C,trackHeightSM:x,trackMinWidth:d*2+u*4,trackMinWidthSM:v*2+u*2,trackPadding:u,handleBg:m,handleSize:d,handleSizeSM:v,handleShadow:`0 2px 4px 0 ${new E.C("#00230b").setAlpha(.2).toRgbString()}`,innerMinMargin:d/2,innerMaxMargin:d+u+u*2,innerMinMarginSM:v/2,innerMaxMarginSM:v+u+u*2}};var X=(0,H.I$)("Switch",t=>{const l=(0,G.IX)(t,{switchDuration:t.motionDurationMid,switchColor:t.colorPrimary,switchDisabledOpacity:t.opacityLoading,switchLoadingIconSize:t.calc(t.fontSizeIcon).mul(.75).equal(),switchLoadingIconColor:`rgba(0, 0, 0, ${t.opacityLoading})`,switchHandleActiveInset:"-30%"});return[ae(l),N(l),le(l),ne(l),oe(l)]},h),T=function(t,l){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&l.indexOf(i)<0&&(o[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,i=Object.getOwnPropertySymbols(t);m<i.length;m++)l.indexOf(i[m])<0&&Object.prototype.propertyIsEnumerable.call(t,i[m])&&(o[i[m]]=t[i[m]]);return o};const R=s.forwardRef((t,l)=>{const{prefixCls:o,size:i,disabled:m,loading:C,className:x,rootClassName:u,style:d,checked:v,value:$,defaultChecked:L,defaultValue:K,onChange:W}=t,I=T(t,["prefixCls","size","disabled","loading","className","rootClassName","style","checked","value","defaultChecked","defaultValue","onChange"]),[ie,J]=(0,y.Z)(!1,{value:v!=null?v:$,defaultValue:L!=null?L:K}),{getPrefixCls:Q,direction:k,switch:Y}=s.useContext(n.E_),re=s.useContext(r.Z),ue=(m!=null?m:re)||C,V=Q("switch",o),de=s.createElement("div",{className:`${V}-handle`},C&&s.createElement(j.Z,{className:`${V}-loading-icon`})),[w,se,q]=X(V),ge=(0,O.Z)(i),Ee=M()(Y==null?void 0:Y.className,{[`${V}-small`]:ge==="small",[`${V}-loading`]:C,[`${V}-rtl`]:k==="rtl"},x,u,se,q),_e=Object.assign(Object.assign({},Y==null?void 0:Y.style),d),ve=function(){J(arguments.length<=0?void 0:arguments[0]),W==null||W.apply(void 0,arguments)};return w(s.createElement(a.Z,{component:"Switch"},s.createElement(c,Object.assign({},I,{checked:ie,onChange:ve,prefixCls:V,className:Ee,style:_e,disabled:ue,ref:l,loadingIcon:de}))))});R.__ANT_SWITCH=!0;var F=R}}]);
