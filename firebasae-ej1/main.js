//me comunico con el servicio de firestore
const db= firebase.firestore()
const guardar_cliente= () => {
    const unCliente ={
        nombre:'Juan',
        apellido:'Perez',
        dni:37589632
    }
    db.collection('clientes').doc().set(unCliente)
}
const boton= document.getElementById("btn_guardar")
boton.addEventListener("click",guardar_cliente)