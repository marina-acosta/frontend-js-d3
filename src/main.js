import { $on } from "./utils";
import { View } from "./views";
import { RevenueModel, ImpresionsModel, VisitsModel } from "./models";
import { Controller } from "./controllers";

class App {
  constructor() {
    const revenueModel = new RevenueModel();
    const impresionsModel = new ImpresionsModel();
    const visitsModel = new VisitsModel();
    const view = new View();
    this.revenueCtrler = new Controller(revenueModel, view, "revenue");
    this.impresionsCtrler = new Controller(impresionsModel, view, "impresions");
    this.visitsCtrler = new Controller(visitsModel, view, "visits");
  }
}

const app = new App();

const render = () => {
  app.revenueCtrler.render();
  app.impresionsCtrler.render();
  app.visitsCtrler.render();
};

$on(window, "load", render);
