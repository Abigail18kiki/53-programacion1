const calcular = () => {
    const co = document.getElementById ("inp_co").value;
    const ca = document.getElementById ("inp_ca").value;
    const resultado = co*ca;
    document.getElementById ("inp_calcular").value= resultado; 

}
const boton = document.getElementById ("btn_calcular");
boton.addEventListener("click", calcular);