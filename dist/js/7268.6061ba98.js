"use strict";(self["webpackChunkwsgbrand_app_v1"]=self["webpackChunkwsgbrand_app_v1"]||[]).push([[7268],{7268:function(t,e,s){s.r(e),s.d(e,{default:function(){return G}});var a=s(4108),i=s(7764);const l={class:"font-title"},r={key:0,class:"list-group list-group-flush"};function c(t,e,s,c,n,d){const o=(0,a.E1)("DispatchFilters"),h=(0,a.E1)("DispatchCard"),p=(0,a.E1)("DispatchDetails"),u=(0,a.E1)("DispatchStockIn"),f=(0,a.E1)("EmptyList");return(0,a.Wz)(),(0,a.An)("div",l,[(0,a.K2)(o,{title:"Dispatched Orders",parties:d.parties,filters:n.filters,statuses:d.statuses,onDispatchFilterUpdated:d.handleFiltersChange},null,8,["parties","filters","statuses","onDispatchFilterUpdated"]),Object.keys(d.filteredDispatches).length?((0,a.Wz)(),(0,a.An)("ul",r,[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(d.filteredDispatches,((t,e)=>((0,a.Wz)(),(0,a.An)("li",{class:"list-group-item p-0",key:e},[(0,a.K2)(i.Ox,{name:"slide",mode:"out-in"},{default:(0,a.Ql)((()=>[(0,a.K2)(h,{dispatch:t},null,8,["dispatch"])])),_:2},1024)])))),128)),(0,a.K2)(p,{dispatches:d.filteredDispatches},null,8,["dispatches"]),(0,a.K2)(u,{dispatches:d.filteredDispatches},null,8,["dispatches"])])):((0,a.Wz)(),(0,a.Az)(f,{key:1,title:"No Dispatch Available"}))])}s(3248);var n=s(6376),d=s(9176),o=s(9812),h=s(9096);const p={class:"border-bottom bg-body-tertiary"},u={class:"navbar navbar-expand py-1"},f={class:"navbar-collapse d-flex align-items-center"},b={class:"d-flex align-items-center"},y=(0,a.QD)("i",{class:"bi bi-chevron-left"},null,-1),g={class:"mb-0 ms-2"},m={class:"navbar-nav ms-auto align-items-center"},D=(0,a.IL)('<li class="nav-item"><button class="btn fs-5 border-0" data-bs-toggle="collapse" data-bs-target="#offcanvasSearch" aria-expanded="false" aria-controls="offcanvasSearch"><i class="bi bi-search"></i></button></li><li class="nav-item"><button class="btn fs-5 border-0" data-bs-toggle="collapse" data-bs-target="#offcanvasFilter" aria-expanded="false" aria-controls="offcanvasFilter"><i class="bi bi-funnel"></i></button></li><li class="nav-item"><button class="btn fs-5 border-0" data-bs-toggle="collapse" data-bs-target="#offcanvasSortBy" aria-expanded="false" aria-controls="offcanvasSortBy"><i class="bi bi-sort-up-alt"></i></button></li>',3),v={class:"nav-item"},S={class:"collapse",id:"offcanvasSearch"},k={class:"form-floating mx-2 mb-2"},F=(0,a.QD)("label",{for:"floatingInput"},"Search by name or code",-1),Q={class:"collapse",id:"offcanvasFilter"},w={class:"card card-body"},x=(0,a.QD)("option",{value:"",selected:"",disabled:""},"Filter By Fabricator",-1),P=["value"],B=(0,a.QD)("p",{class:"mb-2 fw-bold"},"Filter by status",-1),A={class:"d-flex w-100 border border-end-0"},C=["id","value","checked","onChange"],W=["for"],z=(0,a.QD)("br",null,null,-1),L={class:"collapse",id:"offcanvasSortBy"},E={class:"card card-body"},I=(0,a.QD)("p",{class:"mb-2 fw-bold"},"Sort by",-1),$={class:"d-flex w-100 border border-end-0"},_=["id","checked","onChange"],K=["for"],O=(0,a.QD)("br",null,null,-1);function q(t,e,s,l,r,c){const n=(0,a.E1)("router-link");return(0,a.Wz)(),(0,a.An)("div",p,[(0,a.QD)("nav",u,[(0,a.QD)("div",f,[(0,a.QD)("div",b,[(0,a.K2)(n,{class:"btn",to:{name:c.myDashboard}},{default:(0,a.Ql)((()=>[y])),_:1},8,["to"]),(0,a.QD)("h6",g,(0,h.WA)(s.title),1)]),(0,a.QD)("ul",m,[D,(0,a.QD)("li",v,[(0,a.QD)("button",{class:"btn btn-outline-dark rounded-0 btn-sm px-1 py-0 ms-2",onClick:e[0]||(e[0]=(...e)=>t.updatePerPage&&t.updatePerPage(...e))},(0,h.WA)(t.perPage),1)])])])]),(0,a.QD)("div",S,[(0,a.QD)("div",k,[(0,a.wt)((0,a.QD)("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>r.search=t),type:"search",class:"form-control rounded-0",placeholder:"Search Stocks",onChange:e[2]||(e[2]=(...t)=>c.emitFilters&&c.emitFilters(...t))},null,544),[[i.Og,r.search,void 0,{lazy:!0}]]),F])]),(0,a.QD)("div",Q,[(0,a.QD)("div",w,[c.isBrand&&s.parties&&s.parties.length?(0,a.wt)(((0,a.Wz)(),(0,a.An)("select",{key:0,"onUpdate:modelValue":e[3]||(e[3]=t=>r.selectedParty=t),class:"form-select py-3 mb-3","aria-label":"Filter By Party"},[x,((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(s.parties,((t,e)=>((0,a.Wz)(),(0,a.An)("option",{key:e,value:t.sid},(0,h.WA)(t.name),9,P)))),128))],512)),[[i.Ip,r.selectedParty]]):(0,a.g1)("",!0),B,(0,a.QD)("div",A,[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(s.statuses,((t,e)=>((0,a.Wz)(),(0,a.An)("div",{class:"flex-fill border-end",key:e},[(0,a.QD)("input",{type:"checkbox",class:"btn-check",id:"filterby"+c.getCheckboxId(e),autocomplete:"off",value:t.value,checked:t.value===r.selectedStatus,onChange:e=>c.updateSelectedStatus(t.value)},null,40,C),(0,a.QD)("label",{class:"btn btn-outline-dark rounded-0 border-0 w-100",for:"filterby"+c.getCheckboxId(e)},(0,h.WA)(t.text),9,W),z])))),128))])])]),(0,a.QD)("div",L,[(0,a.QD)("div",E,[I,(0,a.QD)("div",$,[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(r.localSortBys,((t,e)=>((0,a.Wz)(),(0,a.An)("div",{class:"flex-fill border-end",key:e},[(0,a.QD)("input",{type:"checkbox",class:"btn-check",id:"sortby"+c.getCheckboxId(e),autocomplete:"off",checked:t.selected,onChange:t=>c.updateSelectedSortBy(e)},null,40,_),(0,a.QD)("label",{class:"btn btn-outline-dark rounded-0 border-0 w-100",for:"sortby"+c.getCheckboxId(e)},(0,h.WA)(t.selected?t.name.on:t.name.off),9,K),O])))),128))])])])])}var U={name:"DispatchFilters",emits:["dispatch-filter-updated"],props:{title:{type:String,default:"Products"},filters:{type:Object,default:()=>({})},parties:{type:Array,default:()=>[]},statuses:{type:Array,required:!0}},data(){return{search:this.filters.search||"",localSortBys:this.filters.sortBys?[...this.filters.sortBys]:[],selectedParty:this.filters.selectedParty||"",selectedStatus:this.filters.selectedStatus||""}},methods:{applyFilters(){this.$emit("dispatch-filter-updated",{search:this.search,sortBys:this.localSortBys,selectedParty:this.selectedParty,selectedStatus:this.selectedStatus})},resetFilters(){this.search="",this.localSortBys=[...this.filters.sortBys],this.selectedParty="",this.selectedStatus=""},emitFilters(){this.applyFilters()},getCheckboxId(t){return`btn-check-outlined-${t}`},updateSelectedStatus(t){this.selectedStatus=this.selectedStatus===t?"":t,this.applyFilters()},updateSelectedSortBy(t){this.localSortBys[t].selected=!this.localSortBys[t].selected,this.applyFilters()},capitalizeFirstLetter(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()}},computed:{isBrand(){return"brand"===this.$store.getters["authy/getPrefix"]},myDashboard(){const t=this.capitalizeFirstLetter(this.$store.getters["authy/getPrefix"]);return`${t}Dashboard`}}},M=s(4100);const H=(0,M.c)(U,[["render",q]]);var j=H,V=s(8328),N=s(4880),R={name:"DispatchesPage",components:{DispatchCard:o.c,EmptyList:d.c,DispatchDetails:V.c,DispatchFilters:j,DispatchStockIn:N.c},data(){return{page:1,isFetching:!1,dispatches:[],filters:{search:"",selectedParty:"",selectedStatus:"pending",sortBys:[{name:{on:"Latest Dispatch",off:"Oldest Dispatch"},selected:!0},{name:{on:"Highest Quantity",off:"Lowest Quantity"},selected:!1},{name:{on:"Maximum Dispatch",off:"Lowest Dispatch"},selected:!1}]}}},mounted(){this.loadMore(),window.addEventListener("scroll",this.handleScroll)},unmounted(){window.removeEventListener("scroll",this.handleScroll)},watch:{parties:{handler(t){if(t.length){let e=this.$store.getters["authy/getPrefix"];"factory"!==e&&"vendor"!==e||(this.selectedParty=t[0].sid)}},immediate:!0},storeDispatches:{handler(t){this.dispatches=t,this.page=1},immediate:!0}},computed:{parties(){if(this.dispatches&&!this.dispatches.length)return[];const t=this.dispatches,e={},s=[];return t&&t.forEach((t=>{const a=t.party.sid;e[a]||(s.push(t.party),e[a]=!0)})),s},statuses(){return[{text:"Dispatched",value:"pending"},{text:"Received",value:"received"}]},pendingDispatch(){return this.dispatches.filter((t=>"pending"===t.status))},filteredDispatches(){if(this.dispatches&&!this.dispatches.length)return[];let t=this.dispatches;if(this.filters.search){const e=this.filters.search.toLowerCase();t=t.filter((t=>{const s=t.tags.split(",");return s.some((t=>t.toLowerCase().includes(e.trim())))}))}return this.filters.selectedParty&&(t=t.filter((t=>t.party.sid===this.filters.selectedParty))),this.filters.selectedStatus&&(t=t.filter((t=>t.status===this.filters.selectedStatus))),this.filters.sortBys[0].selected&&(t=t.sort(((t,e)=>new Date(e.created_at)-new Date(t.created_at)))),this.filters.sortBys[1].selected&&(t=t.sort(((t,e)=>e.quantity-t.quantity))),this.filters.sortBys[2].selected&&(t=t.sort(((t,e)=>e.quantity-t.quantity))),t},storeDispatches(){return this.$store.getters["brandy/dispatches"]}},methods:{handleScroll(){const{scrollTop:t,scrollHeight:e,clientHeight:s}=document.documentElement;s+t>=e-5&&this.loadMore()},loadMore(){this.isFetching||(this.isFetching=!0,n.c.get(`dispatches?page=${this.page}`).then((t=>{"ok"===t.data.status?(this.dispatches=[...this.dispatches,...t.data.data.data],this.page++,this.isFetching=!1):"error"===t.data.status?(this.isFetching=!1,alert(t.data.message)):(this.isFetching=!1,alert("Something went wrong! Please try again"))})).catch((t=>{this.isFetching=!1,console.log(t),alert("Something went wrong! Please try again")})))},handleFiltersChange(t){this.filters=t}}};const T=(0,M.c)(R,[["render",c]]);var G=T}}]);
//# sourceMappingURL=7268.6061ba98.js.map