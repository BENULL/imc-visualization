<template>
  <div class="result-compare">
      <div class="fliters">

      </div>
      <div class="content">
        <el-card v-for="(item, index) in 100" :key="index"
        shadow="hover" :body-style="{ padding: '0px' }">
          <div style="padding: 14px">
            <h4>图片</h4>
          </div>
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          />
        </el-card>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({

});
</script>

<style lang="scss" scoped>
.result-compare {
  // width: 100%;
  // height: 300px;
  .text {
    color: #c3cbde;
  }
  .fliters {
    width: 100%;
    height: 40px;
    background-color: greenyellow;
  }
  .content {
    display: flex;
    margin-top: 10px;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
  }
}
</style>
