<template>
  <div class="shoppingInfo-container">
    <!-- 商品轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner runningImages">
            <swiper :runningImgList="runningImgList"></swiper>
        </div>
      </div>
    </div>

    <!-- 商品购买区域 -->
    <div class="mui-card goodsbuy-container">
      <div class="mui-card-header">{{this.shoppingInfo.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
            <p class="price">
                <span>市场价: <span class="last_price">5499</span></span>
                <span>销售价：<span class="now_price">4399</span></span>
            </p>
            <p class="buy_num">购买数量：<numbox @getcount="getSelcetedCount" :max="this.shoppingInfo.storageNum"></numbox></p>
            <p class="get_shoppingcar">
                <mt-button type="primary" size="small">立即购买</mt-button>
                <mt-button type="danger" size="small" @click="addShoppingcar">加入购物车</mt-button>
            </p>
        </div>
      </div>
    </div>

    <!-- 商品参数区域 -->
    <div class="mui-card">
        <div class="mui-card-header">商品参数</div>
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
                <p>商品货号：1000048150{{this.shoppingInfo.id}}</p>
                <p>库存情况：{{this.shoppingInfo.storageNum}}件</p>
                <p>上架时间：{{this.shoppingInfo.ctime}}</p>
            </div>
        </div>
        <div class="mui-card-footer">
            <mt-button size="large" type="primary" plain @click="toShoppingDes(id)">商品介绍</mt-button>
            <mt-button size="large" type="danger" plain @click="toShoppingCom(id)">商品评论</mt-button>
        </div>
    </div>

    <transition
    @before-enter="beforeenter"
    @enter="enter"
    @after-enter="afterenter">
        <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>

  </div>
</template>


<script>
import swiper from "../subcomponents/swiper.vue"
import numbox from "../subcomponents/shopping_numbox.vue"
export default {
    data() {
        return {
            runningImgList:[] ,//轮播图数据
            id:this.$route.params.id,
            ballFlag:false, //控制小球的显示和隐藏标志
            selectedCount:1, //保存用户选中的商品的数量，默认用户买1个
            title:"",
            stoNum:0,
            shoppingInfo:[] //商品详情项的数据
        }
    },
    components:{
        swiper,
        numbox
    },
    methods: {
        getShoppingImg() {
            this.$http.get("nba/" , { params:{key: "15632ad0534191c2eee477cf3de945e1",num:47}}).then( result =>{
                if(result.body.code === 200){
                    this.runningImgList = result.body.newslist.slice(this.id,this.id+3)
                    this.shoppingInfo = result.body.newslist[this.id]
                    console.log(this.shoppingInfo);
                    this.shoppingInfo.id = parseInt(this.id)
                    this.shoppingInfo.storageNum = 88 + parseInt(this.id)
                    this.shoppingInfo.ctime = "2019-10-1"
                    this.shoppingInfo.last_price = 5499
                    this.shoppingInfo.now_price = 4399
                    console.log(this.runningImgList[0]);
                    console.log(this.shoppingInfo);
                    if(this.runningImgList[0] === this.shoppingInfo){console.log("5");} 
                    //问题1：为什么两者会相等；
                    // 问题2：为什么渲染数据时用this.runningImgList[0]会报错，用this.shoppingInfo就不会报错;
                    // 问题3：为什么第一局打印shoppingInfo时会把后边添加的属性打印出来
                }
            })
        },

        toShoppingDes(id) {
            this.$router.push({path:"/home/shoppingDes/"+id})
        },

        toShoppingCom(id) {
            this.$router.push({path:"/home/shoppingCom/"+id})
        },

        addShoppingcar() {
            this.ballFlag = !this.ballFlag
        },

        beforeenter(el) {
            el.style.transform = "translate(0,0)"
        },

        enter(el,done) {
            el.offsetWidth

            // 获取小球在页面中的位置
            const ballPosition = this.$refs.ball.getBoundingClientRect()
            // 获取购物车小标的位置
            const badgePosition = document.getElementById("badge").getBoundingClientRect()

            const xDist = badgePosition.left - ballPosition.left
            const yDist = badgePosition.top - ballPosition.top

            el.style.transform = `translate(${xDist}px,${yDist}px)`
            el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)"
            done()
        },

        afterenter(el) {
            this.ballFlag = !this.ballFlag
        },

        getSelcetedCount(count) {
            this.selectedCount = count
        }
    },
    created() {
        this.getShoppingImg()
    }
};
</script>


<style lang="scss" scoped>
.shoppingInfo-container{
    background-color: #eee;
    overflow: hidden;

    .goodsbuy-container{
        .price{
            .last_price{
                text-decoration: line-through;
                font-size: 14px;
            }
            .now_price{
                color: red;
                font-weight: bold;
                font-size: 18px;
            }
        }
    }

    .runningImages{
        height: 200px;
        padding: 0; 
    }

    .mui-card-footer{
        display: block;

        button{
            margin: 15px 0;
        }
    }

    .ball{
        width: 15px;
        height: 15px;
        background-color: red;
        border-radius: 50%;
        position: absolute;
        bottom: 246px;
        left: 150px;
        z-index: 99;
    }
}
</style>