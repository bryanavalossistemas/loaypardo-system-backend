const { DataTypes } = require("sequelize");
const { sequelize } = require("@/config/db");

const Administrator = sequelize.define(
  "Administrator",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Administrator;
