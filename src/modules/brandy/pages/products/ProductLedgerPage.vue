<template>
    <div class="font-title mb-3">
        
        <LedgerFilters 
            :product="ledger.product"
            :info="{
                label1: 'Ready Done',
                label2: 'Dispatch Done',
                value1: ledger.total_ready,
                value2: ledger.total_dispatch,
            }"
            @ledger-filters-changed="handleFiltersChange" 
        />

        <div v-if="!addOrder && !addDemand && !addAdjustment" class="border">
            <table class="table table-striped table-borderless mb-0" style="font-weight: 500">
                <thead>
                    <tr class="table-dark">
                        <th class="ps-3 fw-bold text-start">Date</th>
                        <th class="fw-bold text-start">Order</th>
                        <th v-if="!isVendor" class="fw-bold text-center">Ready</th>
                        <th v-if="!isVendor" class="pe-3 fw-bold text-end">Demand</th>
                        <th v-if="isVendor" class="pe-3 fw-bold text-end">Dispatch</th>
                    </tr>
                </thead>

                <!-- Check if there are any ledger items -->
                <tbody v-if="ledger.items && ledger.items.data && ledger.items.data.length">
                    <!-- Check if filteredLedgerItems has items -->
                    <template v-if="hasFilteredItems">
                        <tr v-show="shouldShow(ledgerItem)" v-for="(ledgerItem, ledgerItemIndex) in filteredLedgerItems"
                            :key="ledgerItemIndex" data-bs-toggle="offcanvas" data-bs-target="#ledgerInfoModal"
                            :data-bs-ledgermodelsid="ledgerItem.model_sid" aria-controls="ledgerInfoModal">
                            <td class="ps-3 text-start small">
                                {{ formatDate(ledgerItem.created_at) }}
                            </td>
                            <td colspan="3" class="pe-3" :class="[
                                getTableDataClass(ledgerItem),
                                getActiveClass(ledgerItem),
                                { 'text-danger': ledgerItem.model === 'adjustment' },
                            ]">
                                {{ ledgerItem.quantity.toLocaleString() }}
                            </td>
                        </tr>
                    </template>
                    <!-- No data available due to filter conditions -->
                    <tr v-else>
                        <td colspan="4" class="py-5 text-center">
                            <span>No data available based on current filter.</span>
                        </td>
                    </tr>
                </tbody>

                <!-- No ledger items found, show 'Place First Order' button -->
                <tbody v-else>
                    <tr>
                        <td :colspan="tableColspan" class="py-5 text-center">
                            <div class="d-flex flex-column align-items-center justify-content-center">
                                <span>No ledger entries found.</span>
                                <button class="btn btn-sm btn-dark fw-bold" @click="showAddOrder">
                                    Place First Order
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>

                <tfoot v-if="ledger.items && ledger.items.data && ledger.items.data.length">
                    <tr class="table-dark">
                        <td class="ps-3 text-start fw-bold" style="min-width: 90px">
                            Total
                        </td>
                        <td class="text-start" style="min-width: 90px">
                            {{ calculateTotalOrder('order', ledger.items.data, 'accepted') }}
                        </td>
                        <td v-if="!isVendor" class="text-center" style="min-width: 90px">
                            {{ calculateTotal("ready").toLocaleString() }}
                        </td>
                        <td v-if="!isVendor" class="pe-3 text-end" style="min-width: 90px">
                            {{ calculateTotal("demand").toLocaleString() }}
                        </td>
                        <td v-if="isVendor" class="pe-3 text-end" style="min-width: 90px">
                            {{ calculateTotal("dispatch").toLocaleString() }}
                        </td>
                    </tr>
                </tfoot>
                
            </table>

            <!-- Pagination -->
            <nav v-if="ledger.items && ledger.items.data && ledger.items.data.length" aria-label="Page navigation">
                <ul class="pagination">
                    <li class="page-item flex-fill" v-for="link in visibleLinks" :key="link.label"
                        :class="{ disabled: !link.url }">
                        <a class="page-link text-center text-dark" href="#" v-if="link.label.includes('Previous')"
                            @click.prevent="loadLedger(link.url)">
                            <i class="bi bi-chevron-left"></i>
                        </a>
                        <a class="page-link text-center text-dark" href="#" v-else-if="link.label.includes('Next')"
                            @click.prevent="loadLedger(link.url)">
                            <i class="bi bi-chevron-right"></i>
                        </a>
                        <a href="#" :class="{
                            'text-primary fw-bold': this.activePage == link.label,
                            'text-dark': this.activePage != link.label,
                        }" class="page-link text-center" v-else @click.prevent="loadLedger(link.url)">
                            {{ link.label }}
                        </a>
                    </li>
                </ul>
            </nav>

        </div>

        <table class="table table-striped table-borderless font-app">
            <tbody>
                <tr v-if="ledger.unaccepted" class="table-danger">
                    <td class="ps-2">
                        <button class="btn btn-sm btn-dark" @click="goToOrder">
                            <i class="bi bi-chevron-right"></i>
                        </button>
                        <span class="ms-3">Not Yet Accepted</span>
                    </td>
                    <td class="pe-3 text-end">
                        {{
                            ledger.unaccepted ? ledger.unaccepted.toLocaleString() : 0
                        }}
                        <span class="smaller">pcs</span>
                    </td>
                </tr>
                <tr>
                    <td class="ps-2">
                        <button class="text-start btn btn-sm btn-dark px-1 w-90p" 
                            @click="showAddOrder">
                            <div class="d-flex align-items-center">
                                <i class="pe-1 bi bi-plus fs-4 lh-1"></i>
                                <span style="margin-left: -0.15rem">Order</span>
                            </div>
                        </button>
                        <span class="ms-3">Order in Production</span>
                    </td>
                    <td class="pe-3 text-end">
                        {{
                            ledger.readyable_qty ? ledger.readyable_qty.toLocaleString() : 0
                        }}
                        <span class="smaller">pcs</span>
                    </td>
                </tr>
                <tr v-if="isFactoryLedger">
                    <td class="ps-2">
                        <button class="text-start btn btn-sm btn-dark px-1 w-90p" 
                            @click="showAddDemand">
                            <div class="d-flex align-items-center">
                                <i class="pe-1 bi bi-plus fs-4 lh-1"></i>
                                <span style="margin-left: -0.15rem">Demand</span>
                            </div>
                        </button>
                        <span class="ms-3">Ready for Demand</span>
                    </td>
                    <td class="pe-3 text-end">
                        {{
                            ledger.demandable_qty
                            ? ledger.demandable_qty.toLocaleString()
                            : 0
                        }}
                        <span class="smaller">pcs</span>
                    </td>
                </tr>
                <tr>
                    <td class="ps-2">
                        <button v-if="!isVendor" class="text-start btn btn-sm btn-dark px-1 w-90p" 
                            @click="showAddAdjustment">
                            <div class="d-flex align-items-center">
                                <i class="pe-1 bi bi-plus fs-4 lh-1"></i>
                                <span style="margin-left: -0.15rem">Adjust</span>
                            </div>
                        </button>
                        <span class="ms-3">Ledger Balance Qty</span>
                    </td>
                    <td class="pe-3 text-end">
                        {{ ledger.balance_qty ? ledger.balance_qty.toLocaleString() : 0 }}
                        <span class="smaller">pcs</span>
                    </td>
                </tr>
            </tbody>
        </table>

        <div v-if="addOrder || addDemand || addAdjustment" class="card mx-3 shadow">
            <div class="card-body">
                <form v-if="addOrder" @submit.prevent="postOrder()" method="post">
                    <LedgerForm :product="ledger.product" type="order" @formData="handleFormData" :isFactoryLedger="isFactoryLedger" />
                    <div class="btn-group w-100">
                        <button class="btn btn-sm btn-outline-dark fw-bold" type="button" @click="showLedgerSummary">
                            Cancel
                        </button>
                        <button class="btn btn-sm btn-success fw-bold" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
                <form v-if="addDemand && isFactoryLedger" @submit.prevent="postDemand()" method="post">
                    <LedgerForm :product="ledger.product" type="demand" @formData="handleFormData" :isFactoryLedger="isFactoryLedger" />
                    <div class="btn-group w-100">
                        <button class="btn btn-sm btn-outline-dark fw-bold" type="button" @click="showLedgerSummary">
                            Cancel
                        </button>
                        <button class="btn btn-sm btn-success fw-bold" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
                <form v-if="addAdjustment" @submit.prevent="postAdjustment()" method="post">
                    <LedgerForm :product="ledger.product" :ledger="ledger" type="adjustment" @formData="handleFormData" :isFactoryLedger="isFactoryLedger" />
                    <div class="btn-group w-100">
                        <button class="btn btn-sm btn-outline-dark fw-bold" type="button" @click="showLedgerSummary">
                            Cancel
                        </button>
                        <button class="btn btn-sm btn-success fw-bold" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <div class="modal fade" id="ledgerImageModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen">
                <button type="button" class="btn h-100 w-100 p-0" data-bs-dismiss="modal" aria-label="Close">
                    <img src="https://placehold.co/400" class="w-100" style="object-fit: cover" />
                </button>
            </div>
        </div>

        <LedgerInfo :items="ledger.items" />

    </div>
</template>

<script>
import "sweetalert2/dist/sweetalert2.min.css";
import Swal from "sweetalert2";
import LedgerFilters from "@/components/LedgerFilters.vue";
import LedgerInfo from "@/components/LedgerInfo.vue";
import LedgerForm from "@/components/LedgerForm.vue";

export default {
    name: "FactoryLedger",
    props: {
        module: {
            type: String,
            default: "brand",
        },
    },
    components: {
        LedgerFilters,
        LedgerInfo,
        LedgerForm,
    },
    data() {
        return {
            filters: [],
            formData: [],
            addOrder: false,
            addDemand: false,
            addAdjustment: false,
            total: 0,
            activePage: 1,
            visibleLinks: [], // Links to be actually rendered in the pagination
        };
    },
    watch: {
        'ledger.items': {
            immediate: true,
            handler() {
                this.calculateVisibleLinks();
            },
        },
        activePage() {
            this.calculateVisibleLinks();
        },
    },
    created() {
        this.loadLedger("", true);
        this.$store.dispatch('brandy/setShowBottomNav', true);
    },
    mounted() {
        const productImageModal = document.getElementById("ledgerImageModal");
        if (productImageModal) {
            productImageModal.addEventListener("show.bs.modal", (event) => {
                const triggerElement = event.relatedTarget;
                const imageUrl = triggerElement.getAttribute("data-bs-url");
                const modalImage = productImageModal.querySelector(".modal-dialog img");
                modalImage.src = imageUrl;
            });
        }
    },
    computed: {
        ledger() {
            return this.$store.getters["brandy/ledger"];
        },
        isFactoryLedger() {
            if (this.ledger.party_id === undefined) {
                return false;
            }
            return this.ledger.party_id.type === "Product Factory";
        },
        filteredLedgerItems() {
            const startDate = new Date(this.filters.startDate);
            const endDate = new Date(this.filters.endDate);
            return this.ledger.items.data.filter((item) => {
                const createdAt = new Date(item.created_on);
                return createdAt >= startDate && createdAt <= endDate;
            });
        },
        hasFilteredItems() {
            return this.filteredLedgerItems && this.filteredLedgerItems.length > 0;
        },
        isVendor() {
            if (this.ledger.party_id === undefined) {
                return false;
            }
            return this.ledger.party_id.type === "Product Vendor";
        },
        tableColspan() {
            return this.isVendor ? 3 : 4;
        },
        hasErrors() {
            return Object.keys( this.$store.getters.errors).length > 0;
        },
    },
    methods: {
        calculateVisibleLinks() {

            //return if ledger.items.links is not available
            if (!this.ledger.items || !this.ledger.items.links) {
                return;
            }

            const totalPages = this.ledger.items.links.length - 2; // Assuming first and last links are "Previous" and "Next"
            let startPage = Math.max(1, this.activePage - 4);
            let endPage = Math.min(totalPages, this.activePage + 3);

            if (totalPages > 8) {
                if (endPage - startPage < 7) {
                    // Adjust range to maintain 8 links when near start or end
                    if (startPage === 1) {
                        endPage = 8;
                    } else if (endPage === totalPages) {
                        startPage = totalPages - 7;
                    }
                }
            } else {
                startPage = 1;
                endPage = totalPages;
            }

            this.visibleLinks = this.ledger.items.links.filter((link, index) => {
                return (
                    link.label.includes('Previous') ||
                    link.label.includes('Next') ||
                    (index >= startPage && index <= endPage)
                );
            });
        },
        loadLedger(pageurl, firstload) {
            // pageurl, firstload, preventDefault
            // Your method to load ledger based on the URL, and potentially prevent default link action
            // if (preventDefault) {
            //     event.preventDefault();
            // }

            this.activePage = 1;
            if (!firstload) {
                this.activePage = pageurl.split("=")[1];
            }
            this.$store.dispatch("brandy/fetchProductLedger", {
                ledger: this.$route.params.ledger,
                page: this.activePage,
            });
        },
        showAddOrder() {
            this.addAdjustment = false;
            this.addDemand = false;
            this.addOrder = true;
        },
        showAddDemand() {
            this.addAdjustment = false;
            this.addOrder = false;
            this.addDemand = true;
        },
        showAddAdjustment() {
            this.addOrder = false;
            this.addDemand = false;
            this.addAdjustment = true;
        },
        showLedgerSummary() {
            this.addOrder = false;
            this.addDemand = false;
            this.addAdjustment = false;
        },
        getTableDataClass(order) {
            switch (order.model) {
                case "order":
                    return this.filters.order ? "text-start" : "text-danger";
                case "ready":
                    return this.filters.ready ? "text-center" : "text-danger";
                case "demand":
                    return this.filters.demand ? "text-end" : "text-danger";
                case "adjustment":
                    return this.againTry(order);
                default:
                    return "text-end";
            }
        },
        againTry(order) {
            switch (order.type) {
                case "order":
                    return this.filters.adjustment ? "text-start" : "text-danger";
                case "ready":
                    return this.filters.adjustment ? "text-center" : "text-danger";
                case "demand":
                    return this.filters.adjustment ? "text-end" : "text-danger";
            }
        },
        //
        handleInput(color) {
            if (color && typeof color === "object") {
                // Ensure the color object and quantity property are defined
                if (color.quantity === undefined) {
                    this.$set(color, "quantity", 0); // Set a default value if quantity is undefined
                }

                // Ensure the entered value is not less than 0
                color.quantity = Math.max(0, color.quantity);
            }
        },
        getActiveClass(order) {
            return {
                "text-primary": order.status === "issued",
                "text-warning": order.status === "cancelled",
                "text-dark": order.status === "accepted",
            };
        },
        shouldShow(ledgerItem) {
            if (this.ledger.party_id.type !== 'Product Vendor' && ledgerItem.model === 'dispatch') {
                return false;
            }

            if (this.ledger.party_id.type === 'Product Vendor' && ledgerItem.model === 'ready') {
             return false;   
            }

            if (this.ledger.party_id.type === 'Product Vendor' && ledgerItem.model === 'demand') {
             return false;   
            }

            let result = this.filters[ledgerItem.model];
            if (ledgerItem.model === "adjustment") {
                return result && this.filters[ledgerItem.type];
            } else {
                return result;
            }
        },
        calculateTotal(model) {
            // Check for the necessary conditions using optional chaining
            if (
                !this.ledger?.items?.data ||
                !Array.isArray(this.ledger.items.data) ||
                !this.filters[model]
            ) {
                return 0;
            }

            // Use reduce directly without a separate filter step
            return this.ledger.items.data.reduce((total, item) => {
                // Add item quantity if the item matches the model or is an adjustment of the same type
                if (item.model === model) {
                    return total + item.quantity;
                } else if (
                    item.model === "adjustment" &&
                    item.type === model &&
                    this.filters["adjustment"]
                ) {
                    return total - item.quantity;
                }
                return total; // Otherwise, keep the total unchanged
            }, 0);
        },
        calculateTotalOrder(model, items, status) {
            if (items && Array.isArray(items)) {
                const filteredItems = items.filter((order) => (order.model === model) && this.filters[model] && (order.status === status));
                return filteredItems.reduce((total, order) => total + order.quantity, 0);
            } else {
                return 0;
            }
        },
        formatDate(dateTimeString) {
            const options = {
                weekday: "short",
                month: "short",
                day: "numeric",
            };
            const formattedTime = new Date(dateTimeString).toLocaleDateString(
                "en-US",
                options
            );
            return formattedTime;
        },
        validateForm() {
            let isValid = true;
            this.errors = {}; // Reset errors
            
            // Validate content
            if (this.formData.content && this.formData.content.length > 255) {
                this.errors.content = 'Content must be 255 characters or less.';
                isValid = false;
            }

            // Validate ledger_sid (example validation, replace with actual logic to check existence)
            if (!this.formData.ledger_sid) {
                this.errors.ledger_sid = 'Ledger SID is required.';
                isValid = false;
            }
            
            // Validate quantities
            if (!this.formData.quantities) {
                this.errors.quantities = 'Quantities are required.';
                isValid = false;
            }
            
            // Validate expected_at
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const oneMonthFromNow = new Date(today);
            oneMonthFromNow.setMonth(oneMonthFromNow.getMonth() + 1);

            const selectedDate = new Date(this.formData.date);

            if (selectedDate < today || selectedDate > oneMonthFromNow) {
                this.errors.date = 'Date must be today or within the next month.';
                isValid = false;
            }
            
            return isValid;
        },
        postOrder() {
            if (this.ledger.product.active) {
                this.postCommon('brandy/postNewOrder');
            } else {
                Swal.fire({
                    icon: "error",
                    title: "In Draft Mode",
                    text: "This product is in draft mode. Please activate the product first.",
                });
            }
        },
        postDemand() {
            this.postCommon('brandy/postNewDemand');
        },
        postAdjustment() {
            if (this.ledger.product.options && this.total > 0) {

                const quantities = this.ledger.product.options
                    .map((color, index) => {
                        const selectedRanges = this.ledger.product.ranges
                            .filter(size => this.formData.ranges[`${color.sid}_${size.sid}`]);

                        let quantityPerRange = 0;
                        if (selectedRanges.length > 0) {
                            const totalQuantity = parseInt(this.formData.quantity[index]) || 0;
                            quantityPerRange = Math.max(Math.ceil(totalQuantity / selectedRanges.length), 0);
                        }

                        return selectedRanges.map(size => {
                            const key = `${color.sid}_${size.sid}`;
                            return { [key]: quantityPerRange };
                        });
                    })
                    .flat();

                // loop thru quantities and check that value should not be undefined or null or Nan
                // also compute total quantity and is should not exceed ledger.readeable_aty
                let totalQty = 0;
                let checkQuantities = [];
                quantities.forEach((quantity) => {
                    const key = Object.keys(quantity)[0];
                    const value = quantity[key];
                    if (value && value > 0) {
                        totalQty += value;
                        checkQuantities.push(quantity);
                    }
                });

                if (this.formData.adjtype === 'order' && totalQty > this.ledger.readyable_qty) {
                    this.showQtyError(
                        "Quantity Error",
                        "Total quantity should not exceed " + this.ledger.readyable_qty + " pcs."
                    );
                    return;
                }

                if (this.formData.adjtype === 'demand' && totalQty > this.ledger.dispatchable_qty) {
                    this.showQtyError(
                        "Quantity Error",
                        "Total quantity should not exceed " + this.ledger.dispatchable_qty + " pcs."
                    );
                    return;
                }
                
                const data = {
                    ledger_sid: this.ledger.sid,
                    content: this.formData.content,
                    type: this.formData.adjtype,
                    expected_at: this.formData.date,
                    tolerance: this.formData.tolerance,
                    product: this.ledger.product.slug,
                    quantities: JSON.stringify(checkQuantities),
                };

                console.log(data);
                
                // Dispatch the action
                this.$store.dispatch('brandy/postNewAdjustment', data);

                // Close the form
                this.showLedgerSummary();

            } else {
                console.log("Quantity total is 0 or less, or ledger is empty. Skipping post request.");
            }
        },
        postCommon(actionType) {
            if (this.ledger.product.options && this.total > 0) {
                const quantities = this.ledger.product.options
                    .map((color, index) => {
                        const selectedRanges = this.ledger.product.ranges
                            .filter(size => this.formData.ranges[`${color.sid}_${size.sid}`]);

                        let quantityPerRange = 0;
                        if (selectedRanges.length > 0) {
                            const totalQuantity = parseInt(this.formData.quantity[index]) || 0;
                            quantityPerRange = Math.max(Math.ceil(totalQuantity / selectedRanges.length), 0);
                        }

                        return selectedRanges.map(size => {
                            const key = `${color.sid}_${size.sid}`;
                            return { [key]: quantityPerRange };
                        });
                    })
                    .flat();

                // loop thru quantities and check that value should not be undefined or null or Nan
                // also compute total quantity and is should not exceed ledger.readeable_aty
                let totalQty = 0;
                let checkQuantities = [];
                quantities.forEach((quantity) => {
                    const key = Object.keys(quantity)[0];
                    const value = quantity[key];
                    if (value && value > 0) {
                        totalQty += value;
                        checkQuantities.push(quantity);
                    }
                });

                if (actionType === 'brandy/postNewDemand' && totalQty > this.ledger.demandable_qty) {
                    this.showQtyError(
                        "Quantity Error",
                        "Total quantity should not exceed " + this.ledger.demandable_qty + " pcs."
                    );
                    return;
                }

                const data = {
                    ledger_sid: this.ledger.sid,
                    content: this.formData.content,
                    expected_at: this.formData.date,
                    tolerance: this.formData.tolerance,
                    product: this.ledger.product.slug,
                    quantities: JSON.stringify(checkQuantities),
                };
                
                // Dispatch the action
                this.$store.dispatch(actionType, data);
                
                // Close the form
                this.showLedgerSummary();

            } else {
                console.log("Quantity total is 0 or less, or ledger is empty. Skipping post request.");
            }
        },
        showQtyError(title, message) {
            Swal.fire({
                icon: "error",
                title: title,
                text: message,
            });
        },
        handleFiltersChange(filters) {
            this.filters = filters;
        },
        handleFormData(data) {
            this.formData = data.data;
            this.total = data.total;
        },
        goToOrder() {
            this.$router.push({ name: "BrandPos" });
        },
    },
};
</script>

<style scoped>
.custom-offcanvas-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1045;
}

.nav-link.active {
    color: #fff;
    /* background-color: #28CC9E; */
    background-color: #000;
}
</style>
