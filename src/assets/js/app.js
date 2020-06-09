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
  
  $("#cssmenu").menumaker({
     title: "Menu",
     format: "multitoggle"
  });
  

  $('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });





  });
  })(jQuery);


  var title = document.getElementsByTagName('title');

var msg1 = "Domain.com";
var msg2 = "New Message - Domain.com"
var current;
var titleChange;

function changeTitle(){
  if(current == msg1){
   title = msg2;
   current = msg2;
  }else{ //If the current title isn't equal to the value of msg1
   title = msg1;
   current = msg1;
  }
 titleChange = setTimeout("changeTitle()", 1000);
}

function stopChangingTitle(){
 clearTimeout(titleChange);
 title = msg1;
}
stopChangingTitle()