function am4themes_myTheme(target) {
    if (target instanceof am4core.ColorSet) {
      target.list = [
        am4core.color("#ff0077"),
        am4core.color("#004216"),
      ];
    }
  }