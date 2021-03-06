import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import './assets/theme/theme-green/index.css'
import VueRouter from 'vue-router'
import store from './vuex/store'
import Vuex from 'vuex'
import axios from 'axios'

import routes from './routes'
import Mock from './mock'
Mock.bootstrap();
import 'font-awesome/css/font-awesome.min.css'

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(axios);


const router = new VueRouter({
    routes
});

new Vue({
    el: '#app',
    template: '<App/>',
    router,
    store,
    components: { App },
    render: h => h(App)
}).$mount('#app');

