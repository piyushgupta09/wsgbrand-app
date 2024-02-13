<template>
    <div v-if="ledger" class="font-title d-flex flex-column vh-100" 
        :style="{
        'background-image': 'url(' + backdrop + ')',
        'background-position': 'center',
        'background-repeat': 'no-repeat',
        'background-size': 'cover'
        }">
        <!-- Fixed at the top -->
        <div class="mt-2">
            <ChatFilters 
                :title="title" 
                :filters="filters" 
                :hasMore="hasMore"
                :ledgerSid="ledgerSid" 
                @load-more-chats="loadMore"
                @chat-filter-updated="handleFiltersChange"
            />
        </div>
        
        <!-- Scrollable content area that takes up all available space -->
        <div class="flex-grow-1 overflow-auto reversed-list">
            <ul class="list-group list-group-flush m-2" v-if="Object.keys(filteredChats).length">
                <transition-group name="slide">
                    <li class="list-group-item rounded-0 p-0 border-0 bg-transparent mb-2"
                        v-for="(chat, chatIndex) in filteredChats" :key="chatIndex">
                            <ChatCard :chat="chat" :chatIndex="chatIndex" :opacity="filters.opacity" />
                    </li>
                </transition-group>
            </ul>
            <ChatDetails :chats="filteredChats" />
        </div>

        <!-- Fixed at the bottom -->
        <div class="mt-auto">
            <ChatActions :ledgerSid="ledgerSid" @update-chats="handleNewChat" />
        </div>
    </div>
</template>

<script>
import Axios from '@/services/axios';
import ChatCard from '@/components/ChatCard.vue';
import ChatFilters from '@/components/ChatFilters.vue';
import ChatDetails from '@/components/ChatDetails.vue';
import ChatActions from '@/components/ChatActions.vue';

export default {
    name: 'LedgerChatSection',
    props: {
        module: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            title: 'Ledger Chat',
            backdrop: 'https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg',
            chats: [],
            ledger: {},
            ledgerSid: '',
            page: 1,
            hasMore: true,
            isFetching: false,
            paginate: {},
            filters: {
                search: '',
                start_date: '',
                end_date: '',
                opacity: true,
            },
        };
    },
    components: {
        ChatFilters,
        ChatCard,
        ChatDetails,
        ChatActions
    },
    created() {
        this.ledgerSid = this.$route.params.ledger;
        this.filters.end_date = new Date().toISOString().split('T')[0];
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - 30);
        this.filters.start_date = startDate.toISOString().split('T')[0];
    },
    mounted() {
        this.loadMore();
        window.addEventListener('scroll', this.handleScroll);
        this.$store.dispatch('brandy/setShowBottomNav', false);
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    watch: {
        filters: {
            handler(newValue, oldValue) {
                if (newValue.search !== oldValue.search 
                    || newValue.startDate !== oldValue.startDate 
                    || newValue.endDate !== oldValue.endDate) {
                    this.page = 1;
                    this.chats = [];
                    this.loadMore();
                }
            },
            deep: true,
        },
    },
    computed: {
        filteredChats() {
            let chats = this.chats;

            // if (this.filters.search) {
            //     const searchTerm = this.filters.search.toLowerCase();
            //     chats = chats.filter((chat) => {
            //         // const chatTags = chat.tags.split(',');
            //         return chat.content.some(chat => chat.toLowerCase().includes(searchTerm.trim()));
            //     });
            // }

            // if (this.filters.startDate) {
            //     chats = chats.filter((chat) => {
            //         return chat.created_at >= this.filters.startDate;
            //     });
            // }

            // if (this.filters.endDate) {
            //     chats = chats.filter((chat) => {
            //         return chat.created_at <= this.filters.endDate;
            //     });
            // }

            return chats;
        },
    },
    methods: {
        handleScroll() {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            if (clientHeight + scrollTop >= scrollHeight - 5) { // Check if near bottom
                this.loadMore();
            }
        },
        handleFiltersChange(filters) {
            this.filters = filters;
        },
        loadMore() {
            if (this.isFetching || (this.paginate && this.page > this.paginate.lastPage)) {
                this.hasMore = false;
                return;
            }

            this.isFetching = true;

            console.log('Loading more chats...');

            Axios.get(`chats/${this.ledgerSid}?page=${this.page}&search=${this.filters.search}&start_date=${this.filters.start_date}&end_date=${this.filters.end_date}`)
                .then((response) => {
                    if (response.data.status === 'ok') {
                        this.chats = [...this.chats, ...response.data.data.chats];
                        this.paginate = response.data.data.pagination;
                        const ledger = response.data.data.ledger;
                        this.title = ledger.name;
                        this.backdrop = ledger.image;
                        this.page++;
                        this.isFetching = false;
                    }
                    else if (response.data.status === 'error') {
                        this.isFetching = false;
                        alert(response.data.message);
                    }
                    else {
                        this.isFetching = false;
                        alert('Something went wrong! Please try again');
                    }
                }).catch((error) => {
                    this.isFetching = false;
                    console.log(error);
                    alert('Something went wrong! Please try again');
                });
        },
        handleNewChat(data) {
            this.chats.push(data);
        },
    },
};
</script>
