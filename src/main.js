import { createApp } from 'vue'
import App from './App.vue'

import router from './router';
import store from './store';
// import auth from './store/auth'

import loading from '@/components/shared/Loading.vue'


const app = createApp(App);

app.use(router);
app.use(store);
app.component('loading',loading);

app.mount('#app');
