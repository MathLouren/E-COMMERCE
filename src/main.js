import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PaginaCarregando from "@/components/PaginaCarregando.vue"

Vue.config.productionTip = false
Vue.component("PaginaCarregando", PaginaCarregando)

Vue.filter("numeroPreco", currentValue =>{
  return currentValue.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
})

/* Vue.filters:{
  numeroPreco(currentValue){
      return currentValue.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
  }
}, */

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
