<template>
  <div class="card" :class="mode">
    <el-card
      shadow="hover"
      :class="{ positive: data.item.score > data.threshold, negative: data.item.score < data.threshold }"
      :body-style="{ padding: '0px' }"
    >
      <div class="card-header">
        <span class="img-name">{{
          data.item.image_src.replace(/\.[^/.]+$/, "")
        }}</span>
        <div class="score">{{ data.item.score }}</div>
      </div>
      <div class="card-content">
        <div class="img-content">
          <img
            :src="`http://10.176.54.40:21602/${data.model}/${data.record}/${data.item.image_src}`"
          />
        </div>
        <div class="img-content">
          <img
            :src="`http://10.176.54.40:21602/${data.model}/${data.record}/${data.item.image_src}`"
          />
        </div>
      </div>
    </el-card>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  props: {
    data: Object,
  },
  setup() {
    const route = useRoute();
    const mode = computed(() => {
      return {
        dark: route.path === "/",
        simple: route.path !== "/",
      };
    });
    return {
      mode,
    };
  },
});
</script>
<style lang="scss" scoped>
.card {
  .el-card {
    border-radius: 10px;
    overflow: hidden;
    transition: var(--el-transition-duration);
    margin-bottom: 15px;
    .card-header {
      padding: 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-weight: bolder;
      .score {
        font-family: cursive;
        font-size: xx-large;
        font-weight: bolder;
      }
    }
    .card-content {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-around;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.dark {
  .positive {
    color: #3de7c9;
  }
  .negative {
    color: #fa7293ad;
  }
  .el-card {
    border: 1px solid #1b4a84;
    background-color: rgba(19, 25, 47, 0.6);
    .card-header {
      background-color: #1b4a847a;
    }
    .card-content {
      .img-content {
        border: 2px solid;
        width: 170px;
        height: 365px;
        margin: 5px 5px 5px 5px;
      }
    }
  }
}
.simple {
  .positive {
    color: #3de7c9;
  }
  .negative {
    color: #e73e3d;
  }
  .el-card {
    border: 1px solid #909399;
    box-shadow: 3px 3px 3px #909399;
    background-color: #b6b6b6;
    .card-header {
      background-color: #152d3dcc;
    }
    .card-content {
      .img-content {
        border: 2px solid;
        width: 140px;
        height: 340px;
        margin: 5px 5px 5px 5px;
      }
    }
  }
}
</style>
