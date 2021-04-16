<template>
  <div>
    <p>良いね({{ halfNumber  }})<button v-on:click="increment">+1</button> <button @click="decrement">-1</button></p>
  </div>
</template>
  

<script>
  export default{
    props: ['totalNumber',"testProps"],
    // props: {
    //   // totalNumber: Number
    //   totalNumber:{
    //     type: Number,
    //     default: 20
    //   },
      // testProps:{
      //   type: String,
      //   require: true,
      //   dafault: "hello"
      // }
    // },
    computed:{
      halfNumber(){
        return this.totalNumber / 2
      }
    },
    methods:{
      increment(){
        // this.totalNumber++
        this.$emit("my-click",this.totalNumber + 1)
      },
      decrement(){
        this.totalNumber--
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