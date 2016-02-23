$(document).ready(function(){

	$('.home').scroll(function(){
		if ($(this).scrollTop() > 1430) {
			$('.scrollToTop').addClass( 'fadein' );
		} else {
			$('.scrollToTop').removeClass( 'fadein' );
		}
	});

	$('.scrollToTop').click(function(){
		$('html, body, .home').animate({scrollTop : 0},700);
		return false;
	});

});

$(document).ready(function(){

  $('.head--link').click(function(e){

    var linkHrer = $(this).attr('href');

    $('html, body, .home').animate({
      scrollTop: $(linkHrer).offset().top
    }, 1000);

    e.preventDefault();
  });
});
