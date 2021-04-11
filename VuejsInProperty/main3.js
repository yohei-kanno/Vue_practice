var app = new Vue({
  el: "#app",
  data: {
    km: "",
    m: "",
    mm: "",
  },
  watch: {
    km: function(value){
      this.km = value
      this.m = value * 1_000
      this.mm = value * 1_000_000
    },
    m: function(value){
      this.km = value / 1_000
      this.m = value
      this.mm = value * 1_000
    },
    mm: function(value){
      this.km = value / 1_000_000
      this.m = value / 1_000
      this.mm = value
    }
  }
})