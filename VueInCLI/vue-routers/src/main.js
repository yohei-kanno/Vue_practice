import Vue from 'vue';
import App from './App.vue';
import store from './store'

//exportされたrouterを使用する為に下記ファイルをimportする
import router from './router.js';

Vue.config.productionTip = false

router.beforeEach((to,from,next)=>{
  console.log("global-beforeEach")
  if(to.path === "/users/1"){
    console.log("next!")
    next("/");
    next();
  }
  next();
})
new Vue({
  router: router,
  store: store,
  render: h => h(App),
}).$mount('#app')
