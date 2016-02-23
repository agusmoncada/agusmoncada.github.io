$(document).ready(function(){

  $('.head--link').click(function(e){

    var linkHrer = $(this).attr('href');

    $('html, body, .home').animate({
      scrollTop: $(linkHrer).offset().top
    }, 1000);

    e.preventDefault();
  });
});
