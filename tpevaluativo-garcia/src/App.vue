<template>
   <nav class="navbar navbar-expand-lg navbar-light bg-light-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Tienda</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/">Home</router-link> 
           <router-link  v-if="usuario?.email != null" class="nav-link" to="/catalogoadmin">Carga de producto</router-link> 
          <router-link  v-if="usuario?.email != null" class="nav-link" to="/catalogo">Catalogo</router-link> 
        </div>
        <div class="navbar-nav ms-auto">
          <h6 class="nav-link">{{usuario?.email}}</h6>
          <router-link v-if="usuario?.email == null" class="nav-link" to="/autenticacion">Iniciar sesión</router-link>
          <button @click="cerrar_sesion()" v-if="usuario?.email != null" class="btn btn-secondary btm-sm">Cerrar sesión</button>
        </div>
      </div>
    </div>
  </nav>
  <div class="container">
    <router-view />
  </div>
</template>
<script>
import {auth} from '@/utils/firebase.js'
import {onAuthStateChanged,signOut} from 'firebase/auth'
export default {
  data()
  {
    return{
      usuario:null
    }
  },
  methods:{
    usuario_logueado()
    {
      onAuthStateChanged(auth,(user)=>{
        this.usuario=user;
      })
    },
    cerrar_sesion()
    {
      try {
        signOut(auth)
      } catch (error) {
        alert('Algo sucedio!')
      }
      this.$router.push('/')
    },
    
  },
  mounted(){
    this.usuario_logueado()
   }
}
</script>
