<template>
  <nav>
      <h2>Users{{id}}</h2>
      <!-- exactはurlを完全マッチさせたい場合に使用する -->
      <router-link 
        to= "/"
        active-class="link--active"
        exact
        class="link"
      >
        Home
      </router-link>
      
      <router-link 
        to="/users/1/#next-user" 
        active-class="link--active"
        exact
        class="link"
      >
        Users
      </router-link>
      <router-link
        to="/users/1/posts">
        toUserPost
      </router-link>
    </nav>
</template>

<script>
export default {
  props:["id"]
}
</script>

<style scoped>
  .link--active{
    font-size: 20px;
  }
</style>