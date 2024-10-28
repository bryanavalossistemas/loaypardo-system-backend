const { DataTypes } = require("sequelize");
const { sequelize } = require("@/config/db");

const Rol = sequelize.define(
  "Rol",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Rol;
