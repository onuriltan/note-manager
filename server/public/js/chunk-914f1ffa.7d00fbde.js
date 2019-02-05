(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-914f1ffa"],{"3bea":function(e,s,r){"use strict";r.r(s);var t=function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("LoginComponent")},i=[],a=(r("cadf"),r("551c"),r("097d"),function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",{staticClass:"login-container"},[r("b-form",{staticClass:"login-form",on:{submit:function(s){s.preventDefault(),e.login()}}},[r("h2",{staticClass:"login-form__header"},[e._v("Login")]),e.errors.length>0?r("div",{staticClass:"login-form__errors"},e._l(e.errors,function(s,t){return r("b-alert",{key:t,staticClass:"login-form__errors__error",attrs:{show:"",variant:"danger",size:"lg"}},[e._v("\n        "+e._s(s.msg)+"\n      ")])}),1):e._e(),r("b-form-group",{attrs:{id:"email",label:"Email","invalid-feedback":e.invalidEmailMessage,"label-for":"email"}},[r("b-form-input",{staticClass:"login-form__input",attrs:{id:"email",type:"email",state:e.emailCorrectState,size:"lg"},nativeOn:{keydown:function(s){return e.validateEmail(s)}},model:{value:e.email,callback:function(s){e.email=s},expression:"email"}})],1),r("b-form-group",{attrs:{id:"password",label:"Password","invalid-feedback":e.invalidPasswordMessage,"label-for":"password"}},[r("b-form-input",{staticClass:"login-form__input",attrs:{id:"password",type:"password",state:e.passwordCorrectState,size:"lg"},nativeOn:{keydown:function(s){return e.validatePassword(s)}},model:{value:e.password,callback:function(s){e.password=s},expression:"password"}})],1),r("div",{staticStyle:{"font-weight":"bold",margin:"30px 0","text-align":"center"}},[r("router-link",{attrs:{to:"/register"}},[e._v("Dont have an account? Register from here!")])],1),r("b-button",{staticClass:"login-form__button",class:{"button--loading":e.loginClicked},attrs:{type:"submit",variant:"success",size:"lg"}},[r("i",{staticClass:"fa fa-refresh fa-spin hide--button--loading--icon",class:{"show--button--loading--icon":e.loginClicked}}),r("div",{staticStyle:{margin:"0 5px"}},[e._v("\n        Login\n      ")])])],1)],1)}),n=[],o=(r("96cf"),r("3b8d")),l=r("b9e4"),d={name:"LoginComponent",data:function(){return{errors:[],fieldErrors:{email:null,password:null},email:"",password:"",loginClicked:!1,isEmailEntered:!1,isPasswordEntered:!1}},computed:{invalidEmailMessage:function(){return this.fieldErrors.email},invalidPasswordMessage:function(){return this.fieldErrors.password},isValidForm:function(){return""===this.fieldErrors.email&&""===this.fieldErrors.password},emailCorrectState:function(){return!(!this.isEmailEntered||""!==this.invalidEmailMessage)||(!this.isEmailEntered||""===this.invalidEmailMessage)&&null},passwordCorrectState:function(){return!(!this.isPasswordEntered||""!==this.invalidPasswordMessage)||(!this.isPasswordEntered||""===this.invalidPasswordMessage)&&null}},methods:{validateEmail:function(){var e=this;setTimeout(function(){e.isEmailEntered=!0,e.fieldErrors.email=Object(l["a"])(e.email)},600)},validatePassword:function(){var e=this;setTimeout(function(){e.isPasswordEntered=!0,e.fieldErrors.password=Object(l["c"])(e.password)},600)},login:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var s=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.errors=[],this.fieldErrors=Object(l["b"])(this.email,this.password),this.isValidForm&&(this.loginClicked=!0,setTimeout(Object(o["a"])(regeneratorRuntime.mark(function e(){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.$store.dispatch("login",{email:s.email,password:s.password});case 2:r=e.sent,s.loginClicked=!1,r.data.fieldErrors&&(s.fieldErrors=r.data.fieldErrors),r.data.errors&&(s.errors=r.data.errors);case 6:case"end":return e.stop()}},e,this)})),1e3));case 3:case"end":return e.stop()}},e,this)}));function s(){return e.apply(this,arguments)}return s}()}},u=d,c=(r("96a6"),r("2877")),m=Object(c["a"])(u,a,n,!1,null,"68775cce",null);m.options.__file="Login.vue";var f=m.exports,p={name:"login",components:{LoginComponent:f}},w=p,g=Object(c["a"])(w,t,i,!1,null,null,null);g.options.__file="LoginView.vue";s["default"]=g.exports},8684:function(e,s,r){},"96a6":function(e,s,r){"use strict";var t=r("8684"),i=r.n(t);i.a},b9e4:function(e,s,r){"use strict";function t(e,s,r){var t={email:"",password:"",password2:""};return e?o(e)?t.email="":t.email="Email is not valid.":t.email="Email required.",s?s.length<6?t.password="Password length should be 6.":t.password="":t.password="Password required.",r?r.length<6?t.password2="Repeat password length should be 6.":r!==s?(t.password="Passwords does not match.",t.password2="Passwords does not match."):(t.password2="",t.password=""):t.password2="Repeat password required.",t}function i(e){var s="";return s=e?o(e)?"":"Email is not valid.":"Email required.",s}function a(e){var s="";return s=e?e.length<6?"Password length should be 6.":"":"Password required.",s}function n(e,s){var r={email:"",password:""};return e?o(e)?r.email="":r.email="Email is not valid.":r.email="Email required.",s?s.length<6?r.password="Password length should be 6.":r.password="":r.password="Password required.",r}function o(e){var s=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return s.test(e)}r.d(s,"d",function(){return t}),r.d(s,"a",function(){return i}),r.d(s,"c",function(){return a}),r.d(s,"b",function(){return n})}}]);
//# sourceMappingURL=chunk-914f1ffa.7d00fbde.js.map