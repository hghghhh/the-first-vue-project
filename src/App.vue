// 根组件
<template>
  <div class="APPcontent">
    <!-- 头部区域 -->
    <mt-header fixed title="是你豪哥的第一个vue项目"></mt-header>

    <!-- 中间区域 -->
    <transition>
        <router-view></router-view>
    </transition>

    <!-- 底部区域 -->
    <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item" to="/home">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item" to="/vip">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">会员</span>
        </router-link>
        <router-link class="mui-tab-item" to="/shoppingCar">
          <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
            <span class="mui-badge">0</span>
          </span>
          <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link class="mui-tab-item" to="/search">
          <span class="mui-icon mui-icon-gear"></span>
          <span class="mui-tab-label">搜索</span>
        </router-link>
    </nav>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>


<style scoped>
.APPcontent {
  padding-top: 40px;
}
.v-enter,
.v-leave-to{
    opacity: 0;
    transform: translateX(100%)
}
</style>