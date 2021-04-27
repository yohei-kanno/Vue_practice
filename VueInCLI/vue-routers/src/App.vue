<template>
  <div>
    <router-view name="header"></router-view>
    <transition 
      name="fade"
      mode="out-in"
      @before-enter="beforeEnter"
      >
        <router-view></router-view>
    </transition>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {
  methods:{
    beforeEnter(){
      console.log("beforeEnter!")
      this.$root.$emit('triggerScroll')
    }
  }
}
</script>
   
<style scoped>
  .link {
    margin-right: 10px;
  }
  .link--active{
   font-size: 20px; 
  }
  
  .fade-enter,
  .fade-leave-to{
    opacity: 0;
  }
  
  .fade-enter-active,
  .fade-leave-active{
    transition: opacity .5s;
  }
</style>
