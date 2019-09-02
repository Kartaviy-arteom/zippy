'use strict';

(function() {
	var GAP = 124;
  var IMAGE_GAP = 13;
  var GALLERY_WRAPPER_WIDTH = 606;
	var gallery = document.querySelector('.life__gallery');
	var rightBtn = document.querySelector('.life__btn--right');
	var leftBtn = document.querySelector('.life__btn--left');
	var galleryPositionX = 0;
  var galleryLenght = gallery.children.length * GAP - IMAGE_GAP;
  var mainGalleryImage = document.querySelector('.life__wrapper>img');

  var moveGallery = function (direction) {
    if (direction === 'left') {
      galleryPositionX -= GAP;
    };
    if (direction === 'right') {
      galleryPositionX += GAP;
    };
    if (galleryPositionX > 0) {
      galleryPositionX = 0;
      leftBtn.classList.add('no-photo');
    };

    if (galleryLenght + galleryPositionX < GALLERY_WRAPPER_WIDTH) {
      galleryPositionX = GALLERY_WRAPPER_WIDTH - galleryLenght;
      rightBtn.classList.add('no-photo');
    };

    gallery.style.left = galleryPositionX + 'px';
  };

  var onRightBtnClick = function (evt) {
    evt.preventDefault();
    moveGallery('left');
    if (leftBtn.classList.contains('no-photo')) {
      leftBtn.classList.remove('no-photo');
    };
  };
  var onLeftBtnClick = function (evt) {
    evt.preventDefault();
    moveGallery('right');
    if (rightBtn.classList.contains('no-photo')) {
      rightBtn.classList.remove('no-photo');
    };
  };

	if (rightBtn) {
		rightBtn.addEventListener('click', onRightBtnClick);
  };

	if (leftBtn) {
		leftBtn.addEventListener('click', onLeftBtnClick);
  };

  gallery.addEventListener('click', function(evt) {
    if(evt.target.tagName.toLowerCase() === 'img') {
      mainGalleryImage.src = evt.target.dataset.bigImgSrc;
    };
  })

})();
