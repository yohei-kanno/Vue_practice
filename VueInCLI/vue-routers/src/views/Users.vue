<template>
  <div>
    <hr>
    <h3>USERS{{$route.path}}</h3>
    <h3>USERS{{$route.fullPath}}</h3>
    <h3>USERS{{$route.params}}</h3>
    <h3>USERS{{$route.params.id}}</h3>
    
    <router-link to="/users/1">ユーザー１</router-link>
    <router-link to="/users/2">ユーザー２</router-link>
    <h1>User No. {{ id }}</h1>
    <router-link v-bind:to="`/users/${Number(id)+1}`">nextUser</router-link>
    <br>
    <router-link v-bind:to="`/users/${Number(id)+1}/profile`">next Users Profile</router-link>
    <br>
    <router-link v-bind:to="`/Users/${Number(id)-1}/profile#next-user`">preUsersProfile(next-user)</router-link>
    <br>
    <router-link :to="{ 
      name: 'users-id-profile', 
      params: { id: Number(id) + 1 },
      query: { lang: 'ja', page:2},
      hash: '#next-user'
      }"
    >
      next Users Profile(query)
    </router-link>
    <br>
    <br>
    <router-link :to="{
      name: 'user-id-posts',
      params: { id: Number(id) + 1},
    }">
      nextUserPosts
    </router-link>
    <br>
    <router-link :to="{
      name: 'user-id-posts',
      params: { id: Number(id) - 1 }
    }">
      preUserPosts
    </router-link>
    <hr>
    
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <div style="height: 700px;"></div>
    <router-link
      id="next-user"
     :to="{
      name: 'user-id-posts',
      params: { id: Number(id) - 1 },
      hash: '#next-user'
    }">
      preUserPosts
    </router-link>
    <div style="height: 700px;"></div>
  </div>
</template>
      

<script>
export default {
  props:["id"],
  beforeRouteEnter(to,from,next){
    // thisは使えない！
      console.log("beforeRouteEnter")
    next(vm => {
      console.log(vm.id)
    });
  },
  beforeRouteUpdate(to,from,next){
    console.log("beforeRouteUpdate")
    // next();
  },
  beforeRouteLeave(to,from,next){
    console.log("beforeRouteLeave")
    const isLeave = window.confirm("本当にこのページを離れますか？")
    if(isLeave){
      next();
    }else{
      next(false)
    }
      
  },
  // watch:{
  //   // $route(to,from){
  //   //   console.log(to);
  //   //   console.log(from);
  //   // }
  // },
  created(){
    console.log("created!")
  }
  
}
</script>

<style scoped>
  .fade-enter,
  .fade-leave-to{
    opacity: 0;
  }
  
  .fade-enter-active,
  .fade-leave-active{
    transition: opacity .5s;
  }
</style>
