var __extends=this&&this.__extends||function(){var t=function(e,r){t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)if(e.hasOwnProperty(r))t[r]=e[r]};return t(e,r)};return function(e,r){t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(t,e,r,n){function o(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,i){function s(t){try{u(n.next(t))}catch(e){i(e)}}function a(t){try{u(n["throw"](t))}catch(e){i(e)}}function u(t){t.done?r(t.value):o(t.value).then(s,a)}u((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(t){return function(e){return u([t,e])}}function u(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,o&&(i=s[0]&2?o["return"]:s[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,s[1])).done)return i;if(o=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;o=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){r.label=s[1];break}if(s[0]===6&&r.label<i[1]){r.label=i[1];i=s;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(s);break}if(i[2])r.ops.pop();r.trys.pop();continue}s=e.call(t,r)}catch(a){s=[6,a];o=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;for(var n=Array(t),o=0,e=0;e<r;e++)for(var i=arguments[e],s=0,a=i.length;s<a;s++,o++)n[o]=i[s];return n};System.register([],(function(t){"use strict";return{execute:function(){t({g:a,h:s,t:r});var e=function(t){__extends(e,t);function e(e,r){var n=t.call(this,e instanceof Error?e.message:e)||this;n.target=r;if(e instanceof Error)Object.assign(n,e);return n}return e}(Error);function r(t,r){var n=new e(r,t);console.error(n);try{var o=c.find(t,"quantum-error");o.provide(n)}catch(i){throw n}}var n=function(){var t=[];for(var e=0;e<arguments.length;e++){t[e]=arguments[e]}return n.debug&&console.log.apply(console,t)};n.debug=false;var o=t("l",n);var i=function(){};function s(t,e,r){var n=t[e]||i;t[e]=function(){var t=[];for(var i=0;i<arguments.length;i++){t[i]=arguments[i]}return __awaiter(this,void 0,void 0,(function(){var i,s;return __generator(this,(function(a){switch(a.label){case 0:o(e,this);return[4,r(this)];case 1:i=a.sent();return[4,n.apply(this,t)];case 2:s=a.sent();if(!(i instanceof Function))return[3,4];return[4,i(this)];case 3:a.sent();a.label=4;case 4:return[2,s]}}))}))}}function a(t){var r;var n=(r=t)===null||r===void 0?void 0:r["el"];if(n instanceof Object&&typeof n.forceUpdate==="function"){return n}throw new e("Property 'el' required on "+t)}var u=Symbol.for("stencil-quantum-providers");var c=function(){function t(t,e){this.key=t;this.value=e;this.listeners=[];this.hooks=new Map;this.retrieve=this.retrieve.bind(this);this.provide=this.provide.bind(this);this.listen=this.listen.bind(this)}t.prototype.retrieve=function(){return this.value};t.prototype.provide=function(t){this.value=t;this.listeners.forEach((function(e){return e(t)}));return this};t.prototype.update=function(t){return this.provide(t(this.retrieve()))};t.prototype.listen=function(t){var e=this;this.listeners=__spreadArrays(this.listeners,[t]);t(this.value);return function(){e.listeners=e.listeners.filter((function(e){return e!==t}))}};t.prototype.attach=function(e,r){o("Add Provider",e,this);var n=t.getAttached(e);if(!n.includes(this))n.push(this);o("Total Providers",e,n);return r?this:this.hook(e)};t.prototype.isHooked=function(t){return this.hooks.has(t)};t.prototype.hook=function(t){o("Hook Provider",t,this);this.hooks.set(t,this.listen((function(){return t.forceUpdate()})));return this};t.prototype.unhook=function(t){o("Unhook Provider",t,this);if(this.isHooked(t)){this.hooks.get(t)();this.hooks.delete(t)}return this};t.find=function(r,n){var i,s,a,u;o("Searching Provider",n,r);var c=t.getAttached(r).filter((function(t){return t.key===n}));if(c.length>1){throw new e('Found multiple "'+String(n)+'" providers on the same object!')}else if(c.length===1){return c[0]}var h=(a=(i=r.parentElement,i!==null&&i!==void 0?i:(s=r.shadowRoot)===null||s===void 0?void 0:s.host),a!==null&&a!==void 0?a:(u=r.parentNode)===null||u===void 0?void 0:u.host);if(!h){throw new e('No provider in hierarchy found that matches "'+String(n)+'"!')}return t.find(h,n).attach(r,true)};t.create=function(e,r,n){o("Create Provider",e,r,n);return new t(r,n).attach(e)};t.getAttached=function(t){if(!(t[u]instanceof Array)){t[u]=[]}return t[u]};return t}();t("P",c)}}}));