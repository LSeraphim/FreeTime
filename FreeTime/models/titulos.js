'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Titulos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Titulos.init({
    nomeTitulo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Titulos',
  });
  return Titulos;
};