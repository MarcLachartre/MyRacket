
$( document ).on('turbolinks:load', function() {
//-----------card clickable and redirecting to racket/:id-----------------------
  $(document).ready(function(){
    $('.racket-container').on('click', '.card-clickable', function() {
      window.location = $(this).find('.see-more-link').attr('href');
    });
  });
//------------------------------------------------------------------------------

//----------------------compare button and update-------------------------------

//------------------------------------------------------------------------------
});




//$(function () {
  //$('.select-racket-form input[type=submit]').remove();
  //$('.select-racket-form input[type=checkbox]').click(function(){
    //if ($(this).is(':checked')) {
      //$(this).parents('form').submit();

      //console.log('select racket checked')
      //}
      //else if ($(this).not(':checked')) {
        //$(this).parents('form').submit();

        //console.log('select racket unchecked')
      //}
  //});
  //$('.racket-link').hide();
  //$(".card-item-description").click(function(){
    //window.location = $(this).find("a").attr("href");
    //return false;
  //});
//});

