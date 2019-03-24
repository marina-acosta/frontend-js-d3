import { $on } from "./utils";
import { Chart, Slider } from "./views";
import { RevenueModel, ImpresionsModel, VisitsModel } from "./models";
import { Controller } from "./controllers";

class App {
  constructor() {
    const revenueModel = new RevenueModel();
    const impresionsModel = new ImpresionsModel();
    const visitsModel = new VisitsModel();
    this.slider = new Slider("app");
    const chart = new Chart();
    this.revenueCtrler = new Controller(revenueModel, chart, "revenue");
    this.impresionsCtrler = new Controller(
      impresionsModel,
      chart,
      "impresions"
    );
    this.visitsCtrler = new Controller(visitsModel, chart, "visits");
  }
}

const app = new App();

const render = () => {
  const wrapper = app.slider.init(["revenue", "impresions", "visits"]);
  app.revenueCtrler.render(wrapper);
  app.impresionsCtrler.render(wrapper);
  app.visitsCtrler.render(wrapper);
};

$on(window, "load", render);
