import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home.vue"
import Login from "../views/Login.vue"
import Produto from "../views/Produto.vue"
import Usuario from "../views/usuario/Usuario.vue"
import UsuarioCriar from "../views/UsuarioCriar.vue"
import UsuarioProdutos from "../views/usuario/UsuarioProdutos.vue"
import UsuarioVendas from "../views/usuario/UsuarioVendas.vue"
import UsuarioCompras from "../views/usuario/UsuarioCompras.vue"
import UsuarioEditar from "../views/usuario/UsuarioEditar.vue"



Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    name:"home",
    component: Home
  },
  {
    path:"/produto/:id",
    name:"produto",
    component: Produto,
    props: true
  },
  {
    path:"/login",
    name:"login",
    component: Login
  },
  {
    path:"/usuario",
    component: Usuario,
    children: [
      {
        path:"",
        name:"usuario",
        component:UsuarioProdutos
      },
      {
        path:"compras",
        name:"compras",
        component:UsuarioCompras
      },
      {
        path:"",
        name:"vendas",
        component:UsuarioVendas
      },
      {
        path:"",
        name:"usuario-editar",
        component:UsuarioEditar
      },
    ]
  },
  {
    path:"/registrar",
    name:"resgistrar",
    component: UsuarioCriar
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(){
    return window.scrollTo({top:0, behavior:"smooth"})
  }
})

export default router
