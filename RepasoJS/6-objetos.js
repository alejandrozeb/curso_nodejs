//primera forma de crear objetos
//tipo json representados por un key y un value que se pude guardar en una variable
{
    //"name":"Marluan"
}

//objeto en una variable
//podemos almancenar variables de cualquier tipo y ademas se separan po una coma (,)
let prop="sdsd sd";
const person = {
    [prop]:'mj',    //de tipo dinamico
    name:'Alejandro',
    lastname: 'espiritusanto',
    isStudent: true,    //boolean
    getFullName(){      //funcion
        return this.name + " "+ this.lastname;   //this tiene la info del objeto
    }
};
//podemos acceder de dos formas
//con un punto
console.log(person.name);
//o con brackets
console.log(person["name"]);
console.log(person[prop]);  //ya tenemos un atributo dinamico

console.log(person.getFullName());

//podemos usar una calse como plantilla

class Person{
    constructor(name){
        this.name=name;
    }
    getName(){
        return this.name;
    }
}

const person1= new Person('alejandro');

let name = person1.getName();
console.log(name);