const { Sequelize } = require("sequelize");
const colors = require("colors");

const database = process.env.DB_NAME;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const dialect = process.env.DB_DIALECT;

const sequelize = new Sequelize(database, username, password, {
  host: host,
  port: port,
  dialect: dialect,
  logging: false,
});

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
