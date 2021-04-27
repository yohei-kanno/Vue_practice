//countに対する処理をまとめたファイルを切り出す方法
//gettersとかmutationsで切り出す方法もある

const state = {
  count: 0,
}
const getters = {
  count: (state) => state.count,
  doubleCount: (state) => state.count * 2,
}
const mutations = {
  incrementMutations(state,number) {
    state.count += number
  },
  decrementMutations(state,number) {
    state.count -= number
  },
}
const actions = {
  increment({ commit }, number){
    commit('incrementMutations',number)
  },
  decrement({ commit }, number){
    commit('decrementMutations',number)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions 
 }