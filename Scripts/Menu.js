
//Clases
class VehiculoBase{
    constructor(marca,modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
}
export class Vehiculo extends VehiculoBase {
    constructor(marca,modelo,anno, precio){
        super(marca,modelo);
        this.anno = anno;
        this.precio = precio;

    }

    elegirMarca(){
    let marcas =["toyota","audi","ferrari","bmw","porsche",]
    let corret = false;
    
    
    while(!correct){
        let select = prompt("Introduzca una de las marcas disponibles para agregar:")
        for (let i = 0; i < marcas.length; i++) {
            if (select == marcas[i]) {
                corret = true;
            }
            
        }

    }

    return select;
}

    
    
    mostrarInfo(){
        console.log(`marca: ${this.marca}, modelo: ${this.modelo},anno: ${this.anno}, precio: ${this.precio}`);
    };
};





//Datos Inicializados
let vehiculos = [];

vehiculos.push(new Vehiculo("audi","f67",1956,1000.90));
vehiculos.push(new Vehiculo("toyota","fs7",1943,500.89));
vehiculos.push(new Vehiculo("ferrari","fs7",1943,500.89));
vehiculos.push(new Vehiculo("bmw","fs7",1943,500.89));
vehiculos.push(new Vehiculo("porsche","fs7",1943,500.89));

//Menu
let menu = true
while(menu){
    console.log("Menu");
    console.log("Opcion 1: insertar Vehiculo");
    console.log("Opcion 2: buscar Vehiculo");
    console.log("Opcion 3: mostrar todos los vehiculos");

    let option = prompt("introduzca la opcion deseada:")
    switch(option){
        case "1":
            console.log("inserte los datos del vehiculo que va a agregar:");
            let marca = elegirMarca();
            let modelo =elegirModelo(marca)
            let anno = buscarModeloAnno(modelo)
            let precio = buscarModeloPrecio(modelo)
            vehiculos.push(new Vehiculo(marca,modelo,anno,precio));
            break;
            case "2":
                console.log("introduzca la marca del vehiculo que va a buscar:");
                break
                case "3":
                    console.log("mostrando todos los vehiculos:");
                    break
                    default:
                        console.log("Opcoin no valida, intentalo de nuevo:");


    }

    
}

 function elegirMarca(){
    const marcas =["toyota","audi","ferrari","bmw","porsche",]
    let corret = false;
    let select = "";
    alert("Introduzca una de las marcas disponibles para agregar")
    
    while(!corret){
        console.log(marcas);
        select = prompt("")
        for (let i = 0; i < marcas.length; i++) {
            if (select.toLowerCase() == marcas[i]) {
                corret = true;
            }
            
        }
        if (!corret) {alert("Entrada incorrecta, por favor intentelo de nuevo")}
        
    }

    return select;
}
 function elegirModelo(marca){
    let modelos = [];
    console.log(`ha elegido la marca ${marca}`);
    alert(`ha elegido la marca ${marca}`);
    
    
    if (marca == "audi") {
        modelos.push("tt","A1","Q2");
    }else if (marca == "toyota") {
        
    }else if (marca == "bmw") {
        
    }else if(marca == "ferrary"){

    }else if (marca == "porsche") {
        
    }

 }

 function buscarModeloAnno(modelo){
    modelos = ["","","","","",]
    for (let i = 0; i < modelos.length; i++) {
        const element = array[i];
        
    }
}
