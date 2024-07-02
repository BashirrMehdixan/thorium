const bannerSwiper = new Swiper('.bannerSwiper', {
    loop: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: 'true',
        type: 'bullets',
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '<i class="progress-bar-bg"></i>' + '<b class="progress-bar-cover"></b>' + '</span>';
        },
    },
});

const servicesSwiper = new Swiper(".servicesSwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 5000,
    },
    loop: true,

});

const partnersSwiper = new Swiper(".partnersSwiper", {
    slidesPerView: 1,
    spaceBetween: 90,
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    },
    loop: true,
    autoplay: {
        delay: 3000,
    },
});

const similiarSwiper = new Swiper(".similiarSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    }
});

const detailThumb = new Swiper(".detailThumb", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
const detailSwiper = new Swiper(".detailSwiper", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    thumbs: {
        swiper: detailThumb,
    },
});

const thumbSwiper = document.querySelector('.detailThumb');
if (thumbSwiper) {
    // Add hover event to thumbnail images
    thumbSwiper.addEventListener('mouseover', (event) => {
        if (event.target.tagName === 'IMG') {
            const src = event.target.src;
            const slides = detailSwiper.slides;
            slides.forEach((slide, index) => {
                const img = slide.querySelector('img');
                if (img.src === src) {
                    detailSwiper.slideToLoop(index);
                }
            });
        }
    });
}