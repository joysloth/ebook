$(document).ready(function () {


    $('.imgbig').on('mouseover', function () {
        //                $(this).css('transform', 'scale(1.3)')
        $(this).css('transform', 'scale(1.3)')
            .css('border', '3px solid skyblue');
    });

    $('.imgbig').on('mouseout', function () {
        $(this).css('transform', 'scale(1)')
            .css('border', '');
    });




    //    $('.textbig1').on('mouseover', function () {
    //        $(this).css('font-size', '27px')
    //            .css('font-weight', 'bolder');
    //    });
    //
    //
    //    $('.textbig1').on('mouseout', function () {
    //        $(this).css('font-size', '20px')
    //            .css('font-weight', 'normal');
    //    });

    $('.textbig1').on('click', function () {
        $(this).css('font-size', '27px')
            .css('font-weight', 'bolder');
    });


    $('.textbig1').on('mouseout', function () {
        $(this).css('font-size', '20px')
            .css('font-weight', 'normal');
    });


 $('.putbtn').on('click', function()
                        {
           alert("당신을 다독여 줄 책이 담겼습니다.")
        });



    var $sportAll = $('#bookAll');
    $sportAll.change(function () {
        var $this = $(this);
        var checked = $this.prop('checked'); // checked 문자열 참조(true, false)
        // console.log(checked);
        $('input[name="bestch"]').prop('checked', checked);

    });


  $('.login').on("mouseover", function(){
        $(this).css('background-color', '#16a085');
    });
     $('.login').on("mouseout", function(){
        $(this).css('background-color', 'white');
    });
    $('.smile').on("mouseover", function(){
        $(this).css('background-color', '#16a085');
    });
     $('.smile').on("mouseout", function(){
        $(this).css('background-color', 'white');
    });
    $('.home').on("mouseover", function(){
        $(this).css('background-color', '#16a085');
    });
     $('.home').on("mouseout", function(){
        $(this).css('background-color', 'white');
    });



    /* 화면상단으로 이동버튼 */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.top').fadeIn();
            $('.mainmanu').css('opacity','0.85');
        } else {
            $('.top').fadeOut();
            $('.mainmanu').css('opacity','');
        }




    });
    $('.top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});
