"use strict";(self["webpackChunkwsgbrand_app_v1"]=self["webpackChunkwsgbrand_app_v1"]||[]).push([[6748],{9176:function(e,t,s){s.d(t,{c:function(){return p}});var a=s(4108),l=s(9096);const r={class:"list-group list-group-flush border-bottom py-5"},i={class:"list-group-item d-flex flex-column align-items-center"},n=(0,a.QD)("div",{class:"d-flex justify-content-center align-items-center rounded-circle border bg-light",style:{height:"60px",width:"60px"}},[(0,a.QD)("i",{class:"bi bi-funnel text-secondary fs-1",style:{opacity:"60%"}})],-1),o={class:"d-flex flex-fill flex-column px-3 mt-3"},c={class:"fw-bold font-title mb-0"};function d(e,t,s,d,u,h){return(0,a.Wz)(),(0,a.An)("div",r,[(0,a.QD)("div",i,[n,(0,a.QD)("div",o,[(0,a.QD)("p",c,(0,l.WA)(s.title),1)])])])}var u={name:"EmptyList",props:["title"]},h=s(4100);const f=(0,h.c)(u,[["render",d]]);var p=f},60:function(e,t,s){s.d(t,{c:function(){return N}});var a=s(4108),l=s(9096),r=s(7764);const i={class:"border-bottom bg-body-tertiary"},n={class:"navbar navbar-expand py-1"},o={class:"navbar-collapse d-flex align-items-center me-3"},c={class:"d-flex align-items-center"},d=(0,a.QD)("i",{class:"bi bi-chevron-left"},null,-1),u={class:"mb-0"},h={class:"navbar-nav ms-auto align-items-center"},f=(0,a.QD)("li",{class:"nav-item"},[(0,a.QD)("button",{class:"btn fs-5 border-0","data-bs-toggle":"collapse","data-bs-target":"#offcanvasSearch","aria-expanded":"false","aria-controls":"offcanvasSearch"},[(0,a.QD)("i",{class:"bi bi-search"})])],-1),p={key:0,class:"nav-item"},b=(0,a.QD)("button",{class:"btn fs-5 border-0","data-bs-toggle":"collapse","data-bs-target":"#offcanvasFilter","aria-expanded":"false","aria-controls":"offcanvasFilter"},[(0,a.QD)("i",{class:"bi bi-funnel"})],-1),g=[b],m={key:1,class:"nav-item"},y=(0,a.QD)("button",{class:"btn fs-5 border-0","data-bs-toggle":"collapse","data-bs-target":"#offcanvasSortBy","aria-expanded":"false","aria-controls":"offcanvasSortBy"},[(0,a.QD)("i",{class:"bi bi-sort-up-alt"})],-1),v=[y],k={class:"nav-item"},D={class:"collapse",id:"offcanvasSearch"},Q={class:"form-floating mx-2 mb-2"},x=(0,a.QD)("label",{for:"floatingInput"},"Search by name or code",-1),S={class:"collapse",id:"offcanvasFilter"},A={class:"card card-body"},F=(0,a.QD)("option",{value:"",selected:"",disabled:""},"Filter By Fabricator",-1),w=["value"],P={key:1,class:"mb-2 fw-bold"},W={key:2,class:"d-flex flex-wrap w-100 border border-end-0 border-bottom-0"},z=["id","value","checked","onChange"],B=["for"],C=(0,a.QD)("br",null,null,-1),O={class:"btn-group w-100 mt-4"},L={class:"collapse",id:"offcanvasSortBy"},E={key:0,class:"card card-body"},$=(0,a.QD)("p",{class:"mb-2 fw-bold"},"Sort by",-1),_={class:"d-flex flex-wrap border border-end-0"},I=["id","checked","onChange"],U=["for"],j=(0,a.QD)("br",null,null,-1);function K(e,t,s,b,y,K){const M=(0,a.E1)("router-link");return(0,a.Wz)(),(0,a.An)("div",i,[(0,a.QD)("nav",n,[(0,a.QD)("div",o,[(0,a.QD)("div",c,[(0,a.K2)(M,{class:"btn",to:{name:K.myDashboard}},{default:(0,a.Ql)((()=>[d])),_:1},8,["to"]),(0,a.QD)("h6",u,(0,l.WA)(s.title),1)]),(0,a.QD)("ul",h,[f,s.statuses&&s.statuses.length?((0,a.Wz)(),(0,a.An)("li",p,g)):(0,a.g1)("",!0),s.filters&&s.filters.sortBys&&s.filters.sortBys.length?((0,a.Wz)(),(0,a.An)("li",m,v)):(0,a.g1)("",!0),(0,a.QD)("li",k,[(0,a.QD)("button",{class:"btn btn-outline-dark rounded-0 btn-sm px-1 py-0 ms-2",onClick:t[0]||(t[0]=(...e)=>K.updatePerPage&&K.updatePerPage(...e))},(0,l.WA)(y.perPage),1)])])])]),(0,a.QD)("div",D,[(0,a.QD)("div",Q,[(0,a.wt)((0,a.QD)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>y.search=e),type:"search",class:"form-control rounded-0",placeholder:"Search Stocks",onChange:t[2]||(t[2]=(...e)=>K.emitFilters&&K.emitFilters(...e))},null,544),[[r.Og,y.search,void 0,{lazy:!0}]]),x])]),(0,a.QD)("div",S,[(0,a.QD)("div",A,[K.isBrand?(0,a.wt)(((0,a.Wz)(),(0,a.An)("select",{key:0,"onUpdate:modelValue":t[3]||(t[3]=e=>y.selectedParty=e),onChange:t[4]||(t[4]=(...e)=>K.applyFilters&&K.applyFilters(...e)),class:"form-select py-3 mb-3","aria-label":"Filter By Party"},[F,((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(s.parties,((e,t)=>((0,a.Wz)(),(0,a.An)("option",{key:t,value:e.sid},(0,l.WA)(e.name),9,w)))),128))],544)),[[r.Ip,y.selectedParty]]):(0,a.g1)("",!0),s.statuses&&s.statuses.length?((0,a.Wz)(),(0,a.An)("p",P,"Filter by status")):(0,a.g1)("",!0),s.statuses&&s.statuses.length?((0,a.Wz)(),(0,a.An)("div",W,[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(s.statuses,((e,t)=>((0,a.Wz)(),(0,a.An)("div",{class:"flex-fill border-end border-bottom",key:t},[(0,a.QD)("input",{type:"checkbox",class:"btn-check",id:"filterby"+K.getCheckboxId(t),autocomplete:"off",value:e.value,checked:e.value===y.selectedStatus,onChange:t=>K.updateSelectedStatus(e.value)},null,40,z),(0,a.QD)("label",{class:"btn btn-outline-dark rounded-0 border-0 w-100",for:"filterby"+K.getCheckboxId(t)},(0,l.WA)(e.text),9,B),C])))),128))])):(0,a.g1)("",!0),(0,a.QD)("div",O,[(0,a.QD)("button",{onClick:t[5]||(t[5]=(...e)=>K.resetFilters&&K.resetFilters(...e)),class:"btn btn-outline-dark"},"Reset")])])]),(0,a.QD)("div",L,[y.localSortBys&&y.localSortBys.length?((0,a.Wz)(),(0,a.An)("div",E,[$,(0,a.QD)("div",_,[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(y.localSortBys,((e,t)=>((0,a.Wz)(),(0,a.An)("div",{class:"flex-fill border-end",key:t},[(0,a.QD)("input",{type:"checkbox",class:"btn-check",id:"sortby"+K.getCheckboxId(t),autocomplete:"off",checked:e.selected,onChange:e=>K.updateSelectedSortBy(t)},null,40,I),(0,a.QD)("label",{class:"btn btn-outline-dark rounded-0 border-0 w-100",for:"sortby"+K.getCheckboxId(t)},(0,l.WA)((e.selected,e.name)),9,U),j])))),128))])])):(0,a.g1)("",!0)])])}var M={name:"OrderFilters",emits:["order-filter-updated"],props:{title:{type:String,default:"Products"},filters:{type:Object,default:()=>({})},parties:{type:Array,default:()=>[]},statuses:{type:Array,default:()=>[]}},data(){return{perPage:this.filters.perPage||10,search:this.filters.search||"",localSortBys:this.filters.sortBys?[...this.filters.sortBys]:[],selectedParty:this.filters.selectedParty||"",selectedStatus:this.filters.selectedStatus||""}},methods:{updatePerPage(){this.perPage>90?this.perPage=10:this.perPage+=10,this.applyFilters()},applyFilters(){this.$emit("order-filter-updated",{perPage:this.perPage,search:this.search,sortBys:this.localSortBys,selectedParty:this.selectedParty,selectedStatus:this.selectedStatus})},resetFilters(){this.perPage=10,this.search="",this.localSortBys=[...this.filters.sortBys],this.selectedParty="",this.selectedStatus="",this.applyFilters()},emitFilters(){this.applyFilters()},getCheckboxId(e){return`btn-check-outlined-${e}`},updateSelectedStatus(e){this.selectedStatus=this.selectedStatus===e?"":e,this.applyFilters()},updateSelectedSortBy(e){this.localSortBys=this.localSortBys.map(((t,s)=>(t.selected=s===e,t))),this.applyFilters()},capitalizeFirstLetter(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}},computed:{isBrand(){return"brand"===this.$store.getters["authy/getPrefix"]},myDashboard(){const e=this.capitalizeFirstLetter(this.$store.getters["authy/getPrefix"]);return`${e}Dashboard`}}},T=s(4100);const H=(0,T.c)(M,[["render",K]]);var N=H},1256:function(e,t,s){s.d(t,{c:function(){return d}});var a=s(4108),l=s(9096);const r={class:"nav nav-pills nav-fill border-bottom"};function i(e,t,s,i,n,o){const c=(0,a.E1)("router-link");return(0,a.Wz)(),(0,a.An)("ul",r,[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(s.links,(e=>((0,a.Wz)(),(0,a.An)("li",{class:"nav-item",key:e.name},[(0,a.K2)(c,{to:{name:e.name},class:(0,l.WN)(["nav-link rounded-0 fw-500 ls-1 small text-bg-light",{"active text-white":o.isLinkActive(e.name)}])},{default:(0,a.Ql)((()=>[(0,a.mY)((0,l.WA)(e.label),1)])),_:2},1032,["to","class"])])))),128))])}var n={name:"OrderTabs",props:{links:{type:Array,required:!0}},methods:{isLinkActive(e){return this.$route.name===e}}},o=s(4100);const c=(0,o.c)(n,[["render",i],["__scopeId","data-v-600df884"]]);var d=c},6748:function(e,t,s){s.r(t),s.d(t,{default:function(){return x}});var a=s(4108),l=s(9096);const r={key:0},i={class:"list-group list-group-flush"},n=["href"],o={class:"flex-fill d-flex flex-column"},c={class:"fw-500"},d={class:"d-flex align-items-center"},u={class:"me-3 fw-bold"},h={class:"badge bg-primary"},f={class:"d-flex flex-column align-items-end"},p={class:"fw-500"};function b(e,t,s,b,g,m){const y=(0,a.E1)("OrderFilters"),v=(0,a.E1)("OrderTabs"),k=(0,a.E1)("EmptyList"),D=(0,a.E1)("di");return(0,a.Wz)(),(0,a.Az)(D,{class:"font-title"},{default:(0,a.Ql)((()=>[(0,a.K2)(y,{title:g.title,filters:g.filters,statuses:e.statuses,onOrderFilterUpdated:m.handleFiltersChange},null,8,["title","filters","statuses","onOrderFilterUpdated"]),(0,a.K2)(v,{links:g.links},null,8,["links"]),Object.keys(m.filteredOrders).length?((0,a.Wz)(),(0,a.An)("div",r,[(0,a.QD)("ul",i,[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(m.filteredOrders,((e,t)=>((0,a.Wz)(),(0,a.An)("li",{class:"list-group-item",key:t},[(0,a.QD)("a",{href:m.previewLink(e.uuid),target:"_blank",rel:"noopener noreferrer",class:"td-none text-dark d-flex"},[(0,a.QD)("div",o,[(0,a.QD)("span",c,(0,l.WA)(e.doc_date),1),(0,a.QD)("div",d,[(0,a.QD)("span",u,"#"+(0,l.WA)(e.doc_no),1),(0,a.QD)("span",h,(0,l.WA)(e.status),1)])]),(0,a.QD)("div",f,[(0,a.QD)("span",p,"Paybale ₹ "+(0,l.WA)(e.amount),1),(0,a.QD)("span",null,"Balance ₹ "+(0,l.WA)(e.amount),1)])],8,n)])))),128))])])):((0,a.Wz)(),(0,a.Az)(k,{key:1,title:"No Orders Available, try adjusting filters"}))])),_:1})}var g=s(6376),m=s(9176),y=s(1256),v=s(60),k={name:"PurchaseBillsPage",components:{OrderTabs:y.c,EmptyList:m.c,OrderFilters:v.c},data(){return{title:"Purchases",page:1,isFetching:!1,orders:[],filters:{search:"",selectedStatus:"draft"},links:[{name:"FactoryPurchaseOrders",label:"Orders"},{name:"FactoryPurchaseBills",label:"Bills"}]}},mounted(){this.loadMore(),window.addEventListener("scroll",this.handleScroll)},unmounted(){window.removeEventListener("scroll",this.handleScroll)},computed:{prefix(){return this.$store.getters["authy/getPrefix"]},filteredOrders(){let e=this.orders;if(this.filters.search){const t=this.filters.search.toLowerCase();e=e.filter((e=>{const s=e.tags.split(",");return s.some((e=>e.toLowerCase().includes(t.trim())))}))}return e},monaalUrl(){return this.$store.getters["repo/getMonaalUrl"]}},methods:{previewLink(e){return`${this.monaalUrl}/view/customers/${e}`},handleFiltersChange(e){this.filters=e},handleScroll(){const{scrollTop:e,scrollHeight:t,clientHeight:s}=document.documentElement;s+e>=t-5&&this.loadMore()},loadMore(){this.isFetching||(this.isFetching=!0,g.c.get(`factory/bills?status=${this.filters.selectedStatus}&page=${this.page}`).then((e=>{"ok"===e.data.status?(this.orders=[...this.orders,...e.data.data.data],this.page++,this.isFetching=!1):"error"===e.data.status?(this.isFetching=!1,alert(e.data.message)):(this.isFetching=!1,alert("Something went wrong! Please try again"))})).catch((e=>{this.isFetching=!1,console.log(e),alert("Something went wrong! Please try again")})))}}},D=s(4100);const Q=(0,D.c)(k,[["render",b]]);var x=Q}}]);
//# sourceMappingURL=6748.777c64b5.js.map