const User = { 
  template: `
  <div class="user">
    <h2>User{{ $route.params.userId}}</h2>
    <router-view></router-view>
  </div>
`}

const Profile = {
  template: `
  <div class="profile">
    <h2>Profile{{ $route.params.userId }}</h2>
    <router-view></router-view>
  </div>
  `
}

const Posts = {
  template: `
  <div class="profile">
    <h2>Posts{{ $route.params.userId }}</h2>
    <router-view></router-view>
  </div>
  `
}

const router = new VueRouter({
  routes:[
    {
      path:'/users/:userId',
      name: 'User',
      component: User,
      children: [
        {
          path: 'profile',
          component: Profile
        },
        {
          path: 'posts',
          component: Posts
        }
      ]
    }
    
  ]
})

const app = new Vue({
  router: router
}).$mount('#app')