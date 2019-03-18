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
	$('.quantitySelectUp').on('click',function() {
		var $qty = $('.quantitySelect').val();
		$qty = Number($qty);
		$qty += 1;
		if ($qty >= 99) {
			$qty = 99;
		}
		$('.quantitySelect').val($qty);
	});
	$('.quantitySelectDown').on('click',function() {
		var $qty = $('.quantitySelect').val();
		$qty = Number($qty);
		$qty -= 1;
		if ($qty <= 0) {
			$qty = 1;
		}
		$('.quantitySelect').val($qty);
	});
});