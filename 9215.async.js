"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9215],{40056:function(Ke,be,f){f.d(be,{Z:function(){return De}});var c=f(67294),ee=f(89739),ce=f(4340),ue=f(97937),E=f(21640),te=f(78860),ae=f(93967),z=f.n(ae),j=f(29372),L=f(64217),H=f(42550),T=f(96159),Y=f(53124),Q=f(11568),Oe=f(14747),me=f(83559);const ie=(u,d,g,C,R)=>({background:u,border:`${(0,Q.bf)(C.lineWidth)} ${C.lineType} ${d}`,[`${R}-icon`]:{color:g}}),ge=u=>{const{componentCls:d,motionDurationSlow:g,marginXS:C,marginSM:R,fontSize:Z,fontSizeLG:F,lineHeight:U,borderRadiusLG:G,motionEaseInOutCirc:V,withDescriptionIconSize:X,colorText:J,colorTextHeading:ne,withDescriptionPadding:re,defaultPadding:$}=u;return{[d]:Object.assign(Object.assign({},(0,Oe.Wf)(u)),{position:"relative",display:"flex",alignItems:"center",padding:$,wordWrap:"break-word",borderRadius:G,[`&${d}-rtl`]:{direction:"rtl"},[`${d}-content`]:{flex:1,minWidth:0},[`${d}-icon`]:{marginInlineEnd:C,lineHeight:0},"&-description":{display:"none",fontSize:Z,lineHeight:U},"&-message":{color:ne},[`&${d}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${g} ${V}, opacity ${g} ${V},
        padding-top ${g} ${V}, padding-bottom ${g} ${V},
        margin-bottom ${g} ${V}`},[`&${d}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${d}-with-description`]:{alignItems:"flex-start",padding:re,[`${d}-icon`]:{marginInlineEnd:R,fontSize:X,lineHeight:0},[`${d}-message`]:{display:"block",marginBottom:C,color:ne,fontSize:F},[`${d}-description`]:{display:"block",color:J}},[`${d}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},Ce=u=>{const{componentCls:d,colorSuccess:g,colorSuccessBorder:C,colorSuccessBg:R,colorWarning:Z,colorWarningBorder:F,colorWarningBg:U,colorError:G,colorErrorBorder:V,colorErrorBg:X,colorInfo:J,colorInfoBorder:ne,colorInfoBg:re}=u;return{[d]:{"&-success":ie(R,C,g,u,d),"&-info":ie(re,ne,J,u,d),"&-warning":ie(U,F,Z,u,d),"&-error":Object.assign(Object.assign({},ie(X,V,G,u,d)),{[`${d}-description > pre`]:{margin:0,padding:0}})}}},Ee=u=>{const{componentCls:d,iconCls:g,motionDurationMid:C,marginXS:R,fontSizeIcon:Z,colorIcon:F,colorIconHover:U}=u;return{[d]:{"&-action":{marginInlineStart:R},[`${d}-close-icon`]:{marginInlineStart:R,padding:0,overflow:"hidden",fontSize:Z,lineHeight:(0,Q.bf)(Z),backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${g}-close`]:{color:F,transition:`color ${C}`,"&:hover":{color:U}}},"&-close-text":{color:F,transition:`color ${C}`,"&:hover":{color:U}}}}},pe=u=>({withDescriptionIconSize:u.fontSizeHeading3,defaultPadding:`${u.paddingContentVerticalSM}px 12px`,withDescriptionPadding:`${u.paddingMD}px ${u.paddingContentHorizontalLG}px`});var ze=(0,me.I$)("Alert",u=>[ge(u),Ce(u),Ee(u)],pe),ye=function(u,d){var g={};for(var C in u)Object.prototype.hasOwnProperty.call(u,C)&&d.indexOf(C)<0&&(g[C]=u[C]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var R=0,C=Object.getOwnPropertySymbols(u);R<C.length;R++)d.indexOf(C[R])<0&&Object.prototype.propertyIsEnumerable.call(u,C[R])&&(g[C[R]]=u[C[R]]);return g};const Ze={success:ee.Z,info:te.Z,error:ce.Z,warning:E.Z},Se=u=>{const{icon:d,prefixCls:g,type:C}=u,R=Ze[C]||null;return d?(0,T.wm)(d,c.createElement("span",{className:`${g}-icon`},d),()=>({className:z()(`${g}-icon`,{[d.props.className]:d.props.className})})):c.createElement(R,{className:`${g}-icon`})},Me=u=>{const{isClosable:d,prefixCls:g,closeIcon:C,handleClose:R,ariaProps:Z}=u,F=C===!0||C===void 0?c.createElement(ue.Z,null):C;return d?c.createElement("button",Object.assign({type:"button",onClick:R,className:`${g}-close-icon`,tabIndex:0},Z),F):null};var Re=c.forwardRef((u,d)=>{const{description:g,prefixCls:C,message:R,banner:Z,className:F,rootClassName:U,style:G,onMouseEnter:V,onMouseLeave:X,onClick:J,afterClose:ne,showIcon:re,closable:$,closeText:se,closeIcon:q,action:Pe,id:xe}=u,ke=ye(u,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action","id"]),[o,a]=c.useState(!1),e=c.useRef(null);c.useImperativeHandle(d,()=>({nativeElement:e.current}));const{getPrefixCls:t,direction:r,alert:n}=c.useContext(Y.E_),i=t("alert",C),[s,l,m]=ze(i),v=p=>{var w;a(!0),(w=u.onClose)===null||w===void 0||w.call(u,p)},M=c.useMemo(()=>u.type!==void 0?u.type:Z?"warning":"info",[u.type,Z]),y=c.useMemo(()=>typeof $=="object"&&$.closeIcon||se?!0:typeof $=="boolean"?$:q!==!1&&q!==null&&q!==void 0?!0:!!(n!=null&&n.closable),[se,q,$,n==null?void 0:n.closable]),I=Z&&re===void 0?!0:re,S=z()(i,`${i}-${M}`,{[`${i}-with-description`]:!!g,[`${i}-no-icon`]:!I,[`${i}-banner`]:!!Z,[`${i}-rtl`]:r==="rtl"},n==null?void 0:n.className,F,U,m,l),P=(0,L.Z)(ke,{aria:!0,data:!0}),h=c.useMemo(()=>{var p,w;return typeof $=="object"&&$.closeIcon?$.closeIcon:se||(q!==void 0?q:typeof(n==null?void 0:n.closable)=="object"&&(!((p=n==null?void 0:n.closable)===null||p===void 0)&&p.closeIcon)?(w=n==null?void 0:n.closable)===null||w===void 0?void 0:w.closeIcon:n==null?void 0:n.closeIcon)},[q,$,se,n==null?void 0:n.closeIcon]),A=c.useMemo(()=>{const p=$!=null?$:n==null?void 0:n.closable;if(typeof p=="object"){const{closeIcon:w}=p;return ye(p,["closeIcon"])}return{}},[$,n==null?void 0:n.closable]);return s(c.createElement(j.ZP,{visible:!o,motionName:`${i}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:p=>({maxHeight:p.offsetHeight}),onLeaveEnd:ne},(p,w)=>{let{className:N,style:b}=p;return c.createElement("div",Object.assign({id:xe,ref:(0,H.sQ)(e,w),"data-show":!o,className:z()(S,N),style:Object.assign(Object.assign(Object.assign({},n==null?void 0:n.style),G),b),onMouseEnter:V,onMouseLeave:X,onClick:J,role:"alert"},P),I?c.createElement(Se,{description:g,icon:u.icon,prefixCls:i,type:M}):null,c.createElement("div",{className:`${i}-content`},R?c.createElement("div",{className:`${i}-message`},R):null,g?c.createElement("div",{className:`${i}-description`},g):null),Pe?c.createElement("div",{className:`${i}-action`},Pe):null,c.createElement(Me,{isClosable:y,prefixCls:i,closeIcon:h,handleClose:v,ariaProps:A}))}))}),$e=f(15671),Ie=f(43144),Ne=f(61120),Le=f(78814),we=f(82963);function Ae(u,d,g){return d=(0,Ne.Z)(d),(0,we.Z)(u,(0,Le.Z)()?Reflect.construct(d,g||[],(0,Ne.Z)(u).constructor):d.apply(u,g))}var Be=f(60136),Fe=function(u){function d(){var g;return(0,$e.Z)(this,d),g=Ae(this,d,arguments),g.state={error:void 0,info:{componentStack:""}},g}return(0,Be.Z)(d,u),(0,Ie.Z)(d,[{key:"componentDidCatch",value:function(C,R){this.setState({error:C,info:R})}},{key:"render",value:function(){const{message:C,description:R,id:Z,children:F}=this.props,{error:U,info:G}=this.state,V=(G==null?void 0:G.componentStack)||null,X=typeof C=="undefined"?(U||"").toString():C,J=typeof R=="undefined"?V:R;return U?c.createElement(Re,{id:Z,type:"error",message:X,description:c.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},J)}):F}}])}(c.Component);const ve=Re;ve.ErrorBoundary=Fe;var De=ve},62048:function(Ke,be,f){f.d(be,{Z:function(){return ke}});var c=f(67294),ee=f(37762),ce=f(15671),ue=f(43144),E=f(4942),te,ae;function z(o,a,e){if(a<0||a>31||o>>>a)throw new RangeError("Value out of range");for(var t=a-1;t>=0;t--)e.push(o>>>t&1)}function j(o,a){return(o>>>a&1)!=0}function L(o){if(!o)throw new Error("Assertion error")}var H=function(){function o(a,e){(0,ce.Z)(this,o),(0,E.Z)(this,"modeBits",void 0),(0,E.Z)(this,"numBitsCharCount",void 0),this.modeBits=a,this.numBitsCharCount=e}return(0,ue.Z)(o,[{key:"numCharCountBits",value:function(e){return this.numBitsCharCount[Math.floor((e+7)/17)]}}]),o}();te=H,(0,E.Z)(H,"NUMERIC",new te(1,[10,12,14])),(0,E.Z)(H,"ALPHANUMERIC",new te(2,[9,11,13])),(0,E.Z)(H,"BYTE",new te(4,[8,16,16])),(0,E.Z)(H,"KANJI",new te(8,[8,10,12])),(0,E.Z)(H,"ECI",new te(7,[0,0,0]));var T=(0,ue.Z)(function o(a,e){(0,ce.Z)(this,o),(0,E.Z)(this,"ordinal",void 0),(0,E.Z)(this,"formatBits",void 0),this.ordinal=a,this.formatBits=e});ae=T,(0,E.Z)(T,"LOW",new ae(0,1)),(0,E.Z)(T,"MEDIUM",new ae(1,0)),(0,E.Z)(T,"QUARTILE",new ae(2,3)),(0,E.Z)(T,"HIGH",new ae(3,2));var Y=function(){function o(a,e,t){if((0,ce.Z)(this,o),(0,E.Z)(this,"mode",void 0),(0,E.Z)(this,"numChars",void 0),(0,E.Z)(this,"bitData",void 0),this.mode=a,this.numChars=e,this.bitData=t,e<0)throw new RangeError("Invalid argument");this.bitData=t.slice()}return(0,ue.Z)(o,[{key:"getData",value:function(){return this.bitData.slice()}}],[{key:"makeBytes",value:function(e){var t=[],r=(0,ee.Z)(e),n;try{for(r.s();!(n=r.n()).done;){var i=n.value;z(i,8,t)}}catch(s){r.e(s)}finally{r.f()}return new o(H.BYTE,e.length,t)}},{key:"makeNumeric",value:function(e){if(!o.isNumeric(e))throw new RangeError("String contains non-numeric characters");for(var t=[],r=0;r<e.length;){var n=Math.min(e.length-r,3);z(parseInt(e.substring(r,r+n),10),n*3+1,t),r+=n}return new o(H.NUMERIC,e.length,t)}},{key:"makeAlphanumeric",value:function(e){if(!o.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");var t=[],r;for(r=0;r+2<=e.length;r+=2){var n=o.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r))*45;n+=o.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r+1)),z(n,11,t)}return r<e.length&&z(o.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r)),6,t),new o(H.ALPHANUMERIC,e.length,t)}},{key:"makeSegments",value:function(e){return e==""?[]:o.isNumeric(e)?[o.makeNumeric(e)]:o.isAlphanumeric(e)?[o.makeAlphanumeric(e)]:[o.makeBytes(o.toUtf8ByteArray(e))]}},{key:"makeEci",value:function(e){var t=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)z(e,8,t);else if(e<16384)z(2,2,t),z(e,14,t);else if(e<1e6)z(6,3,t),z(e,21,t);else throw new RangeError("ECI assignment value out of range");return new o(H.ECI,0,t)}},{key:"isNumeric",value:function(e){return o.NUMERIC_REGEX.test(e)}},{key:"isAlphanumeric",value:function(e){return o.ALPHANUMERIC_REGEX.test(e)}},{key:"getTotalBits",value:function(e,t){var r=0,n=(0,ee.Z)(e),i;try{for(n.s();!(i=n.n()).done;){var s=i.value,l=s.mode.numCharCountBits(t);if(s.numChars>=1<<l)return 1/0;r+=4+l+s.bitData.length}}catch(m){n.e(m)}finally{n.f()}return r}},{key:"toUtf8ByteArray",value:function(e){for(var t=encodeURI(e),r=[],n=0;n<t.length;n++)t.charAt(n)!="%"?r.push(t.charCodeAt(n)):(r.push(parseInt(t.substring(n+1,n+3),16)),n+=2);return r}}]),o}();(0,E.Z)(Y,"NUMERIC_REGEX",/^[0-9]*$/),(0,E.Z)(Y,"ALPHANUMERIC_REGEX",/^[A-Z0-9 $%*+.\/:-]*$/),(0,E.Z)(Y,"ALPHANUMERIC_CHARSET","0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:");var Q=function(){function o(a,e,t,r){(0,ce.Z)(this,o),(0,E.Z)(this,"size",void 0),(0,E.Z)(this,"mask",void 0),(0,E.Z)(this,"modules",[]),(0,E.Z)(this,"isFunction",[]),(0,E.Z)(this,"version",void 0),(0,E.Z)(this,"errorCorrectionLevel",void 0);var n=r;if(this.version=a,this.errorCorrectionLevel=e,a<o.MIN_VERSION||a>o.MAX_VERSION)throw new RangeError("Version value out of range");if(n<-1||n>7)throw new RangeError("Mask value out of range");this.size=a*4+17;for(var i=[],s=0;s<this.size;s++)i.push(!1);for(var l=0;l<this.size;l++)this.modules.push(i.slice()),this.isFunction.push(i.slice());this.drawFunctionPatterns();var m=this.addEccAndInterleave(t);if(this.drawCodewords(m),n==-1)for(var v=1e9,M=0;M<8;M++){this.applyMask(M),this.drawFormatBits(M);var y=this.getPenaltyScore();y<v&&(n=M,v=y),this.applyMask(M)}L(0<=n&&n<=7),this.mask=n,this.applyMask(n),this.drawFormatBits(n),this.isFunction=[]}return(0,ue.Z)(o,[{key:"getModule",value:function(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}},{key:"getModules",value:function(){return this.modules}},{key:"drawFunctionPatterns",value:function(){for(var e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);for(var t=this.getAlignmentPatternPositions(),r=t.length,n=0;n<r;n++)for(var i=0;i<r;i++)n==0&&i==0||n==0&&i==r-1||n==r-1&&i==0||this.drawAlignmentPattern(t[n],t[i]);this.drawFormatBits(0),this.drawVersion()}},{key:"drawFormatBits",value:function(e){for(var t=this.errorCorrectionLevel.formatBits<<3|e,r=t,n=0;n<10;n++)r=r<<1^(r>>>9)*1335;var i=(t<<10|r)^21522;L(i>>>15==0);for(var s=0;s<=5;s++)this.setFunctionModule(8,s,j(i,s));this.setFunctionModule(8,7,j(i,6)),this.setFunctionModule(8,8,j(i,7)),this.setFunctionModule(7,8,j(i,8));for(var l=9;l<15;l++)this.setFunctionModule(14-l,8,j(i,l));for(var m=0;m<8;m++)this.setFunctionModule(this.size-1-m,8,j(i,m));for(var v=8;v<15;v++)this.setFunctionModule(8,this.size-15+v,j(i,v));this.setFunctionModule(8,this.size-8,!0)}},{key:"drawVersion",value:function(){if(!(this.version<7)){for(var e=this.version,t=0;t<12;t++)e=e<<1^(e>>>11)*7973;var r=this.version<<12|e;L(r>>>18==0);for(var n=0;n<18;n++){var i=j(r,n),s=this.size-11+n%3,l=Math.floor(n/3);this.setFunctionModule(s,l,i),this.setFunctionModule(l,s,i)}}}},{key:"drawFinderPattern",value:function(e,t){for(var r=-4;r<=4;r++)for(var n=-4;n<=4;n++){var i=Math.max(Math.abs(n),Math.abs(r)),s=e+n,l=t+r;0<=s&&s<this.size&&0<=l&&l<this.size&&this.setFunctionModule(s,l,i!=2&&i!=4)}}},{key:"drawAlignmentPattern",value:function(e,t){for(var r=-2;r<=2;r++)for(var n=-2;n<=2;n++)this.setFunctionModule(e+n,t+r,Math.max(Math.abs(n),Math.abs(r))!=1)}},{key:"setFunctionModule",value:function(e,t,r){this.modules[t][e]=r,this.isFunction[t][e]=!0}},{key:"addEccAndInterleave",value:function(e){var t=this.version,r=this.errorCorrectionLevel;if(e.length!=o.getNumDataCodewords(t,r))throw new RangeError("Invalid argument");for(var n=o.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][t],i=o.ECC_CODEWORDS_PER_BLOCK[r.ordinal][t],s=Math.floor(o.getNumRawDataModules(t)/8),l=n-s%n,m=Math.floor(s/n),v=[],M=o.reedSolomonComputeDivisor(i),y=0,I=0;y<n;y++){var S=e.slice(I,I+m-i+(y<l?0:1));I+=S.length;var P=o.reedSolomonComputeRemainder(S,M);y<l&&S.push(0),v.push(S.concat(P))}for(var h=[],A=function(N){v.forEach(function(b,B){(N!=m-i||B>=l)&&h.push(b[N])})},p=0;p<v[0].length;p++)A(p);return L(h.length==s),h}},{key:"drawCodewords",value:function(e){if(e.length!=Math.floor(o.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");for(var t=0,r=this.size-1;r>=1;r-=2){r==6&&(r=5);for(var n=0;n<this.size;n++)for(var i=0;i<2;i++){var s=r-i,l=(r+1&2)==0,m=l?this.size-1-n:n;!this.isFunction[m][s]&&t<e.length*8&&(this.modules[m][s]=j(e[t>>>3],7-(t&7)),t++)}}L(t==e.length*8)}},{key:"applyMask",value:function(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(var t=0;t<this.size;t++)for(var r=0;r<this.size;r++){var n=void 0;switch(e){case 0:n=(r+t)%2==0;break;case 1:n=t%2==0;break;case 2:n=r%3==0;break;case 3:n=(r+t)%3==0;break;case 4:n=(Math.floor(r/3)+Math.floor(t/2))%2==0;break;case 5:n=r*t%2+r*t%3==0;break;case 6:n=(r*t%2+r*t%3)%2==0;break;case 7:n=((r+t)%2+r*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][r]&&n&&(this.modules[t][r]=!this.modules[t][r])}}},{key:"getPenaltyScore",value:function(){for(var e=0,t=0;t<this.size;t++){for(var r=!1,n=0,i=[0,0,0,0,0,0,0],s=0;s<this.size;s++)this.modules[t][s]==r?(n++,n==5?e+=o.PENALTY_N1:n>5&&e++):(this.finderPenaltyAddHistory(n,i),r||(e+=this.finderPenaltyCountPatterns(i)*o.PENALTY_N3),r=this.modules[t][s],n=1);e+=this.finderPenaltyTerminateAndCount(r,n,i)*o.PENALTY_N3}for(var l=0;l<this.size;l++){for(var m=!1,v=0,M=[0,0,0,0,0,0,0],y=0;y<this.size;y++)this.modules[y][l]==m?(v++,v==5?e+=o.PENALTY_N1:v>5&&e++):(this.finderPenaltyAddHistory(v,M),m||(e+=this.finderPenaltyCountPatterns(M)*o.PENALTY_N3),m=this.modules[y][l],v=1);e+=this.finderPenaltyTerminateAndCount(m,v,M)*o.PENALTY_N3}for(var I=0;I<this.size-1;I++)for(var S=0;S<this.size-1;S++){var P=this.modules[I][S];P==this.modules[I][S+1]&&P==this.modules[I+1][S]&&P==this.modules[I+1][S+1]&&(e+=o.PENALTY_N2)}var h=0,A=(0,ee.Z)(this.modules),p;try{for(A.s();!(p=A.n()).done;){var w=p.value;h=w.reduce(function(B,D){return B+(D?1:0)},h)}}catch(B){A.e(B)}finally{A.f()}var N=this.size*this.size,b=Math.ceil(Math.abs(h*20-N*10)/N)-1;return L(0<=b&&b<=9),e+=b*o.PENALTY_N4,L(0<=e&&e<=2568888),e}},{key:"getAlignmentPatternPositions",value:function(){if(this.version==1)return[];for(var e=Math.floor(this.version/7)+2,t=this.version==32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,r=[6],n=this.size-7;r.length<e;n-=t)r.splice(1,0,n);return r}},{key:"finderPenaltyCountPatterns",value:function(e){var t=e[1];L(t<=this.size*3);var r=t>0&&e[2]==t&&e[3]==t*3&&e[4]==t&&e[5]==t;return(r&&e[0]>=t*4&&e[6]>=t?1:0)+(r&&e[6]>=t*4&&e[0]>=t?1:0)}},{key:"finderPenaltyTerminateAndCount",value:function(e,t,r){var n=t;return e&&(this.finderPenaltyAddHistory(n,r),n=0),n+=this.size,this.finderPenaltyAddHistory(n,r),this.finderPenaltyCountPatterns(r)}},{key:"finderPenaltyAddHistory",value:function(e,t){var r=e;t[0]==0&&(r+=this.size),t.pop(),t.unshift(r)}}],[{key:"encodeText",value:function(e,t){var r=Y.makeSegments(e);return o.encodeSegments(r,t)}},{key:"encodeBinary",value:function(e,t){var r=Y.makeBytes(e);return o.encodeSegments([r],t)}},{key:"encodeSegments",value:function(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:40,i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:-1,s=arguments.length>5&&arguments[5]!==void 0?arguments[5]:!0;if(!(o.MIN_VERSION<=r&&r<=n&&n<=o.MAX_VERSION)||i<-1||i>7)throw new RangeError("Invalid value");var l,m;for(l=r;;l++){var v=o.getNumDataCodewords(l,t)*8,M=Y.getTotalBits(e,l);if(M<=v){m=M;break}if(l>=n)throw new RangeError("Data too long")}for(var y=t,I=0,S=[T.MEDIUM,T.QUARTILE,T.HIGH];I<S.length;I++){var P=S[I];s&&m<=o.getNumDataCodewords(l,P)*8&&(y=P)}var h=[],A=(0,ee.Z)(e),p;try{for(A.s();!(p=A.n()).done;){var w=p.value;z(w.mode.modeBits,4,h),z(w.numChars,w.mode.numCharCountBits(l),h);var N=(0,ee.Z)(w.getData()),b;try{for(N.s();!(b=N.n()).done;){var B=b.value;h.push(B)}}catch(x){N.e(x)}finally{N.f()}}}catch(x){A.e(x)}finally{A.f()}L(h.length==m);var D=o.getNumDataCodewords(l,y)*8;L(h.length<=D),z(0,Math.min(4,D-h.length),h),z(0,(8-h.length%8)%8,h),L(h.length%8==0);for(var O=236;h.length<D;O^=253)z(O,8,h);for(var W=[];W.length*8<h.length;)W.push(0);return h.forEach(function(x,K){return W[K>>>3]|=x<<7-(K&7)}),new o(l,y,W,i)}},{key:"getNumRawDataModules",value:function(e){if(e<o.MIN_VERSION||e>o.MAX_VERSION)throw new RangeError("Version number out of range");var t=(16*e+128)*e+64;if(e>=2){var r=Math.floor(e/7)+2;t-=(25*r-10)*r-55,e>=7&&(t-=36)}return L(208<=t&&t<=29648),t}},{key:"getNumDataCodewords",value:function(e,t){return Math.floor(o.getNumRawDataModules(e)/8)-o.ECC_CODEWORDS_PER_BLOCK[t.ordinal][e]*o.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][e]}},{key:"reedSolomonComputeDivisor",value:function(e){if(e<1||e>255)throw new RangeError("Degree out of range");for(var t=[],r=0;r<e-1;r++)t.push(0);t.push(1);for(var n=1,i=0;i<e;i++){for(var s=0;s<t.length;s++)t[s]=o.reedSolomonMultiply(t[s],n),s+1<t.length&&(t[s]^=t[s+1]);n=o.reedSolomonMultiply(n,2)}return t}},{key:"reedSolomonComputeRemainder",value:function(e,t){var r=t.map(function(){return 0}),n=(0,ee.Z)(e),i;try{var s=function(){var m=i.value,v=m^r.shift();r.push(0),t.forEach(function(M,y){return r[y]^=o.reedSolomonMultiply(M,v)})};for(n.s();!(i=n.n()).done;)s()}catch(l){n.e(l)}finally{n.f()}return r}},{key:"reedSolomonMultiply",value:function(e,t){if(e>>>8||t>>>8)throw new RangeError("Byte out of range");for(var r=0,n=7;n>=0;n--)r=r<<1^(r>>>7)*285,r^=(t>>>n&1)*e;return L(r>>>8==0),r}}]),o}();(0,E.Z)(Q,"MIN_VERSION",1),(0,E.Z)(Q,"MAX_VERSION",40),(0,E.Z)(Q,"PENALTY_N1",3),(0,E.Z)(Q,"PENALTY_N2",3),(0,E.Z)(Q,"PENALTY_N3",40),(0,E.Z)(Q,"PENALTY_N4",10),(0,E.Z)(Q,"ECC_CODEWORDS_PER_BLOCK",[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]]),(0,E.Z)(Q,"NUM_ERROR_CORRECTION_BLOCKS",[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]]);var Oe={L:T.LOW,M:T.MEDIUM,Q:T.QUARTILE,H:T.HIGH},me=128,ie="L",ge="#FFFFFF",Ce="#000000",Ee=!1,pe=1,ze=4,ye=0,Ze=.1;function Se(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,e=[];return o.forEach(function(t,r){var n=null;t.forEach(function(i,s){if(!i&&n!==null){e.push("M".concat(n+a," ").concat(r+a,"h").concat(s-n,"v1H").concat(n+a,"z")),n=null;return}if(s===t.length-1){if(!i)return;n===null?e.push("M".concat(s+a,",").concat(r+a," h1v1H").concat(s+a,"z")):e.push("M".concat(n+a,",").concat(r+a," h").concat(s+1-n,"v1H").concat(n+a,"z"));return}i&&n===null&&(n=s)})}),e.join("")}function Me(o,a){return o.slice().map(function(e,t){return t<a.y||t>=a.y+a.h?e:e.map(function(r,n){return n<a.x||n>=a.x+a.w?r:!1})})}function Ve(o,a,e,t){if(t==null)return null;var r=o.length+e*2,n=Math.floor(a*Ze),i=r/a,s=(t.width||n)*i,l=(t.height||n)*i,m=t.x==null?o.length/2-s/2:t.x*i,v=t.y==null?o.length/2-l/2:t.y*i,M=t.opacity==null?1:t.opacity,y=null;if(t.excavate){var I=Math.floor(m),S=Math.floor(v),P=Math.ceil(s+m-I),h=Math.ceil(l+v-S);y={x:I,y:S,w:P,h}}var A=t.crossOrigin;return{x:m,y:v,h:l,w:s,excavation:y,opacity:M,crossOrigin:A}}function Re(o,a){return a!=null?Math.floor(a):o?ze:ye}var $e=function(){try{new Path2D().addPath(new Path2D)}catch(o){return!1}return!0}(),Ie=f(87462),Ne=f(1413),Le=f(97685),we=f(45987);function Ae(o){var a=o.value,e=o.level,t=o.minVersion,r=o.includeMargin,n=o.marginSize,i=o.imageSettings,s=o.size,l=(0,c.useMemo)(function(){var S=Y.makeSegments(a);return Q.encodeSegments(S,Oe[e],t)},[a,e,t]),m=(0,c.useMemo)(function(){var S=l.getModules(),P=Re(r,n),h=S.length+P*2,A=Ve(S,s,P,i);return{cells:S,margin:P,numCells:h,calculatedImageSettings:A}},[l,s,i,r,n]),v=m.cells,M=m.margin,y=m.numCells,I=m.calculatedImageSettings;return{qrcode:l,margin:M,cells:v,numCells:y,calculatedImageSettings:I}}var Be=["value","size","level","bgColor","fgColor","includeMargin","minVersion","marginSize","style","imageSettings"],Te=c.forwardRef(function(a,e){var t=a.value,r=a.size,n=r===void 0?me:r,i=a.level,s=i===void 0?ie:i,l=a.bgColor,m=l===void 0?ge:l,v=a.fgColor,M=v===void 0?Ce:v,y=a.includeMargin,I=y===void 0?Ee:y,S=a.minVersion,P=S===void 0?pe:S,h=a.marginSize,A=a.style,p=a.imageSettings,w=(0,we.Z)(a,Be),N=p==null?void 0:p.src,b=(0,c.useRef)(null),B=(0,c.useRef)(null),D=(0,c.useCallback)(function(oe){b.current=oe,typeof e=="function"?e(oe):e&&(e.current=oe)},[e]),O=(0,c.useState)(!1),W=(0,Le.Z)(O,2),x=W[1],K=Ae({value:t,level:s,minVersion:P,includeMargin:I,marginSize:h,imageSettings:p,size:n}),le=K.margin,de=K.cells,fe=K.numCells,k=K.calculatedImageSettings;(0,c.useEffect)(function(){if(b.current!=null){var oe=b.current,_=oe.getContext("2d");if(!_)return;var Qe=de,he=B.current,je=k!=null&&he!==null&&he.complete&&he.naturalHeight!==0&&he.naturalWidth!==0;je&&k.excavation!=null&&(Qe=Me(de,k.excavation));var Ge=window.devicePixelRatio||1;oe.height=oe.width=n*Ge;var We=n/fe*Ge;_.scale(We,We),_.fillStyle=m,_.fillRect(0,0,fe,fe),_.fillStyle=M,$e?_.fill(new Path2D(Se(Qe,le))):de.forEach(function(Ye,Xe){Ye.forEach(function(Je,qe){Je&&_.fillRect(qe+le,Xe+le,1,1)})}),k&&(_.globalAlpha=k.opacity),je&&_.drawImage(he,k.x+le,k.y+le,k.w,k.h)}}),(0,c.useEffect)(function(){x(!1)},[N]);var Ue=(0,Ne.Z)({height:n,width:n},A),He=null;return N!=null&&(He=c.createElement("img",{src:N,key:N,style:{display:"none"},onLoad:function(){x(!0)},ref:B,crossOrigin:k==null?void 0:k.crossOrigin})),c.createElement(c.Fragment,null,c.createElement("canvas",(0,Ie.Z)({style:Ue,height:n,width:n,ref:D,role:"img"},w)),He)});Te.displayName="QRCodeCanvas";var Fe=["value","size","level","bgColor","fgColor","includeMargin","minVersion","title","marginSize","imageSettings"],ve=c.forwardRef(function(a,e){var t=a.value,r=a.size,n=r===void 0?me:r,i=a.level,s=i===void 0?ie:i,l=a.bgColor,m=l===void 0?ge:l,v=a.fgColor,M=v===void 0?Ce:v,y=a.includeMargin,I=y===void 0?Ee:y,S=a.minVersion,P=S===void 0?pe:S,h=a.title,A=a.marginSize,p=a.imageSettings,w=(0,we.Z)(a,Fe),N=Ae({value:t,level:s,minVersion:P,includeMargin:I,marginSize:A,imageSettings:p,size:n}),b=N.margin,B=N.cells,D=N.numCells,O=N.calculatedImageSettings,W=B,x=null;p!=null&&O!=null&&(O.excavation!=null&&(W=Me(B,O.excavation)),x=c.createElement("image",{href:p.src,height:O.h,width:O.w,x:O.x+b,y:O.y+b,preserveAspectRatio:"none",opacity:O.opacity,crossOrigin:O.crossOrigin}));var K=Se(W,b);return c.createElement("svg",(0,Ie.Z)({height:n,width:n,viewBox:"0 0 ".concat(D," ").concat(D),ref:e,role:"img"},w),!!h&&c.createElement("title",null,h),c.createElement("path",{fill:m,d:"M0,0 h".concat(D,"v").concat(D,"H0z"),shapeRendering:"crispEdges"}),c.createElement("path",{fill:M,d:K,shapeRendering:"crispEdges"}),x)});ve.displayName="QRCodeSVG";var De=f(93967),u=f.n(De),d=f(53124),g=f(10110),C=f(29691),R=f(11568),Z=f(10274),F=f(14747),U=f(83559),G=f(83262);const V=o=>{const{componentCls:a,lineWidth:e,lineType:t,colorSplit:r}=o;return{[a]:Object.assign(Object.assign({},(0,F.Wf)(o)),{display:"flex",justifyContent:"center",alignItems:"center",padding:o.paddingSM,backgroundColor:o.colorWhite,borderRadius:o.borderRadiusLG,border:`${(0,R.bf)(e)} ${t} ${r}`,position:"relative",overflow:"hidden",[`& > ${a}-mask`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,zIndex:10,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",color:o.colorText,lineHeight:o.lineHeight,background:o.QRCodeMaskBackgroundColor,textAlign:"center",[`& > ${a}-expired, & > ${a}-scanned`]:{color:o.QRCodeTextColor}},"> canvas":{alignSelf:"stretch",flex:"auto",minWidth:0},"&-icon":{marginBlockEnd:o.marginXS,fontSize:o.controlHeight}}),[`${a}-borderless`]:{borderColor:"transparent",padding:0,borderRadius:0}}},X=o=>({QRCodeMaskBackgroundColor:new Z.C(o.colorBgContainer).setAlpha(.96).toRgbString()});var J=(0,U.I$)("QRCode",o=>{const a=(0,G.IX)(o,{QRCodeTextColor:o.colorText});return V(a)},X),ne=f(33160),re=f(14726),$=f(57381);const se=c.createElement($.Z,null);function q(o){let{prefixCls:a,locale:e,onRefresh:t,statusRender:r,status:n}=o;const i=c.createElement(c.Fragment,null,c.createElement("p",{className:`${a}-expired`},e==null?void 0:e.expired),t&&c.createElement(re.ZP,{type:"link",icon:c.createElement(ne.Z,null),onClick:t},e==null?void 0:e.refresh)),s=c.createElement("p",{className:`${a}-scanned`},e==null?void 0:e.scanned),l={expired:i,loading:se,scanned:s},m=M=>l[M.status];return(r!=null?r:m)({status:n,locale:e,onRefresh:t})}var Pe=function(o,a){var e={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&a.indexOf(t)<0&&(e[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(o);r<t.length;r++)a.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(o,t[r])&&(e[t[r]]=o[t[r]]);return e},ke=o=>{var a,e,t,r;const[,n]=(0,C.ZP)(),{value:i,type:s="canvas",icon:l="",size:m=160,iconSize:v,color:M=n.colorText,errorLevel:y="M",status:I="active",bordered:S=!0,onRefresh:P,style:h,className:A,rootClassName:p,prefixCls:w,bgColor:N="transparent",statusRender:b}=o,B=Pe(o,["value","type","icon","size","iconSize","color","errorLevel","status","bordered","onRefresh","style","className","rootClassName","prefixCls","bgColor","statusRender"]),{getPrefixCls:D}=(0,c.useContext)(d.E_),O=D("qrcode",w),[W,x,K]=J(O),le={src:l,x:void 0,y:void 0,height:typeof v=="number"?v:(a=v==null?void 0:v.height)!==null&&a!==void 0?a:40,width:typeof v=="number"?v:(e=v==null?void 0:v.width)!==null&&e!==void 0?e:40,excavate:!0,crossOrigin:"anonymous"},de={value:i,size:m,level:y,bgColor:N,fgColor:M,style:{width:h==null?void 0:h.width,height:h==null?void 0:h.height},imageSettings:l?le:void 0},[fe]=(0,g.Z)("QRCode");if(!i)return null;const k=u()(O,A,p,x,K,{[`${O}-borderless`]:!S}),Ue=Object.assign(Object.assign({backgroundColor:N},h),{width:(t=h==null?void 0:h.width)!==null&&t!==void 0?t:m,height:(r=h==null?void 0:h.height)!==null&&r!==void 0?r:m});return W(c.createElement("div",Object.assign({},B,{className:k,style:Ue}),I!=="active"&&c.createElement("div",{className:`${O}-mask`},c.createElement(q,{prefixCls:O,locale:fe,status:I,onRefresh:P,statusRender:b})),s==="canvas"?c.createElement(Te,Object.assign({},de)):c.createElement(ve,Object.assign({},de))))}}}]);
