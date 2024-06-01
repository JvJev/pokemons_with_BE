const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Pokemon = sequelize.define('Pokemon', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  height: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  weight: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  abilities: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  types: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stats: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'pokemons_table',
  timestamps: false,
});

module.exports = Pokemon;
