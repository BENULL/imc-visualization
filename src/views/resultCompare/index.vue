<template>
  <div class="result-compare">
    <div class="fliters">
      <el-cascader
        placeholder="数据源"
        :options="options"
        :props="{ expandTrigger: 'hover' }"
        @change="handleCascaderChange"
      ></el-cascader>

      <el-check-tag :checked="positive" >正样本</el-check-tag>
      <el-check-tag :checked="negative" >负样本</el-check-tag>
      <el-slider v-model="ranges" range :marks="marks" :min="0" :max="100"> </el-slider>
      <el-input v-model="searchInput" placeholder="图片名称" clearable>
        <template #append>
          <el-button type="info" plain @click="searchClick"
            ><el-icon><Search /></el-icon
          ></el-button>
        </template>
      </el-input>
    </div>
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
import { defineComponent, onMounted, reactive, ref, toRefs } from "vue";
import { fetchResult, fetchCategory } from "@/api";
import resultCard from "../../components/resultCard/index.vue";
import { Search } from "@element-plus/icons";

export default defineComponent({
  components: {
    resultCard,
    Search
  },
  setup() {
    const resultData = ref();

    const searchInput = ref("");
    const searchClick = () => {
      // TODO search function
      alert(searchInput.value);
    };

    const state = reactive({
      positive: true,
      negative: true,
      ranges: [0,100],
      marks: {
        0: '0',
        20:'20',
        40:'40',
        60:'60',
        80:'80'
      },
      options:[{
        label:'labl',
        value:"12",
        children:[{
          label:'12',
          value:"12",
          children:[]
        }]
      }],
    });
    const handleCascaderChange = (value) => {
      console.log(value);
    };

    const fetchResultData = () => {
      fetchResult().then((response) => {
        // data.result = response.data
        resultData.value = response.data;
      });
    };
    onMounted(() => {
      fetchResultData();
    });
    return {
      resultData,
      ...toRefs(state),
      handleCascaderChange,
      searchClick,
      searchInput,
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
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    .el-slider{
      width:25%
    }
    .el-input-group {
      width:15%;
    }
  }
  .content {
    height: 420px;
    overflow: auto;
    display: flex;
    margin-top: 10px;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
  }
}
</style>
