//clases
class Pizza{
    //podemos modificar los accesos
    public tomate: boolean=false;
    public chesse: string="";
    public bacon: boolean= false;
    public otherIngredients: Array<string>= [""];
    //metodos
    setChesse(chesse:string): Pizza{
        this.chesse=chesse;
        return this;
    }

    setBacon(): Pizza{
        this.bacon=true;
        return this;
    }

    setOtherIngredients(ingredients: string[]): Pizza{
        this.otherIngredients = ingredients;
        return this;
    }

    build(){
        return this;
    }
}

const pepperoniPizza: Pizza = new Pizza();
pepperoniPizza.setBacon().setChesse("mozzarella").setOtherIngredients(["tomato"]).build();

console.log(pepperoniPizza);


//builder patron de diseño