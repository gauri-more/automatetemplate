$(document).ready(function () {
    jQuery("#carousel").owlCarousel({
        autoplay: true,
        rewind: true,
        margin: 20,
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav:false
            },

            600: {
                items: 1
            },

            1024: {
                items: 1
            },

            1366: {
                items: 1
            }
        }
    });
    jQuery("#carousel-review").owlCarousel({
        autoplay:false,
        rewind: true,
        margin: 20,
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: false
            },


            600: {
                items: 1
            },

            1024: {
                items: 1
            },

            1366: {
                items: 1
            }
        }
    });
    jQuery("#service-carousel").owlCarousel({
        autoplay: false,
        rewind: true,
        margin: 20,
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 4000,
        smartSpeed: 800,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },

            600: {
                items: 1
            },

            1024: {
                items: 2
            },

            1366: {
                items: 3
            }
        }
    });
    jQuery("#team-carousel").owlCarousel({
        autoplay: false,
        rewind: true,
        margin: 20,
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 4000,
        smartSpeed: 800,
     
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav:false
            },

            600: {
                items: 1,
                   nav: true
            },

            1024: {
                items: 2,
                   nav: true
            },

            1366: {
                items: 3,
                   nav: true
            }
        }
    });
    jQuery("#clients-carousel").owlCarousel({
        autoplay: false,
        rewind: true,
        margin: 20,
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 4000,
        smartSpeed: 800,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
                margin: 30,
            },

            600: {
                items: 1,
                margin: 30,
            },

            1024: {
                items: 2
            },

            1366: {
                items: 3
            }
        }
    });
})