$(document).ready(function(){
        $('.b img').on('mouseover', function(){
       $(this).css('transform', 'perspective(300px) scaleZ(1) translateZ(60px)').css('border-radius', '12px');
    });
    $('.b img').on('mouseout', function(){
       $(this).css('transform', '').css('border-radius','30px');
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
