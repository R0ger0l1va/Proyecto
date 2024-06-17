class VehiculoBase  {
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }   

    elegirMarca(){
        let marcas =["toyota","audi","ferrari","bmw","porsche",]
        let corret = false;
        
        
        while(!correct){
            let select = prompt("Introduzca una de las marcas disponibles para agregar:")
            console.log(marcas)
            for (let i = 0; i < marcas.length; i++) {
                if (select == marcas[i]) {
                    corret = true;
                }
                
            }

        }
    }
};