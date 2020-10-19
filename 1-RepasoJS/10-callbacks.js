const booksDb=[
    {
        id:1,
        title:'Clean code'
    },
    {
        id:2,
        title:'The pragmatic programmer'
    },
    {
        id:1,
        title:'Web development with Node.js'
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

getBooById(2,(err,book)=>{
    if(err){
        return console.log(err.message);
    }

    return console.log(book);
});


//podemos usar promesas 