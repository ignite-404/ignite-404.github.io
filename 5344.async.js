"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5344],{85344:function(er,ct,C){C.d(ct,{Z:function(){return Ot}});var Oe=C(87462),Ce=C(71002),P=C(1413),I=C(4942),w=C(97685),ft=C(45987),st=C(93967),me=C.n(st),Ne=C(48555),Ye=C(56790),oe=C(8410),t=C(67294),Fe=C(73935),Xe=t.forwardRef(function(e,v){var n=e.height,u=e.offsetY,f=e.offsetX,d=e.children,s=e.prefixCls,l=e.onInnerResize,Z=e.innerProps,h=e.rtl,R=e.extra,a={},g={display:"flex",flexDirection:"column"};return u!==void 0&&(a={height:n,position:"relative",overflow:"hidden"},g=(0,P.Z)((0,P.Z)({},g),{},(0,I.Z)((0,I.Z)((0,I.Z)((0,I.Z)((0,I.Z)({transform:"translateY(".concat(u,"px)")},h?"marginRight":"marginLeft",-f),"position","absolute"),"left",0),"right",0),"top",0))),t.createElement("div",{style:a},t.createElement(Ne.Z,{onResize:function(m){var c=m.offsetHeight;c&&l&&l()}},t.createElement("div",(0,Oe.Z)({style:g,className:me()((0,I.Z)({},"".concat(s,"-holder-inner"),s)),ref:v},Z),d,R)))});Xe.displayName="Filler";var vt=Xe;function dt(e){var v=e.children,n=e.setRef,u=t.useCallback(function(f){n(f)},[]);return t.cloneElement(v,{ref:u})}function ht(e,v,n,u,f,d,s,l){var Z=l.getKey;return e.slice(v,n+1).map(function(h,R){var a=v+R,g=s(h,a,{style:{width:u},offsetX:f}),o=Z(h);return t.createElement(dt,{key:o,setRef:function(c){return d(h,c)}},g)})}function tr(e,v,n,u){var f=n-e,d=v-n,s=Math.min(f,d)*2;if(u<=s){var l=Math.floor(u/2);return u%2?n+l+1:n-l}return f>d?n-(u-d):n+(u-f)}function St(e,v,n){var u=e.length,f=v.length,d,s;if(u===0&&f===0)return null;u<f?(d=e,s=v):(d=v,s=e);var l={__EMPTY_ITEM__:!0};function Z(m){return m!==void 0?n(m):l}for(var h=null,R=Math.abs(u-f)!==1,a=0;a<s.length;a+=1){var g=Z(d[a]),o=Z(s[a]);if(g!==o){h=a,R=R||g!==Z(s[a+1]);break}}return h===null?null:{index:h,multiple:R}}function gt(e,v,n){var u=t.useState(e),f=(0,w.Z)(u,2),d=f[0],s=f[1],l=t.useState(null),Z=(0,w.Z)(l,2),h=Z[0],R=Z[1];return t.useEffect(function(){var a=St(d||[],e||[],v);(a==null?void 0:a.index)!==void 0&&(n==null||n(a.index),R(e[a.index])),s(e)},[e]),[h]}var k=C(75164),mt=(typeof navigator=="undefined"?"undefined":(0,Ce.Z)(navigator))==="object"&&/Firefox/i.test(navigator.userAgent),We=mt,Be=function(e,v,n,u){var f=(0,t.useRef)(!1),d=(0,t.useRef)(null);function s(){clearTimeout(d.current),f.current=!0,d.current=setTimeout(function(){f.current=!1},50)}var l=(0,t.useRef)({top:e,bottom:v,left:n,right:u});return l.current.top=e,l.current.bottom=v,l.current.left=n,l.current.right=u,function(Z,h){var R=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,a=Z?h<0&&l.current.left||h>0&&l.current.right:h<0&&l.current.top||h>0&&l.current.bottom;return R&&a?(clearTimeout(d.current),f.current=!1):(!a||f.current)&&s(),!f.current&&a}};function Rt(e,v,n,u,f,d,s){var l=(0,t.useRef)(0),Z=(0,t.useRef)(null),h=(0,t.useRef)(null),R=(0,t.useRef)(!1),a=Be(v,n,u,f);function g(S,b){k.Z.cancel(Z.current),l.current+=b,h.current=b,!a(!1,b)&&(We||S.preventDefault(),Z.current=(0,k.Z)(function(){var z=R.current?10:1;s(l.current*z),l.current=0}))}function o(S,b){s(b,!0),We||S.preventDefault()}var m=(0,t.useRef)(null),c=(0,t.useRef)(null);function M(S){if(e){k.Z.cancel(c.current),c.current=(0,k.Z)(function(){m.current=null},2);var b=S.deltaX,z=S.deltaY,U=S.shiftKey,F=b,p=z;(m.current==="sx"||!m.current&&U&&z&&!b)&&(F=z,p=0,m.current="sx");var B=Math.abs(F),N=Math.abs(p);m.current===null&&(m.current=d&&B>N?"x":"y"),m.current==="y"?g(S,p):o(S,F)}}function x(S){e&&(R.current=S.detail===h.current)}return[M,x]}function Mt(e,v,n,u){var f=t.useMemo(function(){return[new Map,[]]},[e,n.id,u]),d=(0,w.Z)(f,2),s=d[0],l=d[1],Z=function(R){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:R,g=s.get(R),o=s.get(a);if(g===void 0||o===void 0)for(var m=e.length,c=l.length;c<m;c+=1){var M,x=e[c],S=v(x);s.set(S,c);var b=(M=n.get(S))!==null&&M!==void 0?M:u;if(l[c]=(l[c-1]||0)+b,S===R&&(g=c),S===a&&(o=c),g!==void 0&&o!==void 0)break}return{top:l[g-1]||0,bottom:l[o]}};return Z}var Zt=C(34203),yt=C(15671),bt=C(43144),pt=function(){function e(){(0,yt.Z)(this,e),(0,I.Z)(this,"maps",void 0),(0,I.Z)(this,"id",0),this.maps=Object.create(null)}return(0,bt.Z)(e,[{key:"set",value:function(n,u){this.maps[n]=u,this.id+=1}},{key:"get",value:function(n){return this.maps[n]}}]),e}(),Et=pt;function xt(e,v,n){var u=t.useState(0),f=(0,w.Z)(u,2),d=f[0],s=f[1],l=(0,t.useRef)(new Map),Z=(0,t.useRef)(new Et),h=(0,t.useRef)();function R(){k.Z.cancel(h.current)}function a(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;R();var m=function(){l.current.forEach(function(M,x){if(M&&M.offsetParent){var S=(0,Zt.ZP)(M),b=S.offsetHeight;Z.current.get(x)!==b&&Z.current.set(x,S.offsetHeight)}}),s(function(M){return M+1})};o?m():h.current=(0,k.Z)(m)}function g(o,m){var c=e(o),M=l.current.get(c);m?(l.current.set(c,m),a()):l.current.delete(c),!M!=!m&&(m?v==null||v(o):n==null||n(o))}return(0,t.useEffect)(function(){return R},[]),[g,a,Z.current,d]}var Ve=14/15;function Lt(e,v,n){var u=(0,t.useRef)(!1),f=(0,t.useRef)(0),d=(0,t.useRef)(0),s=(0,t.useRef)(null),l=(0,t.useRef)(null),Z,h=function(o){if(u.current){var m=Math.ceil(o.touches[0].pageX),c=Math.ceil(o.touches[0].pageY),M=f.current-m,x=d.current-c,S=Math.abs(M)>Math.abs(x);S?f.current=m:d.current=c,n(S,S?M:x)&&o.preventDefault(),clearInterval(l.current),l.current=setInterval(function(){S?M*=Ve:x*=Ve;var b=Math.floor(S?M:x);(!n(S,b,!0)||Math.abs(b)<=.1)&&clearInterval(l.current)},16)}},R=function(){u.current=!1,Z()},a=function(o){Z(),o.touches.length===1&&!u.current&&(u.current=!0,f.current=Math.ceil(o.touches[0].pageX),d.current=Math.ceil(o.touches[0].pageY),s.current=o.target,s.current.addEventListener("touchmove",h),s.current.addEventListener("touchend",R))};Z=function(){s.current&&(s.current.removeEventListener("touchmove",h),s.current.removeEventListener("touchend",R))},(0,oe.Z)(function(){return e&&v.current.addEventListener("touchstart",a),function(){var g;(g=v.current)===null||g===void 0||g.removeEventListener("touchstart",a),Z(),clearInterval(l.current)}},[e])}var Ct=10;function zt(e,v,n,u,f,d,s,l){var Z=t.useRef(),h=t.useState(null),R=(0,w.Z)(h,2),a=R[0],g=R[1];return(0,oe.Z)(function(){if(a&&a.times<Ct){if(!e.current){g(function(D){return(0,P.Z)({},D)});return}d();var o=a.targetAlign,m=a.originAlign,c=a.index,M=a.offset,x=e.current.clientHeight,S=!1,b=o,z=null;if(x){for(var U=o||m,F=0,p=0,B=0,N=Math.min(v.length-1,c),K=0;K<=N;K+=1){var A=f(v[K]);p=F;var q=n.get(A);B=p+(q===void 0?u:q),F=B}for(var _=U==="top"?M:x-M,Y=N;Y>=0;Y-=1){var ne=f(v[Y]),$=n.get(ne);if($===void 0){S=!0;break}if(_-=$,_<=0)break}switch(U){case"top":z=p-M;break;case"bottom":z=B-x+M;break;default:{var ee=e.current.scrollTop,V=ee+x;p<ee?b="top":B>V&&(b="bottom")}}z!==null&&s(z),z!==a.lastTop&&(S=!0)}S&&g((0,P.Z)((0,P.Z)({},a),{},{times:a.times+1,targetAlign:b,lastTop:z}))}},[a,e.current]),function(o){if(o==null){l();return}if(k.Z.cancel(Z.current),typeof o=="number")s(o);else if(o&&(0,Ce.Z)(o)==="object"){var m,c=o.align;"index"in o?m=o.index:m=v.findIndex(function(S){return f(S)===o.key});var M=o.offset,x=M===void 0?0:M;g({times:0,index:m,offset:x,originAlign:c})}}}function ke(e,v){var n="touches"in e?e.touches[0]:e;return n[v?"pageX":"pageY"]}var Tt=t.forwardRef(function(e,v){var n=e.prefixCls,u=e.rtl,f=e.scrollOffset,d=e.scrollRange,s=e.onStartMove,l=e.onStopMove,Z=e.onScroll,h=e.horizontal,R=e.spinSize,a=e.containerSize,g=e.style,o=e.thumbStyle,m=t.useState(!1),c=(0,w.Z)(m,2),M=c[0],x=c[1],S=t.useState(null),b=(0,w.Z)(S,2),z=b[0],U=b[1],F=t.useState(null),p=(0,w.Z)(F,2),B=p[0],N=p[1],K=!u,A=t.useRef(),q=t.useRef(),_=t.useState(!1),Y=(0,w.Z)(_,2),ne=Y[0],$=Y[1],ee=t.useRef(),V=function(){clearTimeout(ee.current),$(!0),ee.current=setTimeout(function(){$(!1)},3e3)},D=d-a||0,ce=a-R||0,L=t.useMemo(function(){if(f===0||D===0)return 0;var O=f/D;return O*ce},[f,D,ce]),te=function(E){E.stopPropagation(),E.preventDefault()},ae=t.useRef({top:L,dragging:M,pageY:z,startTop:B});ae.current={top:L,dragging:M,pageY:z,startTop:B};var le=function(E){x(!0),U(ke(E,h)),N(ae.current.top),s(),E.stopPropagation(),E.preventDefault()};t.useEffect(function(){var O=function(ue){ue.preventDefault()},E=A.current,W=q.current;return E.addEventListener("touchstart",O),W.addEventListener("touchstart",le),function(){E.removeEventListener("touchstart",O),W.removeEventListener("touchstart",le)}},[]);var Re=t.useRef();Re.current=D;var fe=t.useRef();fe.current=ce,t.useEffect(function(){if(M){var O,E=function(ue){var se=ae.current,Ze=se.dragging,ye=se.pageY,be=se.startTop;if(k.Z.cancel(O),Ze){var pe=ke(ue,h)-ye,J=be;!K&&h?J-=pe:J+=pe;var ve=Re.current,Ee=fe.current,ze=Ee?J/Ee:0,re=Math.ceil(ze*ve);re=Math.max(re,0),re=Math.min(re,ve),O=(0,k.Z)(function(){Z(re,h)})}},W=function(){x(!1),l()};return window.addEventListener("mousemove",E),window.addEventListener("touchmove",E),window.addEventListener("mouseup",W),window.addEventListener("touchend",W),function(){window.removeEventListener("mousemove",E),window.removeEventListener("touchmove",E),window.removeEventListener("mouseup",W),window.removeEventListener("touchend",W),k.Z.cancel(O)}}},[M]),t.useEffect(function(){V()},[f]),t.useImperativeHandle(v,function(){return{delayHidden:V}});var H="".concat(n,"-scrollbar"),X={position:"absolute",visibility:ne?null:"hidden"},j={position:"absolute",background:"rgba(0, 0, 0, 0.5)",borderRadius:99,cursor:"pointer",userSelect:"none"};return h?(X.height=8,X.left=0,X.right=0,X.bottom=0,j.height="100%",j.width=R,K?j.left=L:j.right=L):(X.width=8,X.top=0,X.bottom=0,K?X.right=0:X.left=0,j.width="100%",j.height=R,j.top=L),t.createElement("div",{ref:A,className:me()(H,(0,I.Z)((0,I.Z)((0,I.Z)({},"".concat(H,"-horizontal"),h),"".concat(H,"-vertical"),!h),"".concat(H,"-visible"),ne)),style:(0,P.Z)((0,P.Z)({},X),g),onMouseDown:te,onMouseMove:V},t.createElement("div",{ref:q,className:me()("".concat(H,"-thumb"),(0,I.Z)({},"".concat(H,"-thumb-moving"),M)),style:(0,P.Z)((0,P.Z)({},j),o),onMouseDown:le}))}),je=Tt,wt=20;function Ke(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=e/v*e;return isNaN(n)&&(n=0),n=Math.max(n,wt),Math.floor(n)}var Dt=["prefixCls","className","height","itemHeight","fullHeight","style","data","children","itemKey","virtual","direction","scrollWidth","component","onScroll","onVirtualScroll","onVisibleChange","innerProps","extraRender","styles"],Ht=[],Pt={overflowY:"auto",overflowAnchor:"none"};function It(e,v){var n=e.prefixCls,u=n===void 0?"rc-virtual-list":n,f=e.className,d=e.height,s=e.itemHeight,l=e.fullHeight,Z=l===void 0?!0:l,h=e.style,R=e.data,a=e.children,g=e.itemKey,o=e.virtual,m=e.direction,c=e.scrollWidth,M=e.component,x=M===void 0?"div":M,S=e.onScroll,b=e.onVirtualScroll,z=e.onVisibleChange,U=e.innerProps,F=e.extraRender,p=e.styles,B=(0,ft.Z)(e,Dt),N=t.useCallback(function(i){return typeof g=="function"?g(i):i==null?void 0:i[g]},[g]),K=xt(N,null,null),A=(0,w.Z)(K,4),q=A[0],_=A[1],Y=A[2],ne=A[3],$=!!(o!==!1&&d&&s),ee=t.useMemo(function(){return Object.values(Y.maps).reduce(function(i,r){return i+r},0)},[Y.id,Y.maps]),V=$&&R&&(Math.max(s*R.length,ee)>d||!!c),D=m==="rtl",ce=me()(u,(0,I.Z)({},"".concat(u,"-rtl"),D),f),L=R||Ht,te=(0,t.useRef)(),ae=(0,t.useRef)(),le=(0,t.useRef)(),Re=(0,t.useState)(0),fe=(0,w.Z)(Re,2),H=fe[0],X=fe[1],j=(0,t.useState)(0),O=(0,w.Z)(j,2),E=O[0],W=O[1],Me=(0,t.useState)(!1),ue=(0,w.Z)(Me,2),se=ue[0],Ze=ue[1],ye=function(){Ze(!0)},be=function(){Ze(!1)},pe={getKey:N};function J(i){X(function(r){var y;typeof i=="function"?y=i(r):y=i;var T=Vt(y);return te.current.scrollTop=T,T})}var ve=(0,t.useRef)({start:0,end:L.length}),Ee=(0,t.useRef)(),ze=gt(L,N),re=(0,w.Z)(ze,1),Nt=re[0];Ee.current=Nt;var xe=t.useMemo(function(){if(!$)return{scrollHeight:void 0,start:0,end:L.length-1,offset:void 0};if(!V){var i;return{scrollHeight:((i=ae.current)===null||i===void 0?void 0:i.offsetHeight)||0,start:0,end:L.length-1,offset:void 0}}for(var r=0,y,T,Q,Qt=L.length,ge=0;ge<Qt;ge+=1){var qt=L[ge],_t=N(qt),ot=Y.get(_t),$e=r+(ot===void 0?s:ot);$e>=H&&y===void 0&&(y=ge,T=r),$e>H+d&&Q===void 0&&(Q=ge),r=$e}return y===void 0&&(y=0,T=0,Q=Math.ceil(d/s)),Q===void 0&&(Q=L.length-1),Q=Math.min(Q+1,L.length-1),{scrollHeight:r,start:y,end:Q,offset:T}},[V,$,H,L,ne,d]),ie=xe.scrollHeight,de=xe.start,he=xe.end,Ge=xe.offset;ve.current.start=de,ve.current.end=he;var Yt=t.useState({width:0,height:d}),Ue=(0,w.Z)(Yt,2),G=Ue[0],Ft=Ue[1],Xt=function(r){Ft({width:r.width||r.offsetWidth,height:r.height||r.offsetHeight})},Je=(0,t.useRef)(),Qe=(0,t.useRef)(),Wt=t.useMemo(function(){return Ke(G.width,c)},[G.width,c]),Bt=t.useMemo(function(){return Ke(G.height,ie)},[G.height,ie]),Te=ie-d,we=(0,t.useRef)(Te);we.current=Te;function Vt(i){var r=i;return Number.isNaN(we.current)||(r=Math.min(r,we.current)),r=Math.max(r,0),r}var qe=H<=0,_e=H>=Te,et=E<=0,tt=E>=c,kt=Be(qe,_e,et,tt),De=function(){return{x:D?-E:E,y:H}},He=(0,t.useRef)(De()),Le=(0,Ye.zX)(function(i){if(b){var r=(0,P.Z)((0,P.Z)({},De()),i);(He.current.x!==r.x||He.current.y!==r.y)&&(b(r),He.current=r)}});function rt(i,r){var y=i;r?((0,Fe.flushSync)(function(){W(y)}),Le()):J(y)}function jt(i){var r=i.currentTarget.scrollTop;r!==H&&J(r),S==null||S(i),Le()}var Pe=function(r){var y=r,T=c?c-G.width:0;return y=Math.max(y,0),y=Math.min(y,T),y},Kt=(0,Ye.zX)(function(i,r){r?((0,Fe.flushSync)(function(){W(function(y){var T=y+(D?-i:i);return Pe(T)})}),Le()):J(function(y){var T=y+i;return T})}),At=Rt($,qe,_e,et,tt,!!c,Kt),nt=(0,w.Z)(At,2),Ie=nt[0],at=nt[1];Lt($,te,function(i,r,y){return kt(i,r,y)?!1:(Ie({preventDefault:function(){},deltaX:i?r:0,deltaY:i?0:r}),!0)}),(0,oe.Z)(function(){function i(y){$&&y.preventDefault()}var r=te.current;return r.addEventListener("wheel",Ie),r.addEventListener("DOMMouseScroll",at),r.addEventListener("MozMousePixelScroll",i),function(){r.removeEventListener("wheel",Ie),r.removeEventListener("DOMMouseScroll",at),r.removeEventListener("MozMousePixelScroll",i)}},[$]),(0,oe.Z)(function(){if(c){var i=Pe(E);W(i),Le({x:i})}},[G.width,c]);var lt=function(){var r,y;(r=Je.current)===null||r===void 0||r.delayHidden(),(y=Qe.current)===null||y===void 0||y.delayHidden()},ut=zt(te,L,Y,s,N,function(){return _(!0)},J,lt);t.useImperativeHandle(v,function(){return{nativeElement:le.current,getScrollInfo:De,scrollTo:function(r){function y(T){return T&&(0,Ce.Z)(T)==="object"&&("left"in T||"top"in T)}y(r)?(r.left!==void 0&&W(Pe(r.left)),ut(r.top)):ut(r)}}}),(0,oe.Z)(function(){if(z){var i=L.slice(de,he+1);z(i,L)}},[de,he,L]);var Gt=Mt(L,N,Y,s),Ut=F==null?void 0:F({start:de,end:he,virtual:V,offsetX:E,offsetY:Ge,rtl:D,getSize:Gt}),Jt=ht(L,de,he,c,E,q,a,pe),Se=null;d&&(Se=(0,P.Z)((0,I.Z)({},Z?"height":"maxHeight",d),Pt),$&&(Se.overflowY="hidden",c&&(Se.overflowX="hidden"),se&&(Se.pointerEvents="none")));var it={};return D&&(it.dir="rtl"),t.createElement("div",(0,Oe.Z)({ref:le,style:(0,P.Z)((0,P.Z)({},h),{},{position:"relative"}),className:ce},it,B),t.createElement(Ne.Z,{onResize:Xt},t.createElement(x,{className:"".concat(u,"-holder"),style:Se,ref:te,onScroll:jt,onMouseEnter:lt},t.createElement(vt,{prefixCls:u,height:ie,offsetX:E,offsetY:Ge,scrollWidth:c,onInnerResize:_,ref:ae,innerProps:U,rtl:D,extra:Ut},Jt))),V&&ie>d&&t.createElement(je,{ref:Je,prefixCls:u,scrollOffset:H,scrollRange:ie,rtl:D,onScroll:rt,onStartMove:ye,onStopMove:be,spinSize:Bt,containerSize:G.height,style:p==null?void 0:p.verticalScrollBar,thumbStyle:p==null?void 0:p.verticalScrollBarThumb}),V&&c>G.width&&t.createElement(je,{ref:Qe,prefixCls:u,scrollOffset:E,scrollRange:c,rtl:D,onScroll:rt,onStartMove:ye,onStopMove:be,spinSize:Wt,containerSize:G.width,horizontal:!0,style:p==null?void 0:p.horizontalScrollBar,thumbStyle:p==null?void 0:p.horizontalScrollBarThumb}))}var Ae=t.forwardRef(It);Ae.displayName="List";var $t=Ae,Ot=$t}}]);