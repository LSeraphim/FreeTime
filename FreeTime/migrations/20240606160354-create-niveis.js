'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Niveis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      usuarioId: {
        type: Sequelize.INTEGER,
        references:{
          model:'contaUsuarios',
          key: 'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      nivelAtual: {
        type: Sequelize.INTEGER
      },
      quantidadeXP: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Niveis');
  }
};