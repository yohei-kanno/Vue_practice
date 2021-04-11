var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js',
    messageInHtml: 'Hello <span style = "color:red;">Vue.js</span>',
    messageInCloak: 'Hello Vue.js',
    messageInText: 'Hello Vue.js',
  },
  
  methods: {
    clickHandler: function(event){
      this.message = this.message.split('').reverse().join('')
    }
  }
})

//  v-once:一回だけ動的にページを表示させる。それ以降は静的なコンテンツを提供する。
// v-pre:生のマスタッシュ構文を参照出来る。
