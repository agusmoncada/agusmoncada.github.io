
//scroll right logic, browser based, opacity logic.

$(document).ready(function(){

  var ua = navigator.userAgent.toLowerCase();
  var $titleScroll = $('.titleScroll');
  var $window = $(window);
  var $paragraph = $('.paraScrollText');
  var $whiteWork = $('.whiteWork');
  var $workScroll = $('.workScroll');
  var $workContainer = $('.workContainer');
  var $logo = $('.logo');
  var $socialMedia = $('.socialMedia');


  $window.on('scroll', function() {
    var scrolledTop = $window.scrollTop() * 4;
    var opacity = -($window.scrollTop() - 350) / $window.scrollTop();
    var opacity2 = opacity - 0.65;
    var opacity3 = -($window.scrollTop() - 4300) / $window.scrollTop();
    var scrollWork = scrolledTop - 8000;
    var bottomWindow = window.innerHeight + $window.scrollTop();
    var bottomWindowScroll = bottomWindow - 2100;

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

      if (bottomWindow >= 2100) {
        $logo.css({'transform': 'translate(0px, -' + bottomWindowScroll + 'px)'});
        $socialMedia.css({'transform': 'translate(0px, -' + bottomWindowScroll + 'px)'});
      } else {
        $logo.css({'transform': 'translate(0px, 0px)'});
        $socialMedia.css({'transform': 'translate(0px, 0px)'});
        $logo.addClass('stick');
        $socialMedia.addClass('stick');
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

      if (bottomWindow >= 2100) {
        $logo.css({'transform': 'translate3d(0px, -' + bottomWindowScroll + 'px, 0px)'});
        $socialMedia.css({'transform': 'translate3d(0px, -' + bottomWindowScroll + 'px, 0px)'});
      } else {
        $logo.css({'transform': 'translate3d(0px, 0px, 0px)'});
        $socialMedia.css({'transform': 'translate3d(0px, 0px, 0px)'});
        $logo.addClass('stick');
        $socialMedia.addClass('stick');
      }
    }

  });
});


//Chef if element is in view to fire animations
$(document).ready(function(){
  var $animation_elements = $('.animation-element');
  var $window = $(window);

  function chek_if_in_view() {
    //var window_height = $window.height();
    var window_height = window.innerHeight;
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_height + window_top_position);

    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.height();
      var element_top_positon = ($element.offset().top + 200);
      var element_bottom_position = (element_height + element_top_positon);

      if ((element_bottom_position >= window_top_position) && (element_top_positon <= window_bottom_position)) {
        $element.addClass('in-view');
      } else {
        $element.removeClass('in-view');
      }
    });
  }

  $window.on('scroll resize', chek_if_in_view);
});
