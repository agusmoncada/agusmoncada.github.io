$(document).ready(function(){$(".home").scroll(function(){$(this).scrollTop()>1430?$(".scrollToTop").addClass("fadein"):$(".scrollToTop").removeClass("fadein")}),$(".scrollToTop").click(function(){return $("body, .home").animate({scrollTop:0},700),!1})}),$(document).ready(function(){$(".head--link").click(function(o){var e=$(this).attr("href");$("html, body, .home").animate({scrollTop:$(e).offset().top},1e3),o.preventDefault()})});