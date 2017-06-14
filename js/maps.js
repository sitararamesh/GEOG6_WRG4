function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 1,
          center: {lat: 0, lng: 180}
        });
        var LatLng1 = {lat: 48.9914939, lng: -123.0563069};
        var north_america = new google.maps.Marker({
          position: LatLng1,
          map: map
        });

        north_america.addListener('click', function() {
          window.open('./northamerica.html');
          console.log("JUNK");
        });
      }