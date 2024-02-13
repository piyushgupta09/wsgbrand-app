<template>
  <div class="font-title">
      <DispatchFilters @disptach-filter-changed="handleFiltersChange" />
      <ul class="list-group list-group-flush" v-if="Object.keys(filteredDispatches).length">
          <li class="list-group-item p-0" v-for="(dispatch, dispatchIndex) in filteredDispatches" :key="dispatchIndex">
              <transition name="slide" mode="out-in">
                  <DispatchCard :dispatch="dispatch" />
              </transition>
          </li>
          <DispatchCardDetail :dispatches="filteredDispatches" />
      </ul>
      <EmptyList v-else title="No Dispatch Available"></EmptyList>
  </div>
</template>

<script>
import EmptyList from '../components/EmptyList.vue';
import DispatchCard from '../components/DispatchCard.vue';
import DispatchFilters from '../components/DispatchFilters.vue';
import DispatchCardDetail from '../components/DispatchCardDetail.vue';

export default {
  name: 'DispatchesPage',
  components: {
      DispatchCard,
      EmptyList,
      DispatchCardDetail,
      DispatchFilters
  },
  mounted() {
    this.$store.dispatch('factory/fetchDispatches', { page: 1, limit: 10 });
  },
  data() {
      return {
          filters: [],
      }
  },
  computed: {
      dispatches() {
          return this.$store.getters['factory/dispatches']
      },
      pendingDispatch() {
          return this.dispatches.filter(dispatch => dispatch.status === 'pending')
      },
      filteredDispatches() {
          let dispatches = this.dispatches;
          if (this.filters.tagSearch) {
              const searchTerm = this.filters.tagSearch.toLowerCase();
              dispatches = dispatches.filter((dispatch) => {
                  const stockTags = dispatch.tags.split(',');
                  return stockTags.some(tag => tag.toLowerCase().includes(searchTerm.trim()));
              });
          }
          if (this.filters.currentStatus !== 'pending') {
              dispatches = dispatches.filter(dispatch => dispatch.status === this.filters.currentStatus);
          }

          return dispatches;
      },
  },
  methods: {
      formatMessageTime(time) {
          const options = {
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
          };
          const formattedTime = new Date(time).toLocaleDateString('en-US', options);
          return formattedTime;
      },
      handleFiltersChange(filters) {
          this.filters = filters;
      },
  },
}
</script>
