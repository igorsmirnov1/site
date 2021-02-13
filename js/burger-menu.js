'use strict';

let burger = document.querySelector('.burger');
let burgerMenu = document.querySelector('.burger-menu');
let overlay = document.querySelector('.overlay');

burger.addEventListener('click', ()=>{
	toggleMenu(burgerMenu);
});
overlay.addEventListener('click', ()=>{
	closeMenu(burgerMenu);
});

function toggleMenu(menu) {
	if(menu.classList.contains('burger-menu_opened')) {
		closeMenu(menu);
	}
	else {
		openMenu(menu);
	}
}

function openMenu(menu) {
	menu.classList.add('burger-menu_opened');
	
	burger.firstElementChild.style.cssText = 'transform: translateY(0px);';
	burger.lastElementChild.style.cssText = 'transform: translateY(0px);';
	overlay.style.zIndex = '4';
	overlay.style.opacity = '.7';
	

	setTimeout( () => {
		burger.children[1].style.display = 'none';
		burger.firstElementChild.style.cssText = 'transform: rotate(45deg) translateY(0px);';
		burger.lastElementChild.style.cssText = 'transform: rotate(-45deg) translateY(0px);';
	},150);
	
	document.body.style.overflowY = 'hidden';
}
function closeMenu(menu) {
	overlay.classList.add('overlay_closed');
	menu.classList.remove('burger-menu_opened');
	
	burger.firstElementChild.style.cssText = 'transform: rotate(0deg);';
	burger.lastElementChild.style.cssText = 'transform: rotate(0deg);';
	overlay.style.opacity = 0;
	
	setTimeout( () => {
		burger.children[1].style.display = 'block';
		burger.firstElementChild.style.cssText = 'transform: rotate(0deg) translateY(-6px);';
		burger.lastElementChild.style.cssText = 'transform: rotate(0deg) translateY(6px);';
		overlay.style.zIndex = '-1';
	},150);
	
	document.body.removeAttribute('style');
}