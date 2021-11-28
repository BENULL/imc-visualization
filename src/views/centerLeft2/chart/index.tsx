import { defineComponent, reactive } from 'vue'
import Draw from './draw'
export default defineComponent({
  components: {
    Draw
  },
  setup() {
    const cdata = reactive({
      indicatorData: [
        { max: 10, name: '线状隐裂' },
        { max: 5, name: '网状隐裂' },
        { max: 15, name: '破片' },
        { max: 25, name: '划痕' },
        { max: 20, name: '虚焊' },
        { max: 35, name: '断栅' }
      ],
    })
    return () => {
      return <div>
        <draw cdata={cdata} />
      </div>
    }
  }
})