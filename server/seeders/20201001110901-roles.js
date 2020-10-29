'use strict';
const bcrypt = require('bcrypt');  
module.exports = {
  up: async (queryInterface, Sequelize) => await queryInterface.bulkInsert('Roles',
  [{
    rolename: 'Administrador',
    active: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    rolename: 'Member',
    active: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {}),
  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Roles', null, {}),
};
