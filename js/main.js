$(window).scroll(function() {
	if($(window).scrollTop() >= 10) {
		$('header').addClass('scroll')
	}
	else {
		$('header').removeClass('scroll')
	}
})



// Header
$('#gnb .dep1').hover(function() {
	$('#gnb .dep2_wrap').stop().slideDown()
	$('header').addClass('on')
	// $('.dep2_wrap').addClass('bg')
}, function() {
	$('#gnb .dep2_wrap').stop().slideUp();
	$('header').removeClass('on')
	// $('.dep2_wrap').removeClass('bg')
});
// $('#gnb .dep1').mouseleave()


// Main
const visualSwiper = new Swiper('.visual_swiper', {
	loop: true,
	autoplay: {
		delay: 6000,
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



const promotionSwiper = new Swiper('.promotion_swiper', {
	navigation: {
		nextEl: '.p-swiper-next',
		prevEl: '.p-swiper-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	slidesPerView: 4,
	spaceBetween: 30,
})  //이거땜에 카드가 늘어남 고민을 해야 됨




// Footer
$('footer .footer_familysite').click(function() {
	$('footer .familysite_content').toggle()
})