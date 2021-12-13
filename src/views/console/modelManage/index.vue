<template>
  <div class="layout-container">
          <div class="layout-container-form flex space-between">
      <div class="layout-container-form-handle">
        <el-button type="primary" :icon="Plus" @click="handleAdd">新增</el-button>
      </div>
      <div class="layout-container-form-search">
        <el-input v-model="query.input" placeholder="请输入关键词进行检索"></el-input>
        <el-button type="primary" :icon="Search" class="search-btn" @click="getTableData(true)">搜索</el-button>
      </div>
    </div>
    <div class="layout-container-table">
      <Table
        ref="table"
        v-model:page="page"
        :showPage="true"
        :showIndex="true"
        :showSelection="true"
        :data="tableData"
        @getTableData="getTableData"
        @selection-change="handleSelectionChange"
      >
        <el-table-column prop="model_name" label="模型名称" align="center" />
        <el-table-column prop="params" label="参数量" align="center" />
        <el-table-column prop="description" label="模型描述" align="center" />
        <el-table-column prop="structure" label="模型结构" align="center" />
        <el-table-column label="操作" align="center" fixed="right" width="200">
          <template #default="scope">
            <el-button @click="handleEdit(scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </Table>
      <Layer :layer="layer" @getTableData="getTableData" v-if="layer.show" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import Table from "@/components/table/index.vue";
import type { LayerInterface } from '@/components/layer/index.vue'
import { fetchModelsData } from "@/api";
import Layer from './layer.vue'
import { Plus, Search, Delete } from "@element-plus/icons";
export default defineComponent({
  components: {
    Table,
    Layer
  },
  setup() {
    const page = reactive({
      index: 1,
      size: 20,
      total: 100,
    });
    const tableData = ref([]);
    const chooseData = ref([]);
    // 存储搜索用的数据
    const query = reactive({
      input: "",
    });
    const handleSelectionChange = (val: []) => {
      chooseData.value = val;
    };
    const getTableData = (init: boolean) => {
      if (init) {
        page.index = 1;
      }
      let params = {
        page: page.index,
        pageSize: page.size,
        ...query,
      };
      fetchModelsData(params)
        .then((res) => {
            console.log(res.data)
            tableData.value = res.data.items;
            page.total = res.data.pager.total;
            page.index = res.data.pager.index;
            page.size = res.data.pager.size;
        })
        .catch((error) => {
          tableData.value = [];
          page.index = 1;
          page.total = 0;
        });
    };
    // 弹窗控制器
    const layer: LayerInterface = reactive({
      show: false,
      title: '新增',
      showButton: true
    })
    // 新增弹窗功能
    const handleAdd = () => {
      layer.title = '新增模型'
      layer.show = true
      delete layer.row
    }
    // 编辑弹窗功能
    const handleEdit = (row) => {
      layer.title = '编辑模型数据'
      layer.row = row
      layer.show = true
    }

    getTableData(true)
    return {
      Plus,
      Search,
      Delete,
      query,
      tableData,
      chooseData,
      page,
      layer,
      handleEdit,
      handleAdd,
      handleSelectionChange,
      getTableData,
    };
  },
});
</script>
<style lang="scss" scoped>
.layout-container {
  background-color: #fff;
  width: calc(100% - 30px);
  height: 800px;
  margin: 15px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  &-form {
    display: flex;
    justify-content: space-between;
    padding: 15px 15px 0;
    &-handle {
      display: flex;
      justify-content: flex-start;
      .export-excel-btn {
        margin-left: 15px;
      }
    }
    &-search {
      display: flex;
      justify-content: flex-end;
      .search-btn {
        margin-left: 15px;
      }
    }
    .el-form-item {
      margin-bottom: 0;
    }
  }
  &-table {
    flex: 1;
    height: 100%;
    padding: 15px;
    overflow: auto;
  }
}
</style>
