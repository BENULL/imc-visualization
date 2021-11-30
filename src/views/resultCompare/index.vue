<template>
  <div class="result-compare">
      <div class="fliters">

      </div>
      <div class="content" v-if="resultData">
        <el-card v-for="(item, index) in resultData.results" :key="index"
        shadow="hover" :body-style="{ padding: '0px' }">
          <div style="padding: 14px">
            <h4>{{item.image_name}}</h4>
          </div>
          <img
            :src="`/static/${resultData.model}/${resultData.record}/images/${item.image_name}`"
          />
        </el-card>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";
import { fetchResult, fetchCategory } from '@/api'
export default defineComponent({
  setup() {
    const resultData = ref()

    const fetchResultData = ()=>{
      fetchResult().then((response)=>{
        // data.result = response.data
        resultData.value = response.data
        console.log(resultData)
      })
    }
    onMounted(()=>{
      fetchResultData()
    })
    return {
      resultData
    }
  }


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
