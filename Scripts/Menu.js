//Imports
import { VehiculoBase } from "./VehiculoBase";
import { Vehiculo } from "./Vehiculo";


//Datos Inicializados
let vehiculos = [];

vehiculos.push(new Vehiculo("audi","f67",1956,1000.90));
vehiculos.push(new Vehiculo("toyota","fs7",1943,500.89));
vehiculos.push(new Vehiculo("ferrari","fs7",1943,500.89));
vehiculos.push(new Vehiculo("bmw","fs7",1943,500.89));
vehiculos.push(new Vehiculo("porsche","fs7",1943,500.89));

//Menu
let menu = true

function buscarModeloAnno(modelo){
    modelos = ["","","","","",]
    for (let i = 0; i < modelos.length; i++) {
        const element = array[i];
        
    }
}

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
            let modelo =buscarMarca(marca)
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