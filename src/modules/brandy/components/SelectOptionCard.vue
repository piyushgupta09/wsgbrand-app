<template>
    <div class="flex-fill w-100 h-100 overflow-hidden text-bg-light d-flex">
        <img :src="selectedPartyImageUrl" :alt="selectedParty.business" class="wh-55" style="max-height: 55px">
        <div class="flex-fill d-flex flex-column justify-content-center px-2">
            <div class="d-flex">
                <span class="fw-bold">{{ selectedParty.business }}</span>
                <span class="px-1">|</span>
                <span>{{ selectedParty.user.name }}</span>
            </div>
            <p class="mb-0 small">{{ selectedPartyAddress }}</p>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        selectedParty: {
            type: Object,
            required: true
        },
        defaultImageUrl: {
            type: String,
            default: '' // Your default image URL
        }
    },
    computed: {
        selectedPartyImageUrl() {
            // Assuming you have a method to determine the image URL
            return this.selectedParty.media && this.selectedParty.media.length > 0
                ? this.selectedParty.media[0].url // Adjust according to your data structure
                : this.defaultImageUrl; // Fallback URL
        },
        selectedPartyAddress() {
            // Assuming you have a method to determine the address
            return this.selectedParty.addresses && this.selectedParty.addresses.length > 0
                ? this.selectedParty.addresses[0].address // Adjust according to your data structure
                : 'No address found'; // Fallback address
        },
    },
};

</script>
