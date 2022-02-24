<template>
  <section>
    <div class="produto" v-if="produto">
      <ul class="fotos" v-if="produto.fotos">
        <li v-for="(foto, index) in produto.fotos" :key="index">
          <img :src="foto.src" alt="foto.titulo">
        </li>
      </ul>
    </div>
    <div class="info">
      <h1>{{produto.nome}}</h1>
      <p class="preco">{{produto.preco}}</p>
      <p class="descricao">{{produto.descricao}}</p>
    </div>
  </section>
</template>

<script>
import{ api } from "@/services.js"


export default {
    name:"Produto",
    props: ["id"],
    data(){
      return{
        produto:null
      }
    },
    methods:{
      getProduto(){
        api.get(`/produto/${this.id}`).then( r =>{
          this.produto = r.data
        })
      }
    },
    created(){
      this.getProduto()
    }
}
</script>

<style>

</style>