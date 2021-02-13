'use strict';

let sliderLefts = document.querySelectorAll('.slider__left'),
	sliderRights = document.querySelectorAll('.slider__right'),
	sliderItemAdapts = document.querySelectorAll('.slider__item_adapt');

sliderLefts.forEach( el => {
	el.addEventListener('click', slideLeft);
	el.classList.add('slider_inactive');
});
sliderRights.forEach( el => {
	el.addEventListener('click', slideRight);
});
window.addEventListener("resize", function() {
   resize();
});
function resize() {
	sliderItemAdapts.forEach( el => {
		el.style.minWidth = (el.parentElement.getBoundingClientRect().width - 5) + 'px';
	});
}
resize();

function slideLeft(e) {
	let currLeft = e.currentTarget,
		currRight = e.currentTarget.nextElementSibling.nextElementSibling,
		currWrapper = e.currentTarget.nextElementSibling,
		currItems = currWrapper.firstElementChild,
		currItemWidth = currItems.firstElementChild.getBoundingClientRect().width,
		leftWrapper = currWrapper.getBoundingClientRect().left,
		leftFirstItem = currItems.firstElementChild.getBoundingClientRect().left;
	
	if(!(leftFirstItem + (20 + currItemWidth) >= leftWrapper)){
		if(currRight.classList.contains('slider_inactive')) currRight.classList.remove('slider_inactive');
		currItems.style.marginLeft = parseFloat(currItems.style.marginLeft.replace(/px/gm, '')) + (20 + currItemWidth) + 'px';
	} else {
		if(!(currLeft.classList.contains('slider_inactive'))) {
			currItems.style.marginLeft = parseFloat(currItems.style.marginLeft.replace(/px/gm, '')) + (20 + currItemWidth) + 'px';
			currLeft.classList.add('slider_inactive');
			currRight.classList.remove('slider_inactive');
		}
	}

}
function slideRight(e) {
	let currRight = e.currentTarget,
		currLeft = e.currentTarget.previousElementSibling.previousElementSibling,
		currWrapper = e.currentTarget.previousElementSibling,
		currItems = currWrapper.firstElementChild,
		currItemWidth = currItems.firstElementChild.getBoundingClientRect().width,
		rightWrapper = currWrapper.getBoundingClientRect().right,
		rightLastItem = currItems.lastElementChild.getBoundingClientRect().right;
	
	if(!(rightLastItem - (20 + currItemWidth) <= rightWrapper)){
		if(currLeft.classList.contains('slider_inactive')) currLeft.classList.remove('slider_inactive');
		currItems.style.marginLeft = parseFloat(currItems.style.marginLeft.replace(/px/gm, '')) - (20 + currItemWidth) + 'px';
	} else {
		if(!(currRight.classList.contains('slider_inactive'))) {
			currItems.style.marginLeft = parseFloat(currItems.style.marginLeft.replace(/px/gm, '')) - (20 + currItemWidth) + 'px';
			currRight.classList.add('slider_inactive');
			currLeft.classList.remove('slider_inactive');
		}
	}
}