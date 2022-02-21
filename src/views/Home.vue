<template>
  <section>
      <h1>🛒 Compre ou Venda 💰</h1>
      <ProdutosBuscar />
      <ProdutosLista />
  </section>
</template>

<script>
import ProdutosBuscar from "@/components/ProdutosBuscar.vue"
import ProdutosLista from "@/components/ProdutosLista.vue"


export default {
    name: "home",
    components:{
        ProdutosBuscar,
        ProdutosLista
    }
}
</script>

<style scoped>

h1{
    margin: 30px 0;
    font-size: 2rem;
    text-align: center;
}

</style>