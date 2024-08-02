<template>
  <div class="container">		
    <HeaderPage />
    <MateriaLoremY />
    <ModalCookies/>
    <Comments /> 
  </div>
  
</template>

<script>

  /*
  import Comments from "./components/Comments";

  export default{
    name: "AppVVC",
    components:{
      Comments
    }
  }
  */
  import Comments from "./components/CommentsList";
  import HeaderPage from "./components/HeaderPage";
  import MateriaLoremY from "./components/MateriaLoremY";
  import ModalCookies from "./components/ModalCookies.vue";
  
  export default{
    name: "AppVVC",
    components:{
      HeaderPage,
      MateriaLoremY,
      Comments,
      ModalCookies
    }
  }

</script>
  body {
    min-height: 75rem;
    padding-top: 4.5rem;
  }
<style>

</style>