<template>
  <div class="centerLeft2">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <i class="iconfont icon-align-left" />
        </span>
        <span class="fs-xl text mx-2">检测分类结果</span>
        <dv-decoration-1 class="dv-dec-3" />
      </div>
      <div class="d-flex ai-center flex-column body-box">
        <dv-capsule-chart class="dv-cap-chart" :config="config" />
        <chart />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import Chart from './chart/index.tsx'

export default defineComponent({
  components: {
    Chart
  },
  setup() {
    const config = reactive({
      data: [
        { value: 10, name: '线状隐裂' },
        { value: 5, name: '网状隐裂' },
        { value: 15, name: '破片' },
        { value: 25, name: '划痕' },
        { value: 20, name: '虚焊' },
        { value: 35, name: '断栅' }
      ]
    })

    return { config }
  }
})
</script>

<style lang="scss" scoped>
$box-height: 400px;
$box-width: 380px;
.centerLeft2 {
  padding: 16px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;
  .dv-dec-3 {
    position: relative;
    width: 180px;
    height: 20px;
    top: -3px;
  }
  .bg-color-black {
    // padding: 5px;
    height: 380px;
    // width: $box-width;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  .body-box {
    border-radius: 10px;
    overflow: hidden;
    .dv-cap-chart {
      width: 95%;
      height: 160px;
    }
  }
}
</style>
