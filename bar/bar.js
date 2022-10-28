function getTextWidth(text) {
  let canvas =
    getTextWidth.canvas ||
    (getTextWidth.canvas = document.createElement("canvas"));
  let context = canvas.getContext("2d");
  let metrics = context.measureText(text);
  return metrics.width;
}
window.onload = function () {
  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push(Math.floor(Math.random() * 100) + 1);
  }
  let barWidth = 40;
  let width = 800;
  let height = 800;
  let margin = { top: 40, bottom: 40, left: 40, right: 40 };
  let innerWidth = width - margin.left - margin.right;
  let innerHeight = height - margin.top - margin.bottom;
  let container = d3
    .select("body")
    .append("svg")
    .attr("height", height)
    .attr("width", width);
  let yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data)])
    .range([innerHeight, margin.top]);
  let xScale = d3
    .scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, innerWidth])
    .padding(0.4);
  let xAxis = d3
    .axisBottom(xScale)
    .tickFormat(function (d) {
      return `${d}s`;
    })
    
  let yAxis = d3.axisRight(yScale).tickSize(innerWidth);
  container
    .append("g")
    .attr("transform", `translate(0, ${innerHeight})`)
    .call(xAxis)
    .call((g) => g.select(".domain").remove())
  container
    .append("g")
    .attr("transform", `translate(${margin.left}, 0)`)
    .call(yAxis)
    .call((g) => g.select(".domain").remove())
    .call((g) =>
      g
        .selectAll(".tick:not(:first-of-type) line")
        .attr("stroke-opaticy", 0.5)
        .attr("stroke-dasharray", "2,2")
    ).call(g=> g.selectAll("text").attr("dx", -innerWidth).attr("dy", -10));
  //添加柱状图
  container
    .append("g")
    .selectAll("rect")
    .data(data)
    .join("rect")
    .on("mouseover", function () {
      d3.select(this).attr("fill", "blue");
    })
    .on("mouseleave", function () {
      d3.select(this).attr("fill", "steelblue");
    })
    .attr("x", function (d, i) {
      return xScale(i) + (xScale.bandwidth() - barWidth) / 2;
    })
    .attr("width", function (d, i) {
      return barWidth;
    })
    .attr("y", function (d, i) {
      return innerHeight;
    })
    .attr("opacity", 0.6)
    .attr("fill", "steelblue")
    .transition()
    .duration(1000)
    .delay(function (d, i) {
      return 100 * i;
    })
    .attr("height", function (d, i) {
      return innerHeight - yScale(d);
    })
    .attr("y", function (d, i) {
      return yScale(d);
    });
  //添加文字
  container
    .append("g")
    .selectAll("text")
    .data(data)
    .join("text")
    .attr("x", (d, i) => {
      let offet = getTextWidth(`${d}`) / 2;
      console.log(getTextWidth(`${d}`));
      return xScale(i) + xScale.bandwidth() / 4 - offet + 2;
    })
    .attr("y", (d) => innerHeight)
    .transition()
    .duration(1000)
    .delay((d, i) => i * 100)
    .text((d) => d)
    .attr("x", (d, i) => {
      let offet = getTextWidth(`${d}`) / 2;
      console.log(getTextWidth(`${d}`));
      return xScale(i) + xScale.bandwidth() / 4 - offet + 2;
    })
    .attr("y", (d) => yScale(d) - 4);
  let line = d3
    .line()
    .x(function (d, i) {
      return xScale(i) + xScale.bandwidth() / 2;
    })
    .y(function (d, i) {
      return yScale(d) - 20;
    })
    .curve(d3.curveCatmullRom.alpha(0.9));

  // container
  //   .append("g")
  //   .append("path")
  //   .attr("d", line(data))
  //   .attr("stroke", "black")
  //   .attr("fill", "none");
};
