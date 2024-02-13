"use strict";(self["webpackChunkwsgbrand_app_v1"]=self["webpackChunkwsgbrand_app_v1"]||[]).push([[1700],{4080:function(e,t,a){a.r(t),a.d(t,{default:function(){return he}});var l=a(4108);const s={class:"w-100",style:{"overflow-x":"hidden"}},i={class:"row row-cols-2 row-cols-md-3 row-cols-xl-4 g-2"};function r(e,t,a,r,n,o){const c=(0,l.E1)("RunningFilter"),d=(0,l.E1)("product-card");return(0,l.Wz)(),(0,l.An)("div",s,[(0,l.K2)(c,{title:o.filteredStocks.length+" / "+n.ledgers.length,onOrderFilterChanged:o.handleFiltersChange},null,8,["title","onOrderFilterChanged"]),(0,l.QD)("div",i,[((0,l.Wz)(!0),(0,l.An)(l.ae,null,(0,l.mi)(o.filteredStocks,((e,t)=>((0,l.Wz)(),(0,l.Az)(d,{key:t,catalog:e,index:t},null,8,["catalog","index"])))),128))])])}var n=a(6376),o=a(9096),c=a(7764);const d={class:"navbar navbar-expand bg-body-tertiary p-0 border-bottom"},h={class:"d-flex flex-column px-3"},g={style:{"font-weight":"500"}},u={class:"small"},f={class:"navbar-collapse d-flex"},m={class:"navbar-nav ms-auto align-items-center"},p={class:"nav-item"},b={class:"nav-link form-check form-switch",style:{width:"30px"}},y={class:"d-flex flex-column justify-content-center align-items-center"},v={class:"small pt-1 text-muted",style:{"font-weight":"600","margin-left":"-2.4rem"}},w={class:"nav-item dropstart"},D=(0,l.QD)("a",{class:"nav-link pt-0",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},[(0,l.QD)("div",{class:"d-flex flex-column justify-content-center align-items-center"},[(0,l.QD)("i",{class:"bi bi-info-circle text-dark fs-5"}),(0,l.QD)("span",{class:"small text-muted",style:{"font-weight":"500"}},"Info")])],-1),Q={class:"dropdown-menu"},k={class:"dropdown-item"},x={class:"d-flex align-items-center py-1"},S={key:0,class:"px-1"},W={class:"ps-2"},A=(0,l.QD)("li",{class:"nav-item"},[(0,l.QD)("a",{class:"nav-link pt-0",href:"#",role:"button","data-bs-toggle":"collapse","data-bs-target":"#runningOrdersMenuCollapse","aria-expanded":"false","aria-controls":"runningOrdersMenuCollapse"},[(0,l.QD)("div",{class:"d-flex flex-column justify-content-center align-items-center"},[(0,l.QD)("i",{class:"bi bi-chevron-down text-dark fs-5"}),(0,l.QD)("span",{class:"small text-muted",style:{"font-weight":"500"}},"Menu")])])],-1),_={class:"collapse",id:"runningOrdersMenuCollapse"},F={class:"card card-body"},B={class:"form-floating mb-3"},C=(0,l.QD)("label",{for:"floatingInput"},"Search by name or code",-1),z={class:"form-floating mb-3"},q=(0,l.QD)("option",{selected:"",value:"default"},"Choose order stage",-1),H=["value"],O=(0,l.QD)("label",{for:"floatingSelect"},"Filter by order stage",-1),L={class:"d-flex flex-column mb-3"},E=(0,l.QD)("p",{class:"mb-2 fw-bold"},"Sort By",-1),I=["id","checked","onChange"],M=["for"],N={class:"btn-group w-100"},j=(0,l.QD)("button",{class:"btn btn-outline-dark",type:"reset"},"Reset",-1);function R(e,t,a,s,i,r){return(0,l.Wz)(),(0,l.An)("div",null,[(0,l.QD)("nav",d,[(0,l.QD)("div",h,[(0,l.QD)("span",g,"Showing: "+(0,o.WA)(a.title),1),(0,l.QD)("span",u,(0,o.WA)(i.showHighStock?"Catelogs having balance order":"Catelogs that doesnot have order"),1)]),(0,l.QD)("div",f,[(0,l.QD)("ul",m,[(0,l.QD)("li",p,[(0,l.QD)("div",b,[(0,l.QD)("div",y,[(0,l.wt)((0,l.QD)("input",{class:"form-check-input",type:"checkbox",role:"switch","onUpdate:modelValue":t[0]||(t[0]=e=>i.showHighStock=e)},null,512),[[c.cV,i.showHighStock]]),(0,l.QD)("span",v,(0,o.WA)(i.showHighStock?"Running":"Assigned"),1)])])]),(0,l.QD)("li",w,[D,(0,l.QD)("ul",Q,[((0,l.Wz)(!0),(0,l.An)(l.ae,null,(0,l.mi)(i.infos,((e,t)=>((0,l.Wz)(),(0,l.An)("li",{key:t},[(0,l.QD)("div",k,[(0,l.QD)("div",x,[e.text?((0,l.Wz)(),(0,l.An)("div",S,(0,o.WA)(e.text),1)):((0,l.Wz)(),(0,l.An)("div",{key:1,class:(0,o.WN)(["rounded-circle",e.color]),style:{height:"20px",width:"20px"}},null,2)),(0,l.QD)("div",W,(0,o.WA)(e.name),1)])])])))),128))])]),A])])]),(0,l.QD)("div",_,[(0,l.QD)("div",F,[(0,l.QD)("div",B,[(0,l.wt)((0,l.QD)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>i.tagSearch=e),type:"search",class:"form-control",placeholder:"Search Stocks"},null,512),[[c.Og,i.tagSearch]]),C]),(0,l.QD)("div",z,[(0,l.wt)((0,l.QD)("select",{class:"form-select","onUpdate:modelValue":t[2]||(t[2]=e=>i.filterBy=e),"aria-label":"Floating label select example"},[q,((0,l.Wz)(!0),(0,l.An)(l.ae,null,(0,l.mi)(r.filteredInfos,((e,t)=>((0,l.Wz)(),(0,l.An)("option",{key:t,value:e.model},(0,o.WA)(e.name),9,H)))),128))],512),[[c.Ip,i.filterBy]]),O]),(0,l.QD)("div",L,[E,((0,l.Wz)(!0),(0,l.An)(l.ae,null,(0,l.mi)(i.sortBys,((e,t)=>((0,l.Wz)(),(0,l.An)("div",{class:"form-check form-switch",key:t},[(0,l.QD)("input",{class:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheck"+t,checked:e.selected,onChange:a=>r.updateSelection(t,!e.selected)},null,40,I),(0,l.QD)("label",{class:"form-check-label",for:"flexSwitchCheck"+t},(0,o.WA)(e.selected?e.name.on:e.name.off),9,M)])))),128))]),(0,l.QD)("div",N,[j,(0,l.QD)("button",{class:"btn btn-outline-success",onClick:t[3]||(t[3]=(...e)=>r.emitFilters&&r.emitFilters(...e))},"Apply")])])])])}var P={name:"RunningFilter",props:["title"],data(){return{showHighStock:!0,tagSearch:"",filterBy:"default",infos:[{filterable:!0,model:"Order",name:"New Order",color:"bg-danger"},{filterable:!0,model:"Dispatch",name:"New Dispatch",color:"bg-warning"},{filterable:!1,name:"Balance Qty",text:"B"}],sortBys:[{name:{on:"Latest Order",off:"Oldest Order"},value:"default",selected:!0},{name:{on:"Highest Balance",off:"Lowest Balance"},value:"balance",selected:!1},{name:{on:"Highest Dispatch",off:"Lowest Dispatch"},value:"dispatch",selected:!1}]}},computed:{filteredInfos(){return this.infos.filter((e=>e.filterable))}},mounted(){this.emitFilters()},watch:{showHighStock(e,t){e!==t&&this.emitFilters()},tagSearch(e,t){e!==t&&this.emitFilters()},filterBy(e,t){e!==t&&this.emitFilters()},sortBys(e,t){e!==t&&this.emitFilters()}},methods:{updateSelection(e,t){this.sortBys[e].selected=t},emitFilters(){this.$emit("order-filter-changed",{showHighStock:this.showHighStock,tagSearch:this.tagSearch,filterBy:this.filterBy,sortBys:this.sortBys})}}},V=a(4100);const U=(0,V.c)(P,[["render",R]]);var K=U;const $={class:"col"},T=["id"],G={class:"carousel-inner position-relative"},J=["id"],X=["src"],Y={class:"d-flex my-1 px-1 border-start",id:"scroll",style:{"overflow-x":"auto"}},Z=["data-bs-target","data-bs-slide-to","aria-current"],ee=["src"],te={class:"card-footer p-1 border-start border-top"},ae={class:"row"},le={class:"col-6 fw-bold"},se={class:"col-6 text-end fw-bold"};function ie(e,t,a,s,i,r){const n=(0,l.E1)("router-link");return(0,l.Wz)(),(0,l.An)("div",$,[(0,l.K2)(n,{to:{name:"VendorLedgerDetail",params:{ledger:a.catalog.sid}},class:"text-dark text-decoration-none"},{default:(0,l.Ql)((()=>[(0,l.QD)("div",{id:"productImages"+a.index,class:"carousel slide"},[(0,l.QD)("div",G,[((0,l.Wz)(!0),(0,l.An)(l.ae,null,(0,l.mi)(a.catalog.product.options,((e,t)=>((0,l.Wz)(),(0,l.An)("div",{id:"cardCarousel"+t,class:(0,o.WN)(["carousel-item",{active:0===t}]),key:t},[(0,l.QD)("img",{src:e.preview,class:"w-100",style:{"object-fit":"cover"}},null,8,X)],10,J)))),128)),a.catalog.balance_qty?((0,l.Wz)(),(0,l.An)("div",{key:0,style:{height:"1rem",width:"1rem"},class:(0,o.WN)(["position-absolute end-0 rounded-circle m-2",{"bg-danger":"Order"===a.catalog.last_activity&&a.catalog.balance_qty,"bg-success":"Ready"===a.catalog.last_activity&&a.catalog.balance_qty,"bg-primary":"Demand"===a.catalog.last_activity&&a.catalog.balance_qty}])},null,2)):(0,l.g1)("",!0)]),(0,l.QD)("div",Y,[((0,l.Wz)(!0),(0,l.An)(l.ae,null,(0,l.mi)(a.catalog.product.options,((e,t)=>((0,l.Wz)(),(0,l.An)("button",{type:"button",class:(0,o.WN)(["p-0 border me-1 overflow-hidden",{active:0===t}]),style:{width:"50px",height:"50px"},"data-bs-target":"#productImages"+a.index,"data-bs-slide-to":t,"aria-current":0===t,key:t},[(0,l.QD)("img",{src:e.image,class:"w-100 h-100",style:{"object-fit":"cover",scale:"2"}},null,8,ee)],10,Z)))),128))])],8,T),(0,l.QD)("div",te,[(0,l.QD)("div",ae,[(0,l.QD)("div",le,"#"+(0,o.WA)(a.catalog.product_code),1),(0,l.QD)("div",se,(0,o.WA)(a.catalog.balance_qty),1)])])])),_:1},8,["to"])])}var re={name:"ProductCard",props:{catalog:Object,index:Number}};const ne=(0,V.c)(re,[["render",ie]]);var oe=ne,ce={name:"LedgersPage",components:{RunningFilter:K,ProductCard:oe},data(){return{filters:[],page:1,isFetching:!1,ledgers:[]}},mounted(){this.loadMore(),window.addEventListener("scroll",this.handleScroll)},unmounted(){window.removeEventListener("scroll",this.handleScroll)},computed:{filteredStocks(){let e=[];if(e=this.filters.showHighStock?this.ledgers.filter((e=>e.balance_qty)):this.ledgers.filter((e=>!e.balance_qty)),this.filters.tagSearch){const t=this.filters.tagSearch.toLowerCase();e=e.filter((e=>{const a=e.product.tags.split(",");return console.log(a),a.some((e=>e.toLowerCase().includes(t.trim())))}))}return"default"!==this.filters.filterBy&&(e=e.filter((e=>e.last_activity===this.filters.filterBy))),this.filters.sortBys&&this.filters.sortBys.length&&this.filters.sortBys.forEach((t=>{if(t.selected)switch(t.value){case"balance":e=e.slice().sort(((e,t)=>e.balance_qty-t.balance_qty));break;case"ready":e=e.slice().sort(((e,t)=>e.readyable_qty-t.readyable_qty));break;case"demand":e=e.slice().sort(((e,t)=>e.demandable_qty-t.demandable_qty));break;case"disptach":e=e.slice().sort(((e,t)=>e.dispatchable_qty-t.dispatchable_qty));break;default:break}})),e}},methods:{handleScroll(){const{scrollTop:e,scrollHeight:t,clientHeight:a}=document.documentElement;a+e>=t-5&&this.loadMore()},loadMore(){this.isFetching||(this.isFetching=!0,n.c.get(`party/ledgers?page=${this.page}`).then((e=>{"ok"===e.data.status?(this.ledgers=[...this.ledgers,...e.data.data.data],this.page++,this.isFetching=!1):"error"===e.data.status?(this.isFetching=!1,alert(e.data.message)):(this.isFetching=!1,alert("Something went wrong! Please try again"))})).catch((e=>{this.isFetching=!1,console.log(e),alert("Something went wrong! Please try again")})))},handleFiltersChange(e){this.filters=e}}};const de=(0,V.c)(ce,[["render",r]]);var he=de}}]);
//# sourceMappingURL=1700.b2d4452e.js.map