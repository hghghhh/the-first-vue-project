// 根组件
<template>
  <div class="APPcontent">
    <!-- 头部区域 -->
    <mt-header fixed title="是你豪哥的第一个vue项目">
      <span slot="left" @click="goback">
        <mt-button icon="back" v-show="flag">返回</mt-button>
      </span>
    </mt-header>

    <!-- 中间区域 -->
    <transition>
      <router-view></router-view>
    </transition>

    <!-- 底部区域 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-hg" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-hg" to="/vip">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item-hg" to="/shoppingCar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge">{{this.$store.getters.getAllCount}}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-hg" to="/setting">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">设置</span>
      </router-link>
    </nav>
  </div>
</template>


<script>
export default {
  data() {
    return {
      shopNum: this.$store.state.shoppingNum,
      flag: false
    };
  },

  methods: {
    goback() {
      this.$router.go(-1);
    }
  },

  created() {
    this.flag = this.$route.path === "/home" ? false : true;
  },

  watch: {
    "$route.path": function(newVal) {
      if (newVal === "/home") {
        this.flag = false;
      } else {
        this.flag = true;
      }
    }
  }
};
</script>


<style lang="scss" scoped>
header.mint-header.is-fixed {
  z-index: 99;
}
.APPcontent {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.mui-bar-tab .mui-tab-item-hg.mui-active {
  color: #007aff;
}
.mui-bar-tab .mui-tab-item-hg {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .mui-tab-item-hg .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-hg .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>