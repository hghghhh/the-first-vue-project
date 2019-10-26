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
import '../src/CSS/vue-preview.css';


Vue.use(VueRouter);
Vue.use(vueResource);

Vue.http.options.root = 'http://api.tianapi.com';
Vue.http.options.emulateJSON = true;
Vue.filter('dataFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(pattern)
})


// import { Header, Swipe, SwipeItem,Button,Lazyload } from 'mint-ui';
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);
// 按需加载不能实现懒加载，必须全部导入
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

// 引入vuex
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    // state可以相当于vm实例中的data属性    
    state:{
        url:""
    },
    mutations:{
        getUrl(state,photoinfourl) {
            state.url = photoinfourl
        }
    }
})

//引入vue-preview
import VuePreview from 'vue-preview'
Vue.use(VuePreview)


var vm = new Vue({
    el:"#app",
    render:c => c(app),
    router,
    store
})




