<template>
  <button class="btn rounded-circle mx-1 mb-2 wh-50" :class="isRecording ? 'btn-danger' : 'btn-success'"
    @mousedown="toggleRecording" @mouseup="toggleRecording">
    <div class="d-flex flex-column justify-content-center align-items-center h-100">
      <i v-if="!isRecording" class="bi bi-mic fs-1"></i>
      <i v-if="isRecording" class="bi bg-danger bi-mic-fill fs-1"></i>
    </div>
  </button>
</template>

<script>
export default {
  name: "AudioClip",
  emits: ['recordingCompleted'],
  data() {
    return {
      isRecording: false,
      audioChunks: [],
      mediaRecorder: null,
      audioPlayer: null,
    };
  },
  methods: {
    toggleRecording() {
      if (this.isRecording) {
        this.stopRecording();
      } else {
        this.startRecording();
      }
    },
    startRecording() {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        console.error("MediaDevices API or getUserMedia not supported in this browser.");
        return;
      }

      navigator.mediaDevices.getUserMedia({ audio: true })
        .then((stream) => {
          this.mediaRecorder = new MediaRecorder(stream);
          this.audioChunks = [];

          this.mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
              this.audioChunks.push(event.data);
            }
          };

          this.mediaRecorder.onstop = async () => {
            const audioBlob = new Blob(this.audioChunks, { type: "audio/mp3" });
            const audioUrl = URL.createObjectURL(audioBlob);
            const formData = new FormData();
            formData.append("audio", audioBlob, "recording.mp3");
            formData.append("type", "audio");
            formData.append("content", "chat audio");
            formData.append("ledger_sid", "DG-LR-000");
            this.$emit('recordingCompleted', { formData, audioUrl });
            this.isRecording = false;
          };

          this.mediaRecorder.start();
          this.isRecording = true;
        })
        .catch((error) => {
          console.error("Error accessing microphone:", error);
        });
    },
    stopRecording() {
      if (this.mediaRecorder) {
        this.mediaRecorder.stop();
      }
    },
  },
};
</script>
