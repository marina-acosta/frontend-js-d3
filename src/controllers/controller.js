export default class Controller {
  constructor(model, view, label) {
    this.model = model;
    this.view = view;
    this.label = label;
  }
  render() {
    this.model.getData().then(data => {
      this.view.render({ ...data, label: this.label });
    });
  }
}
