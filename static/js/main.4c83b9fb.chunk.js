(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(43)},25:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(11),i=a.n(r),l=(a(25),a(12)),s=a(13),m=a(14),c=a(17),p=a(15),u=a(18),h=a(16),d=a.n(h),f=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={mobile:"",first_name:"",employee_id:"",services:""},a.onFormSubmit=function(e){e.preventDefault();var t={mobile:a.state.mobile,first_name:a.state.first_name,employee_id:a.state.employee_id,services:a.state.services},n={"Content-Type":"application/x-www-form-urlencoded",AUTHORIZATION:"Rkx7@a5FHl-L#6Fb9CzF2L-jNz7epF4mEtC"};d.a.post("https://fellafeeds.com/extension/flash-api",t,{headers:n}).then(function(e){console.log(e)}).catch(function(e){console.log(e)})},a.onChange=function(e){a.setState(Object(l.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("form",{onSubmit:function(t){return e.onFormSubmit(t)}},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"mobile"},"Mobile"),o.a.createElement("input",{type:"text",name:"mobile",className:"form-control",id:"mobile","aria-describedby":"emailHelp",placeholder:"Enter Mobile",value:this.state.mobile,onChange:this.onChange})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"first_name"},"First Name"),o.a.createElement("input",{value:this.state.first_name,onChange:this.onChange,type:"text",name:"first_name",className:"form-control",id:"first_name",placeholder:"Enter First Name"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"employee_id"},"Employee Id"),o.a.createElement("input",{value:this.state.employee_id,onChange:this.onChange,type:"text",name:"employee_id",className:"form-control",id:"employee_id",placeholder:"Enter Employee Id"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"services"},"Services"),o.a.createElement("input",{value:this.state.services,onChange:this.onChange,type:"text",name:"services",className:"form-control",id:"services",placeholder:"Enter Services"})),o.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.4c83b9fb.chunk.js.map