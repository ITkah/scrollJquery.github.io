$(document).ready(function(){
	$('.menu-btn').css({
		'position': 'fixed', 
		'bottom': '50px', 
		'right': '50px', 
		'display': 'none',
		'text-align': 'center',
		'padding': '10px 16px',
		'border-radius': '50%',
	});

	$(window).on("scroll", function () {
	   if ($(this).scrollTop() > 300) {
	      $('.menu-btn').fadeIn();
	   } else {
	      $('.menu-btn').fadeOut();
	   }
	});

	$('.menu-btn').click(function() {
	    $("html, body").animate({scrollTop:0},800);
	    return false;
	})

});