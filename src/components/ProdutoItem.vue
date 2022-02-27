<template>
 <div class="produto" v-if="produto">
     <router-link :to="{name: 'produto', params: {id: produto.id}}">
         <img v-if="produto.fotos" :src="produto.fotos[0].src" 
         :alt="produto.fotos[0].titulo">
         <p>Ver produto</p>
     </router-link>
     <div class="info">
         <p class="titulo">{{produto.nome}}</p>
         <p class="preco">{{produto.preco | numeroPreco}}</p>
     </div>
     <slot></slot>
 </div>
</template>

<script>
export default {
    name: "ProdutoItem",
    props: ["produto"]
}
</script>

<style scoped>

.produto{
    padding: 10px;
    border-bottom: 1px solid #ccc;
}

.titulo{
    font-size: 2rem;
}

.preco{
    font-size: 1.5rem;
    margin: 5px 0;
}

</style>