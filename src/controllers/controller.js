export default class Controller {
  constructor(model, view, label) {
    this.model = model;
    this.view = view;
    this.label = label;
  }
  render(wrapper) {
    this.model.getData().then(data => {
      this.view.render({ ...data, label: this.label, wrapper });
    });
  }
}
