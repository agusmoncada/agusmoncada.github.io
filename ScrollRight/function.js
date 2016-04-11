
$(document).ready(function(){

  var $titleScroll = $('.titleScroll');
  var $window = $(window);
  var $paragraph = $('.paraScrollText');
  var $whiteWork = $('.whiteWork');
  var $workScroll = $('.workScroll');
  var $workContainer = $('.workContainer');




  $window.on('scroll', function() {
    var scrolledTop = $window.scrollTop() * 4;
    var opacity = -($window.scrollTop() - 350) / $window.scrollTop();
    var opacity2 = opacity - 0.65;
    var opacity3 = -($window.scrollTop() - 4300) / $window.scrollTop();
    var scrollWork = scrolledTop - 8000;

    if ($window.scrollTop() > -1) {
      $titleScroll.css({'transform': 'translate(-' + scrolledTop + 'px, 0px)', 'opacity': opacity});

      $paragraph.css({'opacity': -opacity2});
  }

    console.log($window.scrollTop());


    if (scrolledTop >= 8400) {
      $whiteWork.addClass('in-view');
      $workScroll.css({'opacity': opacity3});
      $workContainer.css({'transform': 'translate(-' + scrollWork + 'px, 0px)'});
    } else {
      $whiteWork.removeClass('in-view');
    }

  });



});
