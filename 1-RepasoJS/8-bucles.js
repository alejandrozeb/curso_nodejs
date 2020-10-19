const fruits = ['apple','melon','lemon'];

for (let i = 0; i < fruits.length; i++) {
    const element = fruits[i];
    console.log(element);
}

//for of

for(const fruit of fruits){ //se crea un variable por posicion en un array
    console.log(fruit);
}

const people=[{name:"Marluan"},{name:"Ernesto"}]; //array de objetos
//for in
for (const person in people) {  //para recorrer objetos  
    console.log(person);    //los indices
    console.log(people[person]);    //el objeto completo
    console.log(people[person].name);    //el objeto completo
}


//while
let iterator =0;
while(iterator<people.length){
    console.log(people[iterator]);
    iterator++;
}

//do while
iterator=0;
do{
    console.log(people[iterator]);
    iterator++;
}while (iterator<people.length);    //la primera vez entra sin entrar en la condicion del while