import * as d3 from "d3";

const graph = (element, label, percentage, value, colors) => {
  drawDonutChart(element, label, percentage, value, colors);
  //  drawLineGraph(element, historic);
};

const drawDonutChart = (
  element,
  label,
  percent,
  totalValue,
  colors,
  width = 290,
  height = 290
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
    .text(() => totalValue);

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
        return t => arc(i(t));
      });
  }, 200);
};
/*
const drawLineGraph = (element, data) => {
  const points = [
    { ix: 0, value: 1000 },
    { ix: 1, value: 4000 },
    { ix: 2, value: 5000 },
    { ix: 3, value: 7000 },
    { ix: 4, value: 5000 }
  ]; //data.map((current, ix) => ({ ix, value: current }));
  var svgWidth = 290,
    svgHeight = 290;
  var margin = { top: 20, right: 20, bottom: 30, left: 0 };
  var width = svgWidth - margin.left - margin.right;
  var height = svgHeight - margin.top - margin.bottom;
  var svg = d3
    .select(element)
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);
  var g = svg
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var x = d3.scaleTime().rangeRound([0, width]);
  var y = d3.scaleLinear().rangeRound([height, 0]);

  var line = d3
    .line()
    .x(function(d) {
      return x(d.ix);
    })
    .y(function(d) {
      return y(d.value);
    });
  x.domain(
    d3.extent(points, function(d) {
      return d.ix;
    })
  );
  y.domain(
    d3.extent(points, function(d) {
      return d.value;
    })
  );
  g.append("path")
    .datum(points)
    .attr("fill", "pink")
    .attr("stroke", "steelblue")
    .attr("stroke-linejoin", "round")
    .attr("stroke-linecap", "round")
    .attr("stroke-width", 1.5)
    .attr("d", line);
};
*/
export { graph };
