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

//var num_units = [40, 43, 50, 54, 32];

//max_units = Math.max.apply(Math,num_units)

	var height_chart_area = 400;

	var num_bars = data.length - 1;

	var width_chart_area = num_bars * 5;

	bar_width = ((0.8 * width_chart_area)/num_bars)*0.7

	bar_space = 0.2*bar_width

	bar_start = 0.2 * width_chart_area

	var svg = d3.select("#chart-area").append("svg")
		.attr("width" , width_chart_area)
		.attr("height" , height_chart_area);


	var bars = svg.selectAll("rect")
		.data(data);

	bars.enter()
		.append("rect")
			.attr("x" , function(d,i){
				return(bar_start + i*(bar_width + bar_space));
			})
			.attr("y" , function (d){
				return (height_chart_area - (d.Recorded_MD / max_RMD)*height_chart_area*0.8 )
			})
			.attr("width", Math.round(bar_width))
			.attr("height", function(d , i){
				console.log((d.Recorded_MD / max_RMD)*height_chart_area);
				return ((d.Recorded_MD / max_RMD)*height_chart_area);

			})
			.style("fill" , "orange")

	var svg = d3.select("#chart-area1").append("svg")
		.attr("width" , width_chart_area)
		.attr("height" , height_chart_area);


	var bars = svg.selectAll("rect")
		.data(data);

	bars.enter()
		.append("rect")
			.attr("x" , function(d,i){
				return(bar_start + i*(bar_width + bar_space));
			})
			.attr("y" , function (d){
				return (height_chart_area - (d.Recorded_MD / max_RMD)*height_chart_area*0.8 )
			})
			.attr("width", Math.round(bar_width))
			.attr("height", function(d , i){
				console.log((d.Recorded_MD / max_RMD)*height_chart_area);
				return ((d.Recorded_MD / max_RMD)*height_chart_area);

			})
			.style("fill" , "orange")

});