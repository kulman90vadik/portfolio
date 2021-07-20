$(function(){

    $('.header__btn').on('click', function(){
        $('.menu').toggleClass('menu--active');
        $('.header__btn-item').toggleClass('header__btn-item--active');
    });

    VANTA.NET({
        el: ".home-page",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x2d88e3,
        backgroundColor: 0xc1622,
        points: 8.00,
        maxDistance: 18.00,
        spacing: 11.00
    });

    const anim = ['html', 'css', 'js', 'sass', 'gulp', 'git', 'jquery', 'figma'];

    anim.forEach(id =>
        new Vivus(id, {
            duration: 300,
            type: 'delayed'
        })
    );

    $('.menu__link, .logo, .home-page__link').on('click', function (event) {
        event.preventDefault();
        var id = $(this).attr('href');
        var top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);

        $('.menu').removeClass('menu--active');
        $('.header__btn-item').removeClass('header__btn-item--active');
    });

    new WOW().init();

});