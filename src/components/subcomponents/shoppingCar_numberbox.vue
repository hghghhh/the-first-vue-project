<template>
  <div class="mui-numbox" data-numbox-min="1" style="height:25px; weight:100px">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input
      id="test"
      class="mui-input-numbox"
      type="number"
      :value="value"
      @change="countChanged"
      ref="numberbox"
      readonly
    />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from "../../../lib/mui-master/js/mui.min.js";
export default {

  props:["value","shopid"],
  methods: {
    countChanged() {
      this.$store.commit("updatedShopCarInfo", {
        id:this.shopid,
        count:this.$refs.numberbox.value
      })
    }
  },
  mounted() {
    mui(".mui-numbox").numbox();
  }
};
</script>
