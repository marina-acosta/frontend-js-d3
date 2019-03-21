import { graph, themes } from "./helpers";
import { format } from "../utils/util";

export default class View {
  constructor() {
    this.container = document.getElementById("target");
  }

  render({ tablet, smartphone, historical, label }) {
    this.createChart(label, smartphone.percentage, themes[label]);
    this.createReference(tablet, smartphone, themes[label]);
  }

  createChart(label, percentage, colors) {
    const graphContainer = document.createElement("div");
    graphContainer.id = label;
    graphContainer.className = label;
    this.container.appendChild(graphContainer);
    graph(`#${label}`, label, percentage, colors);
  }

  createReference(tablet, smartphone, colors) {
    const referenceContainer = document.createElement("div");
    referenceContainer.className = "reference-container";
    this.container.appendChild(referenceContainer);
    this.createReferenceItem(referenceContainer, "Tablet", tablet, {
      label: { color: colors.primaryColor },
      item: {}
    });
    this.createReferenceItem(referenceContainer, "Smartphone", smartphone, {
      label: { color: colors.secondaryColor },
      item: {}
    });
  }

  createReferenceItem(parent, label, data, theme = { item: {}, label: {} }) {
    // div container for item
    const item = document.createElement("div");
    item.className = "reference-item";
    parent.appendChild(item);
    // label
    const itemLabel = document.createElement("div");
    itemLabel.innerText = label;
    itemLabel.className = "reference-label";
    item.appendChild(itemLabel);
    // info (percentage and value)
    const percentage = document.createElement("span");
    percentage.innerText = `${data.percentage}%`;
    item.appendChild(percentage);
    const value = document.createElement("span");
    value.innerText = `${format(data.value, "$")}`;
    item.appendChild(value);

    // add styles
    Object.keys(theme.item).forEach(key => (item.style[key] = theme.item[key]));
    Object.keys(theme.label).forEach(
      key => (itemLabel.style[key] = theme.label[key])
    );
  }
}
