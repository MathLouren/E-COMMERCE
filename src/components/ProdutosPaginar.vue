<template>
  <section>
      <ul class="paginas" v-if="paginasTotal > 1">
          <li v-for="pagina in paginas" :key="pagina">
              <router-link :to="{query: query(pagina)}">{{pagina}}</router-link>
          </li>
      </ul>
  </section>
</template>

<script>
export default {
    props: {
        produtosPorPagina:{
            type:Number,
            default: 1
        },
        produtosTotal:{
            type:Number,
            default: 1
        }
    },
    methods:{
        query(pagina){
            return{
                ...this.$route.query,
                _page: pagina
            }
        }
    },
    computed:{
        paginas(){
            const current = Number(this.$route.query._page);
            const range = 9;
            const offset = Math.ceil(range / 2)
            const total = this.paginasTotal;
            const pagesArray = [];

            for (let i = 1; i <= total; i++){
                pagesArray.push(i)
            }

            pagesArray.splice(0, current - offset)
            pagesArray.splice(range, total)

            return pagesArray
        },
        paginasTotal(){
            const total = this.produtosTotal / this.produtosPorPagina;
            return total !== Infinity ? Math.ceil(total) : 0;
        }
    }
}
</script>

<style scoped>

.paginas{
    display: flex;
    gap: 10px;
}

li a{
    padding: 5px 7px;
}

li a:hover{
    color: rgb(124, 124, 124);
}

li a.router-link-exact-active{
   background: rgb(90, 90, 90);
    color: #fff;
}

</style>