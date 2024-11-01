const { DataTypes } = require("sequelize");
const { sequelize } = require("@/config/db");

const ClienteNatural = sequelize.define(
  "ClienteNatural",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    dni: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    clienteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = ClienteNatural;
