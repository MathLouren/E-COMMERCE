<template>
<section>
  <div class="form">
    <h2>Crie sua conta</h2>
    <form>
      <input type="text" placeholder="Nome Completo">
      <input type="email" placeholder="Email">
      <input type="text" placeholder="Cep">
      <input type="text" placeholder="Rua" disabled>
      <input type="text" placeholder="Cidade" disabled>
      <input type="text" placeholder="Estado" disabled>
      <input type="password" placeholder="Senha">
      <input type="password" placeholder="Confirme sua senha">
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
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

h2{
  text-align: center;
  margin-top: 20px;
}

.form{
    border: 4px solid rgb(46, 46, 46);
    width: 100%;
    max-width: 470px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    padding: 30px 20px;
    margin-top: 20px;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
}

</style>