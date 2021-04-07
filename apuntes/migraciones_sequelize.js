/* migraciones con sequelize

    npm install --save-dev sequelize-cli

    instalamos sequelize en el poryecto

    npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

    generamos un modelo con su migrate y seeder ademas se agrega un config para esto

    npx sequelize-cli db:create

    crea la bd 

    npx sequelize-cli db:migrate

    crea la migracion

    npx sequelize-cli db:migrate:undo

    revierte la ultima migracion

    para editar u añadir otro migrate con los atributos de una tabla modificada
    
    npx sequelize-cli migration:create --name primera

    creamos un archivo de migracion nueva

    Editamos l archivo con las tablas y campos necesarios

    npx sequelize-cli db:migrate

    migra la ultima migracion creada
    
    flujo
    creamos la bd
    creamos la migracion y modelo de una entidad
    editamos la asociaciones en el migrate y en el modelo
    ejecutamos la migracion    
*/