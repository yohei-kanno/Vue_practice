<template>
  <div>
    <hr>
    
    <p v-border:solid.round.shadow="{
      width: '3px',
      color: 'red'
    }">Home | {{message}}</p>
    <h2>{{title | upperCase }}</h2>
    <h2>{{subtitle | upperCase }}</h2>
    <h2>{{subtitle | lowerCase }}</h2>
    <p>{{ number }}</p>
    <button @click="number++">add1</button>
    <hr>
    <CountNumber></CountNumber>
    <hr>
  </div>
</template>
  
<script>

import CountNumber from "./CountNumber.vue"
import {tokyoNumber} from "@/tokyoNumber"
  export default{
    mixins:[tokyoNumber],
    data(){
      return{
        message: "こんにちは！",
      }
    },
    components:{
      CountNumber
    },
    directives:{
      border(el,binding){
        el.style.borderWidth = binding.value.width;
        el.style.borderColor = binding.value.color;
        el.style.borderStyle = binding.arg;
        // 引数に取ったスタイルが適用されている
        if(binding.modifiers.round){
          el.style.borderRadius = "0.5rem"
        }
        if(binding.modifiers.shadow){
          el.style.boxShadow = " 10px 10px 3px rgba(0,0,0,0.26)"
        }
      }
    }
  }
</script>
