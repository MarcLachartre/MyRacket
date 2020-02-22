//$(function() {
  //$('.search-form input[type=submit]').remove();
  //$('.search-form input[type=checkbox]').hide();
  //$('.search-form input[type=checkbox]').click(function(){
  //$(this).parent('form').submit();
  //});
//});

//function searchform() {
$(document).ready(function(e){
    $('.search-button').remove();
    $('.search-bar').on('click','.search-form input[type=checkbox]',function(){
      //if ($('.search-form input[type=checkbox]').is(':checked')) {

        $('.search-form').submit();

        $('.racket-container').fadeOut(300);
        $('.search-button').remove();

      //}
      //else if ($(this).not(':checked')) {
        //$('.search-form input[type=checkbox]').parents('.search-form').submit();
        console.log('search js checkbox unchecked');
      //};
    });
  });

$(document).ready(function(a){
  $('.racket-container').on('change','.racket-checkbox', function(){
//      if ($(this).is(':checked')) {
        $('.select-racket').submit();

//      }
      //else if ($(this).not(':checked')) {
       // $(this).parents('.search-form').submit();
        //console.log('search js checkbox NOT checked');
      //};
    });

})
  //$(document).ready(function(){
//$('racket-checkbox').click(function(){
  //    if ($(this).is(':checked')) {
    //    $('.search-form').submit();
      //  console.log('search js checkbox checked');
      //}
      //else if ($(this).not(':checked')) {
       // $('.search-form').submit();
        //console.log('search js checkbox NOT checked');
      //};
    //});

    //});

