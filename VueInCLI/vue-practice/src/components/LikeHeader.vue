<template>
  <div>
    <slot></slot>  
    <slot name="aisatu"></slot>  
    <slot name="mySlot"></slot>
    <!-- <slot :user="userkanno" text="TEXT"></slot> -->
    <!-- slotの中にhtmlを指定するとそれがデフォルトになる -->
    <!-- <slot name="my-title" v-bind:user="user" text="TEXT"></slot> -->
    <!-- <hr>
    <p>{{headerText}}</p> -->
    <!-- 下のname="default"はなくてもOK -->
    <!-- <slot name="default"></slot> -->
    <!-- <hr>
    <slot></slot>
    <slot></slot> -->
    <!-- <slot name = "my-number"></slot> -->
  </div>
</template>
    

<script>
export default {
  props:["headerText","aisatu"],
  
  data(){
    return{
      userkanno: {
        firstName: "kanno",
        lastName: "youhei",
        likeCount: "12",

      }
    }
  },
  methods:{
    userInfo(){
      return this.user
    }
  }
  }
</script>

<style scoped>
</style>