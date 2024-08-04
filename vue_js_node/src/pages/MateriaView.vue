
<template>
  <h1>MATERIA</h1>
  <div class="jumbotron">
    <MateriaVue/>
    <Comments/>
  </div>
</template>

<script setup>

</script>

<script>
  import Comments from "../components/CommentsList.vue";
  import MateriaVue from "../components/MateriaVue.vue";
  export default{
    components:{
      MateriaVue,
      Comments,
    }
  }

</script>

<style scoped>

</style>
