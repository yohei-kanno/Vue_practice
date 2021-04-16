<template>
  <div>
    <!-- slotの中にhtmlを指定するとそれがデフォルトになる -->
    <slot name="my-title"></slot>
    {{headerText}}
    <hr>
    
    <!-- 下のname="default"はなくてもOK -->
    <slot name="default"></slot>
    <hr>
    <slot name = "my-number"></slot>
  </div>
</template>

<script>
export default {
  props:["headerText"]
  }
</script>

<style scoped>
/* 親でも子でcssは適用される */
  div{
    border: 2px solid blue;
  }
  h1{
    color: red;
  }
</style>