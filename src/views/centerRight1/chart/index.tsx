import { defineComponent, reactive, onMounted } from 'vue'
import Draw from './draw'

export default defineComponent({
  components: {
    Draw
  },
  setup() {
    const cdata = reactive({
      category: [
        "模型1",
        "模型2",
        "模型3",
        "模型4",
        "模型5",
        "模型6",
        "模型7",
        "模型8",
        "模型9",
        "模型10",
      ],
      lineData: [
        180,
        207,
        245,
        288,
        328,
        397,
        367,
        415,
        444,
        515,
      ],
      barData: [
        460,
        500,
        550,
        600,
        700,
        850,
        990,
        120,
        100,
        200,
      ],
      rateData: []
    })

    // methods
    const setData = () => {
      for (let i = 0; i < cdata.barData.length - 1; i++) {
        const rate = cdata.barData[i] / cdata.lineData[i];
        cdata.rateData.push(rate.toFixed(2));
      }
    }

    // 生命周期
    onMounted(() => {
      setData()
    })

    return () => {
      return <div>
        <Draw cdata={cdata} />
      </div>
    }
  }
})