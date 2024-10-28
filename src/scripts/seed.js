const { sequelize } = require("@/config/db");
const { Rol, Usuario, Administrador } = require("@/models");
const colors = require("colors");

const seedDatabase = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    await Rol.bulkCreate([
      {
        nombre: "Administrador",
      },
      {
        nombre: "Vendedor",
      },
    ]);
    await Usuario.bulkCreate([
      {
        nombre: "Bryan Avalos Loa y Pardo Jesus",
        username: "administrador",
        password: "administrador",
        rolId: 1,
      },
    ]);
    await Administrador.bulkCreate([
      {
        usuarioId: 1,
      },
    ]);
    console.log(colors.blue.bold("SEED EJECUTADO CORRECTAMENTE"));
    process.exit(0);
  } catch (error) {
    console.error(colors.red.bold("ERROR AL INSERTAR LOS DATOS", error));
    process.exit(1);
  }
};

seedDatabase();
