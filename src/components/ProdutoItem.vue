<template>
 <div class="produto" v-if="produto">
     <div class="info">
         <p class="titulo">{{produto.nome}}</p>
         <p class="preco">{{produto.preco | numeroPreco}}</p>
     </div>
     <slot></slot>
     <router-link :to="{name: 'produto', params: {id: produto.id}}" class="btn">
        <img v-if="produto.fotos" :src="produto.fotos[0].src" 
        :alt="produto.fotos[0].titulo" class="produto-img">
        <p>Ver produto</p>
    </router-link>
 </div>
</template>

<script>
export default {
    name: "ProdutoItem",
    props: ["produto"]
}
</script>

<style scoped>

.btn{
    margin: 15px 0;
}

.produto{
    border-top: 1px solid #ccc;
    transition: 0.4s;
    margin: 5px 0;
    padding: 10px 0;
}

.titulo{
    font-size: 2rem;
}

.preco{
    font-size: 1.5rem;
    margin: 7px 0;
}

.produto-img{
    border-radius: 4px;
    overflow: hidden;
    height: 100px;
}

</style>