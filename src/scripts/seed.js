const { sequelize } = require("@/config/db");
const { Rol, User } = require("@/models");

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
    await User.bulkCreate([
      {
        name: "Bryan Avalos Loa y Pardo Jesus",
        username: "administrador",
        password: "administrador",
        roleId: 1,
      },
      {
        name: "Leonardo Jauregui",
        username: "vendedor",
        password: "vendedor",
        roleId: 2,
      },
    ]);

    process.exit(0);
  } catch (error) {
    console.error("Error al insertar datos:", error);
  }
};

seedDatabase();
