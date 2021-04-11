var app = new Vue({
  el: '#app',
  data: {
    message: "",
    colors: ["blue","green","red"],
    isLarge: true,
    hasError: true,
    largeClass: {'large':true},
    dangerClass:{'text-danger':true},
    classObject:{
      large: true,
      'text-danger': true
    },
    largeClass2: {
      large: true,
      'bg-gray': true,
    },
    dangerClass2: {
      'text-danger': true
    },
    isLarge2: true,
    color: 'blue',
    fontSize: '36px',
    
    styleObject:{
      color: `${"green"}`,
      fontSize: '36px',
    },
    
    toggle: false,
    count: 1
  },
  methods:{
    clickHandler: function(e){
      this.count = this.count * e
    },
    clickNowTime: function(){
      this.message = new Date().toLocaleTimeString()
    }
  }
})