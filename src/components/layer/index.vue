<template>
  <div>
    <el-dialog
      ref="dialog"
      v-model="layerInfo.show"
      :title="layerInfo.title"
      :width="layerInfo.width"
      center
    >
      <slot></slot>
      <template #footer v-if="layerInfo.showButton">
        <div>
          <el-button type="primary" @click="confirm">确认</el-button>
          <el-button @click="close">取消</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue'
import { defineComponent, ref } from 'vue'
// import { UseDialogProps } from 'element-plus/lib/el-dialog/src/dialog'
export interface LayerInterface {
  show: boolean;
  title: string;
  showButton?: boolean;
  width?: string;
  [propName: string]: any;
}
// interface SystemDialogProps extends UseDialogProps {
//   handleClose: Function
// }
// export interface LayerType {
//   close: Function
// }
export default defineComponent({
  props: {
    layer: {
      type: Object,
      default: () => {
        return {
          show: false,
          title: '',
          showButton: false
        }
      },
      required: true
    }
  },
  setup(props, ctx) {
    const dialog = ref(null) as any
    const layerInfo = reactive(props.layer)
    function confirm() {
      ctx.emit('confirm')
    }
    function close() {
      dialog.value.handleClose()
    }
    return {
      dialog,
      layerInfo,
      confirm,
      close
    }
  }
})
</script>

<style lang="scss" scoped>
  
</style>