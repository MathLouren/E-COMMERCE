<template>
  <section>
    <h2>Adicionar Produto</h2>
    <ProdutoAdicionar />
    <h2>Seus produtos</h2>
    <transition-group v-if="usuario_produtos" name="list" tag="ul">
      <li v-for="(produto, index) in usuario_produtos" :key="index">
        <ProdutoItem :produto="produto">
          <p>{{produto.descricao}}</p>
          <button class="deletar btn" @click="deletarProduto(produto.id)">Deletar produto</button>
        </ProdutoItem>
      </li>
    </transition-group>
  </section>
</template>

<script>
import ProdutoAdicionar from "@/components/ProdutoAdicionar.vue"
import ProdutoItem from "@/components/ProdutoItem.vue"
import {mapState, mapActions} from "vuex"
import {api} from "@/services.js"


export default {
  name:"UsuarioProduto",
  components:{
    ProdutoAdicionar,
    ProdutoItem
  },
  computed:{
    ...mapState(["login","usuario","usuario_produtos"])
  },
  methods:{
    ...mapActions(["getUsuarioProdutos"]),
    deletarProduto(id){
      const confirmar = window.confirm("Deseja remover este produto?")
      if(confirmar){
        api.delete(`/produto/${id}`).then(() =>{
          this.getUsuarioProdutos();
        }).catch(error =>{
          console.log(error.r)
        })
      }
    }
  },
  watch:{
    login(){
      this.getUsuarioProdutos();
    }
  },
  created(){
    if(this.login){
      this.getUsuarioProdutos();
    }
  }
}
</script>

<style scoped>

h2{
  margin: 10px 0;
}

.list-enter,
.list-leave-to{
  opacity: 0;
  transform: translate3d(20px, 0, 0);
}

.list-enter-active,
.list-leave-active{
  transition: all .3s;
}

.deletar{
  margin: 20px auto;
}

</style>