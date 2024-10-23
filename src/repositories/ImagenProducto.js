import RepositorioBase from "./Base.js";
import { ImagenProducto } from "../models/index.js";

class RepositorioImagenProducto extends RepositorioBase {
  constructor() {
    super(ImagenProducto);
  }
}

const repositorioImagenProducto = new RepositorioImagenProducto();

export default repositorioImagenProducto;
