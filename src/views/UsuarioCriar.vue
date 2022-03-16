<template>
<section>
  <div class="form">
    <h2>Crie sua conta</h2>
    <form>
      <input type="text" placeholder="Nome Completo" name="nome" v-model="nome" @change="$v.name.$touch()" :class="{error: $v.nome.$error}">
      <span v-if="$v.nome.$error">Este campo é requerido</span>
      <input type="email" placeholder="Email" v-model="email" @change="$v.email.$touch()" :class="{error: $v.email.$error}">
      <span v-if="$v.email.$error">Email inválido</span>
      <input type="text" placeholder="Cep"  v-model="cep" @change="$v.cep.$touch()" @keyup="pucharCep" :class="{error: $v.cep.$error}">
      <span v-if="$v.cep.$error">Este campo é requerido</span>
      <input ty-pe="text" placeholder="Rua" disabled v-model="rua">
      <input type="text" placeholder="Cidade" disabled v-model="cidade">
      <input type="text" placeholder="Estado" disabled v-model="estado">
      <input type="text" placeholder="Número da residência" v-model="nmr" @change="$v.nmr.$touch()" :class="{error: $v.nmr.$error}">
      <span v-if="$v.nmr.$error">Este campo é requerido</span>
      <input type="password" placeholder="Senha" v-model="confirm_password" @change="$v.confirm_password.$touch()" :class="{error: $v.confirm_password.$error}">
      <span v-if="$v.confirm_password.$error">Este campo é requerido</span>
      <input type="password" placeholder="Confirme sua senha" v-model="senha" @change="$v.senha.$touch()" :class="{error: $v.senha.$error}">
      <span v-if="$v.senha.$error">As senhas não coincidem</span>
      <button class="btn" @click.prevent="created">Criar conta</button>
    </form>
  </div>
</section>
</template>

<script>
import { required , email, sameAs} from "vuelidate/lib/validators";
import { getCep } from "@/services.js"
import { mapFields} from "@/helpers.js";

export default {
  name:"UsuarioForm",
  data(){
    return{
      confirm_password:"",
    }
  },
  computed:{
    ...mapFields({
      fields: ["nome","email","cep","rua","bairro","cidade","estado","nmr","senha"],
      base: "usuario",
      mutation:"UPDATE_USUARIO"
    }),
  },
  validations:{
      nome: { required },
      email: { required , email},
      cep: { required },
      nmr: { required },
      confirm_password: { required },
      senha: { required , 
      sameAs: sameAs('confirm_password')
      },
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
    created(){
      if(!this.$v.$invalid){
        this.criarUsuario()
      } else{
        this.$v.$touch();
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
    }, 
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
  margin: 0px 0 20px 0;
}

.form{
    width: 100%;
    max-width: 420px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    padding: 10px 20px;
    margin: 30px 0;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
}

.btn{
  margin: 5px 0;
}

input{
  margin: 0;
}

.error{
  border: 2px solid red;
}

span{
  text-align: start;
  color: red;
}

</style>