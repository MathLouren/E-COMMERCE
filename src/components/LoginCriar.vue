<template>
  <section>
        <transition mode="out-in">
            <button v-if="!criar" @click="criar = true" class="btn">Novo? Criar conta</button>
            <UsuarioForm v-else/>
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