(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{87:function(e,n,t){},89:function(e,n,t){"use strict";t.r(n);var a=t(5),r=t(0),c=t.n(r),o=t(8),i=t.n(o),l=t(32),s=(t(86),t(87),t(40)),u=t(39),d=t(134),j=t(135),b=t(136),m=t(127),O=t(133),h=t(121),x=t(128),f=t(51),p=t(58),v=t.n(p),g=t(29),w=Object(g.b)("contacts/add",(function(e){return{payload:Object(f.a)(Object(f.a)({},e),{},{id:v()()})}})),y=Object(g.b)("contacts/delete"),N=t(42);function C(){var e=Object(s.a)(["\n  width: 400px;\n  margin: 0 auto 50px;\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  & > .input {\n    width: 80%;\n    margin-bottom: 30px;\n  }\n  & > .button {\n    width: 80%;\n  }\n"]);return C=function(){return e},e}var k=N.a.form(C()),S=Object(h.a)((function(e){return{formControl:{margin:e.spacing(0),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));var A=Object(l.b)(null,(function(e){return{onAddContact:function(n){return e(w(n))}}}))((function(e){var n=e.onAddContact,t=S(),r=Object(u.b)(),c=(r.register,r.handleSubmit),o=(r.watch,r.errors),i=r.control;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(k,{onSubmit:c((function(e){n(e)})),children:[Object(a.jsx)(u.a,{name:"name",control:i,defaultValue:"",render:function(e){var n=e.onChange,t=e.value;return Object(a.jsx)(d.a,{className:"input",id:"standard-basic",label:"Name",onChange:n,value:t,required:!0})}}),Object(a.jsx)(u.a,{name:"lastName",control:i,defaultValue:"",render:function(e){var n=e.onChange,t=e.value;return Object(a.jsx)(d.a,{className:"input",id:"standard-basic",label:"lastName",onChange:n,value:t,required:!0})}}),o.exampleRequired&&Object(a.jsx)("span",{children:"This is required"}),Object(a.jsx)(u.a,{name:"Age",control:i,defaultValue:"",render:function(e){var n=e.onChange,r=e.value;return Object(a.jsxs)(m.a,{className:t.formControl,children:[Object(a.jsx)(j.a,{id:"demo-simple-select-label",children:"Age"}),Object(a.jsxs)(O.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:r,onChange:n,children:[Object(a.jsx)(b.a,{value:10,children:"Ten"}),Object(a.jsx)(b.a,{value:20,children:"Twenty"}),Object(a.jsx)(b.a,{value:30,children:"Thirty"})]})]})}}),Object(a.jsx)(u.a,{name:"secondName",control:i,defaultValue:"",render:function(e){var n=e.onChange,t=e.value;return Object(a.jsx)(d.a,{className:"input",id:"standard-basic",label:"secondName",onChange:n,value:t,required:!0})}}),Object(a.jsx)(x.a,{className:"button",type:"submit",variant:"contained",color:"secondary",children:"Submit"})]})})})),q=t(129),T=t(132),V=t(130),D=t(131);function z(){var e=Object(s.a)(["\n  width: 100%;\n  margin-bottom: 20px;\n"]);return z=function(){return e},e}function B(){var e=Object(s.a)(["\n  width: 500px;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n"]);return B=function(){return e},e}var F=N.a.ul(B()),J=N.a.li(z()),W=Object(h.a)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});var E=Object(l.b)((function(e){return{contactsArr:e.contacts}}),(function(e){return{onDelete:function(n){return e(y(n))}}}))((function(e){var n=e.onDelete,t=e.contactsArr,r=W();return Object(a.jsx)(F,{children:t.map((function(e){return Object(a.jsx)(J,{children:Object(a.jsxs)(q.a,{className:r.root,children:[Object(a.jsxs)(V.a,{children:[Object(a.jsx)(D.a,{className:r.title,color:"textSecondary",gutterBottom:!0,children:e.name}),Object(a.jsx)(D.a,{className:r.pos,color:"textSecondary",children:e.lastName}),Object(a.jsxs)(D.a,{variant:"body2",component:"p",children:[e.Age,Object(a.jsx)("br",{}),e.secondName]})]}),Object(a.jsx)(T.a,{children:Object(a.jsx)(x.a,{size:"small",onClick:function(){return n(e.id)},children:"Delete Card"})})]})},e.id)}))})}));function I(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(A,{}),Object(a.jsx)(E,{})]})}var M,R=t(14),G=t(11),H=t(62),K=t.n(H),L=Object(g.c)([],(M={},Object(R.a)(M,w,(function(e,n){var t=n.payload;return[].concat(Object(G.a)(e),[t])})),Object(R.a)(M,y,(function(e,n){var t=n.payload;return e.filter((function(e){return e.id!==t}))})),M)),P=[].concat(Object(G.a)(Object(g.d)()),[K.a]),Q=Object(g.a)({reducer:{contacts:L},devTools:!1,middleware:P});i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(l.a,{store:Q,children:Object(a.jsx)(I,{})})}),document.querySelector("#root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.fb18031a.chunk.js.map