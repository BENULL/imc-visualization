<template>
  <div class="content">
    <el-card shadow="hover" :body-style="{ padding: '0px' }">
      <div style="padding: 14px">
        <h4>{{ data.item.image_name.replace(/\.[^/.]+$/, "") }}</h4>
      </div>
      <div class="img-content">
        <img
          class="imgae"
          :src="`/static/${data.model}/${data.record}/images/${data.item.image_name}`"
        />
        <img
          class="mask"
          :src="`/static/${data.model}/${data.record}/masks/${data.item.image_name}`"
        />
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
<style lang="sass" scoped>
</style>
