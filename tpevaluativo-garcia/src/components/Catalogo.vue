<template>
    <div class="row">
        <div v-for="catalogo of lista_catalogo" v-bind:key="catalogo.id" class="col-3 me-1">
            <div class="card">
               <img :src="catalogo.url" class="card-img-top">
               <div class="card-body">
                    <h5 class="card-title">{{catalogo.descripcion}}</h5>
                    <p class="card-text">{{catalogo.slt_estado}}</p>
                    <p class="card-text">
                        <template v-if="catalogo.descuento>0">
                            {{catalogo.precio*catalogo.descuento/100}}
                        </template>
                        <template else>
                            {{catalogo.precio}}
                        </template>
                        </p>
                    <a href="#" class="btn btn-primary">Comprar</a>
               </div>
            </div>
        </div>
    </div>
</template>
<script>
import {db} from '../utils/firebase.js'
import {collection, onSnapshot} from 'firebase/firestore'
export default {
    name:'Catalogo',
    data(){
        return{
            lista_catalogo:[]
        }
    },
    methods:{
        obtener_catalogo()
       {
           onSnapshot( collection(db,'catalogo'),(snapshot)=>{
               this.lista_catalogo=[]
               snapshot.docs.map((doc)=>{
                   this.lista_catalogo.push({...doc.data(),id:doc.id})
               });
           })
       }
    },
    mounted()
    {
        this.obtener_catalogo()
    }
}
</script>