var app = new Vue({
  el: '#app',
  data: {
    message: "hello",
    message2: "hello00000",
    basePrice: 100,
  },
  computed: {
    reversedMessage: function(){
      return this.message.split("").reverse().join("")
    },
    taxIncludedPrice: {
      get: function(){
        return parseInt(this.basePrice * 1.10)
      },
      set: function(taxIncludedPrice){
        this.basePrice = Math.ceil(taxIncludedPrice / 1.10)
      }
    },
    computedNumber: function(){
      return Math.random()
    }
  },
  methods: {
    reversedMessage2 :function(){
      return this.message.split("").reverse().join("")
    },
    methodsNumber: function(){
      return Math.random()
    }
  }
})