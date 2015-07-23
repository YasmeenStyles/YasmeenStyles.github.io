var watchProcess = null;
var myLat = 0;
var myLong = 0;
var vibrateOn = sessionStorage.getItem("vib");
console.log(vibrateOn);

$(document).ready(function(){
    stop_watchlocation();
    initiate_watchlocation();
});


function initiate_watchlocation() {
    if (watchProcess === null) {
          var options = {timeout:60000, enableHighAccuracy:true};
          watchProcess = navigator.geolocation.watchPosition(handle_geolocation_query, handle_errors, options);
    }
}

function stop_watchlocation() {
    if (watchProcess !== null)
    {
        navigator.geolocation.clearWatch(watchProcess);
        watchProcess = null;
    }
}

function handle_errors(error){
            switch(error.code){

                case error.PERMISSION_DENIED: alert("user did not share geolocation data");
                break;

                case error.POSITION_UNAVAILABLE: alert("could not detect current position");
                break;

                case error.TIMEOUT: alert("retrieving position timedout");
                break;

                default: alert("unknown error");
                break;

            }

        }

function handle_geolocation_query(position){
  console.log(position);
    myLat = position.coords.latitude;
    myLong = position.coords.longitude;
    console.log('Lat: ' + position.coords.latitude +
    ' Lon: ' + position.coords.longitude);
    if (Math.abs(myLat - end_lat) < 0.0055 && Math.abs(myLong - end_long) < 0.0055){
      if (vibrateOn == "true"){
        navigator.vibrate(50000);
      }
    }
}
