import RepositorioBase from "./Base.js";
import { Administrador, Usuario } from "../models/index.js";

class RepositorioAdministrador extends RepositorioBase {
  constructor() {
    super(Administrador);
  }
}

const repositorioAdministrador = new RepositorioAdministrador();

export default repositorioAdministrador;
