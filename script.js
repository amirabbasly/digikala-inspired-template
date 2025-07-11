$(document).ready(() => {
    $(".menu > li").on("mouseover", (event) => {
        let right = 15;
        let width = 0;
        let that = event.target
        $(".menu > li:not(.hover)").each((index, item) => {
            if(that == item) {
                width = $(item).css("width");
                return false;
            }
            else right += parseInt($(item).css("width"), 10);
        });
        $(".menu > li.hover").css({
            right: right,
            width: width,
            transform: "scaleX(1)"
        });
    });
    $(".menu > li").on("mouseout", () => {
        $(".menu > li.hover").css("transform", "scaleX(0)")
    })
    new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        scrollbar: {el: '.swiper-scrollbar'},
        autoplay: {delay: 2000 }
    })
    new Swiper ('.swiper-special-part', {
        slidesPerView:4,
        direction: 'horizontal',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        autoplay: {delay: 2000 }
    })
    new Swiper ('.swiper-body-part', {
        slidesPerView:6,
        direction: 'horizontal',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        autoplay: {delay: 2000 }
    })
});