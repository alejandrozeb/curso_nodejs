function greet(name){   //palabra reservada function podemos recibir parametros o no
    console.log('hi function'+name);
}

console.log(greet('alejandro'));   //llamando la funcion, retornara un undefined por que es el valor por defecto cuando no existe un return
greet('alejandro');    //no se muestra el undefined 


//cantidad de parametros que queramos

function calc(n1,n2) {
    console.log(n1+n2);
}

console.log(calc(2,3));

//podemos pasar una fucnion a otra

function logGreeting(fn) {
    fn('alejandro');   //ejecutamos la funcion
}
logGreeting(greet);//solo pasamos la expresion

const greetMe= function(name) {
    console.log(`Hola ${name} mucho gusto`);
}

greetMe('alejandro');

//funciones flecha
 const greetMe2 = name => console.log(`hola con arrow ${name}`);

 greetMe2('alejandro');