$(document).ready(function () {



    $('.imgbig').on('mouseover', function () {
        $(this).css('transform', 'scale(1.3)')
            .css('border', '3px solid skyblue');
    });

    $('.imgbig').on('mouseout', function () {
        $(this).css('transform', 'scale(1)')
            .css('border', '');
    });





    $('.cuslink').on('mouseover', function () {

        $(this).css('color', '#16a085');
    });
    $('.cuslink').on('mouseout', function () {

        $(this).css('color', 'black');
    });


    $('.cus2_p').on('mouseover', function () {

        $(this).css('color', '#16a085')
                .css('font-size','23px');
    });

    $('.cus2_p').on('mouseout', function () {

        $(this).css('color', 'gray')
                .css('font-size','16px');
    });


    /* 화면상단으로 이동버튼 */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.top').fadeIn();
        } else {
            $('.top').fadeOut();
        }
    });
    $('.top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});
