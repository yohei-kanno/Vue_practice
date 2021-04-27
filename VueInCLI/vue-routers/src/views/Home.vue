<template>
  <div>
    <p>{{ comment }}</p>
    <h3>HOMEcomponent</h3>
    <button @click="toUsers()">ToUsersPage</button>
  </div>
</template>

<script>

export default {
  computed:{
    comment(){
      return this.$store.state.comment
    }
  },
  methods:{
    toUsers(){
      this.$router.push({
        name: "users-id-profile",
        params:{id: 1}
      })
    }
  }
}
</script>