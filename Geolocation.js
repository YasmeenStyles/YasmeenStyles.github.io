if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
}
else {
    alert("It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.");
}
function successFunction(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    console.log('Your latitude is :'+lat+' and longitude is '+long);
}


if('+lat'-'destlat')
