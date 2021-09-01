import Bhaskara from "./bhaskara.js";
const mostrar = () => {
    const a= document.getElementById("inp_a").value;
    const b= document.getElementById("inp_b").value;
    const c= document.getElementById("inp_c").value;
    //se crea la instancia
    //se envia los datos al constructor
    //se ejecuta el constructor
    const bhaskara= new Bhaskara(a,b,c)
    /**
     * Haciendo uso de la instancia, accedo al metodo calcular_raiz. Para poder ejecutarlo
     */
    const raiz1= bhaskara.calcular_raiz1()
    const raiz2= bhaskara.calcular_raiz2()
    document.getElementById("calcular").value= raiz1
    document.getElementById("calcular_1").value= raiz2

}
const boton= document.getElementById("btn_calcular");
boton.addEventListener("click", mostrar);