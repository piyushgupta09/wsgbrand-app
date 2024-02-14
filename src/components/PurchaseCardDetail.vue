<template>
  <div v-if="activePurchase" class="offcanvas offcanvas-end" tabindex="-1" id="purchaseInfoModal"
    aria-labelledby="purchaseInfoModalLabel">

    <div class="offcanvas-header d-flex justify-content-between align-items-center bg-light border-bottom">
      <div class="d-flex flex-fill justify-content-start gap-2 align-items-center">
        <i class="bi bi-chevron-left pe-2" data-bs-dismiss="offcanvas" data-bs-target="#purchaseInfoModal"
          aria-label="Close"></i>
        <span v-if="activePurchase.party && activePurchase.party.name" class="text-capitalize fw-500" id="purchaseInfoModal">{{ activePurchase.party.name }}</span>
      </div>
      <span class="fw-500">₹&nbsp;{{ activePurchase.total }}</span>
    </div>

    <div class="offcanvas-body p-2">
      <div class="card mb-2" v-for="(group, groupIndex) in activePurchase.groups" :key="groupIndex">

        <div class="card-header p-0 d-flex justify-content-between overflow-hidden">
          <div class="d-flex align-items-center w-100">
            <img :src="group.image" class="of-cover h-60p br-tl p-2" data-bs-toggle="modal"
              data-bs-target="#imagePreviewModal" :data-bs-url="group.preview">
            <div class="flex-fill d-flex flex-column" data-bs-toggle="collapse"
              :href="'#collapsePurchase' + activePurchase.doc_id + '-' + groupIndex" role="button" aria-expanded="false"
              aria-controls="collapseExample">
              <span class="fw-500">#{{ group.product_code }}</span>
              <span class="small">{{ group.product_name }}</span>
            </div>
            <div class="me-2 d-flex flex-column align-items-end">
              <span class="fw-500">{{ group.quantity }} pcs</span>
              <span class="small">₹&nbsp;{{ group.amount }}</span>
            </div>
          </div>
        </div>

        <div class="collapse" :id="'collapsePurchase' + activePurchase.doc_id + '-' + groupIndex">
          <table class="table table-sm table-striped table-borderless mb-0">
            <thead>
              <tr>
                <th scope="col" class="ps-2 small">Color</th>
                <th scope="col" class="small">Size</th>
                <th scope="col" class="small text-end">Qty</th>
                <th scope="col" class="small text-end">Rate</th>
                <th scope="col" class="small text-end pe-2">Amt</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, itemIndex) in group.items" :key="itemIndex">
                <td class="ps-2 small">{{ item.option }}</td>
                <td class="small">{{ item.range }}</td>
                <td class="small text-end">{{ item.billed_quantity }}</td>
                <td class="small text-end">{{ item.rate }}</td>
                <td class="small text-end pe-2">{{ item.amount }}</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'PurchaseCardDetail',
  props: ['purchases'],
  data() {
    return {
      activePurchase: {}
    };
  },
  async mounted() {
    this.loadActivePurchase();
  },
  methods: {
    loadActivePurchase() {
      const purchaseInfoModal = document.getElementById('purchaseInfoModal')
      if (purchaseInfoModal) {
        purchaseInfoModal.addEventListener('show.bs.offcanvas', event => {
          const button = event.relatedTarget
          const purchasedocId = button.getAttribute('data-bs-purchasedocId');
          // purchasedocId = purchase.doc_id + '#' + purchase.party.sid
          // split purchasedocId to get purchase.doc_id and purchase.party.sid
          const [docId, partySid] = purchasedocId.split('#');
          this.activePurchase = this.purchases.find(purchase => purchase.doc_id === docId && purchase.party.sid === partySid);
        });
      }
    },
  }
}
</script>
