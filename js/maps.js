function initMap() {
        var c = {lat: 0, lng: 180};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 5,
          center: c
        });
        var marker = new google.maps.Marker({
          position: c,
          map: map
        });
      }