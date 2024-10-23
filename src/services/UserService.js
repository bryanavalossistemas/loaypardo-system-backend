const { User } = require("@/models");

class UserService {
  async createUser({ name, username, password, roleId }) {
    const user = await User.findOne({ where: { username } });
    if (user)
      throw {
        message: "Ya existe un usuario con el mismo nombre de usuario",
        statusCode: 400,
      };
    return await User.create({ name, username, password, roleId });
  }

  async getAllUsers() {
    return await User.findAll();
  }

  async getUserById(id) {
    const user = await User.findByPk(id);
    if (!user) throw { message: "Usuario no encontrado", statusCode: 404 };
    return user;
  }

  async updateUser({ id, name, username, password }) {
    const user = await this.getUserById(id);
    const userFindedByUsername = await User.findOne({ where: { username } });
    if (userFindedByUsername && userFindedByUsername.id !== id)
      throw {
        message: "Ya existe un usuario con el mismo nombre de usuario",
        statusCode: 400,
      };

    return await user.update({ name, username, password });
  }

  async deleteUser(id) {
    const user = await this.getUserById(id);
    await user.destroy();
    return { message: "Usuario eliminado correctamente" };
  }
}

module.exports = new UserService();
