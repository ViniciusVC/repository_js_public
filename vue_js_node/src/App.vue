<template>
  <div class="container">		
    <HeaderPage />
  <main>
    <RouterView />
  </main>
    <ModalCookies/>
  </div>
  
</template>

<script>

  import HeaderPage from "./components/HeaderPage.vue";
  import ModalCookies from "./components/ModalCookies.vue";

  export default{
    name: "AppVVC",
    components:{
      HeaderPage,
      ModalCookies
    }
  }

</script>
 
<style>
 body {
    min-height: 75rem;
    padding-top: 4.5rem;
  }
</style>