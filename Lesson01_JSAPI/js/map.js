/**
 * Created by ben3029 on 3/7/2015.
 */
var map;
require(["esri/map", "dojo/domReady!"], function(Map) {
    map = new Map("mapDiv", {
        center: [-56.049, 38.485],
        zoom: 3,
        basemap: "oceans"
    });

    map.addLayer()
});