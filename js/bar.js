$(document).ready(function () {
    /* 애니메이션 효과(메뉴 상단) */
    let count = $('.dropdown').length;
    let arr = [];
    for (let i = 0; i < count; i++) {
        let menu = $('.dropdown').eq(i);

        arr.push(menu.offset().left);
        $(".dropdown").eq(i).on('mouseover', function () {
            let su = $('.dropdown').offset().left;
            $("#bar").css('width', menu.width()).animate({
                left: menu.offset().left - su - 3
            }, 200);
        });
    }

    /* 메뉴 글씨 색 */
    $('.column ul li a').on('mouseover', function(){
       $(this).css('color', 'yellow');
    });
    $('.column ul li a').on('mouseout', function(){
       $(this).css('color', 'white');
    });
    $('.dropdown a').on('mouseover', function(){
       $(this).css('color', 'yellow');
    });
    $('.dropdown a').on('mouseout', function(){
       $(this).css('color', 'white');
    });

    /* 책 이미지 확대 */
    $('div.polaroid img').on('mouseover', function(){
       $(this).css('transform', 'perspective(300px) scaleZ(1) translateZ(60px)').css('border-radius', '12px');
    });
    $('div.polaroid img').on('mouseout', function(){
       $(this).css('transform', '').css('border-radius','0px');
    });

    let modal = document.getElementById('myModal');
    let img = document.getElementById('myImg');
    let modalImg = document.getElementById("img01");
    let captionText = document.getElementById("caption");
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    let span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        modal.style.display = "none";
    }

    /* 체크 박스(전체 선택, 해제) */
    $("#allchk").click(function(){
       if($("#allchk").prop("checked")){
           $("input[type=checkbox]").prop("checked",true);
       } else {
           $("input[type=checkbox]").prop("checked",false);
       }
    });


});
