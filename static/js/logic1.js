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
  var star_arr = []

  // For loop to creat GeoJson, heatmap array

  // Change i<1000 to i<data.length to display all data points. Using 1000 to not overload the system
  for (var i=0; i<data.length; i++) {
    var coordinates_geo = [parseFloat(data[i].player_lon),parseFloat(data[i].player_lat)];
    var coordinates_heat = [parseFloat(data[i].player_lat),parseFloat(data[i].player_lon),parseFloat(data[i].stars)];
    var team_icon = 'logos/' + data[i].t_id + '.png';
    data[i]['team_icon'] = team_icon;
    if(isNaN(coordinates_geo[0])) {
    }else{
    latlng_arr = latlng_arr.concat([coordinates_heat]);
    star_arr = star_arr.concat(data[i].stars)
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
  createFeatures(geojson.features, latlng_arr, star_arr);
});

 function createFeatures(recruitData, recruit_coord) {
  
  // console.log(recruitData)

//  var ole_recruits = []
//  for ( var i=0; i<recruitData.length; i++) {
//    if(recruitData[i].properties.school == "Ole Miss") {
//    var  ole_recruit = recruitData[i];
//    ole_recruits = ole_recruits.concat(ole_recruit)
//    }else{
//    };

  // console.log(fla_recruits)

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
    filter: function(feature, layer) {
        return feature.properties.year >= 2010;
    },
    pointToLayer: function(feature, latlng) {
      return new L.marker(latlng,{
        icon:L.icon({
          iconUrl: feature.properties.team_icon,
          // [24,24] might be better when there are less on the screen but was too much while working
          iconSize: [12, 12],
          iconAnchor: [6, 6],
          popupAnchor: [0, 0]
        }),
      });
    },
    onEachFeature: onEachFeature
  });

  var year_2021 = L.geoJson(recruitData, {
    filter: function(feature, layer) {
        return feature.properties.year == 2021;
    },
    pointToLayer: function(feature, latlng) {
      return new L.marker(latlng,{
        icon:L.icon({
          iconUrl: feature.properties.team_icon,
          // [24,24] might be better when there are less on the screen but was too much while working
          iconSize: [12, 12],
          iconAnchor: [6, 6],
          popupAnchor: [0, 0]
        }),
      });
    },
    onEachFeature: onEachFeature
  });

  var year_2020 = L.geoJson(recruitData, {
    filter: function(feature, layer) {
        return feature.properties.year == 2020;
    },
    pointToLayer: function(feature, latlng) {
      return new L.marker(latlng,{
        icon:L.icon({
          iconUrl: feature.properties.team_icon,
          // [24,24] might be better when there are less on the screen but was too much while working
          iconSize: [12, 12],
          iconAnchor: [6, 6],
          popupAnchor: [0, 0]
        }),
      });
    },
    onEachFeature: onEachFeature
  });

  var year_2019 = L.geoJson(recruitData, {
    filter: function(feature, layer) {
        return feature.properties.year == 2019;
    },
    pointToLayer: function(feature, latlng) {
      return new L.marker(latlng,{
        icon:L.icon({
          iconUrl: feature.properties.team_icon,
          // [24,24] might be better when there are less on the screen but was too much while working
          iconSize: [12, 12],
          iconAnchor: [6, 6],
          popupAnchor: [0, 0]
        }),
      });
    },
    onEachFeature: onEachFeature
  });

  var year_2018 = L.geoJson(recruitData, {
    filter: function(feature, layer) {
        return feature.properties.year == 2018;
    },
    pointToLayer: function(feature, latlng) {
      return new L.marker(latlng,{
        icon:L.icon({
          iconUrl: feature.properties.team_icon,
          // [24,24] might be better when there are less on the screen but was too much while working
          iconSize: [12, 12],
          iconAnchor: [6, 6],
          popupAnchor: [0, 0]
        }),
      });
    },
    onEachFeature: onEachFeature
  });

  var year_2017 = L.geoJson(recruitData, {
    filter: function(feature, layer) {
        return feature.properties.year == 2017;
    },
    pointToLayer: function(feature, latlng) {
      return new L.marker(latlng,{
        icon:L.icon({
          iconUrl: feature.properties.team_icon,
          // [24,24] might be better when there are less on the screen but was too much while working
          iconSize: [12, 12],
          iconAnchor: [6, 6],
          popupAnchor: [0, 0]
        }),
      });
    },
    onEachFeature: onEachFeature
  });

  var year_2016 = L.geoJson(recruitData, {
    filter: function(feature, layer) {
        return feature.properties.year == 2016;
    },
    pointToLayer: function(feature, latlng) {
      return new L.marker(latlng,{
        icon:L.icon({
          iconUrl: feature.properties.team_icon,
          // [24,24] might be better when there are less on the screen but was too much while working
          iconSize: [12, 12],
          iconAnchor: [6, 6],
          popupAnchor: [0, 0]
        }),
      });
    },
    onEachFeature: onEachFeature
  });

  var year_2015 = L.geoJson(recruitData, {
    filter: function(feature, layer) {
        return feature.properties.year == 2015;
    },
    pointToLayer: function(feature, latlng) {
      return new L.marker(latlng,{
        icon:L.icon({
          iconUrl: feature.properties.team_icon,
          // [24,24] might be better when there are less on the screen but was too much while working
          iconSize: [12, 12],
          iconAnchor: [6, 6],
          popupAnchor: [0, 0]
        }),
      });
    },
    onEachFeature: onEachFeature
  });

  var year_2014 = L.geoJson(recruitData, {
    filter: function(feature, layer) {
        return feature.properties.year == 2014;
    },
    pointToLayer: function(feature, latlng) {
      return new L.marker(latlng,{
        icon:L.icon({
          iconUrl: feature.properties.team_icon,
          // [24,24] might be better when there are less on the screen but was too much while working
          iconSize: [12, 12],
          iconAnchor: [6, 6],
          popupAnchor: [0, 0]
        }),
      });
    },
    onEachFeature: onEachFeature
  });

  var year_2013 = L.geoJson(recruitData, {
    filter: function(feature, layer) {
        return feature.properties.year == 2013;
    },
    pointToLayer: function(feature, latlng) {
      return new L.marker(latlng,{
        icon:L.icon({
          iconUrl: feature.properties.team_icon,
          // [24,24] might be better when there are less on the screen but was too much while working
          iconSize: [12, 12],
          iconAnchor: [6, 6],
          popupAnchor: [0, 0]
        }),
      });
    },
    onEachFeature: onEachFeature
  });

  var year_2012 = L.geoJson(recruitData, {
    filter: function(feature, layer) {
        return feature.properties.year == 2012;
    },
    pointToLayer: function(feature, latlng) {
      return new L.marker(latlng,{
        icon:L.icon({
          iconUrl: feature.properties.team_icon,
          // [24,24] might be better when there are less on the screen but was too much while working
          iconSize: [12, 12],
          iconAnchor: [6, 6],
          popupAnchor: [0, 0]
        }),
      });
    },
    onEachFeature: onEachFeature
  });

  var year_2011 = L.geoJson(recruitData, {
    filter: function(feature, layer) {
        return feature.properties.year == 2011;
    },
    pointToLayer: function(feature, latlng) {
      return new L.marker(latlng,{
        icon:L.icon({
          iconUrl: feature.properties.team_icon,
          // [24,24] might be better when there are less on the screen but was too much while working
          iconSize: [12, 12],
          iconAnchor: [6, 6],
          popupAnchor: [0, 0]
        }),
      });
    },
    onEachFeature: onEachFeature
  });

  var year_2010 = L.geoJson(recruitData, {
    filter: function(feature, layer) {
        return feature.properties.year == 2010;
    },
    pointToLayer: function(feature, latlng) {
      return new L.marker(latlng,{
        icon:L.icon({
          iconUrl: feature.properties.team_icon,
          // [24,24] might be better when there are less on the screen but was too much while working
          iconSize: [12, 12],
          iconAnchor: [6, 6],
          popupAnchor: [0, 0]
        }),
      });
    },
    onEachFeature: onEachFeature
  });

  var fla = L.geoJSON(recruitData, {
    filter: function(feature, layer) {
      return feature.properties.school == "Florida";
    },
    pointToLayer: function(feature, latlng){
      return new L.marker(latlng,{
        icon:L.icon({
          iconUrl: feature.properties.team_icon,
          iconSize: [24,24],
          iconAnchor: [12,12],
          popupAnchor: [0,0]
        }),
      });
    },
    onEachFeature:onEachFeature
  });

  var ole = L.geoJSON(recruitData, {
    filter: function(feature, layer) {
      return feature.properties.school == "Ole Miss";
    },
    pointToLayer: function(feature, latlng){
      return new L.marker(latlng,{
        icon:L.icon({
          iconUrl: feature.properties.team_icon,
          iconSize: [24,24],
          iconAnchor: [12,12],
          popupAnchor: [0,0]
        }),
      });
    },
    onEachFeature:onEachFeature
  });

//Define a heat map layer
//Not sure why its all purple/blue
var heat = L.heatLayer(recruit_coord, {
  radius: 10,
  max: 5
});

  //console.log(recruitData);
  //console.log(geojson.features);
  // Send our recruits and heatmap layer to the createMap function
  createMap(recruits, heat, fla, ole, year_2021, year_2020, year_2019, year_2018, year_2017, year_2016, year_2015, year_2014, year_2013, year_2012, year_2011, year_2010);
};

function createMap(recruits, heat, fla, ole, year_2021, year_2020, year_2019, year_2018, year_2017, year_2016, year_2015, year_2014, year_2013, year_2012, year_2011, year_2010) {

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
    Heatmap: heat,
    "UF Recruits": fla,
    "Ole Miss Recruits": ole,
    "2021 Recruits": year_2021,
    "2020 Recruits": year_2020,
    "2019 Recruits": year_2019,
    "2018 Recruits": year_2018,
    "2017 Recruits": year_2017,
    "2016 Recruits": year_2016,
    "2015 Recruits": year_2015,
    "2014 Recruits": year_2014,
    "2013 Recruits": year_2013,
    "2012 Recruits": year_2012,
    "2011 Recruits": year_2011,
    "2010 Recruits": year_2010,
  };

  // Create our map, giving it the streetmap and recruits layers to display on load.
  var myMap = L.map("map", {
    center: [
      37.09, -100.71
      //  10,0
    ],
    zoom: 5,
    layers: [street, year_2021]
    
  });
  
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);

};