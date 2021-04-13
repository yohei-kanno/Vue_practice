var data = {
  message: "インスタンス1",
  name: "菅野"
}

Vue.component('my-component',{
  template: '<p>hello</p>'
});

var app1 = new Vue({
  data: data,
  render: function(h){
    console.log(h('h1',this.name))
    return h('h3',this.name)
  }
}).$mount('#app1')


var app2 = new Vue({
  el: '#app2',
  
  data: {
    message: "インスタンス２"
  },
  
  methods: {
    changeMessageVm1: function(){
     app1.message = "インスタンス２から変更" 
    }
  }
})

var dir = document.createElement("div")
console.log(dir)
console.dir(dir)
console.log(document)

var app4 = new Vue({
  el: '#app4',
  data: {
    name: '菅野洋平'
  },
  beforeCreate: function(){
   console.log('beforeCreate') 
  },
  created: function(){
    console.log('created')
  },
  beforeMount: function(){
    console.log('beforeMount')
  },
  mounted: function(){
    console.log('mounted')
  },
  beforeUpdate: function(){
    console.log('beforeUpdate')
  },
  updated: function(){
    console.log('updated')
  },
  beforeDestroy: function(){
    console.log('beforeDestroy')
  },
  destroyed: function(){
    console.log('destroyed')    
  },
  methods: {
    clickChangeName: function(){
      this.name = "菅野悠美"
    },
    clickDestroyName: function(){
      this.$destroy()
    }
  }
  
})