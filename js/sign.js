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

       });
