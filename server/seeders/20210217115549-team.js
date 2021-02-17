'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) =>
    await queryInterface.bulkInsert(
      'Teams',
      [
        {
          firstname: 'Manuel',
          lastname: 'Martinez',
          title: 'Es buen estudiante',
          description: 'Mercado libre',
          photo: 'Sr desarrollador full stack',
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: new Date()
        }
      ],
      {}
    ),
  down: async (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Teams', null, {})
}
