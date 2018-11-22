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

	max_BMD = d3.max(data, function(d){
		return (d.Billed_MD)

	})

	max_CMD = d3.max(data, function(d){
		return (d.CMD)
	})

	max_Billed_Units = d3.max(data, function(d){
		return (d.Billed_Units)
	})

	max_Billed_Amount = d3.max(data, function(d){
		return (d.Billed_Amount)
	})

	max_Paid_Amount = d3.max(data, function(d){
		return (d.Billed_Amount)
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
	svg.append("text")
        .attr("text-anchor", "middle")  
        .style("font-size", "16px")   
        .text("Value vs Date Graph");
	var y = d3.scaleLinear()
		.domain([0, max_RMD])
		.range([0, 400]);

	console.log(y(82))

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
				//console.log((d.Recorded_MD / max_RMD)*height_chart_area);
				//return ((d.Recorded_MD / max_RMD)*height_chart_area);
				return(y(d.Recorded_MD));

			})
			.style("fill" , "orange")

	var svg = d3.select("#chart-area1").append("svg")
		.attr("width" , width_chart_area)
		.attr("height" , height_chart_area);

	var y1 = d3.scaleLinear()
		.domain([0, max_BMD])
		.range([0, 400]);

	var bars = svg.selectAll("rect")
		.data(data);

	bars.enter()
		.append("rect")
			.attr("x" , function(d,i){
				return(bar_start + i*(bar_width + bar_space));
			})
			.attr("y" , function (d){
				return (height_chart_area - (d.Billed_MD / max_BMD)*height_chart_area*0.8 )
			})
			.attr("width", Math.round(bar_width))
			.attr("height", function(d , i){
				//console.log((d.Recorded_MD / max_RMD)*height_chart_area);
				//console.log(y1(d.Billed_MD));
				return (y1(d.Billed_MD));


			})
			.style("fill" , "yellow")

	var svg = d3.select("#chart-area4").append("svg")
		.attr("width" , width_chart_area)
		.attr("height" , height_chart_area);

	var y3 = d3.scaleLinear()
		.domain([0, max_Billed_Units])
		.range([0, 400]);

	var bars = svg.selectAll("rect")
		.data(data);

	bars.enter()
		.append("rect")
			.attr("x" , function(d,i){
				return(bar_start + i*(bar_width + bar_space));
			})
			.attr("y" , function (d){
				return (height_chart_area - (d.Billed_Units / max_Billed_Units)*height_chart_area*0.3 )
			})
			.attr("width", Math.round(bar_width))
			.attr("height", function(d , i){
				//console.log((d.Recorded_MD / max_RMD)*height_chart_area);
				//console.log(y3(d.Billed_Units));
				return (y3(d.Billed_Units));

			})
			.style("fill" , "blue")

	var svg = d3.select("#chart-area3").append("svg")
		.attr("width" , width_chart_area)
		.attr("height" , height_chart_area);

	var y2 = d3.scaleLinear()
		.domain([0, max_CMD])
		.range([0, 400]);

	var bars = svg.selectAll("rect")
		.data(data);

	bars.enter()
		.append("rect")
			.attr("x" , function(d,i){
				return(bar_start + i*(bar_width + bar_space));
			})
			.attr("y" , function (d){
				return (height_chart_area - (d.CMD / max_CMD)*height_chart_area*0.8 )
			})
			.attr("width", Math.round(bar_width))
			.attr("height", function(d , i){
				//console.log((d.Recorded_MD / max_RMD)*height_chart_area);
				console.log(y2(d.CMD));
				return (y2(d.CMD));

			})
			.style("fill" , "green")

	var svg = d3.select("#chart-area5").append("svg")
		.attr("width" , width_chart_area)
		.attr("height" , height_chart_area);

	var y4 = d3.scaleLinear()
		.domain([0, max_Billed_Amount])
		.range([0, 400]);

	var bars = svg.selectAll("rect")
		.data(data);

	bars.enter()
		.append("rect")
			.attr("x" , function(d,i){
				return(bar_start + i*(bar_width + bar_space));
			})
			.attr("y" , function (d){
				return (height_chart_area - (d.Billed_Amount / max_Billed_Amount)*height_chart_area*0.8 )
			})
			.attr("width", Math.round(bar_width))
			.attr("height", function(d , i){
				//console.log((d.Recorded_MD / max_RMD)*height_chart_area);
				//console.log(y3(d.Billed_Units));
				return (y4(d.Billed_Amount));

			})
			.style("fill" , "red")

	var svg = d3.select("#chart-area6").append("svg")
		.attr("width" , width_chart_area)
		.attr("height" , height_chart_area);

	var y5 = d3.scaleLinear()
		.domain([0, max_Paid_Amount])
		.range([0, 400]);

	var bars = svg.selectAll("rect")
		.data(data);

	bars.enter()
		.append("rect")
			.attr("x" , function(d,i){
				return(bar_start + i*(bar_width + bar_space));
			})
			.attr("y" , function (d){
				return (height_chart_area - (d.Paid_Amount / max_Paid_Amount)*height_chart_area*0.8 )
			})
			.attr("width", Math.round(bar_width))
			.attr("height", function(d , i){
				//console.log((d.Recorded_MD / max_RMD)*height_chart_area);
				//console.log(y3(d.Billed_Units));
				return (y5(d.Paid_Amount));

			})
			.style("fill" , "green")
});