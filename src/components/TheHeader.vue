<template>
  <header>
      <nav>
          <router-link to="/" class="logo">
            <img src="../assets/logo.svg" alt="">
          </router-link>
          <router-link to="/login" class="btn">Vender</router-link>
      </nav>
  </header>
</template>

<script>
export default {
    name:"TheHeader"
}
</script>

<style scoped>

header{
    background-color: rgb(46, 46, 46);
}

nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
    box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
}


</style>