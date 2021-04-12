const Home = { template: `<div>Home</div>` }
const B = { template: `<div>This is B</div>` }

const router = new VueRouter({
  mode: 'history',
  routes:[
    {
      path: '/home',
      component: Home
    },
    {
      name: 'page-b',
      path: '/b',
      component: B
    },
    {
      path: '/a',
      redirect: {name: 'page-b'}
    }
    
  ]
})


const app = new Vue({
  router: router
}).$mount('#app')
