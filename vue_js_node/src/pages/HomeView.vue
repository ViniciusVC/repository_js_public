
<template>
  <h1>HOME</h1>
  <div class="jumbotron">
    <p>Esta é a hota Home.</p>
    <button @click="goToAbout">Sobre este projeto</button>
    <br/>
    <br/>
    <button @click="goToMateria">Sobre o Vue</button>
  </div>
</template>

<script>
 export default {
  methods: {
    goToAbout() {
      this.$router.push('/about')
    },goToMateria() {
      this.$router.push('/materia')
    },
  },
}
</script>

<style scoped>

</style>
