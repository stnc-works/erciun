'use strict';

/*! *wow theme main js
 * http://chromthemes.com
 * Copyright (c) 2017 Chrom Themes;
 *
 * */

     /* ---------------------------------------------------------------------------
     * Header MAin Menu (Menu maker plugin)
     * --------------------------------------------------------------------------- */
(function($) {

    $.fn.menumaker = function(options) {
        
        var cssmenu = $(this), settings = $.extend({
          title: "Menu",
          format: "dropdown",
          sticky: false
        }, options);
  
        return this.each(function() {
          cssmenu.prepend('<div id="menu-button">' + settings.title + '</div>');
          $(this).find("#menu-button").on('click', function(){
            $(this).toggleClass('menu-opened');
            var mainmenu = $(this).next('ul');
            if (mainmenu.hasClass('open')) { 
              mainmenu.hide().removeClass('open');
            }
            else {
              mainmenu.show().addClass('open');
              if (settings.format === "dropdown") {
                mainmenu.find('ul').show();
              }
            }
          });
  
          cssmenu.find('li ul').parent().addClass('has-sub');
  
          multiTg = function() {
            cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
            cssmenu.find('.submenu-button').on('click', function() {
              $(this).toggleClass('submenu-opened');
              if ($(this).siblings('ul').hasClass('open')) {
                $(this).siblings('ul').removeClass('open').hide();
              }
              else {
                $(this).siblings('ul').addClass('open').show();
              }
            });
          };
  
          if (settings.format === 'multitoggle') multiTg();
          else cssmenu.addClass('dropdown');
  
          if (settings.sticky === true) cssmenu.css('position', 'fixed');
  
          resizeFix = function() {
            if ($( window ).width() > 768) {
              cssmenu.find('ul').show();
            }
  
            if ($(window).width() <= 768) {
              cssmenu.find('ul').hide().removeClass('open');
            }
          };
          resizeFix();
          return $(window).on('resize', resizeFix);
  
        });
    };
  })(jQuery);
  
    /* ---------------------------------------------------------------------------
     * Jqery moduls INIT 
     * --------------------------------------------------------------------------- */

  (function($){
  $(document).ready(function(){
  


     /* ---------------------------------------------------------------------------
     * css menu (main menu init)
     * --------------------------------------------------------------------------- */
  $("#cssmenu").menumaker({
     title: "Menu",
     format: "multitoggle"
  });
  

     /* ---------------------------------------------------------------------------
     * swiper Slider init
     * --------------------------------------------------------------------------- */
    var swiper = new Swiper('.swiper-container', {
      // Enable lazy loading
      lazy: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    });

     /* ---------------------------------------------------------------------------
     * quick menu events 
     * --------------------------------------------------------------------------- */

    $('.quick-links a').on("click", function (e) {   
      e.preventDefault();
      $('ul.SliderBottomMenu > li > ul').addClass("active");
      $('.MenuClose').show();
});

$('.MenuClose').on("click", function (e) {   
      e.preventDefault();
      $('ul.SliderBottomMenu > li > ul').removeClass("active");
      $('.MenuClose').hide();
    
});

/*

$(".DuyuruBlok").mCustomScrollbar({
  snapAmount: 40,
  scrollButtons: { enable: true },
  keyboard: { scrollAmount: 40 },
  mouseWheel: { deltaFactor: 40 },
  scrollInertia: 400
});

$(".RektorBlok").mCustomScrollbar({
  snapAmount: 40,
  scrollButtons: { enable: true },
  keyboard: { scrollAmount: 40 },
  mouseWheel: { deltaFactor: 40 },
  scrollInertia: 400
});

$(".BasariBlok").mCustomScrollbar({
  snapAmount: 40,
  scrollButtons: { enable: true },
  keyboard: { scrollAmount: 40 },
  mouseWheel: { deltaFactor: 40 },
  scrollInertia: 400
});
*/
  });
  })(jQuery);


     /* ---------------------------------------------------------------------------
     * sayfa tamamen yüklenince yapılacaklar  //https://javascript.info/onload-ondomcontentloaded
     * --------------------------------------------------------------------------- */

    window.onload = function() { 
      //slider daki oku  alanı 
      $('.slide-info').show();


    };