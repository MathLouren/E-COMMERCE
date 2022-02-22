<template>
  <header>
      <nav>
          <router-link to="/" class="logo">
            <img src="../assets/logo.svg" alt="">
            <span>E-SHOP</span>
          </router-link>
          <router-link to="/login" class="btn">Login</router-link>
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
    max-width: 100%;
    width: 1400px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
    box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
}

.logo{
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.5rem;
    color: #fff;
}

</style>