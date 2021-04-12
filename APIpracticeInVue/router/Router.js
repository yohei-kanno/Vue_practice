const Top1 = { template: '<div>Top</div>' }
const User = { template: '<div>User{{ $route.params.userId }}</div>' }
    
const router = new VueRouter({
  routes: [
    {
      path: '/top',
      component: Top1
    },
    {
      path: '/users/userId',
      name: 'user',
      component: User          
    },
  ]
})


const app = new Vue({
  router: router
}).$mount("#app")