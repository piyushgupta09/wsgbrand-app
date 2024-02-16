"use strict";(self["webpackChunkwsgbrand_app_v1"]=self["webpackChunkwsgbrand_app_v1"]||[]).push([[100],{9176:function(e,t,s){s.d(t,{c:function(){return f}});var a=s(4108),i=s(9096);const l={class:"list-group list-group-flush border-bottom py-5"},r={class:"list-group-item d-flex flex-column align-items-center"},n=(0,a.QD)("div",{class:"d-flex justify-content-center align-items-center rounded-circle border bg-light",style:{height:"60px",width:"60px"}},[(0,a.QD)("i",{class:"bi bi-funnel text-secondary fs-1",style:{opacity:"60%"}})],-1),d={class:"d-flex flex-fill flex-column px-3 mt-3"},c={class:"fw-bold font-title mb-0"};function o(e,t,s,o,h,p){return(0,a.Wz)(),(0,a.An)("div",l,[(0,a.QD)("div",r,[n,(0,a.QD)("div",d,[(0,a.QD)("p",c,(0,i.WA)(s.title),1)])])])}var h={name:"EmptyList",props:["title"]},p=s(4100);const u=(0,p.c)(h,[["render",o]]);var f=u},60:function(e,t,s){s.d(t,{c:function(){return V}});var a=s(4108),i=s(9096),l=s(7764);const r={class:"border-bottom bg-body-tertiary"},n={class:"navbar navbar-expand py-1"},d={class:"navbar-collapse d-flex align-items-center me-3"},c={class:"d-flex align-items-center"},o=(0,a.QD)("i",{class:"bi bi-chevron-left"},null,-1),h={class:"mb-0"},p={class:"navbar-nav ms-auto align-items-center"},u=(0,a.QD)("li",{class:"nav-item"},[(0,a.QD)("button",{class:"btn fs-5 border-0","data-bs-toggle":"collapse","data-bs-target":"#offcanvasSearch","aria-expanded":"false","aria-controls":"offcanvasSearch"},[(0,a.QD)("i",{class:"bi bi-search"})])],-1),f={key:0,class:"nav-item"},b=(0,a.QD)("button",{class:"btn fs-5 border-0","data-bs-toggle":"collapse","data-bs-target":"#offcanvasFilter","aria-expanded":"false","aria-controls":"offcanvasFilter"},[(0,a.QD)("i",{class:"bi bi-funnel"})],-1),m=[b],g={key:1,class:"nav-item"},v=(0,a.QD)("button",{class:"btn fs-5 border-0","data-bs-toggle":"collapse","data-bs-target":"#offcanvasSortBy","aria-expanded":"false","aria-controls":"offcanvasSortBy"},[(0,a.QD)("i",{class:"bi bi-sort-up-alt"})],-1),y=[v],D={class:"nav-item"},x={class:"collapse",id:"offcanvasSearch"},Q={class:"form-floating mx-2 mb-2"},k=(0,a.QD)("label",{for:"floatingInput"},"Search by name or code",-1),w={class:"collapse",id:"offcanvasFilter"},A={class:"card card-body"},W=(0,a.QD)("option",{value:"",selected:"",disabled:""},"Filter By Fabricator",-1),S=["value"],z={key:1,class:"mb-2 fw-bold"},P={key:2,class:"d-flex flex-wrap w-100 border border-end-0 border-bottom-0"},_=["id","value","checked","onChange"],F=["for"],B=(0,a.QD)("br",null,null,-1),I={class:"btn-group w-100 mt-4"},C={class:"collapse",id:"offcanvasSortBy"},O={key:0,class:"card card-body"},q=(0,a.QD)("p",{class:"mb-2 fw-bold"},"Sort by",-1),M={class:"d-flex flex-wrap border border-end-0"},$=["id","checked","onChange"],L=["for"],E=(0,a.QD)("br",null,null,-1);function j(e,t,s,b,v,j){const U=(0,a.E1)("router-link");return(0,a.Wz)(),(0,a.An)("div",r,[(0,a.QD)("nav",n,[(0,a.QD)("div",d,[(0,a.QD)("div",c,[(0,a.K2)(U,{class:"btn",to:{name:j.myDashboard}},{default:(0,a.Ql)((()=>[o])),_:1},8,["to"]),(0,a.QD)("h6",h,(0,i.WA)(s.title),1)]),(0,a.QD)("ul",p,[u,s.statuses&&s.statuses.length?((0,a.Wz)(),(0,a.An)("li",f,m)):(0,a.g1)("",!0),s.filters&&s.filters.sortBys&&s.filters.sortBys.length?((0,a.Wz)(),(0,a.An)("li",g,y)):(0,a.g1)("",!0),(0,a.QD)("li",D,[(0,a.QD)("button",{class:"btn btn-outline-dark rounded-0 btn-sm px-1 py-0 ms-2",onClick:t[0]||(t[0]=(...e)=>j.updatePerPage&&j.updatePerPage(...e))},(0,i.WA)(v.perPage),1)])])])]),(0,a.QD)("div",x,[(0,a.QD)("div",Q,[(0,a.wt)((0,a.QD)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>v.search=e),type:"search",class:"form-control rounded-0",placeholder:"Search Stocks",onChange:t[2]||(t[2]=(...e)=>j.emitFilters&&j.emitFilters(...e))},null,544),[[l.Og,v.search,void 0,{lazy:!0}]]),k])]),(0,a.QD)("div",w,[(0,a.QD)("div",A,[j.isBrand?(0,a.wt)(((0,a.Wz)(),(0,a.An)("select",{key:0,"onUpdate:modelValue":t[3]||(t[3]=e=>v.selectedParty=e),onChange:t[4]||(t[4]=(...e)=>j.applyFilters&&j.applyFilters(...e)),class:"form-select py-3 mb-3","aria-label":"Filter By Party"},[W,((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(s.parties,((e,t)=>((0,a.Wz)(),(0,a.An)("option",{key:t,value:e.sid},(0,i.WA)(e.name),9,S)))),128))],544)),[[l.Ip,v.selectedParty]]):(0,a.g1)("",!0),s.statuses&&s.statuses.length?((0,a.Wz)(),(0,a.An)("p",z,"Filter by status")):(0,a.g1)("",!0),s.statuses&&s.statuses.length?((0,a.Wz)(),(0,a.An)("div",P,[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(s.statuses,((e,t)=>((0,a.Wz)(),(0,a.An)("div",{class:"flex-fill border-end border-bottom",key:t},[(0,a.QD)("input",{type:"checkbox",class:"btn-check",id:"filterby"+j.getCheckboxId(t),autocomplete:"off",value:e.value,checked:e.value===v.selectedStatus,onChange:t=>j.updateSelectedStatus(e.value)},null,40,_),(0,a.QD)("label",{class:"btn btn-outline-dark rounded-0 border-0 w-100",for:"filterby"+j.getCheckboxId(t)},(0,i.WA)(e.text),9,F),B])))),128))])):(0,a.g1)("",!0),(0,a.QD)("div",I,[(0,a.QD)("button",{onClick:t[5]||(t[5]=(...e)=>j.resetFilters&&j.resetFilters(...e)),class:"btn btn-outline-dark"},"Reset")])])]),(0,a.QD)("div",C,[v.localSortBys&&v.localSortBys.length?((0,a.Wz)(),(0,a.An)("div",O,[q,(0,a.QD)("div",M,[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(v.localSortBys,((e,t)=>((0,a.Wz)(),(0,a.An)("div",{class:"flex-fill border-end",key:t},[(0,a.QD)("input",{type:"checkbox",class:"btn-check",id:"sortby"+j.getCheckboxId(t),autocomplete:"off",checked:e.selected,onChange:e=>j.updateSelectedSortBy(t)},null,40,$),(0,a.QD)("label",{class:"btn btn-outline-dark rounded-0 border-0 w-100",for:"sortby"+j.getCheckboxId(t)},(0,i.WA)((e.selected,e.name)),9,L),E])))),128))])])):(0,a.g1)("",!0)])])}var U={name:"OrderFilters",emits:["order-filter-updated"],props:{title:{type:String,default:"Products"},filters:{type:Object,default:()=>({})},parties:{type:Array,default:()=>[]},statuses:{type:Array,default:()=>[]}},data(){return{perPage:this.filters.perPage||10,search:this.filters.search||"",localSortBys:this.filters.sortBys?[...this.filters.sortBys]:[],selectedParty:this.filters.selectedParty||"",selectedStatus:this.filters.selectedStatus||""}},methods:{updatePerPage(){this.perPage>90?this.perPage=10:this.perPage+=10,this.applyFilters()},applyFilters(){this.$emit("order-filter-updated",{perPage:this.perPage,search:this.search,sortBys:this.localSortBys,selectedParty:this.selectedParty,selectedStatus:this.selectedStatus})},resetFilters(){this.perPage=10,this.search="",this.localSortBys=[...this.filters.sortBys],this.selectedParty="",this.selectedStatus="",this.applyFilters()},emitFilters(){this.applyFilters()},getCheckboxId(e){return`btn-check-outlined-${e}`},updateSelectedStatus(e){this.selectedStatus=this.selectedStatus===e?"":e,this.applyFilters()},updateSelectedSortBy(e){this.localSortBys=this.localSortBys.map(((t,s)=>(t.selected=s===e,t))),this.applyFilters()},capitalizeFirstLetter(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}},computed:{isBrand(){return"brand"===this.$store.getters["authy/getPrefix"]},myDashboard(){const e=this.capitalizeFirstLetter(this.$store.getters["authy/getPrefix"]);return`${e}Dashboard`}}},K=s(4100);const N=(0,K.c)(U,[["render",j]]);var V=N},4062:function(e,t,s){s.d(t,{c:function(){return o}});var a=s(4108),i=s(9096);const l={class:"nav nav-pills nav-fill border-bottom"};function r(e,t,s,r,n,d){const c=(0,a.E1)("router-link");return(0,a.Wz)(),(0,a.An)("ul",l,[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(s.links,(e=>((0,a.Wz)(),(0,a.An)("li",{class:"nav-item",key:e.name},[(0,a.K2)(c,{to:{name:e.name},class:(0,i.WN)(["nav-link rounded-0 fw-500 ls-1 small text-bg-light",[d.isLinkActive(e.name)?d.getAppColor:""]])},{default:(0,a.Ql)((()=>[(0,a.mY)((0,i.WA)(e.label),1)])),_:2},1032,["to","class"])])))),128))])}var n={name:"OrderTabs",props:{links:{type:Array,required:!0}},methods:{isLinkActive(e){return this.$route.name===e}},computed:{prefix(){return this.$store.getters["authy/getPrefix"]},getAppColor(){switch(this.prefix){case"factory":return"active-link-factory text-white";case"vendor":return"active-link-vendor text-white";case"brand":return"active-link-brand text-white";default:return"text-bg-dark"}}}},d=s(4100);const c=(0,d.c)(n,[["render",r]]);var o=c},9338:function(e,t,s){s.d(t,{c:function(){return Te}});var a=s(4108),i=s(7764);const l={class:"font-title"},r={key:0,class:"list-group list-group-flush"};function n(e,t,s,n,d,c){const o=(0,a.E1)("OrderFilters"),h=(0,a.E1)("OrderTabs"),p=(0,a.E1)("DispatchCard"),u=(0,a.E1)("DispatchDetails"),f=(0,a.E1)("DispatchStockIn"),b=(0,a.E1)("EmptyList");return(0,a.Wz)(),(0,a.An)("div",l,[(0,a.K2)(o,{title:d.title,filters:d.filters,parties:c.parties,statuses:c.statuses,onOrderFilterUpdated:c.handleFiltersChange},null,8,["title","filters","parties","statuses","onOrderFilterUpdated"]),(0,a.K2)(h,{links:s.links},null,8,["links"]),Object.keys(d.dispatches).length?((0,a.Wz)(),(0,a.An)("ul",r,[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(d.dispatches,((e,t)=>((0,a.Wz)(),(0,a.An)("li",{class:"list-group-item p-0",key:t},[(0,a.K2)(i.Ox,{name:"slide",mode:"out-in"},{default:(0,a.Ql)((()=>[(0,a.K2)(p,{dispatch:e},null,8,["dispatch"])])),_:2},1024)])))),128)),(0,a.K2)(u,{dispatches:d.dispatches},null,8,["dispatches"]),(0,a.K2)(f,{dispatches:d.dispatches},null,8,["dispatches"])])):((0,a.Wz)(),(0,a.Az)(b,{key:1,title:"No Dispatch Available"}))])}s(3248),s(2168),s(5104),s(8312);var d=s(6376),c=s(9176),o=s(4062),h=s(9096);const p={key:0,class:"w-100"},u={class:"d-flex"},f=["src","data-bs-url"],b={class:"flex-fill d-flex flex-column justify-content-between"},m=["data-bs-dispatch-sid"],g={class:"d-flex justify-content-between fw-bold"},v={class:"fw-bold"},y={key:0,class:"d-flex"},D=(0,a.QD)("span",{class:"me-1"},"Note:",-1),x={class:"me-2"},Q={class:"btn-group d-flex"},k=(0,a.QD)("i",{class:"bi bi-chevron-left"},null,-1),w=(0,a.QD)("span",{class:"ps-2"},"Ledger",-1),A=["data-bs-dispatch-sid"],W=(0,a.QD)("span",{class:"pe-2"},"Bill",-1),S=(0,a.QD)("i",{class:"bi bi-chevron-right"},null,-1),z={key:1,class:"flex-fill d-flex"},P=["data-bs-dispatch-sid"],_=(0,a.QD)("span",{class:"fw-500 pe-2"},"Stock In",-1),F=(0,a.QD)("i",{class:"bi bi-chevron-down"},null,-1),B=[_,F],I={key:1,class:"btn btn-sm btn-outline-dark flex-fill rounded-0 border-secondary border-end-0 p-0"},C={key:0,class:"d-flex justify-content-center text-bg-warning p-1"},O=(0,a.QD)("span",{class:"fw-500 pe-2"},"Bill Pending",-1),q=(0,a.QD)("i",{class:"bi bi-hourglass-split"},null,-1),M=[O,q],$={key:1,class:"d-flex justify-content-center text-bg-success p-1"},L=(0,a.QD)("span",{class:"fw-500 pe-2"},"Billed",-1),E=(0,a.QD)("i",{class:"bi bi-check-circle-fill"},null,-1),j=[L,E];function U(e,t,s,i,l,r){const n=(0,a.E1)("router-link");return s.dispatch&&s.dispatch.items&&Object.entries(s.dispatch.items).length?((0,a.Wz)(),(0,a.An)("div",p,[(0,a.QD)("div",u,[(0,a.QD)("img",{src:s.dispatch.image,class:"of-cover w-80p","data-bs-toggle":"modal","data-bs-target":"#imagePreviewModal","data-bs-url":s.dispatch.preview},null,8,f),(0,a.QD)("div",b,[(0,a.QD)("div",{class:"flex-fill p-2","data-bs-toggle":"offcanvas","data-bs-target":"#dispatchOrderModal","data-bs-dispatch-sid":s.dispatch.sid,"aria-controls":"dispatchOrderModal"},[(0,a.QD)("div",g,[(0,a.QD)("span",null,(0,h.WA)(s.dispatch.product_code)+" | "+(0,h.WA)(s.dispatch.product_name),1),(0,a.QD)("span",v,(0,h.WA)(s.dispatch.quantity.toLocaleString())+" pcs",1)]),s.dispatch.note&&s.dispatch.note.length?((0,a.Wz)(),(0,a.An)("div",y,[D,((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(s.dispatch.note,((e,t)=>((0,a.Wz)(),(0,a.An)("div",{class:"d-flex",key:t},[(0,a.QD)("span",x,(0,h.WA)(e.content),1)])))),128))])):(0,a.g1)("",!0)],8,m),(0,a.QD)("div",Q,[(0,a.K2)(n,{to:r.getLedgerDetailPageRoute,class:"btn btn-sm btn-outline-dark flex-fill rounded-0 border-secondary border-start-0"},{default:(0,a.Ql)((()=>[k,w])),_:1},8,["to"]),(0,a.QD)("button",{class:"btn btn-sm btn-outline-dark flex-fill rounded-0 border-secondary","data-bs-toggle":"offcanvas","data-bs-target":"#dispatchOrderModal","data-bs-dispatch-sid":s.dispatch.sid,"aria-controls":"dispatchOrderModal"}," Show Details ",8,A),s.dispatch.is_billed?((0,a.Wz)(),(0,a.Az)(n,{key:0,to:r.getBillPageRoute,class:"btn btn-sm btn-outline-dark flex-fill rounded-0 border-secondary border-end-0"},{default:(0,a.Ql)((()=>[W,S])),_:1},8,["to"])):((0,a.Wz)(),(0,a.An)("div",z,[r.isBrand&&"pending"===s.dispatch.status?((0,a.Wz)(),(0,a.An)("button",{key:0,class:"btn btn-sm btn-outline-dark flex-fill rounded-0 border-start-0 border-secondary","data-bs-toggle":"offcanvas","data-bs-target":"#dispatchStockInModal","data-bs-dispatch-sid":s.dispatch.sid,"aria-controls":"dispatchStockInModal"},B,8,P)):((0,a.Wz)(),(0,a.An)("div",I,["pending"===s.dispatch.status?((0,a.Wz)(),(0,a.An)("div",C,M)):((0,a.Wz)(),(0,a.An)("div",$,j))]))]))])])])])):(0,a.g1)("",!0)}var K={name:"DispatchCard",props:["dispatch"],data(){return{error:"",message:""}},computed:{isBrand(){return"brand"===this.prefix},isParty(){return"brand"!==this.prefix},prefix(){return this.$store.getters["authy/getPrefix"]},getLedgerDetailPageRoute(){switch(this.prefix){case"brand":return{name:"BrandProductLedger",params:{ledger:this.dispatch.ledger_sid}};case"factory":return{name:"FactoryLedgerDetail",params:{ledger:this.dispatch.ledger_sid}};case"vendor":return{name:"VendorLedgerDetail",params:{ledger:this.dispatch.ledger_sid}};default:return{name:"Home"}}},getBillPageRoute(){switch(this.prefix){case"brand":return{name:"BrandPurchases",query:{search:this.dispatch.is_billed}};case"factory":return{name:"FactorySales",query:{search:this.dispatch.is_billed}};case"vendor":return{name:"VendorSales",query:{search:this.dispatch.is_billed}};default:return{name:"Home"}}}},methods:{dispatchAction(e,t){this.$store.dispatch("dispatchAction",{status:t,sid:e.sid,message:this.message,expected_at:e.expected_at})}}},N=s(4100);const V=(0,N.c)(K,[["render",U]]);var R=V,T=s(60);const H={key:0,class:"offcanvas offcanvas-bottom h-75",tabindex:"-1",id:"dispatchOrderModal","aria-labelledby":"dispatchOrderModalLabel"},Y={class:"offcanvas-header border-bottom"},J={key:0,class:"offcanvas-title fw-bold ls-1 font-title"},G=(0,a.QD)("button",{type:"button",class:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Close"},null,-1),X={class:"offcanvas-body p-2"},Z=["src","data-bs-url"],ee={class:"flex-fill d-flex flex-column p-2"},te={class:"d-flex justify-content-between"},se={class:"text-capitalize fw-500"},ae={class:"fw-bold"},ie={key:0,class:"fw-bold"},le=(0,a.QD)("hr",{class:"my-2"},null,-1),re={class:"small fw-500"},ne={class:"small fw-500"},de={key:0,class:"small fw-500"};function ce(e,t,s,i,l,r){return l.activeDispatch?((0,a.Wz)(),(0,a.An)("div",H,[(0,a.QD)("div",Y,[l.activeDispatch.party&&l.activeDispatch.party.name?((0,a.Wz)(),(0,a.An)("div",J,(0,h.WA)(l.activeDispatch.party.name),1)):(0,a.g1)("",!0),G]),(0,a.QD)("div",X,[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(l.activeDispatch.items,((e,t)=>((0,a.Wz)(),(0,a.An)("div",{key:t,class:"d-flex mb-2"},[(0,a.QD)("img",{src:e.image,class:"of-cover w-70p","data-bs-toggle":"modal","data-bs-target":"#imagePreviewModal","data-bs-url":e.preview},null,8,Z),(0,a.QD)("div",ee,[(0,a.QD)("div",te,[(0,a.QD)("span",se,(0,h.WA)(e.option),1),(0,a.QD)("span",ae,(0,h.WA)(e.quantity)+" pcs.",1),e.is_billed?((0,a.Wz)(),(0,a.An)("span",ie,(0,h.WA)(e.diffrence)+" pcs.",1)):(0,a.g1)("",!0)]),le,((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(e.ranges,((t,s)=>((0,a.Wz)(),(0,a.An)("div",{class:"d-flex justify-content-between w-50",key:s},[(0,a.QD)("span",re,(0,h.WA)(t.range),1),(0,a.QD)("span",ne,(0,h.WA)(t.quantity)+" "+(0,h.WA)(t.quantity?"pcs.":"Nil"),1),e.is_billed?((0,a.Wz)(),(0,a.An)("span",de,(0,h.WA)(t.diffrence)+" "+(0,h.WA)(t.diffrence?"pcs.":"Nil"),1)):(0,a.g1)("",!0)])))),128))])])))),128))])])):(0,a.g1)("",!0)}var oe={name:"DispatchDetails",props:["dispatches"],data(){return{activeDispatch:{}}},async mounted(){this.loadActiveSale()},methods:{loadActiveSale(){const e=document.getElementById("dispatchOrderModal");e&&e.addEventListener("show.bs.offcanvas",(e=>{const t=e.relatedTarget,s=t.getAttribute("data-bs-dispatch-sid");this.activeDispatch=this.dispatches.find((e=>e.sid==s))}))}}};const he=(0,N.c)(oe,[["render",ce]]);var pe=he;const ue={key:0,class:"offcanvas offcanvas-bottom h-75",tabindex:"-1",id:"dispatchStockInModal","aria-labelledby":"dispatchStockInModalLabel",style:{"max-width":"100vw"}},fe=(0,a.QD)("div",{class:"offcanvas-header border-bottom"},[(0,a.QD)("div",{class:"offcanvas-title fw-bold ls-1 font-title"},"Book Purchase"),(0,a.QD)("button",{type:"button",class:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),be={class:"offcanvas-body pt-3",style:{"overflow-x":"hidden"}},me={class:"mb-3"},ge={class:"d-flex justify-content-between"},ve={class:"d-flex flex-column me-1"},ye=(0,a.QD)("label",{for:"invoiceId",class:"form-label"},"Invoice No:",-1),De={class:"d-flex flex-column ms-1"},xe=(0,a.QD)("label",{for:"invoiceDate",class:"form-label"},"Invoice Date:",-1),Qe={key:0,class:"mt-2 text-danger"},ke=["src","data-bs-url"],we={class:"flex-fill d-flex justify-content-between ps-2"},Ae={class:"flex-fill d-flex flex-column justify-content-between"},We={class:"flex-fill d-flex justify-content-between"},Se={class:"text-capitalize fw-500"},ze={class:"fw-bold"},Pe={class:"fw-500 flex-fill border-bottom py-1"},_e={class:"d-flex"},Fe=["onClick"],Be=(0,a.QD)("i",{class:"bi bi-dash-lg"},null,-1),Ie=[Be],Ce=["onUpdate:modelValue","max","min"],Oe=["onClick"],qe=(0,a.QD)("i",{class:"bi bi-plus-lg"},null,-1),Me=[qe],$e=(0,a.QD)("div",{class:"btn-group d-flex"},[(0,a.QD)("button",{type:"button",class:"btn btn-danger rounded-0","data-bs-dismiss":"offcanvas"},"Cancel"),(0,a.QD)("button",{type:"submit",class:"btn btn-success rounded-0"},"Accept")],-1);function Le(e,t,s,l,r,n){return r.activeDispatch?((0,a.Wz)(),(0,a.An)("div",ue,[fe,(0,a.QD)("div",be,[(0,a.QD)("form",{onSubmit:t[3]||(t[3]=(0,i.Y7)(((...e)=>n.postPurchase&&n.postPurchase(...e)),["prevent"])),method:"post",class:"w-100 h-100",style:{"overflow-x":"hidden"}},[(0,a.QD)("div",me,[(0,a.QD)("div",ge,[(0,a.QD)("div",ve,[ye,(0,a.wt)((0,a.QD)("input",{type:"text",id:"invoiceId",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=e=>r.invoiceId=e)},null,512),[[i.Og,r.invoiceId]])]),(0,a.QD)("div",De,[xe,(0,a.wt)((0,a.QD)("input",{type:"date",id:"invoiceDate",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=e=>r.invoiceDate=e)},null,512),[[i.Og,r.invoiceDate]])])]),r.error?((0,a.Wz)(),(0,a.An)("small",Qe,(0,h.WA)(r.error),1)):(0,a.g1)("",!0)]),((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(r.activeDispatch.items,((e,t)=>((0,a.Wz)(),(0,a.An)("div",{class:"d-flex justify-content-between mb-3",key:t},[(0,a.QD)("img",{src:e.image,class:"of-cover w-100p","data-bs-toggle":"modal","data-bs-target":"#imagePreviewModal","data-bs-url":e.preview},null,8,ke),(0,a.QD)("div",we,[(0,a.QD)("div",Ae,[(0,a.QD)("div",We,[(0,a.QD)("span",Se,(0,h.WA)(e.option),1),(0,a.QD)("span",ze,(0,h.WA)(e.quantity)+" pcs.",1)]),((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(e.ranges,((t,s)=>((0,a.Wz)(),(0,a.An)("div",{class:"d-flex justify-content-between align-items-center small mb-1",key:s},[(0,a.QD)("div",Pe,(0,h.WA)(t.range),1),(0,a.QD)("div",_e,[(0,a.QD)("button",{class:"btn btn-sm btn-outline-dark border rounded-0",type:"button",onClick:s=>n.decrement(t,`${e.option_sid}_${t.range_sid}`)},Ie,8,Fe),(0,a.wt)((0,a.QD)("input",{type:"number",style:{width:"60px"},class:"form-control form-control-sm text-end rounded-0","onUpdate:modelValue":s=>r.formData[`${e.option_sid}_${t.range_sid}`]=s,max:Math.round(t.max_quantity),min:Math.round(t.min_quantity)},null,8,Ce),[[i.Og,r.formData[`${e.option_sid}_${t.range_sid}`]]]),(0,a.QD)("button",{class:"btn btn-sm btn-outline-dark border rounded-0",type:"button",onClick:s=>n.increment(t,`${e.option_sid}_${t.range_sid}`)},Me,8,Oe)])])))),128))])])])))),128)),(0,a.wt)((0,a.QD)("textarea",{class:"form-control rounded-0 mb-3","onUpdate:modelValue":t[2]||(t[2]=e=>r.content=e),placeholder:"Enter message here ..."},null,512),[[i.Og,r.content]]),$e],32)])])):(0,a.g1)("",!0)}var Ee={name:"DispatchStockIn",props:["dispatches"],data(){return{activeDispatch:{},invoiceDate:(new Date).toISOString().slice(0,10),invoiceId:"121212",content:"",error:null,formData:{},stockInDisable:!1}},async mounted(){this.loadActiveDispatch()},watch:{activeDispatch:{immediate:!0,handler(e,t){t&&e.sid!==t.sid?this.initializeFormData(e):t||this.initializeFormData(e)}}},methods:{initializeFormData(e){void 0!==e.sid&&Object.values(this.activeDispatch.items).forEach((e=>{Object.values(e.ranges).forEach((t=>{const s=`${e.option_sid}_${t.range_sid}`;this.formData[s]=t.quantity}))}))},loadActiveDispatch(){const e=document.getElementById("dispatchStockInModal");e&&e.addEventListener("show.bs.offcanvas",(e=>{const t=e.relatedTarget,s=t.getAttribute("data-bs-dispatch-sid");this.activeDispatch=this.dispatches.find((e=>e.sid==s))}))},increment(e,t){this.formData[t]<Math.round(e.max_quantity)?this.formData[t]++:(this.error="Maximum quantity reached.",this.formData[t]=Math.round(e.max_quantity)),console.log("increment",e,t,this.formData[t])},decrement(e,t){this.formData[t]>Math.round(e.min_quantity)?this.formData[t]--:(this.error="Minimum quantity reached.",this.formData[t]=Math.round(e.min_quantity)),console.log("decrement",e,t,this.formData[t])},postPurchase(){if(this.stockInDisable)return;if(!this.invoiceDate)return void(this.error="Invoice date is required.");if(!this.invoiceId)return void(this.error="Invoice ID is required.");const e={content:this.content,quantities:JSON.stringify(this.formData),ledger_sid:this.activeDispatch.ledger_sid,doc_id:this.invoiceId,doc_date:this.invoiceDate,dispatch_sid:this.activeDispatch.sid};this.stockInDisable=!0,this.$store.dispatch("brandy/postStockIn",e)}}};const je=(0,N.c)(Ee,[["render",Le]]);var Ue=je,Ke=s(8656),Ne=s.n(Ke),Ve={name:"NewDispatchSection",props:{module:{type:String,required:!0},links:{type:Array,required:!0}},components:{DispatchCard:R,OrderTabs:o.c,EmptyList:c.c,DispatchDetails:pe,OrderFilters:T.c,DispatchStockIn:Ue},data(){return{title:"New Dispatches",page:1,isFetching:!1,dispatches:[],filters:{date:"",search:"",selectedStatus:"pending",selectedParty:"",perPage:10,sortBys:[{name:"Latest Dispatch",selected:!0,value:"created_at",order:"desc"},{name:"Oldest Dispatch",selected:!1,value:"created_at",order:"asc"},{name:"Highest Quantity",selected:!1,value:"quantity",order:"desc"},{name:"Lowest Quantity",selected:!1,value:"quantity",order:"asc"}]}}},mounted(){window.addEventListener("scroll",this.handleScroll),this.$route.query&&this.$route.query.search&&(this.filters.search=this.$route.query.search||""),this.loadMore()},unmounted(){window.removeEventListener("scroll",this.handleScroll)},watch:{parties:{handler(e){if(e.length){let t=this.$store.getters["authy/getPrefix"];"factory"!==t&&"vendor"!==t||(this.selectedParty=e[0].sid)}},immediate:!0},storeDispatches:{handler(e){this.dispatches=e,this.page=1},immediate:!0},filters:{handler(){console.log("Filters changed"),this.page=1,this.dispatches=[],this.loadMore()},deep:!0}},computed:{parties(){if(this.dispatches&&!this.dispatches.length)return[];const e=this.dispatches,t={},s=[];return e&&e.forEach((e=>{const a=e.party.sid;t[a]||(s.push(e.party),t[a]=!0)})),s},statuses(){return[{text:"Dispatched",value:"pending"},{text:"Received",value:"received"}]},storeDispatches(){return this.$store.getters["brandy/dispatches"]}},methods:{handleScroll(){const{scrollTop:e,scrollHeight:t,clientHeight:s}=document.documentElement;s+e>=t-5&&this.loadMore()},loadMore(){if(this.isFetching)return;this.isFetching=!0;const e=new URLSearchParams({page:this.page,search:this.filters.search,status:this.filters.selectedStatus,party:this.filters.selectedParty}),t=this.filters.sortBys.find((e=>e.selected));t&&(e.append("sortby",t.value),e.append("sortorder",t.order)),d.c.get(`dispatches?${e}&perpage=${this.filters.perPage}`).then((e=>{"ok"===e.data.status?(this.dispatches=[...this.dispatches,...e.data.data.data],this.page++,this.isFetching=!1):"error"===e.data.status?(this.isFetching=!1,Ne().fire({icon:"error",title:"Oops...",text:e.data.message})):(this.isFetching=!1,Ne().fire({icon:"error",title:"Oops...",text:"Something went wrong! Please try again"}))})).catch((e=>{this.isFetching=!1,console.log(e)}))},handleFiltersChange(e){this.filters=e}}};const Re=(0,N.c)(Ve,[["render",n]]);var Te=Re}}]);
//# sourceMappingURL=100.f4a919b7.js.map