# erciun
css 

https://codebeautify.org/css-beautify-minify

https://github.com/bfintal/Counter-Up


RENK KODLARI 

arkaplan 

background-color: #002147;


     /* ---------------------------------------------------------------------------
     * quick menu events 
     * --------------------------------------------------------------------------- */

    jQuery('.quick-links a').on("click", function (e) {   
      e.preventDefault();
      jQuery('ul.SliderBottomMenu > li > ul ').addClass("active");
      jQuery('.MenuClose').show();
});

    jQuery('.MenuClose').on("click", function (e) {   
      e.preventDefault();
      jQuery('ul.SliderBottomMenu > li > ul ').removeClass("active");
      jQuery('.MenuClose').hide();
});

     /* ---------------------------------------------------------------------------
     * sayfa tamamen yüklenince yapıalcaklar 
     * --------------------------------------------------------------------------- */

  window.onload = function() { // same as window.addEventListener('load', (event) => {
    alert('Page loaded');

    // image is loaded at this time
    alert(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
  };