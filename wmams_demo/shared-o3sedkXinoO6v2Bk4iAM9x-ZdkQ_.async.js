(self.webpackChunk=self.webpackChunk||[]).push([[2825],{8045:function(se,k,s){"use strict";var Z=s(42122),P=s.n(Z),$=s(14726),S=s(67294),M=s(85893);k.Z=function(x){var z=x.loading,W=x.inputProps,F=x.onSelect,H=x.uploadButtonProps,U=(0,S.useRef)(null);return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)("div",{style:{display:"none"},children:(0,M.jsx)("input",P()(P()({ref:U,type:"file",multiple:!1},W),{},{onChange:function(p){try{var A=p.target.files;A&&F&&F(A)}finally{U.current&&(U.current.value="",U.current.files=null)}}}))}),(0,M.jsx)($.ZP,P()(P()({size:"small",loading:z,type:"dashed"},H),{},{onClick:function(){var p;(p=U.current)===null||p===void 0||p.click()},children:"\u9009\u62E9\u56FE\u7247"}))]})}},6786:function(se,k,s){"use strict";var Z=s(17061),P=s.n(Z),$=s(17156),S=s.n($),M=s(42122),x=s.n(M),z=s(98163),W=s(45360),F=s(14726),H=s(78957),U=s(85134),V=s(55932),p=s(55793),A=s(42838),Q=s(8045),B=s(68421),h=s(85893);k.Z=function(u){var E=u.data,m=u.ok,C=u.remove,_=u.loadingSave,R=u.width,X=u.defaultImage,d=u.imageProps,ce=u.uploadButtonProps,ue=u.removeButtonProps,G=(0,V.Kk)(E,{width:R||100}),fe=function(){var K=G||X;return(0,A.Wq)(K)?null:(0,h.jsx)(z.Z,x()({src:K||"",alt:"",width:R||50},d))},_e=function(){var I=S()(P()().mark(function K(L){var ee;return P()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,(0,p.Or)(L.name)){e.next=4;break}return W.ZP.error("\u53EA\u652F\u6301 ".concat((0,p.MU)().join("\u3001")," \u683C\u5F0F\u7684\u56FE\u7247")),e.abrupt("return");case 4:return e.next=6,(0,p.yE)(L,U.v.upload.maxSize);case 6:if(L=e.sent,!(L.size>U.v.upload.maxSize)){e.next=10;break}return W.ZP.error("\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC71MB"),e.abrupt("return");case 10:return e.next=12,(0,p.ku)(L);case 12:ee=e.sent,ee&&m&&m(ee),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0),W.ZP.error("\u4E0A\u4F20\u9047\u5230\u9519\u8BEF");case 20:case"end":return e.stop()}},K,null,[[0,16]])}));return function(L){return I.apply(this,arguments)}}(),le=(0,B.Z)(_e,{manual:!0}),q=function(){return(0,A.Wq)(G)||!C?null:(0,h.jsx)(F.ZP,x()(x()({size:"small",type:"dashed",danger:!0,onClick:function(){confirm("\u5220\u9664\uFF1F")&&C&&C()}},ue),{},{children:"\u79FB\u9664\u56FE\u7247"}))};return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(H.Z,{direction:"horizontal",children:[fe(),(0,h.jsxs)(H.Z,{direction:"vertical",children:[(0,h.jsx)(Q.Z,{loading:_||le.loading,inputProps:{accept:"image/*",multiple:!1},onSelect:function(K){var L=K.item(0);L&&le.run(L)},uploadButtonProps:ce}),q()]})]})})}},55793:function(se,k,s){"use strict";s.d(k,{MU:function(){return F},Or:function(){return H},jP:function(){return Q},ku:function(){return p},yE:function(){return V}});var Z=s(17061),P=s.n(Z),$=s(17156),S=s.n($),M=s(76857),x=s(42838),z=s(98005),W=s.n(z),F=function(){return["jpg","jpeg","png","gif"]},H=function(h){var u,E=((u=(0,x.mD)(h))===null||u===void 0?void 0:u.toLowerCase())||"";return F().indexOf(E)>=0},U=function(h,u,E,m){return new Promise(function(C,_){var R=new(W())(h,{maxHeight:u,maxWidth:E,quality:m,success:function(d){C(d)},error:function(d){_(d)}});console.log(R)})},V=function(){var B=S()(P()().mark(function h(u,E){var m,C,_,R;return P()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(!(u.size<=E)){d.next=2;break}return d.abrupt("return",u);case 2:return d.next=4,U(u,void 0,void 0,.9);case 4:if(u=d.sent,!(u.size<=E)){d.next=7;break}return d.abrupt("return",u);case 7:m=5,C=300,_=1e3,R=0;case 11:if(!(++R<=m)){d.next=22;break}return d.next=14,U(u,_,_,1);case 14:if(u=d.sent,!(u.size<=E)){d.next=17;break}return d.abrupt("return",u);case 17:if(_-=C,!(_<=0)){d.next=20;break}return d.abrupt("break",22);case 20:d.next=11;break;case 22:return d.abrupt("return",u);case 23:case"end":return d.stop()}},h)}));return function(u,E){return B.apply(this,arguments)}}(),p=function(){var B=S()(P()().mark(function h(u){var E,m;return P()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,A([u]);case 2:if(E=_.sent,m=E.at(0),m){_.next=6;break}throw new Error("response error");case 6:return _.abrupt("return",m);case 7:case"end":return _.stop()}},h)}));return function(u){return B.apply(this,arguments)}}(),A=function(){var B=S()(P()().mark(function h(u){var E,m;return P()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return E=new FormData,u.forEach(function(R,X){E.append("formFileCollection",R,R.name)}),_.next=4,M.M.post("/api/platform/storage/upload",E);case 4:if(m=_.sent,!m.data.Error){_.next=7;break}throw new Error(m.data.Error.Message||"upload error");case 7:return _.abrupt("return",m.data.Data||[]);case 8:case"end":return _.stop()}},h)}));return function(u){return B.apply(this,arguments)}}(),Q=function(h){return new Promise(function(u,E){var m=new FileReader;m.onload=function(){u(m.result)},m.onerror=function(C){E(C)},m.readAsDataURL(h)})}},98005:function(se){(function(k,s){se.exports=s()})(this,function(){"use strict";function k(a,e){var r=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable})),r.push.apply(r,t)}return r}function s(a){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?k(Object(r),!0).forEach(function(t){S(a,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(r,t))})}return a}function Z(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function P(a,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(a,z(t.key),t)}}function $(a,e,r){return e&&P(a.prototype,e),r&&P(a,r),Object.defineProperty(a,"prototype",{writable:!1}),a}function S(a,e,r){return e=z(e),e in a?Object.defineProperty(a,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[e]=r,a}function M(){return M=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(a[t]=r[t])}return a},M.apply(this,arguments)}function x(a,e){if(typeof a!="object"||a===null)return a;var r=a[Symbol.toPrimitive];if(r!==void 0){var t=r.call(a,e||"default");if(typeof t!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(a)}function z(a){var e=x(a,"string");return typeof e=="symbol"?e:String(e)}var W={exports:{}};(function(a){typeof window!="undefined"&&function(e){var r=e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype,t=e.Blob&&function(){try{return!!new Blob}catch(l){return!1}}(),n=t&&e.Uint8Array&&function(){try{return new Blob([new Uint8Array(100)]).size===100}catch(l){return!1}}(),i=e.BlobBuilder||e.WebKitBlobBuilder||e.MozBlobBuilder||e.MSBlobBuilder,v=/^data:((.*?)(;charset=.*?)?)(;base64)?,/,f=(t||i)&&e.atob&&e.ArrayBuffer&&e.Uint8Array&&function(l){var c,g,b,T,y,o,j,D,N;if(c=l.match(v),!c)throw new Error("invalid data URI");for(g=c[2]?c[1]:"text/plain"+(c[3]||";charset=US-ASCII"),b=!!c[4],T=l.slice(c[0].length),b?y=atob(T):y=decodeURIComponent(T),o=new ArrayBuffer(y.length),j=new Uint8Array(o),D=0;D<y.length;D+=1)j[D]=y.charCodeAt(D);return t?new Blob([n?j:o],{type:g}):(N=new i,N.append(o),N.getBlob(g))};e.HTMLCanvasElement&&!r.toBlob&&(r.mozGetAsFile?r.toBlob=function(l,c,g){var b=this;setTimeout(function(){g&&r.toDataURL&&f?l(f(b.toDataURL(c,g))):l(b.mozGetAsFile("blob",c))})}:r.toDataURL&&f&&(r.msToBlob?r.toBlob=function(l,c,g){var b=this;setTimeout(function(){(c&&c!=="image/png"||g)&&r.toDataURL&&f?l(f(b.toDataURL(c,g))):l(b.msToBlob(c))})}:r.toBlob=function(l,c,g){var b=this;setTimeout(function(){l(f(b.toDataURL(c,g)))})})),a.exports?a.exports=f:e.dataURLtoBlob=f}(window)})(W);var F=W.exports,H=function(e){return typeof Blob=="undefined"?!1:e instanceof Blob||Object.prototype.toString.call(e)==="[object Blob]"},U={strict:!0,checkOrientation:!0,retainExif:!1,maxWidth:1/0,maxHeight:1/0,minWidth:0,minHeight:0,width:void 0,height:void 0,resize:"none",quality:.8,mimeType:"auto",convertTypes:["image/png"],convertSize:5e6,beforeDraw:null,drew:null,success:null,error:null},V=typeof window!="undefined"&&typeof window.document!="undefined",p=V?window:{},A=function(e){return e>0&&e<1/0},Q=Array.prototype.slice;function B(a){return Array.from?Array.from(a):Q.call(a)}var h=/^image\/.+$/;function u(a){return h.test(a)}function E(a){var e=u(a)?a.substr(6):"";return e==="jpeg"&&(e="jpg"),".".concat(e)}var m=String.fromCharCode;function C(a,e,r){var t="",n;for(r+=e,n=e;n<r;n+=1)t+=m(a.getUint8(n));return t}var _=p.btoa;function R(a,e){for(var r=[],t=8192,n=new Uint8Array(a);n.length>0;)r.push(m.apply(null,B(n.subarray(0,t)))),n=n.subarray(t);return"data:".concat(e,";base64,").concat(_(r.join("")))}function X(a){var e=new DataView(a),r;try{var t,n,i;if(e.getUint8(0)===255&&e.getUint8(1)===216)for(var v=e.byteLength,f=2;f+1<v;){if(e.getUint8(f)===255&&e.getUint8(f+1)===225){n=f;break}f+=1}if(n){var l=n+4,c=n+10;if(C(e,l,4)==="Exif"){var g=e.getUint16(c);if(t=g===18761,(t||g===19789)&&e.getUint16(c+2,t)===42){var b=e.getUint32(c+4,t);b>=8&&(i=c+b)}}}if(i){var T=e.getUint16(i,t),y,o;for(o=0;o<T;o+=1)if(y=i+o*12+2,e.getUint16(y,t)===274){y+=8,r=e.getUint16(y,t),e.setUint16(y,1,t);break}}}catch(j){r=1}return r}function d(a){var e=0,r=1,t=1;switch(a){case 2:r=-1;break;case 3:e=-180;break;case 4:t=-1;break;case 5:e=90,t=-1;break;case 6:e=90;break;case 7:e=90,r=-1;break;case 8:e=-90;break}return{rotate:e,scaleX:r,scaleY:t}}var ce=/\.\d*(?:0|9){12}\d*$/;function ue(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e11;return ce.test(a)?Math.round(a*e)/e:a}function G(a){var e=a.aspectRatio,r=a.height,t=a.width,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"none",i=A(t),v=A(r);if(i&&v){var f=r*e;(n==="contain"||n==="none")&&f>t||n==="cover"&&f<t?r=t/e:t=r*e}else i?r=t/e:v&&(t=r*e);return{width:t,height:r}}function fe(a){for(var e=B(new Uint8Array(a)),r=e.length,t=[],n=0;n+3<r;){var i=e[n],v=e[n+1];if(i===255&&v===218)break;if(i===255&&v===216)n+=2;else{var f=e[n+2]*256+e[n+3],l=n+f+2,c=e.slice(n,l);t.push(c),n=l}}return t.reduce(function(g,b){return b[0]===255&&b[1]===225?g.concat(b):g},[])}function _e(a,e){var r=B(new Uint8Array(a));if(r[2]!==255||r[3]!==224)return a;var t=r[4]*256+r[5],n=[255,216].concat(e,r.slice(4+t));return new Uint8Array(n)}var le=p.ArrayBuffer,q=p.FileReader,I=p.URL||p.webkitURL,K=/\.\w+$/,L=p.Compressor,ee=function(){function a(e,r){Z(this,a),this.file=e,this.exif=[],this.image=new Image,this.options=s(s({},U),r),this.aborted=!1,this.result=null,this.init()}return $(a,[{key:"init",value:function(){var r=this,t=this.file,n=this.options;if(!H(t)){this.fail(new Error("The first argument must be a File or Blob object."));return}var i=t.type;if(!u(i)){this.fail(new Error("The first argument must be an image File or Blob object."));return}if(!I||!q){this.fail(new Error("The current browser does not support image compression."));return}le||(n.checkOrientation=!1,n.retainExif=!1);var v=i==="image/jpeg",f=v&&n.checkOrientation,l=v&&n.retainExif;if(I&&!f&&!l)this.load({url:I.createObjectURL(t)});else{var c=new q;this.reader=c,c.onload=function(g){var b=g.target,T=b.result,y={},o=1;f&&(o=X(T),o>1&&M(y,d(o))),l&&(r.exif=fe(T)),f||l?!I||o>1?y.url=R(T,i):y.url=I.createObjectURL(t):y.url=T,r.load(y)},c.onabort=function(){r.fail(new Error("Aborted to read the image with FileReader."))},c.onerror=function(){r.fail(new Error("Failed to read the image with FileReader."))},c.onloadend=function(){r.reader=null},f||l?c.readAsArrayBuffer(t):c.readAsDataURL(t)}}},{key:"load",value:function(r){var t=this,n=this.file,i=this.image;i.onload=function(){t.draw(s(s({},r),{},{naturalWidth:i.naturalWidth,naturalHeight:i.naturalHeight}))},i.onabort=function(){t.fail(new Error("Aborted to load the image."))},i.onerror=function(){t.fail(new Error("Failed to load the image."))},p.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(p.navigator.userAgent)&&(i.crossOrigin="anonymous"),i.alt=n.name,i.src=r.url}},{key:"draw",value:function(r){var t=this,n=r.naturalWidth,i=r.naturalHeight,v=r.rotate,f=v===void 0?0:v,l=r.scaleX,c=l===void 0?1:l,g=r.scaleY,b=g===void 0?1:g,T=this.file,y=this.image,o=this.options,j=document.createElement("canvas"),D=j.getContext("2d"),N=Math.abs(f)%180===90,de=(o.resize==="contain"||o.resize==="cover")&&A(o.width)&&A(o.height),re=Math.max(o.maxWidth,0)||1/0,te=Math.max(o.maxHeight,0)||1/0,ae=Math.max(o.minWidth,0)||0,ne=Math.max(o.minHeight,0)||0,Y=n/i,O=o.width,w=o.height;if(N){var pe=[te,re];re=pe[0],te=pe[1];var Ee=[ne,ae];ae=Ee[0],ne=Ee[1];var be=[w,O];O=be[0],w=be[1]}de&&(Y=O/w);var ye=G({aspectRatio:Y,width:re,height:te},"contain");re=ye.width,te=ye.height;var Pe=G({aspectRatio:Y,width:ae,height:ne},"cover");if(ae=Pe.width,ne=Pe.height,de){var De=G({aspectRatio:Y,width:O,height:w},o.resize);O=De.width,w=De.height}else{var Oe=G({aspectRatio:Y,width:O,height:w}),we=Oe.width;O=we===void 0?n:we;var Be=Oe.height;w=Be===void 0?i:Be}O=Math.floor(ue(Math.min(Math.max(O,ae),re))),w=Math.floor(ue(Math.min(Math.max(w,ne),te)));var Le=-O/2,We=-w/2,Fe=O,Ke=w,he=[];if(de){var Me=0,Ue=0,me=n,ve=i,Ce=G({aspectRatio:Y,width:n,height:i},{contain:"cover",cover:"contain"}[o.resize]);me=Ce.width,ve=Ce.height,Me=(n-me)/2,Ue=(i-ve)/2,he.push(Me,Ue,me,ve)}if(he.push(Le,We,Fe,Ke),N){var Re=[w,O];O=Re[0],w=Re[1]}j.width=O,j.height=w,u(o.mimeType)||(o.mimeType=T.type);var Te="transparent";T.size>o.convertSize&&o.convertTypes.indexOf(o.mimeType)>=0&&(o.mimeType="image/jpeg");var je=o.mimeType==="image/jpeg";if(je&&(Te="#fff"),D.fillStyle=Te,D.fillRect(0,0,O,w),o.beforeDraw&&o.beforeDraw.call(this,D,j),!this.aborted&&(D.save(),D.translate(O/2,w/2),D.rotate(f*Math.PI/180),D.scale(c,b),D.drawImage.apply(D,[y].concat(he)),D.restore(),o.drew&&o.drew.call(this,D,j),!this.aborted)){var xe=function(ie){if(!t.aborted){var Ae=function(oe){return t.done({naturalWidth:n,naturalHeight:i,result:oe})};if(ie&&je&&o.retainExif&&t.exif&&t.exif.length>0){var Ie=function(oe){return Ae(F(R(_e(oe,t.exif),o.mimeType)))};if(ie.arrayBuffer)ie.arrayBuffer().then(Ie).catch(function(){t.fail(new Error("Failed to read the compressed image with Blob.arrayBuffer()."))});else{var J=new q;t.reader=J,J.onload=function(ge){var oe=ge.target;Ie(oe.result)},J.onabort=function(){t.fail(new Error("Aborted to read the compressed image with FileReader."))},J.onerror=function(){t.fail(new Error("Failed to read the compressed image with FileReader."))},J.onloadend=function(){t.reader=null},J.readAsArrayBuffer(ie)}}else Ae(ie)}};j.toBlob?j.toBlob(xe,o.mimeType,o.quality):xe(F(j.toDataURL(o.mimeType,o.quality)))}}},{key:"done",value:function(r){var t=r.naturalWidth,n=r.naturalHeight,i=r.result,v=this.file,f=this.image,l=this.options;if(I&&f.src.indexOf("blob:")===0&&I.revokeObjectURL(f.src),i)if(l.strict&&!l.retainExif&&i.size>v.size&&l.mimeType===v.type&&!(l.width>t||l.height>n||l.minWidth>t||l.minHeight>n||l.maxWidth<t||l.maxHeight<n))i=v;else{var c=new Date;i.lastModified=c.getTime(),i.lastModifiedDate=c,i.name=v.name,i.name&&i.type!==v.type&&(i.name=i.name.replace(K,E(i.type)))}else i=v;this.result=i,l.success&&l.success.call(this,i)}},{key:"fail",value:function(r){var t=this.options;if(t.error)t.error.call(this,r);else throw r}},{key:"abort",value:function(){this.aborted||(this.aborted=!0,this.reader?this.reader.abort():this.image.complete?this.fail(new Error("The compression process has been aborted.")):(this.image.onload=null,this.image.onabort()))}}],[{key:"noConflict",value:function(){return window.Compressor=L,a}},{key:"setDefaults",value:function(r){M(U,r)}}]),a}();return ee})}}]);
