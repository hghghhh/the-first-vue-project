<template>
    <div class="mui-numbox" data-numbox-min="1">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numberbox" />
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
import mui from "../../../lib/mui-master/js/mui.min.js"
export default {
    methods: {
        countChanged() {
            this.$emit("getcount", parseInt(this.$refs.numberbox.value))
        }
    },

    props:["max"],

    watch:{
        "max":function (newVal,oldVal) {
            mui(".mui-numbox").numbox().setOption("max", newVal)
        },
    },

    mounted() {
        mui(".mui-numbox").numbox()
    }
}
</script>
