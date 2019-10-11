<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key='item.mtime'>
        <router-link :to="'/home/newsinfo/' + item.id" >
          <img class="mui-media-object mui-pull-left" :src="item.imgsrc" />
          <div class="mui-media-body">
            <h1>{{ item.title }}</h1>
            <p class="mui-ellipsis">
                <span>发表时间：{{ item.mtime | dataFormat('YYYY-MM-DD')}}</span>
                <span>来源： {{ item.source }}</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  data(){
    return{
      newsList:[]
    }
  },
  created(){
    this.getNewsList();
  },
  methods: {
    getNewsList () {
      this.$http.get('bulletin/', { params:{ key:'15632ad0534191c2eee477cf3de945e1' }}).then(result => {
        if(result.body.code === 200) {
          result.body.newslist.forEach((element,index) => {
            element.id = index;
          });
          this.newsList = result.body.newslist;
        }
      })
    }
  },
};
</script>



<style lang="scss" scoped>
.mui-table-view{
    li{
        h1{
          font-size: 14px;
          }
      .mui-ellipsis{
          font-size: 12px;
          color: #226aff;
          display: flex;
          justify-content: space-between;
          }
      }
}
</style>