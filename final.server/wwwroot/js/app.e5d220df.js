(function(e){function t(t){for(var c,n,r=t[0],l=t[1],i=t[2],d=0,u=[];d<r.length;d++)n=r[d],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&u.push(o[n][0]),o[n]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);b&&b(t);while(u.length)u.shift()();return s.push.apply(s,i||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],c=!0,n=1;n<a.length;n++){var r=a[n];0!==o[r]&&(c=!1)}c&&(s.splice(t--,1),e=l(l.s=a[0]))}return e}var c={},n={app:0},o={app:0},s=[];function r(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-2d0c19e3":"fc8d9ab3","chunk-414d04a6":"44fa71ef","chunk-6eae8d60":"d36ed074","chunk-80b036a2":"7e7523ca","chunk-af99962e":"3a072da4"}[e]+".js"}function l(t){if(c[t])return c[t].exports;var a=c[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={"chunk-414d04a6":1,"chunk-6eae8d60":1,"chunk-80b036a2":1,"chunk-af99962e":1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var c="css/"+({}[e]||e)+"."+{"chunk-2d0c19e3":"31d6cfe0","chunk-414d04a6":"3ebcd094","chunk-6eae8d60":"5d71eed4","chunk-80b036a2":"0cfe9cf5","chunk-af99962e":"00feaf6a"}[e]+".css",o=l.p+c,s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var i=s[r],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===c||d===o))return t()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){i=u[r],d=i.getAttribute("data-href");if(d===c||d===o)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var c=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=c,delete n[e],b.parentNode.removeChild(b),a(s)},b.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(b)})).then((function(){n[e]=0})));var c=o[e];if(0!==c)if(c)t.push(c[2]);else{var s=new Promise((function(t,a){c=o[e]=[t,a]}));t.push(c[2]=s);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=r(e);var u=new Error;i=function(t){d.onerror=d.onload=null,clearTimeout(b);var a=o[e];if(0!==a){if(a){var c=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+c+": "+n+")",u.name="ChunkLoadError",u.type=c,u.request=n,a[1](u)}o[e]=void 0}};var b=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(t)},l.m=e,l.c=c,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)l.d(a,c,function(t){return e[t]}.bind(null,c));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var b=d;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"04f4":function(e,t,a){"use strict";a.r(t);var c=a("7a23");const n=Object(c["J"])("data-v-2be433a1");Object(c["u"])("data-v-2be433a1");const o={class:"modal fade",id:"vaultPost",tabindex:"-1",role:"dialog","aria-labelledby":"modelTitleId","aria-hidden":"true"},s={class:"modal-dialog",role:"document"},r={class:"modal-content"},l=Object(c["h"])("div",{class:"modal-header"},[Object(c["h"])("h5",{class:"modal-title"}," Create Vault "),Object(c["h"])("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[Object(c["h"])("span",{"aria-hidden":"true"},"×")])],-1),i={class:"modal-body"},d=Object(c["h"])("button",{type:"submit",class:"btn btn-primary"}," Create ",-1);Object(c["s"])();const u=n((e,t,a,n,u,b)=>(Object(c["r"])(),Object(c["e"])("div",o,[Object(c["h"])("div",s,[Object(c["h"])("div",r,[l,Object(c["h"])("div",i,[Object(c["h"])("form",{onSubmit:t[4]||(t[4]=Object(c["I"])(e=>n.createVault(),["prevent"]))},[Object(c["H"])(Object(c["h"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>n.state.newVault.name=e),placeholder:"name"},null,512),[[c["E"],n.state.newVault.name]]),Object(c["H"])(Object(c["h"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>n.state.newVault.description=e),placeholder:"description"},null,512),[[c["E"],n.state.newVault.description]]),Object(c["H"])(Object(c["h"])("input",{type:"checkbox",name:"private","onUpdate:modelValue":t[3]||(t[3]=e=>n.state.newVault.isPrivate=e)},null,512),[[c["D"],n.state.newVault.isPrivate]]),d],32)])])])])));var b=a("d10d"),p=a("3d20"),f=a.n(p),O={setup(){const e=Object(c["v"])({newVault:{}});return{state:e,createVault(){const t=f.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:e=>{e.addEventListener("mouseenter",f.a.stopTimer),e.addEventListener("mouseleave",f.a.resumeTimer)}});t.fire({icon:"success",title:"Vault Created"}),b["a"].create(e.newVault)}}}};O.render=u,O.__scopeId="data-v-2be433a1";t["default"]=O},"123b":function(e,t,a){},2339:function(e,t,a){"use strict";a.r(t);var c=a("7a23");const n=Object(c["J"])("data-v-59594fca");Object(c["u"])("data-v-59594fca");const o={class:"item"},s={class:"row"},r={class:"col-12"},l={key:0},i={class:"keep-text d-flex"},d={class:"text-white mb-0"};Object(c["s"])();const u=n((e,t,a,n,u,b)=>{const p=Object(c["y"])("keep-modal");return Object(c["r"])(),Object(c["e"])(c["a"],null,[Object(c["h"])("div",o,[Object(c["h"])("div",s,[Object(c["h"])("div",r,[Object(c["h"])("img",{onClick:t[1]||(t[1]=e=>n.state.addView()),type:"button","data-toggle":"modal","data-target":"#keep"+a.keep.id,src:a.keep.img,alt:"",class:"img-fluid my-3"},null,8,["data-target","src"]),"vault"==a.page?(Object(c["r"])(),Object(c["e"])("div",l,[a.vault.creatorId==n.state.account.id?(Object(c["r"])(),Object(c["e"])("p",{key:0,id:"remove",class:"text-white",onClick:t[2]||(t[2]=e=>n.removeFromVault())}," remove ")):Object(c["f"])("",!0)])):Object(c["f"])("",!0),Object(c["h"])("div",i,[Object(c["h"])("h3",d,Object(c["B"])(a.keep.name),1)]),Object(c["h"])("img",{src:a.keep.creator.picture,id:"profile-img"},null,8,["src"])])])]),Object(c["h"])(p,{keep:n.props.keep,page:n.props.page},null,8,["keep","page"])],64)});var b=a("6c96"),p=a("83fc"),f=a("a613"),O={props:["keep","page","vault"],setup(e){const t=Object(c["v"])({account:Object(c["c"])(()=>p["a"].account),addView(){b["a"].addView(e.keep.id)}});return{state:t,props:e,removeFromVault(){f["a"].removeVaultKeep(e.keep.vaultKeepId,e.vault.id)}}}};a("edda");O.render=u,O.__scopeId="data-v-59594fca";t["default"]=O},"2b20":function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return r}));var c=a("bc3a"),n=a.n(c);const o="https://localhost:5001/",s=n.a.create({baseURL:o,timeout:8e3}),r=function(e){s.defaults.headers.authorization=e}},"41cb":function(e,t,a){"use strict";var c=a("6c02"),n=a("8816");function o(e){return()=>a("a2f9")(`./${e}.vue`)}const s=[{path:"/",name:"Home",component:o("HomePage")},{path:"/about",name:"About",component:o("AboutPage")},{path:"/account",name:"Account",component:o("AccountPage"),beforeEnter:n["a"]},{path:"/profile/:id",name:"Profile",component:o("ProfilePage")},{path:"/vault/:id",name:"Vault",component:o("VaultPage")}],r=Object(c["a"])({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:Object(c["b"])(),routes:s});t["a"]=r},"473f":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var c=a("83fc");function n(e,t){window.location.origin.includes("localhost")&&console[e](...t)}const o={log(){n("log",arguments)},error(){n("error",arguments)},warn(){n("warn",arguments)},assert(){n("assert",arguments)},trace(){n("trace",arguments)}};var s=a("2b20");class r{async getAccount(){try{const e=await s["a"].get("/api/account");c["a"].account=e.data}catch(e){o.error("HAVE YOU STARTED YOUR SERVER YET???",e)}}async getVaultsByAccount(){const e=await s["a"].get("api/account/vaults");c["a"].currentVaults=e.data}}const l=new r},5570:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var c=a("7a23");function n(e,t,a,n,o,s){const r=Object(c["y"])("Navbar"),l=Object(c["y"])("router-view");return Object(c["r"])(),Object(c["e"])(c["a"],null,[Object(c["h"])("header",null,[Object(c["h"])(r)]),Object(c["h"])("main",null,[Object(c["h"])(l,null,{default:Object(c["G"])(({Component:e})=>[Object(c["h"])(c["b"],{name:"route",mode:"out-in"},{default:Object(c["G"])(()=>[(Object(c["r"])(),Object(c["e"])(Object(c["z"])(e)))]),_:2},1024)]),_:1})])],64)}var o=a("83fc"),s={name:"App",setup(){return{appState:Object(c["c"])(()=>o["a"])}}};a("a51c");s.render=n;var r=s;function l(e){const t=a("ccc2");t.keys().forEach(a=>{const c=t(a),n=c.default||c,o=n.name||a.substr(a.lastIndexOf("/")+1).replace(/\.\w+$/,"");e.component(o,n)})}var i=a("41cb"),d=a("4989"),u=a.n(d),b=a("1157"),p=a.n(b),f=a("f0bd");const O=Object(c["d"])(r);l(O),O.use(i["a"],u.a,p.a,f["default"]).mount("#app")},"5b23":function(e,t,a){},"600d":function(e,t,a){"use strict";a("8a88")},6206:function(e,t,a){"use strict";a.r(t);var c=a("7a23");const n=Object(c["J"])("data-v-3a9c8cf0");Object(c["u"])("data-v-3a9c8cf0");const o={class:"modal-dialog d-flex justify-content-center",role:"document"},s={class:"modal-content"},r={class:"modal-body d-flex justify-content-around"},l={class:"container-fluid"},i={class:"row"},d={class:"col-6"},u={class:"col-6"},b={class:"d-flex justify-content-center border-bottom"},p={class:"d-flex justify-content-around",id:"modal-stats"},f=Object(c["h"])("i",{class:"fas fa-eye h4 mb-0"},null,-1),O={class:"mb-0"},j={class:"d-flex justify-content-around",id:"modal-stats"},v=Object(c["h"])("i",{class:"fab fa-kickstarter h4 mb-0"},null,-1),h={class:"mb-0"},m={class:"border-bottom d-flex justify-content-center",type:"button","data-dismiss":"modal"},g={class:"my-3"},y={class:"mt-5"},k={class:"modal-footer"},w={key:0},V=Object(c["h"])("button",{type:"button",class:"btn btn-primary","data-dismiss":"modal"}," Close ",-1);Object(c["s"])();const x=n((e,t,a,x,K,C)=>{const P=Object(c["y"])("router-link");return Object(c["r"])(),Object(c["e"])("div",{class:"modal fade",id:"keep"+a.keep.id,tabindex:"-1",role:"dialog","aria-labelledby":"modelTitleId","aria-hidden":"true"},[Object(c["h"])("div",o,[Object(c["h"])("div",s,[Object(c["h"])("div",r,[Object(c["h"])("div",l,[Object(c["h"])("div",i,[Object(c["h"])("div",d,[Object(c["h"])("div",{id:"image",style:`background: url('${a.keep.img}');`},null,4)]),Object(c["h"])("div",u,[x.state.account.id==a.keep.creatorId?(Object(c["r"])(),Object(c["e"])("i",{key:0,class:"fas fa-backspace",onClick:t[1]||(t[1]=e=>x.deleteKeep())})):Object(c["f"])("",!0),Object(c["h"])("div",b,[Object(c["h"])("h4",null,Object(c["B"])(a.keep.name),1),Object(c["h"])("div",p,[f,Object(c["h"])("h4",O,Object(c["B"])(a.keep.views),1)]),Object(c["h"])("div",j,[v,Object(c["h"])("h4",h,Object(c["B"])(a.keep.keeps),1)])]),Object(c["h"])("div",m,[Object(c["h"])(P,{to:{name:"Profile",params:{id:a.keep.creator.id}}},{default:n(()=>[Object(c["h"])("h6",g," created by: "+Object(c["B"])(a.keep.creator.name),1)]),_:1},8,["to"])]),Object(c["h"])("div",y,[Object(c["h"])("h5",null,Object(c["B"])(a.keep.description),1)])])])])]),Object(c["h"])("div",k,[1==x.state.addKeep?(Object(c["r"])(),Object(c["e"])("div",w,[(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(x.state.vaults,e=>(Object(c["r"])(),Object(c["e"])("div",{key:e.id},[Object(c["h"])("button",{class:"btn btn-primary",onClick:t=>x.addKeepToVault(e.id)},Object(c["B"])(e.name),9,["onClick"])]))),128))])):Object(c["f"])("",!0),0==x.state.addKeep&&x.state.user.isAuthenticated?(Object(c["r"])(),Object(c["e"])("button",{key:1,class:"btn btn-primary",onClick:t[2]||(t[2]=(...e)=>x.getVaults&&x.getVaults(...e))}," Add to vault ")):Object(c["f"])("",!0),V])])])],8,["id"])});var K=a("83fc"),C=a("6c96"),P=a("b5fa"),B=a("473f"),A=a("a613"),T=a("3d20"),_=a.n(T),E={props:["keep"],setup(e){const t=Object(c["v"])({account:Object(c["c"])(()=>K["a"].account),addKeep:!1,vaults:Object(c["c"])(()=>K["a"].currentVaults),user:Object(c["c"])(()=>K["a"].user)});return{state:t,deleteKeep(){_.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#2a93ad",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(async a=>{a.isConfirmed&&(await C["a"].delete(e.keep.id),P["a"].getKeepsByProfile(t.account.id))})},getVaults(){B["a"].getVaultsByAccount(),t.addKeep=!0},addKeepToVault(a){const c={};c.keepId=e.keep.id,c.vaultId=a,A["a"].createVaultKeep(c),t.addKeep=!1}}}};a("6f59");E.render=x,E.__scopeId="data-v-3a9c8cf0";t["default"]=E},"6c96":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var c=a("83fc"),n=a("2b20"),o=a("b5fa");class s{async getKeeps(){const e=await n["a"].get("api/keeps");c["a"].currentKeeps=e.data}async addView(e){await n["a"].put("api/keeps/"+e+"/addview")}async create(e){await n["a"].post("api/keeps",e);const t=c["a"].account.id;o["a"].getKeepsByProfile(t)}async edit(e,t){const a=await n["a"].Edit("api/keeps"+e,t);console.log(a.data)}async delete(e){const t=await n["a"].delete("api/keeps/"+e);console.log(t.data)}}const r=new s},"6f59":function(e,t,a){"use strict";a("5570")},"83fc":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var c=a("7a23");const n=Object(c["v"])({user:{},account:{},currentVaults:[],currentKeeps:[],selectedVault:{},currentProfile:{}})},"8a88":function(e,t,a){},"94b3":function(e,t,a){"use strict";a.r(t);var c=a("7a23");const n=Object(c["J"])("data-v-41b0bfae");Object(c["u"])("data-v-41b0bfae");const o={class:"modal fade",id:"keepPost",tabindex:"-1",role:"dialog","aria-labelledby":"modelTitleId","aria-hidden":"true"},s={class:"modal-dialog",role:"document"},r={class:"modal-content"},l=Object(c["h"])("div",{class:"modal-header"},[Object(c["h"])("h5",{class:"modal-title"}," Create Keep "),Object(c["h"])("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[Object(c["h"])("span",{"aria-hidden":"true"},"×")])],-1),i={class:"modal-body"},d=Object(c["h"])("button",{type:"submit",class:"btn btn-primary"}," Create ",-1);Object(c["s"])();const u=n((e,t,a,n,u,b)=>(Object(c["r"])(),Object(c["e"])("div",o,[Object(c["h"])("div",s,[Object(c["h"])("div",r,[l,Object(c["h"])("div",i,[Object(c["h"])("form",{onSubmit:t[4]||(t[4]=Object(c["I"])(e=>n.createVault(),["prevent"]))},[Object(c["H"])(Object(c["h"])("input",{type:"text",maxlength:"14","onUpdate:modelValue":t[1]||(t[1]=e=>n.state.newKeep.name=e),placeholder:"name"},null,512),[[c["E"],n.state.newKeep.name]]),Object(c["H"])(Object(c["h"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>n.state.newKeep.description=e),placeholder:"description"},null,512),[[c["E"],n.state.newKeep.description]]),Object(c["H"])(Object(c["h"])("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>n.state.newKeep.img=e),placeholder:"image url"},null,512),[[c["E"],n.state.newKeep.img]]),d],32)])])])])));var b=a("6c96"),p=a("3d20"),f=a.n(p),O={setup(){const e=Object(c["v"])({newKeep:{}});return{state:e,createVault(){const t=f.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:e=>{e.addEventListener("mouseenter",f.a.stopTimer),e.addEventListener("mouseleave",f.a.resumeTimer)}});t.fire({icon:"success",title:"Keep Created"}),b["a"].create(e.newKeep),e.newKeep={}}}}};O.render=u,O.__scopeId="data-v-41b0bfae";t["default"]=O},"9d6e":function(e,t,a){},"9d8d":function(e,t,a){"use strict";a.r(t);var c=a("7a23");const n=Object(c["J"])("data-v-1b5f6162");Object(c["u"])("data-v-1b5f6162");const o={class:"navbar navbar-expand-lg navbar-dark blue-bg"},s=Object(c["h"])("div",{class:"d-flex flex-column align-items-center"},[Object(c["h"])("h2",null,"Keepr")],-1),r=Object(c["h"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["h"])("span",{class:"navbar-toggler-icon"})],-1),l={class:"collapse navbar-collapse",id:"navbarText"},i={class:"navbar-nav mr-auto"},d={class:"nav-item"},u=Object(c["g"])(" Home "),b={class:"navbar-text"},p={key:1,class:"dropdown"},f={class:"mx-3 text-light"},O=Object(c["h"])("div",{class:"list-group-item list-group-item-action hoverable"}," Account ",-1);Object(c["s"])();const j=n((e,t,a,j,v,h)=>{const m=Object(c["y"])("router-link");return Object(c["r"])(),Object(c["e"])("nav",o,[Object(c["h"])(m,{class:"navbar-brand d-flex",to:{name:"Home"}},{default:n(()=>[s]),_:1}),r,Object(c["h"])("div",l,[Object(c["h"])("ul",i,[Object(c["h"])("li",d,[Object(c["h"])(m,{to:{name:"Home"},class:"nav-link"},{default:n(()=>[u]),_:1})])]),Object(c["h"])("span",b,[j.user.isAuthenticated?(Object(c["r"])(),Object(c["e"])("div",p,[Object(c["h"])("div",{class:"dropdown-toggle",onClick:t[2]||(t[2]=e=>j.state.dropOpen=!j.state.dropOpen)},[Object(c["h"])("img",{src:j.user.picture,alt:"user photo",height:"40",class:"rounded"},null,8,["src"]),Object(c["h"])("span",f,Object(c["B"])(j.user.name),1)]),Object(c["h"])("div",{class:["dropdown-menu p-0 list-group w-100",{show:j.state.dropOpen}],onClick:t[4]||(t[4]=e=>j.state.dropOpen=!1)},[Object(c["h"])(m,{to:{name:"Account"}},{default:n(()=>[O]),_:1}),Object(c["h"])("div",{class:"list-group-item list-group-item-action hoverable",onClick:t[3]||(t[3]=(...e)=>j.logout&&j.logout(...e))}," logout ")],2)])):(Object(c["r"])(),Object(c["e"])("button",{key:0,class:"btn btn-outline-light text-uppercase",onClick:t[1]||(t[1]=(...e)=>j.login&&j.login(...e))}," Login "))])])])});var v=a("8816"),h=a("83fc");const m="ethanvachtest.us.auth0.com",g="nLAOboQqDulq7zCd3bJHKW3OeDQ9iPzQ",y="https://final";var k=a("41cb"),w=a("2b20"),V=a("473f");const x=Object(v["b"])({domain:m,clientId:g,audience:y,onRedirectCallback:e=>{k["a"].push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}});x.on(x.AUTH_EVENTS.AUTHENTICATED,(async function(){Object(w["b"])(x.bearer),await V["a"].getAccount(),h["a"].user=x.user}));var K={name:"Navbar",setup(){const e=Object(c["v"])({dropOpen:!1});return{state:e,user:Object(c["c"])(()=>h["a"].user),async login(){x.loginWithPopup()},async logout(){await x.logout({returnTo:window.location.origin})}}}};a("d00c");K.render=j,K.__scopeId="data-v-1b5f6162";t["default"]=K},a2f9:function(e,t,a){var c={"./AboutPage.vue":["478b","chunk-2d0c19e3"],"./AccountPage.vue":["e542","chunk-6eae8d60"],"./HomePage.vue":["78a7","chunk-414d04a6"],"./ProfilePage.vue":["1a3e","chunk-af99962e"],"./VaultPage.vue":["e6f4","chunk-80b036a2"]};function n(e){if(!a.o(c,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=c[e],n=t[0];return a.e(t[1]).then((function(){return a(n)}))}n.keys=function(){return Object.keys(c)},n.id="a2f9",e.exports=n},a51c:function(e,t,a){"use strict";a("123b")},a613:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var c=a("2b20"),n=a("d10d");class o{async createVaultKeep(e){await c["a"].post("api/vaultkeeps",e)}async removeVaultKeep(e,t){await c["a"].delete("api/vaultkeeps/"+e),n["a"].getKeepsByVault(t)}}const s=new o},b5fa:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var c=a("83fc"),n=a("2b20");class o{async getVaultsByProfile(e){const t=await n["a"].get("api/profiles/"+e+"/vaults");c["a"].currentVaults=t.data}async getKeepsByProfile(e){const t=await n["a"].get("api/profiles/"+e+"/keeps");c["a"].currentKeeps=t.data}async getProfile(e){const t=await n["a"].get("api/profiles/"+e);c["a"].currentProfile=t.data}}const s=new o},ccc2:function(e,t,a){var c={"./KeepModal.vue":"ef08","./KeepModalProfile.vue":"6206","./KeepPostModal.vue":"94b3","./KeepsComponent.vue":"2339","./VaultPostModal.vue":"04f4","./VaultsComponent.vue":"e841","./navbar.vue":"9d8d"};function n(e){var t=o(e);return a(t)}function o(e){if(!a.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}n.keys=function(){return Object.keys(c)},n.resolve=o,e.exports=n,n.id="ccc2"},d00c:function(e,t,a){"use strict";a("9d6e")},d10d:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var c=a("83fc"),n=a("2b20"),o=a("473f");class s{async getOne(e){const t=await n["a"].get("api/vaults/"+e);c["a"].selectedVault=t.data}async getKeepsByVault(e){const t=await n["a"].get("api/vaults/"+e+"/keeps");c["a"].currentKeeps=t.data}async create(e){await n["a"].post("api/vaults",e),o["a"].getVaultsByAccount()}async edit(e,t){const a=await n["a"].put("api/vaults"+t,e);console.log(a.data)}async delete(e){const t=await n["a"].delete("api/vaults/"+e);console.log(t)}}const r=new s},e841:function(e,t,a){"use strict";a.r(t);var c=a("7a23");const n=Object(c["J"])("data-v-ed5275a6");Object(c["u"])("data-v-ed5275a6");const o={class:"card"},s={class:"card-body"},r={class:"card-title"};Object(c["s"])();const l=n((e,t,a,l,i,d)=>{const u=Object(c["y"])("router-link");return Object(c["r"])(),Object(c["e"])("div",o,[Object(c["h"])(u,{style:{"text-decoration":"none",color:"inherit"},to:{name:"Vault",params:{id:a.vault.id}}},{default:n(()=>[Object(c["h"])("div",s,[Object(c["h"])("h4",r,Object(c["B"])(a.vault.name),1)])]),_:1},8,["to"])])});var i={props:["vault"]};i.render=l,i.__scopeId="data-v-ed5275a6";t["default"]=i},edda:function(e,t,a){"use strict";a("5b23")},ef08:function(e,t,a){"use strict";a.r(t);var c=a("7a23");const n=Object(c["J"])("data-v-3a5f1bfc");Object(c["u"])("data-v-3a5f1bfc");const o={class:"modal-dialog d-flex justify-content-center",role:"document"},s={class:"modal-content"},r={class:"modal-body d-flex justify-content-around"},l={class:"container-fluid"},i={class:"row"},d={class:"col-6"},u={class:"col-6"},b={class:"d-flex justify-content-center border-bottom"},p={class:"d-flex justify-content-around",id:"modal-stats"},f=Object(c["h"])("i",{class:"fas fa-eye h4 mb-0"},null,-1),O={class:"mb-0"},j={class:"d-flex justify-content-around",id:"modal-stats"},v=Object(c["h"])("i",{class:"fab fa-kickstarter h4 mb-0"},null,-1),h={class:"mb-0"},m={class:"border-bottom d-flex justify-content-center",type:"button","data-dismiss":"modal"},g={class:"my-3"},y={class:"mt-5"},k={class:"modal-footer"},w={key:0},V=Object(c["h"])("button",{type:"button",class:"btn btn-primary","data-dismiss":"modal"}," Close ",-1);Object(c["s"])();const x=n((e,t,a,x,K,C)=>{const P=Object(c["y"])("router-link");return Object(c["r"])(),Object(c["e"])("div",{class:"modal fade",id:"keep"+a.keep.id,tabindex:"-1",role:"dialog","aria-labelledby":"modelTitleId","aria-hidden":"true"},[Object(c["h"])("div",o,[Object(c["h"])("div",s,[Object(c["h"])("div",r,[Object(c["h"])("div",l,[Object(c["h"])("div",i,[Object(c["h"])("div",d,[Object(c["h"])("div",{id:"image",style:`background: url('${a.keep.img}');`},null,4)]),Object(c["h"])("div",u,[x.state.account.id==a.keep.creatorId?(Object(c["r"])(),Object(c["e"])("i",{key:0,class:"fas fa-backspace",onClick:t[1]||(t[1]=e=>x.deleteKeep())})):Object(c["f"])("",!0),Object(c["h"])("div",b,[Object(c["h"])("h4",null,Object(c["B"])(a.keep.name),1),Object(c["h"])("div",p,[f,Object(c["h"])("h4",O,Object(c["B"])(a.keep.views),1)]),Object(c["h"])("div",j,[v,Object(c["h"])("h4",h,Object(c["B"])(a.keep.keeps),1)])]),Object(c["h"])("div",m,[Object(c["h"])(P,{to:{name:"Profile",params:{id:a.keep.creator.id}}},{default:n(()=>[Object(c["h"])("h6",g," created by: "+Object(c["B"])(a.keep.creator.name),1)]),_:1},8,["to"])]),Object(c["h"])("div",y,[Object(c["h"])("h5",null,Object(c["B"])(a.keep.description),1)])])])])]),Object(c["h"])("div",k,[1==x.state.addKeep?(Object(c["r"])(),Object(c["e"])("div",w,[(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(x.state.vaults,e=>(Object(c["r"])(),Object(c["e"])("div",{key:e.id},[Object(c["h"])("button",{class:"btn btn-primary",onClick:t=>x.addKeepToVault(e.id)},Object(c["B"])(e.name),9,["onClick"])]))),128))])):Object(c["f"])("",!0),0==x.state.addKeep&&x.state.user.isAuthenticated?(Object(c["r"])(),Object(c["e"])("button",{key:1,class:"btn btn-primary",onClick:t[2]||(t[2]=(...e)=>x.getVaults&&x.getVaults(...e))}," Add to vault ")):Object(c["f"])("",!0),V])])])],8,["id"])});var K=a("83fc"),C=a("6c96"),P=a("473f"),B=a("a613"),A=a("3d20"),T=a.n(A),_={props:["keep"],setup(e){const t=Object(c["v"])({account:Object(c["c"])(()=>K["a"].account),addKeep:!1,vaults:Object(c["c"])(()=>K["a"].currentVaults),user:Object(c["c"])(()=>K["a"].user)});return{state:t,test(){console.log(e.keep)},deleteKeep(){T.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#2a93ad",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(t=>{t.isConfirmed&&(T.a.fire("Deleted!"),C["a"].delete(e.keep.id),C["a"].getKeeps())})},getVaults(){P["a"].getVaultsByAccount(),t.addKeep=!0},addKeepToVault(a){const c={};c.keepId=e.keep.id,c.vaultId=a,B["a"].createVaultKeep(c),t.addKeep=!1}}}};a("600d");_.render=x,_.__scopeId="data-v-3a5f1bfc";t["default"]=_}});