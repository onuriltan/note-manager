(function(e){function t(t){for(var r,a,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)a=s[l],o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-0027d6e3":"6d303aa4","chunk-0f2a3035":"ec3c0151","chunk-14028e07":"bda0f20e","chunk-2d237c74":"d603441a","chunk-56fe4638":"1c443f8c","chunk-78d21a06":"959623f7"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-0027d6e3":1,"chunk-0f2a3035":1,"chunk-14028e07":1,"chunk-56fe4638":1,"chunk-78d21a06":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0027d6e3":"57391644","chunk-0f2a3035":"d22b5cae","chunk-14028e07":"f181453d","chunk-2d237c74":"31d6cfe0","chunk-56fe4638":"c5841964","chunk-78d21a06":"dc0caf95"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.request=r,delete a[e],p.parentNode.removeChild(p),n(i)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e),u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}o[e]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0192":function(e,t,n){},"074b":function(e,t,n){e.exports=n.p+"img/empty-paper.747c5c40.png"},"0a56":function(e,t,n){},"41cb":function(e,t,n){"use strict";n("96cf");var r=n("3b8d"),a=n("2b0e"),o=n("8c4f"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("Dashboard")],1)},s=[],c=(n("cadf"),n("551c"),n("097d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"posts-container"},[n("div",{staticClass:"posts"},[n("h1",{staticClass:"posts__header"},[e._v("Latest Notes")]),n("form",{staticClass:"posts__create-form",on:{submit:function(t){return t.preventDefault(),e.createPost(t)}}},[n("b-input-group",{staticClass:"posts__create-form__inputgroup"},[n("b-form-input",{staticClass:"posts__create-form__input",attrs:{type:"text",placeholder:"Create a note ..."},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),n("b-input-group-append",[n("b-btn",{attrs:{type:"submit",variant:"success"}},[e._v("Post!")])],1)],1)],1),n("hr"),n("br"),n("br"),this.pagination.page&&this.pagination.pages&&this.pagination.pages>1?n("b-pagination-nav",{attrs:{"link-gen":e.toPage,"number-of-pages":this.pagination.pages,"use-router":""},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}}):e._e(),n("Notes",{attrs:{editPost:e.editPost,deletePost:e.deletePost,posts:e.posts,isLoading:e.isLoading,searchClicked:e.searchClicked}})],1)])}),u=[],l=n("5a80"),d=n("f125"),p={name:"DashboardComponent",components:{Notes:d["a"]},data:function(){return{posts:[],pagination:{total:0,limit:0,page:0,pages:0},currentPage:1,error:"",text:"",isLoading:!1,searchClicked:!0}},watch:{"$route.params.pageNumber":function(){this.getNotes(1e3)}},methods:{toPage:function(e){return"/dashboard/"+e},createPost:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.isLoading=!0,setTimeout(Object(r["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l["a"].insertPost(t.text);case 2:return e.next=4,t.getNotes(0);case 4:t.isLoading=!1;case 5:case"end":return e.stop()}},e,this)})),1e3);case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),deletePost:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){var n=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.isLoading=!0,setTimeout(Object(r["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l["a"].deletePost(t);case 2:return e.next=4,n.getNotes(0);case 4:n.isLoading=!1;case 5:case"end":return e.stop()}},e,this)})),1e3);case 2:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),editPost:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){var a=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.isLoading=!0,setTimeout(Object(r["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l["a"].editPost(t,n);case 2:return e.next=4,a.getNotes(0);case 4:a.isLoading=!1;case 5:case"end":return e.stop()}},e,this)})),1e3);case 2:case"end":return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}(),getNotes:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){var n=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.isLoading=!0,setTimeout(Object(r["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=[],e.prev=1,!n.$route.params.pageNumber){e.next=8;break}return e.next=5,l["a"].getPosts(n.$route.params.pageNumber);case 5:t=e.sent,e.next=11;break;case 8:return e.next=10,l["a"].getPosts();case 10:t=e.sent;case 11:n.posts=t.docs,n.pagination.total=t.total,n.pagination.limit=t.limit,n.pagination.page=t.page,n.pagination.pages=t.pages,e.next=21;break;case 18:e.prev=18,e.t0=e["catch"](1),n.error=e.t0.message;case 21:n.isLoading=!1;case 22:case"end":return e.stop()}},e,this,[[1,18]])})),t);case 2:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},beforeMount:function(){this.getNotes(1e3)}},f=p,h=(n("f949"),n("2877")),m=Object(h["a"])(f,c,u,!1,null,"b8e778fc",null);m.options.__file="Dashboard.vue";var g=m.exports,v={name:"home",components:{Dashboard:g}},b=v,k=Object(h["a"])(b,i,s,!1,null,null,null);k.options.__file="HomeView.vue";var w=k.exports,_=n("801e"),x=n("4360"),y=function(){return n.e("chunk-0f2a3035").then(n.bind(null,"3bea"))},C=function(){return n.e("chunk-78d21a06").then(n.bind(null,"e846"))},E=function(){return n.e("chunk-56fe4638").then(n.bind(null,"bc91"))},A=function(){return n.e("chunk-2d237c74").then(n.bind(null,"fd22"))},O=function(){return n.e("chunk-14028e07").then(n.bind(null,"e19f"))},P=function(){return n.e("chunk-0027d6e3").then(n.bind(null,"9126"))};function j(e,t,n){return N.apply(this,arguments)}function N(){return N=Object(r["a"])(regeneratorRuntime.mark(function e(t,n,r){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=function(){_["a"].getters.isAuthenticated()?r():r("/login")},e.next=3,x["a"].dispatch("loadUser");case 3:a();case 4:case"end":return e.stop()}},e,this)})),N.apply(this,arguments)}function R(e,t,n){return I.apply(this,arguments)}function I(){return I=Object(r["a"])(regeneratorRuntime.mark(function e(t,n,r){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=function(){_["a"].getters.isAuthenticated()?r("/"):r()},e.next=3,x["a"].dispatch("loadUser");case 3:a();case 4:case"end":return e.stop()}},e,this)})),I.apply(this,arguments)}a["a"].use(o["a"]);t["a"]=new o["a"]({scrollBehavior:function(e,t,n){return{y:0}},mode:"history",linkActiveClass:"active-page",routes:[{path:"/",redirect:"/dashboard"},{path:"*",component:O},{path:"/dashboard/:pageNumber?",name:"home",component:w,beforeEnter:j},{path:"/notes-history/:pageNumber?",name:"history",component:E,beforeEnter:j},{path:"/profile",name:"profile",component:P,beforeEnter:j},{path:"/confirm/:confirmationToken",name:"confirm",component:A,beforeEnter:R},{path:"/login",name:"login",component:y,beforeEnter:R},{path:"/register",name:"register",component:C,beforeEnter:R}]})},4360:function(e,t,n){"use strict";n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=n("2f62"),o=n("801e");r["a"].use(a["a"]);var i=new a["a"].Store({modules:{AuthStore:o["a"]}});t["a"]=i},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:"app"}},[n("SessionExpired"),n("HeaderComponent"),n("router-view")],1)])},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-navbar",{staticClass:"header",attrs:{toggleable:"md",type:"dark",variant:"success"}},[e.isAuthenticated?n("b-navbar-toggle",{attrs:{target:"nav_collapse"}}):e._e(),n("b-navbar-brand",[n("router-link",{staticClass:"header__brand",attrs:{to:"/dashboard"}},[e._v("NoteManager")])],1),e.isAuthenticated?n("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[n("b-navbar-nav",[n("router-link",{staticClass:"header__link nav-link",attrs:{to:"/dashboard"}},[e._v("Latest Notes")]),n("router-link",{staticClass:"header__link nav-link",attrs:{to:"/notes-history"}},[e._v("Notes History")])],1),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-dropdown",{staticClass:"m-md-2",attrs:{right:"",text:"Account"}},[n("b-dropdown-item",{attrs:{to:"/profile"}},[e._v("Profile")]),n("b-dropdown-item",{on:{click:function(t){e.logout()}}},[e._v("Logout")])],1)],1)],1):e._e()],1)},s=[],c=(n("96cf"),n("3b8d")),u={name:"HeaderComponent",computed:{isAuthenticated:function(){return this.$store.state.AuthStore.isAuthenticated}},methods:{logout:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("logout");case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},l=u,d=(n("5919"),n("2877")),p=Object(d["a"])(l,i,s,!1,null,"3b310c1c",null);p.options.__file="Header.vue";var f=p.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{"session-expired-alert":e.sessionExpired},staticStyle:{display:"none"},attrs:{id:"theWarning"}},[n("div",{staticClass:"session-expired-alert__content"},[n("b-alert",{staticClass:"session-expired-alert__content__message",attrs:{show:"",variant:"warning"}},[n("h4",{staticClass:"alert-heading"},[e._v("Warning!")]),n("p",[e._v("Your session is expired. Redirecting to login ...")])])],1)])},m=[],g={name:"SessionExpired",computed:{sessionExpired:function(){return this.$store.state.AuthStore.sessionExpired}},watch:{sessionExpired:function(e,t){}}},v=g,b=(n("a871"),Object(d["a"])(v,h,m,!1,null,"19564561",null));b.options.__file="SessionExpired.vue";var k=b.exports,w={name:"App",components:{SessionExpired:k,HeaderComponent:f}},_=w,x=(n("5c0b"),Object(d["a"])(_,a,o,!1,null,null,null));x.options.__file="App.vue";var y=x.exports,C=n("41cb"),E=n("4360"),A=n("9483");Object(A["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var O=n("9f7b"),P=(n("2dd8"),n("7b38"));r["a"].use(P["Layout"]),r["a"].use(O["a"]),r["a"].config.productionTip=!1,new r["a"]({router:C["a"],store:E["a"],render:function(e){return e(y)}}).$mount("#app")},5919:function(e,t,n){"use strict";var r=n("b7f4"),a=n.n(r);a.a},"5a80":function(e,t,n){"use strict";n("96cf");var r=n("3b8d"),a=n("795b"),o=n.n(a),i=n("d225"),s=n("b0b4"),c=n("bc3a"),u=n.n(c),l=n("4360"),d="https://notemanagerapp.herokuapp.com/api/posts",p=function(){function e(){Object(i["a"])(this,e)}return Object(s["a"])(e,null,[{key:"getPosts",value:function(e){l["a"].dispatch("checkIsAuthenticated");var t={headers:{Authorization:"Bearer ".concat(window.localStorage.getItem("token"))},params:{page:e}};return new o.a(function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(n,r){var a,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get(d,t);case 3:a=e.sent,o=a.data,n(o),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),r(e.t0);case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return function(t,n){return e.apply(this,arguments)}}())}},{key:"getPostsByCriteria",value:function(e,t,n,a){l["a"].dispatch("checkIsAuthenticated");var i={headers:{Authorization:"Bearer ".concat(window.localStorage.getItem("token"))},params:{page:a}};return new o.a(function(){var a=Object(r["a"])(regeneratorRuntime.mark(function r(a,o){var s,c;return regeneratorRuntime.wrap(function(r){while(1)switch(r.prev=r.next){case 0:return""===e&&(e="%20"),""===t&&(t="%20"),""===n&&(n="%20"),r.prev=3,r.next=6,u.a.get("".concat(d,"/").concat(e,"/").concat(t,"/").concat(n),i);case 6:s=r.sent,c=s.data,c.docs!==[]?a(c):a([]),r.next=14;break;case 11:r.prev=11,r.t0=r["catch"](3),o(r.t0);case 14:case"end":return r.stop()}},r,this,[[3,11]])}));return function(e,t){return a.apply(this,arguments)}}())}},{key:"insertPost",value:function(e){return l["a"].dispatch("checkIsAuthenticated"),u.a.post(d,{text:e},{headers:{Authorization:"Bearer ".concat(window.localStorage.getItem("token"))}})}},{key:"deletePost",value:function(e){return l["a"].dispatch("checkIsAuthenticated"),u.a.delete("".concat(d,"/").concat(e),{headers:{Authorization:"Bearer ".concat(window.localStorage.getItem("token"))}})}},{key:"editPost",value:function(e,t){return l["a"].dispatch("checkIsAuthenticated"),u.a.put("".concat(d,"/").concat(e),{text:t},{headers:{Authorization:"Bearer ".concat(window.localStorage.getItem("token"))}})}}]),e}();t["a"]=p},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),a=n.n(r);a.a},"5e27":function(e,t,n){},"801e":function(e,t,n){"use strict";var r=n("e814"),a=n.n(r),o=n("795b"),i=n.n(o),s=(n("cadf"),n("551c"),n("097d"),n("96cf"),n("3b8d")),c=n("d225"),u=n("b0b4"),l=n("bc3a"),d=n.n(l),p="https://notemanagerapp.herokuapp.com/api/auth",f=function(){function e(){Object(c["a"])(this,e)}return Object(u["a"])(e,null,[{key:"login",value:function(e){return new i.a(function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(n){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.post("".concat(p,"/login"),e);case 3:r=t.sent,n(r),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),n(t.t0.response);case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return function(e){return t.apply(this,arguments)}}())}},{key:"register",value:function(e){return new i.a(function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(n){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.post("".concat(p,"/register"),e);case 3:r=t.sent,n(r),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),n(t.t0.response);case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return function(e){return t.apply(this,arguments)}}())}},{key:"resendConfirmationEmail",value:function(e){return new i.a(function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(n){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.post("".concat(p,"/resendConfirmationEmail"),e);case 3:r=t.sent,n(r),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),n(t.t0.response);case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return function(e){return t.apply(this,arguments)}}())}},{key:"confirmUser",value:function(e){return new i.a(function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(n){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.get("".concat(p,"/confirm/").concat(e));case 3:r=t.sent,n(r),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),n(t.t0.response);case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return function(e){return t.apply(this,arguments)}}())}}]),e}(),h=f,m="https://notemanagerapp.herokuapp.com/api/auth",g=function(){function e(){Object(c["a"])(this,e)}return Object(u["a"])(e,null,[{key:"loginWithFacebook",value:function(e){return new i.a(function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(n){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.post("".concat(m,"/facebook"),{access_token:e});case 3:r=t.sent,n(r),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),n(t.t0.response);case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return function(e){return t.apply(this,arguments)}}())}}]),e}(),v=g,b=n("41cb"),k=n("04e1"),w=n.n(k),_={isAuthenticated:!1,sessionExpired:!1},x={state:_,getters:{isAuthenticated:function(){return _.isAuthenticated}},actions:{logout:function(e){e.commit("deleteToken")},login:function(e,t){return new i.a(function(n){h.login(t).then(function(t){return e.commit("updateIsAuthenticated",t),n(t)}).catch(function(e){return n(e)})})},loginWithFacebook:function(e,t){return new i.a(function(n){v.loginWithFacebook(t).then(function(t){return e.commit("updateIsAuthenticated",t),n(t)}).catch(function(e){return n(e)})})},confirmUser:function(e,t){return new i.a(function(n){h.confirmUser(t).then(function(t){return e.commit("updateIsAuthenticated",t),n(t)}).catch(function(e){return n(e)})})},register:function(e,t){return new i.a(function(e){h.register(t).then(function(t){return e(t)}).catch(function(t){return e(t)})})},resendConfirmationEmail:function(e,t){return new i.a(function(e){h.resendConfirmationEmail(t).then(function(t){return e(t)}).catch(function(t){return e(t)})})},loadUser:function(e){e.commit("loadUser")},checkIsAuthenticated:function(e){e.commit("checkIsAuthenticated")}},mutations:{deleteToken:function(e){window.localStorage.removeItem("token"),e.isAuthenticated=!1,b["a"].push("/login")},checkIsAuthenticated:function(e){var t=window.localStorage.getItem("token"),n=(new Date).getTime()/1e3,r=null;null!=t&&(r=w()(t).exp),null!=r&&a()(r)-n<0&&(e.sessionExpired=!0,setTimeout(function(){e.isAuthenticated=!1,b["a"].push("/login"),e.sessionExpired=!1},2e3))},updateIsAuthenticated:function(e,t){200===t.status?(window.localStorage.setItem("token",t.data.token),e.isAuthenticated=!0,e.sessionExpired=!1,b["a"].push("/dashboard")):setTimeout(function(){b["a"].push("/login")},2e3)},loadUser:function(e){var t=window.localStorage.getItem("token"),n=(new Date).getTime()/1e3,r=null;null!=t&&(r=w()(t).exp),null!=r&&a()(r)-n>0&&(e.isAuthenticated=!0,e.sessionExpired=!1)}}};t["a"]=x},8897:function(e,t,n){},a871:function(e,t,n){"use strict";var r=n("8897"),a=n.n(r);a.a},b7f4:function(e,t,n){},c320:function(e,t,n){"use strict";var r=n("0a56"),a=n.n(r);a.a},f125:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"notes"},[e.searchClicked&&0!==e.posts.length&&!1===e.isLoading?r("div",{staticClass:"notes__content"},[r("b-card-group",{staticClass:"notes__content__cards",attrs:{deck:""}},e._l(e.posts,function(t){return r("b-card",{key:t._id,staticClass:"mb-2 notes__content__card slide--in--from--left",attrs:{title:e._f("convertDate")(t.createdAt),tag:"article"}},[r("p",{staticClass:"card-text"},[e._v("\n          "+e._s(t.text)+"\n        ")]),r("div",{staticClass:"notes__content__card__footer",attrs:{slot:"footer"},slot:"footer"},[r("b-button",{attrs:{size:"sm",variant:"danger"},on:{click:function(n){e.showDeleteModal(t._id)}}},[e._v("Delete")]),r("b-button",{attrs:{size:"sm"},on:{click:function(n){e.showEditModal(t._id,t.text)}}},[e._v("Edit")])],1)])}),1),r("b-modal",{ref:"editNoteModal",attrs:{id:"modal",title:"Edit","hide-footer":""}},[r("b-input-group",[r("b-form-input",{attrs:{type:"text"},model:{value:e.tobeEditedText,callback:function(t){e.tobeEditedText=t},expression:"tobeEditedText"}}),r("b-input-group-append",[r("b-btn",{attrs:{variant:"success"},on:{click:function(t){e.neditPost()}}},[e._v("EDIT")])],1)],1)],1),r("b-modal",{ref:"deleteNoteModal",attrs:{id:"modal",title:"Delete"}},[r("p",{staticClass:"my-4"},[e._v("Do you want to delete the note?")]),r("div",{attrs:{slot:"modal-footer"},slot:"modal-footer"},[r("b-btn",{staticClass:"float-right",attrs:{variant:"primary"},on:{click:function(t){e.hideDeleteModal()}}},[e._v("\n          NO\n        ")]),r("b-btn",{staticClass:"float-right",attrs:{variant:"danger"},on:{click:function(t){e.ndeletePost()}}},[e._v("\n          YES\n        ")])],1)])],1):e._e(),e.searchClicked&&0===e.posts.length&&!1===e.isLoading?r("div",{staticClass:"notes__empty slide--in--from--left"},[r("img",{staticClass:"notes__empty__image",attrs:{src:n("074b"),alt:"notes-empty"}}),"Dashboard"===this.$parent.$vnode.componentOptions.tag?r("span",{staticClass:"notes__empty__message"},[e._v("No notes found.")]):e._e(),"History"===this.$parent.$vnode.componentOptions.tag?r("span",{staticClass:"notes__empty__message"},[e._v("No notes were found in the criteria you searched for.")]):e._e()]):e._e(),e.searchClicked&&e.isLoading?r("div",{staticClass:"notes__empty"},[r("i",{staticClass:"fa fa-refresh fa-spin fa-5x"})]):e._e(),"History"!==this.$parent.$vnode.componentOptions.tag||e.searchClicked?e._e():r("div",{staticClass:"notes__empty"})])},a=[],o={name:"Notes",props:{editPost:Function,isLoading:Boolean,deletePost:Function,posts:Array,parentComponentName:String,searchClicked:Boolean},data:function(){return{tobeEditedText:"",tobeDeletedId:"",tobeEditedId:""}},methods:{showEditModal:function(e,t){this.tobeEditedId=e,this.tobeEditedText=t,this.$refs.editNoteModal.show()},showDeleteModal:function(e){this.tobeDeletedId=e,this.$refs.deleteNoteModal.show()},hideDeleteModal:function(){this.tobeDeletedId="",this.$refs.deleteNoteModal.hide()},ndeletePost:function(){this.deletePost(this.tobeDeletedId),this.tobeDeletedId="",this.$refs.deleteNoteModal.hide()},neditPost:function(){this.editPost(this.tobeEditedId,this.tobeEditedText),this.tobeEditedId="",this.tobeEditedText="",this.$refs.editNoteModal.hide()}},filters:{convertDate:function(e){var t=new Date(e);return"".concat(t.getDate(),"/").concat(t.getMonth()+1,"/").concat(t.getFullYear())}}},i=o,s=(n("c320"),n("2877")),c=Object(s["a"])(i,r,a,!1,null,"1604ea1d",null);c.options.__file="Notes.vue";t["a"]=c.exports},f949:function(e,t,n){"use strict";var r=n("0192"),a=n.n(r);a.a}});
//# sourceMappingURL=app.ad795076.js.map