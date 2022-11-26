import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/home/Home'
// import City from '@/pages/city/City'
// import Detail from '@/pages/detail/Detail'
Vue.use(Router)

const routes = [{
  path: '/',  
  redirect: '/home',  //路由重定向，第一次打开页面时路由跳转到的路由地址为/home,而不是根地址/
}, {
  path: '/home',
  name: 'Home',
  component: () => import ('pages/home/Home') 
  //对router路由控制的组件用按需加载的方式进行加载，即当路由跳转到相应组件时再进行数据网络请求
}, {
  path: '/city',
  name: 'City',
  component: () => import ('pages/city/City')
}, {
  path: '/detail/:id',
  name: 'Detail',
  component: () => import ('pages/detail/Detail')
}]

export default new Router({
  routes,
  // mode: 'history',
  scrollBehavior (to, from, savePosittion) {
  //用于配置在使用路由切换组件时，进入路由页面都跳转到页面的最顶端区域，而不是之前组件缓存的
  //滑动到的位置
    return { x: 0, y: 0 }
  }
})
