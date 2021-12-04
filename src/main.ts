import { createApp, Directive } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import dataV from '@jiaminghi/data-view';

import './styles/index.scss';
import 'normalize.css';
// 引入全局css
import './assets/scss/style.scss';
// 引入图表（所有图标见 icon 目录下的 demo_index.html）
import './assets/icon/iconfont.css'
// 引入 全局注册组件
import PublicComponent from '@/components/componentInstall';
// 引入 ElementUI
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import * as directives from '@/directives'
import '@/router/permission'
import loadSvg from '@/components/svg-icon/icons'

if (process.env.NODE_ENV === 'development') {
    require('./mock/index.ts')
}

const app = createApp(App)
// 加载全局SVG
loadSvg(app)
// 自定义指令
Object.keys(directives).forEach(key => {
    app.directive(key, (directives as { [key: string]: Directive })[key])
})
app.use(ElementPlus)
app.use(PublicComponent)
app.use(dataV)
app.use(store)
app.use(router)
app.mount('#app')
