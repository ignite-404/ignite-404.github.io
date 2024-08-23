"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2118],{22638:function(W,A,m){var a=m(67294),g=m(92770),w=m(31663);function b(P){w.Z&&((0,g.mf)(P)||console.error("useMemoizedFn expected parameter is a function, got ".concat(typeof P)));var O=(0,a.useRef)(P);O.current=(0,a.useMemo)(function(){return P},[P]);var C=(0,a.useRef)();return C.current||(C.current=function(){for(var R=[],_=0;_<arguments.length;_++)R[_]=arguments[_];return O.current.apply(this,R)}),C.current}A.Z=b},68421:function(W,A,m){m.d(A,{Z:function(){return Be}});var a=m(97582),g=m(67294),w=m(77598),b=function(e,r){var n=r.manual,t=r.ready,u=t===void 0?!0:t,o=r.defaultParams,s=o===void 0?[]:o,v=r.refreshDeps,c=v===void 0?[]:v,l=r.refreshDepsAction,h=(0,g.useRef)(!1);return h.current=!1,(0,w.Z)(function(){!n&&u&&(h.current=!0,e.run.apply(e,(0,a.__spreadArray)([],(0,a.__read)(s),!1)))},[u]),(0,w.Z)(function(){h.current||n||(h.current=!0,l?l():e.refresh())},(0,a.__spreadArray)([],(0,a.__read)(c),!1)),{onBefore:function(){if(!u)return{stopNow:!0}}}};b.onInit=function(e){var r=e.ready,n=r===void 0?!0:r,t=e.manual;return{loading:!t&&n}};var P=b,O=m(8224);function C(e,r){var n=(0,g.useRef)({deps:r,obj:void 0,initialized:!1}).current;return(n.initialized===!1||!(0,O.Z)(n.deps,r))&&(n.deps=r,n.obj=e(),n.initialized=!0),n.obj}var R=m(45210),_=new Map,X=function(e,r,n){var t=_.get(e);t!=null&&t.timer&&clearTimeout(t.timer);var u=void 0;r>-1&&(u=setTimeout(function(){_.delete(e)},r)),_.set(e,(0,a.__assign)((0,a.__assign)({},n),{timer:u}))},Y=function(e){return _.get(e)},Le=function(e){if(e){var r=Array.isArray(e)?e:[e];r.forEach(function(n){return _.delete(n)})}else _.clear()},B=new Map,$=function(e){return B.get(e)},I=function(e,r){B.set(e,r),r.then(function(n){return B.delete(e),n}).catch(function(){B.delete(e)})},E={},q=function(e,r){E[e]&&E[e].forEach(function(n){return n(r)})},H=function(e,r){return E[e]||(E[e]=[]),E[e].push(r),function(){var t=E[e].indexOf(r);E[e].splice(t,1)}},k=function(e,r){var n=r.cacheKey,t=r.cacheTime,u=t===void 0?5*60*1e3:t,o=r.staleTime,s=o===void 0?0:o,v=r.setCache,c=r.getCache,l=(0,g.useRef)(),h=(0,g.useRef)(),i=function(f,d){v?v(d):X(f,u,d),q(f,d.data)},p=function(f,d){return d===void 0&&(d=[]),c?c(d):Y(f)};return C(function(){if(n){var f=p(n);f&&Object.hasOwnProperty.call(f,"data")&&(e.state.data=f.data,e.state.params=f.params,(s===-1||new Date().getTime()-f.time<=s)&&(e.state.loading=!1)),l.current=H(n,function(d){e.setState({data:d})})}},[]),(0,R.Z)(function(){var f;(f=l.current)===null||f===void 0||f.call(l)}),n?{onBefore:function(f){var d=p(n,f);return!d||!Object.hasOwnProperty.call(d,"data")?{}:s===-1||new Date().getTime()-d.time<=s?{loading:!1,data:d==null?void 0:d.data,error:void 0,returnNow:!0}:{data:d==null?void 0:d.data,error:void 0}},onRequest:function(f,d){var y=$(n);return y&&y!==h.current?{servicePromise:y}:(y=f.apply(void 0,(0,a.__spreadArray)([],(0,a.__read)(d),!1)),h.current=y,I(n,y),{servicePromise:y})},onSuccess:function(f,d){var y;n&&((y=l.current)===null||y===void 0||y.call(l),i(n,{data:f,params:d,time:new Date().getTime()}),l.current=H(n,function(x){e.setState({data:x})}))},onMutate:function(f){var d;n&&((d=l.current)===null||d===void 0||d.call(l),i(n,{data:f,params:e.state.params,time:new Date().getTime()}),l.current=H(n,function(y){e.setState({data:y})}))}}:{}},ee=k,re=m(23279),ne=m.n(re),te=function(e,r){var n=r.debounceWait,t=r.debounceLeading,u=r.debounceTrailing,o=r.debounceMaxWait,s=(0,g.useRef)(),v=(0,g.useMemo)(function(){var c={};return t!==void 0&&(c.leading=t),u!==void 0&&(c.trailing=u),o!==void 0&&(c.maxWait=o),c},[t,u,o]);return(0,g.useEffect)(function(){if(n){var c=e.runAsync.bind(e);return s.current=ne()(function(l){l()},n,v),e.runAsync=function(){for(var l=[],h=0;h<arguments.length;h++)l[h]=arguments[h];return new Promise(function(i,p){var f;(f=s.current)===null||f===void 0||f.call(s,function(){c.apply(void 0,(0,a.__spreadArray)([],(0,a.__read)(l),!1)).then(i).catch(p)})})},function(){var l;(l=s.current)===null||l===void 0||l.cancel(),e.runAsync=c}}},[n,v]),n?{onCancel:function(){var c;(c=s.current)===null||c===void 0||c.cancel()}}:{}},ae=te,ue=function(e,r){var n=r.loadingDelay,t=r.ready,u=(0,g.useRef)();if(!n)return{};var o=function(){u.current&&clearTimeout(u.current)};return{onBefore:function(){return o(),t!==!1&&(u.current=setTimeout(function(){e.setState({loading:!0})},n)),{loading:!1}},onFinally:function(){o()},onCancel:function(){o()}}},ie=ue,L=m(52982);function U(){return L.Z?document.visibilityState!=="hidden":!0}var D=[];function oe(e){return D.push(e),function(){var n=D.indexOf(e);D.splice(n,1)}}if(L.Z){var se=function(){if(U())for(var e=0;e<D.length;e++){var r=D[e];r()}};window.addEventListener("visibilitychange",se,!1)}var ce=oe,fe=function(e,r){var n=r.pollingInterval,t=r.pollingWhenHidden,u=t===void 0?!0:t,o=r.pollingErrorRetryCount,s=o===void 0?-1:o,v=(0,g.useRef)(),c=(0,g.useRef)(),l=(0,g.useRef)(0),h=function(){var i;v.current&&clearTimeout(v.current),(i=c.current)===null||i===void 0||i.call(c)};return(0,w.Z)(function(){n||h()},[n]),n?{onBefore:function(){h()},onError:function(){l.current+=1},onSuccess:function(){l.current=0},onFinally:function(){s===-1||s!==-1&&l.current<=s?v.current=setTimeout(function(){!u&&!U()?c.current=ce(function(){e.refresh()}):e.refresh()},n):l.current=0},onCancel:function(){h()}}:{}},le=fe;function de(e,r){var n=!1;return function(){for(var t=[],u=0;u<arguments.length;u++)t[u]=arguments[u];n||(n=!0,e.apply(void 0,(0,a.__spreadArray)([],(0,a.__read)(t),!1)),setTimeout(function(){n=!1},r))}}function ve(){return L.Z&&typeof navigator.onLine!="undefined"?navigator.onLine:!0}var S=[];function ge(e){return S.push(e),function(){var n=S.indexOf(e);n>-1&&S.splice(n,1)}}if(L.Z){var V=function(){if(!(!U()||!ve()))for(var e=0;e<S.length;e++){var r=S[e];r()}};window.addEventListener("visibilitychange",V,!1),window.addEventListener("focus",V,!1)}var me=ge,he=function(e,r){var n=r.refreshOnWindowFocus,t=r.focusTimespan,u=t===void 0?5e3:t,o=(0,g.useRef)(),s=function(){var v;(v=o.current)===null||v===void 0||v.call(o)};return(0,g.useEffect)(function(){if(n){var v=de(e.refresh.bind(e),u);o.current=me(function(){v()})}return function(){s()}},[n,u]),(0,R.Z)(function(){s()}),{}},pe=he,ye=function(e,r){var n=r.retryInterval,t=r.retryCount,u=(0,g.useRef)(),o=(0,g.useRef)(0),s=(0,g.useRef)(!1);return t?{onBefore:function(){s.current||(o.current=0),s.current=!1,u.current&&clearTimeout(u.current)},onSuccess:function(){o.current=0},onError:function(){if(o.current+=1,t===-1||o.current<=t){var v=n!=null?n:Math.min(1e3*Math.pow(2,o.current),3e4);u.current=setTimeout(function(){s.current=!0,e.refresh()},v)}else o.current=0},onCancel:function(){o.current=0,u.current&&clearTimeout(u.current)}}:{}},be=ye,_e=m(23493),Pe=m.n(_e),Re=function(e,r){var n=r.throttleWait,t=r.throttleLeading,u=r.throttleTrailing,o=(0,g.useRef)(),s={};return t!==void 0&&(s.leading=t),u!==void 0&&(s.trailing=u),(0,g.useEffect)(function(){if(n){var v=e.runAsync.bind(e);return o.current=Pe()(function(c){c()},n,s),e.runAsync=function(){for(var c=[],l=0;l<arguments.length;l++)c[l]=arguments[l];return new Promise(function(h,i){var p;(p=o.current)===null||p===void 0||p.call(o,function(){v.apply(void 0,(0,a.__spreadArray)([],(0,a.__read)(c),!1)).then(h).catch(i)})})},function(){var c;e.runAsync=v,(c=o.current)===null||c===void 0||c.cancel()}}},[n,t,u]),n?{onCancel:function(){var v;(v=o.current)===null||v===void 0||v.cancel()}}:{}},Ae=Re,we=m(3930),M=m(22638),K=m(92770),G=m(31663),Ce=function(e){G.Z&&((0,K.mf)(e)||console.error('useMount: parameter `fn` expected to be a function, but got "'.concat(typeof e,'".'))),(0,g.useEffect)(function(){e==null||e()},[])},Ee=Ce,Te=function(){var e=(0,a.__read)((0,g.useState)({}),2),r=e[1];return(0,g.useCallback)(function(){return r({})},[])},Ze=Te,Oe=function(){function e(r,n,t,u){u===void 0&&(u={}),this.serviceRef=r,this.options=n,this.subscribe=t,this.initState=u,this.count=0,this.state={loading:!1,params:void 0,data:void 0,error:void 0},this.state=(0,a.__assign)((0,a.__assign)((0,a.__assign)({},this.state),{loading:!n.manual}),u)}return e.prototype.setState=function(r){r===void 0&&(r={}),this.state=(0,a.__assign)((0,a.__assign)({},this.state),r),this.subscribe()},e.prototype.runPluginHandler=function(r){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];var u=this.pluginImpls.map(function(o){var s;return(s=o[r])===null||s===void 0?void 0:s.call.apply(s,(0,a.__spreadArray)([o],(0,a.__read)(n),!1))}).filter(Boolean);return Object.assign.apply(Object,(0,a.__spreadArray)([{}],(0,a.__read)(u),!1))},e.prototype.runAsync=function(){for(var r,n,t,u,o,s,v,c,l,h,i=[],p=0;p<arguments.length;p++)i[p]=arguments[p];return(0,a.__awaiter)(this,void 0,void 0,function(){var f,d,y,x,N,J,z,j,T,Z,Q;return(0,a.__generator)(this,function(F){switch(F.label){case 0:if(this.count+=1,f=this.count,d=this.runPluginHandler("onBefore",i),y=d.stopNow,x=y===void 0?!1:y,N=d.returnNow,J=N===void 0?!1:N,z=(0,a.__rest)(d,["stopNow","returnNow"]),x)return[2,new Promise(function(){})];if(this.setState((0,a.__assign)({loading:!0,params:i},z)),J)return[2,Promise.resolve(z.data)];(n=(r=this.options).onBefore)===null||n===void 0||n.call(r,i),F.label=1;case 1:return F.trys.push([1,3,,4]),j=this.runPluginHandler("onRequest",this.serviceRef.current,i).servicePromise,j||(j=(Q=this.serviceRef).current.apply(Q,(0,a.__spreadArray)([],(0,a.__read)(i),!1))),[4,j];case 2:return T=F.sent(),f!==this.count?[2,new Promise(function(){})]:(this.setState({data:T,error:void 0,loading:!1}),(u=(t=this.options).onSuccess)===null||u===void 0||u.call(t,T,i),this.runPluginHandler("onSuccess",T,i),(s=(o=this.options).onFinally)===null||s===void 0||s.call(o,i,T,void 0),f===this.count&&this.runPluginHandler("onFinally",i,T,void 0),[2,T]);case 3:if(Z=F.sent(),f!==this.count)return[2,new Promise(function(){})];throw this.setState({error:Z,loading:!1}),(c=(v=this.options).onError)===null||c===void 0||c.call(v,Z,i),this.runPluginHandler("onError",Z,i),(h=(l=this.options).onFinally)===null||h===void 0||h.call(l,i,void 0,Z),f===this.count&&this.runPluginHandler("onFinally",i,void 0,Z),Z;case 4:return[2]}})})},e.prototype.run=function(){for(var r=this,n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];this.runAsync.apply(this,(0,a.__spreadArray)([],(0,a.__read)(n),!1)).catch(function(u){r.options.onError||console.error(u)})},e.prototype.cancel=function(){this.count+=1,this.setState({loading:!1}),this.runPluginHandler("onCancel")},e.prototype.refresh=function(){this.run.apply(this,(0,a.__spreadArray)([],(0,a.__read)(this.state.params||[]),!1))},e.prototype.refreshAsync=function(){return this.runAsync.apply(this,(0,a.__spreadArray)([],(0,a.__read)(this.state.params||[]),!1))},e.prototype.mutate=function(r){var n=(0,K.mf)(r)?r(this.state.data):r;this.runPluginHandler("onMutate",n),this.setState({data:n})},e}(),Me=Oe;function De(e,r,n){r===void 0&&(r={}),n===void 0&&(n=[]);var t=r.manual,u=t===void 0?!1:t,o=r.ready,s=o===void 0?!0:o,v=(0,a.__rest)(r,["manual","ready"]);G.Z&&r.defaultParams&&!Array.isArray(r.defaultParams)&&console.warn("expected defaultParams is array, got ".concat(typeof r.defaultParams));var c=(0,a.__assign)({manual:u,ready:s},v),l=(0,we.Z)(e),h=Ze(),i=C(function(){var p=n.map(function(f){var d;return(d=f==null?void 0:f.onInit)===null||d===void 0?void 0:d.call(f,c)}).filter(Boolean);return new Me(l,c,h,Object.assign.apply(Object,(0,a.__spreadArray)([{}],(0,a.__read)(p),!1)))},[]);return i.options=c,i.pluginImpls=n.map(function(p){return p(i,c)}),Ee(function(){if(!u&&s){var p=i.state.params||r.defaultParams||[];i.run.apply(i,(0,a.__spreadArray)([],(0,a.__read)(p),!1))}}),(0,R.Z)(function(){i.cancel()}),{loading:i.state.loading,data:i.state.data,error:i.state.error,params:i.state.params||[],cancel:(0,M.Z)(i.cancel.bind(i)),refresh:(0,M.Z)(i.refresh.bind(i)),refreshAsync:(0,M.Z)(i.refreshAsync.bind(i)),run:(0,M.Z)(i.run.bind(i)),runAsync:(0,M.Z)(i.runAsync.bind(i)),mutate:(0,M.Z)(i.mutate.bind(i))}}var Se=De;function Fe(e,r,n){return Se(e,r,(0,a.__spreadArray)((0,a.__spreadArray)([],(0,a.__read)(n||[]),!1),[ae,ie,le,pe,Ae,P,ee,be],!1))}var We=Fe,Be=We},77598:function(W,A,m){m.d(A,{Z:function(){return b}});var a=m(67294),g=function(P){return function(O,C){var R=(0,a.useRef)(!1);P(function(){return function(){R.current=!1}},[]),P(function(){if(!R.current)R.current=!0;else return O()},C)}},w=null,b=g(a.useEffect)},8224:function(W,A,m){m.d(A,{Z:function(){return a}});function a(g,w){if(g===w)return!0;for(var b=0;b<g.length;b++)if(!Object.is(g[b],w[b]))return!1;return!0}},52982:function(W,A){var m=!!(typeof window!="undefined"&&window.document&&window.document.createElement);A.Z=m}}]);