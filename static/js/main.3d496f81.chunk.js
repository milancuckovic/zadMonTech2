(this.webpackJsonpzadatak2=this.webpackJsonpzadatak2||[]).push([[0],{13:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),r=s(3),n=s.n(r),i=s(4),l=s(5),o=s(7),h=s(6),j=s(0),u=function(e){var t=e.repo;return Object(j.jsxs)("div",{className:"card mt-2",children:[Object(j.jsx)("div",{className:"card-header",children:Object(j.jsx)("h3",{className:"h6",children:t.name})}),Object(j.jsx)("div",{className:"card-body",children:Object(j.jsx)("p",{children:t.description})}),Object(j.jsx)("div",{className:"card-footer",children:Object(j.jsxs)("p",{className:"text-success",children:["* ",t.language]})})]})},m=function(e){var t=e.repos.map((function(e){return Object(j.jsx)("div",{className:"col-md-4",children:Object(j.jsx)(u,{repo:e})})}));return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h2",{children:"Repositories:"}),Object(j.jsx)("div",{className:"row",children:t})]})},d=function(e){var t=e.userData,s=e.stars;e.repos;return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-8",children:Object(j.jsx)("img",{src:t.avatar_url,className:"rounded-circle img-thumbnail"})}),Object(j.jsx)("div",{className:"col-md-4",children:Object(j.jsxs)("ul",{className:"list-group",children:[Object(j.jsxs)("li",{className:"list-group-item",title:"Followers",children:[Object(j.jsx)("i",{className:"material-icons pr-2",style:{verticalAlign:"-6px"},children:"\ue8d3"}),t.followers]}),Object(j.jsxs)("li",{className:"list-group-item",title:"Following",children:[Object(j.jsx)("i",{className:"material-icons pr-2",style:{verticalAlign:"-6px"},children:"\ue91f"}),t.following]}),Object(j.jsxs)("li",{className:"list-group-item",title:"stars",children:[Object(j.jsx)("i",{className:"material-icons pr-2",style:{verticalAlign:"-6px"},children:"\ue838"}),s]})]})})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:t.login}),Object(j.jsx)("h4",{className:"font-weight-light",children:t.name}),Object(j.jsx)("h6",{children:"Bio:"}),Object(j.jsx)("p",{children:t.bio}),Object(j.jsx)("a",{href:t.html_url,title:t.html_url,children:"View full on Github"})]})]})},b=function(e){Object(o.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(i.a)(this,s);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={user:"milancuckovic",userData:[],repos:[],stars:0,error:""},e.home=function(){e.setState({user:"milancuckovic"})},e.setSearch=function(t){e.setState({user:t.target.value})},e.Search=function(t){t.preventDefault(),console.log(e.state.user),fetch("https://api.github.com/users/".concat(e.state.user)).then((function(e){return e.json()})).then((function(t){t.message?e.setError(t.message):e.setState({userData:t})})),fetch("https://api.github.com/users/".concat(e.state.user,"/starred")).then((function(e){return e.json()})).then((function(t){t.message?e.setError(t.message):e.setState({stars:t.length})})),fetch("https://api.github.com/users/".concat(e.state.user,"/repos")).then((function(e){return e.json()})).then((function(t){t.message?e.setError(t.message):e.setState({repos:t})}))},e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.github.com/users/milancuckovic").then((function(e){return e.json()})).then((function(t){e.setState({userData:t})})),fetch("https://api.github.com/users/milancuckovic/starred").then((function(e){return e.json()})).then((function(t){e.setState({stars:t.length})})),fetch("https://api.github.com/users/milancuckovic/repos").then((function(e){return e.json()})).then((function(t){e.setState({repos:t})}))}},{key:"setError",value:function(e){this.setState({error:e})}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("nav",{className:"navbar navbar-dark bg-dark justify-content-between",children:[Object(j.jsx)("a",{href:"#",onClick:this.home,className:"navbar-brand",children:"Home"}),Object(j.jsxs)("form",{action:"",onSubmit:this.Search,className:"form-inline",children:[Object(j.jsx)("input",{type:"search",className:"form-control",placeholder:"Users...",onChange:this.setSearch}),Object(j.jsx)("button",{type:"submit",className:"btn btn-dark",children:Object(j.jsx)("i",{className:"fa fa-search"})})]})]}),this.state.error?Object(j.jsx)("h1",{children:this.state.error}):Object(j.jsx)("div",{className:"container mt-4",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-4",children:Object(j.jsx)(d,{userData:this.state.userData,stars:this.state.stars})}),Object(j.jsx)("div",{className:"col-md-8",children:Object(j.jsx)(m,{repos:this.state.repos})})]})})]})}}]),s}(a.a.Component),p=b;n.a.render(Object(j.jsx)(p,{}),document.getElementById("app"))}},[[13,1,2]]]);
//# sourceMappingURL=main.3d496f81.chunk.js.map