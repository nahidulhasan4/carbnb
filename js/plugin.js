new Swiper(".brand-swiper", {
	spaceBetween: 43,
	slidesPerView: 8,
	loop: true,
	speed: 1000,

	navigation: {
		nextEl: ".btn-next1",
		prevEl: ".btn-prev1",
	},

	breakpoints: {
		320: {
			slidesPerView: 2,
		},
		375: {
			slidesPerView: 3,
			spaceBetween: 14,
		},
		640: {
			slidesPerView: 4.5,
		},

		1024: {
			slidesPerView: 6,
		},
		1260: {
			slidesPerView: 8,
			spaceBetween: 43,
		},
	},
});

new Swiper(".offer-swiper", {
	spaceBetween: 24,
	slidesPerView: 3,
	loop: true,
	speed: 1000,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: ".btn-next2",
		prevEl: ".btn-prev2",
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		425: {
			slidesPerView: 1.5,
		},
		640: {
			slidesPerView: 2,
		},

		1024: {
			slidesPerView: 2.5,
		},
		1200: {
			slidesPerView: 3,
		},
	},
});