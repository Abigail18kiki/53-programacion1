const calcular = ()=>{
    const d1= document.getElementById ("inp_d1").value;
    const d2= document.getElementById ("inp_d2").value;
    const select= document.getElementById ("slt_metodo").value;
    let resultado = null;
    if (select == 0) {
        resultado = d1/d2;
    } else {
        if (select == 1) {
            resultado = d1*d2;
        } else {
            resultado = d1* Math.pow (d2,2);
        }
    }
    document.getElementById ("h_resultado").textContent= resultado;
}
//primer paso, debemos obtener el boton
const boton= document.getElementById ("btn_calcular")
//segundo, es estar atentos al evento click
//cuando se haga un click, quiero ajecutar la funcion clacular
boton.addEventListener ("click",calcular)