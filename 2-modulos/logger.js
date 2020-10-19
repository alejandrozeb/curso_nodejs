//console.log("Logger");

/* let number = 0;
number++;
console.log("number: "+number); */

function greet(name){
    console.log('hola'+ name);
}

//module.exports = greet;
// estoy agregando al objeto exports greet, module igual es una objeto
module.exports={
    greet,
    number:10
};
//tambien podemos exportar todos los modulos en una clase
//tambien podemos exportar otra variable