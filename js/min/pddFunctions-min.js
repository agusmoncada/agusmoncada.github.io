$(document).ready(function(){$(".home").scroll(function(){$(this).scrollTop()>1530?$(".scrollToTop").addClass("fadein"):$(".scrollToTop").removeClass("fadein")}),$(".scrollToTop").click(function(){return $("html, body, .home").animate({scrollTop:0},800),!1})}),$(document).ready(function(){$(".head--link").click(function(o){var l=$(this).attr("href");$("html, body, .home").animate({scrollTop:$(l).offset().top},1100),o.preventDefault()})});