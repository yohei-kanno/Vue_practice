<template>
  <div>
    <h2>{{title | upperCase }}</h2>
    <h2>{{subtitle | upperCase }}</h2>
    <h2>{{subtitle | lowerCase }}</h2>
    <p>{{ number }}</p>
    <button @click="number++">add1</button>
  </div>
</template>
  
<script>
  import {tokyoNumber } from "@/tokyoNumber"
  export default{
    mixins: [tokyoNumber],
    data(){
      return{
        title: "wolcome to America"
      }
    },
    created(){
      console.log("created in Components")
    }
  }
</script>
