<template>
<section>
  <div class="form">
    <h2>Crie sua conta</h2>
    <form>
      <input type="text" placeholder="Nome Completo" name="nome" v-model="$v.nome.$model" :class="{error: $v.nome.$error}">
      <span v-if="true">Este campo é requerido</span>
      <input type="email" placeholder="Email" v-model="email" :class="{error: $v.nome.$error}">
      <span v-if="true">Este campo é requerido</span>
      <input type="text" placeholder="Cep"  v-model="cep" @keyup="pucharCep" :class="{error: $v.nome.$error}">
      <span v-if="true">Este campo é requerido</span>
      <input type="text" placeholder="Rua" disabled v-model="rua">
      <input type="text" placeholder="Cidade" disabled v-model="cidade">
      <input type="text" placeholder="Estado" disabled v-model="estado">
      <input type="text" placeholder="Número da residência" v-model="nmr" :class="{error: $v.nome.$error}">
      <span v-if="true">Este campo é requerido</span>
      <input type="password" placeholder="Senha" :class="{error: $v.nome.$error}">
      <span v-if="true">Este campo é requerido</span>
      <input type="password" placeholder="Confirme sua senha" v-model="senha" :class="{error: $v.nome.$error}">
      <span v-if="true">Este campo é requerido</span>
      <button class="btn" @click.prevent="criarUsuario">Criar conta</button>
    </form>
  </div>
</section>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { getCep } from "@/services.js"
import { mapFields} from "@/helpers.js";

export default {
  name:"UsuarioForm",
  computed:{
    ...mapFields({
      fields: ["nome","email","cep","rua","bairro","cidade","estado","nmr","senha"],
      base: "usuario",
      mutation:"UPDATE_USUARIO"
    }),
  },
  validations:{
      nome: { required },
  },
  methods:{
     pucharCep(){
      const cep = this.cep.replace(/\D/g, "");
      if(cep.length === 8){
        getCep(cep).then(r =>{
          this.rua = r.data.logradouro;
          this.bairro = r.data.bairro;
          this.cidade = r.data.localidade;
          this.estado = r.data.uf;
        })
      }
    },
    async criarUsuario(){
      try{
        await this.$store.dispatch("criarUsuario", this.$store.state.usuario)
        await this.$store.dispatch("getUsuario", this.$store.state.usuario.email);
        this.$router.push({ name:"usuario" });
      } catch(error){
        console.log(error)
      }
    } 
  }
}
</script>

<style scoped>

section{
  display: flex;
  justify-content: center;
  align-items: center;
}

h2{
  text-align: center;
  margin: 5px 0;
}

.form{
    border: 2px solid rgb(46, 46, 46);
    width: 100%;
    max-width: 420px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    padding: 30px 20px;
    margin-top: 20px;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
}

input{
  margin: 0;
}

.error{
  border: 2px solid red;
}

span{
  color: red;
}

</style>