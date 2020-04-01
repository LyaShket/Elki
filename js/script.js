"use strict";

// burger
$(window).on("load resize", function(){
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

/*
// inputmask
$(document).ready(function(){
	$(".request__input-tel,.consult__input-tel,.popup__input-tel").inputmask({"mask": "+7 (999) 999-99-99"})
});

// ajax
$(document).ready(function () {
	$(".request__form,.consult__form,.popup__form").submit(function () {
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
	$.fancybox.close($("#popup-back-call,#popup-fast-back-call"));
	$.fancybox.open($("#popup-thanks"));
	return false;
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
		item.css("background-size", "cover");
		child.remove();
	}
});

// sliders
$(document).ready(function(){
    $('.places__slider').slick({
        slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		variableWidth: true,
		centerPadding: '0',
	});
	$('.travel__slider').slick({
		sslidesToShow: 5,
		slidesToScroll: 1,
		centerMode: true,
		variableWidth: true,
		centerPadding: '0',
	});
	$('.reviews__slider').slick({
		sslidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		centerPadding: '0',
	});
});

//videoplayer
$(".list__item").click(function(){
	let video = $(this).attr("data-video");
	let poster = $(this).attr("data-poster");
	let title = $(this).find(".list__title").text();
	let time = $(this).find(".list__time").text();
	$(".list__video").attr("src", "videos/" + video);
	$(".list__video").attr("poster", "images/videos/" + poster);
	$(".list__panel-title").text(title);
	$(".list__panel-time").text(time);
	if ($(this) != $(".list__item.active")) {
		$('.list__video').removeAttr("controls", "controls");
		$(".list__panel").removeClass("hidden");
	}
	$(".list__item.active").removeClass("active");
	$(this).addClass("active");
});
$(".list__left").click(function(){
	if ($(".list__panel").attr("class").search("hidden") == -1) {
		$(".list__panel").addClass("hidden");
		$('.list__video').attr("controls", "controls");
		let videoplayer = $('.list__video').get(0);
		videoplayer.paused ? videoplayer.play() : videoplayer.pause();
	}
});

//anchors
$(document).ready(function(){
    $(".nav-menu a[href^=#]").on("click", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top - 60}, 1500);
	});
	$(".menu-burg__box a[href^=#]").on("click", function (event) {
		event.preventDefault();
		let id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('.menu-burg__box,.menu-burg__button').removeClass('active');
		$('body').removeClass('lock');
		$('body,html').animate({scrollTop: top - 80}, 1500);
	})
});
*/