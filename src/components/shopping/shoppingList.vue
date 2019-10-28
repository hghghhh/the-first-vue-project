<template>
  <div class="shopping-container">
    <div
      class="shopitem"
      v-for="item in shoppingList"
      :key="item.title"
      @click="toShoppingInfo(item.id)"
     
    >
      <img :src="item.picUrl">
      <h1>{{ item.title }}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{ item.nowPrice }}</span>
          <span class="last">￥{{ item.lastPrice }}</span>
        </p>
        <p class="message">
          <span>{{ item.sell }}</span>
          <span>剩{{ item.number }}件</span>
        </p>
      </div>
    </div>
    <mt-button
      @click="getMoreShoppingList"
      type="danger"
      size="large"
      v-if="this.pageindex < 5"
    >加载更多</mt-button>
  </div>
</template>


<script>
import shoppingInfoVue from './shoppingInfo.vue';
localStorage.setItem("ShoppingListPageindex",1)
export default {
  data() {
    return {
      shoppingList: [],
      pageindex:localStorage.getItem("ShoppingListPageindex")
    };
  },

  methods: {
    getshoppingList() {
      this.$http
        .get("nba/", {
          params: {
            key: "15632ad0534191c2eee477cf3de945e1",
            num: 9 * this.pageindex
          }
        })
        .then(result => {
        //     console.log(this.pageindex);
        //   if (result.body.code === 200) {
        //     if (this.pageindex === 1) {
        //       result.body.newslist.forEach((element, index) => {
        //         element.id = index;
        //       });
        //       this.shoppingList = result.body.newslist;
        //     } else {
        //         var newnum = this.pageindex * 11;
        //         var oldnum = (this.pageindex - 1) * 11;
        //         var moreShoppingList = result.body.newslist.slice(oldnum, newnum);
        //         moreShoppingList.forEach((e, i) => {
        //             e.id = (this.pageindex - 1) * 11 + i;
        //         });
        //         console.log(moreShoppingList,this.pageindex);
        //         this.shoppingList = this.shoppingList.concat(moreShoppingList);
        //     }
        //   }
        

            if(result.body.code === 200){
                result.body.newslist.forEach((e,i) => {
                    e.sell = "热卖中"
                    e.nowPrice = 4399
                    e.lastPrice = 5499
                    e.number = 60
                    e.id = i
                })

                 this.shoppingList = result.body.newslist
            }
        });
    },

    getMoreShoppingList() {
        this.pageindex++
        localStorage.setItem("ShoppingListPageindex", this.pageindex)
        this.getshoppingList()
    },

    toShoppingInfo(id) {
        //第一种方式，传字符串
        // this.$router.push("/home/shoppingInfo/" + id)
        // 第二种方式,传对象
        // this.$router.push({ path:"/home/shoppingInfo/" + id })
        // 第三种方式，传命名路由
        this.$router.push({ name:'shoppingInfo' , params:{ id }})
        // 第四种方式，带查询参数,变成 /home/shoppingInfo/?id=n
        // this.$router.push({ path: '/home/shoppingInfo/', query: { id }})


    }
  },

  created() {
    this.getshoppingList();
  }
};
</script>


<style lang="scss" scoped>
.shopping-container {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;

  .shopitem {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img {
      width: 100%;
    }
    h1 {
      font-size: 14px;
    }
    .info {
      background-color: #eee;
      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        .now {
          font-size: 16px;
          font-weight: bold;
          color: red;
        }
        .last {
          font-size: 12px;
          text-decoration: line-through;
          margin-left: 10px;
        }
      }
      .message {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}
</style>