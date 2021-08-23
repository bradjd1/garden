'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Seeds",
      [
        {
          name: 'Pea',
          variety: "Litle Marvel",
          yrPurchased: '2021',
          price: 3.25,
          purch_from: 'Jung',
          catSeedId: 'P101',
          desc: 'bountiful harvest, wilt and disease resistant, one of sweetest peas',
          purch_again: 'yes, give it another try',
          result: "tasty but small harvest",
          createdAt: new Date(),
          updatedAt: new Date(),
          gardenId: 1,
        },
        {
          name: 'Lettuce',
          variety: "Black Seeded Simpson",
          yrPurchased: '2021',
          price: 2.27,
          purch_from: 'Jung',
          catSeedId: 'L100',
          desc: 'plant as soon as ground workable, bountiful harvest, great taste',
          purch_again: 'yes, give it another try',
          result: "good. survived late frost. grew well but bolted early",
          createdAt: new Date(),
          updatedAt: new Date(),
          gardenId: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Seeds', null, {});
  }
};
