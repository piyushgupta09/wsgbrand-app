<template>
    <div class="">

        <!-- <div v-if="chats.length" class="overflow-scroll" style="min-height: 600px">
            <div class="card card-body" v-for="{ chat, chatIndex } in chats" :key="chatIndex">
                <audio v-if="chat.type === 'audio'" :src="chat.content" controls></audio>
                <span v-else>{{ chat.content }}</span>
            </div>
        </div> -->
        <div v-if="chats.length" class="overflow-scroll" style="min-height: 600px">
            <div class="card card-body" v-for="(chat, chatIndex) in chats" :key="chatIndex">
                <audio v-if="chat.type === 'audio'" :src="chat.content" controls></audio>
                <span v-else>{{ chat.content }}</span>
            </div>
        </div>
        <div v-else class="">No Chats</div>

        <div class="d-flex justify-content-center align-items-end w-100 position-relative">

            <!-- Attach Image, Pdf or other files  -->
            <button v-if="!showAudioMessage" class="btn btn-dark rounded-circle mx-1 mb-2 wh-40" @click="toggleAttachMenu">
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <i class="bi bi-paperclip fs-5 lh-1"></i>
                </div>
            </button>

            <!-- Attachment Menu -->
            <div v-if="showAttachMenu" class="position-absolute bottom-0 start-0 mx-1 mb-5 opacity-75">
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
            </div>

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
            <AudioClip v-if="showAudioMessage" @recordingCompleted="handleRecordingCompleted"/>


            <!-- Other Inputs -->
            <div v-else class="flex-fill">
                <input type="file" ref="fileInputVideo" accept="video/*" @change="handleVideoFile" hidden>
                <input type="file" ref="fileInputImage" accept="image/*" @change="handleImageFile" hidden>
                <input type="file" ref="fileInputPdf" accept="application/pdf" @change="handlePdfFile" hidden>
                <input type="file" ref="fileInputOther" accept=".doc,.docx,.xls,.xlsx,.zip" @change="handleOtherFile"
                    hidden>
                <textarea v-model="message" @input="adjustTextArea" ref="messageInput" class="form-control rounded-5"
                    style="height: auto; overflow-y: auto;"></textarea>
            </div>

            <!-- Send Button -->
            <button v-if="!showAudioMessage" class="btn btn-success rounded-circle mx-1 mb-2 wh-40" @click="sendMessage">
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <i class="bi bi-send-fill fs-5 lh-1"></i>
                </div>
            </button>

        </div>


    </div>
</template>
  
<script>
import Axios from '@/services/axios';
import AudioClip from './AudioClip.vue';

export default {
    data() {
        return {
            chats: [],
            message: '',
            ledgerId: '',
            showAttachMenu: false,
            showAudioMessage: false,
        };
    },
    mounted() {
        this.ledgerId = this.$route.params.ledgerId;
        Axios.get(`chats/${this.ledgerId}`).then((res) => {
            this.chats = res.data.data.chats;
        }).catch((error) => {
            console.error("Error fetching chats:", error);
        });
    },
    components: {
        AudioClip,
    },
    methods: {
        adjustTextArea() {
            const textArea = this.$refs.messageInput;
            textArea.style.height = 'auto';
            textArea.style.height = textArea.scrollHeight + 'px';
            textArea.maxHeight = '250px';
        },
        toggleAttachMenu() {
            this.showAttachMenu = !this.showAttachMenu;
        },
        toggleAudioMessage() {
            this.showAudioMessage = !this.showAudioMessage;
        },
        attachVideoFile() {
            this.$refs.fileInputVideo.click();
        },
        attachImageFile() {
            this.$refs.fileInputImage.click();
        },
        attachPdfFile() {
            this.$refs.fileInputPdf.click();
        },
        attachOtherFile() {
            this.$refs.fileInputOther.click();
        },
        handleVideoFile(event) {
            this.toggleAttachMenu();
            console.log(event.target.files[0]);
            // const file = event.target.files[0];
            // Handle the video file (upload or preview)
        },
        handleImageFile(event) {
            this.toggleAttachMenu();
            console.log(event.target.files[0]);
            // const file = event.target.files[0];
            // Handle the image file (upload or preview)
        },
        handlePdfFile(event) {
            this.toggleAttachMenu();
            console.log(event.target.files[0]);
            // const file = event.target.files[0];
            // Handle the PDF file (upload or preview)
        },
        handleOtherFile(event) {
            this.toggleAttachMenu();
            console.log(event.target.files[0]);

            // const file = event.target.files[0];
            // if (!file) return;

            // Perform validation here (file type, file size, etc.)

            // Handle the audio file (upload or preview)

            // Proceed to upload the file
            // this.uploadFile(file);

            // Reset the input after handling the file
            // event.target.value = '';
        },
        uploadFile(file) {
            const formData = new FormData();
            formData.append('file', file);

            // Use axios or another method to upload the formData
            // axios.post('/upload', formData);
        },
        async handleRecordingCompleted({ formData, audioUrl }) {
            try {
                console.log("Uploading file:", audioUrl);
                const response = await Axios.post("chats", formData);
                console.log("Server response:", response.data);
                this.chats.push(response.data.data);
            } catch (error) {
                console.error("Error uploading file:", error);
            }
        },
        sendMessage() {
            // Logic to send the message along with any attached media
            Axios.post('chats', {
                    type: 'text',
                    content: this.message,
                    ledger_sid: this.ledgerId,
                }).then((res) => {
                    this.chats = res.data.data.chats;
                    this.message = ''
            });
        }
    }
};
</script>


<style scoped>
textarea {
    width: 100%;
    max-height: 250px;
    overflow-y: auto;
}

/* .chat-input-container {
    position: relative;
}

.attach-button,
.send-button {
    position: absolute;
    bottom: 0;
}

.attach-button {
    left: 0;
}

.send-button {
    right: 0;
}

textarea {
    width: 100%;
    max-height: 250px;
    overflow-y: auto;
}

.attach-menu {
    position: absolute;
    bottom: 100%;
    left: 0;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
} */
</style>
