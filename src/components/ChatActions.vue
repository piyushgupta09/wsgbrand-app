<template>
    <div class="d-flex justify-content-center align-items-end w-100 position-relative bg-transparent">

        <!-- Attach Image, Pdf or other files  -->
        <!-- <button v-if="!showAudioMessage" class="btn btn-dark rounded-circle mx-1 mb-2 wh-40" @click="toggleAttachMenu">
            <div class="d-flex flex-column justify-content-center align-items-center">
                <i class="bi bi-paperclip fs-5 lh-1"></i>
            </div>
        </button> -->

        <!-- Attachment Menu -->
        <!-- <div v-if="showAttachMenu" class="position-absolute bottom-0 start-0 mx-1 mb-5 opacity-75">
            <div class="d-flex flex-column">
                <button class="btn btn-dark mb-2 rounded-pill d-flex align-items-center" @click="attachVideoFile">
                    <i class="bi bi-camera-video fs-5 lh-1 me-2"></i>
                    <small>Attach Video</small>
                </button>
                <button class="btn btn-dark mb-2 rounded-pill d-flex align-items-center" @click="attachImageFile">
                    <i class="bi bi-file-earmark-image fs-5 lh-1 me-2"></i>
                    <small>Attach Image</small>
                </button>
                <button class="btn btn-dark mb-2 rounded-pill d-flex align-items-center" @click="attachPdfFile">
                    <i class="bi bi-filetype-pdf fs-5 lh-1 me-2"></i>
                    <small>Attach PDF</small>
                </button>
                <button class="btn btn-dark mb-2 rounded-pill d-flex align-items-center" @click="attachOtherFile">
                    <i class="bi bi-file-earmark-plus fs-5 lh-1 me-2"></i>
                    <small>Document File</small>
                </button>
            </div>
        </div> -->

        <!-- Toggle Audio Message -->
        <button v-if="showAudioMessage" class="btn btn-dark rounded-circle mx-1 mb-2 wh-40" @click="toggleAudioMessage">
            <div class="d-flex flex-column justify-content-center align-items-center">
                <i class="bi bi-x-lg fs-5 lh-1"></i>
            </div>
        </button>

        <button v-else class="btn btn-dark rounded-circle mx-1 mb-2 wh-40" @click="toggleAudioMessage">
            <div class="d-flex flex-column justify-content-center align-items-center">
                <i class="bi bi-mic-fill fs-5 lh-1"></i>
            </div>
        </button>

        <!-- Audio Input -->
        <AudioClip v-if="showAudioMessage" @recordingCompleted="handleRecordingCompleted" />

        <!-- Other Inputs -->
        <div v-else class="flex-fill">
            <!-- <input type="file" ref="fileInputVideo" accept="video/*" @change="handleVideoFile" hidden> -->
            <!-- <input type="file" ref="fileInputImage" accept="image/*" @change="handleImageFile" hidden> -->
            <!-- <input type="file" ref="fileInputPdf" accept="application/pdf" @change="handlePdfFile" hidden> -->
            <!-- <input type="file" ref="fileInputOther" accept=".doc,.docx,.xls,.xlsx,.zip" @change="handleOtherFile" hidden> -->
            <textarea v-model="message" @input="adjustTextArea" ref="messageInput" 
                class="form-control rounded bg-white" rows="1"
                style="height: auto; overflow-y: auto; margin-bottom: 9px;"></textarea>
        </div>

        <!-- Send Button -->
        <button v-if="!showAudioMessage" class="btn btn-success rounded-circle mx-1 mb-2 wh-40" @click="sendMessage">
            <div class="d-flex flex-column justify-content-center align-items-center">
                <i class="bi bi-send-fill fs-5 lh-1"></i>
            </div>
        </button>
        
    </div>
</template>

<script>
import Axios from '@/services/axios';
import AudioClip from '@/components/AudioClip.vue';

export default {
    name: "ChatActions",
    emits: ["update-chats"],
    props: {
        ledgerSid: {
            type: String,
            required: true,
        },
    },
    components: {
        AudioClip,
    },
    data() {
        return {
            showAudioMessage: false,
            showAttachMenu: false,
            message: '',
            // fileInputVideo: null,
            // fileInputImage: null,
            // fileInputPdf: null,
            // fileInputOther: null,
        };
    },
    watch: {
        chats() {
            this.$nextTick(() => {
                this.adjustTextArea();
            });
        },
    },
    methods: {
        async handleRecordingCompleted({ formData, audioUrl }) {
            try {
                console.log("Uploading file:", audioUrl);
                const response = await Axios.post("chats", formData);
                this.$emit('update-chats', response.data.data);                
            } catch (error) {
                console.error("Error uploading file:", error);
            }
        },
        async sendMessage() {
            const response = await Axios.post("chats", {
                    type: 'text',
                    content: this.message,
                    ledger_sid: this.ledgerSid,
                });
            this.$emit('update-chats', response.data.data);                
            this.message = '';
        },
        adjustTextArea() {
            const textArea = this.$refs.messageInput;
            // Reset the height to shrink back if content is removed
            textArea.style.height = 'auto';
            // Set the height based on the scrollHeight
            textArea.style.height = `${textArea.scrollHeight}px`;

            // Check if the textarea height exceeds 250px
            if (textArea.scrollHeight > 250) {
                textArea.style.height = '250px'; // Set the maximum height
                textArea.style.overflowY = 'auto'; // Enable scrolling
            } else {
                textArea.style.overflowY = 'hidden'; // Hide scrollbar when not needed
            }
        },
        toggleAttachMenu() {
            this.showAttachMenu = !this.showAttachMenu;
        },
        toggleAudioMessage() {
            this.showAudioMessage = !this.showAudioMessage;
        },
        // attachVideoFile() {
        //     this.$refs.fileInputVideo.click();
        // },
        // attachImageFile() {
        //     this.$refs.fileInputImage.click();
        // },
        // attachPdfFile() {
        //     this.$refs.fileInputPdf.click();
        // },
        // attachOtherFile() {
        //     this.$refs.fileInputOther.click();
        // },
        // handleVideoFile(event) {
        //     this.handleFileInput(event, 'video');
        // },
        // handleImageFile(event) {
        //     this.handleFileInput(event, 'image');
        // },
        // handlePdfFile(event) {
        //     this.handleFileInput(event, 'pdf');
        // },
        // handleOtherFile(event) {
        //     this.handleFileInput(event, 'other');
        // },
        // handleFileInput(event, fileType) {
        //     this.toggleAttachMenu(); // Close the attach menu
        //     const file = event.target.files[0];
        //     if (file) {
        //         this.uploadFile(file, fileType);
        //     }
        // },
        // async uploadFile(file, fileType) {
        //     const formData = new FormData();
        //     formData.append('file', file);
        //     formData.append('type', fileType);
        //     formData.append('ledger_sid', this.ledgerSid);
        //     try {
        //         console.log("Uploading file:", formData);
        //         const response = await Axios.post("chats", formData);
        //         this.$emit('update-chats', response.data.data);
        //     } catch (error) {
        //         console.error("Error uploading file:", error);
        //     }
        // },
    },
}
</script>

<style></style>