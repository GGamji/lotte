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
})

$('.event-swiper button').click(function() {
	const imgSrc = $(this).find('.img_box img').attr('src')
	const txt1 = $(this).find('.txt_box strong').text()
	const txt2 = $(this).find('.txt_box span:first-of-type').text()
	const txt3 = $(this).find('.txt_box span:last-of-type').text()
	$('.event_main_content').find('img').attr('src', imgSrc)
	$('.event_main_content').find('.event_main_txt strong').text(txt1)
	$('.event_main_content').find('.event_main_txt span:first-of-type').text(txt2)
	$('.event_main_content').find('.event_main_txt span:last-of-type').text(txt3)
})

// const $simg = document.querySelectorAll('.event_content img')
// for(simg of $simg) {
// 	simg.addEventListener('click', function() {
// 		let img = this.src
// 		document.querySelector('.event_main_content img').src = img
// 		console.log(.childNodes[0].text);
// 	})
// }



// Footer
$('footer .footer_familysite').click(function() {
	$('footer .familysite_content').toggle()
})