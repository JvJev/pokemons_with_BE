const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('pokemons_database', 'postgres', 'a', {
  host: 'localhost',
  dialect: 'postgres',
});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to PostgreSQL successful!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

testConnection();

module.exports = sequelize;

sequelize.sync({ alter: true }) // or { force: true } to drop and recreate the tables
  .then(() => {
    console.log('All models were synchronized successfully.');
  })
  .catch((error) => {
    console.error('Error synchronizing models:', error);
  });
