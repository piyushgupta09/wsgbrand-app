import Pusher from "pusher-js";
import SweetAlert from "./sweet-alert";

export default {
  created() {
    this.$store.dispatch("noti/fetchPusher");
  },
  mounted() {
    console.log("Pusher connected");
    this.initializePusher();
  },
  computed: {
    pusherConfig() {
      return this.$store.getters["noti/pusher"];
    },
  },
  watch: {
    pusherConfig() {
      this.initializePusher();
    },
  },
  methods: {
    initializePusher() {
      // console.log('Pusher config: ' + JSON.stringify(this.pusherConfig));
      if (
        this.pusherConfig &&
        this.pusherConfig.key &&
        this.pusherConfig.channel &&
        this.pusherConfig.event
      ) {
        const pusher = new Pusher(this.pusherConfig.key, {
          cluster: "ap2",
          debug: true,
          authEndpoint: "/broadcasting/auth",
        });

        const channel = pusher.subscribe(this.pusherConfig.channel);
        // console.log('Pusher subscribed to channel: ' + this.pusherConfig.channel);

        channel.bind(this.pusherConfig.event, (data) => {
          // console.log('Pusher received event: ' + this.pusherConfig.event);
          this.parseApiAndReloadData(data);
        });
      }
    },
    parseApiAndReloadData(data) {
      // console.log('Pusher received message: ' + data.title + ' - ' + data.message);
      switch (data.message) {
        case "new-chat-msg":
          console.log("New chat message received for ledger: ".data.title);
          break;
        default:
          this.dispatchNotificationEvent(data);
          break;
      }
    },
    dispatchNotificationEvent(data) {
      this.$store.dispatch("noti/fetchUnreadNotifications");
      const title = data.title;
      const message = data.message;
      // SweetAlert.showSweetAlert(title, message);
      this.enableAudioAlert();
    },
    enableAudioAlert() {
      const bell = document.getElementById("notification-bell");
      bell.autoplay = true;
      bell.load();
    }
  },
};
