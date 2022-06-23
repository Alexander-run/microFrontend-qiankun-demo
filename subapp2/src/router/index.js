import {
  createRouter,
  createWebHistory
} from 'vue-router'
import '../public-path' // 重点3： 引入public-path文件
const router = createRouter({
  // base: window.__POWERED_BY_QIANKUN__ ? '/' : '/microApp', // 重点4：qiankun进入子应用时，返回true
  history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/microApp2' : '/'), // 重点5
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
      component: () => import('@/components/HelloWorld')
    }
  ]
})
export default router