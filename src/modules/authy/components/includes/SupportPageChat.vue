<template>
    <div class="container pt-2">
        <div class="chat border overflow-hidden">
            <div class="chat-header text-center bg-light p-2">
                <h3>Support</h3>
            </div>
            <div class="chat-body p-1">
                <ul class="message-list p-0 m-0">
                    <li v-for="message in messages" :key="message.id" :class="message.type"
                        class="d-flex justify-content-end mt-2">
                        <div v-if="message.type === 'outgoing'" class="message mb-2 d-flex flex-column"
                            style="width: calc(100% - 40px) !important; margin-left:auto; margin-right: 0;">
                            <div class="d-flex align-items-center">
                                <i v-if="message.type === 'outgoing'" class="bi bi-person fs-4 border rounded-circle me-2"
                                    style="padding: 5px 10px !important;"></i>
                                <div class="message-content border w-100"
                                    :class="{ 'bg-danger opacity-50': message.type === 'outgoing' }"
                                    style="word-wrap: break-word; padding: 10px !important; border-radius: 8px 15px 0px 15px !important; color: white;">
                                    {{ message.text }}
                                </div>
                            </div>
                            <div v-if="message.type === 'outgoing'" class="message-timestamp text-end"
                                style="font-size: 12px; color: #777;">
                                {{ message.timestamp2 }}, {{ message.timestamp }}
                            </div>
                        </div>

                        <div v-if="message.type === 'incoming'" class="message mb-2 d-flex flex-column"
                            style="width: calc(100% - 40px) !important; margin-left:0; margin-right: auto;">
                            <div class="d-flex align-items-center">
                                <div class="message-content border w-100"
                                    :class="{ 'bg-light': message.type === 'incoming' }"
                                    style="word-wrap: break-word; padding: 10px !important; border-radius: 15px 8px 15px 0px !important; color: black;">
                                    {{ message.text }}
                                </div>
                                <i v-if="message.type === 'incoming'"
                                    class="bi bi-person-fill fs-4 border rounded-circle ms-2"
                                    style="padding: 5px 10px !important;"></i>
                            </div>
                            <div v-if="message.type === 'incoming'" class="message-timestamp text-start"
                                style="font-size: 12px; color: #777;">
                                {{ message.timestamp2 }}, {{ message.timestamp }}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class=" d-flex bg-light p-2 align-items-center">
                <input v-model="newMessage" @keyup.enter="sendMessage" type="text" class="form-control"
                    placeholder="Type your message..." />
                <div @click="sendMessage" class="ms-2 "><i class="bi bi-telegram fs-2 " style="color:#e9848b"></i></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            messages: [],
            newMessage: '',
        };
    },
    methods: {
        sendMessage() {
            if (this.newMessage.trim() !== '') {
                const message = {
                    id: Date.now(),
                    text: this.newMessage,
                    timestamp: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long' }),
                    timestamp2: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    type: 'outgoing',
                };
                this.messages.push(message);
                this.newMessage = '';
            }
        },
        receiveMessage() {
            const message = {
                id: Date.now(),
                text: 'This is an incoming message',
                timestamp: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long' }),
                timestamp2: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                type: 'incoming',
            };
            this.messages.push(message);
        },
        simulateIncomingMessage() {
            setTimeout(() => {
                this.receiveMessage();
            }, 1000);
        },
    },
    mounted() {
        this.simulateIncomingMessage();
    },
};
</script>
  