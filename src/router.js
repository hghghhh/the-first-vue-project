// 路由文件
import Vuerouter from 'vue-router';
import home from './components/home.vue';
import search from './components/search.vue';
import shoppingCar from './components/shoppingCar.vue';
import vip from './components/vip.vue';



var router = new Vuerouter({
    routes:[
        { path:"/", redirect:"/home" },
        { path:"/home", component:home },
        { path:"/search", component:search },
        { path:"/shoppingCar", component:shoppingCar },
        { path:"/vip", component:vip }
    ],
    linkActiveClass:'mui-active'
});



export default router;