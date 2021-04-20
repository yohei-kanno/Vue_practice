<template>
  <div class="main">
    <button v-on:click="myAnimation = 'slide' ">Slide</button>
    <button v-on:click="myAnimation = 'fade' ">Fade</button>
    <p>{{ myAnimation }}</p>
    <br>
    <button @click="add">ADD</button>
    
    <ul style="width: 200px; margin: auto;">
      <transition-group :name="myAnimation"> 
        <li 
          v-for="(number,index) in numbers"
          :key="number"
          @click="remove(index)"
          style="cursor: pointer;"
        >{{ number }}</li>
      </transition-group>
    </ul>
        
    <p>
      <button v-on:click="myComponent='ComponentA'">ComponentA</button>
      <button v-on:click="myComponent='ComponentB'">ComponentB</button>
    </p>
    <transition name="fade" mode="out-in">
      <component :is="myComponent"></component>
    </transition>
    
    <br>
    <button @click="show = !show">change</button>
    <br><br>
    
    <transition
    :css="false"
     @beforeEnter="beforeEnter"
     @enter="enter"
     @leave="leave"
     >
      <div class="circle" v-if="show"></div>
    </transition>
      
    
    <transition name="fade" mode="out-in">
      <p v-if="show" key="goodBye">GoodBye</p>
      <p v-if="!show" key="GoodMoning">GoodMoning</p>
    </transition>
        
    <transition 
      name="fade"
      enter-class=""
      enter-active-class="animate__animated animate__bounce"
      enter-to-class=""

      leave-class=""
      leave-active-class="animate__animated animate__shakeX"
      leave-to-class=""
      appear=""
      >
      <p v-if="show">Hello Vue.js</p>
    </transition>
    <transition
     :name="myAnimation"
      appear
      >
        <p v-if="show">bye</p>
    </transition>
  </div>
</template>
        
      
      

<script>
import ComponentA from './components/ComponentA.vue'
import ComponentB from './components/ComponentB.vue'

export default {
  data(){
    return{
      numbers: [0,1,2,3,4,5],
      nextNumber: 6,
      show: true,
      myAnimation: 'slide',
      myComponent: 'ComponentA'
    }
  },
  components: {
    ComponentA: ComponentA,
    ComponentB
  },

  
  methods: {
    randomIndex(){
      return Math.floor(Math.random() * this.numbers.length)
    },
    add(){
      this.numbers.splice(this.randomIndex(),0,this.nextNumber)
      this.nextNumber += 1;
    },
    remove(index){
      this.numbers.splice(index,1);
    },
    beforeEnter(el){
      // 現れる前
      el.style.transform = 'scale(0)'
    },
    enter(el,done){
      // 現れる時
      
      let scale = 0;
      const interval = setInterval(() => {
        el.style.transform = `scale(${scale})`;
        scale += 0.1;
        if ( scale > 1 ){
          clearInterval(interval);
          done();
        }
      }, 50); 
    },
    // afterEnter(el){
    //   // 現れた後
    // },
    // enterCancelled(el){
    //   // 現れるアニメーションがキャンセルされた時
    // },
    
    // beforeLeave(el){
    //   // 消える前
    // },
    leave(el,done){
      // 消える時
      let scale = 1;
      const interval = setInterval(() => {
        el.style.transform = `scale(${scale})`;
        scale -= 0.1;
        if ( scale < 0 ){
          clearInterval(interval);
          done();
        }
      }, 50); 
    },
    // afterLeave(el){
    //   // 消えた後
    // },
    // leaveCancelled(el){
    //   // 消えるアニメーションがキャンセルされた時
    // }
  }
}
</script>
<style scoped>
  .circle{
    width: 200px;
    height: 200px;
    background-color: deeppink;
    margin: auto;
    border-radius: 50%;
  }
  
  li{
    list-style: none;
  }
  .fade-move{
    transition: transform 1s;
  }
  .fade-enter{
    /* 現れる時の最初の状態 */
    opacity: 0;
  }
  .fade-enter-active{
    /* 現れる時のトラジションの状態 */
    transition: opacity 0.5s;
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
    transition: opacity 0.5s;
    position: absolute;
    width: 200px;
  }
  .fade-leave-to{
    /* 消える時の最後の状態 */
    opacity: 0;
  }
  .slide-move{
    transition: transform 1s;
  }
  .slide-enter,
  .slide-leave-to{
    opacity: 0;
  }
  .slide-enter-active{
    animation: slide-in 0.5s;
    transition: opacity 0.5s;
  }
  .slide-leave-active{
    animation: slide-in 0.5s reverse;
    transition: opacity 0.5s;
    position: absolute;
    width: 200px;
  }
  
  @keyframes slide-in{
    from{
      transform: translateX(100px);
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
