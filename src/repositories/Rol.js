import RepositorioBase from "./Base.js";
import { Rol } from "../models/index.js";

class RepositorioRol extends RepositorioBase {
  constructor() {
    super(Rol);
  }
}

const repositorioRol = new RepositorioRol();

export default repositorioRol;
