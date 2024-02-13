<template>
    <div v-if="activeDispatch" class="offcanvas offcanvas-bottom h-75" tabindex="-1" id="dispatchOrderModal"
        aria-labelledby="dispatchOrderModalLabel">
       
        <div class="offcanvas-body p-2">
            <div v-for="(item, itemIndex) in activeDispatch.items" :key="itemIndex" class="d-flex mb-2">

                <img :src="item.image" class="of-cover w-70p" 
                data-bs-toggle="modal" data-bs-target="#ledgerImageModal" :data-bs-url="item.preview">

                <div class="flex-fill d-flex flex-column p-2">
                    <div class="d-flex justify-content-between">
                        <span class="text-capitalize fw-500">{{ item.option }}</span>
                        <span class="fw-bold">{{ item.quantity }} pcs.</span>
                        <span v-if="item.is_billed" class="fw-bold">{{ item.diffrence }} pcs.</span>
                    </div>
                    <hr class="my-2">
                    <div class="d-flex justify-content-between w-50" v-for="(itemRange, itemRangeIndex) in item.ranges" :key="itemRangeIndex">
                        <span class="small fw-500">{{ itemRange.range }}</span>
                        <span class="small fw-500">{{ itemRange.quantity }} {{ itemRange.quantity ? 'pcs.' : 'Nil' }}</span>
                        <span v-if="item.is_billed" class="small fw-500">{{ itemRange.diffrence }} {{ itemRange.diffrence ? 'pcs.' : 'Nil' }}</span>
                    </div>
                </div>
                
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'DispatchDetails',
    props: ['dispatches'],
    data() {
        return {
            activeDispatch: {}
        };
    },
    async mounted() {
        this.loadActiveSale();
    },
    methods: {
        loadActiveSale() {
            const dispatchOrderModal = document.getElementById('dispatchOrderModal')
            if (dispatchOrderModal) {
                dispatchOrderModal.addEventListener('show.bs.offcanvas', event => {
                    const button = event.relatedTarget
                    const dispatchSid = button.getAttribute('data-bs-dispatch-sid');
                    this.activeDispatch = this.dispatches.find(dispatch => dispatch.sid == dispatchSid);
                });
            }
        },
    }
}
</script>

<style lang="scss" scoped></style>