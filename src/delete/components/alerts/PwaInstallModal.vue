<template>
    <!-- Modal for PWA Install Prompt -->
    <div class="modal fade show" :style="'display:' + state" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content border-0 shadow-lg mx-auto" style="width: 350px">
                <div class="modal-body font-title">
                    <p class="text-center fw-500">
                        Get better user experience<br>with our brand new app.
                    </p>
                    <div class="d-flex justify-content-center">
                        <div class="btn-group w-100">
                            <!-- Button to cancel the PWA installation -->
                            <button class="btn btn-sm btn-outline-secondary fw-500 px-2" @click="cancel">I'll stay on
                                web</button>
                            <!-- Button to accept and install the PWA -->
                            <button class="btn btn-sm px-3 btn-success fw-bold" @click="accept">Yes, Install Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "PwaInstallModal",
    data() {
        return {
            deferredPrompt: null, // Event object for the install prompt
            state: 'block', // State for showing or hiding the modal
        };
    },
    created() {
        // Add event listener for the PWA install prompt
        window.addEventListener('beforeinstallprompt', this.handleInstallPrompt);
    },
    unmounted() {
        // Remove event listener when component is destroyed
        window.removeEventListener('beforeinstallprompt', this.handleInstallPrompt);
    },
    methods: {
        handleInstallPrompt(event) {
            // Prevents the default browser install prompt
            event.preventDefault();
            // Saves the event for later triggering the prompt
            this.deferredPrompt = event;
            // Show the modal
            this.state = 'block';
        },
        accept() {
            // Triggers the PWA install prompt
            this.deferredPrompt.prompt();

            // Handles the user's response to the install prompt
            this.deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the install prompt');
                } else {
                    console.log('User dismissed the install prompt');
                }
                this.deferredPrompt = null; // Reset the prompt event
                this.state = 'none'; // Close the modal
            });
        },
        cancel() {
            // Closes the modal without installing
            this.state = 'none';
        },
    }
};
</script>
  