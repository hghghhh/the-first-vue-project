<template>
    <div class="shoppingDes-container">
        <h1>{{this.shoppingDesList.title}}</h1>
        <hr>
        <img :src="this.shoppingDesList.picUrl" alt="">
        <a :href="this.shoppingDesList.url">点击此区域跳转到对应页面</a>
    </div>
</template>


<script>
export default {
    data() {
        return {
            shoppingDesList:[], //商品图文介绍数据
            id:this.$route.params.id
        }
    },
    

    methods: {
        getShoppingDes() {
            this.$http.get("nba/",{params:{key: "15632ad0534191c2eee477cf3de945e1",num:45}}).then(result => {
                if(result.body.code === 200) {
                    this.shoppingDesList = result.body.newslist[this.id]
                    console.log(this.shoppingDesList);
                }
            })
        }
    },

    created() {
        this.getShoppingDes()
    }
}
</script>

<style lang="scss" scoped>
    .shoppingDes-container{
        padding: 5px;
        h1{
            font-size: 16px;
            color: #226aff;
            text-align: center;
            margin: 15px 0;
        }
        img{
            width: 100%;
            height: 200px;
        }
        a{
            display: block;
            width: 100%;
            height: 1000px;
            background-color: #eee;
            text-align: center;
            line-height: 1000px;
        }
    }
</style>