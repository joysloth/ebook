$(document).ready(function(){
            let count=$('.dropdown').length;
            let arr = [];
            for(let i=0; i<count; i++){
                let menu = $('.dropdown').eq(i);
                let su = $('.dropdown').offset().left;
                arr.push(menu.offset().left);
                $(".dropdown").eq(i).on('mouseover', function(){
                    $("#bar").css('width', menu.width()).animate({left:menu.offset().left-su-3}, 200);
                });
            }
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
			num = $(".vis_frame ul li").length-1;
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
    $('#b1 img').on('mouseover', function(){
       $(this).css('transform', 'perspective(300px) scaleZ(1) translateZ(60px)').css('border-radius', '12px');
    });
    $('#b1 img').on('mouseout', function(){
       $(this).css('transform', '').css('border-radius','0px');
    });
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
        $('.txtq input').css('display', 'inherit')
    });
});
