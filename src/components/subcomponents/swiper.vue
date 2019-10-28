<template>
  <div class="runningImages">
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="item in runningImgList" :key="item.title">
        <img :src="item.picUrl" alt />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>


<script>
export default {
    props:["runningImgList"]
};
</script>


<style lang="scss" scoped>
.runningImages {
  width: 100%;
  height: 200px;
}
.runningImages img {
  width: 100%;
  height: 100%;
}
</style>