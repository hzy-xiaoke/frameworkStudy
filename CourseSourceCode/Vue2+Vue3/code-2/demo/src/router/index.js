import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import NowPlaying from '@/views/home/NowPlaying'
import ComingSoon from '@/views/home/ComingSoon'
import City from '@/views/City'
import Search from '@/views/Search'
import Detail from '@/views/Detail'
import Login from '@/views/Login'

Vue.use(VueRouter) // 注册路由插件

// 配置表
const routes = [
  {
    path: '/home',
    component: Home,
    // 嵌套路由
    children: [
      {
        path: '/home/nowplaying',
        component: NowPlaying
      },
      {
        path: '/home/comingsoon',
        component: ComingSoon
      },
      {
        path: '/home',
        redirect: '/home/nowplaying'
      }
    ]
  },
  {
    name: 'filmdetail', // 命名路由
    path: '/detail/:id', // 动态路由
    component: Detail
  },
  {
    path: '/cinemas',
    component: () => import('@/views/Cinemas')
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '/cinemas/search',
    component: Search
  },
  {
    path: '/center',
    component: () => import('@/views/Center'),
    meta: {
      isNeededCheck: true
    }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '*',
    redirect: '/home'
  }
]

const router = new VueRouter({
  mode: 'hash', // 设置路由模式
  routes
})

// 全局拦截(守卫)
router.beforeEach((to, from, next) => {
  // 需要拦截的路由
  if (to.meta.isNeededCheck) {
    // 本地存储中存在指定键值
    if (localStorage.getItem('token')) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})

export default router
