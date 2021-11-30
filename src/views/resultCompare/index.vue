<template>
  <div class="result-compare">
    <div class="fliters"></div>
    <div class="content" v-if="resultData">
      <resultCard
        v-for="(item, index) in resultData.results"
        :key="index"
        :data="{
          item: item,
          model: resultData.model,
          record: resultData.record,
        }"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";
import { fetchResult, fetchCategory } from "@/api";
import resultCard from "../../components/resultCard/index.vue";

export default defineComponent({
  components: {
    resultCard,
  },
  setup() {
    const resultData = ref();

    const fetchResultData = () => {
      fetchResult().then((response) => {
        // data.result = response.data
        resultData.value = response.data;
        console.log(resultData);
      });
    };
    onMounted(() => {
      fetchResultData();
    });
    return {
      resultData,
    };
  },
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
    // background-color: greenyellow;
  }
  .content {
    height: 410px;
    overflow: auto;
    display: flex;
    margin-top: 10px;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
  }
}
</style>
