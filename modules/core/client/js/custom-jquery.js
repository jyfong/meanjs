
$(document).ready(function(){





  $( function() {
    // $( ".drag-slider" ).slider();
  } );


$('.summernote').summernote();











$('.button-go-back').click(function(){

$('.flow1').toggle();

$('.flow2').toggle();

$('.button-go-back').hide();

});





$('.select-offer-link').click(function(){

$('.flow1').toggle();

$('.flow2').toggle();



$('.button-go-back').show();

});


$('.connectsubmit').click(function(){

$('.loader').fadeIn();

setTimeout(function(){

$('.close').click();

$('.loader').hide();

$('.flow2').toggle();

$('.flow1').toggle();

$('.button-go-back').hide();

}, 3000);


});




  $(function() {
       $('#exitpop-on-off').change(function(){
            $('.exitpop-on-off-option').hide();
            $('.' + $(this).val()).show();
        });
            });


  $(function() {
       $('#exitsplash-on-off').change(function(){
            $('.exitsplash-on-off-option').hide();
            $('.' + $(this).val()).show();
        });
            });


 $(function() {
       $('#input-show-hide').change(function(){
            $('.input-show-hide-option').hide();
            $('.' + $(this).val()).show();
        });
            });


 $(function() {
       $('#button-show-hide').change(function(){
            $('.button-show-hide-option').hide();
            $('.' + $(this).val()).show();
        });
            });

 $(function() {
       $('#buttontype-show-hide').change(function(){
            $('.buttontype-option').hide();
            $('.' + $(this).val()).show();
        });
            });

$(function() {
       $('#ecover-show-hide').change(function(){
            $('.ecover-show-hide-option').hide();
            $('.' + $(this).val()).show();
        });
            });

$(function() {
       $('#form-redirect').change(function(){
            $('.form-redirect-option').hide();
            $('.' + $(this).val()).show();
        });
            });






});