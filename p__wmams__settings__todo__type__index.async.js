"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9106],{59143:function(N,v,n){n.r(v),n.d(v,{default:function(){return G}});var F=n(5574),h=n.n(F),b=n(3083),j=n(97975),p=n(78957),x=n(14726),S=n(92398),f=n(67294),m=n(85576),Z=n(26412),o=n(65233),c=n(84567),e=n(85893),k=function(d){var i=d.open,a=d.close,r=d.ok;return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(m.Z,{width:"80%",open:i,onCancel:function(){a()},title:"Edit",children:(0,e.jsx)(p.Z,{direction:"vertical",style:{width:"100%"},children:(0,e.jsx)(Z.Z,{column:1,bordered:!0,items:[{label:"Todo Type",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(o.Z,{})})},{label:"Obsolete",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(c.Z,{defaultChecked:!0})})},{label:"Description",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(o.Z,{})})},{label:"Description(Chinese)",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(o.Z,{})})}]})})})})},D=n(97711),T=function(){return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(Z.Z,{column:2,bordered:!0,items:[{label:"Todo Type",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(D.Z,{})})},{label:"Obsolete",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(c.Z,{defaultChecked:!0})})},{label:"Description",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(o.Z,{})})},{label:"Description(Chinese)",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(o.Z,{})})}]})})},C=n(45360),g=n(4393),y=n(80799),O=n(16746),A=function(){var d=(0,f.useState)(!1),i=h()(d,2),a=i[0],r=i[1],u=[{title:"Todo Group Code",render:function(l,s){return(0,e.jsx)("a",{className:"text-blue-600",children:"#123"})}},{title:"Description",render:function(l,s){return(0,e.jsx)("div",{className:"text-overline",children:"template name"})}},{title:"Description(Chinese)",render:function(l,s){return"800"}},{title:"Default",render:function(l,s){return(0,e.jsx)(c.Z,{defaultChecked:!0})}},{title:"Obsolete",render:function(l,s){return(0,e.jsx)(c.Z,{defaultChecked:!0})}},{title:"Action",render:function(l,s){return(0,e.jsx)(x.ZP,{size:"small",danger:!0,children:"Remove"})}}];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(m.Z,{title:"Add Todo Groups",open:a,onOk:function(){r(!1),C.ZP.success("Add successfully")},onCancel:function(){r(!1)},children:(0,e.jsx)(O.Z,{})}),(0,e.jsx)(g.Z,{title:"Todo Groups",extra:(0,e.jsx)(x.ZP,{size:"small",icon:(0,e.jsx)(j.Z,{stroke:1}),onClick:function(){r(!0)}}),children:(0,e.jsx)(y.Z,{columns:u,dataSource:[{id:"",type:""},{id:"",type:""},{id:"",type:""}]})})]})},P=n(24435),z=function(){var d=(0,f.useState)(!1),i=h()(d,2),a=i[0],r=i[1],u=[{title:"Sequence",render:function(l,s){return(0,e.jsx)("a",{className:"text-blue-600",children:"#123"})}},{title:"Description",render:function(l,s){return(0,e.jsx)("div",{className:"text-overline",children:"template name"})}},{title:"Description(Chinese)",render:function(l,s){return"800"}},{title:"Default",render:function(l,s){return(0,e.jsx)(c.Z,{defaultChecked:!0})}},{title:"Sort Order",render:function(l,s){return(0,e.jsx)("b",{children:"1"})}},{title:"Obsolete",render:function(l,s){return(0,e.jsx)(c.Z,{defaultChecked:!0})}},{title:"Action",render:function(l,s){return(0,e.jsx)(x.ZP,{size:"small",danger:!0,children:"Remove"})}}];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(m.Z,{title:"Add Keywords",open:a,onOk:function(){r(!1),C.ZP.success("Add successfully")},onCancel:function(){r(!1)},children:(0,e.jsx)(Z.Z,{column:1,bordered:!0,items:[{label:"Sequence",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(o.Z,{})})},{label:"Description",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(o.Z,{})})},{label:"Description(Chinese)",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(o.Z,{})})},{label:"Default",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(c.Z,{defaultChecked:!0})})},{label:"Sort Order",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(P.Z,{defaultValue:1})})},{label:"Obsolete",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(c.Z,{defaultChecked:!0})})}]})}),(0,e.jsx)(g.Z,{title:"Todo Keywords",extra:(0,e.jsx)(x.ZP,{size:"small",icon:(0,e.jsx)(j.Z,{stroke:1}),onClick:function(){r(!0)}}),children:(0,e.jsx)(y.Z,{columns:u,dataSource:[{id:"",type:""},{id:"",type:""},{id:"",type:""}]})})]})},G=function(){var d=(0,f.useState)(!1),i=h()(d,2),a=i[0],r=i[1];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(k,{open:a,ok:function(){return r(!1)},close:function(){return r(!1)}}),(0,e.jsxs)(p.Z,{direction:"vertical",style:{width:"100%"},children:[(0,e.jsx)(b.Z,{title:"Todo Type Management",extra:(0,e.jsx)(x.ZP,{size:"small",icon:(0,e.jsx)(j.Z,{stroke:1}),onClick:function(){return r(!0)}})}),(0,e.jsx)(T,{}),(0,e.jsx)(S.Z,{type:"card",items:[{key:"groups",label:"Groups",children:(0,e.jsx)(A,{})},{key:"keywords",label:"Keywords List",children:(0,e.jsx)(z,{})}]})]})]})}}}]);
