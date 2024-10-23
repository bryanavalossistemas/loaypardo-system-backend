const { DataTypes } = require("sequelize");
const { sequelize } = require("@/config/db");

const Cliente = sequelize.define(
  "Cliente",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    celular: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ruc: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default Cliente;
