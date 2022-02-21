<template>
  <section>
      <div class="produtos" v-for="(produto,index) in produtos" :key="index">
          <h2>{{produto.nome}}</h2>
      </div>
  </section>
</template>

<script>
export default {
    data(){
        return{
            produtos:null
        }
    },
    methods:{
        getProdutos(){
            fetch("http://localhost:3000/produto").then( r => r.json()).then((r)=>{
                this.produtos = r
            })
        }
    },
    created(){
        this.getProdutos()
    }
}
</script>

<style scoped>

section{
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.produtos{
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 300px;
    height: 400px;
    border: 2px solid #000;
}

</style>