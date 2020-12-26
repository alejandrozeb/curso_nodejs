export interface Technology{
    //va a tener la misma estructura de nuestros datos en el backend
    _id:string;
    name:string;
    description:string;
    logo:string;
    tags:string[];
    createdAt: Date;
    updatedAt: Date;
}