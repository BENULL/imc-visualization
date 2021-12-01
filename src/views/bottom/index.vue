<template>
  <div class="bottom">
    <div class="bg-color-black">
      <div class="d-flex pl-2">
        <span>
          <i class="iconfont icon-chart-line" />
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2 mt-1">检测结果</span>
        </div>
      </div>
      <div>
        <resultCompare />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import resultCompare from "../resultCompare/index.vue"
export default defineComponent({
  components: {
    resultCompare,
  },
});
</script>

<style lang="scss" scoped>
$box-height: 520px;
$box-width: 100%;
.bottom {
  padding: 10px 16px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    height: $box-height - 20px;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  .chart-box {
    margin-top: 16px;
    width: 170px;
    height: 170px;
    .active-ring-name {
      padding-top: 10px;
    }
  }
}
</style>
