// import Swiper from 'swiper/swiper-bundle.min';
// import Swiper, { Navigation, Pagination } from 'swiper';   
import Swiper, { Navigation, Pagination, Autoplay, EffectFade, Keyboard, Thumbs , FreeMode} from 'swiper'; 

const slider = () => {
    // new Swiper(".slider__speedometer", {
    // modules: [Navigation, Pagination],
    // slidesPerView: 3, 
    // spaceBetween: 30,
    // centeredSlide: true, 
    // loop: true,
    // navigation: {
    //     nextEl: '.portfolio-section__next',
    //     prevEl: '.portfolio-section__prev',
    // },

    // });
    new Swiper('.slider__speedometer', {
        modules: [Autoplay, EffectFade, Keyboard],
        touchRatio: 2,
        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,
        // autoHeight: true,
    });
    // const workslider = new Swiper(".integration__slider--2", {
    //     spaceBetween: 10,
    //     slidesPerView: 1,
    //     freeMode: true,
    //     watchSlidesProgress: true,
    // pagination: {
    //     el: ".swiper-pagination",
    // },
    // navigation: {
    //     nextEl: ".integration__control-next.swiper-button-next",
    //     prevEl: ".integration__control-prev.swiper-button-prev",
    // },

    // autoplay: {
    //     delay: 3000,
    //     stopOnLastSlide: false,
    //     disableOnInteraction: false,
    // },
    // speed: 1000,
    // loop: true,
    // });
    const workSlider = new Swiper(".work-images-nav", {
        modules: [FreeMode],
        spaceBetween: 10,
        slidesPerView: 1,

        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {

            // 100: {
            //     slidesPerView: 1,
            // },
            // 576: {
            //     slidesPerView: 2,
            // },
            350: {
                slidesPerView: 2,
            },
            520: {
                slidesPerView: 3,
            },
            700: {
                slidesPerView: 4,
            },
            870: {
                slidesPerView: 5,
            },
            1130: {
                slidesPerView: 6,
            },

            // 640: {
            //   slidesPerView: 4,
            //   spaceBetween: 40
            // }
        }
    });
    const workSliderNav = new Swiper(".work-images-slider", {
        modules: [Pagination, Navigation, Thumbs],
        spaceBetween: 10,
        slidesPerView: 1,
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".integration__control-next.swiper-button-next",
            prevEl: ".integration__control-prev.swiper-button-prev",
        },
        thumbs: {
            swiper: workSlider,
        },
    });

    // new Swiper(".integration__slider", {
    //     // spaceBetween: 10,
    //     slidesPerView: 1,
    //     thumbs: {
    //         swiper: workslider,
    //       },
    //     // thumbs: {
    //     //     swiper: swiper,
    //     // },
    //     // autoplay: {
    //     //     delay: 3000,
    //     //     stopOnLastSlide: false,
    //     //     disableOnInteraction: false,
    //     // },
    //     // speed: 1000,
    //     // loop: true,
    // });

    // new Swiper(".command__slider", {
    //     watchSlidesProgress: true,
    //     slidesPerView: 4,
    //     navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev",
    //     },
    //     breakpoints: {

    //         100: {
    //             slidesPerView: 1,
    //         },
    //         576: {
    //             slidesPerView: 2,
    //         },
    //         992: {
    //             slidesPerView: 3,
    //         },
    //         1240: {
    //             slidesPerView: 4,
    //         },

    //         // 640: {
    //         //   slidesPerView: 4,
    //         //   spaceBetween: 40
    //         // }
    //     }
    // });
    // new Swiper(".case__slider", {
    //     pagination: {
    //         el: ".swiper-pagination",
    //         type: "fraction",
    //     },
    //     navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev",
    //     },
    // });
    // new Swiper(".command__slider", {
    //     watchSlidesProgress: true,
    //     slidesPerView: 4,
    //     navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev",
    //     },
    //     breakpoints: {

    //         100: {
    //             slidesPerView: 1,
    //         },
    //         576: {
    //             slidesPerView: 2,
    //         },
    //         992: {
    //             slidesPerView: 3,
    //         },
    //         1240: {
    //             slidesPerView: 4,
    //         },

    //         // 640: {
    //         //   slidesPerView: 4,
    //         //   spaceBetween: 40
    //         // }
    //     }
    // });
}

export default slider;