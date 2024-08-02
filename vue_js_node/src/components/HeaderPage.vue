
<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <RouterLink to="/" class="navbar-brand">EXEMPLO VUE3 COMPILADO</RouterLink>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto">
      
      <li class="nav-item">
        <RouterLink to="/" class="nav-link">Home</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/materia" class="nav-link">Materia</RouterLink>
      </li>
      
      <li class="nav-item">
        <RouterLink to="/about" class="nav-link">Sobre</RouterLink>
      </li>
      
      </ul>
      <nav>
    
    
  </nav>
    </div>
    <div>
      <span class="navbar-brand">Rota atual: <strong > {{ $route.fullPath }}</strong> </span>
    </div>
  </nav>
</template>

<script>

</script>


<style scoped>

</style>
