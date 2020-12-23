"use strict";
//Intefaces
/* una interfaz se encarga de definir un comportamiento y propiedades que quien tenga esa interfaz debe tener ese comportamiento */
var dog = {
    name: "Snoopy",
    color: "white"
};
var MyComponent = /** @class */ (function () {
    function MyComponent() {
    }
    MyComponent.prototype.ngOnInit = function () {
        console.log();
    };
    return MyComponent;
}());
