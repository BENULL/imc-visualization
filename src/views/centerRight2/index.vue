<template>
  <div class="centerRight2">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <i class="iconfont icon-vector" />
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">任务完成排行榜</span>
        </div>
      </div>
      <div class="d-flex mt-1 jc-center body-box">
        <dv-scroll-board class="dv-scr-board" :config="config" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  setup() {
    const config = reactive({
      header: ['模型', '迭代次数', '准确率','召回率'],
      data: [
        ['模型1', '12', "<span  class='colorGrass'>75%</span>", "<span  class='colorGrass'>75%</span>"],
        ['模型2', '10', "<span  class='colorRed'>33%</span>", "<span  class='colorGrass'>75%</span>"],
        ['模型3', '8', "<span  class='colorGrass'>100%</span>", "<span  class='colorGrass'>75%</span>"],
        ['模型4', '43', "<span  class='colorGrass'>94%</span>", "<span  class='colorGrass'>75%</span>"],
        ['模型5', '10', "<span  class='colorGrass'>95%</span>", "<span  class='colorGrass'>75%</span>"],
        ['模型6', '20', "<span  class='colorGrass'>63%</span>", "<span  class='colorGrass'>75%</span>"],
        ['模型7', '30', "<span  class='colorGrass'>84%</span>", "<span  class='colorGrass'>75%</span>"],
        ['模型8', '41', "<span  class='colorRed'>46%</span>", "<span  class='colorGrass'>75%</span>"],
        ['模型9', '11', "<span  class='colorRed'>13%</span>", "<span  class='colorGrass'>75%</span>"],
        ['模型10', '21', "<span  class='colorGrass'>76%</span>", "<span  class='colorGrass'>75%</span>"]
      ],
      rowNum: 7, //表格行数
      headerHeight: 35,
      headerBGC: '#0f1325', //表头
      oddRowBGC: '#0f1325', //奇数行
      evenRowBGC: '#171c33', //偶数行
      index: false,
      columnWidth: [60],
      align: ['center']
    })
    return { config }
  }
})
</script>

<style lang="scss" scoped>
$box-height: 410px;
$box-width: 350px;
.centerRight2 {
  padding: 16px;
  padding-top: 20px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    height: $box-height - 30px;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  .body-box {
    border-radius: 10px;
    overflow: hidden;
    .dv-scr-board {
      width: 270px;
      height: 340px;
    }
  }
}
</style>
