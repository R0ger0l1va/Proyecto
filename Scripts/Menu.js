
//Clases
class VehiculoBase{
    constructor(marca,modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
}
 class Vehiculo extends VehiculoBase {
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

vehiculos.push(new Vehiculo("audi","tt",1956,1888.90));
vehiculos.push(new Vehiculo("toyota","Supra",1923,1999.50));
vehiculos.push(new Vehiculo("ferrari","enzo",1913,1500.89));
vehiculos.push(new Vehiculo("bmw","M5",1963,4500.89));
vehiculos.push(new Vehiculo("porsche","Gt",1903,500.89));

//Menu
let menu = true

    console.log("Menu");
    console.log("Opcion 1: insertar Vehiculo");
    console.log("Opcion 2: buscar Vehiculo");
    console.log("Opcion 3: mostrar todos los vehiculos");
    console.log("Opcion 4: salir");


    
    function manejarOpciones(option) {
        switch(option){
            case "1":
                console.log("inserte los datos del vehiculo que va a agregar:");
                alert("Introduzca una de las marcas disponibles para agregar")
                let marca = elegirMarca();
                let modelo =elegirModelo(marca);
                alert("Introduzca el año de creacion:");
                let anno = ponerAnno();
                alert("Introduzca el precio del vehiculo: ");
                let precio = ponerPrecio();
                vehiculos.push(new Vehiculo(marca,modelo,anno,precio));
                alert(`Se añadio un nuevo vehiculo`);
                break;
                case "2":
                    buscarVehiculo();
                    break
                    case "3":
                        console.log("mostrando todos los vehiculos:");
                        mostrarVehiculos();
                        break
                        case "4":
                            document.body.innerHTML = ''; // Esto limpiará el contenido de la página
                            console.log("Saliendo del menú.");
                            break
                            default:
                            console.log("Opcoin no valida, intentalo de nuevo:");
    
    
    
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('opcion1').addEventListener('click', function() { manejarOpciones("1"); });
        document.getElementById('opcion2').addEventListener('click', function() { manejarOpciones("2"); });
        document.getElementById('opcion3').addEventListener('click', function() { manejarOpciones("3"); });
        document.getElementById('opcion4').addEventListener('click', function() { manejarOpciones("4"); });
      });

    

//Declaracion de Funciones

 function elegirMarca(){
    const marcas =["toyota","Audi","ferrari","bmw","porsche",]
    let corret = false;
    let select = "";
    alert("Inserte una de las marcas disponibles");
    while(!corret){
        console.log(marcas);
        select = prompt("")
        for (let i = 0; i < marcas.length; i++) {
            if (select.toLowerCase() == marcas[i].toLowerCase()) {
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
    
    switch (marca) {
        case "audi":
            modelos.push("tt","A1","Q2");
            break;
            case "ferrari":
                modelos.push("Enzo","j50","f8 Spider");
            break;
            case "toyota":
                modelos.push("Supra","Corolla","Prius");
            break;
            case "bmw":
                modelos.push("M3","M4","M5");
            break;
            case "porsche":
                modelos.push("911 Carrera","Cayman","911 Gt Spyder");
            break;
    
        default:
            break;
    }
   
    alert("De acuerdo a la marca elegida, seleccione el modelo a añadir")
    let select = "";
    let correct = false;
    while(!correct){ 
        select = prompt("")
        for (let i = 0; i < modelos.length; i++) {
            if (select.toLowerCase() == modelos[i].toLowerCase())
            correct = true
        }
        if (!correct) {
            alert("entrada incorrecta, introduzcala de nuevo");
        }
    }
        

        return select;
 }
 function ponerPrecio(){
    let flag = false;
    let select = 0;
    while(!flag){
        select = prompt("");
        if(select>0 && select<10000) {flag = true;}
    }
    if (!flag) {
        alert("el precio no puede ser nulo ni muy alto, introduzca el valor de nuevo")
    }
    return select;
 }

 function ponerAnno(){
    let flag = false;
    let select = 0;
    while(!flag){
        select = prompt("");
        if(select>1800 && select<2025) {flag = true;}
    }
    if (!flag) {
        alert("el anno de creacion del auto debe ser entre los 1800 y 2024")
    }
    return select;
 }

 function buscarVehiculo() {
    alert("Introduzca la marca del vehiculo a buscar")
    let marca = elegirMarca();
    let resultados = vehiculos.filter(v => v.marca.toLowerCase() === marca.toLowerCase());
    if (resultados.length > 0) {
        alert('Vehículos encontrados:\n' + resultados.map(v => v.mostrarInfo()).join('\n'));
    } else {
        alert('No se encontraron vehículos de esa marca.');
    
    }
     }
  function mostrarVehiculos() {
    if (vehiculos.length > 0) {
        alert('Todos los vehículos:\n' + vehiculos.map(v => v.mostrarInfo()).join('\n'));
    } else {
        alert('No hay vehículos en el inventario.');
    }
}

