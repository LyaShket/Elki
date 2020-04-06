"use strict";

// burger
$(window).on("ready, load resize", function(){
	if ($(window).width() < 768){
		if (document.querySelector(".menu-burg__button.active"))
			$('.menu-burg__box,.menu-burg__button').addClass('active');
			$('body').add('lock');
	} else {
		if (document.querySelector(".menu-burg__button.active"))
			$('.menu-burg__box,.menu-burg__button').removeClass('active');
			$('body').removeClass('lock');
  }

});
$(document).ready(function(){
	$('.menu-burg__button').click(function(event) {
		$('.menu-burg__button,.menu-burg__box').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

// ibg
$(document).ready(function(){
	let ibg = document.getElementsByClassName("ibg");
	for (let i = 0; i < ibg.length; i++) {
  		let item = $(ibg[i]);
  		let child = item.children("img");
		let link = child.attr("src");
		let background = item.css("background-image");
		item.css("background", `${background} 100% 100% no-repeat, url(${link}) 50% 50% no-repeat`);
		if (item.hasClass("ibg-contain")) {
			item.css("background-size", "contain");
		}
		else {
			item.css("background-size", "cover");
		}
		child.remove();
	}
});

// inputmask
$(document).ready(function(){
	$(".form__input-tel").inputmask({"mask": "+7|8 (999) 999-99-99"})
});

//anchors
$(document).ready(function(){
    $(".navbar__links a[href^=#]").on("click", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top - 54}, 1500);
	});
	$(".menu-burg__box a[href^=#]").on("click", function (event) {
		event.preventDefault();
		let id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('.menu-burg__box,.menu-burg__button').removeClass('active');
		$('body').removeClass('lock');
		$('body,html').animate({scrollTop: top}, 1500);
	})
});

// ajax
$(document).ready(function () {
	$(".form").submit(function () {
		$.ajax({
			type: "POST",
			url: 'feedback.php',
			data: $(this).serialize(),
			success: function (data) {
				// when success
			},
			error: function (jqXHR, text, error) {
				// when error
			}
		});
		$.fancybox.close($("#popup-back-call"));
		return false;
	});
});

// lazy load the google map
let features_top = $(".alive").offset().top;
$(window).bind("scroll", function(){
	let window_top = $(this).scrollTop();
	if (window_top > features_top) {
		$('.contacts__google-map').attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2247.5224062612792!2d37.64418411592901!3d55.71467298054321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b3a781691db%3A0xe722e2b1e5e8154e!2z0J_QsNCy0LXQu9C10YbQutCw0Y8g0L3QsNCxLiwgMiDRgdGC0YDQvtC10L3QuNC1IDUsINCc0L7RgdC60LLQsCwg0KDQvtGB0YHQuNGPLCAxMTUxMTQ!5e0!3m2!1sru!2sua!4v1585816432830!5m2!1sru!2sua");
		$(window).unbind("scroll");
	}
});