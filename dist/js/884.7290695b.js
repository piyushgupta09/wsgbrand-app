"use strict";(self["webpackChunkwsgbrand_app_v1"]=self["webpackChunkwsgbrand_app_v1"]||[]).push([[884],{7884:function(e,t,a){a.r(t),a.d(t,{default:function(){return pe}});var l=a(4108);const s={class:"w-100",style:{"overflow-x":"hidden"}},r={class:"row row-cols-2 row-cols-md-3 row-cols-xl-4 g-2"};function i(e,t,a,i,o,n){const d=(0,l.E1)("RunningFilter"),c=(0,l.E1)("product-card");return(0,l.Wz)(),(0,l.An)("div",s,[(0,l.K2)(d,{title:n.filteredStocks.length+" / "+o.ledgers.length,onOrderFilterChanged:n.handleFiltersChange},null,8,["title","onOrderFilterChanged"]),(0,l.QD)("div",r,[((0,l.Wz)(!0),(0,l.An)(l.ae,null,(0,l.mi)(n.filteredStocks,((e,t)=>((0,l.Wz)(),(0,l.Az)(c,{key:t,ledger:e,product:e.product,productIndex:t},null,8,["ledger","product","productIndex"])))),128))])])}var o=a(6376),n=a(9096),d=a(7764);const c={class:"navbar navbar-expand bg-body-tertiary p-0 border-bottom"},h={class:"d-flex flex-column px-3"},u={style:{"font-weight":"500"}},g={class:"small"},p={class:"navbar-collapse d-flex"},f={class:"navbar-nav ms-auto align-items-center"},m={class:"nav-item"},y={class:"nav-link form-check form-switch",style:{width:"30px"}},b={class:"d-flex flex-column justify-content-center align-items-center"},v={class:"small pt-1 text-muted",style:{"font-weight":"600","margin-left":"-2.4rem"}},w={class:"nav-item dropstart"},D=(0,l.QD)("a",{class:"nav-link pt-0",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},[(0,l.QD)("div",{class:"d-flex flex-column justify-content-center align-items-center"},[(0,l.QD)("i",{class:"bi bi-info-circle text-dark fs-5"}),(0,l.QD)("span",{class:"small text-muted",style:{"font-weight":"500"}},"Info")])],-1),x={class:"dropdown-menu"},Q={class:"dropdown-item"},k={class:"d-flex align-items-center py-1"},W={key:0,class:"px-1"},A={class:"ps-2"},S=(0,l.QD)("li",{class:"nav-item"},[(0,l.QD)("a",{class:"nav-link pt-0",href:"#",role:"button","data-bs-toggle":"collapse","data-bs-target":"#runningOrdersMenuCollapse","aria-expanded":"false","aria-controls":"runningOrdersMenuCollapse"},[(0,l.QD)("div",{class:"d-flex flex-column justify-content-center align-items-center"},[(0,l.QD)("i",{class:"bi bi-chevron-down text-dark fs-5"}),(0,l.QD)("span",{class:"small text-muted",style:{"font-weight":"500"}},"Menu")])])],-1),_={class:"collapse",id:"runningOrdersMenuCollapse"},F={class:"card card-body"},z={class:"form-floating mb-3"},B=(0,l.QD)("label",{for:"floatingInput"},"Search by name or code",-1),C={class:"form-floating"},H=(0,l.QD)("option",{selected:"",value:"default"},"Choose order stage",-1),O=["value"],q=(0,l.QD)("label",{for:"floatingSelect"},"Filter by order stage",-1);function L(e,t,a,s,r,i){return(0,l.Wz)(),(0,l.An)("div",null,[(0,l.QD)("nav",c,[(0,l.QD)("div",h,[(0,l.QD)("span",u,"Showing: "+(0,n.WA)(a.title),1),(0,l.QD)("span",g,(0,n.WA)(r.showHighStock?"Catelogs having balance order":"Catelogs that doesnot have order"),1)]),(0,l.QD)("div",p,[(0,l.QD)("ul",f,[(0,l.QD)("li",m,[(0,l.QD)("div",y,[(0,l.QD)("div",b,[(0,l.wt)((0,l.QD)("input",{class:"form-check-input",type:"checkbox",role:"switch","onUpdate:modelValue":t[0]||(t[0]=e=>r.showHighStock=e)},null,512),[[d.cV,r.showHighStock]]),(0,l.QD)("span",v,(0,n.WA)(r.showHighStock?"Running":"Assigned"),1)])])]),(0,l.QD)("li",w,[D,(0,l.QD)("ul",x,[((0,l.Wz)(!0),(0,l.An)(l.ae,null,(0,l.mi)(r.infos,((e,t)=>((0,l.Wz)(),(0,l.An)("li",{key:t},[(0,l.QD)("div",Q,[(0,l.QD)("div",k,[e.text?((0,l.Wz)(),(0,l.An)("div",W,(0,n.WA)(e.text),1)):((0,l.Wz)(),(0,l.An)("div",{key:1,class:(0,n.WN)(["rounded-circle",e.color]),style:{height:"20px",width:"20px"}},null,2)),(0,l.QD)("div",A,(0,n.WA)(e.name),1)])])])))),128))])]),S])])]),(0,l.QD)("div",_,[(0,l.QD)("div",F,[(0,l.QD)("div",z,[(0,l.wt)((0,l.QD)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>r.tagSearch=e),type:"search",class:"form-control",placeholder:"Search Stocks"},null,512),[[d.Og,r.tagSearch]]),B]),(0,l.QD)("div",C,[(0,l.wt)((0,l.QD)("select",{class:"form-select","onUpdate:modelValue":t[2]||(t[2]=e=>r.filterBy=e),"aria-label":"Floating label select example"},[H,((0,l.Wz)(!0),(0,l.An)(l.ae,null,(0,l.mi)(i.filteredInfos,((e,t)=>((0,l.Wz)(),(0,l.An)("option",{key:t,value:e.model},(0,n.WA)(e.name),9,O)))),128))],512),[[d.Ip,r.filterBy]]),q])])])])}var I={name:"RunningFilter",props:["title"],data(){return{showHighStock:!0,tagSearch:"",filterBy:"default",infos:[{filterable:!0,model:"Order",name:"New Order",color:"bg-danger"},{filterable:!0,model:"Ready",name:"New Ready",color:"bg-success"},{filterable:!0,model:"Demand",name:"New Demand",color:"bg-primary"},{filterable:!0,model:"Dispatch",name:"New Dispatch",color:"bg-warning"},{filterable:!1,name:"Ready More",text:"R"},{filterable:!1,name:"Dispatch More",text:"D"},{filterable:!1,name:"Balance Qty",text:"B"}],sortBys:[{name:{on:"Latest Order",off:"Oldest Order"},value:"default",selected:!0},{name:{on:"Highest Balance",off:"Lowest Balance"},value:"balance",selected:!1},{name:{on:"Highest Ready",off:"Lowest Ready"},value:"ready",selected:!1},{name:{on:"Highest Demand",off:"Lowest Demand"},value:"demand",selected:!1},{name:{on:"Highest Dispatch",off:"Lowest Dispatch"},value:"dispatch",selected:!1}]}},computed:{filteredInfos(){return this.infos.filter((e=>e.filterable))}},mounted(){this.emitFilters()},watch:{showHighStock(e,t){e!==t&&this.emitFilters()},tagSearch(e,t){e!==t&&this.emitFilters()},filterBy(e,t){e!==t&&this.emitFilters()},sortBys(e,t){e!==t&&this.emitFilters()}},methods:{updateSelection(e,t){this.sortBys[e].selected=t},emitFilters(){this.$emit("order-filter-changed",{showHighStock:this.showHighStock,tagSearch:this.tagSearch,filterBy:this.filterBy,sortBys:this.sortBys})}}},R=a(4100);const N=(0,R.c)(I,[["render",L]]);var M=N;const E={class:"col position-relative"},j=["id"],P={class:"carousel-inner",style:{height:"250px","max-height":"250px","overflow-y":"hidden"}},V=["id"],K=["src"],U={key:0,class:"position-absolute top-0 start-0 m-2"},$={class:"d-flex flex-column opacity-50"},T={class:"fw-bolder text-uppercase"},G={class:"d-flex flex-nowrap mt-1",id:"scroll",style:{"overflow-x":"scroll","overflow-y":"hidden"}},J=["data-bs-target","data-bs-slide-to","aria-current"],X=["src"],Y=["src"],Z=(0,l.QD)("div",{class:"d-flex flex-column justify-content-center fw-bold h-45p text-dark w-100 align-items-center"}," No Color Options ",-1),ee={class:"card-footer p-1 border-start border-top"},te={class:"row"},ae={class:"col-6 fw-bold"},le={class:"col-6 text-end fw-bold"},se={class:"col-6 small"},re={class:"col-6 small text-end"},ie={class:"position-absolute top-0 end-0 m-1"},oe={class:"d-flex flex-column"};function ne(e,t,a,s,r,i){const o=(0,l.E1)("router-link");return(0,l.Wz)(),(0,l.An)("div",E,[a.product.options&&a.product.options.length?((0,l.Wz)(),(0,l.An)("div",{key:0,id:"productImages"+a.productIndex,class:"carousel slide"},[(0,l.QD)("div",P,[((0,l.Wz)(!0),(0,l.An)(l.ae,null,(0,l.mi)(a.product.options,((e,t)=>((0,l.Wz)(),(0,l.An)("div",{key:t,id:"cardCarousel"+t,class:(0,n.WN)(["carousel-item position-relative",{active:0===t}])},[(0,l.K2)(o,{to:{name:"FactoryLedgerDetail",params:{ledger:a.ledger.sid}}},{default:(0,l.Ql)((()=>[(0,l.QD)("img",{src:e.preview,class:"of-cover w-100"},null,8,K),a.product.ranges&&a.product.ranges.length?((0,l.Wz)(),(0,l.An)("div",U,[(0,l.QD)("div",$,[((0,l.Wz)(!0),(0,l.An)(l.ae,null,(0,l.mi)(a.product.ranges,((e,t)=>((0,l.Wz)(),(0,l.An)("button",{key:t,type:"button",class:"btn btn-dark shadow wh-25 mb-1 p-0"},[(0,l.QD)("span",T,(0,n.WA)(e.abbr),1)])))),128))])])):(0,l.g1)("",!0)])),_:2},1032,["to"])],10,V)))),128))]),(0,l.QD)("div",G,[((0,l.Wz)(!0),(0,l.An)(l.ae,null,(0,l.mi)(a.product.options,((e,t)=>((0,l.Wz)(),(0,l.An)("button",{key:t,type:"button",class:(0,n.WN)(["rounded p-0 border me-1",{active:0===t}]),"data-bs-target":"#productImages"+a.productIndex,"data-bs-slide-to":t,"aria-current":0===t?"true":"false"},[(0,l.QD)("img",{src:e.image,class:"wh-40 of-cover",style:{scale:"1.6"}},null,8,X)],10,J)))),128))])],8,j)):((0,l.Wz)(),(0,l.Az)(o,{key:1,to:{name:"FactoryLedgerDetail",params:{ledger:a.ledger.sid}},class:"td-none"},{default:(0,l.Ql)((()=>[(0,l.QD)("img",{src:a.product.image,class:"of-cover w-100",style:{height:"250px","max-height":"250px","overflow-y":"hidden"}},null,8,Y),Z])),_:1},8,["to"])),(0,l.K2)(o,{to:{name:"FactoryLedgerDetail",params:{ledger:a.ledger.sid}},class:"td-none text-dark"},{default:(0,l.Ql)((()=>[(0,l.QD)("div",ee,[(0,l.QD)("div",te,[(0,l.QD)("div",ae,"#"+(0,n.WA)(a.ledger.product_code),1),(0,l.QD)("div",le,"B:"+(0,n.WA)(a.ledger.balance_qty),1),(0,l.QD)("div",se,"R:"+(0,n.WA)(a.ledger.readyable_qty),1),(0,l.QD)("div",re,"D:"+(0,n.WA)(a.ledger.dispatchable_qty),1)])])])),_:1},8,["to"]),(0,l.QD)("div",ie,[(0,l.QD)("div",oe,[a.product.last_activity?((0,l.Wz)(),(0,l.An)("i",{key:0,class:(0,n.WN)(["bi bi-circle-fill px-1",{"text-danger":"Order"===a.product.last_activity,"text-success":"Ready"===a.product.last_activity,"text-primary":"Demand"===a.product.last_activity,"text-warning":"Dispatch"===a.product.last_activity}])},null,2)):(0,l.g1)("",!0)])])])}var de={name:"ProductCard",props:{ledger:Object,product:Object,index:Number,productIndex:Number}};const ce=(0,R.c)(de,[["render",ne]]);var he=ce,ue={name:"LedgersPage",components:{RunningFilter:M,ProductCard:he},data(){return{filters:[],page:1,isFetching:!1,ledgers:[]}},mounted(){this.loadMore(),window.addEventListener("scroll",this.handleScroll)},unmounted(){window.removeEventListener("scroll",this.handleScroll)},computed:{filteredStocks(){let e=[];if(e=this.filters.showHighStock?this.ledgers.filter((e=>e.balance_qty)):this.ledgers.filter((e=>!e.balance_qty)),this.filters.tagSearch){const t=this.filters.tagSearch.toLowerCase();e=e.filter((e=>{const a=e.product.tags.split(",");return a.some((e=>e.toLowerCase().includes(t.trim())))}))}return"default"!==this.filters.filterBy&&(e=e.filter((e=>e.last_activity===this.filters.filterBy))),this.filters.sortBys&&this.filters.sortBys.length&&this.filters.sortBys.forEach((t=>{if(t.selected)switch(t.value){case"balance":e=e.slice().sort(((e,t)=>e.balance_qty-t.balance_qty));break;case"ready":e=e.slice().sort(((e,t)=>e.readyable_qty-t.readyable_qty));break;case"demand":e=e.slice().sort(((e,t)=>e.demandable_qty-t.demandable_qty));break;case"disptach":e=e.slice().sort(((e,t)=>e.dispatchable_qty-t.dispatchable_qty));break;default:break}})),e}},methods:{handleScroll(){const{scrollTop:e,scrollHeight:t,clientHeight:a}=document.documentElement;a+e>=t-5&&this.loadMore()},loadMore(){this.isFetching||(this.isFetching=!0,o.c.get(`party/ledgers?page=${this.page}`).then((e=>{"ok"===e.data.status?(this.ledgers=[...this.ledgers,...e.data.data.data],this.page++,this.isFetching=!1):"error"===e.data.status?(this.isFetching=!1,alert(e.data.message)):(this.isFetching=!1,alert("Something went wrong! Please try again"))})).catch((e=>{this.isFetching=!1,console.log(e),alert("Something went wrong! Please try again")})))},handleFiltersChange(e){this.filters=e}}};const ge=(0,R.c)(ue,[["render",i]]);var pe=ge}}]);
//# sourceMappingURL=884.7290695b.js.map