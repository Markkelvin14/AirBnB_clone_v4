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
