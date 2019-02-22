$(function() {
/* Маска ввода номера телефона (плагин maskedinput) */
  $('[type="tel"]').mask("+7(999) 999-99-99");

new WOW().init();

/* Slider "FOTO" */
 $('.owl-carousel').owlCarousel({
    items:1,
    loop:false,
    center:true,
    dots:false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 450,
    mouseDrag:false,
    touchDrag: false,
    URLhashListener:true,
    autoplay:false,
    autoplayHoverPause:false,
    startPosition: '0',
    responsive:{
        0:{
            nav:true,
            loop:true,
            mouseDrag:true,
            touchDrag: true
        },
        1299:{
            nav:false
        }
    }
});
/* ховер на активном слайде */
$('.preview-link:first').addClass('preview-link_active');
$('.preview-link').on('click', function() {
  $('.preview-link').removeClass('preview-link_active');
  $(this).addClass('preview-link_active');
});

/* MODAL "CALLBACK" */
$('a[href="#callback"]').magnificPopup({
  removalDelay: 500,
  callbacks: {
    beforeOpen: function() {
       this.st.mainClass = this.st.el.attr('data-effect');
    }
  },
  midClick: true
});
/* MODAL "MORE" */
$('a[href="#more"]').click(function(){
  var moretitle = $(this).parent().find('.buy-box_title').html();
  var moretext = $(this).parent().find('.more-box_text').html();
  $('div.popup-more').find('h4.js-more-title').html(moretitle);
  $('div.popup-more').find('p.js-more-text').html(moretext);
});
$('a[href="#more"]').magnificPopup({
  removalDelay: 500,
  callbacks: {
    beforeOpen: function() {
       this.st.mainClass = this.st.el.attr('data-effect');
    }
  },
  midClick: true
});

/* MODAL "ROOM" */
$('a[href="#room"]').click(function(){
  var roomtitle = $(this).find('.room-layout_box__title').html();
  var roomsub = $(this).find('.layout-box_text').html();
  var roomold = $(this).find('.layout-box_oldprice').html();
  var roomnew = $(this).find('.layout-box_newprice').html();
  var roomlist = $(this).find('ul.proom-list').html();
  var roomimg = $(this).find('span.layout-box_img').attr('style');
  $('div.proom-right').find('h4.proom-right__title').html(roomtitle);
  $('div.proom-right').find('p.proom-right__subtitle').html(roomsub);
  $('div.proom-right').find('span.proom-right__oldprice').html(roomold);
  $('div.proom-right').find('span.proom-right__newprice').html(roomnew);
  $('div.proom-right').find('ul.proom-parameter').html(roomlist);
  $('div.proom-imgbox').find('span.proom-imgbox_item__big').attr("style", roomimg);
});
$('a[href="#room"]').magnificPopup({
  removalDelay: 500,
  callbacks: {
    beforeOpen: function() {
       this.st.mainClass = this.st.el.attr('data-effect');
    }
  },
  midClick: true 
});
/* чередование background для блоков в "ROOM" */
$('.layout-box:odd').find('.layout-box_bottom').css('background-image', 'url(../img/icon/bg-popup.png)');

/* MODAL "PROJECT" */
$('a[href="#project"]').magnificPopup({
  removalDelay: 500, 
  callbacks: {
    beforeOpen: function() {
       this.st.mainClass = this.st.el.attr('data-effect');
    }
  },
  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});

/* MODAL "COMMENT" */
$('a[href="#comment"]').magnificPopup({
  removalDelay: 500, //delay removal by X to allow out-animation
  callbacks: {
    beforeOpen: function() {
       this.st.mainClass = this.st.el.attr('data-effect');
    }
  },
  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});

/* MODAL "COMMENT-MOBILE" */
$('a[href="#comment-mobile"]').magnificPopup({
  removalDelay: 500, //delay removal by X to allow out-animation
  callbacks: {
    beforeOpen: function() {
       this.st.mainClass = this.st.el.attr('data-effect');
    }
  },
  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});

/* GALERY*/
$('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    removalDelay: 300,
    tLoading: 'Загрузка изображения #%curr%...',
    callbacks: {
    beforeOpen: function() {
      // just a hack that adds mfp-anim class to markup 
       this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
       this.st.mainClass = this.st.el.attr('data-effect');
    }
  },
  closeOnContentClick: true,
  midClick: true,
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1]
    },
    image: {
      tError: '<a href="%url%">Изображение #%curr%</a> загружается.',
      titleSrc: function(item) {
        return item.el.attr('title') + '<small>Западный квартал</small>';
      }
    }
  });

});
