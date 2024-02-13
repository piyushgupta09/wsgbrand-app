<template>
    <div class="border-bottom bg-body-tertiary pe-2">

        <nav class="navbar navbar-expand py-1">
            <div class="navbar-collapse d-flex align-items-center">
                <div class="d-flex align-items-center">
                    <router-link class="btn border-0 px-2" :to="{ name: myLedgerPage, params: { ledger: this.ledgerSid } }">
                        <i class="bi bi-chevron-left"></i>
                    </router-link>
                    <span class="fw-500 max-line-1">{{ title }}</span>
                </div>
                <ul class="navbar-nav ms-auto align-items-center" style="min-width: 120px">
                    <li class="nav-item">
                        <button class="btn border-0" data-bs-toggle="collapse" data-bs-target="#offcanvasSearch"
                            aria-expanded="false" aria-controls="offcanvasSearch">
                            <i class="bi bi-search"></i>
                        </button>
                    </li>
                    <li class="nva-item">
                        <button type="button" class="btn border-0" @click="toggleChatOpacity">
                            <i v-if="opacity" class="bi bi-eye"></i>
                            <i v-else class="bi bi-eye-slash"></i>
                        </button>
                        <button class="btn border-0" :class="{ 'text-muted': !hasMore, 'text-primary': hasMore }" @click="emitLoadMore">
                            <i class="bi bi-arrow-clockwise"></i>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="collapse" id="offcanvasSearch">
            <div class="form-floating mx-2 mb-2">
                <input v-model.lazy="search" type="search" class="form-control rounded-0" placeholder="Search Stocks"
                    @change="emitFilters" />
                <label for="floatingInput">Search by name or code</label>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'ChatFilters',
    emits: ['chat-filter-updated', 'load-more-chats'],
    props: {
        title: {
            type: String,
            default: 'Ledger Chat',
        },
        ledgerSid: {
            type: String,
            default: '',
        },
        filters: {
            type: Object,
            default: () => ({}),
        },
        hasMore: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            search: '',
            startDate: '',
            endDate: '',
            opacity: true,
        }
    },
    methods: {
        applyFilters() {
            this.$emit('chat-filter-updated', {
                search: this.search,
                start_date: this.startDate,
                end_date: this.endDate,
                opacity: this.opacity,
            });
        },
        emitFilters() {
            this.applyFilters();
        },
        emitLoadMore() {
            if (this.hasMore) {
                this.$emit('load-more-chats');
            }
        },
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        toggleChatOpacity() {
            this.opacity = !this.opacity;
            this.applyFilters();
        },
    },
    computed: {
        myLedgerPage() {
            const prefix = this.$store.getters['authy/getPrefix'];
            if (prefix === 'brand') {
                return 'BrandProductLedger';
            } else if (prefix === 'factory') {
                return 'FactoryLedgerDetail';
            } else {
                return `${this.capitalizeFirstLetter(prefix)}Dashboard`;
            }
        },
    },
}
</script>