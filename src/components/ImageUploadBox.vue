<template>
  <div class="bg-light border mt-2" style="height: 250px">

    <!-- Pre-Upload -->
    <div v-if="!previewUrl" class="d-flex justify-content-center h-100 flex-column align-items-center text-muted">
      <i class="bi bi-cloud-arrow-up-fill display-1 text-danger" @click="triggerFileUpload"></i>
      <p class="fs-3 fw-500 mb-1">Click to upload</p>
      <p class=" mb-0 small font-heading fw-500 ls-1 text-center">{{ buttonText }}</p>
    </div>

    <input ref="fileInput" type="file" @change="previewImage" style="display: none" accept="image/*,application/pdf">

    <!-- Post-Upload -->
    <div v-if="previewUrl"
      class="d-flex justify-content-center h-100 flex-column align-items-center overflow-hidden p-2">
      <img v-if="isImage" :src="previewUrl" alt="preview" class="of-contain wh-200" />
      <a v-else :href="previewUrl" target="_blank" class="btn wh-200 d-flex flex-column justify-content-center">
        <i class="bi bi-filetype-pdf text-danger display-1"></i>
      </a>
      <button class="btn btn-sm btn-outline-danger my-2" @click="clearImage">Change File</button>
    </div>

    <p v-if="error" class="text-center py-2 text-danger fw-500">{{ error }}</p>
  </div>
</template>
  
<script>
export default {
  name: 'ImageUploadBox',
  props: {
    image: {
      type: String,
      default: ''
    }
  },
  mounted() {
    if (this.image) {
      this.previewUrl = this.image;
      this.buttonText = 'Change File';
    }
  },
  watch: {
    image(newVal) {
      if (newVal) {
        this.previewUrl = newVal;
        this.buttonText = 'Change File';
      }
    }
  },
  data() {
    return {
      buttonText: 'Profile Photo',
      previewUrl: '',
      isImage: true,
      error: ''
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
      if (!file.type.startsWith('image/')) {
        this.error = 'File must be an image';
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
      // this.buttonText = 'Change File';

      // Emit file to parent component
      this.$emit('fileSelected', file);
    },
    clearImage() {
      this.previewUrl = '';
      this.$refs.fileInput.value = null;
      // this.buttonText = 'Upload File';
      this.isImage = true; // Reset file type
      this.error = ''; // Reset error message
      this.triggerFileUpload();
    }
  }
}
</script>
  
<style scoped>
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
