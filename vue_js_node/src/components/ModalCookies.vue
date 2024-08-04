
<template>
  <div v-if="modalopen" class="shadow p-3 mb-5 rounded fixed-top float-left" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Cookies</h5>
        <button v-on:click="closeModalCookie" type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Este site usa cookies e tecnologias afins, que são pequenos arquivos ou trechos de texto baixados para um aparelho quando o visitante acessa um site ou app. </p>
      </div>
      <div class="modal-footer">
        <button v-on:click="closeModalCookie" type="button" class="btn btn-secondary" data-dismiss="modal">Ok</button>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        modalopen: true
      }
    },
    methods:{
      closeModalCookie(){
        this.modalopen = false;
      }
    }
  }
</script>


<style scoped>

</style>
