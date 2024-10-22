"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[726],{3083:function(ee,P,e){var s=e(50545),j=e(70278),T=e(78298),M=e(97975),B=e(78957),S=e(83062),f=e(85893);P.Z=function(p){var y=p.title,Z=p.subtitle,_=p.extra,b=p.hide_add,c=p.hide_save,a=p.hide_refresh,n=p.hide_delete,r=function(){return _?null:(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(B.Z,{direction:"horizontal",children:[c||(0,f.jsx)(S.Z,{title:"save",children:(0,f.jsx)(s.Z,{stroke:1})}),n||(0,f.jsx)(S.Z,{title:"delete",children:(0,f.jsx)(j.Z,{stroke:1})}),a||(0,f.jsx)(S.Z,{title:"refresh",children:(0,f.jsx)(T.Z,{stroke:1})}),b||(0,f.jsx)(S.Z,{title:"add",children:(0,f.jsx)(M.Z,{stroke:1})})]})})};return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("div",{className:"mb-3 rounded-lg border-1 border-slate-800 bg-blue-900 p-2 text-white",children:(0,f.jsxs)("div",{className:"flex-row-between",children:[(0,f.jsxs)("div",{className:"flex w-full flex-row items-end gap-2",children:[(0,f.jsx)("h1",{className:"text-large font-bold",children:y}),(0,f.jsx)("div",{className:"text-large text-yellow-500",children:Z})]}),(0,f.jsxs)("div",{className:"",children:[_||null,r()]})]})})})}},22632:function(ee,P,e){e.r(P);var s=e(3083),j=e(75549),T=e(97975),M=e(78957),B=e(71230),S=e(15746),f=e(4393),p=e(14726),y=e(25278),Z=e(17960),_=e(26412),b=e(59847),c=e(34041),a=e(72269),n=e(85893);P.default=function(){var r=[{key:"1",value:"1",title:"Inventory",children:[{key:"1-1",value:"1-1",title:"Meter loss"},{key:"1-2",value:"1-2",title:"Meter repair"}]},{key:"2",value:"2",title:"Meter",children:[{key:"2-1",value:"2-1",title:"Meter lifecycle"},{key:"2-2",value:"2-2",title:"Meter inspection"}]},{key:"3",value:"3",title:"Field Activity",children:[{key:"3-1",value:"3-1",title:"Field Activity Maintenance"},{key:"3-2",value:"3-2",title:"Bulk FA Cancellation"}]}];return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(M.Z,{direction:"vertical",style:{width:"100%"},children:[(0,n.jsx)(s.Z,{title:"Menu Setting",extra:(0,n.jsx)("span",{})}),(0,n.jsxs)(B.Z,{gutter:[10,10],children:[(0,n.jsx)(S.Z,{span:12,children:(0,n.jsxs)(f.Z,{title:"Menu Tree",extra:(0,n.jsxs)(M.Z,{direction:"horizontal",children:[(0,n.jsx)(p.ZP,{size:"small",type:"dashed",icon:(0,n.jsx)(j.Z,{stroke:1})}),(0,n.jsx)(p.ZP,{size:"small",type:"dashed",icon:(0,n.jsx)(T.Z,{stroke:1})})]}),children:[(0,n.jsx)(y.Z.Search,{style:{marginBottom:10},placeholder:"Filter Tree Nodes"}),(0,n.jsx)(Z.Z,{filterAntTreeNode:void 0,showLine:!0,defaultExpandAll:!0,treeData:r})]})}),(0,n.jsx)(S.Z,{span:12,children:(0,n.jsx)(f.Z,{title:"Settings",children:(0,n.jsx)(_.Z,{bordered:!0,column:1,items:[{label:"\u7236\u7EA7\u83DC\u5355",children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(b.Z,{placeholder:"leave parent empty to add root menu",allowClear:!0,treeDefaultExpandAll:!0,treeLine:!0,treeData:r,defaultValue:"1",style:{minWidth:300}})})},{label:"Name",children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(y.Z,{})})},{label:"Description",children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(y.Z.TextArea,{})})},{label:"Related Function",children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(c.Z,{mode:"multiple",options:[{label:"Meter",value:"1"},{label:"Inventory",value:"2"}],defaultValue:["1","2"],style:{minWidth:300}})})},{label:"Link",children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(y.Z,{placeholder:"http://bz.dfyzwater.com:8080/webroot/decision/view/report?viewlet=\u8868\u5361\u57FA\u672C\u4FE1\u606F.cpt"})})},{label:"Parameter",children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(y.Z.TextArea,{})})},{label:"\u662F\u5426\u555F\u7528",children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.Z,{defaultChecked:!0})})},{label:"",children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(M.Z,{direction:"horizontal",children:[(0,n.jsx)(p.ZP,{type:"link",danger:!0,size:"large",children:"Delete"}),(0,n.jsx)(p.ZP,{type:"primary",size:"large",children:"Save"})]})})}]})})})]})]})})}},15746:function(ee,P,e){var s=e(21584);P.Z=s.Z},99134:function(ee,P,e){var s=e(67294);const j=(0,s.createContext)({});P.Z=j},21584:function(ee,P,e){var s=e(67294),j=e(93967),T=e.n(j),M=e(53124),B=e(99134),S=e(6999),f=function(_,b){var c={};for(var a in _)Object.prototype.hasOwnProperty.call(_,a)&&b.indexOf(a)<0&&(c[a]=_[a]);if(_!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(_);n<a.length;n++)b.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(_,a[n])&&(c[a[n]]=_[a[n]]);return c};function p(_){return typeof _=="number"?`${_} ${_} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(_)?`0 0 ${_}`:_}const y=["xs","sm","md","lg","xl","xxl"],Z=s.forwardRef((_,b)=>{const{getPrefixCls:c,direction:a}=s.useContext(M.E_),{gutter:n,wrap:r}=s.useContext(B.Z),{prefixCls:O,span:g,order:E,offset:U,push:F,pull:X,className:oe,children:ne,flex:le,style:N}=_,ae=f(_,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),h=c("col",O),[J,L,D]=(0,S.cG)(h),R={};let k={};y.forEach(o=>{let i={};const m=_[o];typeof m=="number"?i.span=m:typeof m=="object"&&(i=m||{}),delete ae[o],k=Object.assign(Object.assign({},k),{[`${h}-${o}-${i.span}`]:i.span!==void 0,[`${h}-${o}-order-${i.order}`]:i.order||i.order===0,[`${h}-${o}-offset-${i.offset}`]:i.offset||i.offset===0,[`${h}-${o}-push-${i.push}`]:i.push||i.push===0,[`${h}-${o}-pull-${i.pull}`]:i.pull||i.pull===0,[`${h}-rtl`]:a==="rtl"}),i.flex&&(k[`${h}-${o}-flex`]=!0,R[`--${h}-${o}-flex`]=p(i.flex))});const t=T()(h,{[`${h}-${g}`]:g!==void 0,[`${h}-order-${E}`]:E,[`${h}-offset-${U}`]:U,[`${h}-push-${F}`]:F,[`${h}-pull-${X}`]:X},oe,k,L,D),l={};if(n&&n[0]>0){const o=n[0]/2;l.paddingLeft=o,l.paddingRight=o}return le&&(l.flex=p(le),r===!1&&!l.minWidth&&(l.minWidth=0)),J(s.createElement("div",Object.assign({},ae,{style:Object.assign(Object.assign(Object.assign({},l),N),R),className:t,ref:b}),ne))});P.Z=Z},92820:function(ee,P,e){var s=e(67294),j=e(93967),T=e.n(j),M=e(74443),B=e(53124),S=e(99134),f=e(6999),p=function(c,a){var n={};for(var r in c)Object.prototype.hasOwnProperty.call(c,r)&&a.indexOf(r)<0&&(n[r]=c[r]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var O=0,r=Object.getOwnPropertySymbols(c);O<r.length;O++)a.indexOf(r[O])<0&&Object.prototype.propertyIsEnumerable.call(c,r[O])&&(n[r[O]]=c[r[O]]);return n};const y=null,Z=null;function _(c,a){const[n,r]=s.useState(typeof c=="string"?c:""),O=()=>{if(typeof c=="string"&&r(c),typeof c=="object")for(let g=0;g<M.c4.length;g++){const E=M.c4[g];if(!a[E])continue;const U=c[E];if(U!==void 0){r(U);return}}};return s.useEffect(()=>{O()},[JSON.stringify(c),a]),n}const b=s.forwardRef((c,a)=>{const{prefixCls:n,justify:r,align:O,className:g,style:E,children:U,gutter:F=0,wrap:X}=c,oe=p(c,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:ne,direction:le}=s.useContext(B.E_),[N,ae]=s.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[h,J]=s.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),L=_(O,h),D=_(r,h),R=s.useRef(F),k=(0,M.ZP)();s.useEffect(()=>{const K=k.subscribe(W=>{J(W);const I=R.current||0;(!Array.isArray(I)&&typeof I=="object"||Array.isArray(I)&&(typeof I[0]=="object"||typeof I[1]=="object"))&&ae(W)});return()=>k.unsubscribe(K)},[]);const t=()=>{const K=[void 0,void 0];return(Array.isArray(F)?F:[F,void 0]).forEach((I,ie)=>{if(typeof I=="object")for(let Q=0;Q<M.c4.length;Q++){const Y=M.c4[Q];if(N[Y]&&I[Y]!==void 0){K[ie]=I[Y];break}}else K[ie]=I}),K},l=ne("row",n),[o,i,m]=(0,f.VM)(l),C=t(),x=T()(l,{[`${l}-no-wrap`]:X===!1,[`${l}-${D}`]:D,[`${l}-${L}`]:L,[`${l}-rtl`]:le==="rtl"},g,i,m),u={},d=C[0]!=null&&C[0]>0?C[0]/-2:void 0;d&&(u.marginLeft=d,u.marginRight=d);const[v,$]=C;u.rowGap=$;const w=s.useMemo(()=>({gutter:[v,$],wrap:X}),[v,$,X]);return o(s.createElement(S.Z.Provider,{value:w},s.createElement("div",Object.assign({},oe,{className:x,style:Object.assign(Object.assign({},u),E),ref:a}),U)))});P.Z=b},6999:function(ee,P,e){e.d(P,{VM:function(){return _},cG:function(){return b}});var s=e(11568),j=e(83559),T=e(83262);const M=c=>{const{componentCls:a}=c;return{[a]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},B=c=>{const{componentCls:a}=c;return{[a]:{position:"relative",maxWidth:"100%",minHeight:1}}},S=(c,a)=>{const{prefixCls:n,componentCls:r,gridColumns:O}=c,g={};for(let E=O;E>=0;E--)E===0?(g[`${r}${a}-${E}`]={display:"none"},g[`${r}-push-${E}`]={insetInlineStart:"auto"},g[`${r}-pull-${E}`]={insetInlineEnd:"auto"},g[`${r}${a}-push-${E}`]={insetInlineStart:"auto"},g[`${r}${a}-pull-${E}`]={insetInlineEnd:"auto"},g[`${r}${a}-offset-${E}`]={marginInlineStart:0},g[`${r}${a}-order-${E}`]={order:0}):(g[`${r}${a}-${E}`]=[{"--ant-display":"block",display:"block"},{display:"var(--ant-display)",flex:`0 0 ${E/O*100}%`,maxWidth:`${E/O*100}%`}],g[`${r}${a}-push-${E}`]={insetInlineStart:`${E/O*100}%`},g[`${r}${a}-pull-${E}`]={insetInlineEnd:`${E/O*100}%`},g[`${r}${a}-offset-${E}`]={marginInlineStart:`${E/O*100}%`},g[`${r}${a}-order-${E}`]={order:E});return g[`${r}${a}-flex`]={flex:`var(--${n}${a}-flex)`},g},f=(c,a)=>S(c,a),p=(c,a,n)=>({[`@media (min-width: ${(0,s.bf)(a)})`]:Object.assign({},f(c,n))}),y=()=>({}),Z=()=>({}),_=(0,j.I$)("Grid",M,y),b=(0,j.I$)("Grid",c=>{const a=(0,T.IX)(c,{gridColumns:24}),n={"-sm":a.screenSMMin,"-md":a.screenMDMin,"-lg":a.screenLGMin,"-xl":a.screenXLMin,"-xxl":a.screenXXLMin};return[B(a),f(a,""),f(a,"-xs"),Object.keys(n).map(r=>p(a,n[r],r)).reduce((r,O)=>Object.assign(Object.assign({},r),O),{})]},Z)},71230:function(ee,P,e){var s=e(92820);P.Z=s.Z},34041:function(ee,P,e){var s=e(67294),j=e(93967),T=e.n(j),M=e(82275),B=e(98423),S=e(87263),f=e(33603),p=e(8745),y=e(9708),Z=e(53124),_=e(88258),b=e(98866),c=e(35792),a=e(98675),n=e(65223),r=e(27833),O=e(4173),g=e(29691),E=e(30307),U=e(15030),F=e(43277),X=e(78642),oe=function(h,J){var L={};for(var D in h)Object.prototype.hasOwnProperty.call(h,D)&&J.indexOf(D)<0&&(L[D]=h[D]);if(h!=null&&typeof Object.getOwnPropertySymbols=="function")for(var R=0,D=Object.getOwnPropertySymbols(h);R<D.length;R++)J.indexOf(D[R])<0&&Object.prototype.propertyIsEnumerable.call(h,D[R])&&(L[D[R]]=h[D[R]]);return L};const ne="SECRET_COMBOBOX_MODE_DO_NOT_USE",le=(h,J)=>{var L;const{prefixCls:D,bordered:R,className:k,rootClassName:t,getPopupContainer:l,popupClassName:o,dropdownClassName:i,listHeight:m=256,placement:C,listItemHeight:x,size:u,disabled:d,notFoundContent:v,status:$,builtinPlacements:w,dropdownMatchSelectWidth:K,popupMatchSelectWidth:W,direction:I,style:ie,allowClear:Q,variant:Y,dropdownStyle:V,transitionName:q,tagRender:re,maxCount:de}=h,z=oe(h,["prefixCls","bordered","className","rootClassName","getPopupContainer","popupClassName","dropdownClassName","listHeight","placement","listItemHeight","size","disabled","notFoundContent","status","builtinPlacements","dropdownMatchSelectWidth","popupMatchSelectWidth","direction","style","allowClear","variant","dropdownStyle","transitionName","tagRender","maxCount"]),{getPopupContainer:ue,getPrefixCls:A,renderEmpty:te,direction:se,virtual:ge,popupMatchSelectWidth:Ee,popupOverflow:_e,select:G}=s.useContext(Z.E_),[,ve]=(0,g.ZP)(),$e=x!=null?x:ve==null?void 0:ve.controlHeight,H=A("select",D),Se=A(),ce=I!=null?I:se,{compactSize:ye,compactItemClassnames:De}=(0,O.ri)(H,ce),[be,je]=(0,r.Z)("select",Y,R),Ce=(0,c.Z)(H),[Re,Me,xe]=(0,U.Z)(H,Ce),me=s.useMemo(()=>{const{mode:he}=h;if(he!=="combobox")return he===ne?"combobox":he},[h.mode]),Oe=me==="multiple"||me==="tags",We=(0,X.Z)(h.suffixIcon,h.showArrow),Ae=(L=W!=null?W:K)!==null&&L!==void 0?L:Ee,{status:Te,hasFeedback:Pe,isFormItemInput:Le,feedbackIcon:we}=s.useContext(n.aM),Be=(0,y.F)(Te,$);let fe;v!==void 0?fe=v:me==="combobox"?fe=null:fe=(te==null?void 0:te("Select"))||s.createElement(_.Z,{componentName:"Select"});const{suffixIcon:Ze,itemIcon:Ke,removeIcon:Ue,clearIcon:Ne}=(0,F.Z)(Object.assign(Object.assign({},z),{multiple:Oe,hasFeedback:Pe,feedbackIcon:we,showSuffixIcon:We,prefixCls:H,componentName:"Select"})),ze=Q===!0?{clearIcon:Ne}:Q,He=(0,B.Z)(z,["suffixIcon","itemIcon"]),Fe=T()(o||i,{[`${H}-dropdown-${ce}`]:ce==="rtl"},t,xe,Ce,Me),Ie=(0,a.Z)(he=>{var pe;return(pe=u!=null?u:ye)!==null&&pe!==void 0?pe:he}),ke=s.useContext(b.Z),Ve=d!=null?d:ke,Ge=T()({[`${H}-lg`]:Ie==="large",[`${H}-sm`]:Ie==="small",[`${H}-rtl`]:ce==="rtl",[`${H}-${be}`]:je,[`${H}-in-form-item`]:Le},(0,y.Z)(H,Be,Pe),De,G==null?void 0:G.className,k,t,xe,Ce,Me),Xe=s.useMemo(()=>C!==void 0?C:ce==="rtl"?"bottomRight":"bottomLeft",[C,ce]),[Je]=(0,S.Cn)("SelectLike",V==null?void 0:V.zIndex);return Re(s.createElement(M.ZP,Object.assign({ref:J,virtual:ge,showSearch:G==null?void 0:G.showSearch},He,{style:Object.assign(Object.assign({},G==null?void 0:G.style),ie),dropdownMatchSelectWidth:Ae,transitionName:(0,f.m)(Se,"slide-up",q),builtinPlacements:(0,E.Z)(w,_e),listHeight:m,listItemHeight:$e,mode:me,prefixCls:H,placement:Xe,direction:ce,suffixIcon:Ze,menuItemSelectedIcon:Ke,removeIcon:Ue,allowClear:ze,notFoundContent:fe,className:Ge,getPopupContainer:l||ue,dropdownClassName:Fe,disabled:Ve,dropdownStyle:Object.assign(Object.assign({},V),{zIndex:Je}),maxCount:Oe?de:void 0,tagRender:Oe?re:void 0})))},N=s.forwardRef(le),ae=(0,p.Z)(N);N.SECRET_COMBOBOX_MODE_DO_NOT_USE=ne,N.Option=M.Wx,N.OptGroup=M.Xo,N._InternalPanelDoNotUseOrYouWillBeFired=ae,P.Z=N},72269:function(ee,P,e){e.d(P,{Z:function(){return k}});var s=e(67294),j=e(50888),T=e(93967),M=e.n(T),B=e(87462),S=e(4942),f=e(97685),p=e(45987),y=e(21770),Z=e(15105),_=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],b=s.forwardRef(function(t,l){var o,i=t.prefixCls,m=i===void 0?"rc-switch":i,C=t.className,x=t.checked,u=t.defaultChecked,d=t.disabled,v=t.loadingIcon,$=t.checkedChildren,w=t.unCheckedChildren,K=t.onClick,W=t.onChange,I=t.onKeyDown,ie=(0,p.Z)(t,_),Q=(0,y.Z)(!1,{value:x,defaultValue:u}),Y=(0,f.Z)(Q,2),V=Y[0],q=Y[1];function re(A,te){var se=V;return d||(se=A,q(se),W==null||W(se,te)),se}function de(A){A.which===Z.Z.LEFT?re(!1,A):A.which===Z.Z.RIGHT&&re(!0,A),I==null||I(A)}function z(A){var te=re(!V,A);K==null||K(te,A)}var ue=M()(m,C,(o={},(0,S.Z)(o,"".concat(m,"-checked"),V),(0,S.Z)(o,"".concat(m,"-disabled"),d),o));return s.createElement("button",(0,B.Z)({},ie,{type:"button",role:"switch","aria-checked":V,disabled:d,className:ue,ref:l,onKeyDown:de,onClick:z}),v,s.createElement("span",{className:"".concat(m,"-inner")},s.createElement("span",{className:"".concat(m,"-inner-checked")},$),s.createElement("span",{className:"".concat(m,"-inner-unchecked")},w)))});b.displayName="Switch";var c=b,a=e(45353),n=e(53124),r=e(98866),O=e(98675),g=e(11568),E=e(10274),U=e(14747),F=e(83559),X=e(83262);const oe=t=>{const{componentCls:l,trackHeightSM:o,trackPadding:i,trackMinWidthSM:m,innerMinMarginSM:C,innerMaxMarginSM:x,handleSizeSM:u,calc:d}=t,v=`${l}-inner`,$=(0,g.bf)(d(u).add(d(i).mul(2)).equal()),w=(0,g.bf)(d(x).mul(2).equal());return{[l]:{[`&${l}-small`]:{minWidth:m,height:o,lineHeight:(0,g.bf)(o),[`${l}-inner`]:{paddingInlineStart:x,paddingInlineEnd:C,[`${v}-checked, ${v}-unchecked`]:{minHeight:o},[`${v}-checked`]:{marginInlineStart:`calc(-100% + ${$} - ${w})`,marginInlineEnd:`calc(100% - ${$} + ${w})`},[`${v}-unchecked`]:{marginTop:d(o).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`${l}-handle`]:{width:u,height:u},[`${l}-loading-icon`]:{top:d(d(u).sub(t.switchLoadingIconSize)).div(2).equal(),fontSize:t.switchLoadingIconSize},[`&${l}-checked`]:{[`${l}-inner`]:{paddingInlineStart:C,paddingInlineEnd:x,[`${v}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${v}-unchecked`]:{marginInlineStart:`calc(100% - ${$} + ${w})`,marginInlineEnd:`calc(-100% + ${$} - ${w})`}},[`${l}-handle`]:{insetInlineStart:`calc(100% - ${(0,g.bf)(d(u).add(i).equal())})`}},[`&:not(${l}-disabled):active`]:{[`&:not(${l}-checked) ${v}`]:{[`${v}-unchecked`]:{marginInlineStart:d(t.marginXXS).div(2).equal(),marginInlineEnd:d(t.marginXXS).mul(-1).div(2).equal()}},[`&${l}-checked ${v}`]:{[`${v}-checked`]:{marginInlineStart:d(t.marginXXS).mul(-1).div(2).equal(),marginInlineEnd:d(t.marginXXS).div(2).equal()}}}}}}},ne=t=>{const{componentCls:l,handleSize:o,calc:i}=t;return{[l]:{[`${l}-loading-icon${t.iconCls}`]:{position:"relative",top:i(i(o).sub(t.fontSize)).div(2).equal(),color:t.switchLoadingIconColor,verticalAlign:"top"},[`&${l}-checked ${l}-loading-icon`]:{color:t.switchColor}}}},le=t=>{const{componentCls:l,trackPadding:o,handleBg:i,handleShadow:m,handleSize:C,calc:x}=t,u=`${l}-handle`;return{[l]:{[u]:{position:"absolute",top:o,insetInlineStart:o,width:C,height:C,transition:`all ${t.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:i,borderRadius:x(C).div(2).equal(),boxShadow:m,transition:`all ${t.switchDuration} ease-in-out`,content:'""'}},[`&${l}-checked ${u}`]:{insetInlineStart:`calc(100% - ${(0,g.bf)(x(C).add(o).equal())})`},[`&:not(${l}-disabled):active`]:{[`${u}::before`]:{insetInlineEnd:t.switchHandleActiveInset,insetInlineStart:0},[`&${l}-checked ${u}::before`]:{insetInlineEnd:0,insetInlineStart:t.switchHandleActiveInset}}}}},N=t=>{const{componentCls:l,trackHeight:o,trackPadding:i,innerMinMargin:m,innerMaxMargin:C,handleSize:x,calc:u}=t,d=`${l}-inner`,v=(0,g.bf)(u(x).add(u(i).mul(2)).equal()),$=(0,g.bf)(u(C).mul(2).equal());return{[l]:{[d]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:C,paddingInlineEnd:m,transition:`padding-inline-start ${t.switchDuration} ease-in-out, padding-inline-end ${t.switchDuration} ease-in-out`,[`${d}-checked, ${d}-unchecked`]:{display:"block",color:t.colorTextLightSolid,fontSize:t.fontSizeSM,transition:`margin-inline-start ${t.switchDuration} ease-in-out, margin-inline-end ${t.switchDuration} ease-in-out`,pointerEvents:"none",minHeight:o},[`${d}-checked`]:{marginInlineStart:`calc(-100% + ${v} - ${$})`,marginInlineEnd:`calc(100% - ${v} + ${$})`},[`${d}-unchecked`]:{marginTop:u(o).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`&${l}-checked ${d}`]:{paddingInlineStart:m,paddingInlineEnd:C,[`${d}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${d}-unchecked`]:{marginInlineStart:`calc(100% - ${v} + ${$})`,marginInlineEnd:`calc(-100% + ${v} - ${$})`}},[`&:not(${l}-disabled):active`]:{[`&:not(${l}-checked) ${d}`]:{[`${d}-unchecked`]:{marginInlineStart:u(i).mul(2).equal(),marginInlineEnd:u(i).mul(-1).mul(2).equal()}},[`&${l}-checked ${d}`]:{[`${d}-checked`]:{marginInlineStart:u(i).mul(-1).mul(2).equal(),marginInlineEnd:u(i).mul(2).equal()}}}}}},ae=t=>{const{componentCls:l,trackHeight:o,trackMinWidth:i}=t;return{[l]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,U.Wf)(t)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:i,height:o,lineHeight:(0,g.bf)(o),verticalAlign:"middle",background:t.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${t.motionDurationMid}`,userSelect:"none",[`&:hover:not(${l}-disabled)`]:{background:t.colorTextTertiary}}),(0,U.Qy)(t)),{[`&${l}-checked`]:{background:t.switchColor,[`&:hover:not(${l}-disabled)`]:{background:t.colorPrimaryHover}},[`&${l}-loading, &${l}-disabled`]:{cursor:"not-allowed",opacity:t.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${l}-rtl`]:{direction:"rtl"}})}},h=t=>{const{fontSize:l,lineHeight:o,controlHeight:i,colorWhite:m}=t,C=l*o,x=i/2,u=2,d=C-u*2,v=x-u*2;return{trackHeight:C,trackHeightSM:x,trackMinWidth:d*2+u*4,trackMinWidthSM:v*2+u*2,trackPadding:u,handleBg:m,handleSize:d,handleSizeSM:v,handleShadow:`0 2px 4px 0 ${new E.C("#00230b").setAlpha(.2).toRgbString()}`,innerMinMargin:d/2,innerMaxMargin:d+u+u*2,innerMinMarginSM:v/2,innerMaxMarginSM:v+u+u*2}};var J=(0,F.I$)("Switch",t=>{const l=(0,X.IX)(t,{switchDuration:t.motionDurationMid,switchColor:t.colorPrimary,switchDisabledOpacity:t.opacityLoading,switchLoadingIconSize:t.calc(t.fontSizeIcon).mul(.75).equal(),switchLoadingIconColor:`rgba(0, 0, 0, ${t.opacityLoading})`,switchHandleActiveInset:"-30%"});return[ae(l),N(l),le(l),ne(l),oe(l)]},h),L=function(t,l){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&l.indexOf(i)<0&&(o[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,i=Object.getOwnPropertySymbols(t);m<i.length;m++)l.indexOf(i[m])<0&&Object.prototype.propertyIsEnumerable.call(t,i[m])&&(o[i[m]]=t[i[m]]);return o};const R=s.forwardRef((t,l)=>{const{prefixCls:o,size:i,disabled:m,loading:C,className:x,rootClassName:u,style:d,checked:v,value:$,defaultChecked:w,defaultValue:K,onChange:W}=t,I=L(t,["prefixCls","size","disabled","loading","className","rootClassName","style","checked","value","defaultChecked","defaultValue","onChange"]),[ie,Q]=(0,y.Z)(!1,{value:v!=null?v:$,defaultValue:w!=null?w:K}),{getPrefixCls:Y,direction:V,switch:q}=s.useContext(n.E_),re=s.useContext(r.Z),de=(m!=null?m:re)||C,z=Y("switch",o),ue=s.createElement("div",{className:`${z}-handle`},C&&s.createElement(j.Z,{className:`${z}-loading-icon`})),[A,te,se]=J(z),ge=(0,O.Z)(i),Ee=M()(q==null?void 0:q.className,{[`${z}-small`]:ge==="small",[`${z}-loading`]:C,[`${z}-rtl`]:V==="rtl"},x,u,te,se),_e=Object.assign(Object.assign({},q==null?void 0:q.style),d),G=function(){Q(arguments.length<=0?void 0:arguments[0]),W==null||W.apply(void 0,arguments)};return A(s.createElement(a.Z,{component:"Switch"},s.createElement(c,Object.assign({},I,{checked:ie,onChange:G,prefixCls:z,className:Ee,style:_e,disabled:de,ref:l,loadingIcon:ue}))))});R.__ANT_SWITCH=!0;var k=R}}]);
