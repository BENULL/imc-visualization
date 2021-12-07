<template>
  <Layer :layer="layer" @confirm="submit" ref="layerDom">
    <el-form
      :model="form"
      ref="ruleForm"
      label-width="120px"
      style="margin-right: 30px"
    >
      <el-form-item label="模型名称：" prop="model_name">
        <el-input v-model="form.model_name" placeholder="请输入名称"></el-input>
      </el-form-item>
      <el-form-item label="参数量：" prop="params">
        <el-input v-model="form.params" oninput="value=value.replace(/[^\d]/g,'')" placeholder="只能输入正整数"></el-input>
      </el-form-item>
      <el-form-item label="模型描述：" prop="description">
        <el-input
          v-model="form.description"
          placeholder="请输入描述"
          type="textarea"
          :row="3"
        ></el-input>
      </el-form-item>
      <el-form-item label="模型结构：" prop="structure">
        <el-input
        type="textarea"
          :row="3"
          v-model="form.structure"
          placeholder="请输入模型结构"
        ></el-input>
      </el-form-item>
    </el-form>
  </Layer>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { addModel, updateModel } from "@/api";
import Layer from "@/components/layer/index.vue";
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
    const layerDom = ref(null);
    let form = ref({
      model_name:'',
      params:undefined,
      description:'',
      structure:'',
      model_id:undefined
    });

    init();
    function init() {
      // 用于判断新增还是编辑功能
      if (props.layer.row) {
        form.value = JSON.parse(JSON.stringify(props.layer.row)); // 数量量少的直接使用这个转
      }
    }
    return {
      form,
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
      console.log(params)
      addModel(params).then((res) => {
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
      console.log(params)
      updateModel(params).then((res) => {
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