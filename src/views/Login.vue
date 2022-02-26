<template>
  <section>
      <div class="form_container">
          <div class="form">
              <h2>Login</h2>
              <form>
                  <input type="text" placeholder="Email" v-model="email">
                  <input type="password" placeholder="Senha" v-model="senha">
                  <button class="btn" @click.prevent="logar">Entrar</button>
                  <LoginCriar />
              </form>   
          </div>
      </div>
  </section>
</template>

<script>
import LoginCriar from "@/components/LoginCriar.vue"

export default {
    components:{
        LoginCriar
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
    height: 80vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.form{
    border: 4px solid rgb(46, 46, 46);
    width: 100%;
    max-width: 470px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    padding: 30px 20px;
}

form{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}

.check{
    display: inline;
}

</style>