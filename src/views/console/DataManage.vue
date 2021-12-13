<template>
  <el-upload class="upload" action='none' drag  :http-request="upload" accept=".json">
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">
      Drop json file here or <em>click to upload</em>
    </div>
  </el-upload>
</template>

<script setup lang="ts">
import { UploadFilled } from "@element-plus/icons";
const upload = (option) => {
  alert("upload");
  const file = option.file;
  console.log(option)
};
</script>
<style lang="scss" scoped>
.upload {
  text-align: center;
  ::v-deep .el-upload-dragger {
    width: 1000px;
    height: 200px;
  }
}
</style>