

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






$(document).ready(function(){ 
	$('.product_content__info__menu__item.product_description').on('click',function() {
		closeAll();
		$(this).toggleClass('active');
		$('.product_content__info__description').toggleClass('active');
	});
	$('.product_content__info__menu__item.product_video').on('click',function() {
		closeAll();
		$(this).toggleClass('active');
		$('.product_content__info__video').toggleClass('active');
	});
	$('.product_content__info__menu__item.product_sizeSpecs').on('click',function() {
		closeAll();
		$(this).toggleClass('active');
		$('.product_content__info__sizeSpecs').toggleClass('active');
	});
	$('.product_content__info__menu__item.product_deliceryReturns').on('click',function() {
		closeAll();
		$(this).toggleClass('active');
		$('.product_content__info__deliceryReturns').toggleClass('active');
	});
	$('.product_content__info__menu__item.product_reviews').on('click',function() {
		closeAll();
		$(this).toggleClass('active');
		$('.product_content__info__reviews').toggleClass('active');
	});
	$('.zoom').loupe({
	  width: 250, // ширина лупы
	  height: 250, // высота лупы
	  loupe: 'loupe' // установить css класс лупы - для курсора и тд
	});
	function closeAll() {
		$('.product_content__info__menu__item.product_description').removeClass('active');	
		$('.product_content__info__description').removeClass('active');
		$('.product_content__info__menu__item.product_video').removeClass('active');
		$('.product_content__info__video').removeClass('active');
		$('.product_content__info__menu__item.product_sizeSpecs').removeClass('active');
		$('.product_content__info__sizeSpecs').removeClass('active');	
		$('.product_content__info__menu__item.product_deliceryReturns').removeClass('active');
		$('.product_content__info__deliceryReturns').removeClass('active');
		$('.product_content__info__menu__item.product_reviews').removeClass('active');
		$('.product_content__info__reviews').removeClass('active');
	}
});
