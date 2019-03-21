import BaseModel from "./base.model";
import { api } from "../utils";

export default class ImpresionsModel extends BaseModel {
  constructor() {
    super(api.impresions);
  }
}
