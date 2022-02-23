<template>
<section>
    <transition mode="out-in">
    <div v-if="produtos && produtos.length" key="produtos">
        <div class="produtos_container">
            <div class="produtos" v-for="(produto,index) in produtos" :key="index">
                <router-link :to="{name: 'produto', params:{id:produto.id}}">
                    <h2>{{produto.nome}}</h2>
                    <img :src="produto.img" alt="">
                    <span>{{produto.preco | numeroPreco}}</span>
                    <p>{{produto.descricao}}</p>
                    <button class="btn">Comprar</button>
                </router-link>
            </div>
        </div>
            <div class="paginacao">
                <ProdutosPaginar :produtosTotal="produtosTotal" 
                :produtosPorPagina="produtosPorPagina"/>
            </div>
    </div>
    <div v-else-if="produtos && produtos.length === 0" key="sem_resultado">
        <p class="sem_resultados">Busca sem resultados.</p>
    </div>
        <div v-else key="carrengando">
            <PaginaCarregando />
        </div>
        </transition>
    </section>
</template>

<script>
import ProdutosPaginar from "@/components/ProdutosPaginar.vue"
import { api } from "@/services.js"
import { serialize } from "@/helpers.js"

export default {
    data(){
        return{
            produtos:null,
            produtosPorPagina: 8,
            produtosTotal:0
        }
    },
    components:{
        ProdutosPaginar
    },
    computed:{
        url(){
            const query = serialize(this.$route.query)
            return `/produto?_limit=${this.produtosPorPagina}${query}`;
        }
    },
    methods:{
        getProdutos(){
            this.produtos = null;
            api.get(this.url).then((r)=>{
                this.produtosTotal = Number(r.headers["x-total-count"]);
                return this.produtos = r.data
            })
        }
    },
     filters:{
        numeroPreco(currentValue){
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

.produtos_container{
    min-height: 100%;
    margin: auto;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
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

.paginacao{
   display: flex;
   justify-content: center;
   margin-top: 40px;
}

</style>