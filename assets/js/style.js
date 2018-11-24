
$(document).ready(function () {
    $(document).on("click", ".notif-btn", function () {
        $(".notif-item").toggleClass('hide');
    });

   AOS.init();
    $('.nav').nav();
    $(".notif-flex .click").click(function () {
        $(".notif-flex").toggleClass('off');
    });

});


