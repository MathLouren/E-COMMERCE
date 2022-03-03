<template>
  <section>
      <div class="form_container">
          <div class="form">
              <h2>Login</h2>
              <form>
                  <input type="text" placeholder="Email" v-model="email" @change="$v.email.$touch()" :class="{error: $v.email.$error}">
                  <span v-if="$v.email.$error">Email inválido</span>
                  <input type="password" placeholder="Senha" v-model="senha" @change="$v.senha.$touch()" :class="{error: $v.senha.$error}">
                  <span v-if="$v.senha.$error">Este campo é requerido</span>
                  <button class="btn" @click.prevent="created">Entrar</button>
                  <router-link class="btn" to="/registrar">Novo? Crie sua conta</router-link>
              </form>   
          </div>
      </div>
  </section>
</template>

<script>
import { required , email,} from "vuelidate/lib/validators";

export default {
    components:{
       
    },
    data(){
        return{
            email:"",
            senha:""
        }
    },
    methods:{
        logar(){
            this.$store.dispatch("getUsuario", this.email);
            this.$router.push({name: "usuario"})
        },
        created(){
      if(!this.$v.$invalid){
        this.logar()
      } else{
        this.$v.$touch();
      }
    },
    },
    validations:{
      email: { required , email},
      senha: { required },
  },
}
</script>

<style scoped>

.form_container{
    height: 90vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
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

.error{
  border: 2px solid red;
}

span{
  text-align: start;
  color: red;
}

</style>