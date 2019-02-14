$(function() {
// Маска ввода номера телефона (плагин maskedinput)
  $('[type="tel"]').mask("+7(999) 999-99-99");
// Слайдер "Галерея"
	     $('.owl-carousel').owlCarousel({
        items:1,
        loop:false,
        center:true,
        dots:false,
      	animateOut: 'fadeOut',
    		animateIn: 'fadeIn',
    		smartSpeed: 450,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: '0'
    });
/* ховер на активном слайде */
$('.preview-link:first').addClass('preview-link_active');
$('.preview-link').on('click', function() {
  $('.preview-link').removeClass('preview-link_active');
  $(this).addClass('preview-link_active');
});

/* Модальное окно "Обратный звонок" */
var elements = $('.callback-overlay, .callback-modal');
$('.callback-btn').click(function(){
    elements.addClass('active');
});
$('.callback-close-modal').click(function(){
    elements.removeClass('active');
});
/* Модальное окно "Абсолютная рассрочка" */
var elements_buy = $('.buy-overlay, .buy-modal');
$('.buy-box_btn').click(function(){
 var title = $(this).attr('data-title');
 var text = $(this).parent().find('.buy-box_text').text();
 $('div.buy-modal-content').find('h4.js-popup-title').text(title);
 $('div.buy-modal-content').find('p.js-popup-text').text(text);
  elements_buy.addClass('active');
});
$('.buy-close-modal').click(function(){
    elements_buy.removeClass('active');
});
/* Закрываем попап по клику вне окна */
  $(document).mouseup(function (e) {
    var popup = $('.modal-content');
    var element = $('.modal-overlay, .modal');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    element.removeClass('active');
    }
  });
});
