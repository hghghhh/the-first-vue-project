<template>
    <div class="cmt-container">
        <h3>发表评论</h3>


        <hr>


        <textarea placeholder="请输入要评论的内容（最多输入120字）" maxlength="120"></textarea>


        <mt-button type="primary" size="large">发表评论</mt-button>


        <div class="cmt-list" v-for="(item,index) in comments" :key="item.quest">
            <div class="cmt-item">
                <div class="title">
                    第{{ index+1 }}楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;问题：{{ item.quest }}
                </div>
                <div class="body">
                    答案：{{ item.result }}
                </div>
            </div>
        </div>


        <mt-button type="danger" size="large" plain @click="getMoreComments">加载更多</mt-button>
    </div>
</template>


<script>
export default {
    data() {
        return{
            comments:[]
        }
    },

    methods: {
        getComments() {
            this.$http.get("txapi/naowan/" , { params: { key:'15632ad0534191c2eee477cf3de945e1', num:10 }}).then(result => {
                if(result.body.code === 200) {
                    // 每当获取新评论时，让原来的数据拼上新的数据，而不是把原来的数据清空
                    this.comments = this.comments.concat(result.body.newslist)
                }
            })
        },

        getMoreComments() {
            this.getComments()
        }
    },

    created() {
        this.getComments()
    },


}
</script>



<style lang="scss" scoped>
.cmt-container{
    h3{
        font-size: 18px;
    }
    textarea{
        font-size: 14px;
        height: 85px;
        margin: 0;
    }
    .cmt-list{
        margin: 5px 0px;
        .cmt-item{
            .title{
                background-color: #ccc;
                font-size: 13px;
                line-height: 30px;
            }
            .body{
                line-height: 35px;
                text-indent: 2em;
            }
        }
    }
}
</style>