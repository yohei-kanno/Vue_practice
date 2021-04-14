<template>
<div>
  <LikeHeader></LikeHeader>
  <h2>{{ number }}</h2>
  <LikeNumber v-bind:numb="message"></LikeNumber>
  <LikeNumber v-bind:numb="number"></LikeNumber>
</div>
</template>
<script>
  import LikeHeader from './components/LikeHeader.vue'
  
  export default {
    data(){
      return{
        number: 14,
        message: "hello"
      }
    },
        
    components:{
      LikeHeader
    }
}
</script>

<style scoped>
  div{
    background-color: orange ;
  }
</style>