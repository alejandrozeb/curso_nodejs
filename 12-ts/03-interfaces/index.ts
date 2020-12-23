//Intefaces
/* una interfaz se encarga de definir un comportamiento y propiedades que quien tenga esa interfaz debe tener ese comportamiento */

interface IAnimal {
    name: string;
    color: string;
}

const dog: IAnimal={
    name: "Snoopy",
    color: "white"
};

//las interfaces tambien nos obliga a definir metodos

interface OnInit{
    ngOnInit(): void;
}

class MyComponent implements OnInit{
    ngOnInit(): void {
        console.log();
    }
}