<template>
  <div class="newsinfo-container">

    <!-- 标题 -->
    <h3 class="title">{{ this.newsInfo.title}}</h3>


    <!-- 子标题 -->
    <p class="message">
      <span>发表时间：{{ this.newsInfo.mtime | dataFormat('YYYY-MM-DD') }}</span>
      <span>来源：{{ this.newsInfo.source }}</span>
    </p>

    <hr />


  <!-- 内容区域 -->
    <div class="content">
      <a :href="this.newsInfo.url">点击该区域查看详情</a>
    </div>

  <!-- 评论区域 -->
  <comment-box></comment-box>

  </div>
</template>



<script>

import comment from "../subcomponents/comment.vue"


export default {
  data() {
    return {
      id: this.$route.params.id,
      newsInfo: {},
    };
  },


  methods: {
    getNewsInfo() {
      this.$http.get('bulletin/', { params:{ key:'15632ad0534191c2eee477cf3de945e1' }}).then(result => {
        if(result.body.code === 200){
          this.newsInfo = result.body.newslist[this.id];
        }
      })
    }
  },


  created() {
    this.getNewsInfo();
  },

  components:{
    "comment-box":comment
  }
};
</script>



<style lang="scss" scoped>
.newsinfo-container {
  padding: 0 4px;
  .title {
    color: red;
    text-align: center;
    font-size: 16px;
    margin: 15px 0;
  }
  .message {
    display: flex;
    justify-content: space-between;
    color: #226aff;
    font-size: 14px;
  }
  .content a{
    line-height: 1000px;
    text-align: center;
    display: block;
    height: 1000px;
    background-color: #ccc;
  }
}
</style>