const { Administrator } = require("@/models");
const userService = require("@/services/UserService");

class AdministratorService {
  async createAdministrator({ name, username, password }) {
    const user = await userService.createUser({
      name,
      username,
      password,
      roleId: 1,
    });
    const administrator = await Administrator.create({ userId: user.id });

    return { administrator, user };
  }

  async getAllAdministrators() {
    return await Administrator.findAll();
  }

  async getAdministratorById(id) {
    const administrator = await Administrator.findByPk(id);
    if (!administrator) {
      throw { message: "Administrador no encontrado", statusCode: 404 };
    }
    return administrator;
  }

  async updateAdministrator({ id, name, username, password }) {
    const administrator = await this.getAdministratorById(id);
    const user = await userService.updateUser({
      id: administrator.userId,
      name,
      username,
      password,
    });

    return { administrator, user };
  }

  async deleteAdministrator(id) {
    const administrator = await this.getAdministratorById(id);
    await administrator.destroy();
    return { message: "Administrador eliminado correctamente" };
  }
}

module.exports = new AdministratorService();
