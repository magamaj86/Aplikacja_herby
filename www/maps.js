var polandMap; // obiekt globalny

function startGoogleMaps() {
    var mapOption = {
        zoom: 5,
        center: new google.maps.LatLng(52.01930607460169, 18.810742187499983),
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        disableDefaultUI: true,
    };
    polandMap = new google.maps.Map(document.getElementById("googleMaps"), mapOption);

    addPolandLine(); // funkcja do obramowki
    addGoogleResize();// do skalowania mapy

    addMarker(53.4193, 14.5816, 'Dymek otworzony na markerze');// marker z dymkiem
    addMarker(50.06465, 19.94498, 'Miasto Kraków');
    addMarker(51.107885, 17.038538, 'Miasto Wrocław');
    addMarker(50.675107, 17.921298, 'Miasto Opole');
    addMarker(50.264892, 19.023782, 'Miasto Katowice');
    addMarker(50.041187, 21.99912, 'Miasto Rzeszów');
    addMarker(51.246454, 22.568446, 'Miasto Lublin');
    addMarker(50.866077, 20.628568, 'Miasto Kielce');
    addMarker(51.759249, 19.455983, 'Miasto Łódź');
    addMarker(52.406374, 16.925168, 'Miasto Poznań');
    addMarker(51.935621, 15.506186, 'Miasto Zielona Góra');
    addMarker(53.428544, 14.552812, 'Miasto Szczecin');
    addMarker(53.01379, 18.598444, 'Miasto Toruń');
    addMarker(52.229676, 21.012229, 'Miasto Warszawa');
    addMarker(53.132489, 23.16884, 'Miasto Białystok');
    addMarker(53.778422, 20.480119, 'Miasto Olsztyn');
    addMarker(54.352025, 18.646638, 'Miasto Gdańsk');
    addStateLine(); // obramowka wojewodztwa
 }

function addPolandLine() {
    new google.maps.Polygon({
        map: polandMap,
        paths: [polandPoint], // w osobnym pliku point
        strokeColor: '#ff0000',
        strokeWeight: 4,
        strokeOpacity: 0.7,
        fillColor: '#ff0000',
        fillOpacity: 0.2
    });
}
function addStateLine() { //wojewodztwa
    new geoXML3.parser({map: polandMap}).parse('state.kml');
}

function addMarker(lat, lng, txt) {
    // tworzymy marker
    var markerOption =
        {
            position: new google.maps.LatLng(lat, lng),
            map: polandMap
        }
    var marker = new google.maps.Marker(markerOption);

    var markerText = new google.maps.InfoWindow();// dymek do markera
    markerText.setContent(txt);

    google.maps.event.addListener(marker, "click", function () {
        markerText.open(polandMap, marker);// wywolanie markera
    });
    return marker;
}

function  addGoogleResize() {
    // Resize stuff...
    google.maps.event.addDomListener(window, "resize", function () {
        var center = polandMap.getCenter();
        google.maps.event.trigger(polandMap, "resize");
        polandMap.setCenter(center);
    });
}



