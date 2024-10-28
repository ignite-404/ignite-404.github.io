"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4053],{40056:function(Ve,Ae,d){d.d(Ae,{Z:function(){return le}});var i=d(67294),ve=d(89739),fe=d(4340),Ce=d(97937),E=d(21640),te=d(78860),he=d(93967),F=d.n(he),K=d(29372),U=d(64217),Y=d(42550),Q=d(96159),oe=d(53124),W=d(11568),ze=d(14747),pe=d(83559);const ae=(v,f,C,p,S)=>({background:v,border:`${(0,W.bf)(p.lineWidth)} ${p.lineType} ${f}`,[`${S}-icon`]:{color:C}}),Ee=v=>{const{componentCls:f,motionDurationSlow:C,marginXS:p,marginSM:S,fontSize:L,fontSizeLG:V,lineHeight:z,borderRadiusLG:G,motionEaseInOutCirc:j,withDescriptionIconSize:se,colorText:ne,colorTextHeading:ie,withDescriptionPadding:re,defaultPadding:k}=v;return{[f]:Object.assign(Object.assign({},(0,ze.Wf)(v)),{position:"relative",display:"flex",alignItems:"center",padding:k,wordWrap:"break-word",borderRadius:G,[`&${f}-rtl`]:{direction:"rtl"},[`${f}-content`]:{flex:1,minWidth:0},[`${f}-icon`]:{marginInlineEnd:p,lineHeight:0},"&-description":{display:"none",fontSize:L,lineHeight:z},"&-message":{color:ie},[`&${f}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${C} ${j}, opacity ${C} ${j},
        padding-top ${C} ${j}, padding-bottom ${C} ${j},
        margin-bottom ${C} ${j}`},[`&${f}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${f}-with-description`]:{alignItems:"flex-start",padding:re,[`${f}-icon`]:{marginInlineEnd:S,fontSize:se,lineHeight:0},[`${f}-message`]:{display:"block",marginBottom:p,color:ie,fontSize:V},[`${f}-description`]:{display:"block",color:ne}},[`${f}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},Me=v=>{const{componentCls:f,colorSuccess:C,colorSuccessBorder:p,colorSuccessBg:S,colorWarning:L,colorWarningBorder:V,colorWarningBg:z,colorError:G,colorErrorBorder:j,colorErrorBg:se,colorInfo:ne,colorInfoBorder:ie,colorInfoBg:re}=v;return{[f]:{"&-success":ae(S,p,C,v,f),"&-info":ae(re,ie,ne,v,f),"&-warning":ae(z,V,L,v,f),"&-error":Object.assign(Object.assign({},ae(se,j,G,v,f)),{[`${f}-description > pre`]:{margin:0,padding:0}})}}},Te=v=>{const{componentCls:f,iconCls:C,motionDurationMid:p,marginXS:S,fontSizeIcon:L,colorIcon:V,colorIconHover:z}=v;return{[f]:{"&-action":{marginInlineStart:S},[`${f}-close-icon`]:{marginInlineStart:S,padding:0,overflow:"hidden",fontSize:L,lineHeight:(0,W.bf)(L),backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${C}-close`]:{color:V,transition:`color ${p}`,"&:hover":{color:z}}},"&-close-text":{color:V,transition:`color ${p}`,"&:hover":{color:z}}}}},Re=v=>({withDescriptionIconSize:v.fontSizeHeading3,defaultPadding:`${v.paddingContentVerticalSM}px 12px`,withDescriptionPadding:`${v.paddingMD}px ${v.paddingContentHorizontalLG}px`});var Be=(0,pe.I$)("Alert",v=>[Ee(v),Me(v),Te(v)],Re),Ie=function(v,f){var C={};for(var p in v)Object.prototype.hasOwnProperty.call(v,p)&&f.indexOf(p)<0&&(C[p]=v[p]);if(v!=null&&typeof Object.getOwnPropertySymbols=="function")for(var S=0,p=Object.getOwnPropertySymbols(v);S<p.length;S++)f.indexOf(p[S])<0&&Object.prototype.propertyIsEnumerable.call(v,p[S])&&(C[p[S]]=v[p[S]]);return C};const Ze={success:ve.Z,info:te.Z,error:fe.Z,warning:E.Z},Ne=v=>{const{icon:f,prefixCls:C,type:p}=v,S=Ze[p]||null;return f?(0,Q.wm)(f,i.createElement("span",{className:`${C}-icon`},f),()=>({className:F()(`${C}-icon`,{[f.props.className]:f.props.className})})):i.createElement(S,{className:`${C}-icon`})},ge=v=>{const{isClosable:f,prefixCls:C,closeIcon:p,handleClose:S,ariaProps:L}=v,V=p===!0||p===void 0?i.createElement(Ce.Z,null):p;return f?i.createElement("button",Object.assign({type:"button",onClick:S,className:`${C}-close-icon`,tabIndex:0},L),V):null};var Pe=i.forwardRef((v,f)=>{const{description:C,prefixCls:p,message:S,banner:L,className:V,rootClassName:z,style:G,onMouseEnter:j,onMouseLeave:se,onClick:ne,afterClose:ie,showIcon:re,closable:k,closeText:H,closeIcon:ce,action:$e,id:He}=v,Le=Ie(v,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action","id"]),[o,a]=i.useState(!1),e=i.useRef(null);i.useImperativeHandle(f,()=>({nativeElement:e.current}));const{getPrefixCls:t,direction:r,alert:n}=i.useContext(oe.E_),l=t("alert",p),[c,u,g]=Be(l),h=b=>{var A;a(!0),(A=v.onClose)===null||A===void 0||A.call(v,b)},P=i.useMemo(()=>v.type!==void 0?v.type:L?"warning":"info",[v.type,L]),R=i.useMemo(()=>typeof k=="object"&&k.closeIcon||H?!0:typeof k=="boolean"?k:ce!==!1&&ce!==null&&ce!==void 0?!0:!!(n!=null&&n.closable),[H,ce,k,n==null?void 0:n.closable]),O=L&&re===void 0?!0:re,I=F()(l,`${l}-${P}`,{[`${l}-with-description`]:!!C,[`${l}-no-icon`]:!O,[`${l}-banner`]:!!L,[`${l}-rtl`]:r==="rtl"},n==null?void 0:n.className,V,z,g,u),B=(0,U.Z)(Le,{aria:!0,data:!0}),m=i.useMemo(()=>{var b,A;return typeof k=="object"&&k.closeIcon?k.closeIcon:H||(ce!==void 0?ce:typeof(n==null?void 0:n.closable)=="object"&&(!((b=n==null?void 0:n.closable)===null||b===void 0)&&b.closeIcon)?(A=n==null?void 0:n.closable)===null||A===void 0?void 0:A.closeIcon:n==null?void 0:n.closeIcon)},[ce,k,H,n==null?void 0:n.closeIcon]),T=i.useMemo(()=>{const b=k!=null?k:n==null?void 0:n.closable;if(typeof b=="object"){const{closeIcon:A}=b;return Ie(b,["closeIcon"])}return{}},[k,n==null?void 0:n.closable]);return c(i.createElement(K.ZP,{visible:!o,motionName:`${l}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:b=>({maxHeight:b.offsetHeight}),onLeaveEnd:ie},(b,A)=>{let{className:w,style:x}=b;return i.createElement("div",Object.assign({id:He,ref:(0,Y.sQ)(e,A),"data-show":!o,className:F()(I,w),style:Object.assign(Object.assign(Object.assign({},n==null?void 0:n.style),G),x),onMouseEnter:j,onMouseLeave:se,onClick:ne,role:"alert"},B),O?i.createElement(Ne,{description:C,icon:v.icon,prefixCls:l,type:P}):null,i.createElement("div",{className:`${l}-content`},S?i.createElement("div",{className:`${l}-message`},S):null,C?i.createElement("div",{className:`${l}-description`},C):null),$e?i.createElement("div",{className:`${l}-action`},$e):null,i.createElement(ge,{isClosable:R,prefixCls:l,closeIcon:m,handleClose:h,ariaProps:T}))}))}),ke=d(15671),Se=d(43144),Oe=d(61120),s=d(78814),N=d(82963);function $(v,f,C){return f=(0,Oe.Z)(f),(0,N.Z)(v,(0,s.Z)()?Reflect.construct(f,C||[],(0,Oe.Z)(v).constructor):f.apply(v,C))}var y=d(60136),J=function(v){function f(){var C;return(0,ke.Z)(this,f),C=$(this,f,arguments),C.state={error:void 0,info:{componentStack:""}},C}return(0,y.Z)(f,v),(0,Se.Z)(f,[{key:"componentDidCatch",value:function(p,S){this.setState({error:p,info:S})}},{key:"render",value:function(){const{message:p,description:S,id:L,children:V}=this.props,{error:z,info:G}=this.state,j=(G==null?void 0:G.componentStack)||null,se=typeof p=="undefined"?(z||"").toString():p,ne=typeof S=="undefined"?j:S;return z?i.createElement(Pe,{id:L,type:"error",message:se,description:i.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},ne)}):V}}])}(i.Component);const Z=Pe;Z.ErrorBoundary=J;var le=Z},62048:function(Ve,Ae,d){d.d(Ae,{Z:function(){return Le}});var i=d(67294),ve=d(37762),fe=d(15671),Ce=d(43144),E=d(4942),te,he;function F(o,a,e){if(a<0||a>31||o>>>a)throw new RangeError("Value out of range");for(var t=a-1;t>=0;t--)e.push(o>>>t&1)}function K(o,a){return(o>>>a&1)!=0}function U(o){if(!o)throw new Error("Assertion error")}var Y=function(){function o(a,e){(0,fe.Z)(this,o),(0,E.Z)(this,"modeBits",void 0),(0,E.Z)(this,"numBitsCharCount",void 0),this.modeBits=a,this.numBitsCharCount=e}return(0,Ce.Z)(o,[{key:"numCharCountBits",value:function(e){return this.numBitsCharCount[Math.floor((e+7)/17)]}}]),o}();te=Y,(0,E.Z)(Y,"NUMERIC",new te(1,[10,12,14])),(0,E.Z)(Y,"ALPHANUMERIC",new te(2,[9,11,13])),(0,E.Z)(Y,"BYTE",new te(4,[8,16,16])),(0,E.Z)(Y,"KANJI",new te(8,[8,10,12])),(0,E.Z)(Y,"ECI",new te(7,[0,0,0]));var Q=(0,Ce.Z)(function o(a,e){(0,fe.Z)(this,o),(0,E.Z)(this,"ordinal",void 0),(0,E.Z)(this,"formatBits",void 0),this.ordinal=a,this.formatBits=e});he=Q,(0,E.Z)(Q,"LOW",new he(0,1)),(0,E.Z)(Q,"MEDIUM",new he(1,0)),(0,E.Z)(Q,"QUARTILE",new he(2,3)),(0,E.Z)(Q,"HIGH",new he(3,2));var oe=function(){function o(a,e,t){if((0,fe.Z)(this,o),(0,E.Z)(this,"mode",void 0),(0,E.Z)(this,"numChars",void 0),(0,E.Z)(this,"bitData",void 0),this.mode=a,this.numChars=e,this.bitData=t,e<0)throw new RangeError("Invalid argument");this.bitData=t.slice()}return(0,Ce.Z)(o,[{key:"getData",value:function(){return this.bitData.slice()}}],[{key:"makeBytes",value:function(e){var t=[],r=(0,ve.Z)(e),n;try{for(r.s();!(n=r.n()).done;){var l=n.value;F(l,8,t)}}catch(c){r.e(c)}finally{r.f()}return new o(Y.BYTE,e.length,t)}},{key:"makeNumeric",value:function(e){if(!o.isNumeric(e))throw new RangeError("String contains non-numeric characters");for(var t=[],r=0;r<e.length;){var n=Math.min(e.length-r,3);F(parseInt(e.substring(r,r+n),10),n*3+1,t),r+=n}return new o(Y.NUMERIC,e.length,t)}},{key:"makeAlphanumeric",value:function(e){if(!o.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");var t=[],r;for(r=0;r+2<=e.length;r+=2){var n=o.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r))*45;n+=o.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r+1)),F(n,11,t)}return r<e.length&&F(o.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r)),6,t),new o(Y.ALPHANUMERIC,e.length,t)}},{key:"makeSegments",value:function(e){return e==""?[]:o.isNumeric(e)?[o.makeNumeric(e)]:o.isAlphanumeric(e)?[o.makeAlphanumeric(e)]:[o.makeBytes(o.toUtf8ByteArray(e))]}},{key:"makeEci",value:function(e){var t=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)F(e,8,t);else if(e<16384)F(2,2,t),F(e,14,t);else if(e<1e6)F(6,3,t),F(e,21,t);else throw new RangeError("ECI assignment value out of range");return new o(Y.ECI,0,t)}},{key:"isNumeric",value:function(e){return o.NUMERIC_REGEX.test(e)}},{key:"isAlphanumeric",value:function(e){return o.ALPHANUMERIC_REGEX.test(e)}},{key:"getTotalBits",value:function(e,t){var r=0,n=(0,ve.Z)(e),l;try{for(n.s();!(l=n.n()).done;){var c=l.value,u=c.mode.numCharCountBits(t);if(c.numChars>=1<<u)return 1/0;r+=4+u+c.bitData.length}}catch(g){n.e(g)}finally{n.f()}return r}},{key:"toUtf8ByteArray",value:function(e){for(var t=encodeURI(e),r=[],n=0;n<t.length;n++)t.charAt(n)!="%"?r.push(t.charCodeAt(n)):(r.push(parseInt(t.substring(n+1,n+3),16)),n+=2);return r}}]),o}();(0,E.Z)(oe,"NUMERIC_REGEX",/^[0-9]*$/),(0,E.Z)(oe,"ALPHANUMERIC_REGEX",/^[A-Z0-9 $%*+.\/:-]*$/),(0,E.Z)(oe,"ALPHANUMERIC_CHARSET","0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:");var W=function(){function o(a,e,t,r){(0,fe.Z)(this,o),(0,E.Z)(this,"size",void 0),(0,E.Z)(this,"mask",void 0),(0,E.Z)(this,"modules",[]),(0,E.Z)(this,"isFunction",[]),(0,E.Z)(this,"version",void 0),(0,E.Z)(this,"errorCorrectionLevel",void 0);var n=r;if(this.version=a,this.errorCorrectionLevel=e,a<o.MIN_VERSION||a>o.MAX_VERSION)throw new RangeError("Version value out of range");if(n<-1||n>7)throw new RangeError("Mask value out of range");this.size=a*4+17;for(var l=[],c=0;c<this.size;c++)l.push(!1);for(var u=0;u<this.size;u++)this.modules.push(l.slice()),this.isFunction.push(l.slice());this.drawFunctionPatterns();var g=this.addEccAndInterleave(t);if(this.drawCodewords(g),n==-1)for(var h=1e9,P=0;P<8;P++){this.applyMask(P),this.drawFormatBits(P);var R=this.getPenaltyScore();R<h&&(n=P,h=R),this.applyMask(P)}U(0<=n&&n<=7),this.mask=n,this.applyMask(n),this.drawFormatBits(n),this.isFunction=[]}return(0,Ce.Z)(o,[{key:"getModule",value:function(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}},{key:"getModules",value:function(){return this.modules}},{key:"drawFunctionPatterns",value:function(){for(var e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);for(var t=this.getAlignmentPatternPositions(),r=t.length,n=0;n<r;n++)for(var l=0;l<r;l++)n==0&&l==0||n==0&&l==r-1||n==r-1&&l==0||this.drawAlignmentPattern(t[n],t[l]);this.drawFormatBits(0),this.drawVersion()}},{key:"drawFormatBits",value:function(e){for(var t=this.errorCorrectionLevel.formatBits<<3|e,r=t,n=0;n<10;n++)r=r<<1^(r>>>9)*1335;var l=(t<<10|r)^21522;U(l>>>15==0);for(var c=0;c<=5;c++)this.setFunctionModule(8,c,K(l,c));this.setFunctionModule(8,7,K(l,6)),this.setFunctionModule(8,8,K(l,7)),this.setFunctionModule(7,8,K(l,8));for(var u=9;u<15;u++)this.setFunctionModule(14-u,8,K(l,u));for(var g=0;g<8;g++)this.setFunctionModule(this.size-1-g,8,K(l,g));for(var h=8;h<15;h++)this.setFunctionModule(8,this.size-15+h,K(l,h));this.setFunctionModule(8,this.size-8,!0)}},{key:"drawVersion",value:function(){if(!(this.version<7)){for(var e=this.version,t=0;t<12;t++)e=e<<1^(e>>>11)*7973;var r=this.version<<12|e;U(r>>>18==0);for(var n=0;n<18;n++){var l=K(r,n),c=this.size-11+n%3,u=Math.floor(n/3);this.setFunctionModule(c,u,l),this.setFunctionModule(u,c,l)}}}},{key:"drawFinderPattern",value:function(e,t){for(var r=-4;r<=4;r++)for(var n=-4;n<=4;n++){var l=Math.max(Math.abs(n),Math.abs(r)),c=e+n,u=t+r;0<=c&&c<this.size&&0<=u&&u<this.size&&this.setFunctionModule(c,u,l!=2&&l!=4)}}},{key:"drawAlignmentPattern",value:function(e,t){for(var r=-2;r<=2;r++)for(var n=-2;n<=2;n++)this.setFunctionModule(e+n,t+r,Math.max(Math.abs(n),Math.abs(r))!=1)}},{key:"setFunctionModule",value:function(e,t,r){this.modules[t][e]=r,this.isFunction[t][e]=!0}},{key:"addEccAndInterleave",value:function(e){var t=this.version,r=this.errorCorrectionLevel;if(e.length!=o.getNumDataCodewords(t,r))throw new RangeError("Invalid argument");for(var n=o.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][t],l=o.ECC_CODEWORDS_PER_BLOCK[r.ordinal][t],c=Math.floor(o.getNumRawDataModules(t)/8),u=n-c%n,g=Math.floor(c/n),h=[],P=o.reedSolomonComputeDivisor(l),R=0,O=0;R<n;R++){var I=e.slice(O,O+g-l+(R<u?0:1));O+=I.length;var B=o.reedSolomonComputeRemainder(I,P);R<u&&I.push(0),h.push(I.concat(B))}for(var m=[],T=function(w){h.forEach(function(x,X){(w!=g-l||X>=u)&&m.push(x[w])})},b=0;b<h[0].length;b++)T(b);return U(m.length==c),m}},{key:"drawCodewords",value:function(e){if(e.length!=Math.floor(o.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");for(var t=0,r=this.size-1;r>=1;r-=2){r==6&&(r=5);for(var n=0;n<this.size;n++)for(var l=0;l<2;l++){var c=r-l,u=(r+1&2)==0,g=u?this.size-1-n:n;!this.isFunction[g][c]&&t<e.length*8&&(this.modules[g][c]=K(e[t>>>3],7-(t&7)),t++)}}U(t==e.length*8)}},{key:"applyMask",value:function(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(var t=0;t<this.size;t++)for(var r=0;r<this.size;r++){var n=void 0;switch(e){case 0:n=(r+t)%2==0;break;case 1:n=t%2==0;break;case 2:n=r%3==0;break;case 3:n=(r+t)%3==0;break;case 4:n=(Math.floor(r/3)+Math.floor(t/2))%2==0;break;case 5:n=r*t%2+r*t%3==0;break;case 6:n=(r*t%2+r*t%3)%2==0;break;case 7:n=((r+t)%2+r*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][r]&&n&&(this.modules[t][r]=!this.modules[t][r])}}},{key:"getPenaltyScore",value:function(){for(var e=0,t=0;t<this.size;t++){for(var r=!1,n=0,l=[0,0,0,0,0,0,0],c=0;c<this.size;c++)this.modules[t][c]==r?(n++,n==5?e+=o.PENALTY_N1:n>5&&e++):(this.finderPenaltyAddHistory(n,l),r||(e+=this.finderPenaltyCountPatterns(l)*o.PENALTY_N3),r=this.modules[t][c],n=1);e+=this.finderPenaltyTerminateAndCount(r,n,l)*o.PENALTY_N3}for(var u=0;u<this.size;u++){for(var g=!1,h=0,P=[0,0,0,0,0,0,0],R=0;R<this.size;R++)this.modules[R][u]==g?(h++,h==5?e+=o.PENALTY_N1:h>5&&e++):(this.finderPenaltyAddHistory(h,P),g||(e+=this.finderPenaltyCountPatterns(P)*o.PENALTY_N3),g=this.modules[R][u],h=1);e+=this.finderPenaltyTerminateAndCount(g,h,P)*o.PENALTY_N3}for(var O=0;O<this.size-1;O++)for(var I=0;I<this.size-1;I++){var B=this.modules[O][I];B==this.modules[O][I+1]&&B==this.modules[O+1][I]&&B==this.modules[O+1][I+1]&&(e+=o.PENALTY_N2)}var m=0,T=(0,ve.Z)(this.modules),b;try{for(T.s();!(b=T.n()).done;){var A=b.value;m=A.reduce(function(X,q){return X+(q?1:0)},m)}}catch(X){T.e(X)}finally{T.f()}var w=this.size*this.size,x=Math.ceil(Math.abs(m*20-w*10)/w)-1;return U(0<=x&&x<=9),e+=x*o.PENALTY_N4,U(0<=e&&e<=2568888),e}},{key:"getAlignmentPatternPositions",value:function(){if(this.version==1)return[];for(var e=Math.floor(this.version/7)+2,t=this.version==32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,r=[6],n=this.size-7;r.length<e;n-=t)r.splice(1,0,n);return r}},{key:"finderPenaltyCountPatterns",value:function(e){var t=e[1];U(t<=this.size*3);var r=t>0&&e[2]==t&&e[3]==t*3&&e[4]==t&&e[5]==t;return(r&&e[0]>=t*4&&e[6]>=t?1:0)+(r&&e[6]>=t*4&&e[0]>=t?1:0)}},{key:"finderPenaltyTerminateAndCount",value:function(e,t,r){var n=t;return e&&(this.finderPenaltyAddHistory(n,r),n=0),n+=this.size,this.finderPenaltyAddHistory(n,r),this.finderPenaltyCountPatterns(r)}},{key:"finderPenaltyAddHistory",value:function(e,t){var r=e;t[0]==0&&(r+=this.size),t.pop(),t.unshift(r)}}],[{key:"encodeText",value:function(e,t){var r=oe.makeSegments(e);return o.encodeSegments(r,t)}},{key:"encodeBinary",value:function(e,t){var r=oe.makeBytes(e);return o.encodeSegments([r],t)}},{key:"encodeSegments",value:function(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:40,l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:-1,c=arguments.length>5&&arguments[5]!==void 0?arguments[5]:!0;if(!(o.MIN_VERSION<=r&&r<=n&&n<=o.MAX_VERSION)||l<-1||l>7)throw new RangeError("Invalid value");var u,g;for(u=r;;u++){var h=o.getNumDataCodewords(u,t)*8,P=oe.getTotalBits(e,u);if(P<=h){g=P;break}if(u>=n)throw new RangeError("Data too long")}for(var R=t,O=0,I=[Q.MEDIUM,Q.QUARTILE,Q.HIGH];O<I.length;O++){var B=I[O];c&&g<=o.getNumDataCodewords(u,B)*8&&(R=B)}var m=[],T=(0,ve.Z)(e),b;try{for(T.s();!(b=T.n()).done;){var A=b.value;F(A.mode.modeBits,4,m),F(A.numChars,A.mode.numCharCountBits(u),m);var w=(0,ve.Z)(A.getData()),x;try{for(w.s();!(x=w.n()).done;){var X=x.value;m.push(X)}}catch(ee){w.e(ee)}finally{w.f()}}}catch(ee){T.e(ee)}finally{T.f()}U(m.length==g);var q=o.getNumDataCodewords(u,R)*8;U(m.length<=q),F(0,Math.min(4,q-m.length),m),F(0,(8-m.length%8)%8,m),U(m.length%8==0);for(var D=236;m.length<q;D^=253)F(D,8,m);for(var ue=[];ue.length*8<m.length;)ue.push(0);return m.forEach(function(ee,de){return ue[de>>>3]|=ee<<7-(de&7)}),new o(u,R,ue,l)}},{key:"getNumRawDataModules",value:function(e){if(e<o.MIN_VERSION||e>o.MAX_VERSION)throw new RangeError("Version number out of range");var t=(16*e+128)*e+64;if(e>=2){var r=Math.floor(e/7)+2;t-=(25*r-10)*r-55,e>=7&&(t-=36)}return U(208<=t&&t<=29648),t}},{key:"getNumDataCodewords",value:function(e,t){return Math.floor(o.getNumRawDataModules(e)/8)-o.ECC_CODEWORDS_PER_BLOCK[t.ordinal][e]*o.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][e]}},{key:"reedSolomonComputeDivisor",value:function(e){if(e<1||e>255)throw new RangeError("Degree out of range");for(var t=[],r=0;r<e-1;r++)t.push(0);t.push(1);for(var n=1,l=0;l<e;l++){for(var c=0;c<t.length;c++)t[c]=o.reedSolomonMultiply(t[c],n),c+1<t.length&&(t[c]^=t[c+1]);n=o.reedSolomonMultiply(n,2)}return t}},{key:"reedSolomonComputeRemainder",value:function(e,t){var r=t.map(function(){return 0}),n=(0,ve.Z)(e),l;try{var c=function(){var g=l.value,h=g^r.shift();r.push(0),t.forEach(function(P,R){return r[R]^=o.reedSolomonMultiply(P,h)})};for(n.s();!(l=n.n()).done;)c()}catch(u){n.e(u)}finally{n.f()}return r}},{key:"reedSolomonMultiply",value:function(e,t){if(e>>>8||t>>>8)throw new RangeError("Byte out of range");for(var r=0,n=7;n>=0;n--)r=r<<1^(r>>>7)*285,r^=(t>>>n&1)*e;return U(r>>>8==0),r}}]),o}();(0,E.Z)(W,"MIN_VERSION",1),(0,E.Z)(W,"MAX_VERSION",40),(0,E.Z)(W,"PENALTY_N1",3),(0,E.Z)(W,"PENALTY_N2",3),(0,E.Z)(W,"PENALTY_N3",40),(0,E.Z)(W,"PENALTY_N4",10),(0,E.Z)(W,"ECC_CODEWORDS_PER_BLOCK",[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]]),(0,E.Z)(W,"NUM_ERROR_CORRECTION_BLOCKS",[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]]);var ze={L:Q.LOW,M:Q.MEDIUM,Q:Q.QUARTILE,H:Q.HIGH},pe=128,ae="L",Ee="#FFFFFF",Me="#000000",Te=!1,Re=1,Be=4,Ie=0,Ze=.1;function Ne(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,e=[];return o.forEach(function(t,r){var n=null;t.forEach(function(l,c){if(!l&&n!==null){e.push("M".concat(n+a," ").concat(r+a,"h").concat(c-n,"v1H").concat(n+a,"z")),n=null;return}if(c===t.length-1){if(!l)return;n===null?e.push("M".concat(c+a,",").concat(r+a," h1v1H").concat(c+a,"z")):e.push("M".concat(n+a,",").concat(r+a," h").concat(c+1-n,"v1H").concat(n+a,"z"));return}l&&n===null&&(n=c)})}),e.join("")}function ge(o,a){return o.slice().map(function(e,t){return t<a.y||t>=a.y+a.h?e:e.map(function(r,n){return n<a.x||n>=a.x+a.w?r:!1})})}function De(o,a,e,t){if(t==null)return null;var r=o.length+e*2,n=Math.floor(a*Ze),l=r/a,c=(t.width||n)*l,u=(t.height||n)*l,g=t.x==null?o.length/2-c/2:t.x*l,h=t.y==null?o.length/2-u/2:t.y*l,P=t.opacity==null?1:t.opacity,R=null;if(t.excavate){var O=Math.floor(g),I=Math.floor(h),B=Math.ceil(c+g-O),m=Math.ceil(u+h-I);R={x:O,y:I,w:B,h:m}}var T=t.crossOrigin;return{x:g,y:h,h:u,w:c,excavation:R,opacity:P,crossOrigin:T}}function Pe(o,a){return a!=null?Math.floor(a):o?Be:Ie}var ke=function(){try{new Path2D().addPath(new Path2D)}catch(o){return!1}return!0}(),Se=d(87462),Oe=d(1413),s=d(97685),N=d(45987);function $(o){var a=o.value,e=o.level,t=o.minVersion,r=o.includeMargin,n=o.marginSize,l=o.imageSettings,c=o.size,u=(0,i.useMemo)(function(){var I=oe.makeSegments(a);return W.encodeSegments(I,ze[e],t)},[a,e,t]),g=(0,i.useMemo)(function(){var I=u.getModules(),B=Pe(r,n),m=I.length+B*2,T=De(I,c,B,l);return{cells:I,margin:B,numCells:m,calculatedImageSettings:T}},[u,c,l,r,n]),h=g.cells,P=g.margin,R=g.numCells,O=g.calculatedImageSettings;return{qrcode:u,margin:P,cells:h,numCells:R,calculatedImageSettings:O}}var y=["value","size","level","bgColor","fgColor","includeMargin","minVersion","marginSize","style","imageSettings"],M=i.forwardRef(function(a,e){var t=a.value,r=a.size,n=r===void 0?pe:r,l=a.level,c=l===void 0?ae:l,u=a.bgColor,g=u===void 0?Ee:u,h=a.fgColor,P=h===void 0?Me:h,R=a.includeMargin,O=R===void 0?Te:R,I=a.minVersion,B=I===void 0?Re:I,m=a.marginSize,T=a.style,b=a.imageSettings,A=(0,N.Z)(a,y),w=b==null?void 0:b.src,x=(0,i.useRef)(null),X=(0,i.useRef)(null),q=(0,i.useCallback)(function(ye){x.current=ye,typeof e=="function"?e(ye):e&&(e.current=ye)},[e]),D=(0,i.useState)(!1),ue=(0,s.Z)(D,2),ee=ue[1],de=$({value:t,level:c,minVersion:B,includeMargin:O,marginSize:m,imageSettings:b,size:n}),be=de.margin,we=de.cells,Fe=de.numCells,_=de.calculatedImageSettings;(0,i.useEffect)(function(){if(x.current!=null){var ye=x.current,me=ye.getContext("2d");if(!me)return;var Qe=we,xe=X.current,We=_!=null&&xe!==null&&xe.complete&&xe.naturalHeight!==0&&xe.naturalWidth!==0;We&&_.excavation!=null&&(Qe=ge(we,_.excavation));var Ge=window.devicePixelRatio||1;ye.height=ye.width=n*Ge;var Xe=n/Fe*Ge;me.scale(Xe,Xe),me.fillStyle=g,me.fillRect(0,0,Fe,Fe),me.fillStyle=P,ke?me.fill(new Path2D(Ne(Qe,be))):we.forEach(function(Ke,Ye){Ke.forEach(function(Je,qe){Je&&me.fillRect(qe+be,Ye+be,1,1)})}),_&&(me.globalAlpha=_.opacity),We&&me.drawImage(xe,_.x+be,_.y+be,_.w,_.h)}}),(0,i.useEffect)(function(){ee(!1)},[w]);var Ue=(0,Oe.Z)({height:n,width:n},T),je=null;return w!=null&&(je=i.createElement("img",{src:w,key:w,style:{display:"none"},onLoad:function(){ee(!0)},ref:X,crossOrigin:_==null?void 0:_.crossOrigin})),i.createElement(i.Fragment,null,i.createElement("canvas",(0,Se.Z)({style:Ue,height:n,width:n,ref:q,role:"img"},A)),je)});M.displayName="QRCodeCanvas";var J=["value","size","level","bgColor","fgColor","includeMargin","minVersion","title","marginSize","imageSettings"],Z=i.forwardRef(function(a,e){var t=a.value,r=a.size,n=r===void 0?pe:r,l=a.level,c=l===void 0?ae:l,u=a.bgColor,g=u===void 0?Ee:u,h=a.fgColor,P=h===void 0?Me:h,R=a.includeMargin,O=R===void 0?Te:R,I=a.minVersion,B=I===void 0?Re:I,m=a.title,T=a.marginSize,b=a.imageSettings,A=(0,N.Z)(a,J),w=$({value:t,level:c,minVersion:B,includeMargin:O,marginSize:T,imageSettings:b,size:n}),x=w.margin,X=w.cells,q=w.numCells,D=w.calculatedImageSettings,ue=X,ee=null;b!=null&&D!=null&&(D.excavation!=null&&(ue=ge(X,D.excavation)),ee=i.createElement("image",{href:b.src,height:D.h,width:D.w,x:D.x+x,y:D.y+x,preserveAspectRatio:"none",opacity:D.opacity,crossOrigin:D.crossOrigin}));var de=Ne(ue,x);return i.createElement("svg",(0,Se.Z)({height:n,width:n,viewBox:"0 0 ".concat(q," ").concat(q),ref:e,role:"img"},A),!!m&&i.createElement("title",null,m),i.createElement("path",{fill:g,d:"M0,0 h".concat(q,"v").concat(q,"H0z"),shapeRendering:"crispEdges"}),i.createElement("path",{fill:P,d:de,shapeRendering:"crispEdges"}),ee)});Z.displayName="QRCodeSVG";var le=d(93967),v=d.n(le),f=d(53124),C=d(10110),p=d(29691),S=d(11568),L=d(10274),V=d(14747),z=d(83559),G=d(83262);const j=o=>{const{componentCls:a,lineWidth:e,lineType:t,colorSplit:r}=o;return{[a]:Object.assign(Object.assign({},(0,V.Wf)(o)),{display:"flex",justifyContent:"center",alignItems:"center",padding:o.paddingSM,backgroundColor:o.colorWhite,borderRadius:o.borderRadiusLG,border:`${(0,S.bf)(e)} ${t} ${r}`,position:"relative",overflow:"hidden",[`& > ${a}-mask`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,zIndex:10,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",color:o.colorText,lineHeight:o.lineHeight,background:o.QRCodeMaskBackgroundColor,textAlign:"center",[`& > ${a}-expired, & > ${a}-scanned`]:{color:o.QRCodeTextColor}},"> canvas":{alignSelf:"stretch",flex:"auto",minWidth:0},"&-icon":{marginBlockEnd:o.marginXS,fontSize:o.controlHeight}}),[`${a}-borderless`]:{borderColor:"transparent",padding:0,borderRadius:0}}},se=o=>({QRCodeMaskBackgroundColor:new L.C(o.colorBgContainer).setAlpha(.96).toRgbString()});var ne=(0,z.I$)("QRCode",o=>{const a=(0,G.IX)(o,{QRCodeTextColor:o.colorText});return j(a)},se),ie=d(33160),re=d(14726),k=d(57381);const H=i.createElement(k.Z,null);function ce(o){let{prefixCls:a,locale:e,onRefresh:t,statusRender:r,status:n}=o;const l=i.createElement(i.Fragment,null,i.createElement("p",{className:`${a}-expired`},e==null?void 0:e.expired),t&&i.createElement(re.ZP,{type:"link",icon:i.createElement(ie.Z,null),onClick:t},e==null?void 0:e.refresh)),c=i.createElement("p",{className:`${a}-scanned`},e==null?void 0:e.scanned),u={expired:l,loading:H,scanned:c},g=P=>u[P.status];return(r!=null?r:g)({status:n,locale:e,onRefresh:t})}var $e=function(o,a){var e={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&a.indexOf(t)<0&&(e[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(o);r<t.length;r++)a.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(o,t[r])&&(e[t[r]]=o[t[r]]);return e},Le=o=>{var a,e,t,r;const[,n]=(0,p.ZP)(),{value:l,type:c="canvas",icon:u="",size:g=160,iconSize:h,color:P=n.colorText,errorLevel:R="M",status:O="active",bordered:I=!0,onRefresh:B,style:m,className:T,rootClassName:b,prefixCls:A,bgColor:w="transparent",statusRender:x}=o,X=$e(o,["value","type","icon","size","iconSize","color","errorLevel","status","bordered","onRefresh","style","className","rootClassName","prefixCls","bgColor","statusRender"]),{getPrefixCls:q}=(0,i.useContext)(f.E_),D=q("qrcode",A),[ue,ee,de]=ne(D),be={src:u,x:void 0,y:void 0,height:typeof h=="number"?h:(a=h==null?void 0:h.height)!==null&&a!==void 0?a:40,width:typeof h=="number"?h:(e=h==null?void 0:h.width)!==null&&e!==void 0?e:40,excavate:!0,crossOrigin:"anonymous"},we={value:l,size:g,level:R,bgColor:w,fgColor:P,style:{width:m==null?void 0:m.width,height:m==null?void 0:m.height},imageSettings:u?be:void 0},[Fe]=(0,C.Z)("QRCode");if(!l)return null;const _=v()(D,T,b,ee,de,{[`${D}-borderless`]:!I}),Ue=Object.assign(Object.assign({backgroundColor:w},m),{width:(t=m==null?void 0:m.width)!==null&&t!==void 0?t:g,height:(r=m==null?void 0:m.height)!==null&&r!==void 0?r:g});return ue(i.createElement("div",Object.assign({},X,{className:_,style:Ue}),O!=="active"&&i.createElement("div",{className:`${D}-mask`},i.createElement(ce,{prefixCls:D,locale:Fe,status:O,onRefresh:B,statusRender:x})),c==="canvas"?i.createElement(M,Object.assign({},we)):i.createElement(Z,Object.assign({},we))))}},66309:function(Ve,Ae,d){d.d(Ae,{Z:function(){return Oe}});var i=d(67294),ve=d(93967),fe=d.n(ve),Ce=d(98423),E=d(98787),te=d(69760),he=d(96159),F=d(45353),K=d(53124),U=d(11568),Y=d(10274),Q=d(14747),oe=d(83262),W=d(83559);const ze=s=>{const{paddingXXS:N,lineWidth:$,tagPaddingHorizontal:y,componentCls:M,calc:J}=s,Z=J(y).sub($).equal(),le=J(N).sub($).equal();return{[M]:Object.assign(Object.assign({},(0,Q.Wf)(s)),{display:"inline-block",height:"auto",marginInlineEnd:s.marginXS,paddingInline:Z,fontSize:s.tagFontSize,lineHeight:s.tagLineHeight,whiteSpace:"nowrap",background:s.defaultBg,border:`${(0,U.bf)(s.lineWidth)} ${s.lineType} ${s.colorBorder}`,borderRadius:s.borderRadiusSM,opacity:1,transition:`all ${s.motionDurationMid}`,textAlign:"start",position:"relative",[`&${M}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:s.defaultColor},[`${M}-close-icon`]:{marginInlineStart:le,fontSize:s.tagIconSize,color:s.colorTextDescription,cursor:"pointer",transition:`all ${s.motionDurationMid}`,"&:hover":{color:s.colorTextHeading}},[`&${M}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${s.iconCls}-close, ${s.iconCls}-close:hover`]:{color:s.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${M}-checkable-checked):hover`]:{color:s.colorPrimary,backgroundColor:s.colorFillSecondary},"&:active, &-checked":{color:s.colorTextLightSolid},"&-checked":{backgroundColor:s.colorPrimary,"&:hover":{backgroundColor:s.colorPrimaryHover}},"&:active":{backgroundColor:s.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${s.iconCls} + span, > span + ${s.iconCls}`]:{marginInlineStart:Z}}),[`${M}-borderless`]:{borderColor:"transparent",background:s.tagBorderlessBg}}},pe=s=>{const{lineWidth:N,fontSizeIcon:$,calc:y}=s,M=s.fontSizeSM;return(0,oe.IX)(s,{tagFontSize:M,tagLineHeight:(0,U.bf)(y(s.lineHeightSM).mul(M).equal()),tagIconSize:y($).sub(y(N).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:s.defaultBg})},ae=s=>({defaultBg:new Y.C(s.colorFillQuaternary).onBackground(s.colorBgContainer).toHexString(),defaultColor:s.colorText});var Ee=(0,W.I$)("Tag",s=>{const N=pe(s);return ze(N)},ae),Me=function(s,N){var $={};for(var y in s)Object.prototype.hasOwnProperty.call(s,y)&&N.indexOf(y)<0&&($[y]=s[y]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var M=0,y=Object.getOwnPropertySymbols(s);M<y.length;M++)N.indexOf(y[M])<0&&Object.prototype.propertyIsEnumerable.call(s,y[M])&&($[y[M]]=s[y[M]]);return $},Re=i.forwardRef((s,N)=>{const{prefixCls:$,style:y,className:M,checked:J,onChange:Z,onClick:le}=s,v=Me(s,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:f,tag:C}=i.useContext(K.E_),p=j=>{Z==null||Z(!J),le==null||le(j)},S=f("tag",$),[L,V,z]=Ee(S),G=fe()(S,`${S}-checkable`,{[`${S}-checkable-checked`]:J},C==null?void 0:C.className,M,V,z);return L(i.createElement("span",Object.assign({},v,{ref:N,style:Object.assign(Object.assign({},y),C==null?void 0:C.style),className:G,onClick:p})))}),Be=d(98719);const Ie=s=>(0,Be.Z)(s,(N,$)=>{let{textColor:y,lightBorderColor:M,lightColor:J,darkColor:Z}=$;return{[`${s.componentCls}${s.componentCls}-${N}`]:{color:y,background:J,borderColor:M,"&-inverse":{color:s.colorTextLightSolid,background:Z,borderColor:Z},[`&${s.componentCls}-borderless`]:{borderColor:"transparent"}}}});var Ze=(0,W.bk)(["Tag","preset"],s=>{const N=pe(s);return Ie(N)},ae);function Ne(s){return typeof s!="string"?s:s.charAt(0).toUpperCase()+s.slice(1)}const ge=(s,N,$)=>{const y=Ne($);return{[`${s.componentCls}${s.componentCls}-${N}`]:{color:s[`color${$}`],background:s[`color${y}Bg`],borderColor:s[`color${y}Border`],[`&${s.componentCls}-borderless`]:{borderColor:"transparent"}}}};var De=(0,W.bk)(["Tag","status"],s=>{const N=pe(s);return[ge(N,"success","Success"),ge(N,"processing","Info"),ge(N,"error","Error"),ge(N,"warning","Warning")]},ae),Pe=function(s,N){var $={};for(var y in s)Object.prototype.hasOwnProperty.call(s,y)&&N.indexOf(y)<0&&($[y]=s[y]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var M=0,y=Object.getOwnPropertySymbols(s);M<y.length;M++)N.indexOf(y[M])<0&&Object.prototype.propertyIsEnumerable.call(s,y[M])&&($[y[M]]=s[y[M]]);return $};const Se=i.forwardRef((s,N)=>{const{prefixCls:$,className:y,rootClassName:M,style:J,children:Z,icon:le,color:v,onClose:f,bordered:C=!0,visible:p}=s,S=Pe(s,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:L,direction:V,tag:z}=i.useContext(K.E_),[G,j]=i.useState(!0),se=(0,Ce.Z)(S,["closeIcon","closable"]);i.useEffect(()=>{p!==void 0&&j(p)},[p]);const ne=(0,E.o2)(v),ie=(0,E.yT)(v),re=ne||ie,k=Object.assign(Object.assign({backgroundColor:v&&!re?v:void 0},z==null?void 0:z.style),J),H=L("tag",$),[ce,$e,He]=Ee(H),Le=fe()(H,z==null?void 0:z.className,{[`${H}-${v}`]:re,[`${H}-has-color`]:v&&!re,[`${H}-hidden`]:!G,[`${H}-rtl`]:V==="rtl",[`${H}-borderless`]:!C},y,M,$e,He),o=l=>{l.stopPropagation(),f==null||f(l),!l.defaultPrevented&&j(!1)},[,a]=(0,te.Z)((0,te.w)(s),(0,te.w)(z),{closable:!1,closeIconRender:l=>{const c=i.createElement("span",{className:`${H}-close-icon`,onClick:o},l);return(0,he.wm)(l,c,u=>({onClick:g=>{var h;(h=u==null?void 0:u.onClick)===null||h===void 0||h.call(u,g),o(g)},className:fe()(u==null?void 0:u.className,`${H}-close-icon`)}))}}),e=typeof S.onClick=="function"||Z&&Z.type==="a",t=le||null,r=t?i.createElement(i.Fragment,null,t,Z&&i.createElement("span",null,Z)):Z,n=i.createElement("span",Object.assign({},se,{ref:N,className:Le,style:k}),r,a,ne&&i.createElement(Ze,{key:"preset",prefixCls:H}),ie&&i.createElement(De,{key:"status",prefixCls:H}));return ce(e?i.createElement(F.Z,{component:"Tag"},n):n)});Se.CheckableTag=Re;var Oe=Se}}]);
