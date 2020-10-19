const booksDb=[
    {
        id:1,
        title:'Clean code',
        authorId:1
    },
    {
        id:2,
        title:'The pragmatic programmer',
        authorId:2
    },
    {
        id:1,
        title:'Web development with Node.js',
        authorId:3
    }
];

const authorDb=[
    {
        id:1,
        name:"Robert C. Martin"
    },
    {
        id:2,
        name:"Steve Forest"
    }
];

function getBooById(id,callback){
    const book = booksDb.find(book=>book.id===id);//GUARDA EL BOOK POR ID
    if(!book){
        const error= new Error();
        error.message="Book not found"
        //simpre pasamos un erroe como primer parametro
        return callback(error);
    }
    callback(null,book)
}

function getAuthorById(id,callback){
    const author = authorDb.find(author=>author.id===id);//GUARDA EL BOOK POR ID
    if(!author){
        const error= new Error();
        error.message="Author not found"
        //simpre pasamos un erroe como primer parametro
        return callback(error);
    }
    callback(null,author)
}

getBooById(2,(err,book)=>{
    if(err){
        return console.log(err.message);
    }
    //callbakc hell psa cuando ponemos hacia la derecha callbacks
    getAuthorById(book.authorId,(err,author)=>{
        if(err){
            return console.log(err.message);
        }

        console.log(`This book ${book.title} was written by ${author.name}`);
    })

    return console.log(book);
});
//como puedes ver el codigo no es muy legible y es el resultado de la anidacion de callbacks que puede ser dificil mantener, imaginate 10 anidacion de este tipo, ademas la complejidad va aumentando por estas razones no es recomendado

//podemos usar promesas 