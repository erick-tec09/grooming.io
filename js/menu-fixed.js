$(document).ready(function(){
	var altura = $('.navegacion').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.navegacion').addClass('menu-fixed');
		} else {
			$('.navegacion').removeClass('menu-fixed');
		}
	});
 
});