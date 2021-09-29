import  Empleado  from "./empleados.js"
const mostrar_datos = () => {
    const nom= document.getElementById ("inp_nom").value;
    const ape= document.getElementById ("inp_ape").value;
    const instancia= new Empleado (nom,ape)
    instancia.mostrarDatosEmpleado()
}
const boton= document.getElementById("btn_guardar")
boton.addEventListener("click",mostrar_datos)