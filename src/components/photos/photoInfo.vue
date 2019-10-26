<template>
  <div class="photoinfo-container">
    <h3>{{ photoInfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ photoInfo.ctime | dataFormat('YYYY-MM-DD') }}</span>
      <span>来源：{{ photoInfo.description }}</span>
    </p>

    <hr />

    <!-- 缩略图区域 -->

    <div class="thumbs">
      <vue-preview :slides="slide" @close="handleClose"></vue-preview>
    </div>

    <!-- 图片内容区域 -->
    <div class="content">
      <p class="subcontent">{{ photoInfo.content }}</p>
    </div>

    <!-- 评论子组件 -->
    <cmt-box></cmt-box>
  </div>
</template>



<script>
import comment from "../subcomponents/comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      url: this.$store.state.url,
      photoInfo: [],
      slide: [
        {
          msrc: "",
          src: "",
          w: 400,
          h: 300
        },
        {
          msrc: require("../../images/图1.jpg"),
          src: require("../../images/图1.jpg"),
          w: 400,
          h: 300
        },
        {
          msrc: require("../../images/图2.jpg"),
          src: require("../../images/图2.jpg"),
          w: 400,
          h: 300
        },
        {
          msrc: require("../../images/图3.jpg"),
          src: require("../../images/图3.jpg"),
          w: 400,
          h: 300
        },
        {
          msrc: require("../../images/图4.jpg"),
          src: require("../../images/图4.jpg"),
          w: 400,
          h: 300
        }
      ]
    };
  },

  methods: {
    getphotoinfo() {
      id = this.id;
      url = this.url;

      this.$http
        .get(url, {
          params: { key: "15632ad0534191c2eee477cf3de945e1", num: 20 }
        })
        .then(result => {
          if (result.body.code === 200) {
            result.body.newslist[id].content ="人可以不上大学，但，不可以没有知识。无论处境和地位多么遭，只要心态放平，做好应该做的事，人就活得充实。不要想得太多，简单的心一旦复杂起来，幸福和快乐就会离我们而去。人做事情岂能尽如人意，但求无愧于心就可以了。";
            this.photoInfo = result.body.newslist[id]
            this.slide[0].msrc = this.slide[0].src = result.body.newslist[id].picUrl
          }
        });
    },

    handleClose() {
      console.log("close event");
    }
  },

  created() {
    this.getphotoinfo();
  },

  components: {
    "cmt-box": comment
  }
};
</script>



<style lang="scss" scoped>
.photoinfo-container {
  padding: 3px;
  h3 {
    font-size: 15px;
    color: #26a2ff;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  .content {
    font-size: 13px;
    line-height: 30px;
  }
}
</style>