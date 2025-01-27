(this["webpackJsonp@rclone/rclone-webui-react"]=this["webpackJsonp@rclone/rclone-webui-react"]||[]).push([[5],{131:function(e,t,r){e.exports=r(271)},2:function(e,t,r){"use strict";r.d(t,"s",(function(){return n})),r.d(t,"y",(function(){return a})),r.d(t,"B",(function(){return o})),r.d(t,"v",(function(){return c})),r.d(t,"A",(function(){return i})),r.d(t,"u",(function(){return s})),r.d(t,"w",(function(){return u})),r.d(t,"j",(function(){return l})),r.d(t,"q",(function(){return d})),r.d(t,"I",(function(){return f})),r.d(t,"k",(function(){return h})),r.d(t,"l",(function(){return b})),r.d(t,"F",(function(){return p})),r.d(t,"E",(function(){return m})),r.d(t,"D",(function(){return g})),r.d(t,"o",(function(){return O})),r.d(t,"f",(function(){return E})),r.d(t,"N",(function(){return j})),r.d(t,"m",(function(){return v})),r.d(t,"z",(function(){return y})),r.d(t,"M",(function(){return S})),r.d(t,"t",(function(){return k})),r.d(t,"r",(function(){return I})),r.d(t,"c",(function(){return A})),r.d(t,"g",(function(){return w})),r.d(t,"d",(function(){return C})),r.d(t,"i",(function(){return _})),r.d(t,"C",(function(){return T})),r.d(t,"h",(function(){return D})),r.d(t,"a",(function(){return M})),r.d(t,"G",(function(){return N})),r.d(t,"b",(function(){return F})),r.d(t,"e",(function(){return R})),r.d(t,"n",(function(){return L})),r.d(t,"x",(function(){return P})),r.d(t,"H",(function(){return G})),r.d(t,"p",(function(){return H})),r.d(t,"J",(function(){return B})),r.d(t,"L",(function(){return U})),r.d(t,"K",(function(){return J}));const n="FETCH_STATUS",a="GET_PROVIDERS",o="GET_VERSION",c="GET_CONFIG_FOR_REMOTE",i="GET_REMOTE_LIST",s="GET_CONFIG_DUMP",u="GET_FILES_LIST",l="CHANGE_PATH",d="CREATE_PATH",f="REMOVE_PATH",h="CHANGE_REMOTE_NAME",b="CHANGE_REMOTE_PATH",p="NAVIGATE_UP",m="NAVIGATE_FWD",g="NAVIGATE_BACK",O="CHANGE_VISIBILITY_FILTER",E="CHANGE_GRID_MODE",j="SIGNOUT_REQUEST",v="CHANGE_SEARCH_QUERY",y="GET_REMOTE_ABOUT",S="SET_BANDWIDTH",k="GET_BANDWIDTH",I="ENABLE_STATUS_CHECK",A="CHANGE_AUTH_KEY",w="CHANGE_IP_ADDRESS",C="CHANGE_AXIOS_INTERCEPTOR",_="CHANGE_LOAD_IMAGES",T="LOAD_IMAGE",D="CHANGE_LAYOUT_COLS",M="ADD_LAYOUT_CONTAINER",N="REMOVE_LAYOUT_CONTAINER",F="CHANGE_ACTIVE_REMOTE_CONTAINER",R="CHANGE_DISTRACTION_FREE_MODE",L="CHANGE_SORT_FILTER",P="GET_MOUNT_LIST",G="REMOVE_MOUNT",H="CREATE_MOUNT",B="ERROR",U="SUCCESS",J="LOADING"},245:function(e,t,r){},246:function(e,t,r){},271:function(e,t,r){"use strict";r.r(t);r(132),r(114),r(223),r(227),r(228),r(229),r(237),r(238),r(239);!function(){if("function"===typeof window.CustomEvent)return!1;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var r=document.createEvent("CustomEvent");return r.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),r}e.prototype=window.Event.prototype,window.CustomEvent=e}();var n=r(0),a=r.n(n),o=r(27),c=r.n(o),i=(r(245),r(90)),s=r(8),u=(r(246),r(36)),l=(r(247),r(89));const d=a.a.lazy(()=>Promise.all([r.e(9),r.e(22)]).then(r.bind(null,660))),f=a.a.lazy(()=>Promise.all([r.e(0),r.e(3),r.e(21)]).then(r.bind(null,661))),h=a.a.lazy(()=>r.e(10).then(r.bind(null,643))),b=a.a.lazy(()=>r.e(14).then(r.bind(null,644))),p=a.a.lazy(()=>r.e(15).then(r.bind(null,645)));class m extends n.Component{render(){return a.a.createElement("div",{"data-test":"appComponent"},a.a.createElement(l.a,null,a.a.createElement(u.a,null),a.a.createElement(i.a,null,a.a.createElement(a.a.Suspense,{fallback:a.a.createElement("div",{className:"animated fadeIn pt-3 text-center"},"Loading...")},a.a.createElement(s.d,null,a.a.createElement(s.b,{exact:!0,path:"/login",name:"Login Page",render:e=>a.a.createElement(f,e)}),a.a.createElement(s.b,{exact:!0,path:"/register",name:"Register Page",render:e=>a.a.createElement(h,e)}),a.a.createElement(s.b,{exact:!0,path:"/404",name:"Page 404",render:e=>a.a.createElement(b,e)}),a.a.createElement(s.b,{exact:!0,path:"/500",name:"Page 500",render:e=>a.a.createElement(p,e)}),a.a.createElement(s.b,{path:"/",name:"Home",render:e=>a.a.createElement(d,e)}))))))}}var g=m;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=r(87),E=r(42),j=r(130),v=r(1),y=r(2);const S={isConnected:!1,jobs:{},speed:[],runningAvgSpeed:0,checkStatus:!0,bandwidth:{}};const k={providers:[],configDump:{},hasError:!1};const I={configs:{},remotes:[],files:{},hasError:!1,numContainers:0,containers:[],activeRemoteContainerID:{},distractionFreeMode:!1,numCols:1};var A=class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;if(e&&t)return this.items=e,void(this.count=t);this.items=[{remoteName:"",remotePath:""}],this.count=1}getLength(){return this.count}push(e){this.items.push(e),this.count=this.count+1}pop(){return this.count>0&&(this.count=this.count-1),this.items.pop()}peek(){return this.items.slice(-1)[0]}empty(){this.items=[],this.count=0}moveBack(){if(this.getLength()>1)return this.pop()}};var w=class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;if(e)return this.backStack=new A(e.backStack.items,e.backStack.count),void(this.forwardStack=new A(e.forwardStack.items,e.forwardStack.count));this.backStack=new A,this.forwardStack=new A}getLength(){return this.backStack.getLength()}push(e){this.backStack.push(e),this.forwardStack.empty()}pop(){return this.backStack.pop()}peek(){return this.backStack.peek()}empty(){this.backStack.empty(),this.forwardStack.empty()}moveBack(){const e=this.backStack.moveBack();return e&&this.forwardStack.push(e),e}moveForward(){const e=this.forwardStack.pop();return e&&this.backStack.push(e),e}};const C={backStacks:{},currentPaths:{},visibilityFilters:{},gridMode:{},searchQueries:{},loadImages:{},sortFilters:{},sortFiltersAscending:{}};const _={about:{}};var T=r(64),D=r(35);const M={auth:{authKey:"",ipAddress:"http://localhost:5572",interceptor:""}};const N={};const F={arch:"",decomposed:[],goVersion:"",isGit:!1,os:"",version:"",hasError:!1};const R={currentMounts:[],mountError:null};const L=Object(E.b)({status:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.s:if(t.status===y.L){const r=t.payload.speed;let n=e.runningAvgSpeed,a=Math.trunc(n+(r-n)/50);const o=[...e.speed,{elapsedTime:Math.trunc(t.payload.elapsedTime),speed:Math.trunc(t.payload.speed),speedAvg:Math.trunc(a)}],c=o.length;return c>50&&o.splice(0,c-50),Object(v.a)(Object(v.a)({},e),{},{jobs:t.payload,runningAvgSpeed:a,speed:o,isConnected:!0})}if(t.status===y.J)return Object(v.a)(Object(v.a)({},e),{},{error:t.payload,isConnected:!1});break;case y.r:return Object(v.a)(Object(v.a)({},e),{},{checkStatus:t.payload});case y.M:case y.t:return Object(v.a)(Object(v.a)({},e),{},{bandwidth:t.payload});default:return e}},config:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.y:return Object(v.a)(Object(v.a)({},e),{},{providers:t.payload});case y.u:if(t.status===y.L)return Object(v.a)(Object(v.a)({},e),{},{configDump:t.payload,hasError:!1});if(t.status===y.J)return Object(v.a)(Object(v.a)({},e),{},{hasError:!0,error:t.payload});break;default:return e}},remote:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.v:if(t.status===y.L)return Object(v.a)(Object(v.a)({},e),{},{configs:Object(v.a)(Object(v.a)({},e.configs),t.payload),hasError:!1});if(t.status===y.J)return Object(v.a)(Object(v.a)({},e),{},{error:t.payload,hasError:!0});break;case y.A:if(t.status===y.L)return Object(v.a)(Object(v.a)({},e),{},{remotes:t.payload,hasError:!1});if(t.status===y.J)return Object(v.a)(Object(v.a)({},e),{},{error:t.payload,hasError:!0});break;case y.w:if(t.status===y.L)return Object(v.a)(Object(v.a)({},e),{},{files:Object(v.a)(Object(v.a)({},e.files),{},{[t.payload.path]:{time:new Date,files:t.payload.filesList}}),hasError:!1});if(t.status===y.J)return Object(v.a)(Object(v.a)({},e),{},{files:Object(v.a)(Object(v.a)({},e.files),{},{[t.payload.path]:{time:new Date,files:[],hasError:!0,error:t.payload.error}})});break;case y.a:return e.containers.push({ID:t.payload.containerID,paneID:t.payload.paneID}),e.numContainers=e.containers.length,e.activeRemoteContainerID=Object(v.a)(Object(v.a)({},e.activeRemoteContainerID),{},{[t.payload.paneID]:t.payload.containerID}),Object(v.a)({},e);case y.G:e.containers=e.containers.filter(e=>e.ID!==t.payload.containerID),e.numContainers=e.containers.length;const r=e.containers.filter(e=>e.paneID===t.payload.paneID).slice(-1).pop();return e.activeRemoteContainerID=Object(v.a)(Object(v.a)({},e.activeRemoteContainerID),{},{[t.payload.paneID]:r?r.ID:void 0}),Object(v.a)({},e);case y.b:return e.activeRemoteContainerID=Object(v.a)(Object(v.a)({},e.activeRemoteContainerID),{},{[t.payload.paneID]:t.payload.containerID}),Object(v.a)({},e);case y.h:return Object(v.a)(Object(v.a)({},e),{},{numCols:t.payload.numCols});case y.e:return Object(v.a)(Object(v.a)({},e),{},{distractionFreeMode:t.payload});default:return e}},explorer:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;const r=t.id;if(r){let n=e.backStacks[r];n&&n instanceof w||(n=n instanceof w?new w:new w(n));let a=t.remoteName,o=t.remotePath;a||(a=""),o||(o="");const c={remoteName:a,remotePath:o};let i=e.visibilityFilters[r],s=e.gridMode[r];s||(s="list");let u="",l=e.loadImages[r];l||(l=!1);let d=e.sortFiltersAscending[r];d||(d=!0);let f=e.sortFilters[r];switch(f||(f="name"),t.type){case y.j:n.push(c);break;case y.k:0===a.indexOf("/")?(o=a,a="/"):o="",n.empty(),n.push({remoteName:a,remotePath:o});break;case y.l:n.push({remoteName:n.peek().remoteName,remotePath:o});break;case y.q:n&&n instanceof w||(n=new w);break;case y.I:return Object(v.a)(Object(v.a)({},e),{},{backStacks:Object(v.a)(Object(v.a)({},e.backStacks),{},{[r]:void 0}),currentPaths:Object(v.a)(Object(v.a)({},e.currentPaths),{},{[r]:void 0}),visibilityFilters:Object(v.a)(Object(v.a)({},e.visibilityFilters),{},{[r]:void 0}),gridMode:Object(v.a)(Object(v.a)({},e.gridMode),{},{[r]:void 0}),searchQueries:Object(v.a)(Object(v.a)({},e.searchQueries),{},{[r]:void 0}),loadImages:Object(v.a)(Object(v.a)({},e.loadImages),{},{[r]:void 0}),sortFilters:Object(v.a)(Object(v.a)({},e.sortFilters),{},{[r]:void 0}),sortFiltersAscending:Object(v.a)(Object(v.a)({},e.sortFiltersAscending),{},{[r]:void 0})});case y.F:let h=n.peek();if(h.remotePath&&""!==h.remotePath){const e=h.remotePath.split("/");if(h.remotePath="",e.length>1)for(let t=0;t<e.length-1;t++)h.remotePath=h.remotePath+(0!==t?"/":"")+e[t]}n.push(h);break;case y.E:n.moveForward();break;case y.D:n.moveBack();break;case y.o:i=t.filter?t.filter:"";break;case y.f:t.mode&&(s=t.mode);break;case y.m:u=t.searchQuery;break;case y.i:l=t.payload;break;case y.n:f=t.payload.sortFilter,d=t.payload.sortFilterAscending}return Object(v.a)(Object(v.a)({},e),{},{backStacks:Object(v.a)(Object(v.a)({},e.backStacks),{},{[r]:n}),currentPaths:Object(v.a)(Object(v.a)({},e.currentPaths),{},{[r]:Object(v.a)({},n.peek())}),visibilityFilters:Object(v.a)(Object(v.a)({},e.visibilityFilters),{},{[r]:i}),gridMode:Object(v.a)(Object(v.a)({},e.gridMode),{},{[r]:s}),searchQueries:Object(v.a)(Object(v.a)({},e.searchQueries),{},{[r]:u}),loadImages:Object(v.a)(Object(v.a)({},e.loadImages),{},{[r]:l}),sortFilters:Object(v.a)(Object(v.a)({},e.sortFilters),{},{[r]:f}),sortFiltersAscending:Object(v.a)(Object(v.a)({},e.sortFiltersAscending),{},{[r]:d})})}return e},providerStatus:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.z:if(t.status===y.L)return Object(v.a)(Object(v.a)({},e),{},{about:Object(v.a)(Object(v.a)({},e.about),{},{[t.id]:t.payload})});if(t.status===y.J)return e;break;default:return e}},user:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.c:case y.g:return e=Object(v.a)(Object(v.a)({},e),{},{auth:Object(v.a)(Object(v.a)({},e.auth),t.payload)}),localStorage.setItem(D.a,e.auth.authKey),localStorage.setItem(D.c,e.auth.ipAddress),e;case y.d:e.auth.interceptor&&T.a.interceptors.request.eject(e.auth.interceptor);const r=T.a.interceptors.request.use(e=>(e.headers.Authorization="Basic "+localStorage.getItem(D.a),e.baseURL=localStorage.getItem("ipAddress"),e),e=>Promise.reject(e));return Object(v.a)(Object(v.a)({},e),{},{auth:Object(v.a)(Object(v.a)({},e.auth),{},{interceptor:r})});default:return e}},imageLoader:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.C:const{url:r,data:n,error:a}=t.payload;let o=e[r];switch(o||(o={isLoading:!1,data:"",error:"",hasError:!1}),t.status){case y.K:o.isLoading=!0,o.hasError=!1;break;case y.L:o.isLoading=!1,o.hasError=!1,o.data=n;break;case y.J:o.hasError=!0,o.isLoading=!1,o.error=a}return Object(v.a)(Object(v.a)({},e),{},{[r]:Object(v.a)({},o)});default:return e}},version:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;if(t.type===y.B){if(t.status===y.L)return Object(v.a)(Object(v.a)(Object(v.a)({},e),t.payload),{},{hasError:!1});if(t.status===y.J)return Object(v.a)(Object(v.a)({},e),{},{error:t.payload,hasError:!0})}return e},mount:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.p:t.status===y.L?u.b.info("Mount Success"):t.status===y.J&&u.b.error("Error creating mount "+t.payload);break;case y.x:if(t.status===y.L)return Object(v.a)(Object(v.a)({},e),{},{currentMounts:t.payload.mountPoints});if(t.status===y.J)return Object(v.a)(Object(v.a)({},e),{},{currentMounts:[],mountError:t.payload});break;case y.H:t.status===y.L?u.b.info("Unmount success"):t.status===y.J&&u.b.error("Couldn't remove mount");break;default:return e}return e}});var P=(e,t)=>(t.type===y.N&&(localStorage.clear(),e=void 0),L(e,t));const G={};const H=[j.a,e=>{let{getState:t,dispatch:r}=e;return e=>t=>{const r=t.meta&&t.meta.throttle;if(!r)return e(t);G[t.type]||(G[t.type]=!0,setTimeout(()=>{G[t.type]=!1},r),e(t))}}],B=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||E.c,U=new class{loadState(){try{let e=localStorage.getItem("curState");return null===e?this.initializeState():JSON.parse(e)}catch(e){return this.initializeState()}}saveState(e){const t=Object(v.a)(Object(v.a)({},e),{},{imageLoader:void 0});try{let e=JSON.stringify(t);localStorage.setItem("curState",e)}catch(r){throw console.error("Error occurred while saving state"),new Error("Cannot Save State ".concat(r))}}initializeState(){return{}}},J=Object(E.d)(P,U.loadState(),B(Object(E.a)(...H)));J.subscribe(()=>{U.saveState(J.getState())});var z=J;c.a.render(a.a.createElement(O.a,{store:z},a.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})},35:function(e,t,r){"use strict";r.d(t,"i",(function(){return n})),r.d(t,"g",(function(){return a})),r.d(t,"f",(function(){return o})),r.d(t,"e",(function(){return c})),r.d(t,"h",(function(){return i})),r.d(t,"a",(function(){return s})),r.d(t,"c",(function(){return u})),r.d(t,"d",(function(){return l})),r.d(t,"b",(function(){return d}));const n=["Images","Pdf","Videos"],a=5e3,o=1e3,c="modal-root",i="userName",s="authKey",u="ipAddress",l="login_token",d="75vh"},45:function(e,t,r){"use strict";t.a={mkdir:"operations/mkdir",purge:"operations/purge",deleteFile:"operations/deletefile",createPublicLink:"operations/publiclink",stats:"core/stats",bwlimit:"core/bwlimit",moveDir:"sync/move",moveFile:"operations/movefile",copyDir:"sync/copy",copyFile:"operations/copyfile",cleanUpRemote:"operations/cleanup",noopAuth:"rc/noopauth",getRcloneVersion:"core/version",getRcloneMemStats:"core/memstats",getOptions:"options/get",getProviders:"config/providers",getConfigDump:"config/dump",getRunningJobs:"job/list",getStatusForJob:"job/status",getConfigForRemote:"config/get",createConfig:"config/create",updateConfig:"config/update",getFsInfo:"operations/fsinfo",listRemotes:"config/listremotes",getFilesList:"operations/list",getAbout:"operations/about",deleteConfig:"config/delete",stopJob:"job/stop",listMounts:"mount/listmounts",createMount:"mount/mount",removeMount:"mount/unmount",unmountAll:"mount/unmountall"}},63:function(e,t,r){"use strict";function n(e){if(Array.isArray(e))return 0===e.length;for(let t in e)if(e.hasOwnProperty(t))return!1;return!0}function a(e){if(0===e)return 0;return e/1024}function o(e){if(0===e)return 0;return e/1024/1024/1024}function c(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(e<1)return"0 B";const r=1024,n=t<0?0:t,a=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(r));return parseFloat((e/Math.pow(r,o)).toFixed(n))+" "+a[o]}function i(e){function t(e){return e>1?"s":""}let r=Math.floor(e/31536e3);if(r)return r+" year"+t(r);let n=Math.floor((e%=31536e3)/86400);if(n)return n+" day"+t(n);let a=Math.floor((e%=86400)/3600);if(a)return a+" hour"+t(a);let o=Math.floor((e%=3600)/60);return o?o+" minute"+t(o):(e%=60)?e.toFixed(2)+" second"+t(e):"Just now"}function s(e,t){return e.test(t)}function u(e){return s(/^(off|(([0-9]+[.][0-9]+|[0-9]+)([KMGTP])))$/i,e)}function l(e){return s(/^([0-9]+)$/,e)}function d(e){return s(/^(\d+[h])?(\d+[m])?(\d+[s])?(\d+ms)??$/i,e)}function f(e){return s(/^[0-9A-Za-z_-]*$/i,e)}function h(e,t){return e.find((e,r,n)=>t===e.Prefix)}function b(e){return-1===e.indexOf(":")&&":"!==e[e.length-1]&&(e+=":"),e}r.d(t,"j",(function(){return n})),r.d(t,"c",(function(){return a})),r.d(t,"b",(function(){return o})),r.d(t,"g",(function(){return c})),r.d(t,"m",(function(){return i})),r.d(t,"q",(function(){return u})),r.d(t,"p",(function(){return l})),r.d(t,"o",(function(){return d})),r.d(t,"n",(function(){return f})),r.d(t,"f",(function(){return h})),r.d(t,"a",(function(){return b})),r.d(t,"d",(function(){return m})),r.d(t,"e",(function(){return g})),r.d(t,"k",(function(){return O})),r.d(t,"i",(function(){return E})),r.d(t,"h",(function(){return j})),r.d(t,"l",(function(){return v}));const p={Images:"image/jpeg",Pdf:"application/pdf"};function m(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:p,n=r[t];if(n){return e.filter(e=>e.IsDir||e.MimeType===n)}return e}function g(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(t=t.toLowerCase(),t){return e.filter(e=>e.Name.toLowerCase().includes(t))}return e}function O(e){return e&&""!==e&&"/"===e[0]}function E(e,t){const r=new Map;return e.forEach(e=>{const n=t(e),a=r.get(n);a?a.push(e):r.set(n,[e])}),r}function j(e,t){switch(e){case"name":return(e,r)=>{let n,a;return n=e.Name.toLowerCase(),a=r.Name.toLowerCase(),n<a?t?-1:1:n>a?t?1:-1:0};case"size":return(e,r)=>{let n,a;return n=e.Size?e.Size:0,a=r.Size?r.Size:0,t?n-a:a-n};case"modified":return(e,r)=>{let n,a;return n=new Date(e.ModTime),a=new Date(r.ModTime),t?n-a:a-n}}}function v(e){let t="";const r="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",n=r.length;for(let a=0;a<e;a++)t+=r.charAt(Math.floor(Math.random()*n));return t}},64:function(e,t,r){"use strict";r.d(t,"c",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(1),a=r(119),o=r.n(a),c=r(63),i=r(35),s=r(45);let u=o.a.create({headers:{"Content-Type":"application/json"},responseType:"json"});function l(e,t,r,n,a,o){return f(e,t,r,n,a,o,"move")}function d(e,t,r,n,a,o){return f(e,t,r,n,a,o,"copy")}async function f(e,t,r,a,o,i,l){let d="";d="move"===l?i?s.a.moveDir:s.a.moveFile:i?s.a.copyDir:s.a.copyFile,Object(c.k)(e)&&(e=""),Object(c.k)(r)&&(r="");let f={_async:!0};if(i){const o=t.split("/");return f=Object(n.a)(Object(n.a)({},f),{},{srcFs:e+t,dstFs:r+a+"/"+o[o.length-1]}),console.log("DirOp:",f),await u.post(d,f)}return""===a?a=o:a+="/"+o,f=Object(n.a)(Object(n.a)({},f),{},{srcFs:e,srcRemote:t,dstFs:r,dstRemote:a}),await u.post(d,f)}u.interceptors.request.use(e=>(e.baseURL=localStorage.getItem(i.c),e.headers.Authorization="Basic "+localStorage.getItem(i.a),e),e=>Promise.reject(e)),t.a=u},89:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(272),c=r(62),i=r(43);class s extends a.a.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,t){this.setState({error:e,info:t})}render(){return this.state.hasError?a.a.createElement("div",{className:"d-flex align-items-center"},a.a.createElement(o.a,{fluid:!0},a.a.createElement(c.a,null,a.a.createElement(i.a,{lg:3,sm:12}),a.a.createElement(i.a,{lg:6,sm:12},a.a.createElement("h3",null,"Something went wrong. "),a.a.createElement(c.a,null,a.a.createElement(i.a,null,"Try refreshing the page. If the issue persists, please consider opening a new issue on our Github page.")),a.a.createElement(c.a,null,a.a.createElement(i.a,null,"Here are some things you can try:",a.a.createElement("br",null),"1. Clear the local storage for this site.",a.a.createElement("br",null),"2. Logout and login again using: ",a.a.createElement("a",{className:"btn btn-primary mb-3",href:"/#/login"},"Logout"),a.a.createElement("br",null),"3. If the issue persists, please consider opening a new issue on our Github page.",a.a.createElement("a",{href:"https://github.com/negative0/rclone-webui-react/issues",className:"btn btn-primary"},"Create new Issue."))),a.a.createElement(c.a,null,a.a.createElement(i.a,null))),a.a.createElement(i.a,{lg:3,sm:12})))):this.props.children}}t.a=s}},[[131,6,7]]]);
//# sourceMappingURL=main.2826aa78.chunk.js.map