/* Check API status and update status marker in the header */
/* Script that listen for changes on each INPUT checkbox tag */
  const url = 'http://0.0.0.0:5001/api/v1/status/';
  $.get(url, function (data) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
});

$('document').ready(function () {
   const amen_variable = {};
   $('INPUT[type="checkbox"]').click(function () {
     if ($(this).prop('checked')) {
       amen_variable[$(this).attr('data-id')] = $(this).attr('data-name');
     } else {
       delete amen_variable[$(this).attr('data-id')];
     }
     $('.amenities h4').text(Object.values(amen_variable).join(', '));
   });
});

/*
    Retrieve all places and create a articule tag with them
  */
  const getPlaces = function () {
    $.ajax({
      type: 'POST',
      contentType: 'application/json',
      url: 'http://localhost:5001/api/v1/places_search/',
      data: '{}',
      dataType: 'json',
      success: function (places) {
        $.each(places, function (index, place) {
          $('.places').append(
            '<article>' +
              '<div class="title_box">' +
              '<h2>' + place.name + '</h2>' +
              '<div class="price_by_night">' + place.price_by_night +
              '</div>' +
              '</div>' +
              '<div class="information">' +
              '<div class="max_guest">' +
              '<br />' + place.max_guest + ' Guests' +
              '</div>' +
              '<div class="number_rooms">' +
              '<br />' + place.number_rooms + ' Bedrooms' +
              '</div>' +
              '<div class="number_bathrooms">' +
              '<br />' + place.number_bathrooms + ' Bathroom' +
              '</div>' +
              '</div>' +
              '<div class="description">' + place.description +
              '</div>' +
              '</article>');
        });
      }
    });
  };
  getPlaces();
});
