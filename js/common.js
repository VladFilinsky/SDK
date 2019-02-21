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
$('a[href="#room"]').magnificPopup({
  removalDelay: 500,
  callbacks: {
    beforeOpen: function() {
       this.st.mainClass = this.st.el.attr('data-effect');
    }
  },
  midClick: true 
});

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
