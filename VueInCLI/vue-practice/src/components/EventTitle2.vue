<template>
  <div>
   <label for="title">Title</label>
      <input 
        id="title"
        type="text"
        v-bind:value="value"
        @input="$emit('input', $event.target.value)"
      >
      <span>{{ value }}</span>
      <span>{{ number }}</span>
  </div>
  
</template>

<script>
export default {
  props: ["value","number"]
}
</script>