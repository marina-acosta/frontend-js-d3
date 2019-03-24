import { graph, themes } from "../helpers";
import { format } from "../../utils/util";

export default class View {
  render({ wrapper, tablet, smartphone, label, unit }) {
    const graphContainer = document.createElement("div");
    graphContainer.id = label;
    graphContainer.className = `chart-container slide ${label}`;
    wrapper.appendChild(graphContainer);
    this.createChart(
      label,
      smartphone.percentage,
      smartphone.value + tablet.value,
      unit,
      themes[label]
    );
    this.createReference(
      graphContainer,
      tablet,
      smartphone,
      unit,
      themes[label]
    );
  }

  createChart(label, percentage, value, unit, colors) {
    graph(`#${label}`, label, percentage, format(value, unit), colors);
  }

  createReference(parent, tablet, smartphone, unit, colors) {
    const referenceContainer = document.createElement("div");
    referenceContainer.className = "reference-container";
    parent.appendChild(referenceContainer);
    this.createReferenceItem(referenceContainer, "Tablet", tablet, unit, {
      label: { color: colors.primaryColor },
      item: {}
    });
    this.createReferenceItem(
      referenceContainer,
      "Smartphone",
      smartphone,
      unit,
      {
        label: { color: colors.secondaryColor },
        item: {}
      }
    );
  }

  createReferenceItem(
    parent,
    label,
    data,
    unit,
    theme = { item: {}, label: {} }
  ) {
    // create container for item
    const item = document.createElement("div");
    item.className = "reference-item";
    parent.appendChild(item);
    // add label
    const itemLabel = document.createElement("div");
    itemLabel.innerText = label;
    itemLabel.className = "reference-label";
    item.appendChild(itemLabel);
    // add info (percentage and value)
    const percentage = document.createElement("span");
    percentage.innerText = `${data.percentage}%`;
    item.appendChild(percentage);
    const value = document.createElement("span");
    value.className = "value";
    value.innerText = `${format(data.value, unit)}`;
    item.appendChild(value);

    // add styles
    Object.keys(theme.item).forEach(key => (item.style[key] = theme.item[key]));
    Object.keys(theme.label).forEach(
      key => (itemLabel.style[key] = theme.label[key])
    );
  }
}
