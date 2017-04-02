var polandMap; // obiekt globalny

function startGoogleMaps() {
    var mapOption = {
        zoom: 5,
        center: new google.maps.LatLng(52.01930607460169, 18.810742187499983),
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        disableDefaultUI: true,
    };
    polandMap = new google.maps.Map(document.getElementById("googleMaps"), mapOption);

    addPolandLine(); //funkcja do obramowki
    addGoogleResize();// do skalowania mapy

    addMarker(53.4193, 14.5816, 'Dymek otworzony na markerze');// markera z dymkiem
    addMarker(50.06465, 19.94498, 'Miasto Kraków');
    addMarker(51.107885 , 17.038538, 'Miasto Wrocław');
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



