<template>
  <div>
    <p>良いね({{ numb }})<button v-on:click="increment">+1</button> <button @click="decrement">-1</button></p>
  </div>
</template>
  

<script>
  export default{
    props: ['numb'],
    methods:{
      increment(){
        this.numb++
      },
      decrement(){
        this.numb--
      }
    }
  }
</script>

<style scoped>
div {
  border: 2px solid red;
  background-color: greenyellow;
}
</style>