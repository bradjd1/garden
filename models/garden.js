'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Garden extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Garden.init({
    seedId: DataTypes.STRING,
    year: DataTypes.STRING,
    notes: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Garden',
  });
  return Garden;
};