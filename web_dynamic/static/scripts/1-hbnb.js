/* Script that listen for changes on each INPUT checkbox tag */
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
