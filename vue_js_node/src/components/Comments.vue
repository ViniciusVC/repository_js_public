
<template>
  <div class="container">		
      <div class="form-todo form-group">

				<h1></h1>
				<hr/>
				<h2>Comentários</h2>
				<p>
					<input placeholder="nome" type="text" name="author" class="form-control" v-model="name"/>
				</p>
				<p>
					<textarea placeholder="Comentário" name="message" class="form-control" v-model="message"></textarea>
				</p>
			
			</div>
			
      <div>
				<butto v-on:click="addComment" type="submit" class="btn btn-primary">Comentar</butto>
				
				<div class="dist-group">
					<div class="list-group-item" v-for="(comment, index) in allComments" :key="index">
						( {{ index+1 }} )<br/>
						<span class="comment__autor">Autor:<strong>{{ comment.name}}</strong></span>
						<p>{{ comment.message }}</p>
						<div>
							<a href="#" title="Excluir" v-on:click.prevent="removeComment(index)">Excluir</a>
						</div>
					</div>
				</div>

			</div>
			<hr/>

	</div>
</template>

<script>
  export default {
		data() {
      return{
						comments: [
						],
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
          this.comments.push({
            name: this.name,
            message: this.message
          });
					this.name = "";
					this.message = "";
        }
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
