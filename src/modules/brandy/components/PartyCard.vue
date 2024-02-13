<template>
    <div class="d-flex gap-3">
        <img :src="party.image" class="of-cover rounded wh-60p" style="max-width: 60px">
        <div class="position-relative flex-fill">
            <div class="d-flex flex-column justify-content-center h-100">
                <span class="max-line-1 fw-bold">{{ party.business }} | <small>{{ party.username }}</small></span>
                <small class="">{{ party.sid }} | {{ party.type }}</small>
            </div>
            <div class="position-absolute end-0 top-0">
                <!-- <div class="d-flex flex-column align-items-end"> -->
                    <!-- <i class="bi bi-record-fill me-1"
                        :class="{ 'text-success': party.active, 'text-danger': !party.active }">
                    </i> -->
                    <span v-if="party.ledgers && party.ledgers.length" 
                        class="btn btn-dark btn-sm p-0 rounded-circle wh-20 smaller fw-bold">{{ party.ledgers.length }}</span>
                <!-- </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PartyCard',
    props: ['party'],
}
</script>
