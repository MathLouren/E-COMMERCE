<template>
  <div class="buscar_container">
      <input type="text" v-model="busca" placeholder="Buscar produtos...">
      <img src="../assets/search.svg" alt="" @click.prevent="buscarProdutos">
  </div>
</template>

<script>
export default {
    data(){
        return{
            busca:"",
        }
    },
    methods:{
        buscarProdutos(){
            this.$router.push({query: {q:this.busca} })
        }
    }
}
</script>

<style scoped>

input{
    padding-right: 40px;
    width: 100%;
    max-width: 900px;
}

.buscar_container{
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.buscar_container img{
    margin-left: -53px;
    cursor: pointer;
    padding: 10px;
}

</style>