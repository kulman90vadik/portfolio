$(function(){

    VANTA.RINGS({
        el: ".home-page",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x1d283c,
        color: 0x61ac1b
    })


    new Vivus('html', { 
        duration: 300,
        type: 'delayed'
    });
});