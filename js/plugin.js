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