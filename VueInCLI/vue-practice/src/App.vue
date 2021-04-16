<template>
<div>
<!-- headerText="トータルのいいね"   -->
  <LikeHeader headerText="hello">
    <h3>良いねの数</h3>
    <template v-slot:my-title>
      <h1>トータルのいいね数</h1>  
    </template>
    <!-- デフォルトスロットを設置するとはみ出た要素を合体させてdefaultの名前で新しいtemplateタグを作り出す。
    <template v-slot:default></template>みたいな -->
      <ul>
        <li v-for= "fluit in fluits" :key="fluit">{{ fluit }}</li>
      </ul>
      
    <template v-slot:my-number>
      <h2>{{ number }}</h2>
    </template>
  </LikeHeader>
  <!-- emitはカスタムメソッドを作成するものであくまでデータを更新しているのは親である -->
  <LikeNumber v-bind:total-number="number" v-on:my-click="incrementNumber"></LikeNumber>
  <LikeNumber v-bind:total-number="number"></LikeNumber>
  <!-- {{headerText}}=>読み込まない -->
</div>
</template>
<script>
  import LikeHeaders from './components/LikeHeader.vue'
  
  export default {
    data(){
      return{
        number: 14,
        message: "hello",
        fluits :["banana","orange","apple"]
      }
    },
        
    components:{
      LikeHeader :LikeHeaders
    },
    
    methods:{
      incrementNumber(value){
        this.number = value
      }
    }
}
</script>

<style scoped>
  div{
    background-color: orange ;
  }
  h1{
    color:greenyellow;
  }
</style>