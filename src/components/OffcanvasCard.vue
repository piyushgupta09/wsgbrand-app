<template>
    <div v-if="activeItem" class="offcanvas offcanvas-end" tabindex="-1" :id="model_id"
        :aria-labelledby="model_id + 'Label'">
        <div class="offcanvas-header w-100 d-flex justify-content-between align-items-center bg-light border-bottom">
            <div class="d-flex flex-fill justify-content-start gap-2 align-items-center">
                <i class="bi bi-chevron-left" data-bs-dismiss="offcanvas" :data-bs-target="'#' + model_id"
                    aria-label="Close"></i>
                <div class="text-uppercase">{{ title }}</div>
            </div>
            <span class="">{{ count ?? 'None' }}</span>
        </div>
        <div class="offcanvas-body p-2">
            <slot :activeItem="activeItem"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OffcanvasCard',
    props: ['model_id', 'title', 'list'],
    data() {
        return {
            activeItem: {}
        };
    },
    async mounted() {
        this.loadActiveItem();
    },
    computed: {
        count() {
            if (this.activeItem.ledgers && Array.isArray(this.activeItem.ledgers) && this.activeItem.ledgers.length > 0) {
                return this.activeItem.ledgers.length;
            } else {
                return 'None';
            }
        },
    },
    methods: {
        loadActiveItem() {
            const offcanvasCard = document.getElementById(this.model_id)
            if (offcanvasCard) {
                offcanvasCard.addEventListener('show.bs.offcanvas', event => {
                    const button = event.relatedTarget
                    const docSid = button.getAttribute('data-bs-doc-sid');
                    this.activeItem = this.list.find(item => item.sid === docSid);
                });
            }
        },
    }
}
</script>
