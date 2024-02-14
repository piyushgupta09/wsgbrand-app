"use strict";(self["webpackChunkwsgbrand_app_v1"]=self["webpackChunkwsgbrand_app_v1"]||[]).push([[260],{9176:function(e,t,s){s.d(t,{c:function(){return f}});var a=s(4108),l=s(9096);const r={class:"list-group list-group-flush border-bottom py-5"},c={class:"list-group-item d-flex flex-column align-items-center"},i=(0,a.QD)("div",{class:"d-flex justify-content-center align-items-center rounded-circle border bg-light",style:{height:"60px",width:"60px"}},[(0,a.QD)("i",{class:"bi bi-funnel text-secondary fs-1",style:{opacity:"60%"}})],-1),n={class:"d-flex flex-fill flex-column px-3 mt-3"},o={class:"fw-bold font-title mb-0"};function d(e,t,s,d,u,h){return(0,a.Wz)(),(0,a.An)("div",r,[(0,a.QD)("div",c,[i,(0,a.QD)("div",n,[(0,a.QD)("p",o,(0,l.WA)(s.title),1)])])])}var u={name:"EmptyList",props:["title"]},h=s(4100);const p=(0,h.c)(u,[["render",d]]);var f=p},60:function(e,t,s){s.d(t,{c:function(){return R}});var a=s(4108),l=s(9096),r=s(7764);const c={class:"border-bottom bg-body-tertiary"},i={class:"navbar navbar-expand py-1"},n={class:"navbar-collapse d-flex align-items-center me-3"},o={class:"d-flex align-items-center"},d=(0,a.QD)("i",{class:"bi bi-chevron-left"},null,-1),u={class:"mb-0"},h={class:"navbar-nav ms-auto align-items-center"},p=(0,a.QD)("li",{class:"nav-item"},[(0,a.QD)("button",{class:"btn fs-5 border-0","data-bs-toggle":"collapse","data-bs-target":"#offcanvasSearch","aria-expanded":"false","aria-controls":"offcanvasSearch"},[(0,a.QD)("i",{class:"bi bi-search"})])],-1),f={key:0,class:"nav-item"},b=(0,a.QD)("button",{class:"btn fs-5 border-0","data-bs-toggle":"collapse","data-bs-target":"#offcanvasFilter","aria-expanded":"false","aria-controls":"offcanvasFilter"},[(0,a.QD)("i",{class:"bi bi-funnel"})],-1),m=[b],g={key:1,class:"nav-item"},y=(0,a.QD)("button",{class:"btn fs-5 border-0","data-bs-toggle":"collapse","data-bs-target":"#offcanvasSortBy","aria-expanded":"false","aria-controls":"offcanvasSortBy"},[(0,a.QD)("i",{class:"bi bi-sort-up-alt"})],-1),v=[y],D={class:"nav-item"},Q={class:"collapse",id:"offcanvasSearch"},x={class:"form-floating mx-2 mb-2"},A=(0,a.QD)("label",{for:"floatingInput"},"Search by name or code",-1),P={class:"collapse",id:"offcanvasFilter"},k={class:"card card-body"},w=(0,a.QD)("option",{value:"",selected:"",disabled:""},"Filter By Fabricator",-1),W=["value"],S={key:1,class:"mb-2 fw-bold"},F={key:2,class:"d-flex flex-wrap w-100 border border-end-0 border-bottom-0"},z=["id","value","checked","onChange"],B=["for"],C=(0,a.QD)("br",null,null,-1),I={class:"btn-group w-100 mt-4"},_={class:"collapse",id:"offcanvasSortBy"},E={key:0,class:"card card-body"},L=(0,a.QD)("p",{class:"mb-2 fw-bold"},"Sort by",-1),O={class:"d-flex flex-wrap border border-end-0"},M=["id","checked","onChange"],$=["for"],j=(0,a.QD)("br",null,null,-1);function q(e,t,s,b,y,q){const K=(0,a.E1)("router-link");return(0,a.Wz)(),(0,a.An)("div",c,[(0,a.QD)("nav",i,[(0,a.QD)("div",n,[(0,a.QD)("div",o,[(0,a.K2)(K,{class:"btn",to:{name:q.myDashboard}},{default:(0,a.Ql)((()=>[d])),_:1},8,["to"]),(0,a.QD)("h6",u,(0,l.WA)(s.title),1)]),(0,a.QD)("ul",h,[p,s.statuses&&s.statuses.length?((0,a.Wz)(),(0,a.An)("li",f,m)):(0,a.g1)("",!0),s.filters&&s.filters.sortBys&&s.filters.sortBys.length?((0,a.Wz)(),(0,a.An)("li",g,v)):(0,a.g1)("",!0),(0,a.QD)("li",D,[(0,a.QD)("button",{class:"btn btn-outline-dark rounded-0 btn-sm px-1 py-0 ms-2",onClick:t[0]||(t[0]=(...e)=>q.updatePerPage&&q.updatePerPage(...e))},(0,l.WA)(y.perPage),1)])])])]),(0,a.QD)("div",Q,[(0,a.QD)("div",x,[(0,a.wt)((0,a.QD)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>y.search=e),type:"search",class:"form-control rounded-0",placeholder:"Search Stocks",onChange:t[2]||(t[2]=(...e)=>q.emitFilters&&q.emitFilters(...e))},null,544),[[r.Og,y.search,void 0,{lazy:!0}]]),A])]),(0,a.QD)("div",P,[(0,a.QD)("div",k,[q.isBrand?(0,a.wt)(((0,a.Wz)(),(0,a.An)("select",{key:0,"onUpdate:modelValue":t[3]||(t[3]=e=>y.selectedParty=e),onChange:t[4]||(t[4]=(...e)=>q.applyFilters&&q.applyFilters(...e)),class:"form-select py-3 mb-3","aria-label":"Filter By Party"},[w,((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(s.parties,((e,t)=>((0,a.Wz)(),(0,a.An)("option",{key:t,value:e.sid},(0,l.WA)(e.name),9,W)))),128))],544)),[[r.Ip,y.selectedParty]]):(0,a.g1)("",!0),s.statuses&&s.statuses.length?((0,a.Wz)(),(0,a.An)("p",S,"Filter by status")):(0,a.g1)("",!0),s.statuses&&s.statuses.length?((0,a.Wz)(),(0,a.An)("div",F,[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(s.statuses,((e,t)=>((0,a.Wz)(),(0,a.An)("div",{class:"flex-fill border-end border-bottom",key:t},[(0,a.QD)("input",{type:"checkbox",class:"btn-check",id:"filterby"+q.getCheckboxId(t),autocomplete:"off",value:e.value,checked:e.value===y.selectedStatus,onChange:t=>q.updateSelectedStatus(e.value)},null,40,z),(0,a.QD)("label",{class:"btn btn-outline-dark rounded-0 border-0 w-100",for:"filterby"+q.getCheckboxId(t)},(0,l.WA)(e.text),9,B),C])))),128))])):(0,a.g1)("",!0),(0,a.QD)("div",I,[(0,a.QD)("button",{onClick:t[5]||(t[5]=(...e)=>q.resetFilters&&q.resetFilters(...e)),class:"btn btn-outline-dark"},"Reset")])])]),(0,a.QD)("div",_,[y.localSortBys&&y.localSortBys.length?((0,a.Wz)(),(0,a.An)("div",E,[L,(0,a.QD)("div",O,[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(y.localSortBys,((e,t)=>((0,a.Wz)(),(0,a.An)("div",{class:"flex-fill border-end",key:t},[(0,a.QD)("input",{type:"checkbox",class:"btn-check",id:"sortby"+q.getCheckboxId(t),autocomplete:"off",checked:e.selected,onChange:e=>q.updateSelectedSortBy(t)},null,40,M),(0,a.QD)("label",{class:"btn btn-outline-dark rounded-0 border-0 w-100",for:"sortby"+q.getCheckboxId(t)},(0,l.WA)((e.selected,e.name)),9,$),j])))),128))])])):(0,a.g1)("",!0)])])}var K={name:"OrderFilters",emits:["order-filter-updated"],props:{title:{type:String,default:"Products"},filters:{type:Object,default:()=>({})},parties:{type:Array,default:()=>[]},statuses:{type:Array,default:()=>[]}},data(){return{perPage:this.filters.perPage||10,search:this.filters.search||"",localSortBys:this.filters.sortBys?[...this.filters.sortBys]:[],selectedParty:this.filters.selectedParty||"",selectedStatus:this.filters.selectedStatus||""}},methods:{updatePerPage(){this.perPage>90?this.perPage=10:this.perPage+=10,this.applyFilters()},applyFilters(){this.$emit("order-filter-updated",{perPage:this.perPage,search:this.search,sortBys:this.localSortBys,selectedParty:this.selectedParty,selectedStatus:this.selectedStatus})},resetFilters(){this.perPage=10,this.search="",this.localSortBys=[...this.filters.sortBys],this.selectedParty="",this.selectedStatus="",this.applyFilters()},emitFilters(){this.applyFilters()},getCheckboxId(e){return`btn-check-outlined-${e}`},updateSelectedStatus(e){this.selectedStatus=this.selectedStatus===e?"":e,this.applyFilters()},updateSelectedSortBy(e){this.localSortBys=this.localSortBys.map(((t,s)=>(t.selected=s===e,t))),this.applyFilters()},capitalizeFirstLetter(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}},computed:{isBrand(){return"brand"===this.$store.getters["authy/getPrefix"]},myDashboard(){const e=this.capitalizeFirstLetter(this.$store.getters["authy/getPrefix"]);return`${e}Dashboard`}}},U=s(4100);const T=(0,U.c)(K,[["render",q]]);var R=T},4062:function(e,t,s){s.d(t,{c:function(){return d}});var a=s(4108),l=s(9096);const r={class:"nav nav-pills nav-fill border-bottom"};function c(e,t,s,c,i,n){const o=(0,a.E1)("router-link");return(0,a.Wz)(),(0,a.An)("ul",r,[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(s.links,(e=>((0,a.Wz)(),(0,a.An)("li",{class:"nav-item",key:e.name},[(0,a.K2)(o,{to:{name:e.name},class:(0,l.WN)(["nav-link rounded-0 fw-500 ls-1 small text-bg-light",[n.isLinkActive(e.name)?n.getAppColor:""]])},{default:(0,a.Ql)((()=>[(0,a.mY)((0,l.WA)(e.label),1)])),_:2},1032,["to","class"])])))),128))])}var i={name:"OrderTabs",props:{links:{type:Array,required:!0}},methods:{isLinkActive(e){return this.$route.name===e}},computed:{prefix(){return this.$store.getters["authy/getPrefix"]},getAppColor(){switch(this.prefix){case"factory":return"active-link-factory text-white";case"vendor":return"active-link-vendor text-white";case"brand":return"active-link-brand text-white";default:return"text-bg-dark"}}}},n=s(4100);const o=(0,n.c)(i,[["render",c]]);var d=o},2260:function(e,t,s){s.d(t,{c:function(){return ce}});var a=s(4108),l=s(7764);const r={class:"font-title"},c={key:0,class:"list-group list-group-flush"};function i(e,t,s,i,n,o){const d=(0,a.E1)("OrderFilters"),u=(0,a.E1)("OrderTabs"),h=(0,a.E1)("PurchaseCard"),p=(0,a.E1)("PurchaseCardDetail"),f=(0,a.E1)("EmptyList");return(0,a.Wz)(),(0,a.An)("div",r,[(0,a.K2)(d,{title:n.title,filters:n.filters,parties:o.parties,onOrderFilterUpdated:o.handleFiltersChange},null,8,["title","filters","parties","onOrderFilterUpdated"]),(0,a.K2)(u,{links:s.links},null,8,["links"]),Object.keys(o.filteredPurchases).length?((0,a.Wz)(),(0,a.An)("ul",c,[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(o.filteredPurchases,((e,t)=>((0,a.Wz)(),(0,a.An)("li",{class:"list-group-item p-0",key:t},[(0,a.K2)(l.Ox,{name:"slide",mode:"out-in"},{default:(0,a.Ql)((()=>[(0,a.K2)(h,{purchase:e},null,8,["purchase"])])),_:2},1024)])))),128)),(0,a.K2)(p,{purchases:o.filteredPurchases},null,8,["purchases"])])):((0,a.Wz)(),(0,a.Az)(f,{key:1,title:"No Purchase Available"}))])}s(3248),s(2168),s(5104),s(8312);var n=s(6376),o=s(9176),d=s(4062),u=s(9096);const h={key:0,class:"card rounded-0 mb-2"},p={class:"d-flex border-bottom"},f=["src","data-bs-url"],b={class:"flex-fill d-flex flex-column justify-content-between"},m={class:"p-2"},g={class:"d-flex justify-content-between"},y={class:"fw-bold"},v={class:"fw-bold"},D={class:"d-flex justify-content-between"},Q={class:""},x={class:""},A=["data-bs-purchasedocId"];function P(e,t,s,l,r,c){return s.purchase&&s.purchase.groups&&Object.entries(s.purchase.groups).length?((0,a.Wz)(),(0,a.An)("div",h,[(0,a.QD)("div",p,[s.purchase.party?((0,a.Wz)(),(0,a.An)("img",{key:0,src:s.purchase.party.image,class:"of-cover w-80p","data-bs-toggle":"modal","data-bs-target":"#imagePreviewModal","data-bs-url":s.purchase.party.preview},null,8,f)):(0,a.g1)("",!0),(0,a.QD)("div",b,[(0,a.QD)("div",m,[(0,a.QD)("div",g,[(0,a.QD)("span",y,"#"+(0,u.WA)(s.purchase.doc_id),1),(0,a.QD)("span",v,(0,u.WA)(s.purchase.quantity.toLocaleString())+" pcs.",1)]),(0,a.QD)("div",D,[(0,a.QD)("span",Q,(0,u.WA)(s.purchase.doc_date),1),(0,a.QD)("span",x,"Rs. "+(0,u.WA)(s.purchase.total.toLocaleString()),1)]),(0,a.QD)("button",{class:"btn btn-sm btn-outline-dark w-100 mt-2","data-bs-toggle":"offcanvas","data-bs-target":"#purchaseInfoModal","data-bs-purchasedocId":s.purchase.doc_id+"#"+s.purchase.party.sid,"aria-controls":"purchaseInfoModal"}," Show Products ",8,A)])])])])):(0,a.g1)("",!0)}var k={name:"PurchaseCard",props:["purchase"]},w=s(4100);const W=(0,w.c)(k,[["render",P]]);var S=W,F=s(60);const z={key:0,class:"offcanvas offcanvas-end",tabindex:"-1",id:"purchaseInfoModal","aria-labelledby":"purchaseInfoModalLabel"},B={class:"offcanvas-header d-flex justify-content-between align-items-center bg-light border-bottom"},C={class:"d-flex flex-fill justify-content-start gap-2 align-items-center"},I=(0,a.QD)("i",{class:"bi bi-chevron-left pe-2","data-bs-dismiss":"offcanvas","data-bs-target":"#purchaseInfoModal","aria-label":"Close"},null,-1),_={key:0,class:"text-capitalize fw-500",id:"purchaseInfoModal"},E={class:"fw-500"},L={class:"offcanvas-body p-2"},O={class:"card-header p-0 d-flex justify-content-between overflow-hidden"},M={class:"d-flex align-items-center w-100"},$=["src","data-bs-url"],j=["href"],q={class:"fw-500"},K={class:"small"},U={class:"me-2 d-flex flex-column align-items-end"},T={class:"fw-500"},R={class:"small"},V=["id"],H={class:"table table-sm table-striped table-borderless mb-0"},N=(0,a.QD)("thead",null,[(0,a.QD)("tr",null,[(0,a.QD)("th",{scope:"col",class:"ps-2 small"},"Color"),(0,a.QD)("th",{scope:"col",class:"small"},"Size"),(0,a.QD)("th",{scope:"col",class:"small text-end"},"Qty"),(0,a.QD)("th",{scope:"col",class:"small text-end"},"Rate"),(0,a.QD)("th",{scope:"col",class:"small text-end pe-2"},"Amt")])],-1),Y={class:"ps-2 small"},G={class:"small"},J={class:"small text-end"},X={class:"small text-end"},Z={class:"small text-end pe-2"};function ee(e,t,s,l,r,c){return r.activePurchase?((0,a.Wz)(),(0,a.An)("div",z,[(0,a.QD)("div",B,[(0,a.QD)("div",C,[I,r.activePurchase.party&&r.activePurchase.party.name?((0,a.Wz)(),(0,a.An)("span",_,(0,u.WA)(r.activePurchase.party.name),1)):(0,a.g1)("",!0)]),(0,a.QD)("span",E,"₹ "+(0,u.WA)(r.activePurchase.total),1)]),(0,a.QD)("div",L,[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(r.activePurchase.groups,((e,t)=>((0,a.Wz)(),(0,a.An)("div",{class:"card mb-2",key:t},[(0,a.QD)("div",O,[(0,a.QD)("div",M,[(0,a.QD)("img",{src:e.image,class:"of-cover h-60p br-tl p-2","data-bs-toggle":"modal","data-bs-target":"#imagePreviewModal","data-bs-url":e.preview},null,8,$),(0,a.QD)("div",{class:"flex-fill d-flex flex-column","data-bs-toggle":"collapse",href:"#collapsePurchase"+r.activePurchase.doc_id+"-"+t,role:"button","aria-expanded":"false","aria-controls":"collapseExample"},[(0,a.QD)("span",q,"#"+(0,u.WA)(e.product_code),1),(0,a.QD)("span",K,(0,u.WA)(e.product_name),1)],8,j),(0,a.QD)("div",U,[(0,a.QD)("span",T,(0,u.WA)(e.quantity)+" pcs",1),(0,a.QD)("span",R,"₹ "+(0,u.WA)(e.amount),1)])])]),(0,a.QD)("div",{class:"collapse",id:"collapsePurchase"+r.activePurchase.doc_id+"-"+t},[(0,a.QD)("table",H,[N,(0,a.QD)("tbody",null,[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(e.items,((e,t)=>((0,a.Wz)(),(0,a.An)("tr",{key:t},[(0,a.QD)("td",Y,(0,u.WA)(e.option),1),(0,a.QD)("td",G,(0,u.WA)(e.range),1),(0,a.QD)("td",J,(0,u.WA)(e.billed_quantity),1),(0,a.QD)("td",X,(0,u.WA)(e.rate),1),(0,a.QD)("td",Z,(0,u.WA)(e.amount),1)])))),128))])])],8,V)])))),128))])])):(0,a.g1)("",!0)}var te={name:"PurchaseCardDetail",props:["purchases"],data(){return{activePurchase:{}}},async mounted(){this.loadActivePurchase()},methods:{loadActivePurchase(){const e=document.getElementById("purchaseInfoModal");e&&e.addEventListener("show.bs.offcanvas",(e=>{const t=e.relatedTarget,s=t.getAttribute("data-bs-purchasedocId"),[a,l]=s.split("#");this.activePurchase=this.purchases.find((e=>e.doc_id===a&&e.party.sid===l))}))}}};const se=(0,w.c)(te,[["render",ee]]);var ae=se,le={name:"PurchaseBillsSection",props:{module:{type:String,required:!0},links:{type:Array,required:!0}},components:{EmptyList:o.c,OrderTabs:d.c,PurchaseCard:S,OrderFilters:F.c,PurchaseCardDetail:ae},data(){return{title:"Purchases",page:1,isFetching:!1,purchases:[],filters:{date:"",search:"",selectedStatus:"received",selectedParty:"",perPage:10,sortBys:[{name:"Latest Bill",selected:!0,value:"created_at",order:"desc"},{name:"Oldest Bill",selected:!1,value:"created_at",order:"asc"},{name:"Highest Amount",selected:!1,value:"total",order:"desc"},{name:"Lowest Amount",selected:!1,value:"total",order:"asc"},{name:"Biggest Volume",selected:!1,value:"quantity",order:"asc"},{name:"Smallest Volume",selected:!1,value:"quantity",order:"desc"}]}}},watch:{filters:{handler(){console.log("Filters changed"),this.page=1,this.purchases=[],this.loadMore()},deep:!0}},mounted(){this.loadMore(),window.addEventListener("scroll",this.handleScroll),this.title="brand"===this.$store.getters["authy/getPrefix"]?"Purchases":"Sales",this.$route.query&&(this.filters.search=this.$route.query.search||"")},unmounted(){window.removeEventListener("scroll",this.handleScroll)},computed:{parties(){const e=this.purchases,t={},s=[];return e&&e.forEach((e=>{const a=e.party.sid;t[a]||(s.push(e.party),t[a]=!0)})),s},filteredPurchases(){let e=this.purchases;return e}},methods:{handleScroll(){const{scrollTop:e,scrollHeight:t,clientHeight:s}=document.documentElement;s+e>=t-5&&this.loadMore()},loadMore(){if(this.isFetching)return;this.isFetching=!0;const e=new URLSearchParams({page:this.page,search:this.filters.search,status:this.filters.selectedStatus,party:this.filters.selectedParty}),t=this.filters.sortBys.find((e=>e.selected));t&&(e.append("sortby",t.value),e.append("sortorder",t.order)),n.c.get(`purchases?${e}&perpage=${this.filters.perPage}`).then((e=>{"ok"===e.data.status?(this.purchases=[...this.purchases,...e.data.data.data],this.page++,this.isFetching=!1):"error"===e.data.status?(this.isFetching=!1,alert(e.data.message)):(this.isFetching=!1,alert("Something went wrong! Please try again"))})).catch((e=>{this.isFetching=!1,console.log(e),alert("Something went wrong! Please try again")}))},handleFiltersChange(e){this.filters=e}}};const re=(0,w.c)(le,[["render",i]]);var ce=re}}]);
//# sourceMappingURL=260.a552ef67.js.map