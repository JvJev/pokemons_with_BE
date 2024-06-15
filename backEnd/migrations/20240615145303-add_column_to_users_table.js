'use strict';

/** @type {import('sequelize').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Example: Creating a new table 'pokemons'
    await queryInterface.createTable('pokemons', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      height: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      weight: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      abilities: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      types: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      stats: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
      },
    });

    // Example: Adding an index on 'name' column
    await queryInterface.addIndex('pokemons', ['name']);

    // You can add more commands here as needed
  },

  async down(queryInterface, Sequelize) {
    // Example: Dropping the 'pokemons' table
    await queryInterface.dropTable('pokemons');

    // You can add more reverting commands here as needed
  },
};
