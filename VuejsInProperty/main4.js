var app = new Vue({
  el: '#app',
  data: {
    firstName: "",
    lastName: "",
    // fullName: "",
  },
  // watch: {
  //   firstName: jk０『』＊function(firstName){
  //     this.fullName = `${firstName} ${this.lastName}` 
  //   },
  //   lastName: function(lastName){
  //     this.fullName = `${this.firstName} ${lastName}`
  //   }
  // },
  computed: {
    fullName: function(){
      return `${this.firstName} ${this.lastName}`
    }
  }
})