"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4073],{68315:function(m,u,n){n.r(u);var i=n(49091),s=n(47650),c=n(35291),f=n(67294),e=n(42838),r=n(85893);u.default=function(){var t=(0,s.TH)(),o=(0,c.dD)(t.search),a=o==null?void 0:o.url;return(0,f.useEffect)(function(){console.log(o)},[o]),(0,e.Wq)(a)?(0,r.jsx)("h1",{children:"wrong url"}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(i.Z,{src:a})})}},49091:function(m,u,n){n.d(u,{Z:function(){return L}});var i=n(42122),s=n.n(i),c=n(27424),f=n.n(c),e=n(67294),r=n(57381),t=n(22638),o=n(92770),a=function(g,l){var M=(0,t.Z)(g),v=(0,e.useRef)(null),E=(0,e.useCallback)(function(){v.current&&clearTimeout(v.current)},[]);return(0,e.useEffect)(function(){if(!(!(0,o.hj)(l)||l<0))return v.current=setTimeout(M,l),E},[l]),E},T=a,h=n(85893),L=function(g){var l=(0,e.useRef)(null),M=(0,e.useState)(1e3),v=f()(M,2),E=v[0],A=v[1],j=(0,e.useState)(!0),P=f()(j,2),C=P[0],D=P[1],R=function(){D(!1);try{var d,S=((d=l.current)===null||d===void 0||(d=d.contentWindow)===null||d===void 0?void 0:d.document.body.scrollHeight)||0}catch(y){console.log("set-iframe-height",y)}};return T(function(){D(!1)},3e3),(0,h.jsx)(r.Z,{spinning:C,tip:(0,h.jsx)("span",{className:"text-overline",children:"loading..."}),size:"large",children:(0,h.jsx)("iframe",s()({ref:l,onResize:function(){return R()},onLoad:function(){return R()},onLoadStart:function(){return D(!0)},width:"100%",height:E,style:{width:"100%",overflow:"auto"},className:"scrollbar-hide border-none"},g))})}},22638:function(m,u,n){var i=n(67294),s=n(92770),c=n(31663);function f(e){c.Z&&((0,s.mf)(e)||console.error("useMemoizedFn expected parameter is a function, got ".concat(typeof e)));var r=(0,i.useRef)(e);r.current=(0,i.useMemo)(function(){return e},[e]);var t=(0,i.useRef)();return t.current||(t.current=function(){for(var o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];return r.current.apply(this,o)}),t.current}u.Z=f},92770:function(m,u,n){n.d(u,{G7:function(){return r},hj:function(){return e},mf:function(){return s}});var i=function(t){return t!==null&&typeof t=="object"},s=function(t){return typeof t=="function"},c=function(t){return typeof t=="string"},f=function(t){return typeof t=="boolean"},e=function(t){return typeof t=="number"},r=function(t){return typeof t=="undefined"}},31663:function(m,u){var n=!1;u.Z=n}}]);
