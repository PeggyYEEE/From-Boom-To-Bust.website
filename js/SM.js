am4core.ready(function() {

  // Themes begin
  am4core.useTheme(am4themes_animated);
  am4core.useTheme(am4themes_kelly);
  am4core.useTheme(am4themes_myTheme);
  // Themes end


  
  // Create chart instance
  var chart = am4core.create("chartdiv4", am4charts.XYChart);
  
  // Add data
  chart.data = 
    [
      { 
        "date": "2012",
        "Residential":49374,
        "Office budilding":3367,
        "Commercial building":9312,

      },
      {
        "date": "2013",
        "Residential":58951,
        "Office budilding":4652,
        "Commercial building":11945,
      },
      {
        "date": "2014",
        "Residential":64352,
        "Office budilding":5641,
        "Commercial building":14346,
      },
      {
        "date": "2015",
        "Residential":64595,
        "Office budilding":6210,
        "Commercial building":14607,
      },
      {
        "date": "2016",
        "Residential":68704,
        "Office budilding":6533,
        "Commercial building":15838,
      },
      {
        "date": "2017",
        "Residential":75148,
        "Office budilding":6761,
        "Commercial building":15640,
      },
      {
        "date": "2018",
        "Residential":85192,
        "Office budilding":5996,
        "Commercial building":14177,
      },
      {
        "date": "2019",
        "Residential":89232,
        "Office budilding":5556,
        "Commercial building":12117,
      },
      {
        "date": "2019",
        "Residential":89232,
        "Office budilding":3367,
        "Commercial building":9312,
      },
      {
        "date": "2020",
        "Residential":104446,
        "Office budilding":6494,
        "Commercial building":13076,
      },
      {
        "date": "2021",
        "Residential":111173,
        "Office budilding":5974,
        "Commercial building":12445,
      },
      {
        "date": "2022",
        "Residential":100646,
        "Office budilding":5291,
        "Commercial building":10647,
      }
    ];

    chart.data.forEach(function (o) {
    
      o.Category = "" + o.Category;
      o["Office budilding"] = o["Office budilding"] || undefined;
  
  });

  chart.events.on("ready", function () {
    dateAxis.zoom({ start: 0, end: 1 });
});
  
  // Set input format for the dates
  chart.dateFormatter.inputDateFormat = "yyyy";
  
  // Create axes
  var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());



  ["Residential",
    "Office budilding","Commercial building"].forEach(function (elem) {


        // Create series
        var series = chart.series.push(new am4charts.LineSeries());
          series.dataFields.valueY = elem;
          series.tooltipText = elem + ": {valueY}"
          series.dataFields.dateX = "date";
          series.strokeWidth = 2;
          series.minBulletDistance = 15;

          if (elem === "Residential") {
  series.stroke = am4core.color("#007bff");
} else if (elem === "Office budilding") {
  series.stroke = am4core.color("#dc3545");
} else if (elem === "Commercial building") {
  series.stroke = am4core.color("#28a745");
}


        // Drop-shaped tooltips
        series.tooltip.background.cornerRadius = 20;
        series.tooltip.background.strokeOpacity = 0;
        series.tooltip.pointerOrientation = "vertical";
        series.tooltip.label.minWidth = 40;
        series.tooltip.label.minHeight = 40;
        series.tooltip.label.textAlign = "middle";
        series.tooltip.label.textValign = "middle";

        // Make bullets grow on hover
        var bullet = series.bullets.push(new am4charts.CircleBullet());
        bullet.circle.strokeWidth = 2;
        bullet.circle.radius = 4;
        bullet.circle.fill = am4core.color("#fff");

        var bullethover = bullet.states.create("hover");
        bullethover.properties.scale = 1.3;

        // Make a panning cursor
        chart.cursor = new am4charts.XYCursor();
        //chart.cursor.maxTooltipDistance = 1;
        chart.cursor.behavior = "panXY";
        chart.cursor.xAxis = valueAxis;
        //chart.cursor.snapToSeries = series;

        series.legendSettings.valueText = elem;
  

  // Create vertical scrollbar and place it before the value axis
  chart.scrollbarY = new am4core.Scrollbar();
  chart.scrollbarY.parent = chart.leftAxesContainer;
  chart.scrollbarY.toBack();
  
  // Create a horizontal scrollbar with previe and place it underneath the date axis
  //chart.scrollbarX = new am4charts.XYChartScrollbar();
  //chart.scrollbarX.series.push(series);
  //chart.scrollbarX.parent = chart.bottomAxesContainer;
  chart.scrollbarX = new am4charts.XYChartScrollbar();
  chart.scrollbarX = new am4core.Scrollbar();
  chart.scrollbarX.parent = chart.bottomAxesContainer;

  dateAxis.start = 0;
  dateAxis.keepSelection = true;
  
    });
    var title = chart.titles.create();
    title.text = "Investment in the real Estate development";
    title.fontSize = 30;
    title.marginTop = 20;
    title.marginBottom = 20;
    title.fontWeight = 600;
    // Create a horizontal scrollbar with previe and place it underneath the date axis
    //chart.scrollbarX = new am4charts.XYChartScrollbar();
    //chart.scrollbarX.series.push(series);
    //chart.scrollbarX = new am4core.Scrollbar();
    //chart.scrollbarX.parent = chart.bottomAxesContainer;
    
    chart.legend = new am4charts.Legend();
    chart.background.fill = am4core.color("#f5f5f5");
    chart.background.fillOpacity = 0.5;

    
  }); // end am4core.ready()