$(document).ready(function() {
    var maxHeight = 0;
    
    $('.accordion-item').each(function() {
      var itemHeight = $(this).outerHeight();
      if (itemHeight > maxHeight) {
        maxHeight = itemHeight;
      }
    });
  
    $('.accordion-item').height(maxHeight);
  });
  