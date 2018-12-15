!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.KeepRouteView=e()}(this,function(){"use strict";var t=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},e=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),n=new(function(){function n(){t(this,n),this.vmList=[],this.direction="",this.routes=[],this.unWatch=null}return e(n,[{key:"bindVm",value:function(t){return this.vmList.length?this.vmList.push(t):(this.vmList.push(t),window.addEventListener("popstate",this.updateDirection.bind(this)),this.init(t)),this.unBindVm.bind(this,this.vmList.length-1)}},{key:"init",value:function(t){var e=this;["push","replace","back"].forEach(function(n){var i=t.$router[n].bind(t.$router);t.$router[n]=function(){e.direction=n,e.setVmData("direction"),i.apply(void 0,arguments)}}),this.unWatch=t.$router.afterEach(function(t,n){"back"===e.direction||"replace"===e.direction?n.matched.forEach(function(t){var n=e.routes.lastIndexOf(t.components.default.name);n>-1&&e.routes.splice(n,1)}):t.matched.forEach(function(t){var n=t.components.default;!n.name||n.noKeep||e.routes.includes(n.name)||e.routes.push(n.name)}),e.setVmData("routes")})}},{key:"unBindVm",value:function(t){this.vmList.splice(t,1),this.vmList.length||(this.unWatch(),window.removeEventListener("popstate",this.updateDirection.bind(this)))}},{key:"updateDirection",value:function(){this.direction="back",this.setVmData("direction")}},{key:"setVmData",value:function(t){var e=this;this.vmList.forEach(function(n){n[t]=e[t]})}}]),n}()),i={name:"KeepRouteView",props:{include:[String,Array,RegExp],exclude:[String,Array,RegExp],max:{type:Number,default:10},name:[String]},data:function(){return{direction:"",routes:[]}},watch:{direction:function(t){this.$emit("change",t)}},created:function(){if(!this.$router)throw new Error("请在使用该组件前安装vueRouter");var t=n.bindVm(this);this.$once("hook:beforeDestroy",t)},computed:{defaultInclude:function(){return this.include?this.routes.concat(this.include):this.routes}},render:function(t){return t("keep-alive",{props:{include:this.defaultInclude,exclude:this.exclude,max:this.max}},[t("router-view",{props:{name:this.name}})].concat(function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(this.$slots.default||[])))}};return function t(e){t.Installed||(e.component(i.name,i),t.Installed=!0)}});
