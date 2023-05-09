import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home'
import NowPlaying from '@/views/Home/NowPlaying'
import Detail from '@/views/Detail'
import Comingsoon from '@/views/Home/Comingsoon'
import Cinemas from '@/views/Cinemas'
import Center from '@/views/Center'

const routes = [
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/home/nowPlaying',
        component: NowPlaying
      },
      {
        path: '/home/comingsoon',
        component: Comingsoon
      },
      {
        path: '/home',
        redirect: '/home/nowPlaying'
      }
    ]
  },
  {
    path: '/detail/:id',
    component: Detail
  },
  {
    path: '/cinemas',
    component: Cinemas
  },
  {
    path: '/center',
    component: Center
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/:any',
    redirect: '/home'
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})

export default router
