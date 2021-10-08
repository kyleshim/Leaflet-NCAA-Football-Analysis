// Store our API endpoint as queryUrl.
var queryUrl = "https://kyleshim.github.io/test/recruit_team.json"
// Perform a GET request to the query URL/
 d3.json(queryUrl).then(function (data) {
  //console.log(data);
  //createGeoJson(data)

  // Initialize empty array for geoJson
  var features =[]

  // Initialize empty array for heatmap coordinates
  var latlng_arr = []

  // For loop to creat GeoJson, heatmap array

  // Change i<1000 to i<data.length to display all data points. Using 1000 to not overload the system
  for (var i=0; i<1000; i++) {
    var coordinates_geo = [parseFloat(data[i].player_lon),parseFloat(data[i].player_lat)];
    var coordinates_heat = [parseFloat(data[i].player_lat),parseFloat(data[i].player_lon)];
    var team_icon = 'logos/' + data[i].t_id + '.png';
    data[i]['team_icon'] = team_icon;
    if(isNaN(coordinates_geo[0])) {
    }else{
    latlng_arr = latlng_arr.concat([coordinates_heat]);
    var feature = {
      "type":"Feature",
      "geometry":{
          "type":"Point",
          "coordinates":coordinates_geo
      },
      "properties":data[i],
      "id":String(data[i].p_id)
    };
    features = features.concat(feature)
    };
    
  };
  var geojson = {
    "type":"FeatureCollection",
    "features": features
  };
  //console.log(geojson);
  //console.log(latlng_arr);

  // Send geojson.features and heatmap array to the createFeatures function.
  createFeatures(geojson.features, latlng_arr);
});

 function createFeatures(recruitData, recruit_coord) {

  // Define a function that we want to run once for each feature in the features array.
  // Give each feature a popup that gives the recruits name, postion, stars, college, and year.
  function onEachFeature(feature, layer) {
    layer.bindPopup(`<h3>${feature.properties.name}</h3><hr>
                    <p>Position: ${feature.properties.position}</p>
                    <p>Stars: ${feature.properties.stars}</p>
                    <p>College: ${feature.properties.school}</p>
                    <p>Year: ${feature.properties.year}</p>`)
  };
  
  // Create a GeoJSON layer that contains the features array on the recruitData object.
  // Assign School Logos for each Recruit.
  // Run the onEachFeature function once for each piece of data in the array.
  var recruits = L.geoJSON(recruitData, {
    pointToLayer: function(feature, latlng) {
      return new L.marker(latlng,{
        icon:L.icon({
          iconUrl: feature.properties.team_icon,
          // [24,24] might be better when there are less on the screen but was too much while working. 
          iconSize: [12, 12],
          //Also change the iconAnchor to half the iconSize
          iconAnchor: [6, 6],
          popupAnchor: [0, 0]
        }),
    });
  },
    onEachFeature: onEachFeature
});

//Define a heat map layer
//Not sure why its all purple/blue
var heat = L.heatLayer(recruit_coord, {
  radius: 10,
  blur: 1
}); 

  //console.log(recruitData);
  //console.log(geojson.features);
  // Send our recruits and heatmap layer to the createMap function
  createMap(recruits, heat);
};

function createMap(recruits, heat) {

  // Create the base layers.
  var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  })

  var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  });

  // Create a baseMaps object.
  var baseMaps = {
    "Street Map": street,
    "Topographic Map": topo
  };

  // Create an overlay object to hold our overlay.
  var overlayMaps = {
    Recruits: recruits,
    Heatmap: heat
  };

  // Create our map, giving it the streetmap and recruits layers to display on load.
  var myMap = L.map("map", {
    center: [
      37.09, -100.71
      //  10,0
    ],
    zoom: 5,
    layers: [street, recruits]
    
  });
  
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);

};
