<template>
  <section>
      <p>{{produtosPorPagina}} {{produtosTotal}}</p>
  </section>
</template>

<script>
export default {
    props: {
        produtosPorPagina:{
            type:Number,
            default:1
        },
        produtosTotal:{
            type:Number,
            default:1
        }
    }
}
</script>

<style>

</style>