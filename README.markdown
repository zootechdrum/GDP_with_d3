# Fork Me! FCC: Test Suite Template
 _A Pen created at CodePen.io. Original URL: [https://codepen.io/zootechdrum/pen/NeRobX](https://codepen.io/zootechdrum/pen/NeRobX).

 ## Description 
 This project was originally completed in Codepen. This project was created to
 eventually get my Data Visulaization cert offered by FreeCodeCamp.

 ## The Technologies I used to complete this project were :

 1. D3.js
 2. BootStrap
 3. Javascript
 4. HTML5
 5. CSS

## Code Snippet

The below code shows how I implemented what I think was the hardest part to implement. The tooltip that is created on hover is created by the code below.
I used event.clientX instead of the d3 method d3.mouse() to make the tooltip 
consistent on smaller and larger screens. 

``` Javascript
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
```

![gif of working project as shown in Browser](/d3.gif)
 