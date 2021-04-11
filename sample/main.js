var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    url: 'https://www.youtube.com/',
    count: 0,
    user: {
      first_name: 'youhei',
      last_name: 'kanno',
      prefecture: 'Chiba',
      age: 34
    },
    colors:['Red','Green','Blue'],
    toggle: false,
    now: ''
  },
  methods: {
    onclick: function(){
      this.now = new Date().toLocaleString();
    }
  }
})

Vue.component("hello-component",{
  template: '<p>Hello</p>'
})

const app2 = new Vue({
  el: '#app2'
})

console.log(app.message)