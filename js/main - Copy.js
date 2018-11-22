/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.5 - Activity: Adding SVGs to the screen
*/

/*

fix width of chart area

get number of shapes required in the width

set width of shape to (Width of Chart Area / Number of Shapes)

*/

d3.csv("data/Sample_Bill.CSV").then(function(data){
	data.forEach(function(d){
		d.Recorded_MD = +Math.round(d.Recorded_MD);
	});

	max_RMD = d3.max(data, function(d){
		return (d.Recorded_MD)
	})

	console.log(data.length)
})

/*var num_units = [40, 43, 50, 54, 32];

var width_chart_area = 200;

//max_units = Math.max.apply(Math,num_units)

var height_chart_area = 400;

var num_bars = num_units.length;

bar_width = ((0.8 * width_chart_area)/num_bars)*0.9

bar_space = 0.1*bar_width

bar_start = 0.2 * width_chart_area

var svg = d3.select("#chart-area").append("svg")
	.attr("width" , width_chart_area)
	.attr("height" , height_chart_area);


var bars = svg.selectAll("rect")
	.data(num_units);

bars.enter()
	.append("rect")
		.attr("x" , function(d,i){
			return(bar_start + i*(bar_width + bar_space));
		})
		.attr("y" , function (d){
			return (height_chart_area - (d / max_units)*height_chart_area*0.8 )
		})
		.attr("width", Math.round(width_chart_area/(num_bars+3)))
		.attr("height", function(d , i){
			console.log((d / max_units)*height_chart_area);
			return ((d / max_units)*height_chart_area);

		})
		.style("fill" , "orange")*/