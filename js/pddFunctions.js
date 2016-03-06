

//boton derecho abajo para ir hacia arriba
$(document).ready(function(){

	$('.home').scroll(function(){
		if ($(this).scrollTop() > 1500) {
			$('.scrollToTop').addClass( 'fadein' );
		} else {
			$('.scrollToTop').removeClass( 'fadein' );
		}
	});

	$('.scrollToTop').click(function(){
		$('body, .home').animate({scrollTop : 0},700);
		return false;
	});

});

//autoscroll
$(document).ready(function(){

  $('.head--link').click(function(e){

    var linkHrer = $(this).attr('href');

    $('html, body, .home').animate({
      scrollTop: $(linkHrer).offset().top
    }, 1000);

    e.preventDefault();
  });
});

//Aparece el boton cuando muevo el mouse sobre el video
$(document).ready(function(){

	var $btn = $('.btn');
	var $videoC = $('.video');

	$videoC.on('mouseenter', function(){
		$('.btn').addClass('showBttn');
	});

	$videoC.on('mouseout', function(){
		$('.btn').removeClass('showBttn');
	});

	$btn.on('mouseenter', function(){
		$('.btn').addClass('showBttn');
	});

});

//Reproducir y parar video + cambiar el icono
$(document).ready(function(){

	var $btn = $('.btn');
	var vidFunc = $('.vidFunc').get(0);

	$btn.on('click', function(){

		if (vidFunc.paused) {
			vidFunc.play();
			$('.btn').addClass('pause');
		} else {
			vidFunc.pause();
			$('.btn').removeClass('pause');
		}

	});

});
