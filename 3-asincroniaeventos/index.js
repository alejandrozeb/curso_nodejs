const Emitter = require('./emitter');

const emitter = new Emitter();
emitter.on("save", () =>{//registrmos un evento
    console.log('On saved acitvated');  //se activo el evento
});                 
//podemos tener multiples eventos
emitter.on("save", () =>{//registrmos un evento
    console.log('On saved acitvated 2');  //se activo el evento
});

emitter.emit('save');   //se emite un evento

//nuestro se ha ejecutado