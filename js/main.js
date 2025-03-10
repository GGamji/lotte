$(window).scroll(function() {
	if($(window).scrollTop() >= 10) {
		$('header').addClass('on')
	}
	else {
		$('header').removeClass('on')
	}
})



// Header
$('header').hover(function() {
	$('#gnb .dep2_wrap').stop().slideDown()
	$('header').addClass('on')
}, function() {
	$('#gnb .dep2_wrap').stop().slideUp();
	$('header').removeClass('on')
});


// Main
const visualSwiper = new Swiper('.visual_swiper', {
	loop: true,
	autoplay: {
		delay: 5000,
	},
	navigation: {
		nextEl: '.swiper-next',
		prevEl: '.swiper-prev',
	}
})
$('.auto-stop').click(function() {
	$(this).hide();
	$('.auto-play').show();
	visualSwiper.autoplay.stop();
});
$('.auto-play').click(function() {
	$(this).hide();
	$('.auto-stop').show();
	visualSwiper.autoplay.start();
})

const eventSwiper = new Swiper('.event-swiper', {
	loop:true,
	navigation: {
		nextEl: '.swiper-event-next',
		prevEl: '.swiper-event-prev'
	},
	pagination: {
		el: '.event-pagination',
		clickable: true,
	}
})


const promotionSwiper = new Swiper('.promotion_swiper', {
	loop:true,
	navigation: {
		nextEl: '.swiper-promotion-next',
		prevEl: '.swiper-promotion-prev',
	},
	pagination: {
		el: '.promotion-pagination',
		clickable: true,
	},
	slidesPerView: 4,
	spaceBetween: 30,
})

$('.event-swiper button').click(function() {
	const imgSrc = $(this).find('.img_box img').attr('src')
	const txt1 = $(this).find('.txt_box strong').text()
	const txt2 = $(this).find('.txt_box span:first-of-type').text()
	const txt3 = $(this).find('.txt_box span:last-of-type').text()
	const txt4 = $(this).find('.txt_box .skyhill').text()

	$(this).find('.skyhill_box').css({'background' : '#da291c'})
	$('.skyhill_box').not($(this).find('.skyhill_box')).css({'background' : '#888'})

	$(this).find('.img_bg').fadeIn()
	$('.event_content .img_bg').not($(this).find('.img_bg')).fadeOut()

	$('.event_main_content').find('img').attr('src', imgSrc)
	$('.event_main_content').find('.event_main_txt strong').text(txt1)
	$('.event_main_content').find('.event_main_txt>span:first-of-type').text(txt2)
	$('.event_main_content').find('.event_main_txt>span:last-of-type').text(txt3)
	$('.event_main_content').find('.event_main_txt .main_skyhill').text(txt4)
})


// Footer
$('footer .footer_familysite').click(function() {
	$('footer .familysite_content').toggle()
})