<template>
    <div class="font-title">
        
        <LedgerFilters 
            :product="ledger.product"
            :info="{
                label1: 'Total Order',
                label2: 'Dispatch Done',
                value1: ledger.total_order,
                value2: ledger.total_dispatch,
            }"
            @ledger-filters-changed="handleFiltersChange" 
        />

        <div v-if="!addDispatch && !addAdjustment" class="border">
            <table class="table table-striped table-borderless mb-0" style="font-weight: 500">
                <thead>
                    <tr class="table-dark">
                        <th class="ps-3 fw-bold text-start">Date</th>
                        <th class="fw-bold text-start">Order</th>
                        <th class="pe-3 fw-bold text-end">Dispatch</th>
                    </tr>
                </thead>

                <!-- Check if there are any ledger items -->
                <tbody v-if="ledger.items && ledger.items.data && ledger.items.data.length">
                    <!-- Check if filteredLedgerItems has items -->
                    <template v-if="hasFilteredItems">
                        <tr v-show="shouldShow(ledgerItem)" v-for="(ledgerItem, ledgerItemIndex) in filteredLedgerItems"
                            :key="ledgerItemIndex" data-bs-toggle="offcanvas" data-bs-target="#ledgerInfoModal"
                            :data-bs-ledgermodelsid="ledgerItem.model_sid" aria-controls="ledgerInfoModal">
                            <td class="ps-3 text-start">
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

                <tfoot v-if="ledger.items && ledger.items.data && ledger.items.data.length">
                    <tr class="table-dark">
                        <td class="ps-3 text-start fw-bold" style="min-width: 90px">
                            Total
                        </td>
                        <td class="text-start" style="min-width: 90px">
                            {{ calculateTotal("order").toLocaleString() }}
                        </td>
                        <td class="pe-3 text-end" style="min-width: 90px">
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

        <table class="table table-striped table-borderless">
            <tbody>
                <tr>
                    <td class="ps-3">
                        <router-link :to="{ name: 'VendorOrders'}" class="btn btn-sm btn-dark rounded-0">
                            <i class="bi bi-chevron-left"></i>
                        </router-link>
                        <span class="ms-3">Order Pending</span>
                    </td>
                    <td class="pe-3 text-end">
                        {{
                            ledger.readyable_qty ? ledger.readyable_qty.toLocaleString() : 0
                        }}
                        pcs
                    </td>
                </tr>
                <tr>
                    <td class="ps-3">
                        <button class="btn btn-sm btn-dark rounded-0" @click="showAddDispatch">
                            <i class="bi bi-plus-lg"></i>
                        </button>
                        <span class="ms-3">Dispatch Pending</span>
                    </td>
                    <td class="pe-3 text-end">
                        {{
                            ledger.dispatchable_qty
                            ? ledger.dispatchable_qty.toLocaleString()
                            : 0
                        }}
                        pcs
                    </td>
                </tr>
                <tr>
                    <td class="ps-3">
                        <button class="btn btn-sm btn-dark rounded-0" @click="showAddAdjustment">
                            <i class="bi bi-plus-lg"></i>
                        </button>
                        <span class="ms-3">Ledger Balance</span>
                    </td>
                    <td class="pe-3 text-end">
                        {{ ledger.balance_qty ? ledger.balance_qty.toLocaleString() : 0 }}
                        pcs
                    </td>
                </tr>
            </tbody>
        </table>

        <div v-if="addDispatch || addAdjustment" class="card mx-3 shadow">
            <div class="card-body">
                <form v-if="addDispatch" @submit.prevent="postDispatch()" method="post">
                    <LedgerForm :product="ledger.product" type="dispatch" @formData="handleFormData" />
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
                    <LedgerForm :product="ledger.product" type="adjustment" @formData="handleFormData" />
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
    name: "LedgerDetailPage",
    components: {
        LedgerFilters,
        LedgerInfo,
        LedgerForm,
    },
    data() {
        return {
            filters: [],
            formData: [],
            addDispatch: false,
            addAdjustment: false,
            total: 0,
            activePage: 1,
            visibleLinks: [],
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
        console.log("Vendor LedgerDetailPage created");
        this.loadLedger("", true);
        console.log("Vendor LedgerDetailPage created");
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
            return this.$store.getters["vendor/ledger"];
        },
        filteredLedgerItems() {
            const startDate = new Date(this.filters.startDate);
            const endDate = new Date(this.filters.endDate);
            return this.ledger.items.data.filter((item) => {
                const createdAt = new Date(item.created_at);
                return createdAt >= startDate && createdAt <= endDate;
            });
        },
        hasFilteredItems() {
            return this.filteredLedgerItems && this.filteredLedgerItems.length > 0;
        },
    },
    methods: {
        calculateVisibleLinks() {
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
            this.activePage = 1;
            if (!firstload) {
                this.activePage = pageurl.split("=")[1];
            }
            this.$store.dispatch("vendor/fetchProductLedger", {
                ledger: this.$route.params.ledger,
                page: this.activePage,
            });
        },
        showAddDispatch() {
            this.addAdjustment = false;
            this.addDispatch = true;
        },
        showAddAdjustment() {
            this.addDispatch = false;
            this.addAdjustment = true;
        },
        showLedgerSummary() {
            this.addDispatch = false;
            this.addAdjustment = false;
        },
        getTableDataClass(order) {
            switch (order.model) {
                case "order":
                    return this.filters.order ? "text-start" : "text-danger";
                case "dispatch":
                    return this.filters.dispatch ? "text-end" : "text-danger";
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
                case "dispatch":
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
            let result = this.filters[ledgerItem.model];
            if (ledgerItem.model === 'ready' || ledgerItem.model === 'demand') {
                return false;
            }
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
        postDispatch() {
            if (this.ledger.product.options && this.total > 0) {

                // Map each option option to its selected ranges and quantities
                const quantities = this.ledger.product.options
                    .map((option, index) => {

                        // Get selected ranges for this option
                        const selectedRanges = this.ledger.product.ranges
                            .filter((range) => {
                                const key = `${option.sid}_${range.sid}`;
                                return this.formData.ranges[key]; // Check if this range is selected
                            });
                        
                        // Calculate the quantity for each range, ensure it's at least 1, and round up
                        const quantityPerRange = selectedRanges.length > 0
                            ? Math.max(Math.ceil(this.formData.quantity[index] / selectedRanges.length), 1)
                            : 0;
                        
                        return selectedRanges.map((range) => {
                            const key = `${option.sid}_${range.sid}`;
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

                console.log(totalQty, this.ledger.readyable_qty);
                if (totalQty > this.ledger.readyable_qty) {
                    this.showQtyError(
                        "Quantity Error",
                        "Total quantity should not exceed " + this.ledger.dispatchable_qty + " pcs."
                    );
                    return;
                }

                // Prepare the data for dispatch
                const data = {
                    ledger_sid: this.ledger.sid,
                    content: this.formData.content,
                    expected_at: this.formData.date,
                    quantities: JSON.stringify(checkQuantities),
                };

                // Dispatch the action
                this.$store.dispatch("factory/postNewDispatch", data);

                // Close the form
                this.showLedgerSummary();

            } else {
                console.log(
                    "Quantity total is 0 or less, or ledger is empty. Skipping post request."
                );
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
