<template>
  <section>
      <h2>Crie sua conta</h2>
      <button v-if="!criar" @click="criar = true" class="btn">Novo? Criar conta</button>
      <UsuarioForm v-else/>
  </section>
</template>

<script>
import UsuarioForm from "@/components/UsuarioForm.vue"

export default {
    name:"LoginCriar",
    components:{
        UsuarioForm
    },
    data(){
        return{
            criar:false
        }
    }
}
</script>

<style>

</style>