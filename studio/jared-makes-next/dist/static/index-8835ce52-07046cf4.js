import{s as j,B as P,r as l,j as n,P as h,a as b,u as v,b as B,c as E,d as H,e as I,A as k,f as y}from"./sanity-55d2a7ba.js";var u;function C(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function O(t){const{actionHandlers:e,index:o,menuItems:s,menuItemGroups:r,title:i}=t,{features:a}=v();return!(s!=null&&s.length)&&!i?null:n.jsx(B,{actions:n.jsx(E,{menuItems:s,menuItemGroups:r,actionHandlers:e}),backButton:a.backButton&&o>0&&n.jsx(H,{as:I,"data-as":"a",icon:k,mode:"bleed"}),title:i})}const g=j(P)(u||(u=C([`
  position: relative;
`])));function A(t){const{children:e}=t,{collapsed:o}=y();return n.jsx(g,{hidden:o,height:"fill",overflow:"auto",children:e})}function T(t){const{index:e,pane:o,paneKey:s,...r}=t,{child:i,component:a,menuItems:d,menuItemGroups:m,title:p="",type:L,...f}=o,[c,x]=l.useState(null);return n.jsxs(h,{id:s,minWidth:320,selected:r.isSelected,children:[n.jsx(O,{actionHandlers:c==null?void 0:c.actionHandlers,index:e,menuItems:d,menuItemGroups:m,title:p}),n.jsxs(A,{children:[b.isValidElementType(a)&&l.createElement(a,{...r,...f,ref:x,child:i,paneKey:s}),l.isValidElement(a)&&a]})]})}export{T as default};
