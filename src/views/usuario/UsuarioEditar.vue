<template>
  <section class="usuario_editar">
    <h2>Editar usuario</h2>
    <form>
      <label for="nome">Nome</label>
      <input type="text" name="nome" v-model="nome">
      <label for="email">Email</label>
      <input type="email" name="email" v-model="email">
      <label for="password">Senha</label>
      <input type="password" name="password" v-model="senha">
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
  display: grid;
  grid-template-columns: 50px 1fr;
  align-items: center;
}

label{
  font-size: 1.1rem;
}

input{
  grid-column: 2;
  margin: 5px 0;
}
</style>