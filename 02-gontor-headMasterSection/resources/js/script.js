$(document).ready(function() {

    $('.image-popup').magnificPopup({
        type: 'image',
        // other options
        removalDelay: 300,
        mainClass: 'mfp-fade',
        retina: {
            ratio: 2, 
        
        
            replaceSrc: function(item, ratio) {
              return item.src.replace(/\.\w+$/, function(m) { return '@2x' + m; });
            } 
         }
        
      });
});