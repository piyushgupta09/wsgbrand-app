<template>
    <div v-if="activeLedger" class="offcanvas offcanvas-bottom h-75" tabindex="-1" id="ledgerInfoModal" aria-labelledby="ledgerInfoModalLabel">

        <div class="offcanvas-header w-100 d-flex justify-content-between align-items-center bg-light border-bottom">
            <div class="d-flex flex-column justify-content-start align-items-start">
                <div class="text-uppercase" id="ledgerInfoModalLabel">
                    {{ activeLedger.model }} Details
                </div>
                <!-- <span class="small">{{ activeLedger.expected_at }}</span> -->
            </div>
            <div class="d-flex align-items-center">
                <div class="d-flex flex-column justify-content-end align-items-end me-3">
                    <span class="">{{ activeLedger.quantity }}</span>
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
        </div>

        <div class="offcanvas-body p-2">
            <div class="row">

                <div v-if="activeLedger.chat" class="col-12 pb-3">
                    <span class="small" 
                        v-if="activeLedger.chat.type === 'text' && activeLedger.chat.content">
                        {{ activeLedger.chat.content }}
                    </span>
                    <span v-else>{{ activeLedger.chat.type ? activeLedger.chat.type : 'No' }} chat</span>
                </div>
                <div class="col-12" v-for="(item, itemIndex) in activeLedger.items" :key="itemIndex">
                    <div v-if="item.quantity" class="d-flex mb-2">

                        <img :src="item.image" class="of-cover w-80p" 
                        data-bs-toggle="modal" data-bs-target="#ledgerImageModal" :data-bs-url="item.preview">

                        <div class="flex-fill d-flex flex-column p-2">
                            <div class="d-flex justify-content-between">
                                <span class="text-capitalize fw-500">{{ item.option }}</span>
                                <span class="fw-bold">{{ item.quantity }} pcs.</span>
                            </div>
                            <hr class="my-2">
                            <div class="d-flex justify-content-between w-50" v-for="(itemRange, itemRangeIndex) in item.ranges" :key="itemRangeIndex">
                                <span class="small fw-500">{{ itemRange.range }}</span>
                                <span class="small fw-500">{{ itemRange.quantity }} {{ itemRange.quantity ? 'pcs.' : 'Nil' }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LedgerInfo',
    props: ['items'],
    data() {
        return {
            activeLedger: {}
        }
    },
    async mounted() {
        this.loadActiveLedger(); 
    },
    methods: {
        loadActiveLedger() {
            const ledgerInfoModal = document.getElementById('ledgerInfoModal')
            if (ledgerInfoModal) {
                ledgerInfoModal.addEventListener('show.bs.offcanvas', event => {
                    const button = event.relatedTarget
                    const ledgermodelsid = button.getAttribute('data-bs-ledgermodelsid');
                    this.activeLedger = this.items.data.find(ledgerItem => ledgerItem.model_sid === ledgermodelsid);
                });
            }
        }
    }
}
</script>
