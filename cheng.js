L.mapbox.accessToken = 'pk.eyJ1IjoiamVmZnN0ZXJuIiwiYSI6IlAzRFFiN0EifQ.mNWvayrLEw9wULuq0sopyA';
var map = L.mapbox.map('map', 'examples.map-20v6611k')
  .setView([-122.41941550000001, 37.7749295], 9);

var myLayer = L.mapbox.featureLayer()
  //.on('ready', run)
  .addTo(map);

/*
function run() {
    featureLayer.eachLayer(function(l) {
        map.panTo(l.getLatLng());
    });
    window.setTimeout(function() {
    }, 2000);
}
*/

var long1;
var long2;
var lat2;
var lat1;
var start_lat;
var start_long;
var end_lat;
var end_long;
var x = "http://api.bart.gov/api/stn.aspx?cmd=stninfo&orig=" + sessionStorage.getItem("start") + "&key=MW9S-E7SL-26DU-VV8V";
var y = "http://api.bart.gov/api/stn.aspx?cmd=stninfo&orig=" + sessionStorage.getItem("end") + "&key=MW9S-E7SL-26DU-VV8V";



myLayer.on('mouseover',function(e){
  e.layer.openPopup();
  });



map.on('ready', function() {
  $.ajax({
    type:"GET",
    url: x ,
    dataType:"xml",
    success: function(xml){
      $(xml).find("station").each(function(){
        long1 = $(this).find("gtfs_longitude").text();
        lat1 = $(this).find("gtfs_latitude").text();
      });
      $.ajax({
        type:"GET",
        url: y ,
        dataType:"xml",
        success: function(xml){

          $(xml).find("station").each(function(){
            long2 = $(this).find("gtfs_longitude").text();
            lat2 = $(this).find("gtfs_latitude").text();
          });

          start_lat = parseFloat(lat1);
          start_long = parseFloat(long1);
          end_lat = parseFloat(lat2);
          end_long = parseFloat(long2);

          var newGeoJson = {
              type: 'FeatureCollection',
                // This is an array of Map Point objects
              features: [

              {
                  type: 'Feature',
                  properties: {
                      title: '',
                      'marker-size': 'large',
                      'marker-symbol': 'marker',
                      'marker-color': '#99FF33',
                  },
                  geometry: {
                      type: 'Point',
                      coordinates: [start_long,start_lat]
                  }
              },

              {
                  type: 'Feature',
                  properties: {
                      title: '',
                      'marker-color': '#FF5050',
                      'marker-size': 'large',
                      'marker-symbol': 'marker',
                  },
                  geometry: {
                      type: 'Point',
                      coordinates: [end_long,end_lat]
                  }
              }
              ]
          };
          myLayer.setGeoJSON(newGeoJson); // Adds all of the markers to the map
          // featureLayer.getBounds() returns the corners of the furthest-out markers,
          // and map.fitBounds() makes sure that the map contains these.


          var marker = L.marker([myLong, myLat], {
              icon: L.mapbox.marker.icon({
                'marker-color': '#FFFF99'
              })
            });

          window.setInterval(function() {
            console.log("setting lat and long");
            marker.setLatLng(L.latLng(
              myLat,
              myLong));
          }, 2000);
          marker.addTo(map);
          map.fitBounds(myLayer.getBounds());
        }


      // $(xml).find(sessionStorage.getItem("end")).each(function(){
      //   long2 = $(this).find("gtfs_longitude").text();
      //   lat2 = $(this).find("gtfs_latitude").text();
      //   console.log(long2);
      //   console.log(lat2);
      // });

    });
  }

});
});

/*function onmove() {
    // Get the map bounds - the top-left and bottom-right locations.
    var inBounds = [],
        bounds = map.getBounds();
    markers.eachLayer(function(marker) {
        // For each marker, consider whether it is currently visible by comparing
        // with the current map bounds.
        if (bounds.contains(marker.getLatLng())) {
            inBounds.push(marker.options.title);
        }
    });
    // Display a list of markers.
    document.getElementById('coordinates').innerHTML = inBounds.join('\n');
}

map.on('move', onmove);

// call onmove off the bat so that the list is populated.
// otherwise, there will be no markers listed until the map is moved.
onmove();
</script>

*/
