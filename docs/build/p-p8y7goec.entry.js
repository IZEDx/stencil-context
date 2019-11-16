import{r as t,c as e,h as s,g as i,d as n}from"./p-80430b56.js";import{l as o}from"./p-954cb55b.js";import{C as r,P as a}from"./p-e56717bc.js";import{A as h}from"./p-2fbc3aff.js";const c=class{constructor(s){t(this,s),this.expandNav=!1,this.theme="",this.showThemer=!1,this.changeName=e(this,"changeName",7)}onSelectTheme(t){this.theme=t.detail}onCloseThemer(){this.showThemer=!1}render(){return s("nav",{class:"navbar",role:"navigation","aria-label":"main navigation"},s("div",{class:"container"},s("div",{class:"navbar-brand"},s("a",{class:"navbar-item",href:"/"},s("img",{src:"/assets/icon/icon.png",width:"40",height:"40",alt:"logo"})),s("span",{role:"button",class:"navbar-burger burger","aria-label":"menu","aria-expanded":this.expandNav,onClick:()=>this.expandNav=!this.expandNav},s("span",{"aria-hidden":"true"}),s("span",{"aria-hidden":"true"}),s("span",{"aria-hidden":"true"}))),s("div",{class:{"navbar-menu":!0,"is-active":this.expandNav}},s("div",{class:"navbar-start"},s("stencil-route-link",{anchorClass:"navbar-item",class:"navbar-item",url:"/",activeClass:"is-active",exact:!0},"Home"),s("stencil-route-link",{anchorClass:"navbar-item",class:"navbar-item",url:"/profile/stencil",activeClass:"is-active"},"Stencil")),s("div",{class:"navbar-end"},s("div",{class:"navbar-item"},s("input",{class:"input",type:"text",placeholder:"Your Name",value:this.personToGreet,onChange:t=>this.changeName.emit(t.target.value)})),s("div",{class:{"navbar-item":!0,"has-dropdown":!0,"is-active":this.showThemer}},s("a",{class:"navbar-link",onClick:()=>this.showThemer=!0},this.theme)),s("a",{class:"navbar-item",href:"https://github.com/IZEDx/stencil-quantum"},s("ion-icon",{name:"logo-github"}))))),s("util-themer",{active:this.showThemer}))}get el(){return i(this)}};!function(t,e,s,i){var n,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,s,r):n(e,s))||r);o>3&&r&&Object.defineProperty(e,s,r)}([r()],c.prototype,"personToGreet",void 0);o.debug=!0;const l=["Alice","Bob","Cindy","Danny","Erica","Felix"],u=class{constructor(e){t(this,e),this.personToGreet="Your Name",this.hasCustomName=!1,this.demoNameIndex=-1}onChangeName({detail:t}){console.log("Changing name to: ",t),this.personToGreet=t,this.hasCustomName=!0}componentDidLoad(){this.demoNameChanger()}demoNameChanger(){this.hasCustomName||(this.demoNameIndex=++this.demoNameIndex%l.length,this.personToGreet=l[this.demoNameIndex],setTimeout(()=>this.demoNameChanger(),2e3))}render(){return s("div",null,s("app-nav",null),s("main",null,s("stencil-router",null,s("stencil-route-switch",{scrollTopOffset:0},s("stencil-route",{url:"/",component:"app-home",exact:!0}),s("stencil-route",{url:"/profile/:name",component:"app-profile"})))))}get el(){return i(this)}};!function(t,e,s,i){var n,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,s,r):n(e,s))||r);o>3&&r&&Object.defineProperty(e,s,r)}([a()],u.prototype,"personToGreet",void 0);const d=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g"),p=t=>t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),f=t=>t.replace(/([=!:$/()])/g,"\\$1"),m=t=>t&&t.sensitive?"":"i",g=(t,e,s)=>{for(var i=(s=s||{}).strict,n=!1!==s.end,o=p(s.delimiter||"/"),r=s.delimiters||"./",a=[].concat(s.endsWith||[]).map(p).concat("$").join("|"),h="",c=!1,l=0;l<t.length;l++){var u=t[l];if("string"==typeof u)h+=p(u),c=l===t.length-1&&r.indexOf(u[u.length-1])>-1;else{var d=p(u.prefix||""),f=u.repeat?"(?:"+u.pattern+")(?:"+d+"(?:"+u.pattern+"))*":u.pattern;e&&e.push(u),h+=u.optional?u.partial?d+"("+f+")?":"(?:"+d+"("+f+"))?":d+"("+f+")"}}return n?(i||(h+="(?:"+o+")?"),h+="$"===a?"$":"(?="+a+")"):(i||(h+="(?:"+o+"(?="+a+"))?"),c||(h+="(?="+o+"|"+a+")")),new RegExp("^"+h,m(s))},b=(t,e,s)=>t instanceof RegExp?((t,e)=>{if(!e)return t;var s=t.source.match(/\((?!\?)/g);if(s)for(var i=0;i<s.length;i++)e.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return t})(t,e):Array.isArray(t)?((t,e,s)=>{for(var i=[],n=0;n<t.length;n++)i.push(b(t[n],e,s).source);return new RegExp("(?:"+i.join("|")+")",m(s))})(t,e,s):((t,e,s)=>g(((t,e)=>{for(var s,i=[],n=0,o=0,r="",a=e&&e.delimiter||"/",h=e&&e.delimiters||"./",c=!1;null!==(s=d.exec(t));){var l=s[0],u=s[1],m=s.index;if(r+=t.slice(o,m),o=m+l.length,u)r+=u[1],c=!0;else{var g="",b=t[o],v=s[2],y=s[3],w=s[4],k=s[5];if(!c&&r.length){var C=r.length-1;h.indexOf(r[C])>-1&&(g=r[C],r=r.slice(0,C))}r&&(i.push(r),r="",c=!1);var P=g||a,x=y||w;i.push({name:v||n++,prefix:g,delimiter:P,optional:"?"===k||"*"===k,repeat:"+"===k||"*"===k,partial:""!==g&&void 0!==b&&b!==g,pattern:x?f(x):"[^"+p(P)+"]+?"})}}return(r||o<t.length)&&i.push(r+t.substr(o)),i})(t,s),e,s))(t,e,s),v=(t,e)=>new RegExp("^"+e+"(\\/|\\?|#|$)","i").test(t),y=(t,e)=>v(t,e)?t.substr(e.length):t,w=t=>"/"===t.charAt(t.length-1)?t.slice(0,-1):t,k=t=>"/"===t.charAt(0)?t:"/"+t,C=t=>"/"===t.charAt(0)?t.substr(1):t,P=t=>{const{pathname:e,search:s,hash:i}=t;let n=e||"/";return s&&"?"!==s&&(n+="?"===s.charAt(0)?s:`?${s}`),i&&"#"!==i&&(n+="#"===i.charAt(0)?i:`#${i}`),n},x=t=>"/"===t.charAt(0),O=t=>Math.random().toString(36).substr(2,t),E=(t,e)=>{for(let s=e,i=s+1,n=t.length;i<n;s+=1,i+=1)t[s]=t[i];t.pop()},T=(t,e)=>{if(t===e)return!0;if(null==t||null==e)return!1;if(Array.isArray(t))return Array.isArray(e)&&t.length===e.length&&t.every((t,s)=>T(t,e[s]));const s=typeof t;if(s!==typeof e)return!1;if("object"===s){const s=t.valueOf(),i=e.valueOf();if(s!==t||i!==e)return T(s,i);const n=Object.keys(t),o=Object.keys(e);return n.length===o.length&&n.every(s=>T(t[s],e[s]))}return!1},j=(t,e,s,i)=>{let n;"string"==typeof t?(n=(t=>{let e=t||"/",s="",i="";const n=e.indexOf("#");-1!==n&&(i=e.substr(n),e=e.substr(0,n));const o=e.indexOf("?");return-1!==o&&(s=e.substr(o),e=e.substr(0,o)),{pathname:e,search:"?"===s?"":s,hash:"#"===i?"":i,query:{},key:""}})(t),void 0!==e&&(n.state=e)):((n=Object.assign({pathname:""},t)).search&&"?"!==n.search.charAt(0)&&(n.search="?"+n.search),n.hash&&"#"!==n.hash.charAt(0)&&(n.hash="#"+n.hash),void 0!==e&&void 0===n.state&&(n.state=e));try{n.pathname=decodeURI(n.pathname)}catch(o){throw o instanceof URIError?new URIError('Pathname "'+n.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):o}return n.key=s,i?n.pathname?"/"!==n.pathname.charAt(0)&&(n.pathname=((t,e="")=>{let s,i=e&&e.split("/")||[],n=0;const o=t&&t.split("/")||[],r=t&&x(t),a=e&&x(e),h=r||a;if(t&&x(t)?i=o:o.length&&(i.pop(),i=i.concat(o)),!i.length)return"/";if(i.length){const t=i[i.length-1];s="."===t||".."===t||""===t}else s=!1;for(let l=i.length;l>=0;l--){const t=i[l];"."===t?E(i,l):".."===t?(E(i,l),n++):n&&(E(i,l),n--)}if(!h)for(;n--;n)i.unshift("..");!h||""===i[0]||i[0]&&x(i[0])||i.unshift("");let c=i.join("/");return s&&"/"!==c.substr(-1)&&(c+="/"),c})(n.pathname,i.pathname)):n.pathname=i.pathname:n.pathname||(n.pathname="/"),n.query=(t=>t?(/^[?#]/.test(t)?t.slice(1):t).split("&").reduce((t,e)=>{let[s,i]=e.split("=");return t[s]=i?decodeURIComponent(i.replace(/\+/g," ")):"",t},{}):{})(n.search||""),n};let R=0;const S={},_=(t,e={})=>{"string"==typeof e&&(e={path:e});const{path:s="/",exact:i=!1,strict:n=!1}=e,{re:o,keys:r}=((t,e)=>{const s=`${e.end}${e.strict}`,i=S[s]||(S[s]={}),n=JSON.stringify(t);if(i[n])return i[n];const o=[],r={re:b(t,o,e),keys:o};return R<1e4&&(i[n]=r,R+=1),r})(s,{end:i,strict:n}),a=o.exec(t);if(!a)return null;const[h,...c]=a,l=t===h;return i&&!l?null:{path:s,url:"/"===s&&""===h?"/":h,isExact:l,params:r.reduce((t,e,s)=>(t[e.name]=c[s],t),{})}},L=class{constructor(e){t(this,e),this.group=null,this.match=null,this.componentProps={},this.exact=!1,this.scrollOnNextRender=!1,this.previousMatch=null}computeMatch(t){const e=null!=this.group||null!=this.el.parentElement&&"stencil-route-switch"===this.el.parentElement.tagName.toLowerCase();if(t&&!e)return this.previousMatch=this.match,this.match=_(t.pathname,{path:this.url,exact:this.exact,strict:!0})}async loadCompleted(){let t={};this.history&&this.history.location.hash?t={scrollToId:this.history.location.hash.substr(1)}:this.scrollTopOffset&&(t={scrollTopOffset:this.scrollTopOffset}),"function"==typeof this.componentUpdated?this.componentUpdated(t):this.match&&!((t,e)=>null==t&&null==e||null!=e&&t&&e&&t.path===e.path&&t.url===e.url&&T(t.params,e.params))(this.match,this.previousMatch)&&this.routeViewsUpdated&&this.routeViewsUpdated(t)}async componentDidUpdate(){await this.loadCompleted()}async componentDidLoad(){await this.loadCompleted()}render(){if(!this.match||!this.history)return null;const t=Object.assign({},this.componentProps,{history:this.history,match:this.match});return this.routeRender?this.routeRender(Object.assign({},t,{component:this.component})):this.component?s(this.component,Object.assign({},t)):void 0}get el(){return i(this)}static get watchers(){return{location:["computeMatch"]}}static get style(){return"stencil-route.inactive{display:none}"}};h.injectProps(L,["location","history","historyType","routeViewsUpdated"]);const A=(t,e,s)=>s(t.confirm(e)),U=(t,e)=>{const s=t[e],i="__storage_test__";try{return s.setItem(i,i),s.removeItem(i),!0}catch(n){return n instanceof DOMException&&(22===n.code||1014===n.code||"QuotaExceededError"===n.name||"NS_ERROR_DOM_QUOTA_REACHED"===n.name)&&0!==s.length}},$=class{constructor(e){t(this,e),this.unsubscribe=()=>{},this.activeClass="link-active",this.exact=!1,this.strict=!0,this.custom="a",this.match=null}componentWillLoad(){this.computeMatch()}computeMatch(){this.location&&(this.match=_(this.location.pathname,{path:this.urlMatch||this.url,exact:this.exact,strict:this.strict}))}handleClick(t){if(!(t=>t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)(t)&&this.history&&this.url&&this.root)return t.preventDefault(),this.history.push(((t,e)=>"/"==t.charAt(0)&&"/"==e.charAt(e.length-1)?e.slice(0,e.length-1)+t:e+t)(this.url,this.root))}render(){let t={class:{[this.activeClass]:null!==this.match},onClick:this.handleClick.bind(this)};return this.anchorClass&&(t.class[this.anchorClass]=!0),"a"===this.custom&&(t=Object.assign({},t,{href:this.url,title:this.anchorTitle,role:this.anchorRole,tabindex:this.anchorTabIndex,"aria-haspopup":this.ariaHaspopup,id:this.anchorId,"aria-posinset":this.ariaPosinset,"aria-setsize":this.ariaSetsize,"aria-label":this.ariaLabel})),s(this.custom,Object.assign({},t),s("slot",null))}get el(){return i(this)}static get watchers(){return{location:["computeMatch"]}}};h.injectProps($,["history","location","root"]);const H=t=>"STENCIL-ROUTE"===t.tagName,M=class{constructor(e){t(this,e),this.group=(()=>((1e17*Math.random()).toString().match(/.{4}/g)||[]).join("-"))(),this.subscribers=[],this.queue=n(this,"queue")}componentWillLoad(){null!=this.location&&this.regenerateSubscribers(this.location)}async regenerateSubscribers(t){if(null==t)return;let e=-1;if(this.subscribers=Array.prototype.slice.call(this.el.children).filter(H).map((s,i)=>{const n=((t,e,s)=>_(t,{path:e,exact:s,strict:!0}))(t.pathname,s.url,s.exact);return n&&-1===e&&(e=i),{el:s,match:n}}),-1===e)return;if(this.activeIndex===e)return void(this.subscribers[e].el.match=this.subscribers[e].match);this.activeIndex=e;const s=this.subscribers[this.activeIndex];this.scrollTopOffset&&(s.el.scrollTopOffset=this.scrollTopOffset),s.el.group=this.group,s.el.match=s.match,s.el.componentUpdated=t=>{this.queue.write(()=>{this.subscribers.forEach((t,e)=>{if(t.el.componentUpdated=void 0,e===this.activeIndex)return t.el.style.display="";this.scrollTopOffset&&(t.el.scrollTopOffset=this.scrollTopOffset),t.el.group=this.group,t.el.match=null,t.el.style.display="none"})}),this.routeViewsUpdated&&this.routeViewsUpdated(Object.assign({scrollTopOffset:this.scrollTopOffset},t))}}render(){return s("slot",null)}get el(){return i(this)}static get watchers(){return{location:["regenerateSubscribers"]}}};h.injectProps(M,["location","routeViewsUpdated"]);const N=(t,...e)=>{t||console.warn(...e)},D=()=>{let t,e=[];return{setPrompt:e=>(N(null==t,"A history supports only one prompt at a time"),t=e,()=>{t===e&&(t=null)}),confirmTransitionTo:(e,s,i,n)=>{if(null!=t){const o="function"==typeof t?t(e,s):t;"string"==typeof o?"function"==typeof i?i(o,n):(N(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),n(!0)):n(!1!==o)}else n(!0)},appendListener:t=>{let s=!0;const i=(...e)=>{s&&t(...e)};return e.push(i),()=>{s=!1,e=e.filter(t=>t!==i)}},notifyListeners:(...t)=>{e.forEach(e=>e(...t))}}},I=(t,e="scrollPositions")=>{let s=new Map;const i=(e,i)=>{if(s.set(e,i),U(t,"sessionStorage")){const e=[];s.forEach((t,s)=>{e.push([s,t])}),t.sessionStorage.setItem("scrollPositions",JSON.stringify(e))}};if(U(t,"sessionStorage")){const i=t.sessionStorage.getItem(e);s=i?new Map(JSON.parse(i)):s}return"scrollRestoration"in t.history&&(history.scrollRestoration="manual"),{set:i,get:t=>s.get(t),has:t=>s.has(t),capture:e=>{i(e,[t.scrollX,t.scrollY])}}},Y={hashbang:{encodePath:t=>"!"===t.charAt(0)?t:"!/"+C(t),decodePath:t=>"!"===t.charAt(0)?t.substr(1):t},noslash:{encodePath:C,decodePath:k},slash:{encodePath:k,decodePath:k}},B=(t,e)=>{const s=0==t.pathname.indexOf(e)?"/"+t.pathname.slice(e.length):t.pathname;return Object.assign({},t,{pathname:s})},F={browser:(t,e={})=>{let s=!1;const i=t.history,n=t.location,o=t.navigator,r=(t=>{const e=t.navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&t.history&&"pushState"in t.history})(t),a=!(t=>-1===t.userAgent.indexOf("Trident"))(o),h=I(t),c=null!=e.forceRefresh&&e.forceRefresh,l=null!=e.getUserConfirmation?e.getUserConfirmation:A,u=null!=e.keyLength?e.keyLength:6,d=e.basename?w(k(e.basename)):"",p=()=>{try{return t.history.state||{}}catch(e){return{}}},f=t=>{t=t||{};const{key:e,state:s}=t,{pathname:i,search:o,hash:r}=n;let a=i+o+r;return N(!d||v(a,d),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+a+'" to begin with "'+d+'".'),d&&(a=y(a,d)),j(a,s,e||O(u))},m=D(),g=t=>{h.capture(H.location.key),Object.assign(H,t),H.location.scrollPosition=h.get(H.location.key),H.length=i.length,m.notifyListeners(H.location,H.action)},b=t=>{((t,e)=>void 0===e.state&&-1===t.userAgent.indexOf("CriOS"))(o,t)||x(f(t.state))},C=()=>{x(f(p()))},x=t=>{if(s)s=!1,g();else{const e="POP";m.confirmTransitionTo(t,e,l,s=>{s?g({action:e,location:t}):E(t)})}},E=t=>{let e=R.indexOf(H.location.key),i=R.indexOf(t.key);-1===e&&(e=0),-1===i&&(i=0);const n=e-i;n&&(s=!0,U(n))},T=f(p());let R=[T.key],S=0,_=!1;const L=t=>d+P(t),U=t=>{i.go(t)},$=e=>{1===(S+=e)?(t.addEventListener("popstate",b),a&&t.addEventListener("hashchange",C)):0===S&&(t.removeEventListener("popstate",b),a&&t.removeEventListener("hashchange",C))},H={length:i.length,action:"POP",location:T,createHref:L,push:(t,e)=>{N(!("object"==typeof t&&void 0!==t.state&&void 0!==e),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");const s=j(t,e,O(u),H.location);m.confirmTransitionTo(s,"PUSH",l,t=>{if(!t)return;const e=L(s),{key:o,state:a}=s;if(r)if(i.pushState({key:o,state:a},"",e),c)n.href=e;else{const t=R.indexOf(H.location.key),e=R.slice(0,-1===t?0:t+1);e.push(s.key),R=e,g({action:"PUSH",location:s})}else N(void 0===a,"Browser history cannot push state in browsers that do not support HTML5 history"),n.href=e})},replace:(t,e)=>{N(!("object"==typeof t&&void 0!==t.state&&void 0!==e),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");const s=j(t,e,O(u),H.location);m.confirmTransitionTo(s,"REPLACE",l,t=>{if(!t)return;const e=L(s),{key:o,state:a}=s;if(r)if(i.replaceState({key:o,state:a},"",e),c)n.replace(e);else{const t=R.indexOf(H.location.key);-1!==t&&(R[t]=s.key),g({action:"REPLACE",location:s})}else N(void 0===a,"Browser history cannot replace state in browsers that do not support HTML5 history"),n.replace(e)})},go:U,goBack:()=>U(-1),goForward:()=>U(1),block:(t="")=>{const e=m.setPrompt(t);return _||($(1),_=!0),()=>(_&&(_=!1,$(-1)),e())},listen:t=>{const e=m.appendListener(t);return $(1),()=>{$(-1),e()}},win:t};return H},hash:(t,e={})=>{let s=!1,i=null,n=0,o=!1;const r=t.location,a=t.history,h=(t=>-1===t.userAgent.indexOf("Firefox"))(t.navigator),c=null!=e.keyLength?e.keyLength:6,{getUserConfirmation:l=A,hashType:u="slash"}=e,d=e.basename?w(k(e.basename)):"",{encodePath:p,decodePath:f}=Y[u],m=()=>{const t=r.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)},g=t=>{const e=r.href.indexOf("#");r.replace(r.href.slice(0,e>=0?e:0)+"#"+t)},b=()=>{let t=f(m());return N(!d||v(t,d),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+t+'" to begin with "'+d+'".'),d&&(t=y(t,d)),j(t,void 0,O(c))},C=D(),x=t=>{Object.assign(I,t),I.length=a.length,C.notifyListeners(I.location,I.action)},E=()=>{const t=m(),e=p(t);if(t!==e)g(e);else{const t=b(),e=I.location;if(!s&&((t,e)=>t.pathname===e.pathname&&t.search===e.search&&t.hash===e.hash&&t.key===e.key&&T(t.state,e.state))(e,t))return;if(i===P(t))return;i=null,R(t)}},R=t=>{if(s)s=!1,x();else{const e="POP";C.confirmTransitionTo(t,e,l,s=>{s?x({action:e,location:t}):S(t)})}},S=t=>{let e=$.lastIndexOf(P(I.location)),i=$.lastIndexOf(P(t));-1===e&&(e=0),-1===i&&(i=0);const n=e-i;n&&(s=!0,H(n))},_=m(),L=p(_);_!==L&&g(L);const U=b();let $=[P(U)];const H=t=>{N(h,"Hash history go(n) causes a full page reload in this browser"),a.go(t)},M=(t,e)=>{1===(n+=e)?t.addEventListener("hashchange",E):0===n&&t.removeEventListener("hashchange",E)},I={length:a.length,action:"POP",location:U,createHref:t=>"#"+p(d+P(t)),push:(t,e)=>{N(void 0===e,"Hash history cannot push state; it is ignored");const s=j(t,void 0,O(c),I.location);C.confirmTransitionTo(s,"PUSH",l,t=>{if(!t)return;const e=P(s),n=p(d+e);if(m()!==n){i=e,(t=>r.hash=t)(n);const t=$.lastIndexOf(P(I.location)),o=$.slice(0,-1===t?0:t+1);o.push(e),$=o,x({action:"PUSH",location:s})}else N(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),x()})},replace:(t,e)=>{N(void 0===e,"Hash history cannot replace state; it is ignored");const s=j(t,void 0,O(c),I.location);C.confirmTransitionTo(s,"REPLACE",l,t=>{if(!t)return;const e=P(s),n=p(d+e);m()!==n&&(i=e,g(n));const o=$.indexOf(P(I.location));-1!==o&&($[o]=e),x({action:"REPLACE",location:s})})},go:H,goBack:()=>H(-1),goForward:()=>H(1),block:(e="")=>{const s=C.setPrompt(e);return o||(M(t,1),o=!0),()=>(o&&(o=!1,M(t,-1)),s())},listen:e=>{const s=C.appendListener(e);return M(t,1),()=>{M(t,-1),s()}},win:t};return I}},W=class{constructor(e){t(this,e),this.root="/",this.historyType="browser",this.titleSuffix="",this.routeViewsUpdated=(t={})=>{if(this.history&&t.scrollToId&&"browser"===this.historyType){const e=this.history.win.document.getElementById(t.scrollToId);if(e)return e.scrollIntoView()}this.scrollTo(t.scrollTopOffset||this.scrollTopOffset)},this.isServer=n(this,"isServer"),this.queue=n(this,"queue")}componentWillLoad(){this.history=F[this.historyType](this.el.ownerDocument.defaultView),this.history.listen(t=>{t=B(t,this.root),this.location=t}),this.location=B(this.history.location,this.root)}scrollTo(t){const e=this.history;if(null!=t&&!this.isServer&&e)return"POP"===e.action&&Array.isArray(e.location.scrollPosition)?this.queue.write(()=>{e&&e.location&&Array.isArray(e.location.scrollPosition)&&e.win.scrollTo(e.location.scrollPosition[0],e.location.scrollPosition[1])}):this.queue.write(()=>{e.win.scrollTo(0,t)})}render(){if(this.location&&this.history)return s(h.Provider,{state:{historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated}},s("slot",null))}get el(){return i(this)}};function*q(t,e,s=1){const i=t+e;for(let n=t;n<i;n+=s)yield n}const z=class{constructor(e){t(this,e),this.width=3,this.items=[],this.map=()=>{}}render(){return s("div",{class:"content"},[...q(0,this.items.length,this.width)].map(t=>s("div",{class:"columns"},[...q(t,this.width)].map(t=>s("div",{class:"column"},this.items[t]?this.map(this.items[t],t):"")))))}},J=class{constructor(s){t(this,s),this.defaultTheme="Cosmo",this.active=!1,this.thumbSize=142,this.thumbScale=.42,this.url="https://jenil.github.io/bulmaswatch/api/themes.json",this.themes=[],this.selectedTheme=-1,this.themeEl=document.createElement("link"),this.selectTheme=e(this,"selectTheme",7),this.closeThemer=e(this,"closeThemer",7)}async componentWillLoad(){this.themes=(await(await fetch(this.url)).json()).themes,this.themeEl.setAttribute("rel","stylesheet"),this.themeEl.setAttribute("href",this.themes[0].css),document.head.appendChild(this.themeEl),this.selectedTheme=localStorage.getItem("theme")?this.themes.findIndex(t=>t.name===localStorage.getItem("theme")):this.themes.find(t=>t.name===this.defaultTheme)?this.themes.findIndex(t=>t.name===this.defaultTheme):0}get theme(){return this.themes[this.selectedTheme]}get style(){const t=this.thumbSize+"px",e=this.thumbSize/this.thumbScale+"px";return{themePreview:{overflow:"hidden",height:t,width:t},iframe:{transform:`scale(${this.thumbScale})`,"transform-origin":"0 0","-moz-transform":`scale(${this.thumbScale})`,"-moz-transform-origin":"0 0","-o-transform":`scale(${this.thumbScale})`,"-o-transform-origin":"0 0","-webkit-transform":`scale(${this.thumbScale})`,"-webkit-transform-origin":"0 0","min-width":`${e}`,"min-height":`${e}`,border:"1px solid black","pointer-events":"none"},modalCardFoot:{"justify-content":"center"},label:{padding:"10px","padding-right":"17px","padding-bottom":"4px"}}}onSelectTheme(){this.selectedTheme<0&&(this.selectedTheme=0),this.selectedTheme>=this.themes.length&&(this.selectedTheme=this.themes.length-1),console.log("Selected theme",this.theme.name),this.themeEl.setAttribute("href",this.theme.css),localStorage.setItem("theme",this.theme.name),this.selectTheme.emit(this.theme.name)}render(){const t=this.style;return s("div",{class:{modal:!0,"is-active":this.active}},s("div",{class:"modal-background",onClick:()=>this.closeThemer.emit()}),s("div",{class:"modal-card"},s("header",{class:"modal-card-head"},s("p",{class:"modal-card-title"},"Themes")),s("section",{class:"modal-card-body"},s("util-grid",{items:this.themes,map:(e,i)=>s("a",{class:"box",onClick:()=>this.selectedTheme=i},s("div",{class:"theme-preview",style:t.themePreview},s("iframe",{src:e.thumb,style:t.iframe})),s("br",null),s("div",{class:"content has-text-centered"},e.name))})),s("footer",{class:"modal-card-foot",style:t.modalCardFoot},s("a",{class:"button",onClick:()=>this.selectedTheme--},s("ion-icon",{name:"arrow-dropleft"})),s("label",{class:"label",style:t.label},this.theme.name),s("a",{class:"button",onClick:()=>this.selectedTheme++},s("ion-icon",{name:"arrow-dropright"})))),s("button",{class:"modal-close is-large","aria-label":"close",onClick:()=>this.closeThemer.emit()}))}static get watchers(){return{selectedTheme:["onSelectTheme"]}}};export{c as app_nav,u as app_root,L as stencil_route,$ as stencil_route_link,M as stencil_route_switch,W as stencil_router,z as util_grid,J as util_themer};