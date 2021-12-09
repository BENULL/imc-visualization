<template>
  <Layer :layer="layer" @confirm="submit" ref="layerDom">
    <el-form
      :model="form"
      ref="ruleForm"
      label-width="120px"
      style="margin-right: 30px"
    >
      <el-form-item label="实验名称：" prop="experiment_name">
        <el-input
          v-model="form.experiment_name"
          placeholder="请输入名称"
        ></el-input>
      </el-form-item>
      <el-form-item label="实验时间：" prop="test_name">
        <el-date-picker
          v-model="form.test_time"
          type="datetime"
          placeholder="Select date and time"
          format="YYYY-MM-DD HH:mm:ss"
    value-format="YYYY-MM-DD HH:mm:ss"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="模型：" prop="model_id">
        <el-select v-model.number="form.model_id" placeholder="Select">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="阈值：" prop="threshold">
        <el-input
          v-model.number="form.threshold"
        ></el-input>
      </el-form-item>
       <el-form-item label="F1-Score：" prop="f1_score">
        <el-input
          v-model.number="form.f1_score"
        ></el-input>
      </el-form-item>
       <el-form-item label="精准率：" prop="precision">
        <el-input
          v-model.number="form.precision"
        ></el-input>
      </el-form-item>
       <el-form-item label="召回率：" prop="recall">
        <el-input
          v-model.number="form.recall"
        ></el-input>
      </el-form-item>
       <el-form-item label="迭代：" prop="epoch">
        <el-input
          v-model.number="form.epoch"
        ></el-input>
      </el-form-item>
      <el-form-item label="学习率：" prop="lr">
        <el-input
          v-model.number="form.lr"
        ></el-input>
      </el-form-item>
       <el-form-item label="批大小：" prop="batchsize">
        <el-input
          v-model.number="form.batchsize"
        ></el-input>
      </el-form-item>
    </el-form>
  </Layer>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { addExperiment, updateExperiment, fetchModelsData } from "@/api";
import Layer from "@/components/layer/index.vue";
import type { IExperiment } from "./index.vue";
export default defineComponent({
  components: {
    Layer,
  },
  props: {
    layer: {
      type: Object,
      default: () => {
        return {
          show: false,
          title: "",
          showButton: true,
        };
      },
    },
  },
  setup(props) {
    const options = ref([])
    const layerDom = ref(null);
    let form = ref({} as IExperiment);
    init();
    function init() {
      fetchModelsData({}).then((res)=>{
        options.value =  (res.data || []).map(item => ({
          label:item.model_name,
          value:item.model_id
        }))
      })
      
      // 用于判断新增还是编辑功能
      if (props.layer.row) {
        let rowData= JSON.parse(JSON.stringify(props.layer.row)); // 数量量少的直接使用这个转
        delete rowData['model_name'];
        form.value = rowData
      }
    }
    return {
      form,
      options,
      layerDom,
    };
  },
  methods: {
    submit() {
      let params = this.form;
      if (this.layer.row) {
        this.updateForm(params);
      } else {
        this.addForm(params);
      }
    },
    // 新增提交事件
    addForm(params) {
      console.log(params);
      addExperiment(params).then((res) => {
        this.$message({
          type: "success",
          message: "新增成功",
        });
        this.$emit("getTableData", true);
        this.layerDom && this.layerDom.close();
      });
    },
    // 编辑提交事件
    updateForm(params) {
      console.log(params);
      updateExperiment(params).then((res) => {
        this.$message({
          type: "success",
          message: "编辑成功",
        });
        this.$emit("getTableData", false);
        this.layerDom && this.layerDom.close();
      });
    },
  },
});
</script>

<style lang="scss" scoped>
</style>