Vue.component('my-component',{
  data: function(){
    
  }
})

var component = {
  data: function(){
    return {
      number: 12
    }
  },
  template: '<p>いいね{{number}}<button v-on:click="increment">+1</button></p>',
  
  methods: {
    increment: function(){
      this.number++
    }
  }
}


var app = new Vue({
  el: '#app',
  components: {
    'my-component': component
  }
})

var app2 = new Vue({
  el: '#app2',
})
