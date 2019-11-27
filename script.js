let value = [];
let dates = []

const width = 700;
const height = 530;



d3.json("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json").then((data) => {
  let datas = data.data;
  datas.forEach(function(setData){
    dates.push(new Date (setData[0]))
    value.push((setData[1]))
    // value.splice(55, value.length)
  })
console.log(value)

const svg = d3.select("#graph")
                .append("svg")
                .attr("width",width)
                .attr("height", height);

  const sameDate = d3.timeFormat("%Y-%m-%d")	

const xScale = d3.scaleTime()
                  .domain([d3.min(dates), d3.max(dates)])
                  .range([0 , width - 80]);

const x_axis = d3.axisBottom()
                 .scale(xScale)

const yAxis = d3.scaleLinear()
                .domain([0, d3.max(value)])
                .range([height , 0])

const y_axis = d3.axisLeft()
                 .scale(yAxis)

const scaleGross = d3.scaleLinear()
                     .domain([0, d3.max(value)])
                     .range([0, height])

const gdp = value.map(function(item){
  return scaleGross(item)
})


let xAxisTranslate = height - 30;
const yAxisTranslate = 0 - 30;
  
      svg.append("g")
            .attr("transform", "translate(50, " + xAxisTranslate  +")")
            .attr("id","x-axis")
            .call(x_axis)
            .style("color","white")
    
      svg.append("g")
         .attr("transform","translate(50,"+ yAxisTranslate +")")
         .attr("id","y-axis")
         .call(y_axis)
         .style("color","white")
  

  
let div = d3.select("body").append("div")	
            .attr("class", "tooltip")
            .attr("id", "tooltip")
             .style("opacity", 0);
  
      svg.selectAll("rect")
         .data(gdp)
         .enter()
         .append("rect")
         
         .attr("data-date", function(d,i) {
            
            return datas[i][0]
         })
         .attr("data-gdp", function(d,i) {
            return datas[i][1]
         })
         .attr('x', function(d, i) {
           return xScale(dates[i]);
         })

         .attr("y", (d,i) =>{
          return height - d 
         })
          .classed("bar", true)
          .on("mouseover", function(d,i) {
              let coordinates = d3.mouse(this)
              const formYear = d3.timeFormat("%b %Y")
              d3.select(this)
             .classed("active", true)

                div.transition()
                .duration(200)	
                .style("opacity", .9)
                div.attr("data-date", datas[i][0])                 
                .html("Date " + "</br>" + formYear(dates[i]) + "</br>" + "$" + d3.select(this).attr("data-gdp"))	
                .style("left", event.clientX + "px")
                .style("top", (coordinates[1]) + "px")

            })
          .on("mouseout", function(d) {
            d3.select(this)
              .classed("active", false)                   
                div.transition()		
                .duration(100)		
                .style("opacity", 0);
        })
         .attr("width", width/275)
         .attr("height", (d) => {
           return d;
         })
         .attr("transform","translate(51,-30)")

      })