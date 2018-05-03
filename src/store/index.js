import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import * as getters from './getters'
import mutations from './mutations'
// 不要忘记加 namespaced: true 来开启命名空间
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  getters,
  state,
  mutations,
  strict: debug
})
