const { DataTypes } = require("sequelize");
const { sequelize } = require("@/config/db");

const DetalleCompra = sequelize.define(
  "DetalleCompra",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    precioCosto: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    productoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    compraId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default DetalleCompra;
