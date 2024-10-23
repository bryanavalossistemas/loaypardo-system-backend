const { DataTypes } = require("sequelize");
const { sequelize } = require("@/config/db");

const DetalleVenta = sequelize.define(
  "DetalleVenta",
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
    precioVenta: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    ventaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default DetalleVenta;
