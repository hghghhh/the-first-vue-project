// 路由文件
import Vuerouter from 'vue-router';
import home from './components/tabbar/home.vue';
import search from './components/tabbar/search.vue';
import shoppingCar from './components/tabbar/shoppingCar.vue';
import vip from './components/tabbar/vip.vue';
import newslist from './components/news/newslist.vue';
import newsinfo from './components/news/newsinfo.vue';



var router = new Vuerouter({
    routes:[
        { path:"/", redirect:"/home" },
        { path:"/home", component:home },
        { path:"/search", component:search },
        { path:"/shoppingCar", component:shoppingCar },
        { path:"/vip", component:vip },
        { path:"/home/newslist", component:newslist },
        { path:"/home/newsinfo/:id", component:newsinfo }
    ],
    linkActiveClass:'mui-active'
});



export default router;