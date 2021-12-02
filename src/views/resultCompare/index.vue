<template>
  <div class="result-compare">
    <div class="fliters">
      <el-cascader
        class="cascader"
        placeholder="数据源"
        :options="options"
        v-model="cascaderValue"
        :props="{ expandTrigger: 'hover' }"
        @change="handleCascaderChange"
      ></el-cascader>

      <el-check-tag class="tag" :checked="positive" @change="posChange"
        >正样本</el-check-tag
      >
      <el-check-tag class="tag" :checked="negative" @change="negChange"
        >负样本</el-check-tag
      >
      <el-slider
        class="slider"
        v-model="ranges"
        range
        :marks="marks"
        :min="0"
        :max="100"
      >
      </el-slider>
      <el-input
        class="input"
        v-model="searchInput"
        placeholder="图片名称"
        clearable
      >
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
import { RefreshLeft, Search } from "@element-plus/icons";

export default defineComponent({
  components: {
    resultCard,
    Search,
  },
  setup() {
    const resultData = ref();
    const state = reactive({
      positive: true,
      negative: true,
      searchInput: "",

      ranges: [0, 100],
      marks: {
        0: "0",
        20: "20",
        40: "40",
        60: "60",
        80: "80",
      },
      cascaderValue: [],
      test_time: String,
      threshold: Number,
      options: [],
    });

    const handleCascaderChange = (value) => {
      state.cascaderValue = value;
      console.log(value);
    };

    const fetchCategoryData = () => {
      fetchCategory().then((response) => {
        state.options = response.data;
        state.cascaderValue[0] = state.options[0].value;
        state.cascaderValue[1] = state.options[0].children[0].value;
        state.test_time = state.options[0].children[0].test_time;
        state.threshold = state.options[0].children[0].threshold;
      });
    };

    const fetchResultData = () => {
      fetchResult({
        model: state.cascaderValue[0],
        record: state.cascaderValue[1],
      }).then((response) => {
        // data.result = response.data
        resultData.value = response.data;
      });
    };
    const posChange = (checked) => {
      state.positive = checked;
    };
    const negChange = (checked) => {
      state.negative = checked;
    };
    const searchClick = () => {
      // TODO search function
      alert(state.searchInput);
    };

    onMounted(() => {
      fetchCategoryData();
      fetchResultData();
    });
    return {
      resultData,
      ...toRefs(state),
      handleCascaderChange,
      searchClick,
      posChange,
      negChange,
    };
  },
});
</script>

<style lang="scss" scoped>
::v-deep .el-input {
}
.result-compare {
  // width: 100%;
  // height: 300px;
  .text {
    color: #c3cbde;
  }
  .fliters {
    width: 100%;
    height: 50px;
    padding: 5px 5px 5px 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    ::v-deep .input {
      width: 20%;
      margin-left: auto;
      --el-input-text-color: white;
      --el-input-border: 1px solid #1b4a84;
      --el-input-bg-color: #1b4a847a;
      .el-input-group__append,
      .el-input-group__prepend {
        border: 1px solid #1b4a84;
        border-left: 0;
        background-color: #1b4a84b4;
      }
    }

    ::v-deep .el-cascader {
      width: 18%;
      .el-input {
        --el-input-text-color: white;
        --el-input-border: 1px solid #1b4a84;
        --el-input-bg-color: #1b4a847a;
      }
    }

    .el-check-tag {
      text-align: center;
      height: 40px;
      line-height: 40px;
      width: 80px;
      padding: 0 0 0 0;
      margin-left: 0.5%;
      font-weight: 600;
      background-color: #195bd636;
      border: 1px solid #1b4a84;
      color: white;
    }
    .is-checked {
      background-color: #195cd6;
    }
    ::v-deep .el-slider {
      // TODO slider
      display: none;
      width: 15%;
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

    // scrollbar-width: none; /* firefox */
    // -ms-overflow-style: none; /* IE 10+ */
    // overflow-x: hidden;
    // overflow-y: auto;
    // ::-webkit-scrollbar {width: 0 !important}
  }
  .content::-webkit-scrollbar {
    width: 0 !important;
  }
}
</style>

