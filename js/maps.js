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

        // Chile and Argentina
        //var LatLng3= {l}

        //Europe
        var LatLng4= {lat:51.442435, lng:4.927775};
        var europe = new google.maps.Marker({
          position: LatLng4,
          map: map
        });
        europe.addListener('click', function() {
          window.open('./europe.html');
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
      }