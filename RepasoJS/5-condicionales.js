const age =45;  //no se pueden cambiar su valor los tipo const
const calificacion=83;
if(age >= 18){
    console.log("Es mayor de edad");
}else{
    console.log("Es menor de edad");
}

//anidacion

if(calificacion >=90){
    console.log("A");
}else if(calificacion >= 80 && calificacion < 90){
    console.log("B");
}else if(calificacion >= 70 && calificacion < 80){
    console.log("C");
}else{
    console.log("F");
}

//switch con js
operation = "add";
let n1=80;
let n2=60;
switch (operation) {
    case "add":
            console.log(n1+n2);
        break;
    case "subs":
            console.log(n1-n2);
    break;

    default:    console.log("operacion no valida");
        break;
}

