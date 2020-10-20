//similaremos el emisor de eventos
//con una funcion de primer orden
function Emitter(){
    this.events = {};
}

Emitter.prototype.on = function(type,listener ){
    this.events[type] = this.events[type]   || [];  //añadimos una propiedad al evento en caso que no se añade un array vacio
    this.events[type].push(listener);   //agragamos el listener
};
//lo eventos siemrpe se invocan con on
//el argumento type es el tipo de evento, unsaved..
//el argumento listener es quien escucha cuando ocurre el evento

//creamos el emiteer del evento por que hasta ahora solo lo registramos

Emitter.prototype.emit=function(type){
    if(this.events[type]){//verificamos si existe
        this.events[type].forEach((listener) => {
            listener()
        });
    }
}

//type es el tipo de evento
//este es un modulo llamado emiter
module.exports = Emitter;