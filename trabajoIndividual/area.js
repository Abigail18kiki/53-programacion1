export default class Area {
    base_s;
    base_i;
    area_h;
    constructor(baseSuperior,baseInferior,altura){
        this.base_s=baseSuperior;
        this.base_i=baseInferior;
        this.area_h=altura;

    }
    calcularAreaTrap( ) {
        const AT= (parseInt(this.base_s))+(parseInt(this.base_i))/2*(parseInt(this.area_h))
        return AT
    }
}