
<template>
  <CommentsForm v-on:add-todo="addComment"/>
  <div class="jumbotron">
	<p v-if="comments.length<=0">Sem comentários.</p>
    <div class="list-group-item" v-for="(comment, index) in allComments" :key="index">
      ( {{ index+1 }} )<br/>
      <span class="comment__autor">Autor:<strong>{{ comment.name}}</strong></span>
      <p>{{ comment.message }}</p>
      <div>
        <a href="#" title="Excluir" v-on:click.prevent="removeComment(index)">Excluir</a>
      </div>
    </div>
  </div>
</template>

<script>
  import CommentsForm from "./CommentsForm";
  //import ModalAlert from "./ModalAlert";
  
  export default {
	components:{
      CommentsForm
      //,ModalAlert
    },
	data() {
      return{
        comments: [],
      }
    },
    methods:{	
      addComment(comment){
        this.comments.push(comment)
      },
      removeComment(index){
        console.log(index);
        this.comments.splice(index,1);
			}
	},
	computed: {
        allComments(){
          return this.comments.map(comment => ({
            ...comment,
            name: comment.name.trim() === '' ? 'Anonimo' : comment.name
          }))
        }
	},
	wath:{
      comments(val) {
        console.log("val", val)
      }
	}
  }
</script>


<style scoped>

</style>
