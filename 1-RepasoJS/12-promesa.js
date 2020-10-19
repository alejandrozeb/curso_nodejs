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

function getBooById(id){
    return new Promise((resolve,reject)=>{
        const book = booksDb.find(book=>book.id===id);
        if(!book){
        const error= new Error();
        error.message="Book not found"
        reject(error);
        }
        resolve(book);
    });
    
    
}

function getAuthorById(id){
    return new Promise((resolve,reject)=>{
        const author = authorDb.find(author=>author.id===id);//
        if(!author){
            const error= new Error();
            error.message="Author not found";
            reject(error);
        }
        resolve(author);
    });
}

getBooById(1).then(book =>{
    console.log(book);
    return getAuthorById(book.id);  //retornamos promesas
})
.then(author =>{
    console.log(author);    //mosramos el autor
})
.catch(error => {
    console.log(error.message);
});