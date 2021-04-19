<template>
  <div class="main">
    <button @click="show = !show">change</button>
    <transition name="fade">
      <p v-if="show">Hello Vue.js</p>
    </transition>
    <transition name="slide">
        <p v-if="show">bye</p>
    </transition>
  </div>
</template>
        
      
      

<script>
export default {
  data(){
    return{
      show: true
    }
  }
}
</script>

<style scoped>
  .fade-enter{
    /* 現れる時の最初の状態 */
    opacity: 0;
  }
  .fade-enter-active{
    /* 現れる時のトラジションの状態 */
    transition: opacity 5s;
  }
  .fade-enter-to{
    /* 現れる時の最後の状態 */
    opacity: 1;
  }
  .fade-leave{
    /* 消える時の最初の状態 */
    opacity: 1;
  }
  .fade-leave-active{
    /* 消える時のトラジションの状態 */
    transition: opacity 5s;
  }
  .fade-leave-to{
    /* 消える時の最後の状態 */
    opacity: 0;
  }
  
  .slide-enter,
  .slide-leave-to{
    opacity: 0;
  }
  .slide-enter-active{
    animation: slide-in 5s;
    transition: opacity 5s;
  }
  .slide-leave-active{
    animation: slide-in 5s reverse;
    transition: opacity 5s;
  }
  
  @keyframes slide-in{
    from{
      transform: translateX(200px);
    }
    to {
      transform: translateX(0px)
    }
  }
  
  .main{
    padding-top: 5rem;
    text-align: center;
  }
</style>
