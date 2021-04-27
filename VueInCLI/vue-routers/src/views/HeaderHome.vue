<template>
  <nav>
      <h2>Home</h2>
      <!-- exactはurlを完全マッチさせたい場合に使用する。付けないと/usersの様なリンクにもルートリンクがマッチしてしまう -->
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
      <div>
        <button @click="increment(2)">+1</button>
        <button @click="decrement(2)">-1</button>
        {{ count }}
        {{ myDoubleCounter }}
      </div>
      <div>
        <input 
          type="text"
          :value="message"
          @input="updateMessage">
        {{message}}
      </div>
        
        
    </nav>
</template>

<script>
  import { mapGetters } from "vuex";
  import { mapActions } from "vuex"
  // import { mapMutations } from "vuex";
  export default {
    computed:{
      // count(){
      //   return this.$store.state.count
      // },
      message(){
        return this.$store.getters.message
      },
      ...mapGetters(
         "count",
         {
           myDoubleCounter: "doubleCount",
           count: "count"
          //  message: "message"
         },
       )
    },
      
    methods:{
      ...mapActions("count",["increment","decrement"]),
          updateMessage(e){
            this.$store.dispatch("updateMessage",e.target.value)
          }
      // increment(){
      //   this.$store.dispatch("increment",2)
      // },
      // decrement(){
      //   this.$store.dispatch("decrement",2)
      // }
      // ...mapMutations(["increment","decrement"]),
      // increment(){
      //   this.$store.commit("increment",2);
      // },
      // decrement(){
      //   this.$store.commit("decrement",2);
      // }
    }
  }
</script>

<style scoped>
  .link--active{
    font-size: 20px;
  }
</style>