
$(document).ready(function(){

  var ua = navigator.userAgent.toLowerCase();
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

    if(ua.indexOf('applewebkit') >= 0 && ua.indexOf('chrome') < 0) {
      //with 2d transform for safari smooth scrolling
      if ($window.scrollTop() > -1) {
        $titleScroll.css({'transform': 'translate(-' + scrolledTop + 'px, 0px)', 'opacity': opacity});

        $paragraph.css({'opacity': -opacity2});
    }

      if (scrolledTop >= 8400) {
        $whiteWork.addClass('in-view');
        $workScroll.css({'opacity': opacity3});
        $workContainer.css({'transform': 'translate(-' + scrollWork + 'px, 0px)'});
      } else {
        $whiteWork.removeClass('in-view');
      }
      //with 3d transform for other browsers smooth scrolling
    } else {
      if ($window.scrollTop() > -1) {
        $titleScroll.css({'transform': 'translate3d(-' + scrolledTop + 'px, 0px, 0px)', 'opacity': opacity});

        $paragraph.css({'opacity': -opacity2});
    }

      if (scrolledTop >= 8400) {
        $whiteWork.addClass('in-view');
        $workScroll.css({'opacity': opacity3});
        $workContainer.css({'transform': 'translate3d(-' + scrollWork + 'px, 0px, 0px)'});
      } else {
        $whiteWork.removeClass('in-view');
      }
    }

  });
});
