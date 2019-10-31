<template>
  <div class="shoppingCar-container">
    <div class="shopInfo">
      <div class="mui-card">
        <div class="mui-card-content" v-for="(item,i) in shopCarList">
          <div class="mui-card-content-inner">
            <mt-switch v-model="$store.getters.getShopSelected[item.id]" @change="selectedChange(item.id,$store.getters.getShopSelected[item.id])"></mt-switch>
            <img
              :src="item.picUrl"
            />
            <div class="info">
              <h1>{{item.title}}</h1>
              <p>
                <span class="price">￥{{ item.now_price }}</span>
                <numbox :value="$store.getters.getShopCount[item.id]" :shopid="item.id"></numbox>
                <a href="#" @click.prevent="deleShopinfo(item.id,i)">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner jiesuan">
          <div class="left">
            <p>总计（不含运费）</p>
            <p>已勾选<span class="red">{{ $store.getters.getShopCountAndAmount.count }}</span>件，总价<span class="red">￥{{ $store.getters.getShopCountAndAmount.amount }}</span></p>
          </div>
          <mt-button type="danger">去结算</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import numbox from "../subcomponents/shoppingCar_numberbox.vue";

export default {
  data() {
    return {
      shopCarList: []
    };
  },

  methods: {
    getShopCarList() {
      var idArr = []
      this.$store.state.shopCar.forEach(item => idArr.push(item.id)); //获取购物车里边所有商品的id
      if (idArr.length <= 0){ //假如购物车中没有商品，则直接返回
        return
      }
      this.$http
        .get("nba/", {
          params: { key: "15632ad0534191c2eee477cf3de945e1", num: 45 }
        })
        .then(result => {
          result.body.newslist.forEach((e,i) => {
            e.id = i
            e.now_price = 4399 + i
          })
          idArr.forEach(e => {
            this.shopCarList.push(result.body.newslist[e])
          })
        });
    },
    deleShopinfo(id,index) {
      this.shopCarList.splice(index,1)
      this.$store.commit("removeShopInfo",id)
    },
    selectedChange(id,val) {
      this.$store.commit("updatedShopSelected",{ id, selected:val })
    }
  },

  created() {
    this.getShopCarList();
  },

  components: {
    numbox
  }
};
</script>

<style lang="scss" scoped>
.shoppingCar-container {
  background-color: #eee;
  overflow: hidden;

  .shopInfo {
    .mui-card-content-inner {
      display: flex;
      align-items: center;
      padding: 10px;

      img {
        width: 50px;
        height: 60px;
      }

      .info {
        margin-left: 10px;

        h1 {
          font-size: 14px;
          line-height: 20px;
          margin-bottom: 10px;
        }
        .price {
          color: red;
          font-weight: bold;
        }
      }
    }
  }

  .jiesuan{
    display: flex;
    justify-content: space-between;
    align-items: center;

    .red{
      color: red;
      font-weight: bold;
      font-size: 16px;
    }
  }
}
</style>