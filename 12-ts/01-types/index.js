"use strict";
//types
//TS no da error cuando no especificamos el tipo
var framework1 = "Angular";
//pero no tiene mucho sentido, para dar un tipo usamos
var framework = "Angular";
//si tratamos de cambiar el valor
//framework = 10; //tenemos un error que no puede ser cambiada
//al asignar un valor debemos colocar el correspondiente o igual tenemos un error
var isProduction = true;
//lo mismo pasa con los tipo number
var PORT = 3000;
//arrays 
//ANY de cualquier tipo de dato
var styles = [1, "solo texto"];
//si cambiamos a uno estricto con genericos
var styles2 = ["./css/style.css"];
//funciones
var sayHello = function (name) { return "Hello " + name; };
var value = sayHello("alejandro");
console.log(value);
//ts viene con un transpilador que genera el js
