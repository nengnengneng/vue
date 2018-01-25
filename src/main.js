import Vue from 'vue';
import App from './App.vue';
import axios from './http/axios';
import router from './router/index';
import Mint from 'mint-ui';
import './assets/reset.css';
import './assets/fonts/iconfont.css';
import 'mint-ui/lib/style.css';
import { store } from '../src/store/store';
Vue.use(Mint);

new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
})
