const { DataTypes } = require("sequelize");
const { sequelize } = require("@/config/db");

const Administrador = sequelize.define(
  "Administrador",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    usuarioId: {
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

module.exports = Administrador;
