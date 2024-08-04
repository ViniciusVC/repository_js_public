
<template>
  <div v-if="menssagem!==''" class="shadow p-3 mb-5 rounded fixed-top float-left" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Opa!</h5>
        <button v-on:click="closeModalErro" type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>{{ menssagem }}</p>
      </div>
      <div class="modal-footer">
        <button v-on:click="closeModalErro" type="button" class="btn btn-primary">Voltar</button>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ModalAlert',

    methods:{
      closeModalErro(){
        console.log("Fecha janela de erro.");
        this.$emit('update:message', {menssagem: ""});
      }
    },

    props: {
      menssagem: {
        type: String,
        required: true
      }
    }

  }
</script>


<style scoped>

</style>
