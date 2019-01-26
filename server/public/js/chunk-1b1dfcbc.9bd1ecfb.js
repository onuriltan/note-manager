(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b1dfcbc"],{"3af6":function(s,r,e){},"7e79":function(s,r,e){"use strict";var t=e("3af6"),i=e.n(t);i.a},e846:function(s,r,e){"use strict";e.r(r);var t=function(){var s=this,r=s.$createElement,e=s._self._c||r;return e("RegisterComponent")},i=[],a=(e("cadf"),e("551c"),e("097d"),function(){var s=this,r=s.$createElement,e=s._self._c||r;return e("div",{staticClass:"login-container"},[e("b-form",{staticClass:"login-form",on:{submit:function(r){r.preventDefault(),s.register()}}},[e("h2",{staticClass:"login-form__header"},[s._v("Register")]),e("div",{staticStyle:{"font-weight":"bold","margin-bottom":"20px","text-align":"center"}},[e("router-link",{attrs:{to:"/login"}},[s._v("Go back to login page!")])],1),s.errors.length>0?e("div",{staticClass:"login-form__errors"},s._l(s.errors,function(r,t){return e("b-alert",{key:t,attrs:{show:"",variant:"danger",size:"lg"}},[s._v("\n        "+s._s(r.msg)+"\n      ")])}),1):s._e(),s.messages.length>0?e("div",{staticClass:"login-form__errors"},s._l(s.messages,function(r,t){return e("b-alert",{key:t,attrs:{show:"",variant:"success",size:"lg"}},[s._v("\n        "+s._s(r.msg)+"\n      ")])}),1):s._e(),e("b-form-group",{attrs:{id:"email",label:"Email","invalid-feedback":s.invalidEmail,"label-for":"email"}},[e("b-form-input",{staticClass:"login-form__input",attrs:{id:"email",type:"email",size:"lg",required:""},model:{value:s.email,callback:function(r){s.email=r},expression:"email"}})],1),e("b-form-group",{attrs:{id:"password",label:"Password","invalid-feedback":s.invalidPassword,"label-for":"password"}},[e("b-form-input",{staticClass:"login-form__input",attrs:{id:"password",type:"password",size:"lg",required:""},model:{value:s.password,callback:function(r){s.password=r},expression:"password"}})],1),e("b-form-group",{attrs:{id:"password2",label:"Repeat Password","invalid-feedback":s.invalidPassword2,"label-for":"password2"}},[e("b-form-input",{staticClass:"login-form__input",attrs:{id:"password2",type:"password",size:"lg",required:""},model:{value:s.password2,callback:function(r){s.password2=r},expression:"password2"}})],1),e("b-button",{staticClass:"login-form__button",attrs:{type:"submit",variant:"success",size:"lg"}},[s._v("Register")])],1)],1)}),o=[],n=(e("96cf"),e("3b8d")),l={name:"RegisterComponent",data:function(){return{errors:[],fieldErrors:{email:"",password:"",password2:""},messages:[],email:"",password:"",password2:""}},computed:{invalidEmail:function(){return this.fieldErrors.email},invalidPassword:function(){return this.fieldErrors.password},invalidPassword2:function(){return this.fieldErrors.password2}},methods:{validateForm:function(){return this.email?this.validEmail(this.email)?this.fieldErrors.email="":this.fieldErrors.email="Email is not valid.":this.fieldErrors.email="Email required.",this.password?this.password.length<6?this.fieldErrors.password="Password length should be 6.":this.fieldErrors.password="":this.fieldErrors.password="Password required.",this.password2?this.password2.length<6?this.fieldErrors.password2="Repeat password length should be 6.":this.password2!==this.password?(this.fieldErrors.password="Passwords does not match.",this.fieldErrors.password2="Passwords does not match."):(this.fieldErrors.password2="",this.fieldErrors.password=""):this.fieldErrors.password2="Repeat password required.",""===this.fieldErrors.email&&""===this.fieldErrors.password&&""===this.fieldErrors.password2},validEmail:function(s){var r=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return r.test(s)},register:function(){var s=Object(n["a"])(regeneratorRuntime.mark(function s(){var r,e;return regeneratorRuntime.wrap(function(s){while(1)switch(s.prev=s.next){case 0:if(this.errors=[],r=this.validateForm(),!r){s.next=8;break}return s.next=5,this.$store.dispatch("register",{email:this.email,password:this.password,password2:this.password2});case 5:e=s.sent,e.data.errors&&(this.errors=e.data.errors),e.data.messages&&(this.messages=e.data.messages);case 8:case"end":return s.stop()}},s,this)}));function r(){return s.apply(this,arguments)}return r}()}},d=l,p=(e("7e79"),e("2877")),u=Object(p["a"])(d,a,o,!1,null,"383155ca",null);u.options.__file="Register.vue";var c=u.exports,f={name:"register",components:{RegisterComponent:c}},m=f,w=Object(p["a"])(m,t,i,!1,null,null,null);w.options.__file="RegisterView.vue";r["default"]=w.exports}}]);
//# sourceMappingURL=chunk-1b1dfcbc.9bd1ecfb.js.map