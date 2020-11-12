'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert("Contacts",[
      {
        firstname: "Alejandro",
        lastname: "Espiritusanto",
        phone: "000000000000",
        email: "alejandro@correo.com",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
      {
        firstname: "Erick",
        lastname: "Jimenes",
        phone: "000000000001",
        email: "Erick@correo.com",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }
      
  ])
  //inserta a la base de datos
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
