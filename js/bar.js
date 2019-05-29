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
    /* 한줄쓰기 */
    $('#cont').on('mouseover', function(){
       $(this).css('background-color', 'black').css('color', 'white');
    });
    $('#cont').on('mouseout', function(){
       $(this).css('background-color', 'white').css('color','#777');
    });
    $('#cont').click(function(){

    });

    /* 이미지 슬라이드 */
    $(function(){
	var eleWidth = $(".vis_frame ul li").innerWidth();
	var state = false;
	var playOn = false;
	var time = 2000;
	num = 0;
	var bannerAuto;
	for(var i=0; i<$("#banner li").length;i++){
		$("#pos").append("<span></span>");
	}
	$("#pos span:eq(0)").addClass("on");
	function play(){
		if(!playOn){
			playOn = true;
			bannerAuto = setInterval(function(){
				$(".left").click();
			},time);
		}
	}
	function stop(){
		if(playOn){
			playOn = false;
			clearInterval(bannerAuto);
		}
	}
	function left(){
		stop();
		num++;
		if(num > $(".vis_frame ul li").length-1){
			num = 0;
		}
		$(".vis_frame > ul").animate({left:eleWidth*-1},300,"swing",function(){
			$(this).children("li:first").insertAfter($(this).children("li:last"));
			$(this).css({left:0});
			$("#pos span").removeClass("on");
			$("#pos span").eq(num).addClass("on");
			state = false;
			play();
		});
	}
	function right(){
		stop();
		num--;
		if(num < 0){
			num = $(".vis_frame ul li").length-2;
		}
		$(".vis_frame > ul > li:last").insertBefore($(".vis_frame > ul > li:first"));
		$(".vis_frame > ul").css({left:eleWidth*-1});
		$(".vis_frame > ul").animate({left:0},300,"swing",function(){
			$("#pos span").removeClass("on");
			$("#pos span").eq(num).addClass("on");
			state = false;
			play();
		});
	}
	$(".left").click(function(){
		if(!state){
			state = true;
			left();
		}
	});
	$(".right").click(function(){
		if(!state){
			state = true;
			right();
		}
	});
	$(".stop").click(function(){
		stop();
	});
	$(".play").click(function(){
		play();
	});
	$(".play").click();
    $(".imgset").on("mouseover", function(){
        stop();
    });
    $(".imgset").on("mouseout", function(){
        play();
    });
       $(".play").on("mouseout", function(){
           $(".play img").attr('src','img/play-button.png');
        });
        $(".play").on("mouseover", function(){
           $(".play img").attr('src','img/play-button2.png');
        });

        $(".stop").on("mouseout", function(){
           $(".stop img").attr('src','img/pause.png');
        });
        $(".stop").on("mouseover", function(){
           $(".stop img").attr('src','img/pause2.png');
        });

        $(".left").on("mouseout", function(){
           $(".left").css('background-color','#000');
        });
        $(".left").on("mouseover", function(){
           $(".left").css('background-color','#777');
        });
        $(".right").on("mouseout", function(){
           $(".right").css('background-color','#000');
        });
        $(".right").on("mouseover", function(){
           $(".right").css('background-color','#777');
        });
        /*$(".imgset").*/
     });

    /* 화면상단으로 이동버튼 */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.top').fadeIn();
            $('.mainmanu').css('opacity', '0.85');
        } else {
            $('.top').fadeOut();
            $('.mainmanu').css('opacity', '');
        }
    });
    $('.top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    $('#cont').click(function(){
        $('.txtq input').css('display', 'inherit');
        $('.txtq img').css('display', 'inherit');
    });

    /* 텍스트창 전송이미지 */
    $('#textimg').on("mouseover", function(){
        $(this).attr('src', 'img/check-mark2.png');
    });
     $('#textimg').on("mouseout", function(){
        $(this).attr('src', 'img/check-mark.png');
    });

    $('#textimg').click(function () {
        let text = $('#text');
        let val = $('#text').val();
        text.val('');
        console.log(val);
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth();
        let date = now.getDate();
        let h = now.getHours();
        let m = now.getMinutes();
        let s = now.getSeconds();

        function pad(n, width) {
            n = n + '';
            return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
        }

        let time = year + "-" + pad(month,2) + "-"+ pad(date,2) + "  " + pad(h,2) + ":" + pad(m,2) + ":" + pad(s,2)+ "  ";
        $('.txts table thead').append('<tr class="asd"><td>' + time + '</td><td>' + val + '</td></tr>');
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

