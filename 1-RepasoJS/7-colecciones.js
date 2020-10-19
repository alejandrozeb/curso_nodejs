//arrays [] identificador, estructura que guarda datos de manera sequencial

//const fruits = new Array(); //se lo ve en librerias este tipo de declaracion de array

const fruits = ['apple','melon','mango', function(){console.log("Hola");}];   //0,1,2

console.log(fruits[3]());//para ejecutar la funcion, cuando no retornamos nada por defecto una funcion en js retorna un undefined

//set

const numbers = new Set(); //los set no permiten la repeticion de un elemento

numbers.add(5);
numbers.add(5);
numbers.add(5);
console.log(numbers);

//*map  admite un dicconario y no se repite

const students = new Map();

students.set("one","alejandro");    //tenemos un kkey y su value

console.log(students.get("one"));