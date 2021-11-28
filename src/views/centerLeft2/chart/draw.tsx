import { defineComponent, watch, shallowReactive } from 'vue'

// 声明类型
const PropsType = {
  cdata: {
    type: Object,
    require: true
  }
} as const

// 定义主体
export default defineComponent({
  props: PropsType,
  setup(props) {
    // 定义固定配置项
    const lineStyle = {
      normal: {
        width: 1,
        opacity: 0.5
      }
    };
    // 配置项
    let options = shallowReactive({radar:null})

    watch(
      () => props.cdata,
      (val: any) => {
        options = {
          radar: {
            indicator: val.indicatorData,
            shape: "circle",
            splitNumber: 5,
            radius: ["0%", "65%"],
            name: {
              textStyle: {
                color: "rgb(238, 197, 102)"
              }
            },
            splitLine: {
              lineStyle: {
                color: [
                  "rgba(238, 197, 102, 0.1)",
                  "rgba(238, 197, 102, 0.2)",
                  "rgba(238, 197, 102, 0.4)",
                  "rgba(238, 197, 102, 0.6)",
                  "rgba(238, 197, 102, 0.8)",
                  "rgba(238, 197, 102, 1)"
                ].reverse()
              }
            },
            axisLine: {
              lineStyle: {
                color: "rgba(238, 197, 102, 0.5)"
              }
            }
          },
        }
      },
      {
        immediate: true,
        deep: true
      }
    )

    return () => {
      const height = "180px"
      const width = "300px"

      return <div>
        <echart options={options} height={height} width={width} />
      </div>
    }
  }
})

