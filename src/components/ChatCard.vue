<template>
    <div v-if="chat && chat.items && chat.items.length" 
        class="d-flex flex-column text-right p-1 rounded-3" style="max-width: 90%; width: fit-content;" 
        :data-bs-chat-id="chat.id" aria-controls="ledgerChatInfoModal"
        data-bs-toggle="offcanvas" data-bs-target="#ledgerChatInfoModal"
        :style="{
            'border-bottom-left-radius': !chat.myChat ? '0 !important' : '',
            'border-bottom-right-radius': chat.myChat ? '0 !important' : ''
        }" 
        :class="{
            'align-items-end ms-auto': chat.myChat,
            'align-items-start': !chat.myChat,
            [chatOpacity(chat.myChat)]: true
        }">
        <div class="smaller text-bg-dark ps-3 text-capitalize rounded-pill">
            {{ chat.sender_name }} | {{ chat.model }} 
            <i class="bi-record-fill text-warning pe-2"></i>
        </div>
        <div class="p-1 rounded" :class="{ 'text-end': chat.myChat, 'text-start': !chat.myChat }">
            <span v-if="chat.type === 'text'">{{ chat.content }}</span>
            <span v-if="chat.type === 'audio'">
                <audio :ref="`audioPlayer-${chatIndex}`" :src="chat.content" controls></audio>
            </span>
            <span v-if="chat.type === 'image'">
                <img :src="chat.content" style="height: 250px; object-fit: contain;">
            </span>
            <span v-if="chat.type === 'pdf'">
                <a :download="chat.content" class="btn btn-dark" :href="chat.content">Download Pdf</a>
            </span>
        </div>
        <div class="ms-2 text-muted smaller">{{ formatMessageTime(chat.delivered_at) }}</div>
    </div>

    <div v-else
        class="d-flex flex-column text-right p-1 rounded-3" style="max-width: 90%; width: fit-content;" 
        :style="{
            'border-bottom-left-radius': !chat.myChat ? '0 !important' : '',
            'border-bottom-right-radius': chat.myChat ? '0 !important' : ''
        }" 
        :class="{
            'align-items-end ms-auto': chat.myChat,
            'align-items-start': !chat.myChat,
            [chatOpacity(chat.myChat)]: true
        }">
        <div class="smaller text-bg-dark px-3 text-capitalize rounded-pill">
            {{ chat.sender_name }} | {{ chat.model }} 
        </div>
        <div class="p-1 rounded" :class="{ 'text-end': chat.myChat, 'text-start': !chat.myChat }">
            <span v-if="chat.type === 'text'">{{ chat.content }}</span>
            <span v-if="chat.type === 'audio'">
                <audio :ref="`audioPlayer-${chatIndex}`" :src="chat.content" controls></audio>
            </span>
            <span v-if="chat.type === 'image'">
                <img :src="chat.content" style="height: 250px; object-fit: contain;">
            </span>
            <span v-if="chat.type === 'pdf'">
                <a :download="chat.content" class="btn btn-dark" :href="chat.content">Download Pdf</a>
            </span>
        </div>
        <div class="ms-2 text-muted smaller">{{ formatMessageTime(chat.delivered_at) }}</div>
    </div>
</template>

<script>
export default {
    name: 'ChatCard',
    props: {
        chat: {
            type: Object,
            default: () => ({})
        },
        chatIndex: {
            type: Number,
            default: 0
        },
        opacity: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        chatOpacity(myChat) {
            let classx = this.opacity ? 'show' : 'hide';
            if (myChat) {
                return 'my-chat-' + classx;
            } else {
                return 'other-chat-' + classx;
            }
        },
        formatMessageTime(time) {
            const options = {
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            };
            const formattedTime = new Date(time).toLocaleDateString('en-US', options);
            return formattedTime;
        }
    }
}
</script>


<style>
.audio-controls {
    margin-bottom: 10px;
}

.my-chat-show {
    background-color: #83d1ba;
}

.other-chat-show {
    background-color: #ffffff;
}

.my-chat-hide {
    background-color: #20c99710;
}

.other-chat-hide {
    background-color: #dddddd10;
}

.reversed-list {
    display: flex;
    flex-direction: column-reverse;
}
</style>