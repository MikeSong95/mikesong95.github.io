$(document).ready(function(){
	$(".animation").animsition({
	    inClass: 'zoom-in',
	    outClass: 'zoom-out',
	    inDuration: 1500,
	    outDuration: 800,
	    linkElement: '.animsition-link',
	    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
	    loading: false,
	    loadingParentElement: 'body', //animsition wrapper element
	    loadingClass: 'animsition-loading',
	    loadingInner: '', // e.g '<img src="loading.svg" />'
	    timeout: false,
	    timeoutCountdown: 5000,
	    onLoadEvent: true,
	    browser: [ 'animation-duration', '-webkit-animation-duration'],
	    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
	    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
	    overlay : false,
	    overlayClass : 'animsition-overlay-slide',
	    overlayParentElement : 'body',
	    transition: function(url){ window.location.href = url; }
  	});
	
	$('.main_img').hide();
	var isNavClicked = 0;

	var angle = -90;
    $('#nav_icon').css({'transform': 'rotate(' +angle + 'deg)'});
    $('#nav_icon').data('angle', angle);

	$('#nav_icon').click(function() {
		if (isNavClicked === 0) {
			var angle = 0;
    		$('#nav_icon').css({'transform': 'rotate(' + angle + 'deg)'});
    		$('#nav_icon').data('angle', angle);
    		$('.main_img').fadeIn();
    		isNavClicked = 1;
		} else {
			var angle = ($('#nav_icon').data('angle')-90);
    		$('#nav_icon').css({'transform': 'rotate(' +angle + 'deg)'});
    		$('#nav_icon').data('angle', angle);
    		$('.main_img').fadeOut();

    		isNavClicked = 0;
		}
	});


});

$(document).ready(function(){
	var programmingClicked = 0;
	var toolsClicked = 0;
	var otherClicked = 0;
	var translate = 0;
	//$('.back_icon').css('display', 'none');
	var newHeight = 150;
	var newWidth = 150;
	var cClicked = 0;

	$('#c').click(function(){
		$('h2').css('opacity','0');
    	$('h1').css('opacity','0');
    	$('#tools_row').css('display','none');
    	$('#other_row').css('display','none');
    	$('.skills_images_row').css("transform","translate(0,-120%)");
    	$('.back_icon').fadeIn();

		$('#p_row > img').css('filter','brightness(40%)');
    	$('#c').css('filter','brightness(100%');

    	$('.transbox').fadeIn();
    	$(".transbox > p").fadeOut(0);
    	$(".transbox > ul").fadeOut(0);
    	$('.c_info').fadeIn();
    	$(".transbox > #c_ul").fadeIn();
    });
    $('#cpp').click(function(){
		$('h2').css('opacity','0');
    	$('h1').css('opacity','0');
    	$('#tools_row').css('display','none');
    	$('#other_row').css('display','none');
    	$('.skills_images_row').css("transform","translate(0,-120%)");
    	$('.back_icon').fadeIn();

    	$('#p_row > img').css('filter','brightness(40%)');
    	$('#cpp').css('filter','brightness(100%');
    	$('.transbox').fadeIn();

    	$(".transbox > p").fadeOut(0);
    	$(".transbox > ul").fadeOut(0);
    	$('.cpp_info').fadeIn();
    	$(".transbox > #cpp_ul").fadeIn();
    });
    $('#java').click(function(){
		$('h2').css('opacity','0');
    	$('h1').css('opacity','0');
    	$('#tools_row').css('display','none');
    	$('#other_row').css('display','none');
    	$('.skills_images_row').css("transform","translate(0,-120%)");
    	$('.back_icon').fadeIn();

    	$('#p_row > img').css('filter','brightness(40%)');
    	$('#java').css('filter','brightness(100%');

    	$('.transbox').fadeIn();
    	$(".transbox > p").fadeOut(0);
    	$(".transbox > ul").fadeOut(0);
    	$('.java_info').fadeIn();
    	$(".transbox > #java_ul").fadeIn();
    });
    $('#web').click(function(){
		$('h2').css('opacity','0');
    	$('h1').css('opacity','0');
    	$('#tools_row').css('display','none');
    	$('#other_row').css('display','none');
    	$('.skills_images_row').css("transform","translate(0,-120%)");
    	$('.back_icon').fadeIn();

    	$('#p_row > img').css('filter','brightness(40%)');
    	$('#web').css('filter','brightness(100%');

    	$('.transbox').fadeIn();
    	$(".transbox > p").fadeOut(0);
    	$(".transbox > ul").fadeOut(0);
    	$('.web_info').fadeIn();
    	$(".transbox > #web_ul").fadeIn();
    });
    $('#git').click(function(){
		$('h2').css('opacity','0');
    	$('h1').css('opacity','0');
    	$('#p_row').css('display','none');
    	$('#other_row').css('display','none');
    	$('.skills_images_row').css("transform","translate(0,-165%)");
    	$('.back_icon').fadeIn();

    	$('#tools_row > img').css('filter','brightness(40%)');
    	$('#git').css('filter','brightness(100%');

    	$('.transbox').fadeIn();
    	$(".transbox > p").fadeOut(0);
    	$(".transbox > ul").fadeOut(0);
    	$('.git_info').fadeIn();
    	$(".transbox > #git_ul").fadeIn();
    });
     $('#websphere').click(function(){
		$('h2').css('opacity','0');
    	$('h1').css('opacity','0');
    	$('#p_row').css('display','none');
    	$('#other_row').css('display','none');
    	$('.skills_images_row').css("transform","translate(0,-165%)");
    	$('.back_icon').fadeIn();

    	$('#tools_row > img').css('filter','brightness(40%)');
    	$('#websphere').css('filter','brightness(100%');
		$('.transbox').fadeIn();
    	$(".transbox > p").fadeOut(0);
    	$(".transbox > ul").fadeOut(0);
    	$('.websphere_info').fadeIn();
    	$(".transbox > #websphere_ul").fadeIn();
    });
      $('#bluemix').click(function(){
		$('h2').css('opacity','0');
    	$('h1').css('opacity','0');
    	$('#p_row').css('display','none');
    	$('#other_row').css('display','none');
    	$('.skills_images_row').css("transform","translate(0,-165%)");
    	$('.back_icon').fadeIn();

    	$('#tools_row > img').css('filter','brightness(40%)');
    	$('#bluemix').css('filter','brightness(100%');
		$('.transbox').fadeIn();
    	$(".transbox > p").fadeOut(0);
    	$(".transbox > ul").fadeOut(0);
    	$('.bluemix_info').fadeIn();
    	$(".transbox > #bluemix_ul").fadeIn();
    });
    $('#go').click(function(){
		$('h2').css('opacity','0');
    	$('h1').css('opacity','0');
    	$('#p_row').css('display','none');
    	$('#tools_row').css('display','none');
    	$('.skills_images_row').css("transform","translate(0,-210%)");
    	$('.back_icon').fadeIn();

    	$('#other_row > img').css('filter','brightness(40%)');
    	$('#go').css('filter','brightness(100%');

		$('.transbox').fadeIn();
    	$(".transbox > p").fadeOut(0);
    	$(".transbox > ul").fadeOut(0);
    	$('.go_info').fadeIn();
    	$(".transbox > #go_ul").fadeIn();
    });
    $('#node').click(function(){
		$('h2').css('opacity','0');
    	$('h1').css('opacity','0');
    	$('#p_row').css('display','none');
    	$('#tools_row').css('display','none');
    	$('.skills_images_row').css("transform","translate(0,-210%)");
    	$('.back_icon').fadeIn();

    	$('#other_row > img').css('filter','brightness(40%)');
    	$('#node').css('filter','brightness(100%');
    	$('#tools_row > img').css('filter','brightness(40%)');
    	$('#node').css('filter','brightness(100%');
		$('.transbox').fadeIn();
    	$(".transbox > p").fadeOut(0);
    	$(".transbox > ul").fadeOut(0);
    	$('.node_info').fadeIn();
    	$(".transbox > #node_ul").fadeIn();
    });
     $('#python').click(function(){
		$('h2').css('opacity','0');
    	$('h1').css('opacity','0');
    	$('#p_row').css('display','none');
    	$('#tools_row').css('display','none');
    	$('.skills_images_row').css("transform","translate(0,-210%)");
    	$('.back_icon').fadeIn();

    	$('#other_row > img').css('filter','brightness(40%)');
    	$('#python').css('filter','brightness(100%');

		$('.transbox').fadeIn();
    	$(".transbox > p").fadeOut(0);
    	$(".transbox > ul").fadeOut(0);
    	$('.python_info').fadeIn();
    	$(".transbox > #python_ul").fadeIn();
    });
    $('.back_icon').click(function(){
     	
		$('#p_row > img').css('filter','brightness(100%)');
		$('#tools_row > img').css('filter','brightness(100%)');
		$('#other_row > img').css('filter','brightness(100%)');
		$('h2').css('opacity','1');
    	$('h1').css('opacity','1');
    	$('#p_row').fadeIn();
    	$('#tools_row').fadeIn();
    	$('#other_row').fadeIn();
    	$('.skills_images_row').css("transform","translate(0,"+"5"+"%)");
    	$('.back_icon').fadeOut(750);
    	$('.transbox').fadeOut(750);
    });
});