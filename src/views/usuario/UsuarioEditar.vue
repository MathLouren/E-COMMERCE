<template>
  <section class="usuario_editar">
    <h2>Editar usuario</h2>
    <form>
      <div class="container_inputs">
        <label for="nome">Nome</label>
        <div class="edit">
          <input type="text" name="nome" v-model="nome" disabled>
          <img src="./imgs/settings.svg" @click="edit_name = true">
        </div>
        <div class="edit_container" v-if="edit_name">
          <div class="edit_info">
            <h2>Editar nome</h2>
            <input type="text" name="nome" v-model="nome">
            <button class="btn" @click="atualizarUsuario">Editar Nome</button>
          </div>
        </div>
      </div>
      <div class="container_inputs">
        <label for="email">Email</label>
        <div class="edit">
          <input type="text" name="email" v-model="email" disabled>
          <img src="./imgs/settings.svg" @click="edit_email = true">
        </div>
        <div class="edit_container" v-if="edit_email">
          <div class="edit_info">
            <h2>Editar Email</h2>
            <input type="email" name="email" v-model="email">
            <button class="btn" @click="atualizarUsuario">Editar Email</button>
          </div>
        </div>
      </div>
      <div class="container_inputs">
        <label for="password">Senha</label>
        <div class="edit">
          <input type="password" name="password" v-model="senha" disabled>
          <img src="./imgs/settings.svg" @click="edit_senha = true">
        </div>
        <div class="edit_container" v-if="edit_senha">
          <div class="edit_info">
            <h2>Editar senha</h2>
            <input type="text" name="senha" v-model="senhaAtual" placeholder="Senha atual">
            <input type="text" name="senha" v-model="novaSenha" placeholder="Nova Senha">
            <input type="text" name="senha" v-model="novaSenha2" placeholder="Repita a nova senha">
            <button class="btn">Editar senha</button>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import { api } from "@/services.js"
import { mapFields } from "@/helpers.js"

export default {
  name:"UsuarioEditar",
  data(){
    return{
      edit_name:false,
      edit_email:false,
      edit_senha:false,
      senhaAtual:null,
      novaSenha:null,
      novaSenha2:null
    }
  },
  computed:{
    ...mapFields({
      fields: ["nome","email","cep","rua","bairro","cidade","estado","nmr","senha"],
      base: "usuario",
      mutation:"UPDATE_USUARIO"
    })
  },
  methods:{
    atualizarUsuario(){
      api.put(`/usuario/${this.$store.state.usuario.id}`, this.$store.state.usuario).then(()=>{
        this.$store.dispatch("getUsuario");
        this.$router.push({name:"usuario"})
      }).catch(error =>{
        console.log(error)
      })
    }
  }
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

.edit_container{
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
}

.edit_info{
  margin-top: 200px;
  display: flex;
  width: 100%;
  max-width: 400px;
  flex-direction: column;
  gap: 15px;
  background: #fff;
  padding: 20px 10px;
  border-radius: 5px;
}

.edit_info h2{
  margin: 0 auto;
}

</style>