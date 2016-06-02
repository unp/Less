// fitvids to make all videos full width http://fitvidsjs.com/  
(function($) {
	"use strict";
	$(function() {
		$('.the-content').fitVids();	
	});
}(jQuery));

function init() {
  
  // Add listener for scroll event
  window.addEventListener('scroll', function(e){
    
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn  = 30,
        header    = document.querySelector("header");
        
    if (distanceY > shrinkOn) {
      // Add class to make header smaller when pageYOffset > 30
      classie.add(header,"smaller");
    } else {      
      // Otherwise make header normal size
      if (classie.has(header,"smaller")) {
        classie.remove(header,"smaller");
      }
    }
  });
}
window.onload = init();