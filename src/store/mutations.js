import * as types from './mutations-types'

const mutations = {
  [types.SET_MODULE_QUERY] (state, {path, query}) {
    state.modulesQuery[path] = Object.assign({}, state.modulesQuery[path], query)
  },
  [types.CLEAR_MODULE_QUERY] (state) {
    state.modulesQuery = {}
  }
}

export default mutations
