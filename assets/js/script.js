//****************************
//***** for scrollmenu *******
//****************************
$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});

//****************************
//***** for AOS *******
//****************************
AOS.init();

//****************************
//***** for scorll slide *****
//****************************
$(function () { 
    var controller = new ScrollMagic.Controller();
    var horizontalSlide = new TimelineMax()
    // animate panels
    .to("#js-slideContainer", 1,   {x: "-33.333%"})
    .to("#js-slideContainer", 1,   {x: "-66.666%"})
    // create scene to pin and link animation
    new ScrollMagic.Scene({
        triggerElement: "#js-wrapper",
        triggerHook: "onLeave",
        duration: "200%"
    })
        .setPin("#js-wrapper")
        .setTween(horizontalSlide)
        .addTo(controller);    
});
// with img bg
TweenLite.defaultEase = Linear.easeNone;
var ctrl = new ScrollMagic.Controller();
$(".about-content").each(function (i) {
    let target0 = $(this).find(".about-content-title");
    let target1 = $(this).find(".about-title");
    let target2 = $(this).find(".copy");
    var tl = new TimelineMax();
    tl.from(target0, 1, { opacity: 0.5, y: 30, delay: 0.4 });
    tl.from(target1, 1, { opacity: 0.9, y: 30, delay: 0.4 });
    tl.from(target2, 1, { opacity: 0.9, y: 30, delay: 0.4});
    new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 1,
    })
        .setTween(tl)
        .addTo(ctrl)
});

//****************************
//**** for hamburger menu ****
//****************************
(function($) {
    $(function () {
        $('#nav-toggle').on('click', function() {
            $('body').toggleClass('open');
        });
        $('#navigation li').on({
            'mouseenter' : function(){
                var index = $(this).index();
                $('#nav-bg-wrap .nav-bg').eq(index).addClass('active');
                
            },
            'mouseleave' : function(){
                var index = $(this).index();
                $('#nav-bg-wrap .nav-bg').eq(index).removeClass('active');
            }
        });
    });
})(jQuery);
