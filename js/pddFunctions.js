$(document).ready(function(){

	$('.home').scroll(function(){
		if ($(this).scrollTop() > 1530) {
			$('.scrollToTop').addClass( 'fadein' );
		} else {
			$('.scrollToTop').removeClass( 'fadein' );
		}
	});

	$('.scrollToTop').click(function(){
		$('html, body, .home').animate({scrollTop : 0},800);
		return false;
	});

});

$(document).ready(function(){

  $('.head--link').click(function(e){

    var linkHrer = $(this).attr('href');

    $('html, body, .home').animate({
      scrollTop: $(linkHrer).offset().top
    }, 1100);

    e.preventDefault();
  });
});
