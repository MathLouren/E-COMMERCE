<template>
  <section class="usuario_editar">
    <h2>Editar usuario</h2>
    <form>
      <div class="container_inputs">
        <label for="nome">Nome</label>
        <div class="edit">
          <input type="text" name="nome" v-model="nome" disabled>
          <img src="./imgs/settings.svg">
        </div>
      </div>
      <div class="container_inputs">
        <label for="email">Email</label>
        <div class="edit">
          <input type="text" name="email" v-model="email" disabled>
          <img src="./imgs/settings.svg">
        </div>
      </div>
      <div class="container_inputs">
        <label for="password">Senha</label>
        <div class="edit">
          <input type="password" name="password" v-model="senha" disabled>
          <img src="./imgs/settings.svg">
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import { mapFields} from "@/helpers.js"

export default {
  name:"UsuarioEditar",
  computed:{
    ...mapFields({
      fields: ["nome","email","cep","rua","bairro","cidade","estado","nmr","senha"],
      base: "usuario",
      mutation:"UPDATE_USUARIO"
    })
  },
}
</script>

<style>

.usuario_editar{
  margin: 10px 0;
}

form{
  width: 100%;
  max-width: 600px;
}

.container_inputs{
  width: 100%;
  gap: 10px;
  display: grid;
  grid-template-columns: 60px 1fr;
  align-items: center;
}

label{
  font-size: 1.2rem;
}

input{
  grid-column: 2;
  margin: 5px 0;
}

.edit{
  display: flex;
}

.edit img{
  margin-left: -36px;
  cursor: pointer;
}



</style>