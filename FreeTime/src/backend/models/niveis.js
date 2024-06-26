'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Niveis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Niveis.belongsTo(models.ContaUsuario);
    }
  }
  Niveis.init({
    usuarioId: DataTypes.INTEGER,
    nivelAtual: DataTypes.INTEGER,
    quantidadeXP: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Niveis',
  });
  return Niveis;
};