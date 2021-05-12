$(window).scroll(function() {
    var aTop = "100";
    if ($(this).scrollTop() >= aTop) {
        $('#top-link-block').addClass('affix');
        $('header').addClass('fixed');
    } else {
        $('#top-link-block').removeClass('affix');
        $('header').removeClass('fixed');
    }

    var fixed = document.getElementById("myHeader");
    fixed.offsetTop;



    if (window.pageYOffset > 100) {
        fixed.classList.add('fixed');
    } else {
        fixed.classList.remove('fixed');
    }
});



$(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").addClass('active');
    $(".image-banner").addClass('active');
});
$(document).ready(function() {

    $('.mob-nav-btn').click(function() {
        $('.mob-nav').fadeIn();
    });
    $('.icon').click(function() {
        $('.mob-nav').fadeOut();
    });
    $('.drop-nav').click(function() {
        $('.nav-down').slideToggle();
    });

    $(".center").slick({
        infinite: true,
        centerMode: true,
        prevArrow: '<i class="fa fa-angle-left"></i>',
        nextArrow: '<i class="fa fa-angle-right"></i>',
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 2000,
        autoplay: true,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 650,
            settings: {
                initialSlide: 1,
                slidesToShow: 1
            }
        }]

    });
    $(".special").slick({
        infinite: true,
        centerMode: true,
        prevArrow: '<i class="fa fa-angle-left"></i>',
        nextArrow: '<i class="fa fa-angle-right"></i>',
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 2000,
        autoplay: true,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 650,
            settings: {
                initialSlide: 1,
                slidesToShow: 1
            }
        }]

    });


    wow = new WOW({
        animateClass: 'animated',
        offset: 100,
        callback: function(box) {
            console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
    });
    wow.init();

    $(".mycount").counterUp({
        delay: 10,
        time: 2000
    });

});