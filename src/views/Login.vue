<template>
  <section>
      <div class="form_container">
          <div class="form">
              <h2>Login</h2>
              <form>
                  <input type="text" placeholder="Email" v-model="email">
                  <input type="password" placeholder="Senha" v-model="senha">
                  <button class="btn" @click.prevent="logar">Entrar</button>
                  <router-link class="btn" to="/registrar">Novo? Crie sua conta</router-link>
              </form>   
          </div>
      </div>
  </section>
</template>

<script>


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
        }
    }
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

</style>