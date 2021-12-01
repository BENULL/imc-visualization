<template>
  <div class="card">
    <el-card shadow="hover" :body-style="{ padding: '0px' }">
      <div class="card-header">
        <span class="img-name">{{
          data.item.image_name.replace(/\.[^/.]+$/, "")
        }}</span>
        <div class="score">{{ data.item.score }}</div>
      </div>
      <div class="card-content">
        <div class="img-content">
          <img
            :src="`/static/${data.model}/${data.record}/images/${data.item.image_name}`"
          />
        </div>
        <div class="img-content">
          <img
            :src="`/static/${data.model}/${data.record}/masks/${data.item.image_name}`"
          />
        </div>
      </div>
    </el-card>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    data: Object,
  },
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
.card {
  .el-card {
    border-radius: 10px;
    border: 1px solid #1b4a84;
    overflow: hidden;
    color: #3de7c9;
    background-color: rgba(19, 25, 47, 0.6);
    transition: var(--el-transition-duration);
    margin-bottom: 15px;
    .card-header {
      padding: 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      background-color: #1b4a847a;
      .img-name {
      }
      .score {
      }
    }
    .card-content {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-around;
      .img-content {
        border: 2px solid;
    width: 170px;
    height: 365px;
    margin: 5px 5px 5px 5px;
      }
      img {
        width:100%;
        height:100%;
      }
    }
  }
}
</style>
