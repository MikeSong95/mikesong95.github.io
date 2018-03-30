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