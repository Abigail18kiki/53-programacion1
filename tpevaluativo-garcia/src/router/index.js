import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import {getAuth} from 'firebase/auth'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path:'/catalogoadmin',
    name:'CatalogoAdmin',
    component:()=> import('../views/CatalogoAdmin.vue'),
    meta: {requiresAuth: true}
  },
  {
    path:'/catalogo',
    name:'CatalogoPublic',
    component:()=> import('../views/CatalogoPublic.vue'),
    meta: {requiresAuth: true}
  },
  {
    path:'/autenticacion',
    name:'Autenticacion', 
    component: ()=>import('../views/Autenticacion.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    const auth = getAuth();
    const usuario = auth.currentUser;
    console.log ('usuario desde router', usuario)
    if(!usuario){
      next({path: '/'})
    }else{
      //si no pasa
      next()
    }
  } else {
    next()
  }
})

export default router
