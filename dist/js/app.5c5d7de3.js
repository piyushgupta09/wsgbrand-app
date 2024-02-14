(function(){"use strict";var e={5240:function(e,t,a){var r=a(7764),o=a(4108),s=a(9096);function n(e,t,a,r,n,i){const c=(0,o.E1)("router-view"),d=(0,o.E1)("AppToast"),l=(0,o.E1)("ImagePreviewModal");return(0,o.Wz)(),(0,o.An)("div",{class:"position-relative pb-3",style:(0,s.MN)({height:"calc(var(--vh, 1vh) * 100)",width:"calc(var(--vw, 1vw) * 100)"})},[(0,o.K2)(c),(0,o.K2)(d),(0,o.K2)(l)],4)}function i(e,t,a,r,n,i){return e.toast.show?((0,o.Wz)(),(0,o.An)("div",{key:0,class:(0,s.WN)(["alert",i.toastClasses]),role:"alert"},(0,s.WA)(e.toast.message),3)):(0,o.g1)("",!0)}var c=a(7192),d={name:"AppToast",computed:{...(0,c.gV)(["toast"]),toastClasses(){let e={"alert-success":"success"===this.toast.type,"alert-danger":"error"===this.toast.type,"alert-warning":"warning"===this.toast.type,"alert-info":"info"===this.toast.type||!this.toast.type};return this.toast.position&&(e["toast-position-"+this.toast.position]=!0),e}},watch:{"toast.show"(e){e&&setTimeout((()=>{this.$store.commit("hideToast")}),4e3)}}},l=a(4100);const h=(0,l.c)(d,[["render",i],["__scopeId","data-v-21d7383a"]]);var m=h;const u={class:"modal fade",id:"imagePreviewModal",tabindex:"-1","aria-hidden":"true"},g=(0,o.QD)("div",{class:"modal-dialog modal-fullscreen"},[(0,o.QD)("button",{type:"button",class:"btn h-100 w-100 p-0","data-bs-dismiss":"modal","aria-label":"Close"},[(0,o.QD)("img",{src:"https://placehold.co/400",class:"w-100",style:{"object-fit":"cover"}})])],-1),p=[g];function f(e,t,a,r,s,n){return(0,o.Wz)(),(0,o.An)("div",u,p)}var w={name:"ImagePreviewModal",mounted(){const e=document.getElementById("imagePreviewModal");e&&e.addEventListener("show.bs.modal",(t=>{const a=t.relatedTarget,r=a.getAttribute("data-bs-url"),o=e.querySelector(".modal-dialog img");o.src=r}))},beforeUnmount(){const e=document.getElementById("imagePreviewModal");e&&e.removeEventListener("show.bs.modal")}};const b=(0,l.c)(w,[["render",f]]);var y=b,v={name:"App",components:{AppToast:m,ImagePreviewModal:y},created(){this.$store.dispatch("authy/loadAuthData"),this.adjustViewport(),window.addEventListener("resize",this.adjustViewport)},destroyed(){window.removeEventListener("resize",this.adjustViewport)},methods:{adjustViewport(){const e=.01*window.innerHeight,t=.01*window.innerWidth;document.documentElement.style.setProperty("--vh",`${e}px`),document.documentElement.style.setProperty("--vw",`${t}px`)}}};const P=(0,l.c)(v,[["render",n]]);var S=P,O=a(5216),k=a(6164),E=a(56);(0,E.s)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});a(6376),a(32);const L=(0,r.W0)(S);L.use(O.c),L.use(k.c),L.config.errorHandler=function(e,t,a){console.error("Vue Global Error Handler:",e,a)},L.mount("#app")},2784:function(e,t,a){var r=a(8656),o=a.n(r);const s={showSweetAlert(e="Yay!",t="Order Has been Accepted."){o().fire({title:e,text:t,icon:"success",showConfirmButton:!0,confirmButtonText:"OK",confirmButtonColor:"#25C297",customClass:{}})},showSweetError(e="Oops!",t="Something went wrong!"){o().fire({title:e,text:t,icon:"error",timer:4e3,showConfirmButton:!1,confirmButtonText:"OK"})}};t.c=s},6376:function(e,t,a){a.d(t,{c:function(){return g}});a(3248);var r=a(2964),o=a(5216),s=a(6164),n=a(7100);const i=e=>{let t=n.c.get("token")||localStorage.getItem("token");return t?e.headers["Authorization"]=`Bearer ${t}`:delete e.headers["Authorization"],e};var c={setAuthHeader:i};const d=e=>{console.error("logErrorToService: ",e)},l=(e,t,a)=>{if(!e.response)return d(e),Promise.reject(e);const r={status:e.response?e.response.status:void 0,statusText:e.response?e.response.statusText:void 0,errors:e.response?e.response.data.errors:void 0},o=()=>{t.dispatch("setErrorsBag",r).then((()=>{t.dispatch("setLoading",!1)}))},s=()=>{t.dispatch("setErrorsBag",r).then((()=>{t.dispatch("setLoading",!1).then((()=>{a.replace({name:"NotFound"})}))}))};switch(r.status){case 422:o();break;case 404:s();break;case 401:case 500:break;default:o();break}};var h={handleErrors:l};const m={development:"http://localhost:9000/api",testing_alpha_v2:"http://192.168.1.183:9000/api",testing_alpha_v1:"http://192.168.1.184:9000/api",testing_beta:"http://192.168.1.5:9000/api",production:"https://server.wsgbrand.in/api"},u="production";r.c.defaults.baseURL=m[u],r.c.defaults.withCredentials=!0,r.c.defaults.headers.post.Accept="application/json",r.c.defaults.headers.post.ContentType="application/json",r.c.interceptors.request.use((e=>(o.c.dispatch("startLoading"),c.setAuthHeader(e))),(e=>(console.log("Request creation error: "+e),Promise.reject(e)))),r.c.interceptors.response.use((e=>(o.c.dispatch("resetErrorsBag"),o.c.dispatch("stopLoading"),"error"===e.data.status&&s.c.push({name:"NotFound"}),e)),(e=>{h.handleErrors(e,o.c,s.c)}));var g=r.c},6164:function(e,t,a){a.d(t,{c:function(){return f}});var r=a(7464),o=a(7100);function s(e,t,a){const r="true"===localStorage.getItem("auth")||"true"===o.c.get("auth"),s="true"===localStorage.getItem("verified")||"true"===o.c.get("verified");r?r&&!s?(console.log("Redirect to Verify"),a({name:"VerifyEmail"})):r&&s&&(console.log("Proceed"),a()):(console.log("Redirect to Login"),a({name:"Login"}))}const n=[{path:"/auth",component:()=>a.e(172).then(a.bind(a,9552)),beforeEnter:(e,t,a)=>{"Login"!==e.name&&"Register"!==e.name&&"ForgotPassword"!==e.name&&"ResetPassword"!==e.name||!localStorage.getItem("auth")?a():a({name:"Home"})},children:[{path:"login",name:"Login",component:()=>a.e(808).then(a.bind(a,7808))}]},{path:"/",component:()=>a.e(172).then(a.bind(a,9552)),children:[{path:"verify-email",name:"VerifyEmail",component:()=>a.e(728).then(a.bind(a,8728)),beforeEnter:(e,t,a)=>{const r="true"===localStorage.getItem("auth")||"true"===o.c.get("auth"),s="true"===localStorage.getItem("verified")||"true"===o.c.get("verified");r&&!s?a():r?r&&s&&a({name:"Home"}):(localStorage.setItem("initialPath",e.fullPath),a({name:"Login"}))}}]},{path:"/",component:()=>a.e(796).then(a.bind(a,7796)),beforeEnter:s,children:[{path:"notifications",name:"NotificationsPage",component:()=>a.e(104).then(a.bind(a,9104))}]}];var i=n;const c=[{path:"/deshigirl",name:"BrandHome",component:()=>Promise.all([a.e(416),a.e(472)]).then(a.bind(a,4896)),beforeEnter:s,children:[{path:"mydashboard",name:"BrandDashboard",component:()=>Promise.all([a.e(120),a.e(374)]).then(a.bind(a,6374))},{path:"products",children:[{path:"",name:"BrandProducts",component:()=>a.e(72).then(a.bind(a,2072))},{path:"detail/:product",name:"BrandProductDetail",component:()=>a.e(228).then(a.bind(a,5228))},{path:"ledger/:ledger",name:"BrandProductLedger",component:()=>Promise.all([a.e(960),a.e(736)]).then(a.bind(a,9356))},{path:"chats/:ledger",name:"BrandLedgerChats",component:()=>Promise.all([a.e(68),a.e(364)]).then(a.bind(a,1292))}]},{path:"orders",children:[{path:"sales",name:"BrandSaleOrders",component:()=>Promise.all([a.e(730),a.e(724)]).then(a.bind(a,8724))},{path:"purchase",name:"BrandPurchaseOrders",component:()=>Promise.all([a.e(730),a.e(636)]).then(a.bind(a,1636))}]},{path:"purchases",name:"Purchases",children:[{path:"pos",name:"BrandPos",component:()=>Promise.all([a.e(730),a.e(44)]).then(a.bind(a,1044))},{path:"incomings",name:"BrandIncomings",component:()=>Promise.all([a.e(100),a.e(740)]).then(a.bind(a,4120))},{path:"bills",name:"BrandPurchases",component:()=>Promise.all([a.e(260),a.e(336)]).then(a.bind(a,6336))}]},{path:"sales",name:"Sales",children:[{path:"sos",name:"BrandSos",component:()=>a.e(92).then(a.bind(a,7472))},{path:"outgoings",name:"BrandOutgoings",component:()=>a.e(708).then(a.bind(a,6708))},{path:"bills",name:"BrandSales",component:()=>a.e(620).then(a.bind(a,9620))}]},{path:"parties",name:"BrandParties",component:()=>a.e(584).then(a.bind(a,2584))}]}];var d=c;const l=[{path:"/factory",component:()=>Promise.all([a.e(416),a.e(880)]).then(a.bind(a,992)),beforeEnter:s,children:[{path:"mydashboard",name:"FactoryDashboard",component:()=>Promise.all([a.e(120),a.e(744)]).then(a.bind(a,6744))},{path:"new-orders",name:"FactoryOrders",component:()=>Promise.all([a.e(730),a.e(64)]).then(a.bind(a,3064))},{path:"purchases",children:[{path:"orders",name:"FactoryPurchaseOrders",component:()=>Promise.all([a.e(730),a.e(240)]).then(a.bind(a,9240))},{path:"bills",name:"FactoryPurchaseBills",component:()=>a.e(800).then(a.bind(a,6800))}]},{path:"ledgers",children:[{path:"",name:"FactoryLedgers",component:()=>a.e(884).then(a.bind(a,7884))},{path:":ledger",name:"FactoryLedgerDetail",component:()=>Promise.all([a.e(960),a.e(600)]).then(a.bind(a,1600))},{path:"chats/:ledger",name:"FactoryLedgerChats",component:()=>Promise.all([a.e(68),a.e(564)]).then(a.bind(a,9148))}]},{path:"sales",children:[{path:"dispatches",name:"FactoryDispatches",component:()=>Promise.all([a.e(100),a.e(4)]).then(a.bind(a,3004))},{path:"bills",name:"FactorySales",component:()=>Promise.all([a.e(260),a.e(272)]).then(a.bind(a,8272))}]}]}];var h=l;const m=[{path:"/vendor",component:()=>Promise.all([a.e(416),a.e(296)]).then(a.bind(a,9272)),beforeEnter:s,children:[{path:"mydashboard",name:"VendorDashboard",component:()=>Promise.all([a.e(120),a.e(618)]).then(a.bind(a,3618))},{path:"new-orders",name:"VendorOrders",component:()=>Promise.all([a.e(730),a.e(88)]).then(a.bind(a,88))},{path:"ledgers",children:[{path:"",name:"VendorLedgers",component:()=>a.e(80).then(a.bind(a,4080))},{path:":ledger",name:"VendorLedgerDetail",component:()=>Promise.all([a.e(960),a.e(680)]).then(a.bind(a,680))},{path:"chats/:ledger",name:"VendorLedgerChats",component:()=>Promise.all([a.e(68),a.e(412)]).then(a.bind(a,9724))}]},{path:"sales",children:[{path:"dispatches",name:"VendorDispatches",component:()=>Promise.all([a.e(100),a.e(552)]).then(a.bind(a,8552))},{path:"bills",name:"VendorSales",component:()=>Promise.all([a.e(260),a.e(576)]).then(a.bind(a,4576))}]}]}];var u=m;const g=[{path:"/",name:"Home",component:()=>a.e(60).then(a.bind(a,60))},...i,...d,...h,...u,{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>a.e(312).then(a.bind(a,5312))},{path:"/network-error",name:"NetworkError",component:()=>a.e(554).then(a.bind(a,4554))}],p=(0,r.gv)({history:(0,r.oz)("/"),routes:g});p.onError((e=>{console.log("Error in router:",e)}));var f=p},5216:function(e,t,a){a.d(t,{c:function(){return g}});var r=a(7192),o={namespaced:!0,state:{info:{name:"Wsg Brand",tagline:"Empowering Brands",domain:"https://app.wsgbrand.in",logo:a(656),brand:a(6780),mobile:"+919999437620"},monaal:{url:"https://app.monaal.in"},links:{topbar:[{path:"/",icon:"bi-house-door",name:"Home"}],footbar:{"manager-brand":[{path:"BrandParties",icon:"bi-people",name:"Parties"},{path:"BrandProducts",icon:"bi-stack",name:"Products"},{path:"BrandDashboard",icon:"bi-speedometer2",name:"Dashboard"},{path:"BrandPurchases",icon:"bi-box-arrow-in-right",name:"Purchases"},{path:"BrandSales",icon:"bi-box-arrow-right",name:"Sales"}],"manager-factory":[{path:"FactoryDashboard",icon:"bi-speedometer2",name:"Dashboard"},{path:"FactoryOrders",icon:"bi-receipt-cutoff",name:"Orders"},{path:"FactoryPurchaseOrders",icon:"bi-box-arrow-in-right",name:"Purchase"},{path:"FactoryLedgers",icon:"bi-arrow-left-right",name:"Ledger"},{path:"FactoryDispatches",icon:"bi-box-arrow-right",name:"Sales"}],"manager-vendor":[{path:"VendorDashboard",icon:"bi-speedometer2",name:"Dashboard"},{path:"VendorOrders",icon:"bi-receipt-cutoff",name:"Orders"},{path:"VendorLedgers",icon:"bi-arrow-left-right",name:"Ledger"},{path:"VendorDispatches",icon:"bi-box-arrow-right",name:"Sales"}]}}},getters:{info:e=>e.info,getMonaalUrl:e=>e.monaal.url,getTopbarLinks(e){return e.links.topbar},getFootbarLinks:e=>t=>e.links.footbar[t]?e.links.footbar[t]:[]},mutations:{},actions:{}},s=a(6376),n=a(2784),i={namespaced:!0,state:{pusher:null,notifications:[],unreadNotifications:[]},getters:{pusher:e=>e.pusher,notifications:e=>e.notifications.data||[],unreadNotifications:e=>e.unreadNotifications,hasNotifications:e=>e.unreadNotifications.length>0},mutations:{setPusher(e,t){e.pusher=t},setNotifications(e,t){e.notifications=t},setUnreadNotifications(e,t){e.unreadNotifications=t}},actions:{async fetchPusher({commit:e}){try{const t=await s.c.get("/notifications/pusher");"ok"===t.data.status&&e("setPusher",t.data.data)}catch(t){console.error(t)}},async fetchNotifications({commit:e}){try{const t=await s.c.get("/notifications");"ok"===t.data.status&&e("setNotifications",t.data.data)}catch(t){console.error(t)}},async fetchUnreadNotifications({commit:e}){try{const t=await s.c.get("/notifications/unread");"ok"===t.data.status&&e("setUnreadNotifications",t.data.data)}catch(t){console.error(t)}},async markAllNotificationsRead({dispatch:e}){try{const t=await s.c.post("/notifications/read");"ok"===t.data.status&&e("fetchNotifications").then((()=>{n.c.showSweetAlert("Great","All notifications marked as read")}))}catch(t){console.error(t)}},async markNotificationRead({dispatch:e},t){try{const a=await s.c.post(`/notifications/${t}/read`);"ok"===a.data.status&&e("fetchUnreadNotifications")}catch(a){console.error(a)}}}},c=a(6164),d={namespaced:!0,state:{auth:!1,user:{name:"Guest",email:null,verified:!1,image:null,roles:null,role:null,prefix:null},vemail:!1,profile:{}},getters:{user:e=>e.user,isAuthenticated:e=>e.auth,username:e=>e.user.name,useremail:e=>e.user.email,verified:e=>e.user.verified,verifyEmailSent:e=>e.vemail,profile:e=>e.profile,getRoles:e=>e.user.roles,getRole:e=>e.user.role,getPrefix:e=>e.user.prefix,doIHaveRole(e,t){return e.user.roles.includes(t)}},mutations:{setUser(e,t){e.auth=!0,e.user={name:t.name,email:t.email,verified:t.verified,image:t.image,roles:t.roles,role:t.role,prefix:t.prefix},localStorage.setItem("auth",!0),localStorage.setItem("name",t.name),localStorage.setItem("email",t.email),localStorage.setItem("roles",JSON.stringify(t.roles)),localStorage.setItem("role",t.role),localStorage.setItem("prefix",t.prefix),localStorage.setItem("image",t.image),localStorage.setItem("verified",t.verified)},recoverUser(e){e.auth=Boolean(localStorage.getItem("auth")),e.user={name:localStorage.getItem("name"),email:localStorage.getItem("email"),roles:JSON.parse(localStorage.getItem("roles")),role:localStorage.getItem("role"),prefix:localStorage.getItem("prefix"),image:localStorage.getItem("image"),verified:localStorage.getItem("verified")}},unsetUser(e){e.auth=!1,e.user={name:"Guest",email:null,roles:null,role:null,prefix:null,image:null,verified:!1},localStorage.removeItem("auth"),localStorage.removeItem("name"),localStorage.removeItem("email"),localStorage.removeItem("roles"),localStorage.removeItem("role"),localStorage.removeItem("prefix"),localStorage.removeItem("image"),localStorage.removeItem("verified")},setVerificationEmailSend(e){e.vemail=!0},setEmailVerified(e){e.user.verified=!0,localStorage.setItem("verified",!0)},setUserData(e,t){e.user=t},setProfile(e,t){e.profile=t},setProfileProfile(e,t){e.profile.profile=t}},actions:{async sendRegisterRequest({commit:e,dispatch:t},a){await s.c.post("/register",a).then((a=>{"ok"===a.data.status?t("saveAuthDataAndProceed",a.data.data).then((()=>{e("setVerificationEmailSend")})):t("setToast",{message:"Registration failed",type:"error"},{root:!0})})).catch((e=>{console.log("sendRegisterRequest",e)}))},async sendloginViaOtpCode({dispatch:e},t){await s.c.post("/send-login-otp",t).then((t=>{"ok"!==t.data.status&&e("setToast",{message:t.data.message,type:"error"},{root:!0})})).catch((e=>{console.log("sendloginViaOtpCode",e)}))},async sendLoginRequest({dispatch:e},t){await s.c.post("/login",t).then((t=>{"ok"===t.data.status?e("saveAuthDataAndProceed",t.data.data):e("setToast",{message:"Login failed",type:"error"},{root:!0})})).catch((e=>{console.log("sendLoginRequest",e)}))},async sendLogoutRequest({dispatch:e}){await s.c.post("/logout").then((t=>{"ok"!==t.data.status&&e("setToast",{message:"Logout failed",type:"error"},{root:!0})})).catch((e=>{console.log("sendLogoutRequest",e)})).finally((()=>{e("clearAuthData")}))},async resendVerificationCode({commit:e,dispatch:t}){await s.c.post("/email/verification").then((a=>{"ok"===a.data.status?e("setVerificationEmailSend"):t("setToast",{message:"Resend failed",type:"error"},{root:!0})})).catch((e=>{console.log("resendVerificationCode",e)}))},async verifyOtpCode({commit:e,dispatch:t},a){await s.c.post("/email/verify",{otp:a}).then((a=>{"ok"===a.data.status?(e("setEmailVerified"),c.c.replace({name:"Home"})):t("setToast",{message:"Verification failed",type:"error",position:"bottom"},{root:!0})})).catch((e=>{console.log("verifyOtpCode",e)}))},async updateUser({commit:e,dispatch:t},a){await s.c.post("/update-user",a).then((a=>{"ok"===a.data.status&&(e("setUserProfile",a.data.data.user),t("setToast",{message:a.data.message,type:"success"},{root:!0}))})).catch((e=>{console.error(e)}))},async updatePassword({dispatch:e},t){await s.c.post("/update-password",t).then((t=>{"ok"===t.data.status?(e("setToast",{message:"Password updated",type:"success"},{root:!0}),c.c.replace({name:"ProfilePage"})):e("setToast",{message:"Password update failed",type:"danger"},{root:!0})})).catch((e=>{console.error(e)}))},async validateSession({dispatch:e}){await s.c.post("/validate-session").then((t=>{"ok"!==t.data.status&&(e("setToast",{message:"Session expired",type:"error"},{root:!0}),e("clearAuthData"))})).catch((e=>{console.log("validateSession",e)}))},saveAuthDataAndProceed({commit:e},t){if(localStorage.setItem("token",t.token),e("setUser",t.user),!t.user.verified)return void c.c.replace({name:"VerifyEmail"});let a=localStorage.getItem("initialPath");if(a)return c.c.replace({path:a}),void localStorage.removeItem("initialPath");c.c.replace({name:"Home"})},loadAuthData({commit:e,dispatch:t}){e("recoverUser"),localStorage.getItem("token")&&t("validateSession")},clearAuthData({commit:e}){localStorage.removeItem("token"),e("unsetUser"),c.c.replace({name:"Login"})},async fetchUserProfile({commit:e}){const t=sessionStorage.getItem("userProfileData");if(t){const a=JSON.parse(t);e("setUserData",a.user),e("setProfile",a)}try{const t=await s.c.get("/user-profile");"ok"===t.data.status&&(sessionStorage.setItem("userProfileData",JSON.stringify(t.data.data)),e("setUserData",t.data.data.user),e("setProfile",t.data.data))}catch(a){console.error(a)}},async uploadProfile({commit:e,dispatch:t},a){const r={headers:{"Content-Type":"multipart/form-data"}};await s.c.post("/upload-profile-image",a,r).then((a=>{"ok"===a.data.status?(console.log(a.data.data),e("setProfileProfile",a.data.data),t("setToast",{message:"Profile image updated",type:"success"},{root:!0})):t("setToast",{message:"Profile image update failed",type:"danger"},{root:!0})})).catch((e=>{console.error(e)}))}}},l=(a(3248),a(2168),a(5104),a(8312),{namespaced:!0,state:{myDash:[],parties:[],products:[],product:[],ledger:[],filteredOrders:[],purchases:[],dispatches:[],showBottomNav:!0},getters:{myDash:e=>e.myDash,parties:e=>e.parties,products:e=>e.products,product:e=>e.product,ledger:e=>e.ledger,filteredOrders:e=>e.filteredOrders,purchases:e=>e.purchases,dispatches:e=>e.dispatches,showBottomNav:e=>e.showBottomNav},mutations:{setMydash(e,t){e.myDash=t},setParties(e,t){e.parties=t},setProducts(e,t){e.products=t},setProduct(e,t){e.product=t},setLedger(e,t){e.ledger=t},setFilteredOrders(e,t){e.filteredOrders=t},setPurchases(e,t){e.purchases=t},setDispatches(e,t){e.dispatches=t},setShowBottomNav(e,t){e.showBottomNav=t}},actions:{setShowBottomNav({commit:e},t){e("setShowBottomNav",t)},async fetchMydash({commit:e}){const t=sessionStorage.getItem("brandDashData");if(t){const a=JSON.parse(t);e("setMydash",a)}try{const t=await s.c.get("/brand/dashboard");"ok"===t.data.status&&(sessionStorage.setItem("brandDashData",JSON.stringify(t.data.data)),e("setMydash",t.data.data))}catch(a){console.error(a)}},fetchParties({commit:e}){s.c.get("brand/parties").then((t=>{"ok"===t.data.status?e("setParties",t.data.data):"error"===t.data.status?alert(t.data.message):alert("Something went wrong! Please try again")})).catch((e=>{console.error("fetchParties:",e)}))},fetchProducts({commit:e}){s.c.get("brand/products").then((t=>{"ok"===t.data.status?e("setProducts",t.data.data):"error"===t.data.status?alert(t.data.message):alert("Something went wrong! Please try again")})).catch((e=>{console.error("fetchProducts:",e)}))},fetchProductDetails({commit:e},t){s.c.get("brand/products/"+t).then((t=>{"ok"===t.data.status?e("setProduct",t.data.data):"error"===t.data.status?alert(t.data.message):alert("Something went wrong! Please try again")})).catch((e=>{console.error("fetchProductDetails:",e)}))},toggleProductStatus({commit:e},t){s.c.put("brand/products/"+t.product,{qtype:t.qtype}).then((t=>{"ok"===t.data.status?e("setProduct",t.data.data):"error"===t.data.status?alert(t.data.message):alert("Something went wrong! Please try again")})).catch((e=>{console.error("toggleProductStatus:",e)}))},fetchProductLedger({commit:e},t){const a=`ledgers/${t.ledger}?page=${t.page}`;s.c.get(a).then((t=>{"ok"===t.data.status?e("setLedger",t.data.data):"error"===t.data.status?alert(t.data.message):alert("Something went wrong! Please try again")})).catch((e=>{console.error("fetchProductLedger:",e)}))},fetchFilteredOrders({commit:e},t){const a=new URLSearchParams({page:t.page,status:t.status,search:t.search}).toString(),r=`orders?${a}`;s.c.get(r).then((t=>{"ok"===t.data.status?e("setFilteredOrders",t.data.data):"error"===t.data.status?alert(t.data.message):alert("Something went wrong! Please try again")})).catch((e=>{console.error("fetchFilteredOrders:",e)}))},orderAction({commit:e},t){s.c.put("orders/"+t.order,t).then((a=>{"ok"===a.data.status?(e("setLedger",a.data.data),n.c.showSweetAlert("Great",`Order is ${t.status} successfully`),c.c.push({name:"BrandDashboard"})):n.c.showSweetError("Oops!","Something went wrong! Please try again")})).catch((e=>{console.error("postNewOrder:",e),n.c.showSweetError("Oops!","Something went wrong! Please try again")}))},postNewOrder({commit:e},t){s.c.post("brand/orders",t).then((t=>{"ok"===t.data.status?(e("setLedger",t.data.data),n.c.showSweetAlert("Great","Order is placed successfully")):n.c.showSweetError("Oops!","Something went wrong! Please try again")})).catch((e=>{console.error("postNewOrder:",e),n.c.showSweetError("Oops!","Something went wrong! Please try again")}))},postNewDemand({commit:e},t){s.c.post("brand/demands",t).then((t=>{"ok"===t.data.status?(e("setLedger",t.data.data),n.c.showSweetAlert("Great","Demand is placed successfully")):n.c.showSweetError("Oops!","Something went wrong! Please try again")})).catch((e=>{console.error("postNewOrder:",e),n.c.showSweetError("Oops!","Something went wrong! Please try again")}))},postNewAdjustment({commit:e},t){s.c.post("adjustments",t).then((t=>{"ok"===t.data.status?(e("setLedger",t.data.data),n.c.showSweetAlert("Great","Adjustment is made successfully")):n.c.showSweetError("Oops!","Something went wrong! Please try again")})).catch((e=>{console.error("postNewOrder:",e),n.c.showSweetError("Oops!","Something went wrong! Please try again")}))},postStockIn({commit:e},t){s.c.post("brand/purchases",t).then((t=>{console.log(t.data),"ok"===t.data.status?(e("setDispatches",t.data.data),n.c.showSweetAlert("Great","Stock in done successfully"),c.c.push({name:"BrandPurchases"})):n.c.showSweetError("Oops!","Something went wrong! Please try again")})).catch((e=>{console.error("postStockIn:",e),n.c.showSweetError("Oops!","Something went wrong! Please try again")}))}}}),h={namespaced:!0,state:{myDash:[],orders:[],products:[],product:[],ledger:[],dispatches:[],showBottomNav:!0},getters:{myDash:e=>e.myDash,orders:e=>e.orders,products:e=>e.products,product:e=>e.product,ledger:e=>e.ledger,dispatches:e=>e.dispatches,showBottomNav:e=>e.showBottomNav},mutations:{setMydash(e,t){e.myDash=t},setOrders(e,t){e.orders=t},setProducts(e,t){e.products=t},setProduct(e,t){e.product=t},setLedger(e,t){e.ledger=t},setDispatches(e,t){e.dispatches=t},setShowBottomNav(e,t){e.showBottomNav=t}},actions:{setShowBottomNav({commit:e},t){e("setShowBottomNav",t)},async fetchMydash({commit:e}){const t=sessionStorage.getItem("factoryDashData");if(t){const a=JSON.parse(t);e("setMydash",a)}try{const t=await s.c.get("/factory/dashboard");"ok"===t.data.status&&(sessionStorage.setItem("factoryDashData",JSON.stringify(t.data.data)),e("setMydash",t.data.data))}catch(a){console.error(a)}},fetchOrders({commit:e}){s.c.get("orders").then((t=>{"ok"===t.data.status?e("setOrders",t.data.data):"error"===t.data.status?alert(t.data.message):alert("Something went wrong! Please try again")})).catch((e=>{console.error("fetchOrders:",e)}))},orderAction({commit:e},t){s.c.put("orders/"+t.order,t).then((a=>{"ok"===a.data.status?(e("setLedger",a.data.data),n.c.showSweetAlert("Great",`Order is ${t.status} successfully`),"accepted"===t.status?c.c.push({name:"FactoryPurchaseOrders"}):c.c.push({name:"FactoryDashboard"})):n.c.showSweetError("Oops!","Something went wrong! Please try again")})).catch((e=>{console.error("postNewOrder:",e),n.c.showSweetError("Oops!","Something went wrong! Please try again")}))},fetchProducts({commit:e}){s.c.get("brand/products").then((t=>{"ok"===t.data.status?e("setProducts",t.data.data):"error"===t.data.status?alert(t.data.message):alert("Something went wrong! Please try again")})).catch((e=>{console.error("fetchProducts:",e)}))},fetchProductDetails({commit:e},t){s.c.get("brand/products/"+t).then((t=>{"ok"===t.data.status?e("setProduct",t.data.data):"error"===t.data.status?alert(t.data.message):alert("Something went wrong! Please try again")})).catch((e=>{console.error("fetchProductDetails:",e)}))},toggleProductStatus({commit:e},t){s.c.put("brand/products/"+t.product,{qtype:t.qtype}).then((t=>{"ok"===t.data.status?e("setProduct",t.data.data):"error"===t.data.status?alert(t.data.message):alert("Something went wrong! Please try again")})).catch((e=>{console.error("toggleProductStatus:",e)}))},fetchProductLedger({commit:e},t){const a=`ledgers/${t.ledger}?page=${t.page||1}`;s.c.get(a).then((t=>{"ok"===t.data.status?e("setLedger",t.data.data):"error"===t.data.status?alert(t.data.message):alert("Something went wrong! Please try again")})).catch((e=>{console.error("fetchProductLedger:",e)}))},postNewReady({commit:e},t){s.c.post("factory/readies",t).then((t=>{"ok"===t.data.status?(e("setLedger",t.data.data),n.c.showSweetAlert("Great","Ready is added successfully")):"error"===t.data.status?n.c.showSweetError("Oops!",t.data.message):n.c.showSweetError("Oops!","Something went wrong! Please try again")})).catch((e=>{console.error("postNewReady:",e),n.c.showSweetError("Oops!","Something went wrong! Please try again")}))},postNewDispatch({commit:e},t){s.c.post("party/dispatches",t).then((t=>{"ok"===t.data.status?(e("setLedger",t.data.data),n.c.showSweetAlert("Great","Dispatched successfully")):"error"===t.data.status?n.c.showSweetError("Oops!",t.data.message):n.c.showSweetError("Oops!","Something went wrong! Please try again")})).catch((e=>{console.error("postNewReady:",e),n.c.showSweetError("Oops!","Something went wrong! Please try again")}))},postNewAdjustment({commit:e},t){s.c.post("adjustments",t).then((t=>{"ok"===t.data.status?(e("setLedger",t.data.data),n.c.showSweetAlert("Great","Adjustment made successfully")):"error"===t.data.status?n.c.showSweetError("Oops!",t.data.message):n.c.showSweetError("Oops!","Something went wrong! Please try again")})).catch((e=>{console.error("postNewReady:",e),n.c.showSweetError("Oops!","Something went wrong! Please try again")}))}}},m={namespaced:!0,state:{myDash:[],orders:[],products:[],product:[],ledger:[],dispatches:[],bills:[]},getters:{myDash:e=>e.myDash,orders:e=>e.orders,products:e=>e.products,product:e=>e.product,ledger:e=>e.ledger,dispatches:e=>e.dispatches,bills:e=>e.bills},mutations:{setMydash(e,t){e.myDash=t},setOrders(e,t){e.orders=t},setProducts(e,t){e.products=t},setProduct(e,t){e.product=t},setLedger(e,t){e.ledger=t},setDispatches(e,t){e.dispatches=t},setBills(e,t){e.bills=t}},actions:{async fetchMydash({commit:e}){try{const t=await s.c.get("/vendor/dashboard");"ok"===t.data.status&&e("setMydash",t.data.data)}catch(t){console.error(t)}},fetchOrders({commit:e}){s.c.get("orders").then((t=>{"ok"===t.data.status?e("setOrders",t.data.data):"error"===t.data.status?alert(t.data.message):alert("Something went wrong! Please try again")})).catch((e=>{console.error("fetchOrders:",e)}))},orderAction({commit:e},t){s.c.put("orders/"+t.order,t).then((a=>{"ok"===a.data.status?(e("setLedger",a.data.data),n.c.showSweetAlert("Great",`Order is ${t.status} successfully`),c.c.push({name:"VendorDashboard"})):n.c.showSweetError("Oops!","Something went wrong! Please try again")})).catch((e=>{console.error("postNewOrder:",e),n.c.showSweetError("Oops!","Something went wrong! Please try again")}))},fetchProducts({commit:e}){s.c.get("brand/products").then((t=>{"ok"===t.data.status?e("setProducts",t.data.data):"error"===t.data.status?alert(t.data.message):alert("Something went wrong! Please try again")})).catch((e=>{console.error("fetchProducts:",e)}))},fetchProductDetails({commit:e},t){s.c.get("brand/products/"+t).then((t=>{"ok"===t.data.status?e("setProduct",t.data.data):"error"===t.data.status?alert(t.data.message):alert("Something went wrong! Please try again")})).catch((e=>{console.error("fetchProductDetails:",e)}))},toggleProductStatus({commit:e},t){s.c.put("brand/products/"+t.product,{qtype:t.qtype}).then((t=>{"ok"===t.data.status?e("setProduct",t.data.data):"error"===t.data.status?alert(t.data.message):alert("Something went wrong! Please try again")})).catch((e=>{console.error("toggleProductStatus:",e)}))},fetchProductLedger({commit:e},t){const a=`vendor/ledgers/${t.ledger}?page=${t.page||1}`;s.c.get(a).then((t=>{"ok"===t.data.status?e("setLedger",t.data.data):"error"===t.data.status?alert(t.data.message):alert("Something went wrong! Please try again")})).catch((e=>{console.error("fetchProductLedger:",e)}))},postNewReady({commit:e},t){s.c.post("factory/readies",t).then((t=>{"ok"===t.data.status?e("setLedger",t.data.data):"error"===t.data.status?alert(t.data.message):alert("Something went wrong! Please try again")})).catch((e=>{console.error("postNewOrder:",e)}))},postNewDispatch({commit:e},t){s.c.post("party/dispatches",t).then((t=>{"ok"===t.data.status?e("setLedger",t.data.data):"error"===t.data.status?alert(t.data.message):alert("Something went wrong! Please try again")})).catch((e=>{console.error("postNewOrder:",e)}))}}};const u=(0,r.eC)({state:{ebag:{errors:{},status:null,statusText:null},toast:{},loading:!1,helpline:8860012001,ledgerChats:[]},mutations:{setErrorsBag(e,t){e.ebag=t},setLoading(e,t){e.loading=t},setToast(e,t){e.toast=t},setLedgerChats(e,t){e.ledgerChats=t}},actions:{setErrorsBag({commit:e},t){e("setErrorsBag",t)},resetErrorsBag({commit:e}){e("setErrorsBag",{errors:{},status:null,statusText:null})},setLoading({commit:e},t){e("setLoading",t)},startLoading({commit:e}){e("setLoading",!0)},stopLoading({commit:e}){e("setLoading",!1)},setToast({commit:e},t){e("setToast",t)},fetchLedgerChats({commit:e},t){return e("setLoading",!0),new Promise(((a,r)=>{s.c.get(`/chats/${t.ledgerId}?page=${t.page}`).then((t=>{e("setLedgerChats",t.data.data),e("setLoading",!1),a(t.data)})).catch((t=>{e("setLoading",!1),r(t)}))}))}},getters:{ebag:e=>e.ebag,toast:e=>e.toast,loading:e=>e.loading,errors:e=>e.ebag.errors,getCollections(e){return e.collections},getCatagories(e){return e.catagories},getBrands(e){return e.brands},getCategories(e){return e.categories},getReviews(e){return e.reviews},getLedgerChats(e){return e.ledgerChats}},modules:{repo:o,noti:i,authy:d,brandy:l,factory:h,vendor:m}});var g=u},6780:function(e,t,a){e.exports=a.p+"img/brand.6a14a56c.png"},656:function(e,t,a){e.exports=a.p+"img/logo.ea68f244.png"}},t={};function a(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r].call(s.exports,s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,r,o,s){if(!r){var n=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],s=e[l][2];for(var i=!0,c=0;c<r.length;c++)(!1&s||n>=s)&&Object.keys(a.O).every((function(e){return a.O[e](r[c])}))?r.splice(c--,1):(i=!1,s<n&&(n=s));if(i){e.splice(l--,1);var d=o();void 0!==d&&(t=d)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[r,o,s]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,r){return a.f[r](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+e+"."+{4:"c8ee6b7f",44:"e1169a9e",60:"97647ba1",64:"144c6baf",68:"951878ab",72:"588b1d48",80:"0b65327c",88:"730e0e45",92:"d1fb592d",100:"772d3521",104:"62f782f5",120:"e952d63e",172:"e393242a",228:"2b81314e",240:"4a77535d",260:"2f9f9d17",272:"f244ca4b",296:"3a2e855c",312:"929cda2e",336:"7ca18adf",364:"8820d62e",374:"648bce60",412:"1f22fddf",416:"bb20e69e",472:"dafe480b",552:"1a093db2",554:"863f9b81",564:"ff358b14",576:"94289728",584:"2f9708ae",600:"4435b71b",618:"b1b29da4",620:"d5647933",636:"9ad0f864",680:"3220dfb0",708:"062f0181",724:"a93d71d5",728:"b12d7d14",730:"c81eaa34",736:"14da9546",740:"f9d1010e",744:"1f3f1f89",796:"bdce9ea7",800:"06cfd0d5",808:"0f68737d",880:"7d439dd0",884:"7290695b",960:"e620c743"}[e]+".js"}}(),function(){a.miniCssF=function(e){return"css/"+e+"."+{60:"4ad4080d",92:"4300aa6a",172:"f6e8b4a7",228:"51bf1e5e",296:"eda0af44",364:"16abe4e9",412:"16abe4e9",472:"eda0af44",564:"16abe4e9",600:"35fba4c4",620:"4300aa6a",680:"d7dba4df",708:"4300aa6a",736:"8e168e63",880:"eda0af44"}[e]+".css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="wsgbrand-app-v1:";a.l=function(r,o,s,n){if(e[r])e[r].push(o);else{var i,c;if(void 0!==s)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var h=d[l];if(h.getAttribute("src")==r||h.getAttribute("data-webpack")==t+s){i=h;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",t+s),i.src=r),e[r]=[o];var m=function(t,a){i.onerror=i.onload=null,clearTimeout(u);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(a)})),t)return t(a)},u=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,a,r,o){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var n=function(a){if(s.onerror=s.onload=null,"load"===a.type)r();else{var n=a&&a.type,i=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+": "+i+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=n,c.request=i,s.parentNode&&s.parentNode.removeChild(s),o(c)}};return s.onerror=s.onload=n,s.href=t,a?a.parentNode.insertBefore(s,a.nextSibling):document.head.appendChild(s),s},t=function(e,t){for(var a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var o=a[r],s=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(s===e||s===t))return o}var n=document.getElementsByTagName("style");for(r=0;r<n.length;r++){o=n[r],s=o.getAttribute("data-href");if(s===e||s===t)return o}},r=function(r){return new Promise((function(o,s){var n=a.miniCssF(r),i=a.p+n;if(t(n,i))return o();e(r,i,null,o,s)}))},o={524:0};a.f.miniCss=function(e,t){var a={60:1,92:1,172:1,228:1,296:1,364:1,412:1,472:1,564:1,600:1,620:1,680:1,708:1,736:1,880:1};o[e]?t.push(o[e]):0!==o[e]&&a[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={524:0};a.f.j=function(t,r){var o=a.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var s=new Promise((function(a,r){o=e[t]=[a,r]}));r.push(o[2]=s);var n=a.p+a.u(t),i=new Error,c=function(r){if(a.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var s=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",i.name="ChunkLoadError",i.type=s,i.request=n,o[1](i)}};a.l(n,c,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,s,n=r[0],i=r[1],c=r[2],d=0;if(n.some((function(t){return 0!==e[t]}))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(c)var l=c(a)}for(t&&t(r);d<n.length;d++)s=n[d],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(l)},r=self["webpackChunkwsgbrand_app_v1"]=self["webpackChunkwsgbrand_app_v1"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[999],(function(){return a(5240)}));r=a.O(r)})();
//# sourceMappingURL=app.5c5d7de3.js.map