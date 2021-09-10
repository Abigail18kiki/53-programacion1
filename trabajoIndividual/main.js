import Area from "./area.js";
const mostrar = () => {
    const baseSuperior= document.getElementById("inp_bs").value;
    const baseInferior= document.getElementById("inp_bi").value;
    const altura= document.getElementById("inp_alt").value;
    const at= new Area(baseSuperior,baseInferior,altura);
    const resultado= at.calcularAreaTrap()
    document.getElementById("calcular").value= resultado

}
const boton= document.getElementById("btn_calcular");
boton.addEventListener("click", mostrar);