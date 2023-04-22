am4core.ready(function() {

    // Themes begin
    am4core.unuseTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("chartdiv2", am4charts.XYChart);
    
    // Add data
    chart.data = [{
        "TVS": "Money Heist",
        "views": 143
        }, {
        "TVS": "Riverdale",
        "views": 191
        }, {
        "TVS": "Baki Hanma",
        "views": 201
        }, {
        "TVS": "Lucifer",
        "views": 254
        }, {
        "TVS": "Braqueurs: La série",
        "views": 258
        }, {
        "TVS": "Alice in Borderland",
        "views": 279
        }, {
        "TVS": "Kastenjemanden",
        "views": 309
        }, {
        "TVS": "Midnight Mass",
        "views": 424
        }, {
        "TVS": "Sex Education",
        "views": 670
        }, {   
        "TVS": "Squid Game",
        "views": 828
        }, {
    }];
    
    // Create axes
    
    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "TVS";
    categoryAxis.renderer.labels.template.fill = am4core.color("white");
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.grid.template.stroke = am4core.color("white");
    categoryAxis.renderer.minGridDistance = 20;

    
    
    var valueAxis = chart.xAxes.push(new am4charts.ValueAxis()); // assign y axis value
    valueAxis.renderer.labels.template.fill = am4core.color("white");
    // Create series
    var series = chart.series.push(new am4charts.ColumnSeries()); //we want it to be column series
    series.dataFields.valueX = "views";
    series.dataFields.categoryY = "TVS";
    series.name = "views";
    series.columns.template.tooltipText = "{categoryY}: [bold]{valueX}[/]";
    series.columns.template.fillOpacity = .8;
    var columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 0;
    columnTemplate.stroke = am4core.color("white"); 
    columnTemplate.strokeOpacity = 0;
    columnTemplate.fillOpacity = .8;
    columnTemplate.fill = am4core.color("#004216");
    columnTemplate.adapter.add("fill", function(fill, target) {
        if (target.dataItem && (target.dataItem.valueX ==828)) {
          return am4core.color("#ff0077");
        }
        else {
          return fill;
        }
      });

    
    var title = chart.titles.create();
    title.text = "TOP TV Shows on Netflix on October 1, 2021";
    title.fill= am4core.color("white");
    title.fontSize = 20;
    title.marginTop = 20;
    title.marginBottom = 20;
    title.fontWeight = 600;
    title.align = "right"

    var cellSize = 30;
    chart.events.on("datavalidated", function(ev) {

    // Get objects of interest
    var chart = ev.target;
    var categoryAxis = chart.yAxes.getIndex(0);

    // Calculate how we need to adjust chart height
    var adjustHeight = chart.data.length * cellSize - categoryAxis.pixelHeight;

    // get current chart height
    var targetHeight = chart.pixelHeight + adjustHeight;

    // Set it on chart's container
    chart.svgContainer.htmlElement.style.height = targetHeight + "px";
    });

    //series.columns.template.adapter.add("fill", function (fill, target) {
        //return chart.colors.getIndex(target.dataItem.index);
    //});
    
    // alert(chart.colors.getIndex(0));
    // alert(chart.colors.getIndex(1));

    }); // end am4core.ready()