import sequelize from "../configuraciones/BaseDeDatos.js";
import DataTypes from "sequelize";

const Vendedor = sequelize.define(
  "Vendedor",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    dni: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    celular: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    usuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default Vendedor;
