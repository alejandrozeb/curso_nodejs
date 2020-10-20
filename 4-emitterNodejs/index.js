const {EventEmitter} = require("events");//importamoe el emitter de node antivo
const {SAVE} = require("./event-names");
const emitter = new EventEmitter();
emitter.on(SAVE, () =>{//esto no es una buena practica porque si en algun momento tenemos que cambiarlo vamos a tener qur ir metodo por metodo cambiando el nombre, entonces cambiamos el nombre "save" por un archivo que va a tener una variable con esta equivalencia y lo importamos
    console.log('On saved acitvated');  
});                 
//verificamos que tennemos el mismo resultado qe con nuestra clase Emitter
emitter.on(SAVE, () =>{
    console.log('On saved acitvated 2');  
});

emitter.emit(SAVE);   
//asi solo cambiamos el archivo
