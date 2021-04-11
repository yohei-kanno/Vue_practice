var app = new Vue({
  el: '#app',
  data: {
    message: 'helloworld',
    new_item: "wwwww",
    todos: []
  },
  methods: {
    addtodo: function(){
      if(this.new_item == '') 
      return
      
      var todo = {
        
        item: this.new_item,
        isDone: false
      }
      this.todos.push(todo);
      this.new_item = ''
    },
    deleteItem: function(i){
      this.todos.splice(i,1)
    }
  }
  
  
})