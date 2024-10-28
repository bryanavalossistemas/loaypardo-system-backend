const { Sequelize } = require("sequelize");
const colors = require("colors");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    logging: false,
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false });
    console.log(colors.blue.bold("CONEXIÓN EXITOSA A LA BASE DE DATOS"));
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { sequelize, connectDB };
