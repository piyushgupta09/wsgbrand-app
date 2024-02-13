"use strict";(self["webpackChunkwsgbrand_app_v1"]=self["webpackChunkwsgbrand_app_v1"]||[]).push([[4080],{9176:function(e,a,t){t.d(a,{c:function(){return f}});var s=t(4108),l=t(9096);const r={class:"list-group list-group-flush border-bottom py-5"},c={class:"list-group-item d-flex flex-column align-items-center"},i=(0,s.QD)("div",{class:"d-flex justify-content-center align-items-center rounded-circle border bg-light",style:{height:"60px",width:"60px"}},[(0,s.QD)("i",{class:"bi bi-funnel text-secondary fs-1",style:{opacity:"60%"}})],-1),n={class:"d-flex flex-fill flex-column px-3 mt-3"},o={class:"fw-bold font-title mb-0"};function d(e,a,t,d,u,h){return(0,s.Wz)(),(0,s.An)("div",r,[(0,s.QD)("div",c,[i,(0,s.QD)("div",n,[(0,s.QD)("p",o,(0,l.WA)(t.title),1)])])])}var u={name:"EmptyList",props:["title"]},h=t(4100);const p=(0,h.c)(u,[["render",d]]);var f=p},736:function(e,a,t){t.d(a,{c:function(){return Q}});var s=t(4108),l=t(9096);const r={key:0,class:"card rounded-0 mb-2"},c={class:"d-flex border-bottom"},i=["src","data-bs-url"],n={class:"flex-fill d-flex flex-column justify-content-between"},o={class:"p-2"},d={class:"d-flex justify-content-between"},u={class:"fw-bold"},h={class:"fw-bold"},p={class:"d-flex justify-content-between"},f={class:""},b={class:""},m=["data-bs-purchasedocId"];function g(e,a,t,g,v,y){return t.purchase&&t.purchase.groups&&Object.entries(t.purchase.groups).length?((0,s.Wz)(),(0,s.An)("div",r,[(0,s.QD)("div",c,[t.purchase.party?((0,s.Wz)(),(0,s.An)("img",{key:0,src:t.purchase.party.image,class:"of-cover w-80p","data-bs-toggle":"modal","data-bs-target":"#imagePreviewModal","data-bs-url":t.purchase.party.preview},null,8,i)):(0,s.g1)("",!0),(0,s.QD)("div",n,[(0,s.QD)("div",o,[(0,s.QD)("div",d,[(0,s.QD)("span",u,"#"+(0,l.WA)(t.purchase.doc_id),1),(0,s.QD)("span",h,(0,l.WA)(t.purchase.quantity.toLocaleString())+" pcs.",1)]),(0,s.QD)("div",p,[(0,s.QD)("span",f,(0,l.WA)(t.purchase.doc_date),1),(0,s.QD)("span",b,"Rs. "+(0,l.WA)(t.purchase.total.toLocaleString()),1)]),(0,s.QD)("button",{class:"btn btn-sm btn-outline-dark w-100 mt-2","data-bs-toggle":"offcanvas","data-bs-target":"#purchaseInfoModal","data-bs-purchasedocId":t.purchase.doc_id,"aria-controls":"purchaseInfoModal"}," Show Products ",8,m)])])])])):(0,s.g1)("",!0)}var v={name:"PurchaseCard",props:["purchase"]},y=t(4100);const D=(0,y.c)(v,[["render",g]]);var Q=D},9312:function(e,a,t){t.d(a,{c:function(){return E}});var s=t(4108),l=t(9096);const r={key:0,class:"offcanvas offcanvas-end",tabindex:"-1",id:"purchaseInfoModal","aria-labelledby":"purchaseInfoModalLabel"},c={class:"offcanvas-header d-flex justify-content-between align-items-center bg-light border-bottom"},i={class:"d-flex flex-fill justify-content-start gap-2 align-items-center"},n=(0,s.QD)("i",{class:"bi bi-chevron-left pe-2","data-bs-dismiss":"offcanvas","data-bs-target":"#purchaseInfoModal","aria-label":"Close"},null,-1),o={key:0,class:"text-capitalize fw-500",id:"purchaseInfoModal"},d={class:"fw-500"},u={class:"offcanvas-body p-2"},h={class:"card-header p-0 d-flex justify-content-between overflow-hidden"},p={class:"d-flex align-items-center w-100"},f=["src","data-bs-url"],b=["href"],m={class:"fw-500"},g={class:"small"},v={class:"me-2 d-flex flex-column align-items-end"},y={class:"fw-500"},D={class:"small"},Q=["id"],x={class:"table table-sm table-striped table-borderless mb-0"},P=(0,s.QD)("thead",null,[(0,s.QD)("tr",null,[(0,s.QD)("th",{scope:"col",class:"ps-2 small"},"Color"),(0,s.QD)("th",{scope:"col",class:"small"},"Size"),(0,s.QD)("th",{scope:"col",class:"small text-end"},"Qty"),(0,s.QD)("th",{scope:"col",class:"small text-end"},"Rate"),(0,s.QD)("th",{scope:"col",class:"small text-end pe-2"},"Amt")])],-1),A={class:"ps-2 small"},w={class:"small"},W={class:"small text-end"},F={class:"small text-end"},z={class:"small text-end pe-2"};function S(e,a,t,S,k,C){return k.activePurchase?((0,s.Wz)(),(0,s.An)("div",r,[(0,s.QD)("div",c,[(0,s.QD)("div",i,[n,k.activePurchase.party&&k.activePurchase.party.name?((0,s.Wz)(),(0,s.An)("span",o,(0,l.WA)(k.activePurchase.party.name),1)):(0,s.g1)("",!0)]),(0,s.QD)("span",d,"₹ "+(0,l.WA)(k.activePurchase.total),1)]),(0,s.QD)("div",u,[((0,s.Wz)(!0),(0,s.An)(s.ae,null,(0,s.mi)(k.activePurchase.groups,((e,a)=>((0,s.Wz)(),(0,s.An)("div",{class:"card mb-2",key:a},[(0,s.QD)("div",h,[(0,s.QD)("div",p,[(0,s.QD)("img",{src:e.image,class:"of-cover h-60p br-tl p-2","data-bs-toggle":"modal","data-bs-target":"#ledgerImageModal","data-bs-url":e.preview},null,8,f),(0,s.QD)("div",{class:"flex-fill d-flex flex-column","data-bs-toggle":"collapse",href:"#collapsePurchase"+k.activePurchase.doc_id+"-"+a,role:"button","aria-expanded":"false","aria-controls":"collapseExample"},[(0,s.QD)("span",m,"#"+(0,l.WA)(e.product_code),1),(0,s.QD)("span",g,(0,l.WA)(e.product_name),1)],8,b),(0,s.QD)("div",v,[(0,s.QD)("span",y,(0,l.WA)(e.quantity)+" pcs",1),(0,s.QD)("span",D,"₹ "+(0,l.WA)(e.amount),1)])])]),(0,s.QD)("div",{class:"collapse",id:"collapsePurchase"+k.activePurchase.doc_id+"-"+a},[(0,s.QD)("table",x,[P,(0,s.QD)("tbody",null,[((0,s.Wz)(!0),(0,s.An)(s.ae,null,(0,s.mi)(e.items,((e,a)=>((0,s.Wz)(),(0,s.An)("tr",{key:a},[(0,s.QD)("td",A,(0,l.WA)(e.option),1),(0,s.QD)("td",w,(0,l.WA)(e.range),1),(0,s.QD)("td",W,(0,l.WA)(e.billed_quantity),1),(0,s.QD)("td",F,(0,l.WA)(e.rate),1),(0,s.QD)("td",z,(0,l.WA)(e.amount),1)])))),128))])])],8,Q)])))),128))])])):(0,s.g1)("",!0)}var k={name:"PurchaseCardDetail",props:["purchases"],data(){return{activePurchase:{}}},async mounted(){this.loadActivePurchase()},methods:{loadActivePurchase(){const e=document.getElementById("purchaseInfoModal");e&&e.addEventListener("show.bs.offcanvas",(e=>{const a=e.relatedTarget,t=a.getAttribute("data-bs-purchasedocId");console.log("testtest"+this.activePurchase),this.activePurchase=this.purchases.find((e=>e.doc_id===t))}))}}},C=t(4100);const _=(0,C.c)(k,[["render",S]]);var E=_},1699:function(e,a,t){t.r(a),t.d(a,{default:function(){return k}});var s=t(4108),l=t(7764);const r={class:"font-title"},c={key:0,class:"list-group list-group-flush"};function i(e,a,t,i,n,o){const d=(0,s.E1)("PurchaseFilter"),u=(0,s.E1)("PurchaseCard"),h=(0,s.E1)("PurchaseCardDetail"),p=(0,s.E1)("EmptyList");return(0,s.Wz)(),(0,s.An)("div",r,[(0,s.K2)(d,{title:n.title,parties:o.parties,filters:n.filters,onPurchaseFilterUpdated:o.handleFiltersChange},null,8,["title","parties","filters","onPurchaseFilterUpdated"]),Object.keys(o.filteredPurchases).length?((0,s.Wz)(),(0,s.An)("ul",c,[((0,s.Wz)(!0),(0,s.An)(s.ae,null,(0,s.mi)(o.filteredPurchases,((e,a)=>((0,s.Wz)(),(0,s.An)("li",{class:"list-group-item p-0",key:a},[(0,s.K2)(l.Ox,{name:"slide",mode:"out-in"},{default:(0,s.Ql)((()=>[(0,s.K2)(u,{purchase:e},null,8,["purchase"])])),_:2},1024)])))),128)),(0,s.K2)(h,{purchases:o.filteredPurchases},null,8,["purchases"])])):((0,s.Wz)(),(0,s.Az)(p,{key:1,title:"No Purchase Available"}))])}t(3248);var n=t(6376),o=t(9176),d=t(736),u=t(9096);const h={class:"border-bottom bg-body-tertiary"},p={class:"navbar navbar-expand py-1"},f={class:"navbar-collapse d-flex align-items-center"},b={class:"d-flex align-items-center"},m=(0,s.QD)("i",{class:"bi bi-chevron-left"},null,-1),g={class:"mb-0 ms-2"},v=(0,s.IL)('<ul class="navbar-nav ms-auto align-items-center"><li class="nav-item"><button class="btn fs-5 border-0" data-bs-toggle="collapse" data-bs-target="#offcanvasSearch" aria-expanded="false" aria-controls="offcanvasSearch"><i class="bi bi-search"></i></button></li><li class="nav-item"><button class="btn fs-5 border-0" data-bs-toggle="collapse" data-bs-target="#offcanvasFilter" aria-expanded="false" aria-controls="offcanvasFilter"><i class="bi bi-funnel"></i></button></li><li class="nav-item"><button class="btn fs-5 border-0" data-bs-toggle="collapse" data-bs-target="#offcanvasSortBy" aria-expanded="false" aria-controls="offcanvasSortBy"><i class="bi bi-sort-up-alt"></i></button></li></ul>',1),y={class:"collapse",id:"offcanvasSearch"},D={class:"form-floating mx-2 mb-2"},Q=(0,s.QD)("label",{for:"floatingInput"},"Search by name or code",-1);function x(e,a,t,r,c,i){const n=(0,s.E1)("router-link");return(0,s.Wz)(),(0,s.An)("div",h,[(0,s.QD)("nav",p,[(0,s.QD)("div",f,[(0,s.QD)("div",b,[(0,s.K2)(n,{class:"btn",to:{name:i.myDashboard}},{default:(0,s.Ql)((()=>[m])),_:1},8,["to"]),(0,s.QD)("h6",g,(0,u.WA)(t.title),1)]),v])]),(0,s.QD)("div",y,[(0,s.QD)("div",D,[(0,s.wt)((0,s.QD)("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>c.search=e),type:"search",class:"form-control rounded-0",placeholder:"Search Stocks",onChange:a[1]||(a[1]=(...e)=>i.emitFilters&&i.emitFilters(...e))},null,544),[[l.Og,c.search,void 0,{lazy:!0}]]),Q])])])}var P={name:"PurchaseFilters",emits:["purchase-filter-updated"],props:{title:{type:String,default:"Purchases"},filters:{type:Object,default:()=>({})},parties:{type:Array,default:()=>[]}},data(){return{search:this.filters.search||""}},methods:{applyFilters(){this.$emit("purchase-filter-updated",{search:this.search})},resetFilters(){this.search=""},emitFilters(){this.applyFilters()},capitalizeFirstLetter(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}},computed:{isBrand(){return"brand"===this.$store.getters["authy/getPrefix"]},myDashboard(){const e=this.capitalizeFirstLetter(this.$store.getters["authy/getPrefix"]);return`${e}Dashboard`}}},A=t(4100);const w=(0,A.c)(P,[["render",x]]);var W=w,F=t(9312),z={name:"PurchasePage",components:{EmptyList:o.c,PurchaseCard:d.c,PurchaseFilter:W,PurchaseCardDetail:F.c},data(){return{title:"Purchases",page:1,isFetching:!1,purchases:[],filters:{search:"",selectedParty:""}}},mounted(){this.loadMore(),window.addEventListener("scroll",this.handleScroll),this.title="brand"===this.$store.getters["authy/getPrefix"]?"Purchases":"Sales"},unmounted(){window.removeEventListener("scroll",this.handleScroll)},computed:{parties(){const e=this.purchases,a={},t=[];return e&&e.forEach((e=>{const s=e.party_sid;a[s]||(t.push(e.party),a[s]=!0)})),t},filteredPurchases(){let e=this.purchases;if(this.filters.search){const a=this.filters.search.toLowerCase();e=e.filter((e=>{const t=e.tags.split(",");return t.some((e=>e.toLowerCase().includes(a.trim())))}))}return e}},methods:{handleScroll(){const{scrollTop:e,scrollHeight:a,clientHeight:t}=document.documentElement;t+e>=a-5&&this.loadMore()},loadMore(){this.isFetching||(this.isFetching=!0,n.c.get(`purchases?page=${this.page}`).then((e=>{"ok"===e.data.status?(this.purchases=[...this.purchases,...e.data.data.data],this.page++,this.isFetching=!1):"error"===e.data.status?(this.isFetching=!1,alert(e.data.message)):(this.isFetching=!1,alert("Something went wrong! Please try again"))})).catch((e=>{this.isFetching=!1,console.log(e),alert("Something went wrong! Please try again")})))},handleFiltersChange(e){this.filters=e}}};const S=(0,A.c)(z,[["render",i]]);var k=S}}]);
//# sourceMappingURL=4080.5c5ef4d8.js.map