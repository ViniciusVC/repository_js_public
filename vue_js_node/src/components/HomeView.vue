
<template>
  <h1>HOME</h1>
  <div class="jumbotron">
    <p>Esta é a hota Home.</p>
    <button @click="goToAbout">Sobre este projeto</button>
  </div>
</template>

<script>
 export default {
  methods: {
    goToAbout() {
      this.$router.push('/about')
    },
  },
}
</script>

<style scoped>

</style>
