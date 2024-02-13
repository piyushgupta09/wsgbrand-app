<template>
    <div class="bg-light mx-auto rounded overflow-hidden border" style="height: 350px">
        <!-- Upload Prompt -->
        <div v-if="!previewUrl && !image" class="d-flex flex-column align-items-center justify-content-center h-100">
            <i class="bi bi-cloud-arrow-up-fill text-muted lh-1" @click="triggerFileUpload" style="font-size: 4rem;"></i>
            <p class="text-muted mb-0 font-text fs-3">Upload Profile Image</p>
        </div>

        <!-- Hidden File Input -->
        <input ref="fileInput" type="file" @change="previewImage" style="display: none" accept="image/*"
            :required="require">

        <!-- New Image Preview -->
        <div v-if="previewUrl" class="w-100 h-100 overflow-hidden">
            <img :src="previewUrl" alt="preview" class="of-cover w-100 h-100" @click="clearImage(), triggerFileUpload()" />
        </div>

        <!-- Existing Image Preview -->
        <div v-else-if="image" class="w-100 h-100 overflow-hidden">
            <img :src="image" alt="existing preview" class="of-cover w-100" @click="clearImage(), triggerFileUpload()" />
        </div>

        <!-- Error Message -->
        <p v-if="error" class="text-danger">{{ error }}</p>
    </div>
</template>
  
<script>
export default {
    name: 'ImageUploadBox',
    props: {
        image: String,  // Existing image URL
        require: Boolean  // Is the image required?
    },
    data() {
        return {
            previewUrl: '',  // URL for new image preview
            error: ''  // Error message
        };
    },
    methods: {
        // Open the file dialog
        triggerFileUpload() {
            this.$refs.fileInput.click();
        },
        // Handle new image preview and validation
        previewImage(event) {
            this.error = '';  // Reset error
            const file = event.target.files[0];
            if (!file || !file.type.startsWith('image/') || file.size > 5 * 1024 * 1024) {
                this.error = file.size > 5 * 1024 * 1024 ? 'File size should not exceed 5MB.' : 'File must be an image.';
                return;
            }
            this.previewUrl = URL.createObjectURL(file);  // Generate new image preview URL
            this.$emit('fileSelected', file);  // Emit the new file to the parent component
        },
        // Clear the image preview and input value
        clearImage() {
            this.previewUrl = '';
            this.$refs.fileInput.value = null;
            this.error = '';  // Reset error
        }
    }
}
</script>
  