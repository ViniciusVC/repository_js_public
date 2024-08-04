
<template>
  <h1>SOBRE</h1>
  <div class="jumbotron">
    <p>Esta é a rota Sobre.</p>
    <label>
    Search: <input v-model.trim="search" maxlength="20">
  </label>
  </div>
  <div class="jumbotron">

  <p>Este é um projeto exemplo de Vue com Node.</p>

<strong>Project setup</strong>
<p>
npm install
</p>

<strong> Compila a hot-reloads para desenvolvimento</strong>
<p>
npm run serve
</p>

<strong> Compila e minifica para produção </strong>
<p>
npm run build
</p>

<strong>Lints e correções de arquivos</strong>
<p>
npm run lint
</p>

<strong>No package.json incluir :</strong>
<p>"rules": { "vue/multi-word-component-names": "off" }</p>

<strong>Instalar rotas:</strong>
<p>npm install vue-router</p>
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

<style scoped>

</style>
