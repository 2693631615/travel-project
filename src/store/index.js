import Vue from 'vue'
import Vuex from 'vuex'
//通过Vue实例use方法使用插件

import state from './state'
import mutations from './muataions'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  // actions: {
  //   changeCity (ctx, city) {
  //     ctx.commit('changeCity', city)
  //   }
  // },
})