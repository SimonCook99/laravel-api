<template>
    <main class="container">
        <h1>Test prova Vue-Laravel</h1>
        <h3>Sezione front-end del sito</h3>

        <br>

        <h1>Lista post:</h1>

        <div class="row">
            <div class="card d-flex col-4" v-for="post in posts" :key="post.id" style="width: 18rem;">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">{{post.title}}</h5>
                    <p class="card-text">{{post.content}}</p>
                    <button type="button" class="btn btn-outline-success">{{post.category.name}}</button>
                    <a href="#" class="btn btn-primary">Mostra dettagli post</a>
                </div>
            </div>
        </div>
        
    </main>
</template>

<script>
    export default {
        name : "Main",

        data(){
            return{
                posts: []
            }
        },

        created(){
            axios.get("/api/posts").then( (response) => {
                this.posts = response.data.results;
            });
        }
    }
</script>

<style>

</style>