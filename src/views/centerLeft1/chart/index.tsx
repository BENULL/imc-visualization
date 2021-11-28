import { defineComponent, reactive } from 'vue'
import Draw from './draw'

export default defineComponent({
  components: {
    Draw
  },
  setup() {
    const cdata = reactive({
      xData: ['线状隐裂', '网状隐裂', '破片', '划痕', '虚焊', '断栅'],
      seriesData: [
        { value: 10, name: '线状隐裂' },
        { value: 5, name: '网状隐裂' },
        { value: 15, name: '破片' },
        { value: 25, name: '划痕' },
        { value: 20, name: '虚焊' },
        { value: 35, name: '断栅' }
      ]
    })

    return () => {
      return <div>
        <Draw cdata={cdata} />
      </div>
    }
  }
})