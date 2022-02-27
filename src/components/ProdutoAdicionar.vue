<template>
  <section>
    <form class="adicionar_produto">
      <label for="nome">Nome</label>
      <input type="text" id="nome" name="nome" v-model="produto.nome">
      <label for="preco">Preco (R$)</label>
      <input type="text" id="preco" name="preco" v-model="produto.preco">
      <label for="nome">Fotos</label>
      <input type="file" id="fotos" name="fotos" ref="fotos">
      <label for="nome">Descrição</label>
      <textarea name="textarea" id="texarea" cols="30" rows="10" v-model="produto.descricao"></textarea>
      <input class="btn" type="button" value="Adicionar Produto" @click.prevent="adicionarProduto">
    </form>
  </section>
</template>

<script>
import {api} from "@/services.js"

export default {
  name:"ProdutosAdicionar",
  data(){
    return{
      produto:{
        nome:"",
        preco:"",
        descricao:"",
        fotos: null
      }
    }
  },
  methods:{
    formatarProduto(){
      this.produto.usuario_id = this.$store.state.usuario.id;
    },
    adicionarProduto(){
      this.formatarProduto()
      api.post("/produto", this.produto).then(()=>{
        this.$store.dispatch("getUsuarioProdutos")
      })
    }
  }
}
</script>

<style scoped>

.adicionar-produto{
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  margin-bottom: 60px;
}

.btn{
  grid-column: 2;
}
</style>