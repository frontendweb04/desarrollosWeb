function initMap() {
  var uluru = {lat: 4.5308328, lng: -76.1071456};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru
  });

  var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Union Motel</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Union Motel</b>, <b>Direccion:</b> Cra 19 N 11-32' +
    '</div>'+
    '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      }