var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue',
    number: 31,
    toggle: false,
    url: 'https://www.google.com/',
    attribute: 'href',
    hrefObject: {
      href: 'https://www.google.com/',
      id: 31
    },
    clickNumber: 0,
    x: 0,
    y: 0,
    event: 'click',
    isActive: true,
    color: "red",
    bg: "bg-blue",
    ok: false,
    okNumber: 0,
    fluits: ['apple','banana','orange'],
    fluitObject:{
      'apple': 100,
      'banana': 200,
      'orange': 400 
    }
  },
  
  methods: {
    sayHi: function(){
      return this.message
    },
    
    clickHundler: function(){
      this.clickNumber++
    },
    clickHundler2: function(times){
      this.clickNumber += times
    },
    clickOkNumberCount: function(){
      this.okNumber++
    },
    changeMousePosition: function(e){
      this.x = e.screenX
      this.y = e.screenY
    },
    myAlert: function(){
      alert("アラート！")
    },
    lessThanThreeMethod: function(){
      return this.clickNumber > 3 ? "3以上" : "3以下"
    },
    isActiveChange: function(){
      this.isActive = !this.isActive
    }
  },
  
  computed:{
    lessThanThree: function(){
      return this.clickNumber > 3 ? "3以上" : "3以下"
    }
  },
  
  watch: {
    clickNumber: function(){
      console.log(this)
      _this = this
      setTimeout(function(){
        _this.clickNumber = 0
        _this.message = "3秒経ちました"
      },3000)
    },
    
    okNumber: function(){
      if(this.okNumber % 3 === 0) 
        this.ok = true
      else
        this.ok = false
    }
  }
})
