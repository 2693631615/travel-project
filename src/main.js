import Vue from 'vue'
import App from './App'
import router from './router'
//也可以在首页APP.vue的style设置中在引入CSS初始化文件
// import './assets/styles/reset.css'
// import './assets/styles/border.css'
// import './assets/styles/iconfont.css'
import 'styles/base.css'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import store from './store'
import 'babel-polyfill'  //引入babel-polyfill插件，让不支持es6语法的手机浏览器
//支持解析es6语法新特性,如promise语法

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
