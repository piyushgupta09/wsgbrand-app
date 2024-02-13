<template>
    <div class="d-flex gap-3">
        <img :src="party.image" class="of-cover rounded wh-80p">
        <div class="position-relative flex-fill">
            <div class="d-flex flex-column justify-content-center h-100">
                <span class="fw-bold">{{ party.business }} | <small>{{ party.username }}</small></span>
                <small class="">{{ party.sid }} | {{ party.type }}</small>
            </div>
            <div class="position-absolute end-0 top-0">
                <i class="bi bi-record-fill me-1"
                    :class="{ 'text-success': party.active, 'text-danger': !party.active }"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PartyInfo',
    props: ['party'],
}
</script>
