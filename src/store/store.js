import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import getter from './getter'
import actions from './actions'


Vue.use(Vuex)
// 全局调用
const store = new Vuex.Store((
    state,
    mutations,
    getter,
    actions
))

export default store
