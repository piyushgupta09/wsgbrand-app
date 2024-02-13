<template>
  <div class="offcanvas offcanvas-bottom h-50" tabindex="-1" id="ledgerChatInfoModal"
      aria-labelledby="ledgerChatInfoModalLabel">
      <div class="offcanvas-header w-100 d-flex justify-content-between align-items-center bg-light border-bottom">
          <div class="d-flex flex-column justify-content-start align-items-start">
              <div class="text-uppercase" id="ledgerChatInfoModalLabel">
                  <span class="fw-bold">{{ chat.model }}</span>
                  <span class="ps-2">Details</span>
              </div>
          </div>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body p-2">
          <div  class="row g-2">
            <div class="col-6" v-for="(item, itemIndex) in chat.items" :key="itemIndex">
                <div class="d-flex border">
                    <img :src="item.image" class="w-60p">
                    <div class="d-flex flex-column justify-content-center ps-1">
                        <span class="lh-sm max-line-1">{{ item.option }}</span>
                        <span class="lh-sm max-line-1">{{ item.range }}</span>
                        <span class="lh-sm fw-bold">{{ item.quantity }} pcs</span>
                    </div>
                </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'LedgerInfo',
  props: ['chats'],
  data() {
      return {
          chat: {}
      }
  },
  mounted() {
      this.loadLedgerChatItemInfo()
  },
  methods: {
      loadLedgerChatItemInfo() {
          const ledgerChatInfoModal = document.getElementById('ledgerChatInfoModal')
          if (ledgerChatInfoModal) {
              ledgerChatInfoModal.addEventListener('show.bs.offcanvas', event => {
                  const button = event.relatedTarget
                  const chatId = button.getAttribute('data-bs-chat-id');
                  // console.log(this.chats)
                  // console.log(chatId)
                  this.chat = this.chats.find(chat => chat.id == chatId);
                  // console.log(this.chats[this.chat])
              });
          }
      }
  }
}
</script>
