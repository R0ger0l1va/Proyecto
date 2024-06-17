export class Vehiculo extends VehiculoBase {
    constructor(marca,modelo,anno, precio){
        super(marca,modelo);
        this.anno = anno;
        this.precio = precio;

    }

    mostrarInfo(){
        console.log(`marca: ${this.marca}, modelo: ${this.modelo},anno: ${this.anno}, precio: ${this.precio}`);
    };
};