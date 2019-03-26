import { $on } from "./utils";
import { Chart, Slider } from "./views";
import { RevenueModel, ImpresionsModel, VisitsModel } from "./models";
import { Controller } from "./controllers";

export class App {
  constructor() {
    const revenueModel = new RevenueModel();
    const impresionsModel = new ImpresionsModel();
    const visitsModel = new VisitsModel();
    this.slider = new Slider("app");
    const chart = new Chart();
    this.revenueController = new Controller(revenueModel, chart, "revenue");
    this.impresionsController = new Controller(
      impresionsModel,
      chart,
      "impresions"
    );
    this.visitsController = new Controller(visitsModel, chart, "visits");
  }
}

const app = new App();

const render = () => {
  const wrapper = app.slider.init(["revenue", "impresions", "visits"]);
  app.revenueController.render(wrapper.revenue);
  app.impresionsController.render(wrapper.impresions);
  app.visitsController.render(wrapper.visits);
};

$on(window, "load", render);
