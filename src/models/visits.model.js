import BaseModel from "./base.model";
import { api } from "../utils";

export default class VisitsModel extends BaseModel {
  constructor() {
    super(api.visits);
  }
}
