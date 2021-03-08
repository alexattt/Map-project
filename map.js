
//lai implementēt karti un citas funkcijas tiek izmanota JavaScript bibliotēka Leaflet

// tiek izmantots Web Map Service serveris GeoServer ar tajā esošajiem map tiles
var karte = L.tileLayer.wms('http://new.kurtuesi.lv:8080/geoserver/gwc/service/wms?', 
    {
        layers: 'map:background',
        format: 'image/png',
        transparent: true,
        attribution: "kartes info kurtuesi.lv",
        minZoom: 7,
        maxZoom: 17
    });

var map = new L.Map('mapid',
    {
        center: new L.LatLng(56.95, 24.1),
        zoom: 8,
        layers: [karte]
    });


//weather layers
var baseMaps = { "Standard Tile Map Latvia": map };
var clouds = L.OWM.clouds({showLegend: true, opacity: 0.8, appId: '78097f2a345d7ee3a7f14c801d413033', minZoom: 7, maxZoom: 17, interval: 5});
var wind = L.OWM.wind({opacity: 0.5, appId: '78097f2a345d7ee3a7f14c801d413033', minZoom: 7, maxZoom: 17, interval: 5});

var overlayMaps = { "Clouds": clouds, "Wind": wind };

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

//ruler
var options =  {
    position: 'topright',     
    circleMarker: {             
      color: 'red',
      radius: 2
    },
    lineStyle: {                  
      color: 'red',
      dashArray: '1,2'
    },
    lengthUnit: {              
      display: 'km',            
      decimal: 2,                 
      factor: null,              
      label: 'Distance:'           
    }
}
L.control.ruler(options).addTo(map);

