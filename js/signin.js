$(document).ready(function(){
           $('.a h2').on('mouseover', function(){
                $(this).css('color', 'yellow');
           });
            $('.a h2').on('mouseout', function(){
                $(this).css('color', '#1abc9c');
           });

        $('.b ul img').on('mouseover', function(){
        $(this).css('transform', 'perspective(300px) scaleZ(1) translateZ(60px)').css('border-radius', '12px');
    });
        $('.b ul img').on('mouseout', function(){
        $(this).css('transform', '').css('border-radius','0px');
    });
        $('#confirm').on('click', function()
                        {
           alert("아이디 사용 가능합니다.");
        });
        $('#signin').on('click', function()
                        {
           alert("가입이 완료되었습니다.")
        });
    $('.top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    $('#cont').click(function(){
        $('.txtq input').css('display', 'inherit')
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
       });

