'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Gardens",
      [
        {
          id: 1,
          seedId: 1,
          year: '2020',
          notes: 'need protection from rabbits, planted in Eastern quadrant',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          seedId: 2,
          year: '2021',
          notes: 'need protection from rabbits, planted in Eastern quadrant',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },


  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Gardens', null, {});
  }
};
