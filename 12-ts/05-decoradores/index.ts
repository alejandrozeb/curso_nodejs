//descomentamos en el config los decoradores por que son experimenales

//decorador e}s una funcion que ejecuta una logica en una clase, en una propiedad o una funcion

function SelfDriving(constructorFunctions: Function){
    constructorFunctions.prototype.selfDriving= true;
}

function Wheels(numberOfWheels:number) {
    return function(constructor: Function){
        constructor.prototype.wheels=numberOfWheels;
    }        
}


@SelfDriving//añadiendo el decorador, el contructir se va a Car
@Wheels(4)
class Car {
    private brand: string;
    constructor(brand:string){
        this.brand=brand;
    }
}

const nissan: Car = new Car("Nissan");
console.log(nissan.selfDriving);    //no reconoce el decoraador
console.log("whells"+nissan.wheels);

//angular usa bastante decoradores
