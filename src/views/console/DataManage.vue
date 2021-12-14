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
import { uploadResult } from "@/api";

const upload = (option) => {
  let params = new FormData()
  params.append('file', option.file)
  return uploadResult(params)
};
</script>
<style lang="scss" scoped>
.upload {
  text-align: center;
  ::v-deep .el-upload-dragger {
    width: 1000px;
    height: 200px;
  }
  ::v-deep .el-upload-list__item-status-label{
    right:20px
  }
  ::v-deep .el-upload-list__item {
    font-size: 24px;
  }
  ::v-deep .el-icon {
    --font-size: 24px;
  }


}
</style>