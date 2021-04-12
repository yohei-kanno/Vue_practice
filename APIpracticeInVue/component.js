// グローバルコンポーネント登録
Vue.component('hello-component',{
  template: '<p>Hello</p>'
})

// ローカルコンポーネント
var helloVue = {
  template: '<p>helloVue</p>'
}

Vue.component('button-counter',{
  data: function(){
      return {
        count: 0
      }
  },
  template: '<div><span>count:</span><button v-on:click="clickHundler">{{ this.count }}</button></div>',
  
  methods:{
    clickHundler: function(){
      this.count++
    }
  }
})

var app = new Vue({
  el: '#app',
  data:{
    show: false
  },
  components: {
    'vue-component': helloVue 
  }
})

var app2 = new Vue({
  el: '#app2',
})