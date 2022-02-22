<template>
  <section>
      <div class="produtos" v-for="(produto,index) in produtos" :key="index">
          <h2>{{produto.nome}}</h2>
          <img :src="produto.img" alt="">
          <span>{{produto.preco | numeroPreco}}</span>
          <p>{{produto.descricao}}</p>
          <button class="btn">Comprar</button>
      </div>
  </section>
</template>

<script>
import { api } from "@/services.js"
import { serialize } from "@/helpers.js"

export default {
    data(){
        return{
            produtos:null,
            produtoPorPagina: 8
        }
    },
    computed:{
        url(){
            const query = serialize(this.$route.query)
            return `/produto?_limit=${this.produtoPorPagina}${query}`;
        }
    },
    methods:{
        getProdutos(){
            api.get(this.url).then((r)=>{
                return this.produtos = r.data
            })
        }
    },
     filters:{
        numeroPreco(currentValue){
            parseInt(currentValue)
            return currentValue.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
        }
    },
    watch:{
        url(){
            this.getProdutos()
        }
    },
    created(){
        this.getProdutos()
    }
}
</script>

<style scoped>

section{
    margin: auto;
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

.produtos{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 300px;
    height: 420px;
    border: 2px solid #000;
    padding: 10px;
}

.produtos h2{
    font-size: 1.7rem;
}

.produtos img{
    margin: 10px 0;
    height: 50%;
    width: 100%;
    max-width: 270px;
}

.produtos span{
    font-size: 1.5rem;
}

.produtos p{
    text-align: center;
    margin: 10px 0 15px 0;
}

</style>