<template>
  <div class="home">
    <div class="runningImages">
      <swiper :runningImgList="runningImgList"></swiper>
    </div>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link  to="/home/newslist">
          <img src="../../images/menu1.png" alt />
          <div class="mui-media-body">综合新闻</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photoList">
          <img src="../../images/menu2.png" alt />
          <div class="mui-media-body">分类新闻</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/shoppingList">
          <img src="../../images/menu3.png" alt />
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu4.png" alt />
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu5.png" alt />
          <div class="mui-media-body">视屏专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu6.png" alt />
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import swiper from '../subcomponents/swiper.vue'
export default {
  data() {
    return {
      runningImgList : []
    }
  },
  created () {
    this.getRunningImg();
  },
  methods: {
    getRunningImg () {
      this.$http.get('meinv/', {params : {key:'15632ad0534191c2eee477cf3de945e1',num:3}}).then(result =>{
        if( result.body.code === 200 ){
          this.runningImgList = result.body.newslist
        }else{
          Toast('Failed to get img');
        }
      })
    }
  },

  components:{
    swiper
  }
};
</script>

<style scoped>
.home {
  background-color: #fff;
}


.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
}
.mui-table-view-cell img {
  width: 60px;
  height: 60px;
}
.mui-media-body {
  font-size: 13px;
}


</style>