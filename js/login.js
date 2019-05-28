$(document).ready(function(){
        $('.b img').on('mouseover', function(){
       $(this).css('transform', 'perspective(300px) scaleZ(1) translateZ(60px)').css('border-radius', '12px');
    });
    $('.b img').on('mouseout', function(){
       $(this).css('transform', '').css('border-radius','30px');
    });
    });
