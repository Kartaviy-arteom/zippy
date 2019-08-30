'use strict';

(function() {
	var GAP = 119.5;
	var gallery = document.querySelector('.life__gallery');
	var rightBtn = document.querySelector('.life__btn--right');
	var leftBtn = document.querySelector('.life__btn--left');
	var galleryPositionX = 0;
	var measureElement = function (element) {
	    return {
	      x: element.offsetWidth,
	      y: element.offsetHeight
	    };
  	};
  	if (rightBtn) {
  		rightBtn.addEventListener('click', function (evt) {
  			evt.preventDefault();
			galleryPositionX -= GAP;
  			gallery.style.left = galleryPositionX + 'px';
  		})
  	};

  	if (leftBtn) {
  		leftBtn.addEventListener('click', function (evt) {
  			evt.preventDefault();
			galleryPositionX += GAP;
  			gallery.style.left = galleryPositionX + 'px';
  		})
  	};

})();