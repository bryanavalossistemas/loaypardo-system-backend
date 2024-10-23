import RepositorioBase from "./Base.js";
import { DetalleCompra } from "../models/index.js";

class RepositorioDetalleCompra extends RepositorioBase {
  constructor() {
    super(DetalleCompra);
  }
}

const repositorioDetalleCompra = new RepositorioDetalleCompra();

export default repositorioDetalleCompra;
