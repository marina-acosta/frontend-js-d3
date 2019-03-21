import BaseModel from "./base.model";
import { api } from "../utils";

export default class RevenueModel extends BaseModel {
  constructor() {
    super(api.revenue);
  }
}
