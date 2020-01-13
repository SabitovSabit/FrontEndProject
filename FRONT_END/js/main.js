$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,

        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4,
                nav: true
            }
        }
    });
    $(window).scroll(function () {
        $(".arrow").show("fast");
        $(".topmenu").fadeOut("fast");
        $(".row1").fadeOut("fast");
        $(".row2").fadeOut("fast");
        if ($(window).scrollTop() == 0) {
            $(".arrow").hide("fast");
            $(".topmenu").fadeIn("fast");
            $(".row1").fadeIn("fast");
            $(".row2").fadeIn("fast");
        }
    })
    $(".addtocard").click(function () {
        Swal.fire({
            title: 'Denim jacket blue',
            text: 'is added to cart !',
            type: 'success',
            confirmButtonText: 'OK'
        });
    });
});


$(document).ready(function () {

    $('.first-button').on('click', function () {

        $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {

        $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {

        $('.animated-icon3').toggleClass('open');
    });



});
$(document).ready(function () {
    $(".h5-1").click(function () {
        $(".text-1").slideToggle();
    });
    $(".h5-2").click(function () {
        $(".text-2").slideToggle();
    });
    $(".h5-3").click(function () {
        $(".text-3").slideToggle();
    });
    $(".shops").click(function(){
        $(".shop").slideToggle();
    })

});



