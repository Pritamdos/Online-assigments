
$(document).ready(function () {
    $(document).on("click", ".notif-btn", function () {
        $(".notif-item").toggleClass('hide');
    });

   AOS.init();
    $('.nav').nav();
    $(".notif-flex .click").click(function () {
        $(".notif-flex").toggleClass('off');
    });
    $("#slide-down").click(function () {
        $(".notif-item").addClass('hide').addClass('slideInDown');
    });
    $('.lead-tstmnl-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay:true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: false
      });
      
      

});


