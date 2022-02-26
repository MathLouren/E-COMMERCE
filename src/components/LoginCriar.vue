<template>
  <section>
            <button v-if="!criar" @click="criar = true" class="btn">Novo? Criar conta</button>
        <transition mode="out-in">    
            <UsuarioForm v-if="criar"/>
        </transition>
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

<style scoped>

.btn{
    width: 100%;
    max-width: 300px;
}

</style>