'use strict';
const bcrypt = require('bcrypt');  
module.exports = {
  up: async (queryInterface, Sequelize) => await queryInterface.bulkInsert('Roles',
  [{
    rolename: 'Admin',
    description: 'Administrador del sistema',
    active: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    rolename: 'Member Basic',
    description: 'Miembro básico del sistema',
    active: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {}),
  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Roles', null, {}),
};
