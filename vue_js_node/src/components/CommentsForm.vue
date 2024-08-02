
<template>
  
    <div class="form-todo form-group">
      <h3>Comentários</h3>
        <p>
          <input placeholder="nome" type="text" name="author" class="form-control" v-model="name"/>
        </p>
        <p>
          <textarea placeholder="Comentário" name="message" class="form-control" v-model="message"></textarea>
        </p>
        <butto v-on:click="addComment" type="submit" class="btn btn-primary">Comentar</butto>
    </div>

</template>

<script>
  export default {
    data() {
      return{
        name: '',
        message: '',
      }
    },
    methods:{		
      addComment() {
        if(this.message.trim() == ""){
          alert("Campo vazio.");
        }else{
          console.log(this.name);
          console.log(this.message);

          // Emite um aviso para todos os componentes ouvindo.  
          this.$emit("add-todo",{
            name: this.name,
            message: this.message
          })

          this.name = "";
          this.message = "";
        }
      }
    }
  }
</script>


<style scoped>

</style>
