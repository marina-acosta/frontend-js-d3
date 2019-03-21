export default class Controller {
  constructor(model, view, label) {
    this.model = model;
    this.view = view;
    this.label = label;
  }
  render() {
    this.view.render({ ...this.model.getData(), label: this.label });
  }
}
