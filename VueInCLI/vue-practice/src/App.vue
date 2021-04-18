<template>
  <div style="padding: 5.5em;">
    <h2>トータル良いねの数は</h2>
    <h3>{{ number }}です</h3>
    <LikeHeader>
      <h1>はじめまして</h1>
    </LikeHeader>
      
    <LikeNumber v-bind:total-number="number" @my-click="incrementNumber" @my-declick="decrementNumber">
    </LikeNumber>
    
    <button v-on:click="currentComponent='Home' " class="btn btn-square">Home</button>
    <button v-on:click="currentComponent='About' " class="btn btn-square">About</button>
    <keep-alive>
      <component v-bind:is=" currentComponent "></component>
    </keep-alive>
    <div>
      <h2>EventForm</h2>
      <hr>
      <EventTitle v-model="eventData.title" v-bind:number="number"></EventTitle>
      <EventTitle
        v-bind:value="eventData.title"
        @input="this.eventData.title = $event">
      </EventTitle>
      <hr>
    </div>
    <div>
      <label for="maxNumber">MaxNumber</label>
      <input 
        id="maxNumber"
        type="number"
        v-model.number="eventData.maxNumber"
      >
      <span>{{ eventData.maxNumber }}</span>
    </div>
    <div>
      <label for="host">Host</label>
      <input 
        id="host"
        type="text"
        v-model.trim="eventData.hostName"
      >
      <span>{{ eventData.hostName }}</span>
    </div>
    <br/>
    <p><label for="textarea">TextArea</label></p>
    <textarea name="" id="textarea" cols="30" rows="2" v-model="eventData.detail"></textarea>
    <p>Previwe</p>
    <p style="white-space:pre;">{{eventData.detail}}</p>
    
    <input 
      type="checkbox" 
      id="isPrivate"
      v-model="eventData.isPrivate"
      >
    <label for="isPrivate">Private
    </label>
    <p>{{ eventData.isPrivate }}</p>
    
    <p>Participation conditions</p>
    <input 
      type="checkbox" 
      id=10
      value="10代"
      v-model="eventData.target">
    <label for="10">10代</label>
    
    <input 
      type="checkbox" 
      id=20
      value="20代"
      v-model="eventData.target">
    <label for="20">20代</label>
    
    <input 
      type="checkbox" 
      id=30
      value="30代"
      v-model="eventData.target">
    <label for="30">30代</label>
    
    <p>{{eventData.target}}</p>
    
    <label for="location">Please select location!</label>
    <p>
      <select name="" id="location" v-model="eventData.location">
        <option v-for="(location) in locations" :key="location">
          {{ location }}
        </option>
      </select>
    </p>
    <p>{{eventData.location}}</p>
    
  </div>
</template>
<script>
  import LikeHeaders from './components/LikeHeader.vue'
  import About from './components/About.vue'
  import Home from './components/Home.vue'
  import EventTitle from './components/EventTitle2.vue'
  
  export default {
    data(){
      return{
        number: 14,
        currentComponent: "Home",
        locations: ["Tokyo","Osaka","Chiba"],
        eventData:{
          title: "",
          maxNumber: 0,
          hostName: "",
          detail: "",
          isPrivate: false,
          target: [],
          location: "Tokyo"
        }
      }
    },
        
    components:{
      LikeHeader :LikeHeaders,
      About,
      Home,
      EventTitle
    },
    
    methods:{
      incrementNumber(value){
        this.number = value
        console.log(value)
      },
      decrementNumber(value){
        this.number = value
      },
      // eventInput(value){
      //   console.log(value)
      //   this.eventData.title = value
      // }
    }
}
</script>

<style scoped>

  .btn-square{
    display: inline-block;
    padding: 0.5em, 1em;
    margin: 10px;
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