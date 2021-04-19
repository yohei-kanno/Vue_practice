import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

Vue.config.productionTip = false
Vue.component('LikeNumber',LikeNumber)
Vue.directive("border", function(){});
Vue.filter("upperCase", function(value){
  return value.toUpperCase();
})
// Vue.mixin({
//   created(){
//     console.log("Global MixIn")
//   }
// })

new Vue({
  render: h => h(App),
}).$mount('#app')
