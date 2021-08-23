'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Seeds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // seedId: {
      //   type: Sequelize.STRING,
      //   allowNull: false,
      // },
      name: {
        type: Sequelize.STRING
      },
      variety: {
        type: Sequelize.STRING
      },
      yrPurchased: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL(5,2)
      },
      purch_from: {
        type: Sequelize.STRING
      },
      catSeedId: {
        type: Sequelize.STRING
      },
      desc: {
        type: Sequelize.STRING
      },
      purch_again: {
        type: Sequelize.STRING
      },
      result: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Seeds');
  }
};