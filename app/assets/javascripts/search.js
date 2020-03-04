//$(function() {
  //$('.search-form input[type=submit]').remove();
  //$('.search-form input[type=checkbox]').hide();
  //$('.search-form input[type=checkbox]').click(function(){
  //$(this).parent('form').submit();
  //});
//});

$( document ).on('turbolinks:load', function() {


//function searchform() {
$(document).ready(function(e){
  $('.search-button').remove();
  $('.search-bar').on('click','.search-form input[type=checkbox]',function(){
    $('.search-form').submit();
    $('.racket-container').fadeOut(100);
    $('.search-button').remove();
  });
});

$(document).ready(function(a){
  $('.racket-container').on('change','.racket-checkbox', function(){
    $('.select-racket').submit();
    $('.search-button').remove();
  });
})

$(document).ready(function(c){
  $('.racket-comparator').on('click','.remove-button', function(){
    $('.select-racket').submit();
    $('.search-button').remove();
  });
});
})


//$(document).ready(function(){
  //$('.racket-card').click(function(k){
    //$('<%= dom_id(racket) %>').prop('checked', true);
    //$('.dom_id(racket)').prop('checked', true);
    //$('.select-racket').submit();
    //$('.search-button').remove();
  //});
//});


//$(document).ready(function(){
//  $( '.see-more-link' )
//    .on('mouseover', function() {
//      $('.see-more-link')
//        .toggleClass( ".active")

          //alert($('.racket-card').find('.racket-link').children())
//    });
//  })
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

