(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(6),r=a.n(c),u=(a(16),a(7)),o=a(8),m=a(10),s=a(9),i=a(4),b=a(1),f=function(e){var t=Object(n.useState)([]),a=Object(b.a)(t,2),c=a[0],r=a[1],u=Object(n.useState)([]),o=Object(b.a)(u,2),m=o[0],s=o[1],f=Object(n.useState)([]),E=Object(b.a)(f,2),d=E[0],p=(E[1],Object(n.useState)([])),h=Object(b.a)(p,2),v=h[0],N=h[1],O=Object(n.useState)([0]),j=Object(b.a)(O,2),g=j[0],x=j[1],y=function(e){return function(t){var a=t.target.value;return e(a)}},S=function(e){N([].concat(Object(i.a)(v),[e]))};Object(n.useEffect)((function(){x(v.length>=0?v.map((function(e){return e.amount?-Math.abs(e.amount):0})).reduce((function(e,t){return Number(e)+Number(t)}),0):0)}),[v]);return l.a.createElement("div",{className:"transactionsExpense"},l.a.createElement("div",{className:"expenses"},l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),S({amount:m,expenses:c,id:d}),s(""),r(""),e.getBalance(-Math.abs(m))}},l.a.createElement("input",{type:"text",id:"expense",className:"formfield",name:"expense",placeholder:"Expense...",value:c,onChange:y(r),autoComplete:"off"}),l.a.createElement("input",{type:"text",id:"amount",className:"formfield",name:"amount",placeholder:"Amount...",value:m,onChange:y(s),autoComplete:"off"}),l.a.createElement("button",{type:"submit",className:"btnForm btnExpense"},"Submit"))),l.a.createElement("div",{className:"finalbalance "},l.a.createElement("div",{className:"finalexpense final"},l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{style:{color:g<0?"red":"white"}},"Total Expenses: $",g)),l.a.createElement("tr",null,l.a.createElement("td",null,"EXPENSES"),l.a.createElement("td",null,"AMOUNT"))),v.map((function(t,a){return l.a.createElement("tbody",{key:t.id},l.a.createElement("tr",{key:t.id++},l.a.createElement("td",null,t.expenses),l.a.createElement("td",null,"$"+t.amount),l.a.createElement("td",null,l.a.createElement("button",{className:"btnRemove btnExpenseTable",onClick:function(){return function(t){var a=t;N(v.filter((function(t){return t.id!==a||(e.getBalance(Math.abs(t.amount)),!1)})))}(t.id)}},l.a.createElement("i",{className:"fas fa-trash-alt"})))))}))))))},E=function(e){var t=Object(n.useState)([]),a=Object(b.a)(t,2),c=a[0],r=a[1],u=Object(n.useState)([]),o=Object(b.a)(u,2),m=o[0],s=o[1],f=Object(n.useState)([]),E=Object(b.a)(f,2),d=E[0],p=(E[1],Object(n.useState)([])),h=Object(b.a)(p,2),v=h[0],N=h[1],O=Object(n.useState)([0]),j=Object(b.a)(O,2),g=j[0],x=j[1],y=function(e){return function(t){var a=t.target.value;return e(a)}},S=function(e){N([].concat(Object(i.a)(v),[e]))};Object(n.useEffect)((function(){x(v.length>0?v.map((function(e){return e.amount?e.amount:0})).reduce((function(e,t){return Number(e)+Number(t)}),0):0)}),[v]);return l.a.createElement("div",{className:"transactionsIncome"},l.a.createElement("div",{className:"expenses"},l.a.createElement("span",null,""===m||""===c?l.a.createElement("p",null,"Please Fill Out Input Fields"):""),l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),S({amount:m,expenses:c,id:d}),e.getBalance(m),s(""),r("")}},l.a.createElement("input",{type:"text",id:"expense",className:"formfield",name:"expense",placeholder:"Income...",value:c,onChange:y(r),autoComplete:"off"}),l.a.createElement("input",{type:"text",id:"amount",className:"formfield",name:"amount",placeholder:"Amount...",value:m,onChange:y(s),autoComplete:"off"}),l.a.createElement("button",{type:"submit",className:"btnForm btnIncome"},"Submit"))),l.a.createElement("div",{className:"finalbalance "},l.a.createElement("div",{className:"finalexpense final"},l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{style:{color:g>0?"green":"white"}},"Total Income: $",g.toLocaleString())),l.a.createElement("tr",null,l.a.createElement("td",null,"TYPE"),l.a.createElement("td",null,"INCOME"))),v.map((function(t,a){return l.a.createElement("tbody",{key:t.id},l.a.createElement("tr",{key:t.id++},l.a.createElement("td",null,t.expenses),l.a.createElement("td",null,"$"+t.amount),l.a.createElement("td",null,l.a.createElement("button",{className:"btnRemove btnIncomeTable",onClick:function(){return function(t){var a=t;N(v.filter((function(t){return t.id!==a||(e.getBalance(-t.amount),!1)})))}(t.id)}},l.a.createElement("i",{className:"fas fa-trash-alt"})))))}))))))},d=(a(17),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).getBalance=function(e){n.setState((function(t){return{balance:[t.balance,e].reduce((function(e,t){return Number(e)+Number(t)}),0)}}))},n.state={balance:[0]},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"count"},l.a.createElement("h2",{className:"balancetitle"},"Your Balance"),l.a.createElement("h1",{className:"balance",style:{color:this.state.balance>=0?"green":"red"}},"$",this.state.balance.toLocaleString())),l.a.createElement("div",{className:"transactionsapp"},l.a.createElement(f,{getBalance:function(t){return e.getBalance([t])}}),l.a.createElement(E,{getBalance:function(t){return e.getBalance([t])}})))}}]),a}(l.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.20080b35.chunk.js.map