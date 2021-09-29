const solicitar = async () => {
    
    //por defecto fetch realiza una solicitud a traves del metodo GET
    const lista= await fetch("https://jsonplaceholder.typicode.com/users")
    const usuarios= await lista.json()
    usuarios.forEach(element => {
        console.log (`
        usuario: ${element.username}
        correo: ${element.email} 
    `)
    });
}
const boton= document.getElementById ("btn_solicitar")
boton.addEventListener("click",solicitar)