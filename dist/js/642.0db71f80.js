"use strict";(self["webpackChunkwsgbrand_app_v1"]=self["webpackChunkwsgbrand_app_v1"]||[]).push([[642],{1642:function(t,e,a){a.r(e),a.d(e,{default:function(){return dt}});var s=a(4108),l=a(9096),r=a(7764);const d=t=>((0,s.ED)("data-v-607b8912"),t=t(),(0,s.ii)(),t),i={class:"font-title"},n={key:0,class:"border"},o={class:"table table-striped table-borderless mb-0",style:{"font-weight":"500"}},c=d((()=>(0,s.QD)("thead",null,[(0,s.QD)("tr",{class:"table-dark"},[(0,s.QD)("th",{class:"ps-3 fw-bold text-start"},"Date"),(0,s.QD)("th",{class:"fw-bold text-start"},"Order"),(0,s.QD)("th",{class:"pe-3 fw-bold text-end"},"Dispatch")])],-1))),u={key:0},h=["data-bs-ledgermodelsid"],g={class:"ps-3 text-start"},m={key:1},p=d((()=>(0,s.QD)("td",{colspan:"4",class:"py-5 text-center"},[(0,s.QD)("span",null,"No data available based on current filter.")],-1))),b=[p],D={key:1},f={class:"table-dark"},y=d((()=>(0,s.QD)("td",{class:"ps-3 text-start fw-bold",style:{"min-width":"90px"}}," Total ",-1))),k={class:"text-start",style:{"min-width":"90px"}},v={class:"pe-3 text-end",style:{"min-width":"90px"}},Q={key:0,"aria-label":"Page navigation"},w={class:"pagination"},x=["onClick"],A=d((()=>(0,s.QD)("i",{class:"bi bi-chevron-left"},null,-1))),L=[A],W=["onClick"],C=d((()=>(0,s.QD)("i",{class:"bi bi-chevron-right"},null,-1))),S=[C],_=["onClick"],j={class:"table table-striped table-borderless"},q={key:0,class:"table-danger"},z={class:"ps-2"},F=d((()=>(0,s.QD)("i",{class:"bi bi-chevron-left"},null,-1))),P=d((()=>(0,s.QD)("span",{class:"ms-3"},"Not Yet Accepted",-1))),I={class:"pe-3 text-end"},T=d((()=>(0,s.QD)("span",{class:"smaller"},"pcs",-1))),E={class:"ps-2"},M=d((()=>(0,s.QD)("div",{class:"d-flex align-items-center"},[(0,s.QD)("i",{class:"pe-1 bi bi-plus fs-4 lh-1"}),(0,s.QD)("span",{style:{"margin-left":"-0.15rem"}},"Dispatch")],-1))),N=[M],$=d((()=>(0,s.QD)("span",{class:"ms-3"},"Ledger Balance Qty",-1))),Y={class:"pe-3 text-end"},O=d((()=>(0,s.QD)("span",{class:"smaller"},"pcs",-1))),V={key:1,class:"card mx-3 shadow"},K={class:"card-body"},B={class:"btn-group w-100"},U=d((()=>(0,s.QD)("button",{class:"btn btn-sm btn-success fw-bold",type:"submit"}," Submit ",-1))),J={class:"btn-group w-100"},G=d((()=>(0,s.QD)("button",{class:"btn btn-sm btn-success fw-bold",type:"submit"}," Submit ",-1))),H=d((()=>(0,s.QD)("div",{class:"modal fade",id:"ledgerImageModal",tabindex:"-1","aria-hidden":"true"},[(0,s.QD)("div",{class:"modal-dialog modal-fullscreen"},[(0,s.QD)("button",{type:"button",class:"btn h-100 w-100 p-0","data-bs-dismiss":"modal","aria-label":"Close"},[(0,s.QD)("img",{src:"https://placehold.co/400",class:"w-100",style:{"object-fit":"cover"}})])])],-1)));function R(t,e,a,d,p,A){const C=(0,s.E1)("LedgerFilters"),M=(0,s.E1)("router-link"),R=(0,s.E1)("LedgerForm"),X=(0,s.E1)("LedgerInfo");return(0,s.Wz)(),(0,s.An)("div",i,[(0,s.K2)(C,{product:A.ledger.product,info:{label1:"Total Order",label2:"Dispatch Done",value1:A.ledger.total_order,value2:A.ledger.total_dispatch},onLedgerFiltersChanged:A.handleFiltersChange},null,8,["product","info","onLedgerFiltersChanged"]),p.addDispatch||p.addAdjustment?(0,s.g1)("",!0):((0,s.Wz)(),(0,s.An)("div",n,[(0,s.QD)("table",o,[c,A.ledger.items&&A.ledger.items.data&&A.ledger.items.data.length?((0,s.Wz)(),(0,s.An)("tbody",u,[A.hasFilteredItems?((0,s.Wz)(!0),(0,s.An)(s.ae,{key:0},(0,s.mi)(A.filteredLedgerItems,((t,e)=>(0,s.wt)(((0,s.Wz)(),(0,s.An)("tr",{key:e,"data-bs-toggle":"offcanvas","data-bs-target":"#ledgerInfoModal","data-bs-ledgermodelsid":t.model_sid,"aria-controls":"ledgerInfoModal"},[(0,s.QD)("td",g,(0,l.WA)(A.formatDate(t.created_at)),1),(0,s.QD)("td",{colspan:"3",class:(0,l.WN)(["pe-3",[A.getTableDataClass(t),A.getActiveClass(t),{"text-danger":"adjustment"===t.model}]])},(0,l.WA)(t.quantity.toLocaleString()),3)],8,h)),[[r.Ub,A.shouldShow(t)]]))),128)):((0,s.Wz)(),(0,s.An)("tr",m,b))])):(0,s.g1)("",!0),A.ledger.items&&A.ledger.items.data&&A.ledger.items.data.length?((0,s.Wz)(),(0,s.An)("tfoot",D,[(0,s.QD)("tr",f,[y,(0,s.QD)("td",k,(0,l.WA)(A.calculateTotalOrder("order",A.ledger.items.data,"accepted")),1),(0,s.QD)("td",v,(0,l.WA)(A.calculateTotal("dispatch").toLocaleString()),1)])])):(0,s.g1)("",!0)]),A.ledger.items&&A.ledger.items.data&&A.ledger.items.data.length?((0,s.Wz)(),(0,s.An)("nav",Q,[(0,s.QD)("ul",w,[((0,s.Wz)(!0),(0,s.An)(s.ae,null,(0,s.mi)(p.visibleLinks,(t=>((0,s.Wz)(),(0,s.An)("li",{class:(0,l.WN)(["page-item flex-fill",{disabled:!t.url}]),key:t.label},[t.label.includes("Previous")?((0,s.Wz)(),(0,s.An)("a",{key:0,class:"page-link text-center text-dark",href:"#",onClick:(0,r.Y7)((e=>A.loadLedger(t.url)),["prevent"])},L,8,x)):t.label.includes("Next")?((0,s.Wz)(),(0,s.An)("a",{key:1,class:"page-link text-center text-dark",href:"#",onClick:(0,r.Y7)((e=>A.loadLedger(t.url)),["prevent"])},S,8,W)):((0,s.Wz)(),(0,s.An)("a",{key:2,href:"#",class:(0,l.WN)([{"text-primary fw-bold":this.activePage==t.label,"text-dark":this.activePage!=t.label},"page-link text-center"]),onClick:(0,r.Y7)((e=>A.loadLedger(t.url)),["prevent"])},(0,l.WA)(t.label),11,_))],2)))),128))])])):(0,s.g1)("",!0)])),(0,s.QD)("table",j,[(0,s.QD)("tbody",null,[A.ledger.unaccepted?((0,s.Wz)(),(0,s.An)("tr",q,[(0,s.QD)("td",z,[(0,s.K2)(M,{to:{name:"VendorOrders"},class:"btn btn-sm btn-dark"},{default:(0,s.Ql)((()=>[F])),_:1}),P]),(0,s.QD)("td",I,[(0,s.mY)((0,l.WA)(A.ledger.unaccepted?A.ledger.unaccepted.toLocaleString():0)+" ",1),T])])):(0,s.g1)("",!0),(0,s.QD)("tr",null,[(0,s.QD)("td",E,[(0,s.QD)("button",{class:"text-start btn btn-sm btn-dark px-1 w-90p",onClick:e[0]||(e[0]=(...t)=>A.showAddDispatch&&A.showAddDispatch(...t))},N),$]),(0,s.QD)("td",Y,[(0,s.mY)((0,l.WA)(A.ledger.balance_qty?A.ledger.balance_qty.toLocaleString():0)+" ",1),O])])])]),p.addDispatch||p.addAdjustment?((0,s.Wz)(),(0,s.An)("div",V,[(0,s.QD)("div",K,[p.addDispatch?((0,s.Wz)(),(0,s.An)("form",{key:0,onSubmit:e[2]||(e[2]=(0,r.Y7)((t=>A.postDispatch()),["prevent"])),method:"post"},[(0,s.K2)(R,{product:A.ledger.product,type:"dispatch",onFormData:A.handleFormData},null,8,["product","onFormData"]),(0,s.QD)("div",B,[(0,s.QD)("button",{class:"btn btn-sm btn-outline-dark fw-bold",type:"button",onClick:e[1]||(e[1]=(...t)=>A.showLedgerSummary&&A.showLedgerSummary(...t))}," Cancel "),U])],32)):(0,s.g1)("",!0),p.addAdjustment?((0,s.Wz)(),(0,s.An)("form",{key:1,onSubmit:e[4]||(e[4]=(0,r.Y7)((e=>t.postAdjustment()),["prevent"])),method:"post"},[(0,s.K2)(R,{product:A.ledger.product,type:"adjustment",onFormData:A.handleFormData},null,8,["product","onFormData"]),(0,s.QD)("div",J,[(0,s.QD)("button",{class:"btn btn-sm btn-outline-dark fw-bold",type:"button",onClick:e[3]||(e[3]=(...t)=>A.showLedgerSummary&&A.showLedgerSummary(...t))}," Cancel "),G])],32)):(0,s.g1)("",!0)])])):(0,s.g1)("",!0),H,(0,s.K2)(X,{items:A.ledger.items},null,8,["items"])])}a(3248);var X=a(8656),Z=a.n(X),tt=a(5456),et=a(4424),at=a(6878),st={name:"LedgerDetailPage",components:{LedgerFilters:tt.c,LedgerInfo:et.c,LedgerForm:at.c},data(){return{filters:[],formData:[],addDispatch:!1,addAdjustment:!1,total:0,activePage:1,visibleLinks:[]}},watch:{"ledger.items":{immediate:!0,handler(){this.calculateVisibleLinks()}},activePage(){this.calculateVisibleLinks()}},created(){console.log("Vendor LedgerDetailPage created"),this.loadLedger("",!0),console.log("Vendor LedgerDetailPage created")},mounted(){const t=document.getElementById("ledgerImageModal");t&&t.addEventListener("show.bs.modal",(e=>{const a=e.relatedTarget,s=a.getAttribute("data-bs-url"),l=t.querySelector(".modal-dialog img");l.src=s}))},computed:{ledger(){return this.$store.getters["vendor/ledger"]},filteredLedgerItems(){const t=new Date(this.filters.startDate),e=new Date(this.filters.endDate);return this.ledger.items.data.filter((a=>{const s=new Date(a.created_on);return s>=t&&s<=e}))},hasFilteredItems(){return this.filteredLedgerItems&&this.filteredLedgerItems.length>0}},methods:{calculateVisibleLinks(){const t=this.ledger.items.links.length-2;let e=Math.max(1,this.activePage-4),a=Math.min(t,this.activePage+3);t>8?a-e<7&&(1===e?a=8:a===t&&(e=t-7)):(e=1,a=t),this.visibleLinks=this.ledger.items.links.filter(((t,s)=>t.label.includes("Previous")||t.label.includes("Next")||s>=e&&s<=a))},loadLedger(t,e){this.activePage=1,e||(this.activePage=t.split("=")[1]),this.$store.dispatch("vendor/fetchProductLedger",{ledger:this.$route.params.ledger,page:this.activePage})},showAddDispatch(){this.addAdjustment=!1,this.addDispatch=!0},showAddAdjustment(){this.addDispatch=!1,this.addAdjustment=!0},showLedgerSummary(){this.addDispatch=!1,this.addAdjustment=!1},getTableDataClass(t){switch(t.model){case"order":return this.filters.order?"text-start":"text-danger";case"dispatch":return this.filters.dispatch?"text-end":"text-danger";case"adjustment":return this.againTry(t);default:return"text-end"}},againTry(t){switch(t.type){case"order":return this.filters.adjustment?"text-start":"text-danger";case"dispatch":return this.filters.adjustment?"text-end":"text-danger"}},handleInput(t){t&&"object"===typeof t&&(void 0===t.quantity&&this.$set(t,"quantity",0),t.quantity=Math.max(0,t.quantity))},getActiveClass(t){return{"text-primary":"issued"===t.status,"text-warning":"cancelled"===t.status,"text-dark":"accepted"===t.status}},shouldShow(t){let e=this.filters[t.model];return"ready"!==t.model&&"demand"!==t.model&&("adjustment"===t.model?e&&this.filters[t.type]:e)},calculateTotal(t){return this.ledger?.items?.data&&Array.isArray(this.ledger.items.data)&&this.filters[t]?this.ledger.items.data.reduce(((e,a)=>a.model===t?e+a.quantity:"adjustment"===a.model&&a.type===t&&this.filters["adjustment"]?e-a.quantity:e),0):0},calculateTotalOrder(t,e,a){if(e&&Array.isArray(e)){const s=e.filter((e=>e.model===t&&this.filters[t]&&e.status===a));return s.reduce(((t,e)=>t+e.quantity),0)}return 0},formatDate(t){const e={weekday:"short",month:"short",day:"numeric"},a=new Date(t).toLocaleDateString("en-US",e);return a},postDispatch(){if(this.ledger.product.options&&this.total>0){const t=this.ledger.product.options.map(((t,e)=>{const a=this.ledger.product.ranges.filter((e=>{const a=`${t.sid}_${e.sid}`;return this.formData.ranges[a]})),s=a.length>0?Math.max(Math.ceil(this.formData.quantity[e]/a.length),1):0;return a.map((e=>{const a=`${t.sid}_${e.sid}`;return{[a]:s}}))})).flat();let e=0,a=[];if(t.forEach((t=>{const s=Object.keys(t)[0],l=t[s];l&&l>0&&(e+=l,a.push(t))})),console.log(e,this.ledger.readyable_qty),e>this.ledger.readyable_qty)return void this.showQtyError("Quantity Error","Total quantity should not exceed "+this.ledger.dispatchable_qty+" pcs.");const s={ledger_sid:this.ledger.sid,content:this.formData.content,expected_at:this.formData.date,quantities:JSON.stringify(a)};this.$store.dispatch("factory/postNewDispatch",s),this.showLedgerSummary()}else console.log("Quantity total is 0 or less, or ledger is empty. Skipping post request.")},showQtyError(t,e){Z().fire({icon:"error",title:t,text:e})},handleFiltersChange(t){this.filters=t},handleFormData(t){this.formData=t.data,this.total=t.total}}},lt=a(4100);const rt=(0,lt.c)(st,[["render",R],["__scopeId","data-v-607b8912"]]);var dt=rt}}]);
//# sourceMappingURL=642.0db71f80.js.map