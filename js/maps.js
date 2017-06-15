function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 2,
          center: {lat: 30, lng: 0}
        });
        // north america
        var LatLng1 = {lat: 48.9914939, lng: -123.0563069};
        var north_america = new google.maps.Marker({
          position: LatLng1,
          map: map
        });

        north_america.addListener('click', function() {
          window.open('./northamerica.html');
        });

        // central america
        var LatLng2 = {lat: 10.920217, lng: -83.682587};
        var central_america = new google.maps.Marker({
          position: LatLng2,
          map: map
        });
        central_america.addListener('click', function() {
          window.open('./centralamerica.html');
        });

        // South America
        var LatLng3= {lat:22.761708, lng:88.914138};
        var south_america = new google.maps.Marker({
          position: LatLng3,
          map: map
        });
        south_america.addListener('click', function() {
          window.open('./southamerica.html');
        });

        //Europe
        var LatLng4= {lat:51.442435, lng:4.927775};
        var europe = new google.maps.Marker({
          position: LatLng4,
          map: map
        });
        europe.addListener('click', function() {
          window.open('./europe.html');
        });

        //Central Asia & Russia
        var LatLng5= {lat:40.087562, lng:71.048873};
        var central_asia = new google.maps.Marker({
          position: LatLng5,
          map: map
        });
        central_asia.addListener('click', function() {
          window.open('./centralasia.html');
        });

        //Middle East
        var LatLng6= {lat:25.267471, lng:56.279532};
        var middle_east = new google.maps.Marker({
          position: LatLng6,
          map: map
        });
        middle_east.addListener('click', function() {
          window.open('./middleeast.html');
        });

        //Africa  
        var LatLng7= {lat:21.879537, lng:33.610065};
        var africa = new google.maps.Marker({
          position: LatLng7,
          map: map
        });
        africa.addListener('click', function() {
          window.open('./africa.html');
        });

        // South Asia
        var LatLng8= {lat:22.761708, lng:88.914138};
        var south_asia = new google.maps.Marker({
          position: LatLng8,
          map: map
        });
        south_asia.addListener('click', function() {
          window.open('./southasia.html');
        });

        // East Asia - Taipei
        var LatLng9= {lat:24.994560, lng:121.551646};
        var east_asia = new google.maps.Marker({
          position: LatLng9,
          map: map
        });
        east_asia.addListener('click', function() {
          window.open('./eastasia.html');
        });

        //SouthEast Asia - Brunei
        var LatLng10= {lat:4.853054, lng:115.018474};
        var southeast_asia = new google.maps.Marker({
          position: LatLng10,
          map: map
        });
        southeast_asia.addListener('click', function() {
          window.open('./southeastasia.html');
        });

        //Australia
        var LatLng11= {lat:-10.595129, lng:127.545684};
        var austral = new google.maps.Marker({
          position: LatLng11,
          map: map
        });
        austral.addListener('click', function() {
          window.open('./austral.html');
        });

        //Antarctica
        var LatLng12= {lat:-76.043630, lng:42.478013};
        var antarctica = new google.maps.Marker({
          position: LatLng12,
          map: map
        });
        antarctica.addListener('click', function() {
          window.open('./antarctica.html');
        });



      }