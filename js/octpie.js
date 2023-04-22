am4core.ready(function() {

    // Themes begin
    am4core.unuseTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("chartdiv3", am4charts.PieChart);
    
    // Add data
    chart.data = [
        { TVS: "Squid Game", places: 81, "color": am4core.color("#ff0077")},
        { TVS: 'Love 101', places: 1 , "color": am4core.color("#004216")},
        { TVS: 'Kastanjemanden', places: 1 , "color": am4core.color("#004216")},

    ];

    chart.innerRadius = am4core.percent(40);
    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "places";
    pieSeries.dataFields.category = "TVS";
    pieSeries.slices.template.stroke = am4core.color("white");
    pieSeries.labels.template.fill = am4core.color("white");
    pieSeries.ticks.template.fill = am4core.color("white");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.slices.template.propertyFields.fill = "color";

    pieSeries.ticks.fill = am4core.color("white");
    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
    
    var title = chart.titles.create();
    title.text = "Number of Top 1 took on Netflix on October 1";
    title.fill= am4core.color("white");
    title.fontSize = 20;
    title.marginTop = 40;
    title.marginBottom = 20;
    title.fontWeight = 600;

    chart.legend = new am4charts.Legend();
    chart.legend.labels.template.fill = am4core.color("white")
    chart.legend.valueLabels.template.fill = am4core.color("white")

    }); // end am4core.ready()