import{initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyC1LV-eecOnE2Ojpgiy4YbJvpYog4OCu6A",
    authDomain: "acrespin-cet30.firebaseapp.com",
    projectId: "acrespin-cet30",
    storageBucket: "acrespin-cet30.appspot.com",
    messagingSenderId: "148502921844",
    appId: "1:148502921844:web:79174ccce416f479b38721",
    measurementId: "G-RWYXFB9NY1"
};
//estamos ejecutando la funcion descargada de Inicializar la conexion con FIREBASE
const app=initializeApp(firebaseConfig)
//conexion con nuestra BD FIRETORES
//lo guardo en una constante ya que me da la BD
// nuestro db lo vamos a exportar para que sea visible y accesible
const db= getFirestore()
//gestStorage necesita de la inicializacion de la aplicacion
const storage=getStorage(app)
//lo pongo en una constante porque me retoma una respuesta
const auth= getAuth()
export {db,storage,auth}