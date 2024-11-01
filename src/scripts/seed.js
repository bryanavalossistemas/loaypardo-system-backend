const { sequelize } = require("@/config/db");
const {
  Rol,
  Usuario,
  Administrador,
  Categoria,
  Marca,
  Proveedor,
  Cliente,
  ImagenProducto,
  Producto,
  ClienteJuridico,
} = require("@/models");
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
    await Categoria.bulkCreate([
      {
        nombre: "Harina",
      },
      {
        nombre: "Manteca",
      },
    ]);
    await Marca.bulkCreate([
      {
        nombre: "Anita",
      },
      {
        nombre: "Gordito",
      },
    ]);
    await Proveedor.bulkCreate([
      {
        nombre: "Alicorp S.A.C",
        ruc: "20600007522",
        direccion: "Av. Argentina 721",
        telefono: "4746922",
        celular: "915115894",
        correo: "alicorp@gmail.com",
      },
      {
        nombre: "D'Masa S.A.C",
        ruc: "20600007523",
        direccion: "Av. Javier Prado 212",
        telefono: "4746922",
        celular: "915115894",
        correo: "dmasa@gmail.com",
      },
    ]);
    await Cliente.bulkCreate([
      {
        nombre: "Representaciones Nataly S.A.C",
        direccion: "Av. Aviacion 721",
        celular: "915115894",
        correo: "representacionesnataly@gmail.com",
      },
    ]);
    await ClienteJuridico.bulkCreate([
      {
        ruc: "20600007522",
        telefono: "4746922",
        clienteId: 1,
      },
    ]);
    await ImagenProducto.bulkCreate([
      {
        url: "https://res.cloudinary.com/bryanavalossistemas/image/upload/v1730203744/rn-system/e8utusxbxoyzwgqftq15.webp",
        publicId: "rn-system/e8utusxbxoyzwgqftq15",
      },
      {
        url: "http://res.cloudinary.com/bryanavalossistemas/image/upload/v1730196711/rn-system/ss5c66p2vfmuxavikkh0.webp",
        publicId: "rn-system/ss5c66p2vfmuxavikkh0",
      },
    ]);
    await Producto.bulkCreate([
      {
        nombre: "Harina Anita x 50 Kg",
        precioCosto: 100,
        precioVenta: 200,
        stock: 100,
        categoriaId: 1,
        marcaId: 1,
        imagenProductoId: 1,
      },
      {
        nombre: "Manteca Vegetal Gordito x 14 Kg",
        precioCosto: 200,
        precioVenta: 300,
        stock: 100,
        categoriaId: 2,
        marcaId: 2,
        imagenProductoId: 2,
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
