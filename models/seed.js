'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seed extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Seed.belongsTo(models.Garden, { foreignKey: "gardenId" });
    }
  };
  Seed.init({
    // seedId: DataTypes.STRING,
    name: DataTypes.STRING,
    variety: DataTypes.STRING,
    yrPurchased: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    purch_from: DataTypes.STRING,
    catSeedId: DataTypes.STRING,
    desc: DataTypes.STRING,
    purch_again: DataTypes.STRING,
    result: DataTypes.STRING,
    gardenId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Seed',
  });
  return Seed;
};