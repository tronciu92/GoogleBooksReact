(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,n){e.exports=n(67)},38:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(29),l=n.n(r),c=(n(38),n(30)),i=n(6),s=n(10),u=n(11),m=n(13),d=n(12),h=n(14),f=n(8),v=n.n(f),E={getGoogleSearchBooks:function(e){return v.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)},getBooks:function(){return v.a.get("/api/books")},getBook:function(e){return v.a.get("/api/books/"+e)},saveBook:function(e){return v.a.post("/api/books",e)},deleteBook:function(e){return v.a.delete("/api/books/"+e)}};function k(e){var t=e.fluid,n=e.children;return o.a.createElement("div",{className:"container".concat(t?"-fluid":"")},n)}function b(e){var t=e.fluid,n=e.children;return o.a.createElement("div",{className:"row".concat(t?"-fluid":"")},n)}function p(e){var t=e.size,n=e.children;return o.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},n)}n(56);var g=function(e){return o.a.createElement(k,null,o.a.createElement("h3",null,"Saved Books"),e.savedBooks.map(function(t){return o.a.createElement("div",null,o.a.createElement("div",{className:"card mb-2"},o.a.createElement("div",{className:"card-body"},o.a.createElement(b,{id:t.title+"Card",key:t._id},o.a.createElement(p,{size:"2"},o.a.createElement("img",{src:t.image,alt:t.title})),o.a.createElement(p,{size:"10",className:"pl-2"},o.a.createElement("h3",{className:"bookTitle"},t.title),o.a.createElement("h4",{className:"bookAuthor"},t.authors),o.a.createElement("p",{className:"bookDescription pr-3"},t.description))),o.a.createElement(b,null,o.a.createElement("button",{className:"delete btn mt-4 ml-3 mr-1",id:t._id,onClick:function(){return e.handleDeleteButton(t._id)}},"Delete Book"),o.a.createElement("a",{href:t.link,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("button",{className:"view btn mt-4"},"View Book"))))))}))},N=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={savedBooks:[]},n.handleDeleteButton=function(e){E.deleteBook(e).then(function(e){return n.componentDidMount()}).catch(function(e){return console.log(e)})},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.getBooks().then(function(t){return e.setState({savedBooks:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return o.a.createElement(g,{savedBooks:this.state.savedBooks,handleDeleteButton:this.handleDeleteButton})}}]),t}(a.Component),w=(n(57),function(e){return o.a.createElement("form",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"BookSearchLabel"},o.a.createElement("h3",null,"Search For Books")),o.a.createElement("br",null),o.a.createElement("input",{className:"col-12 form-control",value:e.search,type:"text",name:"searchBook",placeholder:"Search for a book by Title",onChange:e.handleInputChange})),o.a.createElement("button",{type:"submit",className:"submitBtn btn",onClick:e.handleFormSubmit},"Submit"))}),B=(n(58),function(e){return o.a.createElement(k,null,o.a.createElement("h3",null,"Search Results"),e.books.map(function(t){return o.a.createElement("div",{className:"card mb-5"},o.a.createElement("div",{className:"card-body"},o.a.createElement(b,{className:"SearchResult row",id:t.title+"Card",key:t._id},o.a.createElement(p,{size:"2"},o.a.createElement("img",{src:t.image,alt:t.title})),o.a.createElement(p,{size:"10",className:"pl-2"},o.a.createElement("h3",{className:"bookTitle"},t.title),o.a.createElement("h4",{className:"bookAuthor"},t.authors),o.a.createElement("p",{className:"bookDescription pr-3"},t.description))),o.a.createElement(b,null,o.a.createElement("button",{className:"save btn mt-4 ml-3 mr-1",id:t.id,onClick:function(t){return e.handleSavedButton(t)}},"Save Book"),o.a.createElement("a",{href:t.link,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("button",{className:"view btn mt-4"},"View Book")))))}))}),S=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={search:"",books:[],error:""},n.handleInputChange=function(e){n.setState({search:e.target.value})},n.handleFormSubmit=function(e){e.preventDefault(),E.getGoogleSearchBooks(n.state.search).then(function(e){if("error"===e.data.items)throw new Error(e.data.items);var t=e.data.items;t=t.map(function(e){return e={key:e.id,id:e.id,title:e.volumeInfo.title,authors:e.volumeInfo.authors,description:e.volumeInfo.description,image:e.volumeInfo.imageLinks.thumbnail,link:e.volumeInfo.infoLink}}),n.setState({books:t,search:""})}).catch(function(e){return n.setState({error:e.items})})},n.handleSavedButton=function(e){e.preventDefault();var t=n.state.books.filter(function(t){return t.id===e.target.id});E.saveBook(t).then(console.log(t)).catch(function(e){return console.log(e)})},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(k,{fluid:!0},o.a.createElement(k,null,o.a.createElement(b,null,o.a.createElement(p,{size:"12"},o.a.createElement(w,{handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange})))),o.a.createElement(k,null,o.a.createElement(B,{books:this.state.books,handleSavedButton:this.handleSavedButton})))}}]),t}(a.Component);n(59);var y=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg"},o.a.createElement("a",{className:"navbar-brand",href:"/"},o.a.createElement("h2",{className:"text-white"},"Google Book Search")),o.a.createElement("div",{id:"navbarNav"},o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",{className:"nav-item",id:"home"},o.a.createElement("a",{className:"nav-link",href:"/"},"Search Books")),o.a.createElement("li",{className:"nav-item",id:"report"},o.a.createElement("a",{className:"nav-link",href:"/saved"},"Saved Books")))))};n(60);var j=function(e){var t=e.children;return o.a.createElement("div",{className:"jumbotron jumbotron-fluid d-flex align-items-center"},o.a.createElement("div",{className:"container text-center"},t))},C=(n(61),function(){return o.a.createElement("footer",{className:"page-footer"},o.a.createElement("div",{className:"container-fluid text-center"},o.a.createElement("p",null,"Copyright 2020 - Vasile Tronciu")))});n(62);var D=function(){return o.a.createElement(c.a,null,o.a.createElement("div",null,o.a.createElement(y,null),o.a.createElement(j,null),o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:"/",component:S}),o.a.createElement(i.a,{exact:!0,path:"/saved",component:N})),o.a.createElement(C,null)))},O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(o.a.createElement(D,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");O?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):x(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):x(e)})}}()}},[[33,1,2]]]);
//# sourceMappingURL=main.4e90c67c.chunk.js.map