// 入口文件
import Vue from 'vue';
import app from './App.vue';
import VueRouter from 'vue-router';
import router from './router.js';
import 'mint-ui/lib/style.css';
import '../lib/mui-master/dist/css/mui.min.css';
import '../lib/mui-master/dist/css/icons-extra.css';


Vue.use(VueRouter);


import { Header } from 'mint-ui';
Vue.component(Header.name, Header);


var vm = new Vue({
    el:"#app",
    render:c => c(app),
    router,
})




