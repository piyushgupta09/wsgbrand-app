<template>
  <div>
    <div v-if="orders && orders.length">
      <div v-for="(order, orderIndex) in orders" :key="orderIndex">
        <transition name="slide" mode="out-in">
          <OrderCard :order="order" :orderIndex="orderIndex" />
        </transition>
      </div>
      <OrderDetailCard :orders="orders" />
    </div>
    <EmptyList v-else title="No Order Available"></EmptyList>
  </div>
</template>

<script>
import EmptyList from '../components/EmptyList.vue'
import OrderCard from '../components/OrderCard.vue'
import OrderDetailCard from '../components/OrderDetailCard.vue'

export default {
  name: "OrdersPage",
  components: { 
    EmptyList, 
    OrderCard, 
    OrderDetailCard 
  },
  mounted() {
    // this.$store.dispatch('factory/fetchOrders');
  },
  computed: {
    orders() {
      return this.$store.getters['factory/orders'];
    },
  },
}
</script> 

<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}

.slide-enter-to,
.slide-leave {
  transform: translateX(0);
}
</style>
