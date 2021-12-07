import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const Layout = () => import('@/views/console/layout/index.vue')

export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/redirect',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import(/* webpackChunkName: "redirect" */ '@/views/redirect/index.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/console/login.vue')
  },
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/index/index.vue')
  },
  {
    path: '/console',
    component: Layout,
    redirect: '/console/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/console/dashboard/index.vue'),
        name: 'Dashboard',
        meta: {
          title: '首页',
          icon: 'dashboard',
          affix: true
        }
      },

    ]
  },
]




// 动态路由
export const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/console/model',
    component: Layout,
    redirect: 'noRedirect',
    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "console-model" */ '@/views/console/modelManage/index.vue'),
        name: 'ModelManage',
        meta: {
          title: '模型管理',
          icon: 'chart',
          roles: ['admin', 'editor'], // 可以在根路由中设置角色
        }
      }
    ]
  },
  {
    path: '/console/result',
    component: Layout,
    redirect: 'noRedirect',
    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "console-result" */ '@/views/console/ResultManage.vue'),
        name: 'ResultManage',
        meta: {
          title: '模型结果',
          icon: 'example',
          roles: ['admin', 'editor'], // 可以在根路由中设置角色
        }
      }
    ]
  },
  {
    path: '/console/experiment',
    component: Layout,
    redirect: 'noRedirect',
    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "console-experiment" */ '@/views/console/ExperimentManage.vue'),
        name: 'ExperimentManage',
        meta: {
          title: '实验管理',
          icon: 'excel',
          roles: ['admin', 'editor'], // 可以在根路由中设置角色
        }
      }
    ]
  },
  {
    path: '/console/data',
    component: Layout,
    redirect: 'noRedirect',
    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "console-data" */ '@/views/console/DataManage.vue'),
        name: 'DataManage',
        meta: {
          title: '数据管理',
          icon: 'form',
          roles: ['admin', 'editor'], // 可以在根路由中设置角色
        }
      }
    ]
  },
  { // 必须将 'Error' 路由放在最后 Must put the 'Error' route at the end
    path: '/:pathMatch(.*)*',
    component: Layout,
    name: 'Error',
    redirect: '/404',
    meta: {
      hidden: true
    },
    children: [
      {
        path: '401',
        component: () => import(/* webpackChunkName: "errorPage-401" */ '@/views/errorPage/401.vue'),
        name: '401',
        meta: {
          title: '401',
          hidden: true
        }
      },
      {
        path: '404',
        component: () => import(/* webpackChunkName: "errorPage-404" */ '@/views/errorPage/404.vue'),
        name: '404',
        meta: {
          title: '404',
          hidden: true
        }
      }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export const resetRouter = () => {
  // 重置路由
  // 注意：所有动态路由路由必须带有 name 属性，否则可能会不能完全重置干净
  try {
    router.getRoutes().forEach((route) => {
      const { name, meta } = route
      if (name && meta.roles?.length) {
        router.hasRoute(name) && router.removeRoute(name)
      }
    })
  } catch (error) {
    // 强制刷新浏览器，不过体验不是很好
    window.location.reload()
  }
}

export default router
