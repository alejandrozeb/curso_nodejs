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

    
*/