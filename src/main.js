import { createApp } from 'vue';
import App from '@/App.vue';
import store from '@/services/store';
import router from '@/services/router';
import '@/registerServiceWorker';
import '@/services/axios';
import '@/services/styles';

const app = createApp(App);

app.use(store);
app.use(router);

app.config.errorHandler = function (err, vm, info) {
  // handle error
  // `info` is a Vue-specific error info, e.g. which lifecycle hook
  // the error was found in. Only available in 2.2.0+
  // console.error('Vue Global Error Handler:', err, info);
  // Send the error to a remote logging service, or show it on the interface.
}

app.mount('#app');
