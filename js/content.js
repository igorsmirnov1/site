'use strict';

let showAllModulesBtn = document.querySelector('button.show-all-modules');
let showAllBtns = document.querySelectorAll('button.show-all');
let contentFulls = document.querySelectorAll('.content__full');
let contentModuleFulls = document.querySelectorAll('.content-module__full');

document.addEventListener("DOMContentLoaded", () => {
	
	//Reinsurance in case of disabled js
	contentFulls.forEach( el => {
		el.style.height = 0;
	});
	contentModuleFulls.forEach( el => {
		el.style.display = 'none';
	});
	//Adding click event for all buttons
	showAllBtns.forEach( el => {
		el.addEventListener('click', toggleAll);
	});
	showAllModulesBtn.addEventListener('click', showAllModules);
	
});

function toggleAll(e) {
	let currentBtn = e.currentTarget;
	let currentContent = currentBtn.previousElementSibling;
	let currentContentFull = currentContent.lastElementChild;
	
	if(currentContent.hasAttribute('data-opened','')) {
		currentContentFull.style.height = 0;
		currentContent.removeAttribute('data-opened');
		currentBtn.textContent = 'Показать всё...';
	} else {
		currentContentFull.style.height = currentContentFull.firstElementChild.getBoundingClientRect().height + 'px';
		currentContent.setAttribute('data-opened','');
		currentBtn.textContent = 'Скрыть обратно';
	}
}

function showAllModules(e) {
	let currentBtn = e.currentTarget;
	let currentContentModuleFull = currentBtn.previousElementSibling.lastElementChild;
	let currentLastModule = currentBtn.previousElementSibling.previousElementSibling;
	
	if(currentLastModule.classList.contains('module_last')) currentLastModule.classList.remove('module_last');
	currentContentModuleFull.style.display = 'block';
	currentBtn.style.display = 'none';
}