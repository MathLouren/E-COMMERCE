<template>
  <header>
    <nav>
      <router-link to="/" class="logo">
        <p>E-SHOP</p>
      </router-link>
      <router-link v-if="$store.state.login" class="btn" to="/usuario">{{nome}}</router-link>
      <router-link v-else class="btn" to="/login">Vender / Login</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  computed: {
    nome() {
      return this.$store.state.usuario.nome.replace(/ .*/, "");
    }
  }
};
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
}

.logo {
  padding: 10px 0;
}

.logo p{
  font-size: 1.6rem;
  font-weight: 600;
  color: rgb(51, 51, 51);
}
</style>
