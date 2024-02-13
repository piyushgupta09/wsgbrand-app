<template>
  <div class="d-flex bg-light border-top border-start" style="height: 250px">

    <input ref="fileInput" type="file" @change="previewImage" style="display: none" accept="image/*,application/pdf">
    
    <!-- Uploaded Image -->
    <div v-if="isValidUploadedString && !previewUrl" class="image-section position-relative">
      <img :src="uploaded" alt="uploaded image" class="img-fluid h-100 w-100 of-contain border-top">
      <div class="position-absolute w-100 h-100 d-flex justify-content-center align-items-center top-0 start-0" style="background-color: rgba(0, 0, 0, 0.295);">
        <span class="text-center w-100 text-bg-danger fw-bold opacity-75">Uploaded Image</span>
      </div>
    </div>

    <!-- Sample Image -->
    <div v-else class="image-section position-relative">
      <img :src="sample" alt="" class="img-fluid h-100 w-100 of-contain border-top">
      <div class="position-absolute w-100 h-100 d-flex justify-content-center align-items-center top-0 start-0" style="background-color: rgba(0, 0, 0, 0.295);">
        <span class="text-white ts-2 fs-3 text-center">{{ label }}</span>
      </div>
    </div>

    <!-- Post-Upload -->
    <div v-if="previewUrl" class="image-section d-flex justify-content-center h-100 flex-column align-items-center overflow-hidden p-2">
      <img v-if="isImage" :src="previewUrl" alt="preview" class="of-contain wh-200" />
      <button class="btn btn-sm px-2 py-0 btn-outline-danger my-2" @click.stop="clearImage">Change File</button>
    </div>

    <!-- File Upload Box -->
    <div v-else class="image-section d-flex justify-content-center h-100 flex-column align-items-center text-muted">
      <i class="bi bi-cloud-arrow-up-fill display-1 text-danger" @click.stop="triggerFileUpload"></i>
      <p class="fs-3 fw-500 mb-1">Click to {{ uploaded ? 'change' : 'upload' }}</p>
      <p class="mb-0 small font-heading fw-500 ls-1 text-center">{{ title }}</p>
    </div>
    
    <p v-if="error" class="text-center py-2 text-danger fw-500">{{ error }}</p>

  </div>
</template>

<script>
export default {
  name: 'ImageUploadBoxV2',
  props: {
    label: String,
    sample: String,
    uploaded: String,  // New Prop
    title: String,
    required: Boolean
  },
  data() {
    return {
      previewUrl: '',
      isImage: true,
      error: ''
    }
  },
  computed: {
    isValidUploadedString() {
      return typeof this.uploaded === 'string' && this.uploaded.length > 0;
    }
  },
  methods: {
    triggerFileUpload() {
      this.$refs.fileInput.click();
    },
    previewImage(event) {
      this.error = ''; // Reset error message
      const file = event.target.files[0];
      if (!file) {
        return;
      }

      // Ensure the file is an image or a PDF
      if (!file.type.startsWith('image/') && file.type !== 'application/pdf') {
        this.error = 'File must be an image or a PDF.';
        return;
      }

      // Limit file size to 5MB
      if (file.size > 5 * 1024 * 1024) {
        this.error = 'File size should not exceed 5MB.';
        return;
      }

      // Display uploaded file to user
      this.isImage = file.type.startsWith('image/');
      this.previewUrl = URL.createObjectURL(file);
      // this.label = 'Change File';

      // Emit file to parent component
      this.$emit('fileSelected', file);
    },
    clearImage() {
      this.previewUrl = '';
      this.$refs.fileInput.value = null;
      // this.label = 'Upload File';
      this.isImage = true; // Reset file type
      this.error = ''; // Reset error message
      this.triggerFileUpload();
    }
  }
}
</script>
  
<style scoped>
.image-section {
  width: calc(50vw - .75rem);
  overflow: hidden;
}

.p-2 {
  padding: 2em;
}

.lead {
  font-size: 1.25em;
  font-weight: bold;
}

.error-text {
  color: red;
}
</style> 
