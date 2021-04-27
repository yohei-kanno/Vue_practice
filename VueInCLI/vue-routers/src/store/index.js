import Vue from 'vue';
import Vuex from 'vuex';
import count from './modules/count.js'
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'
import state from './state.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  
  modules: {
    count
  }
})


// 他のコンポーネントで
// this.$store.state.countとかでアクセス可能
