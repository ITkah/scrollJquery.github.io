$(document).ready(function(){
	$('.menu-btn').css({
		'position': 'fixed', 
		'bottom': '50px', 
		'right': '-50px', 
		'text-align': 'center',
		'padding': '10px 16px',
		'border-radius': '50%',
	});

	$(window).on("scroll", function () {
	   if ($(this).scrollTop() > 400) {
	      $('.menu-btn').animate({'right': '50px'}, 200);
	   } else {
	      $('.menu-btn').stop(true).animate({'right': '-250px'}, 150);
	   }
	});

	$('.menu-btn').click(function() {
	    $("html, body").animate({scrollTop:0},800);
	    return false;
	})

});