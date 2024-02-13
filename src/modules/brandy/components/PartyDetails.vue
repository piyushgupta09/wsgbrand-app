<template>
    <div class="row g-2">
        <router-link :to="{ name: 'BrandProductDetail', params: { product: item.product_sid } }"
            v-for="(item, itemIndex) in party.products" :key="itemIndex" class="col-6 col-lg-3 text-decoration-none">
            <div v-if="item.name" class="card">
                <img :src="item.image" class="of-cover" style="max-height: 300px">
                <div class="card-body p-2">
                    <div class="small line-1">{{ item.name }}</div>
                    <div class="small border-top">Balance Qty: {{ item.balance_qty }} pcs.</div>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "PartyDetail",
    props: ['party'],
}
</script>
