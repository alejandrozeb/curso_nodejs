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

async function getBooById(id){
    const book = booksDb.find(book=>book.id===id);
    if(!book){
        const error= new Error();
        error.message="Book not found";
        throw error;
    }
    return book;
}
async function getAuthorById(id){
    const author = authorDb.find(author=>author.id===id);//
     if(!author){
        const error= new Error();
         error.message="Author not found";
        throw error;
    }
    return author;
}

async function main(){
    try{
        const book= await getBooById(1);    //almacena en book
        const author= await getAuthorById(book.authorId);
        console.log(`This book ${book.title} was written by ${author.name}`);
    }catch(ex){
        console.log(ex.message);
    }
}

main();


//es muccho mas entendible que solo callback o promesas