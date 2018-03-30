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
	var isIbmDisplayed = 0;
	var isEncycleDisplayed = 0;
	var isNavClicked = 0;

	var angle = -90;
    $('#nav_icon').css({'transform': 'rotate(' +angle + 'deg)'});
    $('#nav_icon').data('angle', angle);

    $('.main_img').hide();
	$("#ibm_section").hide();
	$('#encycle_section').hide();

	$('#ibm').click(function(){
		if (isIbmDisplayed === 0) {
	 		$('#ibm').css({'margin': '0'});
	 		$('#ibm').css({'display': 'inline-block'});
	 		$('#ibm_section').fadeIn(1000);
	 		isIbmDisplayed = 1;
	 	} else {
	 		$('#ibm_section').hide();
	 		$('#ibm').css({'display': 'block'});
	 		$('#ibm').css({'margin': 'auto'});
	 		isIbmDisplayed = 0;
	 	}
	});
	$('#encycle').click(function(){
		if (isEncycleDisplayed === 0) {
	 		$('#encycle').css({'margin': '0'});
	 		$('#encycle').css({'display': 'inline-block'});
	 		$('#encycle_section').fadeIn(1000);
	 		isEncycleDisplayed = 1;
	 	} else {
	 		$('#encycle_section').hide();
	 		$('#encycle').css({'display': 'block'});
	 		$('#encycle').css({'margin': 'auto'});
	 		isEncycleDisplayed = 0;
	 	}
	});
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
/*
	var ht= $(".main_img").height(), wd=$(".main_img").width(), mult=1.2; //change to the no. of times you want to increase your image 
	$(".main_img").on('mouseenter', function(){
		$(this).animate({height: ht*mult, width: wd*mult}, 500);
	});
	$(".main_img").on('mouseleave', function(){
		$(this).animate({height: ht, width: wd}, 500);
	});
	*/
});