<template>
<section>
  <div class="form">
    <h2>Crie sua conta</h2>
    <form>
      <input type="text" placeholder="Nome Completo">
      <input type="text" placeholder="Nome Completo">
      <input type="text" placeholder="Nome Completo">
      <input type="text" placeholder="Nome Completo">
      <button class="btn">Criar conta</button>
    </form>
  </div>
</section>
</template>

<script>
export default {
  name:"UsuarioForm"
}
</script>

<style scoped>

section{
  width: 400px;
}

h2{
  text-align: center;
  margin-top: 20px;
}

</style>