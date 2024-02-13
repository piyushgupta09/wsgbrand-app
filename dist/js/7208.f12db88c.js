"use strict";(self["webpackChunkwsgbrand_app_v1"]=self["webpackChunkwsgbrand_app_v1"]||[]).push([[7208],{9612:function(e,t,r){r.r(t),r.d(t,{default:function(){return c}});var s=r(4108);function a(e,t,r,a,d,i){const l=(0,s.E1)("new-orders-section");return(0,s.Wz)(),(0,s.Az)(l,{module:"factory"})}var d=r(3138),i={name:"NewOrdersPage",components:{NewOrdersSection:d.c}},l=r(4100);const n=(0,l.c)(i,[["render",a]]);var c=n},3138:function(e,t,r){r.d(t,{c:function(){return v}});var s=r(4108);const a={class:"font-title"},d={key:1},i={class:"list-group list-group-flush"};function l(e,t,r,l,n,c){const o=(0,s.E1)("OrderFilters"),u=(0,s.E1)("OrderTabs"),h=(0,s.E1)("OrderCard"),p=(0,s.E1)("EmptyList"),y=(0,s.E1)("OrderDetails");return(0,s.Wz)(),(0,s.An)("div",a,[(0,s.K2)(o,{title:n.title,filters:n.filters,parties:c.parties,statuses:c.statuses,onOrderFilterUpdated:c.handleFiltersChange},null,8,["title","filters","parties","statuses","onOrderFilterUpdated"]),"brand"===c.prefix?((0,s.Wz)(),(0,s.Az)(u,{key:0,links:r.links},null,8,["links"])):(0,s.g1)("",!0),Object.keys(n.orders).length?((0,s.Wz)(),(0,s.An)("div",d,[((0,s.Wz)(!0),(0,s.An)(s.ae,null,(0,s.mi)(n.orders,((e,t)=>((0,s.Wz)(),(0,s.An)("div",{key:t},[(0,s.QD)("ul",i,[(0,s.K2)(h,{order:e,type:c.prefix},null,8,["order","type"])])])))),128))])):((0,s.Wz)(),(0,s.Az)(p,{key:2,title:"No Orders Available, try adjusting filters"})),(0,s.K2)(y,{orders:n.orders,type:c.prefix},null,8,["orders","type"])])}r(3248),r(2168),r(5104),r(8312);var n=r(6376),c=r(9176),o=r(5707),u=r(1256),h=r(60),p=r(5352),y={name:"NewOrdersSection",props:{module:{type:String,required:!0},links:{type:Array,required:!0}},components:{OrderCard:o.c,EmptyList:c.c,OrderTabs:u.c,OrderDetails:p.c,OrderFilters:h.c},data(){return{title:"New Orders",page:1,isFetching:!1,orders:[],filters:{date:"",search:"",selectedStatus:"issued",selectedParty:"",perPage:10,sortBys:[{name:"Latest Order",selected:!0,value:"created_at",order:"desc"},{name:"Oldest Order",selected:!1,value:"created_at",order:"asc"},{name:"Highest Quantity",selected:!1,value:"quantity",order:"desc"},{name:"Lowest Quantity",selected:!1,value:"quantity",order:"asc"},{name:"Nearest Delivery",selected:!1,value:"expected_at",order:"asc"},{name:"Furthest Delivery",selected:!1,value:"expected_at",order:"desc"}]}}},mounted(){window.addEventListener("scroll",this.handleScroll),this.$route.query&&this.$route.query.search&&(this.filters.search=this.$route.query.search||""),this.$route.query&&this.$route.query.status&&(this.filters.selectedStatus=this.$route.query.status||""),this.loadMore()},unmounted(){window.removeEventListener("scroll",this.handleScroll)},watch:{filters:{handler(){console.log("Filters changed"),this.page=1,this.orders=[],this.loadMore()},deep:!0}},computed:{cardType(){return"brand"===this.$store.getters["authy/getPrefix"]?"brand":"party"},parties(){if(this.orders&&!this.orders.length)return[];const e=this.orders,t={},r=[];return e&&e.forEach((e=>{const s=e.party.sid;t[s]||(r.push(e.party),t[s]=!0)})),r},statuses(){return[{text:"Issued",value:"issued"},{text:"Accepted",value:"accepted"},{text:"Rejected",value:"rejected"}]},prefix(){return this.$store.getters["authy/getPrefix"]}},methods:{handleScroll(){const{scrollTop:e,scrollHeight:t,clientHeight:r}=document.documentElement;r+e>=t-5&&this.loadMore()},loadMore(){if(this.isFetching)return;this.isFetching=!0;const e=new URLSearchParams({page:this.page,search:this.filters.search,status:this.filters.selectedStatus,party:this.filters.selectedParty}),t=this.filters.sortBys.find((e=>e.selected));t&&(e.append("sortby",t.value),e.append("sortorder",t.order)),n.c.get(`orders?${e}&perpage=${this.filters.perPage}`).then((e=>{"ok"===e.data.status?(this.orders=[...this.orders,...e.data.data.data],this.page++,this.isFetching=!1):"error"===e.data.status?(this.isFetching=!1,alert(e.data.message)):(this.isFetching=!1,alert("Something went wrong! Please try again"))})).catch((e=>{this.isFetching=!1,console.log(e),alert("Something went wrong! Please try again")}))},handleFiltersChange(e){this.filters=e},resetFilters(){this.filters={date:"",search:"",selectedStatus:"issued",selectedParty:"",perPage:10,sortBys:[{name:"Latest Order",selected:!0,value:"created_at",order:"desc"},{name:"Oldest Order",selected:!1,value:"created_at",order:"asc"},{name:"Highest Quantity",selected:!1,value:"quantity",order:"desc"},{name:"Lowest Quantity",selected:!1,value:"quantity",order:"asc"},{name:"Nearest Delivery",selected:!1,value:"expected_at",order:"asc"},{name:"Furthest Delivery",selected:!1,value:"expected_at",order:"desc"}]}}}},g=r(4100);const f=(0,g.c)(y,[["render",l]]);var v=f}}]);
//# sourceMappingURL=7208.f12db88c.js.map