<template>
    <div class="modal fade show" :style="'display:' + state" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content border-0 shadow-lg mx-auto" style="width: 350px">
                <div class="modal-body font-title">
                    <p class="text-center fw-500">
                        Always stay updated with app notifications turned on.
                    </p>
                    <div class="d-flex justify-content-center">
                        <div class="btn-group w-100">
                            <button class="btn btn-sm btn-outline-secondary fw-500" @click="cancel">I'll check
                                manually</button>
                            <button class="btn btn-sm px-3 btn-success fw-bold" @click="accept">Yes, send updates</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from "axios";

axios.defaults.withCredentials = true
axios.defaults.headers.post.Accept = "application/json"
axios.defaults.headers.post.ContentType = "application/json"

export default {
    name: "NotificationPermissionModal",
    data() {
        return {
            state: 'block',
        };
    },
    mounted() {
        const permission = localStorage.getItem('notificationPermission');
        if (permission === 'denied') {
            this.state = 'none';
        } else if (permission === 'accepted') {
            this.state = 'none';
        } else {
            this.state = 'block';
        }
    },
    methods: {
        cancel() {
            this.state = 'none';
            localStorage.setItem('notificationPermission', 'denied');
        },
        accept() {
            // console.log('Accepting notifications');
            if ('serviceWorker' in navigator && 'PushManager' in window) {
                // console.log('Service Worker and Push is supported');
                navigator.serviceWorker.ready
                    .then((registration) => {
                        const subscribeOptions = {
                            userVisibleOnly: true,
                            applicationServerKey: "BCKyDcIKu8-4in4IJ6A9-MP4RICqHiYUYOXWsi6dhwQ-TUh1XWb6NkyfPa3otzW2Vfy_I-Q-Hr4hY7-adogSDkI"
                        };
                        // console.log('Subscribing for notifications');
                        return registration.pushManager.subscribe(subscribeOptions);
                    })
                    .then((pushSubscription) => {
                        // console.log('Received PushSubscription: ', JSON.stringify(pushSubscription));
                        this.storePushSubscription(pushSubscription);
                    })
                    .catch((error) => {
                        console.error('Error subscribing for notifications:', error);
                    });
            } else {
                console.warn('Push notifications are not supported in this browser.');
            }
        },
        storePushSubscription(pushSubscription) {

            // console.log('Storing push subscription in localStorage');

            // Get the subscription details
            const subscriptionObject = pushSubscription.toJSON();
            const { endpoint, keys } = subscriptionObject;
            const contentEncoding = (PushManager.supportedContentEncodings || ['aesgcm'])[0]; // Fallback to 'aesgcm' if not defined

            // Store the subscription details in localStorage
            localStorage.setItem('p256dhKey', keys.p256dh);
            localStorage.setItem('authKey', keys.auth);
            localStorage.setItem('endpoint', endpoint);

            // Log stored keys for verification
            // console.log('Stored p256dhKey in localStorage:', keys.p256dh);
            // console.log('Stored authKey in localStorage:', keys.auth);

            // Fetch the token - ensure this is done securely
            const token = localStorage.getItem('token');

            // Prepare the data to be sent to the backend
            const data = {
                endpoint: endpoint,
                keys: {
                    auth: keys.auth,
                    p256dh: keys.p256dh
                },
                contentEncoding: contentEncoding
            };

            // Set up the request configuration
            const config = {
                headers: { "Authorization": `Bearer ${token}` }
            };

            // Send the request to the backend
            axios.post('https://server.wsgbrand.in/api/subscribe', data, config)
                .then(() => {
                    // console.log('data sent', response);
                    this.state = 'none';
                    localStorage.setItem('notificationPermission', 'accepted');
                })
                .catch((error) => {
                    console.error('error sending data', error);
                });
        }
    }
};
</script>
