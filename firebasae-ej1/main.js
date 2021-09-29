//me comunico con el servicio de firestore
const db= firebase.firestore()
const vaciar = () =>{
    document.getElementById ("inp_nom").value = ''
    document.getElementById("inp_ape").value = ''
    document.getElementById("inp_dni").value = ''
}
const guardar_cliente= () => {
    const unCliente ={
        nombre: document.getElementById("inp_nom").value,
        apellido: document.getElementById("inp_ape").value,
        dni: document.getElementById("inp_dni").value
    }
    db.collection('clientes').doc().set(unCliente)
    //reset del formulario
    vaciar()
}
const boton= document.getElementById("btn_guardar")
boton.addEventListener("click",guardar_cliente)
const listar_clientes = async () => {
    const lista= await db.collection("clientes").get()
    let lc =[]
    let lista_definitiva= lista.docs.map ((doc)=>{
        lc= doc.data()
        lc.id= doc.id
        return lc;
    })
    let bolsita_tr =[]
    lista_definitiva.forEach(element => {
        let fila= `
            <tr>
                <td>${element.nombre}</td>
                <td>${element.apellido}</td>
                <td>${element.dni}</td>
                <td>
                <button class="btn btn-danger btn-sm">x</td>   
                </td>
            </tr>
        `
        bolsita_tr.push(fila)
    });
    document.getElementById("tbody").innerHTML= bolsita_tr.join('')
}
//llamar o ejecutar a la funcion encargada de listar
listar_clientes ();