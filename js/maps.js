function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 2,
          center: {lat: 0, lng: 180}
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
        var LatLng2= {lat:10.920217, lng: -83.682587};
        var central_america = new new google.maps.Marker({
          position: LatLng2,
          map: map
        });
        central_america.addListener('click', function() {
          window.open('./centralamerica.html');
          console.log("TEST");
        });
      }