// 入口文件
import Vue from 'vue';
import app from './App.vue';
import VueRouter from 'vue-router';
import router from './router.js';
import vueResource from 'vue-resource';
import moment from 'moment';
import 'mint-ui/lib/style.css';
import '../lib/mui-master/dist/css/mui.min.css';
import '../lib/mui-master/dist/css/icons-extra.css';


Vue.use(VueRouter);
Vue.use(vueResource);

Vue.http.options.root = 'http://api.tianapi.com';
Vue.filter('dataFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(pattern)
})


import { Header, Swipe, SwipeItem,Button } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);


var vm = new Vue({
    el:"#app",
    render:c => c(app),
    router,
})




