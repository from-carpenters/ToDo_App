(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n(1),i=n.n(c),a=n(4),d=n.n(a),r=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),o(e),c(e),i(e),a(e)}))},l=n(5),s=n(6),h=n(2),u=n(8),p=n(7);var m=function(e){return Object(o.jsxs)("div",{className:"todo-item",children:[Object(o.jsx)("input",{className:"hover",type:"checkbox",checked:e.item.completed,onChange:function(){return e.handleChange(e.item.id)}}),Object(o.jsx)("p",{style:e.item.completed?{fontStyle:"italic",fontSize:"16px",color:"green",textDecoration:"line-through"}:{fontStyle:"italic",fontSize:"20px",color:"red"},children:e.item.id+" "+e.item.text})]})},f=[{id:"1.",text:"Take out the trash",completed:!0},{id:"2.",text:"Grocery shopping",completed:!1},{id:"3.",text:"Clean gecko tank",completed:!1},{id:"4.",text:"Mow lawn",completed:!0},{id:"5.",text:"Catch up on arrested development",completed:!0}],g=(n(14),function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={todos:f},e.handleChange=e.handleChange.bind(Object(h.a)(e)),e}return Object(s.a)(n,[{key:"handleChange",value:function(e){this.setState((function(t){return{todos:t.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))}}))}},{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t){return Object(o.jsx)(m,{item:t,handleChange:e.handleChange},t.id)}));return Object(o.jsx)("div",{className:"todo-list",children:t})}}]),n}(i.a.Component));d.a.render(Object(o.jsx)(g,{}),document.getElementById("root")),r()}},[[15,1,2]]]);
//# sourceMappingURL=main.63199b4a.chunk.js.map