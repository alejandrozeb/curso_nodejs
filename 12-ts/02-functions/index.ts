//functions
//funcion tipada
function sum(a: number,b: number): number {
    return a+b;
}
sum(1,2);
//
function mathOperation(callback: Function, a:number, b: number): number {
    return callback(a,b);
}
//podemos ver que datos debe recibir cada funcion
const result: number = mathOperation((a:number, b: number):number => a+b,5,5);

console.log(result);
