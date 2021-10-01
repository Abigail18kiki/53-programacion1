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
                <button onclick="eliminar_cliente('${element.id}')" class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i></button>
                <button onclick="llenar_formulario('${element.nombre}','${element.apellido}',${element.dni},'${element.id}')" class="btn btn-danger btn-sm"><i class="fa fa-edit"></i></button>   
                </td>
            </tr>
        `
        bolsita_tr.push(fila)
    });
    document.getElementById("tbody").innerHTML= bolsita_tr.join('')
}
//llamar o ejecutar a la funcion encargada de listar
listar_clientes();
function eliminar_cliente(id){
    db.collection("clientes").doc(id).delete()
    listar_clientes()
}
function llenar_formulario(nom,ape,dni,id){
    document.getElementById("inp_nom").value= nom
    document.getElementById("inp_ape").value= ape
    document.getElementById("inp_dni").value= dni
    document.getElementById("inp_id").value= id 
    document.getElementById("btn_guardar").style.display= 'none';
    document.getElementById("btn_actualizar").style.display= 'block';  
}
function actualizar_cliente() {
    const nom= document.getElementById("inp_nom").value
    const ape= document.getElementById("inp_ape").value
    const dni= document.getElementById("inp_dni").value
    const id= document.getElementById("inp_id").value
    const clienteActualizado={
        apellido:ape,
        dni:dni,
        nombre:nom
    }
    db.collection("clientes").doc(id).update(clienteActualizado)
    listar_clientes()
    vaciar()
    document.getElementById("btn_guardar").style.display= 'block';
    document.getElementById("btn_actualizar").style.display= 'none';  
}