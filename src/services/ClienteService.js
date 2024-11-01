const { Cliente } = require("@/models");

class ClienteService {
  async getAll() {
    return await Cliente.findAll();
  }
}

module.exports = new ClienteService();
