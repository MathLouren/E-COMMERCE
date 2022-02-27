<template>
  <section class="usuario">
    <nav class="sidenav">
      <ul>
        <li>
          <router-link :to="{name: 'usuario'}" class="btn">Produtos</router-link>
        </li>
        <li>
          <router-link :to="{name: 'compras'}" class="btn">Compras</router-link>
        </li>
        <li>
          <router-link :to="{name: 'vendas'}" class="btn">Vendas</router-link>
        </li>
        <li>
          <router-link :to="{name: 'usuario-editar'}" class="btn">Editar</router-link>
        </li>
        <li>
          <button @click="deslogar" class="btn">Deslogar</button>
        </li>
      </ul>
    </nav>
    <div>
      <transition mode="out-in">
      <router-view></router-view>
    </transition>
    </div>
  </section>
</template>

<script>
export default {
    name:"Usuario",
    methods:{
      deslogar(){
        this.$store.dispatch("deslogarUsuario");
        this.$router.push('/login')
      }
    }
}
</script>

<style scoped> 

li{
  width: 100%;
  margin: 10px 0;
}

.usuario{
  display: flex;
}

.sidenav{
  margin: 0 30px 0 0;
}

.sidenav a.router-link-exact-active{
  background-color: rgb(46, 46, 46);
  color: #fff;
}

</style>