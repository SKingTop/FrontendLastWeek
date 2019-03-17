$(document).ready(function(){ 
	$('.hamburger_menu__btn').on('click',function() {
		$(this).toggleClass('open');
		$('.hamburger_menu').toggleClass('open');
		$('.hamburger').toggleClass('open');
		$('.page').toggleClass('noScroll');
	});
	$('.hamburgerMenu__dropdown').on('click',function() {
		$('.hamburgerMenu__dropdown').removeClass('open');
		$(this).toggleClass('open');
	});
	$('.hamburgerMenu__menu').on('click',function() {
		$('.hamburgerMenu__dropdown').removeClass('open');
	});
});