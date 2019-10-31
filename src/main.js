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


var shopCar = JSON.parse(localStorage.getItem("shopCar") || '[]')


// 引入vuex
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    // state可以相当于vm实例中的data属性    
    state: {
        url: "",
        shopCar: shopCar
    },
    mutations: {
        getUrl(state, photoinfourl) {
            state.url = photoinfourl
        },
        addToShopCar(state, shopInfo) {

            var flag = false

            state.shopCar.some(item => {
                if (item.id == shopInfo.id) {
                    item.count += parseInt(shopInfo.count)
                    flag = true
                    return true
                }
            })

            if (!flag) {
                state.shopCar.push(shopInfo)
            }

            localStorage.setItem("shopCar", JSON.stringify(state.shopCar))
        },
        updatedShopCarInfo(state, shopInfo) {
            state.shopCar.some(e => {
                if (e.id === shopInfo.id) {
                    e.count = parseInt(shopInfo.count)
                    return true
                }
            })

            localStorage.setItem("shopCar", JSON.stringify(state.shopCar))
        },
        removeShopInfo(state,id){
            state.shopCar.some( (e,i) => {
                if(e.id === id){
                    state.shopCar.splice(i,1)
                    return true
                }
            })

            localStorage.setItem("shopCar", JSON.stringify(state.shopCar))
        },
        updatedShopSelected(state,info) {
            state.shopCar.some( e => {
                if(e.id === info.id) {
                    e.selected = info.selected
                }
            })
            localStorage.setItem("shopCar", JSON.stringify(state.shopCar))
        }
    },
    getters: {
        getAllCount(state) {
            var a = 0
            state.shopCar.forEach(e => {
                a += e.count
            })
            return a
        },
        getShopCount(state) {
            var o = {}
            state.shopCar.forEach(e => {
                o[e.id] = e.count
            })

            return o
        },
        getShopSelected(state) {
            var o = {}
            state.shopCar.forEach( e => {
                o[e.id] = e.selected
            })
            return o
        },
        getShopCountAndAmount(state) {
            var o = {
                count:0, //勾选数量
                amount:0 //勾选总价
            }

            state.shopCar.forEach(e => {
                if(e.selected){
                    o.count += e.count
                    o.amount += e.count*e.price
                }
            })

            return o
        }
    }
})

//引入vue-preview
import VuePreview from 'vue-preview'
Vue.use(VuePreview)


var vm = new Vue({
    el: "#app",
    render: c => c(app),
    router,
    store
})