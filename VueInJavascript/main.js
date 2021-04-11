// グローバルフィルター定義方法
Vue.filter('numberFormat',function(value){
  console.log(value)
  return value.toLocaleString()
})

Vue.filter('toUSD',function(jpy){
  return jpy / 100
})

var app = new Vue({
  el: '#app',
  data: {
    url: "https://qiita.com/FumioNonaka/items/d1d9c9335116426a8316",
    message: 'Hello Vue.js!',
    number: 100,
    price: 298000,
    jpyPrice:476000,
    ok: true,
    myColor: "",
    colors: []
    
  },
  // ローカルフィルターの定義方法
  filters: {
    numberFormat: function(value){
      return value.toLocaleString()
    }
  },
  computed:{
    computedPrice: function(){
      return Math.floor(this.price * 1.10)
    }
  },
  methods: {
    fixNumber: function(index){
      return this.price * index
    },
    addColors: function(color){
      if(color === "") return
      this.colors.push(color)
      this.myColor = ""
    }
  }
})