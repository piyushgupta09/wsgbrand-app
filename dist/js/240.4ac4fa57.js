"use strict";(self["webpackChunkwsgbrand_app_v1"]=self["webpackChunkwsgbrand_app_v1"]||[]).push([[240],{9240:function(e,t,r){r.r(t),r.d(t,{default:function(){return O}});var s=r(4108);const l={class:"font-title"},a={key:0},i={class:"list-group list-group-flush"};function n(e,t,r,n,d,o){const c=(0,s.E1)("OrderFilters"),h=(0,s.E1)("OrderTabs"),u=(0,s.E1)("OrderCard"),g=(0,s.E1)("EmptyList"),p=(0,s.E1)("OrderDetails");return(0,s.Wz)(),(0,s.An)("div",l,[(0,s.K2)(c,{title:d.title,filters:d.filters,onOrderFilterUpdated:o.handleFiltersChange},null,8,["title","filters","onOrderFilterUpdated"]),(0,s.K2)(h,{links:d.links},null,8,["links"]),Object.keys(o.filteredOrders).length?((0,s.Wz)(),(0,s.An)("div",a,[((0,s.Wz)(!0),(0,s.An)(s.ae,null,(0,s.mi)(o.filteredOrders,((e,t)=>((0,s.Wz)(),(0,s.An)("div",{key:t},[(0,s.QD)("ul",i,[(0,s.K2)(u,{order:e,type:"pocard"},null,8,["order"])])])))),128))])):((0,s.Wz)(),(0,s.Az)(g,{key:1,title:"No Orders Available, try adjusting filters"})),(0,s.K2)(p,{orders:o.filteredOrders,type:o.prefix},null,8,["orders","type"])])}var d=r(6376),o=r(9176),c=r(4062),h=r(5707),u=r(60),g=r(5352),p={name:"PurchaseOrdersPage",components:{OrderTabs:c.c,OrderCard:h.c,EmptyList:o.c,OrderDetails:g.c,OrderFilters:u.c},data(){return{title:"Purchases",page:1,isFetching:!1,orders:[],filters:{search:"",perPage:10,selectedStatus:"accepted"},links:[{name:"FactoryPurchaseOrders",label:"Orders"},{name:"FactoryPurchaseBills",label:"Bills"}]}},mounted(){this.loadMore(),window.addEventListener("scroll",this.handleScroll)},unmounted(){window.removeEventListener("scroll",this.handleScroll)},computed:{prefix(){return this.$store.getters["authy/getPrefix"]},filteredOrders(){let e=this.orders;if(this.filters.search){const t=this.filters.search.toLowerCase();e=e.filter((e=>{const r=e.tags.split(",");return r.some((e=>e.toLowerCase().includes(t.trim())))}))}return e},statuses(){return[{text:"Draft",value:"draft"},{text:"Issued",value:"issued"},{text:"Partial",value:"partial"},{text:"Completed",value:"completed"},{text:"Cancelled",value:"cancelled"}]}},methods:{handleFiltersChange(e){this.filters=e,this.loadMore()},handleScroll(){const{scrollTop:e,scrollHeight:t,clientHeight:r}=document.documentElement;r+e>=t-5&&this.loadMore()},loadMore(){this.isFetching||(this.isFetching=!0,d.c.get(`factory/pos?status=${this.filters.selectedStatus}&perpage=${this.filters.perPage}&page=${this.page}`).then((e=>{"ok"===e.data.status?(this.orders=[...this.orders,...e.data.data.data],this.page++,this.isFetching=!1):"error"===e.data.status?(this.isFetching=!1,alert(e.data.message)):(this.isFetching=!1,alert("Something went wrong! Please try again"))})).catch((e=>{this.isFetching=!1,console.log(e),alert("Something went wrong! Please try again")})))}}},f=r(4100);const m=(0,f.c)(p,[["render",n]]);var O=m}}]);
//# sourceMappingURL=240.4ac4fa57.js.map