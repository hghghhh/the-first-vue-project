<template>
  <div class="photoList-container">
    <!-- 顶部滑动区域 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            v-for="item in cates"
            :key="item.id"
            :class="['mui-control-item',item.id === 0 ? 'mui-active':'']"
            @click="getPhotolist(item.id)"
          >{{ item.title }}</a>
        </div>
      </div>
    </div>

    <!-- 图片列表区域 -->
    <ul>
      <router-link v-for="item in list" :key="item.title" :to="'/home/photoinfo/' + item.id" tag="li">
        <img v-lazy.container="item.picUrl" />
        <div class="info">
          <h1 class="info-title">{{ item.description }}</h1>
          <div class="info-body">{{ item.title }}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>


<script>
import mui from "../../../lib/mui-master/js/mui.min.js";

export default {
  data() {
    return {
      cates: [
        { id: 0, title: "综合", url: "generalnews/" },
        { id: 1, title: "IT", url: "it/" },
        { id: 2, title: "体育", url: "tiyu/" },
        { id: 3, title: "科技", url: "keji/" },
        { id: 4, title: "军事", url: "military/" },
        { id: 5, title: "游戏", url: "game/" },
        { id: 6, title: "娱乐", url: "huabian/" }
      ],
      list: [], //图片列表数据
    };
  },

  methods: {
    getPhotolist(id) {
      this.list = [] // 清空新闻列表数据，准备重新获取
      this.$http
        .get(this.cates[id].url, {
          params: { key: "15632ad0534191c2eee477cf3de945e1", num: 20 }
        })
        .then(result => {
          if (result.body.code === 200) {
            result.body.newslist.forEach( (e,index) => {
              e.id = index
              e.title = e.title + "  " + e.title + "  " + e.title + "  " + e.title
            })
            this.list = result.body.newslist
            this.$store.commit('getUrl',this.cates[id].url)
          }
        })
    }
  },

  created() {
    this.getPhotolist(0);
  },

  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>


<style lang="scss" scoped>
.photoList-container {
  * {
    touch-action: pan-x;
  }
  ul {
    margin: 0;
    padding: 10px;
    padding-bottom: 0;

    li {
      position: relative;
      background-color: #ccc;
      list-style: none;
      padding: 0;
      margin-bottom: 10px;
      box-shadow: 0 0 9px #999;

      img {
        width: 100%;
        height: 100%;
        vertical-align: middle;
      }

      img[lazy="loading"] {
        width: 40px;
        height: 300px;
        margin: auto;
      }
    }

    .info {
      color: white;
      text-align: left;
      position: absolute;
      bottom: 0px;
      background-color: rgba(0, 0, 0, 0.4);
      max-height: 84px;

      .info-title {
        font-size: 14px;
      }
      .info-body {
        font-size: 13px;
      }
    }
  }
}
</style>