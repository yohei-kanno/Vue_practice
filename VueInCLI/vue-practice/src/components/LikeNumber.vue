<template>
  <div>
    <p>良いね({{ totalNumber }})
      <button v-on:click="increment" class="btn btn-square" >+1</button>
      <button @click="decrement" class="btn btn-square" >-1</button>
    </p>
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
        this.$emit("my-declick",this.totalNumber -1)
      }
    }
  }
</script>

<style scoped>
.btn-square{
    display: inline-block;
    padding: 0.5em, 1em;

    text-decoration: none;
    background-color: #668ad8;
    color: #fff;
    border-bottom: solid 4px #627295;
    border-radius: 3px;
   }
  .btn-square:active{
    -webkit-transform: translateY(4px);
  transform: translateY(4px);/*下に動く*/
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);/*影を小さく*/
  border-bottom: none;
  } 
</style>