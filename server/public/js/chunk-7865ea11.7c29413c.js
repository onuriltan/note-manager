(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7865ea11"],{1910:function(s,r,e){},9126:function(s,r,e){"use strict";e.r(r);var a=function(){var s=this,r=s.$createElement,e=s._self._c||r;return e("div",{staticClass:"container"},[e("ProfileComponent")],1)},t=[],o=(e("cadf"),e("551c"),e("097d"),function(){var s=this,r=s.$createElement,e=s._self._c||r;return e("ChangePassword")}),n=[],d=function(){var s=this,r=s.$createElement,e=s._self._c||r;return e("b-form",{staticClass:"change-password-form",on:{submit:function(r){r.preventDefault(),s.changePassword()}}},[e("div",{staticClass:"change-password-form__content"},[e("h2",{staticClass:"change-password-form__content__header"},[s._v("Change Password")]),s.errors.length>0?e("div",{staticClass:"change-password-form__content__errors"},s._l(s.errors,function(r,a){return e("b-alert",{key:a,staticClass:"change-password-form__errors__error ",attrs:{show:"",variant:"danger",size:"lg"}},[s._v("\n        "+s._s(r.msg)+"\n      ")])}),1):s._e(),s.messages.length>0?e("div",{staticClass:"change-password-form__content__errors"},s._l(s.messages,function(r,a){return e("b-alert",{key:a,staticClass:"change-password-form__errors__error ",attrs:{show:"",variant:"success",size:"lg"}},[s._v("\n        "+s._s(r.msg)+"\n      ")])}),1):s._e(),e("b-form-group",{attrs:{id:"oldPassword",label:"Old Password","invalid-feedback":this.fieldErrors.oldPassword,"label-for":"oldPassword"}},[e("b-form-input",{staticClass:"change-password-form__content__input",attrs:{id:"oldPassword",type:"password",state:s.oldPasswordCorrectState},model:{value:s.oldPassword,callback:function(r){s.oldPassword=r},expression:"oldPassword"}})],1),e("b-form-group",{attrs:{id:"newPassword",label:"New Password","invalid-feedback":this.fieldErrors.newPassword,"label-for":"newPassword"}},[e("b-form-input",{staticClass:"change-password-form__content__input",attrs:{id:"newPassword",type:"password",state:s.newPasswordCorrectState},model:{value:s.newPassword,callback:function(r){s.newPassword=r},expression:"newPassword"}})],1),e("b-button",{staticClass:"change-password-form__content__button",class:{"button--loading":s.changePasswordClicked},attrs:{type:"submit",variant:"success"}},[e("i",{staticClass:"fa fa-refresh fa-spin hide--button--loading--icon",class:{"show--button--loading--icon":s.changePasswordClicked}}),e("div",{staticStyle:{margin:"0 5px"}},[s._v("\n        Change Password\n      ")])])],1)])},i=[],l=(e("96cf"),e("3b8d")),c=e("795b"),u=e.n(c),w=e("d225"),h=e("b0b4"),f=e("bc3a"),p=e.n(f),P=e("4360"),m="https://notemanagerapp.herokuapp.com/api/user",g=function(){function s(){Object(w["a"])(this,s)}return Object(h["a"])(s,null,[{key:"getUser",value:function(s){P["a"].dispatch("checkIsAuthenticated");var r={headers:{Authorization:"Bearer ".concat(window.localStorage.getItem("token"))}};return new u.a(function(){var s=Object(l["a"])(regeneratorRuntime.mark(function s(e){var a;return regeneratorRuntime.wrap(function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,p.a.post("".concat(m,"/getUser"),r);case 3:a=s.sent,e(a),s.next=10;break;case 7:s.prev=7,s.t0=s["catch"](0),e(s.t0.response);case 10:case"end":return s.stop()}},s,this,[[0,7]])}));return function(r){return s.apply(this,arguments)}}())}},{key:"changePassword",value:function(s){P["a"].dispatch("checkIsAuthenticated");var r={headers:{Authorization:"Bearer ".concat(window.localStorage.getItem("token"))}};return new u.a(function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(a){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post("".concat(m,"/changePassword"),s,r);case 3:t=e.sent,a(t),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),a(e.t0.response);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(s){return e.apply(this,arguments)}}())}}]),s}(),v=g,_=e("b9e4"),b={name:"ChangePassword",computed:{oldPasswordCorrectState:function(){return null===this.fieldErrors.oldPassword?null:""===this.fieldErrors.oldPassword||""===this.fieldErrors.oldPassword&&void 0},newPasswordCorrectState:function(){return null===this.fieldErrors.newPassword?null:""===this.fieldErrors.newPassword||""===this.fieldErrors.newPassword&&void 0},isValidForm:function(){return""===this.fieldErrors.oldPassword&&""===this.fieldErrors.newPassword}},data:function(){return{errors:[],fieldErrors:{oldPassword:null,newPassword:null},messages:[],oldPassword:"",newPassword:"",changePasswordClicked:!1}},methods:{changePassword:function(){var s=this;this.clearErrors(),this.fieldErrors=Object(_["a"])(this.oldPassword,this.newPassword),this.isValidForm&&(this.changePasswordClicked=!0,setTimeout(Object(l["a"])(regeneratorRuntime.mark(function r(){var e;return regeneratorRuntime.wrap(function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,v.changePassword({oldPassword:s.oldPassword,newPassword:s.newPassword});case 2:e=r.sent,s.changePasswordClicked=!1,e.data.fieldErrors&&(s.fieldErrors=e.data.fieldErrors),e.data.errors&&(s.errors=e.data.errors),200===e.status&&s.messages.push({msg:"Password is changed!"});case 7:case"end":return r.stop()}},r,this)})),1e3))},clearErrors:function(){this.fieldErrors.oldPassword=null,this.fieldErrors.newPassword=null,this.errors=[],this.messages=[]}}},C=b,E=(e("e9d2"),e("2877")),k=Object(E["a"])(C,d,i,!1,null,"7890c109",null);k.options.__file="ChangePassword.vue";var x=k.exports,O={name:"Profile",components:{ChangePassword:x}},y=O,j=Object(E["a"])(y,o,n,!1,null,null,null);j.options.__file="Profile.vue";var q=j.exports,R={name:"Profileview",components:{ProfileComponent:q}},S=R,z=Object(E["a"])(S,a,t,!1,null,null,null);z.options.__file="ProfileView.vue";r["default"]=z.exports},b9e4:function(s,r,e){"use strict";function a(s,r,e){var a={email:"",password:"",password2:""};return s?i(s)?a.email="":a.email="Email is not valid.":a.email="Email required.",r?r.length<6?a.password="Password length should be 6.":a.password="":a.password="Password required.",e?e.length<6?a.password2="Repeat password length should be 6.":e!==r?(a.password="Passwords does not match.",a.password2="Passwords does not match."):(a.password2="",a.password=""):a.password2="Repeat password required.",a}function t(s){var r="";return r=s?i(s)?"":"Email is not valid.":"Email required.",r}function o(s){var r="";return r=s?s.length<6?"Password length should be 6.":"":"Password required.",r}function n(s,r){var e={email:"",password:""};return s?i(s)?e.email="":e.email="Email is not valid.":e.email="Email required.",r?r.length<6?e.password="Password length should be 6.":e.password="":e.password="Password required.",e}function d(s,r){var e={oldPassword:"",newPassword:""};return s?s.length<6&&(e.oldPassword="Password length should be 6."):e.oldPassword="Old password required.",r?r.length<6&&(e.newPassword="Password length should be 6."):e.newPassword="New password required.",e}function i(s){var r=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return r.test(s)}e.d(r,"e",function(){return a}),e.d(r,"b",function(){return t}),e.d(r,"d",function(){return o}),e.d(r,"c",function(){return n}),e.d(r,"a",function(){return d})},e9d2:function(s,r,e){"use strict";var a=e("1910"),t=e.n(a);t.a}}]);
//# sourceMappingURL=chunk-7865ea11.7c29413c.js.map