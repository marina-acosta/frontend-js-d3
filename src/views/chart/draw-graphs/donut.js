import * as d3 from "d3";

const donut = (
  element,
  label,
  percentage,
  value,
  colors,
  width = 290,
  height = 290
) => {
  const dataset = {
      lower: [0, 100],
      upper: [percentage, 100 - percentage]
    },
    radius = Math.min(width, height) / 2,
    pie = d3.pie().sort(null);

  const arc = d3
    .arc()
    .innerRadius(radius - 20)
    .outerRadius(radius);

  const svg = d3
    .select(element)
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("background", "transparent")
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  let path = svg
    .selectAll("path")
    .data(pie(dataset.lower))
    .enter()
    .append("path")
    .attr("fill", (d, i) => (i ? colors.primaryColor : colors.secondaryColor))
    .attr("d", arc)
    .each(function(d) {
      this._current = d;
    });

  svg
    .append("text")
    .attr("dy", "-1.2em")
    .style("text-anchor", "middle")
    .style("fill", "#a0a0a0")
    .style("stroke", "#a0a0a0")
    .style("text-transform", "uppercase")
    .style("font-size", "24px")
    .text(() => label);

  svg
    .append("text")
    .attr("dy", ".35em")
    .style("text-anchor", "middle")
    .style("font-size", "24px")
    .text(() => value);

  const duration = 500;
  const timeout = setTimeout(() => {
    clearTimeout(timeout);
    path = path.data(pie(dataset.upper));
    path
      .transition()
      .duration(duration)
      .attrTween("d", function(a) {
        const i = d3.interpolate(this._current, a);
        this._current = i(0);
        return t => arc(i(t));
      });
  }, 200);
};

export { donut };
