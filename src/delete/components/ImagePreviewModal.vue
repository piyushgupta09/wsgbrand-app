<template>
  <div class="modal fade" id="imagePreviewModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
      <button type="button" class="btn h-100 w-100 p-0" data-bs-dismiss="modal" aria-label="Close">
        <img src="https://placehold.co/400" class="w-100" style="object-fit: cover">
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImagePreviewModal",
  mounted() {
    const imagePreviewModal = document.getElementById('imagePreviewModal');
    if (imagePreviewModal) {
      imagePreviewModal.addEventListener('show.bs.modal', event => {
            const triggerElement = event.relatedTarget;
            const imageUrl = triggerElement.getAttribute('data-bs-url');
            const modalImage = imagePreviewModal.querySelector('.modal-dialog img');
            modalImage.src = imageUrl;
        });
    }
  },
  beforeUnmount() {
    const imagePreviewModal = document.getElementById('imagePreviewModal');
    if (imagePreviewModal) {
      imagePreviewModal.removeEventListener('show.bs.modal');
    }
  },
};
</script>

   