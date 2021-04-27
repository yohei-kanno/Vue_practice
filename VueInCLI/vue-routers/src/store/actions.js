export default{
  updateMessage({commit}, newMessage){
    commit('updateMessageMutations',newMessage)
  }
}