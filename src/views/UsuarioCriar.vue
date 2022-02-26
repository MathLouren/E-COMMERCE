<template>
<section>
  <div class="form">
    <h2>Crie sua conta</h2>
    <form>
      <input type="text" placeholder="Nome Completo" v-model="nome">
      <input type="email" placeholder="Email" v-model="email">
      <input type="text" placeholder="Cep" @keyup="pucharCep" v-model="cep">
      <input type="text" placeholder="Rua" disabled v-model="rua">
      <input type="text" placeholder="Cidade" disabled v-model="cidade">
      <input type="text" placeholder="Estado" disabled v-model="estado">
      <input type="text" placeholder="Numero da residencia" v-model="nmr">
      <input type="password" placeholder="Senha">
      <input type="password" placeholder="Confirme sua senha" v-model="senha">
      <button class="btn">Criar conta</button>
    </form>
  </div>
</section>
</template>

<script>
/* import {getCep} from "@/services.js" */

export default {
  name:"UsuarioForm",
  data(){
    return{
      nome:"",
      email:"",
      cep:"",
      rua:"",
      cidade:"",
      estado:"",
      nmr:"",
      senha:""
    }
  },
  methods:{
    /* pucharCep(){
      const cep = this.cep.replace(/\D/g, "");
      if(cep.lenght = 8){
        getCep(cep.then(r =>{
          this.rua = r.data.logradouro;
          this.bairro = r.data.bairro;
          this.cidade = r.data.localidade;
          this.estado = r.data.uf;
        }))
      }
    } */
  }
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