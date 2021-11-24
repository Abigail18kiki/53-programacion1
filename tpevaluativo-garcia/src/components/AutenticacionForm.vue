<template>
    <div class="row justify-content-md-center">
        <div class="col-md-auto">
            <div class="mb-3 text-center">
                <h4>Ingreso al sistema</h4>
            </div>
            <div class="mb-3">
                <label class="form-label">Correo electrónico</label>
                <input v-model="correo" class="form-control form-control-sm" type="email">
            </div>
            <div class="mb-3">
                <label class="form-label">Contraseña</label>
                <input v-model="password" class="form-control form-control-sm" type="password">
            </div>
            <button @click="registrar_usuario()" class="btn btn-success">Registrar</button>
            <button @click="iniciar_sesion()" class="btn btn-primary">Iniciar sesión</button>
        </div>
    </div>
</template>
<script>
import {auth} from '@/utils/firebase.js'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
export default { 
    name:'AutenticacionForm',
    data(){
        return{
            correo:'',
            password:''
        }
    },
    methods:{
        vaciar()
        {
            this.correo='',
            this.password=''
        },
        async registrar_usuario()
        {
            try {
                await createUserWithEmailAndPassword(auth,this.correo,this.password)
                this.vaciar()
            } catch (error) {
                alert('Error al crear usuario')
            }
        },
        async iniciar_sesion()
        {
            try {
            await signInWithEmailAndPassword(auth,this.correo,this.password)
             alert('Se inicio exitosamente la sesión!') 
             this.$router.push('taller')
            } catch (error) {
                alert('Algo sucedio!')
            }
        }
    }
}
</script>