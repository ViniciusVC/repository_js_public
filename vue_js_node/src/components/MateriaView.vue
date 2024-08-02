
<template>
  <h1>MATERIA</h1>
  <div class="jumbotron">
    <p>Esta é a rota Materia.</p>
    <label>
    Search: <input v-model.trim="search" maxlength="20">
  </label>
  <MateriaLoremY/>
  <Comments/>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const search = computed({
  get() {
    return route.query.search ?? ''
  },
  set(search) {
    router.replace({ query: { search } })
  }
})
</script>

<script>
  import Comments from "./CommentsList.vue";
  import MateriaLoremY from "./MateriaLoremY.vue";

  export default{
    components:{
      MateriaLoremY,
      Comments,
    }
  }

</script>

<style scoped>

</style>
