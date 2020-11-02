/* hide dismissable banner */
$(document).ready(function(){
  $('.close-this').click(function(){
    $('.hero-dismissable').hide();
  });
    
$('.open-mobile-filters').click(function(){
    $('.filters').addClass('d-block')
});
    
$('.close-mobile-filters').click(function(){
    $('.filters').removeClass('d-block')
});
  
    
});
