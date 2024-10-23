const { Rol } = require("@/models");

class RolService {
  async createRol(data) {
    return await Rol.create(data);
  }

  async getAllRoles() {
    return await Rol.findAll();
  }

  async getRolById(id) {
    const rol = await Rol.findByPk(id);
    if (!rol) throw { message: "Rol no encontrado", statusCode: 404 };
    return rol;
  }

  async updateRol(id, data) {
    const rol = await this.getRolById(id);
    return await rol.update(data);
  }

  async deleteRol(id) {
    const rol = await this.getRolById(id);
    await rol.destroy();
    return { message: "Rol eliminado correctamente" };
  }
}

module.exports = new RolService();
