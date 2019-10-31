// 路由文件
import Vuerouter from 'vue-router';
import home from './components/tabbar/home.vue';
import setting from './components/tabbar/setting.vue';
import shoppingCar from './components/tabbar/shoppingCar.vue';
import vip from './components/tabbar/vip.vue';
import newslist from './components/news/newslist.vue';
import newsinfo from './components/news/newsinfo.vue';
import photoList from './components/photos/photoList.vue';
import photoInfo from './components/photos/photoInfo.vue';
import shoppingList from './components/shopping/shoppingList.vue';
import shoppingInfo from './components/shopping/shoppingInfo.vue';
import shoppingDes from './components/shopping/shoppingDes.vue';
import shoppingCom from './components/shopping/shoppingCom.vue';



var router = new Vuerouter({
    routes:[
        { path:"/", redirect:"/home" },
        { path:"/home", component:home },
        { path:"/setting", component:setting },
        { path:"/shoppingCar", component:shoppingCar },
        { path:"/vip", component:vip },
        { path:"/home/newslist", component:newslist },
        { path:"/home/newsinfo/:id", component:newsinfo },
        { path:"/home/photoList" , component:photoList },
        { path:"/home/photoinfo/:id", component:photoInfo },
        { path:"/home/shoppingList", component:shoppingList },
        { path:"/home/shoppingInfo/:id", component:shoppingInfo, name:'shoppingInfo' },
        { path:"/home/shoppingDes/:id", component:shoppingDes },
        { path:"/home/shoppingCom/:id", component:shoppingCom }
    ],
    linkActiveClass:'mui-active'
});



export default router;