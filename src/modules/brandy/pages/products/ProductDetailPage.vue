<template>
  <div v-if="product" class="border-bottom font-title">

    <!-- Product Card -->
    <div class="card rounded-0 border-0 d-flex">
      <div class="flex-fill d-flex">

        <!-- Product Thumb -->
        <img :src="product.image" class="of-cover h-70p" data-bs-toggle="modal" data-bs-target="#productImageModal"
          :data-bs-url="product.preview">

        <!-- Product Header -->
        <div class="flex-fill d-flex flex-column justify-content-evenly p-2" data-bs-toggle="collapse"
          data-bs-target="#productDetailModal" aria-expanded="false" aria-controls="productDetailModal">
          <div class="fw-bold max-line-1">#{{ product.code }} | {{ product.name }}</div>
          <div class="d-flex justify-content-between align-items-center">
            <!-- Stock -->
            <div class="d-flex align-items-end gap-1 small">
              <span class="fw-500 smaller">Stock:</span>
              <div v-if="product && product.stock && product.stock.quantity">
                <strong>{{ product.stock.quantity }}</strong> <span class="smaller">pcs</span>
              </div>
              <span v-else class="fw-bold small text-danger">Nil</span>
            </div>
            <!-- Incoming -->
            <div class="d-flex align-items-end gap-1 small">
              <span class="fw-500 smaller">Incoming:</span>
              <div v-if="product && product.stock && product.stock.incoming">
                <strong>{{ product.stock.incoming }}</strong> <span class="smaller">pcs</span>
              </div>
              <span v-else class="fw-bold small text-danger">Nil</span>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <!-- ROQ -->
            <div class="d-flex align-items-end gap-1 small">
              <span class="fw-500 smaller">Re-Order:</span>
              <div v-if="product && product.stock && product.stock.roq">
                <strong>{{ product.stock.roq }}</strong> <span class="smaller">pcs</span>
              </div>
              <span v-else class="fw-bold small text-danger">Nil</span>
            </div>
            <!-- Outgoing -->
            <div class="d-flex align-items-end gap-1 small">
              <span class="fw-500 smaller">Outgoing:</span>
              <div v-if="product && product.stock && product.stock.outgoing">
                <strong>{{ product.stock.outgoing }}</strong> <span class="smaller">pcs</span>
              </div>
              <span v-else class="fw-bold small text-danger">Nil</span>
            </div>
          </div>
        </div>

        <div class="d-flex flex-column">

          <!-- Back link -->
          <router-link class="btn flex-fill border-0" :to="{ name: 'BrandProducts' }">
            <div class="d-flex flex-column justify-content-center h-100">
              <div class="rounded-circle wh-30 shadow d-flex flex-column justify-content-center">
                <i class="bi bi-x-lg text-danger"></i>
              </div>
            </div>
          </router-link>

          <!-- Toggle Detail -->
          <button class="btn flex-fill border-0" data-bs-toggle="collapse" data-bs-target="#productDetailModal"
            aria-expanded="false" aria-controls="productDetailModal">
            <div class="d-flex flex-column justify-content-center h-100">
              <div class="rounded-circle wh-30 shadow-inset d-flex flex-column justify-content-center">
                <i class="bi bi-chevron-down"></i>
              </div>
            </div>
          </button>

        </div>

      </div>
    </div>

    <!-- Product Detail Model -->
    <div class="collapse" id="productDetailModal">
        <div class="d-flex align-items-center justify-content-between text-bg-dark ps-1">
          <span class="p-1 fw-bold">{{ product.name }}</span>
          <!-- <div class="">
            <input id="productActive" type="checkbox" class="btn-check" autocomplete="off" :checked="product.active"
              @change.prevent="toggleProductStatus" />
            <label class="btn rounded-0 fw-bold" for="productActive"
              :class="{ 'btn-success': product.active, 'btn-danger': !product.active }">
              Live
            </label>
          </div> -->
        </div>
        <div class="table-responsive">
          <div class="overflow-x-scroll bg-white">
            <table class="table table-responsive table-striped table-hover ">
              <thead>
                <tr>
                  <th class="text-center small">SKU</th>
                  <th 
                    scope="col" class="small text-nowrap text-uppercase text-end" 
                    v-for="(range, rangeIndex) in product.ranges" :key="rangeIndex">
                    {{ range.abbr }}
                  </th>
                  <th class="text-center smallest">Color<br>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(option, optionIndex) in product.options" :key="optionIndex">
                  <th class="p-0 table-secondary text-center">
                    <img :src="option.image" class="of-cover w-35p" data-bs-toggle="modal" data-bs-target="#productImageModal"
                      :data-bs-url="option.preview">
                  </th>
                  <td v-for="(range, rangeIndex) in product.ranges" :key="rangeIndex">
                    <div class="d-flex flex-column justify-content-center align-items-end">
                      {{ getStock(option.sid, range.sid) }}
                    </div>
                  </td>
                  <td class="table-secondary text-end pe-3">
                    <span>{{ Math.round(getTotalForOption(option.sid)).toLocaleString('en-IN') }}</span>
                  </td>
                </tr>
                <tr class="table-dark">
                  <th class="text-center smallest">Size<br>Total</th>
                  <td class="text-end fw-bold" v-for="(range, rangeIndex) in product.ranges" :key="rangeIndex">
                    {{ getTotalForRange(range.sid) }}
                  </td>
                  <td class="text-end fw-bold">
                    {{ product.stockitems.reduce((total, stockitem) => total + stockitem.quantity, 0) }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>

    <!-- Product Image Modal -->
    <div class="modal fade" id="productImageModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-fullscreen">
        <button type="button" class="btn h-100 w-100 p-0" data-bs-dismiss="modal" aria-label="Close">
          <img src="https://placehold.co/400" class="w-100" style="object-fit: cover">
        </button>
      </div>
    </div>

    <!-- Product Ledgers -->
    <div class="d-flex align-items-center justify-content-between text-bg-dark ps-1">
      <span class="p-1 fw-bold">Product Order Ledgers</span>
      <router-link :to="{ name: 'BrandParties' }" class="btn btn-secondary rounded-0 fw-bold px-3">
        <i class="bi bi-chevron-right"></i>
      </router-link>
    </div>

    <!-- List of Ledgers -->
    <ul v-if="product.ledgers && product.ledgers.length" class="list-group">
      <li v-for="(ledger, index) in product.ledgers" :key=index class="list-group-item px-2">
        <router-link :to="{ name: 'BrandProductLedger', params: { ledger: ledger.sid } }"
          class="text-dark td-none d-flex">
          <!-- Left -->
          <img :src="ledger.party.image" class="of-cover wh-60p">
          <!-- Right -->
          <div class="ms-2 d-flex flex-column justify-content-between w-100">
            <span class="fw-medium">{{ ledger.party.business }}</span>
            <!-- Order Ready -->
            <div class="d-flex justify-content-between align-items-center">

              <!-- Order -->
              <div class="d-flex align-items-end gap-1">
                <span class="fw-500 smaller">Ready:</span>
                <div v-if="ledger.demandable_qty">
                  <strong>{{ ledger.demandable_qty }}</strong> <span class="smaller">pcs</span>
                </div>
                <span v-else class="fw-bold text-danger">0 pc</span>
              </div>

              <!-- Ready -->
              <div class="d-flex align-items-end gap-1">
                <span class="fw-500 smaller">Demand:</span>
                <div v-if="ledger.dispatchable_qty">
                  <strong>{{ ledger.dispatchable_qty }}</strong> <span class="smaller">pcs</span>
                </div>
                <span v-else class="fw-bold text-danger">0 pc</span>
              </div>

            </div>
            <!-- Dispatch & Balance -->
            <div class="d-flex justify-content-between align-items-center">

              <!-- Demand -->
              <div class="d-flex align-items-end gap-1">
                <span class="fw-500 smaller">Dispached:</span>
                <div v-if="ledger.stockable_qty">
                  <strong>{{ ledger.stockable_qty }}</strong> <span class="smaller">pcs</span>
                </div>
                <span v-else class="fw-bold text-danger">0 pc</span>
              </div>

              <!-- Balance -->
              <div class="d-flex align-items-end gap-1">
                <span class="fw-500 smaller">Balance:</span>
                <div v-if="ledger.balance_qty">
                  <strong>{{ ledger.balance_qty }}</strong> <span class="smaller">pcs</span>
                </div>
                <span v-else class="fw-bold text-danger">0 pc</span>
              </div>

            </div>
          </div>
        </router-link>
      </li>
    </ul>
    <div v-else class="text-center py-3">
      <span class="fw-bold">No ledger found</span>
    </div>

  </div>
  <page-loading v-else />
</template>

<script>
import PageLoading from '@/components/PageLoading.vue';

export default {
  name: "ProductDetailPage",
  components: {
    PageLoading,
  },
  computed: {
    product() {
      return this.$store.getters['brandy/product'];
    },
  },
  mounted() {
    this.$store.dispatch('brandy/fetchProductDetails', this.$route.params.product);
    const productImageModal = document.getElementById('productImageModal');
    if (productImageModal) {
      productImageModal.addEventListener('show.bs.modal', event => {
        const triggerElement = event.relatedTarget;
        const imageUrl = triggerElement.getAttribute('data-bs-url');
        const modalImage = productImageModal.querySelector('.modal-dialog img');
        modalImage.src = imageUrl;
      });
    }
  },
  methods: {
    toggleProductStatus() {
      this.$store.dispatch('brandy/toggleProductStatus', {
        qtype: 'toggle',
        product: this.product.slug,
      });
    },
    getStock(optionSid, rangeSid) {
      return this.product.stockitems.filter(stockitem => {
        return stockitem.key === `${optionSid}-${rangeSid}`;
      })[0]?.quantity ?? 0; // Using optional chaining and nullish coalescing operator
    },
    getTotalForRange(rangeSid) {
      return this.product.stockitems.reduce((total, stockitem) => {
        if (stockitem.key.endsWith(`-${rangeSid}`)) {
          return total + stockitem.quantity;
        }
        return total;
      }, 0);
    },
    getTotalForOption(optionSid) {
      return this.product.stockitems.reduce((total, stockitem) => {
        if (stockitem.key.startsWith(`${optionSid}-`)) {
          return total + stockitem.quantity;
        }
        return total;
      }, 0);
    },
  }
}
</script>


<style scoped>
#scroll::-webkit-scrollbar {
  background-color: none;
  display: none;
}

table th:first-child,
.table td:first-child {
  position: sticky;
  left: 0;
  background-color: #e8e8e8;
  color: #373737;
}
</style>
