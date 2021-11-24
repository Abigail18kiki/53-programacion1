<template>  
    <div class="row">
        <div class="col-4">
            <div class="mb-3">
                <p>
                  <label class="form-label">Descripcion</label>
                  <input v-model="descripcion" class="form-control form-control-sm" type="text" placeholder="Ingrese descripcion">
               </p>
            </div>
            <div class="mb-3">
                <p>
                  <label class="form-label">Precio</label>
                  <input  v-model="precio" class="form-control form-control-sm" type="number" placeholder="Ingrese precio">
               </p>
            </div>
            <div class="mb-3">
                <p>
                  <label class="form-label">Porcentaje de descuento</label>
                  <input v-model="descuento" class="form-control form-control-sm" type="number" placeholder="Ingrese el porcentaje de descuento">
               </p>
            </div>
            <div class="mb-3">
                <p>
                  <label class="form-label">Categoria</label>
                  <input v-model="categoria" class="form-control form-control-sm" type="text" placeholder="Ingrese la categoria">
               </p>
            </div>
             <div class="mb-3">
        
                  <label class="form-label">Estado</label>
                  <select v-model="slt_estado" class="form-select">
                        <option value="-1">Seleccione un estado</option>
                        <option value="0">Activo</option>
                        <option value="1">Inactivo</option>
                  </select>
    
            </div>
            <div class="mb-3">
                <p>
                  <label class="form-label">Stock</label>
                  <input v-model="stock" class="form-control form-control-sm" type="number" placeholder="Ingrese stock">
               </p>
            </div>
            <div class="mb-3">
                <input id="inp_imagen" class="form-file" type="file">
            </div>
            <button v-if="estado==0"  @click="guardar_catalogo()" class="btn btn-success">Guardar</button>
            <button v-if="estado==1" @click="actualizar_catalogo()" class="btn btn-primary ms-2">Actualizar</button>
        </div>
        <div class="col-8">
        <table class="table">
            <thead>
                <tr>
                    <th>IMG</th>
                    <th>Descripcion</th>
                    <th>Precio</th>
                    <th>%Descuento</th>
                    <th>Categoria</th>
                    <th>Estado</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="catalogo of lista_catalogo" v-bind:key="catalogo.id">
                    <td>
                        <img style="width:4rem" :src="catalogo.url" alt="">
                    </td>
                    <td>{{catalogo.descripcion}}</td>
                    <td>{{catalogo.precio}}</td>
                    <td>{{catalogo.descuento}}</td>
                    <td>{{catalogo.categoria}}</td>
                    <td>{{catalogo.slt_estado}}</td>
                    <td>
                        <button @click="eliminar_catalogo(catalogo.id)" class="btn btn-danger btn-sm">x</button>
                        <button @click="editar_catalogo(catalogo)" class="btn btn-primary btn-sm ms-1">Edit</button>
                    </td>
                </tr> 
            </tbody>
        </table>
    </div>
    </div>

</template>
<script>
import {db,storage} from '../utils/firebase.js'
import {addDoc, collection, onSnapshot, deleteDoc, doc, updateDoc} from 'firebase/firestore'
import {uploadBytes,ref,getDownloadURL} from 'firebase/storage'
export default {
    name:'CatalogoAdminForm',
    data(){
        return{
            descripcion:'',
            precio:null,
            descuento:null,
            categoria:'',
            lista_catalogo:[],
            catalogo:'',
            slt_estado:null,
            stock:null,
            estado:0,
            id:null,
            url:null
        }
    },
    methods:{
        async subir_imagen()
        {
            const file=document.getElementById("inp_imagen").files[0]       
            const referencia=ref(storage,'catalogo/'+file.name)
            await uploadBytes(referencia,file).then(()=>{
                alert('operacion existosa!')
            })
            this.url= await getDownloadURL(referencia)
        },
        async guardar_catalogo()
       {
           await this.subir_imagen()
           const objeto= {
               descripcion:this.descripcion,
               precio:this.precio,
               descuento:this.descuento,
               categoria:this.categoria,
               slt_estado:this.slt_estado,
               stock:this.stock,
               url: this.url
           }
           const coleccion= collection(db,'catalogo')
           addDoc(coleccion,objeto)
           this.descripcion='';
           this.precio=null;
           this.descuento=null;
           this.categoria='';
           this.slt_estado=null;
           this.stock=null;
       },
       obtener_catalogo()
       {
           onSnapshot( collection(db,'catalogo'),(snapshot)=>{
               this.lista_catalogo=[]
               snapshot.docs.map((doc)=>{
                   this.lista_catalogo.push({...doc.data(),id:doc.id})
               });
           })
       },
       eliminar_catalogo(id)
       {
           deleteDoc(doc(db,'catalogo',id))
       },
       editar_catalogo(catalogo)
       {
           this.descripcion=catalogo.descripcion;
           this.precio=catalogo.precio;
           this.descuento=catalogo.descuento;
           this.categoria=catalogo.categoria;
           this.slt_estado=catalogo.slt_estado;
           this.stock=catalogo.stock;
           this.id= catalogo.id;
           this.estado=1;
       },
       actualizar_catalogo()
       {
           const catalogoActualizado= {
              descripcion:this.descripcion,
              precio:this.precio,
              descuento:this.descuento,
              categoria:this.categoria,
              slt_estado:this.slt_estado,
              stock:this.stock
           }
           updateDoc(doc(db,'catalogo',this.id),catalogoActualizado)
           this.estado=0;
       }
    },
    mounted()
    {
        this.obtener_catalogo()
    }
       
}
</script>