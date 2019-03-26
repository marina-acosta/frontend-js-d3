import { themes } from "../helpers";
import { format } from "../../utils/util";
import { donut } from "./draw-graphs";

export default class View {
  render({ wrapper, tablet, smartphone, label, unit }) {
    this.createChart(
      label,
      smartphone.percentage,
      smartphone.value + tablet.value,
      unit,
      themes[label]
    );
    this.createReference(wrapper, tablet, smartphone, unit, themes[label]);
  }

  createChart(label, percentage, value, unit, colors) {
    donut(`#${label}`, label, percentage, format(value, unit), colors);
  }

  createReference(parent, tablet, smartphone, unit, colors) {
    const referenceContainer = document.createElement("div");
    referenceContainer.className = "reference-container";
    parent.appendChild(referenceContainer);
    this.createReferenceItem(referenceContainer, "Tablet", tablet, unit, {
      color: colors.primaryColor
    });
    this.createReferenceItem(
      referenceContainer,
      "Smartphone",
      smartphone,
      unit,
      { color: colors.secondaryColor }
    );
  }

  createReferenceItem(parent, label, data, unit, labelTheme = {}) {
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
    Object.keys(labelTheme).forEach(
      key => (itemLabel.style[key] = labelTheme[key])
    );
  }
}
