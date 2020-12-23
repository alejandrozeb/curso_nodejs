//types
//TS no da error cuando no especificamos el tipo
const framework1 = "Angular";
//pero no tiene mucho sentido, para dar un tipo usamos
let framework: string = "Angular";
//si tratamos de cambiar el valor
//framework = 10; //tenemos un error que no puede ser cambiada
//al asignar un valor debemos colocar el correspondiente o igual tenemos un error
const isProduction: boolean=true;
//lo mismo pasa con los tipo number
const PORT: number = 3000;
//arrays 
//ANY de cualquier tipo de dato
const styles = [1, TextTrackCue];
//si cambiamos a uno estricto con genericos
const styles2: Array<string> = ["./css/style.css"];


