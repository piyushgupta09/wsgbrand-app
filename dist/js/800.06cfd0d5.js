"use strict";(self["webpackChunkwsgbrand_app_v1"]=self["webpackChunkwsgbrand_app_v1"]||[]).push([[800],{9176:function(e,t,s){s.d(t,{c:function(){return p}});var a=s(4108),r=s(9096);const l={class:"list-group list-group-flush border-bottom py-5"},i={class:"list-group-item d-flex flex-column align-items-center"},n=(0,a.QD)("div",{class:"d-flex justify-content-center align-items-center rounded-circle border bg-light",style:{height:"60px",width:"60px"}},[(0,a.QD)("i",{class:"bi bi-funnel text-secondary fs-1",style:{opacity:"60%"}})],-1),o={class:"d-flex flex-fill flex-column px-3 mt-3"},c={class:"fw-bold font-title mb-0"};function d(e,t,s,d,u,h){return(0,a.Wz)(),(0,a.An)("div",l,[(0,a.QD)("div",i,[n,(0,a.QD)("div",o,[(0,a.QD)("p",c,(0,r.WA)(s.title),1)])])])}var u={name:"EmptyList",props:["title"]},h=s(4100);const f=(0,h.c)(u,[["render",d]]);var p=f},7680:function(e,t,s){s.d(t,{c:function(){return N}});var a=s(4108),r=s(9096),l=s(7764);const i={class:"border-bottom bg-body-tertiary"},n={class:"navbar navbar-expand py-1"},o={class:"navbar-collapse d-flex align-items-center me-3"},c={class:"d-flex align-items-center"},d=(0,a.QD)("i",{class:"bi bi-chevron-left"},null,-1),u={class:"mb-0"},h={class:"navbar-nav ms-auto align-items-center"},f=(0,a.QD)("li",{class:"nav-item"},[(0,a.QD)("button",{class:"btn fs-5 border-0","data-bs-toggle":"collapse","data-bs-target":"#offcanvasSearch","aria-expanded":"false","aria-controls":"offcanvasSearch"},[(0,a.QD)("i",{class:"bi bi-search"})])],-1),p={key:0,class:"nav-item"},b=(0,a.QD)("button",{class:"btn fs-5 border-0","data-bs-toggle":"collapse","data-bs-target":"#offcanvasFilter","aria-expanded":"false","aria-controls":"offcanvasFilter"},[(0,a.QD)("i",{class:"bi bi-funnel"})],-1),g=[b],y={key:1,class:"nav-item"},m=(0,a.QD)("button",{class:"btn fs-5 border-0","data-bs-toggle":"collapse","data-bs-target":"#offcanvasSortBy","aria-expanded":"false","aria-controls":"offcanvasSortBy"},[(0,a.QD)("i",{class:"bi bi-sort-up-alt"})],-1),v=[m],k={class:"nav-item"},x={class:"collapse",id:"offcanvasSearch"},D={class:"form-floating mx-2 mb-2"},Q=(0,a.QD)("label",{for:"floatingInput"},"Search by name or code",-1),A={class:"collapse",id:"offcanvasFilter"},S={class:"card card-body"},F=(0,a.QD)("option",{value:"",selected:"",disabled:""},"Filter By Fabricator",-1),w=["value"],P={key:1,class:"mb-2 fw-bold"},W={key:2,class:"d-flex flex-wrap w-100 border border-end-0 border-bottom-0"},B=["id","value","checked","onChange"],z=["for"],C=(0,a.QD)("br",null,null,-1),O={class:"btn-group w-100 mt-4"},L={class:"collapse",id:"offcanvasSortBy"},$={key:0,class:"card card-body"},E=(0,a.QD)("p",{class:"mb-2 fw-bold"},"Sort by",-1),_={class:"d-flex flex-wrap border border-end-0"},U=["id","checked","onChange"],I=["for"],j=(0,a.QD)("br",null,null,-1);function K(e,t,s,b,m,K){const M=(0,a.E1)("router-link");return(0,a.Wz)(),(0,a.An)("div",i,[(0,a.QD)("nav",n,[(0,a.QD)("div",o,[(0,a.QD)("div",c,[(0,a.K2)(M,{class:"btn",to:{name:K.myDashboard}},{default:(0,a.Ql)((()=>[d])),_:1},8,["to"]),(0,a.QD)("h6",u,(0,r.WA)(s.title),1)]),(0,a.QD)("ul",h,[f,s.statuses&&s.statuses.length?((0,a.Wz)(),(0,a.An)("li",p,g)):(0,a.g1)("",!0),s.filters&&s.filters.sortBys&&s.filters.sortBys.length?((0,a.Wz)(),(0,a.An)("li",y,v)):(0,a.g1)("",!0),(0,a.QD)("li",k,[(0,a.QD)("button",{class:"btn btn-outline-dark rounded-0 btn-sm px-1 py-0 ms-2",onClick:t[0]||(t[0]=(...e)=>K.updatePerPage&&K.updatePerPage(...e))},(0,r.WA)(m.perPage),1)])])])]),(0,a.QD)("div",x,[(0,a.QD)("div",D,[(0,a.wt)((0,a.QD)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>m.search=e),type:"search",class:"form-control rounded-0",placeholder:"Search Stocks",onChange:t[2]||(t[2]=(...e)=>K.emitFilters&&K.emitFilters(...e))},null,544),[[l.Og,m.search,void 0,{lazy:!0}]]),Q])]),(0,a.QD)("div",A,[(0,a.QD)("div",S,[K.isBrand?(0,a.wt)(((0,a.Wz)(),(0,a.An)("select",{key:0,"onUpdate:modelValue":t[3]||(t[3]=e=>m.selectedParty=e),onChange:t[4]||(t[4]=(...e)=>K.applyFilters&&K.applyFilters(...e)),class:"form-select py-3 mb-3","aria-label":"Filter By Party"},[F,((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(s.parties,((e,t)=>((0,a.Wz)(),(0,a.An)("option",{key:t,value:e.sid},(0,r.WA)(e.name),9,w)))),128))],544)),[[l.Ip,m.selectedParty]]):(0,a.g1)("",!0),s.statuses&&s.statuses.length?((0,a.Wz)(),(0,a.An)("p",P,"Filter by status")):(0,a.g1)("",!0),s.statuses&&s.statuses.length?((0,a.Wz)(),(0,a.An)("div",W,[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(s.statuses,((e,t)=>((0,a.Wz)(),(0,a.An)("div",{class:"flex-fill border-end border-bottom",key:t},[(0,a.QD)("input",{type:"checkbox",class:"btn-check",id:"filterby"+K.getCheckboxId(t),autocomplete:"off",value:e.value,checked:e.value===m.selectedStatus,onChange:t=>K.updateSelectedStatus(e.value)},null,40,B),(0,a.QD)("label",{class:"btn btn-outline-dark rounded-0 border-0 w-100",for:"filterby"+K.getCheckboxId(t)},(0,r.WA)(e.text),9,z),C])))),128))])):(0,a.g1)("",!0),(0,a.QD)("div",O,[(0,a.QD)("button",{onClick:t[5]||(t[5]=(...e)=>K.resetFilters&&K.resetFilters(...e)),class:"btn btn-outline-dark"},"Reset")])])]),(0,a.QD)("div",L,[m.localSortBys&&m.localSortBys.length?((0,a.Wz)(),(0,a.An)("div",$,[E,(0,a.QD)("div",_,[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(m.localSortBys,((e,t)=>((0,a.Wz)(),(0,a.An)("div",{class:"flex-fill border-end",key:t},[(0,a.QD)("input",{type:"checkbox",class:"btn-check",id:"sortby"+K.getCheckboxId(t),autocomplete:"off",checked:e.selected,onChange:e=>K.updateSelectedSortBy(t)},null,40,U),(0,a.QD)("label",{class:"btn btn-outline-dark rounded-0 border-0 w-100",for:"sortby"+K.getCheckboxId(t)},(0,r.WA)((e.selected,e.name)),9,I),j])))),128))])])):(0,a.g1)("",!0)])])}var M={name:"OrderFilters",emits:["order-filter-updated"],props:{title:{type:String,default:"Products"},filters:{type:Object,default:()=>({})},parties:{type:Array,default:()=>[]},statuses:{type:Array,default:()=>[]}},data(){return{perPage:this.filters.perPage||10,search:this.filters.search||"",localSortBys:this.filters.sortBys?[...this.filters.sortBys]:[],selectedParty:this.filters.selectedParty||"",selectedStatus:this.filters.selectedStatus||""}},methods:{updatePerPage(){this.perPage>90?this.perPage=10:this.perPage+=10,this.applyFilters()},applyFilters(){this.$emit("order-filter-updated",{perPage:this.perPage,search:this.search,sortBys:this.localSortBys,selectedParty:this.selectedParty,selectedStatus:this.selectedStatus})},resetFilters(){this.perPage=10,this.search="",this.localSortBys=[...this.filters.sortBys],this.selectedParty="",this.selectedStatus="",this.applyFilters()},emitFilters(){this.applyFilters()},getCheckboxId(e){return`btn-check-outlined-${e}`},updateSelectedStatus(e){this.selectedStatus=this.selectedStatus===e?"":e,this.applyFilters()},updateSelectedSortBy(e){this.localSortBys=this.localSortBys.map(((t,s)=>(t.selected=s===e,t))),this.applyFilters()},capitalizeFirstLetter(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}},computed:{isBrand(){return"brand"===this.$store.getters["authy/getPrefix"]},myDashboard(){const e=this.capitalizeFirstLetter(this.$store.getters["authy/getPrefix"]);return`${e}Dashboard`}}},T=s(4100);const H=(0,T.c)(M,[["render",K]]);var N=H},4062:function(e,t,s){s.d(t,{c:function(){return d}});var a=s(4108),r=s(9096);const l={class:"nav nav-pills nav-fill border-bottom"};function i(e,t,s,i,n,o){const c=(0,a.E1)("router-link");return(0,a.Wz)(),(0,a.An)("ul",l,[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(s.links,(e=>((0,a.Wz)(),(0,a.An)("li",{class:"nav-item",key:e.name},[(0,a.K2)(c,{to:{name:e.name},class:(0,r.WN)(["nav-link rounded-0 fw-500 ls-1 small text-bg-light",[o.isLinkActive(e.name)?o.getAppColor:""]])},{default:(0,a.Ql)((()=>[(0,a.mY)((0,r.WA)(e.label),1)])),_:2},1032,["to","class"])])))),128))])}var n={name:"OrderTabs",props:{links:{type:Array,required:!0}},methods:{isLinkActive(e){return this.$route.name===e}},computed:{prefix(){return this.$store.getters["authy/getPrefix"]},getAppColor(){switch(this.prefix){case"factory":return"active-link-factory text-white";case"vendor":return"active-link-vendor text-white";case"brand":return"active-link-brand text-white";default:return"text-bg-dark"}}}},o=s(4100);const c=(0,o.c)(n,[["render",i]]);var d=c},6800:function(e,t,s){s.r(t),s.d(t,{default:function(){return A}});var a=s(4108),r=s(9096);const l={class:"font-title"},i={key:0},n={class:"list-group list-group-flush"},o=["href"],c={class:"flex-fill d-flex flex-column"},d={class:"fw-500"},u={class:"d-flex align-items-center"},h={class:"me-3 fw-bold"},f={class:"badge bg-primary"},p={class:"d-flex flex-column align-items-end"},b={class:"fw-500"};function g(e,t,s,g,y,m){const v=(0,a.E1)("OrderFilters"),k=(0,a.E1)("OrderTabs"),x=(0,a.E1)("EmptyList");return(0,a.Wz)(),(0,a.An)("div",l,[(0,a.K2)(v,{title:y.title,filters:y.filters,onOrderFilterUpdated:m.handleFiltersChange},null,8,["title","filters","onOrderFilterUpdated"]),(0,a.K2)(k,{links:y.links},null,8,["links"]),Object.keys(m.filteredOrders).length?((0,a.Wz)(),(0,a.An)("div",i,[(0,a.QD)("ul",n,[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(m.filteredOrders,((e,t)=>((0,a.Wz)(),(0,a.An)("li",{class:"list-group-item",key:t},[(0,a.QD)("a",{href:m.previewLink(e.uuid),target:"_blank",rel:"noopener noreferrer",class:"td-none text-dark d-flex"},[(0,a.QD)("div",c,[(0,a.QD)("span",d,(0,r.WA)(e.doc_date),1),(0,a.QD)("div",u,[(0,a.QD)("span",h,"#"+(0,r.WA)(e.doc_no),1),(0,a.QD)("span",f,(0,r.WA)(e.status),1)])]),(0,a.QD)("div",p,[(0,a.QD)("span",b,"Paybale ₹ "+(0,r.WA)(e.amount),1),(0,a.QD)("span",null,"Balance ₹ "+(0,r.WA)(e.amount),1)])],8,o)])))),128))])])):((0,a.Wz)(),(0,a.Az)(x,{key:1,title:"No Orders Available, try adjusting filters"}))])}var y=s(6376),m=s(9176),v=s(4062),k=s(7680),x={name:"PurchaseBillsPage",components:{OrderTabs:v.c,EmptyList:m.c,OrderFilters:k.c},data(){return{title:"Purchases",page:1,isFetching:!1,orders:[],filters:{search:"",selectedStatus:"draft"},links:[{name:"FactoryPurchaseOrders",label:"Orders"},{name:"FactoryPurchaseBills",label:"Bills"}]}},mounted(){this.loadMore(),window.addEventListener("scroll",this.handleScroll)},unmounted(){window.removeEventListener("scroll",this.handleScroll)},computed:{prefix(){return this.$store.getters["authy/getPrefix"]},filteredOrders(){let e=this.orders;if(this.filters.search){const t=this.filters.search.toLowerCase();e=e.filter((e=>{const s=e.tags.split(",");return s.some((e=>e.toLowerCase().includes(t.trim())))}))}return e},monaalUrl(){return this.$store.getters["repo/getMonaalUrl"]}},methods:{previewLink(e){return`${this.monaalUrl}/view/customers/${e}`},handleFiltersChange(e){this.filters=e},handleScroll(){const{scrollTop:e,scrollHeight:t,clientHeight:s}=document.documentElement;s+e>=t-5&&this.loadMore()},loadMore(){this.isFetching||(this.isFetching=!0,y.c.get(`factory/bills?status=${this.filters.selectedStatus}&page=${this.page}`).then((e=>{"ok"===e.data.status?(this.orders=[...this.orders,...e.data.data.data],this.page++,this.isFetching=!1):"error"===e.data.status?(this.isFetching=!1,alert(e.data.message)):(this.isFetching=!1,alert("Something went wrong! Please try again"))})).catch((e=>{this.isFetching=!1,console.log(e),alert("Something went wrong! Please try again")})))}}},D=s(4100);const Q=(0,D.c)(x,[["render",g]]);var A=Q}}]);
//# sourceMappingURL=800.06cfd0d5.js.map