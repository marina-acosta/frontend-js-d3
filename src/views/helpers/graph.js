import * as d3 from "d3";

const graph = (element, label, percentage, colors) => {
  drawDonutChart(element, label, percentage, colors);
};

const drawDonutChart = (
  element,
  label,
  percent,
  colors,
  width = 290,
  height = 290,
  text_y = ".35em"
) => {
  const dataset = {
      lower: [0, 100],
      upper: [percent, 100 - percent]
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
    }); // store the initial values

  const text = svg
    .append("text")
    .attr("text-anchor", "middle")
    .attr("dy", text_y);

  const duration = 500;
  const timeout = setTimeout(() => {
    clearTimeout(timeout);
    path = path.data(pie(dataset.upper)); // update the data
    path
      .transition()
      .duration(duration)
      .attrTween("d", function(a) {
        const i = d3.interpolate(this._current, a);
        this._current = i(0);
        return t => {
          text.text(label);
          return arc(i(t));
        };
      });
  }, 200);
};

export { graph };
