// 星期
export const WEEK = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']

// 主题名称与副标题名称
export const title = 'IMC可视化平台'
export const subtitle = ['太阳能电池板表面异常检测', '', '控制台']

// 各类标题与图标
type ModuleInfo = {
  name: string
  icon: string
}[]

export const moduleInfo: ModuleInfo = [
  // 左边两个模块
  {
    name: '缺陷分类统计',
    icon: 'icon-chart-bar',
  },
  {
    name: '模型参数量',
    icon: 'icon-align-left',
  },
  // 右边两个模块
  {
    name: '模型性能',
    icon: 'icon-vector',
  },
  {
    name: '模型数据',
    icon: 'icon-zhibiao2',
  },

  // 底部两个模块
  // {
  //   name: '数据统计图',
  //   icon: 'icon-vector',
  // },
  // {
  //   name: '工单修复以及满意度统计图',
  //   icon: 'icon-fenxi7',
  // },
]
